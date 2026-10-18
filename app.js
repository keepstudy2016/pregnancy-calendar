const DAY=86400000, due=Date.UTC(2027,2,20), base=due-280*DAY,start=base+126*DAY;
const rows=[
['初次感受，小小的回应','确认中孕期结构超声的预约窗口，具体时间按医院安排。','胎动常在16—24周开始被感知，初孕可能更晚。','把既往筛查结果和想问的问题整理好，带去产检。'],
['给身体一点温柔','若已预约结构超声，核对就诊时间和准备要求。','经医生确认适合运动后，选择舒适的步行等活动。','记录影响日常生活的不适，下次就诊时主动说明。'],
['认真听一次成长的回声','按医院时间完成中孕期结构超声；它不能排除所有异常。','与医生确认报告是否需要复查，不自行解读异常指标。','运动过程中及时补水，避免过热和勉强坚持。'],
['慢下来，也在向前','核对结构超声是否完成，未完成时联系医院安排。','如果还没有清晰感觉到胎动，可以在产检时讨论。','给每天留出休息时间，不用和别人的孕期表现比较。'],
['留意身体的小信号','把近期的不适及出现时间记下来，便于产检沟通。','按医嘱继续补充剂，不自行叠加不同产品的剂量。','与家人商量日常分工，让休息更容易实现。'],
['为下一次检查做准备','询问妊娠期糖尿病筛查安排，常见窗口为24—28周。','确认检查是否需要空腹及具体流程，遵照医院要求。','保存产科联系方式，遇到紧急症状不等预约日。'],
['走进新的检查窗口','按医生安排完成糖尿病筛查；各地方案及个体需求不同。','到24周仍从未感觉胎动，请联系产科进行评估。','如果已经感知胎动且明显减少或停止，立即联系产科。'],
['把问题带到产检里','核对糖尿病筛查预约或结果，以及是否需要后续评估。','记录用药和补充剂清单，复诊时与医生核对。','与伴侣或家人分享情绪变化，需要时寻求专业支持。'],
['找到舒服的生活节奏','尚未完成糖尿病筛查时，联系产科确认时间。','观察宝宝自己的胎动习惯，不与他人的次数作比较。','活动与休息交替，身体不舒服时停止运动并咨询。'],
['孕中期的最后一小站','核对24—28周相关检查是否完成，及时询问结果。','向医生询问适合自己的孕晚期产检安排。','准备一份可随时找到的医院地址、电话和就诊资料。'],
['你好，孕晚期','从28周起入睡时采用侧卧；醒来平躺时转回侧卧即可。','熟悉宝宝平常的胎动；明显变化立即联系产科。','按医嘱复查血压、尿液或血液项目，具体项目因人而异。'],
['给休息留出位置','继续侧卧入睡，可用枕头支撑，让身体更舒适。','若疲劳或不适影响生活，及时与医生讨论。','不要用家用胎心仪代替胎动异常时的医学评估。'],
['开始想象见面的日子','了解分娩地点、入院流程和陪产规则。','准备向产科咨询的分娩镇痛问题，不必此时做所有决定。','保持胎动观察，有明显减少立即联系产科。'],
['把支持安排在身边','按预约参加产检，带上近期问题清单。','与家人讨论产后休息、做饭和照护分工。','了解医院提供的孕妇课程或喂养支持。'],
['为到来留一个位置','开始整理待产包：证件、产检资料及医院要求的用品。','胎动不应因为临近分娩而被默认减少，变化时及时就医。','与医生确认是否需要生长超声等额外检查。'],
['把安心装进待产包','核对待产物品，避免临时遗漏重要证件和报告。','预先安排前往医院的路线和陪同人。','持续严重头痛、视物异常等症状应立即联系产科。'],
['了解分娩，也照顾自己','与产科讨论分娩偏好、镇痛和喂养计划。','询问当地GBS筛查政策与时间，是否适用由医生判断。','记录需要带到下次产检的具体问题。'],
['离见面又近了一点','确认后续产检日期及GBS筛查安排。','熟悉医院给出的宫缩、破水或出血时的联系办法。','37周前出现疑似临产症状，应立即联系产科。'],
['把准备做得从容一些','按当地流程进行GBS筛查；ACOG建议窗口为36+0—37+6周。','向医生确认胎位及后续计划，不自行尝试纠正胎位。','核对待产包、交通和家人联系方式。'],
['开始等待，但不用催促','按时产检，宝宝胎动的明显变化仍需及时评估。','GBS结果阳性时，与医生确认分娩时的处理方案。','不自行使用药物、草药或其他方法催产。'],
['让每一天轻一点','与医院确认什么情况下应来院，尤其是疑似破水。','复核分娩计划及陪同安排，允许计划随医学需要调整。','感到焦虑时，向家人和医护人员表达具体担忧。'],
['带着准备，静静等待','继续按预约监测，留意宝宝平时的胎动模式。','与产科确认临近或超过预产期的随访安排。','保持休息，出现警示症状及时就医，不等待自然发动。'],
['预产期，是一个预计的相遇','今天为40周+0天，预产期不是必须分娩的截止日期。','若尚未分娩，请按医生安排继续复诊并讨论后续计划。','有出血、流水、胎动减少或其他警示症状，及时联系产科。']
];
const $=s=>document.querySelector(s), fmt=t=>new Date(t).toISOString().slice(0,10), short=t=>{let d=new Date(t);return `${d.getUTCMonth()+1}月${d.getUTCDate()}日`}, gest=t=>Math.floor((t-base)/DAY), week=t=>Math.floor(gest(t)/7);
const today=Date.parse(new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())+'T00:00:00Z');
let selected=Math.min(due,Math.max(start,today)),month=new Date(selected).getUTCMonth()+12*(new Date(selected).getUTCFullYear()-2026),saved={};try{saved=JSON.parse(localStorage.getItem('spring-calendar-v1')||'{}')||{}}catch{}
function persist(){try{localStorage.setItem('spring-calendar-v1',JSON.stringify(saved));return true}catch{return false}}
$('#current').textContent=today<start?'旅程尚未开始':today>due?'已过预产期':`${week(today)}周 + ${gest(today)%7}天`;
$('#remaining').textContent=today<=due?`${Math.ceil((due-today)/DAY)} 天`:`已过 ${Math.floor((today-due)/DAY)} 天`;
function choose(t){selected=t;const d=new Date(t);month=d.getUTCMonth()+12*(d.getUTCFullYear()-2026);render()}
function render(){let y=2026+Math.floor(month/12),m=month%12,w=week(selected);$('#month-title').textContent=`${y}年 ${m+1}月`;$('#month-en').textContent=new Date(Date.UTC(y,m,1)).toLocaleString('en',{month:'long',timeZone:'UTC'}).toUpperCase()+' / '+y;
$('#prev').disabled=month===9;$('#next').disabled=month===14;
$('#months').replaceChildren();for(let k=9;k<=14;k++){let b=document.createElement('button');b.textContent=`${k%12+1}月`;b.className=k===month?'active':'';b.setAttribute('aria-pressed',String(k===month));b.onclick=()=>{month=k;render()};$('#months').append(b)}
$('#grid').replaceChildren();let first=Date.UTC(y,m,1),offset=(new Date(first).getUTCDay()+6)%7;for(let i=0;i<42;i++){let t=first+(i-offset)*DAY,d=new Date(t),valid=t>=start&&t<=due&&d.getUTCMonth()===m,b=document.createElement('button');b.className='day'+(!valid?' disabled':'')+(valid&&week(t)===w?' inweek':'')+(t===selected?' selected':'')+(t===today?' today':'');b.disabled=!valid;b.setAttribute('aria-pressed',String(t===selected));b.setAttribute('aria-label',`${fmt(t)}${valid?` 孕${week(t)}周${gest(t)%7}天`:''}`);let mark=t===start?'日历起点':t===due?'预产期':valid&&gest(t)%7===0?`${week(t)}周开始`:'';b.innerHTML=`<span class="num">${d.getUTCDate()}</span><small>${valid?`${week(t)}周+${gest(t)%7}天`:'&nbsp;'}</small>${mark?`<span class="tag">${mark}</span>`:''}`;b.onclick=()=>choose(t);$('#grid').append(b)}
let data=rows[w-18],ws=base+w*7*DAY,we=Math.min(due,ws+6*DAY);$('#detail').innerHTML=`<div><span class="pill">${w<28?'孕中期':'孕晚期'} · ${fmt(selected)}</span><h2>孕 ${w} 周 <span style="font:12px sans-serif;color:var(--muted)">/ ${gest(selected)} 天</span></h2><p class="range">${short(ws)} — ${short(we)}</p><h3>${data[0]}</h3><div class="tasks">${data.slice(1).map((s,i)=>`<label class="task"><input type="checkbox" data-key="${w}-${i}" ${saved[w+'-'+i]?'checked':''}><span>${s}</span></label>`).join('')}</div></div><div><label for="note"><p style="font-size:12px;margin-top:16px">本周随记</p></label><textarea id="note" class="note" placeholder="记下想问医生的问题，或今天的小心情…"></textarea><div class="save" id="save-status">仅保存在当前浏览器</div></div><div class="weekmove"><button id="wp" ${w===18?'disabled':''}>← 上一周</button><button id="wn" ${w===40?'disabled':''}>下一周 →</button></div>`;
$('#note').value=typeof saved['note'+w]==='string'?saved['note'+w]:'';$('#note').oninput=e=>{saved['note'+w]=e.target.value;$('#save-status').textContent=persist()?'已保存在当前浏览器':'当前浏览器无法保存，请复制留存'};document.querySelectorAll('[data-key]').forEach(el=>el.onchange=()=>{saved[el.dataset.key]=el.checked;if(!persist())$('#save-status').textContent='当前浏览器无法保存，请复制留存'});$('#wp').onclick=()=>choose(ws-7*DAY);$('#wn').onclick=()=>choose(ws+7*DAY)}
$('#prev').onclick=()=>{month--;render()};$('#next').onclick=()=>{month++;render()};$('#today').onclick=()=>choose(Math.min(due,Math.max(start,today)));
[[20,'结构超声','孕中期 · 具体窗口以医院为准'],[24,'糖尿病筛查','常见窗口：24—28周'],[28,'进入孕晚期','侧卧入睡 · 关注胎动'],[36,'分娩前的准备','核对胎位、GBS及入院安排']].forEach(([w,title,desc])=>{let b=document.createElement('button');b.className='milestone';b.innerHTML=`<span class="eyebrow">WEEK ${w} · ${short(base+w*7*DAY)}</span><b>${title} ↗</b><small>${desc}</small>`;b.onclick=()=>choose(base+w*7*DAY);$('#milestones').append(b)});
$('#print').onclick=()=>{$('#printall').innerHTML='<h1>春日来信 · 每周孕期日历</h1><p>126天（2026.10.17）起 · 预产期 2027.03.20</p>'+rows.map((r,i)=>`<section><h3>孕${i+18}周 · ${fmt(base+(i+18)*7*DAY)} — ${fmt(Math.min(due,base+(i+18)*7*DAY+6*DAY))} · ${r[0]}</h3><ul>${r.slice(1).map(t=>`<li>${t}</li>`).join('')}</ul></section>`).join('');window.print()};render();
