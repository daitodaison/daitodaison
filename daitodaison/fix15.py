# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

prof_start = 774
if "hidden lg:block rounded-2xl" not in lines[775]:
    print("ERROR:", repr(lines[775]))
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
remaining = lines[:prof_start] + lines[prof_end:]

insert_at = 772
final_lines = remaining[:insert_at] + prof_block + ["\n"] + remaining[insert_at:]

with open(path, "w", encoding="utf-8", newline="") as f:
    f.writelines(final_lines)
print("DONE")