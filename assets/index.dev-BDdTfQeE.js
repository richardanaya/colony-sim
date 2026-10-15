var du=Object.defineProperty;var pu=(i,e,t)=>e in i?du(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ye=(i,e,t)=>pu(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const Rl=20,Di=1/Rl,Cl=["construction","plants","mining","cooking","medicine","intellectual","social","crafting"],Ll=27164,qe=64,kt=56,xt=5,mu=18,po=14,mo=[{id:"nell",name:"Nell",body:"female",hair:"long",specialty:"plants"},{id:"amos",name:"Amos",body:"male",hair:"short",beard:"goatee",hat:"cap",specialty:"construction"},{id:"wren",name:"Wren",body:"thin",hair:"bun",hat:"brim",specialty:"medicine"},{id:"idris",name:"Idris",body:"fat",hair:"ponytail",hat:"hood",specialty:"social"},{id:"bram",name:"Bram",body:"hulk",hair:"mohawk",beard:"full",hat:"tall",specialty:"mining"}],_o=["tree_pine_1","tree_pine_2","tree_poplar_1","tree_oak_1","tree_birch_1"],go=["boulder_1","boulder_2","boulder_3","boulder_4","boulder_5","boulder_6"],vo=["#e0b090","#c68658","#8d5a3c","#f0d0b0","#a56b45"],as=["#241c18","#6b3a22","#c4a15a","#3a3430","#141210"],rs=["#8d3d45","#3d5c8d","#3d6b4f","#c4a15a","#5c4a3a","#6e4a62"],xo=["#3a3f4a","#4a3a32","#2c3834","#534838"];function Va(i){return(i>>>0).toString(16).padStart(4,"0")}function _u(i){const e=Tu(i>>>0),t=3+Math.floor(e()*3),n=new yu;n.paintRim();const s={x:8+Math.floor(e()*12),z:kt-xt-po-Math.floor(e()*3),w:mu,h:po};n.creek(e,s),n.banks(),n.meadows(e,s),n.soil(e,s),n.forests(e,s),n.stone(e),n.ore(e);const a=n.startingSite(s);n.seal(s.x+2,s.z+8);const o=gu(e,t),r=[],l=[];o.forEach((u,d)=>{const h={x:s.x+2+d*2,z:s.z+8};r.push(vu(u,h)),l.push(xu(e,u,d,h))});const c={name:"Galt's Gulch",width:qe,height:kt,terrain:n.terrain,walls:n.walls,doors:n.doors,roofs:n.roofs,props:n.props,figures:r,animals:[],marks:[{x:a.doorX,z:a.doorZ}]};return{seed:i>>>0,colony:c,spawns:l,clearing:n.clearing(s,a)}}function gu(i,e){const t=mo.slice(1);for(let n=t.length-1;n>0;n--){const s=Math.floor(i()*(n+1)),a=t[n];t[n]=t[s],t[s]=a}return[mo[0],...t.slice(0,e-1)]}function vu(i,e){const t=bu(i.name),n=[`person_${i.body}_lower`,`person_${i.body}_upper`,"person_head","person_face",`person_hair_${i.hair}`],s=[xo[t%xo.length],rs[t%rs.length],vo[t%vo.length],"#ffffff",as[t%as.length]];return i.beard&&(n.push(`person_beard_${i.beard}`),s.push(as[t%as.length])),i.hat&&(n.push(`person_hat_${i.hat}`),s.push(rs[(t+2)%rs.length])),{id:i.id,name:i.name,x:e.x,z:e.z,yaw:0,wander:!0,parts:n,tints:s}}function xu(i,e,t,n){return{id:t+1,key:e.id,name:e.name,x:n.x+.5,z:n.z+.5,yaw:0,skills:Mu(i,e.specialty),mind:Su(i,t),needs:{food:yn(.86+i()*.1),rest:yn(.8+i()*.12),recreation:yn(.84+i()*.1)},purseCents:6e3+t*1200+Math.floor(i()*800)}}function Mu(i,e){const t={};for(const n of Cl){const s=n===e?6:1,a=Math.floor(n===e?i()*3:i()*4);t[n]=s+a}return t}function Su(i,e){const t={food:8+Math.floor(i()*8),timber:10+Math.floor(i()*16),stone:4+Math.floor(i()*8),ore:e===0?0:Math.floor(i()*3),power:0,goldOre:0};return{stated:"objectivism",certainty:yn(.78+i()*.18),seeds:[],charisma:yn(.3+i()*.5),suggestibility:yn(.15+i()*.35),receptivity:yn(.7+i()*.25),residence:"founder",integrity:1,morale:yn(.75+i()*.2),force:"none",laborHoursLeft:14,inventory:t}}class yu{constructor(){Ye(this,"terrain",Array.from({length:qe*kt},()=>"grass"));Ye(this,"walls",[]);Ye(this,"doors",[]);Ye(this,"roofs",[]);Ye(this,"props",[]);Ye(this,"wallAt",new Set);Ye(this,"occupied",new Uint8Array(qe*kt));Ye(this,"seq",0)}paintRim(){for(let e=0;e<kt;e++)for(let t=0;t<qe;t++){const n=os(t,e);n<=2?(this.terrain[e*qe+t]="roughStone",this.addWall(t,e,"rock")):n<=4&&(this.terrain[e*qe+t]="gravel")}}creek(e,t){let n=14+Math.floor(e()*22),s=xt+1;const a=t.z-4;for(;s<a;){!this.wallAt.has(Zn(n,s))&&!Fn(n,s,t)&&this.setTerrain(n,s,"stream");const o=Math.floor(e()*5);o===0?n-=1:o===4&&(n+=1),n=Eu(n,xt+2,qe-xt-3),s+=1}for(let o=-1;o<=1;o++)for(let r=-1;r<=1;r++){const l=n+r,c=s+o;this.wallAt.has(Zn(l,c))||Fn(l,c,t)||l<=2||c<=2||l>=qe-3||c>=kt-3||this.setTerrain(l,c,"water")}}banks(){for(let e=1;e<kt-1;e++)for(let t=1;t<qe-1;t++){const n=this.terrain[e*qe+t];n!=="grass"&&n!=="gravel"||this.nearWater(t,e)&&(os(t,e)<=2||(this.terrain[e*qe+t]=n==="gravel"?"gravel":"mud"))}}meadows(e,t){for(let n=0;n<3;n++){const s=xt+6+Math.floor(e()*(qe-xt*2-12)),a=xt+6+Math.floor(e()*(kt-xt*2-18)),o=5+Math.floor(e()*4);this.disk(s,a,o,t)}}soil(e,t){this.fillRect(t.x+1,t.z-5,8,4,"soilRich",!0);for(let n=0;n<2;n++){const s=xt+2+Math.floor(e()*(qe-xt*2-10)),a=xt+2+Math.floor(e()*Math.max(1,t.z-xt-8));this.fillRect(s,a,6,4,n===0?"soil":"soilRich",!0)}}forests(e,t){for(let n=0;n<4;n++){const s=xt+4+Math.floor(e()*(qe-xt*2-8)),a=xt+4+Math.floor(e()*Math.max(1,t.z-xt-6)),o=4+Math.floor(e()*3);let r=0;for(let l=a-o;l<=a+o;l+=3)for(let c=s-o;c<=s+o;c+=3)(c-s)**2+(l-a)**2>o*o||e()>.72||this.tryTree(e,c,l,t)&&(r+=1);r===0&&this.tryTree(e,s,a,t)}}stone(e){for(const t of[4,qe-5]){let n=10+Math.floor(e()*16);for(let s=0;s<4;s++){const a=go[Math.floor(e()*go.length)];this.tryProp({model:a,x:t,z:n,w:1,d:1,stuff:"Stone",blocks:!0}),n+=2}}}ore(e){for(const t of[2,qe-3]){const n=12+Math.floor(e()*18);for(let a=0;a<4;a++)this.rekind(t,n+a,"rockOre");const s=t===2?4:qe-5;this.addWall(s,n+1,"rockOre"),this.addWall(s,n+2,"rockOre"),this.setTerrain(s,n+1,"roughStone"),this.setTerrain(s,n+2,"roughStone")}}startingSite(e){const t={x:e.x+1,z:e.z+1,w:7,d:6},n={x:e.x+10,z:e.z+1,w:5,d:4};this.building(t,"thatch","cabin"),this.building(n,"slate","shed"),this.tryProp({model:"bedroll",x:t.x+1,z:t.z+4,w:1,d:1,stuff:"Fabric",blocks:!0}),this.tryProp({model:"table_1x2",x:t.x+4,z:t.z+2,w:1,d:2,stuff:"Wood",blocks:!0}),this.tryProp({model:"dining_chair",x:t.x+5,z:t.z+2,w:1,d:1,stuff:"Wood",blocks:!0}),this.tryProp({model:"shelf",x:n.x+1,z:n.z+2,w:1,d:1,stuff:"Wood",blocks:!0}),this.tryProp({model:"barrel",x:n.x+3,z:n.z+2,w:1,d:1,stuff:"Wood",blocks:!0}),this.tryProp({model:"barrel",x:n.x+3,z:n.z+1,w:1,d:1,stuff:"Wood",blocks:!0});for(let s=e.z+7;s<e.z+e.h;s++)for(let a=e.x;a<e.x+e.w;a++)this.wallAt.has(Zn(a,s))||this.terrain[s*qe+a]==="water"||this.terrain[s*qe+a]==="stream"||(this.terrain[s*qe+a]="flagstone");return this.tryProp({model:"campfire",x:e.x+8,z:e.z+9,w:1,d:1,blocks:!1}),{doorX:t.x+3,doorZ:t.z}}seal(e,t){const n=new Uint8Array(qe*kt),s=[{x:e,z:t}];for(;s.length>0;){const a=s.pop();if(!a||!mn(a.x,a.z))continue;const o=a.z*qe+a.x;n[o]||this.blocked(a.x,a.z)||(n[o]=1,s.push({x:a.x+1,z:a.z},{x:a.x-1,z:a.z},{x:a.x,z:a.z+1},{x:a.x,z:a.z-1}))}for(let a=0;a<kt;a++)for(let o=0;o<qe;o++){const r=a*qe+o;n[r]||this.blocked(o,a)||(this.terrain[r]="stream")}}clearing(e,t){const n=[];for(let s=e.z+7;s<e.z+e.h;s++)for(let a=e.x;a<e.x+e.w;a++)this.blocked(a,s)||n.push({x:a,z:s});return this.blocked(t.doorX,t.doorZ)||n.push({x:t.doorX,z:t.doorZ}),n}building(e,t,n){const s={x:e.x+Math.floor(e.w/2),z:e.z};for(let a=e.z;a<e.z+e.d;a++)for(let o=e.x;o<e.x+e.w;o++){if(o===e.x||a===e.z||o===e.x+e.w-1||a===e.z+e.d-1){if(o===s.x&&a===s.z)continue;this.addWall(o,a,"planks");continue}this.setTerrain(o,a,"woodFloor")}this.doors.push({id:`${n}-door`,x:s.x,z:s.z,yaw:0,stuff:"Wood",facade:"s"}),this.roofs.push({id:`${n}-roof`,x:e.x,z:e.z,w:e.w,d:e.d,style:t,ridge:"x"})}disk(e,t,n,s){for(let a=t-n;a<=t+n;a++)for(let o=e-n;o<=e+n;o++){if((o-e)**2+(a-t)**2>n*n||!mn(o,a)||os(o,a)<=4||Fn(o,a,s))continue;this.terrain[a*qe+o]==="grass"&&(this.terrain[a*qe+o]="grassRich")}}fillRect(e,t,n,s,a,o){for(let r=t;r<t+s;r++)for(let l=e;l<e+n;l++){if(!mn(l,r)||os(l,r)<=2)continue;const c=this.terrain[r*qe+l];c==="water"||c==="stream"||c==="roughStone"||o&&c==="woodFloor"||(this.terrain[r*qe+l]=a)}}tryTree(e,t,n,s){if(Fn(t,n,s)||Fn(t+1,n,s)||Fn(t,n+1,s)||Fn(t+1,n+1,s))return!1;const a=_o[Math.floor(e()*_o.length)];return this.tryProp({model:a,x:t,z:n,w:2,d:2,scale:2.2,blocks:!0})}tryProp(e){const t=e.w??1,n=e.d??1,s=Math.floor(e.x),a=Math.floor(e.z);if(!this.fits(s,a,t,n))return!1;if(e.blocks!==!1)for(let r=0;r<n;r++)for(let l=0;l<t;l++)this.occupied[(a+r)*qe+(s+l)]=1;return this.props.push({...e,id:`${e.model}-${this.seq++}`,x:s,z:a}),!0}fits(e,t,n,s){for(let a=0;a<s;a++)for(let o=0;o<n;o++){const r=e+o,l=t+a;if(!mn(r,l)||this.blocked(r,l))return!1;const c=this.terrain[l*qe+r];if(c==="water"||c==="stream")return!1}return!0}blocked(e,t){if(!mn(e,t)||this.wallAt.has(Zn(e,t))||this.occupied[t*qe+e])return!0;const n=this.terrain[t*qe+e];return n==="water"||n==="stream"}addWall(e,t,n){!mn(e,t)||this.wallAt.has(Zn(e,t))||(this.wallAt.add(Zn(e,t)),this.walls.push({x:e,z:t,kind:n}))}rekind(e,t,n){const s=this.walls.find(a=>a.x===e&&a.z===t);s&&(s.kind=n)}setTerrain(e,t,n){mn(e,t)&&(this.terrain[t*qe+e]=n)}nearWater(e,t){for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){if(s===0&&n===0)continue;const a=e+s,o=t+n;if(!mn(a,o))continue;const r=this.terrain[o*qe+a];if(r==="water"||r==="stream")return!0}return!1}}function Fn(i,e,t){return i>=t.x&&e>=t.z&&i<t.x+t.w&&e<t.z+t.h}function os(i,e){return Math.min(i,e,qe-1-i,kt-1-e)}function mn(i,e){return i>=0&&e>=0&&i<qe&&e<kt}function Zn(i,e){return`${i},${e}`}function Eu(i,e,t){return i<e?e:i>t?t:i}function yn(i){return i<0?0:i>1?1:i}function bu(i){let e=0;for(const t of i)e=Math.imul(e,33)+t.charCodeAt(0)>>>0;return e}function Tu(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function wu(i,e){let t=Au();const n=document.createElement("div");n.id="title-screen",n.innerHTML=`
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
    </div>
  `,i.append(n);const s=n.querySelector("#begin"),a=n.querySelector("#reroll"),o=n.querySelector("#seed-value");if(!(s instanceof HTMLButtonElement)||!(a instanceof HTMLButtonElement))return;const r=()=>{o&&(o.textContent=Va(t))};r(),a.addEventListener("click",()=>{t=t+1+Math.floor(Math.random()*65535)>>>0,r()}),s.focus();let l=!1;const c=()=>{if(l)return;l=!0,e(t),n.classList.add("is-leaving");const u=()=>{n.remove()};n.addEventListener("transitionend",u,{once:!0}),window.setTimeout(u,700)};s.addEventListener("click",c)}function Au(){const i=new URLSearchParams(window.location.search).get("seed");return i&&/^[0-9a-fA-F]{1,8}$/.test(i)?Number.parseInt(i,16)>>>0:Ll}const bt={done:0,total:0,label:"Loading the valley…"};function Dr(i,e){bt.total+=i,bt.label=e,Ir()}function Ur(i){bt.done+=1,bt.label=i,Ir()}function Ru(){bt.done=Math.max(bt.done,bt.total,1),bt.total=Math.max(bt.total,bt.done),bt.label="The valley is ready.",Ir()}function Ir(){const i=document.querySelector("#load-progress"),e=bt.total===0?0:Math.min(100,Math.round(bt.done/bt.total*100));if(i instanceof HTMLElement){i.setAttribute("aria-valuenow",String(e)),i.setAttribute("aria-valuemax","100");const t=i.querySelector(".load-bar-fill");t instanceof HTMLElement&&(t.style.width=`${e}%`);const n=i.querySelector(".load-label");n&&(n.textContent=bt.label)}}const Mo=3;function Cu(i,e){const t=document.createElement("div");t.id="loading-screen",t.innerHTML=`
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
  `,i.append(t);const n={packs:!1,world:!1,frames:0,revealed:!1},s=()=>{window.__valleyLoad={...n}};s();let a=!1;const o=()=>{if(n.revealed)return;if(n.revealed=!0,s(),Ru(),e(),(Number.parseFloat(getComputedStyle(t).transitionDuration)||0)===0){t.remove();return}t.addEventListener("transitionend",l=>{l.target!==t||l.propertyName!=="opacity"||t.remove()}),t.classList.add("is-leaving")};return{markPacks(){n.packs=!0,s()},markWorld(){n.world=!0,a||(a=!0,Dr(Mo,"Drawing the valley…")),s()},markFrame(){if(!(!n.packs||!n.world||n.revealed)){if(n.frames+=1,s(),n.frames<Mo){Ur("Drawing the valley…");return}o()}},fail(r){const l=t.querySelector(".load-label");l&&(l.textContent=r)}}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qs="160",Kt={ROTATE:0,DOLLY:1,PAN:2},Gn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pl=0,Wa=1,Dl=2,Nr=1,Fr=2,$t=3,pn=0,Tt=1,Xt=2,fn=0,qn=1,Xa=2,qa=3,Ya=4,Ul=5,En=100,Il=101,Nl=102,ja=103,$a=104,Fl=200,Ol=201,kl=202,Bl=203,Xs=204,qs=205,zl=206,Gl=207,Hl=208,Vl=209,Wl=210,Xl=211,ql=212,Yl=213,jl=214,$l=0,Kl=1,Zl=2,Vi=3,Jl=4,Ql=5,ec=6,tc=7,ea=0,nc=1,ic=2,hn=0,sc=1,ac=2,rc=3,oc=4,lc=5,cc=6,Or=300,Yn=301,jn=302,Ys=303,js=304,Zi=306,Ei=1e3,Bt=1001,$s=1002,Mt=1003,Ka=1004,Os=1005,Pt=1006,uc=1007,bi=1008,dn=1009,fc=1010,hc=1011,ta=1012,kr=1013,cn=1014,un=1015,Ti=1016,Br=1017,zr=1018,wn=1020,dc=1021,zt=1023,pc=1024,mc=1025,An=1026,$n=1027,_c=1028,Gr=1029,gc=1030,Hr=1031,Vr=1033,ks=33776,Bs=33777,zs=33778,Gs=33779,Za=35840,Ja=35841,Qa=35842,er=35843,Wr=36196,tr=37492,nr=37496,ir=37808,sr=37809,ar=37810,rr=37811,or=37812,lr=37813,cr=37814,ur=37815,fr=37816,hr=37817,dr=37818,pr=37819,mr=37820,_r=37821,Hs=36492,gr=36494,vr=36495,vc=36283,xr=36284,Mr=36285,Sr=36286,Xr=3e3,Rn=3001,xc=3200,Mc=3201,qr=0,Sc=1,It="",lt="srgb",Qt="srgb-linear",na="display-p3",Ji="display-p3-linear",Wi="linear",Ze="srgb",Xi="rec709",qi="p3",Hn=7680,yr=519,yc=512,Ec=513,bc=514,Yr=515,Tc=516,wc=517,Ac=518,Rc=519,Er=35044,br="300 es",Ks=1035,Zt=2e3,Yi=2001;class Un{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let So=1234567;const xi=Math.PI/180,ji=180/Math.PI;function Ai(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function jr(i,e){return(i%e+e)%e}function Lu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Pu(i,e,t){return i!==e?(t-i)/(e-i):0}function zi(i,e,t){return(1-t)*i+t*e}function Du(i,e,t,n){return zi(i,e,1-Math.exp(-t*n))}function Uu(i,e=1){return e-Math.abs(jr(i,e*2)-e)}function Iu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Nu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Fu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ou(i,e){return i+Math.random()*(e-i)}function ku(i){return i*(.5-Math.random())}function Bu(i){i!==void 0&&(So=i);let e=So+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zu(i){return i*xi}function Gu(i){return i*ji}function Tr(i){return(i&i-1)===0&&i!==0}function Hu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vu(i,e,t,n,s){const a=Math.cos,o=Math.sin,r=a(t/2),l=o(t/2),c=a((e+n)/2),u=o((e+n)/2),d=a((e-n)/2),h=o((e-n)/2),m=a((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(r*u,l*d,l*h,r*c);break;case"YZY":i.set(l*h,r*u,l*d,r*c);break;case"ZXZ":i.set(l*d,l*h,r*u,r*c);break;case"XZX":i.set(r*u,l*g,l*m,r*c);break;case"YXY":i.set(l*m,r*u,l*g,r*c);break;case"ZYZ":i.set(l*g,l*m,r*u,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Cn={DEG2RAD:xi,RAD2DEG:ji,generateUUID:Ai,clamp:St,euclideanModulo:jr,mapLinear:Lu,inverseLerp:Pu,lerp:zi,damp:Du,pingpong:Uu,smoothstep:Iu,smootherstep:Nu,randInt:Fu,randFloat:Ou,randFloatSpread:ku,seededRandom:Bu,degToRad:zu,radToDeg:Gu,isPowerOfTwo:Tr,ceilPowerOfTwo:Hu,floorPowerOfTwo:Zs,setQuaternionFromProperEuler:Vu,normalize:yt,denormalize:_i};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*s+e.x,this.y=a*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,s,a,o,r,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,o,r,l,c)}set(e,t,n,s,a,o,r,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=r,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,o=n[0],r=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],_=s[0],p=s[3],f=s[6],E=s[1],x=s[4],w=s[7],P=s[2],R=s[5],A=s[8];return a[0]=o*_+r*E+l*P,a[3]=o*p+r*x+l*R,a[6]=o*f+r*w+l*A,a[1]=c*_+u*E+d*P,a[4]=c*p+u*x+d*R,a[7]=c*f+u*w+d*A,a[2]=h*_+m*E+g*P,a[5]=h*p+m*x+g*R,a[8]=h*f+m*w+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*r*c-n*a*u+n*r*l+s*a*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8],d=u*o-r*c,h=r*l-u*a,m=c*a-o*l,g=t*d+n*h+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(r*n-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*a-r*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,o,r){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*o+c*r)+o+e,-s*c,s*l,-s*(-c*o+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new Ge;function Cc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lc(){const i=Js("canvas");return i.style.display="block",i}const yo={};function Gi(i){i in yo||(yo[i]=!0,console.warn(i))}const Eo=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bo=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ls={[Qt]:{transfer:Wi,primaries:Xi,toReference:i=>i,fromReference:i=>i},[lt]:{transfer:Ze,primaries:Xi,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ji]:{transfer:Wi,primaries:qi,toReference:i=>i.applyMatrix3(bo),fromReference:i=>i.applyMatrix3(Eo)},[na]:{transfer:Ze,primaries:qi,toReference:i=>i.convertSRGBToLinear().applyMatrix3(bo),fromReference:i=>i.applyMatrix3(Eo).convertLinearToSRGB()}},Wu=new Set([Qt,Ji]),Ke={enabled:!0,_workingColorSpace:Qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Wu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ls[e].toReference,s=ls[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ls[i].primaries},getTransfer:function(i){return i===It?Wi:ls[i].transfer}};function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function da(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jn;class $r{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jn===void 0&&(Jn=Js("canvas")),Jn.width=e.width,Jn.height=e.height;const n=Jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=Mi(a[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xu=0;class Kr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,r=s.length;o<r;o++)s[o].isDataTexture?a.push(pa(s[o].image)):a.push(pa(s[o]))}else a=pa(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$r.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qu=0;class wt extends Un{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Bt,s=Bt,a=Pt,o=bi,r=zt,l=dn,c=wt.DEFAULT_ANISOTROPY,u=It){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Ai(),this.name="",this.source=new Kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Rn?lt:It),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Or)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case $s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case $s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===lt?Rn:Xr}set encoding(e){Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Rn?lt:It}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Or;wt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,s=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,w=(m+1)/2,P=(f+1)/2,R=(u+h)/4,A=(d+_)/4,q=(g+p)/4;return x>w&&x>P?x<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(x),s=R/n,a=A/n):w>P?w<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(w),n=R/s,a=q/s):P<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(P),n=A/a,s=q/a),this.set(n,s,a,t),this}let E=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-_)/E,this.z=(h-u)/E,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pc extends Un{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Gi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Rn?lt:It),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Pc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zr extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dc extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,o,r){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const h=a[o+0],m=a[o+1],g=a[o+2],_=a[o+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(r===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==m||u!==g){let p=1-r;const f=l*h+c*m+u*g+d*_,E=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const P=Math.sqrt(x),R=Math.atan2(P,f*E);p=Math.sin(p*R)/P,r=Math.sin(r*R)/P}const w=r*E;if(l=l*p+h*w,c=c*p+m*w,u=u*p+g*w,d=d*p+_*w,p===1-r){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,a,o){const r=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=a[o],h=a[o+1],m=a[o+2],g=a[o+3];return e[t]=r*g+u*d+l*m-c*h,e[t+1]=l*g+u*h+c*d-r*m,e[t+2]=c*g+u*m+r*h-l*d,e[t+3]=u*g-r*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,o=e._order,r=Math.cos,l=Math.sin,c=r(n/2),u=r(s/2),d=r(a/2),h=l(n/2),m=l(s/2),g=l(a/2);switch(o){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],o=t[1],r=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+r+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(a-c)*m,this._z=(o-s)*m}else if(n>r&&n>d){const m=2*Math.sqrt(1+n-r-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(a+c)/m}else if(r>d){const m=2*Math.sqrt(1+r-n-d);this._w=(a-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-r);this._w=(o-s)/m,this._x=(a+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,o=e._w,r=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*r+s*c-a*l,this._y=s*u+o*l+a*r-n*c,this._z=a*u+o*c+n*l-s*r,this._w=o*u-n*r-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,o=this._w;let r=o*e._w+n*e._x+s*e._y+a*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=n,this._y=s,this._z=a,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,r),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(a),n*Math.cos(a),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(To.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(To.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,o=e.y,r=e.z,l=e.w,c=2*(o*s-r*n),u=2*(r*t-a*s),d=2*(a*n-o*t);return this.x=t+l*c+o*d-r*u,this.y=n+l*u+r*c-a*d,this.z=s+l*d+a*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,o=t.x,r=t.y,l=t.z;return this.x=s*l-a*r,this.y=a*o-n*l,this.z=n*r-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new L,To=new Pn;class Ri{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(a,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cs.copy(n.boundingBox)),cs.applyMatrix4(e.matrixWorld),this.union(cs)}const s=e.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),us.subVectors(this.max,Ui),Qn.subVectors(e.a,Ui),ei.subVectors(e.b,Ui),ti.subVectors(e.c,Ui),_n.subVectors(ei,Qn),gn.subVectors(ti,ei),On.subVectors(Qn,ti);let t=[0,-_n.z,_n.y,0,-gn.z,gn.y,0,-On.z,On.y,_n.z,0,-_n.x,gn.z,0,-gn.x,On.z,0,-On.x,-_n.y,_n.x,0,-gn.y,gn.x,0,-On.y,On.x,0];return!_a(t,Qn,ei,ti,us)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,Qn,ei,ti,us))?!1:(fs.crossVectors(_n,gn),t=[fs.x,fs.y,fs.z],_a(t,Qn,ei,ti,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new L,new L,new L,new L,new L,new L,new L,new L],Gt=new L,cs=new Ri,Qn=new L,ei=new L,ti=new L,_n=new L,gn=new L,On=new L,Ui=new L,us=new L,fs=new L,kn=new L;function _a(i,e,t,n,s){for(let a=0,o=i.length-3;a<=o;a+=3){kn.fromArray(i,a);const r=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),l=e.dot(kn),c=t.dot(kn),u=n.dot(kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>r)return!1}return!0}const Yu=new Ri,Ii=new L,ga=new L;class Qi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yu.setFromPoints(e).getCenter(n);let s=0;for(let a=0,o=e.length;a<o;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ii.subVectors(e,this.center);const t=Ii.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ii,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ii.copy(e.center).add(ga)),this.expandByPoint(Ii.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new L,va=new L,hs=new L,vn=new L,xa=new L,ds=new L,Ma=new L;class ia{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){va.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(va);const a=e.distanceTo(t)*.5,o=-this.direction.dot(hs),r=vn.dot(this.direction),l=-vn.dot(hs),c=vn.lengthSq(),u=Math.abs(1-o*o);let d,h,m,g;if(u>0)if(d=o*l-r,h=o*r-l,g=a*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,m=d*(d+o*h+2*r)+h*(o*d+h+2*l)+c}else h=a,d=Math.max(0,-(o*h+r)),m=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(o*h+r)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*a+r)),h=d>0?-a:Math.min(Math.max(-a,-l),a),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-a,-l),a),m=h*(h+2*l)+c):(d=Math.max(0,-(o*a+r)),h=d>0?a:Math.min(Math.max(-a,-l),a),m=-d*d+h*(h+2*l)+c);else h=o>0?-a:a,d=Math.max(0,-(o*h+r)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(va).addScaledVector(hs,h),m}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),s=nn.dot(nn)-n*n,a=e.radius*e.radius;if(s>a)return null;const o=Math.sqrt(a-s),r=n-o,l=n+o;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,o,r,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||a>s||((a>n||isNaN(n))&&(n=a),(o<s||isNaN(s))&&(s=o),d>=0?(r=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(r=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||r>s)||((r>n||n!==n)&&(n=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,s,a){xa.subVectors(t,e),ds.subVectors(n,e),Ma.crossVectors(xa,ds);let o=this.direction.dot(Ma),r;if(o>0){if(s)return null;r=1}else if(o<0)r=-1,o=-o;else return null;vn.subVectors(this.origin,e);const l=r*this.direction.dot(ds.crossVectors(vn,ds));if(l<0)return null;const c=r*this.direction.dot(xa.cross(vn));if(c<0||l+c>o)return null;const u=-r*vn.dot(Ma);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,s,a,o,r,l,c,u,d,h,m,g,_,p){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,o,r,l,c,u,d,h,m,g,_,p)}set(e,t,n,s,a,o,r,l,c,u,d,h,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=a,f[5]=o,f[9]=r,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ni.setFromMatrixColumn(e,0).length(),a=1/ni.setFromMatrixColumn(e,1).length(),o=1/ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const h=o*u,m=o*d,g=r*u,_=r*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=h-_*c,t[9]=-r*l,t[2]=_-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,g=c*u,_=c*d;t[0]=h+_*r,t[4]=g*r-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-r,t[2]=m*r-g,t[6]=_+h*r,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,g=c*u,_=c*d;t[0]=h-_*r,t[4]=-o*d,t[8]=g+m*r,t[1]=m+g*r,t[5]=o*u,t[9]=_-h*r,t[2]=-o*c,t[6]=r,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*d,g=r*u,_=r*d;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=m*c-g,t[2]=-c,t[6]=r*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=r*l,_=r*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-r*u,t[2]=-c*u,t[6]=m*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,m=o*c,g=r*l,_=r*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=r*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ju,e,$u)}lookAt(e,t,n){const s=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),xn.crossVectors(n,Ct),xn.lengthSq()===0&&(Math.abs(n.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),xn.crossVectors(n,Ct)),xn.normalize(),ps.crossVectors(Ct,xn),s[0]=xn.x,s[4]=ps.x,s[8]=Ct.x,s[1]=xn.y,s[5]=ps.y,s[9]=Ct.y,s[2]=xn.z,s[6]=ps.z,s[10]=Ct.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,o=n[0],r=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],E=n[3],x=n[7],w=n[11],P=n[15],R=s[0],A=s[4],q=s[8],S=s[12],b=s[1],V=s[5],Y=s[9],ae=s[13],D=s[2],B=s[6],W=s[10],j=s[14],I=s[3],H=s[7],X=s[11],Z=s[15];return a[0]=o*R+r*b+l*D+c*I,a[4]=o*A+r*V+l*B+c*H,a[8]=o*q+r*Y+l*W+c*X,a[12]=o*S+r*ae+l*j+c*Z,a[1]=u*R+d*b+h*D+m*I,a[5]=u*A+d*V+h*B+m*H,a[9]=u*q+d*Y+h*W+m*X,a[13]=u*S+d*ae+h*j+m*Z,a[2]=g*R+_*b+p*D+f*I,a[6]=g*A+_*V+p*B+f*H,a[10]=g*q+_*Y+p*W+f*X,a[14]=g*S+_*ae+p*j+f*Z,a[3]=E*R+x*b+w*D+P*I,a[7]=E*A+x*V+w*B+P*H,a[11]=E*q+x*Y+w*W+P*X,a[15]=E*S+x*ae+w*j+P*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],o=e[1],r=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+a*l*d-s*c*d-a*r*h+n*c*h+s*r*m-n*l*m)+_*(+t*l*m-t*c*h+a*o*h-s*o*m+s*c*u-a*l*u)+p*(+t*c*d-t*r*m-a*o*d+n*o*m+a*r*u-n*c*u)+f*(-s*r*u-t*l*d+t*r*h+s*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],E=d*p*c-_*h*c+_*l*m-r*p*m-d*l*f+r*h*f,x=g*h*c-u*p*c-g*l*m+o*p*m+u*l*f-o*h*f,w=u*_*c-g*d*c+g*r*m-o*_*m-u*r*f+o*d*f,P=g*d*l-u*_*l-g*r*h+o*_*h+u*r*p-o*d*p,R=t*E+n*x+s*w+a*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=E*A,e[1]=(_*h*a-d*p*a-_*s*m+n*p*m+d*s*f-n*h*f)*A,e[2]=(r*p*a-_*l*a+_*s*c-n*p*c-r*s*f+n*l*f)*A,e[3]=(d*l*a-r*h*a-d*s*c+n*h*c+r*s*m-n*l*m)*A,e[4]=x*A,e[5]=(u*p*a-g*h*a+g*s*m-t*p*m-u*s*f+t*h*f)*A,e[6]=(g*l*a-o*p*a-g*s*c+t*p*c+o*s*f-t*l*f)*A,e[7]=(o*h*a-u*l*a+u*s*c-t*h*c-o*s*m+t*l*m)*A,e[8]=w*A,e[9]=(g*d*a-u*_*a-g*n*m+t*_*m+u*n*f-t*d*f)*A,e[10]=(o*_*a-g*r*a+g*n*c-t*_*c-o*n*f+t*r*f)*A,e[11]=(u*r*a-o*d*a-u*n*c+t*d*c+o*n*m-t*r*m)*A,e[12]=P*A,e[13]=(u*_*s-g*d*s+g*n*h-t*_*h-u*n*p+t*d*p)*A,e[14]=(g*r*s-o*_*s-g*n*l+t*_*l+o*n*p-t*r*p)*A,e[15]=(o*d*s-u*r*s+u*n*l-t*d*l-o*n*h+t*r*h)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,o=e.x,r=e.y,l=e.z,c=a*o,u=a*r;return this.set(c*o+n,c*r-s*l,c*l+s*r,0,c*r+s*l,u*r+n,u*l-s*o,0,c*l-s*r,u*l+s*o,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,o){return this.set(1,n,a,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,o=t._y,r=t._z,l=t._w,c=a+a,u=o+o,d=r+r,h=a*c,m=a*u,g=a*d,_=o*u,p=o*d,f=r*d,E=l*c,x=l*u,w=l*d,P=n.x,R=n.y,A=n.z;return s[0]=(1-(_+f))*P,s[1]=(m+w)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(m-w)*R,s[5]=(1-(h+f))*R,s[6]=(p+E)*R,s[7]=0,s[8]=(g+x)*A,s[9]=(p-E)*A,s[10]=(1-(h+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=ni.set(s[0],s[1],s[2]).length();const o=ni.set(s[4],s[5],s[6]).length(),r=ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ht.copy(this);const c=1/a,u=1/o,d=1/r;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=u,Ht.elements[5]*=u,Ht.elements[6]*=u,Ht.elements[8]*=d,Ht.elements[9]*=d,Ht.elements[10]*=d,t.setFromRotationMatrix(Ht),n.x=a,n.y=o,n.z=r,this}makePerspective(e,t,n,s,a,o,r=Zt){const l=this.elements,c=2*a/(t-e),u=2*a/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s);let m,g;if(r===Zt)m=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(r===Yi)m=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,a,o,r=Zt){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(o-a),h=(t+e)*c,m=(n+s)*u;let g,_;if(r===Zt)g=(o+a)*d,_=-2*d;else if(r===Yi)g=a*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ni=new L,Ht=new it,ju=new L(0,0,0),$u=new L(1,1,1),xn=new L,ps=new L,Ct=new L,wo=new it,Ao=new Pn;class es{constructor(e=0,t=0,n=0,s=es.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],o=s[4],r=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(St(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ao.setFromEuler(this),this.setFromQuaternion(Ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class Jr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ku=0;const Ro=new L,ii=new Pn,sn=new it,ms=new L,Ni=new L,Zu=new L,Ju=new Pn,Co=new L(1,0,0),Lo=new L(0,1,0),Po=new L(0,0,1),Qu={type:"added"},ef={type:"removed"};class ut extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new L,t=new es,n=new Pn,s=new L(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new Ge}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(Co,e)}rotateY(e){return this.rotateOnAxis(Lo,e)}rotateZ(e){return this.rotateOnAxis(Po,e)}translateOnAxis(e,t){return Ro.copy(e).applyQuaternion(this.quaternion),this.position.add(Ro.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Co,e)}translateY(e){return this.translateOnAxis(Lo,e)}translateZ(e){return this.translateOnAxis(Po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ms.copy(e):ms.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Ni,ms,this.up):sn.lookAt(ms,Ni,this.up),this.quaternion.setFromRotationMatrix(sn),s&&(sn.extractRotation(s.matrixWorld),ii.setFromRotationMatrix(sn),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ef)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,Zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Ju,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++){const r=s[a];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(a(e.materials,this.material[l]));s.material=r}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(a(e.animations,l))}}if(t){const r=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(r){const l=[];for(const c in r){const u=r[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ut.DEFAULT_UP=new L(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new L,an=new L,Sa=new L,rn=new L,si=new L,ai=new L,Do=new L,ya=new L,Ea=new L,ba=new L;let _s=!1;class Dt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vt.subVectors(e,t),s.cross(Vt);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Vt.subVectors(s,t),an.subVectors(n,t),Sa.subVectors(e,t);const o=Vt.dot(Vt),r=Vt.dot(an),l=Vt.dot(Sa),c=an.dot(an),u=an.dot(Sa),d=o*c-r*r;if(d===0)return a.set(0,0,0),null;const h=1/d,m=(c*l-r*u)*h,g=(o*u-r*l)*h;return a.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(e,t,n,s,a,o,r,l){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),this.getInterpolation(e,t,n,s,a,o,r,l)}static getInterpolation(e,t,n,s,a,o,r,l){return this.getBarycoord(e,t,n,s,rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,rn.x),l.addScaledVector(o,rn.y),l.addScaledVector(r,rn.z),l)}static isFrontFacing(e,t,n,s){return Vt.subVectors(n,t),an.subVectors(e,t),Vt.cross(an).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Vt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,a){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),Dt.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}getInterpolation(e,t,n,s,a){return Dt.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Dt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let o,r;si.subVectors(s,n),ai.subVectors(a,n),ya.subVectors(e,n);const l=si.dot(ya),c=ai.dot(ya);if(l<=0&&c<=0)return t.copy(n);Ea.subVectors(e,s);const u=si.dot(Ea),d=ai.dot(Ea);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(si,o);ba.subVectors(e,a);const m=si.dot(ba),g=ai.dot(ba);if(g>=0&&m<=g)return t.copy(a);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(n).addScaledVector(ai,r);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Do.subVectors(a,s),r=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(Do,r);const f=1/(p+_+h);return o=_*f,r=h*f,t.copy(n).addScaledVector(si,o).addScaledVector(ai,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Ta(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=jr(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=Ta(o,a,e+1/3),this.g=Ta(o,a,e),this.b=Ta(o,a,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=lt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=s[1],r=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){const n=Uc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return Ke.fromWorkingColorSpace(vt.copy(this),e),Math.round(St(vt.r*255,0,255))*65536+Math.round(St(vt.g*255,0,255))*256+Math.round(St(vt.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(vt.copy(this),t);const n=vt.r,s=vt.g,a=vt.b,o=Math.max(n,s,a),r=Math.min(n,s,a);let l,c;const u=(r+o)/2;if(r===o)l=0,c=0;else{const d=o-r;switch(c=u<=.5?d/(o+r):d/(2-o-r),o){case n:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-n)/d+2;break;case a:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=lt){Ke.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,s=vt.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(gs);const n=zi(Mn.h,gs.h,t),s=zi(Mn.s,gs.s,t),a=zi(Mn.l,gs.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Ue;Ue.NAMES=Uc;let tf=0;class Kn extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=qn,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xs,this.blendDst=qs,this.blendEquation=En,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qn&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xs&&(n.blendSrc=this.blendSrc),this.blendDst!==qs&&(n.blendDst=this.blendDst),this.blendEquation!==En&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const o=[];for(const r in a){const l=a[r];delete l.metadata,o.push(l)}return o}if(t){const a=s(e.textures),o=s(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $i extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new L,vs=new Le;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Er,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),a=yt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Er&&(e.usage=this.usage),e}}class Qr extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eo extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nf=0;const Ot=new it,wa=new ut,ri=new L,Lt=new Ri,Fi=new Ri,pt=new L;class Yt extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cc(e)?eo:Qr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ge().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Lt.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const r=t[a];Fi.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(Lt.min,Fi.min),Lt.expandByPoint(pt),pt.addVectors(Lt.max,Fi.max),Lt.expandByPoint(pt)):(Lt.expandByPoint(Fi.min),Lt.expandByPoint(Fi.max))}Lt.getCenter(n);let s=0;for(let a=0,o=e.count;a<o;a++)pt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(pt));if(t)for(let a=0,o=t.length;a<o;a++){const r=t[a],l=this.morphTargetsRelative;for(let c=0,u=r.count;c<u;c++)pt.fromBufferAttribute(r,c),l&&(ri.fromBufferAttribute(e,c),pt.add(ri)),s=Math.max(s,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,a=t.normal.array,o=t.uv.array,r=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<r;b++)c[b]=new L,u[b]=new L;const d=new L,h=new L,m=new L,g=new Le,_=new Le,p=new Le,f=new L,E=new L;function x(b,V,Y){d.fromArray(s,b*3),h.fromArray(s,V*3),m.fromArray(s,Y*3),g.fromArray(o,b*2),_.fromArray(o,V*2),p.fromArray(o,Y*2),h.sub(d),m.sub(d),_.sub(g),p.sub(g);const ae=1/(_.x*p.y-p.x*_.y);isFinite(ae)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(ae),E.copy(m).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(ae),c[b].add(f),c[V].add(f),c[Y].add(f),u[b].add(E),u[V].add(E),u[Y].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let b=0,V=w.length;b<V;++b){const Y=w[b],ae=Y.start,D=Y.count;for(let B=ae,W=ae+D;B<W;B+=3)x(n[B+0],n[B+1],n[B+2])}const P=new L,R=new L,A=new L,q=new L;function S(b){A.fromArray(a,b*3),q.copy(A);const V=c[b];P.copy(V),P.sub(A.multiplyScalar(A.dot(V))).normalize(),R.crossVectors(q,V);const ae=R.dot(u[b])<0?-1:1;l[b*4]=P.x,l[b*4+1]=P.y,l[b*4+2]=P.z,l[b*4+3]=ae}for(let b=0,V=w.length;b<V;++b){const Y=w[b],ae=Y.start,D=Y.count;for(let B=ae,W=ae+D;B<W;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new L,a=new L,o=new L,r=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,a),d.subVectors(s,a),u.cross(d),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),r.add(u),l.add(u),c.add(u),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,a),d.subVectors(s,a),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(r,l){const c=r.array,u=r.itemSize,d=r.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){r.isInterleavedBufferAttribute?m=l[_]*r.data.stride+r.offset:m=l[_]*u;for(let f=0;f<u;f++)h[g++]=c[m++]}return new qt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,s=this.attributes;for(const r in s){const l=s[r],c=e(l,n);t.setAttribute(r,c)}const a=this.morphAttributes;for(const r in a){const l=[],c=a[r];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],d=a[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uo=new it,Bn=new ia,xs=new Qi,Io=new L,oi=new L,li=new L,ci=new L,Aa=new L,Ms=new L,Ss=new Le,ys=new Le,Es=new Le,No=new L,Fo=new L,Oo=new L,bs=new L,Ts=new L;class ct extends ut{constructor(e=new Yt,t=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const r=this.morphTargetInfluences;if(a&&r){Ms.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=r[l],d=a[l];u!==0&&(Aa.fromBufferAttribute(d,e),o?Ms.addScaledVector(Aa,u):Ms.addScaledVector(Aa.sub(t),u))}t.add(Ms)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(a),Bn.copy(e.ray).recast(e.near),!(xs.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(xs,Io)===null||Bn.origin.distanceToSquared(Io)>(e.far-e.near)**2))&&(Uo.copy(a).invert(),Bn.copy(e.ray).applyMatrix4(Uo),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,n){let s;const a=this.geometry,o=this.material,r=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,m=a.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(r.count,Math.min(p.start+p.count,m.start+m.count));for(let w=E,P=x;w<P;w+=3){const R=r.getX(w),A=r.getX(w+1),q=r.getX(w+2);s=ws(this,f,e,n,c,u,d,R,A,q),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(r.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const E=r.getX(p),x=r.getX(p+1),w=r.getX(p+2);s=ws(this,o,e,n,c,u,d,E,x,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=E,P=x;w<P;w+=3){const R=w,A=w+1,q=w+2;s=ws(this,f,e,n,c,u,d,R,A,q),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const E=p,x=p+1,w=p+2;s=ws(this,o,e,n,c,u,d,E,x,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function sf(i,e,t,n,s,a,o,r){let l;if(e.side===Tt?l=n.intersectTriangle(o,a,s,!0,r):l=n.intersectTriangle(s,a,o,e.side===pn,r),l===null)return null;Ts.copy(r),Ts.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ts);return c<t.near||c>t.far?null:{distance:c,point:Ts.clone(),object:i}}function ws(i,e,t,n,s,a,o,r,l,c){i.getVertexPosition(r,oi),i.getVertexPosition(l,li),i.getVertexPosition(c,ci);const u=sf(i,e,t,n,oi,li,ci,bs);if(u){s&&(Ss.fromBufferAttribute(s,r),ys.fromBufferAttribute(s,l),Es.fromBufferAttribute(s,c),u.uv=Dt.getInterpolation(bs,oi,li,ci,Ss,ys,Es,new Le)),a&&(Ss.fromBufferAttribute(a,r),ys.fromBufferAttribute(a,l),Es.fromBufferAttribute(a,c),u.uv1=Dt.getInterpolation(bs,oi,li,ci,Ss,ys,Es,new Le),u.uv2=u.uv1),o&&(No.fromBufferAttribute(o,r),Fo.fromBufferAttribute(o,l),Oo.fromBufferAttribute(o,c),u.normal=Dt.getInterpolation(bs,oi,li,ci,No,Fo,Oo,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:r,b:l,c,normal:new L,materialIndex:0};Dt.getNormal(oi,li,ci,d.normal),u.face=d}return u}class Ci extends Yt{constructor(e=1,t=1,n=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:o};const r=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,o,a,0),g("z","y","x",1,-1,n,t,-e,o,a,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(d,2));function g(_,p,f,E,x,w,P,R,A,q,S){const b=w/A,V=P/q,Y=w/2,ae=P/2,D=R/2,B=A+1,W=q+1;let j=0,I=0;const H=new L;for(let X=0;X<W;X++){const Z=X*V-ae;for(let $=0;$<B;$++){const z=$*b-Y;H[_]=z*E,H[p]=Z*x,H[f]=D,c.push(H.x,H.y,H.z),H[_]=0,H[p]=0,H[f]=R>0?1:-1,u.push(H.x,H.y,H.z),d.push($/A),d.push(1-X/q),j+=1}}for(let X=0;X<q;X++)for(let Z=0;Z<A;Z++){const $=h+Z+B*X,z=h+Z+B*(X+1),K=h+(Z+1)+B*(X+1),ce=h+(Z+1)+B*X;l.push($,z,ce),l.push(z,K,ce),I+=6}r.addGroup(m,I,S),m+=I,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=wi(i[t]);for(const s in n)e[s]=n[s]}return e}function af(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ic(i){return i.getRenderTarget()===null?i.outputColorSpace:Ke.workingColorSpace}const Nc={clone:wi,merge:Et};var rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rf,this.fragmentShader=of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class to extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Zt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ut extends to{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const r=this.filmOffset;r!==0&&(a+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ui=-90,fi=1;class Fc extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ut(ui,fi,e,t);s.layers=this.layers,this.add(s);const a=new Ut(ui,fi,e,t);a.layers=this.layers,this.add(a);const o=new Ut(ui,fi,e,t);o.layers=this.layers,this.add(o);const r=new Ut(ui,fi,e,t);r.layers=this.layers,this.add(r);const l=new Ut(ui,fi,e,t);l.layers=this.layers,this.add(l);const c=new Ut(ui,fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,o,r,l]=t;for(const c of t)this.remove(c);if(e===Zt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,r),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class no extends wt{constructor(e,t,n,s,a,o,r,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Yn,super(e,t,n,s,a,o,r,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oc extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Gi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Rn?lt:It),this.texture=new no(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ci(5,5,5),a=new Dn({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:fn});a.uniforms.tEquirect.value=t;const o=new ct(s,a),r=t.minFilter;return t.minFilter===bi&&(t.minFilter=Pt),new Fc(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(a)}}const Ra=new L,lf=new L,cf=new Ge;class on{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ra.subVectors(n,t).cross(lf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ra),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cf.getNormalMatrix(e),s=this.coplanarPoint(Ra).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new Qi,As=new L;class sa{constructor(e=new on,t=new on,n=new on,s=new on,a=new on,o=new on){this.planes=[e,t,n,s,a,o]}set(e,t,n,s,a,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(s),r[4].copy(a),r[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zt){const n=this.planes,s=e.elements,a=s[0],o=s[1],r=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],m=s[8],g=s[9],_=s[10],p=s[11],f=s[12],E=s[13],x=s[14],w=s[15];if(n[0].setComponents(l-a,h-c,p-m,w-f).normalize(),n[1].setComponents(l+a,h+c,p+m,w+f).normalize(),n[2].setComponents(l+o,h+u,p+g,w+E).normalize(),n[3].setComponents(l-o,h-u,p-g,w-E).normalize(),n[4].setComponents(l-r,h-d,p-_,w-x).normalize(),t===Zt)n[5].setComponents(l+r,h+d,p+_,w+x).normalize();else if(t===Yi)n[5].setComponents(r,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(As.x=s.normal.x>0?e.max.x:e.min.x,As.y=s.normal.y>0?e.max.y:e.min.y,As.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kc(){let i=null,e=!1,t=null,n=null;function s(a,o){t(a,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function uf(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const d=c.array,h=c.usage,m=d.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,d,h),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,u,d){const h=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&g.length===0&&i.bufferSubData(d,0,h),g.length!==0){for(let _=0,p=g.length;_<p;_++){const f=g[_];t?i.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):i.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,c,u),d.version=c.version}}return{get:o,remove:r,update:l}}class ts extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,o=t/2,r=Math.floor(n),l=Math.floor(s),c=r+1,u=l+1,d=e/r,h=t/l,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){const E=f*h-o;for(let x=0;x<c;x++){const w=x*d-a;g.push(w,-E,0),_.push(0,0,1),p.push(x/r),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<r;E++){const x=E+c*f,w=E+c*(f+1),P=E+1+c*(f+1),R=E+1+c*f;m.push(x,w,R),m.push(w,P,R)}this.setIndex(m),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(_,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.widthSegments,e.heightSegments)}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hf=`#ifdef USE_ALPHAHASH
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
#endif`,df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
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
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xf=`#ifdef USE_BATCHING
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
#endif`,Mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bf=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,If=`#define PI 3.141592653589793
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
} // validated`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ff=`vec3 transformedNormal = objectNormal;
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
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hf=`
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
}`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
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
}`,Qf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,eh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,th=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ih=`uniform bool receiveShadow;
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
#endif`,sh=`#ifdef USE_ENVMAP
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
#endif`,ah=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ch=`PhysicalMaterial material;
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
#endif`,uh=`struct PhysicalMaterial {
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
}`,fh=`
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
#endif`,hh=`#if defined( RE_IndirectDiffuse )
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
#endif`,dh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ph=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_h=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sh=`#if defined( USE_POINTS_UV )
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
#endif`,yh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Th=`#ifdef USE_MORPHNORMALS
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
#endif`,wh=`#ifdef USE_MORPHTARGETS
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
#endif`,Ah=`#ifdef USE_MORPHTARGETS
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
#endif`,Rh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ch=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ph=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uh=`#ifdef USE_NORMALMAP
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
#endif`,Ih=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Oh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$h=`float getShadowMask() {
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
}`,Kh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zh=`#ifdef USE_SKINNING
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
#endif`,Jh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qh=`#ifdef USE_SKINNING
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
#endif`,ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,id=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sd=`#ifdef USE_TRANSMISSION
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
#endif`,ad=`#ifdef USE_TRANSMISSION
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
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fd=`uniform sampler2D t2D;
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
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,md=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`#include <common>
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
}`,gd=`#if DEPTH_PACKING == 3200
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
}`,vd=`#define DISTANCE
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
}`,xd=`#define DISTANCE
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
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`uniform float scale;
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
}`,Ed=`uniform vec3 diffuse;
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
}`,bd=`#include <common>
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
}`,Td=`uniform vec3 diffuse;
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
}`,wd=`#define LAMBERT
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
}`,Ad=`#define LAMBERT
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
}`,Rd=`#define MATCAP
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
}`,Cd=`#define MATCAP
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
}`,Ld=`#define NORMAL
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
}`,Pd=`#define NORMAL
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
}`,Dd=`#define PHONG
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
}`,Ud=`#define PHONG
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
}`,Id=`#define STANDARD
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
}`,Nd=`#define STANDARD
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
}`,Fd=`#define TOON
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
}`,Od=`#define TOON
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
}`,kd=`uniform float size;
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
}`,Bd=`uniform vec3 diffuse;
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
}`,zd=`#include <common>
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
}`,Gd=`uniform vec3 color;
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
}`,Hd=`uniform float rotation;
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
}`,Vd=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:ff,alphahash_pars_fragment:hf,alphamap_fragment:df,alphamap_pars_fragment:pf,alphatest_fragment:mf,alphatest_pars_fragment:_f,aomap_fragment:gf,aomap_pars_fragment:vf,batching_pars_vertex:xf,batching_vertex:Mf,begin_vertex:Sf,beginnormal_vertex:yf,bsdfs:Ef,iridescence_fragment:bf,bumpmap_pars_fragment:Tf,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Af,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Cf,color_fragment:Lf,color_pars_fragment:Pf,color_pars_vertex:Df,color_vertex:Uf,common:If,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:Ff,displacementmap_pars_vertex:Of,displacementmap_vertex:kf,emissivemap_fragment:Bf,emissivemap_pars_fragment:zf,colorspace_fragment:Gf,colorspace_pars_fragment:Hf,envmap_fragment:Vf,envmap_common_pars_fragment:Wf,envmap_pars_fragment:Xf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:sh,envmap_vertex:Yf,fog_vertex:jf,fog_pars_vertex:$f,fog_fragment:Kf,fog_pars_fragment:Zf,gradientmap_pars_fragment:Jf,lightmap_fragment:Qf,lightmap_pars_fragment:eh,lights_lambert_fragment:th,lights_lambert_pars_fragment:nh,lights_pars_begin:ih,lights_toon_fragment:ah,lights_toon_pars_fragment:rh,lights_phong_fragment:oh,lights_phong_pars_fragment:lh,lights_physical_fragment:ch,lights_physical_pars_fragment:uh,lights_fragment_begin:fh,lights_fragment_maps:hh,lights_fragment_end:dh,logdepthbuf_fragment:ph,logdepthbuf_pars_fragment:mh,logdepthbuf_pars_vertex:_h,logdepthbuf_vertex:gh,map_fragment:vh,map_pars_fragment:xh,map_particle_fragment:Mh,map_particle_pars_fragment:Sh,metalnessmap_fragment:yh,metalnessmap_pars_fragment:Eh,morphcolor_vertex:bh,morphnormal_vertex:Th,morphtarget_pars_vertex:wh,morphtarget_vertex:Ah,normal_fragment_begin:Rh,normal_fragment_maps:Ch,normal_pars_fragment:Lh,normal_pars_vertex:Ph,normal_vertex:Dh,normalmap_pars_fragment:Uh,clearcoat_normal_fragment_begin:Ih,clearcoat_normal_fragment_maps:Nh,clearcoat_pars_fragment:Fh,iridescence_pars_fragment:Oh,opaque_fragment:kh,packing:Bh,premultiplied_alpha_fragment:zh,project_vertex:Gh,dithering_fragment:Hh,dithering_pars_fragment:Vh,roughnessmap_fragment:Wh,roughnessmap_pars_fragment:Xh,shadowmap_pars_fragment:qh,shadowmap_pars_vertex:Yh,shadowmap_vertex:jh,shadowmask_pars_fragment:$h,skinbase_vertex:Kh,skinning_pars_vertex:Zh,skinning_vertex:Jh,skinnormal_vertex:Qh,specularmap_fragment:ed,specularmap_pars_fragment:td,tonemapping_fragment:nd,tonemapping_pars_fragment:id,transmission_fragment:sd,transmission_pars_fragment:ad,uv_pars_fragment:rd,uv_pars_vertex:od,uv_vertex:ld,worldpos_vertex:cd,background_vert:ud,background_frag:fd,backgroundCube_vert:hd,backgroundCube_frag:dd,cube_vert:pd,cube_frag:md,depth_vert:_d,depth_frag:gd,distanceRGBA_vert:vd,distanceRGBA_frag:xd,equirect_vert:Md,equirect_frag:Sd,linedashed_vert:yd,linedashed_frag:Ed,meshbasic_vert:bd,meshbasic_frag:Td,meshlambert_vert:wd,meshlambert_frag:Ad,meshmatcap_vert:Rd,meshmatcap_frag:Cd,meshnormal_vert:Ld,meshnormal_frag:Pd,meshphong_vert:Dd,meshphong_frag:Ud,meshphysical_vert:Id,meshphysical_frag:Nd,meshtoon_vert:Fd,meshtoon_frag:Od,points_vert:kd,points_frag:Bd,shadow_vert:zd,shadow_frag:Gd,sprite_vert:Hd,sprite_frag:Vd},re={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Wt={basic:{uniforms:Et([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Et([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Et([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Et([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Et([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Et([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Et([re.points,re.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Et([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Et([re.common,re.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Et([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Et([re.sprite,re.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Et([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Et([re.lights,re.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Wt.physical={uniforms:Et([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Rs={r:0,b:0,g:0};function Wd(i,e,t,n,s,a,o){const r=new Ue(0);let l=a===!0?0:1,c,u,d=null,h=0,m=null;function g(p,f){let E=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(r,l):x&&x.isColor&&(_(x,1),E=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Zi)?(u===void 0&&(u=new ct(new Ci(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:wi(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(x.colorSpace)!==Ze,(d!==x||h!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ct(new ts(2,2),new Dn({name:"BackgroundMaterial",uniforms:wi(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(x.colorSpace)!==Ze,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(Rs,Ic(i)),n.buffers.color.setClear(Rs.r,Rs.g,Rs.b,f,o)}return{getClearColor:function(){return r},setClearColor:function(p,f=1){r.set(p),l=f,_(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(r,l)},render:g}}function Xd(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||a!==null,r={},l=p(null);let c=l,u=!1;function d(D,B,W,j,I){let H=!1;if(o){const X=_(j,W,B);c!==X&&(c=X,m(c.object)),H=f(D,j,W,I),H&&E(D,j,W,I)}else{const X=B.wireframe===!0;(c.geometry!==j.id||c.program!==W.id||c.wireframe!==X)&&(c.geometry=j.id,c.program=W.id,c.wireframe=X,H=!0)}I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(H||u)&&(u=!1,q(D,B,W,j),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function h(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):a.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):a.deleteVertexArrayOES(D)}function _(D,B,W){const j=W.wireframe===!0;let I=r[D.id];I===void 0&&(I={},r[D.id]=I);let H=I[B.id];H===void 0&&(H={},I[B.id]=H);let X=H[j];return X===void 0&&(X=p(h()),H[j]=X),X}function p(D){const B=[],W=[],j=[];for(let I=0;I<s;I++)B[I]=0,W[I]=0,j[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:j,object:D,attributes:{},index:null}}function f(D,B,W,j){const I=c.attributes,H=B.attributes;let X=0;const Z=W.getAttributes();for(const $ in Z)if(Z[$].location>=0){const K=I[$];let ce=H[$];if(ce===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;X++}return c.attributesNum!==X||c.index!==j}function E(D,B,W,j){const I={},H=B.attributes;let X=0;const Z=W.getAttributes();for(const $ in Z)if(Z[$].location>=0){let K=H[$];K===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),I[$]=ce,X++}c.attributes=I,c.attributesNum=X,c.index=j}function x(){const D=c.newAttributes;for(let B=0,W=D.length;B<W;B++)D[B]=0}function w(D){P(D,0)}function P(D,B){const W=c.newAttributes,j=c.enabledAttributes,I=c.attributeDivisors;W[D]=1,j[D]===0&&(i.enableVertexAttribArray(D),j[D]=1),I[D]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),I[D]=B)}function R(){const D=c.newAttributes,B=c.enabledAttributes;for(let W=0,j=B.length;W<j;W++)B[W]!==D[W]&&(i.disableVertexAttribArray(W),B[W]=0)}function A(D,B,W,j,I,H,X){X===!0?i.vertexAttribIPointer(D,B,W,I,H):i.vertexAttribPointer(D,B,W,j,I,H)}function q(D,B,W,j){if(n.isWebGL2===!1&&(D.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const I=j.attributes,H=W.getAttributes(),X=B.defaultAttributeValues;for(const Z in H){const $=H[Z];if($.location>=0){let z=I[Z];if(z===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(z=D.instanceColor)),z!==void 0){const K=z.normalized,ce=z.itemSize,ve=t.get(z);if(ve===void 0)continue;const _e=ve.buffer,Pe=ve.type,De=ve.bytesPerElement,be=n.isWebGL2===!0&&(Pe===i.INT||Pe===i.UNSIGNED_INT||z.gpuType===kr);if(z.isInterleavedBufferAttribute){const Ve=z.data,F=Ve.stride,mt=z.offset;if(Ve.isInstancedInterleavedBuffer){for(let Se=0;Se<$.locationSize;Se++)P($.location+Se,Ve.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Se=0;Se<$.locationSize;Se++)w($.location+Se);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Se=0;Se<$.locationSize;Se++)A($.location+Se,ce/$.locationSize,Pe,K,F*De,(mt+ce/$.locationSize*Se)*De,be)}else{if(z.isInstancedBufferAttribute){for(let Ve=0;Ve<$.locationSize;Ve++)P($.location+Ve,z.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Ve=0;Ve<$.locationSize;Ve++)w($.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Ve=0;Ve<$.locationSize;Ve++)A($.location+Ve,ce/$.locationSize,Pe,K,ce*De,ce/$.locationSize*Ve*De,be)}}else if(X!==void 0){const K=X[Z];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv($.location,K);break;case 3:i.vertexAttrib3fv($.location,K);break;case 4:i.vertexAttrib4fv($.location,K);break;default:i.vertexAttrib1fv($.location,K)}}}}R()}function S(){Y();for(const D in r){const B=r[D];for(const W in B){const j=B[W];for(const I in j)g(j[I].object),delete j[I];delete B[W]}delete r[D]}}function b(D){if(r[D.id]===void 0)return;const B=r[D.id];for(const W in B){const j=B[W];for(const I in j)g(j[I].object),delete j[I];delete B[W]}delete r[D.id]}function V(D){for(const B in r){const W=r[B];if(W[D.id]===void 0)continue;const j=W[D.id];for(const I in j)g(j[I].object),delete j[I];delete W[D.id]}}function Y(){ae(),u=!0,c!==l&&(c=l,m(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:ae,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:w,disableUnusedAttributes:R}}function qd(i,e,t,n){const s=n.isWebGL2;let a;function o(u){a=u}function r(u,d){i.drawArrays(a,u,d),t.update(d,a,1)}function l(u,d,h){if(h===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](a,u,d,h),t.update(d,a,h)}function c(u,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(a,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_];t.update(g,a,1)}}this.setMode=o,this.render=r,this.renderInstances=l,this.renderMultiDraw=c}function Yd(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let r=t.precision!==void 0?t.precision:"highp";const l=a(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,w=o||e.has("OES_texture_float"),P=x&&w,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:a,precision:r,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:P,maxSamples:R}}function jd(i){const e=this;let t=null,n=0,s=!1,a=!1;const o=new on,r=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||s;return s=h,n=d.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||a&&!p)a?u(null):c();else{const E=a?0:n,x=E*4;let w=f.clippingState||null;l.value=w,w=u(g,h,x,m);for(let P=0;P!==x;++P)w[P]=t[P];f.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,E=h.matrixWorldInverse;r.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,w=m;x!==_;++x,w+=4)o.copy(d[x]).applyMatrix4(E,r),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function $d(i){let e=new WeakMap;function t(o,r){return r===Ys?o.mapping=Yn:r===js&&(o.mapping=jn),o}function n(o){if(o&&o.isTexture){const r=o.mapping;if(r===Ys||r===js)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Oc(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const r=o.target;r.removeEventListener("dispose",s);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class aa extends to{constructor(e=-1,t=1,n=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,o=n+e,r=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,r-=u*this.view.offsetY,l=r-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gi=4,ko=[.125,.215,.35,.446,.526,.582],Wn=20,Ca=new aa,Bo=new Ue;let La=null,Pa=0,Da=0;const Vn=(1+Math.sqrt(5))/2,hi=1/Vn,zo=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Vn,hi),new L(0,Vn,-hi),new L(hi,0,Vn),new L(-hi,0,Vn),new L(Vn,hi,0),new L(-Vn,hi,0)];class wr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){La=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Pa,Da),e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yn||e.mapping===jn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Ti,format:zt,colorSpace:Qt,depthBuffer:!1},s=Go(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Go(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kd(a)),this._blurMaterial=Zd(a,e,t)}return s}_compileMaterial(e){const t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,n,s){const r=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Bo),u.toneMapping=hn,u.autoClear=!1;const m=new $i({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new ct(new Ci,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Bo),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(r.up.set(0,l[f],0),r.lookAt(c[f],0,0)):E===1?(r.up.set(0,0,l[f]),r.lookAt(0,c[f],0)):(r.up.set(0,l[f],0),r.lookAt(0,0,c[f]));const x=this._cubeSize;Cs(s,E*x,f>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,r),u.render(e,r)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Yn||e.mapping===jn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ho());const a=s?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=e;const l=this._cubeSize;Cs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ca)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=zo[(s-1)%zo.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,s,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",a),this._halfBlur(o,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ct(this._lodPlanes[s],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Wn-1),_=a/g,p=isFinite(a)?1+Math.floor(u*_):Wn;p>Wn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wn}`);const f=[];let E=0;for(let A=0;A<Wn;++A){const q=A/_,S=Math.exp(-q*q/2);f.push(S),A===0?E+=S:A<p&&(E+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/E;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",r&&(h.poleAxis.value=r);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const w=this._sizeLods[s],P=3*w*(s>x-gi?s-x+gi:0),R=4*(this._cubeSize-w);Cs(t,P,R,3*w,2*w),l.setRenderTarget(t),l.render(d,Ca)}}function Kd(i){const e=[],t=[],n=[];let s=i;const a=i-gi+1+ko.length;for(let o=0;o<a;o++){const r=Math.pow(2,s);t.push(r);let l=1/r;o>i-gi?l=ko[o-i+gi-1]:o===0&&(l=0),n.push(l);const c=1/(r-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,f=1,E=new Float32Array(_*g*m),x=new Float32Array(p*g*m),w=new Float32Array(f*g*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,q=R>2?0:-1,S=[A,q,0,A+2/3,q,0,A+2/3,q+1,0,A,q,0,A+2/3,q+1,0,A,q+1,0];E.set(S,_*g*R),x.set(h,p*g*R);const b=[R,R,R,R,R,R];w.set(b,f*g*R)}const P=new Yt;P.setAttribute("position",new qt(E,_)),P.setAttribute("uv",new qt(x,p)),P.setAttribute("faceIndex",new qt(w,f)),e.push(P),s>gi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Go(i,e,t){const n=new Ln(i,e,t);return n.texture.mapping=Zi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Zd(i,e,t){const n=new Float32Array(Wn),s=new L(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:io(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Ho(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Vo(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function io(){return`

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
	`}function Jd(i){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===Ys||l===js,u=l===Yn||l===jn;if(c||u)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=e.get(r);return t===null&&(t=new wr(i)),d=c?t.fromEquirectangular(r,d):t.fromCubemap(r,d),e.set(r,d),d.texture}else{if(e.has(r))return e.get(r).texture;{const d=r.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new wr(i));const h=c?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,h),r.addEventListener("dispose",a),h.texture}else return null}}}return r}function s(r){let l=0;const c=6;for(let u=0;u<c;u++)r[u]!==void 0&&l++;return l===c}function a(r){const l=r.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Qd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ep(i,e,t,n){const s={},a=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete s[h.id];const m=a.get(h);m&&(e.remove(m),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function r(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let x=0,w=E.length;x<w;x+=3){const P=E[x+0],R=E[x+1],A=E[x+2];h.push(P,R,R,A,A,P)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,w=E.length/3-1;x<w;x+=3){const P=x+0,R=x+1,A=x+2;h.push(P,R,R,A,A,P)}}else return;const p=new(Cc(h)?eo:Qr)(h,1);p.version=_;const f=a.get(d);f&&e.remove(f),a.set(d,p)}function u(d){const h=a.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return a.get(d)}return{get:r,update:l,getWireframeAttribute:u}}function tp(i,e,t,n){const s=n.isWebGL2;let a;function o(m){a=m}let r,l;function c(m){r=m.type,l=m.bytesPerElement}function u(m,g){i.drawElements(a,g,r,m*l),t.update(g,a,1)}function d(m,g,_){if(_===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](a,g,r,m*l,_),t.update(g,a,_)}function h(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(a,g,0,r,m,0,_);let f=0;for(let E=0;E<_;E++)f+=g[E];t.update(f,a,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function np(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,r){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=r*(a/3);break;case i.LINES:t.lines+=r*(a/2);break;case i.LINE_STRIP:t.lines+=r*(a-1);break;case i.LINE_LOOP:t.lines+=r*a;break;case i.POINTS:t.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ip(i,e){return i[0]-e[0]}function sp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ap(i,e,t){const n={},s=new Float32Array(8),a=new WeakMap,o=new Qe,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=a.get(u);if(p===void 0||p.count!==_){let B=function(){ae.dispose(),a.delete(u),u.removeEventListener("dispose",B)};var m=B;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],q=u.morphAttributes.color||[];let S=0;x===!0&&(S=1),w===!0&&(S=2),P===!0&&(S=3);let b=u.attributes.position.count*S,V=1;b>e.maxTextureSize&&(V=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const Y=new Float32Array(b*V*4*_),ae=new Zr(Y,b,V,_);ae.type=un,ae.needsUpdate=!0;const D=S*4;for(let W=0;W<_;W++){const j=R[W],I=A[W],H=q[W],X=b*V*4*W;for(let Z=0;Z<j.count;Z++){const $=Z*D;x===!0&&(o.fromBufferAttribute(j,Z),Y[X+$+0]=o.x,Y[X+$+1]=o.y,Y[X+$+2]=o.z,Y[X+$+3]=0),w===!0&&(o.fromBufferAttribute(I,Z),Y[X+$+4]=o.x,Y[X+$+5]=o.y,Y[X+$+6]=o.z,Y[X+$+7]=0),P===!0&&(o.fromBufferAttribute(H,Z),Y[X+$+8]=o.x,Y[X+$+9]=o.y,Y[X+$+10]=o.z,Y[X+$+11]=H.itemSize===4?o.w:1)}}p={count:_,texture:ae,size:new Le(b,V)},a.set(u,p),u.addEventListener("dispose",B)}let f=0;for(let x=0;x<h.length;x++)f+=h[x];const E=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",h),d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let w=0;w<g;w++)_[w]=[w,0];n[u.id]=_}for(let w=0;w<g;w++){const P=_[w];P[0]=w,P[1]=h[w]}_.sort(sp);for(let w=0;w<8;w++)w<g&&_[w][1]?(r[w][0]=_[w][0],r[w][1]=_[w][1]):(r[w][0]=Number.MAX_SAFE_INTEGER,r[w][1]=0);r.sort(ip);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let E=0;for(let w=0;w<8;w++){const P=r[w],R=P[0],A=P[1];R!==Number.MAX_SAFE_INTEGER&&A?(p&&u.getAttribute("morphTarget"+w)!==p[R]&&u.setAttribute("morphTarget"+w,p[R]),f&&u.getAttribute("morphNormal"+w)!==f[R]&&u.setAttribute("morphNormal"+w,f[R]),s[w]=A,E+=A):(p&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),f&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),s[w]=0)}const x=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(i,"morphTargetBaseInfluence",x),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function rp(i,e,t,n){let s=new WeakMap;function a(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}class so extends wt{constructor(e,t,n,s,a,o,r,l,c,u){if(u=u!==void 0?u:An,u!==An&&u!==$n)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===An&&(n=cn),n===void 0&&u===$n&&(n=wn),super(null,s,a,o,r,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bc=new wt,zc=new so(1,1);zc.compareFunction=Yr;const Gc=new Zr,Hc=new Dc,Vc=new no,Wo=[],Xo=[],qo=new Float32Array(16),Yo=new Float32Array(9),jo=new Float32Array(4);function Li(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Wo[s];if(a===void 0&&(a=new Float32Array(s),Wo[s]=a),e!==0){n.toArray(a,0);for(let o=1,r=0;o!==e;++o)r+=t,i[o].toArray(a,r)}return a}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ra(i,e){let t=Xo[e];t===void 0&&(t=new Int32Array(e),Xo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function op(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),ht(t,e)}}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),ht(t,e)}}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),ht(t,e)}}function fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ft(t,n))return;jo.set(n),i.uniformMatrix2fv(this.addr,!1,jo),ht(t,n)}}function hp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ft(t,n))return;Yo.set(n),i.uniformMatrix3fv(this.addr,!1,Yo),ht(t,n)}}function dp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ft(t,n))return;qo.set(n),i.uniformMatrix4fv(this.addr,!1,qo),ht(t,n)}}function pp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),ht(t,e)}}function _p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),ht(t,e)}}function gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),ht(t,e)}}function vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),ht(t,e)}}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),ht(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),ht(t,e)}}function yp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const a=this.type===i.SAMPLER_2D_SHADOW?zc:Bc;t.setTexture2D(e||a,s)}function Ep(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hc,s)}function bp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vc,s)}function Tp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Gc,s)}function wp(i){switch(i){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return up;case 35674:return fp;case 35675:return hp;case 35676:return dp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return _p;case 35669:case 35673:return gp;case 5125:return vp;case 36294:return xp;case 36295:return Mp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return Tp}}function Ap(i,e){i.uniform1fv(this.addr,e)}function Rp(i,e){const t=Li(e,this.size,2);i.uniform2fv(this.addr,t)}function Cp(i,e){const t=Li(e,this.size,3);i.uniform3fv(this.addr,t)}function Lp(i,e){const t=Li(e,this.size,4);i.uniform4fv(this.addr,t)}function Pp(i,e){const t=Li(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Dp(i,e){const t=Li(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Up(i,e){const t=Li(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ip(i,e){i.uniform1iv(this.addr,e)}function Np(i,e){i.uniform2iv(this.addr,e)}function Fp(i,e){i.uniform3iv(this.addr,e)}function Op(i,e){i.uniform4iv(this.addr,e)}function kp(i,e){i.uniform1uiv(this.addr,e)}function Bp(i,e){i.uniform2uiv(this.addr,e)}function zp(i,e){i.uniform3uiv(this.addr,e)}function Gp(i,e){i.uniform4uiv(this.addr,e)}function Hp(i,e,t){const n=this.cache,s=e.length,a=ra(t,s);ft(n,a)||(i.uniform1iv(this.addr,a),ht(n,a));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Bc,a[o])}function Vp(i,e,t){const n=this.cache,s=e.length,a=ra(t,s);ft(n,a)||(i.uniform1iv(this.addr,a),ht(n,a));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hc,a[o])}function Wp(i,e,t){const n=this.cache,s=e.length,a=ra(t,s);ft(n,a)||(i.uniform1iv(this.addr,a),ht(n,a));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vc,a[o])}function Xp(i,e,t){const n=this.cache,s=e.length,a=ra(t,s);ft(n,a)||(i.uniform1iv(this.addr,a),ht(n,a));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gc,a[o])}function qp(i){switch(i){case 5126:return Ap;case 35664:return Rp;case 35665:return Cp;case 35666:return Lp;case 35674:return Pp;case 35675:return Dp;case 35676:return Up;case 5124:case 35670:return Ip;case 35667:case 35671:return Np;case 35668:case 35672:return Fp;case 35669:case 35673:return Op;case 5125:return kp;case 36294:return Bp;case 36295:return zp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}class Yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wp(t.type)}}class jp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qp(t.type)}}class $p{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const r=s[a];r.setValue(e,t[r.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function $o(i,e){i.seq.push(e),i.map[e.id]=e}function Kp(i,e,t){const n=i.name,s=n.length;for(Ua.lastIndex=0;;){const a=Ua.exec(n),o=Ua.lastIndex;let r=a[1];const l=a[2]==="]",c=a[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===s){$o(t,c===void 0?new Yp(r,i,e):new jp(r,i,e));break}else{let d=t.map[r];d===void 0&&(d=new $p(r),$o(t,d)),t=d}}}class Vs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),o=e.getUniformLocation(t,a.name);Kp(a,o,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,o=t.length;a!==o;++a){const r=t[a],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Ko(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Zp=37297;let Jp=0;function Qp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=s;o<a;o++){const r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}function em(i){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(i);let n;switch(e===t?n="":e===qi&&t===Xi?n="LinearDisplayP3ToLinearSRGB":e===Xi&&t===qi&&(n="LinearSRGBToLinearDisplayP3"),i){case Qt:case Ji:return[n,"LinearTransferOETF"];case lt:case na:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Zo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Qp(i.getShaderSource(e),o)}else return s}function tm(i,e){const t=em(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nm(i,e){let t;switch(e){case sc:t="Linear";break;case ac:t="Reinhard";break;case rc:t="OptimizedCineon";break;case oc:t="ACESFilmic";break;case cc:t="AgX";break;case lc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function im(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vi).join(`
`)}function sm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vi).join(`
`)}function am(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),o=a.name;let r=1;a.type===i.FLOAT_MAT2&&(r=2),a.type===i.FLOAT_MAT3&&(r=3),a.type===i.FLOAT_MAT4&&(r=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:r}}return t}function vi(i){return i!==""}function Jo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const om=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ar(i){return i.replace(om,cm)}const lm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cm(i,e){let t=ke[e];if(t===void 0){const n=lm.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ar(t)}const um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function el(i){return i.replace(um,fm)}function fm(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function tl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nr?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$t&&(e="SHADOWMAP_TYPE_VSM"),e}function dm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yn:case jn:e="ENVMAP_TYPE_CUBE";break;case Zi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case jn:e="ENVMAP_MODE_REFRACTION";break}return e}function mm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ea:e="ENVMAP_BLENDING_MULTIPLY";break;case nc:e="ENVMAP_BLENDING_MIX";break;case ic:e="ENVMAP_BLENDING_ADD";break}return e}function _m(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function gm(i,e,t,n){const s=i.getContext(),a=t.defines;let o=t.vertexShader,r=t.fragmentShader;const l=hm(t),c=dm(t),u=pm(t),d=mm(t),h=_m(t),m=t.isWebGL2?"":im(t),g=sm(t),_=am(a),p=s.createProgram();let f,E,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vi).join(`
`),f.length>0&&(f+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vi).join(`
`),E.length>0&&(E+=`
`)):(f=[tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),E=[m,tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?ke.tonemapping_pars_fragment:"",t.toneMapping!==hn?nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,tm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vi).join(`
`)),o=Ar(o),o=Jo(o,t),o=Qo(o,t),r=Ar(r),r=Jo(r,t),r=Qo(r,t),o=el(o),r=el(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===br?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===br?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const w=x+f+o,P=x+E+r,R=Ko(s,s.VERTEX_SHADER,w),A=Ko(s,s.FRAGMENT_SHADER,P);s.attachShader(p,R),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function q(Y){if(i.debug.checkShaderErrors){const ae=s.getProgramInfoLog(p).trim(),D=s.getShaderInfoLog(R).trim(),B=s.getShaderInfoLog(A).trim();let W=!0,j=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,R,A);else{const I=Zo(s,R,"vertex"),H=Zo(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+I+`
`+H)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(D===""||B==="")&&(j=!1);j&&(Y.diagnostics={runnable:W,programLog:ae,vertexShader:{log:D,prefix:f},fragmentShader:{log:B,prefix:E}})}s.deleteShader(R),s.deleteShader(A),S=new Vs(s,p),b=rm(s,p)}let S;this.getUniforms=function(){return S===void 0&&q(this),S};let b;this.getAttributes=function(){return b===void 0&&q(this),b};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(p,Zp)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=A,this}let vm=0;class xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mm(e),t.set(e,n)),n}}class Mm{constructor(e){this.id=vm++,this.code=e,this.usedTimes=0}}function Sm(i,e,t,n,s,a,o){const r=new Jr,l=new xm,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,b,V,Y,ae){const D=Y.fog,B=ae.geometry,W=S.isMeshStandardMaterial?Y.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),I=j&&j.mapping===Zi?j.image.height:null,H=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const X=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Z=X!==void 0?X.length:0;let $=0;B.morphAttributes.position!==void 0&&($=1),B.morphAttributes.normal!==void 0&&($=2),B.morphAttributes.color!==void 0&&($=3);let z,K,ce,ve;if(H){const st=Wt[H];z=st.vertexShader,K=st.fragmentShader}else z=S.vertexShader,K=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),ve=l.getFragmentShaderID(S);const _e=i.getRenderTarget(),Pe=ae.isInstancedMesh===!0,De=ae.isBatchedMesh===!0,be=!!S.map,Ve=!!S.matcap,F=!!j,mt=!!S.aoMap,Se=!!S.lightMap,Ae=!!S.bumpMap,pe=!!S.normalMap,Je=!!S.displacementMap,Ne=!!S.emissiveMap,y=!!S.metalnessMap,v=!!S.roughnessMap,N=S.anisotropy>0,te=S.clearcoat>0,Q=S.iridescence>0,ne=S.sheen>0,me=S.transmission>0,le=N&&!!S.anisotropyMap,de=te&&!!S.clearcoatMap,Ee=te&&!!S.clearcoatNormalMap,Fe=te&&!!S.clearcoatRoughnessMap,J=Q&&!!S.iridescenceMap,$e=Q&&!!S.iridescenceThicknessMap,Be=ne&&!!S.sheenColorMap,Re=ne&&!!S.sheenRoughnessMap,Me=!!S.specularMap,ue=!!S.specularColorMap,T=!!S.specularIntensityMap,ie=me&&!!S.transmissionMap,ge=me&&!!S.thicknessMap,he=!!S.gradientMap,ee=!!S.alphaMap,C=S.alphaTest>0,se=!!S.alphaHash,oe=!!S.extensions,Te=!!B.attributes.uv1,ye=!!B.attributes.uv2,We=!!B.attributes.uv3;let Xe=hn;return S.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Xe=i.toneMapping),{isWebGL2:u,shaderID:H,shaderType:S.type,shaderName:S.name,vertexShader:z,fragmentShader:K,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:De,instancing:Pe,instancingColor:Pe&&ae.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Qt,map:be,matcap:Ve,envMap:F,envMapMode:F&&j.mapping,envMapCubeUVHeight:I,aoMap:mt,lightMap:Se,bumpMap:Ae,normalMap:pe,displacementMap:h&&Je,emissiveMap:Ne,normalMapObjectSpace:pe&&S.normalMapType===Sc,normalMapTangentSpace:pe&&S.normalMapType===qr,metalnessMap:y,roughnessMap:v,anisotropy:N,anisotropyMap:le,clearcoat:te,clearcoatMap:de,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Fe,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:$e,sheen:ne,sheenColorMap:Be,sheenRoughnessMap:Re,specularMap:Me,specularColorMap:ue,specularIntensityMap:T,transmission:me,transmissionMap:ie,thicknessMap:ge,gradientMap:he,opaque:S.transparent===!1&&S.blending===qn,alphaMap:ee,alphaTest:C,alphaHash:se,combine:S.combine,mapUv:be&&_(S.map.channel),aoMapUv:mt&&_(S.aoMap.channel),lightMapUv:Se&&_(S.lightMap.channel),bumpMapUv:Ae&&_(S.bumpMap.channel),normalMapUv:pe&&_(S.normalMap.channel),displacementMapUv:Je&&_(S.displacementMap.channel),emissiveMapUv:Ne&&_(S.emissiveMap.channel),metalnessMapUv:y&&_(S.metalnessMap.channel),roughnessMapUv:v&&_(S.roughnessMap.channel),anisotropyMapUv:le&&_(S.anisotropyMap.channel),clearcoatMapUv:de&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(S.sheenRoughnessMap.channel),specularMapUv:Me&&_(S.specularMap.channel),specularColorMapUv:ue&&_(S.specularColorMap.channel),specularIntensityMapUv:T&&_(S.specularIntensityMap.channel),transmissionMapUv:ie&&_(S.transmissionMap.channel),thicknessMapUv:ge&&_(S.thicknessMap.channel),alphaMapUv:ee&&_(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pe||N),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:ye,vertexUv3s:We,pointsUvs:ae.isPoints===!0&&!!B.attributes.uv&&(be||ee),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ae.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:$,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:be&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===Ze,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xt,flipSided:S.side===Tt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:oe&&S.extensions.derivatives===!0,extensionFragDepth:oe&&S.extensions.fragDepth===!0,extensionDrawBuffers:oe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const V in S.defines)b.push(V),b.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(E(b,S),x(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function E(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){r.disableAll(),b.isWebGL2&&r.enable(0),b.supportsVertexTextures&&r.enable(1),b.instancing&&r.enable(2),b.instancingColor&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),S.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.skinning&&r.enable(4),b.morphTargets&&r.enable(5),b.morphNormals&&r.enable(6),b.morphColors&&r.enable(7),b.premultipliedAlpha&&r.enable(8),b.shadowMapEnabled&&r.enable(9),b.useLegacyLights&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),S.push(r.mask)}function w(S){const b=g[S.type];let V;if(b){const Y=Wt[b];V=Nc.clone(Y.uniforms)}else V=S.uniforms;return V}function P(S,b){let V;for(let Y=0,ae=c.length;Y<ae;Y++){const D=c[Y];if(D.cacheKey===b){V=D,++V.usedTimes;break}}return V===void 0&&(V=new gm(i,b,S,a),c.push(V)),V}function R(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function q(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:w,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:q}}function ym(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function n(a,o,r){i.get(a)[o]=r}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Em(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function il(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function o(d,h,m,g,_,p){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),e++,f}function r(d,h,m,g,_,p){const f=o(d,h,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(d,h,m,g,_,p){const f=o(d,h,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||Em),n.length>1&&n.sort(h||nl),s.length>1&&s.sort(h||nl)}function u(){for(let d=e,h=i.length;d<h;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:r,unshift:l,finish:u,sort:c}}function bm(){let i=new WeakMap;function e(n,s){const a=i.get(n);let o;return a===void 0?(o=new il,i.set(n,[o])):s>=a.length?(o=new il,a.push(o)):o=a[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Tm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ue};break;case"SpotLight":t={position:new L,direction:new L,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function wm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Am=0;function Rm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cm(i,e){const t=new Tm,n=wm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new L);const a=new L,o=new it,r=new it;function l(u,d){let h=0,m=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let _=0,p=0,f=0,E=0,x=0,w=0,P=0,R=0,A=0,q=0,S=0;u.sort(Rm);const b=d===!0?Math.PI:1;for(let Y=0,ae=u.length;Y<ae;Y++){const D=u[Y],B=D.color,W=D.intensity,j=D.distance,I=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*W*b,m+=B.g*W*b,g+=B.b*W*b;else if(D.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(D.sh.coefficients[H],W);S++}else if(D.isDirectionalLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const X=D.shadow,Z=n.get(D);Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,s.directionalShadow[_]=Z,s.directionalShadowMap[_]=I,s.directionalShadowMatrix[_]=D.shadow.matrix,w++}s.directional[_]=H,_++}else if(D.isSpotLight){const H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(B).multiplyScalar(W*b),H.distance=j,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,s.spot[f]=H;const X=D.shadow;if(D.map&&(s.spotLightMap[A]=D.map,A++,X.updateMatrices(D),D.castShadow&&q++),s.spotLightMatrix[f]=X.matrix,D.castShadow){const Z=n.get(D);Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,s.spotShadow[f]=Z,s.spotShadowMap[f]=I,R++}f++}else if(D.isRectAreaLight){const H=t.get(D);H.color.copy(B).multiplyScalar(W),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),s.rectArea[E]=H,E++}else if(D.isPointLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*b),H.distance=D.distance,H.decay=D.decay,D.castShadow){const X=D.shadow,Z=n.get(D);Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,Z.shadowCameraNear=X.camera.near,Z.shadowCameraFar=X.camera.far,s.pointShadow[p]=Z,s.pointShadowMap[p]=I,s.pointShadowMatrix[p]=D.shadow.matrix,P++}s.point[p]=H,p++}else if(D.isHemisphereLight){const H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(W*b),H.groundColor.copy(D.groundColor).multiplyScalar(W*b),s.hemi[x]=H,x++}}E>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=m,s.ambient[2]=g;const V=s.hash;(V.directionalLength!==_||V.pointLength!==p||V.spotLength!==f||V.rectAreaLength!==E||V.hemiLength!==x||V.numDirectionalShadows!==w||V.numPointShadows!==P||V.numSpotShadows!==R||V.numSpotMaps!==A||V.numLightProbes!==S)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=E,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=R+A-q,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=q,s.numLightProbes=S,V.directionalLength=_,V.pointLength=p,V.spotLength=f,V.rectAreaLength=E,V.hemiLength=x,V.numDirectionalShadows=w,V.numPointShadows=P,V.numSpotShadows=R,V.numSpotMaps=A,V.numLightProbes=S,s.version=Am++)}function c(u,d){let h=0,m=0,g=0,_=0,p=0;const f=d.matrixWorldInverse;for(let E=0,x=u.length;E<x;E++){const w=u[E];if(w.isDirectionalLight){const P=s.directional[h];P.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(f),h++}else if(w.isSpotLight){const P=s.spot[g];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(f),g++}else if(w.isRectAreaLight){const P=s.rectArea[_];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(f),r.identity(),o.copy(w.matrixWorld),o.premultiply(f),r.extractRotation(o),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(r),P.halfHeight.applyMatrix4(r),_++}else if(w.isPointLight){const P=s.point[m];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(f),m++}else if(w.isHemisphereLight){const P=s.hemi[p];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:s}}function sl(i,e){const t=new Cm(i,e),n=[],s=[];function a(){n.length=0,s.length=0}function o(d){n.push(d)}function r(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:a,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:r}}function Lm(i,e){let t=new WeakMap;function n(a,o=0){const r=t.get(a);let l;return r===void 0?(l=new sl(i,e),t.set(a,[l])):o>=r.length?(l=new sl(i,e),r.push(l)):l=r[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Wc extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xc extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dm=`uniform sampler2D shadow_pass;
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
}`;function Um(i,e,t){let n=new sa;const s=new Le,a=new Le,o=new Qe,r=new Wc({depthPacking:Mc}),l=new Xc,c={},u=t.maxTextureSize,d={[pn]:Tt,[Tt]:pn,[Xt]:Xt},h=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Pm,fragmentShader:Dm}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ct(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nr;let f=this.type;this.render=function(R,A,q){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(fn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ae=f!==$t&&this.type===$t,D=f===$t&&this.type!==$t;for(let B=0,W=R.length;B<W;B++){const j=R[B],I=j.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const H=I.getFrameExtents();if(s.multiply(H),a.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/H.x),s.x=a.x*H.x,I.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/H.y),s.y=a.y*H.y,I.mapSize.y=a.y)),I.map===null||ae===!0||D===!0){const Z=this.type!==$t?{minFilter:Mt,magFilter:Mt}:{};I.map!==null&&I.map.dispose(),I.map=new Ln(s.x,s.y,Z),I.map.texture.name=j.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const X=I.getViewportCount();for(let Z=0;Z<X;Z++){const $=I.getViewport(Z);o.set(a.x*$.x,a.y*$.y,a.x*$.z,a.y*$.w),Y.viewport(o),I.updateMatrices(j,Z),n=I.getFrustum(),w(A,q,I.camera,j,this.type)}I.isPointLightShadow!==!0&&this.type===$t&&E(I,q),I.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(S,b,V)};function E(R,A){const q=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ln(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,q,h,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,q,m,_,null)}function x(R,A,q,S){let b=null;const V=q.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(V!==void 0)b=V;else if(b=q.isPointLight===!0?l:r,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Y=b.uuid,ae=A.uuid;let D=c[Y];D===void 0&&(D={},c[Y]=D);let B=D[ae];B===void 0&&(B=b.clone(),D[ae]=B,A.addEventListener("dispose",P)),b=B}if(b.visible=A.visible,b.wireframe=A.wireframe,S===$t?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:d[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,q.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Y=i.properties.get(b);Y.light=q}return b}function w(R,A,q,S,b){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===$t)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld);const ae=e.update(R),D=R.material;if(Array.isArray(D)){const B=ae.groups;for(let W=0,j=B.length;W<j;W++){const I=B[W],H=D[I.materialIndex];if(H&&H.visible){const X=x(R,H,S,b);R.onBeforeShadow(i,R,A,q,ae,X,I),i.renderBufferDirect(q,null,ae,X,R,I),R.onAfterShadow(i,R,A,q,ae,X,I)}}}else if(D.visible){const B=x(R,D,S,b);R.onBeforeShadow(i,R,A,q,ae,B,null),i.renderBufferDirect(q,null,ae,B,R,null),R.onAfterShadow(i,R,A,q,ae,B,null)}}const Y=R.children;for(let ae=0,D=Y.length;ae<D;ae++)w(Y[ae],A,q,S,b)}function P(R){R.target.removeEventListener("dispose",P);for(const q in c){const S=c[q],b=R.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function Im(i,e,t){const n=t.isWebGL2;function s(){let C=!1;const se=new Qe;let oe=null;const Te=new Qe(0,0,0,0);return{setMask:function(ye){oe!==ye&&!C&&(i.colorMask(ye,ye,ye,ye),oe=ye)},setLocked:function(ye){C=ye},setClear:function(ye,We,Xe,tt,st){st===!0&&(ye*=tt,We*=tt,Xe*=tt),se.set(ye,We,Xe,tt),Te.equals(se)===!1&&(i.clearColor(ye,We,Xe,tt),Te.copy(se))},reset:function(){C=!1,oe=null,Te.set(-1,0,0,0)}}}function a(){let C=!1,se=null,oe=null,Te=null;return{setTest:function(ye){ye?De(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ye){se!==ye&&!C&&(i.depthMask(ye),se=ye)},setFunc:function(ye){if(oe!==ye){switch(ye){case $l:i.depthFunc(i.NEVER);break;case Kl:i.depthFunc(i.ALWAYS);break;case Zl:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Jl:i.depthFunc(i.EQUAL);break;case Ql:i.depthFunc(i.GEQUAL);break;case ec:i.depthFunc(i.GREATER);break;case tc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=ye}},setLocked:function(ye){C=ye},setClear:function(ye){Te!==ye&&(i.clearDepth(ye),Te=ye)},reset:function(){C=!1,se=null,oe=null,Te=null}}}function o(){let C=!1,se=null,oe=null,Te=null,ye=null,We=null,Xe=null,tt=null,st=null;return{setTest:function(je){C||(je?De(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(je){se!==je&&!C&&(i.stencilMask(je),se=je)},setFunc:function(je,rt,jt){(oe!==je||Te!==rt||ye!==jt)&&(i.stencilFunc(je,rt,jt),oe=je,Te=rt,ye=jt)},setOp:function(je,rt,jt){(We!==je||Xe!==rt||tt!==jt)&&(i.stencilOp(je,rt,jt),We=je,Xe=rt,tt=jt)},setLocked:function(je){C=je},setClear:function(je){st!==je&&(i.clearStencil(je),st=je)},reset:function(){C=!1,se=null,oe=null,Te=null,ye=null,We=null,Xe=null,tt=null,st=null}}}const r=new s,l=new a,c=new o,u=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,_=[],p=null,f=!1,E=null,x=null,w=null,P=null,R=null,A=null,q=null,S=new Ue(0,0,0),b=0,V=!1,Y=null,ae=null,D=null,B=null,W=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,H=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(X)[1]),I=H>=1):X.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),I=H>=2);let Z=null,$={};const z=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ce=new Qe().fromArray(z),ve=new Qe().fromArray(K);function _e(C,se,oe,Te){const ye=new Uint8Array(4),We=i.createTexture();i.bindTexture(C,We),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<oe;Xe++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(se+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return We}const Pe={};Pe[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(i.DEPTH_TEST),l.setFunc(Vi),Ne(!1),y(Wa),De(i.CULL_FACE),pe(fn);function De(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function be(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function Ve(C,se){return m[C]!==se?(i.bindFramebuffer(C,se),m[C]=se,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=se),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function F(C,se){let oe=_,Te=!1;if(C)if(oe=g.get(se),oe===void 0&&(oe=[],g.set(se,oe)),C.isWebGLMultipleRenderTargets){const ye=C.texture;if(oe.length!==ye.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let We=0,Xe=ye.length;We<Xe;We++)oe[We]=i.COLOR_ATTACHMENT0+We;oe.length=ye.length,Te=!0}}else oe[0]!==i.COLOR_ATTACHMENT0&&(oe[0]=i.COLOR_ATTACHMENT0,Te=!0);else oe[0]!==i.BACK&&(oe[0]=i.BACK,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function mt(C){return p!==C?(i.useProgram(C),p=C,!0):!1}const Se={[En]:i.FUNC_ADD,[Il]:i.FUNC_SUBTRACT,[Nl]:i.FUNC_REVERSE_SUBTRACT};if(n)Se[ja]=i.MIN,Se[$a]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(Se[ja]=C.MIN_EXT,Se[$a]=C.MAX_EXT)}const Ae={[Fl]:i.ZERO,[Ol]:i.ONE,[kl]:i.SRC_COLOR,[Xs]:i.SRC_ALPHA,[Wl]:i.SRC_ALPHA_SATURATE,[Hl]:i.DST_COLOR,[zl]:i.DST_ALPHA,[Bl]:i.ONE_MINUS_SRC_COLOR,[qs]:i.ONE_MINUS_SRC_ALPHA,[Vl]:i.ONE_MINUS_DST_COLOR,[Gl]:i.ONE_MINUS_DST_ALPHA,[Xl]:i.CONSTANT_COLOR,[ql]:i.ONE_MINUS_CONSTANT_COLOR,[Yl]:i.CONSTANT_ALPHA,[jl]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(C,se,oe,Te,ye,We,Xe,tt,st,je){if(C===fn){f===!0&&(be(i.BLEND),f=!1);return}if(f===!1&&(De(i.BLEND),f=!0),C!==Ul){if(C!==E||je!==V){if((x!==En||R!==En)&&(i.blendEquation(i.FUNC_ADD),x=En,R=En),je)switch(C){case qn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.ONE,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ya:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ya:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}w=null,P=null,A=null,q=null,S.set(0,0,0),b=0,E=C,V=je}return}ye=ye||se,We=We||oe,Xe=Xe||Te,(se!==x||ye!==R)&&(i.blendEquationSeparate(Se[se],Se[ye]),x=se,R=ye),(oe!==w||Te!==P||We!==A||Xe!==q)&&(i.blendFuncSeparate(Ae[oe],Ae[Te],Ae[We],Ae[Xe]),w=oe,P=Te,A=We,q=Xe),(tt.equals(S)===!1||st!==b)&&(i.blendColor(tt.r,tt.g,tt.b,st),S.copy(tt),b=st),E=C,V=!1}function Je(C,se){C.side===Xt?be(i.CULL_FACE):De(i.CULL_FACE);let oe=C.side===Tt;se&&(oe=!oe),Ne(oe),C.blending===qn&&C.transparent===!1?pe(fn):pe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),r.setMask(C.colorWrite);const Te=C.stencilWrite;c.setTest(Te),Te&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),N(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?De(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(C){Y!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),Y=C)}function y(C){C!==Pl?(De(i.CULL_FACE),C!==ae&&(C===Wa?i.cullFace(i.BACK):C===Dl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),ae=C}function v(C){C!==D&&(I&&i.lineWidth(C),D=C)}function N(C,se,oe){C?(De(i.POLYGON_OFFSET_FILL),(B!==se||W!==oe)&&(i.polygonOffset(se,oe),B=se,W=oe)):be(i.POLYGON_OFFSET_FILL)}function te(C){C?De(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function Q(C){C===void 0&&(C=i.TEXTURE0+j-1),Z!==C&&(i.activeTexture(C),Z=C)}function ne(C,se,oe){oe===void 0&&(Z===null?oe=i.TEXTURE0+j-1:oe=Z);let Te=$[oe];Te===void 0&&(Te={type:void 0,texture:void 0},$[oe]=Te),(Te.type!==C||Te.texture!==se)&&(Z!==oe&&(i.activeTexture(oe),Z=oe),i.bindTexture(C,se||Pe[C]),Te.type=C,Te.texture=se)}function me(){const C=$[Z];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Be(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Re(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function T(C){ce.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ce.copy(C))}function ie(C){ve.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ve.copy(C))}function ge(C,se){let oe=d.get(se);oe===void 0&&(oe=new WeakMap,d.set(se,oe));let Te=oe.get(C);Te===void 0&&(Te=i.getUniformBlockIndex(se,C.name),oe.set(C,Te))}function he(C,se){const Te=d.get(se).get(C);u.get(se)!==Te&&(i.uniformBlockBinding(se,Te,C.__bindingPointIndex),u.set(se,Te))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,$={},m={},g=new WeakMap,_=[],p=null,f=!1,E=null,x=null,w=null,P=null,R=null,A=null,q=null,S=new Ue(0,0,0),b=0,V=!1,Y=null,ae=null,D=null,B=null,W=null,ce.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:De,disable:be,bindFramebuffer:Ve,drawBuffers:F,useProgram:mt,setBlending:pe,setMaterial:Je,setFlipSided:Ne,setCullFace:y,setLineWidth:v,setPolygonOffset:N,setScissorTest:te,activeTexture:Q,bindTexture:ne,unbindTexture:me,compressedTexImage2D:le,compressedTexImage3D:de,texImage2D:Me,texImage3D:ue,updateUBOMapping:ge,uniformBlockBinding:he,texStorage2D:Be,texStorage3D:Re,texSubImage2D:Ee,texSubImage3D:Fe,compressedTexSubImage2D:J,compressedTexSubImage3D:$e,scissor:T,viewport:ie,reset:ee}}function Nm(i,e,t,n,s,a,o){const r=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,v){return m?new OffscreenCanvas(y,v):Js("canvas")}function _(y,v,N,te){let Q=1;if((y.width>te||y.height>te)&&(Q=te/Math.max(y.width,y.height)),Q<1||v===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const ne=v?Zs:Math.floor,me=ne(Q*y.width),le=ne(Q*y.height);d===void 0&&(d=g(me,le));const de=N?g(me,le):d;return de.width=me,de.height=le,de.getContext("2d").drawImage(y,0,0,me,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+me+"x"+le+")."),de}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function p(y){return Tr(y.width)&&Tr(y.height)}function f(y){return r?!1:y.wrapS!==Bt||y.wrapT!==Bt||y.minFilter!==Mt&&y.minFilter!==Pt}function E(y,v){return y.generateMipmaps&&v&&y.minFilter!==Mt&&y.minFilter!==Pt}function x(y){i.generateMipmap(y)}function w(y,v,N,te,Q=!1){if(r===!1)return v;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ne=v;if(v===i.RED&&(N===i.FLOAT&&(ne=i.R32F),N===i.HALF_FLOAT&&(ne=i.R16F),N===i.UNSIGNED_BYTE&&(ne=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(ne=i.R8UI),N===i.UNSIGNED_SHORT&&(ne=i.R16UI),N===i.UNSIGNED_INT&&(ne=i.R32UI),N===i.BYTE&&(ne=i.R8I),N===i.SHORT&&(ne=i.R16I),N===i.INT&&(ne=i.R32I)),v===i.RG&&(N===i.FLOAT&&(ne=i.RG32F),N===i.HALF_FLOAT&&(ne=i.RG16F),N===i.UNSIGNED_BYTE&&(ne=i.RG8)),v===i.RGBA){const me=Q?Wi:Ke.getTransfer(te);N===i.FLOAT&&(ne=i.RGBA32F),N===i.HALF_FLOAT&&(ne=i.RGBA16F),N===i.UNSIGNED_BYTE&&(ne=me===Ze?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function P(y,v,N){return E(y,N)===!0||y.isFramebufferTexture&&y.minFilter!==Mt&&y.minFilter!==Pt?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function R(y){return y===Mt||y===Ka||y===Os?i.NEAREST:i.LINEAR}function A(y){const v=y.target;v.removeEventListener("dispose",A),S(v),v.isVideoTexture&&u.delete(v)}function q(y){const v=y.target;v.removeEventListener("dispose",q),V(v)}function S(y){const v=n.get(y);if(v.__webglInit===void 0)return;const N=y.source,te=h.get(N);if(te){const Q=te[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(y),Object.keys(te).length===0&&h.delete(N)}n.remove(y)}function b(y){const v=n.get(y);i.deleteTexture(v.__webglTexture);const N=y.source,te=h.get(N);delete te[v.__cacheKey],o.memory.textures--}function V(y){const v=y.texture,N=n.get(y),te=n.get(v);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(N.__webglFramebuffer[Q]))for(let ne=0;ne<N.__webglFramebuffer[Q].length;ne++)i.deleteFramebuffer(N.__webglFramebuffer[Q][ne]);else i.deleteFramebuffer(N.__webglFramebuffer[Q]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[Q])}else{if(Array.isArray(N.__webglFramebuffer))for(let Q=0;Q<N.__webglFramebuffer.length;Q++)i.deleteFramebuffer(N.__webglFramebuffer[Q]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Q=0;Q<N.__webglColorRenderbuffer.length;Q++)N.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[Q]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Q=0,ne=v.length;Q<ne;Q++){const me=n.get(v[Q]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(v[Q])}n.remove(v),n.remove(y)}let Y=0;function ae(){Y=0}function D(){const y=Y;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),Y+=1,y}function B(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function W(y,v){const N=n.get(y);if(y.isVideoTexture&&Je(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const te=y.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(N,y,v);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function j(y,v){const N=n.get(y);if(y.version>0&&N.__version!==y.version){ce(N,y,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function I(y,v){const N=n.get(y);if(y.version>0&&N.__version!==y.version){ce(N,y,v);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function H(y,v){const N=n.get(y);if(y.version>0&&N.__version!==y.version){ve(N,y,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}const X={[Ei]:i.REPEAT,[Bt]:i.CLAMP_TO_EDGE,[$s]:i.MIRRORED_REPEAT},Z={[Mt]:i.NEAREST,[Ka]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[uc]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},$={[yc]:i.NEVER,[Rc]:i.ALWAYS,[Ec]:i.LESS,[Yr]:i.LEQUAL,[bc]:i.EQUAL,[Ac]:i.GEQUAL,[Tc]:i.GREATER,[wc]:i.NOTEQUAL};function z(y,v,N){if(N?(i.texParameteri(y,i.TEXTURE_WRAP_S,X[v.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,X[v.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,X[v.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,Z[v.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,Z[v.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Bt||v.wrapT!==Bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,R(v.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,R(v.minFilter)),v.minFilter!==Mt&&v.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,$[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Mt||v.minFilter!==Os&&v.minFilter!==bi||v.type===un&&e.has("OES_texture_float_linear")===!1||r===!1&&v.type===Ti&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(y,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function K(y,v){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",A));const te=v.source;let Q=h.get(te);Q===void 0&&(Q={},h.set(te,Q));const ne=B(v);if(ne!==y.__cacheKey){Q[ne]===void 0&&(Q[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Q[ne].usedTimes++;const me=Q[y.__cacheKey];me!==void 0&&(Q[y.__cacheKey].usedTimes--,me.usedTimes===0&&b(v)),y.__cacheKey=ne,y.__webglTexture=Q[ne].texture}return N}function ce(y,v,N){let te=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(te=i.TEXTURE_3D);const Q=K(y,v),ne=v.source;t.bindTexture(te,y.__webglTexture,i.TEXTURE0+N);const me=n.get(ne);if(ne.version!==me.__version||Q===!0){t.activeTexture(i.TEXTURE0+N);const le=Ke.getPrimaries(Ke.workingColorSpace),de=v.colorSpace===It?null:Ke.getPrimaries(v.colorSpace),Ee=v.colorSpace===It||le===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Fe=f(v)&&p(v.image)===!1;let J=_(v.image,Fe,!1,s.maxTextureSize);J=Ne(v,J);const $e=p(J)||r,Be=a.convert(v.format,v.colorSpace);let Re=a.convert(v.type),Me=w(v.internalFormat,Be,Re,v.colorSpace,v.isVideoTexture);z(te,v,$e);let ue;const T=v.mipmaps,ie=r&&v.isVideoTexture!==!0&&Me!==Wr,ge=me.__version===void 0||Q===!0,he=P(v,J,$e);if(v.isDepthTexture)Me=i.DEPTH_COMPONENT,r?v.type===un?Me=i.DEPTH_COMPONENT32F:v.type===cn?Me=i.DEPTH_COMPONENT24:v.type===wn?Me=i.DEPTH24_STENCIL8:Me=i.DEPTH_COMPONENT16:v.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===An&&Me===i.DEPTH_COMPONENT&&v.type!==ta&&v.type!==cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=cn,Re=a.convert(v.type)),v.format===$n&&Me===i.DEPTH_COMPONENT&&(Me=i.DEPTH_STENCIL,v.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=wn,Re=a.convert(v.type))),ge&&(ie?t.texStorage2D(i.TEXTURE_2D,1,Me,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Me,J.width,J.height,0,Be,Re,null));else if(v.isDataTexture)if(T.length>0&&$e){ie&&ge&&t.texStorage2D(i.TEXTURE_2D,he,Me,T[0].width,T[0].height);for(let ee=0,C=T.length;ee<C;ee++)ue=T[ee],ie?t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue.width,ue.height,Be,Re,ue.data):t.texImage2D(i.TEXTURE_2D,ee,Me,ue.width,ue.height,0,Be,Re,ue.data);v.generateMipmaps=!1}else ie?(ge&&t.texStorage2D(i.TEXTURE_2D,he,Me,J.width,J.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,Be,Re,J.data)):t.texImage2D(i.TEXTURE_2D,0,Me,J.width,J.height,0,Be,Re,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ie&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Me,T[0].width,T[0].height,J.depth);for(let ee=0,C=T.length;ee<C;ee++)ue=T[ee],v.format!==zt?Be!==null?ie?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,J.depth,Be,ue.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Me,ue.width,ue.height,J.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,J.depth,Be,Re,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Me,ue.width,ue.height,J.depth,0,Be,Re,ue.data)}else{ie&&ge&&t.texStorage2D(i.TEXTURE_2D,he,Me,T[0].width,T[0].height);for(let ee=0,C=T.length;ee<C;ee++)ue=T[ee],v.format!==zt?Be!==null?ie?t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ue.width,ue.height,Be,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Me,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue.width,ue.height,Be,Re,ue.data):t.texImage2D(i.TEXTURE_2D,ee,Me,ue.width,ue.height,0,Be,Re,ue.data)}else if(v.isDataArrayTexture)ie?(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Me,J.width,J.height,J.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Be,Re,J.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,J.width,J.height,J.depth,0,Be,Re,J.data);else if(v.isData3DTexture)ie?(ge&&t.texStorage3D(i.TEXTURE_3D,he,Me,J.width,J.height,J.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Be,Re,J.data)):t.texImage3D(i.TEXTURE_3D,0,Me,J.width,J.height,J.depth,0,Be,Re,J.data);else if(v.isFramebufferTexture){if(ge)if(ie)t.texStorage2D(i.TEXTURE_2D,he,Me,J.width,J.height);else{let ee=J.width,C=J.height;for(let se=0;se<he;se++)t.texImage2D(i.TEXTURE_2D,se,Me,ee,C,0,Be,Re,null),ee>>=1,C>>=1}}else if(T.length>0&&$e){ie&&ge&&t.texStorage2D(i.TEXTURE_2D,he,Me,T[0].width,T[0].height);for(let ee=0,C=T.length;ee<C;ee++)ue=T[ee],ie?t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Be,Re,ue):t.texImage2D(i.TEXTURE_2D,ee,Me,Be,Re,ue);v.generateMipmaps=!1}else ie?(ge&&t.texStorage2D(i.TEXTURE_2D,he,Me,J.width,J.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,Re,J)):t.texImage2D(i.TEXTURE_2D,0,Me,Be,Re,J);E(v,$e)&&x(te),me.__version=ne.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function ve(y,v,N){if(v.image.length!==6)return;const te=K(y,v),Q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+N);const ne=n.get(Q);if(Q.version!==ne.__version||te===!0){t.activeTexture(i.TEXTURE0+N);const me=Ke.getPrimaries(Ke.workingColorSpace),le=v.colorSpace===It?null:Ke.getPrimaries(v.colorSpace),de=v.colorSpace===It||me===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,Fe=v.image[0]&&v.image[0].isDataTexture,J=[];for(let ee=0;ee<6;ee++)!Ee&&!Fe?J[ee]=_(v.image[ee],!1,!0,s.maxCubemapSize):J[ee]=Fe?v.image[ee].image:v.image[ee],J[ee]=Ne(v,J[ee]);const $e=J[0],Be=p($e)||r,Re=a.convert(v.format,v.colorSpace),Me=a.convert(v.type),ue=w(v.internalFormat,Re,Me,v.colorSpace),T=r&&v.isVideoTexture!==!0,ie=ne.__version===void 0||te===!0;let ge=P(v,$e,Be);z(i.TEXTURE_CUBE_MAP,v,Be);let he;if(Ee){T&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,ue,$e.width,$e.height);for(let ee=0;ee<6;ee++){he=J[ee].mipmaps;for(let C=0;C<he.length;C++){const se=he[C];v.format!==zt?Re!==null?T?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,C,0,0,se.width,se.height,Re,se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,C,ue,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):T?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,C,0,0,se.width,se.height,Re,Me,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,C,ue,se.width,se.height,0,Re,Me,se.data)}}}else{he=v.mipmaps,T&&ie&&(he.length>0&&ge++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,ue,J[0].width,J[0].height));for(let ee=0;ee<6;ee++)if(Fe){T?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,J[ee].width,J[ee].height,Re,Me,J[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ue,J[ee].width,J[ee].height,0,Re,Me,J[ee].data);for(let C=0;C<he.length;C++){const oe=he[C].image[ee].image;T?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,C+1,0,0,oe.width,oe.height,Re,Me,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,C+1,ue,oe.width,oe.height,0,Re,Me,oe.data)}}else{T?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Re,Me,J[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ue,Re,Me,J[ee]);for(let C=0;C<he.length;C++){const se=he[C];T?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,C+1,0,0,Re,Me,se.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,C+1,ue,Re,Me,se.image[ee])}}}E(v,Be)&&x(i.TEXTURE_CUBE_MAP),ne.__version=Q.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function _e(y,v,N,te,Q,ne){const me=a.convert(N.format,N.colorSpace),le=a.convert(N.type),de=w(N.internalFormat,me,le,N.colorSpace);if(!n.get(v).__hasExternalTextures){const Fe=Math.max(1,v.width>>ne),J=Math.max(1,v.height>>ne);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ne,de,Fe,J,v.depth,0,me,le,null):t.texImage2D(Q,ne,de,Fe,J,0,me,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),pe(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Q,n.get(N).__webglTexture,0,Ae(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,Q,n.get(N).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(y,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let te=r===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||pe(v)){const Q=v.depthTexture;Q&&Q.isDepthTexture&&(Q.type===un?te=i.DEPTH_COMPONENT32F:Q.type===cn&&(te=i.DEPTH_COMPONENT24));const ne=Ae(v);pe(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,te,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,te,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){const te=Ae(v);N&&pe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,v.width,v.height):pe(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{const te=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Q=0;Q<te.length;Q++){const ne=te[Q],me=a.convert(ne.format,ne.colorSpace),le=a.convert(ne.type),de=w(ne.internalFormat,me,le,ne.colorSpace),Ee=Ae(v);N&&pe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,de,v.width,v.height):pe(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,de,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,de,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const te=n.get(v.depthTexture).__webglTexture,Q=Ae(v);if(v.depthTexture.format===An)pe(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(v.depthTexture.format===$n)pe(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function be(y){const v=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");De(v.__webglFramebuffer,y)}else if(N){v.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[te]),v.__webglDepthbuffer[te]=i.createRenderbuffer(),Pe(v.__webglDepthbuffer[te],y,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Pe(v.__webglDepthbuffer,y,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(y,v,N){const te=n.get(y);v!==void 0&&_e(te.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&be(y)}function F(y){const v=y.texture,N=n.get(y),te=n.get(v);y.addEventListener("dispose",q),y.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=v.version,o.memory.textures++);const Q=y.isWebGLCubeRenderTarget===!0,ne=y.isWebGLMultipleRenderTargets===!0,me=p(y)||r;if(Q){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(r&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let de=0;de<v.mipmaps.length;de++)N.__webglFramebuffer[le][de]=i.createFramebuffer()}else N.__webglFramebuffer[le]=i.createFramebuffer()}else{if(r&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)N.__webglFramebuffer[le]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ne)if(s.drawBuffers){const le=y.texture;for(let de=0,Ee=le.length;de<Ee;de++){const Fe=n.get(le[de]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&y.samples>0&&pe(y)===!1){const le=ne?v:[v];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){const Ee=le[de];N.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[de]);const Fe=a.convert(Ee.format,Ee.colorSpace),J=a.convert(Ee.type),$e=w(Ee.internalFormat,Fe,J,Ee.colorSpace,y.isXRRenderTarget===!0),Be=Ae(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,$e,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,N.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),z(i.TEXTURE_CUBE_MAP,v,me);for(let le=0;le<6;le++)if(r&&v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)_e(N.__webglFramebuffer[le][de],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else _e(N.__webglFramebuffer[le],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);E(v,me)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const le=y.texture;for(let de=0,Ee=le.length;de<Ee;de++){const Fe=le[de],J=n.get(Fe);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),z(i.TEXTURE_2D,Fe,me),_e(N.__webglFramebuffer,y,Fe,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),E(Fe,me)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(r?le=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,te.__webglTexture),z(le,v,me),r&&v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)_e(N.__webglFramebuffer[de],y,v,i.COLOR_ATTACHMENT0,le,de);else _e(N.__webglFramebuffer,y,v,i.COLOR_ATTACHMENT0,le,0);E(v,me)&&x(le),t.unbindTexture()}y.depthBuffer&&be(y)}function mt(y){const v=p(y)||r,N=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let te=0,Q=N.length;te<Q;te++){const ne=N[te];if(E(ne,v)){const me=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(ne).__webglTexture;t.bindTexture(me,le),x(me),t.unbindTexture()}}}function Se(y){if(r&&y.samples>0&&pe(y)===!1){const v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],N=y.width,te=y.height;let Q=i.COLOR_BUFFER_BIT;const ne=[],me=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(y),de=y.isWebGLMultipleRenderTargets===!0;if(de)for(let Ee=0;Ee<v.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ee=0;Ee<v.length;Ee++){ne.push(i.COLOR_ATTACHMENT0+Ee),y.depthBuffer&&ne.push(me);const Fe=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Fe===!1&&(y.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),de&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]),Fe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[me])),de){const J=n.get(v[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,N,te,0,0,N,te,Q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Ee=0;Ee<v.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]);const Fe=n.get(v[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ae(y){return Math.min(s.maxSamples,y.samples)}function pe(y){const v=n.get(y);return r&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Je(y){const v=o.render.frame;u.get(y)!==v&&(u.set(y,v),y.update())}function Ne(y,v){const N=y.colorSpace,te=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Ks||N!==Qt&&N!==It&&(Ke.getTransfer(N)===Ze?r===!1?e.has("EXT_sRGB")===!0&&te===zt?(y.format=Ks,y.minFilter=Pt,y.generateMipmaps=!1):v=$r.sRGBToLinear(v):(te!==zt||Q!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=D,this.resetTextureUnits=ae,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=I,this.setTextureCube=H,this.rebindTextures=Ve,this.setupRenderTarget=F,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=pe}function qc(i,e,t){const n=t.isWebGL2;function s(a,o=It){let r;const l=Ke.getTransfer(o);if(a===dn)return i.UNSIGNED_BYTE;if(a===Br)return i.UNSIGNED_SHORT_4_4_4_4;if(a===zr)return i.UNSIGNED_SHORT_5_5_5_1;if(a===fc)return i.BYTE;if(a===hc)return i.SHORT;if(a===ta)return i.UNSIGNED_SHORT;if(a===kr)return i.INT;if(a===cn)return i.UNSIGNED_INT;if(a===un)return i.FLOAT;if(a===Ti)return n?i.HALF_FLOAT:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(a===dc)return i.ALPHA;if(a===zt)return i.RGBA;if(a===pc)return i.LUMINANCE;if(a===mc)return i.LUMINANCE_ALPHA;if(a===An)return i.DEPTH_COMPONENT;if(a===$n)return i.DEPTH_STENCIL;if(a===Ks)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(a===_c)return i.RED;if(a===Gr)return i.RED_INTEGER;if(a===gc)return i.RG;if(a===Hr)return i.RG_INTEGER;if(a===Vr)return i.RGBA_INTEGER;if(a===ks||a===Bs||a===zs||a===Gs)if(l===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Za||a===Ja||a===Qa||a===er)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===er)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Wr)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===tr||a===nr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(a===tr)return l===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===nr)return l===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ir||a===sr||a===ar||a===rr||a===or||a===lr||a===cr||a===ur||a===fr||a===hr||a===dr||a===pr||a===mr||a===_r)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(a===ir)return l===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===sr)return l===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ar)return l===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===rr)return l===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===or)return l===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===lr)return l===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===cr)return l===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ur)return l===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===fr)return l===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===hr)return l===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===dr)return l===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===pr)return l===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===mr)return l===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===_r)return l===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Hs||a===gr||a===vr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(a===Hs)return l===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===gr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===vr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===vc||a===xr||a===Mr||a===Sr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(a===Hs)return r.COMPRESSED_RED_RGTC1_EXT;if(a===xr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Sr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===wn?n?i.UNSIGNED_INT_24_8:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:s}}class Yc extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nt extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fm={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Fm)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Om extends Un{constructor(e,t){super();const n=this;let s=null,a=1,o=null,r="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,g=null;const _=t.getContextAttributes();let p=null,f=null;const E=[],x=[],w=new Le;let P=null;const R=new Ut;R.layers.enable(1),R.viewport=new Qe;const A=new Ut;A.layers.enable(2),A.viewport=new Qe;const q=[R,A],S=new Yc;S.layers.enable(1),S.layers.enable(2);let b=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let K=E[z];return K===void 0&&(K=new Ia,E[z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(z){let K=E[z];return K===void 0&&(K=new Ia,E[z]=K),K.getGripSpace()},this.getHand=function(z){let K=E[z];return K===void 0&&(K=new Ia,E[z]=K),K.getHandSpace()};function Y(z){const K=x.indexOf(z.inputSource);if(K===-1)return;const ce=E[K];ce!==void 0&&(ce.update(z.inputSource,z.frame,c||o),ce.dispatchEvent({type:z.type,data:z.inputSource}))}function ae(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",D);for(let z=0;z<E.length;z++){const K=x[z];K!==null&&(x[z]=null,E[z].disconnect(K))}b=null,V=null,e.setRenderTarget(p),m=null,h=null,d=null,s=null,f=null,$.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Ln(m.framebufferWidth,m.framebufferHeight,{format:zt,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,ce=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?$n:An,ce=_.stencil?wn:cn);const _e={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(_e),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new Ln(h.textureWidth,h.textureHeight,{format:zt,type:dn,depthTexture:new so(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Pe=e.properties.get(f);Pe.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(r),$.setContext(s),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(z){for(let K=0;K<z.removed.length;K++){const ce=z.removed[K],ve=x.indexOf(ce);ve>=0&&(x[ve]=null,E[ve].disconnect(ce))}for(let K=0;K<z.added.length;K++){const ce=z.added[K];let ve=x.indexOf(ce);if(ve===-1){for(let Pe=0;Pe<E.length;Pe++)if(Pe>=x.length){x.push(ce),ve=Pe;break}else if(x[Pe]===null){x[Pe]=ce,ve=Pe;break}if(ve===-1)break}const _e=E[ve];_e&&_e.connect(ce)}}const B=new L,W=new L;function j(z,K,ce){B.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(ce.matrixWorld);const ve=B.distanceTo(W),_e=K.projectionMatrix.elements,Pe=ce.projectionMatrix.elements,De=_e[14]/(_e[10]-1),be=_e[14]/(_e[10]+1),Ve=(_e[9]+1)/_e[5],F=(_e[9]-1)/_e[5],mt=(_e[8]-1)/_e[0],Se=(Pe[8]+1)/Pe[0],Ae=De*mt,pe=De*Se,Je=ve/(-mt+Se),Ne=Je*-mt;K.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ne),z.translateZ(Je),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const y=De+Je,v=be+Je,N=Ae-Ne,te=pe+(ve-Ne),Q=Ve*be/v*y,ne=F*be/v*y;z.projectionMatrix.makePerspective(N,te,Q,ne,y,v),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function I(z,K){K===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(K.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;S.near=A.near=R.near=z.near,S.far=A.far=R.far=z.far,(b!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,V=S.far);const K=z.parent,ce=S.cameras;I(S,K);for(let ve=0;ve<ce.length;ve++)I(ce[ve],K);ce.length===2?j(S,R,A):S.projectionMatrix.copy(R.projectionMatrix),H(z,S,K)};function H(z,K,ce){ce===null?z.matrix.copy(K.matrixWorld):(z.matrix.copy(ce.matrixWorld),z.matrix.invert(),z.matrix.multiply(K.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ji*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let X=null;function Z(z,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ve=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,ve=!0);for(let _e=0;_e<ce.length;_e++){const Pe=ce[_e];let De=null;if(m!==null)De=m.getViewport(Pe);else{const Ve=d.getViewSubImage(h,Pe);De=Ve.viewport,_e===0&&(e.setRenderTargetTextures(f,Ve.colorTexture,h.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(f))}let be=q[_e];be===void 0&&(be=new Ut,be.layers.enable(_e),be.viewport=new Qe,q[_e]=be),be.matrix.fromArray(Pe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Pe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(De.x,De.y,De.width,De.height),_e===0&&(S.matrix.copy(be.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ve===!0&&S.cameras.push(be)}}for(let ce=0;ce<E.length;ce++){const ve=x[ce],_e=E[ce];ve!==null&&_e!==void 0&&_e.update(ve,K,c||o)}X&&X(z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const $=new kc;$.setAnimationLoop(Z),this.setAnimationLoop=function(z){X=z},this.dispose=function(){}}}function km(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Ic(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,x,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(p,f):f.isMeshToonMaterial?(a(p,f),d(p,f)):f.isMeshPhongMaterial?(a(p,f),u(p,f)):f.isMeshStandardMaterial?(a(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,w)):f.isMeshMatcapMaterial?(a(p,f),g(p,f)):f.isMeshDepthMaterial?a(p,f):f.isMeshDistanceMaterial?(a(p,f),_(p,f)):f.isMeshNormalMaterial?a(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&r(p,f)):f.isPointsMaterial?l(p,f,E,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Tt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Tt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=e.get(f).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function r(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Tt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bm(i,e,t,n){let s={},a={},o=[];const r=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){const w=x.program;n.uniformBlockBinding(E,w)}function c(E,x){let w=s[E.id];w===void 0&&(g(E),w=u(E),s[E.id]=w,E.addEventListener("dispose",p));const P=x.program;n.updateUBOMapping(E,P);const R=e.render.frame;a[E.id]!==R&&(h(E),a[E.id]=R)}function u(E){const x=d();E.__bindingPointIndex=x;const w=i.createBuffer(),P=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,w),w}function d(){for(let E=0;E<r;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const x=s[E.id],w=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,A=w.length;R<A;R++){const q=Array.isArray(w[R])?w[R]:[w[R]];for(let S=0,b=q.length;S<b;S++){const V=q[S];if(m(V,R,S,P)===!0){const Y=V.__offset,ae=Array.isArray(V.value)?V.value:[V.value];let D=0;for(let B=0;B<ae.length;B++){const W=ae[B],j=_(W);typeof W=="number"||typeof W=="boolean"?(V.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,Y+D,V.__data)):W.isMatrix3?(V.__data[0]=W.elements[0],V.__data[1]=W.elements[1],V.__data[2]=W.elements[2],V.__data[3]=0,V.__data[4]=W.elements[3],V.__data[5]=W.elements[4],V.__data[6]=W.elements[5],V.__data[7]=0,V.__data[8]=W.elements[6],V.__data[9]=W.elements[7],V.__data[10]=W.elements[8],V.__data[11]=0):(W.toArray(V.__data,D),D+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,x,w,P){const R=E.value,A=x+"_"+w;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const q=P[A];if(typeof R=="number"||typeof R=="boolean"){if(q!==R)return P[A]=R,!0}else if(q.equals(R)===!1)return q.copy(R),!0}return!1}function g(E){const x=E.uniforms;let w=0;const P=16;for(let A=0,q=x.length;A<q;A++){const S=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,V=S.length;b<V;b++){const Y=S[b],ae=Array.isArray(Y.value)?Y.value:[Y.value];for(let D=0,B=ae.length;D<B;D++){const W=ae[D],j=_(W),I=w%P;I!==0&&P-I<j.boundary&&(w+=P-I),Y.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=j.storage}}}const R=w%P;return R>0&&(w+=P-R),E.__size=w,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){const x=E.target;x.removeEventListener("dispose",p);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete a[x.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},a={}}return{bind:l,update:c,dispose:f}}class ao{constructor(e={}){const{canvas:t=Lc(),context:n=null,depth:s=!0,stencil:a=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this._useLegacyLights=!1,this.toneMapping=hn,this.toneMappingExposure=1;const x=this;let w=!1,P=0,R=0,A=null,q=-1,S=null;const b=new Qe,V=new Qe;let Y=null;const ae=new Ue(0);let D=0,B=t.width,W=t.height,j=1,I=null,H=null;const X=new Qe(0,0,B,W),Z=new Qe(0,0,B,W);let $=!1;const z=new sa;let K=!1,ce=!1,ve=null;const _e=new it,Pe=new Le,De=new L,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return A===null?j:1}let F=n;function mt(M,U){for(let k=0;k<M.length;k++){const G=M[k],O=t.getContext(G,U);if(O!==null)return O}return null}try{const M={alpha:!0,depth:s,stencil:a,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qs}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),F=mt(U,M),F===null)throw mt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Se,Ae,pe,Je,Ne,y,v,N,te,Q,ne,me,le,de,Ee,Fe,J,$e,Be,Re,Me,ue,T,ie;function ge(){Se=new Qd(F),Ae=new Yd(F,Se,e),Se.init(Ae),ue=new qc(F,Se,Ae),pe=new Im(F,Se,Ae),Je=new np(F),Ne=new ym,y=new Nm(F,Se,pe,Ne,Ae,ue,Je),v=new $d(x),N=new Jd(x),te=new uf(F,Ae),T=new Xd(F,Se,te,Ae),Q=new ep(F,te,Je,T),ne=new rp(F,Q,te,Je),Be=new ap(F,Ae,y),Fe=new jd(Ne),me=new Sm(x,v,N,Se,Ae,T,Fe),le=new km(x,Ne),de=new bm,Ee=new Lm(Se,Ae),$e=new Wd(x,v,N,pe,ne,h,l),J=new Um(x,ne,Ae),ie=new Bm(F,Je,Ae,pe),Re=new qd(F,Se,Je,Ae),Me=new tp(F,Se,Je,Ae),Je.programs=me.programs,x.capabilities=Ae,x.extensions=Se,x.properties=Ne,x.renderLists=de,x.shadowMap=J,x.state=pe,x.info=Je}ge();const he=new Om(x,F);this.xr=he,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=Se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(B,W,!1))},this.getSize=function(M){return M.set(B,W)},this.setSize=function(M,U,k=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,W=U,t.width=Math.floor(M*j),t.height=Math.floor(U*j),k===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(B*j,W*j).floor()},this.setDrawingBufferSize=function(M,U,k){B=M,W=U,j=k,t.width=Math.floor(M*k),t.height=Math.floor(U*k),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(X)},this.setViewport=function(M,U,k,G){M.isVector4?X.set(M.x,M.y,M.z,M.w):X.set(M,U,k,G),pe.viewport(b.copy(X).multiplyScalar(j).floor())},this.getScissor=function(M){return M.copy(Z)},this.setScissor=function(M,U,k,G){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,U,k,G),pe.scissor(V.copy(Z).multiplyScalar(j).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(M){pe.setScissorTest($=M)},this.setOpaqueSort=function(M){I=M},this.setTransparentSort=function(M){H=M},this.getClearColor=function(M){return M.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(M=!0,U=!0,k=!0){let G=0;if(M){let O=!1;if(A!==null){const fe=A.texture.format;O=fe===Vr||fe===Hr||fe===Gr}if(O){const fe=A.texture.type,xe=fe===dn||fe===cn||fe===ta||fe===wn||fe===Br||fe===zr,we=$e.getClearColor(),Ce=$e.getClearAlpha(),ze=we.r,Ie=we.g,Oe=we.b;xe?(m[0]=ze,m[1]=Ie,m[2]=Oe,m[3]=Ce,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=ze,g[1]=Ie,g[2]=Oe,g[3]=Ce,F.clearBufferiv(F.COLOR,0,g))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT),k&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),de.dispose(),Ee.dispose(),Ne.dispose(),v.dispose(),N.dispose(),ne.dispose(),T.dispose(),ie.dispose(),me.dispose(),he.dispose(),he.removeEventListener("sessionstart",st),he.removeEventListener("sessionend",je),ve&&(ve.dispose(),ve=null),rt.stop()};function ee(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=Je.autoReset,U=J.enabled,k=J.autoUpdate,G=J.needsUpdate,O=J.type;ge(),Je.autoReset=M,J.enabled=U,J.autoUpdate=k,J.needsUpdate=G,J.type=O}function se(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oe(M){const U=M.target;U.removeEventListener("dispose",oe),Te(U)}function Te(M){ye(M),Ne.remove(M)}function ye(M){const U=Ne.get(M).programs;U!==void 0&&(U.forEach(function(k){me.releaseProgram(k)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,k,G,O,fe){U===null&&(U=be);const xe=O.isMesh&&O.matrixWorld.determinant()<0,we=cu(M,U,k,G,O);pe.setMaterial(G,xe);let Ce=k.index,ze=1;if(G.wireframe===!0){if(Ce=Q.getWireframeAttribute(k),Ce===void 0)return;ze=2}const Ie=k.drawRange,Oe=k.attributes.position;let at=Ie.start*ze,Rt=(Ie.start+Ie.count)*ze;fe!==null&&(at=Math.max(at,fe.start*ze),Rt=Math.min(Rt,(fe.start+fe.count)*ze)),Ce!==null?(at=Math.max(at,0),Rt=Math.min(Rt,Ce.count)):Oe!=null&&(at=Math.max(at,0),Rt=Math.min(Rt,Oe.count));const dt=Rt-at;if(dt<0||dt===1/0)return;T.setup(O,G,we,k,Ce);let en,et=Re;if(Ce!==null&&(en=te.get(Ce),et=Me,et.setIndex(en)),O.isMesh)G.wireframe===!0?(pe.setLineWidth(G.wireframeLinewidth*Ve()),et.setMode(F.LINES)):et.setMode(F.TRIANGLES);else if(O.isLine){let He=G.linewidth;He===void 0&&(He=1),pe.setLineWidth(He*Ve()),O.isLineSegments?et.setMode(F.LINES):O.isLineLoop?et.setMode(F.LINE_LOOP):et.setMode(F.LINE_STRIP)}else O.isPoints?et.setMode(F.POINTS):O.isSprite&&et.setMode(F.TRIANGLES);if(O.isBatchedMesh)et.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)et.renderInstances(at,dt,O.count);else if(k.isInstancedBufferGeometry){const He=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,la=Math.min(k.instanceCount,He);et.renderInstances(at,dt,la)}else et.render(at,dt)};function We(M,U,k){M.transparent===!0&&M.side===Xt&&M.forceSinglePass===!1?(M.side=Tt,M.needsUpdate=!0,ss(M,U,k),M.side=pn,M.needsUpdate=!0,ss(M,U,k),M.side=Xt):ss(M,U,k)}this.compile=function(M,U,k=null){k===null&&(k=M),p=Ee.get(k),p.init(),E.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),M!==k&&M.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(x._useLegacyLights);const G=new Set;return M.traverse(function(O){const fe=O.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){const we=fe[xe];We(we,k,O),G.add(we)}else We(fe,k,O),G.add(fe)}),E.pop(),p=null,G},this.compileAsync=function(M,U,k=null){const G=this.compile(M,U,k);return new Promise(O=>{function fe(){if(G.forEach(function(xe){Ne.get(xe).currentProgram.isReady()&&G.delete(xe)}),G.size===0){O(M);return}setTimeout(fe,10)}Se.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Xe=null;function tt(M){Xe&&Xe(M)}function st(){rt.stop()}function je(){rt.start()}const rt=new kc;rt.setAnimationLoop(tt),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(M){Xe=M,he.setAnimationLoop(M),M===null?rt.stop():rt.start()},he.addEventListener("sessionstart",st),he.addEventListener("sessionend",je),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(U),U=he.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,U,A),p=Ee.get(M,E.length),p.init(),E.push(p),_e.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),z.setFromProjectionMatrix(_e),ce=this.localClippingEnabled,K=Fe.init(this.clippingPlanes,ce),_=de.get(M,f.length),_.init(),f.push(_),jt(M,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(I,H),this.info.render.frame++,K===!0&&Fe.beginShadows();const k=p.state.shadowsArray;if(J.render(k,M,U),K===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(_,M),p.setupLights(x._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let O=0,fe=G.length;O<fe;O++){const xe=G[O];oo(_,M,xe,xe.viewport)}}else oo(_,M,U);A!==null&&(y.updateMultisampleRenderTarget(A),y.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(x,M,U),T.resetDefaultState(),q=-1,S=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function jt(M,U,k,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||z.intersectsSprite(M)){G&&De.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_e);const xe=ne.update(M),we=M.material;we.visible&&_.push(M,xe,we,k,De.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||z.intersectsObject(M))){const xe=ne.update(M),we=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),De.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),De.copy(xe.boundingSphere.center)),De.applyMatrix4(M.matrixWorld).applyMatrix4(_e)),Array.isArray(we)){const Ce=xe.groups;for(let ze=0,Ie=Ce.length;ze<Ie;ze++){const Oe=Ce[ze],at=we[Oe.materialIndex];at&&at.visible&&_.push(M,xe,at,k,De.z,Oe)}}else we.visible&&_.push(M,xe,we,k,De.z,null)}}const fe=M.children;for(let xe=0,we=fe.length;xe<we;xe++)jt(fe[xe],U,k,G)}function oo(M,U,k,G){const O=M.opaque,fe=M.transmissive,xe=M.transparent;p.setupLightsView(k),K===!0&&Fe.setGlobalState(x.clippingPlanes,k),fe.length>0&&lu(O,fe,U,k),G&&pe.viewport(b.copy(G)),O.length>0&&is(O,U,k),fe.length>0&&is(fe,U,k),xe.length>0&&is(xe,U,k),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function lu(M,U,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const fe=Ae.isWebGL2;ve===null&&(ve=new Ln(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Ti:dn,minFilter:bi,samples:fe?4:0})),x.getDrawingBufferSize(Pe),fe?ve.setSize(Pe.x,Pe.y):ve.setSize(Zs(Pe.x),Zs(Pe.y));const xe=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(ae),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const we=x.toneMapping;x.toneMapping=hn,is(M,k,G),y.updateMultisampleRenderTarget(ve),y.updateRenderTargetMipmap(ve);let Ce=!1;for(let ze=0,Ie=U.length;ze<Ie;ze++){const Oe=U[ze],at=Oe.object,Rt=Oe.geometry,dt=Oe.material,en=Oe.group;if(dt.side===Xt&&at.layers.test(G.layers)){const et=dt.side;dt.side=Tt,dt.needsUpdate=!0,lo(at,k,G,Rt,dt,en),dt.side=et,dt.needsUpdate=!0,Ce=!0}}Ce===!0&&(y.updateMultisampleRenderTarget(ve),y.updateRenderTargetMipmap(ve)),x.setRenderTarget(xe),x.setClearColor(ae,D),x.toneMapping=we}function is(M,U,k){const G=U.isScene===!0?U.overrideMaterial:null;for(let O=0,fe=M.length;O<fe;O++){const xe=M[O],we=xe.object,Ce=xe.geometry,ze=G===null?xe.material:G,Ie=xe.group;we.layers.test(k.layers)&&lo(we,U,k,Ce,ze,Ie)}}function lo(M,U,k,G,O,fe){M.onBeforeRender(x,U,k,G,O,fe),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(x,U,k,G,M,fe),O.transparent===!0&&O.side===Xt&&O.forceSinglePass===!1?(O.side=Tt,O.needsUpdate=!0,x.renderBufferDirect(k,U,G,O,M,fe),O.side=pn,O.needsUpdate=!0,x.renderBufferDirect(k,U,G,O,M,fe),O.side=Xt):x.renderBufferDirect(k,U,G,O,M,fe),M.onAfterRender(x,U,k,G,O,fe)}function ss(M,U,k){U.isScene!==!0&&(U=be);const G=Ne.get(M),O=p.state.lights,fe=p.state.shadowsArray,xe=O.state.version,we=me.getParameters(M,O.state,fe,U,k),Ce=me.getProgramCacheKey(we);let ze=G.programs;G.environment=M.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(M.isMeshStandardMaterial?N:v).get(M.envMap||G.environment),ze===void 0&&(M.addEventListener("dispose",oe),ze=new Map,G.programs=ze);let Ie=ze.get(Ce);if(Ie!==void 0){if(G.currentProgram===Ie&&G.lightsStateVersion===xe)return uo(M,we),Ie}else we.uniforms=me.getUniforms(M),M.onBuild(k,we,x),M.onBeforeCompile(we,x),Ie=me.acquireProgram(we,Ce),ze.set(Ce,Ie),G.uniforms=we.uniforms;const Oe=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Oe.clippingPlanes=Fe.uniform),uo(M,we),G.needsLights=fu(M),G.lightsStateVersion=xe,G.needsLights&&(Oe.ambientLightColor.value=O.state.ambient,Oe.lightProbe.value=O.state.probe,Oe.directionalLights.value=O.state.directional,Oe.directionalLightShadows.value=O.state.directionalShadow,Oe.spotLights.value=O.state.spot,Oe.spotLightShadows.value=O.state.spotShadow,Oe.rectAreaLights.value=O.state.rectArea,Oe.ltc_1.value=O.state.rectAreaLTC1,Oe.ltc_2.value=O.state.rectAreaLTC2,Oe.pointLights.value=O.state.point,Oe.pointLightShadows.value=O.state.pointShadow,Oe.hemisphereLights.value=O.state.hemi,Oe.directionalShadowMap.value=O.state.directionalShadowMap,Oe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Oe.spotShadowMap.value=O.state.spotShadowMap,Oe.spotLightMatrix.value=O.state.spotLightMatrix,Oe.spotLightMap.value=O.state.spotLightMap,Oe.pointShadowMap.value=O.state.pointShadowMap,Oe.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ie,G.uniformsList=null,Ie}function co(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Vs.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function uo(M,U){const k=Ne.get(M);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function cu(M,U,k,G,O){U.isScene!==!0&&(U=be),y.resetTextureUnits();const fe=U.fog,xe=G.isMeshStandardMaterial?U.environment:null,we=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qt,Ce=(G.isMeshStandardMaterial?N:v).get(G.envMap||xe),ze=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ie=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Oe=!!k.morphAttributes.position,at=!!k.morphAttributes.normal,Rt=!!k.morphAttributes.color;let dt=hn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(dt=x.toneMapping);const en=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=en!==void 0?en.length:0,He=Ne.get(G),la=p.state.lights;if(K===!0&&(ce===!0||M!==S)){const Ft=M===S&&G.id===q;Fe.setState(G,M,Ft)}let nt=!1;G.version===He.__version?(He.needsLights&&He.lightsStateVersion!==la.state.version||He.outputColorSpace!==we||O.isBatchedMesh&&He.batching===!1||!O.isBatchedMesh&&He.batching===!0||O.isInstancedMesh&&He.instancing===!1||!O.isInstancedMesh&&He.instancing===!0||O.isSkinnedMesh&&He.skinning===!1||!O.isSkinnedMesh&&He.skinning===!0||O.isInstancedMesh&&He.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&He.instancingColor===!1&&O.instanceColor!==null||He.envMap!==Ce||G.fog===!0&&He.fog!==fe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Fe.numPlanes||He.numIntersection!==Fe.numIntersection)||He.vertexAlphas!==ze||He.vertexTangents!==Ie||He.morphTargets!==Oe||He.morphNormals!==at||He.morphColors!==Rt||He.toneMapping!==dt||Ae.isWebGL2===!0&&He.morphTargetsCount!==et)&&(nt=!0):(nt=!0,He.__version=G.version);let In=He.currentProgram;nt===!0&&(In=ss(G,U,O));let fo=!1,Pi=!1,ca=!1;const _t=In.getUniforms(),Nn=He.uniforms;if(pe.useProgram(In.program)&&(fo=!0,Pi=!0,ca=!0),G.id!==q&&(q=G.id,Pi=!0),fo||S!==M){_t.setValue(F,"projectionMatrix",M.projectionMatrix),_t.setValue(F,"viewMatrix",M.matrixWorldInverse);const Ft=_t.map.cameraPosition;Ft!==void 0&&Ft.setValue(F,De.setFromMatrixPosition(M.matrixWorld)),Ae.logarithmicDepthBuffer&&_t.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_t.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Pi=!0,ca=!0)}if(O.isSkinnedMesh){_t.setOptional(F,O,"bindMatrix"),_t.setOptional(F,O,"bindMatrixInverse");const Ft=O.skeleton;Ft&&(Ae.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),_t.setValue(F,"boneTexture",Ft.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(_t.setOptional(F,O,"batchingTexture"),_t.setValue(F,"batchingTexture",O._matricesTexture,y));const ua=k.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0&&Ae.isWebGL2===!0)&&Be.update(O,k,In),(Pi||He.receiveShadow!==O.receiveShadow)&&(He.receiveShadow=O.receiveShadow,_t.setValue(F,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Nn.envMap.value=Ce,Nn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Pi&&(_t.setValue(F,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&uu(Nn,ca),fe&&G.fog===!0&&le.refreshFogUniforms(Nn,fe),le.refreshMaterialUniforms(Nn,G,j,W,ve),Vs.upload(F,co(He),Nn,y)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Vs.upload(F,co(He),Nn,y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_t.setValue(F,"center",O.center),_t.setValue(F,"modelViewMatrix",O.modelViewMatrix),_t.setValue(F,"normalMatrix",O.normalMatrix),_t.setValue(F,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ft=G.uniformsGroups;for(let fa=0,hu=Ft.length;fa<hu;fa++)if(Ae.isWebGL2){const ho=Ft[fa];ie.update(ho,In),ie.bind(ho,In)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return In}function uu(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function fu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,U,k){Ne.get(M.texture).__webglTexture=U,Ne.get(M.depthTexture).__webglTexture=k;const G=Ne.get(M);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){const k=Ne.get(M);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,k=0){A=M,P=U,R=k;let G=!0,O=null,fe=!1,xe=!1;if(M){const Ce=Ne.get(M);Ce.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(F.FRAMEBUFFER,null),G=!1):Ce.__webglFramebuffer===void 0?y.setupRenderTarget(M):Ce.__hasExternalTextures&&y.rebindTextures(M,Ne.get(M.texture).__webglTexture,Ne.get(M.depthTexture).__webglTexture);const ze=M.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(xe=!0);const Ie=Ne.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?O=Ie[U][k]:O=Ie[U],fe=!0):Ae.isWebGL2&&M.samples>0&&y.useMultisampledRTT(M)===!1?O=Ne.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?O=Ie[k]:O=Ie,b.copy(M.viewport),V.copy(M.scissor),Y=M.scissorTest}else b.copy(X).multiplyScalar(j).floor(),V.copy(Z).multiplyScalar(j).floor(),Y=$;if(pe.bindFramebuffer(F.FRAMEBUFFER,O)&&Ae.drawBuffers&&G&&pe.drawBuffers(M,O),pe.viewport(b),pe.scissor(V),pe.setScissorTest(Y),fe){const Ce=Ne.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ce.__webglTexture,k)}else if(xe){const Ce=Ne.get(M.texture),ze=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.__webglTexture,k||0,ze)}q=-1},this.readRenderTargetPixels=function(M,U,k,G,O,fe,xe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){pe.bindFramebuffer(F.FRAMEBUFFER,we);try{const Ce=M.texture,ze=Ce.format,Ie=Ce.type;if(ze!==zt&&ue.convert(ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ie===Ti&&(Se.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ie!==dn&&ue.convert(Ie)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===un&&(Ae.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&k>=0&&k<=M.height-O&&F.readPixels(U,k,G,O,ue.convert(ze),ue.convert(Ie),fe)}finally{const Ce=A!==null?Ne.get(A).__webglFramebuffer:null;pe.bindFramebuffer(F.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(M,U,k=0){const G=Math.pow(2,-k),O=Math.floor(U.image.width*G),fe=Math.floor(U.image.height*G);y.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,M.x,M.y,O,fe),pe.unbindTexture()},this.copyTextureToTexture=function(M,U,k,G=0){const O=U.image.width,fe=U.image.height,xe=ue.convert(k.format),we=ue.convert(k.type);y.setTexture2D(k,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,M.x,M.y,O,fe,xe,we,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,xe,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,G,M.x,M.y,xe,we,U.image),G===0&&k.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(M,U,k,G,O=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=M.max.x-M.min.x+1,xe=M.max.y-M.min.y+1,we=M.max.z-M.min.z+1,Ce=ue.convert(G.format),ze=ue.convert(G.type);let Ie;if(G.isData3DTexture)y.setTexture3D(G,0),Ie=F.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)y.setTexture2DArray(G,0),Ie=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const Oe=F.getParameter(F.UNPACK_ROW_LENGTH),at=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Rt=F.getParameter(F.UNPACK_SKIP_PIXELS),dt=F.getParameter(F.UNPACK_SKIP_ROWS),en=F.getParameter(F.UNPACK_SKIP_IMAGES),et=k.isCompressedTexture?k.mipmaps[O]:k.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,et.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,et.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,M.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,M.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,M.min.z),k.isDataTexture||k.isData3DTexture?F.texSubImage3D(Ie,O,U.x,U.y,U.z,fe,xe,we,Ce,ze,et.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ie,O,U.x,U.y,U.z,fe,xe,we,Ce,et.data)):F.texSubImage3D(Ie,O,U.x,U.y,U.z,fe,xe,we,Ce,ze,et),F.pixelStorei(F.UNPACK_ROW_LENGTH,Oe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,at),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Rt),F.pixelStorei(F.UNPACK_SKIP_ROWS,dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,en),O===0&&G.generateMipmaps&&F.generateMipmap(Ie),pe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){P=0,R=0,A=null,pe.reset(),T.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===na?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Ji?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===lt?Rn:Xr}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Rn?lt:Qt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class jc extends ao{}jc.prototype.isWebGL1Renderer=!0;class oa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new oa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $c extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ro extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const al=new L,rl=new L,ol=new it,Na=new ia,Ls=new Qi;class Kc extends ut{constructor(e=new Yt,t=new ro){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)al.fromBufferAttribute(t,s-1),rl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=al.distanceTo(rl);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(s),Ls.radius+=a,e.ray.intersectsSphere(Ls)===!1)return;ol.copy(s).invert(),Na.copy(e.ray).applyMatrix4(ol);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=new L,u=new L,d=new L,h=new L,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let x=f,w=E-1;x<w;x+=m){const P=g.getX(x),R=g.getX(x+1);if(c.fromBufferAttribute(p,P),u.fromBufferAttribute(p,R),Na.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const q=e.ray.origin.distanceTo(h);q<e.near||q>e.far||t.push({distance:q,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),E=Math.min(p.count,o.start+o.count);for(let x=f,w=E-1;x<w;x+=m){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Na.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}const ll=new L,cl=new L;class Zc extends Kc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)ll.fromBufferAttribute(t,s),cl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ll.distanceTo(cl);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jc extends wt{constructor(e,t,n,s,a,o,r,l,c){super(e,t,n,s,a,o,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Ps=new L,Ds=new L,Fa=new L,Us=new Dt;class Qc extends Yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),a=Math.cos(xi*t),o=e.getIndex(),r=e.getAttribute("position"),l=o?o.count:r.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},m=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:f}=Us;if(_.fromBufferAttribute(r,c[0]),p.fromBufferAttribute(r,c[1]),f.fromBufferAttribute(r,c[2]),Us.getNormal(Fa),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let E=0;E<3;E++){const x=(E+1)%3,w=d[E],P=d[x],R=Us[u[E]],A=Us[u[x]],q=`${w}_${P}`,S=`${P}_${w}`;S in h&&h[S]?(Fa.dot(h[S].normal)<=a&&(m.push(R.x,R.y,R.z),m.push(A.x,A.y,A.z)),h[S]=null):q in h||(h[q]={index0:c[E],index1:c[x],normal:Fa.clone()})}}for(const g in h)if(h[g]){const{index0:_,index1:p}=h[g];Ps.fromBufferAttribute(r,_),Ds.fromBufferAttribute(r,p),m.push(Ps.x,Ps.y,Ps.z),m.push(Ds.x,Ds.y,Ds.z)}this.setAttribute("position",new At(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Jt extends Kn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ns extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class eu extends ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Oa=new it,ul=new L,fl=new L;class tu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ul.setFromMatrixPosition(e.matrixWorld),t.position.copy(ul),fl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fl),t.updateMatrixWorld(),Oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hl=new it,Oi=new L,ka=new L;class zm extends tu{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Oi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Oi),ka.copy(n.position),ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ka),n.updateMatrixWorld(),s.makeTranslation(-Oi.x,-Oi.y,-Oi.z),hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl)}}class nu extends ns{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gm extends tu{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rr extends ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Gm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class iu extends ns{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class su{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=dl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function dl(){return(typeof performance>"u"?Date:performance).now()}class Cr{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qs);const bn=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:oc,AddEquation:En,AddOperation:ic,AdditiveBlending:Xa,AgXToneMapping:cc,AlphaFormat:dc,AlwaysCompare:Rc,AlwaysDepth:Kl,AlwaysStencilFunc:yr,AmbientLight:iu,ArrayCamera:Yc,BackSide:Tt,BasicDepthPacking:xc,Box3:Ri,BoxGeometry:Ci,BufferAttribute:qt,BufferGeometry:Yt,ByteType:fc,Camera:to,CanvasTexture:Jc,CineonToneMapping:rc,ClampToEdgeWrapping:Bt,Clock:su,Color:Ue,ColorManagement:Ke,ConstantAlphaFactor:Yl,ConstantColorFactor:Xl,CubeCamera:Fc,CubeReflectionMapping:Yn,CubeRefractionMapping:jn,CubeTexture:no,CubeUVReflectionMapping:Zi,CullFaceBack:Wa,CullFaceFront:Dl,CullFaceNone:Pl,CustomBlending:Ul,CustomToneMapping:lc,Data3DTexture:Dc,DataArrayTexture:Zr,DepthFormat:An,DepthStencilFormat:$n,DepthTexture:so,DirectionalLight:Rr,DisplayP3ColorSpace:na,DoubleSide:Xt,DstAlphaFactor:zl,DstColorFactor:Hl,EdgesGeometry:Qc,EqualCompare:bc,EqualDepth:Jl,EquirectangularReflectionMapping:Ys,EquirectangularRefractionMapping:js,Euler:es,EventDispatcher:Un,Float32BufferAttribute:At,FloatType:un,Fog:oa,FrontSide:pn,Frustum:sa,GLSL3:br,GreaterCompare:Tc,GreaterDepth:ec,GreaterEqualCompare:Ac,GreaterEqualDepth:Ql,Group:Nt,HalfFloatType:Ti,HemisphereLight:eu,ImageUtils:$r,IntType:kr,KeepStencilOp:Hn,Layers:Jr,LessCompare:Ec,LessDepth:Zl,LessEqualCompare:Yr,LessEqualDepth:Vi,Light:ns,Line:Kc,LineBasicMaterial:ro,LineSegments:Zc,LinearDisplayP3ColorSpace:Ji,LinearEncoding:Xr,LinearFilter:Pt,LinearMipmapLinearFilter:bi,LinearMipmapNearestFilter:uc,LinearSRGBColorSpace:Qt,LinearToneMapping:sc,LinearTransfer:Wi,LuminanceAlphaFormat:mc,LuminanceFormat:pc,MOUSE:Kt,Material:Kn,MathUtils:Cn,Matrix3:Ge,Matrix4:it,MaxEquation:$a,Mesh:ct,MeshBasicMaterial:$i,MeshDepthMaterial:Wc,MeshDistanceMaterial:Xc,MeshLambertMaterial:Jt,MinEquation:ja,MirroredRepeatWrapping:$s,MixOperation:nc,MultiplyBlending:Ya,MultiplyOperation:ea,NearestFilter:Mt,NearestMipmapLinearFilter:Os,NearestMipmapNearestFilter:Ka,NeverCompare:yc,NeverDepth:$l,NoBlending:fn,NoColorSpace:It,NoToneMapping:hn,NormalBlending:qn,NotEqualCompare:wc,NotEqualDepth:tc,Object3D:ut,ObjectSpaceNormalMap:Sc,OneFactor:Ol,OneMinusConstantAlphaFactor:jl,OneMinusConstantColorFactor:ql,OneMinusDstAlphaFactor:Gl,OneMinusDstColorFactor:Vl,OneMinusSrcAlphaFactor:qs,OneMinusSrcColorFactor:Bl,OrthographicCamera:aa,P3Primaries:qi,PCFShadowMap:Nr,PCFSoftShadowMap:Fr,PMREMGenerator:wr,PerspectiveCamera:Ut,Plane:on,PlaneGeometry:ts,PointLight:nu,Quaternion:Pn,RED_GREEN_RGTC2_Format:Mr,RED_RGTC1_Format:vc,REVISION:Qs,RGBADepthPacking:Mc,RGBAFormat:zt,RGBAIntegerFormat:Vr,RGBA_ASTC_10x10_Format:pr,RGBA_ASTC_10x5_Format:fr,RGBA_ASTC_10x6_Format:hr,RGBA_ASTC_10x8_Format:dr,RGBA_ASTC_12x10_Format:mr,RGBA_ASTC_12x12_Format:_r,RGBA_ASTC_4x4_Format:ir,RGBA_ASTC_5x4_Format:sr,RGBA_ASTC_5x5_Format:ar,RGBA_ASTC_6x5_Format:rr,RGBA_ASTC_6x6_Format:or,RGBA_ASTC_8x5_Format:lr,RGBA_ASTC_8x6_Format:cr,RGBA_ASTC_8x8_Format:ur,RGBA_BPTC_Format:Hs,RGBA_ETC2_EAC_Format:nr,RGBA_PVRTC_2BPPV1_Format:er,RGBA_PVRTC_4BPPV1_Format:Qa,RGBA_S3TC_DXT1_Format:Bs,RGBA_S3TC_DXT3_Format:zs,RGBA_S3TC_DXT5_Format:Gs,RGB_BPTC_SIGNED_Format:gr,RGB_BPTC_UNSIGNED_Format:vr,RGB_ETC1_Format:Wr,RGB_ETC2_Format:tr,RGB_PVRTC_2BPPV1_Format:Ja,RGB_PVRTC_4BPPV1_Format:Za,RGB_S3TC_DXT1_Format:ks,RGFormat:gc,RGIntegerFormat:Hr,Ray:ia,Rec709Primaries:Xi,RedFormat:_c,RedIntegerFormat:Gr,ReinhardToneMapping:ac,RenderTarget:Pc,RepeatWrapping:Ei,ReverseSubtractEquation:Nl,SIGNED_RED_GREEN_RGTC2_Format:Sr,SIGNED_RED_RGTC1_Format:xr,SRGBColorSpace:lt,SRGBTransfer:Ze,Scene:$c,ShaderChunk:ke,ShaderLib:Wt,ShaderMaterial:Dn,ShortType:hc,Source:Kr,Sphere:Qi,Spherical:Cr,SrcAlphaFactor:Xs,SrcAlphaSaturateFactor:Wl,SrcColorFactor:kl,StaticDrawUsage:Er,SubtractEquation:Il,SubtractiveBlending:qa,TOUCH:Gn,TangentSpaceNormalMap:qr,Texture:wt,Triangle:Dt,UVMapping:Or,Uint16BufferAttribute:Qr,Uint32BufferAttribute:eo,UniformsLib:re,UniformsUtils:Nc,UnsignedByteType:dn,UnsignedInt248Type:wn,UnsignedIntType:cn,UnsignedShort4444Type:Br,UnsignedShort5551Type:zr,UnsignedShortType:ta,VSMShadowMap:$t,Vector2:Le,Vector3:L,Vector4:Qe,WebGL1Renderer:jc,WebGLCoordinateSystem:Zt,WebGLCubeRenderTarget:Oc,WebGLRenderTarget:Ln,WebGLRenderer:ao,WebGLUtils:qc,WebGPUCoordinateSystem:Yi,ZeroFactor:Fl,_SRGBAFormat:Ks,createCanvasElement:Lc,sRGBEncoding:Rn},Symbol.toStringTag,{value:"Module"})),pl={type:"change"},Ba={type:"start"},ml={type:"end"},Is=new ia,_l=new on,Hm=Math.cos(70*Cn.DEG2RAD);class Vm extends Un{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kt.ROTATE,MIDDLE:Kt.DOLLY,RIGHT:Kt.PAN},this.touches={ONE:Gn.ROTATE,TWO:Gn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Ee),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(pl),n.update(),a=s.NONE},this.update=function(){const T=new L,ie=new Pn().setFromUnitVectors(e.up,new L(0,1,0)),ge=ie.clone().invert(),he=new L,ee=new Pn,C=new L,se=2*Math.PI;return function(Te=null){const ye=n.object.position;T.copy(ye).sub(n.target),T.applyQuaternion(ie),r.setFromVector3(T),n.autoRotate&&a===s.NONE&&Y(b(Te)),n.enableDamping?(r.theta+=l.theta*n.dampingFactor,r.phi+=l.phi*n.dampingFactor):(r.theta+=l.theta,r.phi+=l.phi);let We=n.minAzimuthAngle,Xe=n.maxAzimuthAngle;isFinite(We)&&isFinite(Xe)&&(We<-Math.PI?We+=se:We>Math.PI&&(We-=se),Xe<-Math.PI?Xe+=se:Xe>Math.PI&&(Xe-=se),We<=Xe?r.theta=Math.max(We,Math.min(Xe,r.theta)):r.theta=r.theta>(We+Xe)/2?Math.max(We,r.theta):Math.min(Xe,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?r.radius=X(r.radius):r.radius=X(r.radius*c),T.setFromSpherical(r),T.applyQuaternion(ge),ye.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let tt=!1;if(n.zoomToCursor&&R){let st=null;if(n.object.isPerspectiveCamera){const je=T.length();st=X(je*c);const rt=je-st;n.object.position.addScaledVector(w,rt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const je=new L(P.x,P.y,0);je.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),tt=!0;const rt=new L(P.x,P.y,0);rt.unproject(n.object),n.object.position.sub(rt).add(je),n.object.updateMatrixWorld(),st=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;st!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(st).add(n.object.position):(Is.origin.copy(n.object.position),Is.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Is.direction))<Hm?e.lookAt(n.target):(_l.setFromNormalAndCoplanarPoint(n.object.up,n.target),Is.intersectPlane(_l,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),tt=!0);return c=1,R=!1,tt||he.distanceToSquared(n.object.position)>o||8*(1-ee.dot(n.object.quaternion))>o||C.distanceToSquared(n.target)>0?(n.dispatchEvent(pl),he.copy(n.object.position),ee.copy(n.object.quaternion),C.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",$e),n.domElement.removeEventListener("pointerdown",y),n.domElement.removeEventListener("pointercancel",N),n.domElement.removeEventListener("wheel",ne),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",N),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ee),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=s.NONE;const o=1e-6,r=new Cr,l=new Cr;let c=1;const u=new L,d=new Le,h=new Le,m=new Le,g=new Le,_=new Le,p=new Le,f=new Le,E=new Le,x=new Le,w=new L,P=new Le;let R=!1;const A=[],q={};let S=!1;function b(T){return T!==null?2*Math.PI/60*n.autoRotateSpeed*T:2*Math.PI/60/60*n.autoRotateSpeed}function V(T){const ie=Math.abs(T*.01);return Math.pow(.95,n.zoomSpeed*ie)}function Y(T){l.theta-=T}function ae(T){l.phi-=T}const D=function(){const T=new L;return function(ge,he){T.setFromMatrixColumn(he,0),T.multiplyScalar(-ge),u.add(T)}}(),B=function(){const T=new L;return function(ge,he){n.screenSpacePanning===!0?T.setFromMatrixColumn(he,1):(T.setFromMatrixColumn(he,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(ge),u.add(T)}}(),W=function(){const T=new L;return function(ge,he){const ee=n.domElement;if(n.object.isPerspectiveCamera){const C=n.object.position;T.copy(C).sub(n.target);let se=T.length();se*=Math.tan(n.object.fov/2*Math.PI/180),D(2*ge*se/ee.clientHeight,n.object.matrix),B(2*he*se/ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(ge*(n.object.right-n.object.left)/n.object.zoom/ee.clientWidth,n.object.matrix),B(he*(n.object.top-n.object.bottom)/n.object.zoom/ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(T){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(T,ie){if(!n.zoomToCursor)return;R=!0;const ge=n.domElement.getBoundingClientRect(),he=T-ge.left,ee=ie-ge.top,C=ge.width,se=ge.height;P.x=he/C*2-1,P.y=-(ee/se)*2+1,w.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function X(T){return Math.max(n.minDistance,Math.min(n.maxDistance,T))}function Z(T){d.set(T.clientX,T.clientY)}function $(T){H(T.clientX,T.clientX),f.set(T.clientX,T.clientY)}function z(T){g.set(T.clientX,T.clientY)}function K(T){h.set(T.clientX,T.clientY),m.subVectors(h,d).multiplyScalar(n.rotateSpeed);const ie=n.domElement;Y(2*Math.PI*m.x/ie.clientHeight),ae(2*Math.PI*m.y/ie.clientHeight),d.copy(h),n.update()}function ce(T){E.set(T.clientX,T.clientY),x.subVectors(E,f),x.y>0?j(V(x.y)):x.y<0&&I(V(x.y)),f.copy(E),n.update()}function ve(T){_.set(T.clientX,T.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),W(p.x,p.y),g.copy(_),n.update()}function _e(T){H(T.clientX,T.clientY),T.deltaY<0?I(V(T.deltaY)):T.deltaY>0&&j(V(T.deltaY)),n.update()}function Pe(T){let ie=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?ae(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?ae(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),ie=!0;break}ie&&(T.preventDefault(),n.update())}function De(T){if(A.length===1)d.set(T.pageX,T.pageY);else{const ie=ue(T),ge=.5*(T.pageX+ie.x),he=.5*(T.pageY+ie.y);d.set(ge,he)}}function be(T){if(A.length===1)g.set(T.pageX,T.pageY);else{const ie=ue(T),ge=.5*(T.pageX+ie.x),he=.5*(T.pageY+ie.y);g.set(ge,he)}}function Ve(T){const ie=ue(T),ge=T.pageX-ie.x,he=T.pageY-ie.y,ee=Math.sqrt(ge*ge+he*he);f.set(0,ee)}function F(T){n.enableZoom&&Ve(T),n.enablePan&&be(T)}function mt(T){n.enableZoom&&Ve(T),n.enableRotate&&De(T)}function Se(T){if(A.length==1)h.set(T.pageX,T.pageY);else{const ge=ue(T),he=.5*(T.pageX+ge.x),ee=.5*(T.pageY+ge.y);h.set(he,ee)}m.subVectors(h,d).multiplyScalar(n.rotateSpeed);const ie=n.domElement;Y(2*Math.PI*m.x/ie.clientHeight),ae(2*Math.PI*m.y/ie.clientHeight),d.copy(h)}function Ae(T){if(A.length===1)_.set(T.pageX,T.pageY);else{const ie=ue(T),ge=.5*(T.pageX+ie.x),he=.5*(T.pageY+ie.y);_.set(ge,he)}p.subVectors(_,g).multiplyScalar(n.panSpeed),W(p.x,p.y),g.copy(_)}function pe(T){const ie=ue(T),ge=T.pageX-ie.x,he=T.pageY-ie.y,ee=Math.sqrt(ge*ge+he*he);E.set(0,ee),x.set(0,Math.pow(E.y/f.y,n.zoomSpeed)),j(x.y),f.copy(E);const C=(T.pageX+ie.x)*.5,se=(T.pageY+ie.y)*.5;H(C,se)}function Je(T){n.enableZoom&&pe(T),n.enablePan&&Ae(T)}function Ne(T){n.enableZoom&&pe(T),n.enableRotate&&Se(T)}function y(T){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",v),n.domElement.addEventListener("pointerup",N)),Be(T),T.pointerType==="touch"?Fe(T):te(T))}function v(T){n.enabled!==!1&&(T.pointerType==="touch"?J(T):Q(T))}function N(T){Re(T),A.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",N)),n.dispatchEvent(ml),a=s.NONE}function te(T){let ie;switch(T.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Kt.DOLLY:if(n.enableZoom===!1)return;$(T),a=s.DOLLY;break;case Kt.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;z(T),a=s.PAN}else{if(n.enableRotate===!1)return;Z(T),a=s.ROTATE}break;case Kt.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;Z(T),a=s.ROTATE}else{if(n.enablePan===!1)return;z(T),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(Ba)}function Q(T){switch(a){case s.ROTATE:if(n.enableRotate===!1)return;K(T);break;case s.DOLLY:if(n.enableZoom===!1)return;ce(T);break;case s.PAN:if(n.enablePan===!1)return;ve(T);break}}function ne(T){n.enabled===!1||n.enableZoom===!1||a!==s.NONE||(T.preventDefault(),n.dispatchEvent(Ba),_e(me(T)),n.dispatchEvent(ml))}function me(T){const ie=T.deltaMode,ge={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch(ie){case 1:ge.deltaY*=16;break;case 2:ge.deltaY*=100;break}return T.ctrlKey&&!S&&(ge.deltaY*=10),ge}function le(T){T.key==="Control"&&(S=!0,document.addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(T){T.key==="Control"&&(S=!1,document.removeEventListener("keyup",de,{passive:!0,capture:!0}))}function Ee(T){n.enabled===!1||n.enablePan===!1||Pe(T)}function Fe(T){switch(Me(T),A.length){case 1:switch(n.touches.ONE){case Gn.ROTATE:if(n.enableRotate===!1)return;De(T),a=s.TOUCH_ROTATE;break;case Gn.PAN:if(n.enablePan===!1)return;be(T),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(n.touches.TWO){case Gn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(T),a=s.TOUCH_DOLLY_PAN;break;case Gn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(T),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(Ba)}function J(T){switch(Me(T),a){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Se(T),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ae(T),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Je(T),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ne(T),n.update();break;default:a=s.NONE}}function $e(T){n.enabled!==!1&&T.preventDefault()}function Be(T){A.push(T.pointerId)}function Re(T){delete q[T.pointerId];for(let ie=0;ie<A.length;ie++)if(A[ie]==T.pointerId){A.splice(ie,1);return}}function Me(T){let ie=q[T.pointerId];ie===void 0&&(ie=new Le,q[T.pointerId]=ie),ie.set(T.pageX,T.pageY)}function ue(T){const ie=T.pointerId===A[0]?A[1]:A[0];return q[ie]}n.domElement.addEventListener("contextmenu",$e),n.domElement.addEventListener("pointerdown",y),n.domElement.addEventListener("pointercancel",N),n.domElement.addEventListener("wheel",ne,{passive:!1}),document.addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}function Wm(i,e,t){const{count:n,x:s,z:a,yaw:o,phase:r,wait:l,moving:c,paths:u,activity:d}=i;for(let h=0;h<n;h++){if(d[h]!=="wander"){c[h]=0;continue}if(l[h]>0){l[h]-=t,c[h]=0;continue}let m=u[h];if(m.length===0){const A={x:Math.floor(s[h]),z:Math.floor(a[h])},q=qm(i,A,e);if(m=q?Ym(A,q,e)??[]:[],u[h]=m,m.length===0){l[h]=.8,c[h]=0;continue}}const g=m[0],_=g.x+.5,p=g.z+.5;if(Xm(h,s,a,n,_,p)){l[h]=.2,c[h]=0;continue}const f=_-s[h],E=p-a[h],x=Math.hypot(f,E);if(x<.05){s[h]=_,a[h]=p,m.shift(),c[h]=0,m.length===0&&(l[h]=.7+i.random()*2.2);continue}const P=Math.min(x,1.45*t);s[h]+=f/x*P,a[h]+=E/x*P,r[h]+=t*9;const R=Math.atan2(f,E);o[h]=jm(o[h],R,1-Math.exp(-10*t)),c[h]=1}}function Xm(i,e,t,n,s,a){for(let o=0;o<n;o++){if(o===i)continue;const r=Math.hypot(e[o]-s,t[o]-a)<.42,l=Math.hypot(e[o]-e[i],t[o]-t[i])<1;if(r&&l)return!0}return!1}function qm(i,e,t){let n=null;for(let s=0;s<40;s++){const a=Math.floor(i.random()*t.width),o=Math.floor(i.random()*t.height);if(au(t,a,o))continue;if(Math.abs(a-e.x)+Math.abs(o-e.z)>=4)return{x:a,z:o};n={x:a,z:o}}return n}function Ym(i,e,t){const n=(d,h)=>h*t.width+d,s=n(i.x,i.z),a=n(e.x,e.z);if(s===a)return[];const o=new Map;o.set(s,null);const r=[i],l=[[1,0],[-1,0],[0,1],[0,-1]];for(;r.length>0;){const d=r.shift();if(!d||d.x===e.x&&d.z===e.z)break;for(const[h,m]of l){const g=d.x+h,_=d.z+m;if(g<0||_<0||g>=t.width||_>=t.height)continue;const p=n(g,_);o.has(p)||au(t,g,_)||(o.set(p,n(d.x,d.z)),r.push({x:g,z:_}))}}if(!o.has(a))return null;const c=[];let u=a;for(;u!==null&&u!==s;)c.push({x:u%t.width,z:Math.floor(u/t.width)}),u=o.get(u)??null;return c.reverse(),c}function au(i,e,t){return i.blocked[t*i.width+e]===1}function jm(i,e,t){const n=Math.atan2(Math.sin(e-i),Math.cos(e-i));return i+n*t}const di=64;class $m{constructor(e){Ye(this,"backend","typescript");Ye(this,"tick",0);Ye(this,"time",0);Ye(this,"nav");Ye(this,"ids");Ye(this,"keys");Ye(this,"names");Ye(this,"needs");Ye(this,"skills");Ye(this,"purseCents");Ye(this,"contractId");Ye(this,"activity");Ye(this,"wait");Ye(this,"paths");Ye(this,"contracts",[]);Ye(this,"events",[]);Ye(this,"minds");Ye(this,"research",{unlocked:[],active:null,progress:0});Ye(this,"orders",[]);Ye(this,"columns");Ye(this,"accumulator",0);Ye(this,"seed");Ye(this,"rngState");const t=e.spawns;if(t.length>di)throw new Error(`This build simulates at most ${di} colonists.`);this.nav=e.nav,this.seed=e.seed??27164,this.rngState=this.seed>>>0;const n=t.length;this.ids=t.map(a=>a.id),this.keys=t.map(a=>a.key),this.names=t.map(a=>a.name),this.needs=t.map((a,o)=>a.needs??{food:Sn(.92-o*.03),rest:Sn(.88-o*.02),recreation:Sn(.9-o*.04)}),this.skills=t.map(a=>a.skills??Qm(a.id)),this.minds=t.map((a,o)=>a.mind??Zm(o)),this.purseCents=new Int32Array(di),this.contractId=t.map(()=>null),this.activity=t.map(()=>"wander"),this.wait=new Float32Array(di),this.paths=t.map(()=>[]),t.forEach((a,o)=>{this.purseCents[o]=a.purseCents??8e3+o*1500,this.wait[o]=o*.35});const s=()=>new Float32Array(di);this.columns={generation:0,count:n,prevX:s(),prevZ:s(),prevYaw:s(),prevPhase:s(),x:s(),z:s(),yaw:s(),phase:s(),moving:new Uint8Array(di)},t.forEach((a,o)=>{this.columns.x[o]=a.x,this.columns.z[o]=a.z,this.columns.yaw[o]=a.yaw,this.columns.phase[o]=o,this.copyCurrentToPrevious(o)})}advance(e){this.accumulator+=Math.min(Math.max(0,e),.25);let t=0;for(;this.accumulator>=Di&&t<Rl;)this.snapshot(),this.step(Di),this.tick+=1,this.time+=Di,this.accumulator-=Di,t+=1}alpha(){return this.accumulator/Di}colonists(){return this.columns}roster(){return{ids:this.ids,keys:this.keys,names:this.names}}totalGoldCents(){let e=0;for(let t=0;t<this.columns.count;t++)e+=this.purseCents[t];return e}pollEvents(){return this.events.splice(0,this.events.length)}save(){const e=[];for(let t=0;t<this.columns.count;t++)e.push({id:this.ids[t],key:this.keys[t],name:this.names[t],x:this.columns.x[t],z:this.columns.z[t],yaw:this.columns.yaw[t],phase:this.columns.phase[t],wait:this.wait[t],needs:{...this.needs[t]},skills:{...this.skills[t]},purseCents:this.purseCents[t],contractId:this.contractId[t],activity:this.activity[t],mind:vl(this.minds[t])});return{version:1,seed:this.seed,rngState:this.rngState,tick:this.tick,time:this.time,colonists:e,contracts:this.contracts.map(t=>({...t})),research:{...this.research,unlocked:[...this.research.unlocked]},orders:this.orders.map(t=>({...t}))}}load(e){if(e.version!==1)throw new Error(`Unknown save version ${e.version}`);if(e.colonists.length!==this.columns.count)throw new Error("This build cannot load a valley with a different number of colonists.");this.seed=e.seed,this.rngState=e.rngState>>>0,this.tick=e.tick,this.time=e.time,this.accumulator=0,this.contracts.splice(0,this.contracts.length,...e.contracts.map(t=>({...t}))),this.research={...e.research,unlocked:[...e.research.unlocked]},this.orders=e.orders.map(t=>({...t}));for(let t=0;t<e.colonists.length;t++){const n=e.colonists[t];this.ids[t]=n.id,this.keys[t]=n.key,this.names[t]=n.name,this.columns.x[t]=n.x,this.columns.z[t]=n.z,this.columns.yaw[t]=n.yaw,this.columns.phase[t]=n.phase,this.wait[t]=n.wait,this.needs[t]={...n.needs},this.skills[t]={...n.skills},this.purseCents[t]=n.purseCents,this.contractId[t]=n.contractId,this.minds[t]=vl(n.mind),this.activity[t]=gl(this.contracts,n.contractId)?"work":"wander",this.paths[t]=[],this.columns.moving[t]=0,this.copyCurrentToPrevious(t)}}step(e){this.schedule(),Wm({count:this.columns.count,x:this.columns.x,z:this.columns.z,yaw:this.columns.yaw,phase:this.columns.phase,wait:this.wait,moving:this.columns.moving,paths:this.paths,activity:this.activity,random:()=>this.random()},this.nav,e),this.stepNeeds(e)}schedule(){for(let e=0;e<this.columns.count;e++)this.activity[e]=gl(this.contracts,this.contractId[e])?"work":"wander"}stepNeeds(e){const t=e/3e3,n=e/(40*60),s=e/(45*60);for(let a=0;a<this.columns.count;a++){const o=this.needs[a];o.food=Sn(o.food-t),o.rest=Sn(o.rest-n),o.recreation=Sn(o.recreation-s)}}snapshot(){for(let e=0;e<this.columns.count;e++)this.copyCurrentToPrevious(e)}copyCurrentToPrevious(e){this.columns.prevX[e]=this.columns.x[e],this.columns.prevZ[e]=this.columns.z[e],this.columns.prevYaw[e]=this.columns.yaw[e],this.columns.prevPhase[e]=this.columns.phase[e]}random(){let e=this.rngState|0;e=e+1831565813|0,this.rngState=e>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Km(i){if((i.backend??"typescript")==="wasm")throw new Error("The Zig WebAssembly backend is not linked into this build. See docs/ENGINE.md.");return new $m(i)}function gl(i,e){return e===null?!1:i.some(t=>t.id===e&&t.state==="accepted")}function Zm(i){return{stated:"objectivism",certainty:Sn(.9-i*.03),seeds:[],charisma:.35+i%3*.12,suggestibility:.22+i%4*.06,receptivity:.82,residence:"founder",integrity:1,morale:Sn(.86-i*.02),force:"none",laborHoursLeft:14,inventory:Jm()}}function Jm(){return{food:0,timber:0,stone:0,ore:0,power:0,goldOre:0}}function vl(i){return{...i,seeds:i.seeds.map(e=>({...e})),inventory:{...i.inventory}}}function Qm(i){const e={};return Cl.forEach((t,n)=>{e[t]=(i*3+n*5)%9}),e}function Sn(i){return i<0?0:i>1?1:i}function e_(i=Ll){return _u(i)}function t_(i){const e=new Uint8Array(i.width*i.height),t=(n,s)=>{n<0||s<0||n>=i.width||s>=i.height||(e[s*i.width+n]=1)};for(let n=0;n<i.height;n++)for(let s=0;s<i.width;s++){const a=i.terrain[n*i.width+s];(a==="water"||a==="stream")&&t(s,n)}for(const n of i.walls)t(n.x,n.z);for(const n of i.props)if(n.blocks!==!1)for(const[s,a]of n_(n))t(s,a);for(const n of i.animals)for(let s=0;s<n.d;s++)for(let a=0;a<n.w;a++)t(n.x+a,n.z+s);for(const n of i.figures)n.wander||t(n.x,n.z);return{width:i.width,height:i.height,blocked:e}}function n_(i){const e=[],t=i.w??1,n=i.d??1;for(let s=0;s<n;s++)for(let a=0;a<t;a++)e.push([i.x+a,i.z+s]);return e}const i_=38;function s_(i){const e=[],t=[],n=new Map;let s="default";const a=l=>{let c=n.get(l);return c||(c={pos:[],nrm:[],uv:[]},n.set(l,c)),c},o=i.split(/\r?\n/);for(const l of o){const c=l.trim();if(c.length===0||c.startsWith("#"))continue;const u=c.split(/\s+/),d=u[0];if(d==="v"&&u.length>=4)e.push(Number(u[1]),Number(u[2]),-Number(u[3]));else if(d==="vt"&&u.length>=3)t.push(Number(u[1]),Number(u[2]));else if(d==="usemtl")s=u[1]??"default";else if(d==="f"&&u.length>=4){const h=[];let m=!1;for(let _=1;_<u.length;_++){const p=u[_].split("/"),f=xl(p[0],e.length/3),E=p.length>1&&p[1].length>0?xl(p[1],t.length/2):-1;if(f<0){m=!0;break}h.push({pi:f,ti:E})}if(m||h.length<3)continue;const g=a(s);for(let _=1;_+1<h.length;_++)a_(g,e,t,h[0],h[_],h[_+1])}}const r=[];for(const[l,c]of n){if(c.pos.length===0)continue;const u=new Yt;u.setAttribute("position",new At(c.pos,3)),u.setAttribute("normal",new At(c.nrm,3)),u.setAttribute("uv",new At(c.uv,2)),r.push({material:l,geometry:u,edges:new Qc(u,i_)})}return{parts:r}}function xl(i,e){if(!i)return-1;const t=Number(i);if(!Number.isFinite(t)||t===0)return-1;const n=t<0?e+t:t-1;return n>=0&&n<e?n:-1}function a_(i,e,t,n,s,a){const o=e[n.pi*3],r=e[n.pi*3+1],l=e[n.pi*3+2],c=e[s.pi*3],u=e[s.pi*3+1],d=e[s.pi*3+2],h=e[a.pi*3],m=e[a.pi*3+1],g=e[a.pi*3+2],_=c-o,p=u-r,f=d-l,E=h-o,x=m-r,w=g-l;let P=p*w-f*x,R=f*E-_*w,A=_*x-p*E;const q=Math.hypot(P,R,A);if(q<1e-8)return;P/=q,R/=q,A/=q;const S=[n,s,a],b=[[o,r,l],[c,u,d],[h,m,g]];for(let V=0;V<3;V++){i.pos.push(b[V][0],b[V][1],b[V][2]),i.nrm.push(P,R,A);const Y=S[V].ti;Y>=0?i.uv.push(t[Y*2],t[Y*2+1]):i.uv.push(0,0)}}const r_=new ro({color:2235416});function Xn(i,e){const t=new Nt,n=e.stuff??"Wood",s=e.skipPrefix??[];for(const r of i.parts){if(s.some(d=>r.material.startsWith(d)))continue;const l=e.materials.get(r.material,n,e.tint??null),c=new ct(r.geometry,l);c.castShadow=!0,c.receiveShadow=!0,t.add(c);const u=new Zc(r.edges,r_);u.castShadow=!1,t.add(u)}const a=e.scale??1,o=e.stretch??[1,1,1];return t.scale.set(a*o[0],a*o[1],a*o[2]),t.rotation.y=Cn.degToRad(e.yaw??0),t}function o_(i,e,t){const n=new Nt;n.name=i.id,n.position.set(i.x+i.w/2,0,i.z+i.d/2),n.rotation.y=Cn.degToRad(i.yaw);const s=e.get(i.model);s&&n.add(Xn(s,{materials:t}));const a=[],o=i.leg?e.get(i.leg):void 0;if(o)for(const r of i.hips){const l=new Nt;l.position.set(r[0],r[1],r[2]),l.rotation.order="XYZ";const c=r[0]>=0?1:-1;l.rotation.z=Cn.degToRad(c*i.legSplay);const u=Xn(o,{materials:t});u.position.y=-i.legLength,l.add(u),n.add(l),a.push(l)}return{root:n,pivots:a,swing:i.legSwing}}function l_(i,e){for(let t=0;t<i.length;t++){const n=i[t];n.root.position.y=Math.abs(Math.sin(e*1.4+t))*.012,n.pivots.forEach((s,a)=>{const o=(a+(a>>1))%2*Math.PI,r=Math.sin(e*1.7+o+t)*Math.min(n.swing,22)*.35;s.rotation.x=Cn.degToRad(r)})}}function Ml(i,e,t){const n=new Nt;return n.name=i.id,i.parts.forEach((s,a)=>{const o=e.get(s);o&&n.add(Xn(o,{materials:t,stuff:"Fabric",tint:new Ue(i.tints[a]??"#ffffff")}))}),n.position.set(i.x+.5,0,i.z+.5),n.rotation.y=Cn.degToRad(i.yaw??0),n}const Ki="./assets/isorim",c_={color:[.29,.54,.52],map:null,tint:!1,emissive:!1},u_={color:[.84,.74,.6],map:null,tint:!1,emissive:!1},f_={color:[.84,.74,.6],map:null,tint:!1,emissive:!1},h_={color:[.7056,.6216,.504],map:null,tint:!1,emissive:!1},d_={color:[.42,.3,.22],map:null,tint:!1,emissive:!1},p_={color:[.42,.3,.22],map:null,tint:!1,emissive:!1},m_={color:[.3528,.252,.1848],map:null,tint:!1,emissive:!1},__={color:[.62,.48,.34],map:null,tint:!1,emissive:!1},g_={color:[.94,.93,.89],map:null,tint:!1,emissive:!1},v_={color:[.94,.93,.89],map:null,tint:!1,emissive:!1},x_={color:[.7896,.7812,.7476],map:null,tint:!1,emissive:!1},M_={color:[.27,.2,.16],map:null,tint:!1,emissive:!1},S_={color:[.4,.29,.21],map:null,tint:!1,emissive:!1},y_={color:[.24,.18,.15],map:null,tint:!1,emissive:!1},E_={color:[.336,.2436,.1764],map:null,tint:!1,emissive:!1},b_={color:[.88,.8,.44],map:null,tint:!1,emissive:!1},T_={color:[.74,.6,.5],map:null,tint:!1,emissive:!1},w_={color:[.74,.6,.5],map:null,tint:!1,emissive:!1},A_={color:[.6216,.504,.42],map:null,tint:!1,emissive:!1},R_={color:[.94,.72,.36],map:null,tint:!1,emissive:!1},C_={color:[.74,.4,.36],map:null,tint:!1,emissive:!1},L_={color:[.74,.4,.36],map:null,tint:!1,emissive:!1},P_={color:[.6216,.336,.3024],map:null,tint:!1,emissive:!1},D_={color:[.56,.42,.3],map:null,tint:!1,emissive:!1},U_={color:[.56,.42,.3],map:null,tint:!1,emissive:!1},I_={color:[.4704,.3528,.252],map:null,tint:!1,emissive:!1},N_={color:[.88,.86,.82],map:null,tint:!1,emissive:!1},F_={color:[.58,.52,.46],map:null,tint:!1,emissive:!1},O_={color:[.58,.52,.46],map:null,tint:!1,emissive:!1},k_={color:[.4872,.4368,.3864],map:null,tint:!1,emissive:!1},B_={color:[.82,.2,.18],map:null,tint:!1,emissive:!1},z_={color:[.28,.26,.24],map:null,tint:!1,emissive:!1},G_={color:[.15,.15,.17],map:null,tint:!1,emissive:!1},H_={color:[.22,.42,.8],map:null,tint:!1,emissive:!1},V_={color:[.4,.38,.34],map:null,tint:!1,emissive:!1},W_={color:[.94,.9,.82],map:null,tint:!1,emissive:!1},X_={color:[.82,.6,.36],map:null,tint:!1,emissive:!1},q_={color:[.82,.6,.36],map:null,tint:!1,emissive:!1},Y_={color:[.6888,.504,.3024],map:null,tint:!1,emissive:!1},j_={color:[.8,.18,.16],map:null,tint:!1,emissive:!1},$_={color:[.92,.7,.22],map:null,tint:!1,emissive:!1},K_={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},Z_={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},J_={color:[.9,.72,.26],map:null,tint:!1,emissive:!1},Q_={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},e0={color:[.66,.66,.71],map:null,tint:!1,emissive:!1},t0={color:[.66,.66,.71],map:null,tint:!1,emissive:!1},n0={color:[.5544,.5544,.5964],map:null,tint:!1,emissive:!1},i0={color:[.86,.8,.6],map:null,tint:!1,emissive:!1},s0={color:[.6,.5,.32],map:null,tint:!1,emissive:!1},a0={color:[.5,.4,.26],map:null,tint:!1,emissive:!1},r0={color:[.92,.86,.76],map:null,tint:!1,emissive:!1},o0={color:[.78,.62,.42],map:null,tint:!1,emissive:!1},l0={color:[.78,.62,.42],map:null,tint:!1,emissive:!1},c0={color:[.6552,.5208,.3528],map:null,tint:!1,emissive:!1},u0={color:[.17,.16,.17],map:null,tint:!1,emissive:!1},f0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},h0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},d0={color:[.7728,.7644,.7308],map:null,tint:!1,emissive:!1},p0={color:[.86,.66,.62],map:null,tint:!1,emissive:!1},m0={color:[.11,.1,.1],map:null,tint:!1,emissive:!1},_0={color:[.9,.86,.78],map:null,tint:!1,emissive:!1},g0={color:[.64,.46,.3],map:null,tint:!1,emissive:!1},v0={color:[.64,.46,.3],map:null,tint:!1,emissive:!1},x0={color:[.5376,.3864,.252],map:null,tint:!1,emissive:!1},M0={color:[.26,.23,.21],map:null,tint:!1,emissive:!1},S0={color:[.84,.82,.78],map:null,tint:!1,emissive:!1},y0={color:[.56,.52,.48],map:null,tint:!1,emissive:!1},E0={color:[.56,.52,.48],map:null,tint:!1,emissive:!1},b0={color:[.4704,.4368,.4032],map:null,tint:!1,emissive:!1},T0={color:[.86,.84,.8],map:null,tint:!1,emissive:!1},w0={color:[.8,.65,.45],map:null,tint:!1,emissive:!1},A0={color:[.8,.65,.45],map:null,tint:!1,emissive:!1},R0={color:[.672,.546,.378],map:null,tint:!1,emissive:!1},C0={color:[.92,.66,.2],map:null,tint:!1,emissive:!1},L0={color:[.82,.78,.7],map:null,tint:!1,emissive:!1},P0={color:[.6,.48,.36],map:null,tint:!1,emissive:!1},D0={color:[.22,.4,.3],map:null,tint:!1,emissive:!1},U0={color:[.92,.56,.2],map:null,tint:!1,emissive:!1},I0={color:[.55,.54,.56],map:null,tint:!1,emissive:!1},N0={color:[.55,.54,.56],map:null,tint:!1,emissive:!1},F0={color:[.462,.4536,.4704],map:null,tint:!1,emissive:!1},O0={color:[.32,.23,.17],map:null,tint:!1,emissive:!1},k0={color:[.72,.62,.48],map:null,tint:!1,emissive:!1},B0={color:[.54,.4,.28],map:null,tint:!1,emissive:!1},z0={color:[.54,.4,.28],map:null,tint:!1,emissive:!1},G0={color:[.4536,.336,.2352],map:null,tint:!1,emissive:!1},H0={color:[.26,.24,.22],map:null,tint:!1,emissive:!1},V0={color:[.42,.36,.32],map:null,tint:!1,emissive:!1},W0={color:[.36,.44,.56],map:null,tint:!1,emissive:!1},X0={color:[.36,.33,.3],map:null,tint:!1,emissive:!1},q0={color:[.94,.94,.96],map:null,tint:!1,emissive:!1},Y0={color:[.94,.94,.96],map:null,tint:!1,emissive:!1},j0={color:[.7896,.7896,.8064],map:null,tint:!1,emissive:!1},$0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},K0={color:[.88,.74,.54],map:null,tint:!1,emissive:!1},Z0={color:[.88,.74,.54],map:null,tint:!1,emissive:!1},J0={color:[.7392,.6216,.4536],map:null,tint:!1,emissive:!1},Q0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},eg={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},tg={color:[.82,.44,.2],map:null,tint:!1,emissive:!1},ng={color:[.82,.44,.2],map:null,tint:!1,emissive:!1},ig={color:[.24,.18,.15],map:null,tint:!1,emissive:!1},sg={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},ag={color:[.82,.63,.42],map:null,tint:!1,emissive:!1},rg={color:[.82,.63,.42],map:null,tint:!1,emissive:!1},og={color:[.6888,.5292,.3528],map:null,tint:!1,emissive:!1},lg={color:[.84,.8,.72],map:null,tint:!1,emissive:!1},cg={color:[.84,.8,.72],map:null,tint:!1,emissive:!1},ug={color:[.7056,.672,.6048],map:null,tint:!1,emissive:!1},fg={color:[.62,.6,.58],map:null,tint:!1,emissive:!1},hg={color:[.92,.56,.2],map:null,tint:!1,emissive:!1},dg={color:[.84,.83,.8],map:null,tint:!1,emissive:!1},pg={color:[.84,.83,.8],map:null,tint:!1,emissive:!1},mg={color:[.92,.56,.2],map:null,tint:!1,emissive:!1},_g={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},gg={color:[.74,.54,.36],map:null,tint:!1,emissive:!1},vg={color:[.74,.54,.36],map:null,tint:!1,emissive:!1},xg={color:[.6216,.4536,.3024],map:null,tint:!1,emissive:!1},Mg={color:[.62,.5,.38],map:null,tint:!1,emissive:!1},Sg={color:[.62,.5,.38],map:null,tint:!1,emissive:!1},yg={color:[.5208,.42,.3192],map:null,tint:!1,emissive:!1},Eg={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},bg={color:[.21,.18,.16],map:null,tint:!1,emissive:!1},Tg={color:[.85,.81,.69],map:null,tint:!1,emissive:!1},wg={color:[.2,.14,.11],map:null,tint:!1,emissive:!1},Ag={color:[.5,.33,.22],map:null,tint:!1,emissive:!1},Rg={color:[.5,.33,.22],map:null,tint:!1,emissive:!1},Cg={color:[.42,.2772,.1848],map:null,tint:!1,emissive:!1},Lg={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},Pg={color:[.56,.58,.63],map:null,tint:!1,emissive:!1},Dg={color:[.56,.58,.63],map:null,tint:!1,emissive:!1},Ug={color:[.88,.88,.88],map:null,tint:!1,emissive:!1},Ig={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},Ng={color:[.86,.8,.7],map:null,tint:!1,emissive:!1},Fg={color:[.68,.56,.42],map:null,tint:!1,emissive:!1},Og={color:[.68,.56,.42],map:null,tint:!1,emissive:!1},kg={color:[.5712,.4704,.3528],map:null,tint:!1,emissive:!1},Bg={color:[.3,.46,.24],map:null,tint:!1,emissive:!1},zg={color:[.7,.78,.46],map:null,tint:!1,emissive:!1},Gg={color:[.42,.6,.3],map:null,tint:!1,emissive:!1},Hg={color:[.42,.6,.3],map:null,tint:!1,emissive:!1},Vg={color:[.3528,.504,.252],map:null,tint:!1,emissive:!1},Wg={color:[.86,.73,.48],map:null,tint:!1,emissive:!1},Xg={color:[.86,.73,.48],map:null,tint:!1,emissive:!1},qg={color:[.7224,.6132,.4032],map:null,tint:!1,emissive:!1},Yg={color:[.92,.88,.8],map:null,tint:!1,emissive:!1},jg={color:[.72,.64,.52],map:null,tint:!1,emissive:!1},$g={color:[.72,.64,.52],map:null,tint:!1,emissive:!1},Kg={color:[.6048,.5376,.4368],map:null,tint:!1,emissive:!1},Zg={color:[.26,.3,.38],map:null,tint:!1,emissive:!1},Jg={color:[.182,.21,.266],map:null,tint:!1,emissive:!1},Qg={color:[.46,.36,.28],map:null,tint:!1,emissive:!1},ev={color:[.62,.52,.4],map:null,tint:!1,emissive:!1},tv={color:[.3864,.3024,.2352],map:null,tint:!1,emissive:!1},nv={color:[.72,.62,.42],map:null,tint:!1,emissive:!1},iv={color:[.56,.42,.28],map:null,tint:!1,emissive:!1},sv={color:[.392,.294,.196],map:null,tint:!1,emissive:!1},av={color:[.5,.36,.26],map:null,tint:!1,emissive:!1},rv={color:[.5,.36,.26],map:null,tint:!1,emissive:!1},ov={color:[.42,.3024,.2184],map:null,tint:!1,emissive:!1},lv={color:[.84,.68,.54],map:null,tint:!1,emissive:!1},cv={color:[.47,.56,.66],map:null,tint:!1,emissive:!1},uv={color:[.34,.4,.48],map:null,tint:!1,emissive:!1},fv={color:[.32,.37,.44],map:null,tint:!1,emissive:!1},hv={color:[.8,.62,.42],map:null,tint:!1,emissive:!1},dv={color:[.18,.17,.17],map:null,tint:!1,emissive:!1},pv={color:[.86,.7,.66],map:null,tint:!1,emissive:!1},mv={color:[.86,.7,.66],map:null,tint:!1,emissive:!1},_v={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},gv={color:[.17,.17,.2],map:null,tint:!1,emissive:!1},vv={color:[.17,.17,.2],map:null,tint:!1,emissive:!1},xv={color:[.1428,.1428,.168],map:null,tint:!1,emissive:!1},Mv={color:[.9,.68,.66],map:null,tint:!1,emissive:!1},Sv={color:[.9,.68,.66],map:null,tint:!1,emissive:!1},yv={color:[.756,.5712,.5544],map:null,tint:!1,emissive:!1},Ev={color:[.94,.6,.6],map:null,tint:!1,emissive:!1},bv={color:[.2,.19,.19],map:null,tint:!1,emissive:!1},Tv={color:[.52,.52,.52],map:null,tint:!1,emissive:!1},wv={color:[.34,.33,.33],map:null,tint:!1,emissive:!1},Av={color:[.4368,.4368,.4368],map:null,tint:!1,emissive:!1},Rv={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},Cv={color:[.5,.44,.4],map:null,tint:!1,emissive:!1},Lv={color:[.5,.44,.4],map:null,tint:!1,emissive:!1},Pv={color:[.42,.3696,.336],map:null,tint:!1,emissive:!1},Dv={color:[.84,.64,.62],map:null,tint:!1,emissive:!1},Uv={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},Iv={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},Nv={color:[.4368,.42,.4032],map:null,tint:!1,emissive:!1},Fv={color:[.9,.87,.8],map:null,tint:!1,emissive:!1},Ov={color:[.26,.23,.21],map:null,tint:!1,emissive:!1},kv={color:[.26,.23,.21],map:null,tint:!1,emissive:!1},Bv={color:[.95,.95,.96],map:null,tint:!1,emissive:!1},zv={color:[.95,.95,.96],map:null,tint:!1,emissive:!1},Gv={color:[.798,.798,.8064],map:null,tint:!1,emissive:!1},Hv={color:[.62,.56,.4],map:null,tint:!1,emissive:!1},Vv={color:[.434,.392,.28],map:null,tint:!1,emissive:!1},Wv={color:[.92,.86,.76],map:null,tint:!1,emissive:!1},Xv={color:[.68,.42,.26],map:null,tint:!1,emissive:!1},qv={color:[.68,.42,.26],map:null,tint:!1,emissive:!1},Yv={color:[.5712,.3528,.2184],map:null,tint:!1,emissive:!1},jv={color:[.78,.82,.89],map:null,tint:!1,emissive:!1},$v={color:[.72,.77,.85],map:null,tint:!1,emissive:!1},Kv={color:[.9,.92,.95],map:null,tint:!1,emissive:!1},Zv={color:[.84,.87,.92],map:null,tint:!1,emissive:!1},Jv={color:[.64,.69,.77],map:null,tint:!1,emissive:!1},Qv={color:[.62,.66,.74],map:null,tint:!1,emissive:!1},ex={color:[.44,.4,.24],map:null,tint:!1,emissive:!1},tx={color:[.54,.52,.34],map:null,tint:!1,emissive:!1},nx={color:[.54,.52,.34],map:null,tint:!1,emissive:!1},ix={color:[.4536,.4368,.2856],map:null,tint:!1,emissive:!1},sx={color:[.78,.2,.18],map:null,tint:!1,emissive:!1},ax={color:[.88,.76,.46],map:null,tint:!1,emissive:!1},rx={color:[.33,.25,.2],map:null,tint:!1,emissive:!1},ox={color:[.46,.56,.74],map:null,tint:!1,emissive:!1},lx={color:[.62,.5,.42],map:null,tint:!1,emissive:!1},cx={color:[.52,.38,.26],map:null,tint:!1,emissive:!1},ux={color:[.22,.15,.14],map:null,tint:!1,emissive:!1},fx={color:[.38,.25,.23],map:null,tint:!1,emissive:!1},hx={color:[.38,.25,.23],map:null,tint:!1,emissive:!1},dx={color:[.3192,.21,.1932],map:null,tint:!1,emissive:!1},px={color:[.22,.17,.15],map:null,tint:!1,emissive:!1},mx={color:[.36,.28,.24],map:null,tint:!1,emissive:!1},_x={color:[.36,.28,.24],map:null,tint:!1,emissive:!1},gx={color:[.3024,.2352,.2016],map:null,tint:!1,emissive:!1},vx={color:[.92,.92,.94],map:null,tint:!1,emissive:!1},xx={color:[.92,.92,.94],map:null,tint:!1,emissive:!1},Mx={color:[.7728,.7728,.7896],map:null,tint:!1,emissive:!1},Sx={color:[.8,.78,.74],map:null,tint:!1,emissive:!1},yx={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},Ex={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},bx={color:[.4368,.42,.4032],map:null,tint:!1,emissive:!1},Tx={color:[.27,.22,.2],map:null,tint:!1,emissive:!1},wx={color:[.27,.22,.2],map:null,tint:!1,emissive:!1},Ax={color:[.2268,.1848,.168],map:null,tint:!1,emissive:!1},Rx={color:[.66,.5,.32],map:null,tint:!1,emissive:!1},Cx={color:[.74,.58,.36],map:null,tint:!1,emissive:!1},Lx={color:[.5544,.42,.2688],map:null,tint:!1,emissive:!1},Px={color:[.74,.76,.74],map:"Metal",tint:!1,emissive:!1},Dx={color:[.46,.48,.46],map:"Metal",tint:!1,emissive:!1},Ux={color:[.3,.28,.27],map:null,tint:!1,emissive:!1},Ix={color:[.62,.7,.36],map:"Bark",tint:!1,emissive:!1},Nx={color:[.44,.31,.21],map:"Bark",tint:!1,emissive:!1},Fx={color:[.92,.91,.86],map:"Bark",tint:!1,emissive:!1},Ox={color:[.3,.22,.17],map:"Bark",tint:!1,emissive:!1},kx={color:[.21,.2,.19],map:null,tint:!1,emissive:!1},Bx={color:[.84,.82,.76],map:"Bark",tint:!1,emissive:!1},zx={color:[.38,.42,.46],map:"Metal",tint:!1,emissive:!1},Gx={color:[.33,.43,.82],map:null,tint:!1,emissive:!1},Hx={color:[.45,.58,.31],map:null,tint:!1,emissive:!1},Vx={color:[.36,.48,.27],map:null,tint:!1,emissive:!1},Wx={color:[.52,.64,.37],map:null,tint:!1,emissive:!1},Xx={color:[.44,.52,.64],map:"Fabric",tint:!1,emissive:!1},qx={color:[.52,.12,.1],map:null,tint:!1,emissive:!1},Yx={color:[.22,.36,.58],map:null,tint:!1,emissive:!1},jx={color:[.62,.22,.18],map:null,tint:!1,emissive:!1},$x={color:[.32,.22,.12],map:null,tint:!1,emissive:!1},Kx={color:[.78,.7,.58],map:"Wood",tint:!1,emissive:!1},Zx={color:[.42,.37,.22],map:"Leaf",tint:!1,emissive:!1},Jx={color:[.8,.64,.3],map:"Metal",tint:!1,emissive:!1},Qx={color:[.38,.54,.32],map:"Leaf",tint:!1,emissive:!1},eM={color:[.56,.9,.74],map:null,tint:!1,emissive:!1},tM={color:[.72,.21,.19],map:null,tint:!1,emissive:!1},nM={color:[.45,.9,1],map:"Glow",tint:!1,emissive:!0},iM={color:[.74,.3,.16],map:"Metal",tint:!1,emissive:!1},sM={color:[.36,.22,.14],map:null,tint:!1,emissive:!1},aM={color:[.72,.56,.34],map:"Fabric",tint:!1,emissive:!1},rM={color:[.36,.26,.17],map:null,tint:!1,emissive:!1},oM={color:[.62,.61,.58],map:"Stone",tint:!1,emissive:!1},lM={color:[.96,.84,.32],map:null,tint:!1,emissive:!1},cM={color:[.97,.97,.95],map:null,tint:!1,emissive:!1},uM={color:[.36,.53,.25],map:"Leaf",tint:!1,emissive:!1},fM={color:[.5,.62,.38],map:"Leaf",tint:!1,emissive:!1},hM={color:[.62,.34,.3],map:"Fabric",tint:!1,emissive:!1},dM={color:[.94,.9,.82],map:null,tint:!1,emissive:!1},pM={color:[.96,.42,.18],map:"Glow",tint:!1,emissive:!0},mM={color:[.92,.82,.74],map:null,tint:!1,emissive:!1},_M={color:[.2,.44,.28],map:"Fabric",tint:!1,emissive:!1},gM={color:[1,.9,.48],map:"Flame",tint:!1,emissive:!0},vM={color:[1,.95,.72],map:"Glow",tint:!1,emissive:!0},xM={color:[.76,.76,.72],map:"Metal",tint:!1,emissive:!1},MM={color:[.44,.62,.3],map:null,tint:!1,emissive:!1},SM={color:[.66,.7,.52],map:null,tint:!1,emissive:!1},yM={color:[.66,.44,.26],map:null,tint:!1,emissive:!1},EM={color:[.92,.78,.36],map:null,tint:!1,emissive:!1},bM={color:[.86,.2,.2],map:null,tint:!1,emissive:!1},TM={color:[.8,.72,.62],map:null,tint:!1,emissive:!1},wM={color:[.84,.8,.62],map:"Rock",tint:!1,emissive:!1},AM={color:[.44,.42,.4],map:"Rock",tint:!1,emissive:!1},RM={color:[.52,.7,.78],map:null,tint:!1,emissive:!1},CM={color:[.16,.22,.27],map:null,tint:!1,emissive:!1},LM={color:[1,1,1],map:"Glow",tint:!1,emissive:!0},PM={color:[1,.72,.3],map:"Glow",tint:!1,emissive:!0},DM={color:[.46,.94,.52],map:"Glow",tint:!1,emissive:!0},UM={color:[.98,.36,.3],map:"Glow",tint:!1,emissive:!0},IM={color:[.48,.86,.96],map:"Glow",tint:!1,emissive:!0},NM={color:[.92,.74,.3],map:"Metal",tint:!1,emissive:!1},FM={color:[.3,.22,.16],map:"Fabric",tint:!1,emissive:!1},OM={color:[.2,.2,.22],map:"Metal",tint:!1,emissive:!1},kM={color:[.66,.68,.7],map:"Metal",tint:!1,emissive:!1},BM={color:[.36,.37,.4],map:"Metal",tint:!1,emissive:!1},zM={color:[.36,.4,.28],map:"Metal",tint:!1,emissive:!1},GM={color:[.84,.86,.88],map:"Metal",tint:!1,emissive:!1},HM={color:[.5,.34,.21],map:"Wood",tint:!1,emissive:!1},VM={color:[.8,.72,.38],map:"Fabric",tint:!1,emissive:!1},WM={color:[.66,.68,.32],map:null,tint:!1,emissive:!1},XM={color:[.56,.6,.28],map:null,tint:!1,emissive:!1},qM={color:[.38,.54,.28],map:"Leaf",tint:!1,emissive:!1},YM={color:[.7,.73,.76],map:"Metal",tint:!1,emissive:!1},jM={color:[.4,.43,.47],map:"Metal",tint:!1,emissive:!1},$M={color:[.82,.9,.96],map:null,tint:!1,emissive:!1},KM={color:[.4,.66,.46],map:"Stone",tint:!1,emissive:!1},ZM={color:[.96,.74,.22],map:"Glow",tint:!1,emissive:!1},JM={color:[.88,.86,.78],map:null,tint:!1,emissive:!1},QM={color:[.94,.88,.92],map:"Leaf",tint:!1,emissive:!1},eS={color:[.6956,.6688,.736],map:"Leaf",tint:!1,emissive:!1},tS={color:[1,1,.9752],map:"Leaf",tint:!1,emissive:!1},nS={color:[.48,.64,.31],map:"Leaf",tint:!1,emissive:!1},iS={color:[.3552,.4864,.248],map:"Leaf",tint:!1,emissive:!1},sS={color:[.576,.7424,.3286],map:"Leaf",tint:!1,emissive:!1},aS={color:[.52,.64,.3],map:"Leaf",tint:!1,emissive:!1},rS={color:[.3848,.4864,.24],map:"Leaf",tint:!1,emissive:!1},oS={color:[.624,.7424,.318],map:"Leaf",tint:!1,emissive:!1},lS={color:[.25,.43,.27],map:"Leaf",tint:!1,emissive:!1},cS={color:[.185,.3268,.216],map:"Leaf",tint:!1,emissive:!1},uS={color:[.3,.4988,.2862],map:"Leaf",tint:!1,emissive:!1},fS={color:[.29,.45,.27],map:"Leaf",tint:!1,emissive:!1},hS={color:[.2146,.342,.216],map:"Leaf",tint:!1,emissive:!1},dS={color:[.348,.522,.2862],map:"Leaf",tint:!1,emissive:!1},pS={color:[.82,.88,.62],map:"Leaf",tint:!1,emissive:!1},mS={color:[.6068,.6688,.496],map:"Leaf",tint:!1,emissive:!1},_S={color:[.984,1,.6572],map:"Leaf",tint:!1,emissive:!1},gS={color:[.34,.57,.27],map:"Leaf",tint:!1,emissive:!1},vS={color:[.2516,.4332,.216],map:"Leaf",tint:!1,emissive:!1},xS={color:[.408,.6612,.2862],map:"Leaf",tint:!1,emissive:!1},MS={color:[.8,.43,.19],map:"Leaf",tint:!1,emissive:!1},SS={color:[.592,.3268,.152],map:"Leaf",tint:!1,emissive:!1},yS={color:[.96,.4988,.2014],map:"Leaf",tint:!1,emissive:!1},ES={color:[.38,.54,.25],map:"Leaf",tint:!1,emissive:!1},bS={color:[.2812,.4104,.2],map:"Leaf",tint:!1,emissive:!1},TS={color:[.456,.6264,.265],map:"Leaf",tint:!1,emissive:!1},wS={color:[.23,.41,.25],map:"Leaf",tint:!1,emissive:!1},AS={color:[.1702,.3116,.2],map:"Leaf",tint:!1,emissive:!1},RS={color:[.276,.4756,.265],map:"Leaf",tint:!1,emissive:!1},CS={color:[.44,.6,.27],map:"Leaf",tint:!1,emissive:!1},LS={color:[.3256,.456,.216],map:"Leaf",tint:!1,emissive:!1},PS={color:[.528,.696,.2862],map:"Leaf",tint:!1,emissive:!1},DS={color:[.31,.51,.23],map:"Leaf",tint:!1,emissive:!1},US={color:[.2294,.3876,.184],map:"Leaf",tint:!1,emissive:!1},IS={color:[.372,.5916,.2438],map:"Leaf",tint:!1,emissive:!1},NS={color:[.42,.57,.31],map:"Leaf",tint:!1,emissive:!1},FS={color:[.3108,.4332,.248],map:"Leaf",tint:!1,emissive:!1},OS={color:[.504,.6612,.3286],map:"Leaf",tint:!1,emissive:!1},kS={color:[.9,.88,.82],map:"Fabric",tint:!1,emissive:!1},BS={color:[.5,.34,.21],map:"Wood",tint:!1,emissive:!1},zS={color:[.2,.16,.14],map:"Wood",tint:!1,emissive:!1},GS={color:[.7,.26,.24],map:null,tint:!1,emissive:!1},HS={color:[.92,.92,.9],map:null,tint:!1,emissive:!1},VS={color:[.6,.62,.65],map:"Metal",tint:!1,emissive:!1},WS={color:[.32,.33,.36],map:"Metal",tint:!1,emissive:!1},XS={color:[.96,.96,.94],map:null,tint:!1,emissive:!1},qS={color:[.29,.43,.23],map:null,tint:!1,emissive:!1},YS={color:[.3,.48,.72],map:"Metal",tint:!1,emissive:!1},jS={color:[.3,.4,.52],map:"Metal",tint:!1,emissive:!1},$S={color:[.78,.74,.62],map:"Metal",tint:!1,emissive:!1},KS={color:[.4,.42,.3],map:"Metal",tint:!1,emissive:!1},ZS={color:[.56,.24,.2],map:"Metal",tint:!1,emissive:!1},JS={color:[.92,.9,.82],map:null,tint:!1,emissive:!1},QS={color:[.96,.57,.21],map:null,tint:!1,emissive:!1},ey={color:[.88,.52,.74],map:null,tint:!1,emissive:!1},ty={color:[.86,.23,.25],map:null,tint:!1,emissive:!1},ny={color:[.96,.96,.91],map:null,tint:!1,emissive:!1},iy={color:[.97,.82,.24],map:null,tint:!1,emissive:!1},sy={color:[.92,.88,.8],map:null,tint:!1,emissive:!1},ay={color:[.98,.97,.94],map:"Fabric",tint:!1,emissive:!1},ry={color:[.1,.08,.07],map:null,tint:!1,emissive:!1},oy={color:[.7,.8,.84],map:"Metal",tint:!1,emissive:!1},ly={color:[.56,.34,.16],map:null,tint:!1,emissive:!1},cy={color:[.9,.86,.66],map:null,tint:!1,emissive:!1},uy={color:[.72,.56,.36],map:null,tint:!1,emissive:!1},fy={color:[.82,.18,.16],map:null,tint:!1,emissive:!1},hy={color:[.94,.92,.84],map:null,tint:!1,emissive:!1},dy={color:[.54,.7,.33],map:null,tint:!1,emissive:!1},py={color:[.13,.13,.14],map:null,tint:!1,emissive:!1},my={color:[.5,.32,.22],map:"Metal",tint:!1,emissive:!1},_y={color:[.3,.21,.16],map:"Metal",tint:!1,emissive:!1},gy={color:[.64,.44,.3],map:"Metal",tint:!1,emissive:!1},vy={color:[.74,.64,.46],map:"Fabric",tint:!1,emissive:!1},xy={color:[.56,.47,.33],map:"Fabric",tint:!1,emissive:!1},My={color:[.4,.44,.3],map:"Metal",tint:!1,emissive:!1},Sy={color:[.42,.53,.25],map:"Leaf",tint:!1,emissive:!1},yy={color:[.31,.44,.22],map:"Leaf",tint:!1,emissive:!1},Ey={color:[.82,.84,.86],map:"Metal",tint:!1,emissive:!1},by={color:[.4,.38,.36],map:"Rock",tint:!1,emissive:!1},Ty={color:[.52,.47,.42],map:"Metal",tint:!1,emissive:!1},wy={color:[1,1,1],map:"Soil",tint:!1,emissive:!1},Ay={color:[1,1,1],map:"Solar",tint:!1,emissive:!1},Ry={color:[.7,.72,.75],map:"Metal",tint:!1,emissive:!1},Cy={color:[.58,.56,.52],map:"Metal",tint:!1,emissive:!1},Ly={color:[.36,.5,.24],map:null,tint:!1,emissive:!1},Py={color:[.54,.54,.55],map:"Stone",tint:!1,emissive:!1},Dy={color:[.34,.26,.18],map:"Fabric",tint:!1,emissive:!1},Uy={color:[.86,.82,.72],map:"Fabric",tint:!1,emissive:!1},Iy={color:[1,1,1],map:"{stuff}",tint:!0,emissive:!1},Ny={color:[.95,.92,.84],map:"Fabric",tint:!0,emissive:!1},Fy={color:[.7,.67,.6],map:"Fabric",tint:!0,emissive:!1},Oy={color:[1,1,1],map:"Stone",tint:!0,emissive:!1},ky={color:[.8,.8,.8],map:"Stone",tint:!0,emissive:!1},By={color:[.8,.8,.8],map:"{stuff}",tint:!0,emissive:!1},zy={color:[.62,.62,.62],map:"{stuff}",tint:!0,emissive:!1},Gy={color:[.92,.92,.92],map:"Fabric",tint:!0,emissive:!1},Hy={color:[.72,.72,.72],map:"Fabric",tint:!0,emissive:!1},Vy={color:[1,1,1],map:null,tint:!0,emissive:!1},Wy={color:[.78,.78,.78],map:null,tint:!0,emissive:!1},Xy={color:[1,1,1],map:null,tint:!0,emissive:!1},qy={color:[.8,.8,.8],map:null,tint:!0,emissive:!1},Yy={color:[.6,.6,.6],map:null,tint:!0,emissive:!1},jy={color:[1.12,1.12,1.12],map:null,tint:!0,emissive:!1},$y={color:[1,1,1],map:"Rock",tint:!0,emissive:!1},Ky={color:[1,1,1],map:"Fabric",tint:!0,emissive:!1},Zy={color:[.92,.8,.24],map:"Metal",tint:!1,emissive:!1},Jy={color:[.44,.31,.21],map:"Bark",tint:!1,emissive:!1},Qy={color:[.92,.91,.86],map:"Bark",tint:!1,emissive:!1},eE={color:[.84,.82,.76],map:"Bark",tint:!1,emissive:!1},tE={color:[.36,.44,.32],map:"Metal",tint:!1,emissive:!1},nE={color:[.14,.19,.24],map:null,tint:!1,emissive:!1},iE={color:[.3,.62,.7],map:null,tint:!1,emissive:!1},sE={color:[.86,.3,.2],map:"Metal",tint:!1,emissive:!1},aE={color:[.32,.52,.62],map:null,tint:!1,emissive:!1},rE={color:[.2,.34,.4],map:null,tint:!1,emissive:!1},oE={color:[.78,.62,.4],map:"Wood",tint:!1,emissive:!1},lE={agave:c_,an_alpaca_body:u_,an_alpaca_head:f_,an_alpaca_leg:h_,an_bear_grizzly_body:d_,an_bear_grizzly_head:p_,an_bear_grizzly_leg:m_,an_bear_grizzly_muzzle:__,an_bear_polar_body:g_,an_bear_polar_head:v_,an_bear_polar_leg:x_,an_bison_acc:M_,an_bison_body:S_,an_bison_head:y_,an_bison_leg:E_,an_boomalope_acc:b_,an_boomalope_body:T_,an_boomalope_head:w_,an_boomalope_leg:A_,an_boomrat_acc:R_,an_boomrat_body:C_,an_boomrat_head:L_,an_boomrat_leg:P_,an_capybara_body:D_,an_capybara_head:U_,an_capybara_leg:I_,an_caribou_belly:N_,an_caribou_body:F_,an_caribou_head:O_,an_caribou_leg:k_,an_cassowary_acc:B_,an_cassowary_beak:z_,an_cassowary_body:G_,an_cassowary_head:H_,an_cassowary_leg:V_,an_cat_belly:W_,an_cat_body:X_,an_cat_head:q_,an_cat_leg:Y_,an_chicken_acc:j_,an_chicken_beak:$_,an_chicken_body:K_,an_chicken_head:Z_,an_chicken_leg:J_,an_chinchilla_belly:Q_,an_chinchilla_body:e0,an_chinchilla_head:t0,an_chinchilla_leg:n0,an_cobra_belly:i0,an_cobra_body:s0,an_cobra_hood:a0,an_cougar_belly:r0,an_cougar_body:o0,an_cougar_head:l0,an_cougar_leg:c0,an_cow_acc:u0,an_cow_body:f0,an_cow_head:h0,an_cow_leg:d0,an_cow_muzzle:p0,an_dark:m0,an_deer_belly:_0,an_deer_body:g0,an_deer_head:v0,an_deer_leg:x0,an_donkey_acc:M0,an_donkey_belly:S0,an_donkey_body:y0,an_donkey_head:E0,an_donkey_leg:b0,an_donkey_muzzle:T0,an_dromedary_body:w0,an_dromedary_head:A0,an_dromedary_leg:R0,an_duck_beak:C0,an_duck_belly:L0,an_duck_body:P0,an_duck_head:D0,an_duck_leg:U0,an_elephant_body:I0,an_elephant_head:N0,an_elephant_leg:F0,an_elk_acc:O0,an_elk_belly:k0,an_elk_body:B0,an_elk_head:z0,an_elk_leg:G0,an_emu_beak:H0,an_emu_body:V0,an_emu_head:W0,an_emu_leg:X0,an_fox_arctic_body:q0,an_fox_arctic_head:Y0,an_fox_arctic_leg:j0,an_fox_fennec_belly:$0,an_fox_fennec_body:K0,an_fox_fennec_head:Z0,an_fox_fennec_leg:J0,an_fox_red_acc:Q0,an_fox_red_belly:eg,an_fox_red_body:tg,an_fox_red_head:ng,an_fox_red_leg:ig,an_gazelle_belly:sg,an_gazelle_body:ag,an_gazelle_head:rg,an_gazelle_leg:og,an_goat_body:lg,an_goat_head:cg,an_goat_leg:ug,an_goose_acc:fg,an_goose_beak:hg,an_goose_body:dg,an_goose_head:pg,an_goose_leg:mg,an_guineapig_belly:_g,an_guineapig_body:gg,an_guineapig_head:vg,an_guineapig_leg:xg,an_hare_body:Mg,an_hare_head:Sg,an_hare_leg:yg,an_hare_tail:Eg,an_hoof:bg,an_horn:Tg,an_horse_acc:wg,an_horse_body:Ag,an_horse_head:Rg,an_horse_leg:Cg,an_husky_belly:Lg,an_husky_body:Pg,an_husky_head:Dg,an_husky_leg:Ug,an_husky_muzzle:Ig,an_ibex_belly:Ng,an_ibex_body:Fg,an_ibex_head:Og,an_ibex_leg:kg,an_iguana_acc:Bg,an_iguana_belly:zg,an_iguana_body:Gg,an_iguana_head:Hg,an_iguana_leg:Vg,an_labrador_body:Wg,an_labrador_head:Xg,an_labrador_leg:qg,an_lynx_belly:Yg,an_lynx_body:jg,an_lynx_head:$g,an_lynx_leg:Kg,an_megascarab_body:Zg,an_megascarab_leg:Jg,an_megasloth_body:Qg,an_megasloth_head:ev,an_megasloth_leg:tv,an_megaspider_acc:nv,an_megaspider_body:iv,an_megaspider_leg:sv,an_monkey_body:av,an_monkey_head:rv,an_monkey_leg:ov,an_monkey_muzzle:lv,an_muffalo_body:cv,an_muffalo_head:uv,an_muffalo_leg:fv,an_ostrich_beak:hv,an_ostrich_body:dv,an_ostrich_head:pv,an_ostrich_leg:mv,an_ostrich_tail:_v,an_panther_body:gv,an_panther_head:vv,an_panther_leg:xv,an_pig_body:Mv,an_pig_head:Sv,an_pig_leg:yv,an_pig_muzzle:Ev,an_raccoon_acc:bv,an_raccoon_body:Tv,an_raccoon_head:wv,an_raccoon_leg:Av,an_raccoon_muzzle:Rv,an_rat_body:Cv,an_rat_head:Lv,an_rat_leg:Pv,an_rat_tail:Dv,an_rhinoceros_body:Uv,an_rhinoceros_head:Iv,an_rhinoceros_leg:Nv,an_sheep_body:Fv,an_sheep_head:Ov,an_sheep_leg:kv,an_snowhare_body:Bv,an_snowhare_head:zv,an_snowhare_leg:Gv,an_spelopede_body:Hv,an_spelopede_leg:Vv,an_squirrel_belly:Wv,an_squirrel_body:Xv,an_squirrel_head:qv,an_squirrel_leg:Yv,an_thrumbo_acc:jv,an_thrumbo_belly:$v,an_thrumbo_body:Kv,an_thrumbo_head:Zv,an_thrumbo_leg:Jv,an_thrumbo_muzzle:Qv,an_tortoise_acc:ex,an_tortoise_body:tx,an_tortoise_head:nx,an_tortoise_leg:ix,an_turkey_acc:sx,an_turkey_beak:ax,an_turkey_body:rx,an_turkey_head:ox,an_turkey_leg:lx,an_turkey_tail:cx,an_warg_acc:ux,an_warg_body:fx,an_warg_head:hx,an_warg_leg:dx,an_wildboar_acc:px,an_wildboar_body:mx,an_wildboar_head:_x,an_wildboar_leg:gx,an_wolf_arctic_body:vx,an_wolf_arctic_head:xx,an_wolf_arctic_leg:Mx,an_wolf_timber_belly:Sx,an_wolf_timber_body:yx,an_wolf_timber_head:Ex,an_wolf_timber_leg:bx,an_yak_body:Tx,an_yak_head:wx,an_yak_leg:Ax,an_yorkie_body:Rx,an_yorkie_head:Cx,an_yorkie_leg:Lx,armor:Px,armor_dark:Dx,ash:Ux,bamboo:Ix,bark:Nx,bark_birch:Fx,bark_dark:Ox,bark_mark:kx,bark_pale:Bx,battery:zx,berry:Gx,blade_a:Hx,blade_b:Vx,blade_c:Wx,blanket:Xx,blood:qx,book_blue:Yx,book_red:jx,bottle:$x,bowl:Kx,bramble:Zx,brass:Jx,cactus:Qx,cap_glow:eM,cap_red:tM,charge:nM,chemfuel:iM,chocolate:sM,cloth_roll:aM,coconut:rM,concrete:oM,corn:lM,cotton:cM,crop_leaf:uM,crop_pale:fM,cushion:hM,egg:dM,ember:pM,fat:mM,felt:_M,flame:gM,flame_core:vM,foil:xM,food_green:MM,food_paste:SM,food_stew:yM,food_yellow:EM,fruit_red:bM,fungus:TM,geyser_crust:wM,geyser_rock:AM,glass:RM,glass_dark:CM,glow:LM,glow_amber:PM,glow_green:DM,glow_red:UM,glow_screen:IM,gold:NM,grip:FM,gun_dark:OM,gun_light:kM,gun_metal:BM,gun_olive:zM,gun_white:GM,gun_wood:HM,hay:VM,hay_a:WM,hay_b:XM,herb_green:qM,hull:YM,hull_dark:jM,ice:$M,jade:KM,jelly:ZM,label:JM,leaf_anima:QM,leaf_anima_dk:eS,leaf_anima_lt:tS,leaf_bamboo:nS,leaf_bamboo_dk:iS,leaf_bamboo_lt:sS,leaf_birch:aS,leaf_birch_dk:rS,leaf_birch_lt:oS,leaf_cypress:lS,leaf_cypress_dk:cS,leaf_cypress_lt:uS,leaf_drago:fS,leaf_drago_dk:hS,leaf_drago_lt:dS,leaf_gauranlen:pS,leaf_gauranlen_dk:mS,leaf_gauranlen_lt:_S,leaf_jungle:gS,leaf_jungle_dk:vS,leaf_jungle_lt:xS,leaf_maple:MS,leaf_maple_dk:SS,leaf_maple_lt:yS,leaf_oak:ES,leaf_oak_dk:bS,leaf_oak_lt:TS,leaf_pine:wS,leaf_pine_dk:AS,leaf_pine_lt:RS,leaf_poplar:CS,leaf_poplar_dk:LS,leaf_poplar_lt:PS,leaf_teak:DS,leaf_teak_dk:US,leaf_teak_lt:IS,leaf_willow:NS,leaf_willow_dk:FS,leaf_willow_lt:OS,linen:kS,log:BS,log_burnt:zS,meat:GS,medicine:HS,metal:VS,metal_dark:WS,milk:XS,moss:qS,neutro:YS,paint_blue:jS,paint_cream:$S,paint_olive:KS,paint_red:ZS,paper:JS,petal_orange:QS,petal_pink:ey,petal_red:ty,petal_white:ny,petal_yellow:iy,pill:sy,pillow:ay,pit:ry,plasteel:oy,pod:ly,pod_pale:cy,potato:uy,red_cross:fy,rice:hy,rice_a:dy,rubber:py,rust:my,rust_dark:_y,rust_light:gy,sack:vy,sack_dark:xy,shell_olive:My,shrub:Sy,shrub_dark:yy,silver:Ey,slag:by,slag_metal:Ty,soil:wy,solar:Ay,solar_frame:Ry,steam_pipe:Cy,stem:Ly,stone:Py,strap:Dy,string:Uy,stuff:Iy,stuff_bag:Ny,stuff_bag_dark:Fy,stuff_block:Oy,stuff_block_dark:ky,stuff_dark:By,stuff_deep:zy,stuff_fabric:Gy,stuff_fabric_dark:Hy,stuff_herb:Vy,stuff_herb_dark:Wy,stuff_plain:Xy,stuff_plain_dark:qy,stuff_plain_deep:Yy,stuff_plain_light:jy,stuff_rock:$y,stuff_wool:Ky,terminal:Zy,twig_bark:Jy,twig_bark_birch:Qy,twig_bark_pale:eE,uranium:tE,visor:nE,visor_lit:iE,warning:sE,water:aE,water_dark:rE,wood_end:oE},cE=4,Sl=new Set;function Si(i){Sl.has(i)||(Sl.add(i),console.warn(i))}async function Lr(i){let e="network error";for(let t=0;t<cE;t++){t>0&&await hE(200*2**(t-1));try{const n=await fetch(i);if(n.ok)return n;if(e=String(n.status),n.status<500)break}catch(n){e=n instanceof Error&&n.message?n.message:"network error"}}throw new Error(e)}async function uE(i,e,t){if(i.length===0)return;let n=0;const s=Math.min(Math.max(1,e),i.length);await Promise.all(Array.from({length:s},async()=>{for(;n<i.length;){const a=n;n+=1,await t(i[a],a)}}))}async function fE(i){if(i.length>=2&&i[0]===31&&i[1]===139){const e=new Uint8Array(i.byteLength);e.set(i);const t=new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"));return new Response(t).text()}return new TextDecoder().decode(i)}function hE(i){return new Promise(e=>{window.setTimeout(e,i)})}const yl=lE,dE={Wood:new Ue(.86,.62,.38),Stone:new Ue(.76,.74,.7),Metal:new Ue(.74,.78,.84),Fabric:new Ue(.9,.88,.84)},pE=Ki,ru=new Set;function mE(i){const t=i.indexOf("textures/");t>=0&&ru.add(i.slice(t))}function _E(){return[...ru]}class gE{constructor(){Ye(this,"textures",new Map);Ye(this,"cache",new Map);Ye(this,"flicker",[]);const e=new Set;for(const t of Object.values(yl))t.map&&t.map!=="{stuff}"&&e.add(t.map);for(const t of["Wood","Stone","Metal","Fabric"])e.add(t);for(const t of e)this.textures.set(t,this.loadSwatch(t))}get(e,t,n){const s=yl[e];if(!s)return console.warn(`IsoRim material "${e}" is not in the catalog`),this.fallback(e);const a=s.tint?n?n.getHexString():t:"",o=s.map==="{stuff}"?t:s.map,r=`${e}|${o??""}|${a}`,l=this.cache.get(r);if(l)return l;const c=new Ue(s.color[0],s.color[1],s.color[2]);s.tint&&c.multiply(n??dE[t]);const u=new Jt({color:c,map:o?this.textures.get(o)??null:null,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});return s.emissive&&(u.emissive=c.clone(),u.emissiveIntensity=.7,this.flicker.push(u)),this.cache.set(r,u),u}loadSwatch(e){const t=`${pE}/textures/swatches/${e}.png`;return ln(t,!0)}fallback(e){const t=`missing|${e}`,n=this.cache.get(t);if(n)return n;const s=new Jt({color:16711850});return this.cache.set(t,s),s}}const vE=6,El=new Map,Hi=[];let Bi=0,Pr=[];function ln(i,e=!1){mE(i);const t=El.get(i);if(t)return t;const n=SE(e);return El.set(i,n),Dr(1,"Loading textures…"),ME(async()=>{try{const s=await Lr(i),a=await createImageBitmap(await s.blob());n.image=a,n.needsUpdate=!0}catch(s){const a=s instanceof Error&&s.message?s.message:"failed";Si(`Could not load ${i} (${a})`)}finally{Ur("Loading textures…")}}),n}function xE(){return Bi===0&&Hi.length===0?Promise.resolve():new Promise(i=>{Pr.push(i)})}function ME(i){Hi.push(i),ou()}function ou(){for(;Bi<vE&&Hi.length>0;){const i=Hi.shift();if(!i)break;Bi+=1,i().finally(()=>{if(Bi-=1,Hi.length>0)ou();else if(Bi===0){const e=Pr;Pr=[];for(const t of e)t()}})}}function SE(i){const e=document.createElement("canvas");e.width=2,e.height=2;const t=e.getContext("2d");t&&(t.fillStyle="#b7aa96",t.fillRect(0,0,2,2));const n=new Jc(e);return n.colorSpace=lt,n.anisotropy=8,i&&(n.wrapS=Ei,n.wrapT=Ei),n}async function yE(i){const e=new Set(i),t=new Map,n=`${Ki}/packs/index.json`;let s=[];try{const o=await Lr(n);s=JSON.parse(await o.text()).packs}catch(o){return Si(`Could not load ${n} (${za(o)})`),bl(e,t),t}Dr(s.length,`Loading models… 0 of ${s.length}`);let a=0;return await uE(s,2,async o=>{const r=`${Ki}/packs/${o}`;try{const l=await Lr(r),c=new Uint8Array(await l.arrayBuffer()),u=JSON.parse(await fE(c));for(const[d,h]of Object.entries(u))if(!(!e.has(d)||t.has(d)))try{t.set(d,s_(h))}catch(m){Si(`Could not parse ${d}.obj (${za(m)})`)}}catch(l){Si(`Could not load ${r} (${za(l)})`)}finally{a+=1,Ur(`Loading models… ${a} of ${s.length}`)}}),bl(e,t),t}function bl(i,e){const t=[...i].filter(n=>!e.has(n)).sort();t.length===1?Si(`Missing model ${t[0]}.obj`):t.length>1&&Si(`Missing ${t.length} models, including ${t[0]}.obj`)}function za(i){return i instanceof Error&&i.message?i.message:"failed"}function yi(i,e,t,n,s){const a=n[1][0]-n[0][0],o=n[1][1]-n[0][1],r=n[1][2]-n[0][2],l=n[2][0]-n[0][0],c=n[2][1]-n[0][1],u=n[2][2]-n[0][2];let d=o*u-r*c,h=r*l-a*u,m=a*c-o*l;const g=Math.hypot(d,h,m)||1;d/=g,h/=g,m/=g;const _=[0,1,2,0,2,3];for(const p of _){const f=n[p],E=s[p];i.push(f[0],f[1],f[2]),e.push(d,h,m),t.push(E[0],E[1])}}function Tn(i,e,t,n){const s=new i.BufferGeometry;return s.setAttribute("position",new i.Float32BufferAttribute(e,3)),s.setAttribute("normal",new i.Float32BufferAttribute(t,3)),s.setAttribute("uv",new i.Float32BufferAttribute(n,2)),s}const Ga=`${Ki}/textures`,pi=1.2,EE=1.25,mi={planks:{side:"walls/PlanksSide.png",top:"walls/PlanksTop.png",color:12880466,height:pi},bricks:{side:"walls/BricksSide.png",top:"walls/BricksTop.png",color:11889224,height:pi},stone:{side:"walls/SmoothStoneSide.png",top:"walls/SmoothStoneTop.png",color:13157046,height:pi},metal:{side:"walls/MetalSide.png",top:"walls/MetalTop.png",color:9345188,height:pi},rock:{side:"walls/RockSide.png",top:"walls/RockTop.png",color:10129798,height:pi},rockOre:{side:"walls/RockOreSide.png",top:"walls/RockOreTop.png",color:9072728,height:pi},sandbags:{side:"walls/SandbagsSide.png",top:"walls/SandbagsTop.png",color:12891274,height:.55}},bE={terracotta:{file:"roofs/Terracotta.png",color:12870204},thatch:{file:"roofs/Thatch.png",color:12886362},tin:{file:"roofs/Tin.png",color:9345188},slate:{file:"roofs/Slate.png",color:6186864}},TE=new Set(["woodFloor","stoneTile","carpet","concrete","flagstone","metalFloor","sterile","roughHewn"]);function wE(i){const e=new Nt;e.name="structures";const t=new Set(i.walls.map(r=>`${r.x},${r.z}`)),n=[],s={},a={};for(const r of Object.keys(mi))s[r]=ln(`${Ga}/${mi[r].side}`,!0),a[r]=ln(`${Ga}/${mi[r].top}`,!0);const o=AE(i);for(const r of i.walls){const{x:l,z:c,kind:u}=r,d=mi[u].height,h=new ct(CE(l,c,d,t),new Jt({color:mi[u].color,map:s[u]})),m=new ct(LE(l,c,d),new Jt({color:mi[u].color,map:a[u]}));h.castShadow=!0,h.receiveShadow=!0,m.castShadow=!0,m.receiveShadow=!0;const g=new Nt;g.add(h,m),g.position.set(0,0,0),e.add(g);const _=RE(l,c,o);_&&n.push({object:g,side:_})}for(const r of i.roofs){const l=bE[r.style],c=ln(`${Ga}/${l.file}`,!0),u=new Jt({color:l.color,map:c,side:Xt}),d=PE(r.x,r.z,r.w,r.d,r.ridge);for(const h of d){const m=new ct(h.geometry,u);m.castShadow=!0,m.receiveShadow=!0,e.add(m),n.push({object:m,side:h.side})}}return{group:e,walls:t,cutaway:n}}function AE(i){const e=new Set;for(let t=0;t<i.height;t++)for(let n=0;n<i.width;n++){const s=i.terrain[t*i.width+n];TE.has(s)&&e.add(`${n},${t}`)}return e}function RE(i,e,t){const n=[];return t.has(`${i},${e+1}`)&&!t.has(`${i},${e-1}`)&&n.push("s"),t.has(`${i},${e-1}`)&&!t.has(`${i},${e+1}`)&&n.push("n"),t.has(`${i-1},${e}`)&&!t.has(`${i+1},${e}`)&&n.push("e"),t.has(`${i+1},${e}`)&&!t.has(`${i-1},${e}`)&&n.push("w"),n.length===1?n[0]:n[0]??null}function CE(i,e,t,n){const s=[],a=[],o=[],r=t/EE,l=[];n.has(`${i},${e-1}`)||l.push({nx:0,nz:-1,u0:i*.5,u1:(i+1)*.5,corners:[[i,0,e],[i+1,0,e],[i+1,t,e],[i,t,e]]}),n.has(`${i},${e+1}`)||l.push({nx:0,nz:1,u0:(i+1)*.5,u1:i*.5,corners:[[i+1,0,e+1],[i,0,e+1],[i,t,e+1],[i+1,t,e+1]]}),n.has(`${i+1},${e}`)||l.push({nx:1,nz:0,u0:e*.5,u1:(e+1)*.5,corners:[[i+1,0,e],[i+1,0,e+1],[i+1,t,e+1],[i+1,t,e]]}),n.has(`${i-1},${e}`)||l.push({nx:-1,nz:0,u0:(e+1)*.5,u1:e*.5,corners:[[i,0,e+1],[i,0,e],[i,t,e],[i,t,e+1]]});for(const c of l)yi(s,a,o,c.corners,[[c.u0,0],[c.u1,0],[c.u1,r],[c.u0,r]]);return Tn(bn,s,a,o)}function LE(i,e,t){const n=[],s=[],a=[];return yi(n,s,a,[[i,t,e],[i,t,e+1],[i+1,t,e+1],[i+1,t,e]],[[i*.5,e*.5],[i*.5,(e+1)*.5],[(i+1)*.5,(e+1)*.5],[(i+1)*.5,e*.5]]),Tn(bn,n,s,a)}function PE(i,e,t,n,s){const l=i-.18,c=i+t+.18,u=e-.18,d=e+n+.18,h=[];if(s==="x"){const m=(u+d)/2;h.push(Ns("s",[[l,1.28,u],[l,1.92,m],[c,1.92,m],[c,1.28,u]],l,c,u,m)),h.push(Ns("n",[[c,1.28,d],[c,1.92,m],[l,1.92,m],[l,1.28,d]],l,c,m,d))}else{const m=(l+c)/2;h.push(Ns("w",[[l,1.28,d],[m,1.92,d],[m,1.92,u],[l,1.28,u]],u,d,l,m)),h.push(Ns("e",[[c,1.28,u],[m,1.92,u],[m,1.92,d],[c,1.28,d]],u,d,m,c))}return h}function Ns(i,e,t,n,s,a){const o=[],r=[],l=[],c=e[1][0]-e[0][0],u=e[1][2]-e[0][2],d=e[2][0]-e[0][0],h=e[2][2]-e[0][2],m=u*d-c*h,g=m>=0?e:[e[0],e[3],e[2],e[1]],_=m>=0?[[t*.5,s*.5],[t*.5,a*.5],[n*.5,a*.5],[n*.5,s*.5]]:[[t*.5,s*.5],[n*.5,s*.5],[n*.5,a*.5],[t*.5,a*.5]];return yi(o,r,l,g,_),{geometry:Tn(bn,o,r,l),side:i}}function DE(i,e,t){return i==="s"?e:i==="n"?!e:i==="e"?t:!t}function UE(i,e,t,n){const s=i.prevX[e]+(i.x[e]-i.prevX[e])*t,a=i.prevZ[e]+(i.z[e]-i.prevZ[e])*t;let o=IE(i.prevYaw[e],i.yaw[e],t);const r=i.moving[e]===1;r||(o+=Math.sin(n*1.4+e)*.12);const l=i.prevPhase[e]+(i.phase[e]-i.prevPhase[e])*t,c=r?Math.abs(Math.sin(l))*.04:0;return{x:s,z:a,yaw:o,bob:c}}function IE(i,e,t){const n=Math.atan2(Math.sin(e-i),Math.cos(e-i));return i+n*t}const ki=`${Ki}/textures`,Tl={grass:{file:"ground/Grass.png",color:16777215,repeat:.28,raised:!1},grassRich:{file:"ground/GrassRich.png",color:16777215,repeat:.28,raised:!1},soil:{file:"ground/Soil.png",color:16777215,repeat:.28,raised:!1},soilRich:{file:"ground/SoilRich.png",color:16777215,repeat:.28,raised:!1},dirt:{file:"ground/PackedDirt.png",color:16777215,repeat:.32,raised:!1},sand:{file:"ground/Sand.png",color:16777215,repeat:.28,raised:!1},mud:{file:"ground/Mud.png",color:16777215,repeat:.32,raised:!1},marsh:{file:"ground/Marsh.png",color:16777215,repeat:.32,raised:!1},moss:{file:"ground/Moss.png",color:16777215,repeat:.32,raised:!1},gravel:{file:"ground/Gravel.png",color:16777215,repeat:.32,raised:!1},ice:{file:"ground/Ice.png",color:16777215,repeat:.28,raised:!1},roughHewn:{file:"ground/RoughHewn.png",color:9076852,repeat:.5,raised:!0},roughStone:{file:"ground/RoughStone.png",color:10262671,repeat:.4,raised:!1},smoothStone:{file:"ground/SmoothStone.png",color:13157564,repeat:.4,raised:!1},woodFloor:{file:"ground/FloorWood.png",color:11565640,repeat:.5,raised:!0},stoneTile:{file:"ground/FloorStoneTile.png",color:12761252,repeat:.5,raised:!0},carpet:{file:"ground/FloorCarpet.png",color:9256261,repeat:.5,raised:!0},concrete:{file:"ground/FloorConcrete.png",color:12040116,repeat:.45,raised:!0},flagstone:{file:"ground/FloorFlagstone.png",color:10721932,repeat:.5,raised:!0},metalFloor:{file:"ground/FloorMetal.png",color:10135216,repeat:.5,raised:!0},paved:{file:"ground/FloorPaved.png",color:9276036,repeat:.4,raised:!0},sterile:{file:"ground/FloorSterile.png",color:14015960,repeat:.5,raised:!0}};function NE(i){const e=new Nt;e.name="terrain";const t=new Set,n=new Map,s=Fs(),a=Fs();for(let m=0;m<i.height;m++)for(let g=0;g<i.width;g++){const _=i.terrain[m*i.width+g];if(_==="water"||_==="stream"){t.add(`${g},${m}`);const x=_==="water"?s:a,w=_==="water"?.35:.5,P=_==="water"?.035:.03;yi(x.pos,x.nrm,x.uv,Ha(g,P,m),wl(g,m,w));continue}let p=n.get(_);p||(p=Fs(),n.set(_,p));const f=Tl[_],E=f.raised?.02:.005;yi(p.pos,p.nrm,p.uv,Ha(g,E,m),wl(g,m,f.repeat))}for(const[m,g]of n){const _=Tl[m],p=ln(`${ki}/${_.file}`,!0),f=new ct(Tn(bn,g.pos,g.nrm,g.uv),new Jt({color:_.color,map:p}));f.receiveShadow=!0,f.name=m,e.add(f)}const o=3,r=ln(`${ki}/edge/Strata.png`,!0);r.repeat.set((i.width+o*2)/8,(i.height+o*2)/8);const l=new ct(new ts(i.width+o*2,i.height+o*2),new Jt({color:12891290,map:r}));l.rotation.x=-Math.PI/2,l.position.set(i.width/2,-.04,i.height/2),l.receiveShadow=!0,l.name="strata",e.add(l),Al(e,"water",s,3961728,0),Al(e,"stream",a,4883600,0);const c=ln(`${ki}/water/Ripples.png`,!0),u=new ct(Tn(bn,s.pos,s.nrm,s.uv),new $i({map:c,transparent:!0,depthWrite:!1,color:14017770}));u.position.y=.012,u.name="ripples",e.add(u);const d=ln(`${ki}/water/Flow.png`,!0),h=new ct(Tn(bn,a.pos,a.nrm,a.uv),new $i({map:d,transparent:!0,depthWrite:!1,color:14017770,opacity:.85}));if(h.position.y=.012,h.name="flow",e.add(h),i.marks.length>0){const m=Fs();for(const p of i.marks)yi(m.pos,m.nrm,m.uv,Ha(p.x,.045,p.z),[[0,0],[0,1],[1,1],[1,0]]);const g=ln(`${ki}/damage/Marks.png`),_=new ct(Tn(bn,m.pos,m.nrm,m.uv),new Jt({map:g,transparent:!0,depthWrite:!1}));_.name="marks",e.add(_)}return{group:e,water:t,ripples:c,flow:d}}function Fs(){return{pos:[],nrm:[],uv:[]}}function Ha(i,e,t){return[[i,e,t],[i,e,t+1],[i+1,e,t+1],[i+1,e,t]]}function wl(i,e,t){return[[i*t,e*t],[i*t,(e+1)*t],[(i+1)*t,(e+1)*t],[(i+1)*t,e*t]]}function Al(i,e,t,n,s){if(t.pos.length===0)return;const a=new ct(Tn(bn,t.pos,t.nrm,t.uv),new Jt({color:n}));a.position.y=s,a.receiveShadow=!0,a.name=e,i.add(a)}function FE(i,e,t){var l;const n=e_(t),s=n.colony,a=document.createElement("div");a.id="hud",a.className="is-concealed",a.innerHTML=`
    <h1>${s.name}</h1>
    <p class="place">A hidden valley in Colorado</p>
    <p id="seed">Seed ${Va(t)}</p>
    <p class="hint">Drag to pan · scroll to zoom · right-drag to orbit</p>
    <p id="status">Loading IsoRim models…</p>
    <button type="button" id="new-valley">New valley</button>
  `,(l=a.querySelector("#new-valley"))==null||l.addEventListener("click",()=>{const c=Math.floor(Math.random()*4294967295)>>>0||1,u=new URLSearchParams(window.location.search);u.set("seed",Va(c)),window.location.search=u.toString()});const o=document.createElement("div");o.id="labels",o.className="is-concealed",i.append(a,o);const r=a.querySelector("#status");r instanceof HTMLElement&&OE(i,s,n.spawns,o,r,e,t).catch(c=>{const u=c instanceof Error?c.message:"The valley failed to load.";r.textContent=u,e.fail(u),console.error(c)})}async function OE(i,e,t,n,s,a,o){const r=await yE(zE(e));a.markPacks();const l=new gE,c=new ao({antialias:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setSize(window.innerWidth,window.innerHeight),c.outputColorSpace=lt,c.shadowMap.enabled=!0,c.shadowMap.type=Fr,c.domElement.addEventListener("contextmenu",I=>I.preventDefault()),i.append(c.domElement);const u=new $c;u.background=new Ue(12964020);const d=Math.max(e.width,e.height);u.fog=new oa(12964020,d*2.4,d*4.2);const h=e.width/2,m=e.height/2,g=d*.86,_=new aa(-g,g,g/2,-g/2,.1,d*6);_.position.set(h+d*.42,d*.5,m-d*.5);const p=new Vm(_,c.domElement);p.target.set(h,.3,m),p.enableDamping=!0,p.dampingFactor=.08,p.screenSpacePanning=!0,p.minPolarAngle=.28,p.maxPolarAngle=Math.PI/2.08,p.minZoom=.35,p.maxZoom=8,p.zoomSpeed=.85,p.mouseButtons={LEFT:Kt.PAN,MIDDLE:Kt.DOLLY,RIGHT:Kt.ROTATE},_.lookAt(p.target),u.add(new eu(14148808,6968374,.62)),u.add(new iu(16774372,.28));const f=new Rr(16773330,1.15);f.position.set(h+d*.28,d*.42,m-d*.18),f.target.position.set(h,0,m),f.castShadow=!0,f.shadow.mapSize.set(2048,2048);const E=d*.62;f.shadow.camera.left=-E,f.shadow.camera.right=E,f.shadow.camera.top=E,f.shadow.camera.bottom=-E,f.shadow.camera.near=1,f.shadow.camera.far=d*3,f.shadow.bias=-6e-4,f.shadow.normalBias=.025,u.add(f),u.add(f.target);const x=new Rr(14017268,.32);x.position.set(h-12,14,m+16),u.add(x);const w=NE(e);u.add(w.group);const P=wE(e);u.add(P.group);const R=[...P.cutaway];for(const I of e.doors){const H=new Nt;H.name=I.id;const X=I.stuff??"Wood",Z=r.get("door_leaf"),$=r.get("door_lintel");Z&&$&&(H.add(Xn(Z,{materials:l,stuff:X})),H.add(Xn(Z,{materials:l,stuff:X,yaw:180})),H.add(Xn($,{materials:l,stuff:X}))),H.position.set(I.x+.5,0,I.z+.5),H.rotation.y=Cn.degToRad(I.yaw??0),u.add(H),R.push({object:H,side:I.facade})}for(const I of e.props){const H=r.get(I.model);if(!H)continue;const X=Xn(H,{materials:l,stuff:I.stuff,tint:I.tint?new Ue(I.tint):null,scale:I.scale,stretch:I.stretch,yaw:I.yaw,skipPrefix:I.skipPrefix}),Z=I.w??1,$=I.d??1;if(X.position.set(I.x+Z/2,I.y??0,I.z+$/2),X.name=I.id,u.add(X),I.model==="campfire"){const z=new nu(16747068,2.4,7,2);z.position.set(I.x+Z/2,.55,I.z+$/2),u.add(z)}}const A=new Map(e.figures.map(I=>[I.id,I]));for(const I of e.figures)I.wander&&I.name.length>0||u.add(Ml(I,r,l));const q=Km({spawns:t,nav:t_(e),seed:o}),S=q.roster(),b=S.keys.map((I,H)=>{const X=A.get(I);if(!X)throw new Error(`Missing figure ${I}`);const Z=Ml(X,r,l);u.add(Z);const $=document.createElement("div");return $.className="label",$.textContent=S.names[H]??X.name,n.append($),{group:Z,label:$}});kE(q);const V=e.animals.map(I=>{const H=o_(I,r,l);return u.add(H.root),H});window.__colonyUsed={models:[...r.keys()].sort(),textures:_E().sort()};const Y=()=>{const I=_.position.z<p.target.z,H=_.position.x>p.target.x;for(const X of R)X.object.visible=!DE(X.side,I,H)},ae=()=>{const I=window.innerWidth/Math.max(1,window.innerHeight);_.left=-g*I/2,_.right=g*I/2,_.top=g/2,_.bottom=-g/2,_.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)};ae(),window.addEventListener("resize",ae),await xE(),a.markWorld();const D=new su,B=new L,W=b.map(()=>({x:0,z:0,yaw:0,bob:0}));s.textContent="Near walls fold away as you orbit.";const j=()=>{const I=D.getDelta(),H=D.elapsedTime;p.update(),Y(),q.advance(I),q.pollEvents();const X=q.colonists(),Z=q.alpha();for(let $=0;$<b.length;$++){const z=UE(X,$,Z,H);W[$]=z,b[$].group.position.set(z.x,z.bob,z.z),b[$].group.rotation.y=z.yaw}l_(V,H),w.ripples.offset.set(H*.015,H*.008),w.flow.offset.set(H*-.05,H*.01);for(const $ of l.flicker)$.emissiveIntensity=.45+Math.sin(H*8+$.id)*.28;BE(b,W,_,B,c.domElement),c.render(u,_),a.markFrame(),requestAnimationFrame(j)};j()}function kE(i){window.__gulch={get tick(){return i.tick},save:()=>i.save(),load:e=>i.load(e)}}function BE(i,e,t,n,s){const a=s.clientWidth,o=s.clientHeight;for(let r=0;r<i.length;r++){const l=e[r];n.set(l.x,1.35,l.z),n.project(t);const c=i[r].label;if(n.z>1){c.style.display="none";continue}c.style.display="block",c.style.left=`${(n.x*.5+.5)*a}px`,c.style.top=`${(-n.y*.5+.5)*o}px`}}function zE(i){const e=new Set(["door_leaf","door_lintel"]);for(const t of i.props)e.add(t.model);for(const t of i.figures)for(const n of t.parts)e.add(n);for(const t of i.animals)e.add(t.model),t.leg&&e.add(t.leg);return[...e]}const Ws=document.querySelector("#app");if(!(Ws instanceof HTMLElement))throw new Error("Missing #app");wu(Ws,i=>{const e=Cu(Ws,()=>{var t,n;(t=document.querySelector("#hud"))==null||t.classList.remove("is-concealed"),(n=document.querySelector("#labels"))==null||n.classList.remove("is-concealed")});FE(Ws,e,i)});
