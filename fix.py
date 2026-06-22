import glob
files = glob.glob('src/pages/[lang]/blog/microcms/[id].astro')
if not files:
    print('File not found')
else:
    f = files[0]
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    old = "    if (sel.trim().startsWith('@')) return m;\n    const scoped"
    new = "    if (sel.trim().startsWith('@')) return m;\n    if (sel.includes('.dark') || sel.includes(':root') || sel.includes('body')) return m;\n    const scoped"
    if old in c:
        c = c.replace(old, new)
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(c)
        print('Done: ' + f)
    else:
        print('Pattern not found')
