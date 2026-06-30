import re

path = "daitodaison/src/pages/[lang]/blog/microcms.astro"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = '              <h2 class="text-sm font-bold text-zinc-900 dark:text-white line-clamp-3 group-hover:text-blue-600 transition-colors leading-snug">\n                {post.title}\n              </h2>\n            </div>'

new = '              <h2 class="text-sm font-bold text-zinc-900 dark:text-white line-clamp-3 group-hover:text-blue-600 transition-colors leading-snug">\n                {post.title}\n              </h2>\n              <p class="mt-2 text-[10px] text-zinc-400 dark:text-zinc-500">\n                \U0001f550 {new Date(post.updatedAt).toLocaleDateString(\'ja-JP\', { year: \'numeric\', month: \'short\', day: \'numeric\' })}\n              </p>\n            </div>'

if old in content:
    content = content.replace(old, new)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("OK: updated")
else:
    print("NG: string not found")
