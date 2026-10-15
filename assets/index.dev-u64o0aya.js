var Gu=Object.defineProperty;var Hu=(i,e,t)=>e in i?Gu(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Re=(i,e,t)=>Hu(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ql=20,Oi=1/Ql,ec=["construction","plants","mining","cooking","medicine","intellectual","social","crafting"],Cn=4.2,Vu=3,tc=27164,Fe=120,rt=210,Mr=18,yr=14,Po=[{id:"nell",name:"Nell",body:"female",hair:"long",specialty:"plants"},{id:"amos",name:"Amos",body:"male",hair:"short",beard:"goatee",hat:"cap",specialty:"construction"},{id:"wren",name:"Wren",body:"thin",hair:"bun",hat:"brim",specialty:"medicine"},{id:"idris",name:"Idris",body:"fat",hair:"ponytail",hat:"hood",specialty:"social"},{id:"bram",name:"Bram",body:"hulk",hair:"mohawk",beard:"full",hat:"tall",specialty:"mining"}],Do=["tree_pine_1","tree_pine_2","tree_poplar_1","tree_oak_1","tree_birch_1"],Uo=["boulder_1","boulder_2","boulder_3","boulder_4","boulder_5","boulder_6"],Io=["#e0b090","#c68658","#8d5a3c","#f0d0b0","#a56b45"],us=["#241c18","#6b3a22","#c4a15a","#3a3430","#141210"],fs=["#8d3d45","#3d5c8d","#3d6b4f","#c4a15a","#5c4a3a","#6e4a62"],No=["#3a3f4a","#4a3a32","#2c3834","#534838"];function ia(i){return(i>>>0).toString(16).padStart(4,"0")}function Wu(i){const e=Qu(i>>>0),t=3+Math.floor(e()*3),n=new Zu;n.carve(e);const s=n.campSite();n.creek(e,s),n.banks(),n.meadows(e,s),n.soil(e,s),n.forests(e,s),n.stone(e,s);const r=n.startingSite(s);n.seal(s.x+2,s.z+8);const o=Xu(e,t),a=[],l=[];o.forEach((u,f)=>{const h={x:s.x+2+f*2,z:s.z+8};a.push(qu(u,h)),l.push(Yu(e,u,f,h))});const c={name:"Galt's Gulch",width:Fe,height:rt,terrain:n.terrain,elevation:n.elevation,walls:n.walls,doors:n.doors,roofs:n.roofs,props:n.props,figures:a,animals:[],marks:[{x:r.doorX,z:r.doorZ}]};return{seed:i>>>0,colony:c,spawns:l,clearing:n.clearing(s,r)}}function Xu(i,e){const t=Po.slice(1);for(let n=t.length-1;n>0;n--){const s=Math.floor(i()*(n+1)),r=t[n];t[n]=t[s],t[s]=r}return[Po[0],...t.slice(0,e-1)]}function qu(i,e){const t=Ju(i.name),n=[`person_${i.body}_lower`,`person_${i.body}_upper`,"person_head","person_face",`person_hair_${i.hair}`],s=[No[t%No.length],fs[t%fs.length],Io[t%Io.length],"#ffffff",us[t%us.length]];return i.beard&&(n.push(`person_beard_${i.beard}`),s.push(us[t%us.length])),i.hat&&(n.push(`person_hat_${i.hat}`),s.push(fs[(t+2)%fs.length])),{id:i.id,name:i.name,x:e.x,z:e.z,yaw:0,wander:!0,parts:n,tints:s}}function Yu(i,e,t,n){return{id:t+1,key:e.id,name:e.name,x:n.x+.5,z:n.z+.5,yaw:0,skills:$u(i,e.specialty),mind:ju(i,t),needs:{food:An(.86+i()*.1),rest:An(.8+i()*.12),recreation:An(.84+i()*.1)},purseCents:6e3+t*1200+Math.floor(i()*800)}}function $u(i,e){const t={};for(const n of ec){const s=n===e?6:1,r=Math.floor(n===e?i()*3:i()*4);t[n]=s+r}return t}function ju(i,e){const t={food:8+Math.floor(i()*8),timber:10+Math.floor(i()*16),stone:4+Math.floor(i()*8),ore:e===0?0:Math.floor(i()*3),power:0,goldOre:0};return{stated:"objectivism",certainty:An(.78+i()*.18),seeds:[],charisma:An(.3+i()*.5),suggestibility:An(.15+i()*.35),receptivity:An(.7+i()*.25),residence:"founder",integrity:1,morale:An(.75+i()*.2),force:"none",laborHoursLeft:14,inventory:t}}class Zu{constructor(){Re(this,"terrain",Array.from({length:Fe*rt},()=>"grass"));Re(this,"elevation",new Uint8Array(Fe*rt));Re(this,"walls",[]);Re(this,"doors",[]);Re(this,"roofs",[]);Re(this,"props",[]);Re(this,"wallAt",new Set);Re(this,"occupied",new Uint8Array(Fe*rt));Re(this,"axisX",new Float64Array(rt));Re(this,"seq",0);Re(this,"phase",0);Re(this,"wobble",1);Re(this,"campZ",64);Re(this,"mouthX",0);Re(this,"openZ",16)}carve(e){this.phase=e()*Math.PI*2,this.wobble=.6+e()*1.4,this.campZ=58+Math.floor(e()*14);let t=Fe*.5+(e()-.5)*6;for(let n=0;n<rt;n++)this.axisX[n]=t,t+=Math.sin(n*.045+this.phase)*.18+(e()-.5)*.28,t=hs(t,Fe*.4,Fe*.6);this.mouthX=Math.round(this.axisX[this.openZ]);for(let n=0;n<rt;n++){const s=this.halfWidth(n),r=this.axisX[n];for(let o=0;o<Fe;o++){let a=this.relief(o,n,r,s);if(this.onBorder(o,n)&&!this.inCleft(o,n)){const l=8+Math.round(Math.sin(o*.31+n*.17+this.phase)*2);a=Math.max(a,l)}this.inCleft(o,n)&&(a=0),this.setElev(o,n,a)}}this.crags(e)}campSite(){const e=this.campZ,t=Math.round(this.axisX[e+4]??Fe/2),n=hs(t-11,2,Fe-Mr-2);for(let s=e;s<e+yr;s++)for(let r=n;r<n+Mr;r++)this.setElev(r,s,0);return{x:n,z:e,w:Mr,h:yr}}creek(e,t){let n=0,s=0;for(let r=this.openZ+4;r<rt-12;r++){const o=this.axisX[r];let a=Math.round(o+Math.min(8,this.halfWidth(r)-2));if(Zt(a,r,t)&&(a=t.x+t.w),(!At(a,r)||this.elevation[r*Fe+a]!==0)&&(a=Math.round(o)),!At(a,r)||Zt(a,r,t)||this.wallAt.has(Vn(a,r))||this.elevation[r*Fe+a]!==0)continue;this.setTerrain(a,r,"stream");const l=a-1;At(l,r)&&this.elevation[r*Fe+l]===0&&!Zt(l,r,t)&&!this.wallAt.has(Vn(l,r))&&e()>.35&&this.setTerrain(l,r,"stream"),n=a,s=r}for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const a=n+o,l=s+r;!At(a,l)||Zt(a,l,t)||this.wallAt.has(Vn(a,l))||this.elevation[l*Fe+a]===0&&(this.onBorder(a,l)||this.setTerrain(a,l,"water"))}}banks(){for(let e=1;e<rt-1;e++)for(let t=1;t<Fe-1;t++){const n=this.terrain[e*Fe+t];n!=="grass"&&n!=="gravel"||this.nearWater(t,e)&&(Ku(t,e)<=2||(this.terrain[e*Fe+t]=n==="gravel"?"gravel":"mud"))}}meadows(e,t){for(let n=0;n<8;n++){const s=this.openZ+8+Math.floor(e()*(rt-this.openZ-24)),r=Math.round(this.axisX[s]+(e()-.5)*8);this.disk(r,s,4+Math.floor(e()*3),t)}}soil(e,t){this.fillRect(t.x+1,t.z+t.h+1,8,4,"soilRich",!0);for(let n=0;n<5;n++){const s=this.openZ+10+Math.floor(e()*(rt-this.openZ-28)),r=Math.round(this.axisX[s]-4-e()*4);this.fillRect(r,s,5,3,n===0?"soil":"soilRich",!0)}}forests(e,t){for(let n=0;n<18;n++){const s=this.openZ+6+Math.floor(e()*(rt-this.openZ-22)),r=e()<.5?-1:1,o=Math.round(this.axisX[s]+r*(4+e()*5));let a=0;for(let l=-2;l<=2;l+=2)for(let c=-2;c<=2;c+=2)e()>.62||this.tryTree(e,o+c,s+l,t)&&(a+=1);a===0&&this.tryTree(e,o,s,t)}}stone(e,t){for(let n=this.openZ+8;n<rt-14;n+=12)for(const s of[-1,1]){const r=this.cliffX(n,s,1);if(r<0)continue;const o=r-s;if(Zt(o,n,t)||Zt(o,n+1,t))continue;const a=Uo[Math.floor(e()*Uo.length)];this.tryProp({model:a,x:o,z:n,w:1,d:1,stuff:"Stone",blocks:!0})}}startingSite(e){const t={x:e.x+1,z:e.z+1,w:7,d:6},n={x:e.x+10,z:e.z+1,w:5,d:4};this.building(t,"thatch","cabin"),this.building(n,"slate","shed"),this.tryProp({model:"bedroll",x:t.x+1,z:t.z+4,w:1,d:1,stuff:"Fabric",blocks:!0,movable:!0}),this.tryProp({model:"table_1x2",x:t.x+4,z:t.z+2,w:1,d:2,stuff:"Wood",blocks:!0,movable:!0}),this.tryProp({model:"dining_chair",x:t.x+5,z:t.z+2,w:1,d:1,stuff:"Wood",blocks:!0,movable:!0}),this.tryProp({model:"shelf",x:n.x+1,z:n.z+2,w:1,d:1,stuff:"Wood",blocks:!0,movable:!0}),this.tryProp({model:"barrel",x:n.x+3,z:n.z+2,w:1,d:1,stuff:"Wood",blocks:!0,movable:!0}),this.tryProp({model:"barrel",x:n.x+3,z:n.z+1,w:1,d:1,stuff:"Wood",blocks:!0,movable:!0});for(let s=e.z+7;s<e.z+e.h;s++)for(let r=e.x;r<e.x+e.w;r++)this.wallAt.has(Vn(r,s))||this.terrain[s*Fe+r]==="water"||this.terrain[s*Fe+r]==="stream"||(this.terrain[s*Fe+r]="flagstone");return this.tryProp({model:"campfire",x:e.x+8,z:e.z+9,w:1,d:1,blocks:!1,movable:!0}),{doorX:t.x+3,doorZ:t.z}}seal(e,t){const n=new Uint8Array(Fe*rt),s=[{x:e,z:t}];for(;s.length>0;){const r=s.pop();if(!r||!At(r.x,r.z))continue;const o=r.z*Fe+r.x;n[o]||this.blocked(r.x,r.z)||(n[o]=1,s.push({x:r.x+1,z:r.z},{x:r.x-1,z:r.z},{x:r.x,z:r.z+1},{x:r.x,z:r.z-1}))}for(let r=0;r<rt;r++)for(let o=0;o<Fe;o++){const a=r*Fe+o;n[a]||this.blocked(o,r)||(this.terrain[a]="stream")}}clearing(e,t){const n=[];for(let s=e.z+7;s<e.z+e.h;s++)for(let r=e.x;r<e.x+e.w;r++)this.blocked(r,s)||n.push({x:r,z:s});return this.blocked(t.doorX,t.doorZ)||n.push({x:t.doorX,z:t.doorZ}),n}halfWidth(e){if(e<this.openZ||e>rt-10)return 0;const t=(e-this.openZ)/14;if(t<1)return 2+t*8;const n=this.campZ-2,s=this.campZ+yr+6;return e>=n&&e<s?17:10+Math.sin(e*.05+this.phase)*this.wobble}relief(e,t,n,s){const r=Math.abs(e-n);if(r<=s)return 0;const o=r-s;let a=o<1.15?1:Math.min(9,3+Math.ceil((o-1.15)*1.8));if(a>=3){const l=Math.sin(e*.23+this.phase)*Math.cos(t*.08+this.phase*.4),c=Math.sin((e+t)*.045+this.phase);a=hs(Math.round(a+l*2.4+c*1.8),3,11)}return a}inCleft(e,t){return t>this.openZ+1?!1:e===this.mouthX||e===this.mouthX+1}onBorder(e,t){return e===0||t===0||e===Fe-1||t===rt-1}setElev(e,t,n){if(!At(e,t))return;const s=hs(n,0,11),r=t*Fe+e;this.elevation[r]=s,s===0?this.terrain[r]="grass":s===1?this.terrain[r]="gravel":this.terrain[r]="roughStone"}crags(e){for(const t of[-1,1])for(let n=0;n<4;n++){const s=28+Math.floor(e()*(rt-56));for(let r=0;r<6;r++){const o=this.cliffX(s+r,t,Vu);o>=0&&this.addWall(o,s+r,"rockOre")}}for(let t=24;t<rt-16;t+=7){const n=this.cliffX(t,-1,2);n>=0&&this.addWall(n,t,"rock");const s=this.cliffX(t+3,1,2);s>=0&&this.addWall(s,t+3,"rock")}}cliffX(e,t,n){if(e<0||e>=rt)return-1;const s=Math.round(this.axisX[e]??0);for(let r=1;r<48;r++){const o=s+t*r;if(!At(o,e))return-1;if(this.elevation[e*Fe+o]>=n)return o}return-1}building(e,t,n){const s={x:e.x+Math.floor(e.w/2),z:e.z};for(let r=e.z;r<e.z+e.d;r++)for(let o=e.x;o<e.x+e.w;o++){if(o===e.x||r===e.z||o===e.x+e.w-1||r===e.z+e.d-1){if(o===s.x&&r===s.z)continue;this.addWall(o,r,"planks");continue}this.setTerrain(o,r,"woodFloor")}this.doors.push({id:`${n}-door`,x:s.x,z:s.z,yaw:0,stuff:"Wood",facade:"s"}),this.roofs.push({id:`${n}-roof`,x:e.x,z:e.z,w:e.w,d:e.d,style:t,ridge:"x"})}disk(e,t,n,s){for(let r=t-n;r<=t+n;r++)for(let o=e-n;o<=e+n;o++){if((o-e)**2+(r-t)**2>n*n||!At(o,r)||this.elevation[r*Fe+o]!==0||Zt(o,r,s))continue;this.terrain[r*Fe+o]==="grass"&&(this.terrain[r*Fe+o]="grassRich")}}fillRect(e,t,n,s,r,o){for(let a=t;a<t+s;a++)for(let l=e;l<e+n;l++){if(!At(l,a)||this.elevation[a*Fe+l]!==0)continue;const c=this.terrain[a*Fe+l];c==="water"||c==="stream"||c==="roughStone"||o&&c==="woodFloor"||(this.terrain[a*Fe+l]=r)}}tryTree(e,t,n,s){if(Zt(t,n,s)||Zt(t+1,n,s)||Zt(t,n+1,s)||Zt(t+1,n+1,s)||!this.treeFits(t,n))return!1;const r=Do[Math.floor(e()*Do.length)];return this.tryProp({model:r,x:t,z:n,w:2,d:2,scale:2.2,blocks:!0})}treeFits(e,t){for(let n=0;n<2;n++)for(let s=0;s<2;s++){const r=e+s,o=t+n;if(!At(r,o)||this.elevation[o*Fe+r]!==0||Math.abs(r-this.axisX[o])<3.2)return!1}return!0}tryProp(e){const t=e.w??1,n=e.d??1,s=Math.floor(e.x),r=Math.floor(e.z);if(!this.fits(s,r,t,n))return!1;if(e.blocks!==!1)for(let a=0;a<n;a++)for(let l=0;l<t;l++)this.occupied[(r+a)*Fe+(s+l)]=1;return this.props.push({...e,id:`${e.model}-${this.seq++}`,x:s,z:r}),!0}fits(e,t,n,s){for(let r=0;r<s;r++)for(let o=0;o<n;o++){const a=e+o,l=t+r;if(!At(a,l)||this.blocked(a,l))return!1;const c=this.terrain[l*Fe+a];if(c==="water"||c==="stream")return!1}return!0}blocked(e,t){if(!At(e,t)||this.wallAt.has(Vn(e,t))||this.elevation[t*Fe+e]>=1||this.occupied[t*Fe+e])return!0;const n=this.terrain[t*Fe+e];return n==="water"||n==="stream"}addWall(e,t,n){!At(e,t)||this.wallAt.has(Vn(e,t))||(this.wallAt.add(Vn(e,t)),this.walls.push({x:e,z:t,kind:n}))}setTerrain(e,t,n){At(e,t)&&(this.terrain[t*Fe+e]=n)}nearWater(e,t){for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){if(s===0&&n===0)continue;const r=e+s,o=t+n;if(!At(r,o))continue;const a=this.terrain[o*Fe+r];if(a==="water"||a==="stream")return!0}return!1}}function Zt(i,e,t){return i>=t.x&&e>=t.z&&i<t.x+t.w&&e<t.z+t.h}function Ku(i,e){return Math.min(i,e,Fe-1-i,rt-1-e)}function At(i,e){return i>=0&&e>=0&&i<Fe&&e<rt}function Vn(i,e){return`${i},${e}`}function hs(i,e,t){return i<e?e:i>t?t:i}function An(i){return i<0?0:i>1?1:i}function Ju(i){let e=0;for(const t of i)e=Math.imul(e,33)+t.charCodeAt(0)>>>0;return e}function Qu(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ef(i,e){let t=tf();const n=document.createElement("div");n.id="title-screen",n.innerHTML=`
    <div class="title-sky" aria-hidden="true">
      <svg class="title-ridges" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="gulch-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1a120e"/>
            <stop offset="38%" stop-color="#4a2a1c"/>
            <stop offset="62%" stop-color="#c47a3e"/>
            <stop offset="78%" stop-color="#e6c48a"/>
            <stop offset="100%" stop-color="#243028"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="700" fill="url(#gulch-sky)"/>
        <circle cx="860" cy="250" r="54" fill="#f0d7a4" opacity="0.9"/>
        <circle cx="860" cy="250" r="90" fill="#e7b56a" opacity="0.18"/>
        <path d="M0 430 L180 300 L340 390 L520 240 L700 360 L880 220 L1080 340 L1200 280 L1200 700 L0 700 Z" fill="#2c241c"/>
        <path d="M0 500 L140 410 L300 470 L460 360 L640 460 L820 340 L1000 450 L1200 390 L1200 700 L0 700 Z" fill="#1b2420"/>
        <path d="M0 560 L200 500 L380 540 L560 470 L760 530 L980 480 L1200 520 L1200 700 L0 700 Z" fill="#101612"/>
        <path d="M520 470 C620 500 700 560 760 620" fill="none" stroke="#d7b56a" stroke-width="2" opacity="0.55"/>
      </svg>
    </div>
    <div class="title-copy">
      <p class="eyebrow">A hidden valley in Colorado</p>
      <h1>Galt's Gulch</h1>
      <p class="tagline">I swear by my life and my love of it that I will never live for the sake of another man, nor ask another man to live for mine.</p>
      <p class="lede">
        People came here to work, to trade, and to live by their own judgment.
        No one is forced to live for anyone else.
      </p>
      <p class="seed-row">
        <span id="seed-label">Seed <span id="seed-value"></span></span>
        <button type="button" id="reroll">Reroll</button>
      </p>
      <button type="button" id="begin">Begin</button>
      <p class="title-credit"><a href="https://github.com/kndzio/IsoRim" target="_blank" rel="noreferrer">Assets: IsoRim by kndzio (MIT)</a></p>
    </div>
  `,i.append(n);const s=n.querySelector("#begin"),r=n.querySelector("#reroll"),o=n.querySelector("#seed-value");if(!(s instanceof HTMLButtonElement)||!(r instanceof HTMLButtonElement))return;const a=()=>{o&&(o.textContent=ia(t))};a(),r.addEventListener("click",()=>{t=t+1+Math.floor(Math.random()*65535)>>>0,a()}),s.focus();let l=!1;const c=()=>{if(l)return;l=!0,e(t),n.classList.add("is-leaving");const u=()=>{n.remove()};n.addEventListener("transitionend",u,{once:!0}),window.setTimeout(u,700)};s.addEventListener("click",c)}function tf(){const i=new URLSearchParams(window.location.search).get("seed");return i&&/^[0-9a-fA-F]{1,8}$/.test(i)?Number.parseInt(i,16)>>>0:tc}const Lt={done:0,total:0,label:"Loading the valley…"};function Ya(i,e){Lt.total+=i,Lt.label=e,ja()}function $a(i){Lt.done+=1,Lt.label=i,ja()}function nf(){Lt.done=Math.max(Lt.done,Lt.total,1),Lt.total=Math.max(Lt.total,Lt.done),Lt.label="The valley is ready.",ja()}function ja(){const i=document.querySelector("#load-progress"),e=Lt.total===0?0:Math.min(100,Math.round(Lt.done/Lt.total*100));if(i instanceof HTMLElement){i.setAttribute("aria-valuenow",String(e)),i.setAttribute("aria-valuemax","100");const t=i.querySelector(".load-bar-fill");t instanceof HTMLElement&&(t.style.width=`${e}%`);const n=i.querySelector(".load-label");n&&(n.textContent=Lt.label)}}const Fo=3;function sf(i,e){const t=document.createElement("div");t.id="loading-screen",t.innerHTML=`
    <div class="loading-cleft" aria-hidden="true"></div>
    <div class="loading-copy">
      <p class="eyebrow">Loading</p>
      <h1>Entering the valley</h1>
      <p class="loading-lede">Workshops, fields, and the people who live here.</p>
      <div id="load-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="Loading the valley">
        <div class="load-bar"><div class="load-bar-fill"></div></div>
        <p class="load-label">Loading the valley…</p>
      </div>
    </div>
  `,i.append(t);const n={packs:!1,world:!1,frames:0,revealed:!1},s=()=>{window.__valleyLoad={...n}};s();let r=!1;const o=()=>{if(n.revealed)return;if(n.revealed=!0,s(),nf(),e(),(Number.parseFloat(getComputedStyle(t).transitionDuration)||0)===0){t.remove();return}t.addEventListener("transitionend",l=>{l.target!==t||l.propertyName!=="opacity"||t.remove()}),t.classList.add("is-leaving")};return{markPacks(){n.packs=!0,s()},markWorld(){n.world=!0,r||(r=!0,Ya(Fo,"Drawing the valley…")),s()},markFrame(){if(!(!n.packs||!n.world||n.revealed)){if(n.frames+=1,s(),n.frames<Fo){$a("Drawing the valley…");return}o()}},fail(a){const l=t.querySelector(".load-label");l&&(l.textContent=a)}}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rr="160",sn={ROTATE:0,DOLLY:1,PAN:2},jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nc=0,sa=1,ic=2,Za=1,Ka=2,nn=3,Mn=0,Pt=1,Gt=2,gn=0,ei=1,ra=2,aa=3,oa=4,sc=5,Rn=100,rc=101,ac=102,la=103,ca=104,oc=200,lc=201,cc=202,uc=203,Ks=204,Js=205,fc=206,hc=207,dc=208,pc=209,mc=210,_c=211,gc=212,vc=213,xc=214,Mc=0,yc=1,Sc=2,$i=3,bc=4,Ec=5,wc=6,Tc=7,ar=0,Ac=1,Rc=2,vn=0,Cc=1,Lc=2,Pc=3,Dc=4,Uc=5,Ic=6,Ja=300,ni=301,ii=302,Qs=303,er=304,ts=306,Un=1e3,qt=1001,tr=1002,Et=1003,ua=1004,Hs=1005,kt=1006,Nc=1007,Ci=1008,xn=1009,Fc=1010,Oc=1011,or=1012,Qa=1013,mn=1014,_n=1015,Li=1016,eo=1017,to=1018,Ln=1020,kc=1021,Yt=1023,zc=1024,Bc=1025,Pn=1026,si=1027,Gc=1028,no=1029,Hc=1030,io=1031,so=1033,Vs=33776,Ws=33777,Xs=33778,qs=33779,fa=35840,ha=35841,da=35842,pa=35843,ro=36196,ma=37492,_a=37496,ga=37808,va=37809,xa=37810,Ma=37811,ya=37812,Sa=37813,ba=37814,Ea=37815,wa=37816,Ta=37817,Aa=37818,Ra=37819,Ca=37820,La=37821,Ys=36492,Pa=36494,Da=36495,Vc=36283,Ua=36284,Ia=36285,Na=36286,ao=3e3,Dn=3001,Wc=3200,Xc=3201,oo=0,qc=1,Ht="",ct="srgb",on="srgb-linear",lr="display-p3",ns="display-p3-linear",ji="linear",et="srgb",Zi="rec709",Ki="p3",Zn=7680,Fa=519,Yc=512,$c=513,jc=514,lo=515,Zc=516,Kc=517,Jc=518,Qc=519,Oa=35044,ka="300 es",nr=1035,an=2e3,Ji=2001;class zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oo=1234567;const Ti=Math.PI/180,Qi=180/Math.PI;function Di(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function co(i,e){return(i%e+e)%e}function rf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function af(i,e,t){return i!==e?(t-i)/(e-i):0}function Wi(i,e,t){return(1-t)*i+t*e}function of(i,e,t,n){return Wi(i,e,1-Math.exp(-t*n))}function lf(i,e=1){return e-Math.abs(co(i,e*2)-e)}function cf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function uf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ff(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hf(i,e){return i+Math.random()*(e-i)}function df(i){return i*(.5-Math.random())}function pf(i){i!==void 0&&(Oo=i);let e=Oo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mf(i){return i*Ti}function _f(i){return i*Qi}function za(i){return(i&i-1)===0&&i!==0}function gf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ir(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vf(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const In={DEG2RAD:Ti,RAD2DEG:Qi,generateUUID:Di,clamp:wt,euclideanModulo:co,mapLinear:rf,inverseLerp:af,lerp:Wi,damp:of,pingpong:lf,smoothstep:cf,smootherstep:uf,randInt:ff,randFloat:hf,randFloatSpread:df,seededRandom:pf,degToRad:mf,radToDeg:_f,isPowerOfTwo:za,ceilPowerOfTwo:gf,floorPowerOfTwo:ir,setQuaternionFromProperEuler:vf,normalize:Rt,denormalize:Si};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,s,r,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],_=n[8],g=s[0],p=s[3],d=s[6],y=s[1],v=s[4],b=s[7],C=s[2],R=s[5],T=s[8];return r[0]=o*g+a*y+l*C,r[3]=o*p+a*v+l*R,r[6]=o*d+a*b+l*T,r[1]=c*g+u*y+f*C,r[4]=c*p+u*v+f*R,r[7]=c*d+u*b+f*T,r[2]=h*g+m*y+_*C,r[5]=h*p+m*v+_*R,r[8]=h*d+m*b+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,m=c*r-o*l,_=t*f+n*h+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(s*c-u*n)*g,e[2]=(a*n-s*o)*g,e[3]=h*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Sr.makeScale(e,t)),this}rotate(e){return this.premultiply(Sr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sr=new We;function eu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tu(){const i=sr("canvas");return i.style.display="block",i}const ko={};function Xi(i){i in ko||(ko[i]=!0,console.warn(i))}const zo=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bo=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ds={[on]:{transfer:ji,primaries:Zi,toReference:i=>i,fromReference:i=>i},[ct]:{transfer:et,primaries:Zi,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ns]:{transfer:ji,primaries:Ki,toReference:i=>i.applyMatrix3(Bo),fromReference:i=>i.applyMatrix3(zo)},[lr]:{transfer:et,primaries:Ki,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Bo),fromReference:i=>i.applyMatrix3(zo).convertLinearToSRGB()}},xf=new Set([on,ns]),Qe={enabled:!0,_workingColorSpace:on,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!xf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ds[e].toReference,s=ds[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ds[i].primaries},getTransfer:function(i){return i===Ht?ji:ds[i].transfer}};function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class uo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ri===void 0&&(ri=sr("canvas")),ri.width=e.width,ri.height=e.height;const n=ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ai(t[n]/255)*255):t[n]=Ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mf=0;class fo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Di(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Er(s[o].image)):r.push(Er(s[o]))}else r=Er(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Er(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yf=0;class Dt extends zn{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=qt,s=qt,r=kt,o=Ci,a=Yt,l=xn,c=Dt.DEFAULT_ANISOTROPY,u=Ht){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Di(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Dn?ct:Ht),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ja)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Un:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Un:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ct?Dn:ao}set encoding(e){Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Dn?ct:Ht}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Ja;Dt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,s=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],_=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(m+1)/2,C=(d+1)/2,R=(u+h)/4,T=(f+g)/4,F=(_+p)/4;return v>b&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=R/n,r=T/n):b>C?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=F/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=F/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(f-g)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nu extends zn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Xi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Dn?ct:Ht),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Dt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends nu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ho extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iu extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||c!==m||u!==_){let p=1-a;const d=l*h+c*m+u*_+f*g,y=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),R=Math.atan2(C,d*y);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}const b=a*y;if(l=l*p+h*b,c=c*p+m*b,u=u*p+_*b,f=f*p+g*b,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*f+l*m-c*h,e[t+1]=l*_+u*h+c*f-a*m,e[t+2]=c*_+u*m+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"YZX":this._x=h*u*f+c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f-h*m*_;break;case"XZY":this._x=h*u*f-c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Go.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Go.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wr.copy(this).projectOnVector(e),this.sub(wr)}reflect(e){return this.sub(wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wr=new D,Go=new Fn;class Ui{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kt):Kt.fromBufferAttribute(r,o),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),ms.subVectors(this.max,ki),ai.subVectors(e.a,ki),oi.subVectors(e.b,ki),li.subVectors(e.c,ki),yn.subVectors(oi,ai),Sn.subVectors(li,oi),Wn.subVectors(ai,li);let t=[0,-yn.z,yn.y,0,-Sn.z,Sn.y,0,-Wn.z,Wn.y,yn.z,0,-yn.x,Sn.z,0,-Sn.x,Wn.z,0,-Wn.x,-yn.y,yn.x,0,-Sn.y,Sn.x,0,-Wn.y,Wn.x,0];return!Tr(t,ai,oi,li,ms)||(t=[1,0,0,0,1,0,0,0,1],!Tr(t,ai,oi,li,ms))?!1:(_s.crossVectors(yn,Sn),t=[_s.x,_s.y,_s.z],Tr(t,ai,oi,li,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new D,new D,new D,new D,new D,new D,new D,new D],Kt=new D,ps=new Ui,ai=new D,oi=new D,li=new D,yn=new D,Sn=new D,Wn=new D,ki=new D,ms=new D,_s=new D,Xn=new D;function Tr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xn.fromArray(i,r);const a=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),u=n.dot(Xn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sf=new Ui,zi=new D,Ar=new D;class is{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zi.subVectors(e,this.center);const t=zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zi.copy(e.center).add(Ar)),this.expandByPoint(zi.copy(e.center).sub(Ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new D,Rr=new D,gs=new D,bn=new D,Cr=new D,vs=new D,Lr=new D;class ss{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Rr.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Rr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(gs),a=bn.dot(this.direction),l=-bn.dot(gs),c=bn.lengthSq(),u=Math.abs(1-o*o);let f,h,m,_;if(u>0)if(f=o*l-a,h=o*a-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Rr).addScaledVector(gs,h),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),s=un.dot(un)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,s,r){Cr.subVectors(t,e),vs.subVectors(n,e),Lr.crossVectors(Cr,vs);let o=this.direction.dot(Lr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bn.subVectors(this.origin,e);const l=a*this.direction.dot(vs.crossVectors(bn,vs));if(l<0)return null;const c=a*this.direction.dot(Cr.cross(bn));if(c<0||l+c>o)return null;const u=-a*bn.dot(Lr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,s,r,o,a,l,c,u,f,h,m,_,g,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,f,h,m,_,g,p)}set(e,t,n,s,r,o,a,l,c,u,f,h,m,_,g,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=_,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ci.setFromMatrixColumn(e,0).length(),r=1/ci.setFromMatrixColumn(e,1).length(),o=1/ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,m=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,_=c*u,g=c*f;t[0]=h+g*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,_=c*u,g=c*f;t[0]=h-g*a,t[4]=-o*f,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-h*f,t[8]=_*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=o*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=a*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bf,e,Ef)}lookAt(e,t,n){const s=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),En.crossVectors(n,Nt),En.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),En.crossVectors(n,Nt)),En.normalize(),xs.crossVectors(Nt,En),s[0]=En.x,s[4]=xs.x,s[8]=Nt.x,s[1]=En.y,s[5]=xs.y,s[9]=Nt.y,s[2]=En.z,s[6]=xs.z,s[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],_=n[2],g=n[6],p=n[10],d=n[14],y=n[3],v=n[7],b=n[11],C=n[15],R=s[0],T=s[4],F=s[8],x=s[12],E=s[1],k=s[5],B=s[9],J=s[13],P=s[2],O=s[6],W=s[10],K=s[14],$=s[3],j=s[7],Z=s[11],re=s[15];return r[0]=o*R+a*E+l*P+c*$,r[4]=o*T+a*k+l*O+c*j,r[8]=o*F+a*B+l*W+c*Z,r[12]=o*x+a*J+l*K+c*re,r[1]=u*R+f*E+h*P+m*$,r[5]=u*T+f*k+h*O+m*j,r[9]=u*F+f*B+h*W+m*Z,r[13]=u*x+f*J+h*K+m*re,r[2]=_*R+g*E+p*P+d*$,r[6]=_*T+g*k+p*O+d*j,r[10]=_*F+g*B+p*W+d*Z,r[14]=_*x+g*J+p*K+d*re,r[3]=y*R+v*E+b*P+C*$,r[7]=y*T+v*k+b*O+C*j,r[11]=y*F+v*B+b*W+C*Z,r[15]=y*x+v*J+b*K+C*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],g=e[7],p=e[11],d=e[15];return _*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*m-n*l*m)+g*(+t*l*m-t*c*h+r*o*h-s*o*m+s*c*u-r*l*u)+p*(+t*c*f-t*a*m-r*o*f+n*o*m+r*a*u-n*c*u)+d*(-s*a*u-t*l*f+t*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],g=e[13],p=e[14],d=e[15],y=f*p*c-g*h*c+g*l*m-a*p*m-f*l*d+a*h*d,v=_*h*c-u*p*c-_*l*m+o*p*m+u*l*d-o*h*d,b=u*g*c-_*f*c+_*a*m-o*g*m-u*a*d+o*f*d,C=_*f*l-u*g*l-_*a*h+o*g*h+u*a*p-o*f*p,R=t*y+n*v+s*b+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=y*T,e[1]=(g*h*r-f*p*r-g*s*m+n*p*m+f*s*d-n*h*d)*T,e[2]=(a*p*r-g*l*r+g*s*c-n*p*c-a*s*d+n*l*d)*T,e[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*m-n*l*m)*T,e[4]=v*T,e[5]=(u*p*r-_*h*r+_*s*m-t*p*m-u*s*d+t*h*d)*T,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*d-t*l*d)*T,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*m+t*l*m)*T,e[8]=b*T,e[9]=(_*f*r-u*g*r-_*n*m+t*g*m+u*n*d-t*f*d)*T,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*d+t*a*d)*T,e[11]=(u*a*r-o*f*r-u*n*c+t*f*c+o*n*m-t*a*m)*T,e[12]=C*T,e[13]=(u*g*s-_*f*s+_*n*h-t*g*h-u*n*p+t*f*p)*T,e[14]=(_*a*s-o*g*s-_*n*l+t*g*l+o*n*p-t*a*p)*T,e[15]=(o*f*s-u*a*s+u*n*l-t*f*l-o*n*h+t*a*h)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,m=r*u,_=r*f,g=o*u,p=o*f,d=a*f,y=l*c,v=l*u,b=l*f,C=n.x,R=n.y,T=n.z;return s[0]=(1-(g+d))*C,s[1]=(m+b)*C,s[2]=(_-v)*C,s[3]=0,s[4]=(m-b)*R,s[5]=(1-(h+d))*R,s[6]=(p+y)*R,s[7]=0,s[8]=(_+v)*T,s[9]=(p-y)*T,s[10]=(1-(h+g))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ci.set(s[0],s[1],s[2]).length();const o=ci.set(s[4],s[5],s[6]).length(),a=ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);const c=1/r,u=1/o,f=1/a;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,t.setFromRotationMatrix(Jt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=an){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),h=(n+s)/(n-s);let m,_;if(a===an)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ji)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=an){const l=this.elements,c=1/(t-e),u=1/(n-s),f=1/(o-r),h=(t+e)*c,m=(n+s)*u;let _,g;if(a===an)_=(o+r)*f,g=-2*f;else if(a===Ji)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ci=new D,Jt=new at,bf=new D(0,0,0),Ef=new D(1,1,1),En=new D,xs=new D,Nt=new D,Ho=new at,Vo=new Fn;class rs{constructor(e=0,t=0,n=0,s=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ho.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ho,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vo.setFromEuler(this),this.setFromQuaternion(Vo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";class cr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wf=0;const Wo=new D,ui=new Fn,fn=new at,Ms=new D,Bi=new D,Tf=new D,Af=new Fn,Xo=new D(1,0,0),qo=new D(0,1,0),Yo=new D(0,0,1),Rf={type:"added"},Cf={type:"removed"};class dt extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new D,t=new rs,n=new Fn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new We}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(Xo,e)}rotateY(e){return this.rotateOnAxis(qo,e)}rotateZ(e){return this.rotateOnAxis(Yo,e)}translateOnAxis(e,t){return Wo.copy(e).applyQuaternion(this.quaternion),this.position.add(Wo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xo,e)}translateY(e){return this.translateOnAxis(qo,e)}translateZ(e){return this.translateOnAxis(Yo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ms.copy(e):Ms.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Bi,Ms,this.up):fn.lookAt(Ms,Bi,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),ui.setFromRotationMatrix(fn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,Tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,Af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}dt.DEFAULT_UP=new D(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new D,hn=new D,Pr=new D,dn=new D,fi=new D,hi=new D,$o=new D,Dr=new D,Ur=new D,Ir=new D;let ys=!1;class zt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Qt.subVectors(e,t),s.cross(Qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Qt.subVectors(s,t),hn.subVectors(n,t),Pr.subVectors(e,t);const o=Qt.dot(Qt),a=Qt.dot(hn),l=Qt.dot(Pr),c=hn.dot(hn),u=hn.dot(Pr),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,_=(o*u-a*l)*h;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,t,n,s,r,o,a,l){return ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ys=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l)}static isFrontFacing(e,t,n,s){return Qt.subVectors(n,t),hn.subVectors(e,t),Qt.cross(hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Qt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ys=!0),zt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return zt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;fi.subVectors(s,n),hi.subVectors(r,n),Dr.subVectors(e,n);const l=fi.dot(Dr),c=hi.dot(Dr);if(l<=0&&c<=0)return t.copy(n);Ur.subVectors(e,s);const u=fi.dot(Ur),f=hi.dot(Ur);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(fi,o);Ir.subVectors(e,r);const m=fi.dot(Ir),_=hi.dot(Ir);if(_>=0&&m<=_)return t.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(hi,a);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return $o.subVectors(r,s),a=(f-u)/(f-u+(m-_)),t.copy(s).addScaledVector($o,a);const d=1/(p+g+h);return o=g*d,a=h*d,t.copy(n).addScaledVector(fi,o).addScaledVector(hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Nr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=co(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Nr(o,r,e+1/3),this.g=Nr(o,r,e),this.b=Nr(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){const n=su[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return Qe.fromWorkingColorSpace(bt.copy(this),e),Math.round(wt(bt.r*255,0,255))*65536+Math.round(wt(bt.g*255,0,255))*256+Math.round(wt(bt.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,s=bt.g,r=bt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=ct){Qe.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,s=bt.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(Ss);const n=Wi(wn.h,Ss.h,t),s=Wi(wn.s,Ss.s,t),r=Wi(wn.l,Ss.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Oe;Oe.NAMES=su;let Lf=0;class Bn extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=ei,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ks,this.blendDst=Js,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ks&&(n.blendSrc=this.blendSrc),this.blendDst!==Js&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class On extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new D,bs=new De;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oa&&(e.usage=this.usage),e}}class po extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mo extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pf=0;const Xt=new at,Fr=new dt,di=new D,Ft=new Ui,Gi=new Ui,gt=new D;class Tt extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eu(e)?mo:po)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return Fr.lookAt(e),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Gi.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Ft.min,Gi.min),Ft.expandByPoint(gt),gt.addVectors(Ft.max,Gi.max),Ft.expandByPoint(gt)):(Ft.expandByPoint(Gi.min),Ft.expandByPoint(Gi.max))}Ft.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gt.fromBufferAttribute(a,c),l&&(di.fromBufferAttribute(e,c),gt.add(di)),s=Math.max(s,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<a;E++)c[E]=new D,u[E]=new D;const f=new D,h=new D,m=new D,_=new De,g=new De,p=new De,d=new D,y=new D;function v(E,k,B){f.fromArray(s,E*3),h.fromArray(s,k*3),m.fromArray(s,B*3),_.fromArray(o,E*2),g.fromArray(o,k*2),p.fromArray(o,B*2),h.sub(f),m.sub(f),g.sub(_),p.sub(_);const J=1/(g.x*p.y-p.x*g.y);isFinite(J)&&(d.copy(h).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(J),y.copy(m).multiplyScalar(g.x).addScaledVector(h,-p.x).multiplyScalar(J),c[E].add(d),c[k].add(d),c[B].add(d),u[E].add(y),u[k].add(y),u[B].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let E=0,k=b.length;E<k;++E){const B=b[E],J=B.start,P=B.count;for(let O=J,W=J+P;O<W;O+=3)v(n[O+0],n[O+1],n[O+2])}const C=new D,R=new D,T=new D,F=new D;function x(E){T.fromArray(r,E*3),F.copy(T);const k=c[E];C.copy(k),C.sub(T.multiplyScalar(T.dot(k))).normalize(),R.crossVectors(F,k);const J=R.dot(u[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=J}for(let E=0,k=b.length;E<k;++E){const B=b[E],J=B.start,P=B.count;for(let O=J,W=J+P;O<W;O+=3)x(n[O+0]),x(n[O+1]),x(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let d=0;d<u;d++)h[_++]=c[m++]}return new jt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jo=new at,qn=new ss,Es=new is,Zo=new D,pi=new D,mi=new D,_i=new D,Or=new D,ws=new D,Ts=new De,As=new De,Rs=new De,Ko=new D,Jo=new D,Qo=new D,Cs=new D,Ls=new D;class je extends dt{constructor(e=new Tt,t=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ws.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Or.fromBufferAttribute(f,e),o?ws.addScaledVector(Or,u):ws.addScaledVector(Or.sub(t),u))}t.add(ws)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(r),qn.copy(e.ray).recast(e.near),!(Es.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Es,Zo)===null||qn.origin.distanceToSquared(Zo)>(e.far-e.near)**2))&&(jo.copy(r).invert(),qn.copy(e.ray).applyMatrix4(jo),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],d=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=y,C=v;b<C;b+=3){const R=a.getX(b),T=a.getX(b+1),F=a.getX(b+2);s=Ps(this,d,e,n,c,u,f,R,T,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const y=a.getX(p),v=a.getX(p+1),b=a.getX(p+2);s=Ps(this,o,e,n,c,u,f,y,v,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],d=o[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=y,C=v;b<C;b+=3){const R=b,T=b+1,F=b+2;s=Ps(this,d,e,n,c,u,f,R,T,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const y=p,v=p+1,b=p+2;s=Ps(this,o,e,n,c,u,f,y,v,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Df(i,e,t,n,s,r,o,a){let l;if(e.side===Pt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Mn,a),l===null)return null;Ls.copy(a),Ls.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ls);return c<t.near||c>t.far?null:{distance:c,point:Ls.clone(),object:i}}function Ps(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,pi),i.getVertexPosition(l,mi),i.getVertexPosition(c,_i);const u=Df(i,e,t,n,pi,mi,_i,Cs);if(u){s&&(Ts.fromBufferAttribute(s,a),As.fromBufferAttribute(s,l),Rs.fromBufferAttribute(s,c),u.uv=zt.getInterpolation(Cs,pi,mi,_i,Ts,As,Rs,new De)),r&&(Ts.fromBufferAttribute(r,a),As.fromBufferAttribute(r,l),Rs.fromBufferAttribute(r,c),u.uv1=zt.getInterpolation(Cs,pi,mi,_i,Ts,As,Rs,new De),u.uv2=u.uv1),o&&(Ko.fromBufferAttribute(o,a),Jo.fromBufferAttribute(o,l),Qo.fromBufferAttribute(o,c),u.normal=zt.getInterpolation(Cs,pi,mi,_i,Ko,Jo,Qo,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};zt.getNormal(pi,mi,_i,f.normal),u.face=f}return u}class Ii extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(f,2));function _(g,p,d,y,v,b,C,R,T,F,x){const E=b/T,k=C/F,B=b/2,J=C/2,P=R/2,O=T+1,W=F+1;let K=0,$=0;const j=new D;for(let Z=0;Z<W;Z++){const re=Z*k-J;for(let V=0;V<O;V++){const U=V*E-B;j[g]=U*y,j[p]=re*v,j[d]=P,c.push(j.x,j.y,j.z),j[g]=0,j[p]=0,j[d]=R>0?1:-1,u.push(j.x,j.y,j.z),f.push(V/T),f.push(1-Z/F),K+=1}}for(let Z=0;Z<F;Z++)for(let re=0;re<T;re++){const V=h+re+O*Z,U=h+re+O*(Z+1),Y=h+(re+1)+O*(Z+1),le=h+(re+1)+O*Z;l.push(V,U,le),l.push(U,Y,le),$+=6}a.addGroup(m,$,x),m+=$,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=Pi(i[t]);for(const s in n)e[s]=n[s]}return e}function Uf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ru(i){return i.getRenderTarget()===null?i.outputColorSpace:Qe.workingColorSpace}const au={clone:Pi,merge:Ct};var If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=Uf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _o extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=an}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends _o{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ti*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(Ti*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ti*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gi=-90,vi=1;class ou extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bt(gi,vi,e,t);s.layers=this.layers,this.add(s);const r=new Bt(gi,vi,e,t);r.layers=this.layers,this.add(r);const o=new Bt(gi,vi,e,t);o.layers=this.layers,this.add(o);const a=new Bt(gi,vi,e,t);a.layers=this.layers,this.add(a);const l=new Bt(gi,vi,e,t);l.layers=this.layers,this.add(l);const c=new Bt(gi,vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class go extends Dt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ni,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lu extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Xi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Dn?ct:Ht),this.texture=new go(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ii(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:gn});r.uniforms.tEquirect.value=t;const o=new je(s,r),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=kt),new ou(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const kr=new D,Ff=new D,Of=new We;class rn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=kr.subVectors(n,t).cross(Ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Of.getNormalMatrix(e),s=this.coplanarPoint(kr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new is,Ds=new D;class ur{constructor(e=new rn,t=new rn,n=new rn,s=new rn,r=new rn,o=new rn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],m=s[8],_=s[9],g=s[10],p=s[11],d=s[12],y=s[13],v=s[14],b=s[15];if(n[0].setComponents(l-r,h-c,p-m,b-d).normalize(),n[1].setComponents(l+r,h+c,p+m,b+d).normalize(),n[2].setComponents(l+o,h+u,p+_,b+y).normalize(),n[3].setComponents(l-o,h-u,p-_,b-y).normalize(),n[4].setComponents(l-a,h-f,p-g,b-v).normalize(),t===an)n[5].setComponents(l+a,h+f,p+g,b+v).normalize();else if(t===Ji)n[5].setComponents(a,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ds.x=s.normal.x>0?e.max.x:e.min.x,Ds.y=s.normal.y>0?e.max.y:e.min.y,Ds.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function kf(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const f=c.array,h=c.usage,m=f.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,f){const h=u.array,m=u._updateRange,_=u.updateRanges;if(i.bindBuffer(f,c),m.count===-1&&_.length===0&&i.bufferSubData(f,0,h),_.length!==0){for(let g=0,p=_.length;g<p;g++){const d=_[g];t?i.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):i.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,s(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class as extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,m=[],_=[],g=[],p=[];for(let d=0;d<u;d++){const y=d*h-o;for(let v=0;v<c;v++){const b=v*f-r;_.push(b,-y,0),g.push(0,0,1),p.push(v/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const v=y+c*d,b=y+c*(d+1),C=y+1+c*(d+1),R=y+1+c*d;m.push(v,b,R),m.push(b,C,R)}this.setIndex(m),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(g,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.widthSegments,e.heightSegments)}}var zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ch=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ph=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mh="gl_FragColor = linearToOutputTexel( gl_FragColor );",_h=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Th=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ah=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ch=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ph=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Uh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ih=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$h=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ed=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,id=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,od=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Md=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ed=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ad=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ud=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Od=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ip=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ap=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:zf,alphahash_pars_fragment:Bf,alphamap_fragment:Gf,alphamap_pars_fragment:Hf,alphatest_fragment:Vf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:qf,batching_pars_vertex:Yf,batching_vertex:$f,begin_vertex:jf,beginnormal_vertex:Zf,bsdfs:Kf,iridescence_fragment:Jf,bumpmap_pars_fragment:Qf,clipping_planes_fragment:eh,clipping_planes_pars_fragment:th,clipping_planes_pars_vertex:nh,clipping_planes_vertex:ih,color_fragment:sh,color_pars_fragment:rh,color_pars_vertex:ah,color_vertex:oh,common:lh,cube_uv_reflection_fragment:ch,defaultnormal_vertex:uh,displacementmap_pars_vertex:fh,displacementmap_vertex:hh,emissivemap_fragment:dh,emissivemap_pars_fragment:ph,colorspace_fragment:mh,colorspace_pars_fragment:_h,envmap_fragment:gh,envmap_common_pars_fragment:vh,envmap_pars_fragment:xh,envmap_pars_vertex:Mh,envmap_physical_pars_fragment:Dh,envmap_vertex:yh,fog_vertex:Sh,fog_pars_vertex:bh,fog_fragment:Eh,fog_pars_fragment:wh,gradientmap_pars_fragment:Th,lightmap_fragment:Ah,lightmap_pars_fragment:Rh,lights_lambert_fragment:Ch,lights_lambert_pars_fragment:Lh,lights_pars_begin:Ph,lights_toon_fragment:Uh,lights_toon_pars_fragment:Ih,lights_phong_fragment:Nh,lights_phong_pars_fragment:Fh,lights_physical_fragment:Oh,lights_physical_pars_fragment:kh,lights_fragment_begin:zh,lights_fragment_maps:Bh,lights_fragment_end:Gh,logdepthbuf_fragment:Hh,logdepthbuf_pars_fragment:Vh,logdepthbuf_pars_vertex:Wh,logdepthbuf_vertex:Xh,map_fragment:qh,map_pars_fragment:Yh,map_particle_fragment:$h,map_particle_pars_fragment:jh,metalnessmap_fragment:Zh,metalnessmap_pars_fragment:Kh,morphcolor_vertex:Jh,morphnormal_vertex:Qh,morphtarget_pars_vertex:ed,morphtarget_vertex:td,normal_fragment_begin:nd,normal_fragment_maps:id,normal_pars_fragment:sd,normal_pars_vertex:rd,normal_vertex:ad,normalmap_pars_fragment:od,clearcoat_normal_fragment_begin:ld,clearcoat_normal_fragment_maps:cd,clearcoat_pars_fragment:ud,iridescence_pars_fragment:fd,opaque_fragment:hd,packing:dd,premultiplied_alpha_fragment:pd,project_vertex:md,dithering_fragment:_d,dithering_pars_fragment:gd,roughnessmap_fragment:vd,roughnessmap_pars_fragment:xd,shadowmap_pars_fragment:Md,shadowmap_pars_vertex:yd,shadowmap_vertex:Sd,shadowmask_pars_fragment:bd,skinbase_vertex:Ed,skinning_pars_vertex:wd,skinning_vertex:Td,skinnormal_vertex:Ad,specularmap_fragment:Rd,specularmap_pars_fragment:Cd,tonemapping_fragment:Ld,tonemapping_pars_fragment:Pd,transmission_fragment:Dd,transmission_pars_fragment:Ud,uv_pars_fragment:Id,uv_pars_vertex:Nd,uv_vertex:Fd,worldpos_vertex:Od,background_vert:kd,background_frag:zd,backgroundCube_vert:Bd,backgroundCube_frag:Gd,cube_vert:Hd,cube_frag:Vd,depth_vert:Wd,depth_frag:Xd,distanceRGBA_vert:qd,distanceRGBA_frag:Yd,equirect_vert:$d,equirect_frag:jd,linedashed_vert:Zd,linedashed_frag:Kd,meshbasic_vert:Jd,meshbasic_frag:Qd,meshlambert_vert:ep,meshlambert_frag:tp,meshmatcap_vert:np,meshmatcap_frag:ip,meshnormal_vert:sp,meshnormal_frag:rp,meshphong_vert:ap,meshphong_frag:op,meshphysical_vert:lp,meshphysical_frag:cp,meshtoon_vert:up,meshtoon_frag:fp,points_vert:hp,points_frag:dp,shadow_vert:pp,shadow_frag:mp,sprite_vert:_p,sprite_frag:gp},ue={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},en={basic:{uniforms:Ct([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ct([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ct([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ct([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ct([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ct([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ct([ue.points,ue.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ct([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ct([ue.common,ue.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ct([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ct([ue.sprite,ue.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ct([ue.common,ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ct([ue.lights,ue.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};en.physical={uniforms:Ct([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Us={r:0,b:0,g:0};function vp(i,e,t,n,s,r,o){const a=new Oe(0);let l=r===!0?0:1,c,u,f=null,h=0,m=null;function _(p,d){let y=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),y=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ts)?(u===void 0&&(u=new je(new Ii(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Pi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(v.colorSpace)!==et,(f!==v||h!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new je(new as(2,2),new kn({name:"BackgroundMaterial",uniforms:Pi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(v.colorSpace)!==et,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,d){p.getRGB(Us,ru(i)),n.buffers.color.setClear(Us.r,Us.g,Us.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function xp(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function f(P,O,W,K,$){let j=!1;if(o){const Z=g(K,W,O);c!==Z&&(c=Z,m(c.object)),j=d(P,K,W,$),j&&y(P,K,W,$)}else{const Z=O.wireframe===!0;(c.geometry!==K.id||c.program!==W.id||c.wireframe!==Z)&&(c.geometry=K.id,c.program=W.id,c.wireframe=Z,j=!0)}$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,F(P,O,W,K),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function g(P,O,W){const K=W.wireframe===!0;let $=a[P.id];$===void 0&&($={},a[P.id]=$);let j=$[O.id];j===void 0&&(j={},$[O.id]=j);let Z=j[K];return Z===void 0&&(Z=p(h()),j[K]=Z),Z}function p(P){const O=[],W=[],K=[];for(let $=0;$<s;$++)O[$]=0,W[$]=0,K[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:K,object:P,attributes:{},index:null}}function d(P,O,W,K){const $=c.attributes,j=O.attributes;let Z=0;const re=W.getAttributes();for(const V in re)if(re[V].location>=0){const Y=$[V];let le=j[V];if(le===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),Y===void 0||Y.attribute!==le||le&&Y.data!==le.data)return!0;Z++}return c.attributesNum!==Z||c.index!==K}function y(P,O,W,K){const $={},j=O.attributes;let Z=0;const re=W.getAttributes();for(const V in re)if(re[V].location>=0){let Y=j[V];Y===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));const le={};le.attribute=Y,Y&&Y.data&&(le.data=Y.data),$[V]=le,Z++}c.attributes=$,c.attributesNum=Z,c.index=K}function v(){const P=c.newAttributes;for(let O=0,W=P.length;O<W;O++)P[O]=0}function b(P){C(P,0)}function C(P,O){const W=c.newAttributes,K=c.enabledAttributes,$=c.attributeDivisors;W[P]=1,K[P]===0&&(i.enableVertexAttribArray(P),K[P]=1),$[P]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),$[P]=O)}function R(){const P=c.newAttributes,O=c.enabledAttributes;for(let W=0,K=O.length;W<K;W++)O[W]!==P[W]&&(i.disableVertexAttribArray(W),O[W]=0)}function T(P,O,W,K,$,j,Z){Z===!0?i.vertexAttribIPointer(P,O,W,$,j):i.vertexAttribPointer(P,O,W,K,$,j)}function F(P,O,W,K){if(n.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const $=K.attributes,j=W.getAttributes(),Z=O.defaultAttributeValues;for(const re in j){const V=j[re];if(V.location>=0){let U=$[re];if(U===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(U=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(U=P.instanceColor)),U!==void 0){const Y=U.normalized,le=U.itemSize,fe=t.get(U);if(fe===void 0)continue;const me=fe.buffer,Ue=fe.type,q=fe.bytesPerElement,Q=n.isWebGL2===!0&&(Ue===i.INT||Ue===i.UNSIGNED_INT||U.gpuType===Qa);if(U.isInterleavedBufferAttribute){const he=U.data,I=he.stride,Xe=U.offset;if(he.isInstancedInterleavedBuffer){for(let Me=0;Me<V.locationSize;Me++)C(V.location+Me,he.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Me=0;Me<V.locationSize;Me++)b(V.location+Me);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Me=0;Me<V.locationSize;Me++)T(V.location+Me,le/V.locationSize,Ue,Y,I*q,(Xe+le/V.locationSize*Me)*q,Q)}else{if(U.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)C(V.location+he,U.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let he=0;he<V.locationSize;he++)b(V.location+he);i.bindBuffer(i.ARRAY_BUFFER,me);for(let he=0;he<V.locationSize;he++)T(V.location+he,le/V.locationSize,Ue,Y,le*q,le/V.locationSize*he*q,Q)}}else if(Z!==void 0){const Y=Z[re];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(V.location,Y);break;case 3:i.vertexAttrib3fv(V.location,Y);break;case 4:i.vertexAttrib4fv(V.location,Y);break;default:i.vertexAttrib1fv(V.location,Y)}}}}R()}function x(){B();for(const P in a){const O=a[P];for(const W in O){const K=O[W];for(const $ in K)_(K[$].object),delete K[$];delete O[W]}delete a[P]}}function E(P){if(a[P.id]===void 0)return;const O=a[P.id];for(const W in O){const K=O[W];for(const $ in K)_(K[$].object),delete K[$];delete O[W]}delete a[P.id]}function k(P){for(const O in a){const W=a[O];if(W[P.id]===void 0)continue;const K=W[P.id];for(const $ in K)_(K[$].object),delete K[$];delete W[P.id]}}function B(){J(),u=!0,c!==l&&(c=l,m(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:J,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:b,disableUnusedAttributes:R}}function Mp(i,e,t,n){const s=n.isWebGL2;let r;function o(u){r=u}function a(u,f){i.drawArrays(r,u,f),t.update(f,r,1)}function l(u,f,h){if(h===0)return;let m,_;if(s)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,u,f,h),t.update(f,r,h)}function c(u,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(u[_],f[_]);else{m.multiDrawArraysWEBGL(r,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=f[g];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function yp(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,b=o||e.has("OES_texture_float"),C=v&&b,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:R}}function Sp(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new rn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||s;return s=h,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const y=r?0:n,v=y*4;let b=d.clippingState||null;l.value=b,b=u(_,h,v,m);for(let C=0;C!==v;++C)b[C]=t[C];d.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const d=m+g*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,b=m;v!==g;++v,b+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function bp(i){let e=new WeakMap;function t(o,a){return a===Qs?o.mapping=ni:a===er&&(o.mapping=ii),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qs||a===er)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new lu(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class fr extends _o{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ei=4,el=[.125,.215,.35,.446,.526,.582],Jn=20,zr=new fr,tl=new Oe;let Br=null,Gr=0,Hr=0;const Kn=(1+Math.sqrt(5))/2,xi=1/Kn,nl=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Kn,xi),new D(0,Kn,-xi),new D(xi,0,Kn),new D(-xi,0,Kn),new D(Kn,xi,0),new D(-Kn,xi,0)];class Ba{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Br=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Br,Gr,Hr),e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ni||e.mapping===ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Br=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Li,format:Yt,colorSpace:on,depthBuffer:!1},s=il(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=il(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ep(r)),this._blurMaterial=wp(r,e,t)}return s}_compileMaterial(e){const t=new je(this._lodPlanes[0],e);this._renderer.compile(t,zr)}_sceneToCubeUV(e,t,n,s){const a=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(tl),u.toneMapping=vn,u.autoClear=!1;const m=new On({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),_=new je(new Ii,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(tl),g=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Is(s,y*v,d>2?v:0,v,v),u.setRenderTarget(s),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ni||e.mapping===ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Is(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,zr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=nl[(s-1)%nl.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new je(this._lodPlanes[s],c),h=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Jn-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):Jn;p>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Jn}`);const d=[];let y=0;for(let T=0;T<Jn;++T){const F=T/g,x=Math.exp(-F*F/2);d.push(x),T===0?y+=x:T<p&&(y+=2*x)}for(let T=0;T<d.length;T++)d[T]=d[T]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-n;const b=this._sizeLods[s],C=3*b*(s>v-Ei?s-v+Ei:0),R=4*(this._cubeSize-b);Is(t,C,R,3*b,2*b),l.setRenderTarget(t),l.render(f,zr)}}function Ep(i){const e=[],t=[],n=[];let s=i;const r=i-Ei+1+el.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ei?l=el[o-i+Ei-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,g=3,p=2,d=1,y=new Float32Array(g*_*m),v=new Float32Array(p*_*m),b=new Float32Array(d*_*m);for(let R=0;R<m;R++){const T=R%3*2/3-1,F=R>2?0:-1,x=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];y.set(x,g*_*R),v.set(h,p*_*R);const E=[R,R,R,R,R,R];b.set(E,d*_*R)}const C=new Tt;C.setAttribute("position",new jt(y,g)),C.setAttribute("uv",new jt(v,p)),C.setAttribute("faceIndex",new jt(b,d)),e.push(C),s>Ei&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function il(i,e,t){const n=new Nn(i,e,t);return n.texture.mapping=ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wp(i,e,t){const n=new Float32Array(Jn),s=new D(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function sl(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function rl(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function vo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qs||l===er,u=l===ni||l===ii;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ba(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new Ba(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ap(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rp(i,e,t,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let p=0,d=g.length;p<d;p++)e.remove(g[p])}h.removeEventListener("dispose",o),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,d=g.length;p<d;p++)e.update(g[p],i.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const y=m.array;g=m.version;for(let v=0,b=y.length;v<b;v+=3){const C=y[v+0],R=y[v+1],T=y[v+2];h.push(C,R,R,T,T,C)}}else if(_!==void 0){const y=_.array;g=_.version;for(let v=0,b=y.length/3-1;v<b;v+=3){const C=v+0,R=v+1,T=v+2;h.push(C,R,R,T,T,C)}}else return;const p=new(eu(h)?mo:po)(h,1);p.version=g;const d=r.get(f);d&&e.remove(d),r.set(f,p)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Cp(i,e,t,n){const s=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,_){i.drawElements(r,_,a,m*l),t.update(_,r,1)}function f(m,_,g){if(g===0)return;let p,d;if(s)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,_,a,m*l,g),t.update(_,r,g)}function h(m,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<g;d++)this.render(m[d]/l,_[d]);else{p.multiDrawElementsWEBGL(r,_,0,a,m,0,g);let d=0;for(let y=0;y<g;y++)d+=_[y];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function Lp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pp(i,e){return i[0]-e[0]}function Dp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Up(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(u);if(p===void 0||p.count!==g){let O=function(){J.dispose(),r.delete(u),u.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let x=0;v===!0&&(x=1),b===!0&&(x=2),C===!0&&(x=3);let E=u.attributes.position.count*x,k=1;E>e.maxTextureSize&&(k=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const B=new Float32Array(E*k*4*g),J=new ho(B,E,k,g);J.type=_n,J.needsUpdate=!0;const P=x*4;for(let W=0;W<g;W++){const K=R[W],$=T[W],j=F[W],Z=E*k*4*W;for(let re=0;re<K.count;re++){const V=re*P;v===!0&&(o.fromBufferAttribute(K,re),B[Z+V+0]=o.x,B[Z+V+1]=o.y,B[Z+V+2]=o.z,B[Z+V+3]=0),b===!0&&(o.fromBufferAttribute($,re),B[Z+V+4]=o.x,B[Z+V+5]=o.y,B[Z+V+6]=o.z,B[Z+V+7]=0),C===!0&&(o.fromBufferAttribute(j,re),B[Z+V+8]=o.x,B[Z+V+9]=o.y,B[Z+V+10]=o.z,B[Z+V+11]=j.itemSize===4?o.w:1)}}p={count:g,texture:J,size:new De(E,k)},r.set(u,p),u.addEventListener("dispose",O)}let d=0;for(let v=0;v<h.length;v++)d+=h[v];const y=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let b=0;b<_;b++)g[b]=[b,0];n[u.id]=g}for(let b=0;b<_;b++){const C=g[b];C[0]=b,C[1]=h[b]}g.sort(Dp);for(let b=0;b<8;b++)b<_&&g[b][1]?(a[b][0]=g[b][0],a[b][1]=g[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Pp);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const C=a[b],R=C[0],T=C[1];R!==Number.MAX_SAFE_INTEGER&&T?(p&&u.getAttribute("morphTarget"+b)!==p[R]&&u.setAttribute("morphTarget"+b,p[R]),d&&u.getAttribute("morphNormal"+b)!==d[R]&&u.setAttribute("morphNormal"+b,d[R]),s[b]=T,y+=T):(p&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),d&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),s[b]=0)}const v=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Ip(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class xo extends Dt{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:Pn,u!==Pn&&u!==si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Pn&&(n=mn),n===void 0&&u===si&&(n=Ln),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const uu=new Dt,fu=new xo(1,1);fu.compareFunction=lo;const hu=new ho,du=new iu,pu=new go,al=[],ol=[],ll=new Float32Array(16),cl=new Float32Array(9),ul=new Float32Array(4);function Ni(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=al[s];if(r===void 0&&(r=new Float32Array(s),al[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hr(i,e){let t=ol[e];t===void 0&&(t=new Int32Array(e),ol[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Np(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function zp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;ul.set(n),i.uniformMatrix2fv(this.addr,!1,ul),mt(t,n)}}function Bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;cl.set(n),i.uniformMatrix3fv(this.addr,!1,cl),mt(t,n)}}function Gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;ll.set(n),i.uniformMatrix4fv(this.addr,!1,ll),mt(t,n)}}function Hp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function qp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function Zp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?fu:uu;t.setTexture2D(e||r,s)}function Kp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||du,s)}function Jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||pu,s)}function Qp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hu,s)}function em(i){switch(i){case 5126:return Np;case 35664:return Fp;case 35665:return Op;case 35666:return kp;case 35674:return zp;case 35675:return Bp;case 35676:return Gp;case 5124:case 35670:return Hp;case 35667:case 35671:return Vp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return qp;case 36294:return Yp;case 36295:return $p;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return Qp}}function tm(i,e){i.uniform1fv(this.addr,e)}function nm(i,e){const t=Ni(e,this.size,2);i.uniform2fv(this.addr,t)}function im(i,e){const t=Ni(e,this.size,3);i.uniform3fv(this.addr,t)}function sm(i,e){const t=Ni(e,this.size,4);i.uniform4fv(this.addr,t)}function rm(i,e){const t=Ni(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function am(i,e){const t=Ni(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function om(i,e){const t=Ni(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lm(i,e){i.uniform1iv(this.addr,e)}function cm(i,e){i.uniform2iv(this.addr,e)}function um(i,e){i.uniform3iv(this.addr,e)}function fm(i,e){i.uniform4iv(this.addr,e)}function hm(i,e){i.uniform1uiv(this.addr,e)}function dm(i,e){i.uniform2uiv(this.addr,e)}function pm(i,e){i.uniform3uiv(this.addr,e)}function mm(i,e){i.uniform4uiv(this.addr,e)}function _m(i,e,t){const n=this.cache,s=e.length,r=hr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||uu,r[o])}function gm(i,e,t){const n=this.cache,s=e.length,r=hr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||du,r[o])}function vm(i,e,t){const n=this.cache,s=e.length,r=hr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||pu,r[o])}function xm(i,e,t){const n=this.cache,s=e.length,r=hr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||hu,r[o])}function Mm(i){switch(i){case 5126:return tm;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return um;case 35669:case 35673:return fm;case 5125:return hm;case 36294:return dm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return xm}}class ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=em(t.type)}}class Sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mm(t.type)}}class bm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function fl(i,e){i.seq.push(e),i.map[e.id]=e}function Em(i,e,t){const n=i.name,s=n.length;for(Vr.lastIndex=0;;){const r=Vr.exec(n),o=Vr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fl(t,c===void 0?new ym(a,i,e):new Sm(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new bm(a),fl(t,f)),t=f}}}class $s{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Em(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function hl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wm=37297;let Tm=0;function Am(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Rm(i){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(i);let n;switch(e===t?n="":e===Ki&&t===Zi?n="LinearDisplayP3ToLinearSRGB":e===Zi&&t===Ki&&(n="LinearSRGBToLinearDisplayP3"),i){case on:case ns:return[n,"LinearTransferOETF"];case ct:case lr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function dl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Am(i.getShaderSource(e),o)}else return s}function Cm(i,e){const t=Rm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Lm(i,e){let t;switch(e){case Cc:t="Linear";break;case Lc:t="Reinhard";break;case Pc:t="OptimizedCineon";break;case Dc:t="ACESFilmic";break;case Ic:t="AgX";break;case Uc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wi).join(`
`)}function Dm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(wi).join(`
`)}function Um(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Im(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function wi(i){return i!==""}function pl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ml(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(i){return i.replace(Nm,Om)}const Fm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Om(i,e){let t=Ge[e];if(t===void 0){const n=Fm.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ga(t)}const km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(i){return i.replace(km,zm)}function zm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Za?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ka?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ni:case ii:e="ENVMAP_TYPE_CUBE";break;case ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ii:e="ENVMAP_MODE_REFRACTION";break}return e}function Vm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ar:e="ENVMAP_BLENDING_MULTIPLY";break;case Ac:e="ENVMAP_BLENDING_MIX";break;case Rc:e="ENVMAP_BLENDING_ADD";break}return e}function Wm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xm(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Bm(t),c=Gm(t),u=Hm(t),f=Vm(t),h=Wm(t),m=t.isWebGL2?"":Pm(t),_=Dm(t),g=Um(r),p=s.createProgram();let d,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wi).join(`
`),d.length>0&&(d+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wi).join(`
`),y.length>0&&(y+=`
`)):(d=[gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),y=[m,gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==vn?Lm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Cm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),o=Ga(o),o=pl(o,t),o=ml(o,t),a=Ga(a),a=pl(a,t),a=ml(a,t),o=_l(o),a=_l(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=v+d+o,C=v+y+a,R=hl(s,s.VERTEX_SHADER,b),T=hl(s,s.FRAGMENT_SHADER,C);s.attachShader(p,R),s.attachShader(p,T),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function F(B){if(i.debug.checkShaderErrors){const J=s.getProgramInfoLog(p).trim(),P=s.getShaderInfoLog(R).trim(),O=s.getShaderInfoLog(T).trim();let W=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,R,T);else{const $=dl(s,R,"vertex"),j=dl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+$+`
`+j)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||O==="")&&(K=!1);K&&(B.diagnostics={runnable:W,programLog:J,vertexShader:{log:P,prefix:d},fragmentShader:{log:O,prefix:y}})}s.deleteShader(R),s.deleteShader(T),x=new $s(s,p),E=Im(s,p)}let x;this.getUniforms=function(){return x===void 0&&F(this),x};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(p,wm)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=T,this}let qm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $m(e),t.set(e,n)),n}}class $m{constructor(e){this.id=qm++,this.code=e,this.usedTimes=0}}function jm(i,e,t,n,s,r,o){const a=new cr,l=new Ym,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function p(x,E,k,B,J){const P=B.fog,O=J.geometry,W=x.isMeshStandardMaterial?B.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),$=K&&K.mapping===ts?K.image.height:null,j=_[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,re=Z!==void 0?Z.length:0;let V=0;O.morphAttributes.position!==void 0&&(V=1),O.morphAttributes.normal!==void 0&&(V=2),O.morphAttributes.color!==void 0&&(V=3);let U,Y,le,fe;if(j){const ot=en[j];U=ot.vertexShader,Y=ot.fragmentShader}else U=x.vertexShader,Y=x.fragmentShader,l.update(x),le=l.getVertexShaderID(x),fe=l.getFragmentShaderID(x);const me=i.getRenderTarget(),Ue=J.isInstancedMesh===!0,q=J.isBatchedMesh===!0,Q=!!x.map,he=!!x.matcap,I=!!K,Xe=!!x.aoMap,Me=!!x.lightMap,Ae=!!x.bumpMap,ce=!!x.normalMap,Ze=!!x.displacementMap,Ce=!!x.emissiveMap,w=!!x.metalnessMap,M=!!x.roughnessMap,z=x.anisotropy>0,ie=x.clearcoat>0,te=x.iridescence>0,se=x.sheen>0,ye=x.transmission>0,pe=z&&!!x.anisotropyMap,xe=ie&&!!x.clearcoatMap,Te=ie&&!!x.clearcoatNormalMap,ze=ie&&!!x.clearcoatRoughnessMap,ee=te&&!!x.iridescenceMap,Je=te&&!!x.iridescenceThicknessMap,He=se&&!!x.sheenColorMap,Ie=se&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,_e=!!x.specularColorMap,A=!!x.specularIntensityMap,ae=ye&&!!x.transmissionMap,Se=ye&&!!x.thicknessMap,ve=!!x.gradientMap,ne=!!x.alphaMap,L=x.alphaTest>0,oe=!!x.alphaHash,de=!!x.extensions,Le=!!O.attributes.uv1,we=!!O.attributes.uv2,Ye=!!O.attributes.uv3;let $e=vn;return x.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&($e=i.toneMapping),{isWebGL2:u,shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:U,fragmentShader:Y,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:q,instancing:Ue,instancingColor:Ue&&J.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:on,map:Q,matcap:he,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:$,aoMap:Xe,lightMap:Me,bumpMap:Ae,normalMap:ce,displacementMap:h&&Ze,emissiveMap:Ce,normalMapObjectSpace:ce&&x.normalMapType===qc,normalMapTangentSpace:ce&&x.normalMapType===oo,metalnessMap:w,roughnessMap:M,anisotropy:z,anisotropyMap:pe,clearcoat:ie,clearcoatMap:xe,clearcoatNormalMap:Te,clearcoatRoughnessMap:ze,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:Je,sheen:se,sheenColorMap:He,sheenRoughnessMap:Ie,specularMap:Ee,specularColorMap:_e,specularIntensityMap:A,transmission:ye,transmissionMap:ae,thicknessMap:Se,gradientMap:ve,opaque:x.transparent===!1&&x.blending===ei,alphaMap:ne,alphaTest:L,alphaHash:oe,combine:x.combine,mapUv:Q&&g(x.map.channel),aoMapUv:Xe&&g(x.aoMap.channel),lightMapUv:Me&&g(x.lightMap.channel),bumpMapUv:Ae&&g(x.bumpMap.channel),normalMapUv:ce&&g(x.normalMap.channel),displacementMapUv:Ze&&g(x.displacementMap.channel),emissiveMapUv:Ce&&g(x.emissiveMap.channel),metalnessMapUv:w&&g(x.metalnessMap.channel),roughnessMapUv:M&&g(x.roughnessMap.channel),anisotropyMapUv:pe&&g(x.anisotropyMap.channel),clearcoatMapUv:xe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Te&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&g(x.sheenRoughnessMap.channel),specularMapUv:Ee&&g(x.specularMap.channel),specularColorMapUv:_e&&g(x.specularColorMap.channel),specularIntensityMapUv:A&&g(x.specularIntensityMap.channel),transmissionMapUv:ae&&g(x.transmissionMap.channel),thicknessMapUv:Se&&g(x.thicknessMap.channel),alphaMapUv:ne&&g(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ce||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:we,vertexUv3s:Ye,pointsUvs:J.isPoints===!0&&!!O.attributes.uv&&(Q||ne),fog:!!P,useFog:x.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:V,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Q&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gt,flipSided:x.side===Pt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:de&&x.extensions.derivatives===!0,extensionFragDepth:de&&x.extensions.fragDepth===!0,extensionDrawBuffers:de&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)E.push(k),E.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(y(E,x),v(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function y(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function b(x){const E=_[x.type];let k;if(E){const B=en[E];k=au.clone(B.uniforms)}else k=x.uniforms;return k}function C(x,E){let k;for(let B=0,J=c.length;B<J;B++){const P=c[B];if(P.cacheKey===E){k=P,++k.usedTimes;break}}return k===void 0&&(k=new Xm(i,E,x,r),c.push(k)),k}function R(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function T(x){l.remove(x)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:C,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:F}}function Zm(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Km(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,h,m,_,g,p){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},i[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=g,d.group=p),e++,d}function a(f,h,m,_,g,p){const d=o(f,h,m,_,g,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(f,h,m,_,g,p){const d=o(f,h,m,_,g,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||Km),n.length>1&&n.sort(h||vl),s.length>1&&s.sort(h||vl)}function u(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Jm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new xl,i.set(n,[o])):s>=r.length?(o=new xl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Oe};break;case"SpotLight":t={position:new D,direction:new D,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function e_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let t_=0;function n_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function i_(i,e){const t=new Qm,n=e_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new D);const r=new D,o=new at,a=new at;function l(u,f){let h=0,m=0,_=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let g=0,p=0,d=0,y=0,v=0,b=0,C=0,R=0,T=0,F=0,x=0;u.sort(n_);const E=f===!0?Math.PI:1;for(let B=0,J=u.length;B<J;B++){const P=u[B],O=P.color,W=P.intensity,K=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*W*E,m+=O.g*W*E,_+=O.b*W*E;else if(P.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(P.sh.coefficients[j],W);x++}else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const Z=P.shadow,re=n.get(P);re.shadowBias=Z.bias,re.shadowNormalBias=Z.normalBias,re.shadowRadius=Z.radius,re.shadowMapSize=Z.mapSize,s.directionalShadow[g]=re,s.directionalShadowMap[g]=$,s.directionalShadowMatrix[g]=P.shadow.matrix,b++}s.directional[g]=j,g++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(O).multiplyScalar(W*E),j.distance=K,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,s.spot[d]=j;const Z=P.shadow;if(P.map&&(s.spotLightMap[T]=P.map,T++,Z.updateMatrices(P),P.castShadow&&F++),s.spotLightMatrix[d]=Z.matrix,P.castShadow){const re=n.get(P);re.shadowBias=Z.bias,re.shadowNormalBias=Z.normalBias,re.shadowRadius=Z.radius,re.shadowMapSize=Z.mapSize,s.spotShadow[d]=re,s.spotShadowMap[d]=$,R++}d++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(O).multiplyScalar(W),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),s.rectArea[y]=j,y++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*E),j.distance=P.distance,j.decay=P.decay,P.castShadow){const Z=P.shadow,re=n.get(P);re.shadowBias=Z.bias,re.shadowNormalBias=Z.normalBias,re.shadowRadius=Z.radius,re.shadowMapSize=Z.mapSize,re.shadowCameraNear=Z.camera.near,re.shadowCameraFar=Z.camera.far,s.pointShadow[p]=re,s.pointShadowMap[p]=$,s.pointShadowMatrix[p]=P.shadow.matrix,C++}s.point[p]=j,p++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(W*E),j.groundColor.copy(P.groundColor).multiplyScalar(W*E),s.hemi[v]=j,v++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=m,s.ambient[2]=_;const k=s.hash;(k.directionalLength!==g||k.pointLength!==p||k.spotLength!==d||k.rectAreaLength!==y||k.hemiLength!==v||k.numDirectionalShadows!==b||k.numPointShadows!==C||k.numSpotShadows!==R||k.numSpotMaps!==T||k.numLightProbes!==x)&&(s.directional.length=g,s.spot.length=d,s.rectArea.length=y,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=R+T-F,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=x,k.directionalLength=g,k.pointLength=p,k.spotLength=d,k.rectAreaLength=y,k.hemiLength=v,k.numDirectionalShadows=b,k.numPointShadows=C,k.numSpotShadows=R,k.numSpotMaps=T,k.numLightProbes=x,s.version=t_++)}function c(u,f){let h=0,m=0,_=0,g=0,p=0;const d=f.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const b=u[y];if(b.isDirectionalLight){const C=s.directional[h];C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),h++}else if(b.isSpotLight){const C=s.spot[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),_++}else if(b.isRectAreaLight){const C=s.rectArea[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(b.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const C=s.point[m];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(d),m++}else if(b.isHemisphereLight){const C=s.hemi[p];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function Ml(i,e){const t=new i_(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function s_(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Ml(i,e),t.set(r,[l])):o>=a.length?(l=new Ml(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class mu extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _u extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o_(i,e,t){let n=new ur;const s=new De,r=new De,o=new tt,a=new mu({depthPacking:Xc}),l=new _u,c={},u=t.maxTextureSize,f={[Mn]:Pt,[Pt]:Mn,[Gt]:Gt},h=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:r_,fragmentShader:a_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Tt;_.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new je(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Za;let d=this.type;this.render=function(R,T,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const x=i.getRenderTarget(),E=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),B=i.state;B.setBlending(gn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const J=d!==nn&&this.type===nn,P=d===nn&&this.type!==nn;for(let O=0,W=R.length;O<W;O++){const K=R[O],$=K.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const j=$.getFrameExtents();if(s.multiply(j),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,$.mapSize.y=r.y)),$.map===null||J===!0||P===!0){const re=this.type!==nn?{minFilter:Et,magFilter:Et}:{};$.map!==null&&$.map.dispose(),$.map=new Nn(s.x,s.y,re),$.map.texture.name=K.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const Z=$.getViewportCount();for(let re=0;re<Z;re++){const V=$.getViewport(re);o.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),B.viewport(o),$.updateMatrices(K,re),n=$.getFrustum(),b(T,F,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===nn&&y($,F),$.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(x,E,k)};function y(R,T){const F=e.update(g);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Nn(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,F,h,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,F,m,g,null)}function v(R,T,F,x){let E=null;const k=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)E=k;else if(E=F.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=E.uuid,J=T.uuid;let P=c[B];P===void 0&&(P={},c[B]=P);let O=P[J];O===void 0&&(O=E.clone(),P[J]=O,T.addEventListener("dispose",C)),E=O}if(E.visible=T.visible,E.wireframe=T.wireframe,x===nn?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:f[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,F.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=i.properties.get(E);B.light=F}return E}function b(R,T,F,x,E){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===nn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const J=e.update(R),P=R.material;if(Array.isArray(P)){const O=J.groups;for(let W=0,K=O.length;W<K;W++){const $=O[W],j=P[$.materialIndex];if(j&&j.visible){const Z=v(R,j,x,E);R.onBeforeShadow(i,R,T,F,J,Z,$),i.renderBufferDirect(F,null,J,Z,R,$),R.onAfterShadow(i,R,T,F,J,Z,$)}}}else if(P.visible){const O=v(R,P,x,E);R.onBeforeShadow(i,R,T,F,J,O,null),i.renderBufferDirect(F,null,J,O,R,null),R.onAfterShadow(i,R,T,F,J,O,null)}}const B=R.children;for(let J=0,P=B.length;J<P;J++)b(B[J],T,F,x,E)}function C(R){R.target.removeEventListener("dispose",C);for(const F in c){const x=c[F],E=R.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function l_(i,e,t){const n=t.isWebGL2;function s(){let L=!1;const oe=new tt;let de=null;const Le=new tt(0,0,0,0);return{setMask:function(we){de!==we&&!L&&(i.colorMask(we,we,we,we),de=we)},setLocked:function(we){L=we},setClear:function(we,Ye,$e,it,ot){ot===!0&&(we*=it,Ye*=it,$e*=it),oe.set(we,Ye,$e,it),Le.equals(oe)===!1&&(i.clearColor(we,Ye,$e,it),Le.copy(oe))},reset:function(){L=!1,de=null,Le.set(-1,0,0,0)}}}function r(){let L=!1,oe=null,de=null,Le=null;return{setTest:function(we){we?q(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(we){oe!==we&&!L&&(i.depthMask(we),oe=we)},setFunc:function(we){if(de!==we){switch(we){case Mc:i.depthFunc(i.NEVER);break;case yc:i.depthFunc(i.ALWAYS);break;case Sc:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case bc:i.depthFunc(i.EQUAL);break;case Ec:i.depthFunc(i.GEQUAL);break;case wc:i.depthFunc(i.GREATER);break;case Tc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=we}},setLocked:function(we){L=we},setClear:function(we){Le!==we&&(i.clearDepth(we),Le=we)},reset:function(){L=!1,oe=null,de=null,Le=null}}}function o(){let L=!1,oe=null,de=null,Le=null,we=null,Ye=null,$e=null,it=null,ot=null;return{setTest:function(Ke){L||(Ke?q(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!L&&(i.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,ut,tn){(de!==Ke||Le!==ut||we!==tn)&&(i.stencilFunc(Ke,ut,tn),de=Ke,Le=ut,we=tn)},setOp:function(Ke,ut,tn){(Ye!==Ke||$e!==ut||it!==tn)&&(i.stencilOp(Ke,ut,tn),Ye=Ke,$e=ut,it=tn)},setLocked:function(Ke){L=Ke},setClear:function(Ke){ot!==Ke&&(i.clearStencil(Ke),ot=Ke)},reset:function(){L=!1,oe=null,de=null,Le=null,we=null,Ye=null,$e=null,it=null,ot=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,g=[],p=null,d=!1,y=null,v=null,b=null,C=null,R=null,T=null,F=null,x=new Oe(0,0,0),E=0,k=!1,B=null,J=null,P=null,O=null,W=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,j=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=j>=2);let re=null,V={};const U=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),le=new tt().fromArray(U),fe=new tt().fromArray(Y);function me(L,oe,de,Le){const we=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(L,Ye),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<de;$e++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(oe,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(oe+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Ye}const Ue={};Ue[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),q(i.DEPTH_TEST),l.setFunc($i),Ce(!1),w(sa),q(i.CULL_FACE),ce(gn);function q(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Q(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function he(L,oe){return m[L]!==oe?(i.bindFramebuffer(L,oe),m[L]=oe,n&&(L===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=oe),L===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=oe)),!0):!1}function I(L,oe){let de=g,Le=!1;if(L)if(de=_.get(oe),de===void 0&&(de=[],_.set(oe,de)),L.isWebGLMultipleRenderTargets){const we=L.texture;if(de.length!==we.length||de[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,$e=we.length;Ye<$e;Ye++)de[Ye]=i.COLOR_ATTACHMENT0+Ye;de.length=we.length,Le=!0}}else de[0]!==i.COLOR_ATTACHMENT0&&(de[0]=i.COLOR_ATTACHMENT0,Le=!0);else de[0]!==i.BACK&&(de[0]=i.BACK,Le=!0);Le&&(t.isWebGL2?i.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function Xe(L){return p!==L?(i.useProgram(L),p=L,!0):!1}const Me={[Rn]:i.FUNC_ADD,[rc]:i.FUNC_SUBTRACT,[ac]:i.FUNC_REVERSE_SUBTRACT};if(n)Me[la]=i.MIN,Me[ca]=i.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Me[la]=L.MIN_EXT,Me[ca]=L.MAX_EXT)}const Ae={[oc]:i.ZERO,[lc]:i.ONE,[cc]:i.SRC_COLOR,[Ks]:i.SRC_ALPHA,[mc]:i.SRC_ALPHA_SATURATE,[dc]:i.DST_COLOR,[fc]:i.DST_ALPHA,[uc]:i.ONE_MINUS_SRC_COLOR,[Js]:i.ONE_MINUS_SRC_ALPHA,[pc]:i.ONE_MINUS_DST_COLOR,[hc]:i.ONE_MINUS_DST_ALPHA,[_c]:i.CONSTANT_COLOR,[gc]:i.ONE_MINUS_CONSTANT_COLOR,[vc]:i.CONSTANT_ALPHA,[xc]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(L,oe,de,Le,we,Ye,$e,it,ot,Ke){if(L===gn){d===!0&&(Q(i.BLEND),d=!1);return}if(d===!1&&(q(i.BLEND),d=!0),L!==sc){if(L!==y||Ke!==k){if((v!==Rn||R!==Rn)&&(i.blendEquation(i.FUNC_ADD),v=Rn,R=Rn),Ke)switch(L){case ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ra:i.blendFunc(i.ONE,i.ONE);break;case aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ra:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,C=null,T=null,F=null,x.set(0,0,0),E=0,y=L,k=Ke}return}we=we||oe,Ye=Ye||de,$e=$e||Le,(oe!==v||we!==R)&&(i.blendEquationSeparate(Me[oe],Me[we]),v=oe,R=we),(de!==b||Le!==C||Ye!==T||$e!==F)&&(i.blendFuncSeparate(Ae[de],Ae[Le],Ae[Ye],Ae[$e]),b=de,C=Le,T=Ye,F=$e),(it.equals(x)===!1||ot!==E)&&(i.blendColor(it.r,it.g,it.b,ot),x.copy(it),E=ot),y=L,k=!1}function Ze(L,oe){L.side===Gt?Q(i.CULL_FACE):q(i.CULL_FACE);let de=L.side===Pt;oe&&(de=!de),Ce(de),L.blending===ei&&L.transparent===!1?ce(gn):ce(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Le=L.stencilWrite;c.setTest(Le),Le&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),z(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(L){B!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),B=L)}function w(L){L!==nc?(q(i.CULL_FACE),L!==J&&(L===sa?i.cullFace(i.BACK):L===ic?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),J=L}function M(L){L!==P&&($&&i.lineWidth(L),P=L)}function z(L,oe,de){L?(q(i.POLYGON_OFFSET_FILL),(O!==oe||W!==de)&&(i.polygonOffset(oe,de),O=oe,W=de)):Q(i.POLYGON_OFFSET_FILL)}function ie(L){L?q(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function te(L){L===void 0&&(L=i.TEXTURE0+K-1),re!==L&&(i.activeTexture(L),re=L)}function se(L,oe,de){de===void 0&&(re===null?de=i.TEXTURE0+K-1:de=re);let Le=V[de];Le===void 0&&(Le={type:void 0,texture:void 0},V[de]=Le),(Le.type!==L||Le.texture!==oe)&&(re!==de&&(i.activeTexture(de),re=de),i.bindTexture(L,oe||Ue[L]),Le.type=L,Le.texture=oe)}function ye(){const L=V[re];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Je(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function A(L){le.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),le.copy(L))}function ae(L){fe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),fe.copy(L))}function Se(L,oe){let de=f.get(oe);de===void 0&&(de=new WeakMap,f.set(oe,de));let Le=de.get(L);Le===void 0&&(Le=i.getUniformBlockIndex(oe,L.name),de.set(L,Le))}function ve(L,oe){const Le=f.get(oe).get(L);u.get(oe)!==Le&&(i.uniformBlockBinding(oe,Le,L.__bindingPointIndex),u.set(oe,Le))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,V={},m={},_=new WeakMap,g=[],p=null,d=!1,y=null,v=null,b=null,C=null,R=null,T=null,F=null,x=new Oe(0,0,0),E=0,k=!1,B=null,J=null,P=null,O=null,W=null,le.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:q,disable:Q,bindFramebuffer:he,drawBuffers:I,useProgram:Xe,setBlending:ce,setMaterial:Ze,setFlipSided:Ce,setCullFace:w,setLineWidth:M,setPolygonOffset:z,setScissorTest:ie,activeTexture:te,bindTexture:se,unbindTexture:ye,compressedTexImage2D:pe,compressedTexImage3D:xe,texImage2D:Ee,texImage3D:_e,updateUBOMapping:Se,uniformBlockBinding:ve,texStorage2D:He,texStorage3D:Ie,texSubImage2D:Te,texSubImage3D:ze,compressedTexSubImage2D:ee,compressedTexSubImage3D:Je,scissor:A,viewport:ae,reset:ne}}function c_(i,e,t,n,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,M){return m?new OffscreenCanvas(w,M):sr("canvas")}function g(w,M,z,ie){let te=1;if((w.width>ie||w.height>ie)&&(te=ie/Math.max(w.width,w.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const se=M?ir:Math.floor,ye=se(te*w.width),pe=se(te*w.height);f===void 0&&(f=_(ye,pe));const xe=z?_(ye,pe):f;return xe.width=ye,xe.height=pe,xe.getContext("2d").drawImage(w,0,0,ye,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ye+"x"+pe+")."),xe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return za(w.width)&&za(w.height)}function d(w){return a?!1:w.wrapS!==qt||w.wrapT!==qt||w.minFilter!==Et&&w.minFilter!==kt}function y(w,M){return w.generateMipmaps&&M&&w.minFilter!==Et&&w.minFilter!==kt}function v(w){i.generateMipmap(w)}function b(w,M,z,ie,te=!1){if(a===!1)return M;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let se=M;if(M===i.RED&&(z===i.FLOAT&&(se=i.R32F),z===i.HALF_FLOAT&&(se=i.R16F),z===i.UNSIGNED_BYTE&&(se=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(se=i.R8UI),z===i.UNSIGNED_SHORT&&(se=i.R16UI),z===i.UNSIGNED_INT&&(se=i.R32UI),z===i.BYTE&&(se=i.R8I),z===i.SHORT&&(se=i.R16I),z===i.INT&&(se=i.R32I)),M===i.RG&&(z===i.FLOAT&&(se=i.RG32F),z===i.HALF_FLOAT&&(se=i.RG16F),z===i.UNSIGNED_BYTE&&(se=i.RG8)),M===i.RGBA){const ye=te?ji:Qe.getTransfer(ie);z===i.FLOAT&&(se=i.RGBA32F),z===i.HALF_FLOAT&&(se=i.RGBA16F),z===i.UNSIGNED_BYTE&&(se=ye===et?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function C(w,M,z){return y(w,z)===!0||w.isFramebufferTexture&&w.minFilter!==Et&&w.minFilter!==kt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function R(w){return w===Et||w===ua||w===Hs?i.NEAREST:i.LINEAR}function T(w){const M=w.target;M.removeEventListener("dispose",T),x(M),M.isVideoTexture&&u.delete(M)}function F(w){const M=w.target;M.removeEventListener("dispose",F),k(M)}function x(w){const M=n.get(w);if(M.__webglInit===void 0)return;const z=w.source,ie=h.get(z);if(ie){const te=ie[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(w),Object.keys(ie).length===0&&h.delete(z)}n.remove(w)}function E(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const z=w.source,ie=h.get(z);delete ie[M.__cacheKey],o.memory.textures--}function k(w){const M=w.texture,z=n.get(w),ie=n.get(M);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(z.__webglFramebuffer[te]))for(let se=0;se<z.__webglFramebuffer[te].length;se++)i.deleteFramebuffer(z.__webglFramebuffer[te][se]);else i.deleteFramebuffer(z.__webglFramebuffer[te]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[te])}else{if(Array.isArray(z.__webglFramebuffer))for(let te=0;te<z.__webglFramebuffer.length;te++)i.deleteFramebuffer(z.__webglFramebuffer[te]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let te=0;te<z.__webglColorRenderbuffer.length;te++)z.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[te]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let te=0,se=M.length;te<se;te++){const ye=n.get(M[te]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(M[te])}n.remove(M),n.remove(w)}let B=0;function J(){B=0}function P(){const w=B;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),B+=1,w}function O(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function W(w,M){const z=n.get(w);if(w.isVideoTexture&&Ze(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const ie=w.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(z,w,M);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function K(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){le(z,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function $(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){le(z,w,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function j(w,M){const z=n.get(w);if(w.version>0&&z.__version!==w.version){fe(z,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const Z={[Un]:i.REPEAT,[qt]:i.CLAMP_TO_EDGE,[tr]:i.MIRRORED_REPEAT},re={[Et]:i.NEAREST,[ua]:i.NEAREST_MIPMAP_NEAREST,[Hs]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[Nc]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},V={[Yc]:i.NEVER,[Qc]:i.ALWAYS,[$c]:i.LESS,[lo]:i.LEQUAL,[jc]:i.EQUAL,[Jc]:i.GEQUAL,[Zc]:i.GREATER,[Kc]:i.NOTEQUAL};function U(w,M,z){if(z?(i.texParameteri(w,i.TEXTURE_WRAP_S,Z[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Z[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Z[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,re[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,re[M.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==qt||M.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,R(M.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==Et&&M.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,V[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Et||M.minFilter!==Hs&&M.minFilter!==Ci||M.type===_n&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Li&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(w,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Y(w,M){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",T));const ie=M.source;let te=h.get(ie);te===void 0&&(te={},h.set(ie,te));const se=O(M);if(se!==w.__cacheKey){te[se]===void 0&&(te[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[se].usedTimes++;const ye=te[w.__cacheKey];ye!==void 0&&(te[w.__cacheKey].usedTimes--,ye.usedTimes===0&&E(M)),w.__cacheKey=se,w.__webglTexture=te[se].texture}return z}function le(w,M,z){let ie=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=i.TEXTURE_3D);const te=Y(w,M),se=M.source;t.bindTexture(ie,w.__webglTexture,i.TEXTURE0+z);const ye=n.get(se);if(se.version!==ye.__version||te===!0){t.activeTexture(i.TEXTURE0+z);const pe=Qe.getPrimaries(Qe.workingColorSpace),xe=M.colorSpace===Ht?null:Qe.getPrimaries(M.colorSpace),Te=M.colorSpace===Ht||pe===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ze=d(M)&&p(M.image)===!1;let ee=g(M.image,ze,!1,s.maxTextureSize);ee=Ce(M,ee);const Je=p(ee)||a,He=r.convert(M.format,M.colorSpace);let Ie=r.convert(M.type),Ee=b(M.internalFormat,He,Ie,M.colorSpace,M.isVideoTexture);U(ie,M,Je);let _e;const A=M.mipmaps,ae=a&&M.isVideoTexture!==!0&&Ee!==ro,Se=ye.__version===void 0||te===!0,ve=C(M,ee,Je);if(M.isDepthTexture)Ee=i.DEPTH_COMPONENT,a?M.type===_n?Ee=i.DEPTH_COMPONENT32F:M.type===mn?Ee=i.DEPTH_COMPONENT24:M.type===Ln?Ee=i.DEPTH24_STENCIL8:Ee=i.DEPTH_COMPONENT16:M.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Pn&&Ee===i.DEPTH_COMPONENT&&M.type!==or&&M.type!==mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=mn,Ie=r.convert(M.type)),M.format===si&&Ee===i.DEPTH_COMPONENT&&(Ee=i.DEPTH_STENCIL,M.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ln,Ie=r.convert(M.type))),Se&&(ae?t.texStorage2D(i.TEXTURE_2D,1,Ee,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Ee,ee.width,ee.height,0,He,Ie,null));else if(M.isDataTexture)if(A.length>0&&Je){ae&&Se&&t.texStorage2D(i.TEXTURE_2D,ve,Ee,A[0].width,A[0].height);for(let ne=0,L=A.length;ne<L;ne++)_e=A[ne],ae?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,_e.width,_e.height,He,Ie,_e.data):t.texImage2D(i.TEXTURE_2D,ne,Ee,_e.width,_e.height,0,He,Ie,_e.data);M.generateMipmaps=!1}else ae?(Se&&t.texStorage2D(i.TEXTURE_2D,ve,Ee,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,He,Ie,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Ee,ee.width,ee.height,0,He,Ie,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ae&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ee,A[0].width,A[0].height,ee.depth);for(let ne=0,L=A.length;ne<L;ne++)_e=A[ne],M.format!==Yt?He!==null?ae?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,ee.depth,He,_e.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Ee,_e.width,_e.height,ee.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,ee.depth,He,Ie,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Ee,_e.width,_e.height,ee.depth,0,He,Ie,_e.data)}else{ae&&Se&&t.texStorage2D(i.TEXTURE_2D,ve,Ee,A[0].width,A[0].height);for(let ne=0,L=A.length;ne<L;ne++)_e=A[ne],M.format!==Yt?He!==null?ae?t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,_e.width,_e.height,He,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Ee,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,_e.width,_e.height,He,Ie,_e.data):t.texImage2D(i.TEXTURE_2D,ne,Ee,_e.width,_e.height,0,He,Ie,_e.data)}else if(M.isDataArrayTexture)ae?(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ee,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,He,Ie,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,ee.width,ee.height,ee.depth,0,He,Ie,ee.data);else if(M.isData3DTexture)ae?(Se&&t.texStorage3D(i.TEXTURE_3D,ve,Ee,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,He,Ie,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,ee.width,ee.height,ee.depth,0,He,Ie,ee.data);else if(M.isFramebufferTexture){if(Se)if(ae)t.texStorage2D(i.TEXTURE_2D,ve,Ee,ee.width,ee.height);else{let ne=ee.width,L=ee.height;for(let oe=0;oe<ve;oe++)t.texImage2D(i.TEXTURE_2D,oe,Ee,ne,L,0,He,Ie,null),ne>>=1,L>>=1}}else if(A.length>0&&Je){ae&&Se&&t.texStorage2D(i.TEXTURE_2D,ve,Ee,A[0].width,A[0].height);for(let ne=0,L=A.length;ne<L;ne++)_e=A[ne],ae?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,He,Ie,_e):t.texImage2D(i.TEXTURE_2D,ne,Ee,He,Ie,_e);M.generateMipmaps=!1}else ae?(Se&&t.texStorage2D(i.TEXTURE_2D,ve,Ee,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,He,Ie,ee)):t.texImage2D(i.TEXTURE_2D,0,Ee,He,Ie,ee);y(M,Je)&&v(ie),ye.__version=se.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function fe(w,M,z){if(M.image.length!==6)return;const ie=Y(w,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const se=n.get(te);if(te.version!==se.__version||ie===!0){t.activeTexture(i.TEXTURE0+z);const ye=Qe.getPrimaries(Qe.workingColorSpace),pe=M.colorSpace===Ht?null:Qe.getPrimaries(M.colorSpace),xe=M.colorSpace===Ht||ye===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Te=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let ne=0;ne<6;ne++)!Te&&!ze?ee[ne]=g(M.image[ne],!1,!0,s.maxCubemapSize):ee[ne]=ze?M.image[ne].image:M.image[ne],ee[ne]=Ce(M,ee[ne]);const Je=ee[0],He=p(Je)||a,Ie=r.convert(M.format,M.colorSpace),Ee=r.convert(M.type),_e=b(M.internalFormat,Ie,Ee,M.colorSpace),A=a&&M.isVideoTexture!==!0,ae=se.__version===void 0||ie===!0;let Se=C(M,Je,He);U(i.TEXTURE_CUBE_MAP,M,He);let ve;if(Te){A&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,_e,Je.width,Je.height);for(let ne=0;ne<6;ne++){ve=ee[ne].mipmaps;for(let L=0;L<ve.length;L++){const oe=ve[L];M.format!==Yt?Ie!==null?A?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,oe.width,oe.height,Ie,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,_e,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,oe.width,oe.height,Ie,Ee,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,_e,oe.width,oe.height,0,Ie,Ee,oe.data)}}}else{ve=M.mipmaps,A&&ae&&(ve.length>0&&Se++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,_e,ee[0].width,ee[0].height));for(let ne=0;ne<6;ne++)if(ze){A?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ee[ne].width,ee[ne].height,Ie,Ee,ee[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,_e,ee[ne].width,ee[ne].height,0,Ie,Ee,ee[ne].data);for(let L=0;L<ve.length;L++){const de=ve[L].image[ne].image;A?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,de.width,de.height,Ie,Ee,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,_e,de.width,de.height,0,Ie,Ee,de.data)}}else{A?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,Ee,ee[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,_e,Ie,Ee,ee[ne]);for(let L=0;L<ve.length;L++){const oe=ve[L];A?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,Ie,Ee,oe.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,_e,Ie,Ee,oe.image[ne])}}}y(M,He)&&v(i.TEXTURE_CUBE_MAP),se.__version=te.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function me(w,M,z,ie,te,se){const ye=r.convert(z.format,z.colorSpace),pe=r.convert(z.type),xe=b(z.internalFormat,ye,pe,z.colorSpace);if(!n.get(M).__hasExternalTextures){const ze=Math.max(1,M.width>>se),ee=Math.max(1,M.height>>se);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,se,xe,ze,ee,M.depth,0,ye,pe,null):t.texImage2D(te,se,xe,ze,ee,0,ye,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ce(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,te,n.get(z).__webglTexture,0,Ae(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,te,n.get(z).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(w,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let ie=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||ce(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===_n?ie=i.DEPTH_COMPONENT32F:te.type===mn&&(ie=i.DEPTH_COMPONENT24));const se=Ae(M);ce(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,ie,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ie,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const ie=Ae(M);z&&ce(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,M.width,M.height):ce(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<ie.length;te++){const se=ie[te],ye=r.convert(se.format,se.colorSpace),pe=r.convert(se.type),xe=b(se.internalFormat,ye,pe,se.colorSpace),Te=Ae(M);z&&ce(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,xe,M.width,M.height):ce(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,xe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function q(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const ie=n.get(M.depthTexture).__webglTexture,te=Ae(M);if(M.depthTexture.format===Pn)ce(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(M.depthTexture.format===si)ce(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Q(w){const M=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");q(M.__webglFramebuffer,w)}else if(z){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=i.createRenderbuffer(),Ue(M.__webglDepthbuffer[ie],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Ue(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(w,M,z){const ie=n.get(w);M!==void 0&&me(ie.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Q(w)}function I(w){const M=w.texture,z=n.get(w),ie=n.get(M);w.addEventListener("dispose",F),w.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=M.version,o.memory.textures++);const te=w.isWebGLCubeRenderTarget===!0,se=w.isWebGLMultipleRenderTargets===!0,ye=p(w)||a;if(te){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let xe=0;xe<M.mipmaps.length;xe++)z.__webglFramebuffer[pe][xe]=i.createFramebuffer()}else z.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)z.__webglFramebuffer[pe]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(se)if(s.drawBuffers){const pe=w.texture;for(let xe=0,Te=pe.length;xe<Te;xe++){const ze=n.get(pe[xe]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ce(w)===!1){const pe=se?M:[M];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xe=0;xe<pe.length;xe++){const Te=pe[xe];z.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[xe]);const ze=r.convert(Te.format,Te.colorSpace),ee=r.convert(Te.type),Je=b(Te.internalFormat,ze,ee,Te.colorSpace,w.isXRRenderTarget===!0),He=Ae(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Je,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,z.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),U(i.TEXTURE_CUBE_MAP,M,ye);for(let pe=0;pe<6;pe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)me(z.__webglFramebuffer[pe][xe],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else me(z.__webglFramebuffer[pe],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(M,ye)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const pe=w.texture;for(let xe=0,Te=pe.length;xe<Te;xe++){const ze=pe[xe],ee=n.get(ze);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),U(i.TEXTURE_2D,ze,ye),me(z.__webglFramebuffer,w,ze,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),y(ze,ye)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?pe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,ie.__webglTexture),U(pe,M,ye),a&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)me(z.__webglFramebuffer[xe],w,M,i.COLOR_ATTACHMENT0,pe,xe);else me(z.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,pe,0);y(M,ye)&&v(pe),t.unbindTexture()}w.depthBuffer&&Q(w)}function Xe(w){const M=p(w)||a,z=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0,te=z.length;ie<te;ie++){const se=z[ie];if(y(se,M)){const ye=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(se).__webglTexture;t.bindTexture(ye,pe),v(ye),t.unbindTexture()}}}function Me(w){if(a&&w.samples>0&&ce(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],z=w.width,ie=w.height;let te=i.COLOR_BUFFER_BIT;const se=[],ye=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(w),xe=w.isWebGLMultipleRenderTargets===!0;if(xe)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){se.push(i.COLOR_ATTACHMENT0+Te),w.depthBuffer&&se.push(ye);const ze=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(ze===!1&&(w.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),xe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Te]),ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ye]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ye])),xe){const ee=n.get(M[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,z,ie,0,0,z,ie,te,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Te]);const ze=n.get(M[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Ae(w){return Math.min(s.maxSamples,w.samples)}function ce(w){const M=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ze(w){const M=o.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function Ce(w,M){const z=w.colorSpace,ie=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===nr||z!==on&&z!==Ht&&(Qe.getTransfer(z)===et?a===!1?e.has("EXT_sRGB")===!0&&ie===Yt?(w.format=nr,w.minFilter=kt,w.generateMipmaps=!1):M=uo.sRGBToLinear(M):(ie!==Yt||te!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=$,this.setTextureCube=j,this.rebindTextures=he,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ce}function gu(i,e,t){const n=t.isWebGL2;function s(r,o=Ht){let a;const l=Qe.getTransfer(o);if(r===xn)return i.UNSIGNED_BYTE;if(r===eo)return i.UNSIGNED_SHORT_4_4_4_4;if(r===to)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Fc)return i.BYTE;if(r===Oc)return i.SHORT;if(r===or)return i.UNSIGNED_SHORT;if(r===Qa)return i.INT;if(r===mn)return i.UNSIGNED_INT;if(r===_n)return i.FLOAT;if(r===Li)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===kc)return i.ALPHA;if(r===Yt)return i.RGBA;if(r===zc)return i.LUMINANCE;if(r===Bc)return i.LUMINANCE_ALPHA;if(r===Pn)return i.DEPTH_COMPONENT;if(r===si)return i.DEPTH_STENCIL;if(r===nr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Gc)return i.RED;if(r===no)return i.RED_INTEGER;if(r===Hc)return i.RG;if(r===io)return i.RG_INTEGER;if(r===so)return i.RGBA_INTEGER;if(r===Vs||r===Ws||r===Xs||r===qs)if(l===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Vs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Vs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ws)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fa||r===ha||r===da||r===pa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===fa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ha)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===da)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ro)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ma||r===_a)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ma)return l===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===_a)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ga||r===va||r===xa||r===Ma||r===ya||r===Sa||r===ba||r===Ea||r===wa||r===Ta||r===Aa||r===Ra||r===Ca||r===La)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ga)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===va)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xa)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ma)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ya)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sa)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ba)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ea)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wa)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ta)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Aa)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ra)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ca)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===La)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ys||r===Pa||r===Da)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ys)return l===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Da)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vc||r===Ua||r===Ia||r===Na)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ys)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ua)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ia)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Na)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ln?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class vu extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ut extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u_={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),d=this._getHandJoint(c,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class f_ extends zn{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,_=null;const g=t.getContextAttributes();let p=null,d=null;const y=[],v=[],b=new De;let C=null;const R=new Bt;R.layers.enable(1),R.viewport=new tt;const T=new Bt;T.layers.enable(2),T.viewport=new tt;const F=[R,T],x=new vu;x.layers.enable(1),x.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Y=y[U];return Y===void 0&&(Y=new Wr,y[U]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(U){let Y=y[U];return Y===void 0&&(Y=new Wr,y[U]=Y),Y.getGripSpace()},this.getHand=function(U){let Y=y[U];return Y===void 0&&(Y=new Wr,y[U]=Y),Y.getHandSpace()};function B(U){const Y=v.indexOf(U.inputSource);if(Y===-1)return;const le=y[Y];le!==void 0&&(le.update(U.inputSource,U.frame,c||o),le.dispatchEvent({type:U.type,data:U.inputSource}))}function J(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",P);for(let U=0;U<y.length;U++){const Y=v[U];Y!==null&&(v[U]=null,y[U].disconnect(Y))}E=null,k=null,e.setRenderTarget(p),m=null,h=null,f=null,s=null,d=null,V.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",J),s.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Nn(m.framebufferWidth,m.framebufferHeight,{format:Yt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Y=null,le=null,fe=null;g.depth&&(fe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=g.stencil?si:Pn,le=g.stencil?Ln:mn);const me={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(me),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Nn(h.textureWidth,h.textureHeight,{format:Yt,type:xn,depthTexture:new xo(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ue=e.properties.get(d);Ue.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),V.setContext(s),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(U){for(let Y=0;Y<U.removed.length;Y++){const le=U.removed[Y],fe=v.indexOf(le);fe>=0&&(v[fe]=null,y[fe].disconnect(le))}for(let Y=0;Y<U.added.length;Y++){const le=U.added[Y];let fe=v.indexOf(le);if(fe===-1){for(let Ue=0;Ue<y.length;Ue++)if(Ue>=v.length){v.push(le),fe=Ue;break}else if(v[Ue]===null){v[Ue]=le,fe=Ue;break}if(fe===-1)break}const me=y[fe];me&&me.connect(le)}}const O=new D,W=new D;function K(U,Y,le){O.setFromMatrixPosition(Y.matrixWorld),W.setFromMatrixPosition(le.matrixWorld);const fe=O.distanceTo(W),me=Y.projectionMatrix.elements,Ue=le.projectionMatrix.elements,q=me[14]/(me[10]-1),Q=me[14]/(me[10]+1),he=(me[9]+1)/me[5],I=(me[9]-1)/me[5],Xe=(me[8]-1)/me[0],Me=(Ue[8]+1)/Ue[0],Ae=q*Xe,ce=q*Me,Ze=fe/(-Xe+Me),Ce=Ze*-Xe;Y.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ce),U.translateZ(Ze),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const w=q+Ze,M=Q+Ze,z=Ae-Ce,ie=ce+(fe-Ce),te=he*Q/M*w,se=I*Q/M*w;U.projectionMatrix.makePerspective(z,ie,te,se,w,M),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function $(U,Y){Y===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Y.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;x.near=T.near=R.near=U.near,x.far=T.far=R.far=U.far,(E!==x.near||k!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,k=x.far);const Y=U.parent,le=x.cameras;$(x,Y);for(let fe=0;fe<le.length;fe++)$(le[fe],Y);le.length===2?K(x,R,T):x.projectionMatrix.copy(R.projectionMatrix),j(U,x,Y)};function j(U,Y,le){le===null?U.matrix.copy(Y.matrixWorld):(U.matrix.copy(le.matrixWorld),U.matrix.invert(),U.matrix.multiply(Y.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(Y.projectionMatrix),U.projectionMatrixInverse.copy(Y.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Qi*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(U){l=U,h!==null&&(h.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let Z=null;function re(U,Y){if(u=Y.getViewerPose(c||o),_=Y,u!==null){const le=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let fe=!1;le.length!==x.cameras.length&&(x.cameras.length=0,fe=!0);for(let me=0;me<le.length;me++){const Ue=le[me];let q=null;if(m!==null)q=m.getViewport(Ue);else{const he=f.getViewSubImage(h,Ue);q=he.viewport,me===0&&(e.setRenderTargetTextures(d,he.colorTexture,h.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(d))}let Q=F[me];Q===void 0&&(Q=new Bt,Q.layers.enable(me),Q.viewport=new tt,F[me]=Q),Q.matrix.fromArray(Ue.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ue.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(q.x,q.y,q.width,q.height),me===0&&(x.matrix.copy(Q.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),fe===!0&&x.cameras.push(Q)}}for(let le=0;le<y.length;le++){const fe=v[le],me=y[le];fe!==null&&me!==void 0&&me.update(fe,Y,c||o)}Z&&Z(U,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),_=null}const V=new cu;V.setAnimationLoop(re),this.setAnimationLoop=function(U){Z=U},this.dispose=function(){}}}function h_(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,ru(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,y,v,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,y,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Pt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Pt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=v*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const y=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function d_(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const b=v.program;n.uniformBlockBinding(y,b)}function c(y,v){let b=s[y.id];b===void 0&&(_(y),b=u(y),s[y.id]=b,y.addEventListener("dispose",p));const C=v.program;n.updateUBOMapping(y,C);const R=e.render.frame;r[y.id]!==R&&(h(y),r[y.id]=R)}function u(y){const v=f();y.__bindingPointIndex=v;const b=i.createBuffer(),C=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=s[y.id],b=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,T=b.length;R<T;R++){const F=Array.isArray(b[R])?b[R]:[b[R]];for(let x=0,E=F.length;x<E;x++){const k=F[x];if(m(k,R,x,C)===!0){const B=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let P=0;for(let O=0;O<J.length;O++){const W=J[O],K=g(W);typeof W=="number"||typeof W=="boolean"?(k.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,B+P,k.__data)):W.isMatrix3?(k.__data[0]=W.elements[0],k.__data[1]=W.elements[1],k.__data[2]=W.elements[2],k.__data[3]=0,k.__data[4]=W.elements[3],k.__data[5]=W.elements[4],k.__data[6]=W.elements[5],k.__data[7]=0,k.__data[8]=W.elements[6],k.__data[9]=W.elements[7],k.__data[10]=W.elements[8],k.__data[11]=0):(W.toArray(k.__data,P),P+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,v,b,C){const R=y.value,T=v+"_"+b;if(C[T]===void 0)return typeof R=="number"||typeof R=="boolean"?C[T]=R:C[T]=R.clone(),!0;{const F=C[T];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return C[T]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function _(y){const v=y.uniforms;let b=0;const C=16;for(let T=0,F=v.length;T<F;T++){const x=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,k=x.length;E<k;E++){const B=x[E],J=Array.isArray(B.value)?B.value:[B.value];for(let P=0,O=J.length;P<O;P++){const W=J[P],K=g(W),$=b%C;$!==0&&C-$<K.boundary&&(b+=C-$),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=K.storage}}}const R=b%C;return R>0&&(b+=C-R),y.__size=b,y.__cache={},this}function g(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Mo{constructor(e={}){const{canvas:t=tu(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this._useLegacyLights=!1,this.toneMapping=vn,this.toneMappingExposure=1;const v=this;let b=!1,C=0,R=0,T=null,F=-1,x=null;const E=new tt,k=new tt;let B=null;const J=new Oe(0);let P=0,O=t.width,W=t.height,K=1,$=null,j=null;const Z=new tt(0,0,O,W),re=new tt(0,0,O,W);let V=!1;const U=new ur;let Y=!1,le=!1,fe=null;const me=new at,Ue=new De,q=new D,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return T===null?K:1}let I=n;function Xe(S,N){for(let H=0;H<S.length;H++){const X=S[H],G=t.getContext(X,N);if(G!==null)return G}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rr}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",oe,!1),I===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),I=Xe(N,S),I===null)throw Xe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Me,Ae,ce,Ze,Ce,w,M,z,ie,te,se,ye,pe,xe,Te,ze,ee,Je,He,Ie,Ee,_e,A,ae;function Se(){Me=new Ap(I),Ae=new yp(I,Me,e),Me.init(Ae),_e=new gu(I,Me,Ae),ce=new l_(I,Me,Ae),Ze=new Lp(I),Ce=new Zm,w=new c_(I,Me,ce,Ce,Ae,_e,Ze),M=new bp(v),z=new Tp(v),ie=new kf(I,Ae),A=new xp(I,Me,ie,Ae),te=new Rp(I,ie,Ze,A),se=new Ip(I,te,ie,Ze),He=new Up(I,Ae,w),ze=new Sp(Ce),ye=new jm(v,M,z,Me,Ae,A,ze),pe=new h_(v,Ce),xe=new Jm,Te=new s_(Me,Ae),Je=new vp(v,M,z,ce,se,h,l),ee=new o_(v,se,Ae),ae=new d_(I,Ze,Ae,ce),Ie=new Mp(I,Me,Ze,Ae),Ee=new Cp(I,Me,Ze,Ae),Ze.programs=ye.programs,v.capabilities=Ae,v.extensions=Me,v.properties=Ce,v.renderLists=xe,v.shadowMap=ee,v.state=ce,v.info=Ze}Se();const ve=new f_(v,I);this.xr=ve,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=Me.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Me.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(O,W,!1))},this.getSize=function(S){return S.set(O,W)},this.setSize=function(S,N,H=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,W=N,t.width=Math.floor(S*K),t.height=Math.floor(N*K),H===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(O*K,W*K).floor()},this.setDrawingBufferSize=function(S,N,H){O=S,W=N,K=H,t.width=Math.floor(S*H),t.height=Math.floor(N*H),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(Z)},this.setViewport=function(S,N,H,X){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,N,H,X),ce.viewport(E.copy(Z).multiplyScalar(K).floor())},this.getScissor=function(S){return S.copy(re)},this.setScissor=function(S,N,H,X){S.isVector4?re.set(S.x,S.y,S.z,S.w):re.set(S,N,H,X),ce.scissor(k.copy(re).multiplyScalar(K).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(S){ce.setScissorTest(V=S)},this.setOpaqueSort=function(S){$=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(S=!0,N=!0,H=!0){let X=0;if(S){let G=!1;if(T!==null){const ge=T.texture.format;G=ge===so||ge===io||ge===no}if(G){const ge=T.texture.type,be=ge===xn||ge===mn||ge===or||ge===Ln||ge===eo||ge===to,Pe=Je.getClearColor(),Ne=Je.getClearAlpha(),Ve=Pe.r,ke=Pe.g,Be=Pe.b;be?(m[0]=Ve,m[1]=ke,m[2]=Be,m[3]=Ne,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Ve,_[1]=ke,_[2]=Be,_[3]=Ne,I.clearBufferiv(I.COLOR,0,_))}else X|=I.COLOR_BUFFER_BIT}N&&(X|=I.DEPTH_BUFFER_BIT),H&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),xe.dispose(),Te.dispose(),Ce.dispose(),M.dispose(),z.dispose(),se.dispose(),A.dispose(),ae.dispose(),ye.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",ot),ve.removeEventListener("sessionend",Ke),fe&&(fe.dispose(),fe=null),ut.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=Ze.autoReset,N=ee.enabled,H=ee.autoUpdate,X=ee.needsUpdate,G=ee.type;Se(),Ze.autoReset=S,ee.enabled=N,ee.autoUpdate=H,ee.needsUpdate=X,ee.type=G}function oe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function de(S){const N=S.target;N.removeEventListener("dispose",de),Le(N)}function Le(S){we(S),Ce.remove(S)}function we(S){const N=Ce.get(S).programs;N!==void 0&&(N.forEach(function(H){ye.releaseProgram(H)}),S.isShaderMaterial&&ye.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,H,X,G,ge){N===null&&(N=Q);const be=G.isMesh&&G.matrixWorld.determinant()<0,Pe=Ou(S,N,H,X,G);ce.setMaterial(X,be);let Ne=H.index,Ve=1;if(X.wireframe===!0){if(Ne=te.getWireframeAttribute(H),Ne===void 0)return;Ve=2}const ke=H.drawRange,Be=H.attributes.position;let lt=ke.start*Ve,It=(ke.start+ke.count)*Ve;ge!==null&&(lt=Math.max(lt,ge.start*Ve),It=Math.min(It,(ge.start+ge.count)*Ve)),Ne!==null?(lt=Math.max(lt,0),It=Math.min(It,Ne.count)):Be!=null&&(lt=Math.max(lt,0),It=Math.min(It,Be.count));const _t=It-lt;if(_t<0||_t===1/0)return;A.setup(G,X,Pe,H,Ne);let ln,nt=Ie;if(Ne!==null&&(ln=ie.get(Ne),nt=Ee,nt.setIndex(ln)),G.isMesh)X.wireframe===!0?(ce.setLineWidth(X.wireframeLinewidth*he()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(G.isLine){let qe=X.linewidth;qe===void 0&&(qe=1),ce.setLineWidth(qe*he()),G.isLineSegments?nt.setMode(I.LINES):G.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else G.isPoints?nt.setMode(I.POINTS):G.isSprite&&nt.setMode(I.TRIANGLES);if(G.isBatchedMesh)nt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)nt.renderInstances(lt,_t,G.count);else if(H.isInstancedBufferGeometry){const qe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,_r=Math.min(H.instanceCount,qe);nt.renderInstances(lt,_t,_r)}else nt.render(lt,_t)};function Ye(S,N,H){S.transparent===!0&&S.side===Gt&&S.forceSinglePass===!1?(S.side=Pt,S.needsUpdate=!0,cs(S,N,H),S.side=Mn,S.needsUpdate=!0,cs(S,N,H),S.side=Gt):cs(S,N,H)}this.compile=function(S,N,H=null){H===null&&(H=S),p=Te.get(H),p.init(),y.push(p),H.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),S!==H&&S.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(v._useLegacyLights);const X=new Set;return S.traverse(function(G){const ge=G.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){const Pe=ge[be];Ye(Pe,H,G),X.add(Pe)}else Ye(ge,H,G),X.add(ge)}),y.pop(),p=null,X},this.compileAsync=function(S,N,H=null){const X=this.compile(S,N,H);return new Promise(G=>{function ge(){if(X.forEach(function(be){Ce.get(be).currentProgram.isReady()&&X.delete(be)}),X.size===0){G(S);return}setTimeout(ge,10)}Me.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let $e=null;function it(S){$e&&$e(S)}function ot(){ut.stop()}function Ke(){ut.start()}const ut=new cu;ut.setAnimationLoop(it),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(S){$e=S,ve.setAnimationLoop(S),S===null?ut.stop():ut.start()},ve.addEventListener("sessionstart",ot),ve.addEventListener("sessionend",Ke),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(N),N=ve.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,N,T),p=Te.get(S,y.length),p.init(),y.push(p),me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),U.setFromProjectionMatrix(me),le=this.localClippingEnabled,Y=ze.init(this.clippingPlanes,le),g=xe.get(S,d.length),g.init(),d.push(g),tn(S,N,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort($,j),this.info.render.frame++,Y===!0&&ze.beginShadows();const H=p.state.shadowsArray;if(ee.render(H,S,N),Y===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(g,S),p.setupLights(v._useLegacyLights),N.isArrayCamera){const X=N.cameras;for(let G=0,ge=X.length;G<ge;G++){const be=X[G];wo(g,S,be,be.viewport)}}else wo(g,S,N);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(v,S,N),A.resetDefaultState(),F=-1,x=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function tn(S,N,H,X){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||U.intersectsSprite(S)){X&&q.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);const be=se.update(S),Pe=S.material;Pe.visible&&g.push(S,be,Pe,H,q.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||U.intersectsObject(S))){const be=se.update(S),Pe=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),q.copy(S.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),q.copy(be.boundingSphere.center)),q.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(Pe)){const Ne=be.groups;for(let Ve=0,ke=Ne.length;Ve<ke;Ve++){const Be=Ne[Ve],lt=Pe[Be.materialIndex];lt&&lt.visible&&g.push(S,be,lt,H,q.z,Be)}}else Pe.visible&&g.push(S,be,Pe,H,q.z,null)}}const ge=S.children;for(let be=0,Pe=ge.length;be<Pe;be++)tn(ge[be],N,H,X)}function wo(S,N,H,X){const G=S.opaque,ge=S.transmissive,be=S.transparent;p.setupLightsView(H),Y===!0&&ze.setGlobalState(v.clippingPlanes,H),ge.length>0&&Fu(G,ge,N,H),X&&ce.viewport(E.copy(X)),G.length>0&&ls(G,N,H),ge.length>0&&ls(ge,N,H),be.length>0&&ls(be,N,H),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Fu(S,N,H,X){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const ge=Ae.isWebGL2;fe===null&&(fe=new Nn(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Li:xn,minFilter:Ci,samples:ge?4:0})),v.getDrawingBufferSize(Ue),ge?fe.setSize(Ue.x,Ue.y):fe.setSize(ir(Ue.x),ir(Ue.y));const be=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(J),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Pe=v.toneMapping;v.toneMapping=vn,ls(S,H,X),w.updateMultisampleRenderTarget(fe),w.updateRenderTargetMipmap(fe);let Ne=!1;for(let Ve=0,ke=N.length;Ve<ke;Ve++){const Be=N[Ve],lt=Be.object,It=Be.geometry,_t=Be.material,ln=Be.group;if(_t.side===Gt&&lt.layers.test(X.layers)){const nt=_t.side;_t.side=Pt,_t.needsUpdate=!0,To(lt,H,X,It,_t,ln),_t.side=nt,_t.needsUpdate=!0,Ne=!0}}Ne===!0&&(w.updateMultisampleRenderTarget(fe),w.updateRenderTargetMipmap(fe)),v.setRenderTarget(be),v.setClearColor(J,P),v.toneMapping=Pe}function ls(S,N,H){const X=N.isScene===!0?N.overrideMaterial:null;for(let G=0,ge=S.length;G<ge;G++){const be=S[G],Pe=be.object,Ne=be.geometry,Ve=X===null?be.material:X,ke=be.group;Pe.layers.test(H.layers)&&To(Pe,N,H,Ne,Ve,ke)}}function To(S,N,H,X,G,ge){S.onBeforeRender(v,N,H,X,G,ge),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(v,N,H,X,S,ge),G.transparent===!0&&G.side===Gt&&G.forceSinglePass===!1?(G.side=Pt,G.needsUpdate=!0,v.renderBufferDirect(H,N,X,G,S,ge),G.side=Mn,G.needsUpdate=!0,v.renderBufferDirect(H,N,X,G,S,ge),G.side=Gt):v.renderBufferDirect(H,N,X,G,S,ge),S.onAfterRender(v,N,H,X,G,ge)}function cs(S,N,H){N.isScene!==!0&&(N=Q);const X=Ce.get(S),G=p.state.lights,ge=p.state.shadowsArray,be=G.state.version,Pe=ye.getParameters(S,G.state,ge,N,H),Ne=ye.getProgramCacheKey(Pe);let Ve=X.programs;X.environment=S.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(S.isMeshStandardMaterial?z:M).get(S.envMap||X.environment),Ve===void 0&&(S.addEventListener("dispose",de),Ve=new Map,X.programs=Ve);let ke=Ve.get(Ne);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===be)return Ro(S,Pe),ke}else Pe.uniforms=ye.getUniforms(S),S.onBuild(H,Pe,v),S.onBeforeCompile(Pe,v),ke=ye.acquireProgram(Pe,Ne),Ve.set(Ne,ke),X.uniforms=Pe.uniforms;const Be=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=ze.uniform),Ro(S,Pe),X.needsLights=zu(S),X.lightsStateVersion=be,X.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMap.value=G.state.directionalShadowMap,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotShadowMap.value=G.state.spotShadowMap,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMap.value=G.state.pointShadowMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function Ao(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=$s.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Ro(S,N){const H=Ce.get(S);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Ou(S,N,H,X,G){N.isScene!==!0&&(N=Q),w.resetTextureUnits();const ge=N.fog,be=X.isMeshStandardMaterial?N.environment:null,Pe=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:on,Ne=(X.isMeshStandardMaterial?z:M).get(X.envMap||be),Ve=X.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ke=!!H.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Be=!!H.morphAttributes.position,lt=!!H.morphAttributes.normal,It=!!H.morphAttributes.color;let _t=vn;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(_t=v.toneMapping);const ln=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,nt=ln!==void 0?ln.length:0,qe=Ce.get(X),_r=p.state.lights;if(Y===!0&&(le===!0||S!==x)){const Wt=S===x&&X.id===F;ze.setState(X,S,Wt)}let st=!1;X.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==_r.state.version||qe.outputColorSpace!==Pe||G.isBatchedMesh&&qe.batching===!1||!G.isBatchedMesh&&qe.batching===!0||G.isInstancedMesh&&qe.instancing===!1||!G.isInstancedMesh&&qe.instancing===!0||G.isSkinnedMesh&&qe.skinning===!1||!G.isSkinnedMesh&&qe.skinning===!0||G.isInstancedMesh&&qe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&qe.instancingColor===!1&&G.instanceColor!==null||qe.envMap!==Ne||X.fog===!0&&qe.fog!==ge||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ze.numPlanes||qe.numIntersection!==ze.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==ke||qe.morphTargets!==Be||qe.morphNormals!==lt||qe.morphColors!==It||qe.toneMapping!==_t||Ae.isWebGL2===!0&&qe.morphTargetsCount!==nt)&&(st=!0):(st=!0,qe.__version=X.version);let Gn=qe.currentProgram;st===!0&&(Gn=cs(X,N,G));let Co=!1,Fi=!1,gr=!1;const yt=Gn.getUniforms(),Hn=qe.uniforms;if(ce.useProgram(Gn.program)&&(Co=!0,Fi=!0,gr=!0),X.id!==F&&(F=X.id,Fi=!0),Co||x!==S){yt.setValue(I,"projectionMatrix",S.projectionMatrix),yt.setValue(I,"viewMatrix",S.matrixWorldInverse);const Wt=yt.map.cameraPosition;Wt!==void 0&&Wt.setValue(I,q.setFromMatrixPosition(S.matrixWorld)),Ae.logarithmicDepthBuffer&&yt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&yt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Fi=!0,gr=!0)}if(G.isSkinnedMesh){yt.setOptional(I,G,"bindMatrix"),yt.setOptional(I,G,"bindMatrixInverse");const Wt=G.skeleton;Wt&&(Ae.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),yt.setValue(I,"boneTexture",Wt.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(yt.setOptional(I,G,"batchingTexture"),yt.setValue(I,"batchingTexture",G._matricesTexture,w));const vr=H.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0&&Ae.isWebGL2===!0)&&He.update(G,H,Gn),(Fi||qe.receiveShadow!==G.receiveShadow)&&(qe.receiveShadow=G.receiveShadow,yt.setValue(I,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Hn.envMap.value=Ne,Hn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Fi&&(yt.setValue(I,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&ku(Hn,gr),ge&&X.fog===!0&&pe.refreshFogUniforms(Hn,ge),pe.refreshMaterialUniforms(Hn,X,K,W,fe),$s.upload(I,Ao(qe),Hn,w)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&($s.upload(I,Ao(qe),Hn,w),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&yt.setValue(I,"center",G.center),yt.setValue(I,"modelViewMatrix",G.modelViewMatrix),yt.setValue(I,"normalMatrix",G.normalMatrix),yt.setValue(I,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Wt=X.uniformsGroups;for(let xr=0,Bu=Wt.length;xr<Bu;xr++)if(Ae.isWebGL2){const Lo=Wt[xr];ae.update(Lo,Gn),ae.bind(Lo,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function ku(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function zu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,N,H){Ce.get(S.texture).__webglTexture=N,Ce.get(S.depthTexture).__webglTexture=H;const X=Ce.get(S);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=H===void 0,X.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){const H=Ce.get(S);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,H=0){T=S,C=N,R=H;let X=!0,G=null,ge=!1,be=!1;if(S){const Ne=Ce.get(S);Ne.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(I.FRAMEBUFFER,null),X=!1):Ne.__webglFramebuffer===void 0?w.setupRenderTarget(S):Ne.__hasExternalTextures&&w.rebindTextures(S,Ce.get(S.texture).__webglTexture,Ce.get(S.depthTexture).__webglTexture);const Ve=S.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(be=!0);const ke=Ce.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[N])?G=ke[N][H]:G=ke[N],ge=!0):Ae.isWebGL2&&S.samples>0&&w.useMultisampledRTT(S)===!1?G=Ce.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?G=ke[H]:G=ke,E.copy(S.viewport),k.copy(S.scissor),B=S.scissorTest}else E.copy(Z).multiplyScalar(K).floor(),k.copy(re).multiplyScalar(K).floor(),B=V;if(ce.bindFramebuffer(I.FRAMEBUFFER,G)&&Ae.drawBuffers&&X&&ce.drawBuffers(S,G),ce.viewport(E),ce.scissor(k),ce.setScissorTest(B),ge){const Ne=Ce.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ne.__webglTexture,H)}else if(be){const Ne=Ce.get(S.texture),Ve=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ne.__webglTexture,H||0,Ve)}F=-1},this.readRenderTargetPixels=function(S,N,H,X,G,ge,be){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){ce.bindFramebuffer(I.FRAMEBUFFER,Pe);try{const Ne=S.texture,Ve=Ne.format,ke=Ne.type;if(Ve!==Yt&&_e.convert(Ve)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ke===Li&&(Me.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&Me.has("EXT_color_buffer_float"));if(ke!==xn&&_e.convert(ke)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===_n&&(Ae.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-X&&H>=0&&H<=S.height-G&&I.readPixels(N,H,X,G,_e.convert(Ve),_e.convert(ke),ge)}finally{const Ne=T!==null?Ce.get(T).__webglFramebuffer:null;ce.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(S,N,H=0){const X=Math.pow(2,-H),G=Math.floor(N.image.width*X),ge=Math.floor(N.image.height*X);w.setTexture2D(N,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,S.x,S.y,G,ge),ce.unbindTexture()},this.copyTextureToTexture=function(S,N,H,X=0){const G=N.image.width,ge=N.image.height,be=_e.convert(H.format),Pe=_e.convert(H.type);w.setTexture2D(H,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment),N.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,X,S.x,S.y,G,ge,be,Pe,N.image.data):N.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,X,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,be,N.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,X,S.x,S.y,be,Pe,N.image),X===0&&H.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ce.unbindTexture()},this.copyTextureToTexture3D=function(S,N,H,X,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=S.max.x-S.min.x+1,be=S.max.y-S.min.y+1,Pe=S.max.z-S.min.z+1,Ne=_e.convert(X.format),Ve=_e.convert(X.type);let ke;if(X.isData3DTexture)w.setTexture3D(X,0),ke=I.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)w.setTexture2DArray(X,0),ke=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const Be=I.getParameter(I.UNPACK_ROW_LENGTH),lt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),It=I.getParameter(I.UNPACK_SKIP_PIXELS),_t=I.getParameter(I.UNPACK_SKIP_ROWS),ln=I.getParameter(I.UNPACK_SKIP_IMAGES),nt=H.isCompressedTexture?H.mipmaps[G]:H.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,nt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,S.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,S.min.z),H.isDataTexture||H.isData3DTexture?I.texSubImage3D(ke,G,N.x,N.y,N.z,ge,be,Pe,Ne,Ve,nt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(ke,G,N.x,N.y,N.z,ge,be,Pe,Ne,nt.data)):I.texSubImage3D(ke,G,N.x,N.y,N.z,ge,be,Pe,Ne,Ve,nt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,It),I.pixelStorei(I.UNPACK_SKIP_ROWS,_t),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ln),G===0&&X.generateMipmaps&&I.generateMipmap(ke),ce.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),ce.unbindTexture()},this.resetState=function(){C=0,R=0,T=null,ce.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===lr?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===ns?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ct?Dn:ao}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Dn?ct:on}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xu extends Mo{}xu.prototype.isWebGL1Renderer=!0;class dr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=n}clone(){return new dr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mu extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class yo extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yl=new D,Sl=new D,bl=new at,Xr=new ss,Ns=new is;class yu extends dt{constructor(e=new Tt,t=new yo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)yl.fromBufferAttribute(t,s-1),Sl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=yl.distanceTo(Sl);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(s),Ns.radius+=r,e.ray.intersectsSphere(Ns)===!1)return;bl.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(bl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,f=new D,h=new D,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const d=Math.max(0,o.start),y=Math.min(_.count,o.start+o.count);for(let v=d,b=y-1;v<b;v+=m){const C=_.getX(v),R=_.getX(v+1);if(c.fromBufferAttribute(p,C),u.fromBufferAttribute(p,R),Xr.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(h);F<e.near||F>e.far||t.push({distance:F,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=d,b=y-1;v<b;v+=m){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Xr.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const El=new D,wl=new D;class Su extends yu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)El.fromBufferAttribute(t,s),wl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+El.distanceTo(wl);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class So extends Dt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pr extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],m=[];let _=0;const g=[],p=n/2;let d=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(m,2));function y(){const b=new D,C=new D;let R=0;const T=(t-e)/n;for(let F=0;F<=r;F++){const x=[],E=F/r,k=E*(t-e)+e;for(let B=0;B<=s;B++){const J=B/s,P=J*l+a,O=Math.sin(P),W=Math.cos(P);C.x=k*O,C.y=-E*n+p,C.z=k*W,f.push(C.x,C.y,C.z),b.set(O,T,W).normalize(),h.push(b.x,b.y,b.z),m.push(J,1-E),x.push(_++)}g.push(x)}for(let F=0;F<s;F++)for(let x=0;x<r;x++){const E=g[x][F],k=g[x+1][F],B=g[x+1][F+1],J=g[x][F+1];u.push(E,k,J),u.push(k,B,J),R+=6}c.addGroup(d,R,0),d+=R}function v(b){const C=_,R=new De,T=new D;let F=0;const x=b===!0?e:t,E=b===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,p*E,0),h.push(0,E,0),m.push(.5,.5),_++;const k=_;for(let B=0;B<=s;B++){const P=B/s*l+a,O=Math.cos(P),W=Math.sin(P);T.x=x*W,T.y=p*E,T.z=x*O,f.push(T.x,T.y,T.z),h.push(0,E,0),R.x=O*.5+.5,R.y=W*.5*E+.5,m.push(R.x,R.y),_++}for(let B=0;B<s;B++){const J=C+B,P=k+B;b===!0?u.push(P,P+1,J):u.push(P+1,P,J),F+=3}c.addGroup(d,F,b===!0?1:2),d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Fs=new D,Os=new D,qr=new D,ks=new zt;class bu extends Tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ti*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},m=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:p,c:d}=ks;if(g.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),ks.getNormal(qr),f[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,f[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let y=0;y<3;y++){const v=(y+1)%3,b=f[y],C=f[v],R=ks[u[y]],T=ks[u[v]],F=`${b}_${C}`,x=`${C}_${b}`;x in h&&h[x]?(qr.dot(h[x].normal)<=r&&(m.push(R.x,R.y,R.z),m.push(T.x,T.y,T.z)),h[x]=null):F in h||(h[F]={index0:c[y],index1:c[v],normal:qr.clone()})}}for(const _ in h)if(h[_]){const{index0:g,index1:p}=h[_];Fs.fromBufferAttribute(a,g),Os.fromBufferAttribute(a,p),m.push(Fs.x,Fs.y,Fs.z),m.push(Os.x,Os.y,Os.z)}this.setAttribute("position",new ht(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class mr extends Tt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let f=e;const h=(t-e)/s,m=new D,_=new De;for(let g=0;g<=s;g++){for(let p=0;p<=n;p++){const d=r+p/n*o;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}f+=h}for(let g=0;g<s;g++){const p=g*(n+1);for(let d=0;d<n;d++){const y=d+p,v=y,b=y+n+1,C=y+n+2,R=y+1;a.push(v,b,R),a.push(b,C,R)}}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vt extends Bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oo,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class os extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Eu extends os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Yr=new at,Tl=new D,Al=new D;class wu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Tl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tl),Al.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Al),t.updateMatrixWorld(),Yr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rl=new at,Hi=new D,$r=new D;class p_ extends wu{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hi),$r.copy(n.position),$r.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($r),n.updateMatrixWorld(),s.makeTranslation(-Hi.x,-Hi.y,-Hi.z),Rl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl)}}class Tu extends os{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new p_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class m_ extends wu{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ha extends os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new m_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Au extends os{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ru{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Cl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Cl(){return(typeof performance>"u"?Date:performance).now()}class Cu{constructor(e,t,n=0,s=1/0){this.ray=new ss(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Va(e,this,n,t),n.sort(Ll),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Va(e[s],this,n,t);return n.sort(Ll),n}}function Ll(i,e){return i.distance-e.distance}function Va(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)Va(s[r],e,t,!0)}}class Wa{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rr);const xt=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Dc,AddEquation:Rn,AddOperation:Rc,AdditiveBlending:ra,AgXToneMapping:Ic,AlphaFormat:kc,AlwaysCompare:Qc,AlwaysDepth:yc,AlwaysStencilFunc:Fa,AmbientLight:Au,ArrayCamera:vu,BackSide:Pt,BasicDepthPacking:Wc,Box3:Ui,BoxGeometry:Ii,BufferAttribute:jt,BufferGeometry:Tt,ByteType:Fc,Camera:_o,CanvasTexture:So,CineonToneMapping:Pc,ClampToEdgeWrapping:qt,Clock:Ru,Color:Oe,ColorManagement:Qe,ConstantAlphaFactor:vc,ConstantColorFactor:_c,CubeCamera:ou,CubeReflectionMapping:ni,CubeRefractionMapping:ii,CubeTexture:go,CubeUVReflectionMapping:ts,CullFaceBack:sa,CullFaceFront:ic,CullFaceNone:nc,CustomBlending:sc,CustomToneMapping:Uc,CylinderGeometry:pr,Data3DTexture:iu,DataArrayTexture:ho,DepthFormat:Pn,DepthStencilFormat:si,DepthTexture:xo,DirectionalLight:Ha,DisplayP3ColorSpace:lr,DoubleSide:Gt,DstAlphaFactor:fc,DstColorFactor:dc,EdgesGeometry:bu,EqualCompare:jc,EqualDepth:bc,EquirectangularReflectionMapping:Qs,EquirectangularRefractionMapping:er,Euler:rs,EventDispatcher:zn,Float32BufferAttribute:ht,FloatType:_n,Fog:dr,FrontSide:Mn,Frustum:ur,GLSL3:ka,GreaterCompare:Zc,GreaterDepth:wc,GreaterEqualCompare:Jc,GreaterEqualDepth:Ec,Group:Ut,HalfFloatType:Li,HemisphereLight:Eu,ImageUtils:uo,IntType:Qa,KeepStencilOp:Zn,Layers:cr,LessCompare:$c,LessDepth:Sc,LessEqualCompare:lo,LessEqualDepth:$i,Light:os,Line:yu,LineBasicMaterial:yo,LineSegments:Su,LinearDisplayP3ColorSpace:ns,LinearEncoding:ao,LinearFilter:kt,LinearMipmapLinearFilter:Ci,LinearMipmapNearestFilter:Nc,LinearSRGBColorSpace:on,LinearToneMapping:Cc,LinearTransfer:ji,LuminanceAlphaFormat:Bc,LuminanceFormat:zc,MOUSE:sn,Material:Bn,MathUtils:In,Matrix3:We,Matrix4:at,MaxEquation:ca,Mesh:je,MeshBasicMaterial:On,MeshDepthMaterial:mu,MeshDistanceMaterial:_u,MeshLambertMaterial:vt,MinEquation:la,MirroredRepeatWrapping:tr,MixOperation:Ac,MultiplyBlending:oa,MultiplyOperation:ar,NearestFilter:Et,NearestMipmapLinearFilter:Hs,NearestMipmapNearestFilter:ua,NeverCompare:Yc,NeverDepth:Mc,NoBlending:gn,NoColorSpace:Ht,NoToneMapping:vn,NormalBlending:ei,NotEqualCompare:Kc,NotEqualDepth:Tc,Object3D:dt,ObjectSpaceNormalMap:qc,OneFactor:lc,OneMinusConstantAlphaFactor:xc,OneMinusConstantColorFactor:gc,OneMinusDstAlphaFactor:hc,OneMinusDstColorFactor:pc,OneMinusSrcAlphaFactor:Js,OneMinusSrcColorFactor:uc,OrthographicCamera:fr,P3Primaries:Ki,PCFShadowMap:Za,PCFSoftShadowMap:Ka,PMREMGenerator:Ba,PerspectiveCamera:Bt,Plane:rn,PlaneGeometry:as,PointLight:Tu,Quaternion:Fn,RED_GREEN_RGTC2_Format:Ia,RED_RGTC1_Format:Vc,REVISION:rr,RGBADepthPacking:Xc,RGBAFormat:Yt,RGBAIntegerFormat:so,RGBA_ASTC_10x10_Format:Ra,RGBA_ASTC_10x5_Format:wa,RGBA_ASTC_10x6_Format:Ta,RGBA_ASTC_10x8_Format:Aa,RGBA_ASTC_12x10_Format:Ca,RGBA_ASTC_12x12_Format:La,RGBA_ASTC_4x4_Format:ga,RGBA_ASTC_5x4_Format:va,RGBA_ASTC_5x5_Format:xa,RGBA_ASTC_6x5_Format:Ma,RGBA_ASTC_6x6_Format:ya,RGBA_ASTC_8x5_Format:Sa,RGBA_ASTC_8x6_Format:ba,RGBA_ASTC_8x8_Format:Ea,RGBA_BPTC_Format:Ys,RGBA_ETC2_EAC_Format:_a,RGBA_PVRTC_2BPPV1_Format:pa,RGBA_PVRTC_4BPPV1_Format:da,RGBA_S3TC_DXT1_Format:Ws,RGBA_S3TC_DXT3_Format:Xs,RGBA_S3TC_DXT5_Format:qs,RGB_BPTC_SIGNED_Format:Pa,RGB_BPTC_UNSIGNED_Format:Da,RGB_ETC1_Format:ro,RGB_ETC2_Format:ma,RGB_PVRTC_2BPPV1_Format:ha,RGB_PVRTC_4BPPV1_Format:fa,RGB_S3TC_DXT1_Format:Vs,RGFormat:Hc,RGIntegerFormat:io,Ray:ss,Raycaster:Cu,Rec709Primaries:Zi,RedFormat:Gc,RedIntegerFormat:no,ReinhardToneMapping:Lc,RenderTarget:nu,RepeatWrapping:Un,ReverseSubtractEquation:ac,RingGeometry:mr,SIGNED_RED_GREEN_RGTC2_Format:Na,SIGNED_RED_RGTC1_Format:Ua,SRGBColorSpace:ct,SRGBTransfer:et,Scene:Mu,ShaderChunk:Ge,ShaderLib:en,ShaderMaterial:kn,ShortType:Oc,Source:fo,Sphere:is,Spherical:Wa,SrcAlphaFactor:Ks,SrcAlphaSaturateFactor:mc,SrcColorFactor:cc,StaticDrawUsage:Oa,SubtractEquation:rc,SubtractiveBlending:aa,TOUCH:jn,TangentSpaceNormalMap:oo,Texture:Dt,Triangle:zt,UVMapping:Ja,Uint16BufferAttribute:po,Uint32BufferAttribute:mo,UniformsLib:ue,UniformsUtils:au,UnsignedByteType:xn,UnsignedInt248Type:Ln,UnsignedIntType:mn,UnsignedShort4444Type:eo,UnsignedShort5551Type:to,UnsignedShortType:or,VSMShadowMap:nn,Vector2:De,Vector3:D,Vector4:tt,WebGL1Renderer:xu,WebGLCoordinateSystem:an,WebGLCubeRenderTarget:lu,WebGLRenderTarget:Nn,WebGLRenderer:Mo,WebGLUtils:gu,WebGPUCoordinateSystem:Ji,ZeroFactor:oc,_SRGBAFormat:nr,createCanvasElement:tu,sRGBEncoding:Dn},Symbol.toStringTag,{value:"Module"})),Pl={type:"change"},jr={type:"start"},Dl={type:"end"},zs=new ss,Ul=new rn,__=Math.cos(70*In.DEG2RAD);class g_ extends zn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:sn.ROTATE,MIDDLE:sn.DOLLY,RIGHT:sn.PAN},this.touches={ONE:jn.ROTATE,TWO:jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Te),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Te),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Pl),n.update(),r=s.NONE},this.update=function(){const A=new D,ae=new Fn().setFromUnitVectors(e.up,new D(0,1,0)),Se=ae.clone().invert(),ve=new D,ne=new Fn,L=new D,oe=2*Math.PI;return function(Le=null){const we=n.object.position;A.copy(we).sub(n.target),A.applyQuaternion(ae),a.setFromVector3(A),n.autoRotate&&r===s.NONE&&B(E(Le)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ye=n.minAzimuthAngle,$e=n.maxAzimuthAngle;isFinite(Ye)&&isFinite($e)&&(Ye<-Math.PI?Ye+=oe:Ye>Math.PI&&(Ye-=oe),$e<-Math.PI?$e+=oe:$e>Math.PI&&($e-=oe),Ye<=$e?a.theta=Math.max(Ye,Math.min($e,a.theta)):a.theta=a.theta>(Ye+$e)/2?Math.max(Ye,a.theta):Math.min($e,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=Z(a.radius):a.radius=Z(a.radius*c),A.setFromSpherical(a),A.applyQuaternion(Se),we.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let it=!1;if(n.zoomToCursor&&R){let ot=null;if(n.object.isPerspectiveCamera){const Ke=A.length();ot=Z(Ke*c);const ut=Ke-ot;n.object.position.addScaledVector(b,ut),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ke=new D(C.x,C.y,0);Ke.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),it=!0;const ut=new D(C.x,C.y,0);ut.unproject(n.object),n.object.position.sub(ut).add(Ke),n.object.updateMatrixWorld(),ot=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ot!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ot).add(n.object.position):(zs.origin.copy(n.object.position),zs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(zs.direction))<__?e.lookAt(n.target):(Ul.setFromNormalAndCoplanarPoint(n.object.up,n.target),zs.intersectPlane(Ul,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),it=!0);return c=1,R=!1,it||ve.distanceToSquared(n.object.position)>o||8*(1-ne.dot(n.object.quaternion))>o||L.distanceToSquared(n.target)>0?(n.dispatchEvent(Pl),ve.copy(n.object.position),ne.copy(n.object.quaternion),L.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Je),n.domElement.removeEventListener("pointerdown",w),n.domElement.removeEventListener("pointercancel",z),n.domElement.removeEventListener("wheel",se),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",z),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Te),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Wa,l=new Wa;let c=1;const u=new D,f=new De,h=new De,m=new De,_=new De,g=new De,p=new De,d=new De,y=new De,v=new De,b=new D,C=new De;let R=!1;const T=[],F={};let x=!1;function E(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function k(A){const ae=Math.abs(A*.01);return Math.pow(.95,n.zoomSpeed*ae)}function B(A){l.theta-=A}function J(A){l.phi-=A}const P=function(){const A=new D;return function(Se,ve){A.setFromMatrixColumn(ve,0),A.multiplyScalar(-Se),u.add(A)}}(),O=function(){const A=new D;return function(Se,ve){n.screenSpacePanning===!0?A.setFromMatrixColumn(ve,1):(A.setFromMatrixColumn(ve,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(Se),u.add(A)}}(),W=function(){const A=new D;return function(Se,ve){const ne=n.domElement;if(n.object.isPerspectiveCamera){const L=n.object.position;A.copy(L).sub(n.target);let oe=A.length();oe*=Math.tan(n.object.fov/2*Math.PI/180),P(2*Se*oe/ne.clientHeight,n.object.matrix),O(2*ve*oe/ne.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(Se*(n.object.right-n.object.left)/n.object.zoom/ne.clientWidth,n.object.matrix),O(ve*(n.object.top-n.object.bottom)/n.object.zoom/ne.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function K(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(A,ae){if(!n.zoomToCursor)return;R=!0;const Se=n.domElement.getBoundingClientRect(),ve=A-Se.left,ne=ae-Se.top,L=Se.width,oe=Se.height;C.x=ve/L*2-1,C.y=-(ne/oe)*2+1,b.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function Z(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function re(A){f.set(A.clientX,A.clientY)}function V(A){j(A.clientX,A.clientX),d.set(A.clientX,A.clientY)}function U(A){_.set(A.clientX,A.clientY)}function Y(A){h.set(A.clientX,A.clientY),m.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ae=n.domElement;B(2*Math.PI*m.x/ae.clientHeight),J(2*Math.PI*m.y/ae.clientHeight),f.copy(h),n.update()}function le(A){y.set(A.clientX,A.clientY),v.subVectors(y,d),v.y>0?K(k(v.y)):v.y<0&&$(k(v.y)),d.copy(y),n.update()}function fe(A){g.set(A.clientX,A.clientY),p.subVectors(g,_).multiplyScalar(n.panSpeed),W(p.x,p.y),_.copy(g),n.update()}function me(A){j(A.clientX,A.clientY),A.deltaY<0?$(k(A.deltaY)):A.deltaY>0&&K(k(A.deltaY)),n.update()}function Ue(A){let ae=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),ae=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),ae=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),ae=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),ae=!0;break}ae&&(A.preventDefault(),n.update())}function q(A){if(T.length===1)f.set(A.pageX,A.pageY);else{const ae=_e(A),Se=.5*(A.pageX+ae.x),ve=.5*(A.pageY+ae.y);f.set(Se,ve)}}function Q(A){if(T.length===1)_.set(A.pageX,A.pageY);else{const ae=_e(A),Se=.5*(A.pageX+ae.x),ve=.5*(A.pageY+ae.y);_.set(Se,ve)}}function he(A){const ae=_e(A),Se=A.pageX-ae.x,ve=A.pageY-ae.y,ne=Math.sqrt(Se*Se+ve*ve);d.set(0,ne)}function I(A){n.enableZoom&&he(A),n.enablePan&&Q(A)}function Xe(A){n.enableZoom&&he(A),n.enableRotate&&q(A)}function Me(A){if(T.length==1)h.set(A.pageX,A.pageY);else{const Se=_e(A),ve=.5*(A.pageX+Se.x),ne=.5*(A.pageY+Se.y);h.set(ve,ne)}m.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ae=n.domElement;B(2*Math.PI*m.x/ae.clientHeight),J(2*Math.PI*m.y/ae.clientHeight),f.copy(h)}function Ae(A){if(T.length===1)g.set(A.pageX,A.pageY);else{const ae=_e(A),Se=.5*(A.pageX+ae.x),ve=.5*(A.pageY+ae.y);g.set(Se,ve)}p.subVectors(g,_).multiplyScalar(n.panSpeed),W(p.x,p.y),_.copy(g)}function ce(A){const ae=_e(A),Se=A.pageX-ae.x,ve=A.pageY-ae.y,ne=Math.sqrt(Se*Se+ve*ve);y.set(0,ne),v.set(0,Math.pow(y.y/d.y,n.zoomSpeed)),K(v.y),d.copy(y);const L=(A.pageX+ae.x)*.5,oe=(A.pageY+ae.y)*.5;j(L,oe)}function Ze(A){n.enableZoom&&ce(A),n.enablePan&&Ae(A)}function Ce(A){n.enableZoom&&ce(A),n.enableRotate&&Me(A)}function w(A){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",z)),He(A),A.pointerType==="touch"?ze(A):ie(A))}function M(A){n.enabled!==!1&&(A.pointerType==="touch"?ee(A):te(A))}function z(A){Ie(A),T.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",z)),n.dispatchEvent(Dl),r=s.NONE}function ie(A){let ae;switch(A.button){case 0:ae=n.mouseButtons.LEFT;break;case 1:ae=n.mouseButtons.MIDDLE;break;case 2:ae=n.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case sn.DOLLY:if(n.enableZoom===!1)return;V(A),r=s.DOLLY;break;case sn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;U(A),r=s.PAN}else{if(n.enableRotate===!1)return;re(A),r=s.ROTATE}break;case sn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;re(A),r=s.ROTATE}else{if(n.enablePan===!1)return;U(A),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(jr)}function te(A){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Y(A);break;case s.DOLLY:if(n.enableZoom===!1)return;le(A);break;case s.PAN:if(n.enablePan===!1)return;fe(A);break}}function se(A){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(A.preventDefault(),n.dispatchEvent(jr),me(ye(A)),n.dispatchEvent(Dl))}function ye(A){const ae=A.deltaMode,Se={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(ae){case 1:Se.deltaY*=16;break;case 2:Se.deltaY*=100;break}return A.ctrlKey&&!x&&(Se.deltaY*=10),Se}function pe(A){A.key==="Control"&&(x=!0,document.addEventListener("keyup",xe,{passive:!0,capture:!0}))}function xe(A){A.key==="Control"&&(x=!1,document.removeEventListener("keyup",xe,{passive:!0,capture:!0}))}function Te(A){n.enabled===!1||n.enablePan===!1||Ue(A)}function ze(A){switch(Ee(A),T.length){case 1:switch(n.touches.ONE){case jn.ROTATE:if(n.enableRotate===!1)return;q(A),r=s.TOUCH_ROTATE;break;case jn.PAN:if(n.enablePan===!1)return;Q(A),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case jn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(A),r=s.TOUCH_DOLLY_PAN;break;case jn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Xe(A),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(jr)}function ee(A){switch(Ee(A),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(A),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ae(A),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ze(A),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ce(A),n.update();break;default:r=s.NONE}}function Je(A){n.enabled!==!1&&A.preventDefault()}function He(A){T.push(A.pointerId)}function Ie(A){delete F[A.pointerId];for(let ae=0;ae<T.length;ae++)if(T[ae]==A.pointerId){T.splice(ae,1);return}}function Ee(A){let ae=F[A.pointerId];ae===void 0&&(ae=new De,F[A.pointerId]=ae),ae.set(A.pageX,A.pageY)}function _e(A){const ae=A.pointerId===T[0]?T[1]:T[0];return F[ae]}n.domElement.addEventListener("contextmenu",Je),n.domElement.addEventListener("pointerdown",w),n.domElement.addEventListener("pointercancel",z),n.domElement.addEventListener("wheel",se,{passive:!1}),document.addEventListener("keydown",pe,{passive:!0,capture:!0}),this.update()}}const v_=[[1,0],[-1,0],[0,1],[0,-1]];function Zr(i,e,t){const n=t.width,s=t.height;if(i.x===e.x&&i.z===e.z)return[];if(!Il(t,i.x,i.z)||!Il(t,e.x,e.z))return null;const r=i.z*n+i.x,o=e.z*n+e.x;if(t.blocked[r]||t.blocked[o])return null;const a=n*s,l=new Int32Array(a);l.fill(-1);const c=new Int32Array(a);c.fill(-1),l[r]=0;const u=[],f=[],h=(d,y)=>{u.push(d),f.push(y);let v=u.length-1;for(;v>0;){const b=v-1>>1;if(f[b]<=f[v])break;Nl(u,f,v,b),v=b}},m=()=>{const d=u[0],y=u.pop(),v=f.pop();if(u.length>0&&y!==void 0&&v!==void 0){u[0]=y,f[0]=v;let b=0;for(;;){const C=b*2+1,R=C+1;let T=b;if(C<u.length&&f[C]<f[T]&&(T=C),R<u.length&&f[R]<f[T]&&(T=R),T===b)break;Nl(u,f,b,T),b=T}}return d},_=new Uint8Array(a);for(h(r,Math.abs(e.x-i.x)+Math.abs(e.z-i.z));u.length>0;){const d=m();if(_[d])continue;if(_[d]=1,d===o)break;const y=d%n,v=d/n|0,b=l[d];for(const[C,R]of v_){const T=y+C,F=v+R;if(T<0||F<0||T>=n||F>=s)continue;const x=F*n+T;if(t.blocked[x]||_[x])continue;const E=b+1;l[x]!==-1&&E>=l[x]||(l[x]=E,c[x]=d,h(x,E+Math.abs(e.x-T)+Math.abs(e.z-F)))}}if(l[o]<0)return null;const g=[];let p=o;for(;p!==r;)if(g.push({x:p%n,z:p/n|0}),p=c[p],p<0)return null;return g.reverse(),g}function Il(i,e,t){return e>=0&&t>=0&&e<i.width&&t<i.height}function Nl(i,e,t,n){const s=i[t];i[t]=i[n],i[n]=s;const r=e[t];e[t]=e[n],e[n]=r}function x_(i,e,t){const{count:n,x:s,z:r,yaw:o,phase:a,wait:l,moving:c,paths:u,activity:f}=i;for(let h=0;h<n;h++){if(f[h]==="work"){c[h]=0;continue}if(f[h]!=="wander")continue;if(l[h]>0){l[h]-=t,c[h]=0;continue}let m=u[h];if(m.length===0){const T={x:Math.floor(s[h]),z:Math.floor(r[h])},F=y_(i,T,e);if(m=F?S_(T,F,e)??[]:[],u[h]=m,m.length===0){l[h]=.8,c[h]=0;continue}}const _=m[0],g=_.x+.5,p=_.z+.5;if(M_(h,s,r,n,g,p)){l[h]=.2,c[h]=0;continue}const d=g-s[h],y=p-r[h],v=Math.hypot(d,y);if(v<.05){s[h]=g,r[h]=p,m.shift(),c[h]=0,m.length===0&&(l[h]=.7+i.random()*2.2);continue}const C=Math.min(v,1.45*t);s[h]+=d/v*C,r[h]+=y/v*C,a[h]+=t*9;const R=Math.atan2(d,y);o[h]=b_(o[h],R,1-Math.exp(-10*t)),c[h]=1}}function M_(i,e,t,n,s,r){for(let o=0;o<n;o++){if(o===i)continue;const a=Math.hypot(e[o]-s,t[o]-r)<.42,l=Math.hypot(e[o]-e[i],t[o]-t[i])<1;if(a&&l)return!0}return!1}function y_(i,e,t){let n=null;for(let s=0;s<40;s++){const r=Math.floor(i.random()*t.width),o=Math.floor(i.random()*t.height);if(Lu(t,r,o))continue;if(Math.abs(r-e.x)+Math.abs(o-e.z)>=4)return{x:r,z:o};n={x:r,z:o}}return n}function S_(i,e,t){const n=(f,h)=>h*t.width+f,s=n(i.x,i.z),r=n(e.x,e.z);if(s===r)return[];const o=new Map;o.set(s,null);const a=[i],l=[[1,0],[-1,0],[0,1],[0,-1]];for(;a.length>0;){const f=a.shift();if(!f||f.x===e.x&&f.z===e.z)break;for(const[h,m]of l){const _=f.x+h,g=f.z+m;if(_<0||g<0||_>=t.width||g>=t.height)continue;const p=n(_,g);o.has(p)||Lu(t,_,g)||(o.set(p,n(f.x,f.z)),a.push({x:_,z:g}))}}if(!o.has(r))return null;const c=[];let u=r;for(;u!==null&&u!==s;)c.push({x:u%t.width,z:Math.floor(u/t.width)}),u=o.get(u)??null;return c.reverse(),c}function Lu(i,e,t){return i.blocked[t*i.width+e]===1}function b_(i,e,t){const n=Math.atan2(Math.sin(e-i),Math.cos(e-i));return i+n*t}const $n=64,E_=1.75,w_=96;class T_{constructor(e){Re(this,"backend","typescript");Re(this,"tick",0);Re(this,"time",0);Re(this,"nav");Re(this,"ids");Re(this,"keys");Re(this,"names");Re(this,"needs");Re(this,"skills");Re(this,"purseCents");Re(this,"contractId");Re(this,"activity");Re(this,"wait");Re(this,"paths");Re(this,"contracts",[]);Re(this,"events",[]);Re(this,"minds");Re(this,"research",{unlocked:[],active:null,progress:0});Re(this,"orders",[]);Re(this,"playerOrders");Re(this,"haulWalking");Re(this,"haulItems");Re(this,"originalBlocked");Re(this,"fixedBlocked");Re(this,"rock");Re(this,"dug",new Set);Re(this,"digRevision",0);Re(this,"columns");Re(this,"accumulator",0);Re(this,"seed");Re(this,"rngState");const t=e.spawns;if(t.length>$n)throw new Error(`This build simulates at most ${$n} colonists.`);this.nav=e.nav,this.seed=e.seed??27164,this.rngState=this.seed>>>0;const n=t.length;this.ids=t.map(r=>r.id),this.keys=t.map(r=>r.key),this.names=t.map(r=>r.name),this.needs=t.map((r,o)=>r.needs??{food:Tn(.92-o*.03),rest:Tn(.88-o*.02),recreation:Tn(.9-o*.04)}),this.skills=t.map(r=>r.skills??L_(r.id)),this.minds=t.map((r,o)=>r.mind??R_(o)),this.purseCents=new Int32Array($n),this.contractId=t.map(()=>null),this.activity=t.map(()=>"wander"),this.wait=new Float32Array($n),this.paths=t.map(()=>[]),this.playerOrders=t.map(()=>null),this.haulWalking=new Uint8Array($n),this.originalBlocked=new Uint8Array(e.nav.blocked),this.fixedBlocked=new Uint8Array(e.nav.blocked),this.rock=new Uint8Array(e.nav.width*e.nav.height);for(const r of e.rock??[]){const o=Math.floor(r.x),a=Math.floor(r.z);o<0||a<0||o>=e.nav.width||a>=e.nav.height||(this.rock[a*e.nav.width+o]=1)}this.haulItems=(e.items??[]).map(r=>({id:r.id,x:r.x,z:r.z,w:Math.max(1,r.w),d:Math.max(1,r.d),blocks:r.blocks,carrierId:0})),this.paintItems(),t.forEach((r,o)=>{this.purseCents[o]=r.purseCents??8e3+o*1500,this.wait[o]=o*.35});const s=()=>new Float32Array($n);this.columns={generation:0,count:n,prevX:s(),prevZ:s(),prevYaw:s(),prevPhase:s(),x:s(),z:s(),yaw:s(),phase:s(),moving:new Uint8Array($n)},t.forEach((r,o)=>{this.columns.x[o]=r.x,this.columns.z[o]=r.z,this.columns.yaw[o]=r.yaw,this.columns.phase[o]=o,this.copyCurrentToPrevious(o)})}advance(e){this.accumulator+=Math.min(Math.max(0,e),.25);let t=0;for(;this.accumulator>=Oi&&t<Ql;)this.snapshot(),this.step(Oi),this.tick+=1,this.time+=Oi,this.accumulator-=Oi,t+=1}alpha(){return this.accumulator/Oi}colonists(){return this.columns}roster(){return{ids:this.ids,keys:this.keys,names:this.names}}totalGoldCents(){let e=0;for(let t=0;t<this.columns.count;t++)e+=this.purseCents[t];return e}pollEvents(){return this.events.splice(0,this.events.length)}save(){const e=[];for(let t=0;t<this.columns.count;t++)e.push({id:this.ids[t],key:this.keys[t],name:this.names[t],x:this.columns.x[t],z:this.columns.z[t],yaw:this.columns.yaw[t],phase:this.columns.phase[t],wait:this.wait[t],needs:{...this.needs[t]},skills:{...this.skills[t]},purseCents:this.purseCents[t],contractId:this.contractId[t],activity:this.activity[t],mind:Ol(this.minds[t])});return{version:1,seed:this.seed,rngState:this.rngState,tick:this.tick,time:this.time,colonists:e,contracts:this.contracts.map(t=>({...t})),research:{...this.research,unlocked:[...this.research.unlocked]},orders:this.orders.map(t=>({...t})),dug:this.dugCells()}}load(e){if(e.version!==1)throw new Error(`Unknown save version ${e.version}`);if(e.colonists.length!==this.columns.count)throw new Error("This build cannot load a valley with a different number of colonists.");this.seed=e.seed,this.rngState=e.rngState>>>0,this.tick=e.tick,this.time=e.time,this.accumulator=0,this.contracts.splice(0,this.contracts.length,...e.contracts.map(t=>({...t}))),this.research={...e.research,unlocked:[...e.research.unlocked]},this.orders=e.orders.map(t=>({...t}));for(let t=0;t<e.colonists.length;t++){const n=e.colonists[t];this.ids[t]=n.id,this.keys[t]=n.key,this.names[t]=n.name,this.columns.x[t]=n.x,this.columns.z[t]=n.z,this.columns.yaw[t]=n.yaw,this.columns.phase[t]=n.phase,this.wait[t]=n.wait,this.needs[t]={...n.needs},this.skills[t]={...n.skills},this.purseCents[t]=n.purseCents,this.contractId[t]=n.contractId,this.minds[t]=Ol(n.mind),this.activity[t]=Fl(this.contracts,n.contractId)?"work":"wander",this.playerOrders[t]=null,this.haulWalking[t]=0,this.paths[t]=[],this.columns.moving[t]=0,this.copyCurrentToPrevious(t)}this.dug.clear(),this.fixedBlocked.set(this.originalBlocked);for(const t of e.dug??[]){const n=Math.floor(t.x),s=Math.floor(t.z);this.rockCell(n,s)&&(this.dug.add(Mi(n,s)),this.fixedBlocked[s*this.nav.width+n]=0)}this.paintItems(),this.digRevision+=1}step(e){this.schedule(),this.stepHaul(e),this.syncCarried(),x_({count:this.columns.count,x:this.columns.x,z:this.columns.z,yaw:this.columns.yaw,phase:this.columns.phase,wait:this.wait,moving:this.columns.moving,paths:this.paths,activity:this.activity,random:()=>this.random()},this.nav,e),this.stepNeeds(e)}schedule(){for(let e=0;e<this.columns.count;e++)this.playerOrders[e]?this.activity[e]="haul":Fl(this.contracts,this.contractId[e])?this.activity[e]="work":this.activity[e]="wander"}orderMove(e,t,n){const s=this.indexOf(e);return s<0||!this.openCell(t,n)?!1:(this.setOrder(s,{kind:"move",x:t,z:n}),!0)}orderPickup(e,t){const n=this.indexOf(e),s=this.haulItems.find(r=>r.id===t);return n<0||!s||s.carrierId!==0||this.carriedBy(e)||!this.standBeside(n,s)?!1:(this.setOrder(n,{kind:"pickup",itemId:t}),!0)}orderPlace(e,t,n){const s=this.indexOf(e),r=this.carriedBy(e);return s<0||!r||!this.footprintFree(t,n,r.w,r.d)||!this.standBeside(s,{x:t,z:n,w:r.w,d:r.d,blocks:r.blocks})?!1:(this.setOrder(s,{kind:"place",x:t,z:n}),!0)}orderDig(e,t){const n=this.indexOf(e);if(n<0)return!1;const s=P_(this.normalizeDig(t),w_);return s.length===0||!this.designationReaches(n,s)?!1:(this.setOrder(n,{kind:"dig",cells:s,work:0,target:null}),!0)}digState(){const e=[];let t=null;for(let n=0;n<this.columns.count;n++){const s=this.playerOrders[n];if(!(!s||s.kind!=="dig")){for(const r of s.cells)e.push({x:r.x,z:r.z});if(s.target&&!t){const r=this.digSeconds(n);t={x:s.target.x,z:s.target.z,progress:r<=0?1:Math.max(0,Math.min(1,s.work/r))}}}}return{revision:this.digRevision,dug:this.dugCells(),pending:e,active:t}}buildable(e,t){return this.dug.has(Mi(Math.floor(e),Math.floor(t)))}diggable(e,t){const n=Math.floor(e),s=Math.floor(t);return this.rockCell(n,s)&&!this.dug.has(Mi(n,s))}items(){return this.haulItems.map(e=>({...e}))}blocked(e,t){return e<0||t<0||e>=this.nav.width||t>=this.nav.height?!0:this.nav.blocked[t*this.nav.width+e]===1}setOrder(e,t){this.playerOrders[e]=t,this.paths[e]=[],this.haulWalking[e]=0,this.activity[e]="haul"}indexOf(e){return this.ids.indexOf(e)}carriedBy(e){return this.haulItems.find(t=>t.carrierId===e)}openCell(e,t){return e<0||t<0||e>=this.nav.width||t>=this.nav.height?!1:this.nav.blocked[t*this.nav.width+e]===0}footprintFree(e,t,n,s){for(let r=0;r<s;r++)for(let o=0;o<n;o++){const a=e+o,l=t+r;if(a<0||l<0||a>=this.nav.width||l>=this.nav.height||this.fixedBlocked[l*this.nav.width+a])return!1;for(const c of this.haulItems)if(!(c.carrierId!==0||!c.blocks)&&a>=c.x&&a<c.x+c.w&&l>=c.z&&l<c.z+c.d)return!1}return!0}standBeside(e,t){return this.approach(e,t)!==null}approach(e,t){const n={x:Math.floor(this.columns.x[e]),z:Math.floor(this.columns.z[e])},s=[];t.blocks||s.push({x:t.x,z:t.z});for(let r=0;r<t.d;r++)for(let o=0;o<t.w;o++){const a=t.x+o,l=t.z+r;for(const[c,u]of[[1,0],[-1,0],[0,1],[0,-1]]){const f=a+c,h=l+u;f>=t.x&&f<t.x+t.w&&h>=t.z&&h<t.z+t.d||this.openCell(f,h)&&(s.some(m=>m.x===f&&m.z===h)||s.push({x:f,z:h}))}}s.sort((r,o)=>Math.abs(r.x-n.x)+Math.abs(r.z-n.z)-(Math.abs(o.x-n.x)+Math.abs(o.z-n.z)));for(const r of s)if(r.x===n.x&&r.z===n.z||Zr(n,r,this.nav))return r;return null}stepHaul(e){var t;for(let n=0;n<this.columns.count;n++)if(!(this.activity[n]!=="haul"||!this.playerOrders[n])){if(((t=this.playerOrders[n])==null?void 0:t.kind)==="dig"){this.stepDig(n,e);continue}if(this.paths[n].length===0){if(this.haulWalking[n]){this.finishOrder(n);continue}const s=this.goalFor(n);if(!s){this.clearOrder(n);continue}const r={x:Math.floor(this.columns.x[n]),z:Math.floor(this.columns.z[n])};if(r.x===s.x&&r.z===s.z){this.finishOrder(n);continue}const o=Zr(r,s,this.nav);if(!o||o.length===0){this.clearOrder(n);continue}this.paths[n]=o,this.haulWalking[n]=1}this.walkPath(n,e)}}goalFor(e){const t=this.playerOrders[e];if(!t||t.kind==="dig")return null;if(t.kind==="move")return this.openCell(t.x,t.z)?{x:t.x,z:t.z}:null;if(t.kind==="pickup"){const s=this.haulItems.find(r=>r.id===t.itemId);return!s||s.carrierId!==0?null:this.approach(e,s)}const n=this.carriedBy(this.ids[e]);return!n||!this.footprintFree(t.x,t.z,n.w,n.d)?null:this.approach(e,{...n,x:t.x,z:t.z})}walkPath(e,t){const n=this.paths[e],s=n[0];if(!s)return;const r=s.x+.5,o=s.z+.5,a=this.columns.x,l=this.columns.z;for(let p=0;p<this.columns.count;p++){if(p===e)continue;const d=Math.hypot(a[p]-r,l[p]-o)<.42,y=Math.hypot(a[p]-a[e],l[p]-l[e])<1;if(d&&y){this.wait[e]=.15,this.columns.moving[e]=0;return}}const c=r-a[e],u=o-l[e],f=Math.hypot(c,u);if(f<.05){a[e]=r,l[e]=o,n.shift(),this.columns.moving[e]=0;return}const h=Math.min(f,1.45*t);a[e]+=c/f*h,l[e]+=u/f*h,this.columns.phase[e]+=t*9;const m=Math.atan2(c,u),_=this.columns.yaw[e],g=Math.atan2(Math.sin(m-_),Math.cos(m-_));this.columns.yaw[e]=_+g*(1-Math.exp(-10*t)),this.columns.moving[e]=1}stepDig(e,t){const n=this.playerOrders[e];if(!n||n.kind!=="dig")return;if(this.paths[e].length>0){this.walkPath(e,t);return}this.haulWalking[e]=0;let s=n.target;const r=s;r&&!n.cells.some(u=>u.x===r.x&&u.z===r.z)&&(s=null);const o=this.floodFrom(e);if(s&&!this.standFor(e,s,o)&&(s=null),s||(s=this.nextDigTarget(e,n.cells,o),n.target=s,n.work=0),!s){this.clearOrder(e);return}const a=this.standFor(e,s,o);if(!a){n.cells=n.cells.filter(u=>u.x!==s.x||u.z!==s.z),n.target=null,n.work=0;return}const l=Math.floor(this.columns.x[e]),c=Math.floor(this.columns.z[e]);if(l!==a.x||c!==a.z){const u=Zr({x:l,z:c},a,this.nav);if(!u||u.length===0){n.target=null;return}this.paths[e]=u,this.haulWalking[e]=1,this.walkPath(e,t);return}this.columns.moving[e]=0,this.faceCell(e,s,t),n.work+=t,!(n.work+1e-9<this.digSeconds(e))&&(this.openDug(s.x,s.z),n.cells=n.cells.filter(u=>u.x!==s.x||u.z!==s.z),n.target=null,n.work=0,n.cells.length===0&&this.clearOrder(e))}digSeconds(e){const t=Math.max(0,Math.min(8,this.skills[e].mining));return E_*(8/(8+t))}normalizeDig(e){const t=new Set,n=[];for(const s of e){const r=Math.floor(s.x),o=Math.floor(s.z);if(!this.diggable(r,o))continue;const a=Mi(r,o);t.has(a)||(t.add(a),n.push({x:r,z:o}))}return n}designationReaches(e,t){const n=this.floodFrom(e),s=this.nav.width;for(const r of t)for(const[o,a]of Kr(r.x,r.z))if(!(o<0||a<0||o>=s||a>=this.nav.height)&&n[a*s+o])return!0;return!1}nextDigTarget(e,t,n){const s=Math.floor(this.columns.x[e]),r=Math.floor(this.columns.z[e]);let o=null,a=1/0;for(const l of t){if(!this.standFor(e,l,n))continue;const c=Math.abs(l.x-s)+Math.abs(l.z-r);(!o||c<a||c===a&&(l.x<o.x||l.x===o.x&&l.z<o.z))&&(o=l,a=c)}return o}standFor(e,t,n){const s=this.nav.width,r=this.nav.height,o=Math.floor(this.columns.x[e]),a=Math.floor(this.columns.z[e]);let l=null,c=1/0;for(const[u,f]of Kr(t.x,t.z)){if(u<0||f<0||u>=s||f>=r||!n[f*s+u])continue;const h=Math.abs(u-o)+Math.abs(f-a);(!l||h<c||h===c&&(u<l.x||u===l.x&&f<l.z))&&(l={x:u,z:f},c=h)}return l}floodFrom(e){const t=this.nav.width,n=this.nav.height,s=new Uint8Array(t*n),r=Math.floor(this.columns.x[e]),o=Math.floor(this.columns.z[e]);if(!this.openCell(r,o))return s;const a=[o*t+r];s[o*t+r]=1;for(let l=0;l<a.length;l++){const c=a[l]??0,u=c%t,f=c/t|0;for(const[h,m]of Kr(u,f)){if(!this.openCell(h,m))continue;const _=m*t+h;s[_]||(s[_]=1,a.push(_))}}return s}openDug(e,t){!this.rockCell(e,t)||this.dug.has(Mi(e,t))||(this.dug.add(Mi(e,t)),this.fixedBlocked[t*this.nav.width+e]=0,this.paintItems(),this.digRevision+=1)}rockCell(e,t){return e<0||t<0||e>=this.nav.width||t>=this.nav.height?!1:this.rock[t*this.nav.width+e]===1}dugCells(){const e=[];for(const t of this.dug){const[n,s]=t.split(",").map(Number);e.push({x:n,z:s})}return e.sort((t,n)=>t.z-n.z||t.x-n.x),e}faceCell(e,t,n){const s=t.x+.5-this.columns.x[e],r=t.z+.5-this.columns.z[e],o=Math.atan2(s,r),a=this.columns.yaw[e],l=Math.atan2(Math.sin(o-a),Math.cos(o-a));this.columns.yaw[e]=a+l*(1-Math.exp(-10*n))}finishOrder(e){const t=this.playerOrders[e];if((t==null?void 0:t.kind)==="pickup"){const n=this.haulItems.find(s=>s.id===t.itemId);n&&n.carrierId===0&&(n.carrierId=this.ids[e])}else if((t==null?void 0:t.kind)==="place"){const n=this.carriedBy(this.ids[e]);n&&this.footprintFree(t.x,t.z,n.w,n.d)&&(n.x=t.x,n.z=t.z,n.carrierId=0)}this.paintItems(),this.clearOrder(e)}clearOrder(e){this.playerOrders[e]=null,this.paths[e]=[],this.haulWalking[e]=0,this.activity[e]="wander"}syncCarried(){for(const e of this.haulItems){if(e.carrierId===0)continue;const t=this.indexOf(e.carrierId);t<0||(e.x=Math.floor(this.columns.x[t]),e.z=Math.floor(this.columns.z[t]))}}paintItems(){this.nav.blocked.set(this.fixedBlocked);const e=this.nav.width;for(const t of this.haulItems)if(!(!t.blocks||t.carrierId!==0))for(let n=0;n<t.d;n++)for(let s=0;s<t.w;s++){const r=t.x+s,o=t.z+n;r<0||o<0||r>=e||o>=this.nav.height||(this.nav.blocked[o*e+r]=1)}}stepNeeds(e){const t=e/3e3,n=e/(40*60),s=e/(45*60);for(let r=0;r<this.columns.count;r++){const o=this.needs[r];o.food=Tn(o.food-t),o.rest=Tn(o.rest-n),o.recreation=Tn(o.recreation-s)}}snapshot(){for(let e=0;e<this.columns.count;e++)this.copyCurrentToPrevious(e)}copyCurrentToPrevious(e){this.columns.prevX[e]=this.columns.x[e],this.columns.prevZ[e]=this.columns.z[e],this.columns.prevYaw[e]=this.columns.yaw[e],this.columns.prevPhase[e]=this.columns.phase[e]}random(){let e=this.rngState|0;e=e+1831565813|0,this.rngState=e>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function A_(i){if((i.backend??"typescript")==="wasm")throw new Error("The Zig WebAssembly backend is not linked into this build. See docs/ENGINE.md.");return new T_(i)}function Fl(i,e){return e===null?!1:i.some(t=>t.id===e&&t.state==="accepted")}function R_(i){return{stated:"objectivism",certainty:Tn(.9-i*.03),seeds:[],charisma:.35+i%3*.12,suggestibility:.22+i%4*.06,receptivity:.82,residence:"founder",integrity:1,morale:Tn(.86-i*.02),force:"none",laborHoursLeft:14,inventory:C_()}}function C_(){return{food:0,timber:0,stone:0,ore:0,power:0,goldOre:0}}function Ol(i){return{...i,seeds:i.seeds.map(e=>({...e})),inventory:{...i.inventory}}}function L_(i){const e={};return ec.forEach((t,n)=>{e[t]=(i*3+n*5)%9}),e}function Tn(i){return i<0?0:i>1?1:i}function Mi(i,e){return`${i},${e}`}function Kr(i,e){return[[i+1,e],[i-1,e],[i,e+1],[i,e-1]]}function P_(i,e){if(i.length<=e)return i;const t=i[0];return t?[...i].sort((n,s)=>{const r=Math.abs(n.x-t.x)+Math.abs(n.z-t.z),o=Math.abs(s.x-t.x)+Math.abs(s.z-t.z);return r!==o?r-o:n.x!==s.x?n.x-s.x:n.z-s.z}).slice(0,e):i}function D_(i=tc){return Wu(i)}function U_(i,e){const t=new Uint8Array(i.width*i.height),n=(s,r)=>{s<0||r<0||s>=i.width||r>=i.height||(t[r*i.width+s]=1)};for(let s=0;s<i.height;s++)for(let r=0;r<i.width;r++){const o=s*i.width+r,a=i.terrain[o];(a==="water"||a==="stream")&&n(r,s),(i.elevation[o]??0)>=1&&n(r,s)}for(const s of i.walls)n(s.x,s.z);for(const s of i.props)if(s.blocks!==!1&&!s.movable)for(const[r,o]of I_(s))n(r,o);for(const s of i.animals)for(let r=0;r<s.d;r++)for(let o=0;o<s.w;o++)n(s.x+o,s.z+r);for(const s of i.figures)s.wander||n(s.x,s.z);return{width:i.width,height:i.height,blocked:t}}function I_(i){const e=[],t=i.w??1,n=i.d??1;for(let s=0;s<n;s++)for(let r=0;r<t;r++)e.push([i.x+r,i.z+s]);return e}const N_=38;function F_(i){const e=[],t=[],n=new Map;let s="default";const r=l=>{let c=n.get(l);return c||(c={pos:[],nrm:[],uv:[]},n.set(l,c)),c},o=i.split(/\r?\n/);for(const l of o){const c=l.trim();if(c.length===0||c.startsWith("#"))continue;const u=c.split(/\s+/),f=u[0];if(f==="v"&&u.length>=4)e.push(Number(u[1]),Number(u[2]),-Number(u[3]));else if(f==="vt"&&u.length>=3)t.push(Number(u[1]),Number(u[2]));else if(f==="usemtl")s=u[1]??"default";else if(f==="f"&&u.length>=4){const h=[];let m=!1;for(let g=1;g<u.length;g++){const p=u[g].split("/"),d=kl(p[0],e.length/3),y=p.length>1&&p[1].length>0?kl(p[1],t.length/2):-1;if(d<0){m=!0;break}h.push({pi:d,ti:y})}if(m||h.length<3)continue;const _=r(s);for(let g=1;g+1<h.length;g++)O_(_,e,t,h[0],h[g],h[g+1])}}const a=[];for(const[l,c]of n){if(c.pos.length===0)continue;const u=new Tt;u.setAttribute("position",new ht(c.pos,3)),u.setAttribute("normal",new ht(c.nrm,3)),u.setAttribute("uv",new ht(c.uv,2)),a.push({material:l,geometry:u,edges:new bu(u,N_)})}return{parts:a}}function kl(i,e){if(!i)return-1;const t=Number(i);if(!Number.isFinite(t)||t===0)return-1;const n=t<0?e+t:t-1;return n>=0&&n<e?n:-1}function O_(i,e,t,n,s,r){const o=e[n.pi*3],a=e[n.pi*3+1],l=e[n.pi*3+2],c=e[s.pi*3],u=e[s.pi*3+1],f=e[s.pi*3+2],h=e[r.pi*3],m=e[r.pi*3+1],_=e[r.pi*3+2],g=c-o,p=u-a,d=f-l,y=h-o,v=m-a,b=_-l;let C=p*b-d*v,R=d*y-g*b,T=g*v-p*y;const F=Math.hypot(C,R,T);if(F<1e-8)return;C/=F,R/=F,T/=F;const x=[n,s,r],E=[[o,a,l],[c,u,f],[h,m,_]];for(let k=0;k<3;k++){i.pos.push(E[k][0],E[k][1],E[k][2]),i.nrm.push(C,R,T);const B=x[k].ti;B>=0?i.uv.push(t[B*2],t[B*2+1]):i.uv.push(0,0)}}const k_=new yo({color:2235416});function ti(i,e){const t=new Ut,n=e.stuff??"Wood",s=e.skipPrefix??[];for(const a of i.parts){if(s.some(f=>a.material.startsWith(f)))continue;const l=e.materials.get(a.material,n,e.tint??null),c=new je(a.geometry,l);c.castShadow=!0,c.receiveShadow=!0,t.add(c);const u=new Su(a.edges,k_);u.castShadow=!1,t.add(u)}const r=e.scale??1,o=e.stretch??[1,1,1];return t.scale.set(r*o[0],r*o[1],r*o[2]),t.rotation.y=In.degToRad(e.yaw??0),t}function z_(i,e,t){const n=new Ut;n.name=i.id,n.position.set(i.x+i.w/2,0,i.z+i.d/2),n.rotation.y=In.degToRad(i.yaw);const s=e.get(i.model);s&&n.add(ti(s,{materials:t}));const r=[],o=i.leg?e.get(i.leg):void 0;if(o)for(const a of i.hips){const l=new Ut;l.position.set(a[0],a[1],a[2]),l.rotation.order="XYZ";const c=a[0]>=0?1:-1;l.rotation.z=In.degToRad(c*i.legSplay);const u=ti(o,{materials:t});u.position.y=-i.legLength,l.add(u),n.add(l),r.push(l)}return{root:n,pivots:r,swing:i.legSwing}}function B_(i,e){for(let t=0;t<i.length;t++){const n=i[t];n.root.position.y=Math.abs(Math.sin(e*1.4+t))*.012,n.pivots.forEach((s,r)=>{const o=(r+(r>>1))%2*Math.PI,a=Math.sin(e*1.7+o+t)*Math.min(n.swing,22)*.35;s.rotation.x=In.degToRad(a)})}}function G_(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Tt;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in f.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(f.morphAttributes[m])}if(e){let m;if(t)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0;const f=[];for(let h=0;h<i.length;++h){const m=i[h].index;for(let _=0;_<m.count;++_)f.push(m.getX(_)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in r){const f=zl(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const m=[];for(let g=0;g<o[u].length;++g)m.push(o[u][g][h]);const _=zl(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function zl(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}const o=new e(r);let a=0;for(let c=0;c<i.length;++c)o.set(i[c].array,a),a+=i[c].array.length;const l=new jt(o,t,n);return s!==void 0&&(l.gpuType=s),l}function H_(i,e,t,n){const s=[],r=new Map;for(const a of i.props){const l=e.get(a.model);if(!l)continue;const c=ti(l,{materials:t,stuff:a.stuff,tint:a.tint?new Oe(a.tint):null,scale:a.scale,stretch:a.stretch,yaw:a.yaw,skipPrefix:a.skipPrefix}),u=a.w??1,f=a.d??1;if(c.position.set(a.x+u/2,a.y??0,a.z+f/2),c.name=a.id,a.movable){if(c.userData.itemId=a.id,n.add(c),a.model==="campfire"){const h=new Tu(16747068,2.4,7,2);h.position.set(0,.55,0),c.add(h)}s.push({id:a.id,group:c,w:u,d:f});continue}c.updateMatrixWorld(!0),c.traverse(h=>{if(!(h instanceof je))return;const m=h.geometry.clone();m.applyMatrix4(h.matrixWorld);const _=h.material;if(Array.isArray(_)){m.dispose();return}const g=Object.keys(m.attributes).sort().join(","),p=`${_.uuid}|${g}`;let d=r.get(p);d||(d={material:_,geometries:[]},r.set(p,d)),d.geometries.push(m)})}const o=new Ut;o.name="static-props";for(const[a,l]of r)for(const c of V_(l.geometries)){const u=new je(c,l.material);u.name=`static-${a.slice(0,8)}`,u.castShadow=!0,u.receiveShadow=!0,u.frustumCulled=!0,o.add(u)}return n.add(o),s}function V_(i){if(i.length<=1||!W_(i))return i;const e=G_(i,!1);for(const t of i)t.dispose();return e?[e]:[]}function W_(i){const e=i[0],t=Object.keys(e.attributes).sort().join(","),n=e.index!==null;for(const s of i){if(s.index!==null!==n||Object.keys(s.attributes).sort().join(",")!==t)return!1;for(const r of Object.keys(e.attributes)){const o=e.attributes[r],a=s.attributes[r];if(!o||!a||o.itemSize!==a.itemSize)return!1}}return!0}function Bl(i,e,t){const n=new Ut;return n.name=i.id,i.parts.forEach((s,r)=>{const o=e.get(s);o&&n.add(ti(o,{materials:t,stuff:"Fabric",tint:new Oe(i.tints[r]??"#ffffff")}))}),n.position.set(i.x+.5,0,i.z+.5),n.rotation.y=In.degToRad(i.yaw??0),n}function $t(i,e,t,n,s){const r=n[1][0]-n[0][0],o=n[1][1]-n[0][1],a=n[1][2]-n[0][2],l=n[2][0]-n[0][0],c=n[2][1]-n[0][1],u=n[2][2]-n[0][2];let f=o*u-a*c,h=a*l-r*u,m=r*c-o*l;const _=Math.hypot(f,h,m)||1;f/=_,h/=_,m/=_;const g=[0,1,2,0,2,3];for(const p of g){const d=n[p],y=s[p];i.push(d[0],d[1],d[2]),e.push(f,h,m),t.push(y[0],y[1])}}function Mt(i,e,t,n){const s=new i.BufferGeometry;return s.setAttribute("position",new i.Float32BufferAttribute(e,3)),s.setAttribute("normal",new i.Float32BufferAttribute(t,3)),s.setAttribute("uv",new i.Float32BufferAttribute(n,2)),s}function X_(i,e,t,n,s,r,o,a){const l=document.createElement("div");l.id="action-bar",l.innerHTML=`
    <span id="action-name"></span>
    <button type="button" id="act-move">Move</button>
    <button type="button" id="act-dig">Dig</button>
    <button type="button" id="act-pickup">Pick up</button>
    <button type="button" id="act-place" disabled>Place</button>
  `,i.append(l);const c=l.querySelector("#action-name"),u=l.querySelector("#act-move"),f=l.querySelector("#act-dig"),h=l.querySelector("#act-pickup"),m=l.querySelector("#act-place");if(!(c instanceof HTMLElement))throw new Error("Missing action name");if(!(u instanceof HTMLButtonElement))throw new Error("Missing Move");if(!(f instanceof HTMLButtonElement))throw new Error("Missing Dig");if(!(h instanceof HTMLButtonElement))throw new Error("Missing Pick up");if(!(m instanceof HTMLButtonElement))throw new Error("Missing Place");const _=new je(new mr(.42,.58,28),new On({color:14993802,side:Gt,depthTest:!1}));_.rotation.x=-Math.PI/2,_.position.y=.06,_.renderOrder=2,_.visible=!1,_.frustumCulled=!1,_.userData.skipPick=!0,n.add(_);const g=Gl(14993802,.45),p=Gl(16765562,.32);n.add(g,p);const d=new Cu,y=new De,v=new rn(new D(0,1,0),0),b=new D,C=r.map(q=>q.pick),R=o.map(q=>q.group);let T=null,F=null,x=null,E=null,k=null,B=[],J="";const P=s.roster();for(const q of r)q.group.userData.skipPick=!0;const O=()=>{u.classList.toggle("is-armed",F==="move"),f.classList.toggle("is-armed",F==="dig"),h.classList.toggle("is-armed",F==="pickup"),m.classList.toggle("is-armed",F==="place"),e.style.cursor=F==="dig"?"crosshair":""},W=q=>{T=q,F=null,l.classList.add("is-open"),c.textContent=P.names[q]??"",r.forEach((Q,he)=>Q.label.classList.toggle("is-selected",he===q)),O()},K=()=>{T=null,F=null,E=null,k=null,B=[],l.classList.remove("is-open"),_.visible=!1;for(const q of r)q.label.classList.remove("is-selected");O()},$=q=>{T!==null&&(F=F===q?null:q,O())};u.addEventListener("click",()=>$("move")),f.addEventListener("click",()=>$("dig")),h.addEventListener("click",()=>$("pickup")),m.addEventListener("click",()=>{m.disabled||$("place")}),r.forEach((q,Q)=>{q.label.addEventListener("click",he=>{he.stopPropagation(),W(Q)})}),window.addEventListener("keydown",q=>{q.key==="Escape"&&K()});const j=q=>{const Q=e.getBoundingClientRect();y.x=(q.clientX-Q.left)/Q.width*2-1,y.y=-((q.clientY-Q.top)/Q.height)*2+1,d.setFromCamera(y,t)},Z=()=>d.ray.intersectPlane(v,b)?{x:Math.floor(b.x),z:Math.floor(b.z)}:null,re=q=>{let Q=q;for(;Q;){const he=Q.userData.itemId;if(typeof he=="string")return he;Q=Q.parent}return null},V=()=>{const q=d.intersectObjects(R,!0)[0],Q=re((q==null?void 0:q.object)??null);if(Q)return Q;const he=Z();if(!he)return null;const I=s.items().find(Xe=>Xe.carrierId===0&&he.x>=Xe.x&&he.x<Xe.x+Xe.w&&he.z>=Xe.z&&he.z<Xe.z+Xe.d);return(I==null?void 0:I.id)??null},U=()=>{const q=d.intersectObjects(C,!1)[0],Q=q==null?void 0:q.object.userData.colonistIndex;return typeof Q=="number"?Q:-1},Y=q=>{let Q=q;for(;Q;){if(Q.userData.skipPick||Q.userData.colonistIndex!==void 0)return!0;Q=Q.parent}return!1},le=q=>{const Q=q.face;if(!Q)return null;const he=Q.normal.clone().transformDirection(q.object.matrixWorld);if(he.lengthSq()<1e-8)return null;he.normalize();const I=q.point.clone().addScaledVector(he,-.08);return{x:Math.floor(I.x),z:Math.floor(I.z)}},fe=()=>{const q=d.intersectObjects(n.children,!0);for(const Q of q){if(Y(Q.object))continue;const he=le(Q);if(he&&s.diggable(he.x,he.z))return he}return Z()},me=q=>{if(j(q),T!==null&&(F==="move"||F==="place")){const he=Z(),I=P.ids[T];if(!he||I===void 0)return;(F==="move"?s.orderMove(I,he.x,he.z):s.orderPlace(I,he.x,he.z))&&(F=null,O());return}if(T!==null&&F==="pickup"){const he=V(),I=P.ids[T];he&&I!==void 0&&s.orderPickup(I,he)&&(F=null,O());return}const Q=U();Q>=0?W(Q):K()},Ue=q=>{if(T===null||q.length===0)return;const Q=P.ids[T];Q!==void 0&&s.orderDig(Q,q)&&(F=null,E=null,B=[],O())};return e.addEventListener("pointerdown",q=>{q.button!==0||F!=="dig"||T===null||(q.preventDefault(),q.stopImmediatePropagation(),j(q),k={x:q.clientX,y:q.clientY},E=fe(),B=E&&s.diggable(E.x,E.z)?[E]:[],e.setPointerCapture&&e.setPointerCapture(q.pointerId))},!0),e.addEventListener("pointermove",q=>{if(F!=="dig"||!E)return;q.stopImmediatePropagation(),j(q);const Q=fe()??E;B=Wl(Vl(E,Q).filter(he=>s.diggable(he.x,he.z)),E,96)},!0),e.addEventListener("pointerup",q=>{var Me;if(q.button!==0||F!=="dig"||!E)return;q.preventDefault(),q.stopImmediatePropagation(),j(q);const Q=fe()??E,he=k?Math.hypot(q.clientX-k.x,q.clientY-k.y):0,I=E,Xe=he<5?s.diggable(I.x,I.z)?[I]:[]:Wl(Vl(I,Q).filter(Ae=>s.diggable(Ae.x,Ae.z)),I,96);E=null,k=null,B=[],(Me=e.hasPointerCapture)!=null&&Me.call(e,q.pointerId)&&e.releasePointerCapture(q.pointerId),Ue(Xe)},!0),e.addEventListener("pointerdown",q=>{q.button===0&&(x={x:q.clientX,y:q.clientY})}),e.addEventListener("pointerup",q=>{if(q.button!==0||!x)return;const Q=Math.hypot(q.clientX-x.x,q.clientY-x.y);x=null,Q<5&&me(q)}),{update(q){const Q=T===null?0:P.ids[T]??0,he=Q!==0&&s.items().some(ce=>ce.carrierId===Q);m.disabled=!he,!he&&F==="place"&&(F=null,O());const I=s.digState(),Xe=I.active,Me=`${B.map(ce=>`${ce.x},${ce.z}`).join(";")}|${I.pending.map(ce=>`${ce.x},${ce.z}`).join(";")}|${Xe?`${Xe.x},${Xe.z}`:""}`;if(Me!==J){J=Me;const ce=I.pending.filter(Ce=>!Xe||Ce.x!==Xe.x||Ce.z!==Xe.z),Ze=Xe?[...B,{x:Xe.x,z:Xe.z}]:B;Hl(g,ce,a),Hl(p,Ze,a)}if(T===null)_.visible=!1;else{const ce=q[T];_.visible=!0,_.position.x=(ce==null?void 0:ce.x)??0,_.position.z=(ce==null?void 0:ce.z)??0}const Ae=s.items();for(const ce of o){const Ze=Ae.find(Ce=>Ce.id===ce.id);if(Ze)if(Ze.carrierId!==0){const Ce=P.ids.indexOf(Ze.carrierId),w=Ce>=0?q[Ce]:void 0;if(!w)continue;ce.group.position.set(w.x,1.25,w.z)}else ce.group.position.set(Ze.x+ce.w/2,0,Ze.z+ce.d/2)}}}}function Gl(i,e){const t=new je(new Tt,new On({color:i,transparent:!0,opacity:e,depthWrite:!1,side:Gt}));return t.frustumCulled=!1,t.renderOrder=3,t.userData.skipPick=!0,t}function Hl(i,e,t){if(i.geometry.dispose(),e.length===0){i.geometry=new Tt;return}const n=[],s=[],r=[];for(const o of e){const a=t(o.x,o.z);$t(n,s,r,[[o.x,a,o.z],[o.x,a,o.z+1],[o.x+1,a,o.z+1],[o.x+1,a,o.z]],[[0,0],[0,1],[1,1],[1,0]])}i.geometry=Mt(xt,n,s,r)}function Vl(i,e){const t=Math.min(i.x,e.x),n=Math.max(i.x,e.x),s=Math.min(i.z,e.z),r=Math.max(i.z,e.z),o=[];for(let a=s;a<=r;a++)for(let l=t;l<=n;l++)o.push({x:l,z:a});return o}function Wl(i,e,t){return[...i].sort((s,r)=>{const o=Math.abs(s.x-e.x)+Math.abs(s.z-e.z),a=Math.abs(r.x-e.x)+Math.abs(r.z-e.z);return o!==a?o-a:s.x!==r.x?s.x-r.x:s.z-r.z}).slice(0,t)}const es="./assets/isorim",q_={color:[.29,.54,.52],map:null,tint:!1,emissive:!1},Y_={color:[.84,.74,.6],map:null,tint:!1,emissive:!1},$_={color:[.84,.74,.6],map:null,tint:!1,emissive:!1},j_={color:[.7056,.6216,.504],map:null,tint:!1,emissive:!1},Z_={color:[.42,.3,.22],map:null,tint:!1,emissive:!1},K_={color:[.42,.3,.22],map:null,tint:!1,emissive:!1},J_={color:[.3528,.252,.1848],map:null,tint:!1,emissive:!1},Q_={color:[.62,.48,.34],map:null,tint:!1,emissive:!1},e0={color:[.94,.93,.89],map:null,tint:!1,emissive:!1},t0={color:[.94,.93,.89],map:null,tint:!1,emissive:!1},n0={color:[.7896,.7812,.7476],map:null,tint:!1,emissive:!1},i0={color:[.27,.2,.16],map:null,tint:!1,emissive:!1},s0={color:[.4,.29,.21],map:null,tint:!1,emissive:!1},r0={color:[.24,.18,.15],map:null,tint:!1,emissive:!1},a0={color:[.336,.2436,.1764],map:null,tint:!1,emissive:!1},o0={color:[.88,.8,.44],map:null,tint:!1,emissive:!1},l0={color:[.74,.6,.5],map:null,tint:!1,emissive:!1},c0={color:[.74,.6,.5],map:null,tint:!1,emissive:!1},u0={color:[.6216,.504,.42],map:null,tint:!1,emissive:!1},f0={color:[.94,.72,.36],map:null,tint:!1,emissive:!1},h0={color:[.74,.4,.36],map:null,tint:!1,emissive:!1},d0={color:[.74,.4,.36],map:null,tint:!1,emissive:!1},p0={color:[.6216,.336,.3024],map:null,tint:!1,emissive:!1},m0={color:[.56,.42,.3],map:null,tint:!1,emissive:!1},_0={color:[.56,.42,.3],map:null,tint:!1,emissive:!1},g0={color:[.4704,.3528,.252],map:null,tint:!1,emissive:!1},v0={color:[.88,.86,.82],map:null,tint:!1,emissive:!1},x0={color:[.58,.52,.46],map:null,tint:!1,emissive:!1},M0={color:[.58,.52,.46],map:null,tint:!1,emissive:!1},y0={color:[.4872,.4368,.3864],map:null,tint:!1,emissive:!1},S0={color:[.82,.2,.18],map:null,tint:!1,emissive:!1},b0={color:[.28,.26,.24],map:null,tint:!1,emissive:!1},E0={color:[.15,.15,.17],map:null,tint:!1,emissive:!1},w0={color:[.22,.42,.8],map:null,tint:!1,emissive:!1},T0={color:[.4,.38,.34],map:null,tint:!1,emissive:!1},A0={color:[.94,.9,.82],map:null,tint:!1,emissive:!1},R0={color:[.82,.6,.36],map:null,tint:!1,emissive:!1},C0={color:[.82,.6,.36],map:null,tint:!1,emissive:!1},L0={color:[.6888,.504,.3024],map:null,tint:!1,emissive:!1},P0={color:[.8,.18,.16],map:null,tint:!1,emissive:!1},D0={color:[.92,.7,.22],map:null,tint:!1,emissive:!1},U0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},I0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},N0={color:[.9,.72,.26],map:null,tint:!1,emissive:!1},F0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},O0={color:[.66,.66,.71],map:null,tint:!1,emissive:!1},k0={color:[.66,.66,.71],map:null,tint:!1,emissive:!1},z0={color:[.5544,.5544,.5964],map:null,tint:!1,emissive:!1},B0={color:[.86,.8,.6],map:null,tint:!1,emissive:!1},G0={color:[.6,.5,.32],map:null,tint:!1,emissive:!1},H0={color:[.5,.4,.26],map:null,tint:!1,emissive:!1},V0={color:[.92,.86,.76],map:null,tint:!1,emissive:!1},W0={color:[.78,.62,.42],map:null,tint:!1,emissive:!1},X0={color:[.78,.62,.42],map:null,tint:!1,emissive:!1},q0={color:[.6552,.5208,.3528],map:null,tint:!1,emissive:!1},Y0={color:[.17,.16,.17],map:null,tint:!1,emissive:!1},$0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},j0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},Z0={color:[.7728,.7644,.7308],map:null,tint:!1,emissive:!1},K0={color:[.86,.66,.62],map:null,tint:!1,emissive:!1},J0={color:[.11,.1,.1],map:null,tint:!1,emissive:!1},Q0={color:[.9,.86,.78],map:null,tint:!1,emissive:!1},eg={color:[.64,.46,.3],map:null,tint:!1,emissive:!1},tg={color:[.64,.46,.3],map:null,tint:!1,emissive:!1},ng={color:[.5376,.3864,.252],map:null,tint:!1,emissive:!1},ig={color:[.26,.23,.21],map:null,tint:!1,emissive:!1},sg={color:[.84,.82,.78],map:null,tint:!1,emissive:!1},rg={color:[.56,.52,.48],map:null,tint:!1,emissive:!1},ag={color:[.56,.52,.48],map:null,tint:!1,emissive:!1},og={color:[.4704,.4368,.4032],map:null,tint:!1,emissive:!1},lg={color:[.86,.84,.8],map:null,tint:!1,emissive:!1},cg={color:[.8,.65,.45],map:null,tint:!1,emissive:!1},ug={color:[.8,.65,.45],map:null,tint:!1,emissive:!1},fg={color:[.672,.546,.378],map:null,tint:!1,emissive:!1},hg={color:[.92,.66,.2],map:null,tint:!1,emissive:!1},dg={color:[.82,.78,.7],map:null,tint:!1,emissive:!1},pg={color:[.6,.48,.36],map:null,tint:!1,emissive:!1},mg={color:[.22,.4,.3],map:null,tint:!1,emissive:!1},_g={color:[.92,.56,.2],map:null,tint:!1,emissive:!1},gg={color:[.55,.54,.56],map:null,tint:!1,emissive:!1},vg={color:[.55,.54,.56],map:null,tint:!1,emissive:!1},xg={color:[.462,.4536,.4704],map:null,tint:!1,emissive:!1},Mg={color:[.32,.23,.17],map:null,tint:!1,emissive:!1},yg={color:[.72,.62,.48],map:null,tint:!1,emissive:!1},Sg={color:[.54,.4,.28],map:null,tint:!1,emissive:!1},bg={color:[.54,.4,.28],map:null,tint:!1,emissive:!1},Eg={color:[.4536,.336,.2352],map:null,tint:!1,emissive:!1},wg={color:[.26,.24,.22],map:null,tint:!1,emissive:!1},Tg={color:[.42,.36,.32],map:null,tint:!1,emissive:!1},Ag={color:[.36,.44,.56],map:null,tint:!1,emissive:!1},Rg={color:[.36,.33,.3],map:null,tint:!1,emissive:!1},Cg={color:[.94,.94,.96],map:null,tint:!1,emissive:!1},Lg={color:[.94,.94,.96],map:null,tint:!1,emissive:!1},Pg={color:[.7896,.7896,.8064],map:null,tint:!1,emissive:!1},Dg={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},Ug={color:[.88,.74,.54],map:null,tint:!1,emissive:!1},Ig={color:[.88,.74,.54],map:null,tint:!1,emissive:!1},Ng={color:[.7392,.6216,.4536],map:null,tint:!1,emissive:!1},Fg={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},Og={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},kg={color:[.82,.44,.2],map:null,tint:!1,emissive:!1},zg={color:[.82,.44,.2],map:null,tint:!1,emissive:!1},Bg={color:[.24,.18,.15],map:null,tint:!1,emissive:!1},Gg={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},Hg={color:[.82,.63,.42],map:null,tint:!1,emissive:!1},Vg={color:[.82,.63,.42],map:null,tint:!1,emissive:!1},Wg={color:[.6888,.5292,.3528],map:null,tint:!1,emissive:!1},Xg={color:[.84,.8,.72],map:null,tint:!1,emissive:!1},qg={color:[.84,.8,.72],map:null,tint:!1,emissive:!1},Yg={color:[.7056,.672,.6048],map:null,tint:!1,emissive:!1},$g={color:[.62,.6,.58],map:null,tint:!1,emissive:!1},jg={color:[.92,.56,.2],map:null,tint:!1,emissive:!1},Zg={color:[.84,.83,.8],map:null,tint:!1,emissive:!1},Kg={color:[.84,.83,.8],map:null,tint:!1,emissive:!1},Jg={color:[.92,.56,.2],map:null,tint:!1,emissive:!1},Qg={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},ev={color:[.74,.54,.36],map:null,tint:!1,emissive:!1},tv={color:[.74,.54,.36],map:null,tint:!1,emissive:!1},nv={color:[.6216,.4536,.3024],map:null,tint:!1,emissive:!1},iv={color:[.62,.5,.38],map:null,tint:!1,emissive:!1},sv={color:[.62,.5,.38],map:null,tint:!1,emissive:!1},rv={color:[.5208,.42,.3192],map:null,tint:!1,emissive:!1},av={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},ov={color:[.21,.18,.16],map:null,tint:!1,emissive:!1},lv={color:[.85,.81,.69],map:null,tint:!1,emissive:!1},cv={color:[.2,.14,.11],map:null,tint:!1,emissive:!1},uv={color:[.5,.33,.22],map:null,tint:!1,emissive:!1},fv={color:[.5,.33,.22],map:null,tint:!1,emissive:!1},hv={color:[.42,.2772,.1848],map:null,tint:!1,emissive:!1},dv={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},pv={color:[.56,.58,.63],map:null,tint:!1,emissive:!1},mv={color:[.56,.58,.63],map:null,tint:!1,emissive:!1},_v={color:[.88,.88,.88],map:null,tint:!1,emissive:!1},gv={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},vv={color:[.86,.8,.7],map:null,tint:!1,emissive:!1},xv={color:[.68,.56,.42],map:null,tint:!1,emissive:!1},Mv={color:[.68,.56,.42],map:null,tint:!1,emissive:!1},yv={color:[.5712,.4704,.3528],map:null,tint:!1,emissive:!1},Sv={color:[.3,.46,.24],map:null,tint:!1,emissive:!1},bv={color:[.7,.78,.46],map:null,tint:!1,emissive:!1},Ev={color:[.42,.6,.3],map:null,tint:!1,emissive:!1},wv={color:[.42,.6,.3],map:null,tint:!1,emissive:!1},Tv={color:[.3528,.504,.252],map:null,tint:!1,emissive:!1},Av={color:[.86,.73,.48],map:null,tint:!1,emissive:!1},Rv={color:[.86,.73,.48],map:null,tint:!1,emissive:!1},Cv={color:[.7224,.6132,.4032],map:null,tint:!1,emissive:!1},Lv={color:[.92,.88,.8],map:null,tint:!1,emissive:!1},Pv={color:[.72,.64,.52],map:null,tint:!1,emissive:!1},Dv={color:[.72,.64,.52],map:null,tint:!1,emissive:!1},Uv={color:[.6048,.5376,.4368],map:null,tint:!1,emissive:!1},Iv={color:[.26,.3,.38],map:null,tint:!1,emissive:!1},Nv={color:[.182,.21,.266],map:null,tint:!1,emissive:!1},Fv={color:[.46,.36,.28],map:null,tint:!1,emissive:!1},Ov={color:[.62,.52,.4],map:null,tint:!1,emissive:!1},kv={color:[.3864,.3024,.2352],map:null,tint:!1,emissive:!1},zv={color:[.72,.62,.42],map:null,tint:!1,emissive:!1},Bv={color:[.56,.42,.28],map:null,tint:!1,emissive:!1},Gv={color:[.392,.294,.196],map:null,tint:!1,emissive:!1},Hv={color:[.5,.36,.26],map:null,tint:!1,emissive:!1},Vv={color:[.5,.36,.26],map:null,tint:!1,emissive:!1},Wv={color:[.42,.3024,.2184],map:null,tint:!1,emissive:!1},Xv={color:[.84,.68,.54],map:null,tint:!1,emissive:!1},qv={color:[.47,.56,.66],map:null,tint:!1,emissive:!1},Yv={color:[.34,.4,.48],map:null,tint:!1,emissive:!1},$v={color:[.32,.37,.44],map:null,tint:!1,emissive:!1},jv={color:[.8,.62,.42],map:null,tint:!1,emissive:!1},Zv={color:[.18,.17,.17],map:null,tint:!1,emissive:!1},Kv={color:[.86,.7,.66],map:null,tint:!1,emissive:!1},Jv={color:[.86,.7,.66],map:null,tint:!1,emissive:!1},Qv={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},ex={color:[.17,.17,.2],map:null,tint:!1,emissive:!1},tx={color:[.17,.17,.2],map:null,tint:!1,emissive:!1},nx={color:[.1428,.1428,.168],map:null,tint:!1,emissive:!1},ix={color:[.9,.68,.66],map:null,tint:!1,emissive:!1},sx={color:[.9,.68,.66],map:null,tint:!1,emissive:!1},rx={color:[.756,.5712,.5544],map:null,tint:!1,emissive:!1},ax={color:[.94,.6,.6],map:null,tint:!1,emissive:!1},ox={color:[.2,.19,.19],map:null,tint:!1,emissive:!1},lx={color:[.52,.52,.52],map:null,tint:!1,emissive:!1},cx={color:[.34,.33,.33],map:null,tint:!1,emissive:!1},ux={color:[.4368,.4368,.4368],map:null,tint:!1,emissive:!1},fx={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},hx={color:[.5,.44,.4],map:null,tint:!1,emissive:!1},dx={color:[.5,.44,.4],map:null,tint:!1,emissive:!1},px={color:[.42,.3696,.336],map:null,tint:!1,emissive:!1},mx={color:[.84,.64,.62],map:null,tint:!1,emissive:!1},_x={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},gx={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},vx={color:[.4368,.42,.4032],map:null,tint:!1,emissive:!1},xx={color:[.9,.87,.8],map:null,tint:!1,emissive:!1},Mx={color:[.26,.23,.21],map:null,tint:!1,emissive:!1},yx={color:[.26,.23,.21],map:null,tint:!1,emissive:!1},Sx={color:[.95,.95,.96],map:null,tint:!1,emissive:!1},bx={color:[.95,.95,.96],map:null,tint:!1,emissive:!1},Ex={color:[.798,.798,.8064],map:null,tint:!1,emissive:!1},wx={color:[.62,.56,.4],map:null,tint:!1,emissive:!1},Tx={color:[.434,.392,.28],map:null,tint:!1,emissive:!1},Ax={color:[.92,.86,.76],map:null,tint:!1,emissive:!1},Rx={color:[.68,.42,.26],map:null,tint:!1,emissive:!1},Cx={color:[.68,.42,.26],map:null,tint:!1,emissive:!1},Lx={color:[.5712,.3528,.2184],map:null,tint:!1,emissive:!1},Px={color:[.78,.82,.89],map:null,tint:!1,emissive:!1},Dx={color:[.72,.77,.85],map:null,tint:!1,emissive:!1},Ux={color:[.9,.92,.95],map:null,tint:!1,emissive:!1},Ix={color:[.84,.87,.92],map:null,tint:!1,emissive:!1},Nx={color:[.64,.69,.77],map:null,tint:!1,emissive:!1},Fx={color:[.62,.66,.74],map:null,tint:!1,emissive:!1},Ox={color:[.44,.4,.24],map:null,tint:!1,emissive:!1},kx={color:[.54,.52,.34],map:null,tint:!1,emissive:!1},zx={color:[.54,.52,.34],map:null,tint:!1,emissive:!1},Bx={color:[.4536,.4368,.2856],map:null,tint:!1,emissive:!1},Gx={color:[.78,.2,.18],map:null,tint:!1,emissive:!1},Hx={color:[.88,.76,.46],map:null,tint:!1,emissive:!1},Vx={color:[.33,.25,.2],map:null,tint:!1,emissive:!1},Wx={color:[.46,.56,.74],map:null,tint:!1,emissive:!1},Xx={color:[.62,.5,.42],map:null,tint:!1,emissive:!1},qx={color:[.52,.38,.26],map:null,tint:!1,emissive:!1},Yx={color:[.22,.15,.14],map:null,tint:!1,emissive:!1},$x={color:[.38,.25,.23],map:null,tint:!1,emissive:!1},jx={color:[.38,.25,.23],map:null,tint:!1,emissive:!1},Zx={color:[.3192,.21,.1932],map:null,tint:!1,emissive:!1},Kx={color:[.22,.17,.15],map:null,tint:!1,emissive:!1},Jx={color:[.36,.28,.24],map:null,tint:!1,emissive:!1},Qx={color:[.36,.28,.24],map:null,tint:!1,emissive:!1},eM={color:[.3024,.2352,.2016],map:null,tint:!1,emissive:!1},tM={color:[.92,.92,.94],map:null,tint:!1,emissive:!1},nM={color:[.92,.92,.94],map:null,tint:!1,emissive:!1},iM={color:[.7728,.7728,.7896],map:null,tint:!1,emissive:!1},sM={color:[.8,.78,.74],map:null,tint:!1,emissive:!1},rM={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},aM={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},oM={color:[.4368,.42,.4032],map:null,tint:!1,emissive:!1},lM={color:[.27,.22,.2],map:null,tint:!1,emissive:!1},cM={color:[.27,.22,.2],map:null,tint:!1,emissive:!1},uM={color:[.2268,.1848,.168],map:null,tint:!1,emissive:!1},fM={color:[.66,.5,.32],map:null,tint:!1,emissive:!1},hM={color:[.74,.58,.36],map:null,tint:!1,emissive:!1},dM={color:[.5544,.42,.2688],map:null,tint:!1,emissive:!1},pM={color:[.74,.76,.74],map:"Metal",tint:!1,emissive:!1},mM={color:[.46,.48,.46],map:"Metal",tint:!1,emissive:!1},_M={color:[.3,.28,.27],map:null,tint:!1,emissive:!1},gM={color:[.62,.7,.36],map:"Bark",tint:!1,emissive:!1},vM={color:[.44,.31,.21],map:"Bark",tint:!1,emissive:!1},xM={color:[.92,.91,.86],map:"Bark",tint:!1,emissive:!1},MM={color:[.3,.22,.17],map:"Bark",tint:!1,emissive:!1},yM={color:[.21,.2,.19],map:null,tint:!1,emissive:!1},SM={color:[.84,.82,.76],map:"Bark",tint:!1,emissive:!1},bM={color:[.38,.42,.46],map:"Metal",tint:!1,emissive:!1},EM={color:[.33,.43,.82],map:null,tint:!1,emissive:!1},wM={color:[.45,.58,.31],map:null,tint:!1,emissive:!1},TM={color:[.36,.48,.27],map:null,tint:!1,emissive:!1},AM={color:[.52,.64,.37],map:null,tint:!1,emissive:!1},RM={color:[.44,.52,.64],map:"Fabric",tint:!1,emissive:!1},CM={color:[.52,.12,.1],map:null,tint:!1,emissive:!1},LM={color:[.22,.36,.58],map:null,tint:!1,emissive:!1},PM={color:[.62,.22,.18],map:null,tint:!1,emissive:!1},DM={color:[.32,.22,.12],map:null,tint:!1,emissive:!1},UM={color:[.78,.7,.58],map:"Wood",tint:!1,emissive:!1},IM={color:[.42,.37,.22],map:"Leaf",tint:!1,emissive:!1},NM={color:[.8,.64,.3],map:"Metal",tint:!1,emissive:!1},FM={color:[.38,.54,.32],map:"Leaf",tint:!1,emissive:!1},OM={color:[.56,.9,.74],map:null,tint:!1,emissive:!1},kM={color:[.72,.21,.19],map:null,tint:!1,emissive:!1},zM={color:[.45,.9,1],map:"Glow",tint:!1,emissive:!0},BM={color:[.74,.3,.16],map:"Metal",tint:!1,emissive:!1},GM={color:[.36,.22,.14],map:null,tint:!1,emissive:!1},HM={color:[.72,.56,.34],map:"Fabric",tint:!1,emissive:!1},VM={color:[.36,.26,.17],map:null,tint:!1,emissive:!1},WM={color:[.62,.61,.58],map:"Stone",tint:!1,emissive:!1},XM={color:[.96,.84,.32],map:null,tint:!1,emissive:!1},qM={color:[.97,.97,.95],map:null,tint:!1,emissive:!1},YM={color:[.36,.53,.25],map:"Leaf",tint:!1,emissive:!1},$M={color:[.5,.62,.38],map:"Leaf",tint:!1,emissive:!1},jM={color:[.62,.34,.3],map:"Fabric",tint:!1,emissive:!1},ZM={color:[.94,.9,.82],map:null,tint:!1,emissive:!1},KM={color:[.96,.42,.18],map:"Glow",tint:!1,emissive:!0},JM={color:[.92,.82,.74],map:null,tint:!1,emissive:!1},QM={color:[.2,.44,.28],map:"Fabric",tint:!1,emissive:!1},ey={color:[1,.9,.48],map:"Flame",tint:!1,emissive:!0},ty={color:[1,.95,.72],map:"Glow",tint:!1,emissive:!0},ny={color:[.76,.76,.72],map:"Metal",tint:!1,emissive:!1},iy={color:[.44,.62,.3],map:null,tint:!1,emissive:!1},sy={color:[.66,.7,.52],map:null,tint:!1,emissive:!1},ry={color:[.66,.44,.26],map:null,tint:!1,emissive:!1},ay={color:[.92,.78,.36],map:null,tint:!1,emissive:!1},oy={color:[.86,.2,.2],map:null,tint:!1,emissive:!1},ly={color:[.8,.72,.62],map:null,tint:!1,emissive:!1},cy={color:[.84,.8,.62],map:"Rock",tint:!1,emissive:!1},uy={color:[.44,.42,.4],map:"Rock",tint:!1,emissive:!1},fy={color:[.52,.7,.78],map:null,tint:!1,emissive:!1},hy={color:[.16,.22,.27],map:null,tint:!1,emissive:!1},dy={color:[1,1,1],map:"Glow",tint:!1,emissive:!0},py={color:[1,.72,.3],map:"Glow",tint:!1,emissive:!0},my={color:[.46,.94,.52],map:"Glow",tint:!1,emissive:!0},_y={color:[.98,.36,.3],map:"Glow",tint:!1,emissive:!0},gy={color:[.48,.86,.96],map:"Glow",tint:!1,emissive:!0},vy={color:[.92,.74,.3],map:"Metal",tint:!1,emissive:!1},xy={color:[.3,.22,.16],map:"Fabric",tint:!1,emissive:!1},My={color:[.2,.2,.22],map:"Metal",tint:!1,emissive:!1},yy={color:[.66,.68,.7],map:"Metal",tint:!1,emissive:!1},Sy={color:[.36,.37,.4],map:"Metal",tint:!1,emissive:!1},by={color:[.36,.4,.28],map:"Metal",tint:!1,emissive:!1},Ey={color:[.84,.86,.88],map:"Metal",tint:!1,emissive:!1},wy={color:[.5,.34,.21],map:"Wood",tint:!1,emissive:!1},Ty={color:[.8,.72,.38],map:"Fabric",tint:!1,emissive:!1},Ay={color:[.66,.68,.32],map:null,tint:!1,emissive:!1},Ry={color:[.56,.6,.28],map:null,tint:!1,emissive:!1},Cy={color:[.38,.54,.28],map:"Leaf",tint:!1,emissive:!1},Ly={color:[.7,.73,.76],map:"Metal",tint:!1,emissive:!1},Py={color:[.4,.43,.47],map:"Metal",tint:!1,emissive:!1},Dy={color:[.82,.9,.96],map:null,tint:!1,emissive:!1},Uy={color:[.4,.66,.46],map:"Stone",tint:!1,emissive:!1},Iy={color:[.96,.74,.22],map:"Glow",tint:!1,emissive:!1},Ny={color:[.88,.86,.78],map:null,tint:!1,emissive:!1},Fy={color:[.94,.88,.92],map:"Leaf",tint:!1,emissive:!1},Oy={color:[.6956,.6688,.736],map:"Leaf",tint:!1,emissive:!1},ky={color:[1,1,.9752],map:"Leaf",tint:!1,emissive:!1},zy={color:[.48,.64,.31],map:"Leaf",tint:!1,emissive:!1},By={color:[.3552,.4864,.248],map:"Leaf",tint:!1,emissive:!1},Gy={color:[.576,.7424,.3286],map:"Leaf",tint:!1,emissive:!1},Hy={color:[.52,.64,.3],map:"Leaf",tint:!1,emissive:!1},Vy={color:[.3848,.4864,.24],map:"Leaf",tint:!1,emissive:!1},Wy={color:[.624,.7424,.318],map:"Leaf",tint:!1,emissive:!1},Xy={color:[.25,.43,.27],map:"Leaf",tint:!1,emissive:!1},qy={color:[.185,.3268,.216],map:"Leaf",tint:!1,emissive:!1},Yy={color:[.3,.4988,.2862],map:"Leaf",tint:!1,emissive:!1},$y={color:[.29,.45,.27],map:"Leaf",tint:!1,emissive:!1},jy={color:[.2146,.342,.216],map:"Leaf",tint:!1,emissive:!1},Zy={color:[.348,.522,.2862],map:"Leaf",tint:!1,emissive:!1},Ky={color:[.82,.88,.62],map:"Leaf",tint:!1,emissive:!1},Jy={color:[.6068,.6688,.496],map:"Leaf",tint:!1,emissive:!1},Qy={color:[.984,1,.6572],map:"Leaf",tint:!1,emissive:!1},eS={color:[.34,.57,.27],map:"Leaf",tint:!1,emissive:!1},tS={color:[.2516,.4332,.216],map:"Leaf",tint:!1,emissive:!1},nS={color:[.408,.6612,.2862],map:"Leaf",tint:!1,emissive:!1},iS={color:[.8,.43,.19],map:"Leaf",tint:!1,emissive:!1},sS={color:[.592,.3268,.152],map:"Leaf",tint:!1,emissive:!1},rS={color:[.96,.4988,.2014],map:"Leaf",tint:!1,emissive:!1},aS={color:[.38,.54,.25],map:"Leaf",tint:!1,emissive:!1},oS={color:[.2812,.4104,.2],map:"Leaf",tint:!1,emissive:!1},lS={color:[.456,.6264,.265],map:"Leaf",tint:!1,emissive:!1},cS={color:[.23,.41,.25],map:"Leaf",tint:!1,emissive:!1},uS={color:[.1702,.3116,.2],map:"Leaf",tint:!1,emissive:!1},fS={color:[.276,.4756,.265],map:"Leaf",tint:!1,emissive:!1},hS={color:[.44,.6,.27],map:"Leaf",tint:!1,emissive:!1},dS={color:[.3256,.456,.216],map:"Leaf",tint:!1,emissive:!1},pS={color:[.528,.696,.2862],map:"Leaf",tint:!1,emissive:!1},mS={color:[.31,.51,.23],map:"Leaf",tint:!1,emissive:!1},_S={color:[.2294,.3876,.184],map:"Leaf",tint:!1,emissive:!1},gS={color:[.372,.5916,.2438],map:"Leaf",tint:!1,emissive:!1},vS={color:[.42,.57,.31],map:"Leaf",tint:!1,emissive:!1},xS={color:[.3108,.4332,.248],map:"Leaf",tint:!1,emissive:!1},MS={color:[.504,.6612,.3286],map:"Leaf",tint:!1,emissive:!1},yS={color:[.9,.88,.82],map:"Fabric",tint:!1,emissive:!1},SS={color:[.5,.34,.21],map:"Wood",tint:!1,emissive:!1},bS={color:[.2,.16,.14],map:"Wood",tint:!1,emissive:!1},ES={color:[.7,.26,.24],map:null,tint:!1,emissive:!1},wS={color:[.92,.92,.9],map:null,tint:!1,emissive:!1},TS={color:[.6,.62,.65],map:"Metal",tint:!1,emissive:!1},AS={color:[.32,.33,.36],map:"Metal",tint:!1,emissive:!1},RS={color:[.96,.96,.94],map:null,tint:!1,emissive:!1},CS={color:[.29,.43,.23],map:null,tint:!1,emissive:!1},LS={color:[.3,.48,.72],map:"Metal",tint:!1,emissive:!1},PS={color:[.3,.4,.52],map:"Metal",tint:!1,emissive:!1},DS={color:[.78,.74,.62],map:"Metal",tint:!1,emissive:!1},US={color:[.4,.42,.3],map:"Metal",tint:!1,emissive:!1},IS={color:[.56,.24,.2],map:"Metal",tint:!1,emissive:!1},NS={color:[.92,.9,.82],map:null,tint:!1,emissive:!1},FS={color:[.96,.57,.21],map:null,tint:!1,emissive:!1},OS={color:[.88,.52,.74],map:null,tint:!1,emissive:!1},kS={color:[.86,.23,.25],map:null,tint:!1,emissive:!1},zS={color:[.96,.96,.91],map:null,tint:!1,emissive:!1},BS={color:[.97,.82,.24],map:null,tint:!1,emissive:!1},GS={color:[.92,.88,.8],map:null,tint:!1,emissive:!1},HS={color:[.98,.97,.94],map:"Fabric",tint:!1,emissive:!1},VS={color:[.1,.08,.07],map:null,tint:!1,emissive:!1},WS={color:[.7,.8,.84],map:"Metal",tint:!1,emissive:!1},XS={color:[.56,.34,.16],map:null,tint:!1,emissive:!1},qS={color:[.9,.86,.66],map:null,tint:!1,emissive:!1},YS={color:[.72,.56,.36],map:null,tint:!1,emissive:!1},$S={color:[.82,.18,.16],map:null,tint:!1,emissive:!1},jS={color:[.94,.92,.84],map:null,tint:!1,emissive:!1},ZS={color:[.54,.7,.33],map:null,tint:!1,emissive:!1},KS={color:[.13,.13,.14],map:null,tint:!1,emissive:!1},JS={color:[.5,.32,.22],map:"Metal",tint:!1,emissive:!1},QS={color:[.3,.21,.16],map:"Metal",tint:!1,emissive:!1},eb={color:[.64,.44,.3],map:"Metal",tint:!1,emissive:!1},tb={color:[.74,.64,.46],map:"Fabric",tint:!1,emissive:!1},nb={color:[.56,.47,.33],map:"Fabric",tint:!1,emissive:!1},ib={color:[.4,.44,.3],map:"Metal",tint:!1,emissive:!1},sb={color:[.42,.53,.25],map:"Leaf",tint:!1,emissive:!1},rb={color:[.31,.44,.22],map:"Leaf",tint:!1,emissive:!1},ab={color:[.82,.84,.86],map:"Metal",tint:!1,emissive:!1},ob={color:[.4,.38,.36],map:"Rock",tint:!1,emissive:!1},lb={color:[.52,.47,.42],map:"Metal",tint:!1,emissive:!1},cb={color:[1,1,1],map:"Soil",tint:!1,emissive:!1},ub={color:[1,1,1],map:"Solar",tint:!1,emissive:!1},fb={color:[.7,.72,.75],map:"Metal",tint:!1,emissive:!1},hb={color:[.58,.56,.52],map:"Metal",tint:!1,emissive:!1},db={color:[.36,.5,.24],map:null,tint:!1,emissive:!1},pb={color:[.54,.54,.55],map:"Stone",tint:!1,emissive:!1},mb={color:[.34,.26,.18],map:"Fabric",tint:!1,emissive:!1},_b={color:[.86,.82,.72],map:"Fabric",tint:!1,emissive:!1},gb={color:[1,1,1],map:"{stuff}",tint:!0,emissive:!1},vb={color:[.95,.92,.84],map:"Fabric",tint:!0,emissive:!1},xb={color:[.7,.67,.6],map:"Fabric",tint:!0,emissive:!1},Mb={color:[1,1,1],map:"Stone",tint:!0,emissive:!1},yb={color:[.8,.8,.8],map:"Stone",tint:!0,emissive:!1},Sb={color:[.8,.8,.8],map:"{stuff}",tint:!0,emissive:!1},bb={color:[.62,.62,.62],map:"{stuff}",tint:!0,emissive:!1},Eb={color:[.92,.92,.92],map:"Fabric",tint:!0,emissive:!1},wb={color:[.72,.72,.72],map:"Fabric",tint:!0,emissive:!1},Tb={color:[1,1,1],map:null,tint:!0,emissive:!1},Ab={color:[.78,.78,.78],map:null,tint:!0,emissive:!1},Rb={color:[1,1,1],map:null,tint:!0,emissive:!1},Cb={color:[.8,.8,.8],map:null,tint:!0,emissive:!1},Lb={color:[.6,.6,.6],map:null,tint:!0,emissive:!1},Pb={color:[1.12,1.12,1.12],map:null,tint:!0,emissive:!1},Db={color:[1,1,1],map:"Rock",tint:!0,emissive:!1},Ub={color:[1,1,1],map:"Fabric",tint:!0,emissive:!1},Ib={color:[.92,.8,.24],map:"Metal",tint:!1,emissive:!1},Nb={color:[.44,.31,.21],map:"Bark",tint:!1,emissive:!1},Fb={color:[.92,.91,.86],map:"Bark",tint:!1,emissive:!1},Ob={color:[.84,.82,.76],map:"Bark",tint:!1,emissive:!1},kb={color:[.36,.44,.32],map:"Metal",tint:!1,emissive:!1},zb={color:[.14,.19,.24],map:null,tint:!1,emissive:!1},Bb={color:[.3,.62,.7],map:null,tint:!1,emissive:!1},Gb={color:[.86,.3,.2],map:"Metal",tint:!1,emissive:!1},Hb={color:[.32,.52,.62],map:null,tint:!1,emissive:!1},Vb={color:[.2,.34,.4],map:null,tint:!1,emissive:!1},Wb={color:[.78,.62,.4],map:"Wood",tint:!1,emissive:!1},Xb={agave:q_,an_alpaca_body:Y_,an_alpaca_head:$_,an_alpaca_leg:j_,an_bear_grizzly_body:Z_,an_bear_grizzly_head:K_,an_bear_grizzly_leg:J_,an_bear_grizzly_muzzle:Q_,an_bear_polar_body:e0,an_bear_polar_head:t0,an_bear_polar_leg:n0,an_bison_acc:i0,an_bison_body:s0,an_bison_head:r0,an_bison_leg:a0,an_boomalope_acc:o0,an_boomalope_body:l0,an_boomalope_head:c0,an_boomalope_leg:u0,an_boomrat_acc:f0,an_boomrat_body:h0,an_boomrat_head:d0,an_boomrat_leg:p0,an_capybara_body:m0,an_capybara_head:_0,an_capybara_leg:g0,an_caribou_belly:v0,an_caribou_body:x0,an_caribou_head:M0,an_caribou_leg:y0,an_cassowary_acc:S0,an_cassowary_beak:b0,an_cassowary_body:E0,an_cassowary_head:w0,an_cassowary_leg:T0,an_cat_belly:A0,an_cat_body:R0,an_cat_head:C0,an_cat_leg:L0,an_chicken_acc:P0,an_chicken_beak:D0,an_chicken_body:U0,an_chicken_head:I0,an_chicken_leg:N0,an_chinchilla_belly:F0,an_chinchilla_body:O0,an_chinchilla_head:k0,an_chinchilla_leg:z0,an_cobra_belly:B0,an_cobra_body:G0,an_cobra_hood:H0,an_cougar_belly:V0,an_cougar_body:W0,an_cougar_head:X0,an_cougar_leg:q0,an_cow_acc:Y0,an_cow_body:$0,an_cow_head:j0,an_cow_leg:Z0,an_cow_muzzle:K0,an_dark:J0,an_deer_belly:Q0,an_deer_body:eg,an_deer_head:tg,an_deer_leg:ng,an_donkey_acc:ig,an_donkey_belly:sg,an_donkey_body:rg,an_donkey_head:ag,an_donkey_leg:og,an_donkey_muzzle:lg,an_dromedary_body:cg,an_dromedary_head:ug,an_dromedary_leg:fg,an_duck_beak:hg,an_duck_belly:dg,an_duck_body:pg,an_duck_head:mg,an_duck_leg:_g,an_elephant_body:gg,an_elephant_head:vg,an_elephant_leg:xg,an_elk_acc:Mg,an_elk_belly:yg,an_elk_body:Sg,an_elk_head:bg,an_elk_leg:Eg,an_emu_beak:wg,an_emu_body:Tg,an_emu_head:Ag,an_emu_leg:Rg,an_fox_arctic_body:Cg,an_fox_arctic_head:Lg,an_fox_arctic_leg:Pg,an_fox_fennec_belly:Dg,an_fox_fennec_body:Ug,an_fox_fennec_head:Ig,an_fox_fennec_leg:Ng,an_fox_red_acc:Fg,an_fox_red_belly:Og,an_fox_red_body:kg,an_fox_red_head:zg,an_fox_red_leg:Bg,an_gazelle_belly:Gg,an_gazelle_body:Hg,an_gazelle_head:Vg,an_gazelle_leg:Wg,an_goat_body:Xg,an_goat_head:qg,an_goat_leg:Yg,an_goose_acc:$g,an_goose_beak:jg,an_goose_body:Zg,an_goose_head:Kg,an_goose_leg:Jg,an_guineapig_belly:Qg,an_guineapig_body:ev,an_guineapig_head:tv,an_guineapig_leg:nv,an_hare_body:iv,an_hare_head:sv,an_hare_leg:rv,an_hare_tail:av,an_hoof:ov,an_horn:lv,an_horse_acc:cv,an_horse_body:uv,an_horse_head:fv,an_horse_leg:hv,an_husky_belly:dv,an_husky_body:pv,an_husky_head:mv,an_husky_leg:_v,an_husky_muzzle:gv,an_ibex_belly:vv,an_ibex_body:xv,an_ibex_head:Mv,an_ibex_leg:yv,an_iguana_acc:Sv,an_iguana_belly:bv,an_iguana_body:Ev,an_iguana_head:wv,an_iguana_leg:Tv,an_labrador_body:Av,an_labrador_head:Rv,an_labrador_leg:Cv,an_lynx_belly:Lv,an_lynx_body:Pv,an_lynx_head:Dv,an_lynx_leg:Uv,an_megascarab_body:Iv,an_megascarab_leg:Nv,an_megasloth_body:Fv,an_megasloth_head:Ov,an_megasloth_leg:kv,an_megaspider_acc:zv,an_megaspider_body:Bv,an_megaspider_leg:Gv,an_monkey_body:Hv,an_monkey_head:Vv,an_monkey_leg:Wv,an_monkey_muzzle:Xv,an_muffalo_body:qv,an_muffalo_head:Yv,an_muffalo_leg:$v,an_ostrich_beak:jv,an_ostrich_body:Zv,an_ostrich_head:Kv,an_ostrich_leg:Jv,an_ostrich_tail:Qv,an_panther_body:ex,an_panther_head:tx,an_panther_leg:nx,an_pig_body:ix,an_pig_head:sx,an_pig_leg:rx,an_pig_muzzle:ax,an_raccoon_acc:ox,an_raccoon_body:lx,an_raccoon_head:cx,an_raccoon_leg:ux,an_raccoon_muzzle:fx,an_rat_body:hx,an_rat_head:dx,an_rat_leg:px,an_rat_tail:mx,an_rhinoceros_body:_x,an_rhinoceros_head:gx,an_rhinoceros_leg:vx,an_sheep_body:xx,an_sheep_head:Mx,an_sheep_leg:yx,an_snowhare_body:Sx,an_snowhare_head:bx,an_snowhare_leg:Ex,an_spelopede_body:wx,an_spelopede_leg:Tx,an_squirrel_belly:Ax,an_squirrel_body:Rx,an_squirrel_head:Cx,an_squirrel_leg:Lx,an_thrumbo_acc:Px,an_thrumbo_belly:Dx,an_thrumbo_body:Ux,an_thrumbo_head:Ix,an_thrumbo_leg:Nx,an_thrumbo_muzzle:Fx,an_tortoise_acc:Ox,an_tortoise_body:kx,an_tortoise_head:zx,an_tortoise_leg:Bx,an_turkey_acc:Gx,an_turkey_beak:Hx,an_turkey_body:Vx,an_turkey_head:Wx,an_turkey_leg:Xx,an_turkey_tail:qx,an_warg_acc:Yx,an_warg_body:$x,an_warg_head:jx,an_warg_leg:Zx,an_wildboar_acc:Kx,an_wildboar_body:Jx,an_wildboar_head:Qx,an_wildboar_leg:eM,an_wolf_arctic_body:tM,an_wolf_arctic_head:nM,an_wolf_arctic_leg:iM,an_wolf_timber_belly:sM,an_wolf_timber_body:rM,an_wolf_timber_head:aM,an_wolf_timber_leg:oM,an_yak_body:lM,an_yak_head:cM,an_yak_leg:uM,an_yorkie_body:fM,an_yorkie_head:hM,an_yorkie_leg:dM,armor:pM,armor_dark:mM,ash:_M,bamboo:gM,bark:vM,bark_birch:xM,bark_dark:MM,bark_mark:yM,bark_pale:SM,battery:bM,berry:EM,blade_a:wM,blade_b:TM,blade_c:AM,blanket:RM,blood:CM,book_blue:LM,book_red:PM,bottle:DM,bowl:UM,bramble:IM,brass:NM,cactus:FM,cap_glow:OM,cap_red:kM,charge:zM,chemfuel:BM,chocolate:GM,cloth_roll:HM,coconut:VM,concrete:WM,corn:XM,cotton:qM,crop_leaf:YM,crop_pale:$M,cushion:jM,egg:ZM,ember:KM,fat:JM,felt:QM,flame:ey,flame_core:ty,foil:ny,food_green:iy,food_paste:sy,food_stew:ry,food_yellow:ay,fruit_red:oy,fungus:ly,geyser_crust:cy,geyser_rock:uy,glass:fy,glass_dark:hy,glow:dy,glow_amber:py,glow_green:my,glow_red:_y,glow_screen:gy,gold:vy,grip:xy,gun_dark:My,gun_light:yy,gun_metal:Sy,gun_olive:by,gun_white:Ey,gun_wood:wy,hay:Ty,hay_a:Ay,hay_b:Ry,herb_green:Cy,hull:Ly,hull_dark:Py,ice:Dy,jade:Uy,jelly:Iy,label:Ny,leaf_anima:Fy,leaf_anima_dk:Oy,leaf_anima_lt:ky,leaf_bamboo:zy,leaf_bamboo_dk:By,leaf_bamboo_lt:Gy,leaf_birch:Hy,leaf_birch_dk:Vy,leaf_birch_lt:Wy,leaf_cypress:Xy,leaf_cypress_dk:qy,leaf_cypress_lt:Yy,leaf_drago:$y,leaf_drago_dk:jy,leaf_drago_lt:Zy,leaf_gauranlen:Ky,leaf_gauranlen_dk:Jy,leaf_gauranlen_lt:Qy,leaf_jungle:eS,leaf_jungle_dk:tS,leaf_jungle_lt:nS,leaf_maple:iS,leaf_maple_dk:sS,leaf_maple_lt:rS,leaf_oak:aS,leaf_oak_dk:oS,leaf_oak_lt:lS,leaf_pine:cS,leaf_pine_dk:uS,leaf_pine_lt:fS,leaf_poplar:hS,leaf_poplar_dk:dS,leaf_poplar_lt:pS,leaf_teak:mS,leaf_teak_dk:_S,leaf_teak_lt:gS,leaf_willow:vS,leaf_willow_dk:xS,leaf_willow_lt:MS,linen:yS,log:SS,log_burnt:bS,meat:ES,medicine:wS,metal:TS,metal_dark:AS,milk:RS,moss:CS,neutro:LS,paint_blue:PS,paint_cream:DS,paint_olive:US,paint_red:IS,paper:NS,petal_orange:FS,petal_pink:OS,petal_red:kS,petal_white:zS,petal_yellow:BS,pill:GS,pillow:HS,pit:VS,plasteel:WS,pod:XS,pod_pale:qS,potato:YS,red_cross:$S,rice:jS,rice_a:ZS,rubber:KS,rust:JS,rust_dark:QS,rust_light:eb,sack:tb,sack_dark:nb,shell_olive:ib,shrub:sb,shrub_dark:rb,silver:ab,slag:ob,slag_metal:lb,soil:cb,solar:ub,solar_frame:fb,steam_pipe:hb,stem:db,stone:pb,strap:mb,string:_b,stuff:gb,stuff_bag:vb,stuff_bag_dark:xb,stuff_block:Mb,stuff_block_dark:yb,stuff_dark:Sb,stuff_deep:bb,stuff_fabric:Eb,stuff_fabric_dark:wb,stuff_herb:Tb,stuff_herb_dark:Ab,stuff_plain:Rb,stuff_plain_dark:Cb,stuff_plain_deep:Lb,stuff_plain_light:Pb,stuff_rock:Db,stuff_wool:Ub,terminal:Ib,twig_bark:Nb,twig_bark_birch:Fb,twig_bark_pale:Ob,uranium:kb,visor:zb,visor_lit:Bb,warning:Gb,water:Hb,water_dark:Vb,wood_end:Wb},qb=4,Xl=new Set;function Ri(i){Xl.has(i)||(Xl.add(i),console.warn(i))}async function Xa(i){let e="network error";for(let t=0;t<qb;t++){t>0&&await jb(200*2**(t-1));try{const n=await fetch(i);if(n.ok)return n;if(e=String(n.status),n.status<500)break}catch(n){e=n instanceof Error&&n.message?n.message:"network error"}}throw new Error(e)}async function Yb(i,e,t){if(i.length===0)return;let n=0;const s=Math.min(Math.max(1,e),i.length);await Promise.all(Array.from({length:s},async()=>{for(;n<i.length;){const r=n;n+=1,await t(i[r],r)}}))}async function $b(i){if(i.length>=2&&i[0]===31&&i[1]===139){const e=new Uint8Array(i.byteLength);e.set(i);const t=new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"));return new Response(t).text()}return new TextDecoder().decode(i)}function jb(i){return new Promise(e=>{window.setTimeout(e,i)})}const ql=Xb,Zb={Wood:new Oe(.86,.62,.38),Stone:new Oe(.76,.74,.7),Metal:new Oe(.74,.78,.84),Fabric:new Oe(.9,.88,.84)},Kb=es,Pu=new Set;function Jb(i){const t=i.indexOf("textures/");t>=0&&Pu.add(i.slice(t))}function Qb(){return[...Pu]}class eE{constructor(){Re(this,"textures",new Map);Re(this,"cache",new Map);Re(this,"flicker",[]);const e=new Set;for(const t of Object.values(ql))t.map&&t.map!=="{stuff}"&&e.add(t.map);for(const t of["Wood","Stone","Metal","Fabric"])e.add(t);for(const t of e)this.textures.set(t,this.loadSwatch(t))}get(e,t,n){const s=ql[e];if(!s)return console.warn(`IsoRim material "${e}" is not in the catalog`),this.fallback(e);const r=s.tint?n?n.getHexString():t:"",o=s.map==="{stuff}"?t:s.map,a=`${e}|${o??""}|${r}`,l=this.cache.get(a);if(l)return l;const c=new Oe(s.color[0],s.color[1],s.color[2]);s.tint&&c.multiply(n??Zb[t]);const u=new vt({color:c,map:o?this.textures.get(o)??null:null,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});return s.emissive&&(u.emissive=c.clone(),u.emissiveIntensity=.7,this.flicker.push(u)),this.cache.set(a,u),u}loadSwatch(e){const t=`${Kb}/textures/swatches/${e}.png`;return Vt(t,!0)}fallback(e){const t=`missing|${e}`,n=this.cache.get(t);if(n)return n;const s=new vt({color:16711850});return this.cache.set(t,s),s}}const tE=6,Yl=new Map,qi=[];let Vi=0,qa=[];function Vt(i,e=!1){Jb(i);const t=Yl.get(i);if(t)return t;const n=sE(e);return Yl.set(i,n),Ya(1,"Loading textures…"),iE(async()=>{try{const s=await Xa(i),r=await createImageBitmap(await s.blob());n.image=r,n.needsUpdate=!0}catch(s){const r=s instanceof Error&&s.message?s.message:"failed";Ri(`Could not load ${i} (${r})`)}finally{$a("Loading textures…")}}),n}function nE(){return Vi===0&&qi.length===0?Promise.resolve():new Promise(i=>{qa.push(i)})}function iE(i){qi.push(i),Du()}function Du(){for(;Vi<tE&&qi.length>0;){const i=qi.shift();if(!i)break;Vi+=1,i().finally(()=>{if(Vi-=1,qi.length>0)Du();else if(Vi===0){const e=qa;qa=[];for(const t of e)t()}})}}function sE(i){const e=document.createElement("canvas");e.width=2,e.height=2;const t=e.getContext("2d");t&&(t.fillStyle="#b7aa96",t.fillRect(0,0,2,2));const n=new So(e);return n.colorSpace=ct,n.anisotropy=8,i&&(n.wrapS=Un,n.wrapT=Un),n}async function rE(i){const e=new Set(i),t=new Map,n=`${es}/packs/index.json`;let s=[];try{const o=await Xa(n);s=JSON.parse(await o.text()).packs}catch(o){return Ri(`Could not load ${n} (${Jr(o)})`),$l(e,t),t}Ya(s.length,`Loading models… 0 of ${s.length}`);let r=0;return await Yb(s,2,async o=>{const a=`${es}/packs/${o}`;try{const l=await Xa(a),c=new Uint8Array(await l.arrayBuffer()),u=JSON.parse(await $b(c));for(const[f,h]of Object.entries(u))if(!(!e.has(f)||t.has(f)))try{t.set(f,F_(h))}catch(m){Ri(`Could not parse ${f}.obj (${Jr(m)})`)}}catch(l){Ri(`Could not load ${a} (${Jr(l)})`)}finally{r+=1,$a(`Loading models… ${r} of ${s.length}`)}}),$l(e,t),t}function $l(i,e){const t=[...i].filter(n=>!e.has(n)).sort();t.length===1?Ri(`Missing model ${t[0]}.obj`):t.length>1&&Ri(`Missing ${t.length} models, including ${t[0]}.obj`)}function Jr(i){return i instanceof Error&&i.message?i.message:"failed"}const Yi=`${es}/textures`,yi=1.2,aE=1.25,Ot={planks:{side:"walls/PlanksSide.png",top:"walls/PlanksTop.png",color:12880466,height:yi},bricks:{side:"walls/BricksSide.png",top:"walls/BricksTop.png",color:11889224,height:yi},stone:{side:"walls/SmoothStoneSide.png",top:"walls/SmoothStoneTop.png",color:13157046,height:yi},metal:{side:"walls/MetalSide.png",top:"walls/MetalTop.png",color:9345188,height:yi},rock:{side:"walls/RockSide.png",top:"walls/RockTop.png",color:10129798,height:yi},rockOre:{side:"walls/RockOreSide.png",top:"walls/RockOreTop.png",color:9072728,height:yi},sandbags:{side:"walls/SandbagsSide.png",top:"walls/SandbagsTop.png",color:12891274,height:.55}},oE={terracotta:{file:"roofs/Terracotta.png",color:12870204},thatch:{file:"roofs/Thatch.png",color:12886362},tin:{file:"roofs/Tin.png",color:9345188},slate:{file:"roofs/Slate.png",color:6186864}},lE=new Set(["woodFloor","stoneTile","carpet","concrete","flagstone","metalFloor","sterile","roughHewn"]),cE=["rock-sides","rock-tops","rockOre-sides","rockOre-tops"];function uE(i,e=new Set){const t=new Ut;t.name="structures";const n=Uu(i,e),s=[],r={},o={};for(const f of Object.keys(Ot))r[f]=Vt(`${Yi}/${Ot[f].side}`,!0),o[f]=Vt(`${Yi}/${Ot[f].top}`,!0);const a=hE(i),l=new Map,c=new Map,u=(f,h)=>{let m=f.get(h);return m||(m={pos:[],nrm:[],uv:[]},f.set(h,m)),m};for(const f of i.walls){const{x:h,z:m,kind:_}=f;if((_==="rock"||_==="rockOre")&&e.has(`${h},${m}`))continue;const g=Ot[_].height,p=(i.elevation[m*i.width+h]??0)*Cn;if(_==="rock"||_==="rockOre"){bo(h,m,p,g,n,u(l,_)),Eo(h,m,p+g,u(c,_));continue}const d=new je(pE(h,m,p,g,n),new vt({color:Ot[_].color,map:r[_]})),y=new je(mE(h,m,p+g),new vt({color:Ot[_].color,map:o[_]}));d.castShadow=!0,d.receiveShadow=!0,y.castShadow=!0,y.receiveShadow=!0;const v=new Ut;v.add(d,y),t.add(v);const b=dE(h,m,a);b&&s.push({object:v,side:b})}for(const[f,h]of l){if(h.pos.length===0)continue;const m=new je(Mt(xt,h.pos,h.nrm,h.uv),new vt({color:Ot[f].color,map:r[f]}));m.castShadow=!1,m.receiveShadow=!0,m.frustumCulled=!0,m.name=`${f}-sides`,t.add(m)}for(const[f,h]of c){if(h.pos.length===0)continue;const m=new je(Mt(xt,h.pos,h.nrm,h.uv),new vt({color:Ot[f].color,map:o[f]}));m.castShadow=!1,m.receiveShadow=!0,m.frustumCulled=!0,m.name=`${f}-tops`,t.add(m)}for(const f of i.roofs){const h=oE[f.style],m=Vt(`${Yi}/${h.file}`,!0),_=new vt({color:h.color,map:m,side:Gt}),g=_E(f.x,f.z,f.w,f.d,f.ridge);for(const p of g){const d=new je(p.geometry,_);d.castShadow=!0,d.receiveShadow=!0,t.add(d),s.push({object:d,side:p.side})}}return{group:t,walls:n,cutaway:s}}function fE(i,e,t){for(const c of cE){const u=e.getObjectByName(c);if(!(u instanceof je))continue;e.remove(u),u.geometry.dispose();const f=u.material;f instanceof Bn&&f.dispose()}const n=Uu(i,t),s={},r={};for(const c of["rock","rockOre"])s[c]=Vt(`${Yi}/${Ot[c].side}`,!0),r[c]=Vt(`${Yi}/${Ot[c].top}`,!0);const o=new Map,a=new Map,l=(c,u)=>{let f=c.get(u);return f||(f={pos:[],nrm:[],uv:[]},c.set(u,f)),f};for(const c of i.walls){if(c.kind!=="rock"&&c.kind!=="rockOre"||t.has(`${c.x},${c.z}`))continue;const u=Ot[c.kind].height,f=(i.elevation[c.z*i.width+c.x]??0)*Cn;bo(c.x,c.z,f,u,n,l(o,c.kind)),Eo(c.x,c.z,f+u,l(a,c.kind))}for(const[c,u]of o){if(u.pos.length===0)continue;const f=new je(Mt(xt,u.pos,u.nrm,u.uv),new vt({color:Ot[c].color,map:s[c]}));f.castShadow=!1,f.receiveShadow=!0,f.frustumCulled=!0,f.name=`${c}-sides`,e.add(f)}for(const[c,u]of a){if(u.pos.length===0)continue;const f=new je(Mt(xt,u.pos,u.nrm,u.uv),new vt({color:Ot[c].color,map:r[c]}));f.castShadow=!1,f.receiveShadow=!0,f.frustumCulled=!0,f.name=`${c}-tops`,e.add(f)}}function Uu(i,e){const t=new Set;for(const n of i.walls)(n.kind==="rock"||n.kind==="rockOre")&&e.has(`${n.x},${n.z}`)||t.add(`${n.x},${n.z}`);return t}function hE(i){const e=new Set;for(let t=0;t<i.height;t++)for(let n=0;n<i.width;n++){const s=i.terrain[t*i.width+n];lE.has(s)&&e.add(`${n},${t}`)}return e}function dE(i,e,t){const n=[];return t.has(`${i},${e+1}`)&&!t.has(`${i},${e-1}`)&&n.push("s"),t.has(`${i},${e-1}`)&&!t.has(`${i},${e+1}`)&&n.push("n"),t.has(`${i-1},${e}`)&&!t.has(`${i+1},${e}`)&&n.push("e"),t.has(`${i+1},${e}`)&&!t.has(`${i-1},${e}`)&&n.push("w"),n.length===1?n[0]:n[0]??null}function pE(i,e,t,n,s){const r={pos:[],nrm:[],uv:[]};return bo(i,e,t,n,s,r),Mt(xt,r.pos,r.nrm,r.uv)}function bo(i,e,t,n,s,r){const{pos:o,nrm:a,uv:l}=r,c=t+n,u=n/aE,f=[];s.has(`${i},${e-1}`)||f.push({nx:0,nz:-1,u0:i*.5,u1:(i+1)*.5,corners:[[i,t,e],[i+1,t,e],[i+1,c,e],[i,c,e]]}),s.has(`${i},${e+1}`)||f.push({nx:0,nz:1,u0:(i+1)*.5,u1:i*.5,corners:[[i+1,t,e+1],[i,t,e+1],[i,c,e+1],[i+1,c,e+1]]}),s.has(`${i+1},${e}`)||f.push({nx:1,nz:0,u0:e*.5,u1:(e+1)*.5,corners:[[i+1,t,e],[i+1,t,e+1],[i+1,c,e+1],[i+1,c,e]]}),s.has(`${i-1},${e}`)||f.push({nx:-1,nz:0,u0:(e+1)*.5,u1:e*.5,corners:[[i,t,e+1],[i,t,e],[i,c,e],[i,c,e+1]]});for(const h of f)$t(o,a,l,h.corners,[[h.u0,0],[h.u1,0],[h.u1,u],[h.u0,u]])}function mE(i,e,t){const n={pos:[],nrm:[],uv:[]};return Eo(i,e,t,n),Mt(xt,n.pos,n.nrm,n.uv)}function Eo(i,e,t,n){const{pos:s,nrm:r,uv:o}=n;$t(s,r,o,[[i,t,e],[i,t,e+1],[i+1,t,e+1],[i+1,t,e]],[[i*.5,e*.5],[i*.5,(e+1)*.5],[(i+1)*.5,(e+1)*.5],[(i+1)*.5,e*.5]])}function _E(i,e,t,n,s){const l=i-.18,c=i+t+.18,u=e-.18,f=e+n+.18,h=[];if(s==="x"){const m=(u+f)/2;h.push(Bs("s",[[l,1.28,u],[l,1.92,m],[c,1.92,m],[c,1.28,u]],l,c,u,m)),h.push(Bs("n",[[c,1.28,f],[c,1.92,m],[l,1.92,m],[l,1.28,f]],l,c,m,f))}else{const m=(l+c)/2;h.push(Bs("w",[[l,1.28,f],[m,1.92,f],[m,1.92,u],[l,1.28,u]],u,f,l,m)),h.push(Bs("e",[[c,1.28,u],[m,1.92,u],[m,1.92,f],[c,1.28,f]],u,f,m,c))}return h}function Bs(i,e,t,n,s,r){const o=[],a=[],l=[],c=e[1][0]-e[0][0],u=e[1][2]-e[0][2],f=e[2][0]-e[0][0],h=e[2][2]-e[0][2],m=u*f-c*h,_=m>=0?e:[e[0],e[3],e[2],e[1]],g=m>=0?[[t*.5,s*.5],[t*.5,r*.5],[n*.5,r*.5],[n*.5,s*.5]]:[[t*.5,s*.5],[n*.5,s*.5],[n*.5,r*.5],[t*.5,r*.5]];return $t(o,a,l,_,g),{geometry:Mt(xt,o,a,l),side:i}}function gE(i,e,t){return i==="s"?e:i==="n"?!e:i==="e"?t:!t}function vE(i,e,t,n){const s=i.prevX[e]+(i.x[e]-i.prevX[e])*t,r=i.prevZ[e]+(i.z[e]-i.prevZ[e])*t;let o=xE(i.prevYaw[e],i.yaw[e],t);const a=i.moving[e]===1;a||(o+=Math.sin(n*1.4+e)*.12);const l=i.prevPhase[e]+(i.phase[e]-i.prevPhase[e])*t,c=a?Math.abs(Math.sin(l))*.04:0;return{x:s,z:r,yaw:o,bob:c}}function xE(i,e,t){const n=Math.atan2(Math.sin(e-i),Math.cos(e-i));return i+n*t}const Qn=`${es}/textures`,ME=1.25,js={grass:{file:"ground/Grass.png",color:16777215,repeat:.28,raised:!1},grassRich:{file:"ground/GrassRich.png",color:16777215,repeat:.28,raised:!1},soil:{file:"ground/Soil.png",color:16777215,repeat:.28,raised:!1},soilRich:{file:"ground/SoilRich.png",color:16777215,repeat:.28,raised:!1},dirt:{file:"ground/PackedDirt.png",color:16777215,repeat:.32,raised:!1},sand:{file:"ground/Sand.png",color:16777215,repeat:.28,raised:!1},mud:{file:"ground/Mud.png",color:16777215,repeat:.32,raised:!1},marsh:{file:"ground/Marsh.png",color:16777215,repeat:.32,raised:!1},moss:{file:"ground/Moss.png",color:16777215,repeat:.32,raised:!1},gravel:{file:"ground/Gravel.png",color:16777215,repeat:.32,raised:!1},ice:{file:"ground/Ice.png",color:16777215,repeat:.28,raised:!1},roughHewn:{file:"ground/RoughHewn.png",color:9076852,repeat:.5,raised:!0},roughStone:{file:"ground/RoughStone.png",color:10262671,repeat:.4,raised:!1},smoothStone:{file:"ground/SmoothStone.png",color:13157564,repeat:.4,raised:!1},woodFloor:{file:"ground/FloorWood.png",color:11565640,repeat:.5,raised:!0},stoneTile:{file:"ground/FloorStoneTile.png",color:12761252,repeat:.5,raised:!0},carpet:{file:"ground/FloorCarpet.png",color:9256261,repeat:.5,raised:!0},concrete:{file:"ground/FloorConcrete.png",color:12040116,repeat:.45,raised:!0},flagstone:{file:"ground/FloorFlagstone.png",color:10721932,repeat:.5,raised:!0},metalFloor:{file:"ground/FloorMetal.png",color:10135216,repeat:.5,raised:!0},paved:{file:"ground/FloorPaved.png",color:9276036,repeat:.4,raised:!0},sterile:{file:"ground/FloorSterile.png",color:14015960,repeat:.5,raised:!0}};function jl(i,e=new Set){const t=new Ut;t.name="terrain";const n=new Set,s=new Map,r=pn(),o=pn(),a=pn(),l=pn(),c=pn(),u=pn(),f=pn(),h=new Set(i.walls.filter(y=>y.kind==="rockOre").map(y=>`${y.x},${y.z}`));let m=!1;for(let y=0;y<i.height;y++)for(let v=0;v<i.width;v++){const b=y*i.width+v,C=i.terrain[b],R=i.elevation[b]??0;if(R>0&&(m=!0),C==="water"||C==="stream"){n.add(`${v},${y}`);const k=C==="water"?r:o,B=C==="water"?.35:.5,J=R*Cn+(C==="water"?.035:.03);$t(k.pos,k.nrm,k.uv,Gs(v,J,y),na(v,y,B));continue}if(e.has(`${v},${y}`)){const k=js.roughHewn;$t(f.pos,f.nrm,f.uv,Gs(v,.02,y),na(v,y,k.repeat));continue}let T=s.get(C);T||(T=pn(),s.set(C,T));const F=js[C],x=R*Cn+(F.raised?.02:.005);$t(T.pos,T.nrm,T.uv,Gs(v,x,y),na(v,y,F.repeat));const E=h.has(`${v},${y}`)?l:a;yE(i,e,v,y,R,x,E,c,u)}for(const[y,v]of s){const b=js[y],C=Vt(`${Qn}/${b.file}`,!0),R=new je(Mt(xt,v.pos,v.nrm,v.uv),new vt({color:b.color,map:C}));R.receiveShadow=!0,R.name=y,t.add(R)}if(Kl(t,"cliff-rock",a,"walls/RockSide.png",10129798),Kl(t,"cliff-ore",l,"walls/RockOreSide.png",9072728),EE(t,c),wE(t,u),TE(t,f),!m){const v=Vt(`${Qn}/edge/Strata.png`,!0);v.repeat.set((i.width+3*2)/8,(i.height+3*2)/8);const b=new je(new as(i.width+3*2,i.height+3*2),new vt({color:12891290,map:v}));b.rotation.x=-Math.PI/2,b.position.set(i.width/2,-.04,i.height/2),b.receiveShadow=!0,b.name="strata",t.add(b)}Jl(t,"water",r,3961728,0),Jl(t,"stream",o,4883600,0);const _=Vt(`${Qn}/water/Ripples.png`,!0),g=new je(Mt(xt,r.pos,r.nrm,r.uv),new On({map:_,transparent:!0,depthWrite:!1,color:14017770}));g.position.y=.012,g.name="ripples",t.add(g);const p=Vt(`${Qn}/water/Flow.png`,!0),d=new je(Mt(xt,o.pos,o.nrm,o.uv),new On({map:p,transparent:!0,depthWrite:!1,color:14017770,opacity:.85}));if(d.position.y=.012,d.name="flow",t.add(d),i.marks.length>0){const y=pn();for(const C of i.marks)$t(y.pos,y.nrm,y.uv,Gs(C.x,.045,C.z),[[0,0],[0,1],[1,1],[1,0]]);const v=Vt(`${Qn}/damage/Marks.png`),b=new je(Mt(xt,y.pos,y.nrm,y.uv),new vt({map:v,transparent:!0,depthWrite:!1}));b.name="marks",t.add(b)}return{group:t,water:n,ripples:_,flow:p}}const Qr=0,Zl=.28,ea=.36;function yE(i,e,t,n,s,r,o,a,l){const c=[{dir:"e",nx:t+1,nz:n,u0:(n+1)*.5,u1:n*.5},{dir:"w",nx:t-1,nz:n,u0:n*.5,u1:(n+1)*.5},{dir:"n",nx:t,nz:n+1,u0:t*.5,u1:(t+1)*.5},{dir:"s",nx:t,nz:n-1,u0:(t+1)*.5,u1:t*.5}];for(const u of c){const f=bE(i,u.nx,u.nz),m=Iu(i,u.nx,u.nz)&&e.has(`${u.nx},${u.nz}`)?0:f;if(s<=m)continue;if(s>f){const p=f*Cn,d=(r-p)/ME;$t(o.pos,o.nrm,o.uv,bi(u.dir,t,n,p,r,0),[[u.u0,0],[u.u1,0],[u.u1,d],[u.u0,d]])}const _=s>f?f*Cn:r,g=m*Cn;_>g+1e-4&&SE(a,l,u.dir,t,n,g,_)}}function SE(i,e,t,n,s,r,o){const a=o-r,l=a>Zl+ea+.12?Zl:0,c=a>ea+l+.12?ea:0,u=o-l,f=r+c,h=Math.max(.4,(u-f)/2.2);if($t(i.pos,i.nrm,i.uv,bi(t,n,s,f,u,Qr),[[0,0],[1,0],[1,h],[0,h]]),c>0){const g=bi(t,n,s,r,f,Qr),p=bi(t,n,s,r,f,0);$t(e.pos,e.nrm,e.uv,[p[0],p[1],g[2],g[3]],[[0,0],[1,0],[1,1],[0,1]])}if(l<=0)return;const m=bi(t,n,s,u,o,Qr),_=bi(t,n,s,u,o,0);$t(e.pos,e.nrm,e.uv,[m[0],m[1],_[2],_[3]],[[0,0],[1,0],[1,1],[0,1]])}function bi(i,e,t,n,s,r){if(i==="e"){const a=e+1-r;return[[a,n,t+1],[a,n,t],[a,s,t],[a,s,t+1]]}if(i==="w"){const a=e+r;return[[a,n,t],[a,n,t+1],[a,s,t+1],[a,s,t]]}if(i==="n"){const a=t+1-r;return[[e,n,a],[e+1,n,a],[e+1,s,a],[e,s,a]]}const o=t+r;return[[e+1,n,o],[e,n,o],[e,s,o],[e+1,s,o]]}function Iu(i,e,t){return e>=0&&t>=0&&e<i.width&&t<i.height}function bE(i,e,t){return Iu(i,e,t)?i.elevation[t*i.width+e]??0:0}let ta=null;function Nu(){if(ta)return ta;const i=document.createElement("canvas");i.width=128,i.height=128;const e=i.getContext("2d");if(e){e.fillStyle="#4a4036",e.fillRect(0,0,128,128);for(let n=0;n<7;n++){e.strokeStyle=n%2===0?"rgba(28, 24, 20, 0.55)":"rgba(108, 96, 80, 0.4)",e.lineWidth=3;const s=8+n*18;e.beginPath(),e.moveTo(0,s),e.bezierCurveTo(40,s+3,88,s-3,128,s),e.stroke()}for(let n=0;n<48;n++){const s=n*37%128,r=n*53%128;e.fillStyle=n%2===0?"rgba(24, 20, 16, 0.35)":"rgba(140, 126, 104, 0.22)",e.fillRect(s,r,8,3)}}const t=new So(i);return t.colorSpace=ct,t.anisotropy=8,t.wrapS=Un,t.wrapT=Un,t.needsUpdate=!0,ta=t,t}function EE(i,e){if(e.pos.length===0)return;const t=new je(Mt(xt,e.pos,e.nrm,e.uv),new vt({color:16777215,map:Nu()}));t.castShadow=!1,t.receiveShadow=!0,t.frustumCulled=!0,t.name="cliff-carved",i.add(t)}function wE(i,e){if(e.pos.length===0)return;const t=new je(Mt(xt,e.pos,e.nrm,e.uv),new vt({color:12891810,map:Nu()}));t.receiveShadow=!0,t.name="cliff-carved-lip",i.add(t)}function TE(i,e){if(e.pos.length===0)return;const t=js.roughHewn,n=new je(Mt(xt,e.pos,e.nrm,e.uv),new vt({color:6050632,map:Vt(`${Qn}/${t.file}`,!0)}));n.receiveShadow=!0,n.name="carved-floor",i.add(n)}function Kl(i,e,t,n,s){if(t.pos.length===0)return;const r=Vt(`${Qn}/${n}`,!0),o=new je(Mt(xt,t.pos,t.nrm,t.uv),new vt({color:s,map:r}));o.castShadow=!1,o.receiveShadow=!0,o.frustumCulled=!0,o.name=e,i.add(o)}function pn(){return{pos:[],nrm:[],uv:[]}}function Gs(i,e,t){return[[i,e,t],[i,e,t+1],[i+1,e,t+1],[i+1,e,t]]}function na(i,e,t){return[[i*t,e*t],[i*t,(e+1)*t],[(i+1)*t,(e+1)*t],[(i+1)*t,e*t]]}function Jl(i,e,t,n,s){if(t.pos.length===0)return;const r=new je(Mt(xt,t.pos,t.nrm,t.uv),new vt({color:n}));r.position.y=s,r.receiveShadow=!0,r.name=e,i.add(r)}function AE(i,e,t){var l;const n=D_(t),s=n.colony,r=document.createElement("div");r.id="hud",r.className="is-concealed",r.innerHTML=`
    <h1>${s.name}</h1>
    <p class="place">A hidden valley in Colorado</p>
    <p id="seed">Seed ${ia(t)}</p>
    <p class="hint">Drag to pan · scroll to zoom · right-drag to orbit</p>
    <p class="credit"><a href="https://github.com/kndzio/IsoRim" target="_blank" rel="noreferrer">Assets: IsoRim by kndzio (MIT)</a></p>
    <p id="status">Loading IsoRim models…</p>
    <button type="button" id="new-valley">New valley</button>
  `,(l=r.querySelector("#new-valley"))==null||l.addEventListener("click",()=>{const c=Math.floor(Math.random()*4294967295)>>>0||1,u=new URLSearchParams(window.location.search);u.set("seed",ia(c)),window.location.search=u.toString()});const o=document.createElement("div");o.id="labels",o.className="is-concealed",i.append(r,o);const a=r.querySelector("#status");a instanceof HTMLElement&&RE(i,s,n.spawns,o,a,e,t).catch(c=>{const u=c instanceof Error?c.message:"The valley failed to load.";a.textContent=u,e.fail(u),console.error(c)})}async function RE(i,e,t,n,s,r,o){const a=await rE(UE(e));r.markPacks();const l=new eE,c=new Mo({antialias:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setSize(window.innerWidth,window.innerHeight),c.outputColorSpace=ct,c.shadowMap.enabled=!0,c.shadowMap.type=Ka,c.domElement.addEventListener("contextmenu",V=>V.preventDefault()),i.append(c.domElement);const u=new Mu;u.background=new Oe(12964020);const f=Math.max(e.width,e.height);u.fog=new dr(12964020,110,f*1.55);const h=t.reduce((V,U)=>V+U.x,0)/Math.max(1,t.length),m=t.reduce((V,U)=>V+U.z,0)/Math.max(1,t.length),_=46,g=new fr(-_,_,_/2,-_/2,.1,f*4);g.position.set(h+8,64,m-30);const p=new g_(g,c.domElement);p.target.set(h,.3,m),p.enableDamping=!0,p.dampingFactor=.08,p.screenSpacePanning=!0,p.minPolarAngle=.28,p.maxPolarAngle=Math.PI/2.08,p.maxZoom=12,p.zoomSpeed=.85,p.mouseButtons={LEFT:sn.PAN,MIDDLE:sn.DOLLY,RIGHT:sn.ROTATE},g.lookAt(p.target),u.add(new Eu(14148808,6968374,.62)),u.add(new Au(16774372,.28));const d=new Ha(16773330,1.15);d.position.set(h+36,88,m-18),d.target.position.set(h,0,m),d.castShadow=!0,d.shadow.mapSize.set(2048,2048);const y=48;d.shadow.camera.left=-y,d.shadow.camera.right=y,d.shadow.camera.top=y,d.shadow.camera.bottom=-y,d.shadow.camera.near=1,d.shadow.camera.far=160,d.shadow.bias=-6e-4,d.shadow.normalBias=.025,u.add(d),u.add(d.target);const v=new Ha(14017268,.32);v.position.set(h-12,14,m+16),u.add(v);let b=jl(e);u.add(b.group);const C=uE(e);u.add(C.group);const R=[...C.cutaway];for(const V of e.doors){const U=new Ut;U.name=V.id;const Y=V.stuff??"Wood",le=a.get("door_leaf"),fe=a.get("door_lintel");le&&fe&&(U.add(ti(le,{materials:l,stuff:Y})),U.add(ti(le,{materials:l,stuff:Y,yaw:180})),U.add(ti(fe,{materials:l,stuff:Y}))),U.position.set(V.x+.5,0,V.z+.5),U.rotation.y=In.degToRad(V.yaw??0),u.add(U),R.push({object:U,side:V.facade})}const T=H_(e,a,l,u),F=new Map(e.figures.map(V=>[V.id,V]));for(const V of e.figures)V.wander&&V.name.length>0||u.add(Bl(V,a,l));const x=A_({spawns:t,nav:U_(e),seed:o,items:e.props.filter(V=>V.movable).map(V=>({id:V.id,x:V.x,z:V.z,w:V.w??1,d:V.d??1,blocks:V.blocks!==!1})),rock:LE(e)});let E=x.digState().revision;const k=()=>{const V=x.digState();if(V.revision===E)return;E=V.revision;const U=new Set(V.dug.map(Y=>`${Y.x},${Y.z}`));u.remove(b.group),PE(b.group),b=jl(e,U),u.add(b.group),fE(e,C.group,U)},B=x.roster(),J=B.keys.map((V,U)=>{const Y=F.get(V);if(!Y)throw new Error(`Missing figure ${V}`);const le=Bl(Y,a,l),fe=new je(new pr(.38,.38,1.7,8),new On({transparent:!0,opacity:0,depthWrite:!1}));fe.position.y=.85,fe.userData.colonistIndex=U,le.add(fe),u.add(le);const me=document.createElement("div");return me.className="label",me.textContent=B.names[U]??Y.name,n.append(me),{group:le,label:me,pick:fe}}),P=X_(i,c.domElement,g,u,x,J.map(V=>({group:V.group,label:V.label,pick:V.pick})),T,(V,U)=>V<0||U<0||V>=e.width||U>=e.height?.08:x.buildable(V,U)?.1:(e.elevation[U*e.width+V]??0)*Cn+.1);CE(x,g,p,c.domElement);const O=e.animals.map(V=>{const U=z_(V,a,l);return u.add(U.root),U});window.__colonyUsed={models:[...a.keys()].sort(),textures:Qb().sort()};const W=()=>{const V=g.position.z<p.target.z,U=g.position.x>p.target.x;for(const Y of R)Y.object.visible=!gE(Y.side,V,U)},K=()=>{const V=window.innerWidth/Math.max(1,window.innerHeight);g.left=-_*V/2,g.right=_*V/2,g.top=_/2,g.bottom=-_/2,g.updateProjectionMatrix();const U=_/(e.height*1.75),Y=_*V/(e.width*1.75);p.minZoom=Math.min(U,Y,1),c.setSize(window.innerWidth,window.innerHeight)};K(),window.addEventListener("resize",K),await nE(),r.markWorld();const $=new Ru,j=new D,Z=J.map(()=>({x:0,z:0,yaw:0,bob:0}));s.textContent="Near walls fold away as you orbit.";const re=()=>{const V=$.getDelta(),U=$.elapsedTime;p.update(),W(),x.advance(V),x.pollEvents(),k();const Y=x.colonists(),le=x.alpha();for(let fe=0;fe<J.length;fe++){const me=vE(Y,fe,le,U);Z[fe]=me,J[fe].group.position.set(me.x,me.bob,me.z),J[fe].group.rotation.y=me.yaw}B_(O,U),b.ripples.offset.set(U*.015,U*.008),b.flow.offset.set(U*-.05,U*.01);for(const fe of l.flicker)fe.emissiveIntensity=.45+Math.sin(U*8+fe.id)*.28;P.update(Z),DE(J,Z,g,j,c.domElement),c.render(u,g),r.markFrame(),requestAnimationFrame(re)};re()}function CE(i,e,t,n){const s=new D;window.__gulch={get tick(){return i.tick},save:()=>i.save(),load:r=>i.load(r),project(r,o,a){s.set(r,o,a).project(e);const l=n.getBoundingClientRect();return{x:(s.x*.5+.5)*l.width+l.left,y:(-s.y*.5+.5)*l.height+l.top}},items:()=>i.items().map(r=>({...r})),blocked:(r,o)=>i.blocked(r,o),orderDig:(r,o)=>i.orderDig(r,o),diggable:(r,o)=>i.diggable(r,o),buildable:(r,o)=>i.buildable(r,o),digState:()=>i.digState(),advance:r=>i.advance(r),setView(r,o,a,l,c,u,f){e.position.set(r,o,a),t.target.set(l,c,u),typeof f=="number"&&f>0&&(e.zoom=f),e.lookAt(t.target),e.updateProjectionMatrix()}}}function LE(i){const e=[];for(let t=0;t<i.height;t++)for(let n=0;n<i.width;n++){const s=t*i.width+n,r=i.terrain[s];r==="water"||r==="stream"||(i.elevation[s]??0)<1||e.push({x:n,z:t})}return e}function PE(i){i.traverse(e=>{if(!(e instanceof je))return;e.geometry.dispose();const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)n.dispose()})}function DE(i,e,t,n,s){const r=s.clientWidth,o=s.clientHeight;for(let a=0;a<i.length;a++){const l=e[a];n.set(l.x,1.35,l.z),n.project(t);const c=i[a].label;if(n.z>1){c.style.display="none";continue}c.style.display="block",c.style.left=`${(n.x*.5+.5)*r}px`,c.style.top=`${(-n.y*.5+.5)*o}px`}}function UE(i){const e=new Set(["door_leaf","door_lintel"]);for(const t of i.props)e.add(t.model);for(const t of i.figures)for(const n of t.parts)e.add(n);for(const t of i.animals)e.add(t.model),t.leg&&e.add(t.leg);return[...e]}const Zs=document.querySelector("#app");if(!(Zs instanceof HTMLElement))throw new Error("Missing #app");ef(Zs,i=>{const e=sf(Zs,()=>{var t,n;(t=document.querySelector("#hud"))==null||t.classList.remove("is-concealed"),(n=document.querySelector("#labels"))==null||n.classList.remove("is-concealed")});AE(Zs,e,i)});
