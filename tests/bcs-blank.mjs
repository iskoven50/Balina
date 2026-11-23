import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
const match=html.match(/const bcsScore=([^;]+);/);assert.ok(match);
for(const [raw,expected] of [[null,null],['',null],['  ',null],['4.5',4.5],[4.5,4.5],[undefined,undefined]]){
 const s={bcsScore:raw};const actual=vm.runInNewContext('(()=>{const s=arg;return '+match[1]+'})()', {arg:s});
 assert.equal(actual,expected===undefined?null:expected);
}
console.log('6/6 blank BCS parsing checks passed');
