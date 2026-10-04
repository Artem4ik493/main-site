/* artem4ik493 — interactive visual layer */
(()=>{'use strict';
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const progress=document.createElement('div');progress.className='fx-progress';document.body.append(progress);
let ticking=false;const scroll=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform='scaleX('+Math.max(0,Math.min(1,max?scrollY/max:0))+')';ticking=false};
addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(scroll)}},{passive:true});scroll();
document.querySelectorAll('.reveal').forEach((el,i)=>el.style.setProperty('--fx-delay',Math.min(i%6,5)*70+'ms'));
if(reduce.matches)return;
const glow=document.createElement('div');glow.className='fx-cursor';document.body.append(glow);
if(fine){
 addEventListener('pointermove',e=>{glow.style.setProperty('--mx',e.clientX+'px');glow.style.setProperty('--my',e.clientY+'px');glow.style.opacity='1'},{passive:true});
 document.querySelectorAll('.card,.project-card,.panel,.tool-card,.tool,.stat,.contact-card,.profile-card,.network-shell,.world-shell').forEach(card=>{
  card.classList.add('fx-tilt');
  card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;card.style.setProperty('--fx-x',x*100+'%');card.style.setProperty('--fx-y',y*100+'%');card.style.transform='perspective(1000px) rotateX('+((.5-y)*4)+'deg) rotateY('+((x-.5)*4)+'deg) translateY(-4px)'},{passive:true});
  card.addEventListener('pointerleave',()=>card.style.transform='');
 });
}
document.querySelectorAll('a.btn,.nav-cta').forEach(el=>el.addEventListener('click',e=>{
 const r=el.getBoundingClientRect(),s=document.createElement('span');s.className='fx-ripple';s.style.left=e.clientX-r.left+'px';s.style.top=e.clientY-r.top+'px';el.append(s);setTimeout(()=>s.remove(),650);
}));
document.querySelectorAll('.reveal').forEach(el=>el.classList.add('fx-ready'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('fx-visible');io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.reveal,.card,.tool,.project,.network-shell,.contact-card').forEach(e=>io.observe(e));
document.querySelectorAll('.network-showcase').forEach(e=>e.classList.add('fx-network-live'));
const existingNetwork=document.querySelector('.network-showcase');
if(!existingNetwork){
 const anchor=document.querySelector('#projects');
 if(anchor){
  const network=document.createElement('div');network.className='fx-network';
  network.innerHTML='<canvas aria-label="Декоративная схема сетевых узлов"></canvas><span class="fx-network-label">NETWORK / TOPOLOGY</span><span class="fx-network-legend">SIMULATED VISUALIZATION</span>';
  anchor.querySelector('.section-head')?.after(network);
 }
}
const layer=document.createElement('div');layer.className='fx-grid';layer.innerHTML='<canvas aria-hidden="true"></canvas>';document.body.prepend(layer);
const net=document.querySelector('.fx-network');
const canvases=[layer.querySelector('canvas'),net?.querySelector('canvas')].filter(Boolean);
const states=canvases.map((canvas,i)=>({canvas,ctx:canvas.getContext('2d'),nodes:[],w:0,h:0,active:i===0}));
function resize(s){const r=s.canvas.getBoundingClientRect();if(!r.width||!r.height)return;const d=Math.min(devicePixelRatio||1,2);s.canvas.width=Math.round(r.width*d);s.canvas.height=Math.round(r.height*d);s.ctx.setTransform(d,0,0,d,0,0);s.w=r.width;s.h=r.height;const n=s.active?Math.min(32,Math.max(10,Math.floor(s.w/48))):12;s.nodes=Array.from({length:n},(_,i)=>({x:Math.random()*s.w,y:Math.random()*s.h,vx:(Math.random()-.5)*.14,vy:(Math.random()-.5)*.14,r:s.active?1.1:3+(i%2)}))}
const ro=new ResizeObserver(()=>states.forEach(resize));states.forEach(s=>ro.observe(s.canvas));
let frame=0,visible=true;document.addEventListener('visibilitychange',()=>visible=!document.hidden);
function draw(){requestAnimationFrame(draw);if(!visible)return;frame++;for(const s of states){if(!s.w)continue;const c=s.ctx;c.clearRect(0,0,s.w,s.h);for(const n of s.nodes){n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>s.w)n.vx*=-1;if(n.y<0||n.y>s.h)n.vy*=-1}
const max=s.active?145:Math.min(250,s.w*.4);for(let i=0;i<s.nodes.length;i++)for(let j=i+1;j<s.nodes.length;j++){const a=s.nodes[i],b=s.nodes[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d>max)continue;const alpha=(1-d/max)*(s.active?.14:.4);c.strokeStyle='rgba(104,167,255,'+alpha+')';c.lineWidth=s.active?.65:1;c.beginPath();c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);c.stroke();if(!s.active&&(i+j)%4===0){const t=(frame*.003+(i+j)*.11)%1;c.fillStyle='rgba(184,215,255,.95)';c.beginPath();c.arc(a.x+(b.x-a.x)*t,a.y+(b.y-a.y)*t,2,0,Math.PI*2);c.fill()}}
for(const n of s.nodes){c.fillStyle=s.active?'rgba(104,167,255,.5)':'#68a7ff';c.shadowColor='#68a7ff';c.shadowBlur=s.active?0:12;c.beginPath();c.arc(n.x,n.y,n.r,0,Math.PI*2);c.fill();c.shadowBlur=0}}}
requestAnimationFrame(draw);
})();