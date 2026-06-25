# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# 外側divをflex-col縦並びの右カラムに戻す
old = '      <div class="hidden lg:contents">'
new = '      <div class="hidden lg:flex lg:flex-col w-52 shrink-0 gap-4" style="align-self: start;">'

if old in content:
    content = content.replace(old, new)
    print("OK: outer div restored")
else:
    print("WARNING: outer div not found")

# プロフカードのw-52とalign-self:startを削除（外側divが制御するので不要）
old2 = '          class="rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 w-52 shrink-0" style="align-self: start;"'
new2 = '          class="rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 shrink-0"'

if old2 in content:
    content = content.replace(old2, new2)
    print("OK: profile div cleaned")
else:
    print("WARNING: profile div not found")

# asideのwidthとalign-selfも削除（外側divが制御するので不要）
old3 = '        <aside style="position: sticky; top: 9rem; align-self: start; width: 13rem;">'
new3 = '        <aside style="position: sticky; top: 9rem;">'

if old3 in content:
    content = content.replace(old3, new3)
    print("OK: aside cleaned")
else:
    print("WARNING: aside not found")

with open(path, "w", encoding="utf-8", newline="") as f:
    f.write(content)
