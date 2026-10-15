/*<<JALALI>>*/
function toJalaliParts(gy,gm,gd){
  const g_d_m=[0,31,59,90,120,151,181,212,243,273,304,334];
  let jy=(gy<=1600)?0:979;gy-=(gy<=1600)?621:1600;
  const gy2=(gm>2)?(gy+1):gy;
  let days=(365*gy)+(parseInt((gy2+3)/4))-parseInt((gy2+99)/100)+parseInt((gy2+399)/400)-80+gd+g_d_m[gm-1];
  jy+=33*parseInt(days/12053);days%=12053;jy+=4*parseInt(days/1461);days%=1461;
  if(days>365){jy+=parseInt((days-1)/365);days=(days-1)%365}
  const jm=(days<186)?1+parseInt(days/31):7+parseInt((days-186)/30);
  const jd=1+((days<186)?(days%31):((days-186)%30));
  return {jy,jm,jd};
}
function pad2(n){return String(n).padStart(2,"0")}
function toJalali(gy,gm,gd){const p=toJalaliParts(gy,gm,gd);return p.jy+"/"+pad2(p.jm)+"/"+pad2(p.jd)}
/*<</JALALI>>*/
/*<<APPS>>*/
const APPS=[
  {p:"Android",i:"android",a:[{n:"Happ",u:"https://play.google.com/store/apps/details?id=com.happproxy",r:1},{n:"v2rayNG",u:"https://github.com/2dust/v2rayNG/releases"},{n:"V2Box",u:"https://play.google.com/store/apps/details?id=dev.hexasoftware.v2box"},{n:"Hiddify",u:"https://github.com/hiddify/hiddify-app/releases"}]},
  {p:"iOS",i:"apple",a:[{n:"Happ",u:"https://apps.apple.com/app/id6504287215",r:1},{n:"Streisand",u:"https://apps.apple.com/app/id6450534064"},{n:"V2Box",u:"https://apps.apple.com/app/id6446814690"},{n:"Shadowrocket",u:"https://apps.apple.com/app/id932747118"}]},
  {p:"Windows",i:"windows",a:[{n:"Happ",u:"https://github.com/Happ-proxy/happ-desktop/releases",r:1},{n:"Throne",u:"https://github.com/throneproj/Throne/releases",r:1},{n:"Hiddify",u:"https://github.com/hiddify/hiddify-app/releases"},{n:"v2rayN",u:"https://github.com/2dust/v2rayN/releases"}]},
  {p:"macOS",i:"apple",a:[{n:"Happ",u:"https://apps.apple.com/app/id6504287215",r:1},{n:"Hiddify",u:"https://github.com/hiddify/hiddify-app/releases"},{n:"V2Box",u:"https://apps.apple.com/app/id6446814690"}]},
  {p:"Linux",i:"linux",a:[{n:"Happ",u:"https://github.com/Happ-proxy/happ-desktop/releases",r:1},{n:"Throne",u:"https://github.com/throneproj/Throne/releases",r:1},{n:"Hiddify",u:"https://github.com/hiddify/hiddify-app/releases"}]},
];
const QI=[{n:"Happ",i:"bolt",s:"happ://add/{U}"},{n:"Hiddify",i:"shield-halved",s:"hiddify://import/{U}"},{n:"V2Box",i:"box-open",s:"v2box://install-sub?url={E}&title={T}"},{n:"v2rayNG",i:"android",s:"v2rayng://install-config?url={E}",o:["Android"]}];
const I={
  fa:{n1:"خانه",n2:"کانفیگ",n3:"برنامه‌ها",n4:"پروفایل",used:"مصرف‌شده",limit:"حجم کل",left:"باقی‌مانده",down:"دانلود شده",up:"آپلود شده",copy:"کپی اشتراک",qi:"افزودن سریع",cfg:"کانفیگ‌ها",all:"کپی همه",apps:"کلاینت‌ها",prof:"پروفایل",on:"فعال",off:"غیرفعال",online:"آنلاین",unl:"نامحدود",days:"روز",hours:"ساعت",mins:"دقیقه",ok:"کپی شد!",none:"موردی نیست",traffic:"ترافیک",time:"زمان",exp:"زمان باقی‌مانده",p1:"نام کاربری",p2:"شناسه",p3:"وضعیت",p5:"تاریخ انقضا",p6:"آخرین اتصال",period:"بازه مصرف",lat:"تأخیر زنده",updated:"آخرین بروزرسانی",noping:"سرور موقعیتی یافت نشد",wait:"...",ms:"ms",day:"روز",hour:"ساعت",min:"دقیقه",total:"کل",renew:"تمدید",support:"پشتیبانی",warnVol:"حجم اشتراک رو به اتمام است",warnExp:"اشتراک به‌زودی منقضی می‌شود",fmtSub:"کپی Sub",fmtJson:"کپی JSON",fmtClash:"کپی Clash"},
  en:{n1:"Home",n2:"Configs",n3:"Apps",n4:"Profile",used:"Used",limit:"Total quota",left:"Remaining",down:"Downloaded",up:"Uploaded",copy:"Copy sub",qi:"Quick import",cfg:"Configs",all:"Copy all",apps:"Clients",prof:"Profile",on:"Active",off:"Inactive",online:"Online",unl:"Unlimited",days:"days",hours:"hours",mins:"mins",ok:"Copied!",none:"Nothing here",traffic:"Traffic",time:"Time",exp:"Time remaining",p1:"Username",p2:"User ID",p3:"Status",p5:"Expire date",p6:"Last connection",period:"Usage period",lat:"Live Latency",updated:"Last update",noping:"No location servers",wait:"...",ms:"ms",day:"Days",hour:"Hours",min:"Mins",total:"Total",renew:"Renew",support:"Support",warnVol:"Data quota is running low",warnExp:"Subscription expires soon",fmtSub:"Copy Sub",fmtJson:"Copy JSON",fmtClash:"Copy Clash"}
};
/*<</APPS>>*/
/*<<HOSTX>>*/
function extractHost(link){try{
  if(link.startsWith("vmess://")){const j=JSON.parse(atob(link.slice(8).replace(/-/g,"+").replace(/_/g,"/")));return{host:j.add||j.host||"",port:j.port||443,name:j.ps||""}}
  if(link.startsWith("ss://")){const m=link.match(/@([^:#/?]+)/);if(m)return{host:m[1],port:443,name:nameOf(link)}}
  const m=link.match(/@([^:#/?]+):?(\d+)?/);if(m)return{host:m[1],port:parseInt(m[2]||"443",10),name:nameOf(link)};
  const m2=link.match(/:\/\/(?:[^@/]+@)?([^:#/?]+)/);if(m2)return{host:m2[1],port:443,name:nameOf(link)};
}catch(e){}return{host:"",port:443,name:nameOf(link)}}
/*<</HOSTX>>*/
