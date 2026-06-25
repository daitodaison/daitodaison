import re

# checkout.astro
path1 = r"src\pages\[lang]\checkout.astro"
content = open(path1, encoding="utf-8").read()
new_content, count1 = re.subn(r"export const prerender = false;\r?\n", "", content, count=1)
if count1 == 1:
    open(path1, "w", encoding="utf-8", newline="").write(new_content)
    print("OK: checkout.astro")
else:
    print("WARNING: checkout.astro not changed, count =", count1)

# docs/index.astro
path2 = r"src\pages\docs\index.astro"
content2 = open(path2, encoding="utf-8").read()
new_content2, count2 = re.subn(r"export const prerender = false;\r?\n", "", content2, count=1)
if count2 == 1:
    open(path2, "w", encoding="utf-8", newline="").write(new_content2)
    print("OK: docs/index.astro")
else:
    print("WARNING: docs/index.astro not changed, count =", count2)