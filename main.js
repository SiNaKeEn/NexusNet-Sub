/*@@DATA@@*/
/*NXT_CFG_BEGIN*/
const CONFIG={"profileTitle":"","supportUrl":"","renewUrl":"","channelUrl":"","accent":"","logo":"","notice":"","footer":"","lang":"","theme":"","pgCells":""};
/*NXT_CFG_END*/
const $=id=>document.getElementById(id);
const LS={g:(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}},s:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const safeUrl=u=>{u=String(u||"").trim();return /^(https?:\/\/|tg:\/\/)/i.test(u)?u:""};
const ic=(name,cls)=>'<svg class="i'+(cls?" "+cls:"")+'" aria-hidden="true"><use href="#i-'+name+'"/></svg>';
const APP_ICONS={/*@@APP_ICONS@@*/};
const appKey=n=>String(n).toLowerCase().replace(/[^a-z0-9]/g,"");
const appImg=(n,cls)=>{const k=appKey(n);return APP_ICONS[k]?'<img class="'+(cls||"app-img")+'" src="'+APP_ICONS[k]+'" alt="" width="28" height="28" decoding="async">':""};
const REDUCED=!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches);
/*@@JALALI@@*/
/*@@APPS@@*/
Object.assign(I.fa,{renewSvc:"تمدید سرویس",life:"کل مصرف",needApp:"هنوز برنامه نصب نکرده‌ای؟",guide:"راهنمای اتصال",copyLink:"کپی لینک",est:"پایان حجم",aLang:"زبان",aTheme:"تغییر تم",qr:"نمایش QR",
st_on:"فعال",st_off:"غیرفعال",st_online:"آنلاین",st_full:"اتمام حجم",st_expired:"منقضی",st_hold:"در انتظار اولین اتصال",st_soon:"نزدیک انقضا",delayed:"از اولین اتصال",
g1t:"چطور وصل شوم؟",g1:["از تب «برنامه‌ها» برنامه‌ی پیشنهادی را نصب کن.","دکمه‌ی «افزودن به …» را بزن؛ یا لینک اشتراک را کپی و در برنامه Import کن.","یک سرور را انتخاب کن و وصل شو."],
g2t:"وصل نمی‌شوم؟",g2:["اشتراک را داخل برنامه Update/Refresh کن.","ساعت و تاریخ گوشی باید درست باشد.","کانفیگ دیگری را امتحان کن.","حجم یا زمان اشتراک را بررسی کن و در صورت اتمام تمدید کن.","اگر حل نشد به پشتیبانی پیام بده."],
dayUnit:"روز",channel:"کانال",usedPct:"٪ مصرف",leftPct:"٪ مانده",warnVolN:"حجم اشتراک رو به اتمام است",smart:"افزودن به",sec:"ثانیه",step1:"نصب برنامه",step2:"افزودن اشتراک",inst:"نصب",addSub:"افزودن",
h_full:"حجم تموم شده؛ وقت تمدیده",h_expired:"اشتراکت منقضی شده",h_off:"اشتراک غیرفعاله",h_hold:"منتظر اولین اتصال هستیم",h_soon:"فقط {n} روز تا پایان اشتراک",h_low:"فقط {p}٪ از حجم مونده",h_unl:"حجم نامحدود؛ با خیال راحت",h_ok:"{p}٪ از حجمت باقی مانده"});
Object.assign(I.en,{renewSvc:"Renew service",life:"Lifetime",needApp:"No app installed yet?",guide:"Setup guide",copyLink:"Copy link",est:"Est. end",aLang:"Language",aTheme:"Toggle theme",qr:"Show QR",
st_on:"Active",st_off:"Inactive",st_online:"Online",st_full:"Quota full",st_expired:"Expired",st_hold:"Waiting first connect",st_soon:"Expiring soon",delayed:"from first connect",
g1t:"How do I connect?",g1:["Install the recommended app from the Apps tab.","Tap “Add to …”, or copy the sub link and import it in the app.","Pick a server and connect."],
g2t:"Can't connect?",g2:["Update/Refresh the subscription inside the app.","Your phone's date and time must be correct.","Try another config.","Check quota and expiry; renew if needed.","Still stuck? Message support."],
dayUnit:"days",channel:"Channel",usedPct:"Used %",leftPct:"Left %",down:"Download",up:"Upload",left:"Left",warnVolN:"Data quota is running low",smart:"Add to",sec:"Sec",step1:"Install app",step2:"Add subscription",inst:"Install",addSub:"Add",
h_full:"Quota used up — time to renew",h_expired:"Your subscription expired",h_off:"Subscription is inactive",h_hold:"Waiting for first connection",h_soon:"Only {n} days left",h_low:"Only {p}% data left",h_unl:"Unlimited data — enjoy",h_ok:"{p}% of your data left"});
let lang=LS.g("nn_lang",CONFIG.lang==="en"?"en":"fa");if(!I[lang])lang="fa";
const _ct=String(CONFIG.theme||"auto");
let dark=LS.g("nn_theme","")?LS.g("nn_theme","")==="dark":(_ct==="dark"?true:_ct==="light"?false:!(window.matchMedia&&matchMedia("(prefers-color-scheme: light)").matches));
const vibe=ms=>{try{navigator.vibrate&&navigator.vibrate(ms)}catch(e){}};
const t=k=>{const v=(I[lang]&&I[lang][k]);return v!=null?v:(I.en[k]!=null?I.en[k]:k)};
const n=(v,d)=>v==null||v===""?d:v;
const num=v=>{const x=parseFloat(String(v==null?"":v).replace(/[^\d.-]/g,""));return isNaN(x)?0:x};
const bytes=b=>{if(!(b>0))return"0 B";const u=["B","KB","MB","GB","TB"];let i=0;while(b>=1024&&i<u.length-1){b/=1024;i++}return b.toFixed(i?1:0)+" "+u[i]};
const plat=()=>{const ua=(navigator.userAgent||"").toLowerCase(),p=(navigator.platform||"").toLowerCase();
  if(/android/.test(ua))return"Android";if(/iphone|ipad|ipod/.test(ua)||(p==="macintel"&&navigator.maxTouchPoints>1))return"iOS";
  if(/win/.test(p)||/windows/.test(ua))return"Windows";if(/mac/.test(p))return"macOS";if(/linux/.test(p)||/linux/.test(ua))return"Linux";return""};
const CIRC=320.44;
const subUrl=n(TV.subUrl,location.href.split("?")[0]);
const subTitle=(String(CONFIG.profileTitle||"").trim())||n(TV.subTitle,"Subscription");
const links=String(n(TV.links,"")).split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
const emails=String(n(TV.emails,"")).split(/[,\s]+/).filter(Boolean);
const SPLIT=TV.split!==false;

/* ---------- dates ---------- */
function pdate(v){
  if(v==null)return null;const s=String(v).trim();if(!s||s==="0"||s==="—"||s==="-")return null;let d;
  if(/^-?\d+(\.\d+)?$/.test(s)){const x=Number(s);if(x<=0)return null;d=new Date(Math.abs(x)>1e11?x:x*1000)}
  else d=new Date(/T/.test(s)&&!/(Z|[+-]\d{2}:?\d{2})$/i.test(s)?s+"Z":s);
  return isNaN(d.getTime())||d.getFullYear()<2000?null:d}
function fmtJ(d){return toJalali(d.getFullYear(),d.getMonth()+1,d.getDate())}
function fmtJT(v){const d=pdate(v);return d?fmtJ(d)+" - "+pad2(d.getHours())+":"+pad2(d.getMinutes()):"—"}
function expInfo(){
  const raw=String(n(TV.expire,"")).trim();if(!raw||raw==="0")return{k:"none"};
  if(/^-\d/.test(raw)){const x=Math.abs(Number(raw));const ms=x>1e8?x:x*1000;return{k:"delayed",days:Math.round(ms/864e5)}}
  const d=pdate(raw);return d?{k:"date",d,ms:d.getTime()}:{k:"none"}}
function isOnline(){const o=String(n(TV.isOnline,""));if(o==="true"||o==="1")return true;const d=pdate(TV.lastOnline);return !!d&&Date.now()-d.getTime()<120000}
function calcStatus(){
  const tot=num(TV.totalByte),used=num(TV.downloadByte)+num(TV.uploadByte),e=expInfo(),st=String(TV.status||"").toLowerCase(),en=String(n(TV.enabled,"true"));
  let k="ok",key="on";
  if(st==="limited"||(tot>0&&used>=tot)){k="bad";key="full"}
  else if(st==="expired"||(e.k==="date"&&e.ms<Date.now())){k="bad";key="expired"}
  else if(st==="disabled"||(!st&&(en==="false"||en==="0"))){k="bad";key="off"}
  else if(st==="on_hold"){k="wn";key="hold"}
  else if(e.k==="date"&&(e.ms-Date.now())/864e5<=7){k="wn";key="soon"}
  else if(isOnline())key="online";
  return{k,key,text:t("st_"+key)}}

/* ---------- liquid glass ---------- */
const LQ={cur:0,tgt:0,unl:false,t:0,run:false,vis:true,tilt:0,skip:0,imp:0,rx:0,ry:0,gx:0,gy:0};
function wavePath(y,amp,ph,k,tilt){let d="M -4 "+(y+tilt*(-64)/60).toFixed(2);
  for(let x=-4;x<=124;x+=4)d+=" L "+x+" "+(y-tilt*(x-60)/60+Math.sin((x/120)*Math.PI*2*k+ph)*amp).toFixed(2);
  return d+" L 124 130 L -4 130 Z"}
function lqDraw(){
  const p=LQ.cur,y=103-86*p/100,A=((LQ.unl?3.4:2.4)+LQ.imp*5)*Math.min(1,p/10+(LQ.imp>0?.4:0));
  const wt=$("waveT"),wb=$("waveB"),dm=$("domeT");if(!wt)return;
  if(p<=0.3){wt.setAttribute("d","");wb.setAttribute("d","")}
  else{wt.setAttribute("d",wavePath(y,A,LQ.t,1,LQ.tilt));wb.setAttribute("d",wavePath(y+1.2,A*.8,LQ.t*1.35+2.1,1.6,LQ.tilt))}
  if(LQ.unl){const ov=Math.pow(Math.max(0,Math.sin(LQ.t*.7)),2)*7+LQ.imp*4;
    dm.setAttribute("d",ov>.25?"M 48.6 18.5 C 52 "+(18.5-ov*1.6).toFixed(2)+" 68 "+(18.5-ov*1.6).toFixed(2)+" 71.4 18.5 Z":"")}
  else dm.setAttribute("d","")}
function lqPose(){const w=$("ringWrap"),o=$("orb");if(!w)return;
  w.style.setProperty("--rx",LQ.rx.toFixed(2)+"deg");w.style.setProperty("--ry",LQ.ry.toFixed(2)+"deg");
  w.style.setProperty("--hx",(30-LQ.ry*1.8).toFixed(1)+"%");w.style.setProperty("--hy",(24+LQ.rx*1.6).toFixed(1)+"%");
  if(o)o.style.setProperty("--sx",(1-Math.min(.35,Math.abs(LQ.ry)/45)).toFixed(2))}
function lqFrame(){
  if(!LQ.vis||document.hidden){LQ.run=false;return}
  LQ.t+=0.05*(1+LQ.imp*2);LQ.skip^=1;
  if(LQ.skip&&!REDUCED){requestAnimationFrame(lqFrame);return}
  LQ.cur=REDUCED?LQ.tgt:LQ.cur+(LQ.tgt-LQ.cur)*0.07;
  if(Math.abs(LQ.tgt-LQ.cur)<0.05)LQ.cur=LQ.tgt;
  if(!REDUCED){LQ.tilt+=(LQ.gx*5-LQ.tilt)*.12;LQ.ry+=(LQ.gx*11-LQ.ry)*.12;LQ.rx+=(-LQ.gy*9-LQ.rx)*.12;LQ.imp*=0.965;if(LQ.imp<0.01)LQ.imp=0;lqPose()}
  lqDraw();
  if(REDUCED&&LQ.cur===LQ.tgt){LQ.run=false;return}
  requestAnimationFrame(lqFrame)}
function lqStart(){if(LQ.run||!LQ.vis||document.hidden)return;LQ.run=true;requestAnimationFrame(lqFrame)}
function lqSet(p,unl){LQ.tgt=unl?100:p;LQ.unl=unl;lqStart()}
(function(){
  const w=$("ringWrap");
  if("IntersectionObserver"in window&&w)new IntersectionObserver(es=>{LQ.vis=es[0].isIntersecting;if(LQ.vis)lqStart()}).observe(w);
  document.addEventListener("visibilitychange",lqStart);
  if(REDUCED)return;
  const cl=v=>Math.max(-1,Math.min(1,v));
  if(window.DeviceOrientationEvent&&typeof DeviceOrientationEvent.requestPermission!=="function")
    addEventListener("deviceorientation",e=>{if(e.gamma==null)return;LQ.gx=cl((e.gamma||0)/30);LQ.gy=cl(((e.beta||50)-50)/30)},{passive:true});
  document.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse"||!w)return;const r=w.getBoundingClientRect();
    LQ.gx=cl((e.clientX-(r.left+r.width/2))/(innerWidth/2));LQ.gy=cl((e.clientY-(r.top+r.height/2))/(innerHeight/2))},{passive:true});
  const o=$("orb");if(o)o.addEventListener("click",()=>{LQ.imp=1;lqStart();vibe(8)});
})();
function levelColors(rem,unl){
  const w=$("ringWrap");if(!w)return;
  let a="#67e8f9",b="#06b6d4";
  if(window.__bad||(!unl&&rem<15)){a="#fca5a5";b="#ef4444"}else if(!unl&&rem<40){a="#fde68a";b="#f59e0b"}
  w.style.setProperty("--l1",a);w.style.setProperty("--l2",b);
  document.documentElement.style.setProperty("--l1",a);document.documentElement.style.setProperty("--l2",b);
  $("bubs").parentNode.parentNode.classList.toggle("nobub",!(unl||rem>=55))}

/* ---------- render ---------- */
function animNum(el,to,fmt,dur){
  if(!el)return;const from=Number(el.dataset.v||0);el.dataset.v=to;
  if(REDUCED||from===to){el.textContent=fmt(to);return}
  const t0=performance.now();
  (function st(now){const k=Math.min(1,(now-t0)/dur),e=1-Math.pow(1-k,3);el.textContent=fmt(from+(to-from)*e);if(k<1)requestAnimationFrame(st)})(t0);
  setTimeout(()=>{el.textContent=fmt(to)},dur+80)}
function setCell(id,icon,key,val,accent){
  const c=$(id);if(val==null){c.style.display="none";return}
  c.style.display="";c.className="vol"+(accent?" accent":"");c.querySelector(".ci").innerHTML=ic(icon);c.querySelector(".ck").textContent=key;
  const v=c.querySelector(".v");if(typeof val==="number")animNum(v,val,bytes,900);else{v.textContent=val;delete v.dataset.v}}
function estDays(){
  const tot=num(TV.totalByte),used=num(TV.downloadByte)+num(TV.uploadByte),cr=pdate(TV.created);
  if(!(cr&&tot>0&&used>0&&used<tot))return null;
  const days=Math.max(1,(Date.now()-cr.getTime())/864e5);return Math.floor((tot-used)/(used/days))}
function renderTraffic(){
  const d=num(TV.downloadByte),u=num(TV.uploadByte),tot=num(TV.totalByte),used=d+u,unl=tot<=0,left=unl?0:Math.max(0,tot-used);
  const rem=unl?100:Math.max(0,Math.min(100,left/tot*100));
  $("limit").textContent=unl?"∞":bytes(tot);
  if(SPLIT){setCell("c1","download",t("down"),d);setCell("c2","upload",t("up"),u);setCell("c3","chart-simple",t("used"),used);setCell("c4","battery-three-quarters",t("left"),unl?"∞":left,true)}
  else if(String(CONFIG.pgCells)==="simple"){const pu=unl?"—":Math.min(100,Math.round(used/tot*100))+"%",pl=unl?"∞":Math.round(rem)+"%";
    setCell("c1","chart-simple",t("used"),used);setCell("c2","battery-three-quarters",t("left"),unl?"∞":left,true);
    setCell("c3","chart-simple",t("usedPct"),pu);setCell("c4","battery-three-quarters",t("leftPct"),pl)}
  else{/* PasarGuard sends one total number: same four cells/labels as 3x-ui, upload is not reported */
    setCell("c1","download",t("down"),used);setCell("c2","upload",t("up"),"—");
    setCell("c3","chart-simple",t("used"),used);setCell("c4","battery-three-quarters",t("left"),unl?"∞":left,true)}
  const pc=$("pctT");if(unl){pc.textContent="∞";delete pc.dataset.v}else animNum(pc,Math.round(rem),v=>Math.round(v)+"%",1000);
  $("rTraffic").style.strokeDashoffset=String(CIRC*(1-rem/100));
  $("bar").style.width=rem+"%";
  levelColors(rem,unl);lqSet(rem,unl);return{rem,unl}}
function setMood(s){document.documentElement.setAttribute("data-mood",s.k==="bad"?"bad":"ok")}
function setHeadline(s,rem,unl,e){
  let txt,icon="circle-check";const days=e.k==="date"?Math.max(0,Math.ceil((e.ms-Date.now())/864e5)):0;
  if(s.key==="full"||s.key==="expired"||s.key==="off"){txt=t("h_"+s.key);icon="circle-exclamation"}
  else if(s.key==="hold"){txt=t("h_hold");icon="clock"}
  else if(s.key==="soon"){txt=t("h_soon").replace("{n}",days);icon="circle-exclamation"}
  else if(!unl&&rem<15){txt=t("h_low").replace("{p}",Math.round(rem));icon="circle-exclamation"}
  else if(unl)txt=t("h_unl");else txt=t("h_ok").replace("{p}",Math.round(rem));
  $("hlIcon").innerHTML=ic(icon);$("hlTxt").textContent=txt}
function renderStatus(){
  const s=calcStatus(),b=$("badge");b.className="badge "+s.k;$("badgeTxt").textContent=s.text;$("statusDot").className="dot"+(s.k==="ok"?"":" "+s.k);return s}
function data(){
  document.title=subTitle;$("title").textContent=subTitle;
  const tot=num(TV.totalByte),used=num(TV.downloadByte)+num(TV.uploadByte),e=expInfo(),s=renderStatus();window.__bad=s.k==="bad";
  const wv=$("warnVol");if(tot>0&&used/tot>=.8&&used<tot){wv.classList.add("show");$("warnVolTxt").textContent=t("warnVolN")+" ("+Math.round(used/tot*100)+"%)"}else wv.classList.remove("show");
  const we=$("warnExp"),dl=e.k==="date"?(e.ms-Date.now())/864e5:-1;
  if(dl>=0&&dl<=3){we.classList.add("show");$("warnExpTxt").textContent=t("st_soon")+" ("+Math.ceil(dl)+" "+t("dayUnit")+")"}else we.classList.remove("show");
  const sup=safeUrl(CONFIG.supportUrl)||safeUrl(TV.subSupportUrl),ren=safeUrl(CONFIG.renewUrl)||sup;
  const br=$("btnRenew"),bs=$("btnSupport"),bc=$("btnChannel"),chu=safeUrl(CONFIG.channelUrl);
  if(chu){bc.style.display="";bc.href=chu}else bc.style.display="none";
  const ft=$("foot");ft.textContent=String(CONFIG.footer||"").trim();
  if(ren){br.style.display="";br.href=ren}else br.style.display="none";
  if(sup){bs.style.display="";bs.href=sup}else bs.style.display="none";
  const hr=$("homeRenew");let need=s.k==="bad"||s.key==="soon"||(tot>0&&used/tot>=.85);
  if(need&&ren){hr.classList.add("show");$("btnHomeRenew").href=ren}else hr.classList.remove("show");
  $("userLine").textContent=emails[0]||("ID "+n(TV.sId,"—"));
  const tr=renderTraffic();setMood(s);setHeadline(s,tr.rem,tr.unl,e);window.__exp=e;
  if(e.k==="date"){$("expTag").textContent=fmtJ(e.d);$("pv5").textContent=fmtJ(e.d)}
  else if(e.k==="delayed"){$("expTag").textContent=t("delayed");$("pv5").textContent=e.days+" "+t("dayUnit")+" "+t("delayed")}
  else{$("expTag").textContent=t("unl");$("pv5").textContent=t("unl")}
  tickCountdown();
  $("pv1").textContent=emails[0]||"—";$("pv2").textContent=n(TV.sId,"—");$("pv3").textContent=s.text;$("pv6").textContent=fmtJT(TV.lastOnline);
  const lf=num(TV.lifetime),rl=$("rowLife");if(rl){if(!SPLIT&&lf>0){rl.style.display="";$("pv8").textContent=bytes(lf)}else rl.style.display="none"}
  const es=estDays(),re=$("rowEst");
  if(es!=null){re.style.display="";$("pv7").textContent="≈ "+es+" "+t("dayUnit")}else re.style.display="none";
  const an=String(n(TV.announce,"")).trim()||String(CONFIG.notice||"").trim(),a=$("ann");
  if(an){a.classList.add("show");$("annTxt").textContent=an}else a.classList.remove("show");
  const jU=safeUrl(TV.subJsonUrl),cU=safeUrl(TV.subClashUrl);
  $("btnFmtJson").classList.toggle("hid",!jU);$("btnFmtClash").classList.toggle("hid",!cU);
  $("btnFmtJson").textContent=t("fmtJson");$("btnFmtClash").textContent=t("fmtClash")}

function tickCountdown(){
  const e=window.__exp||expInfo();let D="∞",H="∞",M="∞",S="∞";
  if(e.k==="date"){const diff=Math.max(0,e.ms-Date.now());D=Math.floor(diff/864e5);H=pad2(Math.floor((diff%864e5)/36e5));M=pad2(Math.floor((diff%36e5)/6e4));S=pad2(Math.floor((diff%6e4)/1e3))}
  else if(e.k==="delayed"){D=e.days;H=M=S="—"}
  const set=(id,v)=>{const el=$(id);if(el&&el.textContent!==String(v))el.textContent=v};set("expD",D);set("expH",H);set("expM",M);set("expS",S)}
function toast(m){const el=$("toast");el.textContent=m;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),1600)}
function copy(txt){const ok=()=>{toast(t("ok"));vibe(12)};
  const fb=()=>{const a=document.createElement("textarea");a.value=txt;a.style.cssText="position:fixed;opacity:0";document.body.appendChild(a);a.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(a);ok()};
  if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(txt).then(ok).catch(fb);else fb()}
function qrSvg(text){
  const s=unescape(encodeURIComponent(text));let q=null;
  for(let v=1;v<=40&&!q;v++){try{const c=new QRC(v,0);c.addData(s);c.make();q=c}catch(e){q=null}}
  if(!q)return null;const c=q.getModuleCount(),m=3;let d="";
  for(let r=0;r<c;r++)for(let x=0;x<c;x++)if(q.isDark(r,x))d+="M"+(x+m)+" "+(r+m)+"h1v1h-1z";
  const z=c+2*m;return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+z+" "+z+'" shape-rendering="crispEdges"><rect width="'+z+'" height="'+z+'" fill="#fff"/><path d="'+d+'" fill="#000"/></svg>'}
function qr(txt){const svg=qrSvg(txt);if(!svg){toast("QR: too long");return}window.__lastQr=txt;$("qr").innerHTML=svg;$("md").classList.add("open")}
function closeQr(){$("md").classList.remove("open")}

function renderQi(){
  const U=encodeURIComponent(subUrl),T=encodeURIComponent(subTitle),cur=plat();
  const ok=QI.filter(q=>!cur||!q.o||q.o.indexOf(cur)>-1);
  const mk=q=>q.s.replace("{U}",U).replace("{E}",U).replace("{T}",T);
  const sm=$("btnSmart");
  if(ok.length){const f=ok[0];sm.style.display="";sm.href=mk(f);sm.innerHTML=(appImg(f.n,"app-img sm")||ic(f.i))+" "+esc(t("smart"))+" "+esc(f.n)}else sm.style.display="none";
  $("qi").innerHTML=ok.slice(1).map(q=>'<a href="'+esc(mk(q))+'">'+(appImg(q.n,"app-img sm")||ic(q.i))+" "+esc(q.n)+"</a>").join("")}
function guideHtml(tk,ik,icon,open){return'<details class="gd"'+(open?" open":"")+"><summary>"+ic(icon)+esc(t(tk))+"</summary><"+(ik==="g1"?"ol":"ul")+">"+t(ik).map(x=>"<li>"+esc(x)+"</li>").join("")+"</"+(ik==="g1"?"ol":"ul")+"></details>"}
function renderGuide(){$("guide").innerHTML=guideHtml("g1t","g1","wand-magic-sparkles",false)+guideHtml("g2t","g2","screwdriver-wrench",false)}

function nameOf(link){try{
  if(link.startsWith("vmess://")){const j=JSON.parse(atob(link.slice(8).replace(/-/g,"+").replace(/_/g,"/")));return j.ps||j.add||"vmess"}
  const h=link.indexOf("#");if(h>-1)return decodeURIComponent(link.slice(h+1))||"config";return link.split("://")[0]||"config"}catch(e){return"config"}}
function parseLink(l){
  const proto=(l.split("://")[0]||"").toLowerCase();let net="",sec="";
  try{if(proto==="vmess"){const j=JSON.parse(atob(l.slice(8).replace(/-/g,"+").replace(/_/g,"/")));net=j.net||"";sec=j.tls||""}
  else{const p=new URLSearchParams((l.split("?")[1]||"").split("#")[0]);net=p.get("type")||"";sec=p.get("security")||""}}catch(e){}
  return{proto,net,sec}}
function renderList(){
  const box=$("list");
  if(!links.length){box.innerHTML='<div class="card" style="text-align:center;color:var(--mu)">'+esc(t("none"))+"</div>";return}
  box.innerHTML=links.map((l,i)=>{
    const m=parseLink(l),tags=[m.proto,m.net&&m.net!=="tcp"?m.net:"",m.sec&&m.sec!=="none"?m.sec:""].filter(Boolean).map(x=>'<span class="tag">'+esc(x.toUpperCase())+"</span>").join("");
    return'<div class="item"><div class="meta"><div class="n">'+esc(nameOf(l))+'</div><div class="tags">'+tags+"</div></div>"
      +'<button class="mb" type="button" data-c="'+i+'" aria-label="'+esc(t("copy"))+'">'+ic("copy")+'</button><button class="mb" type="button" data-q="'+i+'" aria-label="'+esc(t("qr"))+'">'+ic("qrcode")+"</button></div>"}).join("");
  box.querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>copy(links[+b.dataset.c]));
  box.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>qr(links[+b.dataset.q]))}
function renderApps(){
  const cur=plat(),order=["iOS","Android","Windows","macOS","Linux"],U=encodeURIComponent(subUrl),T=encodeURIComponent(subTitle);
  const sorted=[...APPS].sort((a,b)=>a.p===cur?-1:b.p===cur?1:order.indexOf(a.p)-order.indexOf(b.p));
  const anyHot=sorted.some(g=>g.p===cur);
  $("apps").innerHTML=sorted.map((g,gi)=>{const hot=g.p===cur,open=hot||(!anyHot&&gi===0);
    const rows=g.a.map(a=>{let c=String(a.n).toLowerCase().replace(/[^a-z0-9]/g,"");c=({v2rayng:"v2ray",v2rayn:"v2ray",shadowrocket:"shadow"})[c]||c;
      const q=QI.find(x=>x.n===a.n),add=q?'<a class="mini pri" href="'+esc(q.s.replace("{U}",U).replace("{E}",U).replace("{T}",T))+'">'+ic("bolt")+esc(t("addSub"))+"</a>":"";
      return'<div class="al">'+(appImg(a.n)||'<span class="app-badge '+esc(c)+'">'+esc(String(a.n).slice(0,1).toUpperCase())+"</span>")+"<span>"+esc(a.n)+"</span>"+(a.r?'<span class="t">REC</span>':"")
        +'<span class="acts"><a class="mini" href="'+esc(a.u)+'" target="_blank" rel="noopener">'+ic("download")+esc(t("inst"))+"</a>"+add+"</span></div>"}).join("");
    return'<div class="grp'+(hot?" hot":"")+(open?"":" collapsed")+'"><h4 role="button" tabindex="0" aria-expanded="'+open+'">'+ic(g.i)+esc(g.p)+(hot?' <span style="color:var(--p)">★</span>':"")+ic("chevron-down","chev")+'</h4><div class="gb"><div>'+rows+"</div></div></div>"}).join("");
  $("apps").querySelectorAll(".grp>h4").forEach(h=>{const tg=()=>{const g=h.parentNode;g.classList.toggle("collapsed");h.setAttribute("aria-expanded",String(!g.classList.contains("collapsed")))};
    h.onclick=tg;h.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();tg()}}})}

/* ---------- i18n / theme / events ---------- */
function uiLang(){
  document.documentElement.lang=lang;document.documentElement.dir=lang==="fa"?"rtl":"ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
  document.querySelectorAll("[data-al]").forEach(el=>el.setAttribute("aria-label",t(el.dataset.al)));
  LS.s("nn_lang",lang);data();renderQi();renderGuide();renderList();renderApps();requestAnimationFrame(navInd)}
function uiTheme(){document.documentElement.setAttribute("data-theme",dark?"dark":"light");$("themeBtn").innerHTML=ic(dark?"sun":"moon");LS.s("nn_theme",dark?"dark":"light")}
function applyBrand(){
  const a=String(CONFIG.accent||"").trim();
  if(/^#[0-9a-f]{6}$/i.test(a)){const s=document.documentElement.style;s.setProperty("--p",a);s.setProperty("--p2","color-mix(in srgb,"+a+" 55%,#1d4ed8)");s.setProperty("--pg","color-mix(in srgb,"+a+" 14%,transparent)")}
  const lg=String(CONFIG.logo||"").trim();if(/^https:\/\//i.test(lg)){const im=$("logo");im.src=lg;im.hidden=false;im.onerror=()=>{im.hidden=true}}}
$("themeBtn").onclick=()=>{dark=!dark;uiTheme()};
$("langBtn").onclick=e=>{e.stopPropagation();$("lw").classList.toggle("open")};
document.querySelectorAll(".ld button").forEach(b=>b.onclick=()=>{lang=b.dataset.l;$("lw").classList.remove("open");uiLang()});
document.addEventListener("click",()=>$("lw").classList.remove("open"));
function navInd(){const b=document.querySelector(".nav button.on"),i=$("navInd");if(!b||!i)return;i.style.width=b.offsetWidth+"px";i.style.transform="translateX("+b.offsetLeft+"px)"}
function gotoTab(name){
  document.querySelectorAll(".nav button").forEach(x=>x.classList.toggle("on",x.dataset.t===name));
  document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("on",x.id==="tab-"+name));
  window.scrollTo(0,0);navInd()}
document.querySelectorAll(".nav button").forEach(b=>b.onclick=()=>gotoTab(b.dataset.t));
$("btnGoApps").onclick=()=>gotoTab("apps");
$("btnCopy").onclick=()=>copy(subUrl);$("btnQr").onclick=()=>qr(subUrl);
$("btnAll").onclick=()=>copy(links.join("\n"));
$("btnQrCopy").onclick=()=>{if(window.__lastQr)copy(window.__lastQr)};$("btnQrClose").onclick=closeQr;
$("md").onclick=e=>{if(e.target===$("md"))closeQr()};
addEventListener("keydown",e=>{if(e.key==="Escape")closeQr()});
$("btnFmtJson").onclick=()=>{const u=safeUrl(TV.subJsonUrl);if(u)copy(u)};
$("btnFmtClash").onclick=()=>{const u=safeUrl(TV.subClashUrl);if(u)copy(u)};

applyBrand();uiTheme();uiLang();
if(/(^|[#&])debug/.test(location.hash)){const pre=document.createElement("pre");pre.style.cssText="position:relative;z-index:5;margin:1rem 0;padding:.8rem;border-radius:12px;background:rgba(0,0,0,.75);color:#9ef;font:11px/1.6 monospace;direction:ltr;text-align:left;white-space:pre-wrap;word-break:break-all";const o=Object.assign({},TV);o.links=links.length+" links";o.subUrl="(hidden)";pre.textContent=JSON.stringify(o,null,2);document.querySelector(".app").appendChild(pre)}
setInterval(data,60000);
setInterval(()=>{if(!document.hidden&&$("tab-home").classList.contains("on"))tickCountdown()},1000);
addEventListener("resize",navInd);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(navInd);
