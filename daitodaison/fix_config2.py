content = open(r'C:\Users\watan\Documents\daitodaison\daitodaison\astro.config.mjs', encoding='utf-8').read()
old = "case 'cloudflare': return cloudflare({ platformProxy: { enabled: true }, imageService: 'passthrough' });"
new = "case 'cloudflare': return cloudflare({});"
if old in content:
    content = content.replace(old, new)
    open(r'C:\Users\watan\Documents\daitodaison\daitodaison\astro.config.mjs', 'w', encoding='utf-8', newline='').write(content)
    print('OK')
else:
    print('WARNING')