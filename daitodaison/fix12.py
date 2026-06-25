# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

# プロフカードの範囲を探す
prof_start = None
prof_end = None
for i, line in enumerate(lines):
    if 'hidden lg:block rounded-2xl overflow-hidden border' in line:
        prof_start = i - 1  # <div の行
        break

if prof_start is None:
    print("ERROR: prof start not found")
    exit(1)

# プロフカードの終了（</div>が8スペースインデント）
depth = 0
for i in range(prof_start, len(lines)):
    stripped = lines[i].strip()
    if stripped.startswith('<div') or stripped.startswith('<aside'):
        depth += 1
    if stripped == '</div>' or stripped == '</aside>':
        depth -= 1
        if depth == 0:
            prof_end = i
            break

print(f"Prof card: lines {prof_start+1} to {prof_end+1}")

# asideの開始行を探す
aside_start = None
for i, line in enumerate(lines):
    if 'hidden lg:block w-52 shrink-0" style="position: sticky' in line:
        aside_start = i - 1
        break

print(f"Aside start: line {aside_start+1}")

# プロフカードブロックを取り出す
prof_block = lines[prof_start:prof_end+1]

# プロフカードを元の位置から削除
new_lines = lines[:prof_start] + lines[prof_end+1:aside_start+2]

# asideの最初のdivの直後にプロフカードを挿入
# aside開始 -> <div class="flex flex-col gap-4"> の直後
insert_at = None
for i in range(aside_start, min(aside_start+10, len(new_lines))):
    if 'flex flex-col gap-4' in new_lines[i]:
        insert_at = i + 1
        break

if insert_at is None:
    print("ERROR: insert point not found")
    exit(1)

print(f"Insert at: line {insert_at+1}")

final_lines = new_lines[:insert_at] + prof_block + new_lines[insert_at:]

with open(path, "w", encoding="utf-8", newline="") as f:
    f.writelines(final_lines)

print("DONE")
