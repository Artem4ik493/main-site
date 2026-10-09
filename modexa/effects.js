/* Modexa interactive effects — adapted from the main-site motion layer */
(()=>{'use strict';
const reduce=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover:hover) and (pointer:fine)').matches,touch=matchMedia('(pointer:coarse)').matches;
const progress=document.createElement('div');progress.className='mx-progress';document.body.append(progress);
let scheduled=false;const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform='scaleX('+Math.max(0,Math.min(1,max?scrollY/max:0))+')';scheduled=false};
addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(update)}},{passive:true});update();
const revealEls=[...document.querySelectorAll('.reveal')];
revealEls.forEach((el,i)=>el.style.setProperty('--mx-delay',Math.min(i%6,5)*65+'ms'));
if(reduce.matches){revealEls.forEach(el=>el.classList.add('in'));return}
if(fine){
 const canvas=document.createElement('canvas');canvas.className='mx-particles';document.body.append(canvas);const ctx=canvas.getContext('2d'),particles=[];let last=0;
 const resize=()=>{const d=Math.min(devicePixelRatio||1,2);canvas.width=innerWidth*d;canvas.height=innerHeight*d;ctx.setTransform(d,0,0,d,0,0)};resize();addEventListener('resize',resize,{passive:true});
 addEventListener('pointermove',e=>{const now=performance.now();if(now-last<22)return;last=now;for(let i=0;i<2;i++)particles.push({x:e.clientX+(Math.random()-.5)*6,y:e.clientY+(Math.random()-.5)*6,vx:(Math.random()-.5)*.7,vy:(Math.random()-.5)*.7,r:Math.random()*1.8+.6,a:.65,life:1})},{passive:true});
 let visible=true;document.addEventListener('visibilitychange',()=>visible=!document.hidden);
 function draw(){requestAnimationFrame(draw);if(!visible)return;ctx.clearRect(0,0,innerWidth,innerHeight);for(let i=particles.length-1;i>=0;i--){const p=particles[i];p.x+=p.vx;p.y+=p.vy;p.a*=.94;p.life-=.03;p.r*=.99;if(p.life<=0){particles.splice(i,1);continue}const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*5);g.addColorStop(0,'rgba(220,205,255,'+p.a+')');g.addColorStop(1,'rgba(232,121,249,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,p.r*5,0,Math.PI*2);ctx.fill()}}requestAnimationFrame(draw);
}

// Ambient connected-node field (same visual language as the main site).
const grid=document.createElement('div');grid.className='mx-grid';grid.innerHTML='<canvas aria-hidden="true"></canvas>';document.body.prepend(grid);
const bg=grid.querySelector('canvas'),bc=bg.getContext('2d');let bw=0,bh=0,nodes=[];
function resizeBg(){const r=bg.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);bw=r.width;bh=r.height;bg.width=Math.round(bw*d);bg.height=Math.round(bh*d);bc.setTransform(d,0,0,d,0,0);const count=touch?12:Math.min(42,Math.max(16,Math.floor(bw/34)));nodes=Array.from({length:count},()=>({x:Math.random()*bw,y:Math.random()*bh,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:Math.random()*1.2+.5}))}
resizeBg();addEventListener('resize',resizeBg,{passive:true});let bgVisible=true;document.addEventListener('visibilitychange',()=>bgVisible=!document.hidden);
function drawBg(){requestAnimationFrame(drawBg);if(!bgVisible||reduce.matches)return;bc.clearRect(0,0,bw,bh);for(const n of nodes){n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>bw)n.vx*=-1;if(n.y<0||n.y>bh)n.vy*=-1}const max=touch?95:145;for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){const a=nodes[i],b=nodes[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<max){bc.strokeStyle='rgba(167,139,250,'+((1-d/max)*.14)+')';bc.lineWidth=.7;bc.beginPath();bc.moveTo(a.x,a.y);bc.lineTo(b.x,b.y);bc.stroke()}}for(const n of nodes){bc.fillStyle='rgba(196,181,253,.45)';bc.beginPath();bc.arc(n.x,n.y,n.r,0,Math.PI*2);bc.fill()}}
requestAnimationFrame(drawBg);

const cards=document.querySelectorAll('.feature,.phase,.bridge-intro,.bridge-flow,.architecture,.cta,.platform,.core,.output div');
cards.forEach(card=>{card.classList.add('mx-card');if(!fine)return;card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();if(!r.width||!r.height)return;const x=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),y=Math.max(0,Math.min(1,(e.clientY-r.top)/r.height));card.style.setProperty('--mx-px',x*100+'%');card.style.setProperty('--mx-py',y*100+'%');card.style.setProperty('--mx-rx',((.5-y)*4.5)+'deg');card.style.setProperty('--mx-ry',((x-.5)*4.5)+'deg');card.style.setProperty('--mx-dx',((x-.5)*5)+'px');card.style.setProperty('--mx-dy',((y-.5)*5)+'px')},{passive:true});card.addEventListener('pointerleave',()=>{card.style.setProperty('--mx-rx','0deg');card.style.setProperty('--mx-ry','0deg');card.style.setProperty('--mx-dx','0px');card.style.setProperty('--mx-dy','0px')})});
document.querySelectorAll('a.btn,.navcta').forEach(el=>el.addEventListener('click',e=>{const r=el.getBoundingClientRect(),s=document.createElement('span');s.className='mx-ripple';s.style.left=e.clientX-r.left+'px';s.style.top=e.clientY-r.top+'px';el.append(s);setTimeout(()=>s.remove(),720)}));
if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.09});revealEls.forEach(el=>io.observe(el))}else revealEls.forEach(el=>el.classList.add('in'));
})();