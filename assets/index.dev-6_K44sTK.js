var Eu=Object.defineProperty;var Tu=(i,e,t)=>e in i?Eu(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ge=(i,e,t)=>Tu(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Fl=20,Ui=1/Fl,Ol=["construction","plants","mining","cooking","medicine","intellectual","social","crafting"],kl=27164,We=180,Rt=132,gt=8,wu=18,go=14,vo=[{id:"nell",name:"Nell",body:"female",hair:"long",specialty:"plants"},{id:"amos",name:"Amos",body:"male",hair:"short",beard:"goatee",hat:"cap",specialty:"construction"},{id:"wren",name:"Wren",body:"thin",hair:"bun",hat:"brim",specialty:"medicine"},{id:"idris",name:"Idris",body:"fat",hair:"ponytail",hat:"hood",specialty:"social"},{id:"bram",name:"Bram",body:"hulk",hair:"mohawk",beard:"full",hat:"tall",specialty:"mining"}],xo=["tree_pine_1","tree_pine_2","tree_poplar_1","tree_oak_1","tree_birch_1"],Mo=["boulder_1","boulder_2","boulder_3","boulder_4","boulder_5","boulder_6"],yo=["#e0b090","#c68658","#8d5a3c","#f0d0b0","#a56b45"],as=["#241c18","#6b3a22","#c4a15a","#3a3430","#141210"],os=["#8d3d45","#3d5c8d","#3d6b4f","#c4a15a","#5c4a3a","#6e4a62"],So=["#3a3f4a","#4a3a32","#2c3834","#534838"];function qr(i){return(i>>>0).toString(16).padStart(4,"0")}function Au(i){const e=Fu(i>>>0),t=3+Math.floor(e()*3),n=new Uu;n.paintRim();const s={x:Math.floor(We*.4)+Math.floor(e()*20),z:Rt-gt-go-6-Math.floor(e()*4),w:wu,h:go};n.creek(e,s),n.banks(),n.meadows(e,s),n.soil(e,s),n.forests(e,s),n.stone(e),n.ore(e);const r=n.startingSite(s);n.seal(s.x+2,s.z+8);const o=Ru(e,t),a=[],l=[];o.forEach((u,h)=>{const f={x:s.x+2+h*2,z:s.z+8};a.push(Cu(u,f)),l.push(Lu(e,u,h,f))});const c={name:"Galt's Gulch",width:We,height:Rt,terrain:n.terrain,walls:n.walls,doors:n.doors,roofs:n.roofs,props:n.props,figures:a,animals:[],marks:[{x:r.doorX,z:r.doorZ}]};return{seed:i>>>0,colony:c,spawns:l,clearing:n.clearing(s,r)}}function Ru(i,e){const t=vo.slice(1);for(let n=t.length-1;n>0;n--){const s=Math.floor(i()*(n+1)),r=t[n];t[n]=t[s],t[s]=r}return[vo[0],...t.slice(0,e-1)]}function Cu(i,e){const t=Nu(i.name),n=[`person_${i.body}_lower`,`person_${i.body}_upper`,"person_head","person_face",`person_hair_${i.hair}`],s=[So[t%So.length],os[t%os.length],yo[t%yo.length],"#ffffff",as[t%as.length]];return i.beard&&(n.push(`person_beard_${i.beard}`),s.push(as[t%as.length])),i.hat&&(n.push(`person_hat_${i.hat}`),s.push(os[(t+2)%os.length])),{id:i.id,name:i.name,x:e.x,z:e.z,yaw:0,wander:!0,parts:n,tints:s}}function Lu(i,e,t,n){return{id:t+1,key:e.id,name:e.name,x:n.x+.5,z:n.z+.5,yaw:0,skills:Pu(i,e.specialty),mind:Du(i,t),needs:{food:Tn(.86+i()*.1),rest:Tn(.8+i()*.12),recreation:Tn(.84+i()*.1)},purseCents:6e3+t*1200+Math.floor(i()*800)}}function Pu(i,e){const t={};for(const n of Ol){const s=n===e?6:1,r=Math.floor(n===e?i()*3:i()*4);t[n]=s+r}return t}function Du(i,e){const t={food:8+Math.floor(i()*8),timber:10+Math.floor(i()*16),stone:4+Math.floor(i()*8),ore:e===0?0:Math.floor(i()*3),power:0,goldOre:0};return{stated:"objectivism",certainty:Tn(.78+i()*.18),seeds:[],charisma:Tn(.3+i()*.5),suggestibility:Tn(.15+i()*.35),receptivity:Tn(.7+i()*.25),residence:"founder",integrity:1,morale:Tn(.75+i()*.2),force:"none",laborHoursLeft:14,inventory:t}}class Uu{constructor(){Ge(this,"terrain",Array.from({length:We*Rt},()=>"grass"));Ge(this,"walls",[]);Ge(this,"doors",[]);Ge(this,"roofs",[]);Ge(this,"props",[]);Ge(this,"wallAt",new Set);Ge(this,"occupied",new Uint8Array(We*Rt));Ge(this,"seq",0)}paintRim(){for(let e=0;e<Rt;e++)for(let t=0;t<We;t++){const n=ls(t,e);n<=2?(this.terrain[e*We+t]="roughStone",this.addWall(t,e,"rock")):n<gt&&(this.terrain[e*We+t]="gravel")}}creek(e,t){let n=14+Math.floor(e()*22),s=gt+1;const r=t.z-4;for(;s<r;){!this.wallAt.has(ei(n,s))&&!On(n,s,t)&&this.setTerrain(n,s,"stream");const o=Math.floor(e()*5);o===0?n-=1:o===4&&(n+=1),n=Iu(n,gt+2,We-gt-3),s+=1}for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){const l=n+a,c=s+o;this.wallAt.has(ei(l,c))||On(l,c,t)||l<=2||c<=2||l>=We-3||c>=Rt-3||this.setTerrain(l,c,"water")}}banks(){for(let e=1;e<Rt-1;e++)for(let t=1;t<We-1;t++){const n=this.terrain[e*We+t];n!=="grass"&&n!=="gravel"||this.nearWater(t,e)&&(ls(t,e)<=2||(this.terrain[e*We+t]=n==="gravel"?"gravel":"mud"))}}meadows(e,t){for(let n=0;n<8;n++){const s=gt+8+Math.floor(e()*(We-gt*2-16)),r=gt+8+Math.floor(e()*(Rt-gt*2-16)),o=8+Math.floor(e()*8);this.disk(s,r,o,t)}}soil(e,t){this.fillRect(t.x+1,t.z-5,8,4,"soilRich",!0);for(let n=0;n<5;n++){const s=gt+2+Math.floor(e()*(We-gt*2-10)),r=gt+2+Math.floor(e()*Math.max(1,t.z-gt-8));this.fillRect(s,r,6,4,n===0?"soil":"soilRich",!0)}}forests(e,t){for(let n=0;n<16;n++){const s=gt+4+Math.floor(e()*(We-gt*2-8)),r=gt+4+Math.floor(e()*Math.max(1,t.z-gt-6)),o=6+Math.floor(e()*5);let a=0;for(let l=r-o;l<=r+o;l+=3)for(let c=s-o;c<=s+o;c+=3)(c-s)**2+(l-r)**2>o*o||e()>.72||this.tryTree(e,c,l,t)&&(a+=1);a===0&&this.tryTree(e,s,r,t)}}stone(e){for(const t of[5,We-6])for(let n=16;n<Rt-18;n+=18){const s=Math.floor(e()*4);for(let r=0;r<3;r++){const o=Mo[Math.floor(e()*Mo.length)];this.tryProp({model:o,x:t,z:n+s+r*2,w:1,d:1,stuff:"Stone",blocks:!0})}}}ore(e){for(const t of[2,We-3])for(let n=0;n<4;n++){const s=18+Math.floor(e()*(Rt-46));for(let o=0;o<5;o++)this.rekind(t,s+o,"rockOre");const r=t===2?5:We-6;this.addWall(r,s+1,"rockOre"),this.addWall(r,s+2,"rockOre"),this.setTerrain(r,s+1,"roughStone"),this.setTerrain(r,s+2,"roughStone")}}startingSite(e){const t={x:e.x+1,z:e.z+1,w:7,d:6},n={x:e.x+10,z:e.z+1,w:5,d:4};this.building(t,"thatch","cabin"),this.building(n,"slate","shed"),this.tryProp({model:"bedroll",x:t.x+1,z:t.z+4,w:1,d:1,stuff:"Fabric",blocks:!0,movable:!0}),this.tryProp({model:"table_1x2",x:t.x+4,z:t.z+2,w:1,d:2,stuff:"Wood",blocks:!0,movable:!0}),this.tryProp({model:"dining_chair",x:t.x+5,z:t.z+2,w:1,d:1,stuff:"Wood",blocks:!0,movable:!0}),this.tryProp({model:"shelf",x:n.x+1,z:n.z+2,w:1,d:1,stuff:"Wood",blocks:!0,movable:!0}),this.tryProp({model:"barrel",x:n.x+3,z:n.z+2,w:1,d:1,stuff:"Wood",blocks:!0,movable:!0}),this.tryProp({model:"barrel",x:n.x+3,z:n.z+1,w:1,d:1,stuff:"Wood",blocks:!0,movable:!0});for(let s=e.z+7;s<e.z+e.h;s++)for(let r=e.x;r<e.x+e.w;r++)this.wallAt.has(ei(r,s))||this.terrain[s*We+r]==="water"||this.terrain[s*We+r]==="stream"||(this.terrain[s*We+r]="flagstone");return this.tryProp({model:"campfire",x:e.x+8,z:e.z+9,w:1,d:1,blocks:!1,movable:!0}),{doorX:t.x+3,doorZ:t.z}}seal(e,t){const n=new Uint8Array(We*Rt),s=[{x:e,z:t}];for(;s.length>0;){const r=s.pop();if(!r||!gn(r.x,r.z))continue;const o=r.z*We+r.x;n[o]||this.blocked(r.x,r.z)||(n[o]=1,s.push({x:r.x+1,z:r.z},{x:r.x-1,z:r.z},{x:r.x,z:r.z+1},{x:r.x,z:r.z-1}))}for(let r=0;r<Rt;r++)for(let o=0;o<We;o++){const a=r*We+o;n[a]||this.blocked(o,r)||(this.terrain[a]="stream")}}clearing(e,t){const n=[];for(let s=e.z+7;s<e.z+e.h;s++)for(let r=e.x;r<e.x+e.w;r++)this.blocked(r,s)||n.push({x:r,z:s});return this.blocked(t.doorX,t.doorZ)||n.push({x:t.doorX,z:t.doorZ}),n}building(e,t,n){const s={x:e.x+Math.floor(e.w/2),z:e.z};for(let r=e.z;r<e.z+e.d;r++)for(let o=e.x;o<e.x+e.w;o++){if(o===e.x||r===e.z||o===e.x+e.w-1||r===e.z+e.d-1){if(o===s.x&&r===s.z)continue;this.addWall(o,r,"planks");continue}this.setTerrain(o,r,"woodFloor")}this.doors.push({id:`${n}-door`,x:s.x,z:s.z,yaw:0,stuff:"Wood",facade:"s"}),this.roofs.push({id:`${n}-roof`,x:e.x,z:e.z,w:e.w,d:e.d,style:t,ridge:"x"})}disk(e,t,n,s){for(let r=t-n;r<=t+n;r++)for(let o=e-n;o<=e+n;o++){if((o-e)**2+(r-t)**2>n*n||!gn(o,r)||ls(o,r)<=4||On(o,r,s))continue;this.terrain[r*We+o]==="grass"&&(this.terrain[r*We+o]="grassRich")}}fillRect(e,t,n,s,r,o){for(let a=t;a<t+s;a++)for(let l=e;l<e+n;l++){if(!gn(l,a)||ls(l,a)<=2)continue;const c=this.terrain[a*We+l];c==="water"||c==="stream"||c==="roughStone"||o&&c==="woodFloor"||(this.terrain[a*We+l]=r)}}tryTree(e,t,n,s){if(On(t,n,s)||On(t+1,n,s)||On(t,n+1,s)||On(t+1,n+1,s))return!1;const r=xo[Math.floor(e()*xo.length)];return this.tryProp({model:r,x:t,z:n,w:2,d:2,scale:2.2,blocks:!0})}tryProp(e){const t=e.w??1,n=e.d??1,s=Math.floor(e.x),r=Math.floor(e.z);if(!this.fits(s,r,t,n))return!1;if(e.blocks!==!1)for(let a=0;a<n;a++)for(let l=0;l<t;l++)this.occupied[(r+a)*We+(s+l)]=1;return this.props.push({...e,id:`${e.model}-${this.seq++}`,x:s,z:r}),!0}fits(e,t,n,s){for(let r=0;r<s;r++)for(let o=0;o<n;o++){const a=e+o,l=t+r;if(!gn(a,l)||this.blocked(a,l))return!1;const c=this.terrain[l*We+a];if(c==="water"||c==="stream")return!1}return!0}blocked(e,t){if(!gn(e,t)||this.wallAt.has(ei(e,t))||this.occupied[t*We+e])return!0;const n=this.terrain[t*We+e];return n==="water"||n==="stream"}addWall(e,t,n){!gn(e,t)||this.wallAt.has(ei(e,t))||(this.wallAt.add(ei(e,t)),this.walls.push({x:e,z:t,kind:n}))}rekind(e,t,n){const s=this.walls.find(r=>r.x===e&&r.z===t);s&&(s.kind=n)}setTerrain(e,t,n){gn(e,t)&&(this.terrain[t*We+e]=n)}nearWater(e,t){for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){if(s===0&&n===0)continue;const r=e+s,o=t+n;if(!gn(r,o))continue;const a=this.terrain[o*We+r];if(a==="water"||a==="stream")return!0}return!1}}function On(i,e,t){return i>=t.x&&e>=t.z&&i<t.x+t.w&&e<t.z+t.h}function ls(i,e){return Math.min(i,e,We-1-i,Rt-1-e)}function gn(i,e){return i>=0&&e>=0&&i<We&&e<Rt}function ei(i,e){return`${i},${e}`}function Iu(i,e,t){return i<e?e:i>t?t:i}function Tn(i){return i<0?0:i>1?1:i}function Nu(i){let e=0;for(const t of i)e=Math.imul(e,33)+t.charCodeAt(0)>>>0;return e}function Fu(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ou(i,e){let t=ku();const n=document.createElement("div");n.id="title-screen",n.innerHTML=`
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
  `,i.append(n);const s=n.querySelector("#begin"),r=n.querySelector("#reroll"),o=n.querySelector("#seed-value");if(!(s instanceof HTMLButtonElement)||!(r instanceof HTMLButtonElement))return;const a=()=>{o&&(o.textContent=qr(t))};a(),r.addEventListener("click",()=>{t=t+1+Math.floor(Math.random()*65535)>>>0,a()}),s.focus();let l=!1;const c=()=>{if(l)return;l=!0,e(t),n.classList.add("is-leaving");const u=()=>{n.remove()};n.addEventListener("transitionend",u,{once:!0}),window.setTimeout(u,700)};s.addEventListener("click",c)}function ku(){const i=new URLSearchParams(window.location.search).get("seed");return i&&/^[0-9a-fA-F]{1,8}$/.test(i)?Number.parseInt(i,16)>>>0:kl}const Tt={done:0,total:0,label:"Loading the valley…"};function Fa(i,e){Tt.total+=i,Tt.label=e,ka()}function Oa(i){Tt.done+=1,Tt.label=i,ka()}function zu(){Tt.done=Math.max(Tt.done,Tt.total,1),Tt.total=Math.max(Tt.total,Tt.done),Tt.label="The valley is ready.",ka()}function ka(){const i=document.querySelector("#load-progress"),e=Tt.total===0?0:Math.min(100,Math.round(Tt.done/Tt.total*100));if(i instanceof HTMLElement){i.setAttribute("aria-valuenow",String(e)),i.setAttribute("aria-valuemax","100");const t=i.querySelector(".load-bar-fill");t instanceof HTMLElement&&(t.style.width=`${e}%`);const n=i.querySelector(".load-label");n&&(n.textContent=Tt.label)}}const bo=3;function Bu(i,e){const t=document.createElement("div");t.id="loading-screen",t.innerHTML=`
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
  `,i.append(t);const n={packs:!1,world:!1,frames:0,revealed:!1},s=()=>{window.__valleyLoad={...n}};s();let r=!1;const o=()=>{if(n.revealed)return;if(n.revealed=!0,s(),zu(),e(),(Number.parseFloat(getComputedStyle(t).transitionDuration)||0)===0){t.remove();return}t.addEventListener("transitionend",l=>{l.target!==t||l.propertyName!=="opacity"||t.remove()}),t.classList.add("is-leaving")};return{markPacks(){n.packs=!0,s()},markWorld(){n.world=!0,r||(r=!0,Fa(bo,"Drawing the valley…")),s()},markFrame(){if(!(!n.packs||!n.world||n.revealed)){if(n.frames+=1,s(),n.frames<bo){Oa("Drawing the valley…");return}o()}},fail(a){const l=t.querySelector(".load-label");l&&(l.textContent=a)}}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const er="160",Zt={ROTATE:0,DOLLY:1,PAN:2},Vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zl=0,Yr=1,Bl=2,za=1,Ba=2,Kt=3,_n=0,wt=1,Bt=2,dn=0,Yn=1,jr=2,$r=3,Kr=4,Gl=5,wn=100,Hl=101,Vl=102,Zr=103,Jr=104,Wl=200,Xl=201,ql=202,Yl=203,qs=204,Ys=205,jl=206,$l=207,Kl=208,Zl=209,Jl=210,Ql=211,ec=212,tc=213,nc=214,ic=0,sc=1,rc=2,Wi=3,ac=4,oc=5,lc=6,cc=7,tr=0,uc=1,fc=2,pn=0,hc=1,dc=2,pc=3,mc=4,_c=5,gc=6,Ga=300,$n=301,Kn=302,js=303,$s=304,Zi=306,Ei=1e3,Gt=1001,Ks=1002,yt=1003,Qr=1004,ks=1005,It=1006,vc=1007,Ti=1008,mn=1009,xc=1010,Mc=1011,nr=1012,Ha=1013,fn=1014,hn=1015,wi=1016,Va=1017,Wa=1018,An=1020,yc=1021,Ht=1023,Sc=1024,bc=1025,Rn=1026,Zn=1027,Ec=1028,Xa=1029,Tc=1030,qa=1031,Ya=1033,zs=33776,Bs=33777,Gs=33778,Hs=33779,ea=35840,ta=35841,na=35842,ia=35843,ja=36196,sa=37492,ra=37496,aa=37808,oa=37809,la=37810,ca=37811,ua=37812,fa=37813,ha=37814,da=37815,pa=37816,ma=37817,_a=37818,ga=37819,va=37820,xa=37821,Vs=36492,Ma=36494,ya=36495,wc=36283,Sa=36284,ba=36285,Ea=36286,$a=3e3,Cn=3001,Ac=3200,Rc=3201,Ka=0,Cc=1,Ot="",ct="srgb",nn="srgb-linear",ir="display-p3",Ji="display-p3-linear",Xi="linear",Ze="srgb",qi="rec709",Yi="p3",Wn=7680,Ta=519,Lc=512,Pc=513,Dc=514,Za=515,Uc=516,Ic=517,Nc=518,Fc=519,wa=35044,Aa="300 es",Zs=1035,Qt=2e3,ji=2001;class In{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eo=1234567;const Mi=Math.PI/180,$i=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function Ja(i,e){return(i%e+e)%e}function Gu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Hu(i,e,t){return i!==e?(t-i)/(e-i):0}function Gi(i,e,t){return(1-t)*i+t*e}function Vu(i,e,t,n){return Gi(i,e,1-Math.exp(-t*n))}function Wu(i,e=1){return e-Math.abs(Ja(i,e*2)-e)}function Xu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function qu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Yu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ju(i,e){return i+Math.random()*(e-i)}function $u(i){return i*(.5-Math.random())}function Ku(i){i!==void 0&&(Eo=i);let e=Eo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zu(i){return i*Mi}function Ju(i){return i*$i}function Ra(i){return(i&i-1)===0&&i!==0}function Qu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Js(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ef(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ln={DEG2RAD:Mi,RAD2DEG:$i,generateUUID:Ri,clamp:St,euclideanModulo:Ja,mapLinear:Gu,inverseLerp:Hu,lerp:Gi,damp:Vu,pingpong:Wu,smoothstep:Xu,smootherstep:qu,randInt:Yu,randFloat:ju,randFloatSpread:$u,seededRandom:Ku,degToRad:Zu,radToDeg:Ju,isPowerOfTwo:Ra,ceilPowerOfTwo:Qu,floorPowerOfTwo:Js,setQuaternionFromProperEuler:ef,normalize:bt,denormalize:gi};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,s,r,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],_=n[8],g=s[0],p=s[3],d=s[6],b=s[1],x=s[4],E=s[7],L=s[2],R=s[5],w=s[8];return r[0]=o*g+a*b+l*L,r[3]=o*p+a*x+l*R,r[6]=o*d+a*E+l*w,r[1]=c*g+u*b+h*L,r[4]=c*p+u*x+h*R,r[7]=c*d+u*E+h*w,r[2]=f*g+m*b+_*L,r[5]=f*p+m*x+_*R,r[8]=f*d+m*E+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,_=t*h+n*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(s*c-u*n)*g,e[2]=(a*n-s*o)*g,e[3]=f*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mr.makeScale(e,t)),this}rotate(e){return this.premultiply(mr.makeRotation(-e)),this}translate(e,t){return this.premultiply(mr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mr=new He;function Oc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kc(){const i=Qs("canvas");return i.style.display="block",i}const To={};function Hi(i){i in To||(To[i]=!0,console.warn(i))}const wo=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ao=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cs={[nn]:{transfer:Xi,primaries:qi,toReference:i=>i,fromReference:i=>i},[ct]:{transfer:Ze,primaries:qi,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ji]:{transfer:Xi,primaries:Yi,toReference:i=>i.applyMatrix3(Ao),fromReference:i=>i.applyMatrix3(wo)},[ir]:{transfer:Ze,primaries:Yi,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ao),fromReference:i=>i.applyMatrix3(wo).convertLinearToSRGB()}},tf=new Set([nn,Ji]),Ke={enabled:!0,_workingColorSpace:nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!tf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=cs[e].toReference,s=cs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return cs[i].primaries},getTransfer:function(i){return i===Ot?Xi:cs[i].transfer}};function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ti;class Qa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=Qs("canvas")),ti.width=e.width,ti.height=e.height;const n=ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nf=0;class eo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ri(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gr(s[o].image)):r.push(gr(s[o]))}else r=gr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sf=0;class At extends In{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=Gt,s=Gt,r=It,o=Ti,a=Ht,l=mn,c=At.DEFAULT_ANISOTROPY,u=Ot){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Ri(),this.name="",this.source=new eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Cn?ct:Ot),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ga)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ct?Cn:$a}set encoding(e){Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cn?ct:Ot}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Ga;At.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,s=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,E=(m+1)/2,L=(d+1)/2,R=(u+f)/4,w=(h+g)/4,X=(_+p)/4;return x>E&&x>L?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=w/n):E>L?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=R/s,r=X/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=w/r,s=X/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(h-g)/b,this.z=(f-u)/b,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zc extends In{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Hi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cn?ct:Ot),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new At(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new eo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends zc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class to extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bc extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==m||u!==_){let p=1-a;const d=l*f+c*m+u*_+h*g,b=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const L=Math.sqrt(x),R=Math.atan2(L,d*b);p=Math.sin(p*R)/L,a=Math.sin(a*R)/L}const E=a*b;if(l=l*p+f*E,c=c*p+m*E,u=u*p+_*E,h=h*p+g*E,p===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-a*m,e[t+2]=c*_+u*m+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ro.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ro.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vr.copy(this).projectOnVector(e),this.sub(vr)}reflect(e){return this.sub(vr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vr=new D,Ro=new Dn;class Ci{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xt):Xt.fromBufferAttribute(r,o),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),fs.subVectors(this.max,Ii),ni.subVectors(e.a,Ii),ii.subVectors(e.b,Ii),si.subVectors(e.c,Ii),vn.subVectors(ii,ni),xn.subVectors(si,ii),kn.subVectors(ni,si);let t=[0,-vn.z,vn.y,0,-xn.z,xn.y,0,-kn.z,kn.y,vn.z,0,-vn.x,xn.z,0,-xn.x,kn.z,0,-kn.x,-vn.y,vn.x,0,-xn.y,xn.x,0,-kn.y,kn.x,0];return!xr(t,ni,ii,si,fs)||(t=[1,0,0,0,1,0,0,0,1],!xr(t,ni,ii,si,fs))?!1:(hs.crossVectors(vn,xn),t=[hs.x,hs.y,hs.z],xr(t,ni,ii,si,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new D,new D,new D,new D,new D,new D,new D,new D],Xt=new D,us=new Ci,ni=new D,ii=new D,si=new D,vn=new D,xn=new D,kn=new D,Ii=new D,fs=new D,hs=new D,zn=new D;function xr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zn.fromArray(i,r);const a=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),l=e.dot(zn),c=t.dot(zn),u=n.dot(zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rf=new Ci,Ni=new D,Mr=new D;class Qi{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ni,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(Mr)),this.expandByPoint(Ni.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new D,yr=new D,ds=new D,Mn=new D,Sr=new D,ps=new D,br=new D;class es{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yr.copy(e).add(t).multiplyScalar(.5),ds.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(yr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ds),a=Mn.dot(this.direction),l=-Mn.dot(ds),c=Mn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(yr).addScaledVector(ds,f),m}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),s=an.dot(an)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,s,r){Sr.subVectors(t,e),ps.subVectors(n,e),br.crossVectors(Sr,ps);let o=this.direction.dot(br),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,e);const l=a*this.direction.dot(ps.crossVectors(Mn,ps));if(l<0)return null;const c=a*this.direction.dot(Sr.cross(Mn));if(c<0||l+c>o)return null;const u=-a*Mn.dot(br);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,s,r,o,a,l,c,u,h,f,m,_,g,p){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,m,_,g,p)}set(e,t,n,s,r,o,a,l,c,u,h,f,m,_,g,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ri.setFromMatrixColumn(e,0).length(),r=1/ri.setFromMatrixColumn(e,1).length(),o=1/ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(af,e,of)}lookAt(e,t,n){const s=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),yn.crossVectors(n,Dt),yn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),yn.crossVectors(n,Dt)),yn.normalize(),ms.crossVectors(Dt,yn),s[0]=yn.x,s[4]=ms.x,s[8]=Dt.x,s[1]=yn.y,s[5]=ms.y,s[9]=Dt.y,s[2]=yn.z,s[6]=ms.z,s[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],_=n[2],g=n[6],p=n[10],d=n[14],b=n[3],x=n[7],E=n[11],L=n[15],R=s[0],w=s[4],X=s[8],M=s[12],T=s[1],k=s[5],q=s[9],J=s[13],P=s[2],F=s[6],Y=s[10],N=s[14],H=s[3],$=s[7],U=s[11],V=s[15];return r[0]=o*R+a*T+l*P+c*H,r[4]=o*w+a*k+l*F+c*$,r[8]=o*X+a*q+l*Y+c*U,r[12]=o*M+a*J+l*N+c*V,r[1]=u*R+h*T+f*P+m*H,r[5]=u*w+h*k+f*F+m*$,r[9]=u*X+h*q+f*Y+m*U,r[13]=u*M+h*J+f*N+m*V,r[2]=_*R+g*T+p*P+d*H,r[6]=_*w+g*k+p*F+d*$,r[10]=_*X+g*q+p*Y+d*U,r[14]=_*M+g*J+p*N+d*V,r[3]=b*R+x*T+E*P+L*H,r[7]=b*w+x*k+E*F+L*$,r[11]=b*X+x*q+E*Y+L*U,r[15]=b*M+x*J+E*N+L*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],d=e[15];return _*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*m-n*l*m)+g*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+t*c*h-t*a*m-r*o*h+n*o*m+r*a*u-n*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],d=e[15],b=h*p*c-g*f*c+g*l*m-a*p*m-h*l*d+a*f*d,x=_*f*c-u*p*c-_*l*m+o*p*m+u*l*d-o*f*d,E=u*g*c-_*h*c+_*a*m-o*g*m-u*a*d+o*h*d,L=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,R=t*b+n*x+s*E+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=b*w,e[1]=(g*f*r-h*p*r-g*s*m+n*p*m+h*s*d-n*f*d)*w,e[2]=(a*p*r-g*l*r+g*s*c-n*p*c-a*s*d+n*l*d)*w,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*m-n*l*m)*w,e[4]=x*w,e[5]=(u*p*r-_*f*r+_*s*m-t*p*m-u*s*d+t*f*d)*w,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*d-t*l*d)*w,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*m+t*l*m)*w,e[8]=E*w,e[9]=(_*h*r-u*g*r-_*n*m+t*g*m+u*n*d-t*h*d)*w,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*d+t*a*d)*w,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*m-t*a*m)*w,e[12]=L*w,e[13]=(u*g*s-_*h*s+_*n*f-t*g*f-u*n*p+t*h*p)*w,e[14]=(_*a*s-o*g*s-_*n*l+t*g*l+o*n*p-t*a*p)*w,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,_=r*h,g=o*u,p=o*h,d=a*h,b=l*c,x=l*u,E=l*h,L=n.x,R=n.y,w=n.z;return s[0]=(1-(g+d))*L,s[1]=(m+E)*L,s[2]=(_-x)*L,s[3]=0,s[4]=(m-E)*R,s[5]=(1-(f+d))*R,s[6]=(p+b)*R,s[7]=0,s[8]=(_+x)*w,s[9]=(p-b)*w,s[10]=(1-(f+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ri.set(s[0],s[1],s[2]).length();const o=ri.set(s[4],s[5],s[6]).length(),a=ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qt.copy(this);const c=1/r,u=1/o,h=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Qt){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let m,_;if(a===Qt)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ji)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Qt){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,m=(n+s)*u;let _,g;if(a===Qt)_=(o+r)*h,g=-2*h;else if(a===ji)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ri=new D,qt=new st,af=new D(0,0,0),of=new D(1,1,1),yn=new D,ms=new D,Dt=new D,Co=new st,Lo=new Dn;class ts{constructor(e=0,t=0,n=0,s=ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Co.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Co,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lo.setFromEuler(this),this.setFromQuaternion(Lo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ts.DEFAULT_ORDER="XYZ";class sr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lf=0;const Po=new D,ai=new Dn,on=new st,_s=new D,Fi=new D,cf=new D,uf=new Dn,Do=new D(1,0,0),Uo=new D(0,1,0),Io=new D(0,0,1),ff={type:"added"},hf={type:"removed"};class ft extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new D,t=new ts,n=new Dn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new He}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this}rotateOnWorldAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this}rotateX(e){return this.rotateOnAxis(Do,e)}rotateY(e){return this.rotateOnAxis(Uo,e)}rotateZ(e){return this.rotateOnAxis(Io,e)}translateOnAxis(e,t){return Po.copy(e).applyQuaternion(this.quaternion),this.position.add(Po.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Do,e)}translateY(e){return this.translateOnAxis(Uo,e)}translateZ(e){return this.translateOnAxis(Io,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_s.copy(e):_s.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Fi,_s,this.up):on.lookAt(_s,Fi,this.up),this.quaternion.setFromRotationMatrix(on),s&&(on.extractRotation(s.matrixWorld),ai.setFromRotationMatrix(on),this.quaternion.premultiply(ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ff)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,e,cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ft.DEFAULT_UP=new D(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new D,ln=new D,Er=new D,cn=new D,oi=new D,li=new D,No=new D,Tr=new D,wr=new D,Ar=new D;let gs=!1;class Nt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yt.subVectors(e,t),s.cross(Yt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yt.subVectors(s,t),ln.subVectors(n,t),Er.subVectors(e,t);const o=Yt.dot(Yt),a=Yt.dot(ln),l=Yt.dot(Er),c=ln.dot(ln),u=ln.dot(Er),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getUV(e,t,n,s,r,o,a,l){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(o,cn.y),l.addScaledVector(a,cn.z),l)}static isFrontFacing(e,t,n,s){return Yt.subVectors(n,t),ln.subVectors(e,t),Yt.cross(ln).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Yt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),Nt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return Nt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Nt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;oi.subVectors(s,n),li.subVectors(r,n),Tr.subVectors(e,n);const l=oi.dot(Tr),c=li.dot(Tr);if(l<=0&&c<=0)return t.copy(n);wr.subVectors(e,s);const u=oi.dot(wr),h=li.dot(wr);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(oi,o);Ar.subVectors(e,r);const m=oi.dot(Ar),_=li.dot(Ar);if(_>=0&&m<=_)return t.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(li,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return No.subVectors(r,s),a=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector(No,a);const d=1/(p+g+f);return o=g*d,a=f*d,t.copy(n).addScaledVector(oi,o).addScaledVector(li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Rr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Ja(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Rr(o,r,e+1/3),this.g=Rr(o,r,e),this.b=Rr(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){const n=Gc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return Ke.fromWorkingColorSpace(Mt.copy(this),e),Math.round(St(Mt.r*255,0,255))*65536+Math.round(St(Mt.g*255,0,255))*256+Math.round(St(Mt.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,s=Mt.g,r=Mt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=ct){Ke.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,s=Mt.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(vs);const n=Gi(Sn.h,vs.h,t),s=Gi(Sn.s,vs.s,t),r=Gi(Sn.l,vs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Ue;Ue.NAMES=Gc;let df=0;class Qn extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Yn,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qs,this.blendDst=Ys,this.blendEquation=wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ta,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qs&&(n.blendSrc=this.blendSrc),this.blendDst!==Ys&&(n.blendDst=this.blendDst),this.blendEquation!==wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ta&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jn extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new D,xs=new Ae;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wa&&(e.usage=this.usage),e}}class no extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class io extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pf=0;const zt=new st,Cr=new ft,ci=new D,Ut=new Ci,Oi=new Ci,mt=new D;class Lt extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oc(e)?io:no)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ut.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Oi.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Ut.min,Oi.min),Ut.expandByPoint(mt),mt.addVectors(Ut.max,Oi.max),Ut.expandByPoint(mt)):(Ut.expandByPoint(Oi.min),Ut.expandByPoint(Oi.max))}Ut.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(ci.fromBufferAttribute(e,c),mt.add(ci)),s=Math.max(s,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new D,u[T]=new D;const h=new D,f=new D,m=new D,_=new Ae,g=new Ae,p=new Ae,d=new D,b=new D;function x(T,k,q){h.fromArray(s,T*3),f.fromArray(s,k*3),m.fromArray(s,q*3),_.fromArray(o,T*2),g.fromArray(o,k*2),p.fromArray(o,q*2),f.sub(h),m.sub(h),g.sub(_),p.sub(_);const J=1/(g.x*p.y-p.x*g.y);isFinite(J)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(J),b.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(J),c[T].add(d),c[k].add(d),c[q].add(d),u[T].add(b),u[k].add(b),u[q].add(b))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let T=0,k=E.length;T<k;++T){const q=E[T],J=q.start,P=q.count;for(let F=J,Y=J+P;F<Y;F+=3)x(n[F+0],n[F+1],n[F+2])}const L=new D,R=new D,w=new D,X=new D;function M(T){w.fromArray(r,T*3),X.copy(w);const k=c[T];L.copy(k),L.sub(w.multiplyScalar(w.dot(k))).normalize(),R.crossVectors(X,k);const J=R.dot(u[T])<0?-1:1;l[T*4]=L.x,l[T*4+1]=L.y,l[T*4+2]=L.z,l[T*4+3]=J}for(let T=0,k=E.length;T<k;++T){const q=E[T],J=q.start,P=q.count;for(let F=J,Y=J+P;F<Y;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let d=0;d<u;d++)f[_++]=c[m++]}return new Wt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fo=new st,Bn=new es,Ms=new Qi,Oo=new D,ui=new D,fi=new D,hi=new D,Lr=new D,ys=new D,Ss=new Ae,bs=new Ae,Es=new Ae,ko=new D,zo=new D,Bo=new D,Ts=new D,ws=new D;class et extends ft{constructor(e=new Lt,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Lr.fromBufferAttribute(h,e),o?ys.addScaledVector(Lr,u):ys.addScaledVector(Lr.sub(t),u))}t.add(ys)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(r),Bn.copy(e.ray).recast(e.near),!(Ms.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(Ms,Oo)===null||Bn.origin.distanceToSquared(Oo)>(e.far-e.near)**2))&&(Fo.copy(r).invert(),Bn.copy(e.ray).applyMatrix4(Fo),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,L=x;E<L;E+=3){const R=a.getX(E),w=a.getX(E+1),X=a.getX(E+2);s=As(this,d,e,n,c,u,h,R,w,X),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const b=a.getX(p),x=a.getX(p+1),E=a.getX(p+2);s=As(this,o,e,n,c,u,h,b,x,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,L=x;E<L;E+=3){const R=E,w=E+1,X=E+2;s=As(this,d,e,n,c,u,h,R,w,X),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const b=p,x=p+1,E=p+2;s=As(this,o,e,n,c,u,h,b,x,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function mf(i,e,t,n,s,r,o,a){let l;if(e.side===wt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===_n,a),l===null)return null;ws.copy(a),ws.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ws);return c<t.near||c>t.far?null:{distance:c,point:ws.clone(),object:i}}function As(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ui),i.getVertexPosition(l,fi),i.getVertexPosition(c,hi);const u=mf(i,e,t,n,ui,fi,hi,Ts);if(u){s&&(Ss.fromBufferAttribute(s,a),bs.fromBufferAttribute(s,l),Es.fromBufferAttribute(s,c),u.uv=Nt.getInterpolation(Ts,ui,fi,hi,Ss,bs,Es,new Ae)),r&&(Ss.fromBufferAttribute(r,a),bs.fromBufferAttribute(r,l),Es.fromBufferAttribute(r,c),u.uv1=Nt.getInterpolation(Ts,ui,fi,hi,Ss,bs,Es,new Ae),u.uv2=u.uv1),o&&(ko.fromBufferAttribute(o,a),zo.fromBufferAttribute(o,l),Bo.fromBufferAttribute(o,c),u.normal=Nt.getInterpolation(Ts,ui,fi,hi,ko,zo,Bo,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};Nt.getNormal(ui,fi,hi,h.normal),u.face=h}return u}class Li extends Lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function _(g,p,d,b,x,E,L,R,w,X,M){const T=E/w,k=L/X,q=E/2,J=L/2,P=R/2,F=w+1,Y=X+1;let N=0,H=0;const $=new D;for(let U=0;U<Y;U++){const V=U*k-J;for(let Z=0;Z<F;Z++){const B=Z*T-q;$[g]=B*b,$[p]=V*x,$[d]=P,c.push($.x,$.y,$.z),$[g]=0,$[p]=0,$[d]=R>0?1:-1,u.push($.x,$.y,$.z),h.push(Z/w),h.push(1-U/X),N+=1}}for(let U=0;U<X;U++)for(let V=0;V<w;V++){const Z=f+V+F*U,B=f+V+F*(U+1),K=f+(V+1)+F*(U+1),ae=f+(V+1)+F*U;l.push(Z,B,ae),l.push(B,K,ae),H+=6}a.addGroup(m,H,M),m+=H,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=Ai(i[t]);for(const s in n)e[s]=n[s]}return e}function _f(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hc(i){return i.getRenderTarget()===null?i.outputColorSpace:Ke.workingColorSpace}const Vc={clone:Ai,merge:Et};var gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gf,this.fragmentShader=vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=_f(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class so extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Qt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ft extends so{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(Mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const di=-90,pi=1;class Wc extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ft(di,pi,e,t);s.layers=this.layers,this.add(s);const r=new Ft(di,pi,e,t);r.layers=this.layers,this.add(r);const o=new Ft(di,pi,e,t);o.layers=this.layers,this.add(o);const a=new Ft(di,pi,e,t);a.layers=this.layers,this.add(a);const l=new Ft(di,pi,e,t);l.layers=this.layers,this.add(l);const c=new Ft(di,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Qt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ro extends At{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:$n,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xc extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Hi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Cn?ct:Ot),this.texture=new ro(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Li(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:dn});r.uniforms.tEquirect.value=t;const o=new et(s,r),a=t.minFilter;return t.minFilter===Ti&&(t.minFilter=It),new Wc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Pr=new D,xf=new D,Mf=new He;class Jt{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Pr.subVectors(n,t).cross(xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mf.getNormalMatrix(e),s=this.coplanarPoint(Pr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new Qi,Rs=new D;class rr{constructor(e=new Jt,t=new Jt,n=new Jt,s=new Jt,r=new Jt,o=new Jt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qt){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],d=s[12],b=s[13],x=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,p-m,E-d).normalize(),n[1].setComponents(l+r,f+c,p+m,E+d).normalize(),n[2].setComponents(l+o,f+u,p+_,E+b).normalize(),n[3].setComponents(l-o,f-u,p-_,E-b).normalize(),n[4].setComponents(l-a,f-h,p-g,E-x).normalize(),t===Qt)n[5].setComponents(l+a,f+h,p+g,E+x).normalize();else if(t===ji)n[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Rs.x=s.normal.x>0?e.max.x:e.min.x,Rs.y=s.normal.y>0?e.max.y:e.min.y,Rs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qc(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function yf(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,f=c.usage,m=h.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,h){const f=u.array,m=u._updateRange,_=u.updateRanges;if(i.bindBuffer(h,c),m.count===-1&&_.length===0&&i.bufferSubData(h,0,f),_.length!==0){for(let g=0,p=_.length;g<p;g++){const d=_[g];t?i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class ns extends Lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,m=[],_=[],g=[],p=[];for(let d=0;d<u;d++){const b=d*f-o;for(let x=0;x<c;x++){const E=x*h-r;_.push(E,-b,0),g.push(0,0,1),p.push(x/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){const x=b+c*d,E=b+c*(d+1),L=b+1+c*(d+1),R=b+1+c*d;m.push(x,E,R),m.push(E,L,R)}this.setIndex(m),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(g,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bf=`#ifdef USE_ALPHAHASH
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
#endif`,Ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
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
#endif`,Cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lf=`#ifdef USE_BATCHING
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
#endif`,Pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,If=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ff=`#ifdef USE_BUMPMAP
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xf=`#define PI 3.141592653589793
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
} // validated`,qf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yf=`vec3 transformedNormal = objectNormal;
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
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qf=`
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
}`,eh=`#ifdef USE_ENVMAP
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
#endif`,th=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nh=`#ifdef USE_ENVMAP
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
#endif`,ih=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sh=`#ifdef USE_ENVMAP
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
#endif`,rh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ah=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ch=`#ifdef USE_GRADIENTMAP
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
}`,uh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ph=`uniform bool receiveShadow;
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
#endif`,mh=`#ifdef USE_ENVMAP
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
#endif`,_h=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mh=`PhysicalMaterial material;
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
#endif`,yh=`struct PhysicalMaterial {
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
}`,Sh=`
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
#endif`,bh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Th=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ah=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ch=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ph=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dh=`#if defined( USE_POINTS_UV )
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
#endif`,Uh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ih=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fh=`#ifdef USE_MORPHNORMALS
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
#endif`,Oh=`#ifdef USE_MORPHTARGETS
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
#endif`,kh=`#ifdef USE_MORPHTARGETS
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
#endif`,zh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wh=`#ifdef USE_NORMALMAP
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
#endif`,Xh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$h=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ed=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ad=`float getShadowMask() {
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
}`,od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ld=`#ifdef USE_SKINNING
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
#endif`,cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ud=`#ifdef USE_SKINNING
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
#endif`,fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,md=`#ifdef USE_TRANSMISSION
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
#endif`,_d=`#ifdef USE_TRANSMISSION
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
#endif`,gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sd=`uniform sampler2D t2D;
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
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ed=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`#include <common>
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
}`,Rd=`#if DEPTH_PACKING == 3200
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
}`,Cd=`#define DISTANCE
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
}`,Ld=`#define DISTANCE
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
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`uniform float scale;
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
}`,Id=`uniform vec3 diffuse;
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
}`,Nd=`#include <common>
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
}`,Fd=`uniform vec3 diffuse;
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
}`,Od=`#define LAMBERT
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
}`,kd=`#define LAMBERT
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
}`,zd=`#define MATCAP
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
}`,Bd=`#define MATCAP
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
}`,Gd=`#define NORMAL
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
}`,Hd=`#define NORMAL
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
}`,Vd=`#define PHONG
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
}`,Wd=`#define PHONG
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
}`,Xd=`#define STANDARD
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
}`,qd=`#define STANDARD
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
}`,Yd=`#define TOON
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
}`,jd=`#define TOON
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
}`,$d=`uniform float size;
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
}`,Kd=`uniform vec3 diffuse;
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
}`,Zd=`#include <common>
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
}`,Jd=`uniform vec3 color;
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
}`,Qd=`uniform float rotation;
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
}`,ep=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Sf,alphahash_pars_fragment:bf,alphamap_fragment:Ef,alphamap_pars_fragment:Tf,alphatest_fragment:wf,alphatest_pars_fragment:Af,aomap_fragment:Rf,aomap_pars_fragment:Cf,batching_pars_vertex:Lf,batching_vertex:Pf,begin_vertex:Df,beginnormal_vertex:Uf,bsdfs:If,iridescence_fragment:Nf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Of,clipping_planes_pars_fragment:kf,clipping_planes_pars_vertex:zf,clipping_planes_vertex:Bf,color_fragment:Gf,color_pars_fragment:Hf,color_pars_vertex:Vf,color_vertex:Wf,common:Xf,cube_uv_reflection_fragment:qf,defaultnormal_vertex:Yf,displacementmap_pars_vertex:jf,displacementmap_vertex:$f,emissivemap_fragment:Kf,emissivemap_pars_fragment:Zf,colorspace_fragment:Jf,colorspace_pars_fragment:Qf,envmap_fragment:eh,envmap_common_pars_fragment:th,envmap_pars_fragment:nh,envmap_pars_vertex:ih,envmap_physical_pars_fragment:mh,envmap_vertex:sh,fog_vertex:rh,fog_pars_vertex:ah,fog_fragment:oh,fog_pars_fragment:lh,gradientmap_pars_fragment:ch,lightmap_fragment:uh,lightmap_pars_fragment:fh,lights_lambert_fragment:hh,lights_lambert_pars_fragment:dh,lights_pars_begin:ph,lights_toon_fragment:_h,lights_toon_pars_fragment:gh,lights_phong_fragment:vh,lights_phong_pars_fragment:xh,lights_physical_fragment:Mh,lights_physical_pars_fragment:yh,lights_fragment_begin:Sh,lights_fragment_maps:bh,lights_fragment_end:Eh,logdepthbuf_fragment:Th,logdepthbuf_pars_fragment:wh,logdepthbuf_pars_vertex:Ah,logdepthbuf_vertex:Rh,map_fragment:Ch,map_pars_fragment:Lh,map_particle_fragment:Ph,map_particle_pars_fragment:Dh,metalnessmap_fragment:Uh,metalnessmap_pars_fragment:Ih,morphcolor_vertex:Nh,morphnormal_vertex:Fh,morphtarget_pars_vertex:Oh,morphtarget_vertex:kh,normal_fragment_begin:zh,normal_fragment_maps:Bh,normal_pars_fragment:Gh,normal_pars_vertex:Hh,normal_vertex:Vh,normalmap_pars_fragment:Wh,clearcoat_normal_fragment_begin:Xh,clearcoat_normal_fragment_maps:qh,clearcoat_pars_fragment:Yh,iridescence_pars_fragment:jh,opaque_fragment:$h,packing:Kh,premultiplied_alpha_fragment:Zh,project_vertex:Jh,dithering_fragment:Qh,dithering_pars_fragment:ed,roughnessmap_fragment:td,roughnessmap_pars_fragment:nd,shadowmap_pars_fragment:id,shadowmap_pars_vertex:sd,shadowmap_vertex:rd,shadowmask_pars_fragment:ad,skinbase_vertex:od,skinning_pars_vertex:ld,skinning_vertex:cd,skinnormal_vertex:ud,specularmap_fragment:fd,specularmap_pars_fragment:hd,tonemapping_fragment:dd,tonemapping_pars_fragment:pd,transmission_fragment:md,transmission_pars_fragment:_d,uv_pars_fragment:gd,uv_pars_vertex:vd,uv_vertex:xd,worldpos_vertex:Md,background_vert:yd,background_frag:Sd,backgroundCube_vert:bd,backgroundCube_frag:Ed,cube_vert:Td,cube_frag:wd,depth_vert:Ad,depth_frag:Rd,distanceRGBA_vert:Cd,distanceRGBA_frag:Ld,equirect_vert:Pd,equirect_frag:Dd,linedashed_vert:Ud,linedashed_frag:Id,meshbasic_vert:Nd,meshbasic_frag:Fd,meshlambert_vert:Od,meshlambert_frag:kd,meshmatcap_vert:zd,meshmatcap_frag:Bd,meshnormal_vert:Gd,meshnormal_frag:Hd,meshphong_vert:Vd,meshphong_frag:Wd,meshphysical_vert:Xd,meshphysical_frag:qd,meshtoon_vert:Yd,meshtoon_frag:jd,points_vert:$d,points_frag:Kd,shadow_vert:Zd,shadow_frag:Jd,sprite_vert:Qd,sprite_frag:ep},oe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},jt={basic:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Et([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Et([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Et([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Et([oe.points,oe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Et([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Et([oe.common,oe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Et([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Et([oe.sprite,oe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Et([oe.common,oe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Et([oe.lights,oe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};jt.physical={uniforms:Et([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Cs={r:0,b:0,g:0};function tp(i,e,t,n,s,r,o){const a=new Ue(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function _(p,d){let b=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),b=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Zi)?(u===void 0&&(u=new et(new Li(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ai(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(x.colorSpace)!==Ze,(h!==x||f!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new et(new ns(2,2),new Un({name:"BackgroundMaterial",uniforms:Ai(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(x.colorSpace)!==Ze,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,d){p.getRGB(Cs,Hc(i)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function np(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(P,F,Y,N,H){let $=!1;if(o){const U=g(N,Y,F);c!==U&&(c=U,m(c.object)),$=d(P,N,Y,H),$&&b(P,N,Y,H)}else{const U=F.wireframe===!0;(c.geometry!==N.id||c.program!==Y.id||c.wireframe!==U)&&(c.geometry=N.id,c.program=Y.id,c.wireframe=U,$=!0)}H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,X(P,F,Y,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function g(P,F,Y){const N=Y.wireframe===!0;let H=a[P.id];H===void 0&&(H={},a[P.id]=H);let $=H[F.id];$===void 0&&($={},H[F.id]=$);let U=$[N];return U===void 0&&(U=p(f()),$[N]=U),U}function p(P){const F=[],Y=[],N=[];for(let H=0;H<s;H++)F[H]=0,Y[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:N,object:P,attributes:{},index:null}}function d(P,F,Y,N){const H=c.attributes,$=F.attributes;let U=0;const V=Y.getAttributes();for(const Z in V)if(V[Z].location>=0){const K=H[Z];let ae=$[Z];if(ae===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;U++}return c.attributesNum!==U||c.index!==N}function b(P,F,Y,N){const H={},$=F.attributes;let U=0;const V=Y.getAttributes();for(const Z in V)if(V[Z].location>=0){let K=$[Z];K===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));const ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),H[Z]=ae,U++}c.attributes=H,c.attributesNum=U,c.index=N}function x(){const P=c.newAttributes;for(let F=0,Y=P.length;F<Y;F++)P[F]=0}function E(P){L(P,0)}function L(P,F){const Y=c.newAttributes,N=c.enabledAttributes,H=c.attributeDivisors;Y[P]=1,N[P]===0&&(i.enableVertexAttribArray(P),N[P]=1),H[P]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),H[P]=F)}function R(){const P=c.newAttributes,F=c.enabledAttributes;for(let Y=0,N=F.length;Y<N;Y++)F[Y]!==P[Y]&&(i.disableVertexAttribArray(Y),F[Y]=0)}function w(P,F,Y,N,H,$,U){U===!0?i.vertexAttribIPointer(P,F,Y,H,$):i.vertexAttribPointer(P,F,Y,N,H,$)}function X(P,F,Y,N){if(n.isWebGL2===!1&&(P.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const H=N.attributes,$=Y.getAttributes(),U=F.defaultAttributeValues;for(const V in $){const Z=$[V];if(Z.location>=0){let B=H[V];if(B===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(B=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(B=P.instanceColor)),B!==void 0){const K=B.normalized,ae=B.itemSize,ve=t.get(B);if(ve===void 0)continue;const _e=ve.buffer,Pe=ve.type,De=ve.bytesPerElement,Ee=n.isWebGL2===!0&&(Pe===i.INT||Pe===i.UNSIGNED_INT||B.gpuType===Ha);if(B.isInterleavedBufferAttribute){const Xe=B.data,z=Xe.stride,_t=B.offset;if(Xe.isInstancedInterleavedBuffer){for(let ye=0;ye<Z.locationSize;ye++)L(Z.location+ye,Xe.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let ye=0;ye<Z.locationSize;ye++)E(Z.location+ye);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let ye=0;ye<Z.locationSize;ye++)w(Z.location+ye,ae/Z.locationSize,Pe,K,z*De,(_t+ae/Z.locationSize*ye)*De,Ee)}else{if(B.isInstancedBufferAttribute){for(let Xe=0;Xe<Z.locationSize;Xe++)L(Z.location+Xe,B.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Xe=0;Xe<Z.locationSize;Xe++)E(Z.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Xe=0;Xe<Z.locationSize;Xe++)w(Z.location+Xe,ae/Z.locationSize,Pe,K,ae*De,ae/Z.locationSize*Xe*De,Ee)}}else if(U!==void 0){const K=U[V];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(Z.location,K);break;case 3:i.vertexAttrib3fv(Z.location,K);break;case 4:i.vertexAttrib4fv(Z.location,K);break;default:i.vertexAttrib1fv(Z.location,K)}}}}R()}function M(){q();for(const P in a){const F=a[P];for(const Y in F){const N=F[Y];for(const H in N)_(N[H].object),delete N[H];delete F[Y]}delete a[P]}}function T(P){if(a[P.id]===void 0)return;const F=a[P.id];for(const Y in F){const N=F[Y];for(const H in N)_(N[H].object),delete N[H];delete F[Y]}delete a[P.id]}function k(P){for(const F in a){const Y=a[F];if(Y[P.id]===void 0)continue;const N=Y[P.id];for(const H in N)_(N[H].object),delete N[H];delete Y[P.id]}}function q(){J(),u=!0,c!==l&&(c=l,m(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:E,disableUnusedAttributes:R}}function ip(i,e,t,n){const s=n.isWebGL2;let r;function o(u){r=u}function a(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,f){if(f===0)return;let m,_;if(s)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,u,h,f),t.update(h,r,f)}function c(u,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(u[_],h[_]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function sp(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=o||e.has("OES_texture_float"),L=x&&E,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:L,maxSamples:R}}function rp(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Jt,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||s;return s=f,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,d=i.get(h);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const b=r?0:n,x=b*4;let E=d.clippingState||null;l.value=E,E=u(_,f,x,m);for(let L=0;L!==x;++L)E[L]=t[L];d.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const d=m+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,E=m;x!==g;++x,E+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function ap(i){let e=new WeakMap;function t(o,a){return a===js?o.mapping=$n:a===$s&&(o.mapping=Kn),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===js||a===$s)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xc(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ar extends so{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vi=4,Go=[.125,.215,.35,.446,.526,.582],qn=20,Dr=new ar,Ho=new Ue;let Ur=null,Ir=0,Nr=0;const Xn=(1+Math.sqrt(5))/2,mi=1/Xn,Vo=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Xn,mi),new D(0,Xn,-mi),new D(mi,0,Xn),new D(-mi,0,Xn),new D(Xn,mi,0),new D(-Xn,mi,0)];class Ca{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ur=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ur,Ir,Nr),e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$n||e.mapping===Kn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ur=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:wi,format:Ht,colorSpace:nn,depthBuffer:!1},s=Wo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=op(r)),this._blurMaterial=lp(r,e,t)}return s}_compileMaterial(e){const t=new et(this._lodPlanes[0],e);this._renderer.compile(t,Dr)}_sceneToCubeUV(e,t,n,s){const a=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ho),u.toneMapping=pn,u.autoClear=!1;const m=new Jn({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),_=new et(new Li,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Ho),g=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;Ls(s,b*x,d>2?x:0,x,x),u.setRenderTarget(s),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===$n||e.mapping===Kn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xo());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ls(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Dr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vo[(s-1)%Vo.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new et(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*qn-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):qn;p>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qn}`);const d=[];let b=0;for(let w=0;w<qn;++w){const X=w/g,M=Math.exp(-X*X/2);d.push(M),w===0?b+=M:w<p&&(b+=2*M)}for(let w=0;w<d.length;w++)d[w]=d[w]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const E=this._sizeLods[s],L=3*E*(s>x-vi?s-x+vi:0),R=4*(this._cubeSize-E);Ls(t,L,R,3*E,2*E),l.setRenderTarget(t),l.render(h,Dr)}}function op(i){const e=[],t=[],n=[];let s=i;const r=i-vi+1+Go.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-vi?l=Go[o-i+vi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,g=3,p=2,d=1,b=new Float32Array(g*_*m),x=new Float32Array(p*_*m),E=new Float32Array(d*_*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,X=R>2?0:-1,M=[w,X,0,w+2/3,X,0,w+2/3,X+1,0,w,X,0,w+2/3,X+1,0,w,X+1,0];b.set(M,g*_*R),x.set(f,p*_*R);const T=[R,R,R,R,R,R];E.set(T,d*_*R)}const L=new Lt;L.setAttribute("position",new Wt(b,g)),L.setAttribute("uv",new Wt(x,p)),L.setAttribute("faceIndex",new Wt(E,d)),e.push(L),s>vi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wo(i,e,t){const n=new Pn(i,e,t);return n.texture.mapping=Zi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function lp(i,e,t){const n=new Float32Array(qn),s=new D(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ao(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Xo(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function qo(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function ao(){return`

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
	`}function cp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===js||l===$s,u=l===$n||l===Kn;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ca(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Ca(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function up(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function fp(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,d=g.length;p<d;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,d=g.length;p<d;p++)e.update(g[p],i.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let x=0,E=b.length;x<E;x+=3){const L=b[x+0],R=b[x+1],w=b[x+2];f.push(L,R,R,w,w,L)}}else if(_!==void 0){const b=_.array;g=_.version;for(let x=0,E=b.length/3-1;x<E;x+=3){const L=x+0,R=x+1,w=x+2;f.push(L,R,R,w,w,L)}}else return;const p=new(Oc(f)?io:no)(f,1);p.version=g;const d=r.get(h);d&&e.remove(d),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function hp(i,e,t,n){const s=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,_){i.drawElements(r,_,a,m*l),t.update(_,r,1)}function h(m,_,g){if(g===0)return;let p,d;if(s)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,_,a,m*l,g),t.update(_,r,g)}function f(m,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<g;d++)this.render(m[d]/l,_[d]);else{p.multiDrawElementsWEBGL(r,_,0,a,m,0,g);let d=0;for(let b=0;b<g;b++)d+=_[b];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function dp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function pp(i,e){return i[0]-e[0]}function mp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function _p(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new Qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(u);if(p===void 0||p.count!==g){let F=function(){J.dispose(),r.delete(u),u.removeEventListener("dispose",F)};var m=F;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],X=u.morphAttributes.color||[];let M=0;x===!0&&(M=1),E===!0&&(M=2),L===!0&&(M=3);let T=u.attributes.position.count*M,k=1;T>e.maxTextureSize&&(k=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const q=new Float32Array(T*k*4*g),J=new to(q,T,k,g);J.type=hn,J.needsUpdate=!0;const P=M*4;for(let Y=0;Y<g;Y++){const N=R[Y],H=w[Y],$=X[Y],U=T*k*4*Y;for(let V=0;V<N.count;V++){const Z=V*P;x===!0&&(o.fromBufferAttribute(N,V),q[U+Z+0]=o.x,q[U+Z+1]=o.y,q[U+Z+2]=o.z,q[U+Z+3]=0),E===!0&&(o.fromBufferAttribute(H,V),q[U+Z+4]=o.x,q[U+Z+5]=o.y,q[U+Z+6]=o.z,q[U+Z+7]=0),L===!0&&(o.fromBufferAttribute($,V),q[U+Z+8]=o.x,q[U+Z+9]=o.y,q[U+Z+10]=o.z,q[U+Z+11]=$.itemSize===4?o.w:1)}}p={count:g,texture:J,size:new Ae(T,k)},r.set(u,p),u.addEventListener("dispose",F)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const b=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let E=0;E<_;E++)g[E]=[E,0];n[u.id]=g}for(let E=0;E<_;E++){const L=g[E];L[0]=E,L[1]=f[E]}g.sort(mp);for(let E=0;E<8;E++)E<_&&g[E][1]?(a[E][0]=g[E][0],a[E][1]=g[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(pp);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let b=0;for(let E=0;E<8;E++){const L=a[E],R=L[0],w=L[1];R!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+E)!==p[R]&&u.setAttribute("morphTarget"+E,p[R]),d&&u.getAttribute("morphNormal"+E)!==d[R]&&u.setAttribute("morphNormal"+E,d[R]),s[E]=w,b+=w):(p&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),d&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),s[E]=0)}const x=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function gp(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class oo extends At{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:Rn,u!==Rn&&u!==Zn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Rn&&(n=fn),n===void 0&&u===Zn&&(n=An),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yc=new At,jc=new oo(1,1);jc.compareFunction=Za;const $c=new to,Kc=new Bc,Zc=new ro,Yo=[],jo=[],$o=new Float32Array(16),Ko=new Float32Array(9),Zo=new Float32Array(4);function Pi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Yo[s];if(r===void 0&&(r=new Float32Array(s),Yo[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function or(i,e){let t=jo[e];t===void 0&&(t=new Int32Array(e),jo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function Sp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Zo.set(n),i.uniformMatrix2fv(this.addr,!1,Zo),dt(t,n)}}function bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Ko.set(n),i.uniformMatrix3fv(this.addr,!1,Ko),dt(t,n)}}function Ep(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;$o.set(n),i.uniformMatrix4fv(this.addr,!1,$o),dt(t,n)}}function Tp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function Rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function Cp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function Up(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?jc:Yc;t.setTexture2D(e||r,s)}function Ip(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kc,s)}function Np(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Zc,s)}function Fp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$c,s)}function Op(i){switch(i){case 5126:return vp;case 35664:return xp;case 35665:return Mp;case 35666:return yp;case 35674:return Sp;case 35675:return bp;case 35676:return Ep;case 5124:case 35670:return Tp;case 35667:case 35671:return wp;case 35668:case 35672:return Ap;case 35669:case 35673:return Rp;case 5125:return Cp;case 36294:return Lp;case 36295:return Pp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Fp}}function kp(i,e){i.uniform1fv(this.addr,e)}function zp(i,e){const t=Pi(e,this.size,2);i.uniform2fv(this.addr,t)}function Bp(i,e){const t=Pi(e,this.size,3);i.uniform3fv(this.addr,t)}function Gp(i,e){const t=Pi(e,this.size,4);i.uniform4fv(this.addr,t)}function Hp(i,e){const t=Pi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vp(i,e){const t=Pi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wp(i,e){const t=Pi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xp(i,e){i.uniform1iv(this.addr,e)}function qp(i,e){i.uniform2iv(this.addr,e)}function Yp(i,e){i.uniform3iv(this.addr,e)}function jp(i,e){i.uniform4iv(this.addr,e)}function $p(i,e){i.uniform1uiv(this.addr,e)}function Kp(i,e){i.uniform2uiv(this.addr,e)}function Zp(i,e){i.uniform3uiv(this.addr,e)}function Jp(i,e){i.uniform4uiv(this.addr,e)}function Qp(i,e,t){const n=this.cache,s=e.length,r=or(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Yc,r[o])}function em(i,e,t){const n=this.cache,s=e.length,r=or(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Kc,r[o])}function tm(i,e,t){const n=this.cache,s=e.length,r=or(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Zc,r[o])}function nm(i,e,t){const n=this.cache,s=e.length,r=or(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$c,r[o])}function im(i){switch(i){case 5126:return kp;case 35664:return zp;case 35665:return Bp;case 35666:return Gp;case 35674:return Hp;case 35675:return Vp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return jp;case 5125:return $p;case 36294:return Kp;case 36295:return Zp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return nm}}class sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Op(t.type)}}class rm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=im(t.type)}}class am{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function Jo(i,e){i.seq.push(e),i.map[e.id]=e}function om(i,e,t){const n=i.name,s=n.length;for(Fr.lastIndex=0;;){const r=Fr.exec(n),o=Fr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jo(t,c===void 0?new sm(a,i,e):new rm(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new am(a),Jo(t,h)),t=h}}}class Ws{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);om(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Qo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const lm=37297;let cm=0;function um(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function fm(i){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(i);let n;switch(e===t?n="":e===Yi&&t===qi?n="LinearDisplayP3ToLinearSRGB":e===qi&&t===Yi&&(n="LinearSRGBToLinearDisplayP3"),i){case nn:case Ji:return[n,"LinearTransferOETF"];case ct:case ir:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function el(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+um(i.getShaderSource(e),o)}else return s}function hm(i,e){const t=fm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function dm(i,e){let t;switch(e){case hc:t="Linear";break;case dc:t="Reinhard";break;case pc:t="OptimizedCineon";break;case mc:t="ACESFilmic";break;case gc:t="AgX";break;case _c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xi).join(`
`)}function mm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xi).join(`
`)}function _m(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function xi(i){return i!==""}function tl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(i){return i.replace(vm,Mm)}const xm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Mm(i,e){let t=ke[e];if(t===void 0){const n=xm.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return La(t)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function il(i){return i.replace(ym,Sm)}function Sm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===za?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ba?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kt&&(e="SHADOWMAP_TYPE_VSM"),e}function Em(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $n:case Kn:e="ENVMAP_TYPE_CUBE";break;case Zi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Kn:e="ENVMAP_MODE_REFRACTION";break}return e}function wm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tr:e="ENVMAP_BLENDING_MULTIPLY";break;case uc:e="ENVMAP_BLENDING_MIX";break;case fc:e="ENVMAP_BLENDING_ADD";break}return e}function Am(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Rm(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=bm(t),c=Em(t),u=Tm(t),h=wm(t),f=Am(t),m=t.isWebGL2?"":pm(t),_=mm(t),g=_m(r),p=s.createProgram();let d,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xi).join(`
`),d.length>0&&(d+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xi).join(`
`),b.length>0&&(b+=`
`)):(d=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xi).join(`
`),b=[m,sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?ke.tonemapping_pars_fragment:"",t.toneMapping!==pn?dm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,hm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xi).join(`
`)),o=La(o),o=tl(o,t),o=nl(o,t),a=La(a),a=tl(a,t),a=nl(a,t),o=il(o),a=il(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const E=x+d+o,L=x+b+a,R=Qo(s,s.VERTEX_SHADER,E),w=Qo(s,s.FRAGMENT_SHADER,L);s.attachShader(p,R),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function X(q){if(i.debug.checkShaderErrors){const J=s.getProgramInfoLog(p).trim(),P=s.getShaderInfoLog(R).trim(),F=s.getShaderInfoLog(w).trim();let Y=!0,N=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,R,w);else{const H=el(s,R,"vertex"),$=el(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+H+`
`+$)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||F==="")&&(N=!1);N&&(q.diagnostics={runnable:Y,programLog:J,vertexShader:{log:P,prefix:d},fragmentShader:{log:F,prefix:b}})}s.deleteShader(R),s.deleteShader(w),M=new Ws(s,p),T=gm(s,p)}let M;this.getUniforms=function(){return M===void 0&&X(this),M};let T;this.getAttributes=function(){return T===void 0&&X(this),T};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(p,lm)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=w,this}let Cm=0;class Lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Pm(e),t.set(e,n)),n}}class Pm{constructor(e){this.id=Cm++,this.code=e,this.usedTimes=0}}function Dm(i,e,t,n,s,r,o){const a=new sr,l=new Lm,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function p(M,T,k,q,J){const P=q.fog,F=J.geometry,Y=M.isMeshStandardMaterial?q.environment:null,N=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),H=N&&N.mapping===Zi?N.image.height:null,$=_[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const U=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,V=U!==void 0?U.length:0;let Z=0;F.morphAttributes.position!==void 0&&(Z=1),F.morphAttributes.normal!==void 0&&(Z=2),F.morphAttributes.color!==void 0&&(Z=3);let B,K,ae,ve;if($){const rt=jt[$];B=rt.vertexShader,K=rt.fragmentShader}else B=M.vertexShader,K=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),ve=l.getFragmentShaderID(M);const _e=i.getRenderTarget(),Pe=J.isInstancedMesh===!0,De=J.isBatchedMesh===!0,Ee=!!M.map,Xe=!!M.matcap,z=!!N,_t=!!M.aoMap,ye=!!M.lightMap,Re=!!M.bumpMap,pe=!!M.normalMap,Je=!!M.displacementMap,Ne=!!M.emissiveMap,S=!!M.metalnessMap,v=!!M.roughnessMap,O=M.anisotropy>0,ne=M.clearcoat>0,ee=M.iridescence>0,ie=M.sheen>0,me=M.transmission>0,ce=O&&!!M.anisotropyMap,de=ne&&!!M.clearcoatMap,be=ne&&!!M.clearcoatNormalMap,Fe=ne&&!!M.clearcoatRoughnessMap,Q=ee&&!!M.iridescenceMap,$e=ee&&!!M.iridescenceThicknessMap,ze=ie&&!!M.sheenColorMap,Ce=ie&&!!M.sheenRoughnessMap,Me=!!M.specularMap,ue=!!M.specularColorMap,A=!!M.specularIntensityMap,se=me&&!!M.transmissionMap,ge=me&&!!M.thicknessMap,he=!!M.gradientMap,te=!!M.alphaMap,C=M.alphaTest>0,re=!!M.alphaHash,le=!!M.extensions,Te=!!F.attributes.uv1,Se=!!F.attributes.uv2,qe=!!F.attributes.uv3;let Ye=pn;return M.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ye=i.toneMapping),{isWebGL2:u,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:K,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:De,instancing:Pe,instancingColor:Pe&&J.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:nn,map:Ee,matcap:Xe,envMap:z,envMapMode:z&&N.mapping,envMapCubeUVHeight:H,aoMap:_t,lightMap:ye,bumpMap:Re,normalMap:pe,displacementMap:f&&Je,emissiveMap:Ne,normalMapObjectSpace:pe&&M.normalMapType===Cc,normalMapTangentSpace:pe&&M.normalMapType===Ka,metalnessMap:S,roughnessMap:v,anisotropy:O,anisotropyMap:ce,clearcoat:ne,clearcoatMap:de,clearcoatNormalMap:be,clearcoatRoughnessMap:Fe,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:$e,sheen:ie,sheenColorMap:ze,sheenRoughnessMap:Ce,specularMap:Me,specularColorMap:ue,specularIntensityMap:A,transmission:me,transmissionMap:se,thicknessMap:ge,gradientMap:he,opaque:M.transparent===!1&&M.blending===Yn,alphaMap:te,alphaTest:C,alphaHash:re,combine:M.combine,mapUv:Ee&&g(M.map.channel),aoMapUv:_t&&g(M.aoMap.channel),lightMapUv:ye&&g(M.lightMap.channel),bumpMapUv:Re&&g(M.bumpMap.channel),normalMapUv:pe&&g(M.normalMap.channel),displacementMapUv:Je&&g(M.displacementMap.channel),emissiveMapUv:Ne&&g(M.emissiveMap.channel),metalnessMapUv:S&&g(M.metalnessMap.channel),roughnessMapUv:v&&g(M.roughnessMap.channel),anisotropyMapUv:ce&&g(M.anisotropyMap.channel),clearcoatMapUv:de&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(M.sheenRoughnessMap.channel),specularMapUv:Me&&g(M.specularMap.channel),specularColorMapUv:ue&&g(M.specularColorMap.channel),specularIntensityMapUv:A&&g(M.specularIntensityMap.channel),transmissionMapUv:se&&g(M.transmissionMap.channel),thicknessMapUv:ge&&g(M.thicknessMap.channel),alphaMapUv:te&&g(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(pe||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Se,vertexUv3s:qe,pointsUvs:J.isPoints===!0&&!!F.attributes.uv&&(Ee||te),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ee&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===Ze,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bt,flipSided:M.side===wt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:le&&M.extensions.derivatives===!0,extensionFragDepth:le&&M.extensions.fragDepth===!0,extensionDrawBuffers:le&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)T.push(k),T.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(b(T,M),x(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function b(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function E(M){const T=_[M.type];let k;if(T){const q=jt[T];k=Vc.clone(q.uniforms)}else k=M.uniforms;return k}function L(M,T){let k;for(let q=0,J=c.length;q<J;q++){const P=c[q];if(P.cacheKey===T){k=P,++k.usedTimes;break}}return k===void 0&&(k=new Rm(i,T,M,r),c.push(k)),k}function R(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function X(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:L,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:X}}function Um(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Im(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function al(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,m,_,g,p){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=g,d.group=p),e++,d}function a(h,f,m,_,g,p){const d=o(h,f,m,_,g,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(h,f,m,_,g,p){const d=o(h,f,m,_,g,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Im),n.length>1&&n.sort(f||rl),s.length>1&&s.sort(f||rl)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Nm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new al,i.set(n,[o])):s>=r.length?(o=new al,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ue};break;case"SpotLight":t={position:new D,direction:new D,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Om(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let km=0;function zm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Bm(i,e){const t=new Fm,n=Om(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new D);const r=new D,o=new st,a=new st;function l(u,h){let f=0,m=0,_=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let g=0,p=0,d=0,b=0,x=0,E=0,L=0,R=0,w=0,X=0,M=0;u.sort(zm);const T=h===!0?Math.PI:1;for(let q=0,J=u.length;q<J;q++){const P=u[q],F=P.color,Y=P.intensity,N=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=F.r*Y*T,m+=F.g*Y*T,_+=F.b*Y*T;else if(P.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(P.sh.coefficients[$],Y);M++}else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const U=P.shadow,V=n.get(P);V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,s.directionalShadow[g]=V,s.directionalShadowMap[g]=H,s.directionalShadowMatrix[g]=P.shadow.matrix,E++}s.directional[g]=$,g++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(F).multiplyScalar(Y*T),$.distance=N,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,s.spot[d]=$;const U=P.shadow;if(P.map&&(s.spotLightMap[w]=P.map,w++,U.updateMatrices(P),P.castShadow&&X++),s.spotLightMatrix[d]=U.matrix,P.castShadow){const V=n.get(P);V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,s.spotShadow[d]=V,s.spotShadowMap[d]=H,R++}d++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(F).multiplyScalar(Y),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),s.rectArea[b]=$,b++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*T),$.distance=P.distance,$.decay=P.decay,P.castShadow){const U=P.shadow,V=n.get(P);V.shadowBias=U.bias,V.shadowNormalBias=U.normalBias,V.shadowRadius=U.radius,V.shadowMapSize=U.mapSize,V.shadowCameraNear=U.camera.near,V.shadowCameraFar=U.camera.far,s.pointShadow[p]=V,s.pointShadowMap[p]=H,s.pointShadowMatrix[p]=P.shadow.matrix,L++}s.point[p]=$,p++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(Y*T),$.groundColor.copy(P.groundColor).multiplyScalar(Y*T),s.hemi[x]=$,x++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;const k=s.hash;(k.directionalLength!==g||k.pointLength!==p||k.spotLength!==d||k.rectAreaLength!==b||k.hemiLength!==x||k.numDirectionalShadows!==E||k.numPointShadows!==L||k.numSpotShadows!==R||k.numSpotMaps!==w||k.numLightProbes!==M)&&(s.directional.length=g,s.spot.length=d,s.rectArea.length=b,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=R+w-X,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=X,s.numLightProbes=M,k.directionalLength=g,k.pointLength=p,k.spotLength=d,k.rectAreaLength=b,k.hemiLength=x,k.numDirectionalShadows=E,k.numPointShadows=L,k.numSpotShadows=R,k.numSpotMaps=w,k.numLightProbes=M,s.version=km++)}function c(u,h){let f=0,m=0,_=0,g=0,p=0;const d=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){const E=u[b];if(E.isDirectionalLight){const L=s.directional[f];L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),f++}else if(E.isSpotLight){const L=s.spot[_];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),_++}else if(E.isRectAreaLight){const L=s.rectArea[g];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const L=s.point[m];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){const L=s.hemi[p];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function ol(i,e){const t=new Bm(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Gm(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new ol(i,e),t.set(r,[l])):o>=a.length?(l=new ol(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Jc extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ac,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qc extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vm=`uniform sampler2D shadow_pass;
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
}`;function Wm(i,e,t){let n=new rr;const s=new Ae,r=new Ae,o=new Qe,a=new Jc({depthPacking:Rc}),l=new Qc,c={},u=t.maxTextureSize,h={[_n]:wt,[wt]:_n,[Bt]:Bt},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Hm,fragmentShader:Vm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Lt;_.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new et(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=za;let d=this.type;this.render=function(R,w,X){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),T=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),q=i.state;q.setBlending(dn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const J=d!==Kt&&this.type===Kt,P=d===Kt&&this.type!==Kt;for(let F=0,Y=R.length;F<Y;F++){const N=R[F],H=N.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const $=H.getFrameExtents();if(s.multiply($),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,H.mapSize.y=r.y)),H.map===null||J===!0||P===!0){const V=this.type!==Kt?{minFilter:yt,magFilter:yt}:{};H.map!==null&&H.map.dispose(),H.map=new Pn(s.x,s.y,V),H.map.texture.name=N.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const U=H.getViewportCount();for(let V=0;V<U;V++){const Z=H.getViewport(V);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),q.viewport(o),H.updateMatrices(N,V),n=H.getFrustum(),E(w,X,H.camera,N,this.type)}H.isPointLightShadow!==!0&&this.type===Kt&&b(H,X),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(M,T,k)};function b(R,w){const X=e.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Pn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,X,f,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,X,m,g,null)}function x(R,w,X,M){let T=null;const k=X.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)T=k;else if(T=X.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const q=T.uuid,J=w.uuid;let P=c[q];P===void 0&&(P={},c[q]=P);let F=P[J];F===void 0&&(F=T.clone(),P[J]=F,w.addEventListener("dispose",L)),T=F}if(T.visible=w.visible,T.wireframe=w.wireframe,M===Kt?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:h[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,X.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=i.properties.get(T);q.light=X}return T}function E(R,w,X,M,T){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===Kt)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld);const J=e.update(R),P=R.material;if(Array.isArray(P)){const F=J.groups;for(let Y=0,N=F.length;Y<N;Y++){const H=F[Y],$=P[H.materialIndex];if($&&$.visible){const U=x(R,$,M,T);R.onBeforeShadow(i,R,w,X,J,U,H),i.renderBufferDirect(X,null,J,U,R,H),R.onAfterShadow(i,R,w,X,J,U,H)}}}else if(P.visible){const F=x(R,P,M,T);R.onBeforeShadow(i,R,w,X,J,F,null),i.renderBufferDirect(X,null,J,F,R,null),R.onAfterShadow(i,R,w,X,J,F,null)}}const q=R.children;for(let J=0,P=q.length;J<P;J++)E(q[J],w,X,M,T)}function L(R){R.target.removeEventListener("dispose",L);for(const X in c){const M=c[X],T=R.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function Xm(i,e,t){const n=t.isWebGL2;function s(){let C=!1;const re=new Qe;let le=null;const Te=new Qe(0,0,0,0);return{setMask:function(Se){le!==Se&&!C&&(i.colorMask(Se,Se,Se,Se),le=Se)},setLocked:function(Se){C=Se},setClear:function(Se,qe,Ye,nt,rt){rt===!0&&(Se*=nt,qe*=nt,Ye*=nt),re.set(Se,qe,Ye,nt),Te.equals(re)===!1&&(i.clearColor(Se,qe,Ye,nt),Te.copy(re))},reset:function(){C=!1,le=null,Te.set(-1,0,0,0)}}}function r(){let C=!1,re=null,le=null,Te=null;return{setTest:function(Se){Se?De(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(Se){re!==Se&&!C&&(i.depthMask(Se),re=Se)},setFunc:function(Se){if(le!==Se){switch(Se){case ic:i.depthFunc(i.NEVER);break;case sc:i.depthFunc(i.ALWAYS);break;case rc:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case ac:i.depthFunc(i.EQUAL);break;case oc:i.depthFunc(i.GEQUAL);break;case lc:i.depthFunc(i.GREATER);break;case cc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Se}},setLocked:function(Se){C=Se},setClear:function(Se){Te!==Se&&(i.clearDepth(Se),Te=Se)},reset:function(){C=!1,re=null,le=null,Te=null}}}function o(){let C=!1,re=null,le=null,Te=null,Se=null,qe=null,Ye=null,nt=null,rt=null;return{setTest:function(je){C||(je?De(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(je){re!==je&&!C&&(i.stencilMask(je),re=je)},setFunc:function(je,ot,$t){(le!==je||Te!==ot||Se!==$t)&&(i.stencilFunc(je,ot,$t),le=je,Te=ot,Se=$t)},setOp:function(je,ot,$t){(qe!==je||Ye!==ot||nt!==$t)&&(i.stencilOp(je,ot,$t),qe=je,Ye=ot,nt=$t)},setLocked:function(je){C=je},setClear:function(je){rt!==je&&(i.clearStencil(je),rt=je)},reset:function(){C=!1,re=null,le=null,Te=null,Se=null,qe=null,Ye=null,nt=null,rt=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,g=[],p=null,d=!1,b=null,x=null,E=null,L=null,R=null,w=null,X=null,M=new Ue(0,0,0),T=0,k=!1,q=null,J=null,P=null,F=null,Y=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(U)[1]),H=$>=1):U.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),H=$>=2);let V=null,Z={};const B=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ae=new Qe().fromArray(B),ve=new Qe().fromArray(K);function _e(C,re,le,Te){const Se=new Uint8Array(4),qe=i.createTexture();i.bindTexture(C,qe),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<le;Ye++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(re,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(re+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return qe}const Pe={};Pe[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(i.DEPTH_TEST),l.setFunc(Wi),Ne(!1),S(Yr),De(i.CULL_FACE),pe(dn);function De(C){f[C]!==!0&&(i.enable(C),f[C]=!0)}function Ee(C){f[C]!==!1&&(i.disable(C),f[C]=!1)}function Xe(C,re){return m[C]!==re?(i.bindFramebuffer(C,re),m[C]=re,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=re),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=re)),!0):!1}function z(C,re){let le=g,Te=!1;if(C)if(le=_.get(re),le===void 0&&(le=[],_.set(re,le)),C.isWebGLMultipleRenderTargets){const Se=C.texture;if(le.length!==Se.length||le[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,Ye=Se.length;qe<Ye;qe++)le[qe]=i.COLOR_ATTACHMENT0+qe;le.length=Se.length,Te=!0}}else le[0]!==i.COLOR_ATTACHMENT0&&(le[0]=i.COLOR_ATTACHMENT0,Te=!0);else le[0]!==i.BACK&&(le[0]=i.BACK,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function _t(C){return p!==C?(i.useProgram(C),p=C,!0):!1}const ye={[wn]:i.FUNC_ADD,[Hl]:i.FUNC_SUBTRACT,[Vl]:i.FUNC_REVERSE_SUBTRACT};if(n)ye[Zr]=i.MIN,ye[Jr]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(ye[Zr]=C.MIN_EXT,ye[Jr]=C.MAX_EXT)}const Re={[Wl]:i.ZERO,[Xl]:i.ONE,[ql]:i.SRC_COLOR,[qs]:i.SRC_ALPHA,[Jl]:i.SRC_ALPHA_SATURATE,[Kl]:i.DST_COLOR,[jl]:i.DST_ALPHA,[Yl]:i.ONE_MINUS_SRC_COLOR,[Ys]:i.ONE_MINUS_SRC_ALPHA,[Zl]:i.ONE_MINUS_DST_COLOR,[$l]:i.ONE_MINUS_DST_ALPHA,[Ql]:i.CONSTANT_COLOR,[ec]:i.ONE_MINUS_CONSTANT_COLOR,[tc]:i.CONSTANT_ALPHA,[nc]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(C,re,le,Te,Se,qe,Ye,nt,rt,je){if(C===dn){d===!0&&(Ee(i.BLEND),d=!1);return}if(d===!1&&(De(i.BLEND),d=!0),C!==Gl){if(C!==b||je!==k){if((x!==wn||R!==wn)&&(i.blendEquation(i.FUNC_ADD),x=wn,R=wn),je)switch(C){case Yn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.ONE,i.ONE);break;case $r:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $r:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,L=null,w=null,X=null,M.set(0,0,0),T=0,b=C,k=je}return}Se=Se||re,qe=qe||le,Ye=Ye||Te,(re!==x||Se!==R)&&(i.blendEquationSeparate(ye[re],ye[Se]),x=re,R=Se),(le!==E||Te!==L||qe!==w||Ye!==X)&&(i.blendFuncSeparate(Re[le],Re[Te],Re[qe],Re[Ye]),E=le,L=Te,w=qe,X=Ye),(nt.equals(M)===!1||rt!==T)&&(i.blendColor(nt.r,nt.g,nt.b,rt),M.copy(nt),T=rt),b=C,k=!1}function Je(C,re){C.side===Bt?Ee(i.CULL_FACE):De(i.CULL_FACE);let le=C.side===wt;re&&(le=!le),Ne(le),C.blending===Yn&&C.transparent===!1?pe(dn):pe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const Te=C.stencilWrite;c.setTest(Te),Te&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),O(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?De(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(C){q!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),q=C)}function S(C){C!==zl?(De(i.CULL_FACE),C!==J&&(C===Yr?i.cullFace(i.BACK):C===Bl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),J=C}function v(C){C!==P&&(H&&i.lineWidth(C),P=C)}function O(C,re,le){C?(De(i.POLYGON_OFFSET_FILL),(F!==re||Y!==le)&&(i.polygonOffset(re,le),F=re,Y=le)):Ee(i.POLYGON_OFFSET_FILL)}function ne(C){C?De(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function ee(C){C===void 0&&(C=i.TEXTURE0+N-1),V!==C&&(i.activeTexture(C),V=C)}function ie(C,re,le){le===void 0&&(V===null?le=i.TEXTURE0+N-1:le=V);let Te=Z[le];Te===void 0&&(Te={type:void 0,texture:void 0},Z[le]=Te),(Te.type!==C||Te.texture!==re)&&(V!==le&&(i.activeTexture(le),V=le),i.bindTexture(C,re||Pe[C]),Te.type=C,Te.texture=re)}function me(){const C=Z[V];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ce(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function A(C){ae.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ae.copy(C))}function se(C){ve.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ve.copy(C))}function ge(C,re){let le=h.get(re);le===void 0&&(le=new WeakMap,h.set(re,le));let Te=le.get(C);Te===void 0&&(Te=i.getUniformBlockIndex(re,C.name),le.set(C,Te))}function he(C,re){const Te=h.get(re).get(C);u.get(re)!==Te&&(i.uniformBlockBinding(re,Te,C.__bindingPointIndex),u.set(re,Te))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},V=null,Z={},m={},_=new WeakMap,g=[],p=null,d=!1,b=null,x=null,E=null,L=null,R=null,w=null,X=null,M=new Ue(0,0,0),T=0,k=!1,q=null,J=null,P=null,F=null,Y=null,ae.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:Ee,bindFramebuffer:Xe,drawBuffers:z,useProgram:_t,setBlending:pe,setMaterial:Je,setFlipSided:Ne,setCullFace:S,setLineWidth:v,setPolygonOffset:O,setScissorTest:ne,activeTexture:ee,bindTexture:ie,unbindTexture:me,compressedTexImage2D:ce,compressedTexImage3D:de,texImage2D:Me,texImage3D:ue,updateUBOMapping:ge,uniformBlockBinding:he,texStorage2D:ze,texStorage3D:Ce,texSubImage2D:be,texSubImage3D:Fe,compressedTexSubImage2D:Q,compressedTexSubImage3D:$e,scissor:A,viewport:se,reset:te}}function qm(i,e,t,n,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return m?new OffscreenCanvas(S,v):Qs("canvas")}function g(S,v,O,ne){let ee=1;if((S.width>ne||S.height>ne)&&(ee=ne/Math.max(S.width,S.height)),ee<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ie=v?Js:Math.floor,me=ie(ee*S.width),ce=ie(ee*S.height);h===void 0&&(h=_(me,ce));const de=O?_(me,ce):h;return de.width=me,de.height=ce,de.getContext("2d").drawImage(S,0,0,me,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+me+"x"+ce+")."),de}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return Ra(S.width)&&Ra(S.height)}function d(S){return a?!1:S.wrapS!==Gt||S.wrapT!==Gt||S.minFilter!==yt&&S.minFilter!==It}function b(S,v){return S.generateMipmaps&&v&&S.minFilter!==yt&&S.minFilter!==It}function x(S){i.generateMipmap(S)}function E(S,v,O,ne,ee=!1){if(a===!1)return v;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ie=v;if(v===i.RED&&(O===i.FLOAT&&(ie=i.R32F),O===i.HALF_FLOAT&&(ie=i.R16F),O===i.UNSIGNED_BYTE&&(ie=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(ie=i.R8UI),O===i.UNSIGNED_SHORT&&(ie=i.R16UI),O===i.UNSIGNED_INT&&(ie=i.R32UI),O===i.BYTE&&(ie=i.R8I),O===i.SHORT&&(ie=i.R16I),O===i.INT&&(ie=i.R32I)),v===i.RG&&(O===i.FLOAT&&(ie=i.RG32F),O===i.HALF_FLOAT&&(ie=i.RG16F),O===i.UNSIGNED_BYTE&&(ie=i.RG8)),v===i.RGBA){const me=ee?Xi:Ke.getTransfer(ne);O===i.FLOAT&&(ie=i.RGBA32F),O===i.HALF_FLOAT&&(ie=i.RGBA16F),O===i.UNSIGNED_BYTE&&(ie=me===Ze?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function L(S,v,O){return b(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==yt&&S.minFilter!==It?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function R(S){return S===yt||S===Qr||S===ks?i.NEAREST:i.LINEAR}function w(S){const v=S.target;v.removeEventListener("dispose",w),M(v),v.isVideoTexture&&u.delete(v)}function X(S){const v=S.target;v.removeEventListener("dispose",X),k(v)}function M(S){const v=n.get(S);if(v.__webglInit===void 0)return;const O=S.source,ne=f.get(O);if(ne){const ee=ne[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(S),Object.keys(ne).length===0&&f.delete(O)}n.remove(S)}function T(S){const v=n.get(S);i.deleteTexture(v.__webglTexture);const O=S.source,ne=f.get(O);delete ne[v.__cacheKey],o.memory.textures--}function k(S){const v=S.texture,O=n.get(S),ne=n.get(v);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(O.__webglFramebuffer[ee]))for(let ie=0;ie<O.__webglFramebuffer[ee].length;ie++)i.deleteFramebuffer(O.__webglFramebuffer[ee][ie]);else i.deleteFramebuffer(O.__webglFramebuffer[ee]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[ee])}else{if(Array.isArray(O.__webglFramebuffer))for(let ee=0;ee<O.__webglFramebuffer.length;ee++)i.deleteFramebuffer(O.__webglFramebuffer[ee]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ee=0;ee<O.__webglColorRenderbuffer.length;ee++)O.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[ee]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ee=0,ie=v.length;ee<ie;ee++){const me=n.get(v[ee]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(v[ee])}n.remove(v),n.remove(S)}let q=0;function J(){q=0}function P(){const S=q;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),q+=1,S}function F(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function Y(S,v){const O=n.get(S);if(S.isVideoTexture&&Je(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){const ne=S.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(O,S,v);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function N(S,v){const O=n.get(S);if(S.version>0&&O.__version!==S.version){ae(O,S,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function H(S,v){const O=n.get(S);if(S.version>0&&O.__version!==S.version){ae(O,S,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function $(S,v){const O=n.get(S);if(S.version>0&&O.__version!==S.version){ve(O,S,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const U={[Ei]:i.REPEAT,[Gt]:i.CLAMP_TO_EDGE,[Ks]:i.MIRRORED_REPEAT},V={[yt]:i.NEAREST,[Qr]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[vc]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},Z={[Lc]:i.NEVER,[Fc]:i.ALWAYS,[Pc]:i.LESS,[Za]:i.LEQUAL,[Dc]:i.EQUAL,[Nc]:i.GEQUAL,[Uc]:i.GREATER,[Ic]:i.NOTEQUAL};function B(S,v,O){if(O?(i.texParameteri(S,i.TEXTURE_WRAP_S,U[v.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,U[v.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,U[v.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,V[v.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,V[v.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Gt||v.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,R(v.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,R(v.minFilter)),v.minFilter!==yt&&v.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Z[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===yt||v.minFilter!==ks&&v.minFilter!==Ti||v.type===hn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===wi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(S,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function K(S,v){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",w));const ne=v.source;let ee=f.get(ne);ee===void 0&&(ee={},f.set(ne,ee));const ie=F(v);if(ie!==S.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[ie].usedTimes++;const me=ee[S.__cacheKey];me!==void 0&&(ee[S.__cacheKey].usedTimes--,me.usedTimes===0&&T(v)),S.__cacheKey=ie,S.__webglTexture=ee[ie].texture}return O}function ae(S,v,O){let ne=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=i.TEXTURE_3D);const ee=K(S,v),ie=v.source;t.bindTexture(ne,S.__webglTexture,i.TEXTURE0+O);const me=n.get(ie);if(ie.version!==me.__version||ee===!0){t.activeTexture(i.TEXTURE0+O);const ce=Ke.getPrimaries(Ke.workingColorSpace),de=v.colorSpace===Ot?null:Ke.getPrimaries(v.colorSpace),be=v.colorSpace===Ot||ce===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Fe=d(v)&&p(v.image)===!1;let Q=g(v.image,Fe,!1,s.maxTextureSize);Q=Ne(v,Q);const $e=p(Q)||a,ze=r.convert(v.format,v.colorSpace);let Ce=r.convert(v.type),Me=E(v.internalFormat,ze,Ce,v.colorSpace,v.isVideoTexture);B(ne,v,$e);let ue;const A=v.mipmaps,se=a&&v.isVideoTexture!==!0&&Me!==ja,ge=me.__version===void 0||ee===!0,he=L(v,Q,$e);if(v.isDepthTexture)Me=i.DEPTH_COMPONENT,a?v.type===hn?Me=i.DEPTH_COMPONENT32F:v.type===fn?Me=i.DEPTH_COMPONENT24:v.type===An?Me=i.DEPTH24_STENCIL8:Me=i.DEPTH_COMPONENT16:v.type===hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Rn&&Me===i.DEPTH_COMPONENT&&v.type!==nr&&v.type!==fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=fn,Ce=r.convert(v.type)),v.format===Zn&&Me===i.DEPTH_COMPONENT&&(Me=i.DEPTH_STENCIL,v.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=An,Ce=r.convert(v.type))),ge&&(se?t.texStorage2D(i.TEXTURE_2D,1,Me,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Me,Q.width,Q.height,0,ze,Ce,null));else if(v.isDataTexture)if(A.length>0&&$e){se&&ge&&t.texStorage2D(i.TEXTURE_2D,he,Me,A[0].width,A[0].height);for(let te=0,C=A.length;te<C;te++)ue=A[te],se?t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ze,Ce,ue.data):t.texImage2D(i.TEXTURE_2D,te,Me,ue.width,ue.height,0,ze,Ce,ue.data);v.generateMipmaps=!1}else se?(ge&&t.texStorage2D(i.TEXTURE_2D,he,Me,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ze,Ce,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Me,Q.width,Q.height,0,ze,Ce,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){se&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Me,A[0].width,A[0].height,Q.depth);for(let te=0,C=A.length;te<C;te++)ue=A[te],v.format!==Ht?ze!==null?se?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,Q.depth,ze,ue.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Me,ue.width,ue.height,Q.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,Q.depth,ze,Ce,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Me,ue.width,ue.height,Q.depth,0,ze,Ce,ue.data)}else{se&&ge&&t.texStorage2D(i.TEXTURE_2D,he,Me,A[0].width,A[0].height);for(let te=0,C=A.length;te<C;te++)ue=A[te],v.format!==Ht?ze!==null?se?t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ze,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Me,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ze,Ce,ue.data):t.texImage2D(i.TEXTURE_2D,te,Me,ue.width,ue.height,0,ze,Ce,ue.data)}else if(v.isDataArrayTexture)se?(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Me,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ze,Ce,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,Q.width,Q.height,Q.depth,0,ze,Ce,Q.data);else if(v.isData3DTexture)se?(ge&&t.texStorage3D(i.TEXTURE_3D,he,Me,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ze,Ce,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Me,Q.width,Q.height,Q.depth,0,ze,Ce,Q.data);else if(v.isFramebufferTexture){if(ge)if(se)t.texStorage2D(i.TEXTURE_2D,he,Me,Q.width,Q.height);else{let te=Q.width,C=Q.height;for(let re=0;re<he;re++)t.texImage2D(i.TEXTURE_2D,re,Me,te,C,0,ze,Ce,null),te>>=1,C>>=1}}else if(A.length>0&&$e){se&&ge&&t.texStorage2D(i.TEXTURE_2D,he,Me,A[0].width,A[0].height);for(let te=0,C=A.length;te<C;te++)ue=A[te],se?t.texSubImage2D(i.TEXTURE_2D,te,0,0,ze,Ce,ue):t.texImage2D(i.TEXTURE_2D,te,Me,ze,Ce,ue);v.generateMipmaps=!1}else se?(ge&&t.texStorage2D(i.TEXTURE_2D,he,Me,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,Ce,Q)):t.texImage2D(i.TEXTURE_2D,0,Me,ze,Ce,Q);b(v,$e)&&x(ne),me.__version=ie.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ve(S,v,O){if(v.image.length!==6)return;const ne=K(S,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+O);const ie=n.get(ee);if(ee.version!==ie.__version||ne===!0){t.activeTexture(i.TEXTURE0+O);const me=Ke.getPrimaries(Ke.workingColorSpace),ce=v.colorSpace===Ot?null:Ke.getPrimaries(v.colorSpace),de=v.colorSpace===Ot||me===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const be=v.isCompressedTexture||v.image[0].isCompressedTexture,Fe=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let te=0;te<6;te++)!be&&!Fe?Q[te]=g(v.image[te],!1,!0,s.maxCubemapSize):Q[te]=Fe?v.image[te].image:v.image[te],Q[te]=Ne(v,Q[te]);const $e=Q[0],ze=p($e)||a,Ce=r.convert(v.format,v.colorSpace),Me=r.convert(v.type),ue=E(v.internalFormat,Ce,Me,v.colorSpace),A=a&&v.isVideoTexture!==!0,se=ie.__version===void 0||ne===!0;let ge=L(v,$e,ze);B(i.TEXTURE_CUBE_MAP,v,ze);let he;if(be){A&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,ue,$e.width,$e.height);for(let te=0;te<6;te++){he=Q[te].mipmaps;for(let C=0;C<he.length;C++){const re=he[C];v.format!==Ht?Ce!==null?A?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,C,0,0,re.width,re.height,Ce,re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,C,ue,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,C,0,0,re.width,re.height,Ce,Me,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,C,ue,re.width,re.height,0,Ce,Me,re.data)}}}else{he=v.mipmaps,A&&se&&(he.length>0&&ge++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,ue,Q[0].width,Q[0].height));for(let te=0;te<6;te++)if(Fe){A?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Q[te].width,Q[te].height,Ce,Me,Q[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,Q[te].width,Q[te].height,0,Ce,Me,Q[te].data);for(let C=0;C<he.length;C++){const le=he[C].image[te].image;A?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,C+1,0,0,le.width,le.height,Ce,Me,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,C+1,ue,le.width,le.height,0,Ce,Me,le.data)}}else{A?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ce,Me,Q[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,Ce,Me,Q[te]);for(let C=0;C<he.length;C++){const re=he[C];A?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,C+1,0,0,Ce,Me,re.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,C+1,ue,Ce,Me,re.image[te])}}}b(v,ze)&&x(i.TEXTURE_CUBE_MAP),ie.__version=ee.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function _e(S,v,O,ne,ee,ie){const me=r.convert(O.format,O.colorSpace),ce=r.convert(O.type),de=E(O.internalFormat,me,ce,O.colorSpace);if(!n.get(v).__hasExternalTextures){const Fe=Math.max(1,v.width>>ie),Q=Math.max(1,v.height>>ie);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,de,Fe,Q,v.depth,0,me,ce,null):t.texImage2D(ee,ie,de,Fe,Q,0,me,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),pe(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,n.get(O).__webglTexture,0,Re(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,n.get(O).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(S,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let ne=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||pe(v)){const ee=v.depthTexture;ee&&ee.isDepthTexture&&(ee.type===hn?ne=i.DEPTH_COMPONENT32F:ee.type===fn&&(ne=i.DEPTH_COMPONENT24));const ie=Re(v);pe(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,ne,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,ne,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){const ne=Re(v);O&&pe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,v.width,v.height):pe(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{const ne=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ee=0;ee<ne.length;ee++){const ie=ne[ee],me=r.convert(ie.format,ie.colorSpace),ce=r.convert(ie.type),de=E(ie.internalFormat,me,ce,ie.colorSpace),be=Re(v);O&&pe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,de,v.width,v.height):pe(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,de,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,de,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const ne=n.get(v.depthTexture).__webglTexture,ee=Re(v);if(v.depthTexture.format===Rn)pe(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(v.depthTexture.format===Zn)pe(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ee(S){const v=n.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");De(v.__webglFramebuffer,S)}else if(O){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]=i.createRenderbuffer(),Pe(v.__webglDepthbuffer[ne],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Pe(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(S,v,O){const ne=n.get(S);v!==void 0&&_e(ne.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ee(S)}function z(S){const v=S.texture,O=n.get(S),ne=n.get(v);S.addEventListener("dispose",X),S.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=v.version,o.memory.textures++);const ee=S.isWebGLCubeRenderTarget===!0,ie=S.isWebGLMultipleRenderTargets===!0,me=p(S)||a;if(ee){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let de=0;de<v.mipmaps.length;de++)O.__webglFramebuffer[ce][de]=i.createFramebuffer()}else O.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)O.__webglFramebuffer[ce]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ie)if(s.drawBuffers){const ce=S.texture;for(let de=0,be=ce.length;de<be;de++){const Fe=n.get(ce[de]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&pe(S)===!1){const ce=ie?v:[v];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){const be=ce[de];O.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const Fe=r.convert(be.format,be.colorSpace),Q=r.convert(be.type),$e=E(be.internalFormat,Fe,Q,be.colorSpace,S.isXRRenderTarget===!0),ze=Re(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,$e,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,O.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),B(i.TEXTURE_CUBE_MAP,v,me);for(let ce=0;ce<6;ce++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)_e(O.__webglFramebuffer[ce][de],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else _e(O.__webglFramebuffer[ce],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);b(v,me)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const ce=S.texture;for(let de=0,be=ce.length;de<be;de++){const Fe=ce[de],Q=n.get(Fe);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),B(i.TEXTURE_2D,Fe,me),_e(O.__webglFramebuffer,S,Fe,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),b(Fe,me)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ce=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ne.__webglTexture),B(ce,v,me),a&&v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)_e(O.__webglFramebuffer[de],S,v,i.COLOR_ATTACHMENT0,ce,de);else _e(O.__webglFramebuffer,S,v,i.COLOR_ATTACHMENT0,ce,0);b(v,me)&&x(ce),t.unbindTexture()}S.depthBuffer&&Ee(S)}function _t(S){const v=p(S)||a,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0,ee=O.length;ne<ee;ne++){const ie=O[ne];if(b(ie,v)){const me=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ce=n.get(ie).__webglTexture;t.bindTexture(me,ce),x(me),t.unbindTexture()}}}function ye(S){if(a&&S.samples>0&&pe(S)===!1){const v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,ne=S.height;let ee=i.COLOR_BUFFER_BIT;const ie=[],me=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(S),de=S.isWebGLMultipleRenderTargets===!0;if(de)for(let be=0;be<v.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let be=0;be<v.length;be++){ie.push(i.COLOR_ATTACHMENT0+be),S.depthBuffer&&ie.push(me);const Fe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Fe===!1&&(S.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),de&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[be]),Fe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[me])),de){const Q=n.get(v[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,O,ne,0,0,O,ne,ee,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<v.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,ce.__webglColorRenderbuffer[be]);const Fe=n.get(v[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Re(S){return Math.min(s.maxSamples,S.samples)}function pe(S){const v=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Je(S){const v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function Ne(S,v){const O=S.colorSpace,ne=S.format,ee=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Zs||O!==nn&&O!==Ot&&(Ke.getTransfer(O)===Ze?a===!1?e.has("EXT_sRGB")===!0&&ne===Ht?(S.format=Zs,S.minFilter=It,S.generateMipmaps=!1):v=Qa.sRGBToLinear(v):(ne!==Ht||ee!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=Y,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=Xe,this.setupRenderTarget=z,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=pe}function eu(i,e,t){const n=t.isWebGL2;function s(r,o=Ot){let a;const l=Ke.getTransfer(o);if(r===mn)return i.UNSIGNED_BYTE;if(r===Va)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Wa)return i.UNSIGNED_SHORT_5_5_5_1;if(r===xc)return i.BYTE;if(r===Mc)return i.SHORT;if(r===nr)return i.UNSIGNED_SHORT;if(r===Ha)return i.INT;if(r===fn)return i.UNSIGNED_INT;if(r===hn)return i.FLOAT;if(r===wi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===yc)return i.ALPHA;if(r===Ht)return i.RGBA;if(r===Sc)return i.LUMINANCE;if(r===bc)return i.LUMINANCE_ALPHA;if(r===Rn)return i.DEPTH_COMPONENT;if(r===Zn)return i.DEPTH_STENCIL;if(r===Zs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ec)return i.RED;if(r===Xa)return i.RED_INTEGER;if(r===Tc)return i.RG;if(r===qa)return i.RG_INTEGER;if(r===Ya)return i.RGBA_INTEGER;if(r===zs||r===Bs||r===Gs||r===Hs)if(l===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===zs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===zs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ea||r===ta||r===na||r===ia)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ea)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ta)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===na)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ia)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ja)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===sa||r===ra)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===sa)return l===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ra)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===aa||r===oa||r===la||r===ca||r===ua||r===fa||r===ha||r===da||r===pa||r===ma||r===_a||r===ga||r===va||r===xa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===aa)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oa)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===la)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ca)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ua)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fa)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ha)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===da)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pa)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ma)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_a)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ga)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===va)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xa)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vs||r===Ma||r===ya)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Vs)return l===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ma)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ya)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wc||r===Sa||r===ba||r===Ea)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Vs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Sa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ba)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ea)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===An?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class tu extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ct extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ym={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),d=this._getHandJoint(c,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jm extends In{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const g=t.getContextAttributes();let p=null,d=null;const b=[],x=[],E=new Ae;let L=null;const R=new Ft;R.layers.enable(1),R.viewport=new Qe;const w=new Ft;w.layers.enable(2),w.viewport=new Qe;const X=[R,w],M=new tu;M.layers.enable(1),M.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=b[B];return K===void 0&&(K=new Or,b[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=b[B];return K===void 0&&(K=new Or,b[B]=K),K.getGripSpace()},this.getHand=function(B){let K=b[B];return K===void 0&&(K=new Or,b[B]=K),K.getHandSpace()};function q(B){const K=x.indexOf(B.inputSource);if(K===-1)return;const ae=b[K];ae!==void 0&&(ae.update(B.inputSource,B.frame,c||o),ae.dispatchEvent({type:B.type,data:B.inputSource}))}function J(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",P);for(let B=0;B<b.length;B++){const K=x[B];K!==null&&(x[B]=null,b[B].disconnect(K))}T=null,k=null,e.setRenderTarget(p),m=null,f=null,h=null,s=null,d=null,Z.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",J),s.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Pn(m.framebufferWidth,m.framebufferHeight,{format:Ht,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ae=null,ve=null;g.depth&&(ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Zn:Rn,ae=g.stencil?An:fn);const _e={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(_e),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Pn(f.textureWidth,f.textureHeight,{format:Ht,type:mn,depthTexture:new oo(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Pe=e.properties.get(d);Pe.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(B){for(let K=0;K<B.removed.length;K++){const ae=B.removed[K],ve=x.indexOf(ae);ve>=0&&(x[ve]=null,b[ve].disconnect(ae))}for(let K=0;K<B.added.length;K++){const ae=B.added[K];let ve=x.indexOf(ae);if(ve===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=x.length){x.push(ae),ve=Pe;break}else if(x[Pe]===null){x[Pe]=ae,ve=Pe;break}if(ve===-1)break}const _e=b[ve];_e&&_e.connect(ae)}}const F=new D,Y=new D;function N(B,K,ae){F.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(ae.matrixWorld);const ve=F.distanceTo(Y),_e=K.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,De=_e[14]/(_e[10]-1),Ee=_e[14]/(_e[10]+1),Xe=(_e[9]+1)/_e[5],z=(_e[9]-1)/_e[5],_t=(_e[8]-1)/_e[0],ye=(Pe[8]+1)/Pe[0],Re=De*_t,pe=De*ye,Je=ve/(-_t+ye),Ne=Je*-_t;K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ne),B.translateZ(Je),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const S=De+Je,v=Ee+Je,O=Re-Ne,ne=pe+(ve-Ne),ee=Xe*Ee/v*S,ie=z*Ee/v*S;B.projectionMatrix.makePerspective(O,ne,ee,ie,S,v),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function H(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;M.near=w.near=R.near=B.near,M.far=w.far=R.far=B.far,(T!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,k=M.far);const K=B.parent,ae=M.cameras;H(M,K);for(let ve=0;ve<ae.length;ve++)H(ae[ve],K);ae.length===2?N(M,R,w):M.projectionMatrix.copy(R.projectionMatrix),$(B,M,K)};function $(B,K,ae){ae===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(ae.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=$i*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let U=null;function V(B,K){if(u=K.getViewerPose(c||o),_=K,u!==null){const ae=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let ve=!1;ae.length!==M.cameras.length&&(M.cameras.length=0,ve=!0);for(let _e=0;_e<ae.length;_e++){const Pe=ae[_e];let De=null;if(m!==null)De=m.getViewport(Pe);else{const Xe=h.getViewSubImage(f,Pe);De=Xe.viewport,_e===0&&(e.setRenderTargetTextures(d,Xe.colorTexture,f.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(d))}let Ee=X[_e];Ee===void 0&&(Ee=new Ft,Ee.layers.enable(_e),Ee.viewport=new Qe,X[_e]=Ee),Ee.matrix.fromArray(Pe.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Pe.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(De.x,De.y,De.width,De.height),_e===0&&(M.matrix.copy(Ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ve===!0&&M.cameras.push(Ee)}}for(let ae=0;ae<b.length;ae++){const ve=x[ae],_e=b[ae];ve!==null&&_e!==void 0&&_e.update(ve,K,c||o)}U&&U(B,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const Z=new qc;Z.setAnimationLoop(V),this.setAnimationLoop=function(B){U=B},this.dispose=function(){}}}function $m(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Hc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,b,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,b,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===wt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===wt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=e.get(d).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=x*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===wt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Km(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){const E=x.program;n.uniformBlockBinding(b,E)}function c(b,x){let E=s[b.id];E===void 0&&(_(b),E=u(b),s[b.id]=E,b.addEventListener("dispose",p));const L=x.program;n.updateUBOMapping(b,L);const R=e.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function u(b){const x=h();b.__bindingPointIndex=x;const E=i.createBuffer(),L=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=s[b.id],E=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,w=E.length;R<w;R++){const X=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,T=X.length;M<T;M++){const k=X[M];if(m(k,R,M,L)===!0){const q=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let P=0;for(let F=0;F<J.length;F++){const Y=J[F],N=g(Y);typeof Y=="number"||typeof Y=="boolean"?(k.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,q+P,k.__data)):Y.isMatrix3?(k.__data[0]=Y.elements[0],k.__data[1]=Y.elements[1],k.__data[2]=Y.elements[2],k.__data[3]=0,k.__data[4]=Y.elements[3],k.__data[5]=Y.elements[4],k.__data[6]=Y.elements[5],k.__data[7]=0,k.__data[8]=Y.elements[6],k.__data[9]=Y.elements[7],k.__data[10]=Y.elements[8],k.__data[11]=0):(Y.toArray(k.__data,P),P+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,x,E,L){const R=b.value,w=x+"_"+E;if(L[w]===void 0)return typeof R=="number"||typeof R=="boolean"?L[w]=R:L[w]=R.clone(),!0;{const X=L[w];if(typeof R=="number"||typeof R=="boolean"){if(X!==R)return L[w]=R,!0}else if(X.equals(R)===!1)return X.copy(R),!0}return!1}function _(b){const x=b.uniforms;let E=0;const L=16;for(let w=0,X=x.length;w<X;w++){const M=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,k=M.length;T<k;T++){const q=M[T],J=Array.isArray(q.value)?q.value:[q.value];for(let P=0,F=J.length;P<F;P++){const Y=J[P],N=g(Y),H=E%L;H!==0&&L-H<N.boundary&&(E+=L-H),q.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=E,E+=N.storage}}}const R=E%L;return R>0&&(E+=L-R),b.__size=E,b.__cache={},this}function g(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class lo{constructor(e={}){const{canvas:t=kc(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const d=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this._useLegacyLights=!1,this.toneMapping=pn,this.toneMappingExposure=1;const x=this;let E=!1,L=0,R=0,w=null,X=-1,M=null;const T=new Qe,k=new Qe;let q=null;const J=new Ue(0);let P=0,F=t.width,Y=t.height,N=1,H=null,$=null;const U=new Qe(0,0,F,Y),V=new Qe(0,0,F,Y);let Z=!1;const B=new rr;let K=!1,ae=!1,ve=null;const _e=new st,Pe=new Ae,De=new D,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return w===null?N:1}let z=n;function _t(y,I){for(let W=0;W<y.length;W++){const j=y[W],G=t.getContext(j,I);if(G!==null)return G}return null}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${er}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",re,!1),z===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),z=_t(I,y),z===null)throw _t(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ye,Re,pe,Je,Ne,S,v,O,ne,ee,ie,me,ce,de,be,Fe,Q,$e,ze,Ce,Me,ue,A,se;function ge(){ye=new up(z),Re=new sp(z,ye,e),ye.init(Re),ue=new eu(z,ye,Re),pe=new Xm(z,ye,Re),Je=new dp(z),Ne=new Um,S=new qm(z,ye,pe,Ne,Re,ue,Je),v=new ap(x),O=new cp(x),ne=new yf(z,Re),A=new np(z,ye,ne,Re),ee=new fp(z,ne,Je,A),ie=new gp(z,ee,ne,Je),ze=new _p(z,Re,S),Fe=new rp(Ne),me=new Dm(x,v,O,ye,Re,A,Fe),ce=new $m(x,Ne),de=new Nm,be=new Gm(ye,Re),$e=new tp(x,v,O,pe,ie,f,l),Q=new Wm(x,ie,Re),se=new Km(z,Je,Re,pe),Ce=new ip(z,ye,Je,Re),Me=new hp(z,ye,Je,Re),Je.programs=me.programs,x.capabilities=Re,x.extensions=ye,x.properties=Ne,x.renderLists=de,x.shadowMap=Q,x.state=pe,x.info=Je}ge();const he=new jm(x,z);this.xr=he,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const y=ye.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ye.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(y){y!==void 0&&(N=y,this.setSize(F,Y,!1))},this.getSize=function(y){return y.set(F,Y)},this.setSize=function(y,I,W=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=y,Y=I,t.width=Math.floor(y*N),t.height=Math.floor(I*N),W===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(F*N,Y*N).floor()},this.setDrawingBufferSize=function(y,I,W){F=y,Y=I,N=W,t.width=Math.floor(y*W),t.height=Math.floor(I*W),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(T)},this.getViewport=function(y){return y.copy(U)},this.setViewport=function(y,I,W,j){y.isVector4?U.set(y.x,y.y,y.z,y.w):U.set(y,I,W,j),pe.viewport(T.copy(U).multiplyScalar(N).floor())},this.getScissor=function(y){return y.copy(V)},this.setScissor=function(y,I,W,j){y.isVector4?V.set(y.x,y.y,y.z,y.w):V.set(y,I,W,j),pe.scissor(k.copy(V).multiplyScalar(N).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(y){pe.setScissorTest(Z=y)},this.setOpaqueSort=function(y){H=y},this.setTransparentSort=function(y){$=y},this.getClearColor=function(y){return y.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(y=!0,I=!0,W=!0){let j=0;if(y){let G=!1;if(w!==null){const fe=w.texture.format;G=fe===Ya||fe===qa||fe===Xa}if(G){const fe=w.texture.type,xe=fe===mn||fe===fn||fe===nr||fe===An||fe===Va||fe===Wa,we=$e.getClearColor(),Le=$e.getClearAlpha(),Be=we.r,Ie=we.g,Oe=we.b;xe?(m[0]=Be,m[1]=Ie,m[2]=Oe,m[3]=Le,z.clearBufferuiv(z.COLOR,0,m)):(_[0]=Be,_[1]=Ie,_[2]=Oe,_[3]=Le,z.clearBufferiv(z.COLOR,0,_))}else j|=z.COLOR_BUFFER_BIT}I&&(j|=z.DEPTH_BUFFER_BIT),W&&(j|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",re,!1),de.dispose(),be.dispose(),Ne.dispose(),v.dispose(),O.dispose(),ie.dispose(),A.dispose(),se.dispose(),me.dispose(),he.dispose(),he.removeEventListener("sessionstart",rt),he.removeEventListener("sessionend",je),ve&&(ve.dispose(),ve=null),ot.stop()};function te(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const y=Je.autoReset,I=Q.enabled,W=Q.autoUpdate,j=Q.needsUpdate,G=Q.type;ge(),Je.autoReset=y,Q.enabled=I,Q.autoUpdate=W,Q.needsUpdate=j,Q.type=G}function re(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function le(y){const I=y.target;I.removeEventListener("dispose",le),Te(I)}function Te(y){Se(y),Ne.remove(y)}function Se(y){const I=Ne.get(y).programs;I!==void 0&&(I.forEach(function(W){me.releaseProgram(W)}),y.isShaderMaterial&&me.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,W,j,G,fe){I===null&&(I=Ee);const xe=G.isMesh&&G.matrixWorld.determinant()<0,we=Mu(y,I,W,j,G);pe.setMaterial(j,xe);let Le=W.index,Be=1;if(j.wireframe===!0){if(Le=ee.getWireframeAttribute(W),Le===void 0)return;Be=2}const Ie=W.drawRange,Oe=W.attributes.position;let at=Ie.start*Be,Pt=(Ie.start+Ie.count)*Be;fe!==null&&(at=Math.max(at,fe.start*Be),Pt=Math.min(Pt,(fe.start+fe.count)*Be)),Le!==null?(at=Math.max(at,0),Pt=Math.min(Pt,Le.count)):Oe!=null&&(at=Math.max(at,0),Pt=Math.min(Pt,Oe.count));const pt=Pt-at;if(pt<0||pt===1/0)return;A.setup(G,j,we,W,Le);let sn,tt=Ce;if(Le!==null&&(sn=ne.get(Le),tt=Me,tt.setIndex(sn)),G.isMesh)j.wireframe===!0?(pe.setLineWidth(j.wireframeLinewidth*Xe()),tt.setMode(z.LINES)):tt.setMode(z.TRIANGLES);else if(G.isLine){let Ve=j.linewidth;Ve===void 0&&(Ve=1),pe.setLineWidth(Ve*Xe()),G.isLineSegments?tt.setMode(z.LINES):G.isLineLoop?tt.setMode(z.LINE_LOOP):tt.setMode(z.LINE_STRIP)}else G.isPoints?tt.setMode(z.POINTS):G.isSprite&&tt.setMode(z.TRIANGLES);if(G.isBatchedMesh)tt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)tt.renderInstances(at,pt,G.count);else if(W.isInstancedBufferGeometry){const Ve=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,fr=Math.min(W.instanceCount,Ve);tt.renderInstances(at,pt,fr)}else tt.render(at,pt)};function qe(y,I,W){y.transparent===!0&&y.side===Bt&&y.forceSinglePass===!1?(y.side=wt,y.needsUpdate=!0,rs(y,I,W),y.side=_n,y.needsUpdate=!0,rs(y,I,W),y.side=Bt):rs(y,I,W)}this.compile=function(y,I,W=null){W===null&&(W=y),p=be.get(W),p.init(),b.push(p),W.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),y!==W&&y.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(x._useLegacyLights);const j=new Set;return y.traverse(function(G){const fe=G.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){const we=fe[xe];qe(we,W,G),j.add(we)}else qe(fe,W,G),j.add(fe)}),b.pop(),p=null,j},this.compileAsync=function(y,I,W=null){const j=this.compile(y,I,W);return new Promise(G=>{function fe(){if(j.forEach(function(xe){Ne.get(xe).currentProgram.isReady()&&j.delete(xe)}),j.size===0){G(y);return}setTimeout(fe,10)}ye.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ye=null;function nt(y){Ye&&Ye(y)}function rt(){ot.stop()}function je(){ot.start()}const ot=new qc;ot.setAnimationLoop(nt),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(y){Ye=y,he.setAnimationLoop(y),y===null?ot.stop():ot.start()},he.addEventListener("sessionstart",rt),he.addEventListener("sessionend",je),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(I),I=he.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,I,w),p=be.get(y,b.length),p.init(),b.push(p),_e.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),B.setFromProjectionMatrix(_e),ae=this.localClippingEnabled,K=Fe.init(this.clippingPlanes,ae),g=de.get(y,d.length),g.init(),d.push(g),$t(y,I,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(H,$),this.info.render.frame++,K===!0&&Fe.beginShadows();const W=p.state.shadowsArray;if(Q.render(W,y,I),K===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(g,y),p.setupLights(x._useLegacyLights),I.isArrayCamera){const j=I.cameras;for(let G=0,fe=j.length;G<fe;G++){const xe=j[G];uo(g,y,xe,xe.viewport)}}else uo(g,y,I);w!==null&&(S.updateMultisampleRenderTarget(w),S.updateRenderTargetMipmap(w)),y.isScene===!0&&y.onAfterRender(x,y,I),A.resetDefaultState(),X=-1,M=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function $t(y,I,W,j){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||B.intersectsSprite(y)){j&&De.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_e);const xe=ie.update(y),we=y.material;we.visible&&g.push(y,xe,we,W,De.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||B.intersectsObject(y))){const xe=ie.update(y),we=y.material;if(j&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),De.copy(y.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),De.copy(xe.boundingSphere.center)),De.applyMatrix4(y.matrixWorld).applyMatrix4(_e)),Array.isArray(we)){const Le=xe.groups;for(let Be=0,Ie=Le.length;Be<Ie;Be++){const Oe=Le[Be],at=we[Oe.materialIndex];at&&at.visible&&g.push(y,xe,at,W,De.z,Oe)}}else we.visible&&g.push(y,xe,we,W,De.z,null)}}const fe=y.children;for(let xe=0,we=fe.length;xe<we;xe++)$t(fe[xe],I,W,j)}function uo(y,I,W,j){const G=y.opaque,fe=y.transmissive,xe=y.transparent;p.setupLightsView(W),K===!0&&Fe.setGlobalState(x.clippingPlanes,W),fe.length>0&&xu(G,fe,I,W),j&&pe.viewport(T.copy(j)),G.length>0&&ss(G,I,W),fe.length>0&&ss(fe,I,W),xe.length>0&&ss(xe,I,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function xu(y,I,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const fe=Re.isWebGL2;ve===null&&(ve=new Pn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?wi:mn,minFilter:Ti,samples:fe?4:0})),x.getDrawingBufferSize(Pe),fe?ve.setSize(Pe.x,Pe.y):ve.setSize(Js(Pe.x),Js(Pe.y));const xe=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(J),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const we=x.toneMapping;x.toneMapping=pn,ss(y,W,j),S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve);let Le=!1;for(let Be=0,Ie=I.length;Be<Ie;Be++){const Oe=I[Be],at=Oe.object,Pt=Oe.geometry,pt=Oe.material,sn=Oe.group;if(pt.side===Bt&&at.layers.test(j.layers)){const tt=pt.side;pt.side=wt,pt.needsUpdate=!0,fo(at,W,j,Pt,pt,sn),pt.side=tt,pt.needsUpdate=!0,Le=!0}}Le===!0&&(S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve)),x.setRenderTarget(xe),x.setClearColor(J,P),x.toneMapping=we}function ss(y,I,W){const j=I.isScene===!0?I.overrideMaterial:null;for(let G=0,fe=y.length;G<fe;G++){const xe=y[G],we=xe.object,Le=xe.geometry,Be=j===null?xe.material:j,Ie=xe.group;we.layers.test(W.layers)&&fo(we,I,W,Le,Be,Ie)}}function fo(y,I,W,j,G,fe){y.onBeforeRender(x,I,W,j,G,fe),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(x,I,W,j,y,fe),G.transparent===!0&&G.side===Bt&&G.forceSinglePass===!1?(G.side=wt,G.needsUpdate=!0,x.renderBufferDirect(W,I,j,G,y,fe),G.side=_n,G.needsUpdate=!0,x.renderBufferDirect(W,I,j,G,y,fe),G.side=Bt):x.renderBufferDirect(W,I,j,G,y,fe),y.onAfterRender(x,I,W,j,G,fe)}function rs(y,I,W){I.isScene!==!0&&(I=Ee);const j=Ne.get(y),G=p.state.lights,fe=p.state.shadowsArray,xe=G.state.version,we=me.getParameters(y,G.state,fe,I,W),Le=me.getProgramCacheKey(we);let Be=j.programs;j.environment=y.isMeshStandardMaterial?I.environment:null,j.fog=I.fog,j.envMap=(y.isMeshStandardMaterial?O:v).get(y.envMap||j.environment),Be===void 0&&(y.addEventListener("dispose",le),Be=new Map,j.programs=Be);let Ie=Be.get(Le);if(Ie!==void 0){if(j.currentProgram===Ie&&j.lightsStateVersion===xe)return po(y,we),Ie}else we.uniforms=me.getUniforms(y),y.onBuild(W,we,x),y.onBeforeCompile(we,x),Ie=me.acquireProgram(we,Le),Be.set(Le,Ie),j.uniforms=we.uniforms;const Oe=j.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Oe.clippingPlanes=Fe.uniform),po(y,we),j.needsLights=Su(y),j.lightsStateVersion=xe,j.needsLights&&(Oe.ambientLightColor.value=G.state.ambient,Oe.lightProbe.value=G.state.probe,Oe.directionalLights.value=G.state.directional,Oe.directionalLightShadows.value=G.state.directionalShadow,Oe.spotLights.value=G.state.spot,Oe.spotLightShadows.value=G.state.spotShadow,Oe.rectAreaLights.value=G.state.rectArea,Oe.ltc_1.value=G.state.rectAreaLTC1,Oe.ltc_2.value=G.state.rectAreaLTC2,Oe.pointLights.value=G.state.point,Oe.pointLightShadows.value=G.state.pointShadow,Oe.hemisphereLights.value=G.state.hemi,Oe.directionalShadowMap.value=G.state.directionalShadowMap,Oe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Oe.spotShadowMap.value=G.state.spotShadowMap,Oe.spotLightMatrix.value=G.state.spotLightMatrix,Oe.spotLightMap.value=G.state.spotLightMap,Oe.pointShadowMap.value=G.state.pointShadowMap,Oe.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=Ie,j.uniformsList=null,Ie}function ho(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Ws.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function po(y,I){const W=Ne.get(y);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function Mu(y,I,W,j,G){I.isScene!==!0&&(I=Ee),S.resetTextureUnits();const fe=I.fog,xe=j.isMeshStandardMaterial?I.environment:null,we=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:nn,Le=(j.isMeshStandardMaterial?O:v).get(j.envMap||xe),Be=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Oe=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,Pt=!!W.morphAttributes.color;let pt=pn;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(pt=x.toneMapping);const sn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,tt=sn!==void 0?sn.length:0,Ve=Ne.get(j),fr=p.state.lights;if(K===!0&&(ae===!0||y!==M)){const kt=y===M&&j.id===X;Fe.setState(j,y,kt)}let it=!1;j.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==fr.state.version||Ve.outputColorSpace!==we||G.isBatchedMesh&&Ve.batching===!1||!G.isBatchedMesh&&Ve.batching===!0||G.isInstancedMesh&&Ve.instancing===!1||!G.isInstancedMesh&&Ve.instancing===!0||G.isSkinnedMesh&&Ve.skinning===!1||!G.isSkinnedMesh&&Ve.skinning===!0||G.isInstancedMesh&&Ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ve.instancingColor===!1&&G.instanceColor!==null||Ve.envMap!==Le||j.fog===!0&&Ve.fog!==fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Fe.numPlanes||Ve.numIntersection!==Fe.numIntersection)||Ve.vertexAlphas!==Be||Ve.vertexTangents!==Ie||Ve.morphTargets!==Oe||Ve.morphNormals!==at||Ve.morphColors!==Pt||Ve.toneMapping!==pt||Re.isWebGL2===!0&&Ve.morphTargetsCount!==tt)&&(it=!0):(it=!0,Ve.__version=j.version);let Nn=Ve.currentProgram;it===!0&&(Nn=rs(j,I,G));let mo=!1,Di=!1,hr=!1;const vt=Nn.getUniforms(),Fn=Ve.uniforms;if(pe.useProgram(Nn.program)&&(mo=!0,Di=!0,hr=!0),j.id!==X&&(X=j.id,Di=!0),mo||M!==y){vt.setValue(z,"projectionMatrix",y.projectionMatrix),vt.setValue(z,"viewMatrix",y.matrixWorldInverse);const kt=vt.map.cameraPosition;kt!==void 0&&kt.setValue(z,De.setFromMatrixPosition(y.matrixWorld)),Re.logarithmicDepthBuffer&&vt.setValue(z,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&vt.setValue(z,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Di=!0,hr=!0)}if(G.isSkinnedMesh){vt.setOptional(z,G,"bindMatrix"),vt.setOptional(z,G,"bindMatrixInverse");const kt=G.skeleton;kt&&(Re.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),vt.setValue(z,"boneTexture",kt.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(vt.setOptional(z,G,"batchingTexture"),vt.setValue(z,"batchingTexture",G._matricesTexture,S));const dr=W.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0&&Re.isWebGL2===!0)&&ze.update(G,W,Nn),(Di||Ve.receiveShadow!==G.receiveShadow)&&(Ve.receiveShadow=G.receiveShadow,vt.setValue(z,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Fn.envMap.value=Le,Fn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Di&&(vt.setValue(z,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&yu(Fn,hr),fe&&j.fog===!0&&ce.refreshFogUniforms(Fn,fe),ce.refreshMaterialUniforms(Fn,j,N,Y,ve),Ws.upload(z,ho(Ve),Fn,S)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ws.upload(z,ho(Ve),Fn,S),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&vt.setValue(z,"center",G.center),vt.setValue(z,"modelViewMatrix",G.modelViewMatrix),vt.setValue(z,"normalMatrix",G.normalMatrix),vt.setValue(z,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const kt=j.uniformsGroups;for(let pr=0,bu=kt.length;pr<bu;pr++)if(Re.isWebGL2){const _o=kt[pr];se.update(_o,Nn),se.bind(_o,Nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nn}function yu(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Su(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(y,I,W){Ne.get(y.texture).__webglTexture=I,Ne.get(y.depthTexture).__webglTexture=W;const j=Ne.get(y);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,I){const W=Ne.get(y);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,W=0){w=y,L=I,R=W;let j=!0,G=null,fe=!1,xe=!1;if(y){const Le=Ne.get(y);Le.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(z.FRAMEBUFFER,null),j=!1):Le.__webglFramebuffer===void 0?S.setupRenderTarget(y):Le.__hasExternalTextures&&S.rebindTextures(y,Ne.get(y.texture).__webglTexture,Ne.get(y.depthTexture).__webglTexture);const Be=y.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(xe=!0);const Ie=Ne.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?G=Ie[I][W]:G=Ie[I],fe=!0):Re.isWebGL2&&y.samples>0&&S.useMultisampledRTT(y)===!1?G=Ne.get(y).__webglMultisampledFramebuffer:Array.isArray(Ie)?G=Ie[W]:G=Ie,T.copy(y.viewport),k.copy(y.scissor),q=y.scissorTest}else T.copy(U).multiplyScalar(N).floor(),k.copy(V).multiplyScalar(N).floor(),q=Z;if(pe.bindFramebuffer(z.FRAMEBUFFER,G)&&Re.drawBuffers&&j&&pe.drawBuffers(y,G),pe.viewport(T),pe.scissor(k),pe.setScissorTest(q),fe){const Le=Ne.get(y.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+I,Le.__webglTexture,W)}else if(xe){const Le=Ne.get(y.texture),Be=I||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Le.__webglTexture,W||0,Be)}X=-1},this.readRenderTargetPixels=function(y,I,W,j,G,fe,xe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){pe.bindFramebuffer(z.FRAMEBUFFER,we);try{const Le=y.texture,Be=Le.format,Ie=Le.type;if(Be!==Ht&&ue.convert(Be)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ie===wi&&(ye.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ie!==mn&&ue.convert(Ie)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===hn&&(Re.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-j&&W>=0&&W<=y.height-G&&z.readPixels(I,W,j,G,ue.convert(Be),ue.convert(Ie),fe)}finally{const Le=w!==null?Ne.get(w).__webglFramebuffer:null;pe.bindFramebuffer(z.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(y,I,W=0){const j=Math.pow(2,-W),G=Math.floor(I.image.width*j),fe=Math.floor(I.image.height*j);S.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,y.x,y.y,G,fe),pe.unbindTexture()},this.copyTextureToTexture=function(y,I,W,j=0){const G=I.image.width,fe=I.image.height,xe=ue.convert(W.format),we=ue.convert(W.type);S.setTexture2D(W,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment),I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,j,y.x,y.y,G,fe,xe,we,I.image.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,j,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,xe,I.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,j,y.x,y.y,xe,we,I.image),j===0&&W.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(y,I,W,j,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=y.max.x-y.min.x+1,xe=y.max.y-y.min.y+1,we=y.max.z-y.min.z+1,Le=ue.convert(j.format),Be=ue.convert(j.type);let Ie;if(j.isData3DTexture)S.setTexture3D(j,0),Ie=z.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)S.setTexture2DArray(j,0),Ie=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const Oe=z.getParameter(z.UNPACK_ROW_LENGTH),at=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Pt=z.getParameter(z.UNPACK_SKIP_PIXELS),pt=z.getParameter(z.UNPACK_SKIP_ROWS),sn=z.getParameter(z.UNPACK_SKIP_IMAGES),tt=W.isCompressedTexture?W.mipmaps[G]:W.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,tt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,tt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,y.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,y.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,y.min.z),W.isDataTexture||W.isData3DTexture?z.texSubImage3D(Ie,G,I.x,I.y,I.z,fe,xe,we,Le,Be,tt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ie,G,I.x,I.y,I.z,fe,xe,we,Le,tt.data)):z.texSubImage3D(Ie,G,I.x,I.y,I.z,fe,xe,we,Le,Be,tt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Oe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,at),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Pt),z.pixelStorei(z.UNPACK_SKIP_ROWS,pt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,sn),G===0&&j.generateMipmaps&&z.generateMipmap(Ie),pe.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),pe.unbindTexture()},this.resetState=function(){L=0,R=0,w=null,pe.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ir?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Ji?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ct?Cn:$a}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cn?ct:nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class nu extends lo{}nu.prototype.isWebGL1Renderer=!0;class lr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new lr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class iu extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class co extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ll=new D,cl=new D,ul=new st,kr=new es,Ps=new Qi;class su extends ft{constructor(e=new Lt,t=new co){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ll.fromBufferAttribute(t,s-1),cl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ll.distanceTo(cl);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),Ps.radius+=r,e.ray.intersectsSphere(Ps)===!1)return;ul.copy(s).invert(),kr.copy(e.ray).applyMatrix4(ul);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,h=new D,f=new D,m=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const d=Math.max(0,o.start),b=Math.min(_.count,o.start+o.count);for(let x=d,E=b-1;x<E;x+=m){const L=_.getX(x),R=_.getX(x+1);if(c.fromBufferAttribute(p,L),u.fromBufferAttribute(p,R),kr.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const X=e.ray.origin.distanceTo(f);X<e.near||X>e.far||t.push({distance:X,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let x=d,E=b-1;x<E;x+=m){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),kr.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const fl=new D,hl=new D;class ru extends su{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)fl.fromBufferAttribute(t,s),hl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fl.distanceTo(hl);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class au extends At{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cr extends Lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],m=[];let _=0;const g=[],p=n/2;let d=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(m,2));function b(){const E=new D,L=new D;let R=0;const w=(t-e)/n;for(let X=0;X<=r;X++){const M=[],T=X/r,k=T*(t-e)+e;for(let q=0;q<=s;q++){const J=q/s,P=J*l+a,F=Math.sin(P),Y=Math.cos(P);L.x=k*F,L.y=-T*n+p,L.z=k*Y,h.push(L.x,L.y,L.z),E.set(F,w,Y).normalize(),f.push(E.x,E.y,E.z),m.push(J,1-T),M.push(_++)}g.push(M)}for(let X=0;X<s;X++)for(let M=0;M<r;M++){const T=g[M][X],k=g[M+1][X],q=g[M+1][X+1],J=g[M][X+1];u.push(T,k,J),u.push(k,q,J),R+=6}c.addGroup(d,R,0),d+=R}function x(E){const L=_,R=new Ae,w=new D;let X=0;const M=E===!0?e:t,T=E===!0?1:-1;for(let q=1;q<=s;q++)h.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),_++;const k=_;for(let q=0;q<=s;q++){const P=q/s*l+a,F=Math.cos(P),Y=Math.sin(P);w.x=M*Y,w.y=p*T,w.z=M*F,h.push(w.x,w.y,w.z),f.push(0,T,0),R.x=F*.5+.5,R.y=Y*.5*T+.5,m.push(R.x,R.y),_++}for(let q=0;q<s;q++){const J=L+q,P=k+q;E===!0?u.push(P,P+1,J):u.push(P+1,P,J),X+=3}c.addGroup(d,X,E===!0?1:2),d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ds=new D,Us=new D,zr=new D,Is=new Nt;class ou extends Lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Mi*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},m=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:p,c:d}=Is;if(g.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Is.getNormal(zr),h[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,h[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const x=(b+1)%3,E=h[b],L=h[x],R=Is[u[b]],w=Is[u[x]],X=`${E}_${L}`,M=`${L}_${E}`;M in f&&f[M]?(zr.dot(f[M].normal)<=r&&(m.push(R.x,R.y,R.z),m.push(w.x,w.y,w.z)),f[M]=null):X in f||(f[X]={index0:c[b],index1:c[x],normal:zr.clone()})}}for(const _ in f)if(f[_]){const{index0:g,index1:p}=f[_];Ds.fromBufferAttribute(a,g),Us.fromBufferAttribute(a,p),m.push(Ds.x,Ds.y,Ds.z),m.push(Us.x,Us.y,Us.z)}this.setAttribute("position",new ut(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ur extends Lt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/s,m=new D,_=new Ae;for(let g=0;g<=s;g++){for(let p=0;p<=n;p++){const d=r+p/n*o;m.x=h*Math.cos(d),m.y=h*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}h+=f}for(let g=0;g<s;g++){const p=g*(n+1);for(let d=0;d<n;d++){const b=d+p,x=b,E=b+n+1,L=b+n+2,R=b+1;a.push(x,E,R),a.push(E,L,R)}}this.setIndex(a),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vt extends Qn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class is extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class lu extends is{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Br=new st,dl=new D,pl=new D;class cu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;dl.setFromMatrixPosition(e.matrixWorld),t.position.copy(dl),pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pl),t.updateMatrixWorld(),Br.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Br),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Br)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ml=new st,ki=new D,Gr=new D;class Zm extends cu{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ki.setFromMatrixPosition(e.matrixWorld),n.position.copy(ki),Gr.copy(n.position),Gr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Gr),n.updateMatrixWorld(),s.makeTranslation(-ki.x,-ki.y,-ki.z),ml.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml)}}class uu extends is{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jm extends cu{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pa extends is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Jm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fu extends is{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_l(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_l();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _l(){return(typeof performance>"u"?Date:performance).now()}class du{constructor(e,t,n=0,s=1/0){this.ray=new es(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Da(e,this,n,t),n.sort(gl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Da(e[s],this,n,t);return n.sort(gl),n}}function gl(i,e){return i.distance-e.distance}function Da(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)Da(s[r],e,t,!0)}}class Ua{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:er}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=er);const en=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:mc,AddEquation:wn,AddOperation:fc,AdditiveBlending:jr,AgXToneMapping:gc,AlphaFormat:yc,AlwaysCompare:Fc,AlwaysDepth:sc,AlwaysStencilFunc:Ta,AmbientLight:fu,ArrayCamera:tu,BackSide:wt,BasicDepthPacking:Ac,Box3:Ci,BoxGeometry:Li,BufferAttribute:Wt,BufferGeometry:Lt,ByteType:xc,Camera:so,CanvasTexture:au,CineonToneMapping:pc,ClampToEdgeWrapping:Gt,Clock:hu,Color:Ue,ColorManagement:Ke,ConstantAlphaFactor:tc,ConstantColorFactor:Ql,CubeCamera:Wc,CubeReflectionMapping:$n,CubeRefractionMapping:Kn,CubeTexture:ro,CubeUVReflectionMapping:Zi,CullFaceBack:Yr,CullFaceFront:Bl,CullFaceNone:zl,CustomBlending:Gl,CustomToneMapping:_c,CylinderGeometry:cr,Data3DTexture:Bc,DataArrayTexture:to,DepthFormat:Rn,DepthStencilFormat:Zn,DepthTexture:oo,DirectionalLight:Pa,DisplayP3ColorSpace:ir,DoubleSide:Bt,DstAlphaFactor:jl,DstColorFactor:Kl,EdgesGeometry:ou,EqualCompare:Dc,EqualDepth:ac,EquirectangularReflectionMapping:js,EquirectangularRefractionMapping:$s,Euler:ts,EventDispatcher:In,Float32BufferAttribute:ut,FloatType:hn,Fog:lr,FrontSide:_n,Frustum:rr,GLSL3:Aa,GreaterCompare:Uc,GreaterDepth:lc,GreaterEqualCompare:Nc,GreaterEqualDepth:oc,Group:Ct,HalfFloatType:wi,HemisphereLight:lu,ImageUtils:Qa,IntType:Ha,KeepStencilOp:Wn,Layers:sr,LessCompare:Pc,LessDepth:rc,LessEqualCompare:Za,LessEqualDepth:Wi,Light:is,Line:su,LineBasicMaterial:co,LineSegments:ru,LinearDisplayP3ColorSpace:Ji,LinearEncoding:$a,LinearFilter:It,LinearMipmapLinearFilter:Ti,LinearMipmapNearestFilter:vc,LinearSRGBColorSpace:nn,LinearToneMapping:hc,LinearTransfer:Xi,LuminanceAlphaFormat:bc,LuminanceFormat:Sc,MOUSE:Zt,Material:Qn,MathUtils:Ln,Matrix3:He,Matrix4:st,MaxEquation:Jr,Mesh:et,MeshBasicMaterial:Jn,MeshDepthMaterial:Jc,MeshDistanceMaterial:Qc,MeshLambertMaterial:Vt,MinEquation:Zr,MirroredRepeatWrapping:Ks,MixOperation:uc,MultiplyBlending:Kr,MultiplyOperation:tr,NearestFilter:yt,NearestMipmapLinearFilter:ks,NearestMipmapNearestFilter:Qr,NeverCompare:Lc,NeverDepth:ic,NoBlending:dn,NoColorSpace:Ot,NoToneMapping:pn,NormalBlending:Yn,NotEqualCompare:Ic,NotEqualDepth:cc,Object3D:ft,ObjectSpaceNormalMap:Cc,OneFactor:Xl,OneMinusConstantAlphaFactor:nc,OneMinusConstantColorFactor:ec,OneMinusDstAlphaFactor:$l,OneMinusDstColorFactor:Zl,OneMinusSrcAlphaFactor:Ys,OneMinusSrcColorFactor:Yl,OrthographicCamera:ar,P3Primaries:Yi,PCFShadowMap:za,PCFSoftShadowMap:Ba,PMREMGenerator:Ca,PerspectiveCamera:Ft,Plane:Jt,PlaneGeometry:ns,PointLight:uu,Quaternion:Dn,RED_GREEN_RGTC2_Format:ba,RED_RGTC1_Format:wc,REVISION:er,RGBADepthPacking:Rc,RGBAFormat:Ht,RGBAIntegerFormat:Ya,RGBA_ASTC_10x10_Format:ga,RGBA_ASTC_10x5_Format:pa,RGBA_ASTC_10x6_Format:ma,RGBA_ASTC_10x8_Format:_a,RGBA_ASTC_12x10_Format:va,RGBA_ASTC_12x12_Format:xa,RGBA_ASTC_4x4_Format:aa,RGBA_ASTC_5x4_Format:oa,RGBA_ASTC_5x5_Format:la,RGBA_ASTC_6x5_Format:ca,RGBA_ASTC_6x6_Format:ua,RGBA_ASTC_8x5_Format:fa,RGBA_ASTC_8x6_Format:ha,RGBA_ASTC_8x8_Format:da,RGBA_BPTC_Format:Vs,RGBA_ETC2_EAC_Format:ra,RGBA_PVRTC_2BPPV1_Format:ia,RGBA_PVRTC_4BPPV1_Format:na,RGBA_S3TC_DXT1_Format:Bs,RGBA_S3TC_DXT3_Format:Gs,RGBA_S3TC_DXT5_Format:Hs,RGB_BPTC_SIGNED_Format:Ma,RGB_BPTC_UNSIGNED_Format:ya,RGB_ETC1_Format:ja,RGB_ETC2_Format:sa,RGB_PVRTC_2BPPV1_Format:ta,RGB_PVRTC_4BPPV1_Format:ea,RGB_S3TC_DXT1_Format:zs,RGFormat:Tc,RGIntegerFormat:qa,Ray:es,Raycaster:du,Rec709Primaries:qi,RedFormat:Ec,RedIntegerFormat:Xa,ReinhardToneMapping:dc,RenderTarget:zc,RepeatWrapping:Ei,ReverseSubtractEquation:Vl,RingGeometry:ur,SIGNED_RED_GREEN_RGTC2_Format:Ea,SIGNED_RED_RGTC1_Format:Sa,SRGBColorSpace:ct,SRGBTransfer:Ze,Scene:iu,ShaderChunk:ke,ShaderLib:jt,ShaderMaterial:Un,ShortType:Mc,Source:eo,Sphere:Qi,Spherical:Ua,SrcAlphaFactor:qs,SrcAlphaSaturateFactor:Jl,SrcColorFactor:ql,StaticDrawUsage:wa,SubtractEquation:Hl,SubtractiveBlending:$r,TOUCH:Vn,TangentSpaceNormalMap:Ka,Texture:At,Triangle:Nt,UVMapping:Ga,Uint16BufferAttribute:no,Uint32BufferAttribute:io,UniformsLib:oe,UniformsUtils:Vc,UnsignedByteType:mn,UnsignedInt248Type:An,UnsignedIntType:fn,UnsignedShort4444Type:Va,UnsignedShort5551Type:Wa,UnsignedShortType:nr,VSMShadowMap:Kt,Vector2:Ae,Vector3:D,Vector4:Qe,WebGL1Renderer:nu,WebGLCoordinateSystem:Qt,WebGLCubeRenderTarget:Xc,WebGLRenderTarget:Pn,WebGLRenderer:lo,WebGLUtils:eu,WebGPUCoordinateSystem:ji,ZeroFactor:Wl,_SRGBAFormat:Zs,createCanvasElement:kc,sRGBEncoding:Cn},Symbol.toStringTag,{value:"Module"})),vl={type:"change"},Hr={type:"start"},xl={type:"end"},Ns=new es,Ml=new Jt,Qm=Math.cos(70*Ln.DEG2RAD);class e_ extends In{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zt.ROTATE,MIDDLE:Zt.DOLLY,RIGHT:Zt.PAN},this.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",be),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vl),n.update(),r=s.NONE},this.update=function(){const A=new D,se=new Dn().setFromUnitVectors(e.up,new D(0,1,0)),ge=se.clone().invert(),he=new D,te=new Dn,C=new D,re=2*Math.PI;return function(Te=null){const Se=n.object.position;A.copy(Se).sub(n.target),A.applyQuaternion(se),a.setFromVector3(A),n.autoRotate&&r===s.NONE&&q(T(Te)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let qe=n.minAzimuthAngle,Ye=n.maxAzimuthAngle;isFinite(qe)&&isFinite(Ye)&&(qe<-Math.PI?qe+=re:qe>Math.PI&&(qe-=re),Ye<-Math.PI?Ye+=re:Ye>Math.PI&&(Ye-=re),qe<=Ye?a.theta=Math.max(qe,Math.min(Ye,a.theta)):a.theta=a.theta>(qe+Ye)/2?Math.max(qe,a.theta):Math.min(Ye,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=U(a.radius):a.radius=U(a.radius*c),A.setFromSpherical(a),A.applyQuaternion(ge),Se.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let nt=!1;if(n.zoomToCursor&&R){let rt=null;if(n.object.isPerspectiveCamera){const je=A.length();rt=U(je*c);const ot=je-rt;n.object.position.addScaledVector(E,ot),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const je=new D(L.x,L.y,0);je.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),nt=!0;const ot=new D(L.x,L.y,0);ot.unproject(n.object),n.object.position.sub(ot).add(je),n.object.updateMatrixWorld(),rt=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;rt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(rt).add(n.object.position):(Ns.origin.copy(n.object.position),Ns.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ns.direction))<Qm?e.lookAt(n.target):(Ml.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ns.intersectPlane(Ml,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),nt=!0);return c=1,R=!1,nt||he.distanceToSquared(n.object.position)>o||8*(1-te.dot(n.object.quaternion))>o||C.distanceToSquared(n.target)>0?(n.dispatchEvent(vl),he.copy(n.object.position),te.copy(n.object.quaternion),C.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",$e),n.domElement.removeEventListener("pointerdown",S),n.domElement.removeEventListener("pointercancel",O),n.domElement.removeEventListener("wheel",ie),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",O),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",be),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Ua,l=new Ua;let c=1;const u=new D,h=new Ae,f=new Ae,m=new Ae,_=new Ae,g=new Ae,p=new Ae,d=new Ae,b=new Ae,x=new Ae,E=new D,L=new Ae;let R=!1;const w=[],X={};let M=!1;function T(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function k(A){const se=Math.abs(A*.01);return Math.pow(.95,n.zoomSpeed*se)}function q(A){l.theta-=A}function J(A){l.phi-=A}const P=function(){const A=new D;return function(ge,he){A.setFromMatrixColumn(he,0),A.multiplyScalar(-ge),u.add(A)}}(),F=function(){const A=new D;return function(ge,he){n.screenSpacePanning===!0?A.setFromMatrixColumn(he,1):(A.setFromMatrixColumn(he,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(ge),u.add(A)}}(),Y=function(){const A=new D;return function(ge,he){const te=n.domElement;if(n.object.isPerspectiveCamera){const C=n.object.position;A.copy(C).sub(n.target);let re=A.length();re*=Math.tan(n.object.fov/2*Math.PI/180),P(2*ge*re/te.clientHeight,n.object.matrix),F(2*he*re/te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(ge*(n.object.right-n.object.left)/n.object.zoom/te.clientWidth,n.object.matrix),F(he*(n.object.top-n.object.bottom)/n.object.zoom/te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(A,se){if(!n.zoomToCursor)return;R=!0;const ge=n.domElement.getBoundingClientRect(),he=A-ge.left,te=se-ge.top,C=ge.width,re=ge.height;L.x=he/C*2-1,L.y=-(te/re)*2+1,E.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function U(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function V(A){h.set(A.clientX,A.clientY)}function Z(A){$(A.clientX,A.clientX),d.set(A.clientX,A.clientY)}function B(A){_.set(A.clientX,A.clientY)}function K(A){f.set(A.clientX,A.clientY),m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const se=n.domElement;q(2*Math.PI*m.x/se.clientHeight),J(2*Math.PI*m.y/se.clientHeight),h.copy(f),n.update()}function ae(A){b.set(A.clientX,A.clientY),x.subVectors(b,d),x.y>0?N(k(x.y)):x.y<0&&H(k(x.y)),d.copy(b),n.update()}function ve(A){g.set(A.clientX,A.clientY),p.subVectors(g,_).multiplyScalar(n.panSpeed),Y(p.x,p.y),_.copy(g),n.update()}function _e(A){$(A.clientX,A.clientY),A.deltaY<0?H(k(A.deltaY)):A.deltaY>0&&N(k(A.deltaY)),n.update()}function Pe(A){let se=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,n.keyPanSpeed),se=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,-n.keyPanSpeed),se=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(n.keyPanSpeed,0),se=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(-n.keyPanSpeed,0),se=!0;break}se&&(A.preventDefault(),n.update())}function De(A){if(w.length===1)h.set(A.pageX,A.pageY);else{const se=ue(A),ge=.5*(A.pageX+se.x),he=.5*(A.pageY+se.y);h.set(ge,he)}}function Ee(A){if(w.length===1)_.set(A.pageX,A.pageY);else{const se=ue(A),ge=.5*(A.pageX+se.x),he=.5*(A.pageY+se.y);_.set(ge,he)}}function Xe(A){const se=ue(A),ge=A.pageX-se.x,he=A.pageY-se.y,te=Math.sqrt(ge*ge+he*he);d.set(0,te)}function z(A){n.enableZoom&&Xe(A),n.enablePan&&Ee(A)}function _t(A){n.enableZoom&&Xe(A),n.enableRotate&&De(A)}function ye(A){if(w.length==1)f.set(A.pageX,A.pageY);else{const ge=ue(A),he=.5*(A.pageX+ge.x),te=.5*(A.pageY+ge.y);f.set(he,te)}m.subVectors(f,h).multiplyScalar(n.rotateSpeed);const se=n.domElement;q(2*Math.PI*m.x/se.clientHeight),J(2*Math.PI*m.y/se.clientHeight),h.copy(f)}function Re(A){if(w.length===1)g.set(A.pageX,A.pageY);else{const se=ue(A),ge=.5*(A.pageX+se.x),he=.5*(A.pageY+se.y);g.set(ge,he)}p.subVectors(g,_).multiplyScalar(n.panSpeed),Y(p.x,p.y),_.copy(g)}function pe(A){const se=ue(A),ge=A.pageX-se.x,he=A.pageY-se.y,te=Math.sqrt(ge*ge+he*he);b.set(0,te),x.set(0,Math.pow(b.y/d.y,n.zoomSpeed)),N(x.y),d.copy(b);const C=(A.pageX+se.x)*.5,re=(A.pageY+se.y)*.5;$(C,re)}function Je(A){n.enableZoom&&pe(A),n.enablePan&&Re(A)}function Ne(A){n.enableZoom&&pe(A),n.enableRotate&&ye(A)}function S(A){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",v),n.domElement.addEventListener("pointerup",O)),ze(A),A.pointerType==="touch"?Fe(A):ne(A))}function v(A){n.enabled!==!1&&(A.pointerType==="touch"?Q(A):ee(A))}function O(A){Ce(A),w.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",O)),n.dispatchEvent(xl),r=s.NONE}function ne(A){let se;switch(A.button){case 0:se=n.mouseButtons.LEFT;break;case 1:se=n.mouseButtons.MIDDLE;break;case 2:se=n.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Zt.DOLLY:if(n.enableZoom===!1)return;Z(A),r=s.DOLLY;break;case Zt.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;B(A),r=s.PAN}else{if(n.enableRotate===!1)return;V(A),r=s.ROTATE}break;case Zt.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;V(A),r=s.ROTATE}else{if(n.enablePan===!1)return;B(A),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Hr)}function ee(A){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;K(A);break;case s.DOLLY:if(n.enableZoom===!1)return;ae(A);break;case s.PAN:if(n.enablePan===!1)return;ve(A);break}}function ie(A){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(A.preventDefault(),n.dispatchEvent(Hr),_e(me(A)),n.dispatchEvent(xl))}function me(A){const se=A.deltaMode,ge={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(se){case 1:ge.deltaY*=16;break;case 2:ge.deltaY*=100;break}return A.ctrlKey&&!M&&(ge.deltaY*=10),ge}function ce(A){A.key==="Control"&&(M=!0,document.addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(A){A.key==="Control"&&(M=!1,document.removeEventListener("keyup",de,{passive:!0,capture:!0}))}function be(A){n.enabled===!1||n.enablePan===!1||Pe(A)}function Fe(A){switch(Me(A),w.length){case 1:switch(n.touches.ONE){case Vn.ROTATE:if(n.enableRotate===!1)return;De(A),r=s.TOUCH_ROTATE;break;case Vn.PAN:if(n.enablePan===!1)return;Ee(A),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Vn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;z(A),r=s.TOUCH_DOLLY_PAN;break;case Vn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_t(A),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Hr)}function Q(A){switch(Me(A),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(A),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Re(A),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Je(A),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ne(A),n.update();break;default:r=s.NONE}}function $e(A){n.enabled!==!1&&A.preventDefault()}function ze(A){w.push(A.pointerId)}function Ce(A){delete X[A.pointerId];for(let se=0;se<w.length;se++)if(w[se]==A.pointerId){w.splice(se,1);return}}function Me(A){let se=X[A.pointerId];se===void 0&&(se=new Ae,X[A.pointerId]=se),se.set(A.pageX,A.pageY)}function ue(A){const se=A.pointerId===w[0]?w[1]:w[0];return X[se]}n.domElement.addEventListener("contextmenu",$e),n.domElement.addEventListener("pointerdown",S),n.domElement.addEventListener("pointercancel",O),n.domElement.addEventListener("wheel",ie,{passive:!1}),document.addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}const t_=[[1,0],[-1,0],[0,1],[0,-1]];function yl(i,e,t){const n=t.width,s=t.height;if(i.x===e.x&&i.z===e.z)return[];if(!Sl(t,i.x,i.z)||!Sl(t,e.x,e.z))return null;const r=i.z*n+i.x,o=e.z*n+e.x;if(t.blocked[r]||t.blocked[o])return null;const a=n*s,l=new Int32Array(a);l.fill(-1);const c=new Int32Array(a);c.fill(-1),l[r]=0;const u=[],h=[],f=(d,b)=>{u.push(d),h.push(b);let x=u.length-1;for(;x>0;){const E=x-1>>1;if(h[E]<=h[x])break;bl(u,h,x,E),x=E}},m=()=>{const d=u[0],b=u.pop(),x=h.pop();if(u.length>0&&b!==void 0&&x!==void 0){u[0]=b,h[0]=x;let E=0;for(;;){const L=E*2+1,R=L+1;let w=E;if(L<u.length&&h[L]<h[w]&&(w=L),R<u.length&&h[R]<h[w]&&(w=R),w===E)break;bl(u,h,E,w),E=w}}return d},_=new Uint8Array(a);for(f(r,Math.abs(e.x-i.x)+Math.abs(e.z-i.z));u.length>0;){const d=m();if(_[d])continue;if(_[d]=1,d===o)break;const b=d%n,x=d/n|0,E=l[d];for(const[L,R]of t_){const w=b+L,X=x+R;if(w<0||X<0||w>=n||X>=s)continue;const M=X*n+w;if(t.blocked[M]||_[M])continue;const T=E+1;l[M]!==-1&&T>=l[M]||(l[M]=T,c[M]=d,f(M,T+Math.abs(e.x-w)+Math.abs(e.z-X)))}}if(l[o]<0)return null;const g=[];let p=o;for(;p!==r;)if(g.push({x:p%n,z:p/n|0}),p=c[p],p<0)return null;return g.reverse(),g}function Sl(i,e,t){return e>=0&&t>=0&&e<i.width&&t<i.height}function bl(i,e,t,n){const s=i[t];i[t]=i[n],i[n]=s;const r=e[t];e[t]=e[n],e[n]=r}function n_(i,e,t){const{count:n,x:s,z:r,yaw:o,phase:a,wait:l,moving:c,paths:u,activity:h}=i;for(let f=0;f<n;f++){if(h[f]==="work"){c[f]=0;continue}if(h[f]!=="wander")continue;if(l[f]>0){l[f]-=t,c[f]=0;continue}let m=u[f];if(m.length===0){const w={x:Math.floor(s[f]),z:Math.floor(r[f])},X=s_(i,w,e);if(m=X?r_(w,X,e)??[]:[],u[f]=m,m.length===0){l[f]=.8,c[f]=0;continue}}const _=m[0],g=_.x+.5,p=_.z+.5;if(i_(f,s,r,n,g,p)){l[f]=.2,c[f]=0;continue}const d=g-s[f],b=p-r[f],x=Math.hypot(d,b);if(x<.05){s[f]=g,r[f]=p,m.shift(),c[f]=0,m.length===0&&(l[f]=.7+i.random()*2.2);continue}const L=Math.min(x,1.45*t);s[f]+=d/x*L,r[f]+=b/x*L,a[f]+=t*9;const R=Math.atan2(d,b);o[f]=a_(o[f],R,1-Math.exp(-10*t)),c[f]=1}}function i_(i,e,t,n,s,r){for(let o=0;o<n;o++){if(o===i)continue;const a=Math.hypot(e[o]-s,t[o]-r)<.42,l=Math.hypot(e[o]-e[i],t[o]-t[i])<1;if(a&&l)return!0}return!1}function s_(i,e,t){let n=null;for(let s=0;s<40;s++){const r=Math.floor(i.random()*t.width),o=Math.floor(i.random()*t.height);if(pu(t,r,o))continue;if(Math.abs(r-e.x)+Math.abs(o-e.z)>=4)return{x:r,z:o};n={x:r,z:o}}return n}function r_(i,e,t){const n=(h,f)=>f*t.width+h,s=n(i.x,i.z),r=n(e.x,e.z);if(s===r)return[];const o=new Map;o.set(s,null);const a=[i],l=[[1,0],[-1,0],[0,1],[0,-1]];for(;a.length>0;){const h=a.shift();if(!h||h.x===e.x&&h.z===e.z)break;for(const[f,m]of l){const _=h.x+f,g=h.z+m;if(_<0||g<0||_>=t.width||g>=t.height)continue;const p=n(_,g);o.has(p)||pu(t,_,g)||(o.set(p,n(h.x,h.z)),a.push({x:_,z:g}))}}if(!o.has(r))return null;const c=[];let u=r;for(;u!==null&&u!==s;)c.push({x:u%t.width,z:Math.floor(u/t.width)}),u=o.get(u)??null;return c.reverse(),c}function pu(i,e,t){return i.blocked[t*i.width+e]===1}function a_(i,e,t){const n=Math.atan2(Math.sin(e-i),Math.cos(e-i));return i+n*t}const Hn=64;class o_{constructor(e){Ge(this,"backend","typescript");Ge(this,"tick",0);Ge(this,"time",0);Ge(this,"nav");Ge(this,"ids");Ge(this,"keys");Ge(this,"names");Ge(this,"needs");Ge(this,"skills");Ge(this,"purseCents");Ge(this,"contractId");Ge(this,"activity");Ge(this,"wait");Ge(this,"paths");Ge(this,"contracts",[]);Ge(this,"events",[]);Ge(this,"minds");Ge(this,"research",{unlocked:[],active:null,progress:0});Ge(this,"orders",[]);Ge(this,"playerOrders");Ge(this,"haulWalking");Ge(this,"haulItems");Ge(this,"fixedBlocked");Ge(this,"columns");Ge(this,"accumulator",0);Ge(this,"seed");Ge(this,"rngState");const t=e.spawns;if(t.length>Hn)throw new Error(`This build simulates at most ${Hn} colonists.`);this.nav=e.nav,this.seed=e.seed??27164,this.rngState=this.seed>>>0;const n=t.length;this.ids=t.map(r=>r.id),this.keys=t.map(r=>r.key),this.names=t.map(r=>r.name),this.needs=t.map((r,o)=>r.needs??{food:En(.92-o*.03),rest:En(.88-o*.02),recreation:En(.9-o*.04)}),this.skills=t.map(r=>r.skills??f_(r.id)),this.minds=t.map((r,o)=>r.mind??c_(o)),this.purseCents=new Int32Array(Hn),this.contractId=t.map(()=>null),this.activity=t.map(()=>"wander"),this.wait=new Float32Array(Hn),this.paths=t.map(()=>[]),this.playerOrders=t.map(()=>null),this.haulWalking=new Uint8Array(Hn),this.fixedBlocked=new Uint8Array(e.nav.blocked),this.haulItems=(e.items??[]).map(r=>({id:r.id,x:r.x,z:r.z,w:Math.max(1,r.w),d:Math.max(1,r.d),blocks:r.blocks,carrierId:0})),this.paintItems(),t.forEach((r,o)=>{this.purseCents[o]=r.purseCents??8e3+o*1500,this.wait[o]=o*.35});const s=()=>new Float32Array(Hn);this.columns={generation:0,count:n,prevX:s(),prevZ:s(),prevYaw:s(),prevPhase:s(),x:s(),z:s(),yaw:s(),phase:s(),moving:new Uint8Array(Hn)},t.forEach((r,o)=>{this.columns.x[o]=r.x,this.columns.z[o]=r.z,this.columns.yaw[o]=r.yaw,this.columns.phase[o]=o,this.copyCurrentToPrevious(o)})}advance(e){this.accumulator+=Math.min(Math.max(0,e),.25);let t=0;for(;this.accumulator>=Ui&&t<Fl;)this.snapshot(),this.step(Ui),this.tick+=1,this.time+=Ui,this.accumulator-=Ui,t+=1}alpha(){return this.accumulator/Ui}colonists(){return this.columns}roster(){return{ids:this.ids,keys:this.keys,names:this.names}}totalGoldCents(){let e=0;for(let t=0;t<this.columns.count;t++)e+=this.purseCents[t];return e}pollEvents(){return this.events.splice(0,this.events.length)}save(){const e=[];for(let t=0;t<this.columns.count;t++)e.push({id:this.ids[t],key:this.keys[t],name:this.names[t],x:this.columns.x[t],z:this.columns.z[t],yaw:this.columns.yaw[t],phase:this.columns.phase[t],wait:this.wait[t],needs:{...this.needs[t]},skills:{...this.skills[t]},purseCents:this.purseCents[t],contractId:this.contractId[t],activity:this.activity[t],mind:Tl(this.minds[t])});return{version:1,seed:this.seed,rngState:this.rngState,tick:this.tick,time:this.time,colonists:e,contracts:this.contracts.map(t=>({...t})),research:{...this.research,unlocked:[...this.research.unlocked]},orders:this.orders.map(t=>({...t}))}}load(e){if(e.version!==1)throw new Error(`Unknown save version ${e.version}`);if(e.colonists.length!==this.columns.count)throw new Error("This build cannot load a valley with a different number of colonists.");this.seed=e.seed,this.rngState=e.rngState>>>0,this.tick=e.tick,this.time=e.time,this.accumulator=0,this.contracts.splice(0,this.contracts.length,...e.contracts.map(t=>({...t}))),this.research={...e.research,unlocked:[...e.research.unlocked]},this.orders=e.orders.map(t=>({...t}));for(let t=0;t<e.colonists.length;t++){const n=e.colonists[t];this.ids[t]=n.id,this.keys[t]=n.key,this.names[t]=n.name,this.columns.x[t]=n.x,this.columns.z[t]=n.z,this.columns.yaw[t]=n.yaw,this.columns.phase[t]=n.phase,this.wait[t]=n.wait,this.needs[t]={...n.needs},this.skills[t]={...n.skills},this.purseCents[t]=n.purseCents,this.contractId[t]=n.contractId,this.minds[t]=Tl(n.mind),this.activity[t]=El(this.contracts,n.contractId)?"work":"wander",this.playerOrders[t]=null,this.haulWalking[t]=0,this.paths[t]=[],this.columns.moving[t]=0,this.copyCurrentToPrevious(t)}}step(e){this.schedule(),this.stepHaul(e),this.syncCarried(),n_({count:this.columns.count,x:this.columns.x,z:this.columns.z,yaw:this.columns.yaw,phase:this.columns.phase,wait:this.wait,moving:this.columns.moving,paths:this.paths,activity:this.activity,random:()=>this.random()},this.nav,e),this.stepNeeds(e)}schedule(){for(let e=0;e<this.columns.count;e++)this.playerOrders[e]?this.activity[e]="haul":El(this.contracts,this.contractId[e])?this.activity[e]="work":this.activity[e]="wander"}orderMove(e,t,n){const s=this.indexOf(e);return s<0||!this.openCell(t,n)?!1:(this.setOrder(s,{kind:"move",x:t,z:n}),!0)}orderPickup(e,t){const n=this.indexOf(e),s=this.haulItems.find(r=>r.id===t);return n<0||!s||s.carrierId!==0||this.carriedBy(e)||!this.standBeside(n,s)?!1:(this.setOrder(n,{kind:"pickup",itemId:t}),!0)}orderPlace(e,t,n){const s=this.indexOf(e),r=this.carriedBy(e);return s<0||!r||!this.footprintFree(t,n,r.w,r.d)||!this.standBeside(s,{x:t,z:n,w:r.w,d:r.d,blocks:r.blocks})?!1:(this.setOrder(s,{kind:"place",x:t,z:n}),!0)}items(){return this.haulItems.map(e=>({...e}))}blocked(e,t){return e<0||t<0||e>=this.nav.width||t>=this.nav.height?!0:this.nav.blocked[t*this.nav.width+e]===1}setOrder(e,t){this.playerOrders[e]=t,this.paths[e]=[],this.haulWalking[e]=0,this.activity[e]="haul"}indexOf(e){return this.ids.indexOf(e)}carriedBy(e){return this.haulItems.find(t=>t.carrierId===e)}openCell(e,t){return e<0||t<0||e>=this.nav.width||t>=this.nav.height?!1:this.nav.blocked[t*this.nav.width+e]===0}footprintFree(e,t,n,s){for(let r=0;r<s;r++)for(let o=0;o<n;o++){const a=e+o,l=t+r;if(a<0||l<0||a>=this.nav.width||l>=this.nav.height||this.fixedBlocked[l*this.nav.width+a])return!1;for(const c of this.haulItems)if(!(c.carrierId!==0||!c.blocks)&&a>=c.x&&a<c.x+c.w&&l>=c.z&&l<c.z+c.d)return!1}return!0}standBeside(e,t){return this.approach(e,t)!==null}approach(e,t){const n={x:Math.floor(this.columns.x[e]),z:Math.floor(this.columns.z[e])},s=[];t.blocks||s.push({x:t.x,z:t.z});for(let r=0;r<t.d;r++)for(let o=0;o<t.w;o++){const a=t.x+o,l=t.z+r;for(const[c,u]of[[1,0],[-1,0],[0,1],[0,-1]]){const h=a+c,f=l+u;h>=t.x&&h<t.x+t.w&&f>=t.z&&f<t.z+t.d||this.openCell(h,f)&&(s.some(m=>m.x===h&&m.z===f)||s.push({x:h,z:f}))}}s.sort((r,o)=>Math.abs(r.x-n.x)+Math.abs(r.z-n.z)-(Math.abs(o.x-n.x)+Math.abs(o.z-n.z)));for(const r of s)if(r.x===n.x&&r.z===n.z||yl(n,r,this.nav))return r;return null}stepHaul(e){for(let t=0;t<this.columns.count;t++)if(!(this.activity[t]!=="haul"||!this.playerOrders[t])){if(this.paths[t].length===0){if(this.haulWalking[t]){this.finishOrder(t);continue}const n=this.goalFor(t);if(!n){this.clearOrder(t);continue}const s={x:Math.floor(this.columns.x[t]),z:Math.floor(this.columns.z[t])};if(s.x===n.x&&s.z===n.z){this.finishOrder(t);continue}const r=yl(s,n,this.nav);if(!r||r.length===0){this.clearOrder(t);continue}this.paths[t]=r,this.haulWalking[t]=1}this.walkPath(t,e)}}goalFor(e){const t=this.playerOrders[e];if(!t)return null;if(t.kind==="move")return this.openCell(t.x,t.z)?{x:t.x,z:t.z}:null;if(t.kind==="pickup"){const s=this.haulItems.find(r=>r.id===t.itemId);return!s||s.carrierId!==0?null:this.approach(e,s)}const n=this.carriedBy(this.ids[e]);return!n||!this.footprintFree(t.x,t.z,n.w,n.d)?null:this.approach(e,{...n,x:t.x,z:t.z})}walkPath(e,t){const n=this.paths[e],s=n[0];if(!s)return;const r=s.x+.5,o=s.z+.5,a=this.columns.x,l=this.columns.z;for(let p=0;p<this.columns.count;p++){if(p===e)continue;const d=Math.hypot(a[p]-r,l[p]-o)<.42,b=Math.hypot(a[p]-a[e],l[p]-l[e])<1;if(d&&b){this.wait[e]=.15,this.columns.moving[e]=0;return}}const c=r-a[e],u=o-l[e],h=Math.hypot(c,u);if(h<.05){a[e]=r,l[e]=o,n.shift(),this.columns.moving[e]=0;return}const f=Math.min(h,1.45*t);a[e]+=c/h*f,l[e]+=u/h*f,this.columns.phase[e]+=t*9;const m=Math.atan2(c,u),_=this.columns.yaw[e],g=Math.atan2(Math.sin(m-_),Math.cos(m-_));this.columns.yaw[e]=_+g*(1-Math.exp(-10*t)),this.columns.moving[e]=1}finishOrder(e){const t=this.playerOrders[e];if((t==null?void 0:t.kind)==="pickup"){const n=this.haulItems.find(s=>s.id===t.itemId);n&&n.carrierId===0&&(n.carrierId=this.ids[e])}else if((t==null?void 0:t.kind)==="place"){const n=this.carriedBy(this.ids[e]);n&&this.footprintFree(t.x,t.z,n.w,n.d)&&(n.x=t.x,n.z=t.z,n.carrierId=0)}this.paintItems(),this.clearOrder(e)}clearOrder(e){this.playerOrders[e]=null,this.paths[e]=[],this.haulWalking[e]=0,this.activity[e]="wander"}syncCarried(){for(const e of this.haulItems){if(e.carrierId===0)continue;const t=this.indexOf(e.carrierId);t<0||(e.x=Math.floor(this.columns.x[t]),e.z=Math.floor(this.columns.z[t]))}}paintItems(){this.nav.blocked.set(this.fixedBlocked);const e=this.nav.width;for(const t of this.haulItems)if(!(!t.blocks||t.carrierId!==0))for(let n=0;n<t.d;n++)for(let s=0;s<t.w;s++){const r=t.x+s,o=t.z+n;r<0||o<0||r>=e||o>=this.nav.height||(this.nav.blocked[o*e+r]=1)}}stepNeeds(e){const t=e/3e3,n=e/(40*60),s=e/(45*60);for(let r=0;r<this.columns.count;r++){const o=this.needs[r];o.food=En(o.food-t),o.rest=En(o.rest-n),o.recreation=En(o.recreation-s)}}snapshot(){for(let e=0;e<this.columns.count;e++)this.copyCurrentToPrevious(e)}copyCurrentToPrevious(e){this.columns.prevX[e]=this.columns.x[e],this.columns.prevZ[e]=this.columns.z[e],this.columns.prevYaw[e]=this.columns.yaw[e],this.columns.prevPhase[e]=this.columns.phase[e]}random(){let e=this.rngState|0;e=e+1831565813|0,this.rngState=e>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function l_(i){if((i.backend??"typescript")==="wasm")throw new Error("The Zig WebAssembly backend is not linked into this build. See docs/ENGINE.md.");return new o_(i)}function El(i,e){return e===null?!1:i.some(t=>t.id===e&&t.state==="accepted")}function c_(i){return{stated:"objectivism",certainty:En(.9-i*.03),seeds:[],charisma:.35+i%3*.12,suggestibility:.22+i%4*.06,receptivity:.82,residence:"founder",integrity:1,morale:En(.86-i*.02),force:"none",laborHoursLeft:14,inventory:u_()}}function u_(){return{food:0,timber:0,stone:0,ore:0,power:0,goldOre:0}}function Tl(i){return{...i,seeds:i.seeds.map(e=>({...e})),inventory:{...i.inventory}}}function f_(i){const e={};return Ol.forEach((t,n)=>{e[t]=(i*3+n*5)%9}),e}function En(i){return i<0?0:i>1?1:i}function h_(i=kl){return Au(i)}function d_(i,e){const t=new Uint8Array(i.width*i.height),n=(s,r)=>{s<0||r<0||s>=i.width||r>=i.height||(t[r*i.width+s]=1)};for(let s=0;s<i.height;s++)for(let r=0;r<i.width;r++){const o=i.terrain[s*i.width+r];(o==="water"||o==="stream")&&n(r,s)}for(const s of i.walls)n(s.x,s.z);for(const s of i.props)if(s.blocks!==!1&&!s.movable)for(const[r,o]of p_(s))n(r,o);for(const s of i.animals)for(let r=0;r<s.d;r++)for(let o=0;o<s.w;o++)n(s.x+o,s.z+r);for(const s of i.figures)s.wander||n(s.x,s.z);return{width:i.width,height:i.height,blocked:t}}function p_(i){const e=[],t=i.w??1,n=i.d??1;for(let s=0;s<n;s++)for(let r=0;r<t;r++)e.push([i.x+r,i.z+s]);return e}const m_=38;function __(i){const e=[],t=[],n=new Map;let s="default";const r=l=>{let c=n.get(l);return c||(c={pos:[],nrm:[],uv:[]},n.set(l,c)),c},o=i.split(/\r?\n/);for(const l of o){const c=l.trim();if(c.length===0||c.startsWith("#"))continue;const u=c.split(/\s+/),h=u[0];if(h==="v"&&u.length>=4)e.push(Number(u[1]),Number(u[2]),-Number(u[3]));else if(h==="vt"&&u.length>=3)t.push(Number(u[1]),Number(u[2]));else if(h==="usemtl")s=u[1]??"default";else if(h==="f"&&u.length>=4){const f=[];let m=!1;for(let g=1;g<u.length;g++){const p=u[g].split("/"),d=wl(p[0],e.length/3),b=p.length>1&&p[1].length>0?wl(p[1],t.length/2):-1;if(d<0){m=!0;break}f.push({pi:d,ti:b})}if(m||f.length<3)continue;const _=r(s);for(let g=1;g+1<f.length;g++)g_(_,e,t,f[0],f[g],f[g+1])}}const a=[];for(const[l,c]of n){if(c.pos.length===0)continue;const u=new Lt;u.setAttribute("position",new ut(c.pos,3)),u.setAttribute("normal",new ut(c.nrm,3)),u.setAttribute("uv",new ut(c.uv,2)),a.push({material:l,geometry:u,edges:new ou(u,m_)})}return{parts:a}}function wl(i,e){if(!i)return-1;const t=Number(i);if(!Number.isFinite(t)||t===0)return-1;const n=t<0?e+t:t-1;return n>=0&&n<e?n:-1}function g_(i,e,t,n,s,r){const o=e[n.pi*3],a=e[n.pi*3+1],l=e[n.pi*3+2],c=e[s.pi*3],u=e[s.pi*3+1],h=e[s.pi*3+2],f=e[r.pi*3],m=e[r.pi*3+1],_=e[r.pi*3+2],g=c-o,p=u-a,d=h-l,b=f-o,x=m-a,E=_-l;let L=p*E-d*x,R=d*b-g*E,w=g*x-p*b;const X=Math.hypot(L,R,w);if(X<1e-8)return;L/=X,R/=X,w/=X;const M=[n,s,r],T=[[o,a,l],[c,u,h],[f,m,_]];for(let k=0;k<3;k++){i.pos.push(T[k][0],T[k][1],T[k][2]),i.nrm.push(L,R,w);const q=M[k].ti;q>=0?i.uv.push(t[q*2],t[q*2+1]):i.uv.push(0,0)}}const v_=new co({color:2235416});function jn(i,e){const t=new Ct,n=e.stuff??"Wood",s=e.skipPrefix??[];for(const a of i.parts){if(s.some(h=>a.material.startsWith(h)))continue;const l=e.materials.get(a.material,n,e.tint??null),c=new et(a.geometry,l);c.castShadow=!0,c.receiveShadow=!0,t.add(c);const u=new ru(a.edges,v_);u.castShadow=!1,t.add(u)}const r=e.scale??1,o=e.stretch??[1,1,1];return t.scale.set(r*o[0],r*o[1],r*o[2]),t.rotation.y=Ln.degToRad(e.yaw??0),t}function x_(i,e,t){const n=new Ct;n.name=i.id,n.position.set(i.x+i.w/2,0,i.z+i.d/2),n.rotation.y=Ln.degToRad(i.yaw);const s=e.get(i.model);s&&n.add(jn(s,{materials:t}));const r=[],o=i.leg?e.get(i.leg):void 0;if(o)for(const a of i.hips){const l=new Ct;l.position.set(a[0],a[1],a[2]),l.rotation.order="XYZ";const c=a[0]>=0?1:-1;l.rotation.z=Ln.degToRad(c*i.legSplay);const u=jn(o,{materials:t});u.position.y=-i.legLength,l.add(u),n.add(l),r.push(l)}return{root:n,pivots:r,swing:i.legSwing}}function M_(i,e){for(let t=0;t<i.length;t++){const n=i[t];n.root.position.y=Math.abs(Math.sin(e*1.4+t))*.012,n.pivots.forEach((s,r)=>{const o=(r+(r>>1))%2*Math.PI,a=Math.sin(e*1.7+o+t)*Math.min(n.swing,22)*.35;s.rotation.x=Ln.degToRad(a)})}}function y_(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Lt;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(h.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m])}if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0;const h=[];for(let f=0;f<i.length;++f){const m=i[f].index;for(let _=0;_<m.count;++_)h.push(m.getX(_)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Al(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const m=[];for(let g=0;g<o[u].length;++g)m.push(o[u][g][f]);const _=Al(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function Al(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}const o=new e(r);let a=0;for(let c=0;c<i.length;++c)o.set(i[c].array,a),a+=i[c].array.length;const l=new Wt(o,t,n);return s!==void 0&&(l.gpuType=s),l}function S_(i,e,t,n){const s=[],r=new Map;for(const a of i.props){const l=e.get(a.model);if(!l)continue;const c=jn(l,{materials:t,stuff:a.stuff,tint:a.tint?new Ue(a.tint):null,scale:a.scale,stretch:a.stretch,yaw:a.yaw,skipPrefix:a.skipPrefix}),u=a.w??1,h=a.d??1;if(c.position.set(a.x+u/2,a.y??0,a.z+h/2),c.name=a.id,a.movable){if(c.userData.itemId=a.id,n.add(c),a.model==="campfire"){const f=new uu(16747068,2.4,7,2);f.position.set(0,.55,0),c.add(f)}s.push({id:a.id,group:c,w:u,d:h});continue}c.updateMatrixWorld(!0),c.traverse(f=>{if(!(f instanceof et))return;const m=f.geometry.clone();m.applyMatrix4(f.matrixWorld);const _=f.material;if(Array.isArray(_)){m.dispose();return}const g=Object.keys(m.attributes).sort().join(","),p=`${_.uuid}|${g}`;let d=r.get(p);d||(d={material:_,geometries:[]},r.set(p,d)),d.geometries.push(m)})}const o=new Ct;o.name="static-props";for(const[a,l]of r)for(const c of b_(l.geometries)){const u=new et(c,l.material);u.name=`static-${a.slice(0,8)}`,u.castShadow=!0,u.receiveShadow=!0,u.frustumCulled=!0,o.add(u)}return n.add(o),s}function b_(i){if(i.length<=1||!E_(i))return i;const e=y_(i,!1);for(const t of i)t.dispose();return e?[e]:[]}function E_(i){const e=i[0],t=Object.keys(e.attributes).sort().join(","),n=e.index!==null;for(const s of i){if(s.index!==null!==n||Object.keys(s.attributes).sort().join(",")!==t)return!1;for(const r of Object.keys(e.attributes)){const o=e.attributes[r],a=s.attributes[r];if(!o||!a||o.itemSize!==a.itemSize)return!1}}return!0}function Rl(i,e,t){const n=new Ct;return n.name=i.id,i.parts.forEach((s,r)=>{const o=e.get(s);o&&n.add(jn(o,{materials:t,stuff:"Fabric",tint:new Ue(i.tints[r]??"#ffffff")}))}),n.position.set(i.x+.5,0,i.z+.5),n.rotation.y=Ln.degToRad(i.yaw??0),n}function T_(i,e,t,n,s,r,o){const a=document.createElement("div");a.id="action-bar",a.innerHTML=`
    <span id="action-name"></span>
    <button type="button" id="act-move">Move</button>
    <button type="button" id="act-pickup">Pick up</button>
    <button type="button" id="act-place" disabled>Place</button>
  `,i.append(a);const l=a.querySelector("#action-name"),c=a.querySelector("#act-move"),u=a.querySelector("#act-pickup"),h=a.querySelector("#act-place");if(!(l instanceof HTMLElement))throw new Error("Missing action name");if(!(c instanceof HTMLButtonElement))throw new Error("Missing Move");if(!(u instanceof HTMLButtonElement))throw new Error("Missing Pick up");if(!(h instanceof HTMLButtonElement))throw new Error("Missing Place");const f=new et(new ur(.42,.58,28),new Jn({color:14993802,side:Bt,depthTest:!1}));f.rotation.x=-Math.PI/2,f.position.y=.06,f.renderOrder=2,f.visible=!1,f.frustumCulled=!1,n.add(f);const m=new du,_=new Ae,g=new Jt(new D(0,1,0),0),p=new D,d=r.map(N=>N.pick),b=o.map(N=>N.group);let x=null,E=null,L=null;const R=s.roster(),w=()=>{c.classList.toggle("is-armed",E==="move"),u.classList.toggle("is-armed",E==="pickup"),h.classList.toggle("is-armed",E==="place")},X=N=>{x=N,E=null,a.classList.add("is-open"),l.textContent=R.names[N]??"",r.forEach((H,$)=>H.label.classList.toggle("is-selected",$===N)),w()},M=()=>{x=null,E=null,a.classList.remove("is-open"),f.visible=!1;for(const N of r)N.label.classList.remove("is-selected");w()},T=N=>{x!==null&&(E=E===N?null:N,w())};c.addEventListener("click",()=>T("move")),u.addEventListener("click",()=>T("pickup")),h.addEventListener("click",()=>{h.disabled||T("place")}),r.forEach((N,H)=>{N.label.addEventListener("click",$=>{$.stopPropagation(),X(H)})}),window.addEventListener("keydown",N=>{N.key==="Escape"&&M()});const k=N=>{const H=e.getBoundingClientRect();_.x=(N.clientX-H.left)/H.width*2-1,_.y=-((N.clientY-H.top)/H.height)*2+1,m.setFromCamera(_,t)},q=()=>m.ray.intersectPlane(g,p)?{x:Math.floor(p.x),z:Math.floor(p.z)}:null,J=N=>{let H=N;for(;H;){const $=H.userData.itemId;if(typeof $=="string")return $;H=H.parent}return null},P=()=>{const N=m.intersectObjects(b,!0)[0],H=J((N==null?void 0:N.object)??null);if(H)return H;const $=q();if(!$)return null;const U=s.items().find(V=>V.carrierId===0&&$.x>=V.x&&$.x<V.x+V.w&&$.z>=V.z&&$.z<V.z+V.d);return(U==null?void 0:U.id)??null},F=()=>{const N=m.intersectObjects(d,!1)[0],H=N==null?void 0:N.object.userData.colonistIndex;return typeof H=="number"?H:-1},Y=N=>{if(k(N),x!==null&&(E==="move"||E==="place")){const $=q(),U=R.ids[x];if(!$||U===void 0)return;(E==="move"?s.orderMove(U,$.x,$.z):s.orderPlace(U,$.x,$.z))&&(E=null,w());return}if(x!==null&&E==="pickup"){const $=P(),U=R.ids[x];$&&U!==void 0&&s.orderPickup(U,$)&&(E=null,w());return}const H=F();H>=0?X(H):M()};return e.addEventListener("pointerdown",N=>{N.button===0&&(L={x:N.clientX,y:N.clientY})}),e.addEventListener("pointerup",N=>{if(N.button!==0||!L)return;const H=Math.hypot(N.clientX-L.x,N.clientY-L.y);L=null,H<5&&Y(N)}),{update(N){const H=x===null?0:R.ids[x]??0,$=H!==0&&s.items().some(V=>V.carrierId===H);if(h.disabled=!$,!$&&E==="place"&&(E=null,w()),x===null)f.visible=!1;else{const V=N[x];f.visible=!0,f.position.x=(V==null?void 0:V.x)??0,f.position.z=(V==null?void 0:V.z)??0}const U=s.items();for(const V of o){const Z=U.find(B=>B.id===V.id);if(Z)if(Z.carrierId!==0){const B=R.ids.indexOf(Z.carrierId),K=B>=0?N[B]:void 0;if(!K)continue;V.group.position.set(K.x,1.25,K.z)}else V.group.position.set(Z.x+V.w/2,0,Z.z+V.d/2)}}}}const Ki="./assets/isorim",w_={color:[.29,.54,.52],map:null,tint:!1,emissive:!1},A_={color:[.84,.74,.6],map:null,tint:!1,emissive:!1},R_={color:[.84,.74,.6],map:null,tint:!1,emissive:!1},C_={color:[.7056,.6216,.504],map:null,tint:!1,emissive:!1},L_={color:[.42,.3,.22],map:null,tint:!1,emissive:!1},P_={color:[.42,.3,.22],map:null,tint:!1,emissive:!1},D_={color:[.3528,.252,.1848],map:null,tint:!1,emissive:!1},U_={color:[.62,.48,.34],map:null,tint:!1,emissive:!1},I_={color:[.94,.93,.89],map:null,tint:!1,emissive:!1},N_={color:[.94,.93,.89],map:null,tint:!1,emissive:!1},F_={color:[.7896,.7812,.7476],map:null,tint:!1,emissive:!1},O_={color:[.27,.2,.16],map:null,tint:!1,emissive:!1},k_={color:[.4,.29,.21],map:null,tint:!1,emissive:!1},z_={color:[.24,.18,.15],map:null,tint:!1,emissive:!1},B_={color:[.336,.2436,.1764],map:null,tint:!1,emissive:!1},G_={color:[.88,.8,.44],map:null,tint:!1,emissive:!1},H_={color:[.74,.6,.5],map:null,tint:!1,emissive:!1},V_={color:[.74,.6,.5],map:null,tint:!1,emissive:!1},W_={color:[.6216,.504,.42],map:null,tint:!1,emissive:!1},X_={color:[.94,.72,.36],map:null,tint:!1,emissive:!1},q_={color:[.74,.4,.36],map:null,tint:!1,emissive:!1},Y_={color:[.74,.4,.36],map:null,tint:!1,emissive:!1},j_={color:[.6216,.336,.3024],map:null,tint:!1,emissive:!1},$_={color:[.56,.42,.3],map:null,tint:!1,emissive:!1},K_={color:[.56,.42,.3],map:null,tint:!1,emissive:!1},Z_={color:[.4704,.3528,.252],map:null,tint:!1,emissive:!1},J_={color:[.88,.86,.82],map:null,tint:!1,emissive:!1},Q_={color:[.58,.52,.46],map:null,tint:!1,emissive:!1},e0={color:[.58,.52,.46],map:null,tint:!1,emissive:!1},t0={color:[.4872,.4368,.3864],map:null,tint:!1,emissive:!1},n0={color:[.82,.2,.18],map:null,tint:!1,emissive:!1},i0={color:[.28,.26,.24],map:null,tint:!1,emissive:!1},s0={color:[.15,.15,.17],map:null,tint:!1,emissive:!1},r0={color:[.22,.42,.8],map:null,tint:!1,emissive:!1},a0={color:[.4,.38,.34],map:null,tint:!1,emissive:!1},o0={color:[.94,.9,.82],map:null,tint:!1,emissive:!1},l0={color:[.82,.6,.36],map:null,tint:!1,emissive:!1},c0={color:[.82,.6,.36],map:null,tint:!1,emissive:!1},u0={color:[.6888,.504,.3024],map:null,tint:!1,emissive:!1},f0={color:[.8,.18,.16],map:null,tint:!1,emissive:!1},h0={color:[.92,.7,.22],map:null,tint:!1,emissive:!1},d0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},p0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},m0={color:[.9,.72,.26],map:null,tint:!1,emissive:!1},_0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},g0={color:[.66,.66,.71],map:null,tint:!1,emissive:!1},v0={color:[.66,.66,.71],map:null,tint:!1,emissive:!1},x0={color:[.5544,.5544,.5964],map:null,tint:!1,emissive:!1},M0={color:[.86,.8,.6],map:null,tint:!1,emissive:!1},y0={color:[.6,.5,.32],map:null,tint:!1,emissive:!1},S0={color:[.5,.4,.26],map:null,tint:!1,emissive:!1},b0={color:[.92,.86,.76],map:null,tint:!1,emissive:!1},E0={color:[.78,.62,.42],map:null,tint:!1,emissive:!1},T0={color:[.78,.62,.42],map:null,tint:!1,emissive:!1},w0={color:[.6552,.5208,.3528],map:null,tint:!1,emissive:!1},A0={color:[.17,.16,.17],map:null,tint:!1,emissive:!1},R0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},C0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},L0={color:[.7728,.7644,.7308],map:null,tint:!1,emissive:!1},P0={color:[.86,.66,.62],map:null,tint:!1,emissive:!1},D0={color:[.11,.1,.1],map:null,tint:!1,emissive:!1},U0={color:[.9,.86,.78],map:null,tint:!1,emissive:!1},I0={color:[.64,.46,.3],map:null,tint:!1,emissive:!1},N0={color:[.64,.46,.3],map:null,tint:!1,emissive:!1},F0={color:[.5376,.3864,.252],map:null,tint:!1,emissive:!1},O0={color:[.26,.23,.21],map:null,tint:!1,emissive:!1},k0={color:[.84,.82,.78],map:null,tint:!1,emissive:!1},z0={color:[.56,.52,.48],map:null,tint:!1,emissive:!1},B0={color:[.56,.52,.48],map:null,tint:!1,emissive:!1},G0={color:[.4704,.4368,.4032],map:null,tint:!1,emissive:!1},H0={color:[.86,.84,.8],map:null,tint:!1,emissive:!1},V0={color:[.8,.65,.45],map:null,tint:!1,emissive:!1},W0={color:[.8,.65,.45],map:null,tint:!1,emissive:!1},X0={color:[.672,.546,.378],map:null,tint:!1,emissive:!1},q0={color:[.92,.66,.2],map:null,tint:!1,emissive:!1},Y0={color:[.82,.78,.7],map:null,tint:!1,emissive:!1},j0={color:[.6,.48,.36],map:null,tint:!1,emissive:!1},$0={color:[.22,.4,.3],map:null,tint:!1,emissive:!1},K0={color:[.92,.56,.2],map:null,tint:!1,emissive:!1},Z0={color:[.55,.54,.56],map:null,tint:!1,emissive:!1},J0={color:[.55,.54,.56],map:null,tint:!1,emissive:!1},Q0={color:[.462,.4536,.4704],map:null,tint:!1,emissive:!1},eg={color:[.32,.23,.17],map:null,tint:!1,emissive:!1},tg={color:[.72,.62,.48],map:null,tint:!1,emissive:!1},ng={color:[.54,.4,.28],map:null,tint:!1,emissive:!1},ig={color:[.54,.4,.28],map:null,tint:!1,emissive:!1},sg={color:[.4536,.336,.2352],map:null,tint:!1,emissive:!1},rg={color:[.26,.24,.22],map:null,tint:!1,emissive:!1},ag={color:[.42,.36,.32],map:null,tint:!1,emissive:!1},og={color:[.36,.44,.56],map:null,tint:!1,emissive:!1},lg={color:[.36,.33,.3],map:null,tint:!1,emissive:!1},cg={color:[.94,.94,.96],map:null,tint:!1,emissive:!1},ug={color:[.94,.94,.96],map:null,tint:!1,emissive:!1},fg={color:[.7896,.7896,.8064],map:null,tint:!1,emissive:!1},hg={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},dg={color:[.88,.74,.54],map:null,tint:!1,emissive:!1},pg={color:[.88,.74,.54],map:null,tint:!1,emissive:!1},mg={color:[.7392,.6216,.4536],map:null,tint:!1,emissive:!1},_g={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},gg={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},vg={color:[.82,.44,.2],map:null,tint:!1,emissive:!1},xg={color:[.82,.44,.2],map:null,tint:!1,emissive:!1},Mg={color:[.24,.18,.15],map:null,tint:!1,emissive:!1},yg={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},Sg={color:[.82,.63,.42],map:null,tint:!1,emissive:!1},bg={color:[.82,.63,.42],map:null,tint:!1,emissive:!1},Eg={color:[.6888,.5292,.3528],map:null,tint:!1,emissive:!1},Tg={color:[.84,.8,.72],map:null,tint:!1,emissive:!1},wg={color:[.84,.8,.72],map:null,tint:!1,emissive:!1},Ag={color:[.7056,.672,.6048],map:null,tint:!1,emissive:!1},Rg={color:[.62,.6,.58],map:null,tint:!1,emissive:!1},Cg={color:[.92,.56,.2],map:null,tint:!1,emissive:!1},Lg={color:[.84,.83,.8],map:null,tint:!1,emissive:!1},Pg={color:[.84,.83,.8],map:null,tint:!1,emissive:!1},Dg={color:[.92,.56,.2],map:null,tint:!1,emissive:!1},Ug={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},Ig={color:[.74,.54,.36],map:null,tint:!1,emissive:!1},Ng={color:[.74,.54,.36],map:null,tint:!1,emissive:!1},Fg={color:[.6216,.4536,.3024],map:null,tint:!1,emissive:!1},Og={color:[.62,.5,.38],map:null,tint:!1,emissive:!1},kg={color:[.62,.5,.38],map:null,tint:!1,emissive:!1},zg={color:[.5208,.42,.3192],map:null,tint:!1,emissive:!1},Bg={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},Gg={color:[.21,.18,.16],map:null,tint:!1,emissive:!1},Hg={color:[.85,.81,.69],map:null,tint:!1,emissive:!1},Vg={color:[.2,.14,.11],map:null,tint:!1,emissive:!1},Wg={color:[.5,.33,.22],map:null,tint:!1,emissive:!1},Xg={color:[.5,.33,.22],map:null,tint:!1,emissive:!1},qg={color:[.42,.2772,.1848],map:null,tint:!1,emissive:!1},Yg={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},jg={color:[.56,.58,.63],map:null,tint:!1,emissive:!1},$g={color:[.56,.58,.63],map:null,tint:!1,emissive:!1},Kg={color:[.88,.88,.88],map:null,tint:!1,emissive:!1},Zg={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},Jg={color:[.86,.8,.7],map:null,tint:!1,emissive:!1},Qg={color:[.68,.56,.42],map:null,tint:!1,emissive:!1},ev={color:[.68,.56,.42],map:null,tint:!1,emissive:!1},tv={color:[.5712,.4704,.3528],map:null,tint:!1,emissive:!1},nv={color:[.3,.46,.24],map:null,tint:!1,emissive:!1},iv={color:[.7,.78,.46],map:null,tint:!1,emissive:!1},sv={color:[.42,.6,.3],map:null,tint:!1,emissive:!1},rv={color:[.42,.6,.3],map:null,tint:!1,emissive:!1},av={color:[.3528,.504,.252],map:null,tint:!1,emissive:!1},ov={color:[.86,.73,.48],map:null,tint:!1,emissive:!1},lv={color:[.86,.73,.48],map:null,tint:!1,emissive:!1},cv={color:[.7224,.6132,.4032],map:null,tint:!1,emissive:!1},uv={color:[.92,.88,.8],map:null,tint:!1,emissive:!1},fv={color:[.72,.64,.52],map:null,tint:!1,emissive:!1},hv={color:[.72,.64,.52],map:null,tint:!1,emissive:!1},dv={color:[.6048,.5376,.4368],map:null,tint:!1,emissive:!1},pv={color:[.26,.3,.38],map:null,tint:!1,emissive:!1},mv={color:[.182,.21,.266],map:null,tint:!1,emissive:!1},_v={color:[.46,.36,.28],map:null,tint:!1,emissive:!1},gv={color:[.62,.52,.4],map:null,tint:!1,emissive:!1},vv={color:[.3864,.3024,.2352],map:null,tint:!1,emissive:!1},xv={color:[.72,.62,.42],map:null,tint:!1,emissive:!1},Mv={color:[.56,.42,.28],map:null,tint:!1,emissive:!1},yv={color:[.392,.294,.196],map:null,tint:!1,emissive:!1},Sv={color:[.5,.36,.26],map:null,tint:!1,emissive:!1},bv={color:[.5,.36,.26],map:null,tint:!1,emissive:!1},Ev={color:[.42,.3024,.2184],map:null,tint:!1,emissive:!1},Tv={color:[.84,.68,.54],map:null,tint:!1,emissive:!1},wv={color:[.47,.56,.66],map:null,tint:!1,emissive:!1},Av={color:[.34,.4,.48],map:null,tint:!1,emissive:!1},Rv={color:[.32,.37,.44],map:null,tint:!1,emissive:!1},Cv={color:[.8,.62,.42],map:null,tint:!1,emissive:!1},Lv={color:[.18,.17,.17],map:null,tint:!1,emissive:!1},Pv={color:[.86,.7,.66],map:null,tint:!1,emissive:!1},Dv={color:[.86,.7,.66],map:null,tint:!1,emissive:!1},Uv={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},Iv={color:[.17,.17,.2],map:null,tint:!1,emissive:!1},Nv={color:[.17,.17,.2],map:null,tint:!1,emissive:!1},Fv={color:[.1428,.1428,.168],map:null,tint:!1,emissive:!1},Ov={color:[.9,.68,.66],map:null,tint:!1,emissive:!1},kv={color:[.9,.68,.66],map:null,tint:!1,emissive:!1},zv={color:[.756,.5712,.5544],map:null,tint:!1,emissive:!1},Bv={color:[.94,.6,.6],map:null,tint:!1,emissive:!1},Gv={color:[.2,.19,.19],map:null,tint:!1,emissive:!1},Hv={color:[.52,.52,.52],map:null,tint:!1,emissive:!1},Vv={color:[.34,.33,.33],map:null,tint:!1,emissive:!1},Wv={color:[.4368,.4368,.4368],map:null,tint:!1,emissive:!1},Xv={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},qv={color:[.5,.44,.4],map:null,tint:!1,emissive:!1},Yv={color:[.5,.44,.4],map:null,tint:!1,emissive:!1},jv={color:[.42,.3696,.336],map:null,tint:!1,emissive:!1},$v={color:[.84,.64,.62],map:null,tint:!1,emissive:!1},Kv={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},Zv={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},Jv={color:[.4368,.42,.4032],map:null,tint:!1,emissive:!1},Qv={color:[.9,.87,.8],map:null,tint:!1,emissive:!1},ex={color:[.26,.23,.21],map:null,tint:!1,emissive:!1},tx={color:[.26,.23,.21],map:null,tint:!1,emissive:!1},nx={color:[.95,.95,.96],map:null,tint:!1,emissive:!1},ix={color:[.95,.95,.96],map:null,tint:!1,emissive:!1},sx={color:[.798,.798,.8064],map:null,tint:!1,emissive:!1},rx={color:[.62,.56,.4],map:null,tint:!1,emissive:!1},ax={color:[.434,.392,.28],map:null,tint:!1,emissive:!1},ox={color:[.92,.86,.76],map:null,tint:!1,emissive:!1},lx={color:[.68,.42,.26],map:null,tint:!1,emissive:!1},cx={color:[.68,.42,.26],map:null,tint:!1,emissive:!1},ux={color:[.5712,.3528,.2184],map:null,tint:!1,emissive:!1},fx={color:[.78,.82,.89],map:null,tint:!1,emissive:!1},hx={color:[.72,.77,.85],map:null,tint:!1,emissive:!1},dx={color:[.9,.92,.95],map:null,tint:!1,emissive:!1},px={color:[.84,.87,.92],map:null,tint:!1,emissive:!1},mx={color:[.64,.69,.77],map:null,tint:!1,emissive:!1},_x={color:[.62,.66,.74],map:null,tint:!1,emissive:!1},gx={color:[.44,.4,.24],map:null,tint:!1,emissive:!1},vx={color:[.54,.52,.34],map:null,tint:!1,emissive:!1},xx={color:[.54,.52,.34],map:null,tint:!1,emissive:!1},Mx={color:[.4536,.4368,.2856],map:null,tint:!1,emissive:!1},yx={color:[.78,.2,.18],map:null,tint:!1,emissive:!1},Sx={color:[.88,.76,.46],map:null,tint:!1,emissive:!1},bx={color:[.33,.25,.2],map:null,tint:!1,emissive:!1},Ex={color:[.46,.56,.74],map:null,tint:!1,emissive:!1},Tx={color:[.62,.5,.42],map:null,tint:!1,emissive:!1},wx={color:[.52,.38,.26],map:null,tint:!1,emissive:!1},Ax={color:[.22,.15,.14],map:null,tint:!1,emissive:!1},Rx={color:[.38,.25,.23],map:null,tint:!1,emissive:!1},Cx={color:[.38,.25,.23],map:null,tint:!1,emissive:!1},Lx={color:[.3192,.21,.1932],map:null,tint:!1,emissive:!1},Px={color:[.22,.17,.15],map:null,tint:!1,emissive:!1},Dx={color:[.36,.28,.24],map:null,tint:!1,emissive:!1},Ux={color:[.36,.28,.24],map:null,tint:!1,emissive:!1},Ix={color:[.3024,.2352,.2016],map:null,tint:!1,emissive:!1},Nx={color:[.92,.92,.94],map:null,tint:!1,emissive:!1},Fx={color:[.92,.92,.94],map:null,tint:!1,emissive:!1},Ox={color:[.7728,.7728,.7896],map:null,tint:!1,emissive:!1},kx={color:[.8,.78,.74],map:null,tint:!1,emissive:!1},zx={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},Bx={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},Gx={color:[.4368,.42,.4032],map:null,tint:!1,emissive:!1},Hx={color:[.27,.22,.2],map:null,tint:!1,emissive:!1},Vx={color:[.27,.22,.2],map:null,tint:!1,emissive:!1},Wx={color:[.2268,.1848,.168],map:null,tint:!1,emissive:!1},Xx={color:[.66,.5,.32],map:null,tint:!1,emissive:!1},qx={color:[.74,.58,.36],map:null,tint:!1,emissive:!1},Yx={color:[.5544,.42,.2688],map:null,tint:!1,emissive:!1},jx={color:[.74,.76,.74],map:"Metal",tint:!1,emissive:!1},$x={color:[.46,.48,.46],map:"Metal",tint:!1,emissive:!1},Kx={color:[.3,.28,.27],map:null,tint:!1,emissive:!1},Zx={color:[.62,.7,.36],map:"Bark",tint:!1,emissive:!1},Jx={color:[.44,.31,.21],map:"Bark",tint:!1,emissive:!1},Qx={color:[.92,.91,.86],map:"Bark",tint:!1,emissive:!1},eM={color:[.3,.22,.17],map:"Bark",tint:!1,emissive:!1},tM={color:[.21,.2,.19],map:null,tint:!1,emissive:!1},nM={color:[.84,.82,.76],map:"Bark",tint:!1,emissive:!1},iM={color:[.38,.42,.46],map:"Metal",tint:!1,emissive:!1},sM={color:[.33,.43,.82],map:null,tint:!1,emissive:!1},rM={color:[.45,.58,.31],map:null,tint:!1,emissive:!1},aM={color:[.36,.48,.27],map:null,tint:!1,emissive:!1},oM={color:[.52,.64,.37],map:null,tint:!1,emissive:!1},lM={color:[.44,.52,.64],map:"Fabric",tint:!1,emissive:!1},cM={color:[.52,.12,.1],map:null,tint:!1,emissive:!1},uM={color:[.22,.36,.58],map:null,tint:!1,emissive:!1},fM={color:[.62,.22,.18],map:null,tint:!1,emissive:!1},hM={color:[.32,.22,.12],map:null,tint:!1,emissive:!1},dM={color:[.78,.7,.58],map:"Wood",tint:!1,emissive:!1},pM={color:[.42,.37,.22],map:"Leaf",tint:!1,emissive:!1},mM={color:[.8,.64,.3],map:"Metal",tint:!1,emissive:!1},_M={color:[.38,.54,.32],map:"Leaf",tint:!1,emissive:!1},gM={color:[.56,.9,.74],map:null,tint:!1,emissive:!1},vM={color:[.72,.21,.19],map:null,tint:!1,emissive:!1},xM={color:[.45,.9,1],map:"Glow",tint:!1,emissive:!0},MM={color:[.74,.3,.16],map:"Metal",tint:!1,emissive:!1},yM={color:[.36,.22,.14],map:null,tint:!1,emissive:!1},SM={color:[.72,.56,.34],map:"Fabric",tint:!1,emissive:!1},bM={color:[.36,.26,.17],map:null,tint:!1,emissive:!1},EM={color:[.62,.61,.58],map:"Stone",tint:!1,emissive:!1},TM={color:[.96,.84,.32],map:null,tint:!1,emissive:!1},wM={color:[.97,.97,.95],map:null,tint:!1,emissive:!1},AM={color:[.36,.53,.25],map:"Leaf",tint:!1,emissive:!1},RM={color:[.5,.62,.38],map:"Leaf",tint:!1,emissive:!1},CM={color:[.62,.34,.3],map:"Fabric",tint:!1,emissive:!1},LM={color:[.94,.9,.82],map:null,tint:!1,emissive:!1},PM={color:[.96,.42,.18],map:"Glow",tint:!1,emissive:!0},DM={color:[.92,.82,.74],map:null,tint:!1,emissive:!1},UM={color:[.2,.44,.28],map:"Fabric",tint:!1,emissive:!1},IM={color:[1,.9,.48],map:"Flame",tint:!1,emissive:!0},NM={color:[1,.95,.72],map:"Glow",tint:!1,emissive:!0},FM={color:[.76,.76,.72],map:"Metal",tint:!1,emissive:!1},OM={color:[.44,.62,.3],map:null,tint:!1,emissive:!1},kM={color:[.66,.7,.52],map:null,tint:!1,emissive:!1},zM={color:[.66,.44,.26],map:null,tint:!1,emissive:!1},BM={color:[.92,.78,.36],map:null,tint:!1,emissive:!1},GM={color:[.86,.2,.2],map:null,tint:!1,emissive:!1},HM={color:[.8,.72,.62],map:null,tint:!1,emissive:!1},VM={color:[.84,.8,.62],map:"Rock",tint:!1,emissive:!1},WM={color:[.44,.42,.4],map:"Rock",tint:!1,emissive:!1},XM={color:[.52,.7,.78],map:null,tint:!1,emissive:!1},qM={color:[.16,.22,.27],map:null,tint:!1,emissive:!1},YM={color:[1,1,1],map:"Glow",tint:!1,emissive:!0},jM={color:[1,.72,.3],map:"Glow",tint:!1,emissive:!0},$M={color:[.46,.94,.52],map:"Glow",tint:!1,emissive:!0},KM={color:[.98,.36,.3],map:"Glow",tint:!1,emissive:!0},ZM={color:[.48,.86,.96],map:"Glow",tint:!1,emissive:!0},JM={color:[.92,.74,.3],map:"Metal",tint:!1,emissive:!1},QM={color:[.3,.22,.16],map:"Fabric",tint:!1,emissive:!1},ey={color:[.2,.2,.22],map:"Metal",tint:!1,emissive:!1},ty={color:[.66,.68,.7],map:"Metal",tint:!1,emissive:!1},ny={color:[.36,.37,.4],map:"Metal",tint:!1,emissive:!1},iy={color:[.36,.4,.28],map:"Metal",tint:!1,emissive:!1},sy={color:[.84,.86,.88],map:"Metal",tint:!1,emissive:!1},ry={color:[.5,.34,.21],map:"Wood",tint:!1,emissive:!1},ay={color:[.8,.72,.38],map:"Fabric",tint:!1,emissive:!1},oy={color:[.66,.68,.32],map:null,tint:!1,emissive:!1},ly={color:[.56,.6,.28],map:null,tint:!1,emissive:!1},cy={color:[.38,.54,.28],map:"Leaf",tint:!1,emissive:!1},uy={color:[.7,.73,.76],map:"Metal",tint:!1,emissive:!1},fy={color:[.4,.43,.47],map:"Metal",tint:!1,emissive:!1},hy={color:[.82,.9,.96],map:null,tint:!1,emissive:!1},dy={color:[.4,.66,.46],map:"Stone",tint:!1,emissive:!1},py={color:[.96,.74,.22],map:"Glow",tint:!1,emissive:!1},my={color:[.88,.86,.78],map:null,tint:!1,emissive:!1},_y={color:[.94,.88,.92],map:"Leaf",tint:!1,emissive:!1},gy={color:[.6956,.6688,.736],map:"Leaf",tint:!1,emissive:!1},vy={color:[1,1,.9752],map:"Leaf",tint:!1,emissive:!1},xy={color:[.48,.64,.31],map:"Leaf",tint:!1,emissive:!1},My={color:[.3552,.4864,.248],map:"Leaf",tint:!1,emissive:!1},yy={color:[.576,.7424,.3286],map:"Leaf",tint:!1,emissive:!1},Sy={color:[.52,.64,.3],map:"Leaf",tint:!1,emissive:!1},by={color:[.3848,.4864,.24],map:"Leaf",tint:!1,emissive:!1},Ey={color:[.624,.7424,.318],map:"Leaf",tint:!1,emissive:!1},Ty={color:[.25,.43,.27],map:"Leaf",tint:!1,emissive:!1},wy={color:[.185,.3268,.216],map:"Leaf",tint:!1,emissive:!1},Ay={color:[.3,.4988,.2862],map:"Leaf",tint:!1,emissive:!1},Ry={color:[.29,.45,.27],map:"Leaf",tint:!1,emissive:!1},Cy={color:[.2146,.342,.216],map:"Leaf",tint:!1,emissive:!1},Ly={color:[.348,.522,.2862],map:"Leaf",tint:!1,emissive:!1},Py={color:[.82,.88,.62],map:"Leaf",tint:!1,emissive:!1},Dy={color:[.6068,.6688,.496],map:"Leaf",tint:!1,emissive:!1},Uy={color:[.984,1,.6572],map:"Leaf",tint:!1,emissive:!1},Iy={color:[.34,.57,.27],map:"Leaf",tint:!1,emissive:!1},Ny={color:[.2516,.4332,.216],map:"Leaf",tint:!1,emissive:!1},Fy={color:[.408,.6612,.2862],map:"Leaf",tint:!1,emissive:!1},Oy={color:[.8,.43,.19],map:"Leaf",tint:!1,emissive:!1},ky={color:[.592,.3268,.152],map:"Leaf",tint:!1,emissive:!1},zy={color:[.96,.4988,.2014],map:"Leaf",tint:!1,emissive:!1},By={color:[.38,.54,.25],map:"Leaf",tint:!1,emissive:!1},Gy={color:[.2812,.4104,.2],map:"Leaf",tint:!1,emissive:!1},Hy={color:[.456,.6264,.265],map:"Leaf",tint:!1,emissive:!1},Vy={color:[.23,.41,.25],map:"Leaf",tint:!1,emissive:!1},Wy={color:[.1702,.3116,.2],map:"Leaf",tint:!1,emissive:!1},Xy={color:[.276,.4756,.265],map:"Leaf",tint:!1,emissive:!1},qy={color:[.44,.6,.27],map:"Leaf",tint:!1,emissive:!1},Yy={color:[.3256,.456,.216],map:"Leaf",tint:!1,emissive:!1},jy={color:[.528,.696,.2862],map:"Leaf",tint:!1,emissive:!1},$y={color:[.31,.51,.23],map:"Leaf",tint:!1,emissive:!1},Ky={color:[.2294,.3876,.184],map:"Leaf",tint:!1,emissive:!1},Zy={color:[.372,.5916,.2438],map:"Leaf",tint:!1,emissive:!1},Jy={color:[.42,.57,.31],map:"Leaf",tint:!1,emissive:!1},Qy={color:[.3108,.4332,.248],map:"Leaf",tint:!1,emissive:!1},eS={color:[.504,.6612,.3286],map:"Leaf",tint:!1,emissive:!1},tS={color:[.9,.88,.82],map:"Fabric",tint:!1,emissive:!1},nS={color:[.5,.34,.21],map:"Wood",tint:!1,emissive:!1},iS={color:[.2,.16,.14],map:"Wood",tint:!1,emissive:!1},sS={color:[.7,.26,.24],map:null,tint:!1,emissive:!1},rS={color:[.92,.92,.9],map:null,tint:!1,emissive:!1},aS={color:[.6,.62,.65],map:"Metal",tint:!1,emissive:!1},oS={color:[.32,.33,.36],map:"Metal",tint:!1,emissive:!1},lS={color:[.96,.96,.94],map:null,tint:!1,emissive:!1},cS={color:[.29,.43,.23],map:null,tint:!1,emissive:!1},uS={color:[.3,.48,.72],map:"Metal",tint:!1,emissive:!1},fS={color:[.3,.4,.52],map:"Metal",tint:!1,emissive:!1},hS={color:[.78,.74,.62],map:"Metal",tint:!1,emissive:!1},dS={color:[.4,.42,.3],map:"Metal",tint:!1,emissive:!1},pS={color:[.56,.24,.2],map:"Metal",tint:!1,emissive:!1},mS={color:[.92,.9,.82],map:null,tint:!1,emissive:!1},_S={color:[.96,.57,.21],map:null,tint:!1,emissive:!1},gS={color:[.88,.52,.74],map:null,tint:!1,emissive:!1},vS={color:[.86,.23,.25],map:null,tint:!1,emissive:!1},xS={color:[.96,.96,.91],map:null,tint:!1,emissive:!1},MS={color:[.97,.82,.24],map:null,tint:!1,emissive:!1},yS={color:[.92,.88,.8],map:null,tint:!1,emissive:!1},SS={color:[.98,.97,.94],map:"Fabric",tint:!1,emissive:!1},bS={color:[.1,.08,.07],map:null,tint:!1,emissive:!1},ES={color:[.7,.8,.84],map:"Metal",tint:!1,emissive:!1},TS={color:[.56,.34,.16],map:null,tint:!1,emissive:!1},wS={color:[.9,.86,.66],map:null,tint:!1,emissive:!1},AS={color:[.72,.56,.36],map:null,tint:!1,emissive:!1},RS={color:[.82,.18,.16],map:null,tint:!1,emissive:!1},CS={color:[.94,.92,.84],map:null,tint:!1,emissive:!1},LS={color:[.54,.7,.33],map:null,tint:!1,emissive:!1},PS={color:[.13,.13,.14],map:null,tint:!1,emissive:!1},DS={color:[.5,.32,.22],map:"Metal",tint:!1,emissive:!1},US={color:[.3,.21,.16],map:"Metal",tint:!1,emissive:!1},IS={color:[.64,.44,.3],map:"Metal",tint:!1,emissive:!1},NS={color:[.74,.64,.46],map:"Fabric",tint:!1,emissive:!1},FS={color:[.56,.47,.33],map:"Fabric",tint:!1,emissive:!1},OS={color:[.4,.44,.3],map:"Metal",tint:!1,emissive:!1},kS={color:[.42,.53,.25],map:"Leaf",tint:!1,emissive:!1},zS={color:[.31,.44,.22],map:"Leaf",tint:!1,emissive:!1},BS={color:[.82,.84,.86],map:"Metal",tint:!1,emissive:!1},GS={color:[.4,.38,.36],map:"Rock",tint:!1,emissive:!1},HS={color:[.52,.47,.42],map:"Metal",tint:!1,emissive:!1},VS={color:[1,1,1],map:"Soil",tint:!1,emissive:!1},WS={color:[1,1,1],map:"Solar",tint:!1,emissive:!1},XS={color:[.7,.72,.75],map:"Metal",tint:!1,emissive:!1},qS={color:[.58,.56,.52],map:"Metal",tint:!1,emissive:!1},YS={color:[.36,.5,.24],map:null,tint:!1,emissive:!1},jS={color:[.54,.54,.55],map:"Stone",tint:!1,emissive:!1},$S={color:[.34,.26,.18],map:"Fabric",tint:!1,emissive:!1},KS={color:[.86,.82,.72],map:"Fabric",tint:!1,emissive:!1},ZS={color:[1,1,1],map:"{stuff}",tint:!0,emissive:!1},JS={color:[.95,.92,.84],map:"Fabric",tint:!0,emissive:!1},QS={color:[.7,.67,.6],map:"Fabric",tint:!0,emissive:!1},eb={color:[1,1,1],map:"Stone",tint:!0,emissive:!1},tb={color:[.8,.8,.8],map:"Stone",tint:!0,emissive:!1},nb={color:[.8,.8,.8],map:"{stuff}",tint:!0,emissive:!1},ib={color:[.62,.62,.62],map:"{stuff}",tint:!0,emissive:!1},sb={color:[.92,.92,.92],map:"Fabric",tint:!0,emissive:!1},rb={color:[.72,.72,.72],map:"Fabric",tint:!0,emissive:!1},ab={color:[1,1,1],map:null,tint:!0,emissive:!1},ob={color:[.78,.78,.78],map:null,tint:!0,emissive:!1},lb={color:[1,1,1],map:null,tint:!0,emissive:!1},cb={color:[.8,.8,.8],map:null,tint:!0,emissive:!1},ub={color:[.6,.6,.6],map:null,tint:!0,emissive:!1},fb={color:[1.12,1.12,1.12],map:null,tint:!0,emissive:!1},hb={color:[1,1,1],map:"Rock",tint:!0,emissive:!1},db={color:[1,1,1],map:"Fabric",tint:!0,emissive:!1},pb={color:[.92,.8,.24],map:"Metal",tint:!1,emissive:!1},mb={color:[.44,.31,.21],map:"Bark",tint:!1,emissive:!1},_b={color:[.92,.91,.86],map:"Bark",tint:!1,emissive:!1},gb={color:[.84,.82,.76],map:"Bark",tint:!1,emissive:!1},vb={color:[.36,.44,.32],map:"Metal",tint:!1,emissive:!1},xb={color:[.14,.19,.24],map:null,tint:!1,emissive:!1},Mb={color:[.3,.62,.7],map:null,tint:!1,emissive:!1},yb={color:[.86,.3,.2],map:"Metal",tint:!1,emissive:!1},Sb={color:[.32,.52,.62],map:null,tint:!1,emissive:!1},bb={color:[.2,.34,.4],map:null,tint:!1,emissive:!1},Eb={color:[.78,.62,.4],map:"Wood",tint:!1,emissive:!1},Tb={agave:w_,an_alpaca_body:A_,an_alpaca_head:R_,an_alpaca_leg:C_,an_bear_grizzly_body:L_,an_bear_grizzly_head:P_,an_bear_grizzly_leg:D_,an_bear_grizzly_muzzle:U_,an_bear_polar_body:I_,an_bear_polar_head:N_,an_bear_polar_leg:F_,an_bison_acc:O_,an_bison_body:k_,an_bison_head:z_,an_bison_leg:B_,an_boomalope_acc:G_,an_boomalope_body:H_,an_boomalope_head:V_,an_boomalope_leg:W_,an_boomrat_acc:X_,an_boomrat_body:q_,an_boomrat_head:Y_,an_boomrat_leg:j_,an_capybara_body:$_,an_capybara_head:K_,an_capybara_leg:Z_,an_caribou_belly:J_,an_caribou_body:Q_,an_caribou_head:e0,an_caribou_leg:t0,an_cassowary_acc:n0,an_cassowary_beak:i0,an_cassowary_body:s0,an_cassowary_head:r0,an_cassowary_leg:a0,an_cat_belly:o0,an_cat_body:l0,an_cat_head:c0,an_cat_leg:u0,an_chicken_acc:f0,an_chicken_beak:h0,an_chicken_body:d0,an_chicken_head:p0,an_chicken_leg:m0,an_chinchilla_belly:_0,an_chinchilla_body:g0,an_chinchilla_head:v0,an_chinchilla_leg:x0,an_cobra_belly:M0,an_cobra_body:y0,an_cobra_hood:S0,an_cougar_belly:b0,an_cougar_body:E0,an_cougar_head:T0,an_cougar_leg:w0,an_cow_acc:A0,an_cow_body:R0,an_cow_head:C0,an_cow_leg:L0,an_cow_muzzle:P0,an_dark:D0,an_deer_belly:U0,an_deer_body:I0,an_deer_head:N0,an_deer_leg:F0,an_donkey_acc:O0,an_donkey_belly:k0,an_donkey_body:z0,an_donkey_head:B0,an_donkey_leg:G0,an_donkey_muzzle:H0,an_dromedary_body:V0,an_dromedary_head:W0,an_dromedary_leg:X0,an_duck_beak:q0,an_duck_belly:Y0,an_duck_body:j0,an_duck_head:$0,an_duck_leg:K0,an_elephant_body:Z0,an_elephant_head:J0,an_elephant_leg:Q0,an_elk_acc:eg,an_elk_belly:tg,an_elk_body:ng,an_elk_head:ig,an_elk_leg:sg,an_emu_beak:rg,an_emu_body:ag,an_emu_head:og,an_emu_leg:lg,an_fox_arctic_body:cg,an_fox_arctic_head:ug,an_fox_arctic_leg:fg,an_fox_fennec_belly:hg,an_fox_fennec_body:dg,an_fox_fennec_head:pg,an_fox_fennec_leg:mg,an_fox_red_acc:_g,an_fox_red_belly:gg,an_fox_red_body:vg,an_fox_red_head:xg,an_fox_red_leg:Mg,an_gazelle_belly:yg,an_gazelle_body:Sg,an_gazelle_head:bg,an_gazelle_leg:Eg,an_goat_body:Tg,an_goat_head:wg,an_goat_leg:Ag,an_goose_acc:Rg,an_goose_beak:Cg,an_goose_body:Lg,an_goose_head:Pg,an_goose_leg:Dg,an_guineapig_belly:Ug,an_guineapig_body:Ig,an_guineapig_head:Ng,an_guineapig_leg:Fg,an_hare_body:Og,an_hare_head:kg,an_hare_leg:zg,an_hare_tail:Bg,an_hoof:Gg,an_horn:Hg,an_horse_acc:Vg,an_horse_body:Wg,an_horse_head:Xg,an_horse_leg:qg,an_husky_belly:Yg,an_husky_body:jg,an_husky_head:$g,an_husky_leg:Kg,an_husky_muzzle:Zg,an_ibex_belly:Jg,an_ibex_body:Qg,an_ibex_head:ev,an_ibex_leg:tv,an_iguana_acc:nv,an_iguana_belly:iv,an_iguana_body:sv,an_iguana_head:rv,an_iguana_leg:av,an_labrador_body:ov,an_labrador_head:lv,an_labrador_leg:cv,an_lynx_belly:uv,an_lynx_body:fv,an_lynx_head:hv,an_lynx_leg:dv,an_megascarab_body:pv,an_megascarab_leg:mv,an_megasloth_body:_v,an_megasloth_head:gv,an_megasloth_leg:vv,an_megaspider_acc:xv,an_megaspider_body:Mv,an_megaspider_leg:yv,an_monkey_body:Sv,an_monkey_head:bv,an_monkey_leg:Ev,an_monkey_muzzle:Tv,an_muffalo_body:wv,an_muffalo_head:Av,an_muffalo_leg:Rv,an_ostrich_beak:Cv,an_ostrich_body:Lv,an_ostrich_head:Pv,an_ostrich_leg:Dv,an_ostrich_tail:Uv,an_panther_body:Iv,an_panther_head:Nv,an_panther_leg:Fv,an_pig_body:Ov,an_pig_head:kv,an_pig_leg:zv,an_pig_muzzle:Bv,an_raccoon_acc:Gv,an_raccoon_body:Hv,an_raccoon_head:Vv,an_raccoon_leg:Wv,an_raccoon_muzzle:Xv,an_rat_body:qv,an_rat_head:Yv,an_rat_leg:jv,an_rat_tail:$v,an_rhinoceros_body:Kv,an_rhinoceros_head:Zv,an_rhinoceros_leg:Jv,an_sheep_body:Qv,an_sheep_head:ex,an_sheep_leg:tx,an_snowhare_body:nx,an_snowhare_head:ix,an_snowhare_leg:sx,an_spelopede_body:rx,an_spelopede_leg:ax,an_squirrel_belly:ox,an_squirrel_body:lx,an_squirrel_head:cx,an_squirrel_leg:ux,an_thrumbo_acc:fx,an_thrumbo_belly:hx,an_thrumbo_body:dx,an_thrumbo_head:px,an_thrumbo_leg:mx,an_thrumbo_muzzle:_x,an_tortoise_acc:gx,an_tortoise_body:vx,an_tortoise_head:xx,an_tortoise_leg:Mx,an_turkey_acc:yx,an_turkey_beak:Sx,an_turkey_body:bx,an_turkey_head:Ex,an_turkey_leg:Tx,an_turkey_tail:wx,an_warg_acc:Ax,an_warg_body:Rx,an_warg_head:Cx,an_warg_leg:Lx,an_wildboar_acc:Px,an_wildboar_body:Dx,an_wildboar_head:Ux,an_wildboar_leg:Ix,an_wolf_arctic_body:Nx,an_wolf_arctic_head:Fx,an_wolf_arctic_leg:Ox,an_wolf_timber_belly:kx,an_wolf_timber_body:zx,an_wolf_timber_head:Bx,an_wolf_timber_leg:Gx,an_yak_body:Hx,an_yak_head:Vx,an_yak_leg:Wx,an_yorkie_body:Xx,an_yorkie_head:qx,an_yorkie_leg:Yx,armor:jx,armor_dark:$x,ash:Kx,bamboo:Zx,bark:Jx,bark_birch:Qx,bark_dark:eM,bark_mark:tM,bark_pale:nM,battery:iM,berry:sM,blade_a:rM,blade_b:aM,blade_c:oM,blanket:lM,blood:cM,book_blue:uM,book_red:fM,bottle:hM,bowl:dM,bramble:pM,brass:mM,cactus:_M,cap_glow:gM,cap_red:vM,charge:xM,chemfuel:MM,chocolate:yM,cloth_roll:SM,coconut:bM,concrete:EM,corn:TM,cotton:wM,crop_leaf:AM,crop_pale:RM,cushion:CM,egg:LM,ember:PM,fat:DM,felt:UM,flame:IM,flame_core:NM,foil:FM,food_green:OM,food_paste:kM,food_stew:zM,food_yellow:BM,fruit_red:GM,fungus:HM,geyser_crust:VM,geyser_rock:WM,glass:XM,glass_dark:qM,glow:YM,glow_amber:jM,glow_green:$M,glow_red:KM,glow_screen:ZM,gold:JM,grip:QM,gun_dark:ey,gun_light:ty,gun_metal:ny,gun_olive:iy,gun_white:sy,gun_wood:ry,hay:ay,hay_a:oy,hay_b:ly,herb_green:cy,hull:uy,hull_dark:fy,ice:hy,jade:dy,jelly:py,label:my,leaf_anima:_y,leaf_anima_dk:gy,leaf_anima_lt:vy,leaf_bamboo:xy,leaf_bamboo_dk:My,leaf_bamboo_lt:yy,leaf_birch:Sy,leaf_birch_dk:by,leaf_birch_lt:Ey,leaf_cypress:Ty,leaf_cypress_dk:wy,leaf_cypress_lt:Ay,leaf_drago:Ry,leaf_drago_dk:Cy,leaf_drago_lt:Ly,leaf_gauranlen:Py,leaf_gauranlen_dk:Dy,leaf_gauranlen_lt:Uy,leaf_jungle:Iy,leaf_jungle_dk:Ny,leaf_jungle_lt:Fy,leaf_maple:Oy,leaf_maple_dk:ky,leaf_maple_lt:zy,leaf_oak:By,leaf_oak_dk:Gy,leaf_oak_lt:Hy,leaf_pine:Vy,leaf_pine_dk:Wy,leaf_pine_lt:Xy,leaf_poplar:qy,leaf_poplar_dk:Yy,leaf_poplar_lt:jy,leaf_teak:$y,leaf_teak_dk:Ky,leaf_teak_lt:Zy,leaf_willow:Jy,leaf_willow_dk:Qy,leaf_willow_lt:eS,linen:tS,log:nS,log_burnt:iS,meat:sS,medicine:rS,metal:aS,metal_dark:oS,milk:lS,moss:cS,neutro:uS,paint_blue:fS,paint_cream:hS,paint_olive:dS,paint_red:pS,paper:mS,petal_orange:_S,petal_pink:gS,petal_red:vS,petal_white:xS,petal_yellow:MS,pill:yS,pillow:SS,pit:bS,plasteel:ES,pod:TS,pod_pale:wS,potato:AS,red_cross:RS,rice:CS,rice_a:LS,rubber:PS,rust:DS,rust_dark:US,rust_light:IS,sack:NS,sack_dark:FS,shell_olive:OS,shrub:kS,shrub_dark:zS,silver:BS,slag:GS,slag_metal:HS,soil:VS,solar:WS,solar_frame:XS,steam_pipe:qS,stem:YS,stone:jS,strap:$S,string:KS,stuff:ZS,stuff_bag:JS,stuff_bag_dark:QS,stuff_block:eb,stuff_block_dark:tb,stuff_dark:nb,stuff_deep:ib,stuff_fabric:sb,stuff_fabric_dark:rb,stuff_herb:ab,stuff_herb_dark:ob,stuff_plain:lb,stuff_plain_dark:cb,stuff_plain_deep:ub,stuff_plain_light:fb,stuff_rock:hb,stuff_wool:db,terminal:pb,twig_bark:mb,twig_bark_birch:_b,twig_bark_pale:gb,uranium:vb,visor:xb,visor_lit:Mb,warning:yb,water:Sb,water_dark:bb,wood_end:Eb},wb=4,Cl=new Set;function Si(i){Cl.has(i)||(Cl.add(i),console.warn(i))}async function Ia(i){let e="network error";for(let t=0;t<wb;t++){t>0&&await Cb(200*2**(t-1));try{const n=await fetch(i);if(n.ok)return n;if(e=String(n.status),n.status<500)break}catch(n){e=n instanceof Error&&n.message?n.message:"network error"}}throw new Error(e)}async function Ab(i,e,t){if(i.length===0)return;let n=0;const s=Math.min(Math.max(1,e),i.length);await Promise.all(Array.from({length:s},async()=>{for(;n<i.length;){const r=n;n+=1,await t(i[r],r)}}))}async function Rb(i){if(i.length>=2&&i[0]===31&&i[1]===139){const e=new Uint8Array(i.byteLength);e.set(i);const t=new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"));return new Response(t).text()}return new TextDecoder().decode(i)}function Cb(i){return new Promise(e=>{window.setTimeout(e,i)})}const Ll=Tb,Lb={Wood:new Ue(.86,.62,.38),Stone:new Ue(.76,.74,.7),Metal:new Ue(.74,.78,.84),Fabric:new Ue(.9,.88,.84)},Pb=Ki,mu=new Set;function Db(i){const t=i.indexOf("textures/");t>=0&&mu.add(i.slice(t))}function Ub(){return[...mu]}class Ib{constructor(){Ge(this,"textures",new Map);Ge(this,"cache",new Map);Ge(this,"flicker",[]);const e=new Set;for(const t of Object.values(Ll))t.map&&t.map!=="{stuff}"&&e.add(t.map);for(const t of["Wood","Stone","Metal","Fabric"])e.add(t);for(const t of e)this.textures.set(t,this.loadSwatch(t))}get(e,t,n){const s=Ll[e];if(!s)return console.warn(`IsoRim material "${e}" is not in the catalog`),this.fallback(e);const r=s.tint?n?n.getHexString():t:"",o=s.map==="{stuff}"?t:s.map,a=`${e}|${o??""}|${r}`,l=this.cache.get(a);if(l)return l;const c=new Ue(s.color[0],s.color[1],s.color[2]);s.tint&&c.multiply(n??Lb[t]);const u=new Vt({color:c,map:o?this.textures.get(o)??null:null,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});return s.emissive&&(u.emissive=c.clone(),u.emissiveIntensity=.7,this.flicker.push(u)),this.cache.set(a,u),u}loadSwatch(e){const t=`${Pb}/textures/swatches/${e}.png`;return un(t,!0)}fallback(e){const t=`missing|${e}`,n=this.cache.get(t);if(n)return n;const s=new Vt({color:16711850});return this.cache.set(t,s),s}}const Nb=6,Pl=new Map,Vi=[];let Bi=0,Na=[];function un(i,e=!1){Db(i);const t=Pl.get(i);if(t)return t;const n=kb(e);return Pl.set(i,n),Fa(1,"Loading textures…"),Ob(async()=>{try{const s=await Ia(i),r=await createImageBitmap(await s.blob());n.image=r,n.needsUpdate=!0}catch(s){const r=s instanceof Error&&s.message?s.message:"failed";Si(`Could not load ${i} (${r})`)}finally{Oa("Loading textures…")}}),n}function Fb(){return Bi===0&&Vi.length===0?Promise.resolve():new Promise(i=>{Na.push(i)})}function Ob(i){Vi.push(i),_u()}function _u(){for(;Bi<Nb&&Vi.length>0;){const i=Vi.shift();if(!i)break;Bi+=1,i().finally(()=>{if(Bi-=1,Vi.length>0)_u();else if(Bi===0){const e=Na;Na=[];for(const t of e)t()}})}}function kb(i){const e=document.createElement("canvas");e.width=2,e.height=2;const t=e.getContext("2d");t&&(t.fillStyle="#b7aa96",t.fillRect(0,0,2,2));const n=new au(e);return n.colorSpace=ct,n.anisotropy=8,i&&(n.wrapS=Ei,n.wrapT=Ei),n}async function zb(i){const e=new Set(i),t=new Map,n=`${Ki}/packs/index.json`;let s=[];try{const o=await Ia(n);s=JSON.parse(await o.text()).packs}catch(o){return Si(`Could not load ${n} (${Vr(o)})`),Dl(e,t),t}Fa(s.length,`Loading models… 0 of ${s.length}`);let r=0;return await Ab(s,2,async o=>{const a=`${Ki}/packs/${o}`;try{const l=await Ia(a),c=new Uint8Array(await l.arrayBuffer()),u=JSON.parse(await Rb(c));for(const[h,f]of Object.entries(u))if(!(!e.has(h)||t.has(h)))try{t.set(h,__(f))}catch(m){Si(`Could not parse ${h}.obj (${Vr(m)})`)}}catch(l){Si(`Could not load ${a} (${Vr(l)})`)}finally{r+=1,Oa(`Loading models… ${r} of ${s.length}`)}}),Dl(e,t),t}function Dl(i,e){const t=[...i].filter(n=>!e.has(n)).sort();t.length===1?Si(`Missing model ${t[0]}.obj`):t.length>1&&Si(`Missing ${t.length} models, including ${t[0]}.obj`)}function Vr(i){return i instanceof Error&&i.message?i.message:"failed"}function bi(i,e,t,n,s){const r=n[1][0]-n[0][0],o=n[1][1]-n[0][1],a=n[1][2]-n[0][2],l=n[2][0]-n[0][0],c=n[2][1]-n[0][1],u=n[2][2]-n[0][2];let h=o*u-a*c,f=a*l-r*u,m=r*c-o*l;const _=Math.hypot(h,f,m)||1;h/=_,f/=_,m/=_;const g=[0,1,2,0,2,3];for(const p of g){const d=n[p],b=s[p];i.push(d[0],d[1],d[2]),e.push(h,f,m),t.push(b[0],b[1])}}function tn(i,e,t,n){const s=new i.BufferGeometry;return s.setAttribute("position",new i.Float32BufferAttribute(e,3)),s.setAttribute("normal",new i.Float32BufferAttribute(t,3)),s.setAttribute("uv",new i.Float32BufferAttribute(n,2)),s}const Wr=`${Ki}/textures`,_i=1.2,Bb=1.25,bn={planks:{side:"walls/PlanksSide.png",top:"walls/PlanksTop.png",color:12880466,height:_i},bricks:{side:"walls/BricksSide.png",top:"walls/BricksTop.png",color:11889224,height:_i},stone:{side:"walls/SmoothStoneSide.png",top:"walls/SmoothStoneTop.png",color:13157046,height:_i},metal:{side:"walls/MetalSide.png",top:"walls/MetalTop.png",color:9345188,height:_i},rock:{side:"walls/RockSide.png",top:"walls/RockTop.png",color:10129798,height:_i},rockOre:{side:"walls/RockOreSide.png",top:"walls/RockOreTop.png",color:9072728,height:_i},sandbags:{side:"walls/SandbagsSide.png",top:"walls/SandbagsTop.png",color:12891274,height:.55}},Gb={terracotta:{file:"roofs/Terracotta.png",color:12870204},thatch:{file:"roofs/Thatch.png",color:12886362},tin:{file:"roofs/Tin.png",color:9345188},slate:{file:"roofs/Slate.png",color:6186864}},Hb=new Set(["woodFloor","stoneTile","carpet","concrete","flagstone","metalFloor","sterile","roughHewn"]);function Vb(i){const e=new Ct;e.name="structures";const t=new Set(i.walls.map(u=>`${u.x},${u.z}`)),n=[],s={},r={};for(const u of Object.keys(bn))s[u]=un(`${Wr}/${bn[u].side}`,!0),r[u]=un(`${Wr}/${bn[u].top}`,!0);const o=Wb(i),a=new Map,l=new Map,c=(u,h)=>{let f=u.get(h);return f||(f={pos:[],nrm:[],uv:[]},u.set(h,f)),f};for(const u of i.walls){const{x:h,z:f,kind:m}=u,_=bn[m].height;if(m==="rock"||m==="rockOre"){gu(h,f,_,t,c(a,m)),vu(h,f,_,c(l,m));continue}const g=new et(qb(h,f,_,t),new Vt({color:bn[m].color,map:s[m]})),p=new et(Yb(h,f,_),new Vt({color:bn[m].color,map:r[m]}));g.castShadow=!0,g.receiveShadow=!0,p.castShadow=!0,p.receiveShadow=!0;const d=new Ct;d.add(g,p),e.add(d);const b=Xb(h,f,o);b&&n.push({object:d,side:b})}for(const[u,h]of a){if(h.pos.length===0)continue;const f=new et(tn(en,h.pos,h.nrm,h.uv),new Vt({color:bn[u].color,map:s[u]}));f.castShadow=!1,f.receiveShadow=!0,f.frustumCulled=!0,f.name=`${u}-sides`,e.add(f)}for(const[u,h]of l){if(h.pos.length===0)continue;const f=new et(tn(en,h.pos,h.nrm,h.uv),new Vt({color:bn[u].color,map:r[u]}));f.castShadow=!1,f.receiveShadow=!0,f.frustumCulled=!0,f.name=`${u}-tops`,e.add(f)}for(const u of i.roofs){const h=Gb[u.style],f=un(`${Wr}/${h.file}`,!0),m=new Vt({color:h.color,map:f,side:Bt}),_=jb(u.x,u.z,u.w,u.d,u.ridge);for(const g of _){const p=new et(g.geometry,m);p.castShadow=!0,p.receiveShadow=!0,e.add(p),n.push({object:p,side:g.side})}}return{group:e,walls:t,cutaway:n}}function Wb(i){const e=new Set;for(let t=0;t<i.height;t++)for(let n=0;n<i.width;n++){const s=i.terrain[t*i.width+n];Hb.has(s)&&e.add(`${n},${t}`)}return e}function Xb(i,e,t){const n=[];return t.has(`${i},${e+1}`)&&!t.has(`${i},${e-1}`)&&n.push("s"),t.has(`${i},${e-1}`)&&!t.has(`${i},${e+1}`)&&n.push("n"),t.has(`${i-1},${e}`)&&!t.has(`${i+1},${e}`)&&n.push("e"),t.has(`${i+1},${e}`)&&!t.has(`${i-1},${e}`)&&n.push("w"),n.length===1?n[0]:n[0]??null}function qb(i,e,t,n){const s={pos:[],nrm:[],uv:[]};return gu(i,e,t,n,s),tn(en,s.pos,s.nrm,s.uv)}function gu(i,e,t,n,s){const{pos:r,nrm:o,uv:a}=s,l=t/Bb,c=[];n.has(`${i},${e-1}`)||c.push({nx:0,nz:-1,u0:i*.5,u1:(i+1)*.5,corners:[[i,0,e],[i+1,0,e],[i+1,t,e],[i,t,e]]}),n.has(`${i},${e+1}`)||c.push({nx:0,nz:1,u0:(i+1)*.5,u1:i*.5,corners:[[i+1,0,e+1],[i,0,e+1],[i,t,e+1],[i+1,t,e+1]]}),n.has(`${i+1},${e}`)||c.push({nx:1,nz:0,u0:e*.5,u1:(e+1)*.5,corners:[[i+1,0,e],[i+1,0,e+1],[i+1,t,e+1],[i+1,t,e]]}),n.has(`${i-1},${e}`)||c.push({nx:-1,nz:0,u0:(e+1)*.5,u1:e*.5,corners:[[i,0,e+1],[i,0,e],[i,t,e],[i,t,e+1]]});for(const u of c)bi(r,o,a,u.corners,[[u.u0,0],[u.u1,0],[u.u1,l],[u.u0,l]])}function Yb(i,e,t){const n={pos:[],nrm:[],uv:[]};return vu(i,e,t,n),tn(en,n.pos,n.nrm,n.uv)}function vu(i,e,t,n){const{pos:s,nrm:r,uv:o}=n;bi(s,r,o,[[i,t,e],[i,t,e+1],[i+1,t,e+1],[i+1,t,e]],[[i*.5,e*.5],[i*.5,(e+1)*.5],[(i+1)*.5,(e+1)*.5],[(i+1)*.5,e*.5]])}function jb(i,e,t,n,s){const l=i-.18,c=i+t+.18,u=e-.18,h=e+n+.18,f=[];if(s==="x"){const m=(u+h)/2;f.push(Fs("s",[[l,1.28,u],[l,1.92,m],[c,1.92,m],[c,1.28,u]],l,c,u,m)),f.push(Fs("n",[[c,1.28,h],[c,1.92,m],[l,1.92,m],[l,1.28,h]],l,c,m,h))}else{const m=(l+c)/2;f.push(Fs("w",[[l,1.28,h],[m,1.92,h],[m,1.92,u],[l,1.28,u]],u,h,l,m)),f.push(Fs("e",[[c,1.28,u],[m,1.92,u],[m,1.92,h],[c,1.28,h]],u,h,m,c))}return f}function Fs(i,e,t,n,s,r){const o=[],a=[],l=[],c=e[1][0]-e[0][0],u=e[1][2]-e[0][2],h=e[2][0]-e[0][0],f=e[2][2]-e[0][2],m=u*h-c*f,_=m>=0?e:[e[0],e[3],e[2],e[1]],g=m>=0?[[t*.5,s*.5],[t*.5,r*.5],[n*.5,r*.5],[n*.5,s*.5]]:[[t*.5,s*.5],[n*.5,s*.5],[n*.5,r*.5],[t*.5,r*.5]];return bi(o,a,l,_,g),{geometry:tn(en,o,a,l),side:i}}function $b(i,e,t){return i==="s"?e:i==="n"?!e:i==="e"?t:!t}function Kb(i,e,t,n){const s=i.prevX[e]+(i.x[e]-i.prevX[e])*t,r=i.prevZ[e]+(i.z[e]-i.prevZ[e])*t;let o=Zb(i.prevYaw[e],i.yaw[e],t);const a=i.moving[e]===1;a||(o+=Math.sin(n*1.4+e)*.12);const l=i.prevPhase[e]+(i.phase[e]-i.prevPhase[e])*t,c=a?Math.abs(Math.sin(l))*.04:0;return{x:s,z:r,yaw:o,bob:c}}function Zb(i,e,t){const n=Math.atan2(Math.sin(e-i),Math.cos(e-i));return i+n*t}const zi=`${Ki}/textures`,Ul={grass:{file:"ground/Grass.png",color:16777215,repeat:.28,raised:!1},grassRich:{file:"ground/GrassRich.png",color:16777215,repeat:.28,raised:!1},soil:{file:"ground/Soil.png",color:16777215,repeat:.28,raised:!1},soilRich:{file:"ground/SoilRich.png",color:16777215,repeat:.28,raised:!1},dirt:{file:"ground/PackedDirt.png",color:16777215,repeat:.32,raised:!1},sand:{file:"ground/Sand.png",color:16777215,repeat:.28,raised:!1},mud:{file:"ground/Mud.png",color:16777215,repeat:.32,raised:!1},marsh:{file:"ground/Marsh.png",color:16777215,repeat:.32,raised:!1},moss:{file:"ground/Moss.png",color:16777215,repeat:.32,raised:!1},gravel:{file:"ground/Gravel.png",color:16777215,repeat:.32,raised:!1},ice:{file:"ground/Ice.png",color:16777215,repeat:.28,raised:!1},roughHewn:{file:"ground/RoughHewn.png",color:9076852,repeat:.5,raised:!0},roughStone:{file:"ground/RoughStone.png",color:10262671,repeat:.4,raised:!1},smoothStone:{file:"ground/SmoothStone.png",color:13157564,repeat:.4,raised:!1},woodFloor:{file:"ground/FloorWood.png",color:11565640,repeat:.5,raised:!0},stoneTile:{file:"ground/FloorStoneTile.png",color:12761252,repeat:.5,raised:!0},carpet:{file:"ground/FloorCarpet.png",color:9256261,repeat:.5,raised:!0},concrete:{file:"ground/FloorConcrete.png",color:12040116,repeat:.45,raised:!0},flagstone:{file:"ground/FloorFlagstone.png",color:10721932,repeat:.5,raised:!0},metalFloor:{file:"ground/FloorMetal.png",color:10135216,repeat:.5,raised:!0},paved:{file:"ground/FloorPaved.png",color:9276036,repeat:.4,raised:!0},sterile:{file:"ground/FloorSterile.png",color:14015960,repeat:.5,raised:!0}};function Jb(i){const e=new Ct;e.name="terrain";const t=new Set,n=new Map,s=Os(),r=Os();for(let m=0;m<i.height;m++)for(let _=0;_<i.width;_++){const g=i.terrain[m*i.width+_];if(g==="water"||g==="stream"){t.add(`${_},${m}`);const x=g==="water"?s:r,E=g==="water"?.35:.5,L=g==="water"?.035:.03;bi(x.pos,x.nrm,x.uv,Xr(_,L,m),Il(_,m,E));continue}let p=n.get(g);p||(p=Os(),n.set(g,p));const d=Ul[g],b=d.raised?.02:.005;bi(p.pos,p.nrm,p.uv,Xr(_,b,m),Il(_,m,d.repeat))}for(const[m,_]of n){const g=Ul[m],p=un(`${zi}/${g.file}`,!0),d=new et(tn(en,_.pos,_.nrm,_.uv),new Vt({color:g.color,map:p}));d.receiveShadow=!0,d.name=m,e.add(d)}const o=3,a=un(`${zi}/edge/Strata.png`,!0);a.repeat.set((i.width+o*2)/8,(i.height+o*2)/8);const l=new et(new ns(i.width+o*2,i.height+o*2),new Vt({color:12891290,map:a}));l.rotation.x=-Math.PI/2,l.position.set(i.width/2,-.04,i.height/2),l.receiveShadow=!0,l.name="strata",e.add(l),Nl(e,"water",s,3961728,0),Nl(e,"stream",r,4883600,0);const c=un(`${zi}/water/Ripples.png`,!0),u=new et(tn(en,s.pos,s.nrm,s.uv),new Jn({map:c,transparent:!0,depthWrite:!1,color:14017770}));u.position.y=.012,u.name="ripples",e.add(u);const h=un(`${zi}/water/Flow.png`,!0),f=new et(tn(en,r.pos,r.nrm,r.uv),new Jn({map:h,transparent:!0,depthWrite:!1,color:14017770,opacity:.85}));if(f.position.y=.012,f.name="flow",e.add(f),i.marks.length>0){const m=Os();for(const p of i.marks)bi(m.pos,m.nrm,m.uv,Xr(p.x,.045,p.z),[[0,0],[0,1],[1,1],[1,0]]);const _=un(`${zi}/damage/Marks.png`),g=new et(tn(en,m.pos,m.nrm,m.uv),new Vt({map:_,transparent:!0,depthWrite:!1}));g.name="marks",e.add(g)}return{group:e,water:t,ripples:c,flow:h}}function Os(){return{pos:[],nrm:[],uv:[]}}function Xr(i,e,t){return[[i,e,t],[i,e,t+1],[i+1,e,t+1],[i+1,e,t]]}function Il(i,e,t){return[[i*t,e*t],[i*t,(e+1)*t],[(i+1)*t,(e+1)*t],[(i+1)*t,e*t]]}function Nl(i,e,t,n,s){if(t.pos.length===0)return;const r=new et(tn(en,t.pos,t.nrm,t.uv),new Vt({color:n}));r.position.y=s,r.receiveShadow=!0,r.name=e,i.add(r)}function Qb(i,e,t){var l;const n=h_(t),s=n.colony,r=document.createElement("div");r.id="hud",r.className="is-concealed",r.innerHTML=`
    <h1>${s.name}</h1>
    <p class="place">A hidden valley in Colorado</p>
    <p id="seed">Seed ${qr(t)}</p>
    <p class="hint">Drag to pan · scroll to zoom · right-drag to orbit</p>
    <p id="status">Loading IsoRim models…</p>
    <button type="button" id="new-valley">New valley</button>
  `,(l=r.querySelector("#new-valley"))==null||l.addEventListener("click",()=>{const c=Math.floor(Math.random()*4294967295)>>>0||1,u=new URLSearchParams(window.location.search);u.set("seed",qr(c)),window.location.search=u.toString()});const o=document.createElement("div");o.id="labels",o.className="is-concealed",i.append(r,o);const a=r.querySelector("#status");a instanceof HTMLElement&&eE(i,s,n.spawns,o,a,e,t).catch(c=>{const u=c instanceof Error?c.message:"The valley failed to load.";a.textContent=u,e.fail(u),console.error(c)})}async function eE(i,e,t,n,s,r,o){const a=await zb(iE(e));r.markPacks();const l=new Ib,c=new lo({antialias:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setSize(window.innerWidth,window.innerHeight),c.outputColorSpace=ct,c.shadowMap.enabled=!0,c.shadowMap.type=Ba,c.domElement.addEventListener("contextmenu",U=>U.preventDefault()),i.append(c.domElement);const u=new iu;u.background=new Ue(12964020);const h=Math.max(e.width,e.height);u.fog=new lr(12964020,90,h*1.35);const f=t.reduce((U,V)=>U+V.x,0)/Math.max(1,t.length),m=t.reduce((U,V)=>U+V.z,0)/Math.max(1,t.length),_=46,g=new ar(-_,_,_/2,-_/2,.1,h*4);g.position.set(f+28,36,m-32);const p=new e_(g,c.domElement);p.target.set(f,.3,m),p.enableDamping=!0,p.dampingFactor=.08,p.screenSpacePanning=!0,p.minPolarAngle=.28,p.maxPolarAngle=Math.PI/2.08,p.maxZoom=12,p.zoomSpeed=.85,p.mouseButtons={LEFT:Zt.PAN,MIDDLE:Zt.DOLLY,RIGHT:Zt.ROTATE},g.lookAt(p.target),u.add(new lu(14148808,6968374,.62)),u.add(new fu(16774372,.28));const d=new Pa(16773330,1.15);d.position.set(f+40,52,m-24),d.target.position.set(f,0,m),d.castShadow=!0,d.shadow.mapSize.set(2048,2048);const b=48;d.shadow.camera.left=-b,d.shadow.camera.right=b,d.shadow.camera.top=b,d.shadow.camera.bottom=-b,d.shadow.camera.near=1,d.shadow.camera.far=160,d.shadow.bias=-6e-4,d.shadow.normalBias=.025,u.add(d),u.add(d.target);const x=new Pa(14017268,.32);x.position.set(f-12,14,m+16),u.add(x);const E=Jb(e);u.add(E.group);const L=Vb(e);u.add(L.group);const R=[...L.cutaway];for(const U of e.doors){const V=new Ct;V.name=U.id;const Z=U.stuff??"Wood",B=a.get("door_leaf"),K=a.get("door_lintel");B&&K&&(V.add(jn(B,{materials:l,stuff:Z})),V.add(jn(B,{materials:l,stuff:Z,yaw:180})),V.add(jn(K,{materials:l,stuff:Z}))),V.position.set(U.x+.5,0,U.z+.5),V.rotation.y=Ln.degToRad(U.yaw??0),u.add(V),R.push({object:V,side:U.facade})}const w=S_(e,a,l,u),X=new Map(e.figures.map(U=>[U.id,U]));for(const U of e.figures)U.wander&&U.name.length>0||u.add(Rl(U,a,l));const M=l_({spawns:t,nav:d_(e),seed:o,items:e.props.filter(U=>U.movable).map(U=>({id:U.id,x:U.x,z:U.z,w:U.w??1,d:U.d??1,blocks:U.blocks!==!1}))}),T=M.roster(),k=T.keys.map((U,V)=>{const Z=X.get(U);if(!Z)throw new Error(`Missing figure ${U}`);const B=Rl(Z,a,l),K=new et(new cr(.38,.38,1.7,8),new Jn({transparent:!0,opacity:0,depthWrite:!1}));K.position.y=.85,K.userData.colonistIndex=V,B.add(K),u.add(B);const ae=document.createElement("div");return ae.className="label",ae.textContent=T.names[V]??Z.name,n.append(ae),{group:B,label:ae,pick:K}}),q=T_(i,c.domElement,g,u,M,k.map(U=>({group:U.group,label:U.label,pick:U.pick})),w);tE(M,g,c.domElement);const J=e.animals.map(U=>{const V=x_(U,a,l);return u.add(V.root),V});window.__colonyUsed={models:[...a.keys()].sort(),textures:Ub().sort()};const P=()=>{const U=g.position.z<p.target.z,V=g.position.x>p.target.x;for(const Z of R)Z.object.visible=!$b(Z.side,U,V)},F=()=>{const U=window.innerWidth/Math.max(1,window.innerHeight);g.left=-_*U/2,g.right=_*U/2,g.top=_/2,g.bottom=-_/2,g.updateProjectionMatrix();const V=_/(e.height*1.08),Z=_*U/(e.width*1.08);p.minZoom=Math.min(V,Z,1),c.setSize(window.innerWidth,window.innerHeight)};F(),window.addEventListener("resize",F),await Fb(),r.markWorld();const Y=new hu,N=new D,H=k.map(()=>({x:0,z:0,yaw:0,bob:0}));s.textContent="Near walls fold away as you orbit.";const $=()=>{const U=Y.getDelta(),V=Y.elapsedTime;p.update(),P(),M.advance(U),M.pollEvents();const Z=M.colonists(),B=M.alpha();for(let K=0;K<k.length;K++){const ae=Kb(Z,K,B,V);H[K]=ae,k[K].group.position.set(ae.x,ae.bob,ae.z),k[K].group.rotation.y=ae.yaw}M_(J,V),E.ripples.offset.set(V*.015,V*.008),E.flow.offset.set(V*-.05,V*.01);for(const K of l.flicker)K.emissiveIntensity=.45+Math.sin(V*8+K.id)*.28;q.update(H),nE(k,H,g,N,c.domElement),c.render(u,g),r.markFrame(),requestAnimationFrame($)};$()}function tE(i,e,t){const n=new D;window.__gulch={get tick(){return i.tick},save:()=>i.save(),load:s=>i.load(s),project(s,r,o){n.set(s,r,o).project(e);const a=t.getBoundingClientRect();return{x:(n.x*.5+.5)*a.width+a.left,y:(-n.y*.5+.5)*a.height+a.top}},items:()=>i.items().map(s=>({...s})),blocked:(s,r)=>i.blocked(s,r)}}function nE(i,e,t,n,s){const r=s.clientWidth,o=s.clientHeight;for(let a=0;a<i.length;a++){const l=e[a];n.set(l.x,1.35,l.z),n.project(t);const c=i[a].label;if(n.z>1){c.style.display="none";continue}c.style.display="block",c.style.left=`${(n.x*.5+.5)*r}px`,c.style.top=`${(-n.y*.5+.5)*o}px`}}function iE(i){const e=new Set(["door_leaf","door_lintel"]);for(const t of i.props)e.add(t.model);for(const t of i.figures)for(const n of t.parts)e.add(n);for(const t of i.animals)e.add(t.model),t.leg&&e.add(t.leg);return[...e]}const Xs=document.querySelector("#app");if(!(Xs instanceof HTMLElement))throw new Error("Missing #app");Ou(Xs,i=>{const e=Bu(Xs,()=>{var t,n;(t=document.querySelector("#hud"))==null||t.classList.remove("is-concealed"),(n=document.querySelector("#labels"))==null||n.classList.remove("is-concealed")});Qb(Xs,e,i)});
