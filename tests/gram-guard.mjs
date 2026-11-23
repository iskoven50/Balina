import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
const source=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const start=source.indexOf('function isExactClosed50g(rec){');const end=source.indexOf('\nfunction shortReason',start);
const ctx={};vm.createContext(ctx);vm.runInContext(source.slice(start,end),ctx);
const cases=[['Vandtæt 50 g',50],['Vandtæt 100 g',100],['Vandtæt 150 g',150],['Vandtæt 200 g',200],['Vandtæt 250 g',250],['Vandtæt 400 g',400]];
for(const [s,n] of cases){assert.equal(vm.runInContext(`needFromGoldChoice(${JSON.stringify(s)}).target`,ctx),n);console.log('✓',s)}
assert.equal(vm.runInContext("needFromGoldChoice('Uventet output').kind",ctx),'unknown');console.log('✓ Ukendt output bliver ikke til 50 g');

// Guard all direct 50 g branches against accidental matches on 150/250 g.
for(const [rec,expected] of [['Amigo 50 g med halvhøj hals',true],['Vandtæt 150 g',false],['Vandtæt 250 g',false],['Vandtæt 100 g',false],['Ventilerende 0 g-hybrid',false]]){
 assert.equal(vm.runInContext(`isExactClosed50g(${JSON.stringify(rec)})`,ctx),expected,rec);
 console.log('✓ Eksakt 50 g:',rec);
}
