# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

# 右カラムの開始行と終了行を探す
start = None
end = None
for i, line in enumerate(lines):
    if 'hidden lg:flex lg:flex-col w-52 shrink-0 gap-4' in line:
        start = i
    if start and i > start:
        # 外側divの閉じタグを探す（</div>がインデント6スペース）
        if line.rstrip() == '      </div>' and i > start + 10:
            end = i
            break

if start is None or end is None:
    print(f"ERROR: start={start} end={end}")
    exit(1)

print(f"Right column: lines {start+1} to {end+1}")

# プロフカードブロックと目次+バナーブロックを取り出す
block = lines[start:end+1]
block_text = ''.join(block)
print(block_text[:200])
