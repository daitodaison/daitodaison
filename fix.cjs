const fs = require('fs');
const f = 'src/pages/[lang]/blog/microcms/[id].astro';
let c = fs.readFileSync(f, 'utf8');
const old = '    if (sel.trim().startsWith(' + [char]39 + '@' + [char]39 + ')) return m;\n    const scoped';
const nw = '    if (sel.trim().startsWith(' + [char]39 + '@' + [char]39 + ')) return m;\n    if (sel.includes(' + [char]39 + '.dark' + [char]39 + ') || sel.includes(' + [char]39 + ':root' + [char]39 + ') || sel.includes(' + [char]39 + 'body' + [char]39 + ')) return m;\n    const scoped';
if (c.includes(old)) { c = c.replace(old, nw); fs.writeFileSync(f, c, 'utf8'); console.log('Done'); } else { console.log('Not found'); }
