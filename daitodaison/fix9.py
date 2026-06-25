# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# display:contentsをやめて、正しい右カラムに変更
old = '      <div style="display: contents;">\n        <!-- Profile card: flows with page (non-sticky) -->\n        <div\n          class="hidden lg:block rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 w-52 shrink-0"\n          style="align-self: start;"'

new = '      <div class="hidden lg:flex lg:flex-col w-52 shrink-0 gap-4">\n        <!-- Profile card: flows with page (non-sticky) -->\n        <div\n          class="rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 shrink-0"'

if old in content:
    content = content.replace(old, new)
    print("OK: outer div fixed")
else:
    print("WARNING: not found")
    # デバッグ用
    idx = content.find('display: contents')
    print(f"display:contents at char {idx}")
    print(repr(content[idx-50:idx+200]))

with open(path, "w", encoding="utf-8", newline="") as f:
    f.write(content)
