content = open(r"C:\Users\watan\Documents\daitodaison\daitodaison\astro.config.mjs", encoding="utf-8").read()

old = "case 'cloudflare': return cloudflare({});"
new = "case 'cloudflare': return undefined;"

count = content.count(old)
print("Found occurrences:", count)

if count == 1:
    content = content.replace(old, new)
    open(r"C:\Users\watan\Documents\daitodaison\daitodaison\astro.config.mjs", "w", encoding="utf-8", newline="").write(content)
    print("OK")
else:
    print("WARNING: not exactly 1 match, aborting to avoid wrong edit")