var Lc=Object.defineProperty;var Cc=(n,e,t)=>e in n?Lc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var bn=(n,e,t)=>Cc(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Da="160",Xt={ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yo=0,Mi=1,jo=2,fr=1,ur=2,Wt=3,os=0,Rt=1,Bt=2,as=0,Is=1,Ei=2,Ti=3,Ai=4,$o=5,us=100,Ko=101,Zo=102,zi=103,ki=104,Jo=200,Qo=201,el=202,tl=203,Ta=204,Aa=205,sl=206,nl=207,al=208,il=209,rl=210,ol=211,ll=212,cl=213,dl=214,hl=0,fl=1,ul=2,zn=3,gl=4,ml=5,pl=6,_l=7,Ua=0,vl=1,xl=2,is=0,bl=1,Rl=2,wl=3,Sl=4,yl=5,Ml=6,gr=300,Ns=301,Os=302,za=303,ka=304,In=306,bs=1e3,Dt=1001,La=1002,_t=1003,Li=1004,ba=1005,Tt=1006,El=1007,fn=1008,rs=1009,Tl=1010,Al=1011,Fa=1012,mr=1013,ss=1014,ns=1015,un=1016,pr=1017,_r=1018,_s=1020,zl=1021,Ut=1023,kl=1024,Ll=1025,vs=1026,Bs=1027,Cl=1028,vr=1029,Pl=1030,xr=1031,br=1033,Ra=33776,wa=33777,Sa=33778,ya=33779,Ci=35840,Pi=35841,Di=35842,Ui=35843,Rr=36196,Fi=37492,Ii=37496,Ni=37808,Oi=37809,Bi=37810,Hi=37811,Gi=37812,Vi=37813,Wi=37814,Xi=37815,qi=37816,Yi=37817,ji=37818,$i=37819,Ki=37820,Zi=37821,Ma=36492,Ji=36494,Qi=36495,Dl=36283,er=36284,tr=36285,sr=36286,wr=3e3,xs=3001,Ul=3200,Fl=3201,Sr=0,Il=1,kt="",at="srgb",jt="srgb-linear",Ia="display-p3",Nn="display-p3-linear",kn="linear",$e="srgb",Ln="rec709",Cn="p3",Ps=7680,nr=519,Nl=512,Ol=513,Bl=514,yr=515,Hl=516,Gl=517,Vl=518,Wl=519,ar=35044,ir="300 es",Ca=1035,qt=2e3,Pn=2001;class Ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const i=a.indexOf(t);i!==-1&&a.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let i=0,o=a.length;i<o;i++)a[i].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xr=1234567;const cn=Math.PI/180,Dn=180/Math.PI;function mn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[s&255]+mt[s>>8&255]+mt[s>>16&255]+mt[s>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function Mr(n,e){return(n%e+e)%e}function Pc(n,e,t,s,a){return s+(n-e)*(a-s)/(t-e)}function Dc(n,e,t){return n!==e?(t-n)/(e-n):0}function Tn(n,e,t){return(1-t)*n+t*e}function Uc(n,e,t,s){return Tn(n,e,1-Math.exp(-t*s))}function Fc(n,e=1){return e-Math.abs(Mr(n,e*2)-e)}function Ic(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Nc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Oc(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Bc(n,e){return n+Math.random()*(e-n)}function Hc(n){return n*(.5-Math.random())}function Gc(n){n!==void 0&&(Xr=n);let e=Xr+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vc(n){return n*cn}function Wc(n){return n*Dn}function rr(n){return(n&n-1)===0&&n!==0}function Xc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Pa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qc(n,e,t,s,a){const i=Math.cos,o=Math.sin,r=i(t/2),l=o(t/2),c=i((e+s)/2),d=o((e+s)/2),f=i((e-s)/2),u=o((e-s)/2),m=i((s-e)/2),p=o((s-e)/2);switch(a){case"XYX":n.set(r*d,l*f,l*u,r*c);break;case"YZY":n.set(l*u,r*d,l*f,r*c);break;case"ZXZ":n.set(l*f,l*u,r*d,r*c);break;case"XZX":n.set(r*d,l*p,l*m,r*c);break;case"YXY":n.set(l*m,r*d,l*p,r*c);break;case"ZYZ":n.set(l*p,l*m,r*d,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Rs={DEG2RAD:cn,RAD2DEG:Dn,generateUUID:mn,clamp:vt,euclideanModulo:Mr,mapLinear:Pc,inverseLerp:Dc,lerp:Tn,damp:Uc,pingpong:Fc,smoothstep:Ic,smootherstep:Nc,randInt:Oc,randFloat:Bc,randFloatSpread:Hc,seededRandom:Gc,degToRad:Vc,radToDeg:Wc,isPowerOfTwo:rr,ceilPowerOfTwo:Xc,floorPowerOfTwo:Pa,setQuaternionFromProperEuler:qc,normalize:xt,denormalize:rn};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),i=this.x-e.x,o=this.y-e.y;return this.x=i*s-o*a+e.x,this.y=i*a+o*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,s,a,i,o,r,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,i,o,r,l,c)}set(e,t,s,a,i,o,r,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=r,d[3]=t,d[4]=i,d[5]=l,d[6]=s,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,i=this.elements,o=s[0],r=s[3],l=s[6],c=s[1],d=s[4],f=s[7],u=s[2],m=s[5],p=s[8],_=a[0],g=a[3],h=a[6],S=a[1],b=a[4],E=a[7],C=a[2],z=a[5],T=a[8];return i[0]=o*_+r*S+l*C,i[3]=o*g+r*b+l*z,i[6]=o*h+r*E+l*T,i[1]=c*_+d*S+f*C,i[4]=c*g+d*b+f*z,i[7]=c*h+d*E+f*T,i[2]=u*_+m*S+p*C,i[5]=u*g+m*b+p*z,i[8]=u*h+m*E+p*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],i=e[3],o=e[4],r=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*r*c-s*i*d+s*r*l+a*i*c-a*o*l}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],i=e[3],o=e[4],r=e[5],l=e[6],c=e[7],d=e[8],f=d*o-r*c,u=r*l-d*i,m=c*i-o*l,p=t*f+s*u+a*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=f*_,e[1]=(a*c-d*s)*_,e[2]=(r*s-a*o)*_,e[3]=u*_,e[4]=(d*t-a*l)*_,e[5]=(a*i-r*t)*_,e[6]=m*_,e[7]=(s*l-c*t)*_,e[8]=(o*t-s*i)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,i,o,r){const l=Math.cos(i),c=Math.sin(i);return this.set(s*l,s*c,-s*(l*o+c*r)+o+e,-a*c,a*l,-a*(-c*o+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply($a.makeScale(e,t)),this}rotate(e){return this.premultiply($a.makeRotation(-e)),this}translate(e,t){return this.premultiply($a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new He;function Xl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Un(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ql(){const n=Un("canvas");return n.style.display="block",n}const qr={};function An(n){n in qr||(qr[n]=!0,console.warn(n))}const Yr=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jr=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xn={[jt]:{transfer:kn,primaries:Ln,toReference:n=>n,fromReference:n=>n},[at]:{transfer:$e,primaries:Ln,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Nn]:{transfer:kn,primaries:Cn,toReference:n=>n.applyMatrix3(jr),fromReference:n=>n.applyMatrix3(Yr)},[Ia]:{transfer:$e,primaries:Cn,toReference:n=>n.convertSRGBToLinear().applyMatrix3(jr),fromReference:n=>n.applyMatrix3(Yr).convertLinearToSRGB()}},Yc=new Set([jt,Nn]),je={enabled:!0,_workingColorSpace:jt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Yc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const s=Xn[e].toReference,a=Xn[t].fromReference;return a(s(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Xn[n].primaries},getTransfer:function(n){return n===kt?kn:Xn[n].transfer}};function dn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ka(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gs;class Er{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=Un("canvas")),Gs.width=e.width,Gs.height=e.height;const s=Gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Un("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),i=a.data;for(let o=0;o<i.length;o++)i[o]=dn(i[o]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(dn(t[s]/255)*255):t[s]=dn(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jc=0;class Tr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=mn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let i;if(Array.isArray(a)){i=[];for(let o=0,r=a.length;o<r;o++)a[o].isDataTexture?i.push(Za(a[o].image)):i.push(Za(a[o]))}else i=Za(a);s.url=i}return t||(e.images[this.uuid]=s),s}}function Za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Er.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $c=0;class wt extends Ms{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,s=Dt,a=Dt,i=Tt,o=fn,r=Ut,l=rs,c=wt.DEFAULT_ANISOTROPY,d=kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=mn(),this.name="",this.source=new Tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=i,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(An("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===xs?at:kt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gr)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return An("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?xs:wr}set encoding(e){An("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xs?at:kt}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=gr;wt.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,s=0,a=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,i=this.w,o=e.elements;return this.x=o[0]*t+o[4]*s+o[8]*a+o[12]*i,this.y=o[1]*t+o[5]*s+o[9]*a+o[13]*i,this.z=o[2]*t+o[6]*s+o[10]*a+o[14]*i,this.w=o[3]*t+o[7]*s+o[11]*a+o[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,i;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],m=l[5],p=l[9],_=l[2],g=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(m+1)/2,C=(h+1)/2,z=(d+u)/4,T=(f+_)/4,W=(p+g)/4;return b>E&&b>C?b<.01?(s=0,a=.707106781,i=.707106781):(s=Math.sqrt(b),a=z/s,i=T/s):E>C?E<.01?(s=.707106781,a=0,i=.707106781):(a=Math.sqrt(E),s=z/a,i=W/a):C<.01?(s=.707106781,a=.707106781,i=0):(i=Math.sqrt(C),s=T/i,a=W/i),this.set(s,a,i,t),this}let S=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(f-_)/S,this.z=(u-d)/S,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yl extends Ms{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const a={width:e,height:t,depth:1};s.encoding!==void 0&&(An("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===xs?at:kt),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new wt(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,t,s=1){(this.width!==e||this.height!==t||this.depth!==s)&&(this.width=e,this.height=t,this.depth=s,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends Yl{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Ar extends wt{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=_t,this.minFilter=_t,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jl extends wt{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=_t,this.minFilter=_t,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ss{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,i,o,r){let l=s[a+0],c=s[a+1],d=s[a+2],f=s[a+3];const u=i[o+0],m=i[o+1],p=i[o+2],_=i[o+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(r===1){e[t+0]=u,e[t+1]=m,e[t+2]=p,e[t+3]=_;return}if(f!==_||l!==u||c!==m||d!==p){let g=1-r;const h=l*u+c*m+d*p+f*_,S=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const C=Math.sqrt(b),z=Math.atan2(C,h*S);g=Math.sin(g*z)/C,r=Math.sin(r*z)/C}const E=r*S;if(l=l*g+u*E,c=c*g+m*E,d=d*g+p*E,f=f*g+_*E,g===1-r){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,s,a,i,o){const r=s[a],l=s[a+1],c=s[a+2],d=s[a+3],f=i[o],u=i[o+1],m=i[o+2],p=i[o+3];return e[t]=r*p+d*f+l*m-c*u,e[t+1]=l*p+d*u+c*f-r*m,e[t+2]=c*p+d*m+r*u-l*f,e[t+3]=d*p-r*f-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,i=e._z,o=e._order,r=Math.cos,l=Math.sin,c=r(s/2),d=r(a/2),f=r(i/2),u=l(s/2),m=l(a/2),p=l(i/2);switch(o){case"XYZ":this._x=u*d*f+c*m*p,this._y=c*m*f-u*d*p,this._z=c*d*p+u*m*f,this._w=c*d*f-u*m*p;break;case"YXZ":this._x=u*d*f+c*m*p,this._y=c*m*f-u*d*p,this._z=c*d*p-u*m*f,this._w=c*d*f+u*m*p;break;case"ZXY":this._x=u*d*f-c*m*p,this._y=c*m*f+u*d*p,this._z=c*d*p+u*m*f,this._w=c*d*f-u*m*p;break;case"ZYX":this._x=u*d*f-c*m*p,this._y=c*m*f+u*d*p,this._z=c*d*p-u*m*f,this._w=c*d*f+u*m*p;break;case"YZX":this._x=u*d*f+c*m*p,this._y=c*m*f+u*d*p,this._z=c*d*p-u*m*f,this._w=c*d*f-u*m*p;break;case"XZY":this._x=u*d*f-c*m*p,this._y=c*m*f-u*d*p,this._z=c*d*p+u*m*f,this._w=c*d*f+u*m*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],i=t[8],o=t[1],r=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=s+r+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(i-c)*m,this._z=(o-a)*m}else if(s>r&&s>f){const m=2*Math.sqrt(1+s-r-f);this._w=(d-l)/m,this._x=.25*m,this._y=(a+o)/m,this._z=(i+c)/m}else if(r>f){const m=2*Math.sqrt(1+r-s-f);this._w=(i-c)/m,this._x=(a+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-s-r);this._w=(o-a)/m,this._x=(i+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,i=e._z,o=e._w,r=t._x,l=t._y,c=t._z,d=t._w;return this._x=s*d+o*r+a*c-i*l,this._y=a*d+o*l+i*r-s*c,this._z=i*d+o*c+s*l-a*r,this._w=o*d-s*r-a*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,i=this._z,o=this._w;let r=o*e._w+s*e._x+a*e._y+i*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=s,this._y=a,this._z=i,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*s+t*this._x,this._y=m*a+t*this._y,this._z=m*i+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,r),f=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=o*f+this._w*u,this._x=s*f+this._x*u,this._y=a*f+this._y*u,this._z=i*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=Math.random(),t=Math.sqrt(1-e),s=Math.sqrt(e),a=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(a),s*Math.sin(i),s*Math.cos(i),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,s=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($r.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($r.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,i=e.elements;return this.x=i[0]*t+i[3]*s+i[6]*a,this.y=i[1]*t+i[4]*s+i[7]*a,this.z=i[2]*t+i[5]*s+i[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,i=e.elements,o=1/(i[3]*t+i[7]*s+i[11]*a+i[15]);return this.x=(i[0]*t+i[4]*s+i[8]*a+i[12])*o,this.y=(i[1]*t+i[5]*s+i[9]*a+i[13])*o,this.z=(i[2]*t+i[6]*s+i[10]*a+i[14])*o,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,i=e.x,o=e.y,r=e.z,l=e.w,c=2*(o*a-r*s),d=2*(r*t-i*a),f=2*(i*s-o*t);return this.x=t+l*c+o*f-r*d,this.y=s+l*d+r*c-i*f,this.z=a+l*f+i*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,i=e.elements;return this.x=i[0]*t+i[4]*s+i[8]*a,this.y=i[1]*t+i[5]*s+i[9]*a,this.z=i[2]*t+i[6]*s+i[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,i=e.z,o=t.x,r=t.y,l=t.z;return this.x=a*l-i*r,this.y=i*o-s*l,this.z=s*r-a*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(t),this.y=s*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new L,$r=new Ss;class pn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Ft.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Ft.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Ft.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const i=s.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let o=0,r=i.count;o<r;o++)e.isMesh===!0?e.getVertexPosition(o,Ft):Ft.fromBufferAttribute(i,o),Ft.applyMatrix4(e.matrixWorld),this.expandByPoint(Ft);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qn.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),qn.copy(s.boundingBox)),qn.applyMatrix4(e.matrixWorld),this.union(qn)}const a=e.children;for(let i=0,o=a.length;i<o;i++)this.expandByObject(a[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ft),Ft.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rn),Yn.subVectors(this.max,Rn),Vs.subVectors(e.a,Rn),Ws.subVectors(e.b,Rn),Xs.subVectors(e.c,Rn),ls.subVectors(Ws,Vs),cs.subVectors(Xs,Ws),As.subVectors(Vs,Xs);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-As.z,As.y,ls.z,0,-ls.x,cs.z,0,-cs.x,As.z,0,-As.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-As.y,As.x,0];return!Qa(t,Vs,Ws,Xs,Yn)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,Vs,Ws,Xs,Yn))?!1:(jn.crossVectors(ls,cs),t=[jn.x,jn.y,jn.z],Qa(t,Vs,Ws,Xs,Yn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ft).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ft).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kt=[new L,new L,new L,new L,new L,new L,new L,new L],Ft=new L,qn=new pn,Vs=new L,Ws=new L,Xs=new L,ls=new L,cs=new L,As=new L,Rn=new L,Yn=new L,jn=new L,zs=new L;function Qa(n,e,t,s,a){for(let i=0,o=n.length-3;i<=o;i+=3){zs.fromArray(n,i);const r=a.x*Math.abs(zs.x)+a.y*Math.abs(zs.y)+a.z*Math.abs(zs.z),l=e.dot(zs),c=t.dot(zs),d=s.dot(zs);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>r)return!1}return!0}const Kc=new pn,wn=new L,ei=new L;class On{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Kc.setFromPoints(e).getCenter(s);let a=0;for(let i=0,o=e.length;i<o;i++)a=Math.max(a,s.distanceToSquared(e[i]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wn.subVectors(e,this.center);const t=wn.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(wn,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ei.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wn.copy(e.center).add(ei)),this.expandByPoint(wn.copy(e.center).sub(ei))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zt=new L,ti=new L,$n=new L,ds=new L,si=new L,Kn=new L,ni=new L;class Na{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.origin).addScaledVector(this.direction,t),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){ti.copy(e).add(t).multiplyScalar(.5),$n.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(ti);const i=e.distanceTo(t)*.5,o=-this.direction.dot($n),r=ds.dot(this.direction),l=-ds.dot($n),c=ds.lengthSq(),d=Math.abs(1-o*o);let f,u,m,p;if(d>0)if(f=o*l-r,u=o*r-l,p=i*d,f>=0)if(u>=-p)if(u<=p){const _=1/d;f*=_,u*=_,m=f*(f+o*u+2*r)+u*(o*f+u+2*l)+c}else u=i,f=Math.max(0,-(o*u+r)),m=-f*f+u*(u+2*l)+c;else u=-i,f=Math.max(0,-(o*u+r)),m=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-o*i+r)),u=f>0?-i:Math.min(Math.max(-i,-l),i),m=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-i,-l),i),m=u*(u+2*l)+c):(f=Math.max(0,-(o*i+r)),u=f>0?i:Math.min(Math.max(-i,-l),i),m=-f*f+u*(u+2*l)+c);else u=o>0?-i:i,f=Math.max(0,-(o*u+r)),m=-f*f+u*(u+2*l)+c;return s&&s.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(ti).addScaledVector($n,u),m}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);const s=Zt.dot(this.direction),a=Zt.dot(Zt)-s*s,i=e.radius*e.radius;if(a>i)return null;const o=Math.sqrt(i-a),r=s-o,l=s+o;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,i,o,r,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(s=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(s=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(i=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(i=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),s>o||i>a||((i>s||isNaN(s))&&(s=i),(o<a||isNaN(a))&&(a=o),f>=0?(r=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(r=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),s>l||r>a)||((r>s||s!==s)&&(s=r),(l<a||a!==a)&&(a=l),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,s,a,i){si.subVectors(t,e),Kn.subVectors(s,e),ni.crossVectors(si,Kn);let o=this.direction.dot(ni),r;if(o>0){if(a)return null;r=1}else if(o<0)r=-1,o=-o;else return null;ds.subVectors(this.origin,e);const l=r*this.direction.dot(Kn.crossVectors(ds,Kn));if(l<0)return null;const c=r*this.direction.dot(si.cross(ds));if(c<0||l+c>o)return null;const d=-r*ds.dot(ni);return d<0?null:this.at(d/o,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,s,a,i,o,r,l,c,d,f,u,m,p,_,g){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,i,o,r,l,c,d,f,u,m,p,_,g)}set(e,t,s,a,i,o,r,l,c,d,f,u,m,p,_,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=s,h[12]=a,h[1]=i,h[5]=o,h[9]=r,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=m,h[7]=p,h[11]=_,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/qs.setFromMatrixColumn(e,0).length(),i=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*i,t[5]=s[5]*i,t[6]=s[6]*i,t[7]=0,t[8]=s[8]*o,t[9]=s[9]*o,t[10]=s[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,i=e.z,o=Math.cos(s),r=Math.sin(s),l=Math.cos(a),c=Math.sin(a),d=Math.cos(i),f=Math.sin(i);if(e.order==="XYZ"){const u=o*d,m=o*f,p=r*d,_=r*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=m+p*c,t[5]=u-_*c,t[9]=-r*l,t[2]=_-u*c,t[6]=p+m*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,m=l*f,p=c*d,_=c*f;t[0]=u+_*r,t[4]=p*r-m,t[8]=o*c,t[1]=o*f,t[5]=o*d,t[9]=-r,t[2]=m*r-p,t[6]=_+u*r,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,m=l*f,p=c*d,_=c*f;t[0]=u-_*r,t[4]=-o*f,t[8]=p+m*r,t[1]=m+p*r,t[5]=o*d,t[9]=_-u*r,t[2]=-o*c,t[6]=r,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,m=o*f,p=r*d,_=r*f;t[0]=l*d,t[4]=p*c-m,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=m*c-p,t[2]=-c,t[6]=r*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,p=r*l,_=r*c;t[0]=l*d,t[4]=_-u*f,t[8]=p*f+m,t[1]=f,t[5]=o*d,t[9]=-r*d,t[2]=-c*d,t[6]=m*f+p,t[10]=u-_*f}else if(e.order==="XZY"){const u=o*l,m=o*c,p=r*l,_=r*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+_,t[5]=o*d,t[9]=m*f-p,t[2]=p*f-m,t[6]=r*d,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zc,e,Jc)}lookAt(e,t,s){const a=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),hs.crossVectors(s,Mt),hs.lengthSq()===0&&(Math.abs(s.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),hs.crossVectors(s,Mt)),hs.normalize(),Zn.crossVectors(Mt,hs),a[0]=hs.x,a[4]=Zn.x,a[8]=Mt.x,a[1]=hs.y,a[5]=Zn.y,a[9]=Mt.y,a[2]=hs.z,a[6]=Zn.z,a[10]=Mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,i=this.elements,o=s[0],r=s[4],l=s[8],c=s[12],d=s[1],f=s[5],u=s[9],m=s[13],p=s[2],_=s[6],g=s[10],h=s[14],S=s[3],b=s[7],E=s[11],C=s[15],z=a[0],T=a[4],W=a[8],R=a[12],y=a[1],H=a[5],D=a[9],X=a[13],k=a[2],U=a[6],G=a[10],Y=a[14],q=a[3],j=a[7],$=a[11],ae=a[15];return i[0]=o*z+r*y+l*k+c*q,i[4]=o*T+r*H+l*U+c*j,i[8]=o*W+r*D+l*G+c*$,i[12]=o*R+r*X+l*Y+c*ae,i[1]=d*z+f*y+u*k+m*q,i[5]=d*T+f*H+u*U+m*j,i[9]=d*W+f*D+u*G+m*$,i[13]=d*R+f*X+u*Y+m*ae,i[2]=p*z+_*y+g*k+h*q,i[6]=p*T+_*H+g*U+h*j,i[10]=p*W+_*D+g*G+h*$,i[14]=p*R+_*X+g*Y+h*ae,i[3]=S*z+b*y+E*k+C*q,i[7]=S*T+b*H+E*U+C*j,i[11]=S*W+b*D+E*G+C*$,i[15]=S*R+b*X+E*Y+C*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],i=e[12],o=e[1],r=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],m=e[14],p=e[3],_=e[7],g=e[11],h=e[15];return p*(+i*l*f-a*c*f-i*r*u+s*c*u+a*r*m-s*l*m)+_*(+t*l*m-t*c*u+i*o*u-a*o*m+a*c*d-i*l*d)+g*(+t*c*f-t*r*m-i*o*f+s*o*m+i*r*d-s*c*d)+h*(-a*r*d-t*l*f+t*r*u+a*o*f-s*o*u+s*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],i=e[3],o=e[4],r=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],m=e[11],p=e[12],_=e[13],g=e[14],h=e[15],S=f*g*c-_*u*c+_*l*m-r*g*m-f*l*h+r*u*h,b=p*u*c-d*g*c-p*l*m+o*g*m+d*l*h-o*u*h,E=d*_*c-p*f*c+p*r*m-o*_*m-d*r*h+o*f*h,C=p*f*l-d*_*l-p*r*u+o*_*u+d*r*g-o*f*g,z=t*S+s*b+a*E+i*C;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/z;return e[0]=S*T,e[1]=(_*u*i-f*g*i-_*a*m+s*g*m+f*a*h-s*u*h)*T,e[2]=(r*g*i-_*l*i+_*a*c-s*g*c-r*a*h+s*l*h)*T,e[3]=(f*l*i-r*u*i-f*a*c+s*u*c+r*a*m-s*l*m)*T,e[4]=b*T,e[5]=(d*g*i-p*u*i+p*a*m-t*g*m-d*a*h+t*u*h)*T,e[6]=(p*l*i-o*g*i-p*a*c+t*g*c+o*a*h-t*l*h)*T,e[7]=(o*u*i-d*l*i+d*a*c-t*u*c-o*a*m+t*l*m)*T,e[8]=E*T,e[9]=(p*f*i-d*_*i-p*s*m+t*_*m+d*s*h-t*f*h)*T,e[10]=(o*_*i-p*r*i+p*s*c-t*_*c-o*s*h+t*r*h)*T,e[11]=(d*r*i-o*f*i-d*s*c+t*f*c+o*s*m-t*r*m)*T,e[12]=C*T,e[13]=(d*_*a-p*f*a+p*s*u-t*_*u-d*s*g+t*f*g)*T,e[14]=(p*r*a-o*_*a-p*s*l+t*_*l+o*s*g-t*r*g)*T,e[15]=(o*f*a-d*r*a+d*s*l-t*f*l-o*s*u+t*r*u)*T,this}scale(e){const t=this.elements,s=e.x,a=e.y,i=e.z;return t[0]*=s,t[4]*=a,t[8]*=i,t[1]*=s,t[5]*=a,t[9]*=i,t[2]*=s,t[6]*=a,t[10]*=i,t[3]*=s,t[7]*=a,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),i=1-s,o=e.x,r=e.y,l=e.z,c=i*o,d=i*r;return this.set(c*o+s,c*r-a*l,c*l+a*r,0,c*r+a*l,d*r+s,d*l-a*o,0,c*l-a*r,d*l+a*o,i*l*l+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,i,o){return this.set(1,s,i,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,i=t._x,o=t._y,r=t._z,l=t._w,c=i+i,d=o+o,f=r+r,u=i*c,m=i*d,p=i*f,_=o*d,g=o*f,h=r*f,S=l*c,b=l*d,E=l*f,C=s.x,z=s.y,T=s.z;return a[0]=(1-(_+h))*C,a[1]=(m+E)*C,a[2]=(p-b)*C,a[3]=0,a[4]=(m-E)*z,a[5]=(1-(u+h))*z,a[6]=(g+S)*z,a[7]=0,a[8]=(p+b)*T,a[9]=(g-S)*T,a[10]=(1-(u+_))*T,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let i=qs.set(a[0],a[1],a[2]).length();const o=qs.set(a[4],a[5],a[6]).length(),r=qs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(i=-i),e.x=a[12],e.y=a[13],e.z=a[14],It.copy(this);const c=1/i,d=1/o,f=1/r;return It.elements[0]*=c,It.elements[1]*=c,It.elements[2]*=c,It.elements[4]*=d,It.elements[5]*=d,It.elements[6]*=d,It.elements[8]*=f,It.elements[9]*=f,It.elements[10]*=f,t.setFromRotationMatrix(It),s.x=i,s.y=o,s.z=r,this}makePerspective(e,t,s,a,i,o,r=qt){const l=this.elements,c=2*i/(t-e),d=2*i/(s-a),f=(t+e)/(t-e),u=(s+a)/(s-a);let m,p;if(r===qt)m=-(o+i)/(o-i),p=-2*o*i/(o-i);else if(r===Pn)m=-o/(o-i),p=-o*i/(o-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,s,a,i,o,r=qt){const l=this.elements,c=1/(t-e),d=1/(s-a),f=1/(o-i),u=(t+e)*c,m=(s+a)*d;let p,_;if(r===qt)p=(o+i)*f,_=-2*f;else if(r===Pn)p=i*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const qs=new L,It=new tt,Zc=new L(0,0,0),Jc=new L(1,1,1),hs=new L,Zn=new L,Mt=new L,Kr=new tt,Zr=new Ss;class Bn{constructor(e=0,t=0,s=0,a=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,i=a[0],o=a[4],r=a[8],l=a[1],c=a[5],d=a[9],f=a[2],u=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(vt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,i),this._z=0);break;case"ZXY":this._x=Math.asin(vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,i)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(r,i)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Kr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kr,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zr.setFromEuler(this),this.setFromQuaternion(Zr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class zr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qc=0;const Jr=new L,Ys=new Ss,Jt=new tt,Jn=new L,Sn=new L,ed=new L,td=new Ss,Qr=new L(1,0,0),eo=new L(0,1,0),to=new L(0,0,1),sd={type:"added"},nd={type:"removed"};class lt extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new L,t=new Bn,s=new Ss,a=new L(1,1,1);function i(){s.setFromEuler(t,!1)}function o(){t.setFromQuaternion(s,void 0,!1)}t._onChange(i),s._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new tt},normalMatrix:{value:new He}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Qr,e)}rotateY(e){return this.rotateOnAxis(eo,e)}rotateZ(e){return this.rotateOnAxis(to,e)}translateOnAxis(e,t){return Jr.copy(e).applyQuaternion(this.quaternion),this.position.add(Jr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qr,e)}translateY(e){return this.translateOnAxis(eo,e)}translateZ(e){return this.translateOnAxis(to,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Jn.copy(e):Jn.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Sn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(Sn,Jn,this.up):Jt.lookAt(Jn,Sn,this.up),this.quaternion.setFromRotationMatrix(Jt),a&&(Jt.extractRotation(a.matrixWorld),Ys.setFromRotationMatrix(Jt),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const o=this.children[s].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let i=0,o=a.length;i<o;i++)a[i].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sn,e,ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sn,td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++){const i=t[s];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let i=0,o=a.length;i<o;i++){const r=a[i];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function i(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=i(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];i(e.shapes,f)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(i(e.materials,this.material[l]));a.material=r}else a.material=i(e.materials,this.material);if(this.children.length>0){a.children=[];for(let r=0;r<this.children.length;r++)a.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];a.animations.push(i(e.animations,l))}}if(t){const r=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),m=o(e.animations),p=o(e.nodes);r.length>0&&(s.geometries=r),l.length>0&&(s.materials=l),c.length>0&&(s.textures=c),d.length>0&&(s.images=d),f.length>0&&(s.shapes=f),u.length>0&&(s.skeletons=u),m.length>0&&(s.animations=m),p.length>0&&(s.nodes=p)}return s.object=a,s;function o(r){const l=[];for(const c in r){const d=r[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}lt.DEFAULT_UP=new L(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nt=new L,Qt=new L,ai=new L,es=new L,js=new L,$s=new L,so=new L,ii=new L,ri=new L,oi=new L;let Qn=!1;class At{constructor(e=new L,t=new L,s=new L){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),Nt.subVectors(e,t),a.cross(Nt);const i=a.lengthSq();return i>0?a.multiplyScalar(1/Math.sqrt(i)):a.set(0,0,0)}static getBarycoord(e,t,s,a,i){Nt.subVectors(a,t),Qt.subVectors(s,t),ai.subVectors(e,t);const o=Nt.dot(Nt),r=Nt.dot(Qt),l=Nt.dot(ai),c=Qt.dot(Qt),d=Qt.dot(ai),f=o*c-r*r;if(f===0)return i.set(0,0,0),null;const u=1/f,m=(c*l-r*d)*u,p=(o*d-r*l)*u;return i.set(1-m-p,p,m)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getUV(e,t,s,a,i,o,r,l){return Qn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qn=!0),this.getInterpolation(e,t,s,a,i,o,r,l)}static getInterpolation(e,t,s,a,i,o,r,l){return this.getBarycoord(e,t,s,a,es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,es.x),l.addScaledVector(o,es.y),l.addScaledVector(r,es.z),l)}static isFrontFacing(e,t,s,a){return Nt.subVectors(s,t),Qt.subVectors(e,t),Nt.cross(Qt).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),Nt.cross(Qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return At.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return At.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,s,a,i){return Qn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qn=!0),At.getInterpolation(e,this.a,this.b,this.c,t,s,a,i)}getInterpolation(e,t,s,a,i){return At.getInterpolation(e,this.a,this.b,this.c,t,s,a,i)}containsPoint(e){return At.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return At.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,i=this.c;let o,r;js.subVectors(a,s),$s.subVectors(i,s),ii.subVectors(e,s);const l=js.dot(ii),c=$s.dot(ii);if(l<=0&&c<=0)return t.copy(s);ri.subVectors(e,a);const d=js.dot(ri),f=$s.dot(ri);if(d>=0&&f<=d)return t.copy(a);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(s).addScaledVector(js,o);oi.subVectors(e,i);const m=js.dot(oi),p=$s.dot(oi);if(p>=0&&m<=p)return t.copy(i);const _=m*c-l*p;if(_<=0&&c>=0&&p<=0)return r=c/(c-p),t.copy(s).addScaledVector($s,r);const g=d*p-m*f;if(g<=0&&f-d>=0&&m-p>=0)return so.subVectors(i,a),r=(f-d)/(f-d+(m-p)),t.copy(a).addScaledVector(so,r);const h=1/(g+_+u);return o=_*h,r=u*h,t.copy(s).addScaledVector(js,o).addScaledVector($s,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},ea={h:0,s:0,l:0};function li(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Pe{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=je.workingColorSpace){return this.r=e,this.g=t,this.b=s,je.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=je.workingColorSpace){if(e=Mr(e,1),t=vt(t,0,1),s=vt(s,0,1),t===0)this.r=this.g=this.b=s;else{const i=s<=.5?s*(1+t):s+t-s*t,o=2*s-i;this.r=li(o,i,e+1/3),this.g=li(o,i,e),this.b=li(o,i,e-1/3)}return je.toWorkingColorSpace(this,a),this}setStyle(e,t=at){function s(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const o=a[1],r=a[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return s(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return s(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return s(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=a[1],o=i.length;if(o===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){const s=$l[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dn(e.r),this.g=dn(e.g),this.b=dn(e.b),this}copyLinearToSRGB(e){return this.r=Ka(e.r),this.g=Ka(e.g),this.b=Ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return je.fromWorkingColorSpace(pt.copy(this),e),Math.round(vt(pt.r*255,0,255))*65536+Math.round(vt(pt.g*255,0,255))*256+Math.round(vt(pt.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(pt.copy(this),t);const s=pt.r,a=pt.g,i=pt.b,o=Math.max(s,a,i),r=Math.min(s,a,i);let l,c;const d=(r+o)/2;if(r===o)l=0,c=0;else{const f=o-r;switch(c=d<=.5?f/(o+r):f/(2-o-r),o){case s:l=(a-i)/f+(a<i?6:0);break;case a:l=(i-s)/f+2;break;case i:l=(s-a)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=at){je.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,s=pt.g,a=pt.b;return e!==at?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(ea);const s=Tn(fs.h,ea.h,t),a=Tn(fs.s,ea.s,t),i=Tn(fs.l,ea.l,t);return this.setHSL(s,a,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,i=e.elements;return this.r=i[0]*t+i[3]*s+i[6]*a,this.g=i[1]*t+i[4]*s+i[7]*a,this.b=i[2]*t+i[5]*s+i[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new Pe;Pe.NAMES=$l;let ad=0;class Hs extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Is,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=zn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ta&&(s.blendSrc=this.blendSrc),this.blendDst!==Aa&&(s.blendDst=this.blendDst),this.blendEquation!==us&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==zn&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nr&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(i){const o=[];for(const r in i){const l=i[r];delete l.metadata,o.push(l)}return o}if(t){const i=a(e.textures),o=a(e.images);i.length>0&&(s.textures=i),o.length>0&&(s.images=o)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let i=0;i!==a;++i)s[i]=t[i].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fn extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new L,ta=new ke;class Ht{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=ar,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ns,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,i=this.itemSize;a<i;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=rn(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=xt(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),s=xt(s,this.array),a=xt(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),s=xt(s,this.array),a=xt(a,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ar&&(e.usage=this.usage),e}}class kr extends Ht{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Lr extends Ht{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class St extends Ht{constructor(e,t,s){super(new Float32Array(e),t,s)}}let id=0;const Pt=new tt,ci=new lt,Ks=new L,Et=new pn,yn=new pn,ft=new L;class Gt extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xl(e)?Lr:kr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const i=new He().getNormalMatrix(e);s.applyNormalMatrix(i),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,s){return Pt.makeTranslation(e,t,s),this.applyMatrix4(Pt),this}scale(e,t,s){return Pt.makeScale(e,t,s),this.applyMatrix4(Pt),this}lookAt(e){return ci.lookAt(e),ci.updateMatrix(),this.applyMatrix4(ci.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=[];for(let s=0,a=e.length;s<a;s++){const i=e[s];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const i=t[s];Et.setFromBufferAttribute(i),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Et.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Et.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Et.min),this.boundingBox.expandByPoint(Et.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const s=this.boundingSphere.center;if(Et.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const r=t[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(Et.min,yn.min),Et.expandByPoint(ft),ft.addVectors(Et.max,yn.max),Et.expandByPoint(ft)):(Et.expandByPoint(yn.min),Et.expandByPoint(yn.max))}Et.getCenter(s);let a=0;for(let i=0,o=e.count;i<o;i++)ft.fromBufferAttribute(e,i),a=Math.max(a,s.distanceToSquared(ft));if(t)for(let i=0,o=t.length;i<o;i++){const r=t[i],l=this.morphTargetsRelative;for(let c=0,d=r.count;c<d;c++)ft.fromBufferAttribute(r,c),l&&(Ks.fromBufferAttribute(e,c),ft.add(Ks)),a=Math.max(a,s.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,a=t.position.array,i=t.normal.array,o=t.uv.array,r=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let y=0;y<r;y++)c[y]=new L,d[y]=new L;const f=new L,u=new L,m=new L,p=new ke,_=new ke,g=new ke,h=new L,S=new L;function b(y,H,D){f.fromArray(a,y*3),u.fromArray(a,H*3),m.fromArray(a,D*3),p.fromArray(o,y*2),_.fromArray(o,H*2),g.fromArray(o,D*2),u.sub(f),m.sub(f),_.sub(p),g.sub(p);const X=1/(_.x*g.y-g.x*_.y);isFinite(X)&&(h.copy(u).multiplyScalar(g.y).addScaledVector(m,-_.y).multiplyScalar(X),S.copy(m).multiplyScalar(_.x).addScaledVector(u,-g.x).multiplyScalar(X),c[y].add(h),c[H].add(h),c[D].add(h),d[y].add(S),d[H].add(S),d[D].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:s.length}]);for(let y=0,H=E.length;y<H;++y){const D=E[y],X=D.start,k=D.count;for(let U=X,G=X+k;U<G;U+=3)b(s[U+0],s[U+1],s[U+2])}const C=new L,z=new L,T=new L,W=new L;function R(y){T.fromArray(i,y*3),W.copy(T);const H=c[y];C.copy(H),C.sub(T.multiplyScalar(T.dot(H))).normalize(),z.crossVectors(W,H);const X=z.dot(d[y])<0?-1:1;l[y*4]=C.x,l[y*4+1]=C.y,l[y*4+2]=C.z,l[y*4+3]=X}for(let y=0,H=E.length;y<H;++y){const D=E[y],X=D.start,k=D.count;for(let U=X,G=X+k;U<G;U+=3)R(s[U+0]),R(s[U+1]),R(s[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let u=0,m=s.count;u<m;u++)s.setXYZ(u,0,0,0);const a=new L,i=new L,o=new L,r=new L,l=new L,c=new L,d=new L,f=new L;if(e)for(let u=0,m=e.count;u<m;u+=3){const p=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);a.fromBufferAttribute(t,p),i.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),d.subVectors(o,i),f.subVectors(a,i),d.cross(f),r.fromBufferAttribute(s,p),l.fromBufferAttribute(s,_),c.fromBufferAttribute(s,g),r.add(d),l.add(d),c.add(d),s.setXYZ(p,r.x,r.y,r.z),s.setXYZ(_,l.x,l.y,l.z),s.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)a.fromBufferAttribute(t,u+0),i.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,i),f.subVectors(a,i),d.cross(f),s.setXYZ(u+0,d.x,d.y,d.z),s.setXYZ(u+1,d.x,d.y,d.z),s.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(r,l){const c=r.array,d=r.itemSize,f=r.normalized,u=new c.constructor(l.length*d);let m=0,p=0;for(let _=0,g=l.length;_<g;_++){r.isInterleavedBufferAttribute?m=l[_]*r.data.stride+r.offset:m=l[_]*d;for(let h=0;h<d;h++)u[p++]=c[m++]}return new Ht(u,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,s=this.index.array,a=this.attributes;for(const r in a){const l=a[r],c=e(l,s);t.setAttribute(r,c)}const i=this.morphAttributes;for(const r in i){const l=[],c=i[r];for(let d=0,f=c.length;d<f;d++){const u=c[d],m=e(u,s);l.push(m)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const l in s){const c=s[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(a[l]=d,i=!0)}i&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(t))}const i=e.morphAttributes;for(const c in i){const d=[],f=i[c];for(let u=0,m=f.length;u<m;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const no=new tt,ks=new Na,sa=new On,ao=new L,Zs=new L,Js=new L,Qs=new L,di=new L,na=new L,aa=new ke,ia=new ke,ra=new ke,io=new L,ro=new L,oo=new L,oa=new L,la=new L;class ot extends lt{constructor(e=new Gt,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=a.length;i<o;i++){const r=a[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=i}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,i=s.morphAttributes.position,o=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const r=this.morphTargetInfluences;if(i&&r){na.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const d=r[l],f=i[l];d!==0&&(di.fromBufferAttribute(f,e),o?na.addScaledVector(di,d):na.addScaledVector(di.sub(t),d))}t.add(na)}return t}raycast(e,t){const s=this.geometry,a=this.material,i=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),sa.copy(s.boundingSphere),sa.applyMatrix4(i),ks.copy(e.ray).recast(e.near),!(sa.containsPoint(ks.origin)===!1&&(ks.intersectSphere(sa,ao)===null||ks.origin.distanceToSquared(ao)>(e.far-e.near)**2))&&(no.copy(i).invert(),ks.copy(e.ray).applyMatrix4(no),!(s.boundingBox!==null&&ks.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,s){let a;const i=this.geometry,o=this.material,r=i.index,l=i.attributes.position,c=i.attributes.uv,d=i.attributes.uv1,f=i.attributes.normal,u=i.groups,m=i.drawRange;if(r!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){const g=u[p],h=o[g.materialIndex],S=Math.max(g.start,m.start),b=Math.min(r.count,Math.min(g.start+g.count,m.start+m.count));for(let E=S,C=b;E<C;E+=3){const z=r.getX(E),T=r.getX(E+1),W=r.getX(E+2);a=ca(this,h,e,s,c,d,f,z,T,W),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const p=Math.max(0,m.start),_=Math.min(r.count,m.start+m.count);for(let g=p,h=_;g<h;g+=3){const S=r.getX(g),b=r.getX(g+1),E=r.getX(g+2);a=ca(this,o,e,s,c,d,f,S,b,E),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){const g=u[p],h=o[g.materialIndex],S=Math.max(g.start,m.start),b=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let E=S,C=b;E<C;E+=3){const z=E,T=E+1,W=E+2;a=ca(this,h,e,s,c,d,f,z,T,W),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const p=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=p,h=_;g<h;g+=3){const S=g,b=g+1,E=g+2;a=ca(this,o,e,s,c,d,f,S,b,E),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function rd(n,e,t,s,a,i,o,r){let l;if(e.side===Rt?l=s.intersectTriangle(o,i,a,!0,r):l=s.intersectTriangle(a,i,o,e.side===os,r),l===null)return null;la.copy(r),la.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(la);return c<t.near||c>t.far?null:{distance:c,point:la.clone(),object:n}}function ca(n,e,t,s,a,i,o,r,l,c){n.getVertexPosition(r,Zs),n.getVertexPosition(l,Js),n.getVertexPosition(c,Qs);const d=rd(n,e,t,s,Zs,Js,Qs,oa);if(d){a&&(aa.fromBufferAttribute(a,r),ia.fromBufferAttribute(a,l),ra.fromBufferAttribute(a,c),d.uv=At.getInterpolation(oa,Zs,Js,Qs,aa,ia,ra,new ke)),i&&(aa.fromBufferAttribute(i,r),ia.fromBufferAttribute(i,l),ra.fromBufferAttribute(i,c),d.uv1=At.getInterpolation(oa,Zs,Js,Qs,aa,ia,ra,new ke),d.uv2=d.uv1),o&&(io.fromBufferAttribute(o,r),ro.fromBufferAttribute(o,l),oo.fromBufferAttribute(o,c),d.normal=At.getInterpolation(oa,Zs,Js,Qs,io,ro,oo,new L),d.normal.dot(s.direction)>0&&d.normal.multiplyScalar(-1));const f={a:r,b:l,c,normal:new L,materialIndex:0};At.getNormal(Zs,Js,Qs,f.normal),d.face=f}return d}class _n extends Gt{constructor(e=1,t=1,s=1,a=1,i=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:i,depthSegments:o};const r=this;a=Math.floor(a),i=Math.floor(i),o=Math.floor(o);const l=[],c=[],d=[],f=[];let u=0,m=0;p("z","y","x",-1,-1,s,t,e,o,i,0),p("z","y","x",1,-1,s,t,-e,o,i,1),p("x","z","y",1,1,e,s,t,a,o,2),p("x","z","y",1,-1,e,s,-t,a,o,3),p("x","y","z",1,-1,e,t,s,a,i,4),p("x","y","z",-1,-1,e,t,-s,a,i,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(f,2));function p(_,g,h,S,b,E,C,z,T,W,R){const y=E/T,H=C/W,D=E/2,X=C/2,k=z/2,U=T+1,G=W+1;let Y=0,q=0;const j=new L;for(let $=0;$<G;$++){const ae=$*H-X;for(let ie=0;ie<U;ie++){const V=ie*y-D;j[_]=V*S,j[g]=ae*b,j[h]=k,c.push(j.x,j.y,j.z),j[_]=0,j[g]=0,j[h]=z>0?1:-1,d.push(j.x,j.y,j.z),f.push(ie/T),f.push(1-$/W),Y+=1}}for(let $=0;$<W;$++)for(let ae=0;ae<T;ae++){const ie=u+ae+U*$,V=u+ae+U*($+1),K=u+(ae+1)+U*($+1),ce=u+(ae+1)+U*$;l.push(ie,V,ce),l.push(V,K,ce),q+=6}r.addGroup(m,q,R),m+=q,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gn(n){const e={};for(const t in n){e[t]={};for(const s in n[t]){const a=n[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function bt(n){const e={};for(let t=0;t<n.length;t++){const s=gn(n[t]);for(const a in s)e[a]=s[a]}return e}function od(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kl(n){return n.getRenderTarget()===null?n.outputColorSpace:je.workingColorSpace}const Zl={clone:gn,merge:bt};var ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ys extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gn(e.uniforms),this.uniformsGroups=od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?t.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[a]={type:"m4",value:o.toArray()}:t.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Cr extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=qt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends Cr{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Dn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dn*2*Math.atan(Math.tan(cn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,s,a,i,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cn*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,i=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;i+=o.offsetX*a/l,t-=o.offsetY*s/c,a*=o.width/l,s*=o.height/c}const r=this.filmOffset;r!==0&&(i+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const en=-90,tn=1;class Jl extends lt{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new zt(en,tn,e,t);a.layers=this.layers,this.add(a);const i=new zt(en,tn,e,t);i.layers=this.layers,this.add(i);const o=new zt(en,tn,e,t);o.layers=this.layers,this.add(o);const r=new zt(en,tn,e,t);r.layers=this.layers,this.add(r);const l=new zt(en,tn,e,t);l.layers=this.layers,this.add(l);const c=new zt(en,tn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,i,o,r,l]=t;for(const c of t)this.remove(c);if(e===qt)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pn)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,o,r,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,i),e.setRenderTarget(s,1,a),e.render(t,o),e.setRenderTarget(s,2,a),e.render(t,r),e.setRenderTarget(s,3,a),e.render(t,l),e.setRenderTarget(s,4,a),e.render(t,c),s.texture.generateMipmaps=_,e.setRenderTarget(s,5,a),e.render(t,d),e.setRenderTarget(f,u,m),e.xr.enabled=p,s.texture.needsPMREMUpdate=!0}}class Pr extends wt{constructor(e,t,s,a,i,o,r,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Ns,super(e,t,s,a,i,o,r,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ql extends ws{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];t.encoding!==void 0&&(An("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===xs?at:kt),this.texture=new Pr(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new _n(5,5,5),i=new ys({name:"CubemapFromEquirect",uniforms:gn(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Rt,blending:as});i.uniforms.tEquirect.value=t;const o=new ot(a,i),r=t.minFilter;return t.minFilter===fn&&(t.minFilter=Tt),new Jl(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,s,a){const i=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,s,a);e.setRenderTarget(i)}}const hi=new L,dd=new L,hd=new He;class ts{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=hi.subVectors(s,t).cross(dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(hi),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/a;return i<0||i>1?null:t.copy(e.start).addScaledVector(s,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||hd.getNormalMatrix(e),a=this.coplanarPoint(hi).applyMatrix4(e),i=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new On,da=new L;class Oa{constructor(e=new ts,t=new ts,s=new ts,a=new ts,i=new ts,o=new ts){this.planes=[e,t,s,a,i,o]}set(e,t,s,a,i,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(s),r[3].copy(a),r[4].copy(i),r[5].copy(o),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=qt){const s=this.planes,a=e.elements,i=a[0],o=a[1],r=a[2],l=a[3],c=a[4],d=a[5],f=a[6],u=a[7],m=a[8],p=a[9],_=a[10],g=a[11],h=a[12],S=a[13],b=a[14],E=a[15];if(s[0].setComponents(l-i,u-c,g-m,E-h).normalize(),s[1].setComponents(l+i,u+c,g+m,E+h).normalize(),s[2].setComponents(l+o,u+d,g+p,E+S).normalize(),s[3].setComponents(l-o,u-d,g-p,E-S).normalize(),s[4].setComponents(l-r,u-f,g-_,E-b).normalize(),t===qt)s[5].setComponents(l+r,u+f,g+_,E+b).normalize();else if(t===Pn)s[5].setComponents(r,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){return Ls.center.set(0,0,0),Ls.radius=.7071067811865476,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(da.x=a.normal.x>0?e.max.x:e.min.x,da.y=a.normal.y>0?e.max.y:e.min.y,da.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ec(){let n=null,e=!1,t=null,s=null;function a(i,o){t(i,o),s=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){n=i}}}function fd(n,e){const t=e.isWebGL2,s=new WeakMap;function a(c,d){const f=c.array,u=c.usage,m=f.byteLength,p=n.createBuffer();n.bindBuffer(d,p),n.bufferData(d,f,u),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function i(c,d,f){const u=d.array,m=d._updateRange,p=d.updateRanges;if(n.bindBuffer(f,c),m.count===-1&&p.length===0&&n.bufferSubData(f,0,u),p.length!==0){for(let _=0,g=p.length;_<g;_++){const h=p[_];t?n.bufferSubData(f,h.start*u.BYTES_PER_ELEMENT,u,h.start,h.count):n.bufferSubData(f,h.start*u.BYTES_PER_ELEMENT,u.subarray(h.start,h.start+h.count))}d.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):n.bufferSubData(f,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),s.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=s.get(c);d&&(n.deleteBuffer(d.buffer),s.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=s.get(c);(!u||u.version<c.version)&&s.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=s.get(c);if(f===void 0)s.set(c,a(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,c,d),f.version=c.version}}return{get:o,remove:r,update:l}}class Hn extends Gt{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const i=e/2,o=t/2,r=Math.floor(s),l=Math.floor(a),c=r+1,d=l+1,f=e/r,u=t/l,m=[],p=[],_=[],g=[];for(let h=0;h<d;h++){const S=h*u-o;for(let b=0;b<c;b++){const E=b*f-i;p.push(E,-S,0),_.push(0,0,1),g.push(b/r),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<r;S++){const b=S+c*h,E=S+c*(h+1),C=S+1+c*(h+1),z=S+1+c*h;m.push(b,E,z),m.push(E,C,z)}this.setIndex(m),this.setAttribute("position",new St(p,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.width,e.height,e.widthSegments,e.heightSegments)}}var ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gd=`#ifdef USE_ALPHAHASH
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
#endif`,md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
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
#endif`,bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rd=`#ifdef USE_BATCHING
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
#endif`,wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Md=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ed=`#ifdef USE_IRIDESCENCE
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
#endif`,Td=`#ifdef USE_BUMPMAP
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fd=`#define PI 3.141592653589793
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
} // validated`,Id=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nd=`vec3 transformedNormal = objectNormal;
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
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`
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
}`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eh=`#ifdef USE_GRADIENTMAP
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
}`,th=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ah=`varying vec3 vViewPosition;
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
#endif`,rh=`#ifdef USE_ENVMAP
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
#endif`,oh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ch=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hh=`PhysicalMaterial material;
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
#endif`,fh=`struct PhysicalMaterial {
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
}`,uh=`
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
#endif`,gh=`#if defined( RE_IndirectDiffuse )
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
#endif`,mh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ph=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_h=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
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
#endif`,Ah=`#ifdef USE_MORPHTARGETS
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
#endif`,zh=`#ifdef USE_MORPHTARGETS
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
#endif`,kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ch=`#ifndef FLAT_SHADED
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
#endif`,Fh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ih=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nh=`#ifdef USE_CLEARCOATMAP
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
#endif`,Bh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$h=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zh=`float getShadowMask() {
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
}`,Jh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qh=`#ifdef USE_SKINNING
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
#endif`,ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tf=`#ifdef USE_SKINNING
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
#endif`,sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,of=`#ifdef USE_TRANSMISSION
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
#endif`,lf=`#ifdef USE_TRANSMISSION
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gf=`uniform sampler2D t2D;
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
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
}`,bf=`#if DEPTH_PACKING == 3200
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
}`,Rf=`#define DISTANCE
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
}`,wf=`#define DISTANCE
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`uniform float scale;
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
}`,Ef=`uniform vec3 diffuse;
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
}`,Tf=`#include <common>
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
}`,Af=`uniform vec3 diffuse;
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
}`,zf=`#define LAMBERT
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
}`,kf=`#define LAMBERT
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
}`,Lf=`#define MATCAP
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
}`,Cf=`#define MATCAP
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
}`,Pf=`#define NORMAL
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
}`,Df=`#define NORMAL
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
}`,Uf=`#define PHONG
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
}`,Ff=`#define PHONG
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
}`,If=`#define STANDARD
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
}`,Nf=`#define STANDARD
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
}`,Of=`#define TOON
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
}`,Bf=`#define TOON
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
}`,Hf=`uniform float size;
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Vf=`#include <common>
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
}`,Wf=`uniform vec3 color;
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
}`,Xf=`uniform float rotation;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:ud,alphahash_pars_fragment:gd,alphamap_fragment:md,alphamap_pars_fragment:pd,alphatest_fragment:_d,alphatest_pars_fragment:vd,aomap_fragment:xd,aomap_pars_fragment:bd,batching_pars_vertex:Rd,batching_vertex:wd,begin_vertex:Sd,beginnormal_vertex:yd,bsdfs:Md,iridescence_fragment:Ed,bumpmap_pars_fragment:Td,clipping_planes_fragment:Ad,clipping_planes_pars_fragment:zd,clipping_planes_pars_vertex:kd,clipping_planes_vertex:Ld,color_fragment:Cd,color_pars_fragment:Pd,color_pars_vertex:Dd,color_vertex:Ud,common:Fd,cube_uv_reflection_fragment:Id,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Od,displacementmap_vertex:Bd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Gd,colorspace_fragment:Vd,colorspace_pars_fragment:Wd,envmap_fragment:Xd,envmap_common_pars_fragment:qd,envmap_pars_fragment:Yd,envmap_pars_vertex:jd,envmap_physical_pars_fragment:rh,envmap_vertex:$d,fog_vertex:Kd,fog_pars_vertex:Zd,fog_fragment:Jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:eh,lightmap_fragment:th,lightmap_pars_fragment:sh,lights_lambert_fragment:nh,lights_lambert_pars_fragment:ah,lights_pars_begin:ih,lights_toon_fragment:oh,lights_toon_pars_fragment:lh,lights_phong_fragment:ch,lights_phong_pars_fragment:dh,lights_physical_fragment:hh,lights_physical_pars_fragment:fh,lights_fragment_begin:uh,lights_fragment_maps:gh,lights_fragment_end:mh,logdepthbuf_fragment:ph,logdepthbuf_pars_fragment:_h,logdepthbuf_pars_vertex:vh,logdepthbuf_vertex:xh,map_fragment:bh,map_pars_fragment:Rh,map_particle_fragment:wh,map_particle_pars_fragment:Sh,metalnessmap_fragment:yh,metalnessmap_pars_fragment:Mh,morphcolor_vertex:Eh,morphnormal_vertex:Th,morphtarget_pars_vertex:Ah,morphtarget_vertex:zh,normal_fragment_begin:kh,normal_fragment_maps:Lh,normal_pars_fragment:Ch,normal_pars_vertex:Ph,normal_vertex:Dh,normalmap_pars_fragment:Uh,clearcoat_normal_fragment_begin:Fh,clearcoat_normal_fragment_maps:Ih,clearcoat_pars_fragment:Nh,iridescence_pars_fragment:Oh,opaque_fragment:Bh,packing:Hh,premultiplied_alpha_fragment:Gh,project_vertex:Vh,dithering_fragment:Wh,dithering_pars_fragment:Xh,roughnessmap_fragment:qh,roughnessmap_pars_fragment:Yh,shadowmap_pars_fragment:jh,shadowmap_pars_vertex:$h,shadowmap_vertex:Kh,shadowmask_pars_fragment:Zh,skinbase_vertex:Jh,skinning_pars_vertex:Qh,skinning_vertex:ef,skinnormal_vertex:tf,specularmap_fragment:sf,specularmap_pars_fragment:nf,tonemapping_fragment:af,tonemapping_pars_fragment:rf,transmission_fragment:of,transmission_pars_fragment:lf,uv_pars_fragment:cf,uv_pars_vertex:df,uv_vertex:hf,worldpos_vertex:ff,background_vert:uf,background_frag:gf,backgroundCube_vert:mf,backgroundCube_frag:pf,cube_vert:_f,cube_frag:vf,depth_vert:xf,depth_frag:bf,distanceRGBA_vert:Rf,distanceRGBA_frag:wf,equirect_vert:Sf,equirect_frag:yf,linedashed_vert:Mf,linedashed_frag:Ef,meshbasic_vert:Tf,meshbasic_frag:Af,meshlambert_vert:zf,meshlambert_frag:kf,meshmatcap_vert:Lf,meshmatcap_frag:Cf,meshnormal_vert:Pf,meshnormal_frag:Df,meshphong_vert:Uf,meshphong_frag:Ff,meshphysical_vert:If,meshphysical_frag:Nf,meshtoon_vert:Of,meshtoon_frag:Bf,points_vert:Hf,points_frag:Gf,shadow_vert:Vf,shadow_frag:Wf,sprite_vert:Xf,sprite_frag:qf},re={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Ot={basic:{uniforms:bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:bt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:bt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:bt([re.points,re.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:bt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:bt([re.common,re.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:bt([re.sprite,re.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:bt([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:bt([re.lights,re.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Ot.physical={uniforms:bt([Ot.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const ha={r:0,b:0,g:0};function Yf(n,e,t,s,a,i,o){const r=new Pe(0);let l=i===!0?0:1,c,d,f=null,u=0,m=null;function p(g,h){let S=!1,b=h.isScene===!0?h.background:null;b&&b.isTexture&&(b=(h.backgroundBlurriness>0?t:e).get(b)),b===null?_(r,l):b&&b.isColor&&(_(b,1),S=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?s.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===In)?(d===void 0&&(d=new ot(new _n(1,1,1),new ys({name:"BackgroundCubeMaterial",uniforms:gn(Ot.backgroundCube.uniforms),vertexShader:Ot.backgroundCube.vertexShader,fragmentShader:Ot.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,z,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=je.getTransfer(b.colorSpace)!==$e,(f!==b||u!==b.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,f=b,u=b.version,m=n.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ot(new Hn(2,2),new ys({name:"BackgroundMaterial",uniforms:gn(Ot.background.uniforms),vertexShader:Ot.background.vertexShader,fragmentShader:Ot.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=je.getTransfer(b.colorSpace)!==$e,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||u!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,u=b.version,m=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,h){g.getRGB(ha,Kl(n)),s.buffers.color.setClear(ha.r,ha.g,ha.b,h,o)}return{getClearColor:function(){return r},setClearColor:function(g,h=1){r.set(g),l=h,_(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(r,l)},render:p}}function jf(n,e,t,s){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),i=s.isWebGL2?null:e.get("OES_vertex_array_object"),o=s.isWebGL2||i!==null,r={},l=g(null);let c=l,d=!1;function f(k,U,G,Y,q){let j=!1;if(o){const $=_(Y,G,U);c!==$&&(c=$,m(c.object)),j=h(k,Y,G,q),j&&S(k,Y,G,q)}else{const $=U.wireframe===!0;(c.geometry!==Y.id||c.program!==G.id||c.wireframe!==$)&&(c.geometry=Y.id,c.program=G.id,c.wireframe=$,j=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(j||d)&&(d=!1,W(k,U,G,Y),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function u(){return s.isWebGL2?n.createVertexArray():i.createVertexArrayOES()}function m(k){return s.isWebGL2?n.bindVertexArray(k):i.bindVertexArrayOES(k)}function p(k){return s.isWebGL2?n.deleteVertexArray(k):i.deleteVertexArrayOES(k)}function _(k,U,G){const Y=G.wireframe===!0;let q=r[k.id];q===void 0&&(q={},r[k.id]=q);let j=q[U.id];j===void 0&&(j={},q[U.id]=j);let $=j[Y];return $===void 0&&($=g(u()),j[Y]=$),$}function g(k){const U=[],G=[],Y=[];for(let q=0;q<a;q++)U[q]=0,G[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:Y,object:k,attributes:{},index:null}}function h(k,U,G,Y){const q=c.attributes,j=U.attributes;let $=0;const ae=G.getAttributes();for(const ie in ae)if(ae[ie].location>=0){const K=q[ie];let ce=j[ie];if(ce===void 0&&(ie==="instanceMatrix"&&k.instanceMatrix&&(ce=k.instanceMatrix),ie==="instanceColor"&&k.instanceColor&&(ce=k.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;$++}return c.attributesNum!==$||c.index!==Y}function S(k,U,G,Y){const q={},j=U.attributes;let $=0;const ae=G.getAttributes();for(const ie in ae)if(ae[ie].location>=0){let K=j[ie];K===void 0&&(ie==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),ie==="instanceColor"&&k.instanceColor&&(K=k.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),q[ie]=ce,$++}c.attributes=q,c.attributesNum=$,c.index=Y}function b(){const k=c.newAttributes;for(let U=0,G=k.length;U<G;U++)k[U]=0}function E(k){C(k,0)}function C(k,U){const G=c.newAttributes,Y=c.enabledAttributes,q=c.attributeDivisors;G[k]=1,Y[k]===0&&(n.enableVertexAttribArray(k),Y[k]=1),q[k]!==U&&((s.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,U),q[k]=U)}function z(){const k=c.newAttributes,U=c.enabledAttributes;for(let G=0,Y=U.length;G<Y;G++)U[G]!==k[G]&&(n.disableVertexAttribArray(G),U[G]=0)}function T(k,U,G,Y,q,j,$){$===!0?n.vertexAttribIPointer(k,U,G,q,j):n.vertexAttribPointer(k,U,G,Y,q,j)}function W(k,U,G,Y){if(s.isWebGL2===!1&&(k.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const q=Y.attributes,j=G.getAttributes(),$=U.defaultAttributeValues;for(const ae in j){const ie=j[ae];if(ie.location>=0){let V=q[ae];if(V===void 0&&(ae==="instanceMatrix"&&k.instanceMatrix&&(V=k.instanceMatrix),ae==="instanceColor"&&k.instanceColor&&(V=k.instanceColor)),V!==void 0){const K=V.normalized,ce=V.itemSize,ve=t.get(V);if(ve===void 0)continue;const pe=ve.buffer,Le=ve.type,Ce=ve.bytesPerElement,ye=s.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||V.gpuType===mr);if(V.isInterleavedBufferAttribute){const Ve=V.data,I=Ve.stride,ut=V.offset;if(Ve.isInstancedInterleavedBuffer){for(let Re=0;Re<ie.locationSize;Re++)C(ie.location+Re,Ve.meshPerAttribute);k.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Re=0;Re<ie.locationSize;Re++)E(ie.location+Re);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let Re=0;Re<ie.locationSize;Re++)T(ie.location+Re,ce/ie.locationSize,Le,K,I*Ce,(ut+ce/ie.locationSize*Re)*Ce,ye)}else{if(V.isInstancedBufferAttribute){for(let Ve=0;Ve<ie.locationSize;Ve++)C(ie.location+Ve,V.meshPerAttribute);k.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ve=0;Ve<ie.locationSize;Ve++)E(ie.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let Ve=0;Ve<ie.locationSize;Ve++)T(ie.location+Ve,ce/ie.locationSize,Le,K,ce*Ce,ce/ie.locationSize*Ve*Ce,ye)}}else if($!==void 0){const K=$[ae];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(ie.location,K);break;case 3:n.vertexAttrib3fv(ie.location,K);break;case 4:n.vertexAttrib4fv(ie.location,K);break;default:n.vertexAttrib1fv(ie.location,K)}}}}z()}function R(){D();for(const k in r){const U=r[k];for(const G in U){const Y=U[G];for(const q in Y)p(Y[q].object),delete Y[q];delete U[G]}delete r[k]}}function y(k){if(r[k.id]===void 0)return;const U=r[k.id];for(const G in U){const Y=U[G];for(const q in Y)p(Y[q].object),delete Y[q];delete U[G]}delete r[k.id]}function H(k){for(const U in r){const G=r[U];if(G[k.id]===void 0)continue;const Y=G[k.id];for(const q in Y)p(Y[q].object),delete Y[q];delete G[k.id]}}function D(){X(),d=!0,c!==l&&(c=l,m(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:D,resetDefaultState:X,dispose:R,releaseStatesOfGeometry:y,releaseStatesOfProgram:H,initAttributes:b,enableAttribute:E,disableUnusedAttributes:z}}function $f(n,e,t,s){const a=s.isWebGL2;let i;function o(d){i=d}function r(d,f){n.drawArrays(i,d,f),t.update(f,i,1)}function l(d,f,u){if(u===0)return;let m,p;if(a)m=n,p="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](i,d,f,u),t.update(f,i,u)}function c(d,f,u){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u;p++)this.render(d[p],f[p]);else{m.multiDrawArraysWEBGL(i,d,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=f[_];t.update(p,i,1)}}this.setMode=o,this.render=r,this.renderInstances=l,this.renderMultiDraw=c}function Kf(n,e,t){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function i(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let r=t.precision!==void 0?t.precision:"highp";const l=i(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=u>0,E=o||e.has("OES_texture_float"),C=b&&E,z=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:a,getMaxPrecision:i,precision:r,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:g,maxVaryings:h,maxFragmentUniforms:S,vertexTextures:b,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:z}}function Zf(n){const e=this;let t=null,s=0,a=!1,i=!1;const o=new ts,r=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const m=f.length!==0||u||s!==0||a;return a=u,s=f.length,m},this.beginShadows=function(){i=!0,d(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,m){const p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,h=n.get(f);if(!a||p===null||p.length===0||i&&!g)i?d(null):c();else{const S=i?0:s,b=S*4;let E=h.clippingState||null;l.value=E,E=d(p,u,b,m);for(let C=0;C!==b;++C)E[C]=t[C];h.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function d(f,u,m,p){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const h=m+_*4,S=u.matrixWorldInverse;r.getNormalMatrix(S),(g===null||g.length<h)&&(g=new Float32Array(h));for(let b=0,E=m;b!==_;++b,E+=4)o.copy(f[b]).applyMatrix4(S,r),o.normal.toArray(g,E),g[E+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Jf(n){let e=new WeakMap;function t(o,r){return r===za?o.mapping=Ns:r===ka&&(o.mapping=Os),o}function s(o){if(o&&o.isTexture){const r=o.mapping;if(r===za||r===ka)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ql(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",a),t(c.texture,o.mapping)}else return null}}return o}function a(o){const r=o.target;r.removeEventListener("dispose",a);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function i(){e=new WeakMap}return{get:s,dispose:i}}class Ba extends Cr{constructor(e=-1,t=1,s=1,a=-1,i=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=i,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,i,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let i=s-e,o=s+e,r=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,o=i+c*this.view.width,r-=d*this.view.offsetY,l=r-d*this.view.height}this.projectionMatrix.makeOrthographic(i,o,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const on=4,lo=[.125,.215,.35,.446,.526,.582],Us=20,fi=new Ba,co=new Pe;let ui=null,gi=0,mi=0;const Ds=(1+Math.sqrt(5))/2,sn=1/Ds,ho=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ds,sn),new L(0,Ds,-sn),new L(sn,0,Ds),new L(-sn,0,Ds),new L(Ds,sn,0),new L(-Ds,sn,0)];class or{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){ui=this._renderer.getRenderTarget(),gi=this._renderer.getActiveCubeFace(),mi=this._renderer.getActiveMipmapLevel(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,s,a,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ui,gi,mi),e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ui=this._renderer.getRenderTarget(),gi=this._renderer.getActiveCubeFace(),mi=this._renderer.getActiveMipmapLevel();const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:un,format:Ut,colorSpace:jt,depthBuffer:!1},a=fo(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fo(e,t,s);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qf(i)),this._blurMaterial=eu(i,e,t)}return a}_compileMaterial(e){const t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,fi)}_sceneToCubeUV(e,t,s,a){const r=new zt(90,1,t,s),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(co),d.toneMapping=is,d.autoClear=!1;const m=new Fn({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),p=new ot(new _n,m);let _=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,_=!0):(m.color.copy(co),_=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(r.up.set(0,l[h],0),r.lookAt(c[h],0,0)):S===1?(r.up.set(0,0,l[h]),r.lookAt(0,c[h],0)):(r.up.set(0,l[h],0),r.lookAt(0,0,c[h]));const b=this._cubeSize;fa(a,S*b,h>2?b:0,b,b),d.setRenderTarget(a),_&&d.render(p,r),d.render(e,r)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=u,d.autoClear=f,e.background=g}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Ns||e.mapping===Os;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=go()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uo());const i=a?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],i),r=i.uniforms;r.envMap.value=e;const l=this._cubeSize;fa(t,0,0,3*l,2*l),s.setRenderTarget(t),s.render(o,fi)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const i=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=ho[(a-1)%ho.length];this._blur(e,a-1,a,i,o)}t.autoClear=s}_blur(e,t,s,a,i){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,s,a,"latitudinal",i),this._halfBlur(o,e,s,s,a,"longitudinal",i)}_halfBlur(e,t,s,a,i,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new ot(this._lodPlanes[a],c),u=c.uniforms,m=this._sizeLods[s]-1,p=isFinite(i)?Math.PI/(2*m):2*Math.PI/(2*Us-1),_=i/p,g=isFinite(i)?1+Math.floor(d*_):Us;g>Us&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Us}`);const h=[];let S=0;for(let T=0;T<Us;++T){const W=T/_,R=Math.exp(-W*W/2);h.push(R),T===0?S+=R:T<g&&(S+=2*R)}for(let T=0;T<h.length;T++)h[T]=h[T]/S;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=h,u.latitudinal.value=o==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:b}=this;u.dTheta.value=p,u.mipInt.value=b-s;const E=this._sizeLods[a],C=3*E*(a>b-on?a-b+on:0),z=4*(this._cubeSize-E);fa(t,C,z,3*E,2*E),l.setRenderTarget(t),l.render(f,fi)}}function Qf(n){const e=[],t=[],s=[];let a=n;const i=n-on+1+lo.length;for(let o=0;o<i;o++){const r=Math.pow(2,a);t.push(r);let l=1/r;o>n-on?l=lo[o-n+on-1]:o===0&&(l=0),s.push(l);const c=1/(r-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,p=6,_=3,g=2,h=1,S=new Float32Array(_*p*m),b=new Float32Array(g*p*m),E=new Float32Array(h*p*m);for(let z=0;z<m;z++){const T=z%3*2/3-1,W=z>2?0:-1,R=[T,W,0,T+2/3,W,0,T+2/3,W+1,0,T,W,0,T+2/3,W+1,0,T,W+1,0];S.set(R,_*p*z),b.set(u,g*p*z);const y=[z,z,z,z,z,z];E.set(y,h*p*z)}const C=new Gt;C.setAttribute("position",new Ht(S,_)),C.setAttribute("uv",new Ht(b,g)),C.setAttribute("faceIndex",new Ht(E,h)),e.push(C),a>on&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function fo(n,e,t){const s=new ws(n,e,t);return s.texture.mapping=In,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function fa(n,e,t,s,a){n.viewport.set(e,t,s,a),n.scissor.set(e,t,s,a)}function eu(n,e,t){const s=new Float32Array(Us),a=new L(0,1,0);return new ys({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Dr(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function uo(){return new ys({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dr(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function go(){return new ys({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Dr(){return`

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
	`}function tu(n){let e=new WeakMap,t=null;function s(r){if(r&&r.isTexture){const l=r.mapping,c=l===za||l===ka,d=l===Ns||l===Os;if(c||d)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let f=e.get(r);return t===null&&(t=new or(n)),f=c?t.fromEquirectangular(r,f):t.fromCubemap(r,f),e.set(r,f),f.texture}else{if(e.has(r))return e.get(r).texture;{const f=r.image;if(c&&f&&f.height>0||d&&f&&a(f)){t===null&&(t=new or(n));const u=c?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,u),r.addEventListener("dispose",i),u.texture}else return null}}}return r}function a(r){let l=0;const c=6;for(let d=0;d<c;d++)r[d]!==void 0&&l++;return l===c}function i(r){const l=r.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:o}}function su(n){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(s){s.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(s){const a=t(s);return a===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function nu(n,e,t,s){const a={},i=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);for(const p in u.morphAttributes){const _=u.morphAttributes[p];for(let g=0,h=_.length;g<h;g++)e.remove(_[g])}u.removeEventListener("dispose",o),delete a[u.id];const m=i.get(u);m&&(e.remove(m),i.delete(u)),s.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function r(f,u){return a[u.id]===!0||(u.addEventListener("dispose",o),a[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const p in m){const _=m[p];for(let g=0,h=_.length;g<h;g++)e.update(_[g],n.ARRAY_BUFFER)}}function c(f){const u=[],m=f.index,p=f.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let b=0,E=S.length;b<E;b+=3){const C=S[b+0],z=S[b+1],T=S[b+2];u.push(C,z,z,T,T,C)}}else if(p!==void 0){const S=p.array;_=p.version;for(let b=0,E=S.length/3-1;b<E;b+=3){const C=b+0,z=b+1,T=b+2;u.push(C,z,z,T,T,C)}}else return;const g=new(Xl(u)?Lr:kr)(u,1);g.version=_;const h=i.get(f);h&&e.remove(h),i.set(f,g)}function d(f){const u=i.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return i.get(f)}return{get:r,update:l,getWireframeAttribute:d}}function au(n,e,t,s){const a=s.isWebGL2;let i;function o(m){i=m}let r,l;function c(m){r=m.type,l=m.bytesPerElement}function d(m,p){n.drawElements(i,p,r,m*l),t.update(p,i,1)}function f(m,p,_){if(_===0)return;let g,h;if(a)g=n,h="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[h](i,p,r,m*l,_),t.update(p,i,_)}function u(m,p,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<_;h++)this.render(m[h]/l,p[h]);else{g.multiDrawElementsWEBGL(i,p,0,r,m,0,_);let h=0;for(let S=0;S<_;S++)h+=p[S];t.update(h,i,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=u}function iu(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(i,o,r){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=r*(i/3);break;case n.LINES:t.lines+=r*(i/2);break;case n.LINE_STRIP:t.lines+=r*(i-1);break;case n.LINE_LOOP:t.lines+=r*i;break;case n.POINTS:t.points+=r*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function ru(n,e){return n[0]-e[0]}function ou(n,e){return Math.abs(e[1])-Math.abs(n[1])}function lu(n,e,t){const s={},a=new Float32Array(8),i=new WeakMap,o=new Ze,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function l(c,d,f){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=p!==void 0?p.length:0;let g=i.get(d);if(g===void 0||g.count!==_){let U=function(){X.dispose(),i.delete(d),d.removeEventListener("dispose",U)};var m=U;g!==void 0&&g.texture.dispose();const b=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,z=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],W=d.morphAttributes.color||[];let R=0;b===!0&&(R=1),E===!0&&(R=2),C===!0&&(R=3);let y=d.attributes.position.count*R,H=1;y>e.maxTextureSize&&(H=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const D=new Float32Array(y*H*4*_),X=new Ar(D,y,H,_);X.type=ns,X.needsUpdate=!0;const k=R*4;for(let G=0;G<_;G++){const Y=z[G],q=T[G],j=W[G],$=y*H*4*G;for(let ae=0;ae<Y.count;ae++){const ie=ae*k;b===!0&&(o.fromBufferAttribute(Y,ae),D[$+ie+0]=o.x,D[$+ie+1]=o.y,D[$+ie+2]=o.z,D[$+ie+3]=0),E===!0&&(o.fromBufferAttribute(q,ae),D[$+ie+4]=o.x,D[$+ie+5]=o.y,D[$+ie+6]=o.z,D[$+ie+7]=0),C===!0&&(o.fromBufferAttribute(j,ae),D[$+ie+8]=o.x,D[$+ie+9]=o.y,D[$+ie+10]=o.z,D[$+ie+11]=j.itemSize===4?o.w:1)}}g={count:_,texture:X,size:new ke(y,H)},i.set(d,g),d.addEventListener("dispose",U)}let h=0;for(let b=0;b<u.length;b++)h+=u[b];const S=d.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",u),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const p=u===void 0?0:u.length;let _=s[d.id];if(_===void 0||_.length!==p){_=[];for(let E=0;E<p;E++)_[E]=[E,0];s[d.id]=_}for(let E=0;E<p;E++){const C=_[E];C[0]=E,C[1]=u[E]}_.sort(ou);for(let E=0;E<8;E++)E<p&&_[E][1]?(r[E][0]=_[E][0],r[E][1]=_[E][1]):(r[E][0]=Number.MAX_SAFE_INTEGER,r[E][1]=0);r.sort(ru);const g=d.morphAttributes.position,h=d.morphAttributes.normal;let S=0;for(let E=0;E<8;E++){const C=r[E],z=C[0],T=C[1];z!==Number.MAX_SAFE_INTEGER&&T?(g&&d.getAttribute("morphTarget"+E)!==g[z]&&d.setAttribute("morphTarget"+E,g[z]),h&&d.getAttribute("morphNormal"+E)!==h[z]&&d.setAttribute("morphNormal"+E,h[z]),a[E]=T,S+=T):(g&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),h&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),a[E]=0)}const b=d.morphTargetsRelative?1:1-S;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:l}}function cu(n,e,t,s){let a=new WeakMap;function i(l){const c=s.render.frame,d=l.geometry,f=e.get(l,d);if(a.get(f)!==c&&(e.update(f),a.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),a.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;a.get(u)!==c&&(u.update(),a.set(u,c))}return f}function o(){a=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:o}}class Ur extends wt{constructor(e,t,s,a,i,o,r,l,c,d){if(d=d!==void 0?d:vs,d!==vs&&d!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&d===vs&&(s=ss),s===void 0&&d===Bs&&(s=_s),super(null,a,i,o,r,l,d,s,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const tc=new wt,sc=new Ur(1,1);sc.compareFunction=yr;const nc=new Ar,ac=new jl,ic=new Pr,mo=[],po=[],_o=new Float32Array(16),vo=new Float32Array(9),xo=new Float32Array(4);function vn(n,e,t){const s=n[0];if(s<=0||s>0)return n;const a=e*t;let i=mo[a];if(i===void 0&&(i=new Float32Array(a),mo[a]=i),e!==0){s.toArray(i,0);for(let o=1,r=0;o!==e;++o)r+=t,n[o].toArray(i,r)}return i}function ct(n,e){if(n.length!==e.length)return!1;for(let t=0,s=n.length;t<s;t++)if(n[t]!==e[t])return!1;return!0}function dt(n,e){for(let t=0,s=e.length;t<s;t++)n[t]=e[t]}function Ha(n,e){let t=po[e];t===void 0&&(t=new Int32Array(e),po[e]=t);for(let s=0;s!==e;++s)t[s]=n.allocateTextureUnit();return t}function du(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2fv(this.addr,e),dt(t,e)}}function fu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;n.uniform3fv(this.addr,e),dt(t,e)}}function uu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4fv(this.addr,e),dt(t,e)}}function gu(n,e){const t=this.cache,s=e.elements;if(s===void 0){if(ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ct(t,s))return;xo.set(s),n.uniformMatrix2fv(this.addr,!1,xo),dt(t,s)}}function mu(n,e){const t=this.cache,s=e.elements;if(s===void 0){if(ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ct(t,s))return;vo.set(s),n.uniformMatrix3fv(this.addr,!1,vo),dt(t,s)}}function pu(n,e){const t=this.cache,s=e.elements;if(s===void 0){if(ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ct(t,s))return;_o.set(s),n.uniformMatrix4fv(this.addr,!1,_o),dt(t,s)}}function _u(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2iv(this.addr,e),dt(t,e)}}function xu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3iv(this.addr,e),dt(t,e)}}function bu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4iv(this.addr,e),dt(t,e)}}function Ru(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2uiv(this.addr,e),dt(t,e)}}function Su(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3uiv(this.addr,e),dt(t,e)}}function yu(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4uiv(this.addr,e),dt(t,e)}}function Mu(n,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(n.uniform1i(this.addr,a),s[0]=a);const i=this.type===n.SAMPLER_2D_SHADOW?sc:tc;t.setTexture2D(e||i,a)}function Eu(n,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(n.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||ac,a)}function Tu(n,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(n.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||ic,a)}function Au(n,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(n.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||nc,a)}function zu(n){switch(n){case 5126:return du;case 35664:return hu;case 35665:return fu;case 35666:return uu;case 35674:return gu;case 35675:return mu;case 35676:return pu;case 5124:case 35670:return _u;case 35667:case 35671:return vu;case 35668:case 35672:return xu;case 35669:case 35673:return bu;case 5125:return Ru;case 36294:return wu;case 36295:return Su;case 36296:return yu;case 35678:case 36198:case 36298:case 36306:case 35682:return Mu;case 35679:case 36299:case 36307:return Eu;case 35680:case 36300:case 36308:case 36293:return Tu;case 36289:case 36303:case 36311:case 36292:return Au}}function ku(n,e){n.uniform1fv(this.addr,e)}function Lu(n,e){const t=vn(e,this.size,2);n.uniform2fv(this.addr,t)}function Cu(n,e){const t=vn(e,this.size,3);n.uniform3fv(this.addr,t)}function Pu(n,e){const t=vn(e,this.size,4);n.uniform4fv(this.addr,t)}function Du(n,e){const t=vn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Uu(n,e){const t=vn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fu(n,e){const t=vn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Iu(n,e){n.uniform1iv(this.addr,e)}function Nu(n,e){n.uniform2iv(this.addr,e)}function Ou(n,e){n.uniform3iv(this.addr,e)}function Bu(n,e){n.uniform4iv(this.addr,e)}function Hu(n,e){n.uniform1uiv(this.addr,e)}function Gu(n,e){n.uniform2uiv(this.addr,e)}function Vu(n,e){n.uniform3uiv(this.addr,e)}function Wu(n,e){n.uniform4uiv(this.addr,e)}function Xu(n,e,t){const s=this.cache,a=e.length,i=Ha(t,a);ct(s,i)||(n.uniform1iv(this.addr,i),dt(s,i));for(let o=0;o!==a;++o)t.setTexture2D(e[o]||tc,i[o])}function qu(n,e,t){const s=this.cache,a=e.length,i=Ha(t,a);ct(s,i)||(n.uniform1iv(this.addr,i),dt(s,i));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||ac,i[o])}function Yu(n,e,t){const s=this.cache,a=e.length,i=Ha(t,a);ct(s,i)||(n.uniform1iv(this.addr,i),dt(s,i));for(let o=0;o!==a;++o)t.setTextureCube(e[o]||ic,i[o])}function ju(n,e,t){const s=this.cache,a=e.length,i=Ha(t,a);ct(s,i)||(n.uniform1iv(this.addr,i),dt(s,i));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||nc,i[o])}function $u(n){switch(n){case 5126:return ku;case 35664:return Lu;case 35665:return Cu;case 35666:return Pu;case 35674:return Du;case 35675:return Uu;case 35676:return Fu;case 5124:case 35670:return Iu;case 35667:case 35671:return Nu;case 35668:case 35672:return Ou;case 35669:case 35673:return Bu;case 5125:return Hu;case 36294:return Gu;case 36295:return Vu;case 36296:return Wu;case 35678:case 36198:case 36298:case 36306:case 35682:return Xu;case 35679:case 36299:case 36307:return qu;case 35680:case 36300:case 36308:case 36293:return Yu;case 36289:case 36303:case 36311:case 36292:return ju}}class Ku{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=zu(t.type)}}class Zu{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$u(t.type)}}class Ju{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let i=0,o=a.length;i!==o;++i){const r=a[i];r.setValue(e,t[r.id],s)}}}const pi=/(\w+)(\])?(\[|\.)?/g;function bo(n,e){n.seq.push(e),n.map[e.id]=e}function Qu(n,e,t){const s=n.name,a=s.length;for(pi.lastIndex=0;;){const i=pi.exec(s),o=pi.lastIndex;let r=i[1];const l=i[2]==="]",c=i[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===a){bo(t,c===void 0?new Ku(r,n,e):new Zu(r,n,e));break}else{let f=t.map[r];f===void 0&&(f=new Ju(r),bo(t,f)),t=f}}}class Ea{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const i=e.getActiveUniform(t,a),o=e.getUniformLocation(t,i.name);Qu(i,o,this)}}setValue(e,t,s,a){const i=this.map[t];i!==void 0&&i.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let i=0,o=t.length;i!==o;++i){const r=t[i],l=s[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,i=e.length;a!==i;++a){const o=e[a];o.id in t&&s.push(o)}return s}}function Ro(n,e,t){const s=n.createShader(e);return n.shaderSource(s,t),n.compileShader(s),s}const eg=37297;let tg=0;function sg(n,e){const t=n.split(`
`),s=[],a=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let o=a;o<i;o++){const r=o+1;s.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return s.join(`
`)}function ng(n){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(n);let s;switch(e===t?s="":e===Cn&&t===Ln?s="LinearDisplayP3ToLinearSRGB":e===Ln&&t===Cn&&(s="LinearSRGBToLinearDisplayP3"),n){case jt:case Nn:return[s,"LinearTransferOETF"];case at:case Ia:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[s,"LinearTransferOETF"]}}function wo(n,e,t){const s=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(s&&a==="")return"";const i=/ERROR: 0:(\d+)/.exec(a);if(i){const o=parseInt(i[1]);return t.toUpperCase()+`

`+a+`

`+sg(n.getShaderSource(e),o)}else return a}function ag(n,e){const t=ng(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ig(n,e){let t;switch(e){case bl:t="Linear";break;case Rl:t="Reinhard";break;case wl:t="OptimizedCineon";break;case Sl:t="ACESFilmic";break;case Ml:t="AgX";break;case yl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rg(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ln).join(`
`)}function og(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ln).join(`
`)}function lg(n){const e=[];for(const t in n){const s=n[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function cg(n,e){const t={},s=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const i=n.getActiveAttrib(e,a),o=i.name;let r=1;i.type===n.FLOAT_MAT2&&(r=2),i.type===n.FLOAT_MAT3&&(r=3),i.type===n.FLOAT_MAT4&&(r=4),t[o]={type:i.type,location:n.getAttribLocation(e,o),locationSize:r}}return t}function ln(n){return n!==""}function So(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function lr(n){return n.replace(dg,fg)}const hg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fg(n,e){let t=Ne[e];if(t===void 0){const s=hg.get(e);if(s!==void 0)t=Ne[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return lr(t)}const ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mo(n){return n.replace(ug,gg)}function gg(n,e,t,s){let a="";for(let i=parseInt(e);i<parseInt(t);i++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return a}function Eo(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fr?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ur?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wt&&(e="SHADOWMAP_TYPE_VSM"),e}function pg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ns:case Os:e="ENVMAP_TYPE_CUBE";break;case In:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _g(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function vg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ua:e="ENVMAP_BLENDING_MULTIPLY";break;case vl:e="ENVMAP_BLENDING_MIX";break;case xl:e="ENVMAP_BLENDING_ADD";break}return e}function xg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function bg(n,e,t,s){const a=n.getContext(),i=t.defines;let o=t.vertexShader,r=t.fragmentShader;const l=mg(t),c=pg(t),d=_g(t),f=vg(t),u=xg(t),m=t.isWebGL2?"":rg(t),p=og(t),_=lg(i),g=a.createProgram();let h,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ln).join(`
`),h.length>0&&(h+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ln).join(`
`),S.length>0&&(S+=`
`)):(h=[Eo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ln).join(`
`),S=[m,Eo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?Ne.tonemapping_pars_fragment:"",t.toneMapping!==is?ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,ag("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ln).join(`
`)),o=lr(o),o=So(o,t),o=yo(o,t),r=lr(r),r=So(r,t),r=yo(r,t),o=Mo(o),r=Mo(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,h=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ir?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ir?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const E=b+h+o,C=b+S+r,z=Ro(a,a.VERTEX_SHADER,E),T=Ro(a,a.FRAGMENT_SHADER,C);a.attachShader(g,z),a.attachShader(g,T),t.index0AttributeName!==void 0?a.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function W(D){if(n.debug.checkShaderErrors){const X=a.getProgramInfoLog(g).trim(),k=a.getShaderInfoLog(z).trim(),U=a.getShaderInfoLog(T).trim();let G=!0,Y=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,g,z,T);else{const q=wo(a,z,"vertex"),j=wo(a,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+q+`
`+j)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(k===""||U==="")&&(Y=!1);Y&&(D.diagnostics={runnable:G,programLog:X,vertexShader:{log:k,prefix:h},fragmentShader:{log:U,prefix:S}})}a.deleteShader(z),a.deleteShader(T),R=new Ea(a,g),y=cg(a,g)}let R;this.getUniforms=function(){return R===void 0&&W(this),R};let y;this.getAttributes=function(){return y===void 0&&W(this),y};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=a.getProgramParameter(g,eg)),H},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=z,this.fragmentShader=T,this}let Rg=0;class wg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),i=this._getShaderStage(s),o=this._getShaderCacheForMaterial(e);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new Sg(e),t.set(e,s)),s}}class Sg{constructor(e){this.id=Rg++,this.code=e,this.usedTimes=0}}function yg(n,e,t,s,a,i,o){const r=new zr,l=new wg,c=[],d=a.isWebGL2,f=a.logarithmicDepthBuffer,u=a.vertexTextures;let m=a.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(R){return R===0?"uv":`uv${R}`}function g(R,y,H,D,X){const k=D.fog,U=X.geometry,G=R.isMeshStandardMaterial?D.environment:null,Y=(R.isMeshStandardMaterial?t:e).get(R.envMap||G),q=Y&&Y.mapping===In?Y.image.height:null,j=p[R.type];R.precision!==null&&(m=a.getMaxPrecision(R.precision),m!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",m,"instead."));const $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ae=$!==void 0?$.length:0;let ie=0;U.morphAttributes.position!==void 0&&(ie=1),U.morphAttributes.normal!==void 0&&(ie=2),U.morphAttributes.color!==void 0&&(ie=3);let V,K,ce,ve;if(j){const st=Ot[j];V=st.vertexShader,K=st.fragmentShader}else V=R.vertexShader,K=R.fragmentShader,l.update(R),ce=l.getVertexShaderID(R),ve=l.getFragmentShaderID(R);const pe=n.getRenderTarget(),Le=X.isInstancedMesh===!0,Ce=X.isBatchedMesh===!0,ye=!!R.map,Ve=!!R.matcap,I=!!Y,ut=!!R.aoMap,Re=!!R.lightMap,Te=!!R.bumpMap,ge=!!R.normalMap,Ke=!!R.displacementMap,Ue=!!R.emissiveMap,w=!!R.metalnessMap,v=!!R.roughnessMap,F=R.anisotropy>0,ee=R.clearcoat>0,J=R.iridescence>0,te=R.sheen>0,me=R.transmission>0,le=F&&!!R.anisotropyMap,ue=ee&&!!R.clearcoatMap,Se=ee&&!!R.clearcoatNormalMap,Fe=ee&&!!R.clearcoatRoughnessMap,Z=J&&!!R.iridescenceMap,Ye=J&&!!R.iridescenceThicknessMap,Oe=te&&!!R.sheenColorMap,Ae=te&&!!R.sheenRoughnessMap,be=!!R.specularMap,de=!!R.specularColorMap,M=!!R.specularIntensityMap,se=me&&!!R.transmissionMap,_e=me&&!!R.thicknessMap,fe=!!R.gradientMap,Q=!!R.alphaMap,A=R.alphaTest>0,ne=!!R.alphaHash,oe=!!R.extensions,Me=!!U.attributes.uv1,we=!!U.attributes.uv2,We=!!U.attributes.uv3;let Xe=is;return R.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Xe=n.toneMapping),{isWebGL2:d,shaderID:j,shaderType:R.type,shaderName:R.name,vertexShader:V,fragmentShader:K,defines:R.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:m,batching:Ce,instancing:Le,instancingColor:Le&&X.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:jt,map:ye,matcap:Ve,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:q,aoMap:ut,lightMap:Re,bumpMap:Te,normalMap:ge,displacementMap:u&&Ke,emissiveMap:Ue,normalMapObjectSpace:ge&&R.normalMapType===Il,normalMapTangentSpace:ge&&R.normalMapType===Sr,metalnessMap:w,roughnessMap:v,anisotropy:F,anisotropyMap:le,clearcoat:ee,clearcoatMap:ue,clearcoatNormalMap:Se,clearcoatRoughnessMap:Fe,iridescence:J,iridescenceMap:Z,iridescenceThicknessMap:Ye,sheen:te,sheenColorMap:Oe,sheenRoughnessMap:Ae,specularMap:be,specularColorMap:de,specularIntensityMap:M,transmission:me,transmissionMap:se,thicknessMap:_e,gradientMap:fe,opaque:R.transparent===!1&&R.blending===Is,alphaMap:Q,alphaTest:A,alphaHash:ne,combine:R.combine,mapUv:ye&&_(R.map.channel),aoMapUv:ut&&_(R.aoMap.channel),lightMapUv:Re&&_(R.lightMap.channel),bumpMapUv:Te&&_(R.bumpMap.channel),normalMapUv:ge&&_(R.normalMap.channel),displacementMapUv:Ke&&_(R.displacementMap.channel),emissiveMapUv:Ue&&_(R.emissiveMap.channel),metalnessMapUv:w&&_(R.metalnessMap.channel),roughnessMapUv:v&&_(R.roughnessMap.channel),anisotropyMapUv:le&&_(R.anisotropyMap.channel),clearcoatMapUv:ue&&_(R.clearcoatMap.channel),clearcoatNormalMapUv:Se&&_(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&_(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&_(R.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(R.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(R.sheenRoughnessMap.channel),specularMapUv:be&&_(R.specularMap.channel),specularColorMapUv:de&&_(R.specularColorMap.channel),specularIntensityMapUv:M&&_(R.specularIntensityMap.channel),transmissionMapUv:se&&_(R.transmissionMap.channel),thicknessMapUv:_e&&_(R.thicknessMap.channel),alphaMapUv:Q&&_(R.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ge||F),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Me,vertexUv2s:we,vertexUv3s:We,pointsUvs:X.isPoints===!0&&!!U.attributes.uv&&(ye||Q),fog:!!k,useFog:R.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ie,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ye&&R.map.isVideoTexture===!0&&je.getTransfer(R.map.colorSpace)===$e,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Bt,flipSided:R.side===Rt,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:oe&&R.extensions.derivatives===!0,extensionFragDepth:oe&&R.extensions.fragDepth===!0,extensionDrawBuffers:oe&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&R.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function h(R){const y=[];if(R.shaderID?y.push(R.shaderID):(y.push(R.customVertexShaderID),y.push(R.customFragmentShaderID)),R.defines!==void 0)for(const H in R.defines)y.push(H),y.push(R.defines[H]);return R.isRawShaderMaterial===!1&&(S(y,R),b(y,R),y.push(n.outputColorSpace)),y.push(R.customProgramCacheKey),y.join()}function S(R,y){R.push(y.precision),R.push(y.outputColorSpace),R.push(y.envMapMode),R.push(y.envMapCubeUVHeight),R.push(y.mapUv),R.push(y.alphaMapUv),R.push(y.lightMapUv),R.push(y.aoMapUv),R.push(y.bumpMapUv),R.push(y.normalMapUv),R.push(y.displacementMapUv),R.push(y.emissiveMapUv),R.push(y.metalnessMapUv),R.push(y.roughnessMapUv),R.push(y.anisotropyMapUv),R.push(y.clearcoatMapUv),R.push(y.clearcoatNormalMapUv),R.push(y.clearcoatRoughnessMapUv),R.push(y.iridescenceMapUv),R.push(y.iridescenceThicknessMapUv),R.push(y.sheenColorMapUv),R.push(y.sheenRoughnessMapUv),R.push(y.specularMapUv),R.push(y.specularColorMapUv),R.push(y.specularIntensityMapUv),R.push(y.transmissionMapUv),R.push(y.thicknessMapUv),R.push(y.combine),R.push(y.fogExp2),R.push(y.sizeAttenuation),R.push(y.morphTargetsCount),R.push(y.morphAttributeCount),R.push(y.numDirLights),R.push(y.numPointLights),R.push(y.numSpotLights),R.push(y.numSpotLightMaps),R.push(y.numHemiLights),R.push(y.numRectAreaLights),R.push(y.numDirLightShadows),R.push(y.numPointLightShadows),R.push(y.numSpotLightShadows),R.push(y.numSpotLightShadowsWithMaps),R.push(y.numLightProbes),R.push(y.shadowMapType),R.push(y.toneMapping),R.push(y.numClippingPlanes),R.push(y.numClipIntersection),R.push(y.depthPacking)}function b(R,y){r.disableAll(),y.isWebGL2&&r.enable(0),y.supportsVertexTextures&&r.enable(1),y.instancing&&r.enable(2),y.instancingColor&&r.enable(3),y.matcap&&r.enable(4),y.envMap&&r.enable(5),y.normalMapObjectSpace&&r.enable(6),y.normalMapTangentSpace&&r.enable(7),y.clearcoat&&r.enable(8),y.iridescence&&r.enable(9),y.alphaTest&&r.enable(10),y.vertexColors&&r.enable(11),y.vertexAlphas&&r.enable(12),y.vertexUv1s&&r.enable(13),y.vertexUv2s&&r.enable(14),y.vertexUv3s&&r.enable(15),y.vertexTangents&&r.enable(16),y.anisotropy&&r.enable(17),y.alphaHash&&r.enable(18),y.batching&&r.enable(19),R.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.skinning&&r.enable(4),y.morphTargets&&r.enable(5),y.morphNormals&&r.enable(6),y.morphColors&&r.enable(7),y.premultipliedAlpha&&r.enable(8),y.shadowMapEnabled&&r.enable(9),y.useLegacyLights&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),R.push(r.mask)}function E(R){const y=p[R.type];let H;if(y){const D=Ot[y];H=Zl.clone(D.uniforms)}else H=R.uniforms;return H}function C(R,y){let H;for(let D=0,X=c.length;D<X;D++){const k=c[D];if(k.cacheKey===y){H=k,++H.usedTimes;break}}return H===void 0&&(H=new bg(n,y,R,i),c.push(H)),H}function z(R){if(--R.usedTimes===0){const y=c.indexOf(R);c[y]=c[c.length-1],c.pop(),R.destroy()}}function T(R){l.remove(R)}function W(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:E,acquireProgram:C,releaseProgram:z,releaseShaderCache:T,programs:c,dispose:W}}function Mg(){let n=new WeakMap;function e(i){let o=n.get(i);return o===void 0&&(o={},n.set(i,o)),o}function t(i){n.delete(i)}function s(i,o,r){n.get(i)[o]=r}function a(){n=new WeakMap}return{get:e,remove:t,update:s,dispose:a}}function Eg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function To(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ao(){const n=[];let e=0;const t=[],s=[],a=[];function i(){e=0,t.length=0,s.length=0,a.length=0}function o(f,u,m,p,_,g){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:u,material:m,groupOrder:p,renderOrder:f.renderOrder,z:_,group:g},n[e]=h):(h.id=f.id,h.object=f,h.geometry=u,h.material=m,h.groupOrder=p,h.renderOrder=f.renderOrder,h.z=_,h.group=g),e++,h}function r(f,u,m,p,_,g){const h=o(f,u,m,p,_,g);m.transmission>0?s.push(h):m.transparent===!0?a.push(h):t.push(h)}function l(f,u,m,p,_,g){const h=o(f,u,m,p,_,g);m.transmission>0?s.unshift(h):m.transparent===!0?a.unshift(h):t.unshift(h)}function c(f,u){t.length>1&&t.sort(f||Eg),s.length>1&&s.sort(u||To),a.length>1&&a.sort(u||To)}function d(){for(let f=e,u=n.length;f<u;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:s,transparent:a,init:i,push:r,unshift:l,finish:d,sort:c}}function Tg(){let n=new WeakMap;function e(s,a){const i=n.get(s);let o;return i===void 0?(o=new Ao,n.set(s,[o])):a>=i.length?(o=new Ao,i.push(o)):o=i[a],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ag(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Pe};break;case"SpotLight":t={position:new L,direction:new L,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function zg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let kg=0;function Lg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Cg(n,e){const t=new Ag,s=zg(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new L);const i=new L,o=new tt,r=new tt;function l(d,f){let u=0,m=0,p=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let _=0,g=0,h=0,S=0,b=0,E=0,C=0,z=0,T=0,W=0,R=0;d.sort(Lg);const y=f===!0?Math.PI:1;for(let D=0,X=d.length;D<X;D++){const k=d[D],U=k.color,G=k.intensity,Y=k.distance,q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)u+=U.r*G*y,m+=U.g*G*y,p+=U.b*G*y;else if(k.isLightProbe){for(let j=0;j<9;j++)a.probe[j].addScaledVector(k.sh.coefficients[j],G);R++}else if(k.isDirectionalLight){const j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity*y),k.castShadow){const $=k.shadow,ae=s.get(k);ae.shadowBias=$.bias,ae.shadowNormalBias=$.normalBias,ae.shadowRadius=$.radius,ae.shadowMapSize=$.mapSize,a.directionalShadow[_]=ae,a.directionalShadowMap[_]=q,a.directionalShadowMatrix[_]=k.shadow.matrix,E++}a.directional[_]=j,_++}else if(k.isSpotLight){const j=t.get(k);j.position.setFromMatrixPosition(k.matrixWorld),j.color.copy(U).multiplyScalar(G*y),j.distance=Y,j.coneCos=Math.cos(k.angle),j.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),j.decay=k.decay,a.spot[h]=j;const $=k.shadow;if(k.map&&(a.spotLightMap[T]=k.map,T++,$.updateMatrices(k),k.castShadow&&W++),a.spotLightMatrix[h]=$.matrix,k.castShadow){const ae=s.get(k);ae.shadowBias=$.bias,ae.shadowNormalBias=$.normalBias,ae.shadowRadius=$.radius,ae.shadowMapSize=$.mapSize,a.spotShadow[h]=ae,a.spotShadowMap[h]=q,z++}h++}else if(k.isRectAreaLight){const j=t.get(k);j.color.copy(U).multiplyScalar(G),j.halfWidth.set(k.width*.5,0,0),j.halfHeight.set(0,k.height*.5,0),a.rectArea[S]=j,S++}else if(k.isPointLight){const j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity*y),j.distance=k.distance,j.decay=k.decay,k.castShadow){const $=k.shadow,ae=s.get(k);ae.shadowBias=$.bias,ae.shadowNormalBias=$.normalBias,ae.shadowRadius=$.radius,ae.shadowMapSize=$.mapSize,ae.shadowCameraNear=$.camera.near,ae.shadowCameraFar=$.camera.far,a.pointShadow[g]=ae,a.pointShadowMap[g]=q,a.pointShadowMatrix[g]=k.shadow.matrix,C++}a.point[g]=j,g++}else if(k.isHemisphereLight){const j=t.get(k);j.skyColor.copy(k.color).multiplyScalar(G*y),j.groundColor.copy(k.groundColor).multiplyScalar(G*y),a.hemi[b]=j,b++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=re.LTC_FLOAT_1,a.rectAreaLTC2=re.LTC_FLOAT_2):(a.rectAreaLTC1=re.LTC_HALF_1,a.rectAreaLTC2=re.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=re.LTC_FLOAT_1,a.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=re.LTC_HALF_1,a.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=u,a.ambient[1]=m,a.ambient[2]=p;const H=a.hash;(H.directionalLength!==_||H.pointLength!==g||H.spotLength!==h||H.rectAreaLength!==S||H.hemiLength!==b||H.numDirectionalShadows!==E||H.numPointShadows!==C||H.numSpotShadows!==z||H.numSpotMaps!==T||H.numLightProbes!==R)&&(a.directional.length=_,a.spot.length=h,a.rectArea.length=S,a.point.length=g,a.hemi.length=b,a.directionalShadow.length=E,a.directionalShadowMap.length=E,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=z,a.spotShadowMap.length=z,a.directionalShadowMatrix.length=E,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=z+T-W,a.spotLightMap.length=T,a.numSpotLightShadowsWithMaps=W,a.numLightProbes=R,H.directionalLength=_,H.pointLength=g,H.spotLength=h,H.rectAreaLength=S,H.hemiLength=b,H.numDirectionalShadows=E,H.numPointShadows=C,H.numSpotShadows=z,H.numSpotMaps=T,H.numLightProbes=R,a.version=kg++)}function c(d,f){let u=0,m=0,p=0,_=0,g=0;const h=f.matrixWorldInverse;for(let S=0,b=d.length;S<b;S++){const E=d[S];if(E.isDirectionalLight){const C=a.directional[u];C.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(h),u++}else if(E.isSpotLight){const C=a.spot[p];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(h),C.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(h),p++}else if(E.isRectAreaLight){const C=a.rectArea[_];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(h),r.identity(),o.copy(E.matrixWorld),o.premultiply(h),r.extractRotation(o),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(r),C.halfHeight.applyMatrix4(r),_++}else if(E.isPointLight){const C=a.point[m];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(h),m++}else if(E.isHemisphereLight){const C=a.hemi[g];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(h),g++}}}return{setup:l,setupView:c,state:a}}function zo(n,e){const t=new Cg(n,e),s=[],a=[];function i(){s.length=0,a.length=0}function o(f){s.push(f)}function r(f){a.push(f)}function l(f){t.setup(s,f)}function c(f){t.setupView(s,f)}return{init:i,state:{lightsArray:s,shadowsArray:a,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:r}}function Pg(n,e){let t=new WeakMap;function s(i,o=0){const r=t.get(i);let l;return r===void 0?(l=new zo(n,e),t.set(i,[l])):o>=r.length?(l=new zo(n,e),r.push(l)):l=r[o],l}function a(){t=new WeakMap}return{get:s,dispose:a}}class rc extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ul,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oc extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ug=`uniform sampler2D shadow_pass;
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
}`;function Fg(n,e,t){let s=new Oa;const a=new ke,i=new ke,o=new Ze,r=new rc({depthPacking:Fl}),l=new oc,c={},d=t.maxTextureSize,f={[os]:Rt,[Rt]:os,[Bt]:Bt},u=new ys({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Dg,fragmentShader:Ug}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const p=new Gt;p.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ot(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fr;let h=this.type;this.render=function(z,T,W){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||z.length===0)return;const R=n.getRenderTarget(),y=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),D=n.state;D.setBlending(as),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const X=h!==Wt&&this.type===Wt,k=h===Wt&&this.type!==Wt;for(let U=0,G=z.length;U<G;U++){const Y=z[U],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);const j=q.getFrameExtents();if(a.multiply(j),i.copy(q.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(i.x=Math.floor(d/j.x),a.x=i.x*j.x,q.mapSize.x=i.x),a.y>d&&(i.y=Math.floor(d/j.y),a.y=i.y*j.y,q.mapSize.y=i.y)),q.map===null||X===!0||k===!0){const ae=this.type!==Wt?{minFilter:_t,magFilter:_t}:{};q.map!==null&&q.map.dispose(),q.map=new ws(a.x,a.y,ae),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const $=q.getViewportCount();for(let ae=0;ae<$;ae++){const ie=q.getViewport(ae);o.set(i.x*ie.x,i.y*ie.y,i.x*ie.z,i.y*ie.w),D.viewport(o),q.updateMatrices(Y,ae),s=q.getFrustum(),E(T,W,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===Wt&&S(q,W),q.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(R,y,H)};function S(z,T){const W=e.update(_);u.defines.VSM_SAMPLES!==z.blurSamples&&(u.defines.VSM_SAMPLES=z.blurSamples,m.defines.VSM_SAMPLES=z.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ws(a.x,a.y)),u.uniforms.shadow_pass.value=z.map.texture,u.uniforms.resolution.value=z.mapSize,u.uniforms.radius.value=z.radius,n.setRenderTarget(z.mapPass),n.clear(),n.renderBufferDirect(T,null,W,u,_,null),m.uniforms.shadow_pass.value=z.mapPass.texture,m.uniforms.resolution.value=z.mapSize,m.uniforms.radius.value=z.radius,n.setRenderTarget(z.map),n.clear(),n.renderBufferDirect(T,null,W,m,_,null)}function b(z,T,W,R){let y=null;const H=W.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)y=H;else if(y=W.isPointLight===!0?l:r,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=y.uuid,X=T.uuid;let k=c[D];k===void 0&&(k={},c[D]=k);let U=k[X];U===void 0&&(U=y.clone(),k[X]=U,T.addEventListener("dispose",C)),y=U}if(y.visible=T.visible,y.wireframe=T.wireframe,R===Wt?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,W.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=n.properties.get(y);D.light=W}return y}function E(z,T,W,R,y){if(z.visible===!1)return;if(z.layers.test(T.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&y===Wt)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,z.matrixWorld);const X=e.update(z),k=z.material;if(Array.isArray(k)){const U=X.groups;for(let G=0,Y=U.length;G<Y;G++){const q=U[G],j=k[q.materialIndex];if(j&&j.visible){const $=b(z,j,R,y);z.onBeforeShadow(n,z,T,W,X,$,q),n.renderBufferDirect(W,null,X,$,z,q),z.onAfterShadow(n,z,T,W,X,$,q)}}}else if(k.visible){const U=b(z,k,R,y);z.onBeforeShadow(n,z,T,W,X,U,null),n.renderBufferDirect(W,null,X,U,z,null),z.onAfterShadow(n,z,T,W,X,U,null)}}const D=z.children;for(let X=0,k=D.length;X<k;X++)E(D[X],T,W,R,y)}function C(z){z.target.removeEventListener("dispose",C);for(const W in c){const R=c[W],y=z.target.uuid;y in R&&(R[y].dispose(),delete R[y])}}}function Ig(n,e,t){const s=t.isWebGL2;function a(){let A=!1;const ne=new Ze;let oe=null;const Me=new Ze(0,0,0,0);return{setMask:function(we){oe!==we&&!A&&(n.colorMask(we,we,we,we),oe=we)},setLocked:function(we){A=we},setClear:function(we,We,Xe,Qe,st){st===!0&&(we*=Qe,We*=Qe,Xe*=Qe),ne.set(we,We,Xe,Qe),Me.equals(ne)===!1&&(n.clearColor(we,We,Xe,Qe),Me.copy(ne))},reset:function(){A=!1,oe=null,Me.set(-1,0,0,0)}}}function i(){let A=!1,ne=null,oe=null,Me=null;return{setTest:function(we){we?Ce(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(we){ne!==we&&!A&&(n.depthMask(we),ne=we)},setFunc:function(we){if(oe!==we){switch(we){case hl:n.depthFunc(n.NEVER);break;case fl:n.depthFunc(n.ALWAYS);break;case ul:n.depthFunc(n.LESS);break;case zn:n.depthFunc(n.LEQUAL);break;case gl:n.depthFunc(n.EQUAL);break;case ml:n.depthFunc(n.GEQUAL);break;case pl:n.depthFunc(n.GREATER);break;case _l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=we}},setLocked:function(we){A=we},setClear:function(we){Me!==we&&(n.clearDepth(we),Me=we)},reset:function(){A=!1,ne=null,oe=null,Me=null}}}function o(){let A=!1,ne=null,oe=null,Me=null,we=null,We=null,Xe=null,Qe=null,st=null;return{setTest:function(qe){A||(qe?Ce(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(qe){ne!==qe&&!A&&(n.stencilMask(qe),ne=qe)},setFunc:function(qe,it,Vt){(oe!==qe||Me!==it||we!==Vt)&&(n.stencilFunc(qe,it,Vt),oe=qe,Me=it,we=Vt)},setOp:function(qe,it,Vt){(We!==qe||Xe!==it||Qe!==Vt)&&(n.stencilOp(qe,it,Vt),We=qe,Xe=it,Qe=Vt)},setLocked:function(qe){A=qe},setClear:function(qe){st!==qe&&(n.clearStencil(qe),st=qe)},reset:function(){A=!1,ne=null,oe=null,Me=null,we=null,We=null,Xe=null,Qe=null,st=null}}}const r=new a,l=new i,c=new o,d=new WeakMap,f=new WeakMap;let u={},m={},p=new WeakMap,_=[],g=null,h=!1,S=null,b=null,E=null,C=null,z=null,T=null,W=null,R=new Pe(0,0,0),y=0,H=!1,D=null,X=null,k=null,U=null,G=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),q=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=j>=2);let ae=null,ie={};const V=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),ce=new Ze().fromArray(V),ve=new Ze().fromArray(K);function pe(A,ne,oe,Me){const we=new Uint8Array(4),We=n.createTexture();n.bindTexture(A,We),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<oe;Xe++)s&&(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)?n.texImage3D(ne,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(ne+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return We}const Le={};Le[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Le[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(n.DEPTH_TEST),l.setFunc(zn),Ue(!1),w(Mi),Ce(n.CULL_FACE),ge(as);function Ce(A){u[A]!==!0&&(n.enable(A),u[A]=!0)}function ye(A){u[A]!==!1&&(n.disable(A),u[A]=!1)}function Ve(A,ne){return m[A]!==ne?(n.bindFramebuffer(A,ne),m[A]=ne,s&&(A===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ne),A===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ne)),!0):!1}function I(A,ne){let oe=_,Me=!1;if(A)if(oe=p.get(ne),oe===void 0&&(oe=[],p.set(ne,oe)),A.isWebGLMultipleRenderTargets){const we=A.texture;if(oe.length!==we.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let We=0,Xe=we.length;We<Xe;We++)oe[We]=n.COLOR_ATTACHMENT0+We;oe.length=we.length,Me=!0}}else oe[0]!==n.COLOR_ATTACHMENT0&&(oe[0]=n.COLOR_ATTACHMENT0,Me=!0);else oe[0]!==n.BACK&&(oe[0]=n.BACK,Me=!0);Me&&(t.isWebGL2?n.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function ut(A){return g!==A?(n.useProgram(A),g=A,!0):!1}const Re={[us]:n.FUNC_ADD,[Ko]:n.FUNC_SUBTRACT,[Zo]:n.FUNC_REVERSE_SUBTRACT};if(s)Re[zi]=n.MIN,Re[ki]=n.MAX;else{const A=e.get("EXT_blend_minmax");A!==null&&(Re[zi]=A.MIN_EXT,Re[ki]=A.MAX_EXT)}const Te={[Jo]:n.ZERO,[Qo]:n.ONE,[el]:n.SRC_COLOR,[Ta]:n.SRC_ALPHA,[rl]:n.SRC_ALPHA_SATURATE,[al]:n.DST_COLOR,[sl]:n.DST_ALPHA,[tl]:n.ONE_MINUS_SRC_COLOR,[Aa]:n.ONE_MINUS_SRC_ALPHA,[il]:n.ONE_MINUS_DST_COLOR,[nl]:n.ONE_MINUS_DST_ALPHA,[ol]:n.CONSTANT_COLOR,[ll]:n.ONE_MINUS_CONSTANT_COLOR,[cl]:n.CONSTANT_ALPHA,[dl]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(A,ne,oe,Me,we,We,Xe,Qe,st,qe){if(A===as){h===!0&&(ye(n.BLEND),h=!1);return}if(h===!1&&(Ce(n.BLEND),h=!0),A!==$o){if(A!==S||qe!==H){if((b!==us||z!==us)&&(n.blendEquation(n.FUNC_ADD),b=us,z=us),qe)switch(A){case Is:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ei:n.blendFunc(n.ONE,n.ONE);break;case Ti:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ai:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ei:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ti:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ai:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}E=null,C=null,T=null,W=null,R.set(0,0,0),y=0,S=A,H=qe}return}we=we||ne,We=We||oe,Xe=Xe||Me,(ne!==b||we!==z)&&(n.blendEquationSeparate(Re[ne],Re[we]),b=ne,z=we),(oe!==E||Me!==C||We!==T||Xe!==W)&&(n.blendFuncSeparate(Te[oe],Te[Me],Te[We],Te[Xe]),E=oe,C=Me,T=We,W=Xe),(Qe.equals(R)===!1||st!==y)&&(n.blendColor(Qe.r,Qe.g,Qe.b,st),R.copy(Qe),y=st),S=A,H=!1}function Ke(A,ne){A.side===Bt?ye(n.CULL_FACE):Ce(n.CULL_FACE);let oe=A.side===Rt;ne&&(oe=!oe),Ue(oe),A.blending===Is&&A.transparent===!1?ge(as):ge(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),r.setMask(A.colorWrite);const Me=A.stencilWrite;c.setTest(Me),Me&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),F(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Ce(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(A){D!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),D=A)}function w(A){A!==Yo?(Ce(n.CULL_FACE),A!==X&&(A===Mi?n.cullFace(n.BACK):A===jo?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),X=A}function v(A){A!==k&&(q&&n.lineWidth(A),k=A)}function F(A,ne,oe){A?(Ce(n.POLYGON_OFFSET_FILL),(U!==ne||G!==oe)&&(n.polygonOffset(ne,oe),U=ne,G=oe)):ye(n.POLYGON_OFFSET_FILL)}function ee(A){A?Ce(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function J(A){A===void 0&&(A=n.TEXTURE0+Y-1),ae!==A&&(n.activeTexture(A),ae=A)}function te(A,ne,oe){oe===void 0&&(ae===null?oe=n.TEXTURE0+Y-1:oe=ae);let Me=ie[oe];Me===void 0&&(Me={type:void 0,texture:void 0},ie[oe]=Me),(Me.type!==A||Me.texture!==ne)&&(ae!==oe&&(n.activeTexture(oe),ae=oe),n.bindTexture(A,ne||Le[A]),Me.type=A,Me.texture=ne)}function me(){const A=ie[ae];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Se(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Fe(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Oe(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ae(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function de(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function M(A){ce.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),ce.copy(A))}function se(A){ve.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),ve.copy(A))}function _e(A,ne){let oe=f.get(ne);oe===void 0&&(oe=new WeakMap,f.set(ne,oe));let Me=oe.get(A);Me===void 0&&(Me=n.getUniformBlockIndex(ne,A.name),oe.set(A,Me))}function fe(A,ne){const Me=f.get(ne).get(A);d.get(ne)!==Me&&(n.uniformBlockBinding(ne,Me,A.__bindingPointIndex),d.set(ne,Me))}function Q(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),s===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ae=null,ie={},m={},p=new WeakMap,_=[],g=null,h=!1,S=null,b=null,E=null,C=null,z=null,T=null,W=null,R=new Pe(0,0,0),y=0,H=!1,D=null,X=null,k=null,U=null,G=null,ce.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:Ce,disable:ye,bindFramebuffer:Ve,drawBuffers:I,useProgram:ut,setBlending:ge,setMaterial:Ke,setFlipSided:Ue,setCullFace:w,setLineWidth:v,setPolygonOffset:F,setScissorTest:ee,activeTexture:J,bindTexture:te,unbindTexture:me,compressedTexImage2D:le,compressedTexImage3D:ue,texImage2D:be,texImage3D:de,updateUBOMapping:_e,uniformBlockBinding:fe,texStorage2D:Oe,texStorage3D:Ae,texSubImage2D:Se,texSubImage3D:Fe,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ye,scissor:M,viewport:se,reset:Q}}function Ng(n,e,t,s,a,i,o){const r=a.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,v){return m?new OffscreenCanvas(w,v):Un("canvas")}function _(w,v,F,ee){let J=1;if((w.width>ee||w.height>ee)&&(J=ee/Math.max(w.width,w.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const te=v?Pa:Math.floor,me=te(J*w.width),le=te(J*w.height);f===void 0&&(f=p(me,le));const ue=F?p(me,le):f;return ue.width=me,ue.height=le,ue.getContext("2d").drawImage(w,0,0,me,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+me+"x"+le+")."),ue}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function g(w){return rr(w.width)&&rr(w.height)}function h(w){return r?!1:w.wrapS!==Dt||w.wrapT!==Dt||w.minFilter!==_t&&w.minFilter!==Tt}function S(w,v){return w.generateMipmaps&&v&&w.minFilter!==_t&&w.minFilter!==Tt}function b(w){n.generateMipmap(w)}function E(w,v,F,ee,J=!1){if(r===!1)return v;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let te=v;if(v===n.RED&&(F===n.FLOAT&&(te=n.R32F),F===n.HALF_FLOAT&&(te=n.R16F),F===n.UNSIGNED_BYTE&&(te=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(te=n.R8UI),F===n.UNSIGNED_SHORT&&(te=n.R16UI),F===n.UNSIGNED_INT&&(te=n.R32UI),F===n.BYTE&&(te=n.R8I),F===n.SHORT&&(te=n.R16I),F===n.INT&&(te=n.R32I)),v===n.RG&&(F===n.FLOAT&&(te=n.RG32F),F===n.HALF_FLOAT&&(te=n.RG16F),F===n.UNSIGNED_BYTE&&(te=n.RG8)),v===n.RGBA){const me=J?kn:je.getTransfer(ee);F===n.FLOAT&&(te=n.RGBA32F),F===n.HALF_FLOAT&&(te=n.RGBA16F),F===n.UNSIGNED_BYTE&&(te=me===$e?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function C(w,v,F){return S(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==_t&&w.minFilter!==Tt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function z(w){return w===_t||w===Li||w===ba?n.NEAREST:n.LINEAR}function T(w){const v=w.target;v.removeEventListener("dispose",T),R(v),v.isVideoTexture&&d.delete(v)}function W(w){const v=w.target;v.removeEventListener("dispose",W),H(v)}function R(w){const v=s.get(w);if(v.__webglInit===void 0)return;const F=w.source,ee=u.get(F);if(ee){const J=ee[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(w),Object.keys(ee).length===0&&u.delete(F)}s.remove(w)}function y(w){const v=s.get(w);n.deleteTexture(v.__webglTexture);const F=w.source,ee=u.get(F);delete ee[v.__cacheKey],o.memory.textures--}function H(w){const v=w.texture,F=s.get(w),ee=s.get(v);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(F.__webglFramebuffer[J]))for(let te=0;te<F.__webglFramebuffer[J].length;te++)n.deleteFramebuffer(F.__webglFramebuffer[J][te]);else n.deleteFramebuffer(F.__webglFramebuffer[J]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[J])}else{if(Array.isArray(F.__webglFramebuffer))for(let J=0;J<F.__webglFramebuffer.length;J++)n.deleteFramebuffer(F.__webglFramebuffer[J]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let J=0;J<F.__webglColorRenderbuffer.length;J++)F.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[J]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let J=0,te=v.length;J<te;J++){const me=s.get(v[J]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),s.remove(v[J])}s.remove(v),s.remove(w)}let D=0;function X(){D=0}function k(){const w=D;return w>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),D+=1,w}function U(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function G(w,v){const F=s.get(w);if(w.isVideoTexture&&Ke(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(F,w,v);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function Y(w,v){const F=s.get(w);if(w.version>0&&F.__version!==w.version){ce(F,w,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function q(w,v){const F=s.get(w);if(w.version>0&&F.__version!==w.version){ce(F,w,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function j(w,v){const F=s.get(w);if(w.version>0&&F.__version!==w.version){ve(F,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const $={[bs]:n.REPEAT,[Dt]:n.CLAMP_TO_EDGE,[La]:n.MIRRORED_REPEAT},ae={[_t]:n.NEAREST,[Li]:n.NEAREST_MIPMAP_NEAREST,[ba]:n.NEAREST_MIPMAP_LINEAR,[Tt]:n.LINEAR,[El]:n.LINEAR_MIPMAP_NEAREST,[fn]:n.LINEAR_MIPMAP_LINEAR},ie={[Nl]:n.NEVER,[Wl]:n.ALWAYS,[Ol]:n.LESS,[yr]:n.LEQUAL,[Bl]:n.EQUAL,[Vl]:n.GEQUAL,[Hl]:n.GREATER,[Gl]:n.NOTEQUAL};function V(w,v,F){if(F?(n.texParameteri(w,n.TEXTURE_WRAP_S,$[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,$[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,$[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ae[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ae[v.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Dt||v.wrapT!==Dt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,z(v.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,z(v.minFilter)),v.minFilter!==_t&&v.minFilter!==Tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===_t||v.minFilter!==ba&&v.minFilter!==fn||v.type===ns&&e.has("OES_texture_float_linear")===!1||r===!1&&v.type===un&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||s.get(v).__currentAnisotropy)&&(n.texParameterf(w,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),s.get(v).__currentAnisotropy=v.anisotropy)}}function K(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",T));const ee=v.source;let J=u.get(ee);J===void 0&&(J={},u.set(ee,J));const te=U(v);if(te!==w.__cacheKey){J[te]===void 0&&(J[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[te].usedTimes++;const me=J[w.__cacheKey];me!==void 0&&(J[w.__cacheKey].usedTimes--,me.usedTimes===0&&y(v)),w.__cacheKey=te,w.__webglTexture=J[te].texture}return F}function ce(w,v,F){let ee=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=n.TEXTURE_3D);const J=K(w,v),te=v.source;t.bindTexture(ee,w.__webglTexture,n.TEXTURE0+F);const me=s.get(te);if(te.version!==me.__version||J===!0){t.activeTexture(n.TEXTURE0+F);const le=je.getPrimaries(je.workingColorSpace),ue=v.colorSpace===kt?null:je.getPrimaries(v.colorSpace),Se=v.colorSpace===kt||le===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Fe=h(v)&&g(v.image)===!1;let Z=_(v.image,Fe,!1,a.maxTextureSize);Z=Ue(v,Z);const Ye=g(Z)||r,Oe=i.convert(v.format,v.colorSpace);let Ae=i.convert(v.type),be=E(v.internalFormat,Oe,Ae,v.colorSpace,v.isVideoTexture);V(ee,v,Ye);let de;const M=v.mipmaps,se=r&&v.isVideoTexture!==!0&&be!==Rr,_e=me.__version===void 0||J===!0,fe=C(v,Z,Ye);if(v.isDepthTexture)be=n.DEPTH_COMPONENT,r?v.type===ns?be=n.DEPTH_COMPONENT32F:v.type===ss?be=n.DEPTH_COMPONENT24:v.type===_s?be=n.DEPTH24_STENCIL8:be=n.DEPTH_COMPONENT16:v.type===ns&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===vs&&be===n.DEPTH_COMPONENT&&v.type!==Fa&&v.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ss,Ae=i.convert(v.type)),v.format===Bs&&be===n.DEPTH_COMPONENT&&(be=n.DEPTH_STENCIL,v.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=_s,Ae=i.convert(v.type))),_e&&(se?t.texStorage2D(n.TEXTURE_2D,1,be,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,be,Z.width,Z.height,0,Oe,Ae,null));else if(v.isDataTexture)if(M.length>0&&Ye){se&&_e&&t.texStorage2D(n.TEXTURE_2D,fe,be,M[0].width,M[0].height);for(let Q=0,A=M.length;Q<A;Q++)de=M[Q],se?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,Oe,Ae,de.data):t.texImage2D(n.TEXTURE_2D,Q,be,de.width,de.height,0,Oe,Ae,de.data);v.generateMipmaps=!1}else se?(_e&&t.texStorage2D(n.TEXTURE_2D,fe,be,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,Oe,Ae,Z.data)):t.texImage2D(n.TEXTURE_2D,0,be,Z.width,Z.height,0,Oe,Ae,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){se&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,be,M[0].width,M[0].height,Z.depth);for(let Q=0,A=M.length;Q<A;Q++)de=M[Q],v.format!==Ut?Oe!==null?se?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,Z.depth,Oe,de.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,be,de.width,de.height,Z.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,Z.depth,Oe,Ae,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,be,de.width,de.height,Z.depth,0,Oe,Ae,de.data)}else{se&&_e&&t.texStorage2D(n.TEXTURE_2D,fe,be,M[0].width,M[0].height);for(let Q=0,A=M.length;Q<A;Q++)de=M[Q],v.format!==Ut?Oe!==null?se?t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,Oe,de.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,be,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,Oe,Ae,de.data):t.texImage2D(n.TEXTURE_2D,Q,be,de.width,de.height,0,Oe,Ae,de.data)}else if(v.isDataArrayTexture)se?(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,be,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Oe,Ae,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,Z.width,Z.height,Z.depth,0,Oe,Ae,Z.data);else if(v.isData3DTexture)se?(_e&&t.texStorage3D(n.TEXTURE_3D,fe,be,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Oe,Ae,Z.data)):t.texImage3D(n.TEXTURE_3D,0,be,Z.width,Z.height,Z.depth,0,Oe,Ae,Z.data);else if(v.isFramebufferTexture){if(_e)if(se)t.texStorage2D(n.TEXTURE_2D,fe,be,Z.width,Z.height);else{let Q=Z.width,A=Z.height;for(let ne=0;ne<fe;ne++)t.texImage2D(n.TEXTURE_2D,ne,be,Q,A,0,Oe,Ae,null),Q>>=1,A>>=1}}else if(M.length>0&&Ye){se&&_e&&t.texStorage2D(n.TEXTURE_2D,fe,be,M[0].width,M[0].height);for(let Q=0,A=M.length;Q<A;Q++)de=M[Q],se?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Oe,Ae,de):t.texImage2D(n.TEXTURE_2D,Q,be,Oe,Ae,de);v.generateMipmaps=!1}else se?(_e&&t.texStorage2D(n.TEXTURE_2D,fe,be,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Oe,Ae,Z)):t.texImage2D(n.TEXTURE_2D,0,be,Oe,Ae,Z);S(v,Ye)&&b(ee),me.__version=te.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ve(w,v,F){if(v.image.length!==6)return;const ee=K(w,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);const te=s.get(J);if(J.version!==te.__version||ee===!0){t.activeTexture(n.TEXTURE0+F);const me=je.getPrimaries(je.workingColorSpace),le=v.colorSpace===kt?null:je.getPrimaries(v.colorSpace),ue=v.colorSpace===kt||me===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Se=v.isCompressedTexture||v.image[0].isCompressedTexture,Fe=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let Q=0;Q<6;Q++)!Se&&!Fe?Z[Q]=_(v.image[Q],!1,!0,a.maxCubemapSize):Z[Q]=Fe?v.image[Q].image:v.image[Q],Z[Q]=Ue(v,Z[Q]);const Ye=Z[0],Oe=g(Ye)||r,Ae=i.convert(v.format,v.colorSpace),be=i.convert(v.type),de=E(v.internalFormat,Ae,be,v.colorSpace),M=r&&v.isVideoTexture!==!0,se=te.__version===void 0||ee===!0;let _e=C(v,Ye,Oe);V(n.TEXTURE_CUBE_MAP,v,Oe);let fe;if(Se){M&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,de,Ye.width,Ye.height);for(let Q=0;Q<6;Q++){fe=Z[Q].mipmaps;for(let A=0;A<fe.length;A++){const ne=fe[A];v.format!==Ut?Ae!==null?M?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,A,0,0,ne.width,ne.height,Ae,ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,A,de,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):M?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,A,0,0,ne.width,ne.height,Ae,be,ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,A,de,ne.width,ne.height,0,Ae,be,ne.data)}}}else{fe=v.mipmaps,M&&se&&(fe.length>0&&_e++,t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,de,Z[0].width,Z[0].height));for(let Q=0;Q<6;Q++)if(Fe){M?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Z[Q].width,Z[Q].height,Ae,be,Z[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,de,Z[Q].width,Z[Q].height,0,Ae,be,Z[Q].data);for(let A=0;A<fe.length;A++){const oe=fe[A].image[Q].image;M?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,A+1,0,0,oe.width,oe.height,Ae,be,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,A+1,de,oe.width,oe.height,0,Ae,be,oe.data)}}else{M?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae,be,Z[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,de,Ae,be,Z[Q]);for(let A=0;A<fe.length;A++){const ne=fe[A];M?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,A+1,0,0,Ae,be,ne.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,A+1,de,Ae,be,ne.image[Q])}}}S(v,Oe)&&b(n.TEXTURE_CUBE_MAP),te.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function pe(w,v,F,ee,J,te){const me=i.convert(F.format,F.colorSpace),le=i.convert(F.type),ue=E(F.internalFormat,me,le,F.colorSpace);if(!s.get(v).__hasExternalTextures){const Fe=Math.max(1,v.width>>te),Z=Math.max(1,v.height>>te);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,te,ue,Fe,Z,v.depth,0,me,le,null):t.texImage2D(J,te,ue,Fe,Z,0,me,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ge(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,s.get(F).__webglTexture,0,Te(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,s.get(F).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(w,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer&&!v.stencilBuffer){let ee=r===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||ge(v)){const J=v.depthTexture;J&&J.isDepthTexture&&(J.type===ns?ee=n.DEPTH_COMPONENT32F:J.type===ss&&(ee=n.DEPTH_COMPONENT24));const te=Te(v);ge(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,ee,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ee,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(v.depthBuffer&&v.stencilBuffer){const ee=Te(v);F&&ge(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,v.width,v.height):ge(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const ee=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<ee.length;J++){const te=ee[J],me=i.convert(te.format,te.colorSpace),le=i.convert(te.type),ue=E(te.internalFormat,me,le,te.colorSpace),Se=Te(v);F&&ge(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ue,v.width,v.height):ge(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ue,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ue,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const ee=s.get(v.depthTexture).__webglTexture,J=Te(v);if(v.depthTexture.format===vs)ge(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(v.depthTexture.format===Bs)ge(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ye(w){const v=s.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ce(v.__webglFramebuffer,w)}else if(F){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]=n.createRenderbuffer(),Le(v.__webglDepthbuffer[ee],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Le(v.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(w,v,F){const ee=s.get(w);v!==void 0&&pe(ee.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ye(w)}function I(w){const v=w.texture,F=s.get(w),ee=s.get(v);w.addEventListener("dispose",W),w.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=v.version,o.memory.textures++);const J=w.isWebGLCubeRenderTarget===!0,te=w.isWebGLMultipleRenderTargets===!0,me=g(w)||r;if(J){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(r&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let ue=0;ue<v.mipmaps.length;ue++)F.__webglFramebuffer[le][ue]=n.createFramebuffer()}else F.__webglFramebuffer[le]=n.createFramebuffer()}else{if(r&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)F.__webglFramebuffer[le]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(te)if(a.drawBuffers){const le=w.texture;for(let ue=0,Se=le.length;ue<Se;ue++){const Fe=s.get(le[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&w.samples>0&&ge(w)===!1){const le=te?v:[v];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ue=0;ue<le.length;ue++){const Se=le[ue];F.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ue]);const Fe=i.convert(Se.format,Se.colorSpace),Z=i.convert(Se.type),Ye=E(Se.internalFormat,Fe,Z,Se.colorSpace,w.isXRRenderTarget===!0),Oe=Te(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Ye,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,F.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),V(n.TEXTURE_CUBE_MAP,v,me);for(let le=0;le<6;le++)if(r&&v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)pe(F.__webglFramebuffer[le][ue],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else pe(F.__webglFramebuffer[le],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);S(v,me)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const le=w.texture;for(let ue=0,Se=le.length;ue<Se;ue++){const Fe=le[ue],Z=s.get(Fe);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),V(n.TEXTURE_2D,Fe,me),pe(F.__webglFramebuffer,w,Fe,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),S(Fe,me)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(r?le=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ee.__webglTexture),V(le,v,me),r&&v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)pe(F.__webglFramebuffer[ue],w,v,n.COLOR_ATTACHMENT0,le,ue);else pe(F.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,le,0);S(v,me)&&b(le),t.unbindTexture()}w.depthBuffer&&ye(w)}function ut(w){const v=g(w)||r,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0,J=F.length;ee<J;ee++){const te=F[ee];if(S(te,v)){const me=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=s.get(te).__webglTexture;t.bindTexture(me,le),b(me),t.unbindTexture()}}}function Re(w){if(r&&w.samples>0&&ge(w)===!1){const v=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,ee=w.height;let J=n.COLOR_BUFFER_BIT;const te=[],me=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=s.get(w),ue=w.isWebGLMultipleRenderTargets===!0;if(ue)for(let Se=0;Se<v.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Se=0;Se<v.length;Se++){te.push(n.COLOR_ATTACHMENT0+Se),w.depthBuffer&&te.push(me);const Fe=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Fe===!1&&(w.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ue&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[Se]),Fe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[me])),ue){const Z=s.get(v[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,F,ee,0,0,F,ee,J,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Se=0;Se<v.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,le.__webglColorRenderbuffer[Se]);const Fe=s.get(v[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Te(w){return Math.min(a.maxSamples,w.samples)}function ge(w){const v=s.get(w);return r&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ke(w){const v=o.render.frame;d.get(w)!==v&&(d.set(w,v),w.update())}function Ue(w,v){const F=w.colorSpace,ee=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Ca||F!==jt&&F!==kt&&(je.getTransfer(F)===$e?r===!1?e.has("EXT_sRGB")===!0&&ee===Ut?(w.format=Ca,w.minFilter=Tt,w.generateMipmaps=!1):v=Er.sRGBToLinear(v):(ee!==Ut||J!==rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}this.allocateTextureUnit=k,this.resetTextureUnits=X,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=Ve,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ge}function lc(n,e,t){const s=t.isWebGL2;function a(i,o=kt){let r;const l=je.getTransfer(o);if(i===rs)return n.UNSIGNED_BYTE;if(i===pr)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_r)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tl)return n.BYTE;if(i===Al)return n.SHORT;if(i===Fa)return n.UNSIGNED_SHORT;if(i===mr)return n.INT;if(i===ss)return n.UNSIGNED_INT;if(i===ns)return n.FLOAT;if(i===un)return s?n.HALF_FLOAT:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(i===zl)return n.ALPHA;if(i===Ut)return n.RGBA;if(i===kl)return n.LUMINANCE;if(i===Ll)return n.LUMINANCE_ALPHA;if(i===vs)return n.DEPTH_COMPONENT;if(i===Bs)return n.DEPTH_STENCIL;if(i===Ca)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(i===Cl)return n.RED;if(i===vr)return n.RED_INTEGER;if(i===Pl)return n.RG;if(i===xr)return n.RG_INTEGER;if(i===br)return n.RGBA_INTEGER;if(i===Ra||i===wa||i===Sa||i===ya)if(l===$e)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ci||i===Pi||i===Di||i===Ui)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ci)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pi)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Di)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ui)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rr)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Fi||i===Ii)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fi)return l===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ii)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ni||i===Oi||i===Bi||i===Hi||i===Gi||i===Vi||i===Wi||i===Xi||i===qi||i===Yi||i===ji||i===$i||i===Ki||i===Zi)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ni)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oi)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bi)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hi)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gi)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vi)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wi)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xi)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qi)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yi)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ji)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$i)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ki)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zi)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ma||i===Ji||i===Qi)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ma)return l===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ji)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qi)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dl||i===er||i===tr||i===sr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(i===er)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?s?n.UNSIGNED_INT_24_8:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):n[i]!==void 0?n[i]:null}return{convert:a}}class cc extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lt extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Og={type:"move"};class _i{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,i=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,s),h=this._getHandJoint(c,_);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),m=.02,p=.005;c.inputState.pinching&&u>m+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&i!==null&&(a=i),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Og)))}return r!==null&&(r.visible=a!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Lt;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class Bg extends Ms{constructor(e,t){super();const s=this;let a=null,i=1,o=null,r="local-floor",l=1,c=null,d=null,f=null,u=null,m=null,p=null;const _=t.getContextAttributes();let g=null,h=null;const S=[],b=[],E=new ke;let C=null;const z=new zt;z.layers.enable(1),z.viewport=new Ze;const T=new zt;T.layers.enable(2),T.viewport=new Ze;const W=[z,T],R=new cc;R.layers.enable(1),R.layers.enable(2);let y=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=S[V];return K===void 0&&(K=new _i,S[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=S[V];return K===void 0&&(K=new _i,S[V]=K),K.getGripSpace()},this.getHand=function(V){let K=S[V];return K===void 0&&(K=new _i,S[V]=K),K.getHandSpace()};function D(V){const K=b.indexOf(V.inputSource);if(K===-1)return;const ce=S[K];ce!==void 0&&(ce.update(V.inputSource,V.frame,c||o),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function X(){a.removeEventListener("select",D),a.removeEventListener("selectstart",D),a.removeEventListener("selectend",D),a.removeEventListener("squeeze",D),a.removeEventListener("squeezestart",D),a.removeEventListener("squeezeend",D),a.removeEventListener("end",X),a.removeEventListener("inputsourceschange",k);for(let V=0;V<S.length;V++){const K=b[V];K!==null&&(b[V]=null,S[V].disconnect(K))}y=null,H=null,e.setRenderTarget(g),m=null,u=null,f=null,a=null,h=null,ie.stop(),s.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){i=V,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){r=V,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f},this.getFrame=function(){return p},this.getSession=function(){return a},this.setSession=async function(V){if(a=V,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",D),a.addEventListener("selectstart",D),a.addEventListener("selectend",D),a.addEventListener("squeeze",D),a.addEventListener("squeezestart",D),a.addEventListener("squeezeend",D),a.addEventListener("end",X),a.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:a.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(a,t,K),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new ws(m.framebufferWidth,m.framebufferHeight,{format:Ut,type:rs,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,ce=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?Bs:vs,ce=_.stencil?_s:ss);const pe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:i};f=new XRWebGLBinding(a,t),u=f.createProjectionLayer(pe),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),h=new ws(u.textureWidth,u.textureHeight,{format:Ut,type:rs,depthTexture:new Ur(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Le=e.properties.get(h);Le.__ignoreDepthValues=u.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await a.requestReferenceSpace(r),ie.setContext(a),ie.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function k(V){for(let K=0;K<V.removed.length;K++){const ce=V.removed[K],ve=b.indexOf(ce);ve>=0&&(b[ve]=null,S[ve].disconnect(ce))}for(let K=0;K<V.added.length;K++){const ce=V.added[K];let ve=b.indexOf(ce);if(ve===-1){for(let Le=0;Le<S.length;Le++)if(Le>=b.length){b.push(ce),ve=Le;break}else if(b[Le]===null){b[Le]=ce,ve=Le;break}if(ve===-1)break}const pe=S[ve];pe&&pe.connect(ce)}}const U=new L,G=new L;function Y(V,K,ce){U.setFromMatrixPosition(K.matrixWorld),G.setFromMatrixPosition(ce.matrixWorld);const ve=U.distanceTo(G),pe=K.projectionMatrix.elements,Le=ce.projectionMatrix.elements,Ce=pe[14]/(pe[10]-1),ye=pe[14]/(pe[10]+1),Ve=(pe[9]+1)/pe[5],I=(pe[9]-1)/pe[5],ut=(pe[8]-1)/pe[0],Re=(Le[8]+1)/Le[0],Te=Ce*ut,ge=Ce*Re,Ke=ve/(-ut+Re),Ue=Ke*-ut;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ue),V.translateZ(Ke),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const w=Ce+Ke,v=ye+Ke,F=Te-Ue,ee=ge+(ve-Ue),J=Ve*ye/v*w,te=I*ye/v*w;V.projectionMatrix.makePerspective(F,ee,J,te,w,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function q(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(a===null)return;R.near=T.near=z.near=V.near,R.far=T.far=z.far=V.far,(y!==R.near||H!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),y=R.near,H=R.far);const K=V.parent,ce=R.cameras;q(R,K);for(let ve=0;ve<ce.length;ve++)q(ce[ve],K);ce.length===2?Y(R,z,T):R.projectionMatrix.copy(z.projectionMatrix),j(V,R,K)};function j(V,K,ce){ce===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Dn*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let $=null;function ae(V,K){if(d=K.getViewerPose(c||o),p=K,d!==null){const ce=d.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let ve=!1;ce.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let pe=0;pe<ce.length;pe++){const Le=ce[pe];let Ce=null;if(m!==null)Ce=m.getViewport(Le);else{const Ve=f.getViewSubImage(u,Le);Ce=Ve.viewport,pe===0&&(e.setRenderTargetTextures(h,Ve.colorTexture,u.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(h))}let ye=W[pe];ye===void 0&&(ye=new zt,ye.layers.enable(pe),ye.viewport=new Ze,W[pe]=ye),ye.matrix.fromArray(Le.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Le.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),pe===0&&(R.matrix.copy(ye.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(ye)}}for(let ce=0;ce<S.length;ce++){const ve=b[ce],pe=S[ce];ve!==null&&pe!==void 0&&pe.update(ve,K,c||o)}$&&$(V,K),K.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:K}),p=null}const ie=new ec;ie.setAnimationLoop(ae),this.setAnimationLoop=function(V){$=V},this.dispose=function(){}}}function Hg(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function s(g,h){h.color.getRGB(g.fogColor.value,Kl(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function a(g,h,S,b,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(g,h):h.isMeshToonMaterial?(i(g,h),f(g,h)):h.isMeshPhongMaterial?(i(g,h),d(g,h)):h.isMeshStandardMaterial?(i(g,h),u(g,h),h.isMeshPhysicalMaterial&&m(g,h,E)):h.isMeshMatcapMaterial?(i(g,h),p(g,h)):h.isMeshDepthMaterial?i(g,h):h.isMeshDistanceMaterial?(i(g,h),_(g,h)):h.isMeshNormalMaterial?i(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&r(g,h)):h.isPointsMaterial?l(g,h,S,b):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Rt&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Rt&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const S=e.get(h).envMap;if(S&&(g.envMap.value=S,g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap){g.lightMap.value=h.lightMap;const b=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=h.lightMapIntensity*b,t(h.lightMap,g.lightMapTransform)}h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function r(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,S,b){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*S,g.scale.value=b*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function d(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),e.get(h).envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function m(g,h,S){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Rt&&g.clearcoatNormalScale.value.negate())),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,h){h.matcap&&(g.matcap.value=h.matcap)}function _(g,h){const S=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function Gg(n,e,t,s){let a={},i={},o=[];const r=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,b){const E=b.program;s.uniformBlockBinding(S,E)}function c(S,b){let E=a[S.id];E===void 0&&(p(S),E=d(S),a[S.id]=E,S.addEventListener("dispose",g));const C=b.program;s.updateUBOMapping(S,C);const z=e.render.frame;i[S.id]!==z&&(u(S),i[S.id]=z)}function d(S){const b=f();S.__bindingPointIndex=b;const E=n.createBuffer(),C=S.__size,z=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,z),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function f(){for(let S=0;S<r;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const b=a[S.id],E=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let z=0,T=E.length;z<T;z++){const W=Array.isArray(E[z])?E[z]:[E[z]];for(let R=0,y=W.length;R<y;R++){const H=W[R];if(m(H,z,R,C)===!0){const D=H.__offset,X=Array.isArray(H.value)?H.value:[H.value];let k=0;for(let U=0;U<X.length;U++){const G=X[U],Y=_(G);typeof G=="number"||typeof G=="boolean"?(H.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,D+k,H.__data)):G.isMatrix3?(H.__data[0]=G.elements[0],H.__data[1]=G.elements[1],H.__data[2]=G.elements[2],H.__data[3]=0,H.__data[4]=G.elements[3],H.__data[5]=G.elements[4],H.__data[6]=G.elements[5],H.__data[7]=0,H.__data[8]=G.elements[6],H.__data[9]=G.elements[7],H.__data[10]=G.elements[8],H.__data[11]=0):(G.toArray(H.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,b,E,C){const z=S.value,T=b+"_"+E;if(C[T]===void 0)return typeof z=="number"||typeof z=="boolean"?C[T]=z:C[T]=z.clone(),!0;{const W=C[T];if(typeof z=="number"||typeof z=="boolean"){if(W!==z)return C[T]=z,!0}else if(W.equals(z)===!1)return W.copy(z),!0}return!1}function p(S){const b=S.uniforms;let E=0;const C=16;for(let T=0,W=b.length;T<W;T++){const R=Array.isArray(b[T])?b[T]:[b[T]];for(let y=0,H=R.length;y<H;y++){const D=R[y],X=Array.isArray(D.value)?D.value:[D.value];for(let k=0,U=X.length;k<U;k++){const G=X[k],Y=_(G),q=E%C;q!==0&&C-q<Y.boundary&&(E+=C-q),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=Y.storage}}}const z=E%C;return z>0&&(E+=C-z),S.__size=E,S.__cache={},this}function _(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function g(S){const b=S.target;b.removeEventListener("dispose",g);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(a[b.id]),delete a[b.id],delete i[b.id]}function h(){for(const S in a)n.deleteBuffer(a[S]);o=[],a={},i={}}return{bind:l,update:c,dispose:h}}class Fr{constructor(e={}){const{canvas:t=ql(),context:s=null,depth:a=!0,stencil:i=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;s!==null?u=s.getContextAttributes().alpha:u=o;const m=new Uint32Array(4),p=new Int32Array(4);let _=null,g=null;const h=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=is,this.toneMappingExposure=1;const b=this;let E=!1,C=0,z=0,T=null,W=-1,R=null;const y=new Ze,H=new Ze;let D=null;const X=new Pe(0);let k=0,U=t.width,G=t.height,Y=1,q=null,j=null;const $=new Ze(0,0,U,G),ae=new Ze(0,0,U,G);let ie=!1;const V=new Oa;let K=!1,ce=!1,ve=null;const pe=new tt,Le=new ke,Ce=new L,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return T===null?Y:1}let I=s;function ut(x,P){for(let O=0;O<x.length;O++){const B=x[O],N=t.getContext(B,P);if(N!==null)return N}return null}try{const x={alpha:!0,depth:a,stencil:i,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Da}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",A,!1),t.addEventListener("webglcontextcreationerror",ne,!1),I===null){const P=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&P.shift(),I=ut(P,x),I===null)throw ut(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Re,Te,ge,Ke,Ue,w,v,F,ee,J,te,me,le,ue,Se,Fe,Z,Ye,Oe,Ae,be,de,M,se;function _e(){Re=new su(I),Te=new Kf(I,Re,e),Re.init(Te),de=new lc(I,Re,Te),ge=new Ig(I,Re,Te),Ke=new iu(I),Ue=new Mg,w=new Ng(I,Re,ge,Ue,Te,de,Ke),v=new Jf(b),F=new tu(b),ee=new fd(I,Te),M=new jf(I,Re,ee,Te),J=new nu(I,ee,Ke,M),te=new cu(I,J,ee,Ke),Oe=new lu(I,Te,w),Fe=new Zf(Ue),me=new yg(b,v,F,Re,Te,M,Fe),le=new Hg(b,Ue),ue=new Tg,Se=new Pg(Re,Te),Ye=new Yf(b,v,F,ge,te,u,l),Z=new Fg(b,te,Te),se=new Gg(I,Ke,Te,ge),Ae=new $f(I,Re,Ke,Te),be=new au(I,Re,Ke,Te),Ke.programs=me.programs,b.capabilities=Te,b.extensions=Re,b.properties=Ue,b.renderLists=ue,b.shadowMap=Z,b.state=ge,b.info=Ke}_e();const fe=new Bg(b,I);this.xr=fe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=Re.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Re.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(x){x!==void 0&&(Y=x,this.setSize(U,G,!1))},this.getSize=function(x){return x.set(U,G)},this.setSize=function(x,P,O=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=x,G=P,t.width=Math.floor(x*Y),t.height=Math.floor(P*Y),O===!0&&(t.style.width=x+"px",t.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(U*Y,G*Y).floor()},this.setDrawingBufferSize=function(x,P,O){U=x,G=P,Y=O,t.width=Math.floor(x*O),t.height=Math.floor(P*O),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(y)},this.getViewport=function(x){return x.copy($)},this.setViewport=function(x,P,O,B){x.isVector4?$.set(x.x,x.y,x.z,x.w):$.set(x,P,O,B),ge.viewport(y.copy($).multiplyScalar(Y).floor())},this.getScissor=function(x){return x.copy(ae)},this.setScissor=function(x,P,O,B){x.isVector4?ae.set(x.x,x.y,x.z,x.w):ae.set(x,P,O,B),ge.scissor(H.copy(ae).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(x){ge.setScissorTest(ie=x)},this.setOpaqueSort=function(x){q=x},this.setTransparentSort=function(x){j=x},this.getClearColor=function(x){return x.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(x=!0,P=!0,O=!0){let B=0;if(x){let N=!1;if(T!==null){const he=T.texture.format;N=he===br||he===xr||he===vr}if(N){const he=T.texture.type,xe=he===rs||he===ss||he===Fa||he===_s||he===pr||he===_r,Ee=Ye.getClearColor(),ze=Ye.getClearAlpha(),Be=Ee.r,De=Ee.g,Ie=Ee.b;xe?(m[0]=Be,m[1]=De,m[2]=Ie,m[3]=ze,I.clearBufferuiv(I.COLOR,0,m)):(p[0]=Be,p[1]=De,p[2]=Ie,p[3]=ze,I.clearBufferiv(I.COLOR,0,p))}else B|=I.COLOR_BUFFER_BIT}P&&(B|=I.DEPTH_BUFFER_BIT),O&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",A,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),ue.dispose(),Se.dispose(),Ue.dispose(),v.dispose(),F.dispose(),te.dispose(),M.dispose(),se.dispose(),me.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",st),fe.removeEventListener("sessionend",qe),ve&&(ve.dispose(),ve=null),it.stop()};function Q(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const x=Ke.autoReset,P=Z.enabled,O=Z.autoUpdate,B=Z.needsUpdate,N=Z.type;_e(),Ke.autoReset=x,Z.enabled=P,Z.autoUpdate=O,Z.needsUpdate=B,Z.type=N}function ne(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function oe(x){const P=x.target;P.removeEventListener("dispose",oe),Me(P)}function Me(x){we(x),Ue.remove(x)}function we(x){const P=Ue.get(x).programs;P!==void 0&&(P.forEach(function(O){me.releaseProgram(O)}),x.isShaderMaterial&&me.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,O,B,N,he){P===null&&(P=ye);const xe=N.isMesh&&N.matrixWorld.determinant()<0,Ee=Tc(x,P,O,B,N);ge.setMaterial(B,xe);let ze=O.index,Be=1;if(B.wireframe===!0){if(ze=J.getWireframeAttribute(O),ze===void 0)return;Be=2}const De=O.drawRange,Ie=O.attributes.position;let nt=De.start*Be,yt=(De.start+De.count)*Be;he!==null&&(nt=Math.max(nt,he.start*Be),yt=Math.min(yt,(he.start+he.count)*Be)),ze!==null?(nt=Math.max(nt,0),yt=Math.min(yt,ze.count)):Ie!=null&&(nt=Math.max(nt,0),yt=Math.min(yt,Ie.count));const ht=yt-nt;if(ht<0||ht===1/0)return;M.setup(N,B,Ee,O,ze);let $t,Je=Ae;if(ze!==null&&($t=ee.get(ze),Je=be,Je.setIndex($t)),N.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*Ve()),Je.setMode(I.LINES)):Je.setMode(I.TRIANGLES);else if(N.isLine){let Ge=B.linewidth;Ge===void 0&&(Ge=1),ge.setLineWidth(Ge*Ve()),N.isLineSegments?Je.setMode(I.LINES):N.isLineLoop?Je.setMode(I.LINE_LOOP):Je.setMode(I.LINE_STRIP)}else N.isPoints?Je.setMode(I.POINTS):N.isSprite&&Je.setMode(I.TRIANGLES);if(N.isBatchedMesh)Je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)Je.renderInstances(nt,ht,N.count);else if(O.isInstancedBufferGeometry){const Ge=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Xa=Math.min(O.instanceCount,Ge);Je.renderInstances(nt,ht,Xa)}else Je.render(nt,ht)};function We(x,P,O){x.transparent===!0&&x.side===Bt&&x.forceSinglePass===!1?(x.side=Rt,x.needsUpdate=!0,Wn(x,P,O),x.side=os,x.needsUpdate=!0,Wn(x,P,O),x.side=Bt):Wn(x,P,O)}this.compile=function(x,P,O=null){O===null&&(O=x),g=Se.get(O),g.init(),S.push(g),O.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),x!==O&&x.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),g.setupLights(b._useLegacyLights);const B=new Set;return x.traverse(function(N){const he=N.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const Ee=he[xe];We(Ee,O,N),B.add(Ee)}else We(he,O,N),B.add(he)}),S.pop(),g=null,B},this.compileAsync=function(x,P,O=null){const B=this.compile(x,P,O);return new Promise(N=>{function he(){if(B.forEach(function(xe){Ue.get(xe).currentProgram.isReady()&&B.delete(xe)}),B.size===0){N(x);return}setTimeout(he,10)}Re.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Xe=null;function Qe(x){Xe&&Xe(x)}function st(){it.stop()}function qe(){it.start()}const it=new ec;it.setAnimationLoop(Qe),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(x){Xe=x,fe.setAnimationLoop(x),x===null?it.stop():it.start()},fe.addEventListener("sessionstart",st),fe.addEventListener("sessionend",qe),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(P),P=fe.getCamera()),x.isScene===!0&&x.onBeforeRender(b,x,P,T),g=Se.get(x,S.length),g.init(),S.push(g),pe.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),V.setFromProjectionMatrix(pe),ce=this.localClippingEnabled,K=Fe.init(this.clippingPlanes,ce),_=ue.get(x,h.length),_.init(),h.push(_),Vt(x,P,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(q,j),this.info.render.frame++,K===!0&&Fe.beginShadows();const O=g.state.shadowsArray;if(Z.render(O,x,P),K===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(_,x),g.setupLights(b._useLegacyLights),P.isArrayCamera){const B=P.cameras;for(let N=0,he=B.length;N<he;N++){const xe=B[N];Or(_,x,xe,xe.viewport)}}else Or(_,x,P);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),x.isScene===!0&&x.onAfterRender(b,x,P),M.resetDefaultState(),W=-1,R=null,S.pop(),S.length>0?g=S[S.length-1]:g=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Vt(x,P,O,B){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)g.pushLight(x),x.castShadow&&g.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||V.intersectsSprite(x)){B&&Ce.setFromMatrixPosition(x.matrixWorld).applyMatrix4(pe);const xe=te.update(x),Ee=x.material;Ee.visible&&_.push(x,xe,Ee,O,Ce.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||V.intersectsObject(x))){const xe=te.update(x),Ee=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ce.copy(x.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ce.copy(xe.boundingSphere.center)),Ce.applyMatrix4(x.matrixWorld).applyMatrix4(pe)),Array.isArray(Ee)){const ze=xe.groups;for(let Be=0,De=ze.length;Be<De;Be++){const Ie=ze[Be],nt=Ee[Ie.materialIndex];nt&&nt.visible&&_.push(x,xe,nt,O,Ce.z,Ie)}}else Ee.visible&&_.push(x,xe,Ee,O,Ce.z,null)}}const he=x.children;for(let xe=0,Ee=he.length;xe<Ee;xe++)Vt(he[xe],P,O,B)}function Or(x,P,O,B){const N=x.opaque,he=x.transmissive,xe=x.transparent;g.setupLightsView(O),K===!0&&Fe.setGlobalState(b.clippingPlanes,O),he.length>0&&Ec(N,he,P,O),B&&ge.viewport(y.copy(B)),N.length>0&&Vn(N,P,O),he.length>0&&Vn(he,P,O),xe.length>0&&Vn(xe,P,O),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ec(x,P,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const he=Te.isWebGL2;ve===null&&(ve=new ws(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?un:rs,minFilter:fn,samples:he?4:0})),b.getDrawingBufferSize(Le),he?ve.setSize(Le.x,Le.y):ve.setSize(Pa(Le.x),Pa(Le.y));const xe=b.getRenderTarget();b.setRenderTarget(ve),b.getClearColor(X),k=b.getClearAlpha(),k<1&&b.setClearColor(16777215,.5),b.clear();const Ee=b.toneMapping;b.toneMapping=is,Vn(x,O,B),w.updateMultisampleRenderTarget(ve),w.updateRenderTargetMipmap(ve);let ze=!1;for(let Be=0,De=P.length;Be<De;Be++){const Ie=P[Be],nt=Ie.object,yt=Ie.geometry,ht=Ie.material,$t=Ie.group;if(ht.side===Bt&&nt.layers.test(B.layers)){const Je=ht.side;ht.side=Rt,ht.needsUpdate=!0,Br(nt,O,B,yt,ht,$t),ht.side=Je,ht.needsUpdate=!0,ze=!0}}ze===!0&&(w.updateMultisampleRenderTarget(ve),w.updateRenderTargetMipmap(ve)),b.setRenderTarget(xe),b.setClearColor(X,k),b.toneMapping=Ee}function Vn(x,P,O){const B=P.isScene===!0?P.overrideMaterial:null;for(let N=0,he=x.length;N<he;N++){const xe=x[N],Ee=xe.object,ze=xe.geometry,Be=B===null?xe.material:B,De=xe.group;Ee.layers.test(O.layers)&&Br(Ee,P,O,ze,Be,De)}}function Br(x,P,O,B,N,he){x.onBeforeRender(b,P,O,B,N,he),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(b,P,O,B,x,he),N.transparent===!0&&N.side===Bt&&N.forceSinglePass===!1?(N.side=Rt,N.needsUpdate=!0,b.renderBufferDirect(O,P,B,N,x,he),N.side=os,N.needsUpdate=!0,b.renderBufferDirect(O,P,B,N,x,he),N.side=Bt):b.renderBufferDirect(O,P,B,N,x,he),x.onAfterRender(b,P,O,B,N,he)}function Wn(x,P,O){P.isScene!==!0&&(P=ye);const B=Ue.get(x),N=g.state.lights,he=g.state.shadowsArray,xe=N.state.version,Ee=me.getParameters(x,N.state,he,P,O),ze=me.getProgramCacheKey(Ee);let Be=B.programs;B.environment=x.isMeshStandardMaterial?P.environment:null,B.fog=P.fog,B.envMap=(x.isMeshStandardMaterial?F:v).get(x.envMap||B.environment),Be===void 0&&(x.addEventListener("dispose",oe),Be=new Map,B.programs=Be);let De=Be.get(ze);if(De!==void 0){if(B.currentProgram===De&&B.lightsStateVersion===xe)return Gr(x,Ee),De}else Ee.uniforms=me.getUniforms(x),x.onBuild(O,Ee,b),x.onBeforeCompile(Ee,b),De=me.acquireProgram(Ee,ze),Be.set(ze,De),B.uniforms=Ee.uniforms;const Ie=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ie.clippingPlanes=Fe.uniform),Gr(x,Ee),B.needsLights=zc(x),B.lightsStateVersion=xe,B.needsLights&&(Ie.ambientLightColor.value=N.state.ambient,Ie.lightProbe.value=N.state.probe,Ie.directionalLights.value=N.state.directional,Ie.directionalLightShadows.value=N.state.directionalShadow,Ie.spotLights.value=N.state.spot,Ie.spotLightShadows.value=N.state.spotShadow,Ie.rectAreaLights.value=N.state.rectArea,Ie.ltc_1.value=N.state.rectAreaLTC1,Ie.ltc_2.value=N.state.rectAreaLTC2,Ie.pointLights.value=N.state.point,Ie.pointLightShadows.value=N.state.pointShadow,Ie.hemisphereLights.value=N.state.hemi,Ie.directionalShadowMap.value=N.state.directionalShadowMap,Ie.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ie.spotShadowMap.value=N.state.spotShadowMap,Ie.spotLightMatrix.value=N.state.spotLightMatrix,Ie.spotLightMap.value=N.state.spotLightMap,Ie.pointShadowMap.value=N.state.pointShadowMap,Ie.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=De,B.uniformsList=null,De}function Hr(x){if(x.uniformsList===null){const P=x.currentProgram.getUniforms();x.uniformsList=Ea.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function Gr(x,P){const O=Ue.get(x);O.outputColorSpace=P.outputColorSpace,O.batching=P.batching,O.instancing=P.instancing,O.instancingColor=P.instancingColor,O.skinning=P.skinning,O.morphTargets=P.morphTargets,O.morphNormals=P.morphNormals,O.morphColors=P.morphColors,O.morphTargetsCount=P.morphTargetsCount,O.numClippingPlanes=P.numClippingPlanes,O.numIntersection=P.numClipIntersection,O.vertexAlphas=P.vertexAlphas,O.vertexTangents=P.vertexTangents,O.toneMapping=P.toneMapping}function Tc(x,P,O,B,N){P.isScene!==!0&&(P=ye),w.resetTextureUnits();const he=P.fog,xe=B.isMeshStandardMaterial?P.environment:null,Ee=T===null?b.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:jt,ze=(B.isMeshStandardMaterial?F:v).get(B.envMap||xe),Be=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,De=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ie=!!O.morphAttributes.position,nt=!!O.morphAttributes.normal,yt=!!O.morphAttributes.color;let ht=is;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ht=b.toneMapping);const $t=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Je=$t!==void 0?$t.length:0,Ge=Ue.get(B),Xa=g.state.lights;if(K===!0&&(ce===!0||x!==R)){const Ct=x===R&&B.id===W;Fe.setState(B,x,Ct)}let et=!1;B.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Xa.state.version||Ge.outputColorSpace!==Ee||N.isBatchedMesh&&Ge.batching===!1||!N.isBatchedMesh&&Ge.batching===!0||N.isInstancedMesh&&Ge.instancing===!1||!N.isInstancedMesh&&Ge.instancing===!0||N.isSkinnedMesh&&Ge.skinning===!1||!N.isSkinnedMesh&&Ge.skinning===!0||N.isInstancedMesh&&Ge.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ge.instancingColor===!1&&N.instanceColor!==null||Ge.envMap!==ze||B.fog===!0&&Ge.fog!==he||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Fe.numPlanes||Ge.numIntersection!==Fe.numIntersection)||Ge.vertexAlphas!==Be||Ge.vertexTangents!==De||Ge.morphTargets!==Ie||Ge.morphNormals!==nt||Ge.morphColors!==yt||Ge.toneMapping!==ht||Te.isWebGL2===!0&&Ge.morphTargetsCount!==Je)&&(et=!0):(et=!0,Ge.__version=B.version);let Es=Ge.currentProgram;et===!0&&(Es=Wn(B,P,N));let Vr=!1,xn=!1,qa=!1;const gt=Es.getUniforms(),Ts=Ge.uniforms;if(ge.useProgram(Es.program)&&(Vr=!0,xn=!0,qa=!0),B.id!==W&&(W=B.id,xn=!0),Vr||R!==x){gt.setValue(I,"projectionMatrix",x.projectionMatrix),gt.setValue(I,"viewMatrix",x.matrixWorldInverse);const Ct=gt.map.cameraPosition;Ct!==void 0&&Ct.setValue(I,Ce.setFromMatrixPosition(x.matrixWorld)),Te.logarithmicDepthBuffer&&gt.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&gt.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),R!==x&&(R=x,xn=!0,qa=!0)}if(N.isSkinnedMesh){gt.setOptional(I,N,"bindMatrix"),gt.setOptional(I,N,"bindMatrixInverse");const Ct=N.skeleton;Ct&&(Te.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),gt.setValue(I,"boneTexture",Ct.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(gt.setOptional(I,N,"batchingTexture"),gt.setValue(I,"batchingTexture",N._matricesTexture,w));const Ya=O.morphAttributes;if((Ya.position!==void 0||Ya.normal!==void 0||Ya.color!==void 0&&Te.isWebGL2===!0)&&Oe.update(N,O,Es),(xn||Ge.receiveShadow!==N.receiveShadow)&&(Ge.receiveShadow=N.receiveShadow,gt.setValue(I,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ts.envMap.value=ze,Ts.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),xn&&(gt.setValue(I,"toneMappingExposure",b.toneMappingExposure),Ge.needsLights&&Ac(Ts,qa),he&&B.fog===!0&&le.refreshFogUniforms(Ts,he),le.refreshMaterialUniforms(Ts,B,Y,G,ve),Ea.upload(I,Hr(Ge),Ts,w)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ea.upload(I,Hr(Ge),Ts,w),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&gt.setValue(I,"center",N.center),gt.setValue(I,"modelViewMatrix",N.modelViewMatrix),gt.setValue(I,"normalMatrix",N.normalMatrix),gt.setValue(I,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ct=B.uniformsGroups;for(let ja=0,kc=Ct.length;ja<kc;ja++)if(Te.isWebGL2){const Wr=Ct[ja];se.update(Wr,Es),se.bind(Wr,Es)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Es}function Ac(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function zc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(x,P,O){Ue.get(x.texture).__webglTexture=P,Ue.get(x.depthTexture).__webglTexture=O;const B=Ue.get(x);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,P){const O=Ue.get(x);O.__webglFramebuffer=P,O.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,O=0){T=x,C=P,z=O;let B=!0,N=null,he=!1,xe=!1;if(x){const ze=Ue.get(x);ze.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(I.FRAMEBUFFER,null),B=!1):ze.__webglFramebuffer===void 0?w.setupRenderTarget(x):ze.__hasExternalTextures&&w.rebindTextures(x,Ue.get(x.texture).__webglTexture,Ue.get(x.depthTexture).__webglTexture);const Be=x.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(xe=!0);const De=Ue.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(De[P])?N=De[P][O]:N=De[P],he=!0):Te.isWebGL2&&x.samples>0&&w.useMultisampledRTT(x)===!1?N=Ue.get(x).__webglMultisampledFramebuffer:Array.isArray(De)?N=De[O]:N=De,y.copy(x.viewport),H.copy(x.scissor),D=x.scissorTest}else y.copy($).multiplyScalar(Y).floor(),H.copy(ae).multiplyScalar(Y).floor(),D=ie;if(ge.bindFramebuffer(I.FRAMEBUFFER,N)&&Te.drawBuffers&&B&&ge.drawBuffers(x,N),ge.viewport(y),ge.scissor(H),ge.setScissorTest(D),he){const ze=Ue.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,ze.__webglTexture,O)}else if(xe){const ze=Ue.get(x.texture),Be=P||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.__webglTexture,O||0,Be)}W=-1},this.readRenderTargetPixels=function(x,P,O,B,N,he,xe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ue.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){ge.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const ze=x.texture,Be=ze.format,De=ze.type;if(Be!==Ut&&de.convert(Be)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===un&&(Re.has("EXT_color_buffer_half_float")||Te.isWebGL2&&Re.has("EXT_color_buffer_float"));if(De!==rs&&de.convert(De)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===ns&&(Te.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-B&&O>=0&&O<=x.height-N&&I.readPixels(P,O,B,N,de.convert(Be),de.convert(De),he)}finally{const ze=T!==null?Ue.get(T).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(x,P,O=0){const B=Math.pow(2,-O),N=Math.floor(P.image.width*B),he=Math.floor(P.image.height*B);w.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,O,0,0,x.x,x.y,N,he),ge.unbindTexture()},this.copyTextureToTexture=function(x,P,O,B=0){const N=P.image.width,he=P.image.height,xe=de.convert(O.format),Ee=de.convert(O.type);w.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment),P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,x.x,x.y,N,he,xe,Ee,P.image.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,x.x,x.y,P.mipmaps[0].width,P.mipmaps[0].height,xe,P.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,B,x.x,x.y,xe,Ee,P.image),B===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(x,P,O,B,N=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=x.max.x-x.min.x+1,xe=x.max.y-x.min.y+1,Ee=x.max.z-x.min.z+1,ze=de.convert(B.format),Be=de.convert(B.type);let De;if(B.isData3DTexture)w.setTexture3D(B,0),De=I.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)w.setTexture2DArray(B,0),De=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const Ie=I.getParameter(I.UNPACK_ROW_LENGTH),nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),yt=I.getParameter(I.UNPACK_SKIP_PIXELS),ht=I.getParameter(I.UNPACK_SKIP_ROWS),$t=I.getParameter(I.UNPACK_SKIP_IMAGES),Je=O.isCompressedTexture?O.mipmaps[N]:O.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Je.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Je.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,x.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,x.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,x.min.z),O.isDataTexture||O.isData3DTexture?I.texSubImage3D(De,N,P.x,P.y,P.z,he,xe,Ee,ze,Be,Je.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(De,N,P.x,P.y,P.z,he,xe,Ee,ze,Je.data)):I.texSubImage3D(De,N,P.x,P.y,P.z,he,xe,Ee,ze,Be,Je),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ie),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,yt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ht),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$t),N===0&&B.generateMipmaps&&I.generateMipmap(De),ge.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?w.setTextureCube(x,0):x.isData3DTexture?w.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?w.setTexture2DArray(x,0):w.setTexture2D(x,0),ge.unbindTexture()},this.resetState=function(){C=0,z=0,T=null,ge.reset(),M.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ia?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===Nn?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?xs:wr}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xs?at:jt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class dc extends Fr{}dc.prototype.isWebGL1Renderer=!0;class Ga{constructor(e,t=1,s=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=s}clone(){return new Ga(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hc extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ir extends Hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ko=new L,Lo=new L,Co=new tt,vi=new Na,ua=new On;class fc extends lt{constructor(e=new Gt,t=new Ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,i=t.count;a<i;a++)ko.fromBufferAttribute(t,a-1),Lo.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=ko.distanceTo(Lo);e.setAttribute("lineDistance",new St(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,i=e.params.Line.threshold,o=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ua.copy(s.boundingSphere),ua.applyMatrix4(a),ua.radius+=i,e.ray.intersectsSphere(ua)===!1)return;Co.copy(a).invert(),vi.copy(e.ray).applyMatrix4(Co);const r=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=new L,d=new L,f=new L,u=new L,m=this.isLineSegments?2:1,p=s.index,g=s.attributes.position;if(p!==null){const h=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let b=h,E=S-1;b<E;b+=m){const C=p.getX(b),z=p.getX(b+1);if(c.fromBufferAttribute(g,C),d.fromBufferAttribute(g,z),vi.distanceSqToSegment(c,d,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);const W=e.ray.origin.distanceTo(u);W<e.near||W>e.far||t.push({distance:W,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let b=h,E=S-1;b<E;b+=m){if(c.fromBufferAttribute(g,b),d.fromBufferAttribute(g,b+1),vi.distanceSqToSegment(c,d,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(u);z<e.near||z>e.far||t.push({distance:z,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=a.length;i<o;i++){const r=a[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=i}}}}}const Po=new L,Do=new L;class uc extends fc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,i=t.count;a<i;a+=2)Po.fromBufferAttribute(t,a),Do.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Po.distanceTo(Do);e.setAttribute("lineDistance",new St(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const ga=new L,ma=new L,xi=new L,pa=new At;class gc extends Gt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),i=Math.cos(cn*t),o=e.getIndex(),r=e.getAttribute("position"),l=o?o.count:r.count,c=[0,0,0],d=["a","b","c"],f=new Array(3),u={},m=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:g,c:h}=pa;if(_.fromBufferAttribute(r,c[0]),g.fromBufferAttribute(r,c[1]),h.fromBufferAttribute(r,c[2]),pa.getNormal(xi),f[0]=`${Math.round(_.x*a)},${Math.round(_.y*a)},${Math.round(_.z*a)}`,f[1]=`${Math.round(g.x*a)},${Math.round(g.y*a)},${Math.round(g.z*a)}`,f[2]=`${Math.round(h.x*a)},${Math.round(h.y*a)},${Math.round(h.z*a)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){const b=(S+1)%3,E=f[S],C=f[b],z=pa[d[S]],T=pa[d[b]],W=`${E}_${C}`,R=`${C}_${E}`;R in u&&u[R]?(xi.dot(u[R].normal)<=i&&(m.push(z.x,z.y,z.z),m.push(T.x,T.y,T.z)),u[R]=null):W in u||(u[W]={index0:c[S],index1:c[b],normal:xi.clone()})}}for(const p in u)if(u[p]){const{index0:_,index1:g}=u[p];ga.fromBufferAttribute(r,_),ma.fromBufferAttribute(r,g),m.push(ga.x,ga.y,ga.z),m.push(ma.x,ma.y,ma.z)}this.setAttribute("position",new St(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Yt extends Hs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sr,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const cr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class mc{constructor(e,t,s){const a=this;let i=!1,o=0,r=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(d){r++,i===!1&&a.onStart!==void 0&&a.onStart(d,o,r),i=!0},this.itemEnd=function(d){o++,a.onProgress!==void 0&&a.onProgress(d,o,r),o===r&&(i=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=c.length;f<u;f+=2){const m=c[f],p=c[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return p}return null}}}const pc=new mc;class Va{constructor(e){this.manager=e!==void 0?e:pc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(a,i){s.load(e,a,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Va.DEFAULT_MATERIAL_NAME="__DEFAULT";class _c extends Va{constructor(e){super(e)}load(e,t,s,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,o=cr.get(e);if(o!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(o),i.manager.itemEnd(e)},0),o;const r=Un("img");function l(){d(),cr.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(f){d(),a&&a(f),i.manager.itemError(e),i.manager.itemEnd(e)}function d(){r.removeEventListener("load",l,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),i.manager.itemStart(e),r.src=e,r}}class Nr extends Va{constructor(e){super(e)}load(e,t,s,a){const i=new wt,o=new _c(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(r){i.image=r,i.needsUpdate=!0,t!==void 0&&t(i)},s,a),i}}class Gn extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class vc extends Gn{constructor(e,t,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const bi=new tt,Uo=new L,Fo=new L;class xc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Uo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uo),Fo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fo),t.updateMatrixWorld(),bi.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bi),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(bi)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Io=new tt,Mn=new L,Ri=new L;class Vg extends xc{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const s=this.camera,a=this.matrix,i=e.distance||s.far;i!==s.far&&(s.far=i,s.updateProjectionMatrix()),Mn.setFromMatrixPosition(e.matrixWorld),s.position.copy(Mn),Ri.copy(s.position),Ri.add(this._cubeDirections[t]),s.up.copy(this._cubeUps[t]),s.lookAt(Ri),s.updateMatrixWorld(),a.makeTranslation(-Mn.x,-Mn.y,-Mn.z),Io.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io)}}class bc extends Gn{constructor(e,t,s=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=a,this.shadow=new Vg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Wg extends xc{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dr extends Gn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new Wg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rc extends Gn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=No(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=No();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function No(){return(typeof performance>"u"?Date:performance).now()}class hr{constructor(e=1,t=0,s=0){return this.radius=e,this.phi=t,this.theta=s,this}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);const ms=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Sl,AddEquation:us,AddOperation:xl,AdditiveBlending:Ei,AgXToneMapping:Ml,AlphaFormat:zl,AlwaysCompare:Wl,AlwaysDepth:fl,AlwaysStencilFunc:nr,AmbientLight:Rc,ArrayCamera:cc,BackSide:Rt,BasicDepthPacking:Ul,Box3:pn,BoxGeometry:_n,BufferAttribute:Ht,BufferGeometry:Gt,ByteType:Tl,Cache:cr,Camera:Cr,CineonToneMapping:wl,ClampToEdgeWrapping:Dt,Clock:wc,Color:Pe,ColorManagement:je,ConstantAlphaFactor:cl,ConstantColorFactor:ol,CubeCamera:Jl,CubeReflectionMapping:Ns,CubeRefractionMapping:Os,CubeTexture:Pr,CubeUVReflectionMapping:In,CullFaceBack:Mi,CullFaceFront:jo,CullFaceNone:Yo,CustomBlending:$o,CustomToneMapping:yl,Data3DTexture:jl,DataArrayTexture:Ar,DefaultLoadingManager:pc,DepthFormat:vs,DepthStencilFormat:Bs,DepthTexture:Ur,DirectionalLight:dr,DisplayP3ColorSpace:Ia,DoubleSide:Bt,DstAlphaFactor:sl,DstColorFactor:al,EdgesGeometry:gc,EqualCompare:Bl,EqualDepth:gl,EquirectangularReflectionMapping:za,EquirectangularRefractionMapping:ka,Euler:Bn,EventDispatcher:Ms,Float32BufferAttribute:St,FloatType:ns,Fog:Ga,FrontSide:os,Frustum:Oa,GLSL3:ir,GreaterCompare:Hl,GreaterDepth:pl,GreaterEqualCompare:Vl,GreaterEqualDepth:ml,Group:Lt,HalfFloatType:un,HemisphereLight:vc,ImageLoader:_c,ImageUtils:Er,IntType:mr,KeepStencilOp:Ps,Layers:zr,LessCompare:Ol,LessDepth:ul,LessEqualCompare:yr,LessEqualDepth:zn,Light:Gn,Line:fc,LineBasicMaterial:Ir,LineSegments:uc,LinearDisplayP3ColorSpace:Nn,LinearEncoding:wr,LinearFilter:Tt,LinearMipmapLinearFilter:fn,LinearMipmapNearestFilter:El,LinearSRGBColorSpace:jt,LinearToneMapping:bl,LinearTransfer:kn,Loader:Va,LoadingManager:mc,LuminanceAlphaFormat:Ll,LuminanceFormat:kl,MOUSE:Xt,Material:Hs,MathUtils:Rs,Matrix3:He,Matrix4:tt,MaxEquation:ki,Mesh:ot,MeshBasicMaterial:Fn,MeshDepthMaterial:rc,MeshDistanceMaterial:oc,MeshLambertMaterial:Yt,MinEquation:zi,MirroredRepeatWrapping:La,MixOperation:vl,MultiplyBlending:Ai,MultiplyOperation:Ua,NearestFilter:_t,NearestMipmapLinearFilter:ba,NearestMipmapNearestFilter:Li,NeverCompare:Nl,NeverDepth:hl,NoBlending:as,NoColorSpace:kt,NoToneMapping:is,NormalBlending:Is,NotEqualCompare:Gl,NotEqualDepth:_l,Object3D:lt,ObjectSpaceNormalMap:Il,OneFactor:Qo,OneMinusConstantAlphaFactor:dl,OneMinusConstantColorFactor:ll,OneMinusDstAlphaFactor:nl,OneMinusDstColorFactor:il,OneMinusSrcAlphaFactor:Aa,OneMinusSrcColorFactor:tl,OrthographicCamera:Ba,P3Primaries:Cn,PCFShadowMap:fr,PCFSoftShadowMap:ur,PMREMGenerator:or,PerspectiveCamera:zt,Plane:ts,PlaneGeometry:Hn,PointLight:bc,Quaternion:Ss,RED_GREEN_RGTC2_Format:tr,RED_RGTC1_Format:Dl,REVISION:Da,RGBADepthPacking:Fl,RGBAFormat:Ut,RGBAIntegerFormat:br,RGBA_ASTC_10x10_Format:$i,RGBA_ASTC_10x5_Format:qi,RGBA_ASTC_10x6_Format:Yi,RGBA_ASTC_10x8_Format:ji,RGBA_ASTC_12x10_Format:Ki,RGBA_ASTC_12x12_Format:Zi,RGBA_ASTC_4x4_Format:Ni,RGBA_ASTC_5x4_Format:Oi,RGBA_ASTC_5x5_Format:Bi,RGBA_ASTC_6x5_Format:Hi,RGBA_ASTC_6x6_Format:Gi,RGBA_ASTC_8x5_Format:Vi,RGBA_ASTC_8x6_Format:Wi,RGBA_ASTC_8x8_Format:Xi,RGBA_BPTC_Format:Ma,RGBA_ETC2_EAC_Format:Ii,RGBA_PVRTC_2BPPV1_Format:Ui,RGBA_PVRTC_4BPPV1_Format:Di,RGBA_S3TC_DXT1_Format:wa,RGBA_S3TC_DXT3_Format:Sa,RGBA_S3TC_DXT5_Format:ya,RGB_BPTC_SIGNED_Format:Ji,RGB_BPTC_UNSIGNED_Format:Qi,RGB_ETC1_Format:Rr,RGB_ETC2_Format:Fi,RGB_PVRTC_2BPPV1_Format:Pi,RGB_PVRTC_4BPPV1_Format:Ci,RGB_S3TC_DXT1_Format:Ra,RGFormat:Pl,RGIntegerFormat:xr,Ray:Na,Rec709Primaries:Ln,RedFormat:Cl,RedIntegerFormat:vr,ReinhardToneMapping:Rl,RenderTarget:Yl,RepeatWrapping:bs,ReverseSubtractEquation:Zo,SIGNED_RED_GREEN_RGTC2_Format:sr,SIGNED_RED_RGTC1_Format:er,SRGBColorSpace:at,SRGBTransfer:$e,Scene:hc,ShaderChunk:Ne,ShaderLib:Ot,ShaderMaterial:ys,ShortType:Al,Source:Tr,Sphere:On,Spherical:hr,SrcAlphaFactor:Ta,SrcAlphaSaturateFactor:rl,SrcColorFactor:el,StaticDrawUsage:ar,SubtractEquation:Ko,SubtractiveBlending:Ti,TOUCH:Cs,TangentSpaceNormalMap:Sr,Texture:wt,TextureLoader:Nr,Triangle:At,UVMapping:gr,Uint16BufferAttribute:kr,Uint32BufferAttribute:Lr,UniformsLib:re,UniformsUtils:Zl,UnsignedByteType:rs,UnsignedInt248Type:_s,UnsignedIntType:ss,UnsignedShort4444Type:pr,UnsignedShort5551Type:_r,UnsignedShortType:Fa,VSMShadowMap:Wt,Vector2:ke,Vector3:L,Vector4:Ze,WebGL1Renderer:dc,WebGLCoordinateSystem:qt,WebGLCubeRenderTarget:Ql,WebGLRenderTarget:ws,WebGLRenderer:Fr,WebGLUtils:lc,WebGPUCoordinateSystem:Pn,ZeroFactor:Jo,_SRGBAFormat:Ca,createCanvasElement:ql,sRGBEncoding:xs},Symbol.toStringTag,{value:"Module"})),Oo={type:"change"},wi={type:"start"},Bo={type:"end"},_a=new Na,Ho=new ts,Xg=Math.cos(70*Rs.DEG2RAD);class qg extends Ms{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xt.ROTATE,MIDDLE:Xt.DOLLY,RIGHT:Xt.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",Se),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Se),this._domElementKeyEvents=null},this.saveState=function(){s.target0.copy(s.target),s.position0.copy(s.object.position),s.zoom0=s.object.zoom},this.reset=function(){s.target.copy(s.target0),s.object.position.copy(s.position0),s.object.zoom=s.zoom0,s.object.updateProjectionMatrix(),s.dispatchEvent(Oo),s.update(),i=a.NONE},this.update=function(){const M=new L,se=new Ss().setFromUnitVectors(e.up,new L(0,1,0)),_e=se.clone().invert(),fe=new L,Q=new Ss,A=new L,ne=2*Math.PI;return function(Me=null){const we=s.object.position;M.copy(we).sub(s.target),M.applyQuaternion(se),r.setFromVector3(M),s.autoRotate&&i===a.NONE&&D(y(Me)),s.enableDamping?(r.theta+=l.theta*s.dampingFactor,r.phi+=l.phi*s.dampingFactor):(r.theta+=l.theta,r.phi+=l.phi);let We=s.minAzimuthAngle,Xe=s.maxAzimuthAngle;isFinite(We)&&isFinite(Xe)&&(We<-Math.PI?We+=ne:We>Math.PI&&(We-=ne),Xe<-Math.PI?Xe+=ne:Xe>Math.PI&&(Xe-=ne),We<=Xe?r.theta=Math.max(We,Math.min(Xe,r.theta)):r.theta=r.theta>(We+Xe)/2?Math.max(We,r.theta):Math.min(Xe,r.theta)),r.phi=Math.max(s.minPolarAngle,Math.min(s.maxPolarAngle,r.phi)),r.makeSafe(),s.enableDamping===!0?s.target.addScaledVector(d,s.dampingFactor):s.target.add(d),s.target.sub(s.cursor),s.target.clampLength(s.minTargetRadius,s.maxTargetRadius),s.target.add(s.cursor),s.zoomToCursor&&z||s.object.isOrthographicCamera?r.radius=$(r.radius):r.radius=$(r.radius*c),M.setFromSpherical(r),M.applyQuaternion(_e),we.copy(s.target).add(M),s.object.lookAt(s.target),s.enableDamping===!0?(l.theta*=1-s.dampingFactor,l.phi*=1-s.dampingFactor,d.multiplyScalar(1-s.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let Qe=!1;if(s.zoomToCursor&&z){let st=null;if(s.object.isPerspectiveCamera){const qe=M.length();st=$(qe*c);const it=qe-st;s.object.position.addScaledVector(E,it),s.object.updateMatrixWorld()}else if(s.object.isOrthographicCamera){const qe=new L(C.x,C.y,0);qe.unproject(s.object),s.object.zoom=Math.max(s.minZoom,Math.min(s.maxZoom,s.object.zoom/c)),s.object.updateProjectionMatrix(),Qe=!0;const it=new L(C.x,C.y,0);it.unproject(s.object),s.object.position.sub(it).add(qe),s.object.updateMatrixWorld(),st=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),s.zoomToCursor=!1;st!==null&&(this.screenSpacePanning?s.target.set(0,0,-1).transformDirection(s.object.matrix).multiplyScalar(st).add(s.object.position):(_a.origin.copy(s.object.position),_a.direction.set(0,0,-1).transformDirection(s.object.matrix),Math.abs(s.object.up.dot(_a.direction))<Xg?e.lookAt(s.target):(Ho.setFromNormalAndCoplanarPoint(s.object.up,s.target),_a.intersectPlane(Ho,s.target))))}else s.object.isOrthographicCamera&&(s.object.zoom=Math.max(s.minZoom,Math.min(s.maxZoom,s.object.zoom/c)),s.object.updateProjectionMatrix(),Qe=!0);return c=1,z=!1,Qe||fe.distanceToSquared(s.object.position)>o||8*(1-Q.dot(s.object.quaternion))>o||A.distanceToSquared(s.target)>0?(s.dispatchEvent(Oo),fe.copy(s.object.position),Q.copy(s.object.quaternion),A.copy(s.target),!0):!1}}(),this.dispose=function(){s.domElement.removeEventListener("contextmenu",Ye),s.domElement.removeEventListener("pointerdown",w),s.domElement.removeEventListener("pointercancel",F),s.domElement.removeEventListener("wheel",te),s.domElement.removeEventListener("pointermove",v),s.domElement.removeEventListener("pointerup",F),s._domElementKeyEvents!==null&&(s._domElementKeyEvents.removeEventListener("keydown",Se),s._domElementKeyEvents=null)};const s=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let i=a.NONE;const o=1e-6,r=new hr,l=new hr;let c=1;const d=new L,f=new ke,u=new ke,m=new ke,p=new ke,_=new ke,g=new ke,h=new ke,S=new ke,b=new ke,E=new L,C=new ke;let z=!1;const T=[],W={};let R=!1;function y(M){return M!==null?2*Math.PI/60*s.autoRotateSpeed*M:2*Math.PI/60/60*s.autoRotateSpeed}function H(M){const se=Math.abs(M*.01);return Math.pow(.95,s.zoomSpeed*se)}function D(M){l.theta-=M}function X(M){l.phi-=M}const k=function(){const M=new L;return function(_e,fe){M.setFromMatrixColumn(fe,0),M.multiplyScalar(-_e),d.add(M)}}(),U=function(){const M=new L;return function(_e,fe){s.screenSpacePanning===!0?M.setFromMatrixColumn(fe,1):(M.setFromMatrixColumn(fe,0),M.crossVectors(s.object.up,M)),M.multiplyScalar(_e),d.add(M)}}(),G=function(){const M=new L;return function(_e,fe){const Q=s.domElement;if(s.object.isPerspectiveCamera){const A=s.object.position;M.copy(A).sub(s.target);let ne=M.length();ne*=Math.tan(s.object.fov/2*Math.PI/180),k(2*_e*ne/Q.clientHeight,s.object.matrix),U(2*fe*ne/Q.clientHeight,s.object.matrix)}else s.object.isOrthographicCamera?(k(_e*(s.object.right-s.object.left)/s.object.zoom/Q.clientWidth,s.object.matrix),U(fe*(s.object.top-s.object.bottom)/s.object.zoom/Q.clientHeight,s.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),s.enablePan=!1)}}();function Y(M){s.object.isPerspectiveCamera||s.object.isOrthographicCamera?c/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),s.enableZoom=!1)}function q(M){s.object.isPerspectiveCamera||s.object.isOrthographicCamera?c*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),s.enableZoom=!1)}function j(M,se){if(!s.zoomToCursor)return;z=!0;const _e=s.domElement.getBoundingClientRect(),fe=M-_e.left,Q=se-_e.top,A=_e.width,ne=_e.height;C.x=fe/A*2-1,C.y=-(Q/ne)*2+1,E.set(C.x,C.y,1).unproject(s.object).sub(s.object.position).normalize()}function $(M){return Math.max(s.minDistance,Math.min(s.maxDistance,M))}function ae(M){f.set(M.clientX,M.clientY)}function ie(M){j(M.clientX,M.clientX),h.set(M.clientX,M.clientY)}function V(M){p.set(M.clientX,M.clientY)}function K(M){u.set(M.clientX,M.clientY),m.subVectors(u,f).multiplyScalar(s.rotateSpeed);const se=s.domElement;D(2*Math.PI*m.x/se.clientHeight),X(2*Math.PI*m.y/se.clientHeight),f.copy(u),s.update()}function ce(M){S.set(M.clientX,M.clientY),b.subVectors(S,h),b.y>0?Y(H(b.y)):b.y<0&&q(H(b.y)),h.copy(S),s.update()}function ve(M){_.set(M.clientX,M.clientY),g.subVectors(_,p).multiplyScalar(s.panSpeed),G(g.x,g.y),p.copy(_),s.update()}function pe(M){j(M.clientX,M.clientY),M.deltaY<0?q(H(M.deltaY)):M.deltaY>0&&Y(H(M.deltaY)),s.update()}function Le(M){let se=!1;switch(M.code){case s.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?X(2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):G(0,s.keyPanSpeed),se=!0;break;case s.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?X(-2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):G(0,-s.keyPanSpeed),se=!0;break;case s.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?D(2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):G(s.keyPanSpeed,0),se=!0;break;case s.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?D(-2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):G(-s.keyPanSpeed,0),se=!0;break}se&&(M.preventDefault(),s.update())}function Ce(M){if(T.length===1)f.set(M.pageX,M.pageY);else{const se=de(M),_e=.5*(M.pageX+se.x),fe=.5*(M.pageY+se.y);f.set(_e,fe)}}function ye(M){if(T.length===1)p.set(M.pageX,M.pageY);else{const se=de(M),_e=.5*(M.pageX+se.x),fe=.5*(M.pageY+se.y);p.set(_e,fe)}}function Ve(M){const se=de(M),_e=M.pageX-se.x,fe=M.pageY-se.y,Q=Math.sqrt(_e*_e+fe*fe);h.set(0,Q)}function I(M){s.enableZoom&&Ve(M),s.enablePan&&ye(M)}function ut(M){s.enableZoom&&Ve(M),s.enableRotate&&Ce(M)}function Re(M){if(T.length==1)u.set(M.pageX,M.pageY);else{const _e=de(M),fe=.5*(M.pageX+_e.x),Q=.5*(M.pageY+_e.y);u.set(fe,Q)}m.subVectors(u,f).multiplyScalar(s.rotateSpeed);const se=s.domElement;D(2*Math.PI*m.x/se.clientHeight),X(2*Math.PI*m.y/se.clientHeight),f.copy(u)}function Te(M){if(T.length===1)_.set(M.pageX,M.pageY);else{const se=de(M),_e=.5*(M.pageX+se.x),fe=.5*(M.pageY+se.y);_.set(_e,fe)}g.subVectors(_,p).multiplyScalar(s.panSpeed),G(g.x,g.y),p.copy(_)}function ge(M){const se=de(M),_e=M.pageX-se.x,fe=M.pageY-se.y,Q=Math.sqrt(_e*_e+fe*fe);S.set(0,Q),b.set(0,Math.pow(S.y/h.y,s.zoomSpeed)),Y(b.y),h.copy(S);const A=(M.pageX+se.x)*.5,ne=(M.pageY+se.y)*.5;j(A,ne)}function Ke(M){s.enableZoom&&ge(M),s.enablePan&&Te(M)}function Ue(M){s.enableZoom&&ge(M),s.enableRotate&&Re(M)}function w(M){s.enabled!==!1&&(T.length===0&&(s.domElement.setPointerCapture(M.pointerId),s.domElement.addEventListener("pointermove",v),s.domElement.addEventListener("pointerup",F)),Oe(M),M.pointerType==="touch"?Fe(M):ee(M))}function v(M){s.enabled!==!1&&(M.pointerType==="touch"?Z(M):J(M))}function F(M){Ae(M),T.length===0&&(s.domElement.releasePointerCapture(M.pointerId),s.domElement.removeEventListener("pointermove",v),s.domElement.removeEventListener("pointerup",F)),s.dispatchEvent(Bo),i=a.NONE}function ee(M){let se;switch(M.button){case 0:se=s.mouseButtons.LEFT;break;case 1:se=s.mouseButtons.MIDDLE;break;case 2:se=s.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Xt.DOLLY:if(s.enableZoom===!1)return;ie(M),i=a.DOLLY;break;case Xt.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(s.enablePan===!1)return;V(M),i=a.PAN}else{if(s.enableRotate===!1)return;ae(M),i=a.ROTATE}break;case Xt.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(s.enableRotate===!1)return;ae(M),i=a.ROTATE}else{if(s.enablePan===!1)return;V(M),i=a.PAN}break;default:i=a.NONE}i!==a.NONE&&s.dispatchEvent(wi)}function J(M){switch(i){case a.ROTATE:if(s.enableRotate===!1)return;K(M);break;case a.DOLLY:if(s.enableZoom===!1)return;ce(M);break;case a.PAN:if(s.enablePan===!1)return;ve(M);break}}function te(M){s.enabled===!1||s.enableZoom===!1||i!==a.NONE||(M.preventDefault(),s.dispatchEvent(wi),pe(me(M)),s.dispatchEvent(Bo))}function me(M){const se=M.deltaMode,_e={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(se){case 1:_e.deltaY*=16;break;case 2:_e.deltaY*=100;break}return M.ctrlKey&&!R&&(_e.deltaY*=10),_e}function le(M){M.key==="Control"&&(R=!0,document.addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(M){M.key==="Control"&&(R=!1,document.removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function Se(M){s.enabled===!1||s.enablePan===!1||Le(M)}function Fe(M){switch(be(M),T.length){case 1:switch(s.touches.ONE){case Cs.ROTATE:if(s.enableRotate===!1)return;Ce(M),i=a.TOUCH_ROTATE;break;case Cs.PAN:if(s.enablePan===!1)return;ye(M),i=a.TOUCH_PAN;break;default:i=a.NONE}break;case 2:switch(s.touches.TWO){case Cs.DOLLY_PAN:if(s.enableZoom===!1&&s.enablePan===!1)return;I(M),i=a.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(s.enableZoom===!1&&s.enableRotate===!1)return;ut(M),i=a.TOUCH_DOLLY_ROTATE;break;default:i=a.NONE}break;default:i=a.NONE}i!==a.NONE&&s.dispatchEvent(wi)}function Z(M){switch(be(M),i){case a.TOUCH_ROTATE:if(s.enableRotate===!1)return;Re(M),s.update();break;case a.TOUCH_PAN:if(s.enablePan===!1)return;Te(M),s.update();break;case a.TOUCH_DOLLY_PAN:if(s.enableZoom===!1&&s.enablePan===!1)return;Ke(M),s.update();break;case a.TOUCH_DOLLY_ROTATE:if(s.enableZoom===!1&&s.enableRotate===!1)return;Ue(M),s.update();break;default:i=a.NONE}}function Ye(M){s.enabled!==!1&&M.preventDefault()}function Oe(M){T.push(M.pointerId)}function Ae(M){delete W[M.pointerId];for(let se=0;se<T.length;se++)if(T[se]==M.pointerId){T.splice(se,1);return}}function be(M){let se=W[M.pointerId];se===void 0&&(se=new ke,W[M.pointerId]=se),se.set(M.pageX,M.pageY)}function de(M){const se=M.pointerId===T[0]?T[1]:T[0];return W[se]}s.domElement.addEventListener("contextmenu",Ye),s.domElement.addEventListener("pointerdown",w),s.domElement.addEventListener("pointercancel",F),s.domElement.addEventListener("wheel",te,{passive:!1}),document.addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}const Yg="Hearthstead",jg=108,$g=90,Kg=["dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","dirt","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","dirt","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","dirt","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","dirt","marsh","marsh","marsh","water","water","water","water","water","water","water","water","water","water","water","water","water","marsh","marsh","marsh","marsh","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","dirt","marsh","marsh","marsh","water","water","water","water","water","water","water","water","water","water","water","water","water","marsh","marsh","marsh","marsh","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","dirt","marsh","marsh","marsh","water","water","water","water","water","water","water","water","water","water","water","water","water","marsh","marsh","marsh","marsh","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","dirt","marsh","marsh","marsh","water","water","water","water","water","water","water","water","water","water","water","water","water","marsh","marsh","marsh","marsh","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","dirt","marsh","marsh","marsh","water","water","water","water","water","water","water","water","water","water","water","water","water","marsh","marsh","marsh","marsh","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","dirt","marsh","marsh","marsh","water","water","water","water","water","water","water","water","water","water","water","water","water","marsh","marsh","marsh","marsh","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","dirt","marsh","marsh","marsh","water","water","water","water","water","water","water","water","water","water","water","water","water","marsh","marsh","marsh","marsh","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","dirt","marsh","marsh","marsh","water","water","water","water","water","water","water","water","water","water","water","water","water","marsh","marsh","marsh","marsh","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","grass","marsh","marsh","marsh","water","water","water","water","water","water","water","water","water","water","water","water","water","marsh","marsh","marsh","marsh","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","grass","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","grass","grass","grass","grass","grass","stream","stream","stream","stream","stream","stream","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","grass","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","marsh","mud","mud","mud","mud","mud","mud","mud","mud","mud","mud","mud","mud","stream","stream","stream","stream","stream","stream","mud","mud","mud","mud","mud","mud","mud","mud","mud","mud","mud","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","sand","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","stream","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","mud","mud","mud","mud","mud","mud","mud","mud","mud","mud","mud","mud","stream","stream","stream","stream","stream","stream","mud","mud","mud","mud","mud","mud","mud","mud","mud","mud","mud","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","dirt","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","dirt","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","dirt","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","dirt","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","dirt","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","grass","grass","grass","grass","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","grass","grass","grass","grass","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","grass","grass","grass","grass","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","grass","grass","grass","grass","grass","grass","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","grass","grass","grass","grass","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","grass","grass","grass","grass","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","grass","grass","grass","grass","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","grass","grass","grass","grass","grass","grass","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","grass","grass","grass","grass","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","grass","grass","grass","grass","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","grass","grass","grass","grass","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","grass","grass","grass","grass","grass","grass","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","grass","grass","grass","grass","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","grass","grass","grass","grass","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","grass","grass","grass","grass","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","grass","grass","grass","grass","grass","grass","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","grass","grass","grass","grass","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","grass","grass","grass","grass","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","grass","grass","grass","grass","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","grass","grass","grass","grass","grass","grass","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","grass","grass","grass","grass","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","grass","grass","grass","grass","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","grass","grass","grass","grass","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","grass","grass","grass","grass","grass","grass","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","grass","grass","grass","grass","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","grass","grass","grass","grass","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","grass","grass","grass","grass","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","grass","grass","grass","grass","grass","grass","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","grass","grass","grass","grass","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","grass","grass","grass","grass","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","grass","grass","grass","grass","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","grass","grass","grass","grass","grass","grass","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","grass","grass","grass","grass","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","grass","grass","grass","grass","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","grass","grass","grass","grass","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","grass","grass","grass","grass","grass","grass","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","grass","grass","grass","grass","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","concrete","grass","grass","grass","grass","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","grass","grass","grass","grass","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","sterile","grass","grass","grass","grass","grass","grass","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","grass","grass","grass","grass","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","woodFloor","grass","grass","grass","grass","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","dirt","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","flagstone","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","carpet","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","grass","grass","grass","grass","grass","grass","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","grass","grass","grass","grass","grass","grass","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","grass","grass","grass","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","grass","grass","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","grass","grass","grass","grass","grass","grass","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","grass","grass","grass","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","grass","grass","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","grass","grass","grass","grass","grass","grass","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","grass","grass","grass","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","grass","grass","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","grass","grass","grass","grass","grass","grass","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","grass","grass","grass","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","grass","grass","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","grass","grass","grass","grass","grass","grass","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","stoneTile","grass","grass","grass","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","grass","grass","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","roughHewn","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","smoothStone","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","metalFloor","metalFloor","metalFloor","metalFloor","metalFloor","metalFloor","metalFloor","paved","paved","paved","paved","paved","paved","grass","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","metalFloor","metalFloor","metalFloor","metalFloor","metalFloor","metalFloor","metalFloor","paved","paved","paved","paved","paved","paved","grass","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","metalFloor","metalFloor","metalFloor","metalFloor","metalFloor","metalFloor","metalFloor","paved","paved","paved","paved","paved","paved","grass","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","metalFloor","metalFloor","metalFloor","metalFloor","metalFloor","metalFloor","metalFloor","paved","paved","paved","paved","paved","paved","grass","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","metalFloor","metalFloor","metalFloor","metalFloor","metalFloor","metalFloor","metalFloor","paved","paved","paved","paved","paved","paved","grass","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","grass","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","paved","grass","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","roughStone","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","ice","grass","grass","grass","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grassRich","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","grass","grass","grass","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","grass","grass","grass","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","grass","grass","grass","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","grass","grass","grass","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","gravel","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","soilRich","grass","grass","grass","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","soil","grass","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss","moss"],Zg=[{x:2,z:26,kind:"planks"},{x:3,z:26,kind:"planks"},{x:4,z:26,kind:"planks"},{x:5,z:26,kind:"planks"},{x:6,z:26,kind:"planks"},{x:7,z:26,kind:"planks"},{x:8,z:26,kind:"planks"},{x:9,z:26,kind:"planks"},{x:11,z:26,kind:"planks"},{x:12,z:26,kind:"planks"},{x:13,z:26,kind:"planks"},{x:14,z:26,kind:"planks"},{x:15,z:26,kind:"planks"},{x:16,z:26,kind:"planks"},{x:17,z:26,kind:"planks"},{x:2,z:27,kind:"planks"},{x:17,z:27,kind:"planks"},{x:2,z:28,kind:"planks"},{x:17,z:28,kind:"planks"},{x:2,z:29,kind:"planks"},{x:17,z:29,kind:"planks"},{x:2,z:30,kind:"planks"},{x:17,z:30,kind:"planks"},{x:2,z:31,kind:"planks"},{x:17,z:31,kind:"planks"},{x:2,z:32,kind:"planks"},{x:17,z:32,kind:"planks"},{x:2,z:33,kind:"planks"},{x:17,z:33,kind:"planks"},{x:2,z:34,kind:"planks"},{x:17,z:34,kind:"planks"},{x:2,z:35,kind:"planks"},{x:17,z:35,kind:"planks"},{x:2,z:36,kind:"planks"},{x:17,z:36,kind:"planks"},{x:2,z:37,kind:"planks"},{x:17,z:37,kind:"planks"},{x:2,z:38,kind:"planks"},{x:17,z:38,kind:"planks"},{x:2,z:39,kind:"planks"},{x:3,z:39,kind:"planks"},{x:4,z:39,kind:"planks"},{x:5,z:39,kind:"planks"},{x:6,z:39,kind:"planks"},{x:7,z:39,kind:"planks"},{x:8,z:39,kind:"planks"},{x:9,z:39,kind:"planks"},{x:10,z:39,kind:"planks"},{x:11,z:39,kind:"planks"},{x:12,z:39,kind:"planks"},{x:13,z:39,kind:"planks"},{x:14,z:39,kind:"planks"},{x:15,z:39,kind:"planks"},{x:16,z:39,kind:"planks"},{x:17,z:39,kind:"planks"},{x:20,z:26,kind:"bricks"},{x:21,z:26,kind:"bricks"},{x:22,z:26,kind:"bricks"},{x:23,z:26,kind:"bricks"},{x:24,z:26,kind:"bricks"},{x:25,z:26,kind:"bricks"},{x:26,z:26,kind:"bricks"},{x:27,z:26,kind:"bricks"},{x:28,z:26,kind:"bricks"},{x:29,z:26,kind:"bricks"},{x:30,z:26,kind:"bricks"},{x:31,z:26,kind:"bricks"},{x:33,z:26,kind:"bricks"},{x:34,z:26,kind:"bricks"},{x:35,z:26,kind:"bricks"},{x:36,z:26,kind:"bricks"},{x:37,z:26,kind:"bricks"},{x:38,z:26,kind:"bricks"},{x:39,z:26,kind:"bricks"},{x:40,z:26,kind:"bricks"},{x:41,z:26,kind:"bricks"},{x:42,z:26,kind:"bricks"},{x:43,z:26,kind:"bricks"},{x:20,z:27,kind:"bricks"},{x:43,z:27,kind:"bricks"},{x:20,z:28,kind:"bricks"},{x:43,z:28,kind:"bricks"},{x:20,z:29,kind:"bricks"},{x:43,z:29,kind:"bricks"},{x:20,z:30,kind:"bricks"},{x:43,z:30,kind:"bricks"},{x:20,z:31,kind:"bricks"},{x:43,z:31,kind:"bricks"},{x:20,z:32,kind:"bricks"},{x:43,z:32,kind:"bricks"},{x:20,z:33,kind:"bricks"},{x:43,z:33,kind:"bricks"},{x:20,z:34,kind:"bricks"},{x:43,z:34,kind:"bricks"},{x:20,z:35,kind:"bricks"},{x:43,z:35,kind:"bricks"},{x:20,z:36,kind:"bricks"},{x:43,z:36,kind:"bricks"},{x:20,z:37,kind:"bricks"},{x:43,z:37,kind:"bricks"},{x:20,z:38,kind:"bricks"},{x:43,z:38,kind:"bricks"},{x:20,z:39,kind:"bricks"},{x:43,z:39,kind:"bricks"},{x:20,z:40,kind:"bricks"},{x:43,z:40,kind:"bricks"},{x:20,z:41,kind:"bricks"},{x:21,z:41,kind:"bricks"},{x:22,z:41,kind:"bricks"},{x:23,z:41,kind:"bricks"},{x:24,z:41,kind:"bricks"},{x:25,z:41,kind:"bricks"},{x:26,z:41,kind:"bricks"},{x:27,z:41,kind:"bricks"},{x:28,z:41,kind:"bricks"},{x:29,z:41,kind:"bricks"},{x:30,z:41,kind:"bricks"},{x:31,z:41,kind:"bricks"},{x:32,z:41,kind:"bricks"},{x:33,z:41,kind:"bricks"},{x:34,z:41,kind:"bricks"},{x:35,z:41,kind:"bricks"},{x:36,z:41,kind:"bricks"},{x:37,z:41,kind:"bricks"},{x:38,z:41,kind:"bricks"},{x:39,z:41,kind:"bricks"},{x:40,z:41,kind:"bricks"},{x:41,z:41,kind:"bricks"},{x:42,z:41,kind:"bricks"},{x:43,z:41,kind:"bricks"},{x:56,z:26,kind:"rock"},{x:57,z:26,kind:"rock"},{x:58,z:26,kind:"rock"},{x:59,z:26,kind:"rock"},{x:60,z:26,kind:"rock"},{x:61,z:26,kind:"rock"},{x:62,z:26,kind:"rock"},{x:64,z:26,kind:"rock"},{x:65,z:26,kind:"rock"},{x:66,z:26,kind:"rock"},{x:67,z:26,kind:"rock"},{x:68,z:26,kind:"rock"},{x:69,z:26,kind:"rock"},{x:56,z:27,kind:"rock"},{x:69,z:27,kind:"rock"},{x:56,z:28,kind:"rock"},{x:69,z:28,kind:"rock"},{x:56,z:29,kind:"rock"},{x:69,z:29,kind:"rock"},{x:56,z:30,kind:"rock"},{x:69,z:30,kind:"rock"},{x:56,z:31,kind:"rock"},{x:69,z:31,kind:"rock"},{x:56,z:32,kind:"rock"},{x:69,z:32,kind:"rock"},{x:56,z:33,kind:"rock"},{x:69,z:33,kind:"rock"},{x:56,z:34,kind:"rock"},{x:69,z:34,kind:"rock"},{x:56,z:35,kind:"rock"},{x:69,z:35,kind:"rock"},{x:56,z:36,kind:"rock"},{x:69,z:36,kind:"rock"},{x:56,z:37,kind:"rock"},{x:57,z:37,kind:"rock"},{x:58,z:37,kind:"rock"},{x:59,z:37,kind:"rock"},{x:60,z:37,kind:"rock"},{x:61,z:37,kind:"rock"},{x:62,z:37,kind:"rock"},{x:63,z:37,kind:"rock"},{x:64,z:37,kind:"rock"},{x:65,z:37,kind:"rock"},{x:66,z:37,kind:"rock"},{x:67,z:37,kind:"rock"},{x:68,z:37,kind:"rock"},{x:69,z:37,kind:"rock"},{x:72,z:26,kind:"stone"},{x:73,z:26,kind:"stone"},{x:74,z:26,kind:"stone"},{x:75,z:26,kind:"stone"},{x:76,z:26,kind:"stone"},{x:77,z:26,kind:"stone"},{x:78,z:26,kind:"stone"},{x:79,z:26,kind:"stone"},{x:80,z:26,kind:"stone"},{x:82,z:26,kind:"stone"},{x:83,z:26,kind:"stone"},{x:84,z:26,kind:"stone"},{x:85,z:26,kind:"stone"},{x:86,z:26,kind:"stone"},{x:87,z:26,kind:"stone"},{x:88,z:26,kind:"stone"},{x:89,z:26,kind:"stone"},{x:72,z:27,kind:"stone"},{x:89,z:27,kind:"stone"},{x:72,z:28,kind:"stone"},{x:89,z:28,kind:"stone"},{x:72,z:29,kind:"stone"},{x:89,z:29,kind:"stone"},{x:72,z:30,kind:"stone"},{x:89,z:30,kind:"stone"},{x:72,z:31,kind:"stone"},{x:89,z:31,kind:"stone"},{x:72,z:32,kind:"stone"},{x:89,z:32,kind:"stone"},{x:72,z:33,kind:"stone"},{x:89,z:33,kind:"stone"},{x:72,z:34,kind:"stone"},{x:89,z:34,kind:"stone"},{x:72,z:35,kind:"stone"},{x:89,z:35,kind:"stone"},{x:72,z:36,kind:"stone"},{x:89,z:36,kind:"stone"},{x:72,z:37,kind:"stone"},{x:89,z:37,kind:"stone"},{x:72,z:38,kind:"stone"},{x:89,z:38,kind:"stone"},{x:72,z:39,kind:"stone"},{x:89,z:39,kind:"stone"},{x:72,z:40,kind:"stone"},{x:89,z:40,kind:"stone"},{x:72,z:41,kind:"stone"},{x:73,z:41,kind:"stone"},{x:74,z:41,kind:"stone"},{x:75,z:41,kind:"stone"},{x:76,z:41,kind:"stone"},{x:77,z:41,kind:"stone"},{x:78,z:41,kind:"stone"},{x:79,z:41,kind:"stone"},{x:80,z:41,kind:"stone"},{x:81,z:41,kind:"stone"},{x:82,z:41,kind:"stone"},{x:83,z:41,kind:"stone"},{x:84,z:41,kind:"stone"},{x:85,z:41,kind:"stone"},{x:86,z:41,kind:"stone"},{x:87,z:41,kind:"stone"},{x:88,z:41,kind:"stone"},{x:89,z:41,kind:"stone"},{x:92,z:26,kind:"metal"},{x:93,z:26,kind:"metal"},{x:94,z:26,kind:"metal"},{x:95,z:26,kind:"metal"},{x:96,z:26,kind:"metal"},{x:97,z:26,kind:"metal"},{x:98,z:26,kind:"metal"},{x:100,z:26,kind:"metal"},{x:101,z:26,kind:"metal"},{x:102,z:26,kind:"metal"},{x:103,z:26,kind:"metal"},{x:104,z:26,kind:"metal"},{x:105,z:26,kind:"metal"},{x:92,z:27,kind:"metal"},{x:105,z:27,kind:"metal"},{x:92,z:28,kind:"metal"},{x:105,z:28,kind:"metal"},{x:92,z:29,kind:"metal"},{x:105,z:29,kind:"metal"},{x:92,z:30,kind:"metal"},{x:105,z:30,kind:"metal"},{x:92,z:31,kind:"metal"},{x:105,z:31,kind:"metal"},{x:92,z:32,kind:"metal"},{x:105,z:32,kind:"metal"},{x:92,z:33,kind:"metal"},{x:105,z:33,kind:"metal"},{x:92,z:34,kind:"metal"},{x:105,z:34,kind:"metal"},{x:92,z:35,kind:"metal"},{x:105,z:35,kind:"metal"},{x:92,z:36,kind:"metal"},{x:105,z:36,kind:"metal"},{x:92,z:37,kind:"metal"},{x:93,z:37,kind:"metal"},{x:94,z:37,kind:"metal"},{x:95,z:37,kind:"metal"},{x:96,z:37,kind:"metal"},{x:97,z:37,kind:"metal"},{x:98,z:37,kind:"metal"},{x:99,z:37,kind:"metal"},{x:100,z:37,kind:"metal"},{x:101,z:37,kind:"metal"},{x:102,z:37,kind:"metal"},{x:103,z:37,kind:"metal"},{x:104,z:37,kind:"metal"},{x:105,z:37,kind:"metal"},{x:92,z:40,kind:"rockOre"},{x:93,z:40,kind:"rockOre"},{x:94,z:40,kind:"rockOre"},{x:95,z:40,kind:"rockOre"},{x:96,z:40,kind:"rockOre"},{x:97,z:40,kind:"rockOre"},{x:98,z:40,kind:"rockOre"},{x:100,z:40,kind:"rockOre"},{x:101,z:40,kind:"rockOre"},{x:102,z:40,kind:"rockOre"},{x:103,z:40,kind:"rockOre"},{x:104,z:40,kind:"rockOre"},{x:105,z:40,kind:"rockOre"},{x:92,z:41,kind:"rockOre"},{x:105,z:41,kind:"rockOre"},{x:92,z:42,kind:"rockOre"},{x:105,z:42,kind:"rockOre"},{x:92,z:43,kind:"rockOre"},{x:105,z:43,kind:"rockOre"},{x:92,z:44,kind:"rockOre"},{x:105,z:44,kind:"rockOre"},{x:92,z:45,kind:"rockOre"},{x:105,z:45,kind:"rockOre"},{x:92,z:46,kind:"rockOre"},{x:105,z:46,kind:"rockOre"},{x:92,z:47,kind:"rockOre"},{x:105,z:47,kind:"rockOre"},{x:92,z:48,kind:"rockOre"},{x:105,z:48,kind:"rockOre"},{x:92,z:49,kind:"rockOre"},{x:93,z:49,kind:"rockOre"},{x:94,z:49,kind:"rockOre"},{x:95,z:49,kind:"rockOre"},{x:96,z:49,kind:"rockOre"},{x:97,z:49,kind:"rockOre"},{x:98,z:49,kind:"rockOre"},{x:99,z:49,kind:"rockOre"},{x:100,z:49,kind:"rockOre"},{x:101,z:49,kind:"rockOre"},{x:102,z:49,kind:"rockOre"},{x:103,z:49,kind:"rockOre"},{x:104,z:49,kind:"rockOre"},{x:105,z:49,kind:"rockOre"},{x:2,z:24,kind:"sandbags"},{x:3,z:24,kind:"sandbags"},{x:4,z:24,kind:"sandbags"},{x:5,z:24,kind:"sandbags"},{x:6,z:24,kind:"sandbags"},{x:7,z:24,kind:"sandbags"},{x:8,z:24,kind:"sandbags"},{x:11,z:24,kind:"sandbags"},{x:12,z:24,kind:"sandbags"},{x:13,z:24,kind:"sandbags"},{x:14,z:24,kind:"sandbags"},{x:15,z:24,kind:"sandbags"},{x:16,z:24,kind:"sandbags"},{x:17,z:24,kind:"sandbags"},{x:18,z:24,kind:"sandbags"},{x:19,z:24,kind:"sandbags"},{x:20,z:24,kind:"sandbags"},{x:21,z:24,kind:"sandbags"},{x:22,z:24,kind:"sandbags"},{x:23,z:24,kind:"sandbags"},{x:24,z:24,kind:"sandbags"},{x:25,z:24,kind:"sandbags"},{x:26,z:24,kind:"sandbags"},{x:27,z:24,kind:"sandbags"},{x:28,z:24,kind:"sandbags"},{x:29,z:24,kind:"sandbags"},{x:30,z:24,kind:"sandbags"},{x:33,z:24,kind:"sandbags"},{x:34,z:24,kind:"sandbags"},{x:35,z:24,kind:"sandbags"},{x:36,z:24,kind:"sandbags"},{x:37,z:24,kind:"sandbags"},{x:38,z:24,kind:"sandbags"},{x:39,z:24,kind:"sandbags"},{x:40,z:24,kind:"sandbags"},{x:41,z:24,kind:"sandbags"},{x:42,z:24,kind:"sandbags"},{x:43,z:24,kind:"sandbags"}],Jg=[{id:"door-cabin",x:10,z:26,stuff:"Wood",facade:"s"},{id:"door-workshop",x:32,z:26,stuff:"Stone",facade:"s"},{id:"door-store",x:63,z:26,stuff:"Stone",facade:"s"},{id:"door-barracks",x:81,z:26,stuff:"Stone",facade:"s"},{id:"door-clinic",x:99,z:26,stuff:"Metal",facade:"s"},{id:"door-mine",x:99,z:40,stuff:"Stone",facade:"s"}],Qg=[{id:"roof-cabin",x:2,z:26,w:16,d:14,style:"terracotta",ridge:"x"},{id:"roof-workshop",x:20,z:26,w:24,d:16,style:"slate",ridge:"x"},{id:"roof-store",x:56,z:26,w:14,d:12,style:"tin",ridge:"z"},{id:"roof-barracks",x:72,z:26,w:18,d:16,style:"thatch",ridge:"x"},{id:"roof-clinic",x:92,z:26,w:14,d:12,style:"tin",ridge:"z"},{id:"roof-mine",x:92,z:40,w:14,d:10,style:"slate",ridge:"x"}],em=[{id:"watermill-1",model:"watermill",x:26,z:16,w:6,d:5,stuff:"Metal"},{id:"wind_turbine-2",model:"wind_turbine",x:57,z:45,w:3,d:2,stuff:"Metal"},{id:"wind_rotor-3",model:"wind_rotor",x:56.5,z:45.5,w:4,y:2.5,blocks:!1,stuff:"Metal"},{id:"campfire-4",model:"campfire",x:24,z:46,blocks:!1},{id:"fx_flame-5",model:"fx_flame",x:26,z:46,scale:.45,y:.05,blocks:!1},{id:"fx_flame_core-6",model:"fx_flame_core",x:26,z:47,scale:.28,y:.15,blocks:!1},{id:"fx_puff-7",model:"fx_puff",x:25,z:47,scale:.4,y:.35,blocks:!1},{id:"turret_mini-8",model:"turret_mini",x:4,z:22,stuff:"Metal"},{id:"turret_gun_mini-9",model:"turret_gun_mini",x:4,z:22,y:.42,blocks:!1,stuff:"Metal"},{id:"turret_auto-10",model:"turret_auto",x:12,z:22,w:2,d:2,stuff:"Metal"},{id:"turret_gun_auto-11",model:"turret_gun_auto",x:12,z:22,w:2,y:.42,blocks:!1,stuff:"Metal"},{id:"turret_mortar-12",model:"turret_mortar",x:20,z:22,stuff:"Metal"},{id:"turret_gun_mortar-13",model:"turret_gun_mortar",x:20,z:22,y:.42,blocks:!1,stuff:"Metal"},{id:"turret_sniper-14",model:"turret_sniper",x:28,z:22,w:2,d:2,stuff:"Metal"},{id:"turret_gun_sniper-15",model:"turret_gun_sniper",x:28,z:22,w:3,y:.42,blocks:!1,stuff:"Metal"},{id:"sandbags_1-16",model:"sandbags_1",x:14,z:22,w:2,blocks:!1},{id:"sandbags_2-17",model:"sandbags_2",x:18,z:21,w:2,blocks:!1},{id:"sandbags_3-18",model:"sandbags_3",x:34,z:22,w:2,blocks:!1},{id:"column-19",model:"column",x:4,z:44,stuff:"Stone"},{id:"column-20",model:"column",x:15,z:44,stuff:"Stone"},{id:"column-21",model:"column",x:4,z:47,stuff:"Stone"},{id:"column-22",model:"column",x:15,z:47,stuff:"Stone"},{id:"bedroll-23",model:"bedroll",x:84,z:29,d:2},{id:"bedroll_double-24",model:"bedroll_double",x:84,z:33,w:2,d:2},{id:"animal_bed-25",model:"animal_bed",x:6,z:61,blocks:!1},{id:"fence_post-26",model:"fence_post",x:2,z:58},{id:"fence_arm-27",model:"fence_arm",x:2,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-28",model:"fence_post",x:2,z:73},{id:"fence_arm-29",model:"fence_arm",x:2,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-30",model:"fence_post",x:3,z:58},{id:"fence_arm-31",model:"fence_arm",x:3,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-32",model:"fence_post",x:3,z:73},{id:"fence_arm-33",model:"fence_arm",x:3,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-34",model:"fence_post",x:4,z:58},{id:"fence_arm-35",model:"fence_arm",x:4,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-36",model:"fence_post",x:4,z:73},{id:"fence_arm-37",model:"fence_arm",x:4,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-38",model:"fence_post",x:5,z:58},{id:"fence_arm-39",model:"fence_arm",x:5,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-40",model:"fence_post",x:5,z:73},{id:"fence_arm-41",model:"fence_arm",x:5,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-42",model:"fence_post",x:6,z:58},{id:"fence_arm-43",model:"fence_arm",x:6,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-44",model:"fence_post",x:6,z:73},{id:"fence_arm-45",model:"fence_arm",x:6,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-46",model:"fence_post",x:7,z:58},{id:"fence_arm-47",model:"fence_arm",x:7,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-48",model:"fence_post",x:7,z:73},{id:"fence_arm-49",model:"fence_arm",x:7,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-50",model:"fence_post",x:8,z:58},{id:"fence_arm-51",model:"fence_arm",x:8,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-52",model:"fence_post",x:8,z:73},{id:"fence_arm-53",model:"fence_arm",x:8,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-54",model:"fence_post",x:9,z:58},{id:"fence_arm-55",model:"fence_arm",x:9,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-56",model:"fence_post",x:9,z:73},{id:"fence_arm-57",model:"fence_arm",x:9,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-58",model:"fence_post",x:10,z:58},{id:"fence_arm-59",model:"fence_arm",x:10,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-60",model:"fence_post",x:10,z:73},{id:"fence_arm-61",model:"fence_arm",x:10,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-62",model:"fence_post",x:11,z:58},{id:"fence_arm-63",model:"fence_arm",x:11,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-64",model:"fence_post",x:11,z:73},{id:"fence_arm-65",model:"fence_arm",x:11,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-66",model:"fence_post",x:12,z:58},{id:"fence_arm-67",model:"fence_arm",x:12,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-68",model:"fence_post",x:12,z:73},{id:"fence_arm-69",model:"fence_arm",x:12,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-70",model:"fence_post",x:13,z:58},{id:"fence_arm-71",model:"fence_arm",x:13,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-72",model:"fence_post",x:13,z:73},{id:"fence_arm-73",model:"fence_arm",x:13,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-74",model:"fence_post",x:14,z:58},{id:"fence_arm-75",model:"fence_arm",x:14,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-76",model:"fence_post",x:14,z:73},{id:"fence_arm-77",model:"fence_arm",x:14,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-78",model:"fence_post",x:15,z:58},{id:"fence_arm-79",model:"fence_arm",x:15,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-80",model:"fence_post",x:15,z:73},{id:"fence_arm-81",model:"fence_arm",x:15,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-82",model:"fence_post",x:16,z:58},{id:"fence_arm-83",model:"fence_arm",x:16,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-84",model:"fence_post",x:16,z:73},{id:"fence_arm-85",model:"fence_arm",x:16,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-86",model:"fence_post",x:17,z:58},{id:"fence_arm-87",model:"fence_arm",x:17,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-88",model:"fence_post",x:17,z:73},{id:"fence_arm-89",model:"fence_arm",x:17,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-90",model:"fence_post",x:18,z:58},{id:"fence_arm-91",model:"fence_arm",x:18,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-92",model:"fence_post",x:18,z:73},{id:"fence_arm-93",model:"fence_arm",x:18,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-94",model:"fence_post",x:19,z:58},{id:"fence_arm-95",model:"fence_arm",x:19,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-96",model:"fence_post",x:19,z:73},{id:"fence_arm-97",model:"fence_arm",x:19,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-98",model:"fence_post",x:20,z:58},{id:"fence_arm-99",model:"fence_arm",x:20,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-100",model:"fence_post",x:20,z:73},{id:"fence_arm-101",model:"fence_arm",x:20,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-102",model:"fence_post",x:21,z:73},{id:"fence_arm-103",model:"fence_arm",x:21,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-104",model:"fence_post",x:22,z:73},{id:"fence_arm-105",model:"fence_arm",x:22,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-106",model:"fence_post",x:23,z:73},{id:"fence_arm-107",model:"fence_arm",x:23,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-108",model:"fence_post",x:24,z:58},{id:"fence_arm-109",model:"fence_arm",x:24,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-110",model:"fence_post",x:24,z:73},{id:"fence_arm-111",model:"fence_arm",x:24,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-112",model:"fence_post",x:25,z:58},{id:"fence_arm-113",model:"fence_arm",x:25,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-114",model:"fence_post",x:25,z:73},{id:"fence_arm-115",model:"fence_arm",x:25,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-116",model:"fence_post",x:26,z:58},{id:"fence_arm-117",model:"fence_arm",x:26,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-118",model:"fence_post",x:26,z:73},{id:"fence_arm-119",model:"fence_arm",x:26,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-120",model:"fence_post",x:27,z:58},{id:"fence_arm-121",model:"fence_arm",x:27,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-122",model:"fence_post",x:27,z:73},{id:"fence_arm-123",model:"fence_arm",x:27,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-124",model:"fence_post",x:28,z:58},{id:"fence_arm-125",model:"fence_arm",x:28,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-126",model:"fence_post",x:28,z:73},{id:"fence_arm-127",model:"fence_arm",x:28,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-128",model:"fence_post",x:29,z:58},{id:"fence_arm-129",model:"fence_arm",x:29,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-130",model:"fence_post",x:29,z:73},{id:"fence_arm-131",model:"fence_arm",x:29,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-132",model:"fence_post",x:30,z:58},{id:"fence_arm-133",model:"fence_arm",x:30,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-134",model:"fence_post",x:30,z:73},{id:"fence_arm-135",model:"fence_arm",x:30,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-136",model:"fence_post",x:31,z:58},{id:"fence_arm-137",model:"fence_arm",x:31,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-138",model:"fence_post",x:31,z:73},{id:"fence_arm-139",model:"fence_arm",x:31,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-140",model:"fence_post",x:32,z:58},{id:"fence_arm-141",model:"fence_arm",x:32,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-142",model:"fence_post",x:32,z:73},{id:"fence_arm-143",model:"fence_arm",x:32,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-144",model:"fence_post",x:33,z:58},{id:"fence_arm-145",model:"fence_arm",x:33,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-146",model:"fence_post",x:33,z:73},{id:"fence_arm-147",model:"fence_arm",x:33,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-148",model:"fence_post",x:34,z:58},{id:"fence_arm-149",model:"fence_arm",x:34,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-150",model:"fence_post",x:34,z:73},{id:"fence_arm-151",model:"fence_arm",x:34,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-152",model:"fence_post",x:35,z:58},{id:"fence_arm-153",model:"fence_arm",x:35,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-154",model:"fence_post",x:35,z:73},{id:"fence_arm-155",model:"fence_arm",x:35,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-156",model:"fence_post",x:36,z:58},{id:"fence_arm-157",model:"fence_arm",x:36,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-158",model:"fence_post",x:36,z:73},{id:"fence_arm-159",model:"fence_arm",x:36,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-160",model:"fence_post",x:37,z:58},{id:"fence_arm-161",model:"fence_arm",x:37,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-162",model:"fence_post",x:37,z:73},{id:"fence_arm-163",model:"fence_arm",x:37,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-164",model:"fence_post",x:38,z:58},{id:"fence_arm-165",model:"fence_arm",x:38,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-166",model:"fence_post",x:38,z:73},{id:"fence_arm-167",model:"fence_arm",x:38,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-168",model:"fence_post",x:39,z:58},{id:"fence_arm-169",model:"fence_arm",x:39,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-170",model:"fence_post",x:39,z:73},{id:"fence_arm-171",model:"fence_arm",x:39,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-172",model:"fence_post",x:40,z:58},{id:"fence_arm-173",model:"fence_arm",x:40,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-174",model:"fence_post",x:40,z:73},{id:"fence_arm-175",model:"fence_arm",x:40,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-176",model:"fence_post",x:41,z:58},{id:"fence_arm-177",model:"fence_arm",x:41,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-178",model:"fence_post",x:41,z:73},{id:"fence_arm-179",model:"fence_arm",x:41,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-180",model:"fence_post",x:42,z:58},{id:"fence_arm-181",model:"fence_arm",x:42,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-182",model:"fence_post",x:42,z:73},{id:"fence_arm-183",model:"fence_arm",x:42,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-184",model:"fence_post",x:43,z:58},{id:"fence_post-185",model:"fence_post",x:43,z:73},{id:"fence_post-186",model:"fence_post",x:2,z:59},{id:"fence_post-187",model:"fence_post",x:43,z:59},{id:"fence_arm-188",model:"fence_arm",x:2,z:59,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-189",model:"fence_arm",x:43,z:59,blocks:!1,stretch:[1,1,2]},{id:"fence_post-190",model:"fence_post",x:2,z:60},{id:"fence_post-191",model:"fence_post",x:43,z:60},{id:"fence_arm-192",model:"fence_arm",x:2,z:60,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-193",model:"fence_arm",x:43,z:60,blocks:!1,stretch:[1,1,2]},{id:"fence_post-194",model:"fence_post",x:2,z:61},{id:"fence_post-195",model:"fence_post",x:43,z:61},{id:"fence_arm-196",model:"fence_arm",x:2,z:61,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-197",model:"fence_arm",x:43,z:61,blocks:!1,stretch:[1,1,2]},{id:"fence_post-198",model:"fence_post",x:2,z:62},{id:"fence_post-199",model:"fence_post",x:43,z:62},{id:"fence_arm-200",model:"fence_arm",x:2,z:62,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-201",model:"fence_arm",x:43,z:62,blocks:!1,stretch:[1,1,2]},{id:"fence_post-202",model:"fence_post",x:2,z:63},{id:"fence_post-203",model:"fence_post",x:43,z:63},{id:"fence_arm-204",model:"fence_arm",x:2,z:63,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-205",model:"fence_arm",x:43,z:63,blocks:!1,stretch:[1,1,2]},{id:"fence_post-206",model:"fence_post",x:2,z:64},{id:"fence_post-207",model:"fence_post",x:43,z:64},{id:"fence_arm-208",model:"fence_arm",x:2,z:64,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-209",model:"fence_arm",x:43,z:64,blocks:!1,stretch:[1,1,2]},{id:"fence_post-210",model:"fence_post",x:2,z:65},{id:"fence_post-211",model:"fence_post",x:43,z:65},{id:"fence_arm-212",model:"fence_arm",x:2,z:65,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-213",model:"fence_arm",x:43,z:65,blocks:!1,stretch:[1,1,2]},{id:"fence_post-214",model:"fence_post",x:2,z:66},{id:"fence_post-215",model:"fence_post",x:43,z:66},{id:"fence_arm-216",model:"fence_arm",x:2,z:66,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-217",model:"fence_arm",x:43,z:66,blocks:!1,stretch:[1,1,2]},{id:"fence_post-218",model:"fence_post",x:2,z:67},{id:"fence_post-219",model:"fence_post",x:43,z:67},{id:"fence_arm-220",model:"fence_arm",x:2,z:67,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-221",model:"fence_arm",x:43,z:67,blocks:!1,stretch:[1,1,2]},{id:"fence_post-222",model:"fence_post",x:2,z:68},{id:"fence_post-223",model:"fence_post",x:43,z:68},{id:"fence_arm-224",model:"fence_arm",x:2,z:68,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-225",model:"fence_arm",x:43,z:68,blocks:!1,stretch:[1,1,2]},{id:"fence_post-226",model:"fence_post",x:2,z:69},{id:"fence_post-227",model:"fence_post",x:43,z:69},{id:"fence_arm-228",model:"fence_arm",x:2,z:69,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-229",model:"fence_arm",x:43,z:69,blocks:!1,stretch:[1,1,2]},{id:"fence_post-230",model:"fence_post",x:2,z:70},{id:"fence_post-231",model:"fence_post",x:43,z:70},{id:"fence_arm-232",model:"fence_arm",x:2,z:70,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-233",model:"fence_arm",x:43,z:70,blocks:!1,stretch:[1,1,2]},{id:"fence_post-234",model:"fence_post",x:2,z:71},{id:"fence_post-235",model:"fence_post",x:43,z:71},{id:"fence_arm-236",model:"fence_arm",x:2,z:71,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-237",model:"fence_arm",x:43,z:71,blocks:!1,stretch:[1,1,2]},{id:"fence_post-238",model:"fence_post",x:2,z:72},{id:"fence_post-239",model:"fence_post",x:43,z:72},{id:"fence_arm-240",model:"fence_arm",x:2,z:72,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-241",model:"fence_arm",x:43,z:72,blocks:!1,stretch:[1,1,2]},{id:"gate_posts-242",model:"gate_posts",x:22,z:58,w:2},{id:"gate_leaf-243",model:"gate_leaf",x:22,z:58,blocks:!1},{id:"fence_post-244",model:"fence_post",x:56,z:58},{id:"fence_arm-245",model:"fence_arm",x:56,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-246",model:"fence_post",x:56,z:73},{id:"fence_arm-247",model:"fence_arm",x:56,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-248",model:"fence_post",x:57,z:58},{id:"fence_arm-249",model:"fence_arm",x:57,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-250",model:"fence_post",x:57,z:73},{id:"fence_arm-251",model:"fence_arm",x:57,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-252",model:"fence_post",x:58,z:58},{id:"fence_arm-253",model:"fence_arm",x:58,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-254",model:"fence_post",x:58,z:73},{id:"fence_arm-255",model:"fence_arm",x:58,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-256",model:"fence_post",x:59,z:58},{id:"fence_arm-257",model:"fence_arm",x:59,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-258",model:"fence_post",x:59,z:73},{id:"fence_arm-259",model:"fence_arm",x:59,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-260",model:"fence_post",x:60,z:58},{id:"fence_arm-261",model:"fence_arm",x:60,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-262",model:"fence_post",x:60,z:73},{id:"fence_arm-263",model:"fence_arm",x:60,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-264",model:"fence_post",x:61,z:58},{id:"fence_arm-265",model:"fence_arm",x:61,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-266",model:"fence_post",x:61,z:73},{id:"fence_arm-267",model:"fence_arm",x:61,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-268",model:"fence_post",x:62,z:58},{id:"fence_arm-269",model:"fence_arm",x:62,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-270",model:"fence_post",x:62,z:73},{id:"fence_arm-271",model:"fence_arm",x:62,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-272",model:"fence_post",x:63,z:58},{id:"fence_arm-273",model:"fence_arm",x:63,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-274",model:"fence_post",x:63,z:73},{id:"fence_arm-275",model:"fence_arm",x:63,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-276",model:"fence_post",x:64,z:58},{id:"fence_arm-277",model:"fence_arm",x:64,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-278",model:"fence_post",x:64,z:73},{id:"fence_arm-279",model:"fence_arm",x:64,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-280",model:"fence_post",x:65,z:58},{id:"fence_arm-281",model:"fence_arm",x:65,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-282",model:"fence_post",x:65,z:73},{id:"fence_arm-283",model:"fence_arm",x:65,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-284",model:"fence_post",x:66,z:58},{id:"fence_arm-285",model:"fence_arm",x:66,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-286",model:"fence_post",x:66,z:73},{id:"fence_arm-287",model:"fence_arm",x:66,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-288",model:"fence_post",x:67,z:58},{id:"fence_arm-289",model:"fence_arm",x:67,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-290",model:"fence_post",x:67,z:73},{id:"fence_arm-291",model:"fence_arm",x:67,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-292",model:"fence_post",x:68,z:58},{id:"fence_arm-293",model:"fence_arm",x:68,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-294",model:"fence_post",x:68,z:73},{id:"fence_arm-295",model:"fence_arm",x:68,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-296",model:"fence_post",x:69,z:58},{id:"fence_arm-297",model:"fence_arm",x:69,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-298",model:"fence_post",x:69,z:73},{id:"fence_arm-299",model:"fence_arm",x:69,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-300",model:"fence_post",x:70,z:58},{id:"fence_arm-301",model:"fence_arm",x:70,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-302",model:"fence_post",x:70,z:73},{id:"fence_arm-303",model:"fence_arm",x:70,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-304",model:"fence_post",x:71,z:73},{id:"fence_arm-305",model:"fence_arm",x:71,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-306",model:"fence_post",x:72,z:73},{id:"fence_arm-307",model:"fence_arm",x:72,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-308",model:"fence_post",x:73,z:73},{id:"fence_arm-309",model:"fence_arm",x:73,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-310",model:"fence_post",x:74,z:58},{id:"fence_arm-311",model:"fence_arm",x:74,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-312",model:"fence_post",x:74,z:73},{id:"fence_arm-313",model:"fence_arm",x:74,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-314",model:"fence_post",x:75,z:58},{id:"fence_arm-315",model:"fence_arm",x:75,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-316",model:"fence_post",x:75,z:73},{id:"fence_arm-317",model:"fence_arm",x:75,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-318",model:"fence_post",x:76,z:58},{id:"fence_arm-319",model:"fence_arm",x:76,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-320",model:"fence_post",x:76,z:73},{id:"fence_arm-321",model:"fence_arm",x:76,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-322",model:"fence_post",x:77,z:58},{id:"fence_arm-323",model:"fence_arm",x:77,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-324",model:"fence_post",x:77,z:73},{id:"fence_arm-325",model:"fence_arm",x:77,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-326",model:"fence_post",x:78,z:58},{id:"fence_arm-327",model:"fence_arm",x:78,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-328",model:"fence_post",x:78,z:73},{id:"fence_arm-329",model:"fence_arm",x:78,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-330",model:"fence_post",x:79,z:58},{id:"fence_arm-331",model:"fence_arm",x:79,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-332",model:"fence_post",x:79,z:73},{id:"fence_arm-333",model:"fence_arm",x:79,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-334",model:"fence_post",x:80,z:58},{id:"fence_arm-335",model:"fence_arm",x:80,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-336",model:"fence_post",x:80,z:73},{id:"fence_arm-337",model:"fence_arm",x:80,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-338",model:"fence_post",x:81,z:58},{id:"fence_arm-339",model:"fence_arm",x:81,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-340",model:"fence_post",x:81,z:73},{id:"fence_arm-341",model:"fence_arm",x:81,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-342",model:"fence_post",x:82,z:58},{id:"fence_arm-343",model:"fence_arm",x:82,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-344",model:"fence_post",x:82,z:73},{id:"fence_arm-345",model:"fence_arm",x:82,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-346",model:"fence_post",x:83,z:58},{id:"fence_arm-347",model:"fence_arm",x:83,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-348",model:"fence_post",x:83,z:73},{id:"fence_arm-349",model:"fence_arm",x:83,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-350",model:"fence_post",x:84,z:58},{id:"fence_arm-351",model:"fence_arm",x:84,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-352",model:"fence_post",x:84,z:73},{id:"fence_arm-353",model:"fence_arm",x:84,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-354",model:"fence_post",x:85,z:58},{id:"fence_arm-355",model:"fence_arm",x:85,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-356",model:"fence_post",x:85,z:73},{id:"fence_arm-357",model:"fence_arm",x:85,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-358",model:"fence_post",x:86,z:58},{id:"fence_arm-359",model:"fence_arm",x:86,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-360",model:"fence_post",x:86,z:73},{id:"fence_arm-361",model:"fence_arm",x:86,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-362",model:"fence_post",x:87,z:58},{id:"fence_arm-363",model:"fence_arm",x:87,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-364",model:"fence_post",x:87,z:73},{id:"fence_arm-365",model:"fence_arm",x:87,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-366",model:"fence_post",x:88,z:58},{id:"fence_arm-367",model:"fence_arm",x:88,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-368",model:"fence_post",x:88,z:73},{id:"fence_arm-369",model:"fence_arm",x:88,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-370",model:"fence_post",x:89,z:58},{id:"fence_arm-371",model:"fence_arm",x:89,z:58,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-372",model:"fence_post",x:89,z:73},{id:"fence_arm-373",model:"fence_arm",x:89,z:73,yaw:-90,blocks:!1,stretch:[1,1,2]},{id:"fence_post-374",model:"fence_post",x:90,z:58},{id:"fence_post-375",model:"fence_post",x:90,z:73},{id:"fence_post-376",model:"fence_post",x:56,z:59},{id:"fence_post-377",model:"fence_post",x:90,z:59},{id:"fence_arm-378",model:"fence_arm",x:56,z:59,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-379",model:"fence_arm",x:90,z:59,blocks:!1,stretch:[1,1,2]},{id:"fence_post-380",model:"fence_post",x:56,z:60},{id:"fence_post-381",model:"fence_post",x:90,z:60},{id:"fence_arm-382",model:"fence_arm",x:56,z:60,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-383",model:"fence_arm",x:90,z:60,blocks:!1,stretch:[1,1,2]},{id:"fence_post-384",model:"fence_post",x:56,z:61},{id:"fence_post-385",model:"fence_post",x:90,z:61},{id:"fence_arm-386",model:"fence_arm",x:56,z:61,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-387",model:"fence_arm",x:90,z:61,blocks:!1,stretch:[1,1,2]},{id:"fence_post-388",model:"fence_post",x:56,z:62},{id:"fence_post-389",model:"fence_post",x:90,z:62},{id:"fence_arm-390",model:"fence_arm",x:56,z:62,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-391",model:"fence_arm",x:90,z:62,blocks:!1,stretch:[1,1,2]},{id:"fence_post-392",model:"fence_post",x:56,z:63},{id:"fence_post-393",model:"fence_post",x:90,z:63},{id:"fence_arm-394",model:"fence_arm",x:56,z:63,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-395",model:"fence_arm",x:90,z:63,blocks:!1,stretch:[1,1,2]},{id:"fence_post-396",model:"fence_post",x:56,z:64},{id:"fence_post-397",model:"fence_post",x:90,z:64},{id:"fence_arm-398",model:"fence_arm",x:56,z:64,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-399",model:"fence_arm",x:90,z:64,blocks:!1,stretch:[1,1,2]},{id:"fence_post-400",model:"fence_post",x:56,z:65},{id:"fence_post-401",model:"fence_post",x:90,z:65},{id:"fence_arm-402",model:"fence_arm",x:56,z:65,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-403",model:"fence_arm",x:90,z:65,blocks:!1,stretch:[1,1,2]},{id:"fence_post-404",model:"fence_post",x:56,z:66},{id:"fence_post-405",model:"fence_post",x:90,z:66},{id:"fence_arm-406",model:"fence_arm",x:56,z:66,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-407",model:"fence_arm",x:90,z:66,blocks:!1,stretch:[1,1,2]},{id:"fence_post-408",model:"fence_post",x:56,z:67},{id:"fence_post-409",model:"fence_post",x:90,z:67},{id:"fence_arm-410",model:"fence_arm",x:56,z:67,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-411",model:"fence_arm",x:90,z:67,blocks:!1,stretch:[1,1,2]},{id:"fence_post-412",model:"fence_post",x:56,z:68},{id:"fence_post-413",model:"fence_post",x:90,z:68},{id:"fence_arm-414",model:"fence_arm",x:56,z:68,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-415",model:"fence_arm",x:90,z:68,blocks:!1,stretch:[1,1,2]},{id:"fence_post-416",model:"fence_post",x:56,z:69},{id:"fence_post-417",model:"fence_post",x:90,z:69},{id:"fence_arm-418",model:"fence_arm",x:56,z:69,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-419",model:"fence_arm",x:90,z:69,blocks:!1,stretch:[1,1,2]},{id:"fence_post-420",model:"fence_post",x:56,z:70},{id:"fence_post-421",model:"fence_post",x:90,z:70},{id:"fence_arm-422",model:"fence_arm",x:56,z:70,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-423",model:"fence_arm",x:90,z:70,blocks:!1,stretch:[1,1,2]},{id:"fence_post-424",model:"fence_post",x:56,z:71},{id:"fence_post-425",model:"fence_post",x:90,z:71},{id:"fence_arm-426",model:"fence_arm",x:56,z:71,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-427",model:"fence_arm",x:90,z:71,blocks:!1,stretch:[1,1,2]},{id:"fence_post-428",model:"fence_post",x:56,z:72},{id:"fence_post-429",model:"fence_post",x:90,z:72},{id:"fence_arm-430",model:"fence_arm",x:56,z:72,blocks:!1,stretch:[1,1,2]},{id:"fence_arm-431",model:"fence_arm",x:90,z:72,blocks:!1,stretch:[1,1,2]},{id:"gate_posts-432",model:"gate_posts",x:72,z:58,w:2},{id:"gate_leaf-433",model:"gate_leaf",x:72,z:58,blocks:!1},{id:"geothermal-494",model:"geothermal",x:60,z:45,w:6,d:6,stuff:"Metal"},{id:"warwalker_torso-495",model:"warwalker_torso",x:22,z:0,w:4,d:4},{id:"solar_generator-496",model:"solar_generator",x:66,z:45,w:4,d:4,stuff:"Metal"},{id:"ship_engine-497",model:"ship_engine",x:26,z:0,w:3,d:5,stuff:"Metal"},{id:"wreck_tank-498",model:"wreck_tank",x:29,z:0,w:3,d:5},{id:"ship_reactor-499",model:"ship_reactor",x:32,z:0,w:3,d:4,stuff:"Metal"},{id:"paste_dispenser-500",model:"paste_dispenser",x:21,z:27,w:3,d:4},{id:"wreck_apc-501",model:"wreck_apc",x:35,z:0,w:3,d:4},{id:"fabrication_bench-502",model:"fabrication_bench",x:24,z:27,w:5,d:2,stuff:"Metal"},{id:"ruin_cannon-503",model:"ruin_cannon",x:38,z:0,w:5,d:2},{id:"tree_oak_3-504",model:"tree_oak_3",x:1,z:83,w:3,d:3,yaw:145,scale:2.2,skipPrefix:["twig"]},{id:"ruin_tripod-505",model:"ruin_tripod",x:38,z:2,w:3,d:3},{id:"tree_willow_2-506",model:"tree_willow_2",x:5,z:83,w:3,d:3,yaw:185,scale:2.2,skipPrefix:["twig"]},{id:"tree_willow_1-507",model:"tree_willow_1",x:9,z:83,w:3,d:3,yaw:8,scale:2.2,skipPrefix:["twig"]},{id:"tree_anima-508",model:"tree_anima",x:13,z:83,w:3,d:3,yaw:98,scale:2.2,skipPrefix:["twig"]},{id:"tree_gauranlen-509",model:"tree_gauranlen",x:17,z:83,w:3,d:3,yaw:265,scale:2.2,skipPrefix:["twig"]},{id:"mineral_scanner-510",model:"mineral_scanner",x:29,z:27,w:3,d:3,stuff:"Metal"},{id:"table_3x3-511",model:"table_3x3",x:3,z:27,w:3,d:3},{id:"warwalker_leg-512",model:"warwalker_leg",x:41,z:2,w:2,d:4},{id:"table_2x4-513",model:"table_2x4",x:6,z:27,w:2,d:4},{id:"tree_oak_2-514",model:"tree_oak_2",x:21,z:83,w:2,d:3,yaw:326,scale:2.2,skipPrefix:["twig"]},{id:"wreck_car_frame-515",model:"wreck_car_frame",x:22,z:4,w:3,d:2},{id:"comms_console-516",model:"comms_console",x:32,z:27,w:3,d:2,stuff:"Metal"},{id:"wreck_truck-517",model:"wreck_truck",x:32,z:4,w:3,d:2},{id:"billiards_table-518",model:"billiards_table",x:5,z:43,w:3,d:2},{id:"wreck_jeep-519",model:"wreck_jeep",x:35,z:4,w:3,d:2},{id:"multi_analyzer-520",model:"multi_analyzer",x:35,z:27,w:3,d:2,stuff:"Metal"},{id:"wreck_car-521",model:"wreck_car",x:25,z:5,w:3,d:2},{id:"bench_research-522",model:"bench_research",x:38,z:27,w:3,d:2},{id:"tree_oak_1-523",model:"tree_oak_1",x:24,z:83,w:3,d:2,yaw:147,scale:2.2,skipPrefix:["twig"]},{id:"bench_hitech_research-524",model:"bench_hitech_research",x:24,z:29,w:3,d:2,stuff:"Metal"},{id:"tv_mega-525",model:"tv_mega",x:8,z:27,w:5,stuff:"Metal"},{id:"tree_teak_2-526",model:"tree_teak_2",x:28,z:83,w:2,d:2,yaw:104,scale:2.2,skipPrefix:["twig"]},{id:"tree_maple_2-527",model:"tree_maple_2",x:31,z:83,w:2,d:2,yaw:210,scale:2.2,skipPrefix:["twig"]},{id:"tree_cecropia_1-528",model:"tree_cecropia_1",x:34,z:83,w:2,d:2,yaw:166,scale:2.2,skipPrefix:["twig"]},{id:"biofuel_refinery-529",model:"biofuel_refinery",x:41,z:27,w:2,d:2,stuff:"Metal"},{id:"sculpture_large_1-530",model:"sculpture_large_1",x:8,z:43,w:2,d:2,stuff:"Stone"},{id:"chemfuel_generator-531",model:"chemfuel_generator",x:70,z:45,w:2,d:2,stuff:"Metal"},{id:"geyser-532",model:"geyser",x:72,z:45,w:2,d:2,stuff:"Metal"},{id:"tree_cecropia_2-533",model:"tree_cecropia_2",x:37,z:83,w:2,d:2,yaw:347,scale:2.2,skipPrefix:["twig"]},{id:"sculpture_grand_1-534",model:"sculpture_grand_1",x:10,z:43,w:2,d:2,stuff:"Stone"},{id:"tree_drago-535",model:"tree_drago",x:40,z:83,w:2,d:2,yaw:69,scale:2.2,skipPrefix:["twig"]},{id:"warwalker_claw-536",model:"warwalker_claw",x:28,z:5,w:2,d:2},{id:"ship_chunk_2-537",model:"ship_chunk_2",x:30,z:5,w:2,d:2,stuff:"Metal"},{id:"grave_open-538",model:"grave_open",x:3,z:52,w:2,d:2,stuff:"Stone"},{id:"hydroponics-539",model:"hydroponics",x:2,z:76,d:4},{id:"table_2x2-540",model:"table_2x2",x:13,z:27,w:2,d:2},{id:"ship_chunk_1-541",model:"ship_chunk_1",x:38,z:5,w:2,d:2,stuff:"Metal"},{id:"bed_double-542",model:"bed_double",x:15,z:27,w:2,d:2},{id:"sculpture_grand_0-543",model:"sculpture_grand_0",x:12,z:43,w:2,d:2,stuff:"Stone"},{id:"tree_palm_2-544",model:"tree_palm_2",x:43,z:83,w:2,d:2,yaw:299,scale:2.2,skipPrefix:["twig"]},{id:"gp_scanner-545",model:"gp_scanner",x:27,z:29,w:2,d:2,stuff:"Metal"},{id:"tree_bamboo_2-546",model:"tree_bamboo_2",x:46,z:83,w:2,d:2,yaw:39,scale:2.2,skipPrefix:["twig"]},{id:"tree_pine_2-547",model:"tree_pine_2",x:49,z:83,w:2,d:2,yaw:133,scale:2.2,skipPrefix:["twig"]},{id:"warwalker_foot-548",model:"warwalker_foot",x:56,z:0,w:2,d:2},{id:"tree_maple_1-549",model:"tree_maple_1",x:52,z:83,w:2,d:2,yaw:31,scale:2.2,skipPrefix:["twig"]},{id:"tree_bamboo_1-550",model:"tree_bamboo_1",x:55,z:83,w:2,d:2,yaw:218,scale:2.2,skipPrefix:["twig"]},{id:"wood_fired_generator-551",model:"wood_fired_generator",x:74,z:45,w:2,d:2,stuff:"Metal"},{id:"tree_palm_1-552",model:"tree_palm_1",x:58,z:83,w:2,d:2,yaw:118,scale:2.2,skipPrefix:["twig"]},{id:"tree_pine_1-553",model:"tree_pine_1",x:61,z:83,w:2,d:2,yaw:316,scale:2.2,skipPrefix:["twig"]},{id:"crematorium-554",model:"crematorium",x:5,z:52,w:2,d:2},{id:"ruin_engine-555",model:"ruin_engine",x:58,z:0,w:2,d:2},{id:"tree_cocoa-556",model:"tree_cocoa",x:64,z:83,w:2,d:2,yaw:281,scale:2.2,skipPrefix:["twig"]},{id:"poker_table-557",model:"poker_table",x:3,z:45,w:2,d:2},{id:"tree_birch_1-558",model:"tree_birch_1",x:67,z:83,w:2,d:2,scale:2.2,skipPrefix:["twig"]},{id:"sculpture_large_2-559",model:"sculpture_large_2",x:5,z:45,w:2,d:2,stuff:"Stone"},{id:"sculpture_large_0-560",model:"sculpture_large_0",x:7,z:45,w:2,d:2,stuff:"Stone"},{id:"sculpture_grand_2-561",model:"sculpture_grand_2",x:9,z:45,w:2,d:2,stuff:"Stone"},{id:"tree_teak_1-562",model:"tree_teak_1",x:70,z:83,w:2,d:2,yaw:281,scale:2.2,skipPrefix:["twig"]},{id:"ship_computer_core-563",model:"ship_computer_core",x:60,z:0,w:2,d:2,stuff:"Metal"},{id:"tree_birch_2-564",model:"tree_birch_2",x:73,z:83,w:2,d:2,yaw:177,scale:2.2,skipPrefix:["twig"]},{id:"bench_tailor-565",model:"bench_tailor",x:32,z:29,w:3},{id:"bench_stove-566",model:"bench_stove",x:35,z:29,w:3},{id:"ruin_machine-567",model:"ruin_machine",x:22,z:6,w:3},{id:"bench_machining-568",model:"bench_machining",x:38,z:29,w:3,stuff:"Metal"},{id:"bench_electric_tailor-569",model:"bench_electric_tailor",x:29,z:30,w:3,stuff:"Metal"},{id:"bench_smelter-570",model:"bench_smelter",x:32,z:30,w:3,stuff:"Metal"},{id:"tv_flat-571",model:"tv_flat",x:8,z:28,w:3,stuff:"Metal"},{id:"bench_electric_smithy-572",model:"bench_electric_smithy",x:35,z:30,w:3,stuff:"Metal"},{id:"bench_butcher-573",model:"bench_butcher",x:38,z:30,w:3},{id:"bench_smithy-574",model:"bench_smithy",x:21,z:31,w:3},{id:"bench_sculpting-575",model:"bench_sculpting",x:24,z:31,w:3},{id:"ship_beam-576",model:"ship_beam",x:43,z:0,d:3,stuff:"Metal"},{id:"bench_stonecutter-577",model:"bench_stonecutter",x:27,z:31,w:3},{id:"bench_drug-578",model:"bench_drug",x:30,z:31,w:3},{id:"ruin_pipe-579",model:"ruin_pipe",x:32,z:6,w:3},{id:"bench_brewery-580",model:"bench_brewery",x:33,z:31,w:3},{id:"bench_fueled_stove-581",model:"bench_fueled_stove",x:36,z:31,w:3},{id:"razor_wire-582",model:"razor_wire",x:2,z:21,w:2},{id:"bramble_1-583",model:"bramble_1",x:76,z:83,d:2,yaw:228,scale:1.25},{id:"cryptosleep_casket-584",model:"cryptosleep_casket",x:93,z:27,d:2,stuff:"Metal"},{id:"tv_tube-585",model:"tv_tube",x:11,z:28,w:2,stuff:"Metal"},{id:"grave_full-586",model:"grave_full",x:7,z:52,d:2,stuff:"Stone"},{id:"spear-587",model:"spear",x:22,z:8,w:2},{id:"dresser-588",model:"dresser",x:8,z:29,w:2},{id:"bed-589",model:"bed",x:10,z:29,d:2},{id:"ship_sensor-590",model:"ship_sensor",x:43,z:3,d:2,stuff:"Metal"},{id:"sniper_rifle-591",model:"sniper_rifle",x:24,z:8,w:2},{id:"charge_lance-592",model:"charge_lance",x:26,z:8,w:2},{id:"hospital_bed-593",model:"hospital_bed",x:94,z:27,d:2,stuff:"Metal"},{id:"pod_launcher-594",model:"pod_launcher",x:40,z:5,d:2,stuff:"Metal"},{id:"vent-595",model:"vent",x:11,z:29,d:2,stuff:"Metal"},{id:"table_1x2-596",model:"table_1x2",x:12,z:29,d:2},{id:"battery-597",model:"battery",x:76,z:45,d:2,stuff:"Metal"},{id:"sarcophagus-598",model:"sarcophagus",x:8,z:52,d:2,stuff:"Stone"},{id:"tree_cactus-599",model:"tree_cactus",x:96,z:2,d:2,yaw:289,scale:2.2,skipPrefix:["twig"]},{id:"ship_cryptosleep_casket-600",model:"ship_cryptosleep_casket",x:43,z:5,d:2,stuff:"Metal"},{id:"shelf-601",model:"shelf",x:57,z:27,w:2},{id:"cooler-602",model:"cooler",x:13,z:29,d:2,stuff:"Metal"},{id:"tool_cabinet-603",model:"tool_cabinet",x:41,z:29,d:2},{id:"tree_poplar_1-604",model:"tree_poplar_1",x:77,z:83,d:2,yaw:40,scale:2.2,skipPrefix:["twig"]},{id:"tall_grass_1-605",model:"tall_grass_1",x:79,z:83,yaw:307,blocks:!1},{id:"drug_luciferium-606",model:"drug_luciferium",x:95,z:27,blocks:!1},{id:"potato_1-607",model:"potato_1",x:3,z:76,blocks:!1},{id:"glow_mushroom-608",model:"glow_mushroom",x:80,z:83,yaw:243,blocks:!1},{id:"wall_torch-609",model:"wall_torch",x:14,z:29,blocks:!1},{id:"slag_1-610",model:"slag_1",x:25,z:4,blocks:!1},{id:"food_meat-611",model:"food_meat",x:59,z:27,blocks:!1},{id:"item_medicine-612",model:"item_medicine",x:96,z:27,blocks:!1},{id:"garment_1-613",model:"garment_1",x:60,z:27,blocks:!1},{id:"sculpture_small_0-614",model:"sculpture_small_0",x:3,z:43,blocks:!1,stuff:"Stone"},{id:"knife-615",model:"knife",x:28,z:8,blocks:!1},{id:"food_beer-616",model:"food_beer",x:61,z:27,blocks:!1},{id:"item_gold-617",model:"item_gold",x:62,z:27,blocks:!1},{id:"tool_scythe-618",model:"tool_scythe",x:42,z:29,blocks:!1},{id:"potato_2-619",model:"potato_2",x:4,z:76,blocks:!1},{id:"dandelion_1-620",model:"dandelion_1",x:81,z:83,yaw:317,blocks:!1},{id:"meal_fine-621",model:"meal_fine",x:63,z:27,blocks:!1},{id:"herb_1-622",model:"herb_1",x:82,z:83,yaw:130,blocks:!1},{id:"ied_firefoam-623",model:"ied_firefoam",x:4,z:21,blocks:!1},{id:"dandelion_2-624",model:"dandelion_2",x:83,z:83,yaw:140,blocks:!1},{id:"item_bionic-625",model:"item_bionic",x:97,z:27,blocks:!1},{id:"item_wool-626",model:"item_wool",x:64,z:27,blocks:!1},{id:"ruin_crate_spacer-627",model:"ruin_crate_spacer",x:35,z:6,blocks:!1},{id:"item_neurotrainer-628",model:"item_neurotrainer",x:98,z:27,blocks:!1},{id:"pack-629",model:"pack",x:65,z:27,blocks:!1},{id:"tool_pickaxe-630",model:"tool_pickaxe",x:93,z:41,blocks:!1},{id:"agave_2-631",model:"agave_2",x:98,z:2,yaw:356,blocks:!1},{id:"stool-632",model:"stool",x:15,z:29,blocks:!1},{id:"smokeleaf-633",model:"smokeleaf",x:5,z:76,blocks:!1},{id:"bush_3-634",model:"bush_3",x:84,z:83,yaw:181,scale:1.25,blocks:!1},{id:"dining_chair-635",model:"dining_chair",x:16,z:29,blocks:!1},{id:"ruin_barrels-636",model:"ruin_barrels",x:36,z:6,blocks:!1},{id:"meal_survival-637",model:"meal_survival",x:66,z:27,blocks:!1},{id:"item_component_spacer-638",model:"item_component_spacer",x:67,z:27,blocks:!1},{id:"food_hops-639",model:"food_hops",x:68,z:27,blocks:!1},{id:"item_organ-640",model:"item_organ",x:99,z:27,blocks:!1},{id:"food_berries-641",model:"food_berries",x:57,z:28,blocks:!1},{id:"junk_3-642",model:"junk_3",x:37,z:6,blocks:!1},{id:"devilstrand-643",model:"devilstrand",x:6,z:76,blocks:!1},{id:"chain_shotgun-644",model:"chain_shotgun",x:29,z:8,blocks:!1},{id:"cotton-645",model:"cotton",x:7,z:76,blocks:!1},{id:"tree_cypress-646",model:"tree_cypress",x:85,z:83,yaw:129,scale:2.2,skipPrefix:["twig"]},{id:"bush_2-647",model:"bush_2",x:87,z:83,yaw:2,scale:1.25,blocks:!1},{id:"ied_emp-648",model:"ied_emp",x:5,z:21,blocks:!1},{id:"food_fungus-649",model:"food_fungus",x:58,z:28,blocks:!1},{id:"item_component-650",model:"item_component",x:59,z:28,blocks:!1},{id:"warhammer-651",model:"warhammer",x:30,z:8,blocks:!1},{id:"bow_recurve-652",model:"bow_recurve",x:31,z:8,blocks:!1},{id:"grenade-653",model:"grenade",x:32,z:8,blocks:!1},{id:"moisture_pump-654",model:"moisture_pump",x:8,z:76,blocks:!1,stuff:"Metal"},{id:"telescope-655",model:"telescope",x:4,z:43,blocks:!1},{id:"ied_smoke-656",model:"ied_smoke",x:6,z:21,blocks:!1},{id:"tree_poplar_2-657",model:"tree_poplar_2",x:88,z:83,yaw:217,scale:2.2,skipPrefix:["twig"]},{id:"item_plasteel-658",model:"item_plasteel",x:60,z:28,blocks:!1},{id:"moss_1-659",model:"moss_1",x:90,z:83,yaw:103,blocks:!1},{id:"boulder_3-660",model:"boulder_3",x:91,z:83,yaw:228,stuff:"Stone"},{id:"axe-661",model:"axe",x:33,z:8,blocks:!1},{id:"grass_1-662",model:"grass_1",x:92,z:83,yaw:357,blocks:!1},{id:"round_cactus-663",model:"round_cactus",x:99,z:2,yaw:11,blocks:!1},{id:"minigun-664",model:"minigun",x:34,z:8,blocks:!1},{id:"bramble_2-665",model:"bramble_2",x:93,z:83,yaw:45,scale:1.25,blocks:!1},{id:"boulder_6-666",model:"boulder_6",x:94,z:83,yaw:51,stuff:"Stone"},{id:"meal_pemmican-667",model:"meal_pemmican",x:61,z:28,blocks:!1},{id:"horseshoes_pin-668",model:"horseshoes_pin",x:14,z:43,blocks:!1},{id:"grass_4-669",model:"grass_4",x:95,z:83,yaw:182,blocks:!1},{id:"drug_joints-670",model:"drug_joints",x:100,z:27,blocks:!1},{id:"meal_lavish-671",model:"meal_lavish",x:62,z:28,blocks:!1},{id:"item_leather-672",model:"item_leather",x:63,z:28,blocks:!1},{id:"item_neutroamine-673",model:"item_neutroamine",x:64,z:28,blocks:!1},{id:"herb_3-674",model:"herb_3",x:96,z:83,yaw:132,blocks:!1},{id:"item_medicine_herbal-675",model:"item_medicine_herbal",x:101,z:27,blocks:!1},{id:"standing_lamp-676",model:"standing_lamp",x:3,z:30,blocks:!1},{id:"food_potato-677",model:"food_potato",x:65,z:28,blocks:!1},{id:"strawberry_2-678",model:"strawberry_2",x:9,z:76,blocks:!1},{id:"ied_deadlife-679",model:"ied_deadlife",x:7,z:21,blocks:!1},{id:"ikwa-680",model:"ikwa",x:35,z:8,blocks:!1},{id:"healroot_1-681",model:"healroot_1",x:10,z:76,blocks:!1},{id:"food_eggs-682",model:"food_eggs",x:66,z:28,blocks:!1},{id:"haygrass_2-683",model:"haygrass_2",x:11,z:76,blocks:!1},{id:"shells_he-684",model:"shells_he",x:36,z:8,blocks:!1},{id:"shelf_small-685",model:"shelf_small",x:67,z:28},{id:"ruin_crate-686",model:"ruin_crate",x:41,z:6,blocks:!1},{id:"shotgun-687",model:"shotgun",x:37,z:8,blocks:!1},{id:"vitals_monitor-688",model:"vitals_monitor",x:102,z:27,blocks:!1,stuff:"Metal"},{id:"corn_2-689",model:"corn_2",x:12,z:76,blocks:!1},{id:"rose-690",model:"rose",x:97,z:83,yaw:22,blocks:!1},{id:"daylily-691",model:"daylily",x:98,z:83,yaw:173,blocks:!1},{id:"alocasia-692",model:"alocasia",x:99,z:83,yaw:196,blocks:!1},{id:"tool_hammer-693",model:"tool_hammer",x:42,z:30,blocks:!1},{id:"launcher-694",model:"launcher",x:38,z:8,blocks:!1},{id:"slag_2-695",model:"slag_2",x:42,z:6,blocks:!1},{id:"sculpture_small_2-696",model:"sculpture_small_2",x:15,z:43,blocks:!1,stuff:"Stone"},{id:"astragalus_2-697",model:"astragalus_2",x:100,z:83,yaw:131,blocks:!1},{id:"bow_short-698",model:"bow_short",x:39,z:8,blocks:!1},{id:"lmg-699",model:"lmg",x:40,z:8,blocks:!1},{id:"food_leaves-700",model:"food_leaves",x:68,z:28,blocks:!1},{id:"food_rice-701",model:"food_rice",x:57,z:29,blocks:!1},{id:"hopper-702",model:"hopper",x:39,z:31,blocks:!1,stuff:"Metal"},{id:"berry_bush_2-703",model:"berry_bush_2",x:101,z:83,yaw:31,scale:1.25,blocks:!1},{id:"drug_syringe-704",model:"drug_syringe",x:103,z:27,blocks:!1},{id:"item_cloth-705",model:"item_cloth",x:58,z:29,blocks:!1},{id:"junk_1-706",model:"junk_1",x:62,z:0,blocks:!1},{id:"drug_pills-707",model:"drug_pills",x:104,z:27,blocks:!1},{id:"charge_rifle-708",model:"charge_rifle",x:41,z:8,blocks:!1},{id:"tall_grass_2-709",model:"tall_grass_2",x:102,z:83,yaw:126,blocks:!1},{id:"armchair-710",model:"armchair",x:4,z:30,blocks:!1},{id:"bow_great-711",model:"bow_great",x:42,z:8,blocks:!1},{id:"pistol-712",model:"pistol",x:43,z:8,blocks:!1},{id:"item_wood-713",model:"item_wood",x:59,z:29,blocks:!1},{id:"club-714",model:"club",x:22,z:9,blocks:!1},{id:"shells_other-715",model:"shells_other",x:23,z:9,blocks:!1},{id:"longsword-716",model:"longsword",x:24,z:9,blocks:!1},{id:"grass_2-717",model:"grass_2",x:103,z:83,yaw:180,blocks:!1},{id:"food_corn-718",model:"food_corn",x:60,z:29,blocks:!1},{id:"food_psychoid-719",model:"food_psychoid",x:61,z:29,blocks:!1},{id:"astragalus_1-720",model:"astragalus_1",x:104,z:83,yaw:310,blocks:!1},{id:"item_artifact-721",model:"item_artifact",x:62,z:29,blocks:!1},{id:"item_uranium-722",model:"item_uranium",x:63,z:29,blocks:!1},{id:"concrete_barrier-723",model:"concrete_barrier",x:8,z:21,blocks:!1},{id:"herb_2-724",model:"herb_2",x:105,z:83,yaw:311,blocks:!1},{id:"psychoid-725",model:"psychoid",x:13,z:76,blocks:!1},{id:"smg-726",model:"smg",x:25,z:9,blocks:!1},{id:"bolt_rifle-727",model:"bolt_rifle",x:26,z:9,blocks:!1},{id:"transport_pod-728",model:"transport_pod",x:63,z:0,blocks:!1,stuff:"Metal"},{id:"rice_2-729",model:"rice_2",x:14,z:76,blocks:!1},{id:"hoopstone_ring-730",model:"hoopstone_ring",x:16,z:43,blocks:!1},{id:"bush_1-731",model:"bush_1",x:106,z:83,yaw:183,scale:1.25,blocks:!1},{id:"boulder_1-732",model:"boulder_1",x:79,z:84,yaw:226,stuff:"Stone"},{id:"healroot_2-733",model:"healroot_2",x:15,z:76,blocks:!1},{id:"torch_lamp-734",model:"torch_lamp",x:5,z:30,blocks:!1},{id:"barrel-735",model:"barrel",x:64,z:29,blocks:!1},{id:"vest-736",model:"vest",x:65,z:29,blocks:!1},{id:"plant_pot-737",model:"plant_pot",x:16,z:76,blocks:!1},{id:"tall_grass_3-738",model:"tall_grass_3",x:80,z:84,yaw:305,blocks:!1},{id:"pila-739",model:"pila",x:27,z:9,blocks:!1},{id:"meal_paste-740",model:"meal_paste",x:66,z:29,blocks:!1},{id:"haygrass_1-741",model:"haygrass_1",x:17,z:76,blocks:!1},{id:"food_jelly-742",model:"food_jelly",x:67,z:29,blocks:!1},{id:"tool_broom-743",model:"tool_broom",x:40,z:31,blocks:!1},{id:"rice_1-744",model:"rice_1",x:18,z:76,blocks:!1},{id:"item_medicine_glitter-745",model:"item_medicine_glitter",x:95,z:28,blocks:!1},{id:"molotov-746",model:"molotov",x:28,z:9,blocks:!1},{id:"meal_simple-747",model:"meal_simple",x:68,z:29,blocks:!1},{id:"ied_highexplosive-748",model:"ied_highexplosive",x:9,z:21,blocks:!1},{id:"strawberry_1-749",model:"strawberry_1",x:19,z:76,blocks:!1},{id:"tool_axe-750",model:"tool_axe",x:41,z:31,blocks:!1},{id:"item_chemfuel-751",model:"item_chemfuel",x:57,z:30,blocks:!1},{id:"end_table-752",model:"end_table",x:8,z:30,blocks:!1},{id:"power_switch-753",model:"power_switch",x:77,z:45,blocks:!1,stuff:"Metal"},{id:"machine_pistol-754",model:"machine_pistol",x:29,z:9,blocks:!1},{id:"corn_1-755",model:"corn_1",x:20,z:76,blocks:!1},{id:"food_chocolate-756",model:"food_chocolate",x:58,z:30,blocks:!1},{id:"spike_trap-757",model:"spike_trap",x:10,z:21,blocks:!1},{id:"trade_beacon-758",model:"trade_beacon",x:78,z:45,blocks:!1,stuff:"Metal"},{id:"tool_knife-759",model:"tool_knife",x:42,z:31,blocks:!1},{id:"meal_kibble-760",model:"meal_kibble",x:59,z:30,blocks:!1},{id:"revolver-761",model:"revolver",x:30,z:9,blocks:!1},{id:"grass_3-762",model:"grass_3",x:81,z:84,yaw:359,blocks:!1},{id:"food_milk-763",model:"food_milk",x:60,z:30,blocks:!1},{id:"rocket_launcher-764",model:"rocket_launcher",x:31,z:9,blocks:!1},{id:"hops-765",model:"hops",x:21,z:76,blocks:!1},{id:"gladius-766",model:"gladius",x:32,z:9,blocks:!1},{id:"food_hay-767",model:"food_hay",x:61,z:30,blocks:!1},{id:"berry_bush_1-768",model:"berry_bush_1",x:82,z:84,yaw:210,scale:1.25,blocks:!1},{id:"heater-769",model:"heater",x:9,z:30,blocks:!1,stuff:"Metal"},{id:"food_agave-770",model:"food_agave",x:62,z:30,blocks:!1},{id:"item_silver-771",model:"item_silver",x:63,z:30,blocks:!1},{id:"sculpture_small_1-772",model:"sculpture_small_1",x:3,z:44,blocks:!1,stuff:"Stone"},{id:"item_steel-773",model:"item_steel",x:64,z:30,blocks:!1},{id:"passive_cooler-774",model:"passive_cooler",x:14,z:30,blocks:!1},{id:"agave_1-775",model:"agave_1",x:100,z:2,yaw:173,blocks:!1},{id:"item_techprint-776",model:"item_techprint",x:65,z:30,blocks:!1},{id:"drug_flake-777",model:"drug_flake",x:96,z:28,blocks:!1},{id:"deep_drill-778",model:"deep_drill",x:94,z:41,blocks:!1,stuff:"Metal"},{id:"moss_2-779",model:"moss_2",x:83,z:84,yaw:282,blocks:!1},{id:"ied_incendiary-780",model:"ied_incendiary",x:11,z:21,blocks:!1},{id:"ied_toxgas-781",model:"ied_toxgas",x:12,z:21,blocks:!1},{id:"mace-782",model:"mace",x:33,z:9,blocks:!1},{id:"firefoam_popper-783",model:"firefoam_popper",x:21,z:32,blocks:!1,stuff:"Metal"},{id:"boulder_2-784",model:"boulder_2",x:84,z:84,yaw:47,stuff:"Stone"},{id:"junk_2-785",model:"junk_2",x:64,z:0,blocks:!1},{id:"sun_lamp-786",model:"sun_lamp",x:22,z:76,blocks:!1},{id:"drug_tea-787",model:"drug_tea",x:97,z:28,blocks:!1},{id:"ied_antigrainwarhead-788",model:"ied_antigrainwarhead",x:13,z:21,blocks:!1},{id:"chess_table-789",model:"chess_table",x:14,z:44,blocks:!1},{id:"boulder_5-790",model:"boulder_5",x:87,z:84,yaw:230,stuff:"Stone"},{id:"helmet-791",model:"helmet",x:66,z:30,blocks:!1},{id:"boulder_4-792",model:"boulder_4",x:90,z:84,yaw:49,stuff:"Stone"},{id:"ruin_lamppost-793",model:"ruin_lamppost",x:65,z:0,blocks:!1},{id:"tool_hoe-794",model:"tool_hoe",x:22,z:32,blocks:!1},{id:"item_blocks-795",model:"item_blocks",x:67,z:30,blocks:!1},{id:"wall_lamp-796",model:"wall_lamp",x:15,z:30,blocks:!1},{id:"assault_rifle-797",model:"assault_rifle",x:34,z:9,blocks:!1},{id:"garment_2-798",model:"garment_2",x:68,z:30,blocks:!1},{id:"hat-799",model:"hat",x:57,z:31,blocks:!1},{id:"item_jade-800",model:"item_jade",x:58,z:31,blocks:!1}],tm=[{id:"nell",name:"Nell",x:49,z:4,yaw:0,wander:!0,parts:["person_female_lower","person_female_upper","person_head","person_face","person_hair_long"],tints:["#3a3f4a","#8d3d45","#e0b090","#ffffff","#241c18"]},{id:"amos",name:"Amos",x:50,z:8,yaw:0,wander:!0,parts:["person_male_lower","person_male_upper","person_head","person_face","person_hair_short","person_beard_goatee","person_hat_cap"],tints:["#4a3a32","#3d5c8d","#c68658","#ffffff","#6b3a22","#6b3a22","#c4a15a"]},{id:"wren",name:"Wren",x:48,z:12,yaw:0,wander:!0,parts:["person_thin_lower","person_thin_upper","person_head","person_face","person_hair_bun","person_hat_brim"],tints:["#2c3834","#3d6b4f","#8d5a3c","#ffffff","#c4a15a","#5c4a3a"]},{id:"idris",name:"Idris",x:51,z:16,yaw:0,wander:!0,parts:["person_fat_lower","person_fat_upper","person_head","person_face","person_hair_ponytail","person_hat_hood"],tints:["#534838","#c4a15a","#f0d0b0","#ffffff","#3a3430","#6e4a62"]},{id:"bram",name:"Bram",x:49,z:20,yaw:0,wander:!0,parts:["person_hulk_lower","person_hulk_upper","person_head","person_face","person_hair_mohawk","person_beard_full","person_hat_tall"],tints:["#3a3f4a","#5c4a3a","#a56b45","#ffffff","#141210","#141210","#8d3d45"]},{id:"muster-0",name:"",x:74,z:30,yaw:180,wander:!1,parts:["person_female_lower","person_female_upper","person_female_armor_cataphract","person_head","person_face","person_hair_long","person_hat_brim"],tints:["#3a3f4a","#8d3d45","#9aa3ad","#e0b090","#ffffff","#241c18","#3d5c8d"]},{id:"muster-1",name:"",x:75,z:30,yaw:180,wander:!1,parts:["person_female_lower","person_female_upper","person_female_armor_flakjacket","person_head","person_face","person_hair_short","person_hat_cap"],tints:["#4a3a32","#3d5c8d","#9aa3ad","#c68658","#ffffff","#6b3a22","#3d6b4f"]},{id:"muster-2",name:"",x:76,z:30,yaw:180,wander:!1,parts:["person_female_lower","person_female_upper","person_female_armor_flakpants","person_head","person_face","person_hair_bun","person_hat_hood"],tints:["#2c3834","#3d6b4f","#9aa3ad","#8d5a3c","#ffffff","#c4a15a","#c4a15a"]},{id:"muster-3",name:"",x:77,z:30,yaw:180,wander:!1,parts:["person_female_lower","person_female_upper","person_female_armor_flakvest","person_head","person_face","person_hair_ponytail","person_hat_tall"],tints:["#534838","#c4a15a","#9aa3ad","#f0d0b0","#ffffff","#3a3430","#5c4a3a"]},{id:"muster-4",name:"",x:78,z:30,yaw:180,wander:!1,parts:["person_female_lower","person_female_upper","person_female_armor_marine","person_head","person_face","person_hair_mohawk","person_hat_helmet","person_pads","person_visor"],tints:["#3a3f4a","#5c4a3a","#9aa3ad","#a56b45","#ffffff","#141210","#8d939c","#8d939c","#b7c4c8"]},{id:"muster-5",name:"",x:79,z:30,yaw:180,wander:!1,parts:["person_female_lower","person_female_upper","person_female_armor_plate","person_head","person_face","person_hair_afro","person_hat_combat"],tints:["#4a3a32","#6e4a62","#9aa3ad","#e0b090","#ffffff","#241c18","#8d939c"]},{id:"muster-6",name:"",x:80,z:30,yaw:180,wander:!1,parts:["person_female_lower","person_female_upper","person_female_armor_recon","person_head","person_face","person_hair_medium","person_hat_fullhelm"],tints:["#2c3834","#8d3d45","#9aa3ad","#c68658","#ffffff","#6b3a22","#8d939c"]},{id:"muster-7",name:"",x:81,z:30,yaw:180,wander:!1,parts:["person_female_lower","person_female_upper","person_female_coat_long","person_head","person_face","person_hair_spiky","person_hat_cataphract_helm"],tints:["#534838","#3d5c8d","#5c4a3a","#8d5a3c","#ffffff","#c4a15a","#8d939c"]},{id:"muster-8",name:"",x:82,z:30,yaw:180,wander:!1,parts:["person_female_lower","person_female_upper","person_female_coat_short","person_head","person_face","person_hair_long","person_hat_marine_helm"],tints:["#3a3f4a","#3d6b4f","#6e4a62","#f0d0b0","#ffffff","#3a3430","#8d939c"]},{id:"muster-9",name:"",x:83,z:30,yaw:180,wander:!1,parts:["person_male_lower","person_male_upper","person_male_armor_cataphract","person_head","person_face","person_hair_short","person_hat_recon_helm"],tints:["#4a3a32","#c4a15a","#9aa3ad","#a56b45","#ffffff","#141210","#8d939c"]},{id:"muster-10",name:"",x:85,z:30,yaw:180,wander:!1,parts:["person_male_lower","person_male_upper","person_male_armor_flakjacket","person_head","person_face","person_hair_bun","person_hat_brim"],tints:["#2c3834","#5c4a3a","#9aa3ad","#e0b090","#ffffff","#241c18","#6e4a62"]},{id:"muster-11",name:"",x:86,z:30,yaw:180,wander:!1,parts:["person_male_lower","person_male_upper","person_male_armor_flakpants","person_head","person_face","person_hair_ponytail","person_hat_cap"],tints:["#534838","#6e4a62","#9aa3ad","#c68658","#ffffff","#6b3a22","#8d3d45"]},{id:"muster-12",name:"",x:87,z:30,yaw:180,wander:!1,parts:["person_male_lower","person_male_upper","person_male_armor_flakvest","person_head","person_face","person_hair_mohawk","person_hat_hood"],tints:["#3a3f4a","#8d3d45","#9aa3ad","#8d5a3c","#ffffff","#c4a15a","#3d5c8d"]},{id:"muster-13",name:"",x:74,z:31,yaw:180,wander:!1,parts:["person_male_lower","person_male_upper","person_male_armor_marine","person_head","person_face","person_hair_afro","person_hat_tall","person_pads","person_visor"],tints:["#4a3a32","#3d5c8d","#9aa3ad","#f0d0b0","#ffffff","#3a3430","#3d6b4f","#8d939c","#b7c4c8"]},{id:"muster-14",name:"",x:75,z:31,yaw:180,wander:!1,parts:["person_male_lower","person_male_upper","person_male_armor_plate","person_head","person_face","person_hair_medium","person_hat_helmet"],tints:["#2c3834","#3d6b4f","#9aa3ad","#a56b45","#ffffff","#141210","#8d939c"]},{id:"muster-15",name:"",x:76,z:31,yaw:180,wander:!1,parts:["person_male_lower","person_male_upper","person_male_armor_recon","person_head","person_face","person_hair_spiky","person_hat_combat"],tints:["#534838","#c4a15a","#9aa3ad","#e0b090","#ffffff","#241c18","#8d939c"]},{id:"muster-16",name:"",x:77,z:31,yaw:180,wander:!1,parts:["person_male_lower","person_male_upper","person_male_coat_long","person_head","person_face","person_hair_long","person_hat_fullhelm"],tints:["#3a3f4a","#5c4a3a","#3d5c8d","#c68658","#ffffff","#6b3a22","#8d939c"]},{id:"muster-17",name:"",x:78,z:31,yaw:180,wander:!1,parts:["person_male_lower","person_male_upper","person_male_coat_short","person_head","person_face","person_hair_short","person_hat_cataphract_helm"],tints:["#4a3a32","#6e4a62","#3d6b4f","#8d5a3c","#ffffff","#c4a15a","#8d939c"]},{id:"muster-18",name:"",x:79,z:31,yaw:180,wander:!1,parts:["person_thin_lower","person_thin_upper","person_thin_armor_cataphract","person_head","person_face","person_hair_bun","person_hat_marine_helm"],tints:["#2c3834","#8d3d45","#9aa3ad","#f0d0b0","#ffffff","#3a3430","#8d939c"]},{id:"muster-19",name:"",x:80,z:31,yaw:180,wander:!1,parts:["person_thin_lower","person_thin_upper","person_thin_armor_flakjacket","person_head","person_face","person_hair_ponytail","person_hat_recon_helm"],tints:["#534838","#3d5c8d","#9aa3ad","#a56b45","#ffffff","#141210","#8d939c"]},{id:"muster-20",name:"",x:81,z:31,yaw:180,wander:!1,parts:["person_thin_lower","person_thin_upper","person_thin_armor_flakpants","person_head","person_face","person_hair_mohawk","person_hat_brim"],tints:["#3a3f4a","#3d6b4f","#9aa3ad","#e0b090","#ffffff","#241c18","#c4a15a"]},{id:"muster-21",name:"",x:82,z:31,yaw:180,wander:!1,parts:["person_thin_lower","person_thin_upper","person_thin_armor_flakvest","person_head","person_face","person_hair_afro","person_hat_cap"],tints:["#4a3a32","#c4a15a","#9aa3ad","#c68658","#ffffff","#6b3a22","#5c4a3a"]},{id:"muster-22",name:"",x:83,z:31,yaw:180,wander:!1,parts:["person_thin_lower","person_thin_upper","person_thin_armor_marine","person_head","person_face","person_hair_medium","person_hat_hood","person_pads","person_visor"],tints:["#2c3834","#5c4a3a","#9aa3ad","#8d5a3c","#ffffff","#c4a15a","#6e4a62","#8d939c","#b7c4c8"]},{id:"muster-23",name:"",x:84,z:31,yaw:180,wander:!1,parts:["person_thin_lower","person_thin_upper","person_thin_armor_plate","person_head","person_face","person_hair_spiky","person_hat_tall"],tints:["#534838","#6e4a62","#9aa3ad","#f0d0b0","#ffffff","#3a3430","#8d3d45"]},{id:"muster-24",name:"",x:85,z:31,yaw:180,wander:!1,parts:["person_thin_lower","person_thin_upper","person_thin_armor_recon","person_head","person_face","person_hair_long","person_hat_helmet"],tints:["#3a3f4a","#8d3d45","#9aa3ad","#a56b45","#ffffff","#141210","#8d939c"]},{id:"muster-25",name:"",x:86,z:31,yaw:180,wander:!1,parts:["person_thin_lower","person_thin_upper","person_thin_coat_long","person_head","person_face","person_hair_short","person_hat_combat"],tints:["#4a3a32","#3d5c8d","#5c4a3a","#e0b090","#ffffff","#241c18","#8d939c"]},{id:"muster-26",name:"",x:87,z:31,yaw:180,wander:!1,parts:["person_thin_lower","person_thin_upper","person_thin_coat_short","person_head","person_face","person_hair_bun","person_hat_fullhelm"],tints:["#2c3834","#3d6b4f","#6e4a62","#c68658","#ffffff","#6b3a22","#8d939c"]},{id:"muster-27",name:"",x:74,z:32,yaw:180,wander:!1,parts:["person_fat_lower","person_fat_upper","person_fat_armor_cataphract","person_head","person_face","person_hair_ponytail","person_hat_cataphract_helm"],tints:["#534838","#c4a15a","#9aa3ad","#8d5a3c","#ffffff","#c4a15a","#8d939c"]},{id:"muster-28",name:"",x:75,z:32,yaw:180,wander:!1,parts:["person_fat_lower","person_fat_upper","person_fat_armor_flakjacket","person_head","person_face","person_hair_mohawk","person_hat_marine_helm"],tints:["#3a3f4a","#5c4a3a","#9aa3ad","#f0d0b0","#ffffff","#3a3430","#8d939c"]},{id:"muster-29",name:"",x:76,z:32,yaw:180,wander:!1,parts:["person_fat_lower","person_fat_upper","person_fat_armor_flakpants","person_head","person_face","person_hair_afro","person_hat_recon_helm"],tints:["#4a3a32","#6e4a62","#9aa3ad","#a56b45","#ffffff","#141210","#8d939c"]},{id:"muster-30",name:"",x:77,z:32,yaw:180,wander:!1,parts:["person_fat_lower","person_fat_upper","person_fat_armor_flakvest","person_head","person_face","person_hair_medium","person_hat_brim"],tints:["#2c3834","#8d3d45","#9aa3ad","#e0b090","#ffffff","#241c18","#3d5c8d"]},{id:"muster-31",name:"",x:78,z:32,yaw:180,wander:!1,parts:["person_fat_lower","person_fat_upper","person_fat_armor_marine","person_head","person_face","person_hair_spiky","person_hat_cap","person_pads","person_visor"],tints:["#534838","#3d5c8d","#9aa3ad","#c68658","#ffffff","#6b3a22","#3d6b4f","#8d939c","#b7c4c8"]},{id:"muster-32",name:"",x:79,z:32,yaw:180,wander:!1,parts:["person_fat_lower","person_fat_upper","person_fat_armor_plate","person_head","person_face","person_hair_long","person_hat_hood"],tints:["#3a3f4a","#3d6b4f","#9aa3ad","#8d5a3c","#ffffff","#c4a15a","#c4a15a"]},{id:"muster-33",name:"",x:80,z:32,yaw:180,wander:!1,parts:["person_fat_lower","person_fat_upper","person_fat_armor_recon","person_head","person_face","person_hair_short","person_hat_tall"],tints:["#4a3a32","#c4a15a","#9aa3ad","#f0d0b0","#ffffff","#3a3430","#5c4a3a"]},{id:"muster-34",name:"",x:81,z:32,yaw:180,wander:!1,parts:["person_fat_lower","person_fat_upper","person_fat_coat_long","person_head","person_face","person_hair_bun","person_hat_helmet"],tints:["#2c3834","#5c4a3a","#3d5c8d","#a56b45","#ffffff","#141210","#8d939c"]},{id:"muster-35",name:"",x:82,z:32,yaw:180,wander:!1,parts:["person_fat_lower","person_fat_upper","person_fat_coat_short","person_head","person_face","person_hair_ponytail","person_hat_combat"],tints:["#534838","#6e4a62","#3d6b4f","#e0b090","#ffffff","#241c18","#8d939c"]},{id:"muster-36",name:"",x:83,z:32,yaw:180,wander:!1,parts:["person_hulk_lower","person_hulk_upper","person_hulk_armor_cataphract","person_head","person_face","person_hair_mohawk","person_hat_fullhelm"],tints:["#3a3f4a","#8d3d45","#9aa3ad","#c68658","#ffffff","#6b3a22","#8d939c"]},{id:"muster-37",name:"",x:84,z:32,yaw:180,wander:!1,parts:["person_hulk_lower","person_hulk_upper","person_hulk_armor_flakjacket","person_head","person_face","person_hair_afro","person_hat_cataphract_helm"],tints:["#4a3a32","#3d5c8d","#9aa3ad","#8d5a3c","#ffffff","#c4a15a","#8d939c"]},{id:"muster-38",name:"",x:85,z:32,yaw:180,wander:!1,parts:["person_hulk_lower","person_hulk_upper","person_hulk_armor_flakpants","person_head","person_face","person_hair_medium","person_hat_marine_helm"],tints:["#2c3834","#3d6b4f","#9aa3ad","#f0d0b0","#ffffff","#3a3430","#8d939c"]},{id:"muster-39",name:"",x:86,z:32,yaw:180,wander:!1,parts:["person_hulk_lower","person_hulk_upper","person_hulk_armor_flakvest","person_head","person_face","person_hair_spiky","person_hat_recon_helm"],tints:["#534838","#c4a15a","#9aa3ad","#a56b45","#ffffff","#141210","#8d939c"]},{id:"muster-40",name:"",x:87,z:32,yaw:180,wander:!1,parts:["person_hulk_lower","person_hulk_upper","person_hulk_armor_marine","person_head","person_face","person_hair_long","person_hat_brim","person_pads","person_visor"],tints:["#3a3f4a","#5c4a3a","#9aa3ad","#e0b090","#ffffff","#241c18","#6e4a62","#8d939c","#b7c4c8"]},{id:"muster-41",name:"",x:74,z:33,yaw:180,wander:!1,parts:["person_hulk_lower","person_hulk_upper","person_hulk_armor_plate","person_head","person_face","person_hair_short","person_hat_cap"],tints:["#4a3a32","#6e4a62","#9aa3ad","#c68658","#ffffff","#6b3a22","#8d3d45"]},{id:"muster-42",name:"",x:75,z:33,yaw:180,wander:!1,parts:["person_hulk_lower","person_hulk_upper","person_hulk_armor_recon","person_head","person_face","person_hair_bun","person_hat_hood"],tints:["#2c3834","#8d3d45","#9aa3ad","#8d5a3c","#ffffff","#c4a15a","#3d5c8d"]},{id:"muster-43",name:"",x:76,z:33,yaw:180,wander:!1,parts:["person_hulk_lower","person_hulk_upper","person_hulk_coat_long","person_head","person_face","person_hair_ponytail","person_hat_tall"],tints:["#534838","#3d5c8d","#5c4a3a","#f0d0b0","#ffffff","#3a3430","#3d6b4f"]},{id:"muster-44",name:"",x:77,z:33,yaw:180,wander:!1,parts:["person_hulk_lower","person_hulk_upper","person_hulk_coat_short","person_head","person_face","person_hair_mohawk","person_hat_helmet"],tints:["#3a3f4a","#3d6b4f","#6e4a62","#a56b45","#ffffff","#141210","#8d939c"]}],sm=[{id:"animal_thrumbo-434",name:"thrumbo",model:"animal_thrumbo",leg:"animal_thrumbo_leg",x:57,z:60,w:2,d:4,yaw:40,hips:[[-.328,1.202,.6],[.328,1.202,.6],[-.328,1.202,-.66],[.328,1.202,-.66]],legLength:1.202,legSwing:26,legSplay:0},{id:"animal_elephant-435",name:"elephant",model:"animal_elephant",leg:"animal_elephant_leg",x:59,z:60,w:2,d:3,yaw:60,hips:[[-.328,.897,.552],[.328,.897,.552],[-.328,.897,-.607],[.328,.897,-.607]],legLength:.897,legSwing:26,legSplay:0},{id:"animal_megasloth-436",name:"megasloth",model:"animal_megasloth",leg:"animal_megasloth_leg",x:61,z:60,w:2,d:3,yaw:60,hips:[[-.299,.685,.504],[.299,.685,.504],[-.299,.685,-.554],[.299,.685,-.554]],legLength:.685,legSwing:26,legSplay:0},{id:"animal_rhinoceros-437",name:"rhinoceros",model:"animal_rhinoceros",leg:"animal_rhinoceros_leg",x:63,z:60,w:1,d:3,yaw:60,hips:[[-.274,.603,.48],[.274,.603,.48],[-.274,.603,-.528],[.274,.603,-.528]],legLength:.603,legSwing:26,legSplay:0},{id:"animal_bear_polar-438",name:"bear polar",model:"animal_bear_polar",leg:"animal_bear_polar_leg",x:93,z:62,w:1,d:2,yaw:80,hips:[[-.233,.585,.408],[.233,.585,.408],[-.233,.585,-.449],[.233,.585,-.449]],legLength:.585,legSwing:26,legSplay:0},{id:"animal_dromedary-439",name:"dromedary",model:"animal_dromedary",leg:"animal_dromedary_leg",x:4,z:60,w:1,d:3,yaw:60,hips:[[-.146,.794,.384],[.146,.794,.384],[-.146,.794,-.422],[.146,.794,-.422]],legLength:.794,legSwing:26,legSplay:0},{id:"animal_horse-440",name:"horse",model:"animal_horse",leg:"animal_horse_leg",x:5,z:60,w:1,d:3,yaw:20,hips:[[-.15,.755,.372],[.15,.755,.372],[-.15,.755,-.409],[.15,.755,-.409]],legLength:.755,legSwing:26,legSplay:0},{id:"animal_muffalo-441",name:"muffalo",model:"animal_muffalo",leg:"animal_muffalo_leg",x:7,z:60,w:1,d:2,yaw:20,hips:[[-.221,.473,.372],[.221,.473,.372],[-.221,.473,-.409],[.221,.473,-.409]],legLength:.473,legSwing:26,legSplay:0},{id:"animal_bison-442",name:"bison",model:"animal_bison",leg:"animal_bison_leg",x:8,z:60,w:1,d:2,yaw:80,hips:[[-.188,.523,.36],[.188,.523,.36],[-.188,.523,-.396],[.188,.523,-.396]],legLength:.523,legSwing:26,legSplay:0},{id:"animal_bear_grizzly-443",name:"bear grizzly",model:"animal_bear_grizzly",leg:"animal_bear_grizzly_leg",x:64,z:60,w:1,d:2,yaw:0,hips:[[-.205,.516,.36],[.205,.516,.36],[-.205,.516,-.396],[.205,.516,-.396]],legLength:.516,legSwing:26,legSplay:0},{id:"animal_cow-444",name:"cow",model:"animal_cow",leg:"animal_cow_leg",x:9,z:60,w:1,d:2,yaw:20,hips:[[-.174,.5,.348],[.174,.5,.348],[-.174,.5,-.383],[.174,.5,-.383]],legLength:.5,legSwing:26,legSplay:0},{id:"animal_yak-445",name:"yak",model:"animal_yak",leg:"animal_yak_leg",x:10,z:60,w:1,d:2,yaw:60,hips:[[-.198,.456,.348],[.198,.456,.348],[-.198,.456,-.383],[.198,.456,-.383]],legLength:.456,legSwing:26,legSplay:0},{id:"animal_elk-446",name:"elk",model:"animal_elk",leg:"animal_elk_leg",x:11,z:60,w:1,d:2,yaw:60,hips:[[-.124,.658,.348],[.124,.658,.348],[-.124,.658,-.383],[.124,.658,-.383]],legLength:.658,legSwing:26,legSplay:0},{id:"animal_caribou-447",name:"caribou",model:"animal_caribou",leg:"animal_caribou_leg",x:12,z:60,w:1,d:2,yaw:0,hips:[[-.116,.612,.324],[.116,.612,.324],[-.116,.612,-.356],[.116,.612,-.356]],legLength:.612,legSwing:26,legSplay:0},{id:"animal_warg-448",name:"warg",model:"animal_warg",leg:"animal_warg_leg",x:65,z:60,w:1,d:3,yaw:80,hips:[[-.146,.599,.324],[.146,.599,.324],[-.146,.599,-.356],[.146,.599,-.356]],legLength:.599,legSwing:26,legSplay:0},{id:"animal_boomalope-449",name:"boomalope",model:"animal_boomalope",leg:"animal_boomalope_leg",x:13,z:60,w:1,d:2,yaw:40,hips:[[-.15,.502,.3],[.15,.502,.3],[-.15,.502,-.33],[.15,.502,-.33]],legLength:.502,legSwing:26,legSplay:0},{id:"animal_donkey-450",name:"donkey",model:"animal_donkey",leg:"animal_donkey_leg",x:14,z:60,w:1,d:2,yaw:20,hips:[[-.123,.528,.288],[.123,.528,.288],[-.123,.528,-.317],[.123,.528,-.317]],legLength:.528,legSwing:26,legSplay:0},{id:"animal_deer-451",name:"deer",model:"animal_deer",leg:"animal_deer_leg",x:15,z:60,w:1,d:2,yaw:80,hips:[[-.098,.522,.276],[.098,.522,.276],[-.098,.522,-.304],[.098,.522,-.304]],legLength:.522,legSwing:26,legSplay:0},{id:"animal_cougar-452",name:"cougar",model:"animal_cougar",leg:"animal_cougar_leg",x:66,z:60,w:1,d:3,yaw:0,hips:[[-.098,.444,.276],[.098,.444,.276],[-.098,.444,-.304],[.098,.444,-.304]],legLength:.444,legSwing:26,legSplay:0},{id:"animal_panther-453",name:"panther",model:"animal_panther",leg:"animal_panther_leg",x:67,z:60,w:1,d:3,yaw:20,hips:[[-.098,.444,.276],[.098,.444,.276],[-.098,.444,-.304],[.098,.444,-.304]],legLength:.444,legSwing:26,legSplay:0},{id:"animal_megaspider-454",name:"megaspider",model:"animal_megaspider",leg:"animal_megaspider_leg",x:94,z:51,w:1,d:1,yaw:60,hips:[[-.185,.246,.229],[.185,.246,.229],[-.185,.246,.082],[.185,.246,.082],[-.185,.246,-.065],[.185,.246,-.065],[-.185,.246,-.211],[.185,.246,-.211]],legLength:.308,legSwing:24,legSplay:48},{id:"animal_spelopede-455",name:"spelopede",model:"animal_spelopede",leg:"animal_spelopede_leg",x:95,z:51,w:1,d:2,yaw:0,hips:[[-.185,.211,.229],[.185,.211,.229],[-.185,.211,.009],[.185,.211,.009],[-.185,.211,-.211],[.185,.211,-.211]],legLength:.264,legSwing:24,legSplay:48},{id:"animal_ibex-456",name:"ibex",model:"animal_ibex",leg:"animal_ibex_leg",x:16,z:60,w:1,d:2,yaw:80,hips:[[-.099,.427,.252],[.099,.427,.252],[-.099,.427,-.277],[.099,.427,-.277]],legLength:.427,legSwing:26,legSplay:0},{id:"animal_pig-457",name:"pig",model:"animal_pig",leg:"animal_pig_leg",x:17,z:60,w:1,d:2,yaw:80,hips:[[-.131,.255,.24],[.131,.255,.24],[-.131,.255,-.264],[.131,.255,-.264]],legLength:.255,legSwing:26,legSplay:0},{id:"animal_wildboar-458",name:"wildboar",model:"animal_wildboar",leg:"animal_wildboar_leg",x:68,z:60,w:1,d:2,yaw:0,hips:[[-.125,.281,.24],[.125,.281,.24],[-.125,.281,-.264],[.125,.281,-.264]],legLength:.281,legSwing:26,legSplay:0},{id:"animal_wolf_timber-459",name:"wolf timber",model:"animal_wolf_timber",leg:"animal_wolf_timber_leg",x:69,z:60,w:1,d:2,yaw:60,hips:[[-.086,.428,.24],[.086,.428,.24],[-.086,.428,-.264],[.086,.428,-.264]],legLength:.428,legSwing:26,legSplay:0},{id:"animal_wolf_arctic-460",name:"wolf arctic",model:"animal_wolf_arctic",leg:"animal_wolf_arctic_leg",x:94,z:62,w:1,d:2,yaw:20,hips:[[-.086,.428,.24],[.086,.428,.24],[-.086,.428,-.264],[.086,.428,-.264]],legLength:.428,legSwing:26,legSplay:0},{id:"animal_sheep-461",name:"sheep",model:"animal_sheep",leg:"animal_sheep_leg",x:18,z:60,w:1,d:2,yaw:20,hips:[[-.119,.316,.228],[.119,.316,.228],[-.119,.316,-.251],[.119,.316,-.251]],legLength:.316,legSwing:26,legSplay:0},{id:"animal_alpaca-462",name:"alpaca",model:"animal_alpaca",leg:"animal_alpaca_leg",x:19,z:60,w:1,d:2,yaw:20,hips:[[-.108,.446,.228],[.108,.446,.228],[-.108,.446,-.251],[.108,.446,-.251]],legLength:.446,legSwing:26,legSplay:0},{id:"animal_gazelle-463",name:"gazelle",model:"animal_gazelle",leg:"animal_gazelle_leg",x:20,z:60,w:1,d:2,yaw:20,hips:[[-.07,.509,.228],[.07,.509,.228],[-.07,.509,-.251],[.07,.509,-.251]],legLength:.509,legSwing:26,legSplay:0},{id:"animal_ostrich-464",name:"ostrich",model:"animal_ostrich",leg:"animal_ostrich_leg",x:21,z:60,w:1,d:2,yaw:0,hips:[[-.136,.714,-.029],[.136,.714,-.029]],legLength:.714,legSwing:30,legSplay:0},{id:"animal_goat-465",name:"goat",model:"animal_goat",leg:"animal_goat_leg",x:22,z:60,w:1,d:2,yaw:40,hips:[[-.087,.354,.216],[.087,.354,.216],[-.087,.354,-.238],[.087,.354,-.238]],legLength:.354,legSwing:26,legSplay:0},{id:"animal_cassowary-466",name:"cassowary",model:"animal_cassowary",leg:"animal_cassowary_leg",x:6,z:60,w:1,d:1,yaw:60,hips:[[-.128,.53,-.028],[.128,.53,-.028]],legLength:.53,legSwing:30,legSplay:0},{id:"animal_husky-467",name:"husky",model:"animal_husky",leg:"animal_husky_leg",x:23,z:60,w:1,d:2,yaw:40,hips:[[-.078,.342,.204],[.078,.342,.204],[-.078,.342,-.224],[.078,.342,-.224]],legLength:.342,legSwing:26,legSplay:0},{id:"animal_labrador-468",name:"labrador",model:"animal_labrador",leg:"animal_labrador_leg",x:24,z:60,w:1,d:2,yaw:0,hips:[[-.08,.333,.204],[.08,.333,.204],[-.08,.333,-.224],[.08,.333,-.224]],legLength:.333,legSwing:26,legSplay:0},{id:"animal_capybara-469",name:"capybara",model:"animal_capybara",leg:"animal_capybara_leg",x:70,z:60,w:1,d:1,yaw:60,hips:[[-.107,.206,.204],[.107,.206,.204],[-.107,.206,-.224],[.107,.206,-.224]],legLength:.206,legSwing:26,legSplay:0},{id:"animal_lynx-470",name:"lynx",model:"animal_lynx",leg:"animal_lynx_leg",x:71,z:60,w:1,d:1,yaw:0,hips:[[-.068,.309,.192],[.068,.309,.192],[-.068,.309,-.211],[.068,.309,-.211]],legLength:.309,legSwing:26,legSplay:0},{id:"animal_emu-471",name:"emu",model:"animal_emu",leg:"animal_emu_leg",x:25,z:60,w:1,d:1,yaw:40,hips:[[-.116,.541,-.025],[.116,.541,-.025]],legLength:.541,legSwing:30,legSplay:0},{id:"animal_iguana-472",name:"iguana",model:"animal_iguana",leg:"animal_iguana_leg",x:72,z:60,w:1,d:2,yaw:60,hips:[[-.087,.09,.18],[.087,.09,.18],[-.087,.09,-.198],[.087,.09,-.198]],legLength:.09,legSwing:26,legSplay:40},{id:"animal_cobra-473",name:"cobra",model:"animal_cobra",leg:null,x:73,z:60,w:1,d:1,yaw:20,hips:[],legLength:0,legSwing:24,legSplay:0},{id:"animal_fox_red-474",name:"fox red",model:"animal_fox_red",leg:"animal_fox_red_leg",x:74,z:60,w:1,d:2,yaw:60,hips:[[-.06,.251,.167],[.06,.251,.167],[-.06,.251,-.184],[.06,.251,-.184]],legLength:.251,legSwing:26,legSplay:0},{id:"animal_fox_arctic-475",name:"fox arctic",model:"animal_fox_arctic",leg:"animal_fox_arctic_leg",x:95,z:62,w:1,d:2,yaw:80,hips:[[-.057,.241,.161],[.057,.241,.161],[-.057,.241,-.177],[.057,.241,-.177]],legLength:.241,legSwing:26,legSplay:0},{id:"animal_tortoise-476",name:"tortoise",model:"animal_tortoise",leg:"animal_tortoise_leg",x:75,z:60,w:1,d:1,yaw:40,hips:[[-.163,.097,.158],[.163,.097,.158],[-.163,.097,-.173],[.163,.097,-.173]],legLength:.097,legSwing:18,legSplay:25},{id:"animal_megascarab-477",name:"megascarab",model:"animal_megascarab",leg:"animal_megascarab_leg",x:96,z:51,w:1,d:1,yaw:20,hips:[[-.11,.116,.137],[.11,.116,.137],[-.11,.116,.005],[.11,.116,.005],[-.11,.116,-.126],[.11,.116,-.126]],legLength:.144,legSwing:24,legSplay:48},{id:"animal_raccoon-478",name:"raccoon",model:"animal_raccoon",leg:"animal_raccoon_leg",x:26,z:60,w:1,d:2,yaw:0,hips:[[-.07,.125,.147],[.07,.125,.147],[-.07,.125,-.161],[.07,.125,-.161]],legLength:.125,legSwing:26,legSplay:0},{id:"animal_turkey-479",name:"turkey",model:"animal_turkey",leg:"animal_turkey_leg",x:27,z:60,w:1,d:1,yaw:0,hips:[[-.086,.208,-.019],[.086,.208,-.019]],legLength:.208,legSwing:30,legSplay:0},{id:"animal_cat-480",name:"cat",model:"animal_cat",leg:"animal_cat_leg",x:28,z:60,w:1,d:2,yaw:0,hips:[[-.049,.191,.139],[.049,.191,.139],[-.049,.191,-.153],[.049,.191,-.153]],legLength:.191,legSwing:26,legSplay:0},{id:"animal_monkey-481",name:"monkey",model:"animal_monkey",leg:"animal_monkey_leg",x:29,z:60,w:1,d:2,yaw:0,hips:[[-.056,.222,.139],[.056,.222,.139],[-.056,.222,-.153],[.056,.222,-.153]],legLength:.222,legSwing:26,legSplay:0},{id:"animal_fox_fennec-482",name:"fox fennec",model:"animal_fox_fennec",leg:"animal_fox_fennec_leg",x:76,z:60,w:1,d:1,yaw:40,hips:[[-.046,.196,.13],[.046,.196,.13],[-.046,.196,-.143],[.046,.196,-.143]],legLength:.196,legSwing:26,legSplay:0},{id:"animal_goose-483",name:"goose",model:"animal_goose",leg:"animal_goose_leg",x:30,z:60,w:1,d:1,yaw:60,hips:[[-.078,.169,-.017],[.078,.169,-.017]],legLength:.169,legSwing:30,legSplay:0},{id:"animal_hare-484",name:"hare",model:"animal_hare",leg:"animal_hare_leg",x:31,z:60,w:1,d:1,yaw:0,hips:[[-.06,.108,.126],[.06,.108,.126],[-.06,.108,-.139],[.06,.108,-.139]],legLength:.108,legSwing:26,legSplay:0},{id:"animal_snowhare-485",name:"snowhare",model:"animal_snowhare",leg:"animal_snowhare_leg",x:96,z:62,w:1,d:1,yaw:40,hips:[[-.06,.108,.126],[.06,.108,.126],[-.06,.108,-.139],[.06,.108,-.139]],legLength:.108,legSwing:26,legSplay:0},{id:"animal_yorkie-486",name:"yorkie",model:"animal_yorkie",leg:"animal_yorkie_leg",x:32,z:60,w:1,d:1,yaw:60,hips:[[-.058,.132,.122],[.058,.132,.122],[-.058,.132,-.134],[.058,.132,-.134]],legLength:.132,legSwing:26,legSplay:0},{id:"animal_boomrat-487",name:"boomrat",model:"animal_boomrat",leg:"animal_boomrat_leg",x:33,z:60,w:1,d:1,yaw:80,hips:[[-.058,.104,.122],[.058,.104,.122],[-.058,.104,-.134],[.058,.104,-.134]],legLength:.104,legSwing:26,legSplay:0},{id:"animal_guineapig-488",name:"guineapig",model:"animal_guineapig",leg:"animal_guineapig_leg",x:34,z:60,w:1,d:1,yaw:60,hips:[[-.067,.081,.112],[.067,.081,.112],[-.067,.081,-.124],[.067,.081,-.124]],legLength:.081,legSwing:26,legSplay:0},{id:"animal_rat-489",name:"rat",model:"animal_rat",leg:"animal_rat_leg",x:35,z:60,w:1,d:1,yaw:40,hips:[[-.053,.096,.112],[.053,.096,.112],[-.053,.096,-.124],[.053,.096,-.124]],legLength:.096,legSwing:26,legSplay:0},{id:"animal_chinchilla-490",name:"chinchilla",model:"animal_chinchilla",leg:"animal_chinchilla_leg",x:36,z:60,w:1,d:1,yaw:80,hips:[[-.067,.089,.112],[.067,.089,.112],[-.067,.089,-.124],[.067,.089,-.124]],legLength:.089,legSwing:26,legSplay:0},{id:"animal_duck-491",name:"duck",model:"animal_duck",leg:"animal_duck_leg",x:37,z:60,w:1,d:1,yaw:20,hips:[[-.066,.116,-.014],[.066,.116,-.014]],legLength:.116,legSwing:30,legSplay:0},{id:"animal_squirrel-492",name:"squirrel",model:"animal_squirrel",leg:"animal_squirrel_leg",x:38,z:60,w:1,d:1,yaw:40,hips:[[-.051,.092,.107],[.051,.092,.107],[-.051,.092,-.118],[.051,.092,-.118]],legLength:.092,legSwing:26,legSplay:0},{id:"animal_chicken-493",name:"chicken",model:"animal_chicken",leg:"animal_chicken_leg",x:39,z:60,w:1,d:1,yaw:80,hips:[[-.059,.149,-.013],[.059,.149,-.013]],legLength:.149,legSwing:30,legSplay:0}],nm=[{x:24,z:30},{x:30,z:34},{x:36,z:32}],am={name:Yg,width:jg,height:$g,terrain:Kg,walls:Zg,doors:Jg,roofs:Qg,props:em,figures:tm,animals:sm,marks:nm};function im(){return am}const rm=38;function om(n){const e=[],t=[],s=new Map;let a="default";const i=l=>{let c=s.get(l);return c||(c={pos:[],nrm:[],uv:[]},s.set(l,c)),c},o=n.split(/\r?\n/);for(const l of o){const c=l.trim();if(c.length===0||c.startsWith("#"))continue;const d=c.split(/\s+/),f=d[0];if(f==="v"&&d.length>=4)e.push(Number(d[1]),Number(d[2]),-Number(d[3]));else if(f==="vt"&&d.length>=3)t.push(Number(d[1]),Number(d[2]));else if(f==="usemtl")a=d[1]??"default";else if(f==="f"&&d.length>=4){const u=[];let m=!1;for(let _=1;_<d.length;_++){const g=d[_].split("/"),h=Go(g[0],e.length/3),S=g.length>1&&g[1].length>0?Go(g[1],t.length/2):-1;if(h<0){m=!0;break}u.push({pi:h,ti:S})}if(m||u.length<3)continue;const p=i(a);for(let _=1;_+1<u.length;_++)lm(p,e,t,u[0],u[_],u[_+1])}}const r=[];for(const[l,c]of s){if(c.pos.length===0)continue;const d=new Gt;d.setAttribute("position",new St(c.pos,3)),d.setAttribute("normal",new St(c.nrm,3)),d.setAttribute("uv",new St(c.uv,2)),r.push({material:l,geometry:d,edges:new gc(d,rm)})}return{parts:r}}function Go(n,e){if(!n)return-1;const t=Number(n);if(!Number.isFinite(t)||t===0)return-1;const s=t<0?e+t:t-1;return s>=0&&s<e?s:-1}function lm(n,e,t,s,a,i){const o=e[s.pi*3],r=e[s.pi*3+1],l=e[s.pi*3+2],c=e[a.pi*3],d=e[a.pi*3+1],f=e[a.pi*3+2],u=e[i.pi*3],m=e[i.pi*3+1],p=e[i.pi*3+2],_=c-o,g=d-r,h=f-l,S=u-o,b=m-r,E=p-l;let C=g*E-h*b,z=h*S-_*E,T=_*b-g*S;const W=Math.hypot(C,z,T);if(W<1e-8)return;C/=W,z/=W,T/=W;const R=[s,a,i],y=[[o,r,l],[c,d,f],[u,m,p]];for(let H=0;H<3;H++){n.pos.push(y[H][0],y[H][1],y[H][2]),n.nrm.push(C,z,T);const D=R[H].ti;D>=0?n.uv.push(t[D*2],t[D*2+1]):n.uv.push(0,0)}}const cm=new Ir({color:2235416});function Fs(n,e){const t=new Lt,s=e.stuff??"Wood",a=e.skipPrefix??[];for(const r of n.parts){if(a.some(f=>r.material.startsWith(f)))continue;const l=e.materials.get(r.material,s,e.tint??null),c=new ot(r.geometry,l);c.castShadow=!0,c.receiveShadow=!0,t.add(c);const d=new uc(r.edges,cm);d.castShadow=!1,t.add(d)}const i=e.scale??1,o=e.stretch??[1,1,1];return t.scale.set(i*o[0],i*o[1],i*o[2]),t.rotation.y=Rs.degToRad(e.yaw??0),t}function dm(n,e,t){const s=new Lt;s.name=n.id,s.position.set(n.x+n.w/2,0,n.z+n.d/2),s.rotation.y=Rs.degToRad(n.yaw);const a=e.get(n.model);a?s.add(Fs(a,{materials:t})):console.warn(`Missing animal ${n.model}`);const i=[],o=n.leg?e.get(n.leg):void 0;if(n.leg&&!o&&console.warn(`Missing leg ${n.leg}`),o)for(const r of n.hips){const l=new Lt;l.position.set(r[0],r[1],r[2]),l.rotation.order="XYZ";const c=r[0]>=0?1:-1;l.rotation.z=Rs.degToRad(c*n.legSplay);const d=Fs(o,{materials:t});d.position.y=-n.legLength,l.add(d),s.add(l),i.push(l)}return{root:s,pivots:i,swing:n.legSwing}}function hm(n,e){for(let t=0;t<n.length;t++){const s=n[t];s.root.position.y=Math.abs(Math.sin(e*1.4+t))*.012,s.pivots.forEach((a,i)=>{const o=(i+(i>>1))%2*Math.PI,r=Math.sin(e*1.7+o+t)*Math.min(s.swing,22)*.35;a.rotation.x=Rs.degToRad(r)})}}function fm(n,e,t){const s=new Lt;return s.name=n.id,n.parts.forEach((a,i)=>{const o=e.get(a);if(!o){console.warn(`Missing colonist part ${a}`);return}s.add(Fs(o,{materials:t,stuff:"Fabric",tint:new Pe(n.tints[i]??"#ffffff")}))}),s.position.set(n.x+.5,0,n.z+.5),s.rotation.y=Rs.degToRad(n.yaw??0),s}function um(n,e,t,s,a,i){for(const o of n){if(o.wait>0){o.wait-=a,o.group.rotation.y=o.yaw+Math.sin(i*1.4+o.phase)*.12,o.group.position.y=0;continue}if(o.path.length===0){const g={x:Math.floor(o.x),z:Math.floor(o.z)},h=mm(g,e,t,s);if(o.path=h?pm(g,h,e,t,s)??[]:[],o.path.length===0){o.wait=.8;continue}}const r=o.path[0],l=r.x+.5,c=r.z+.5;if(gm(o,n,l,c)){o.wait=.2;continue}const d=l-o.x,f=c-o.z,u=Math.hypot(d,f);if(u<.05){o.x=l,o.z=c,o.path.shift(),o.path.length===0&&(o.wait=.7+Math.random()*2.2);continue}const p=Math.min(u,1.45*a);o.x+=d/u*p,o.z+=f/u*p,o.phase+=a*9;const _=Math.atan2(d,f);o.yaw=_m(o.yaw,_,1-Math.exp(-10*a)),o.group.position.set(o.x,Math.abs(Math.sin(o.phase))*.04,o.z),o.group.rotation.y=o.yaw}}function gm(n,e,t,s){for(const a of e){if(a===n)continue;const i=Math.hypot(a.x-t,a.z-s)<.42,o=Math.hypot(a.x-n.x,a.z-n.z)<1;if(i&&o)return!0}return!1}function mm(n,e,t,s){let a=null;for(let i=0;i<40;i++){const o=Math.floor(Math.random()*t),r=Math.floor(Math.random()*s);if(e.has(`${o},${r}`))continue;if(Math.abs(o-n.x)+Math.abs(r-n.z)>=4)return{x:o,z:r};a={x:o,z:r}}return a}function pm(n,e,t,s,a){const i=(m,p)=>`${m},${p}`,o=i(n.x,n.z),r=i(e.x,e.z);if(o===r)return[];const l=new Map;l.set(o,null);const c=[n],d=[[1,0],[-1,0],[0,1],[0,-1]];for(;c.length>0;){const m=c.shift();if(!m||m.x===e.x&&m.z===e.z)break;for(const[p,_]of d){const g=m.x+p,h=m.z+_;if(g<0||h<0||g>=s||h>=a)continue;const S=i(g,h);l.has(S)||t.has(S)||(l.set(S,i(m.x,m.z)),c.push({x:g,z:h}))}}if(!l.has(r))return null;const f=[];let u=r;for(;u&&u!==o;){const[m,p]=u.split(",").map(Number);f.push({x:m,z:p}),u=l.get(u)??null}return f.reverse(),f}function _m(n,e,t){const s=Math.atan2(Math.sin(e-n),Math.cos(e-n));return n+s*t}const vm={color:[.29,.54,.52],map:null,tint:!1,emissive:!1},xm={color:[.84,.74,.6],map:null,tint:!1,emissive:!1},bm={color:[.84,.74,.6],map:null,tint:!1,emissive:!1},Rm={color:[.7056,.6216,.504],map:null,tint:!1,emissive:!1},wm={color:[.42,.3,.22],map:null,tint:!1,emissive:!1},Sm={color:[.42,.3,.22],map:null,tint:!1,emissive:!1},ym={color:[.3528,.252,.1848],map:null,tint:!1,emissive:!1},Mm={color:[.62,.48,.34],map:null,tint:!1,emissive:!1},Em={color:[.94,.93,.89],map:null,tint:!1,emissive:!1},Tm={color:[.94,.93,.89],map:null,tint:!1,emissive:!1},Am={color:[.7896,.7812,.7476],map:null,tint:!1,emissive:!1},zm={color:[.27,.2,.16],map:null,tint:!1,emissive:!1},km={color:[.4,.29,.21],map:null,tint:!1,emissive:!1},Lm={color:[.24,.18,.15],map:null,tint:!1,emissive:!1},Cm={color:[.336,.2436,.1764],map:null,tint:!1,emissive:!1},Pm={color:[.88,.8,.44],map:null,tint:!1,emissive:!1},Dm={color:[.74,.6,.5],map:null,tint:!1,emissive:!1},Um={color:[.74,.6,.5],map:null,tint:!1,emissive:!1},Fm={color:[.6216,.504,.42],map:null,tint:!1,emissive:!1},Im={color:[.94,.72,.36],map:null,tint:!1,emissive:!1},Nm={color:[.74,.4,.36],map:null,tint:!1,emissive:!1},Om={color:[.74,.4,.36],map:null,tint:!1,emissive:!1},Bm={color:[.6216,.336,.3024],map:null,tint:!1,emissive:!1},Hm={color:[.56,.42,.3],map:null,tint:!1,emissive:!1},Gm={color:[.56,.42,.3],map:null,tint:!1,emissive:!1},Vm={color:[.4704,.3528,.252],map:null,tint:!1,emissive:!1},Wm={color:[.88,.86,.82],map:null,tint:!1,emissive:!1},Xm={color:[.58,.52,.46],map:null,tint:!1,emissive:!1},qm={color:[.58,.52,.46],map:null,tint:!1,emissive:!1},Ym={color:[.4872,.4368,.3864],map:null,tint:!1,emissive:!1},jm={color:[.82,.2,.18],map:null,tint:!1,emissive:!1},$m={color:[.28,.26,.24],map:null,tint:!1,emissive:!1},Km={color:[.15,.15,.17],map:null,tint:!1,emissive:!1},Zm={color:[.22,.42,.8],map:null,tint:!1,emissive:!1},Jm={color:[.4,.38,.34],map:null,tint:!1,emissive:!1},Qm={color:[.94,.9,.82],map:null,tint:!1,emissive:!1},ep={color:[.82,.6,.36],map:null,tint:!1,emissive:!1},tp={color:[.82,.6,.36],map:null,tint:!1,emissive:!1},sp={color:[.6888,.504,.3024],map:null,tint:!1,emissive:!1},np={color:[.8,.18,.16],map:null,tint:!1,emissive:!1},ap={color:[.92,.7,.22],map:null,tint:!1,emissive:!1},ip={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},rp={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},op={color:[.9,.72,.26],map:null,tint:!1,emissive:!1},lp={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},cp={color:[.66,.66,.71],map:null,tint:!1,emissive:!1},dp={color:[.66,.66,.71],map:null,tint:!1,emissive:!1},hp={color:[.5544,.5544,.5964],map:null,tint:!1,emissive:!1},fp={color:[.86,.8,.6],map:null,tint:!1,emissive:!1},up={color:[.6,.5,.32],map:null,tint:!1,emissive:!1},gp={color:[.5,.4,.26],map:null,tint:!1,emissive:!1},mp={color:[.92,.86,.76],map:null,tint:!1,emissive:!1},pp={color:[.78,.62,.42],map:null,tint:!1,emissive:!1},_p={color:[.78,.62,.42],map:null,tint:!1,emissive:!1},vp={color:[.6552,.5208,.3528],map:null,tint:!1,emissive:!1},xp={color:[.17,.16,.17],map:null,tint:!1,emissive:!1},bp={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},Rp={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},wp={color:[.7728,.7644,.7308],map:null,tint:!1,emissive:!1},Sp={color:[.86,.66,.62],map:null,tint:!1,emissive:!1},yp={color:[.11,.1,.1],map:null,tint:!1,emissive:!1},Mp={color:[.9,.86,.78],map:null,tint:!1,emissive:!1},Ep={color:[.64,.46,.3],map:null,tint:!1,emissive:!1},Tp={color:[.64,.46,.3],map:null,tint:!1,emissive:!1},Ap={color:[.5376,.3864,.252],map:null,tint:!1,emissive:!1},zp={color:[.26,.23,.21],map:null,tint:!1,emissive:!1},kp={color:[.84,.82,.78],map:null,tint:!1,emissive:!1},Lp={color:[.56,.52,.48],map:null,tint:!1,emissive:!1},Cp={color:[.56,.52,.48],map:null,tint:!1,emissive:!1},Pp={color:[.4704,.4368,.4032],map:null,tint:!1,emissive:!1},Dp={color:[.86,.84,.8],map:null,tint:!1,emissive:!1},Up={color:[.8,.65,.45],map:null,tint:!1,emissive:!1},Fp={color:[.8,.65,.45],map:null,tint:!1,emissive:!1},Ip={color:[.672,.546,.378],map:null,tint:!1,emissive:!1},Np={color:[.92,.66,.2],map:null,tint:!1,emissive:!1},Op={color:[.82,.78,.7],map:null,tint:!1,emissive:!1},Bp={color:[.6,.48,.36],map:null,tint:!1,emissive:!1},Hp={color:[.22,.4,.3],map:null,tint:!1,emissive:!1},Gp={color:[.92,.56,.2],map:null,tint:!1,emissive:!1},Vp={color:[.55,.54,.56],map:null,tint:!1,emissive:!1},Wp={color:[.55,.54,.56],map:null,tint:!1,emissive:!1},Xp={color:[.462,.4536,.4704],map:null,tint:!1,emissive:!1},qp={color:[.32,.23,.17],map:null,tint:!1,emissive:!1},Yp={color:[.72,.62,.48],map:null,tint:!1,emissive:!1},jp={color:[.54,.4,.28],map:null,tint:!1,emissive:!1},$p={color:[.54,.4,.28],map:null,tint:!1,emissive:!1},Kp={color:[.4536,.336,.2352],map:null,tint:!1,emissive:!1},Zp={color:[.26,.24,.22],map:null,tint:!1,emissive:!1},Jp={color:[.42,.36,.32],map:null,tint:!1,emissive:!1},Qp={color:[.36,.44,.56],map:null,tint:!1,emissive:!1},e_={color:[.36,.33,.3],map:null,tint:!1,emissive:!1},t_={color:[.94,.94,.96],map:null,tint:!1,emissive:!1},s_={color:[.94,.94,.96],map:null,tint:!1,emissive:!1},n_={color:[.7896,.7896,.8064],map:null,tint:!1,emissive:!1},a_={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},i_={color:[.88,.74,.54],map:null,tint:!1,emissive:!1},r_={color:[.88,.74,.54],map:null,tint:!1,emissive:!1},o_={color:[.7392,.6216,.4536],map:null,tint:!1,emissive:!1},l_={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},c_={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},d_={color:[.82,.44,.2],map:null,tint:!1,emissive:!1},h_={color:[.82,.44,.2],map:null,tint:!1,emissive:!1},f_={color:[.24,.18,.15],map:null,tint:!1,emissive:!1},u_={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},g_={color:[.82,.63,.42],map:null,tint:!1,emissive:!1},m_={color:[.82,.63,.42],map:null,tint:!1,emissive:!1},p_={color:[.6888,.5292,.3528],map:null,tint:!1,emissive:!1},__={color:[.84,.8,.72],map:null,tint:!1,emissive:!1},v_={color:[.84,.8,.72],map:null,tint:!1,emissive:!1},x_={color:[.7056,.672,.6048],map:null,tint:!1,emissive:!1},b_={color:[.62,.6,.58],map:null,tint:!1,emissive:!1},R_={color:[.92,.56,.2],map:null,tint:!1,emissive:!1},w_={color:[.84,.83,.8],map:null,tint:!1,emissive:!1},S_={color:[.84,.83,.8],map:null,tint:!1,emissive:!1},y_={color:[.92,.56,.2],map:null,tint:!1,emissive:!1},M_={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},E_={color:[.74,.54,.36],map:null,tint:!1,emissive:!1},T_={color:[.74,.54,.36],map:null,tint:!1,emissive:!1},A_={color:[.6216,.4536,.3024],map:null,tint:!1,emissive:!1},z_={color:[.62,.5,.38],map:null,tint:!1,emissive:!1},k_={color:[.62,.5,.38],map:null,tint:!1,emissive:!1},L_={color:[.5208,.42,.3192],map:null,tint:!1,emissive:!1},C_={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},P_={color:[.21,.18,.16],map:null,tint:!1,emissive:!1},D_={color:[.85,.81,.69],map:null,tint:!1,emissive:!1},U_={color:[.2,.14,.11],map:null,tint:!1,emissive:!1},F_={color:[.5,.33,.22],map:null,tint:!1,emissive:!1},I_={color:[.5,.33,.22],map:null,tint:!1,emissive:!1},N_={color:[.42,.2772,.1848],map:null,tint:!1,emissive:!1},O_={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},B_={color:[.56,.58,.63],map:null,tint:!1,emissive:!1},H_={color:[.56,.58,.63],map:null,tint:!1,emissive:!1},G_={color:[.88,.88,.88],map:null,tint:!1,emissive:!1},V_={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},W_={color:[.86,.8,.7],map:null,tint:!1,emissive:!1},X_={color:[.68,.56,.42],map:null,tint:!1,emissive:!1},q_={color:[.68,.56,.42],map:null,tint:!1,emissive:!1},Y_={color:[.5712,.4704,.3528],map:null,tint:!1,emissive:!1},j_={color:[.3,.46,.24],map:null,tint:!1,emissive:!1},$_={color:[.7,.78,.46],map:null,tint:!1,emissive:!1},K_={color:[.42,.6,.3],map:null,tint:!1,emissive:!1},Z_={color:[.42,.6,.3],map:null,tint:!1,emissive:!1},J_={color:[.3528,.504,.252],map:null,tint:!1,emissive:!1},Q_={color:[.86,.73,.48],map:null,tint:!1,emissive:!1},e0={color:[.86,.73,.48],map:null,tint:!1,emissive:!1},t0={color:[.7224,.6132,.4032],map:null,tint:!1,emissive:!1},s0={color:[.92,.88,.8],map:null,tint:!1,emissive:!1},n0={color:[.72,.64,.52],map:null,tint:!1,emissive:!1},a0={color:[.72,.64,.52],map:null,tint:!1,emissive:!1},i0={color:[.6048,.5376,.4368],map:null,tint:!1,emissive:!1},r0={color:[.26,.3,.38],map:null,tint:!1,emissive:!1},o0={color:[.182,.21,.266],map:null,tint:!1,emissive:!1},l0={color:[.46,.36,.28],map:null,tint:!1,emissive:!1},c0={color:[.62,.52,.4],map:null,tint:!1,emissive:!1},d0={color:[.3864,.3024,.2352],map:null,tint:!1,emissive:!1},h0={color:[.72,.62,.42],map:null,tint:!1,emissive:!1},f0={color:[.56,.42,.28],map:null,tint:!1,emissive:!1},u0={color:[.392,.294,.196],map:null,tint:!1,emissive:!1},g0={color:[.5,.36,.26],map:null,tint:!1,emissive:!1},m0={color:[.5,.36,.26],map:null,tint:!1,emissive:!1},p0={color:[.42,.3024,.2184],map:null,tint:!1,emissive:!1},_0={color:[.84,.68,.54],map:null,tint:!1,emissive:!1},v0={color:[.47,.56,.66],map:null,tint:!1,emissive:!1},x0={color:[.34,.4,.48],map:null,tint:!1,emissive:!1},b0={color:[.32,.37,.44],map:null,tint:!1,emissive:!1},R0={color:[.8,.62,.42],map:null,tint:!1,emissive:!1},w0={color:[.18,.17,.17],map:null,tint:!1,emissive:!1},S0={color:[.86,.7,.66],map:null,tint:!1,emissive:!1},y0={color:[.86,.7,.66],map:null,tint:!1,emissive:!1},M0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},E0={color:[.17,.17,.2],map:null,tint:!1,emissive:!1},T0={color:[.17,.17,.2],map:null,tint:!1,emissive:!1},A0={color:[.1428,.1428,.168],map:null,tint:!1,emissive:!1},z0={color:[.9,.68,.66],map:null,tint:!1,emissive:!1},k0={color:[.9,.68,.66],map:null,tint:!1,emissive:!1},L0={color:[.756,.5712,.5544],map:null,tint:!1,emissive:!1},C0={color:[.94,.6,.6],map:null,tint:!1,emissive:!1},P0={color:[.2,.19,.19],map:null,tint:!1,emissive:!1},D0={color:[.52,.52,.52],map:null,tint:!1,emissive:!1},U0={color:[.34,.33,.33],map:null,tint:!1,emissive:!1},F0={color:[.4368,.4368,.4368],map:null,tint:!1,emissive:!1},I0={color:[.92,.91,.87],map:null,tint:!1,emissive:!1},N0={color:[.5,.44,.4],map:null,tint:!1,emissive:!1},O0={color:[.5,.44,.4],map:null,tint:!1,emissive:!1},B0={color:[.42,.3696,.336],map:null,tint:!1,emissive:!1},H0={color:[.84,.64,.62],map:null,tint:!1,emissive:!1},G0={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},V0={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},W0={color:[.4368,.42,.4032],map:null,tint:!1,emissive:!1},X0={color:[.9,.87,.8],map:null,tint:!1,emissive:!1},q0={color:[.26,.23,.21],map:null,tint:!1,emissive:!1},Y0={color:[.26,.23,.21],map:null,tint:!1,emissive:!1},j0={color:[.95,.95,.96],map:null,tint:!1,emissive:!1},$0={color:[.95,.95,.96],map:null,tint:!1,emissive:!1},K0={color:[.798,.798,.8064],map:null,tint:!1,emissive:!1},Z0={color:[.62,.56,.4],map:null,tint:!1,emissive:!1},J0={color:[.434,.392,.28],map:null,tint:!1,emissive:!1},Q0={color:[.92,.86,.76],map:null,tint:!1,emissive:!1},ev={color:[.68,.42,.26],map:null,tint:!1,emissive:!1},tv={color:[.68,.42,.26],map:null,tint:!1,emissive:!1},sv={color:[.5712,.3528,.2184],map:null,tint:!1,emissive:!1},nv={color:[.78,.82,.89],map:null,tint:!1,emissive:!1},av={color:[.72,.77,.85],map:null,tint:!1,emissive:!1},iv={color:[.9,.92,.95],map:null,tint:!1,emissive:!1},rv={color:[.84,.87,.92],map:null,tint:!1,emissive:!1},ov={color:[.64,.69,.77],map:null,tint:!1,emissive:!1},lv={color:[.62,.66,.74],map:null,tint:!1,emissive:!1},cv={color:[.44,.4,.24],map:null,tint:!1,emissive:!1},dv={color:[.54,.52,.34],map:null,tint:!1,emissive:!1},hv={color:[.54,.52,.34],map:null,tint:!1,emissive:!1},fv={color:[.4536,.4368,.2856],map:null,tint:!1,emissive:!1},uv={color:[.78,.2,.18],map:null,tint:!1,emissive:!1},gv={color:[.88,.76,.46],map:null,tint:!1,emissive:!1},mv={color:[.33,.25,.2],map:null,tint:!1,emissive:!1},pv={color:[.46,.56,.74],map:null,tint:!1,emissive:!1},_v={color:[.62,.5,.42],map:null,tint:!1,emissive:!1},vv={color:[.52,.38,.26],map:null,tint:!1,emissive:!1},xv={color:[.22,.15,.14],map:null,tint:!1,emissive:!1},bv={color:[.38,.25,.23],map:null,tint:!1,emissive:!1},Rv={color:[.38,.25,.23],map:null,tint:!1,emissive:!1},wv={color:[.3192,.21,.1932],map:null,tint:!1,emissive:!1},Sv={color:[.22,.17,.15],map:null,tint:!1,emissive:!1},yv={color:[.36,.28,.24],map:null,tint:!1,emissive:!1},Mv={color:[.36,.28,.24],map:null,tint:!1,emissive:!1},Ev={color:[.3024,.2352,.2016],map:null,tint:!1,emissive:!1},Tv={color:[.92,.92,.94],map:null,tint:!1,emissive:!1},Av={color:[.92,.92,.94],map:null,tint:!1,emissive:!1},zv={color:[.7728,.7728,.7896],map:null,tint:!1,emissive:!1},kv={color:[.8,.78,.74],map:null,tint:!1,emissive:!1},Lv={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},Cv={color:[.52,.5,.48],map:null,tint:!1,emissive:!1},Pv={color:[.4368,.42,.4032],map:null,tint:!1,emissive:!1},Dv={color:[.27,.22,.2],map:null,tint:!1,emissive:!1},Uv={color:[.27,.22,.2],map:null,tint:!1,emissive:!1},Fv={color:[.2268,.1848,.168],map:null,tint:!1,emissive:!1},Iv={color:[.66,.5,.32],map:null,tint:!1,emissive:!1},Nv={color:[.74,.58,.36],map:null,tint:!1,emissive:!1},Ov={color:[.5544,.42,.2688],map:null,tint:!1,emissive:!1},Bv={color:[.74,.76,.74],map:"Metal",tint:!1,emissive:!1},Hv={color:[.46,.48,.46],map:"Metal",tint:!1,emissive:!1},Gv={color:[.3,.28,.27],map:null,tint:!1,emissive:!1},Vv={color:[.62,.7,.36],map:"Bark",tint:!1,emissive:!1},Wv={color:[.44,.31,.21],map:"Bark",tint:!1,emissive:!1},Xv={color:[.92,.91,.86],map:"Bark",tint:!1,emissive:!1},qv={color:[.3,.22,.17],map:"Bark",tint:!1,emissive:!1},Yv={color:[.21,.2,.19],map:null,tint:!1,emissive:!1},jv={color:[.84,.82,.76],map:"Bark",tint:!1,emissive:!1},$v={color:[.38,.42,.46],map:"Metal",tint:!1,emissive:!1},Kv={color:[.33,.43,.82],map:null,tint:!1,emissive:!1},Zv={color:[.45,.58,.31],map:null,tint:!1,emissive:!1},Jv={color:[.36,.48,.27],map:null,tint:!1,emissive:!1},Qv={color:[.52,.64,.37],map:null,tint:!1,emissive:!1},ex={color:[.44,.52,.64],map:"Fabric",tint:!1,emissive:!1},tx={color:[.52,.12,.1],map:null,tint:!1,emissive:!1},sx={color:[.22,.36,.58],map:null,tint:!1,emissive:!1},nx={color:[.62,.22,.18],map:null,tint:!1,emissive:!1},ax={color:[.32,.22,.12],map:null,tint:!1,emissive:!1},ix={color:[.78,.7,.58],map:"Wood",tint:!1,emissive:!1},rx={color:[.42,.37,.22],map:"Leaf",tint:!1,emissive:!1},ox={color:[.8,.64,.3],map:"Metal",tint:!1,emissive:!1},lx={color:[.38,.54,.32],map:"Leaf",tint:!1,emissive:!1},cx={color:[.56,.9,.74],map:null,tint:!1,emissive:!1},dx={color:[.72,.21,.19],map:null,tint:!1,emissive:!1},hx={color:[.45,.9,1],map:"Glow",tint:!1,emissive:!0},fx={color:[.74,.3,.16],map:"Metal",tint:!1,emissive:!1},ux={color:[.36,.22,.14],map:null,tint:!1,emissive:!1},gx={color:[.72,.56,.34],map:"Fabric",tint:!1,emissive:!1},mx={color:[.36,.26,.17],map:null,tint:!1,emissive:!1},px={color:[.62,.61,.58],map:"Stone",tint:!1,emissive:!1},_x={color:[.96,.84,.32],map:null,tint:!1,emissive:!1},vx={color:[.97,.97,.95],map:null,tint:!1,emissive:!1},xx={color:[.36,.53,.25],map:"Leaf",tint:!1,emissive:!1},bx={color:[.5,.62,.38],map:"Leaf",tint:!1,emissive:!1},Rx={color:[.62,.34,.3],map:"Fabric",tint:!1,emissive:!1},wx={color:[.94,.9,.82],map:null,tint:!1,emissive:!1},Sx={color:[.96,.42,.18],map:"Glow",tint:!1,emissive:!0},yx={color:[.92,.82,.74],map:null,tint:!1,emissive:!1},Mx={color:[.2,.44,.28],map:"Fabric",tint:!1,emissive:!1},Ex={color:[1,.9,.48],map:"Flame",tint:!1,emissive:!0},Tx={color:[1,.95,.72],map:"Glow",tint:!1,emissive:!0},Ax={color:[.76,.76,.72],map:"Metal",tint:!1,emissive:!1},zx={color:[.44,.62,.3],map:null,tint:!1,emissive:!1},kx={color:[.66,.7,.52],map:null,tint:!1,emissive:!1},Lx={color:[.66,.44,.26],map:null,tint:!1,emissive:!1},Cx={color:[.92,.78,.36],map:null,tint:!1,emissive:!1},Px={color:[.86,.2,.2],map:null,tint:!1,emissive:!1},Dx={color:[.8,.72,.62],map:null,tint:!1,emissive:!1},Ux={color:[.84,.8,.62],map:"Rock",tint:!1,emissive:!1},Fx={color:[.44,.42,.4],map:"Rock",tint:!1,emissive:!1},Ix={color:[.52,.7,.78],map:null,tint:!1,emissive:!1},Nx={color:[.16,.22,.27],map:null,tint:!1,emissive:!1},Ox={color:[1,1,1],map:"Glow",tint:!1,emissive:!0},Bx={color:[1,.72,.3],map:"Glow",tint:!1,emissive:!0},Hx={color:[.46,.94,.52],map:"Glow",tint:!1,emissive:!0},Gx={color:[.98,.36,.3],map:"Glow",tint:!1,emissive:!0},Vx={color:[.48,.86,.96],map:"Glow",tint:!1,emissive:!0},Wx={color:[.92,.74,.3],map:"Metal",tint:!1,emissive:!1},Xx={color:[.3,.22,.16],map:"Fabric",tint:!1,emissive:!1},qx={color:[.2,.2,.22],map:"Metal",tint:!1,emissive:!1},Yx={color:[.66,.68,.7],map:"Metal",tint:!1,emissive:!1},jx={color:[.36,.37,.4],map:"Metal",tint:!1,emissive:!1},$x={color:[.36,.4,.28],map:"Metal",tint:!1,emissive:!1},Kx={color:[.84,.86,.88],map:"Metal",tint:!1,emissive:!1},Zx={color:[.5,.34,.21],map:"Wood",tint:!1,emissive:!1},Jx={color:[.8,.72,.38],map:"Fabric",tint:!1,emissive:!1},Qx={color:[.66,.68,.32],map:null,tint:!1,emissive:!1},e2={color:[.56,.6,.28],map:null,tint:!1,emissive:!1},t2={color:[.38,.54,.28],map:"Leaf",tint:!1,emissive:!1},s2={color:[.7,.73,.76],map:"Metal",tint:!1,emissive:!1},n2={color:[.4,.43,.47],map:"Metal",tint:!1,emissive:!1},a2={color:[.82,.9,.96],map:null,tint:!1,emissive:!1},i2={color:[.4,.66,.46],map:"Stone",tint:!1,emissive:!1},r2={color:[.96,.74,.22],map:"Glow",tint:!1,emissive:!1},o2={color:[.88,.86,.78],map:null,tint:!1,emissive:!1},l2={color:[.94,.88,.92],map:"Leaf",tint:!1,emissive:!1},c2={color:[.6956,.6688,.736],map:"Leaf",tint:!1,emissive:!1},d2={color:[1,1,.9752],map:"Leaf",tint:!1,emissive:!1},h2={color:[.48,.64,.31],map:"Leaf",tint:!1,emissive:!1},f2={color:[.3552,.4864,.248],map:"Leaf",tint:!1,emissive:!1},u2={color:[.576,.7424,.3286],map:"Leaf",tint:!1,emissive:!1},g2={color:[.52,.64,.3],map:"Leaf",tint:!1,emissive:!1},m2={color:[.3848,.4864,.24],map:"Leaf",tint:!1,emissive:!1},p2={color:[.624,.7424,.318],map:"Leaf",tint:!1,emissive:!1},_2={color:[.25,.43,.27],map:"Leaf",tint:!1,emissive:!1},v2={color:[.185,.3268,.216],map:"Leaf",tint:!1,emissive:!1},x2={color:[.3,.4988,.2862],map:"Leaf",tint:!1,emissive:!1},b2={color:[.29,.45,.27],map:"Leaf",tint:!1,emissive:!1},R2={color:[.2146,.342,.216],map:"Leaf",tint:!1,emissive:!1},w2={color:[.348,.522,.2862],map:"Leaf",tint:!1,emissive:!1},S2={color:[.82,.88,.62],map:"Leaf",tint:!1,emissive:!1},y2={color:[.6068,.6688,.496],map:"Leaf",tint:!1,emissive:!1},M2={color:[.984,1,.6572],map:"Leaf",tint:!1,emissive:!1},E2={color:[.34,.57,.27],map:"Leaf",tint:!1,emissive:!1},T2={color:[.2516,.4332,.216],map:"Leaf",tint:!1,emissive:!1},A2={color:[.408,.6612,.2862],map:"Leaf",tint:!1,emissive:!1},z2={color:[.8,.43,.19],map:"Leaf",tint:!1,emissive:!1},k2={color:[.592,.3268,.152],map:"Leaf",tint:!1,emissive:!1},L2={color:[.96,.4988,.2014],map:"Leaf",tint:!1,emissive:!1},C2={color:[.38,.54,.25],map:"Leaf",tint:!1,emissive:!1},P2={color:[.2812,.4104,.2],map:"Leaf",tint:!1,emissive:!1},D2={color:[.456,.6264,.265],map:"Leaf",tint:!1,emissive:!1},U2={color:[.23,.41,.25],map:"Leaf",tint:!1,emissive:!1},F2={color:[.1702,.3116,.2],map:"Leaf",tint:!1,emissive:!1},I2={color:[.276,.4756,.265],map:"Leaf",tint:!1,emissive:!1},N2={color:[.44,.6,.27],map:"Leaf",tint:!1,emissive:!1},O2={color:[.3256,.456,.216],map:"Leaf",tint:!1,emissive:!1},B2={color:[.528,.696,.2862],map:"Leaf",tint:!1,emissive:!1},H2={color:[.31,.51,.23],map:"Leaf",tint:!1,emissive:!1},G2={color:[.2294,.3876,.184],map:"Leaf",tint:!1,emissive:!1},V2={color:[.372,.5916,.2438],map:"Leaf",tint:!1,emissive:!1},W2={color:[.42,.57,.31],map:"Leaf",tint:!1,emissive:!1},X2={color:[.3108,.4332,.248],map:"Leaf",tint:!1,emissive:!1},q2={color:[.504,.6612,.3286],map:"Leaf",tint:!1,emissive:!1},Y2={color:[.9,.88,.82],map:"Fabric",tint:!1,emissive:!1},j2={color:[.5,.34,.21],map:"Wood",tint:!1,emissive:!1},$2={color:[.2,.16,.14],map:"Wood",tint:!1,emissive:!1},K2={color:[.7,.26,.24],map:null,tint:!1,emissive:!1},Z2={color:[.92,.92,.9],map:null,tint:!1,emissive:!1},J2={color:[.6,.62,.65],map:"Metal",tint:!1,emissive:!1},Q2={color:[.32,.33,.36],map:"Metal",tint:!1,emissive:!1},e1={color:[.96,.96,.94],map:null,tint:!1,emissive:!1},t1={color:[.29,.43,.23],map:null,tint:!1,emissive:!1},s1={color:[.3,.48,.72],map:"Metal",tint:!1,emissive:!1},n1={color:[.3,.4,.52],map:"Metal",tint:!1,emissive:!1},a1={color:[.78,.74,.62],map:"Metal",tint:!1,emissive:!1},i1={color:[.4,.42,.3],map:"Metal",tint:!1,emissive:!1},r1={color:[.56,.24,.2],map:"Metal",tint:!1,emissive:!1},o1={color:[.92,.9,.82],map:null,tint:!1,emissive:!1},l1={color:[.96,.57,.21],map:null,tint:!1,emissive:!1},c1={color:[.88,.52,.74],map:null,tint:!1,emissive:!1},d1={color:[.86,.23,.25],map:null,tint:!1,emissive:!1},h1={color:[.96,.96,.91],map:null,tint:!1,emissive:!1},f1={color:[.97,.82,.24],map:null,tint:!1,emissive:!1},u1={color:[.92,.88,.8],map:null,tint:!1,emissive:!1},g1={color:[.98,.97,.94],map:"Fabric",tint:!1,emissive:!1},m1={color:[.1,.08,.07],map:null,tint:!1,emissive:!1},p1={color:[.7,.8,.84],map:"Metal",tint:!1,emissive:!1},_1={color:[.56,.34,.16],map:null,tint:!1,emissive:!1},v1={color:[.9,.86,.66],map:null,tint:!1,emissive:!1},x1={color:[.72,.56,.36],map:null,tint:!1,emissive:!1},b1={color:[.82,.18,.16],map:null,tint:!1,emissive:!1},R1={color:[.94,.92,.84],map:null,tint:!1,emissive:!1},w1={color:[.54,.7,.33],map:null,tint:!1,emissive:!1},S1={color:[.13,.13,.14],map:null,tint:!1,emissive:!1},y1={color:[.5,.32,.22],map:"Metal",tint:!1,emissive:!1},M1={color:[.3,.21,.16],map:"Metal",tint:!1,emissive:!1},E1={color:[.64,.44,.3],map:"Metal",tint:!1,emissive:!1},T1={color:[.74,.64,.46],map:"Fabric",tint:!1,emissive:!1},A1={color:[.56,.47,.33],map:"Fabric",tint:!1,emissive:!1},z1={color:[.4,.44,.3],map:"Metal",tint:!1,emissive:!1},k1={color:[.42,.53,.25],map:"Leaf",tint:!1,emissive:!1},L1={color:[.31,.44,.22],map:"Leaf",tint:!1,emissive:!1},C1={color:[.82,.84,.86],map:"Metal",tint:!1,emissive:!1},P1={color:[.4,.38,.36],map:"Rock",tint:!1,emissive:!1},D1={color:[.52,.47,.42],map:"Metal",tint:!1,emissive:!1},U1={color:[1,1,1],map:"Soil",tint:!1,emissive:!1},F1={color:[1,1,1],map:"Solar",tint:!1,emissive:!1},I1={color:[.7,.72,.75],map:"Metal",tint:!1,emissive:!1},N1={color:[.58,.56,.52],map:"Metal",tint:!1,emissive:!1},O1={color:[.36,.5,.24],map:null,tint:!1,emissive:!1},B1={color:[.54,.54,.55],map:"Stone",tint:!1,emissive:!1},H1={color:[.34,.26,.18],map:"Fabric",tint:!1,emissive:!1},G1={color:[.86,.82,.72],map:"Fabric",tint:!1,emissive:!1},V1={color:[1,1,1],map:"{stuff}",tint:!0,emissive:!1},W1={color:[.95,.92,.84],map:"Fabric",tint:!0,emissive:!1},X1={color:[.7,.67,.6],map:"Fabric",tint:!0,emissive:!1},q1={color:[1,1,1],map:"Stone",tint:!0,emissive:!1},Y1={color:[.8,.8,.8],map:"Stone",tint:!0,emissive:!1},j1={color:[.8,.8,.8],map:"{stuff}",tint:!0,emissive:!1},$1={color:[.62,.62,.62],map:"{stuff}",tint:!0,emissive:!1},K1={color:[.92,.92,.92],map:"Fabric",tint:!0,emissive:!1},Z1={color:[.72,.72,.72],map:"Fabric",tint:!0,emissive:!1},J1={color:[1,1,1],map:null,tint:!0,emissive:!1},Q1={color:[.78,.78,.78],map:null,tint:!0,emissive:!1},eb={color:[1,1,1],map:null,tint:!0,emissive:!1},tb={color:[.8,.8,.8],map:null,tint:!0,emissive:!1},sb={color:[.6,.6,.6],map:null,tint:!0,emissive:!1},nb={color:[1.12,1.12,1.12],map:null,tint:!0,emissive:!1},ab={color:[1,1,1],map:"Rock",tint:!0,emissive:!1},ib={color:[1,1,1],map:"Fabric",tint:!0,emissive:!1},rb={color:[.92,.8,.24],map:"Metal",tint:!1,emissive:!1},ob={color:[.44,.31,.21],map:"Bark",tint:!1,emissive:!1},lb={color:[.92,.91,.86],map:"Bark",tint:!1,emissive:!1},cb={color:[.84,.82,.76],map:"Bark",tint:!1,emissive:!1},db={color:[.36,.44,.32],map:"Metal",tint:!1,emissive:!1},hb={color:[.14,.19,.24],map:null,tint:!1,emissive:!1},fb={color:[.3,.62,.7],map:null,tint:!1,emissive:!1},ub={color:[.86,.3,.2],map:"Metal",tint:!1,emissive:!1},gb={color:[.32,.52,.62],map:null,tint:!1,emissive:!1},mb={color:[.2,.34,.4],map:null,tint:!1,emissive:!1},pb={color:[.78,.62,.4],map:"Wood",tint:!1,emissive:!1},_b={agave:vm,an_alpaca_body:xm,an_alpaca_head:bm,an_alpaca_leg:Rm,an_bear_grizzly_body:wm,an_bear_grizzly_head:Sm,an_bear_grizzly_leg:ym,an_bear_grizzly_muzzle:Mm,an_bear_polar_body:Em,an_bear_polar_head:Tm,an_bear_polar_leg:Am,an_bison_acc:zm,an_bison_body:km,an_bison_head:Lm,an_bison_leg:Cm,an_boomalope_acc:Pm,an_boomalope_body:Dm,an_boomalope_head:Um,an_boomalope_leg:Fm,an_boomrat_acc:Im,an_boomrat_body:Nm,an_boomrat_head:Om,an_boomrat_leg:Bm,an_capybara_body:Hm,an_capybara_head:Gm,an_capybara_leg:Vm,an_caribou_belly:Wm,an_caribou_body:Xm,an_caribou_head:qm,an_caribou_leg:Ym,an_cassowary_acc:jm,an_cassowary_beak:$m,an_cassowary_body:Km,an_cassowary_head:Zm,an_cassowary_leg:Jm,an_cat_belly:Qm,an_cat_body:ep,an_cat_head:tp,an_cat_leg:sp,an_chicken_acc:np,an_chicken_beak:ap,an_chicken_body:ip,an_chicken_head:rp,an_chicken_leg:op,an_chinchilla_belly:lp,an_chinchilla_body:cp,an_chinchilla_head:dp,an_chinchilla_leg:hp,an_cobra_belly:fp,an_cobra_body:up,an_cobra_hood:gp,an_cougar_belly:mp,an_cougar_body:pp,an_cougar_head:_p,an_cougar_leg:vp,an_cow_acc:xp,an_cow_body:bp,an_cow_head:Rp,an_cow_leg:wp,an_cow_muzzle:Sp,an_dark:yp,an_deer_belly:Mp,an_deer_body:Ep,an_deer_head:Tp,an_deer_leg:Ap,an_donkey_acc:zp,an_donkey_belly:kp,an_donkey_body:Lp,an_donkey_head:Cp,an_donkey_leg:Pp,an_donkey_muzzle:Dp,an_dromedary_body:Up,an_dromedary_head:Fp,an_dromedary_leg:Ip,an_duck_beak:Np,an_duck_belly:Op,an_duck_body:Bp,an_duck_head:Hp,an_duck_leg:Gp,an_elephant_body:Vp,an_elephant_head:Wp,an_elephant_leg:Xp,an_elk_acc:qp,an_elk_belly:Yp,an_elk_body:jp,an_elk_head:$p,an_elk_leg:Kp,an_emu_beak:Zp,an_emu_body:Jp,an_emu_head:Qp,an_emu_leg:e_,an_fox_arctic_body:t_,an_fox_arctic_head:s_,an_fox_arctic_leg:n_,an_fox_fennec_belly:a_,an_fox_fennec_body:i_,an_fox_fennec_head:r_,an_fox_fennec_leg:o_,an_fox_red_acc:l_,an_fox_red_belly:c_,an_fox_red_body:d_,an_fox_red_head:h_,an_fox_red_leg:f_,an_gazelle_belly:u_,an_gazelle_body:g_,an_gazelle_head:m_,an_gazelle_leg:p_,an_goat_body:__,an_goat_head:v_,an_goat_leg:x_,an_goose_acc:b_,an_goose_beak:R_,an_goose_body:w_,an_goose_head:S_,an_goose_leg:y_,an_guineapig_belly:M_,an_guineapig_body:E_,an_guineapig_head:T_,an_guineapig_leg:A_,an_hare_body:z_,an_hare_head:k_,an_hare_leg:L_,an_hare_tail:C_,an_hoof:P_,an_horn:D_,an_horse_acc:U_,an_horse_body:F_,an_horse_head:I_,an_horse_leg:N_,an_husky_belly:O_,an_husky_body:B_,an_husky_head:H_,an_husky_leg:G_,an_husky_muzzle:V_,an_ibex_belly:W_,an_ibex_body:X_,an_ibex_head:q_,an_ibex_leg:Y_,an_iguana_acc:j_,an_iguana_belly:$_,an_iguana_body:K_,an_iguana_head:Z_,an_iguana_leg:J_,an_labrador_body:Q_,an_labrador_head:e0,an_labrador_leg:t0,an_lynx_belly:s0,an_lynx_body:n0,an_lynx_head:a0,an_lynx_leg:i0,an_megascarab_body:r0,an_megascarab_leg:o0,an_megasloth_body:l0,an_megasloth_head:c0,an_megasloth_leg:d0,an_megaspider_acc:h0,an_megaspider_body:f0,an_megaspider_leg:u0,an_monkey_body:g0,an_monkey_head:m0,an_monkey_leg:p0,an_monkey_muzzle:_0,an_muffalo_body:v0,an_muffalo_head:x0,an_muffalo_leg:b0,an_ostrich_beak:R0,an_ostrich_body:w0,an_ostrich_head:S0,an_ostrich_leg:y0,an_ostrich_tail:M0,an_panther_body:E0,an_panther_head:T0,an_panther_leg:A0,an_pig_body:z0,an_pig_head:k0,an_pig_leg:L0,an_pig_muzzle:C0,an_raccoon_acc:P0,an_raccoon_body:D0,an_raccoon_head:U0,an_raccoon_leg:F0,an_raccoon_muzzle:I0,an_rat_body:N0,an_rat_head:O0,an_rat_leg:B0,an_rat_tail:H0,an_rhinoceros_body:G0,an_rhinoceros_head:V0,an_rhinoceros_leg:W0,an_sheep_body:X0,an_sheep_head:q0,an_sheep_leg:Y0,an_snowhare_body:j0,an_snowhare_head:$0,an_snowhare_leg:K0,an_spelopede_body:Z0,an_spelopede_leg:J0,an_squirrel_belly:Q0,an_squirrel_body:ev,an_squirrel_head:tv,an_squirrel_leg:sv,an_thrumbo_acc:nv,an_thrumbo_belly:av,an_thrumbo_body:iv,an_thrumbo_head:rv,an_thrumbo_leg:ov,an_thrumbo_muzzle:lv,an_tortoise_acc:cv,an_tortoise_body:dv,an_tortoise_head:hv,an_tortoise_leg:fv,an_turkey_acc:uv,an_turkey_beak:gv,an_turkey_body:mv,an_turkey_head:pv,an_turkey_leg:_v,an_turkey_tail:vv,an_warg_acc:xv,an_warg_body:bv,an_warg_head:Rv,an_warg_leg:wv,an_wildboar_acc:Sv,an_wildboar_body:yv,an_wildboar_head:Mv,an_wildboar_leg:Ev,an_wolf_arctic_body:Tv,an_wolf_arctic_head:Av,an_wolf_arctic_leg:zv,an_wolf_timber_belly:kv,an_wolf_timber_body:Lv,an_wolf_timber_head:Cv,an_wolf_timber_leg:Pv,an_yak_body:Dv,an_yak_head:Uv,an_yak_leg:Fv,an_yorkie_body:Iv,an_yorkie_head:Nv,an_yorkie_leg:Ov,armor:Bv,armor_dark:Hv,ash:Gv,bamboo:Vv,bark:Wv,bark_birch:Xv,bark_dark:qv,bark_mark:Yv,bark_pale:jv,battery:$v,berry:Kv,blade_a:Zv,blade_b:Jv,blade_c:Qv,blanket:ex,blood:tx,book_blue:sx,book_red:nx,bottle:ax,bowl:ix,bramble:rx,brass:ox,cactus:lx,cap_glow:cx,cap_red:dx,charge:hx,chemfuel:fx,chocolate:ux,cloth_roll:gx,coconut:mx,concrete:px,corn:_x,cotton:vx,crop_leaf:xx,crop_pale:bx,cushion:Rx,egg:wx,ember:Sx,fat:yx,felt:Mx,flame:Ex,flame_core:Tx,foil:Ax,food_green:zx,food_paste:kx,food_stew:Lx,food_yellow:Cx,fruit_red:Px,fungus:Dx,geyser_crust:Ux,geyser_rock:Fx,glass:Ix,glass_dark:Nx,glow:Ox,glow_amber:Bx,glow_green:Hx,glow_red:Gx,glow_screen:Vx,gold:Wx,grip:Xx,gun_dark:qx,gun_light:Yx,gun_metal:jx,gun_olive:$x,gun_white:Kx,gun_wood:Zx,hay:Jx,hay_a:Qx,hay_b:e2,herb_green:t2,hull:s2,hull_dark:n2,ice:a2,jade:i2,jelly:r2,label:o2,leaf_anima:l2,leaf_anima_dk:c2,leaf_anima_lt:d2,leaf_bamboo:h2,leaf_bamboo_dk:f2,leaf_bamboo_lt:u2,leaf_birch:g2,leaf_birch_dk:m2,leaf_birch_lt:p2,leaf_cypress:_2,leaf_cypress_dk:v2,leaf_cypress_lt:x2,leaf_drago:b2,leaf_drago_dk:R2,leaf_drago_lt:w2,leaf_gauranlen:S2,leaf_gauranlen_dk:y2,leaf_gauranlen_lt:M2,leaf_jungle:E2,leaf_jungle_dk:T2,leaf_jungle_lt:A2,leaf_maple:z2,leaf_maple_dk:k2,leaf_maple_lt:L2,leaf_oak:C2,leaf_oak_dk:P2,leaf_oak_lt:D2,leaf_pine:U2,leaf_pine_dk:F2,leaf_pine_lt:I2,leaf_poplar:N2,leaf_poplar_dk:O2,leaf_poplar_lt:B2,leaf_teak:H2,leaf_teak_dk:G2,leaf_teak_lt:V2,leaf_willow:W2,leaf_willow_dk:X2,leaf_willow_lt:q2,linen:Y2,log:j2,log_burnt:$2,meat:K2,medicine:Z2,metal:J2,metal_dark:Q2,milk:e1,moss:t1,neutro:s1,paint_blue:n1,paint_cream:a1,paint_olive:i1,paint_red:r1,paper:o1,petal_orange:l1,petal_pink:c1,petal_red:d1,petal_white:h1,petal_yellow:f1,pill:u1,pillow:g1,pit:m1,plasteel:p1,pod:_1,pod_pale:v1,potato:x1,red_cross:b1,rice:R1,rice_a:w1,rubber:S1,rust:y1,rust_dark:M1,rust_light:E1,sack:T1,sack_dark:A1,shell_olive:z1,shrub:k1,shrub_dark:L1,silver:C1,slag:P1,slag_metal:D1,soil:U1,solar:F1,solar_frame:I1,steam_pipe:N1,stem:O1,stone:B1,strap:H1,string:G1,stuff:V1,stuff_bag:W1,stuff_bag_dark:X1,stuff_block:q1,stuff_block_dark:Y1,stuff_dark:j1,stuff_deep:$1,stuff_fabric:K1,stuff_fabric_dark:Z1,stuff_herb:J1,stuff_herb_dark:Q1,stuff_plain:eb,stuff_plain_dark:tb,stuff_plain_deep:sb,stuff_plain_light:nb,stuff_rock:ab,stuff_wool:ib,terminal:rb,twig_bark:ob,twig_bark_birch:lb,twig_bark_pale:cb,uranium:db,visor:hb,visor_lit:fb,warning:ub,water:gb,water_dark:mb,wood_end:pb},Wa="./assets/isorim",Vo=_b,vb={Wood:new Pe(.86,.62,.38),Stone:new Pe(.76,.74,.7),Metal:new Pe(.74,.78,.84),Fabric:new Pe(.9,.88,.84)},xb=Wa,Sc=new Set;function yc(n){const t=n.indexOf("textures/");t>=0&&Sc.add(n.slice(t))}function bb(){return[...Sc]}class Rb{constructor(){bn(this,"textures",new Map);bn(this,"cache",new Map);bn(this,"flicker",[]);bn(this,"loader",new Nr);const e=new Set;for(const t of Object.values(Vo))t.map&&t.map!=="{stuff}"&&e.add(t.map);for(const t of["Wood","Stone","Metal","Fabric"])e.add(t);for(const t of e)this.textures.set(t,this.loadSwatch(t))}get(e,t,s){const a=Vo[e];if(!a)return console.warn(`IsoRim material "${e}" is not in the catalog`),this.fallback(e);const i=a.tint?s?s.getHexString():t:"",o=a.map==="{stuff}"?t:a.map,r=`${e}|${o??""}|${i}`,l=this.cache.get(r);if(l)return l;const c=new Pe(a.color[0],a.color[1],a.color[2]);a.tint&&c.multiply(s??vb[t]);const d=new Yt({color:c,map:o?this.textures.get(o)??null:null,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});return a.emissive&&(d.emissive=c.clone(),d.emissiveIntensity=.7,this.flicker.push(d)),this.cache.set(r,d),d}loadSwatch(e){const t=`${xb}/textures/swatches/${e}.png`;yc(t);const s=this.loader.load(t);return s.colorSpace=at,s.wrapS=bs,s.wrapT=bs,s.anisotropy=8,s}fallback(e){const t=`missing|${e}`,s=this.cache.get(t);if(s)return s;const a=new Yt({color:16711850});return this.cache.set(t,a),a}}function gs(n,e=!1){yc(n);const t=new Nr().load(n);return t.colorSpace=at,t.anisotropy=8,e&&(t.wrapS=bs,t.wrapT=bs),t}function hn(n,e,t,s,a){const i=s[1][0]-s[0][0],o=s[1][1]-s[0][1],r=s[1][2]-s[0][2],l=s[2][0]-s[0][0],c=s[2][1]-s[0][1],d=s[2][2]-s[0][2];let f=o*d-r*c,u=r*l-i*d,m=i*c-o*l;const p=Math.hypot(f,u,m)||1;f/=p,u/=p,m/=p;const _=[0,1,2,0,2,3];for(const g of _){const h=s[g],S=a[g];n.push(h[0],h[1],h[2]),e.push(f,u,m),t.push(S[0],S[1])}}function ps(n,e,t,s){const a=new n.BufferGeometry;return a.setAttribute("position",new n.Float32BufferAttribute(e,3)),a.setAttribute("normal",new n.Float32BufferAttribute(t,3)),a.setAttribute("uv",new n.Float32BufferAttribute(s,2)),a}const Si=`${Wa}/textures`,nn=1.2,wb=1.25,an={planks:{side:"walls/PlanksSide.png",top:"walls/PlanksTop.png",color:12880466,height:nn},bricks:{side:"walls/BricksSide.png",top:"walls/BricksTop.png",color:11889224,height:nn},stone:{side:"walls/SmoothStoneSide.png",top:"walls/SmoothStoneTop.png",color:13157046,height:nn},metal:{side:"walls/MetalSide.png",top:"walls/MetalTop.png",color:9345188,height:nn},rock:{side:"walls/RockSide.png",top:"walls/RockTop.png",color:10129798,height:nn},rockOre:{side:"walls/RockOreSide.png",top:"walls/RockOreTop.png",color:9072728,height:nn},sandbags:{side:"walls/SandbagsSide.png",top:"walls/SandbagsTop.png",color:12891274,height:.55}},Sb={terracotta:{file:"roofs/Terracotta.png",color:12870204},thatch:{file:"roofs/Thatch.png",color:12886362},tin:{file:"roofs/Tin.png",color:9345188},slate:{file:"roofs/Slate.png",color:6186864}},yb=new Set(["woodFloor","stoneTile","carpet","concrete","flagstone","metalFloor","sterile","roughHewn"]);function Mb(n){const e=new Lt;e.name="structures";const t=new Set(n.walls.map(r=>`${r.x},${r.z}`)),s=[],a={},i={};for(const r of Object.keys(an))a[r]=gs(`${Si}/${an[r].side}`,!0),i[r]=gs(`${Si}/${an[r].top}`,!0);const o=Eb(n);for(const r of n.walls){const{x:l,z:c,kind:d}=r,f=an[d].height,u=new ot(Ab(l,c,f,t),new Yt({color:an[d].color,map:a[d]})),m=new ot(zb(l,c,f),new Yt({color:an[d].color,map:i[d]}));u.castShadow=!0,u.receiveShadow=!0,m.castShadow=!0,m.receiveShadow=!0;const p=new Lt;p.add(u,m),p.position.set(0,0,0),e.add(p);const _=Tb(l,c,o);_&&s.push({object:p,side:_})}for(const r of n.roofs){const l=Sb[r.style],c=gs(`${Si}/${l.file}`,!0),d=new Yt({color:l.color,map:c,side:Bt}),f=kb(r.x,r.z,r.w,r.d,r.ridge);for(const u of f){const m=new ot(u.geometry,d);m.castShadow=!0,m.receiveShadow=!0,e.add(m),s.push({object:m,side:u.side})}}return{group:e,walls:t,cutaway:s}}function Eb(n){const e=new Set;for(let t=0;t<n.height;t++)for(let s=0;s<n.width;s++){const a=n.terrain[t*n.width+s];yb.has(a)&&e.add(`${s},${t}`)}return e}function Tb(n,e,t){const s=[];return t.has(`${n},${e+1}`)&&!t.has(`${n},${e-1}`)&&s.push("s"),t.has(`${n},${e-1}`)&&!t.has(`${n},${e+1}`)&&s.push("n"),t.has(`${n-1},${e}`)&&!t.has(`${n+1},${e}`)&&s.push("e"),t.has(`${n+1},${e}`)&&!t.has(`${n-1},${e}`)&&s.push("w"),s.length===1?s[0]:s[0]??null}function Ab(n,e,t,s){const a=[],i=[],o=[],r=t/wb,l=[];s.has(`${n},${e-1}`)||l.push({nx:0,nz:-1,u0:n*.5,u1:(n+1)*.5,corners:[[n,0,e],[n+1,0,e],[n+1,t,e],[n,t,e]]}),s.has(`${n},${e+1}`)||l.push({nx:0,nz:1,u0:(n+1)*.5,u1:n*.5,corners:[[n+1,0,e+1],[n,0,e+1],[n,t,e+1],[n+1,t,e+1]]}),s.has(`${n+1},${e}`)||l.push({nx:1,nz:0,u0:e*.5,u1:(e+1)*.5,corners:[[n+1,0,e],[n+1,0,e+1],[n+1,t,e+1],[n+1,t,e]]}),s.has(`${n-1},${e}`)||l.push({nx:-1,nz:0,u0:(e+1)*.5,u1:e*.5,corners:[[n,0,e+1],[n,0,e],[n,t,e],[n,t,e+1]]});for(const c of l)hn(a,i,o,c.corners,[[c.u0,0],[c.u1,0],[c.u1,r],[c.u0,r]]);return ps(ms,a,i,o)}function zb(n,e,t){const s=[],a=[],i=[];return hn(s,a,i,[[n,t,e],[n,t,e+1],[n+1,t,e+1],[n+1,t,e]],[[n*.5,e*.5],[n*.5,(e+1)*.5],[(n+1)*.5,(e+1)*.5],[(n+1)*.5,e*.5]]),ps(ms,s,a,i)}function kb(n,e,t,s,a){const l=n-.18,c=n+t+.18,d=e-.18,f=e+s+.18,u=[];if(a==="x"){const m=(d+f)/2;u.push(va("s",[[l,1.28,d],[l,1.92,m],[c,1.92,m],[c,1.28,d]],l,c,d,m)),u.push(va("n",[[c,1.28,f],[c,1.92,m],[l,1.92,m],[l,1.28,f]],l,c,m,f))}else{const m=(l+c)/2;u.push(va("w",[[l,1.28,f],[m,1.92,f],[m,1.92,d],[l,1.28,d]],d,f,l,m)),u.push(va("e",[[c,1.28,d],[m,1.92,d],[m,1.92,f],[c,1.28,f]],d,f,m,c))}return u}function va(n,e,t,s,a,i){const o=[],r=[],l=[],c=e[1][0]-e[0][0],d=e[1][2]-e[0][2],f=e[2][0]-e[0][0],u=e[2][2]-e[0][2],m=d*f-c*u,p=m>=0?e:[e[0],e[3],e[2],e[1]],_=m>=0?[[t*.5,a*.5],[t*.5,i*.5],[s*.5,i*.5],[s*.5,a*.5]]:[[t*.5,a*.5],[s*.5,a*.5],[s*.5,i*.5],[t*.5,i*.5]];return hn(o,r,l,p,_),{geometry:ps(ms,o,r,l),side:n}}function Lb(n,e,t){return n==="s"?e:n==="n"?!e:n==="e"?t:!t}const En=`${Wa}/textures`,Wo={grass:{file:"ground/Grass.png",color:16777215,repeat:.28,raised:!1},grassRich:{file:"ground/GrassRich.png",color:16777215,repeat:.28,raised:!1},soil:{file:"ground/Soil.png",color:16777215,repeat:.28,raised:!1},soilRich:{file:"ground/SoilRich.png",color:16777215,repeat:.28,raised:!1},dirt:{file:"ground/PackedDirt.png",color:16777215,repeat:.32,raised:!1},sand:{file:"ground/Sand.png",color:16777215,repeat:.28,raised:!1},mud:{file:"ground/Mud.png",color:16777215,repeat:.32,raised:!1},marsh:{file:"ground/Marsh.png",color:16777215,repeat:.32,raised:!1},moss:{file:"ground/Moss.png",color:16777215,repeat:.32,raised:!1},gravel:{file:"ground/Gravel.png",color:16777215,repeat:.32,raised:!1},ice:{file:"ground/Ice.png",color:16777215,repeat:.28,raised:!1},roughHewn:{file:"ground/RoughHewn.png",color:9076852,repeat:.5,raised:!0},roughStone:{file:"ground/RoughStone.png",color:10262671,repeat:.4,raised:!1},smoothStone:{file:"ground/SmoothStone.png",color:13157564,repeat:.4,raised:!1},woodFloor:{file:"ground/FloorWood.png",color:11565640,repeat:.5,raised:!0},stoneTile:{file:"ground/FloorStoneTile.png",color:12761252,repeat:.5,raised:!0},carpet:{file:"ground/FloorCarpet.png",color:9256261,repeat:.5,raised:!0},concrete:{file:"ground/FloorConcrete.png",color:12040116,repeat:.45,raised:!0},flagstone:{file:"ground/FloorFlagstone.png",color:10721932,repeat:.5,raised:!0},metalFloor:{file:"ground/FloorMetal.png",color:10135216,repeat:.5,raised:!0},paved:{file:"ground/FloorPaved.png",color:9276036,repeat:.4,raised:!0},sterile:{file:"ground/FloorSterile.png",color:14015960,repeat:.5,raised:!0}};function Cb(n){const e=new Lt;e.name="terrain";const t=new Set,s=new Map,a=xa(),i=xa();for(let m=0;m<n.height;m++)for(let p=0;p<n.width;p++){const _=n.terrain[m*n.width+p];if(_==="water"||_==="stream"){t.add(`${p},${m}`);const b=_==="water"?a:i,E=_==="water"?.35:.5,C=_==="water"?.035:.03;hn(b.pos,b.nrm,b.uv,yi(p,C,m),Xo(p,m,E));continue}let g=s.get(_);g||(g=xa(),s.set(_,g));const h=Wo[_],S=h.raised?.02:.005;hn(g.pos,g.nrm,g.uv,yi(p,S,m),Xo(p,m,h.repeat))}for(const[m,p]of s){const _=Wo[m],g=gs(`${En}/${_.file}`,!0),h=new ot(ps(ms,p.pos,p.nrm,p.uv),new Yt({color:_.color,map:g}));h.receiveShadow=!0,h.name=m,e.add(h)}const o=3,r=gs(`${En}/edge/Strata.png`,!0);r.repeat.set((n.width+o*2)/8,(n.height+o*2)/8);const l=new ot(new Hn(n.width+o*2,n.height+o*2),new Yt({color:12891290,map:r}));l.rotation.x=-Math.PI/2,l.position.set(n.width/2,-.04,n.height/2),l.receiveShadow=!0,l.name="strata",e.add(l),qo(e,"water",a,3961728,0),qo(e,"stream",i,4883600,0);const c=gs(`${En}/water/Ripples.png`,!0),d=new ot(ps(ms,a.pos,a.nrm,a.uv),new Fn({map:c,transparent:!0,depthWrite:!1,color:14017770}));d.position.y=.012,d.name="ripples",e.add(d);const f=gs(`${En}/water/Flow.png`,!0),u=new ot(ps(ms,i.pos,i.nrm,i.uv),new Fn({map:f,transparent:!0,depthWrite:!1,color:14017770,opacity:.85}));if(u.position.y=.012,u.name="flow",e.add(u),n.marks.length>0){const m=xa();for(const g of n.marks)hn(m.pos,m.nrm,m.uv,yi(g.x,.045,g.z),[[0,0],[0,1],[1,1],[1,0]]);const p=gs(`${En}/damage/Marks.png`),_=new ot(ps(ms,m.pos,m.nrm,m.uv),new Yt({map:p,transparent:!0,depthWrite:!1}));_.name="marks",e.add(_)}return{group:e,water:t,ripples:c,flow:f}}function xa(){return{pos:[],nrm:[],uv:[]}}function yi(n,e,t){return[[n,e,t],[n,e,t+1],[n+1,e,t+1],[n+1,e,t]]}function Xo(n,e,t){return[[n*t,e*t],[n*t,(e+1)*t],[(n+1)*t,(e+1)*t],[(n+1)*t,e*t]]}function qo(n,e,t,s,a){if(t.pos.length===0)return;const i=new ot(ps(ms,t.pos,t.nrm,t.uv),new Yt({color:s}));i.position.y=a,i.receiveShadow=!0,i.name=e,n.add(i)}const Pb=`${Wa}/models`;function Db(n){const e=im(),t=document.createElement("div");t.id="hud",t.innerHTML=`
    <h1>${e.name}</h1>
    <p class="hint">Drag to pan · scroll to zoom · right-drag to orbit</p>
    <p id="status">Loading IsoRim models…</p>
  `;const s=document.createElement("div");s.id="labels",n.append(t,s);const a=t.querySelector("#status");a instanceof HTMLElement&&Ub(n,e,s,a).catch(i=>{a.textContent=i instanceof Error?i.message:"The colony failed to load.",console.error(i)})}async function Ub(n,e,t,s){const a=await Ib(Nb(e)),i=new Rb,o=new Fr({antialias:!0});o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(window.innerWidth,window.innerHeight),o.outputColorSpace=at,o.shadowMap.enabled=!0,o.shadowMap.type=ur,o.domElement.addEventListener("contextmenu",D=>D.preventDefault()),n.append(o.domElement);const r=new hc;r.background=new Pe(12964020);const l=Math.max(e.width,e.height);r.fog=new Ga(12964020,l*2.4,l*4.2);const c=e.width/2,d=e.height/2,f=l*.86,u=new Ba(-f,f,f/2,-f/2,.1,l*6);u.position.set(c+l*.42,l*.5,d-l*.5);const m=new qg(u,o.domElement);m.target.set(c,.3,d),m.enableDamping=!0,m.dampingFactor=.08,m.screenSpacePanning=!0,m.minPolarAngle=.28,m.maxPolarAngle=Math.PI/2.08,m.minZoom=.35,m.maxZoom=8,m.zoomSpeed=.85,m.mouseButtons={LEFT:Xt.PAN,MIDDLE:Xt.DOLLY,RIGHT:Xt.ROTATE},u.lookAt(m.target),r.add(new vc(14148808,6968374,.62)),r.add(new Rc(16774372,.28));const p=new dr(16773330,1.15);p.position.set(c+l*.28,l*.42,d-l*.18),p.target.position.set(c,0,d),p.castShadow=!0,p.shadow.mapSize.set(2048,2048);const _=l*.62;p.shadow.camera.left=-_,p.shadow.camera.right=_,p.shadow.camera.top=_,p.shadow.camera.bottom=-_,p.shadow.camera.near=1,p.shadow.camera.far=l*3,p.shadow.bias=-6e-4,p.shadow.normalBias=.025,r.add(p),r.add(p.target);const g=new dr(14017268,.32);g.position.set(c-12,14,d+16),r.add(g);const h=Cb(e);r.add(h.group);const S=Mb(e);r.add(S.group);const b=[...S.cutaway];for(const D of e.doors){const X=new Lt;X.name=D.id;const k=D.stuff??"Wood",U=a.get("door_leaf"),G=a.get("door_lintel");U&&G&&(X.add(Fs(U,{materials:i,stuff:k})),X.add(Fs(U,{materials:i,stuff:k,yaw:180})),X.add(Fs(G,{materials:i,stuff:k}))),X.position.set(D.x+.5,0,D.z+.5),X.rotation.y=Rs.degToRad(D.yaw??0),r.add(X),b.push({object:X,side:D.facade})}for(const D of e.props){const X=a.get(D.model);if(!X){console.warn(`Missing model ${D.model}`);continue}const k=Fs(X,{materials:i,stuff:D.stuff,tint:D.tint?new Pe(D.tint):null,scale:D.scale,stretch:D.stretch,yaw:D.yaw,skipPrefix:D.skipPrefix}),U=D.w??1,G=D.d??1;if(k.position.set(D.x+U/2,D.y??0,D.z+G/2),k.name=D.id,r.add(k),D.model==="campfire"){const Y=new bc(16747068,2.4,7,2);Y.position.set(D.x+U/2,.55,D.z+G/2),r.add(Y)}}const E=[];e.figures.forEach((D,X)=>{const k=fm(D,a,i);if(r.add(k),!D.wander||D.name.length===0)return;const U=document.createElement("div");U.className="label",U.textContent=D.name,t.append(U),E.push({name:D.name,group:k,label:U,x:D.x+.5,z:D.z+.5,yaw:0,path:[],wait:X*.35,phase:X})});const C=e.animals.map(D=>{const X=dm(D,a,i);return r.add(X.root),X}),z=Ob(e,h.water,S.walls);window.__colonyUsed={models:[...a.keys()].sort(),textures:bb().sort()};const T=()=>{const D=u.position.z<m.target.z,X=u.position.x>m.target.x;for(const k of b)k.object.visible=!Lb(k.side,D,X)},W=()=>{const D=window.innerWidth/Math.max(1,window.innerHeight);u.left=-f*D/2,u.right=f*D/2,u.top=f/2,u.bottom=-f/2,u.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};W(),window.addEventListener("resize",W);const R=new wc,y=new L;s.textContent="Near walls fold away as you orbit.";const H=()=>{const D=Math.min(R.getDelta(),.05),X=R.elapsedTime;m.update(),T(),um(E,z,e.width,e.height,D,X),hm(C,X),h.ripples.offset.set(X*.015,X*.008),h.flow.offset.set(X*-.05,X*.01);for(const k of i.flicker)k.emissiveIntensity=.45+Math.sin(X*8+k.id)*.28;Fb(E,u,y,o.domElement),o.render(r,u),requestAnimationFrame(H)};H()}function Fb(n,e,t,s){const a=s.clientWidth,i=s.clientHeight;for(const o of n){if(t.set(o.x,1.35,o.z),t.project(e),t.z>1){o.label.style.display="none";continue}o.label.style.display="block",o.label.style.left=`${(t.x*.5+.5)*a}px`,o.label.style.top=`${(-t.y*.5+.5)*i}px`}}async function Ib(n){const e=await Promise.all(n.map(async t=>{const s=await fetch(`${Pb}/${t}.obj`);if(!s.ok)throw new Error(`Could not load ${t}.obj (${s.status})`);return[t,om(await s.text())]}));return new Map(e)}function Nb(n){const e=new Set(["door_leaf","door_lintel"]);for(const t of n.props)e.add(t.model);for(const t of n.figures)for(const s of t.parts)e.add(s);for(const t of n.animals)e.add(t.model),t.leg&&e.add(t.leg);return[...e]}function Ob(n,e,t){const s=new Set([...e,...t]);for(const a of n.props)if(a.blocks!==!1)for(const i of Bb(a))s.add(i);for(const a of n.animals)for(let i=0;i<a.d;i++)for(let o=0;o<a.w;o++)s.add(`${a.x+o},${a.z+i}`);for(const a of n.figures)a.wander||s.add(`${a.x},${a.z}`);return s}function Bb(n){const e=[],t=n.w??1,s=n.d??1;for(let a=0;a<s;a++)for(let i=0;i<t;i++)e.push(`${n.x+i},${n.z+a}`);return e}const Mc=document.querySelector("#app");if(!(Mc instanceof HTMLElement))throw new Error("Missing #app");Db(Mc);
