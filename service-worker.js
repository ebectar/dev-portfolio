"use strict";var precacheConfig=[["/dev-portfolio/index.html","59c7084219dbca7aba83f8f161744ba3"],["/dev-portfolio/static/css/main.6a15c6cf.css","ed33c4895573c92cd655c5ccab4d0a7e"],["/dev-portfolio/static/js/main.2c5509de.js","05afe92ee7409ae05df58b69191b379d"],["/dev-portfolio/static/media/MusicPlayland.1478f342.png","1478f342d1ce1680fed3c9ab9c793138"],["/dev-portfolio/static/media/css.68f8750f.png","68f8750fd18b90790ac475feea84a884"],["/dev-portfolio/static/media/express.6966116e.png","6966116ef7687497ff21688c682fdb71"],["/dev-portfolio/static/media/html.f8ce9aa2.png","f8ce9aa2c91d0d301473aa6d8f6b82aa"],["/dev-portfolio/static/media/node.14ae3a9d.png","14ae3a9d1fee65791f7c3e3dc511ffa9"],["/dev-portfolio/static/media/postgresql.9918c140.png","9918c140f2d620a8e45ec5cf54dad89f"],["/dev-portfolio/static/media/queue-overflow.7a332a44.png","7a332a44715176b671f3497d7dd7f9cb"],["/dev-portfolio/static/media/raid-my-pantry.d078b74f.png","d078b74f1df1b8a28145647bd267f943"],["/dev-portfolio/static/media/react.bc732ede.png","bc732edef677195fc0b4f0720d0983fa"],["/dev-portfolio/static/media/super-origins.a0ae791e.png","a0ae791e070c199b7468a5ecced4f0b3"],["/dev-portfolio/static/media/water-still.f8d776cf.jpg","f8d776cffedbe670e17e178529b9474d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/dev-portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});