content = open(r"src\pages\[lang]\checkout.astro", encoding="utf-8").read()
old = "export const prerender = false;\r\n\r\n"
if old in content:
    content = content.replace(old, "", 1)
    open(r"src\pages\[lang]\checkout.astro", "w", encoding="utf-8", newline="").write(content)
    print("OK: checkout.astro")
else:
    print("WARNING: pattern not found in checkout.astro")