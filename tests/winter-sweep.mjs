import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
let script=html.match(/<script>([\s\S]*?)<\/script>/)[1].replace(/try\{ init\(\); \}catch\(e\)\{[\s\S]*?\n\}/,'');
const elements=new Map(),storage=new Map();
const el=id=>({id,value:'',textContent:'',innerHTML:'',style:{},classList:{add(){},remove(){}},querySelector(){return null}});
const document={getElementById(id){if(!elements.has(id))elements.set(id,el(id));return elements.get(id)},querySelector(){return null},addEventListener(){},createElement(){return el('created')}};
const context={console,document,localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,String(v)),removeItem:k=>storage.delete(k)},location:{hash:'',reload(){}},window:{addEventListener(){}},alert(){},confirm(){return true},prompt(){return null},fetch:async()=>{throw Error('no live fetch')},URL,URLSearchParams,Blob,FileReader:class{}};
vm.createContext(context);vm.runInContext(script,context);vm.runInContext('migrateV920();migrateV921();migrateV964()',context);
let cases=0,unmatched=[],counts={};
for(const nightTemp of [-6,-3,0,3,6])for(const dayTemp of [0,3,6,9])for(const wet of [false,true])for(const windy of [false,true]){
  context.spec={nightTemp,dayTemp,wet,windy};
  const result=vm.runInContext(`(()=>{const s=getState();Object.assign(s,{regime:'winter',shelter:'none',bcs:'under',coat:'normal',coatSeason:'transition',rainSensitivity:'sensitive',coldSensitivity:'sensitive',windSensitivity:'sensitive',clipType:'unclipped',stableClimate:'balina',rugInBox:'same',horseWetness:'dry',extraChange:'no'});setState(s);const base=new Date('2026-11-23T12:00:00');const rows=Array.from({length:24},(_,i)=>{const d=new Date(base.getTime()+i*3600000),h=d.getHours(),night=h>=18||h<8;return {date:d,temp:night?spec.nightTemp:spec.dayTemp,feels:(night?spec.nightTemp:spec.dayTemp)-(spec.windy?4:1),rh:night?90:70,dew:(night?spec.nightTemp:spec.dayTemp)-2,p:spec.wet&&!night?0.7:0,rain:spec.wet&&!night?0.7:0,snow:0,code:0,wind:spec.windy?9:2,gust:spec.windy?15:4,rad:0,cloud:95}});analyseWeatherCore(rows,{start:base,end:new Date(base.getTime()+24*3600000)},'test',null);return {need:document.getElementById('optimalNeed').textContent,rec:document.getElementById('recommendation').textContent,reason:document.getElementById('reason').textContent}})()`,context);
  assert.ok(result.need && result.rec && !/undefined|NaN/.test(JSON.stringify(result)),JSON.stringify({spec:context.spec,result}));
  const g=Number(result.need.match(/(?:^|\D)(400|250|200|150|100|50)\s*g/)?.[1]||0);
  counts[g]=(counts[g]||0)+1;
  if(result.rec.includes('Ingen konkret anbefaling'))unmatched.push({nightTemp,dayTemp,wet,windy,need:result.need,reason:result.reason});
  if(g===250)assert.ok(!/400 g/.test(result.rec),'250 g must not auto-upgrade to 400 g');
  cases++;
}
console.log(JSON.stringify({cases,needs:counts,unmatched:unmatched.length,samples:unmatched.slice(0,6)},null,2));
