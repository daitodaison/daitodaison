content = open(r'C:\Users\watan\Documents\daitodaison\daitodaison\astro.config.mjs', encoding='utf-8').read()
old = "case 'cloudflare': return cloudflare({ platformProxy: { enabled: true } });"
new = "case 'cloudflare': return cloudflare({ platformProxy: { enabled: true }, assets: { binding: 'STATIC_ASSETS' } });"
if old in content:
    content = content.replace(old, new)
    open(r'C:\Users\watan\Documents\daitodaison\daitodaison\astro.config.mjs', 'w', encoding='utf-8', newline='').write(content)
    print('OK')
else:
    print('WARNING')