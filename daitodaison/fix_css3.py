content = open(r'C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro', encoding='utf-8').read()
old = 'style="max-height: calc(100vh - 9rem); overflow: hidden;"'
new = 'style="max-height: calc(100vh - 9rem); overflow-y: auto; overflow-x: hidden;"'
count = content.count(old)
print(f"Found: {count}")
content = content.replace(old, new)
open(r'C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro', 'w', encoding='utf-8', newline='').write(content)
print('OK')