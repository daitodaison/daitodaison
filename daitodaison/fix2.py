# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = '''      <div class="hidden lg:flex lg:flex-col w-52 shrink-0 gap-4" style="align-self: start;">
        <!-- Profile card: flows with page (non-sticky) -->
        <aside
        <div'''

new = '''      <div class="hidden lg:flex lg:flex-col w-52 shrink-0 gap-4" style="align-self: start;">
        <!-- Profile card: flows with page (non-sticky) -->
        <div'''

if old in content:
    content = content.replace(old, new)
    print("OK")
else:
    print("WARNING: not found")

with open(path, "w", encoding="utf-8", newline="") as f:
    f.write(content)
