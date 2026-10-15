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
vm.createContext(context);vm.runInContext(script,context);vm.runInContext('migrateV920()',context);

function runScenario(name,spec,expected){
  context.testSpec=spec;
  const result=vm.runInContext(`(()=>{
    const spec=testSpec,base=new Date();base.setMinutes(0,0,0);const end=new Date(base.getTime()+24*3600000),rows=[];
    for(let i=0;i<24;i++){
      const d=new Date(base.getTime()+i*3600000),h=d.getHours(),night=h>=18||h<8,wet=(spec.rainHours||[]).includes(i);
      rows.push({date:d,temp:night?spec.nightTemp:spec.dayTemp,feels:night?(spec.nightFeels??spec.nightTemp):(spec.dayFeels??spec.dayTemp),rh:night?90:70,dew:night?spec.nightTemp-1:spec.dayTemp-4,p:wet?(spec.rainPerHour??0):0,rain:wet?(spec.rainPerHour??0):0,snow:spec.snow||0,code:spec.snow?71:0,wind:spec.wind??2,gust:spec.gust??4,rad:!night&&spec.sun?500:0,cloud:spec.sun?15:95});
    }
    const s=getState();Object.assign(s,{regime:spec.regime||'summer',shelter:'none',bcs:'under',coat:'normal',coatSeason:'transition',rainSensitivity:'sensitive',coldSensitivity:'sensitive',windSensitivity:'sensitive',clipType:'unclipped',stableClimate:'balina',rugInBox:'same',horseWetness:'dry',extraChange:'no'});setState(s);
    analyseWeatherCore(rows,{start:base,end},'test',null);
    return {optimal:document.getElementById('optimalNeed').textContent,recommendation:document.getElementById('recommendation').textContent,reason:document.getElementById('reason').textContent,timeline:document.getElementById('weatherTimeline').textContent||document.getElementById('weatherTimeline').innerHTML};
  })()`,context);
  const hay=[result.optimal,result.recommendation,result.reason].join(' | ');
  for(const token of expected){if(!hay.includes(token))throw new Error(`${name}: mangler “${token}” i ${hay}`)}
  console.log(`✓ ${name}: ${result.optimal} → ${result.recommendation}`);
  return result;
}

runScenario('Kold grå nat',{nightTemp:3,nightFeels:0,dayTemp:12,sun:false},['100 g','Amigo 100 g','fuld hals på']);
runScenario('Mild efterårsnat uden sol',{nightTemp:11,nightFeels:10,dayTemp:15,sun:false},['0–50 g','Amigo Wug 50 g','halvhøj hals']);
runScenario('Kold vind og vedvarende regn',{nightTemp:7,nightFeels:4,dayTemp:12,sun:false,wind:7,gust:12,rainHours:[0,1,2,3,4,5,6,7,8,9],rainPerHour:.1},['100 g','Amigo 100 g','fuld hals på']);
runScenario('Solrig mild dag',{nightTemp:11,nightFeels:10,dayTemp:18,sun:true,wind:2,gust:4},['0 g','Bucas Zebra']);
runScenario('Koldt og vådt 200 g-trin',{nightTemp:0,nightFeels:-4,dayTemp:4,sun:false,wind:8,gust:14,rainHours:[0,1,2,3,4,5,6,7,8,9,10,11],rainPerHour:.5},['200 g','100 g liner','fuld hals på']);

const box=runScenario('Boks med regn om natten',{regime:'winter',nightTemp:6,nightFeels:0,dayTemp:12,sun:false,wind:2,gust:4,rainHours:[0,1,2,3,4,5,6,7],rainPerHour:3},[]);
if(!box.timeline.includes('Regn, dug og almindelig vind vægtes ikke'))throw new Error('Bokslogik forklarer ikke, at natregn ignoreres');
console.log('✓ Boks 18–08: natregn og almindelig vind ignoreres, nattemperaturen forklares særskilt');
