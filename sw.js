if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-4a07956d.css",revision:null},{url:"assets/index-bb9a370e.js",revision:null},{url:"index.html",revision:"cb936eaa68f9f0104348eb406a1cfe3c"},{url:"registerSW.js",revision:"7ef0582e7ec97b1f31281b58206bf210"},{url:"arduino.png",revision:"c209c769ae19f565756dd393d9893850"},{url:"manifest.webmanifest",revision:"e7049b2917165a9149e0e64b6f859766"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
