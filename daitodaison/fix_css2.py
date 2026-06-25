content = open(r'C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro', encoding='utf-8').read()
old = '<div class="hidden lg:flex lg:flex-col w-52 shrink-0 gap-3">'
new = '<div class="hidden lg:flex lg:flex-col w-52 shrink-0 gap-3" style="align-self: start; overflow: visible;">'
if old in content:
    content = content.replace(old, new, 1)
    open(r'C:\Users\watan\Documents\daitodaison\daitodaison\src\pages\[lang]\blog\microcms\[id].astro', 'w', encoding='utf-8', newline='').write(content)
    print('OK')
else:
    print('WARNING')