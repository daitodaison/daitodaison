# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

# プロフカードの範囲（783〜854行目、0-indexed: 782〜853）
prof_start = 782
prof_end = 854

# 確認
if 'hidden lg:block rounded-2xl' not in lines[prof_start+1]:
    print(f"ERROR: prof_start wrong: {repr(lines[prof_start+1])}")
    exit(1)

prof_block = lines[prof_start:prof_end]

# プロフカードを元の位置から削除
remaining = lines[:prof_start] + lines[prof_end:]

# asideの直後（<div class="flex flex-col gap-4">の前）に挿入
insert_at = None
for i, line in enumerate(remaining):
    if 'hidden lg:block w-52 shrink-0" style="position: sticky' in line:
        # 次の行が<div
        insert_at = i + 1
        break

if insert_at is None:
    print("ERROR: insert point not found")
    exit(1)

print(f"Inserting prof card at line {insert_at+1}")

final_lines = remaining[:insert_at] + prof_block + remaining[insert_at:]

with open(path, "w", encoding="utf-8", newline="") as f:
    f.writelines(final_lines)

print("DONE")
