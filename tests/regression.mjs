import fs from 'node:fs';
import vm from 'node:vm';

const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
let script=html.match(/<script>([\s\S]*?)<\/script>/)[1];
script=script.replace(/try\{ init\(\); \}catch\(e\)\{[\s\S]*?\n\}/,'');

const storage=new Map(),elements=new Map();
const makeEl=id=>({id,value:'',textContent:'',innerHTML:'',style:{},classList:{add(){},remove(){}},querySelector(){return null}});
const document={
  getElementById(id){if(!elements.has(id))elements.set(id,makeEl(id));return elements.get(id)},
  querySelector(){return null},addEventListener(){},createElement(){return makeEl('created')}
};
const localStorage={getItem:k=>storage.has(k)?storage.get(k):null,setItem:(k,v)=>storage.set(k,String(v)),removeItem:k=>storage.delete(k)};
const context={console,document,localStorage,location:{hash:'',reload(){}},window:{addEventListener(){}},alert(){},confirm(){return true},prompt(){return null},fetch:async()=>{throw new Error('fetch disabled in tests')},URL,URLSearchParams,Blob,FileReader:class{}};
vm.createContext(context);vm.runInContext(script,context);vm.runInContext('migrateV920();migrateV921()',context);

function runScenario(name,spec,expected){
  context.testSpec=spec;
  const result=vm.runInContext(`(()=>{
    const spec=testSpec,base=new Date();base.setMinutes(0,0,0);const end=new Date(base.getTime()+24*3600000),rows=[];
    for(let i=0;i<24;i++){
      const d=new Date(base.getTime()+i*3600000),h=d.getHours(),night=h>=18||h<8,wet=(spec.rainHours||[]).includes(i);
      rows.push({date:d,temp:night?spec.nightTemp:spec.dayTemp,feels:night?(spec.nightFeels??spec.nightTemp):(spec.dayFeels??spec.dayTemp),rh:night?90:70,dew:night?spec.nightTemp-1:spec.dayTemp-4,p:wet?(spec.rainPerHour??0):0,rain:wet?(spec.rainPerHour??0):0,snow:spec.snow||0,code:spec.snow?71:0,wind:spec.wind??2,gust:spec.gust??4,rad:!night&&spec.sun?500:0,cloud:spec.sun?15:95});
    }
    const s=getState();Object.assign(s,{regime:spec.regime||'summer',shelter:'none',bcs:'under',coat:'normal',coatSeason:'transition',rainSensitivity:'sensitive',coldSensitivity:'sensitive',windSensitivity:'sensitive',clipType:'unclipped',stableClimate:'balina',rugInBox:'same',horseWetness:spec.horseWetness||'dry',extraChange:'no'});setState(s);renderDryingAdvice(s);
    analyseWeatherCore(rows,{start:base,end},'test',null);
    return {optimal:document.getElementById('optimalNeed').textContent,recommendation:document.getElementById('recommendation').textContent,reason:document.getElementById('reason').textContent,timeline:document.getElementById('weatherTimeline').textContent||document.getElementById('weatherTimeline').innerHTML};
  })()`,context);
  const hay=[result.optimal,result.recommendation,result.reason].join(' | ');
  for(const token of expected){if(!hay.includes(token))throw new Error(`${name}: mangler “${token}” i ${hay}`)}
  console.log(`✓ ${name}: ${result.optimal} → ${result.recommendation}`);
  return result;
}

runScenario('Kold grå nat',{nightTemp:3,nightFeels:0,dayTemp:12,sun:false},['100 g','Amigo AmECO 12 Plus 100 g','fuld hals på']);
runScenario('Mild efterårsnat uden sol',{nightTemp:11,nightFeels:10,dayTemp:15,sun:false},['0–50 g','Amigo Ripstop 900D Wug 50 g','halvhøj hals']);
runScenario('Kold vind og vedvarende regn',{nightTemp:7,nightFeels:4,dayTemp:12,sun:false,wind:7,gust:12,rainHours:[0,1,2,3,4,5,6,7,8,9],rainPerHour:.1},['100 g','Amigo AmECO 12 Plus 100 g','fuld hals på']);
runScenario('Solrig mild dag',{nightTemp:11,nightFeels:10,dayTemp:18,sun:true,wind:2,gust:4},['0 g','Rambo Summer Series Turnout V-front']);
runScenario('Koldt og vådt 200 g-trin',{regime:'winter',nightTemp:0,nightFeels:-4,dayTemp:4,sun:false,wind:8,gust:14,rainHours:[0,1,2,3,4,5,6,7,8,9,10,11],rainPerHour:.5},['200 g','100 g liner','fuld hals på']);

const box=runScenario('Boks med regn om natten',{regime:'winter',nightTemp:6,nightFeels:0,dayTemp:12,sun:false,wind:2,gust:4,rainHours:[0,1,2,3,4,5,6,7],rainPerHour:3},[]);
if(!box.timeline.includes('Regn, dug og almindelig vind vægtes ikke'))throw new Error('Bokslogik forklarer ikke, at natregn ignoreres');
console.log('✓ Boks 18–08: natregn og almindelig vind ignoreres, nattemperaturen forklares særskilt');

const dryChoice=runScenario('Tør pels – normalt dækkenvalg',{nightTemp:11,nightFeels:10,dayTemp:15,sun:false},['Amigo Ripstop 900D Wug 50 g']);
const wetChoice=runScenario('Gennemvåd pels – tørretrin først',{nightTemp:11,nightFeels:10,dayTemp:15,sun:false,horseWetness:'rainwet'},['Amigo Ripstop 900D Wug 50 g']);
const dryingText=elements.get('dryingAdvice').innerHTML;
if(!dryingText.includes('Læg ikke et almindeligt dækken direkte på den gennemvåde pels'))throw new Error('Mangler tydelig advarsel mod almindeligt dækken direkte på gennemvåd pels');
if(dryChoice.recommendation!==wetChoice.recommendation)throw new Error('Våd pels må ikke ændre vejrets gram-anbefaling; den skal udløse et særskilt tørretrin');
if(!elements.get('recommendationHeading').textContent.includes('NÅR BALINA ER TØR'))throw new Error('Anbefalingen er ikke mærket som behovet efter tørring');
console.log('✓ Gennemvåd pels: særskilt tørretrin, tydelig advarsel og uændret efter-tørring-dækkenvalg');

// Ny 200 g liner: bevar eksisterende lager og undgå dobbelte tilføjelser.
vm.runInContext(`(()=>{const s=getState();s.migrations.v964=false;s.linerInventory=[{id:'thermal100',name:'Ældre liner',grams:100,type:'thermal',owned:false}];setState(s);migrateV964();migrateV964();})()`,context);
const inventory=vm.runInContext('getLinerInventory()',context);
if(inventory.filter(x=>x.id==='thermal200').length!==1)throw new Error('200 g liner mangler eller blev duplikeret');
if(inventory.find(x=>x.id==='thermal100')?.owned!==false)throw new Error('Migration overskrev tidligere liner-valg');
console.log('✓ 200 g liner migreres én gang, eksisterende valg bevares');

// Konfigurationer må kun være mulige kombinationer af ejede linere.
const configs=vm.runInContext('wardrobeConfigs()',context);
if(!configs.some(x=>x.rug.id==='ameco100'&&x.grams===300&&x.liner===200))throw new Error('AmECO 100 + 200 g liner mangler');
if(configs.some(x=>x.rug.id==='ameco100'&&x.liner===100))throw new Error('Ikke-ejet 100 g liner tilbydes');
console.log('✓ 100 + 200 g liner giver 300 g; fravalgte linere udelades');
vm.runInContext(`(()=>{const s=getState();s.linerInventory.find(x=>x.id==='thermal100').owned=true;setState(s);})()`,context);

// Vinter omkring frysepunktet: hver kørsel skal give et genkendeligt, sammenhængende resultat.
for(const [name,scenario] of [
  ['Frost, tør og rolig',{regime:'winter',nightTemp:-3,nightFeels:-4,dayTemp:1,wind:2,gust:4}],
  ['Frysepunkt, blæst',{regime:'winter',nightTemp:0,nightFeels:-5,dayTemp:2,wind:8,gust:14}],
  ['Frysepunkt, regn og blæst',{regime:'winter',nightTemp:0,nightFeels:-4,dayTemp:3,wind:9,gust:16,rainHours:[0,1,2,3,4,5,6,7,8,9,10,11],rainPerHour:1}],
  ['Mildere eftermiddag',{regime:'winter',nightTemp:-1,nightFeels:-3,dayTemp:6,wind:3,gust:5,sun:true}],
]){
 const result=runScenario(name,scenario,[]);
 if(!result.optimal||!result.recommendation||/undefined|NaN/.test(result.optimal+' '+result.recommendation))throw new Error(name+': ugyldigt output');
}
console.log('✓ Fire supplerende vinterscenarier giver gyldigt output (ikke fysiologisk valideret)');

// Hard safety rule: a full-neck requirement must not be silently bypassed by fallback selection.
const fullNeckCheck=vm.runInContext(`(()=>{
 const s=getState();s.wardrobe=getWardrobe().map(r=>({...r,neck:'none'}));setState(s);
 const need={kind:'closed',target:200,min:175,max:225,neckRequired:'full'};
 return matchWardrobeNeed(need);
})()`,context);
if(fullNeckCheck.ok)throw new Error('Påkrævet fuld hals blev omgået ved kompromisvalg');
console.log('✓ Påkrævet fuld hals kan ikke omgås ved kompromisvalg');
