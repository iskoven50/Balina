import fs from 'node:fs';
import assert from 'node:assert/strict';
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.match(html,/winterMonth=\[10,11,0,1,2,3\]\.includes\(win\.start\.getMonth\(\)\)/);
assert.match(html,/if\(winterMonth && reg==='summer'\)/);
assert.match(html,/Appen er indstillet til døgnfold/);
assert.match(html,/confidence=Math\.min\(confidence,2\)/);
console.log('4 static guards for winter regime warning passed');
