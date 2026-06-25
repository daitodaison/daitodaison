# -*- coding: utf-8 -*-
path = r"C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = '        </aside>\n      </div>\n    </div>\n\n    <style>'
new = '        </aside>\n      </div>\n      </div>\n    </div>\n\n    <style>'

if old in content:
    content = content.replace(old, new, 1)
    print("OK")
else:
    print("WARNING")
    idx = content.rfind('</aside>')
    print(repr(content[idx:idx+150]))

with open(path, "w", encoding="utf-8", newline="") as f:
    f.write(content)