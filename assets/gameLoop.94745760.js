import{_ as d,s as p,p as e,a as f,l as T,D as o,b as m,g as u}from"./index.72d310f9.js";import"./vue.3874b352.js";import{b1 as c}from"./@vue.4ce677c2.js";/* empty css                    */import"./nanoevents.1080beb7.js";import"./lz-string.731cedc5.js";import"./is-plain-object.906d88e8.js";import"./vue-next-select.1a0679e0.js";import"./vuedraggable.b00d7bb1.js";import"./sortablejs.dc43b961.js";import"./vue-textarea-autosize.35804eaf.js";import"./vue-toastification.4004d127.js";import"./workbox-window.8d14e8b7.js";let n=null,l=null;function a(){const t=Date.now();let i=(t-e.time)/1e3;e.time=t;const r=i;if(f.lastTenTicks.push(r),f.lastTenTicks.length>10&&(f.lastTenTicks=f.lastTenTicks.slice(1)),!((l==null?void 0:l.value)&&!e.keepGoing)&&!f.hasNaN&&(i=Math.max(i,0),e.devSpeed!==0)){if(T.value=!1,e.offlineTime!=null){if(o.gt(e.offlineTime,m.offlineLimit*3600)&&(e.offlineTime=m.offlineLimit*3600),o.gt(e.offlineTime,0)&&e.devSpeed!==0){const s=Math.max(e.offlineTime/10,i);e.offlineTime=e.offlineTime-s,i+=s}else e.devSpeed===0&&(e.offlineTime+=i);(!e.offlineProd||o.lt(e.offlineTime,0))&&(e.offlineTime=null)}i=Math.min(i,m.maxTickLength),e.devSpeed!=null&&(i*=e.devSpeed),Number.isFinite(i)||(i=1e308),!o.eq(i,0)&&(e.timePlayed+=i,Number.isFinite(e.timePlayed)||(e.timePlayed=1e308),u.emit("update",i,r),p.unthrottled?(requestAnimationFrame(a),n!=null&&(clearInterval(n),n=null)):n==null&&(n=setInterval(a,50)))}}async function x(){l=(await d(()=>import("./index.72d310f9.js").then(function(t){return t.c}),["assets/index.72d310f9.js","assets/index.2de7af1c.css","assets/@fontsource.f66d05e7.css","assets/vue.3874b352.js","assets/lz-string.731cedc5.js","assets/@vue.4ce677c2.js","assets/nanoevents.1080beb7.js","assets/is-plain-object.906d88e8.js","assets/vue-next-select.1a0679e0.js","assets/vue-next-select.9e6f4164.css","assets/vuedraggable.b00d7bb1.js","assets/sortablejs.dc43b961.js","assets/vue-textarea-autosize.35804eaf.js","assets/vue-toastification.4004d127.js","assets/vue-toastification.4b5f8ac8.css","assets/workbox-window.8d14e8b7.js"])).hasWon,c(l,t=>{t&&u.emit("gameWon")}),p.unthrottled?requestAnimationFrame(a):n=setInterval(a,50)}export{x as startGameLoop};
