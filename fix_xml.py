import re

XML_PATH = r"C:\Users\watan\Downloads\NotebookLM\dysonblog.WordPress.2026-06-29 (1).xml"
FIXED_PATH = r"C:\Users\watan\Documents\daitodaison\dysonblog_fixed.xml"

with open(XML_PATH, "r", encoding="utf-8", errors="replace") as f:
    content = f.read()

# <wp:meta_value> が CDATA でなく生HTMLを含むケースを検出し、
# 該当する postmeta ブロックごと除去する（日付抽出には不要なメタ情報のため）
pattern = re.compile(
    r"<wp:postmeta>\s*<wp:meta_key><!\[CDATA\[.*?\]\]></wp:meta_key>\s*"
    r"<wp:meta_value>(?:(?!</wp:postmeta>).)*?</wp:postmeta>",
    re.DOTALL
)

fixed = pattern.sub("", content)

with open(FIXED_PATH, "w", encoding="utf-8") as f:
    f.write(fixed)

print(f"Fixed file written: {FIXED_PATH}")
print(f"Original size: {len(content)}, Fixed size: {len(fixed)}")

