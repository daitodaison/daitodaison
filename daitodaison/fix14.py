# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

prof_start = 783  # 0-indexed: 784行目の<div
if "hidden lg:block rounded-2xl" not in lines[784]:
    print("ERROR:", repr(lines[784]))
    exit(1)

depth = 0
prof_end = None
for i in range(prof_start, len(lines)):
    s = lines[i].strip()
    if s.startswith("<div"):
        depth += 1
    if s == "</div>":
        depth -= 1
        if depth == 0:
            prof_end = i + 1
            break

print(f"Prof: {prof_start+1} to {prof_end}")
prof_block = lines[prof_start:prof_end]

outer_start = 781  # <div class="hidden lg:contents">の行(0-indexed)
remaining = lines[:outer_start] + lines[prof_end:]

insert_at = None
for i, line in enumerate(remaining):
    if 'hidden lg:block w-52 shrink-0" style="position: sticky' in line:
        insert_at = i + 1
        break

if insert_at is None:
    print("ERROR: insert point not found")
    exit(1)

print(f"Insert at: {insert_at+1}")
final_lines = remaining[:insert_at] + prof_block + remaining[insert_at:]

with open(path, "w", encoding="utf-8", newline="") as f:
    f.writelines(final_lines)
print("DONE")