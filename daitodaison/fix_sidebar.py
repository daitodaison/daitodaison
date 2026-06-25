# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# asideタグをflex列コンテナに変更し、プロフと目次ブロックを並べる
old = '''      <aside
        class="hidden lg:block w-52 shrink-0 flex flex-col gap-4"
        style="align-self: start;"
      >
        <!-- Profile card (non-sticky) -->'''

new = '''      <div class="hidden lg:flex lg:flex-col w-52 shrink-0 gap-4" style="align-self: start;">
        <!-- Profile card: flows with page (non-sticky) -->
        <aside'''

if old in content:
    content = content.replace(old, new)
    print("OK: aside open replaced")
else:
    print("WARNING: aside open not found")
    exit(1)

# 目次ブロックの開始divを、別のstickyなasideに変更
old2 = '''        <div
          class="flex flex-col gap-4"
          style="position: sticky; top: 9rem; max-height: calc(100vh - 9rem); overflow: hidden; align-self: start;"
        >
          <div
            class="sticky top-28 flex flex-col gap-4"
            style="max-height: calc(100vh - 7rem); overflow: hidden;"
          >'''

new2 = '''        </aside>
        <!-- TOC + banners: sticky -->
        <aside style="position: sticky; top: 9rem; align-self: start;">
          <div
            class="flex flex-col gap-4"
            style="max-height: calc(100vh - 9rem); overflow: hidden;"
          >
          <div
            class="flex flex-col gap-4"
            style="max-height: calc(100vh - 7rem); overflow: hidden;"
          >'''

if old2 in content:
    content = content.replace(old2, new2)
    print("OK: sticky block replaced")
else:
    print("WARNING: sticky block not found")
    exit(1)

# 外側のasideの閉じタグを、divの閉じタグに変更
# まず元の </aside> を探して </aside></div> に変える
# 右サイドバーのasideは1つだけなので末尾付近を探す
idx = content.rfind("      </aside>")
if idx == -1:
    print("WARNING: closing aside not found")
    exit(1)

content = content[:idx] + "          </div>\n        </aside>\n      </div>" + content[idx + len("      </aside>"):]
print("OK: closing tag fixed")

with open(path, "w", encoding="utf-8", newline="") as f:
    f.write(content)

print("DONE")
