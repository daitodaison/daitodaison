# -*- coding: utf-8 -*-
import sys

path = sys.argv[1]

with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

PROFILE_START = 297
PROFILE_END = 369

profile_block = lines[PROFILE_START:PROFILE_END]

first_line = profile_block[1]
last_line = profile_block[-2]

if "rounded-2xl overflow-hidden border" not in first_line:
    print("ERROR: start line mismatch:")
    print(repr(first_line))
    sys.exit(1)

if "</div>" not in last_line:
    print("ERROR: end line mismatch:")
    print(repr(last_line))
    sys.exit(1)

remaining_lines = lines[:PROFILE_START] + lines[PROFILE_END:]

insert_after_idx = None
for i, line in enumerate(remaining_lines):
    if "hidden lg:block w-52 shrink-0" in line:
        for j in range(i, min(i + 10, len(remaining_lines))):
            if remaining_lines[j].strip() == ">":
                insert_after_idx = j
                break
        break

if insert_after_idx is None:
    print("ERROR: could not find right sidebar insertion point")
    sys.exit(1)

wrapped_block = ["        <!-- Profile card (moved from left sidebar) -->\n"]
wrapped_block += profile_block
wrapped_block.append("\n")

new_lines = (
    remaining_lines[: insert_after_idx + 1]
    + wrapped_block
    + remaining_lines[insert_after_idx + 1 :]
)

with open(path, "w", encoding="utf-8", newline="") as f:
    f.writelines(new_lines)

print("OK: profile card moved.")
