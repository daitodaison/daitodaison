import xml.etree.ElementTree as ET
from datetime import datetime, timezone
import urllib.request
import urllib.error
import json
import time
import os
import re

SERVICE_DOMAIN = "daitodaison"
API_KEY = os.environ.get("MICROCMS_API_KEY", "")
XML_PATH = r"C:\Users\watan\Documents\daitodaison\dysonblog_fixed.xml"
DRY_RUN = False

if not API_KEY:
    print("ERROR: env MICROCMS_API_KEY not set")
    exit(1)

def normalize(s):
    if not s:
        return ""
    s = s.strip()
    s = re.sub(r"\s+", "", s)
    return s

# === WP XMLからタイトル→更新日マップを構築 ===
tree = ET.parse(XML_PATH)
root = tree.getroot()
ns = {"wp": "http://wordpress.org/export/1.2/"}
channel = root.find("channel")
items = channel.findall("item")

wp_dates = {}
wp_titles_raw = {}
for item in items:
    if item.findtext("wp:post_type", namespaces=ns) == "post" \
       and item.findtext("wp:status", namespaces=ns) == "publish":
        title = item.findtext("title")
        modified = item.findtext("wp:post_modified_gmt", namespaces=ns)
        if title and modified:
            dt = datetime.strptime(modified, "%Y-%m-%d %H:%M:%S").replace(tzinfo=timezone.utc)
            key = normalize(title)
            wp_dates[key] = dt.isoformat()
            wp_titles_raw[key] = title

print(f"WP posts: {len(wp_dates)}")

# === microCMS全記事取得 (title込み) ===
base_url = f"https://{SERVICE_DOMAIN}.microcms.io/api/v1/blogs"
headers = {"X-MICROCMS-API-KEY": API_KEY}

all_posts = []
offset = 0
while True:
    url = f"{base_url}?limit=100&offset={offset}&fields=id,title,updatedAt"
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as res:
        data = json.loads(res.read())
    all_posts.extend(data["contents"])
    if len(all_posts) >= data["totalCount"]:
        break
    offset += 100
    time.sleep(0.3)

print(f"microCMS posts: {len(all_posts)}")

# === マッチして更新 ===
matched = 0
updated = 0
not_found = 0
not_found_titles = []

for post in all_posts:
    post_id = post["id"]
    micro_title = post.get("title", "")
    key = normalize(micro_title)

    if key not in wp_dates:
        not_found += 1
        not_found_titles.append(micro_title)
        continue
    matched += 1
    wp_date = wp_dates[key]
    micro_date = post.get("updatedAt", "")

    if DRY_RUN:
        print(f"[DRY] {post_id} | {micro_title[:25]}: {micro_date} -> {wp_date}")
        updated += 1
        continue

    patch_url = f"{base_url}/{post_id}"
    body = json.dumps({"updatedAt": wp_date}).encode("utf-8")
    req = urllib.request.Request(
        patch_url,
        data=body,
        headers={**headers, "Content-Type": "application/json"},
        method="PATCH"
    )
    try:
        with urllib.request.urlopen(req) as res:
            updated += 1
            print(f"OK {post_id}: -> {wp_date}")
    except urllib.error.HTTPError as e:
        print(f"ERR {post_id}: {e.code} {e.read().decode()}")
    time.sleep(0.2)

print(f"\nDone: matched={matched}, updated={updated}, not_found={not_found}")
if DRY_RUN:
    print("DRY_RUN=True, no actual update performed")

