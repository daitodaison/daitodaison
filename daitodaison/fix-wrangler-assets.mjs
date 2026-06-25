import { readFileSync, writeFileSync, existsSync } from 'fs';
const files = [
  'dist/server/.prerender/wrangler.json',
  'dist/server/wrangler.json'
];
for (const path of files) {
  if (existsSync(path)) {
    const content = JSON.parse(readFileSync(path, 'utf-8'));
    let changed = false;
    if (content.assets?.binding === 'ASSETS') {
      content.assets.binding = 'STATIC_ASSETS';
      changed = true;
    }
    const str = JSON.stringify(content, null, 2);
    if (!str.includes('"ASSETS"')) {
      writeFileSync(path, str);
      console.log('Fixed:', path);
    }
  }
}