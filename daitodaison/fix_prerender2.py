content = open(r"src\pages\docs\index.astro", encoding="utf-8").read()
old = "export const prerender = false;\r\n"
if old in content:
    content = content.replace(old, "", 1)
    open(r"src\pages\docs\index.astro", "w", encoding="utf-8", newline="").write(content)
    print("OK: docs/index.astro")
else:
    print("WARNING: pattern not found in docs/index.astro")