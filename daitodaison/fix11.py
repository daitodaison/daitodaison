# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# 外側divをdisplay:contentsに（透明ラッパー）
old = '      <div class="hidden lg:flex lg:flex-col w-52 shrink-0 gap-4" style="align-self: start;">'
new = '      <div class="hidden lg:contents">'

if old in content:
    content = content.replace(old, new)
    print("OK1")
else:
    print("WARNING1")

# プロフカードを独立した幅付き要素に（align-self:startで上端固定）
old2 = '        <div\n          class="rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 shrink-0"'
new2 = '        <div\n          class="hidden lg:block rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 w-52 shrink-0"\n          style="align-self: start;"'

if old2 in content:
    content = content.replace(old2, new2)
    print("OK2")
else:
    print("WARNING2")

with open(path, "w", encoding="utf-8", newline="") as f:
    f.write(content)
