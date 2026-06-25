# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = '''        </aside>
        <!-- TOC + banners: sticky -->
        <aside style="position: sticky; top: 9rem; align-self: start;">'''

new = '''        <!-- TOC + banners: sticky -->
        <aside style="position: sticky; top: 9rem; align-self: start;">'''

if old in content:
    content = content.replace(old, new)
    print("OK")
else:
    print("WARNING: not found")

with open(path, "w", encoding="utf-8", newline="") as f:
    f.write(content)
