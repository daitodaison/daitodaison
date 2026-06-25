import { readFileSync, writeFileSync, existsSync } from 'fs';

const path = 'dist/server/.prerender/wrangler.json';
if (existsSync(path)) {
  const content = JSON.parse(readFileSync(path, 'utf-8'));
  if (content.assets && content.assets.binding === 'ASSETS') {
    content.assets.binding = 'STATIC_ASSETS';
    writeFileSync(path, JSON.stringify(content, null, 2));
    console.log('Fixed ASSETS binding in', path);
  }
}