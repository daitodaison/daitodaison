# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = '      <div class="hidden lg:flex lg:flex-col w-52 shrink-0 gap-4">'
new = '      <div class="hidden lg:flex lg:flex-col w-52 shrink-0 gap-4" style="align-self: start;">'

if old in content:
    content = content.replace(old, new)
    print("OK")
else:
    print("WARNING")

with open(path, "w", encoding="utf-8", newline="") as f:
    f.write(content)
