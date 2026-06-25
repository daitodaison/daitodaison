# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# プロフカードとasideを1つのdivで囲む
# プロフカードの直前（784行目の<divの前）にラッパー開始を追加
old = '        <div\n          class="hidden lg:block rounded-2xl overflow-hidden border'
new = '      <div class="hidden lg:flex lg:flex-col w-52 shrink-0 gap-3" style="align-self: start;">\n        <div\n          class="rounded-2xl overflow-hidden border'

if old in content:
    content = content.replace(old, new, 1)
    print("OK1")
else:
    print("WARNING1")

# asideの閉じタグの後にラッパー閉じタグを追加
# asideの最後の</aside>を探して</div>を追加
old2 = '        </aside>\n      </div>\n    </div>\n  </div>\n</BaseLayout>'
new2 = '        </aside>\n      </div>\n      </div>\n    </div>\n  </div>\n</BaseLayout>'

if old2 in content:
    content = content.replace(old2, new2, 1)
    print("OK2")
else:
    print("WARNING2")
    # デバッグ
    idx = content.rfind('</aside>')
    print(repr(content[idx:idx+100]))

with open(path, "w", encoding="utf-8", newline="") as f:
    f.write(content)