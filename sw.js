if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let c={};const a=e=>r(e,d),o={module:{uri:d},exports:c,require:a};i[d]=Promise.all(s.map((e=>o[e]||a(e)))).then((e=>(n(...e),c)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-85abcadd.js",revision:null},{url:"assets/index-c2b1bb66.css",revision:null},{url:"index.html",revision:"d10915dd538aac2a9b00b8f950c2033f"},{url:"registerSW.js",revision:"7ef0582e7ec97b1f31281b58206bf210"},{url:"arduino.png",revision:"c209c769ae19f565756dd393d9893850"},{url:"laravel.png",revision:"a0a6ad7a89c99317fd36dd261de4420c"},{url:"react.png",revision:"6d6d5986fc56e8f6c7265ce07e31a95a"},{url:"juan.jpeg",revision:"7ad08994ff71a5b3262d2b9ebbb84240"},{url:"roque.jpeg",revision:"78901556000c0a492cf094b6152b3c4f"},{url:"wyli.jpeg",revision:"ed5abb706ddb6e0e8c7a7a73e6197aed"},{url:"Seguridad.jpg",revision:"b8a5dcaaa6ceb5b038b01398e52fc03e"},{url:"manifest.webmanifest",revision:"c964c48be1134da21b7bea2b4c254904"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
