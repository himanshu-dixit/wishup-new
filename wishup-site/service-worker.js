"use strict";var precacheConfig=[["/wishup-site/index.html","2fc98ef1e3d8f89ad5cae8b19f63c4cf"],["/wishup-site/static/css/main.058b7c7d.css","e7f39117883a6d2aa192c72fc3c6aec6"],["/wishup-site/static/js/main.087ebc01.js","b192e76dfbc4e09e745e268ff8923c79"],["/wishup-site/static/media/1.1d69b040.png","1d69b040bb15c78763370db58d10c172"],["/wishup-site/static/media/2.8fc465bf.png","8fc465bf74c8a171449b6731c5ca70e4"],["/wishup-site/static/media/3.d3b963a5.png","d3b963a592a9103e4d31c45da9bb23ff"],["/wishup-site/static/media/VA.4cd0e53b.png","4cd0e53bcb4d22723a9752ac6091e401"],["/wishup-site/static/media/business-world.977483b5.png","977483b561b8cacdadc042e8727ae2ac"],["/wishup-site/static/media/cover.f131a81b.png","f131a81b9c95ba83ebf93ebe4d074421"],["/wishup-site/static/media/economic-times.6f4f06b9.png","6f4f06b98bf6889a204cf06761ccfe94"],["/wishup-site/static/media/header.d820cb18.png","d820cb18bbb1af8dfd6a11b6bdae2ee1"],["/wishup-site/static/media/logo.081e7743.png","081e7743eef8695b033cdaf4fbfae7ac"],["/wishup-site/static/media/moneycontrol.58918c04.png","58918c045f0a25a52601400de74d15d1"],["/wishup-site/static/media/pricing-background.99f5c431.png","99f5c431dc78fc9145c7cf6bef4307d1"],["/wishup-site/static/media/team.e7f6d323.png","e7f6d32362c5213be84f776890f21395"],["/wishup-site/static/media/telegraph.6fc0e8da.png","6fc0e8dae43a862facedfd3686d232ae"],["/wishup-site/static/media/thinking.01580d73.png","01580d73adad6a75e8d3106f0c7ab11d"],["/wishup-site/static/media/userr.f86134bb.png","f86134bbc26b02f0134a6603a6db3bcb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),s=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var s="/wishup-site/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});