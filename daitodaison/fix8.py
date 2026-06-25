# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# 外側divをdisplay:contentsに（透明ラッパー、幅指定なし）
old = '      <div class="hidden lg:flex lg:flex-col w-52 shrink-0 gap-4">'
new = '      <div style="display: contents;">'

if old in content:
    content = content.replace(old, new)
    print("OK: outer div -> contents")
else:
    print("WARNING: outer div not found")

# プロフカードにw-52とalign-self:startを付与
old2 = '        <div\n          class="rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 shrink-0"'
new2 = '        <div\n          class="hidden lg:block rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 w-52 shrink-0"\n          style="align-self: start;"'

if old2 in content:
    content = content.replace(old2, new2)
    print("OK: profile card sized")
else:
    print("WARNING: profile card not found")

# asideにalign-self:startを付与
old3 = '        <aside style="position: sticky; top: 9rem;">'
new3 = '        <aside class="hidden lg:block w-52 shrink-0" style="position: sticky; top: 9rem; align-self: start;">'

if old3 in content:
    content = content.replace(old3, new3)
    print("OK: aside updated")
else:
    print("WARNING: aside not found")

with open(path, "w", encoding="utf-8", newline="") as f:
    f.write(content)
