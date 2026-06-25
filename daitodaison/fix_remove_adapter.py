content = open(r"C:\Users\watan\Documents\daitodaison\daitodaison\astro.config.mjs", encoding="utf-8").read()

old = """function getAdapter() {
  const adapter = process.env.ADAPTER || 'node';
  switch (adapter) {
    case 'vercel': return vercel({ webAnalytics: { enabled: true } });
    case 'netlify': return netlify(); case 'cloudflare': return cloudflare({});
    case 'node': default: return node({ mode: 'standalone' });
  }
}"""

new = """function getAdapter() {
  const adapter = process.env.ADAPTER || 'node';
  switch (adapter) {
    case 'vercel': return vercel({ webAnalytics: { enabled: true } });
    case 'netlify': return netlify();
    case 'cloudflare': return undefined;
    case 'node': default: return node({ mode: 'standalone' });
  }
}"""

if old in content:
    content = content.replace(old, new)
    print("MATCHED OLD BLOCK - OK")
else:
    print("WARNING: exact block not found, will show current content around getAdapter")
    idx = content.find("function getAdapter")
    print(content[idx:idx+500])

open(r"C:\Users\watan\Documents\daitodaison\daitodaison\astro.config.mjs", "w", encoding="utf-8", newline="").write(content)