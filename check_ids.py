import os, json, urllib.request

SERVICE_DOMAIN = "daitodaison"
API_KEY = os.environ.get("MICROCMS_API_KEY", "")
url = f"https://{SERVICE_DOMAIN}.microcms.io/api/v1/blogs?limit=10&fields=id,title"
req = urllib.request.Request(url, headers={"X-MICROCMS-API-KEY": API_KEY})
with urllib.request.urlopen(req) as res:
    data = json.loads(res.read())
for c in data["contents"]:
    print(c["id"], "|", c["title"][:30])
