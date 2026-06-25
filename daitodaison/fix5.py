# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = '        <div\n          class="rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 shrink-0"'
new = '        <div\n          class="rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 w-52 shrink-0" style="align-self: start;"'

if old in content:
    content = content.replace(old, new)
    print("OK: profile div sized")
else:
    print("WARNING: profile div not found")

old2 = '        <aside style="position: sticky; top: 9rem; align-self: start;">'
new2 = '        <aside style="position: sticky; top: 9rem; align-self: start; width: 13rem;">'

if old2 in content:
    content = content.replace(old2, new2)
    print("OK: aside sized")
else:
    print("WARNING: aside not found")

with open(path, "w", encoding="utf-8", newline="") as f:
    f.write(content)
