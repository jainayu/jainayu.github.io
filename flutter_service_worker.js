'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "apple-icon-114x114.png": "39d1ea5a27c67736a4cc9b18c11c5145",
"android-icon-144x144.png": "b455098384e75553c8d391a6b574ec4e",
"apple-icon-144x144.png": "b455098384e75553c8d391a6b574ec4e",
"apple-icon-152x152.png": "a4c7ebb7c2c6a1ff8de71320a1d3881d",
"ms-icon-70x70.png": "37241f6f42eae9ffff6f6b612d745df8",
"android-icon-72x72.png": "4598ccc368059abb016598042a4c52f0",
"apple-icon-180x180.png": "f25b06d1d79664dca485ac2f1387271d",
"apple-icon.png": "a225aed438b0ca8922e754525e5b404e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Poppins.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/NOTICES": "6184f57afae37fe7b9af2e0c3f52a83b",
"assets/FontManifest.json": "e56c404021f361c1510c701e3af351f8",
"assets/images/myPhotoNew.jpg": "989cfda3c9d7bf2dfd26e11e5c24a8af",
"assets/images/darkBackground.png": "ea435a57edc4b2bc5425c0303af27d7a",
"assets/images/myPhoto.png": "841543e2fdabef8561f93ac554e307ec",
"assets/AssetManifest.json": "2be2daabe9ea87d4e8c00c34e96d8b8c",
"index.html": "92e4bf2cbab0617e0fd50a8e69237141",
"/": "92e4bf2cbab0617e0fd50a8e69237141",
"apple-icon-precomposed.png": "a225aed438b0ca8922e754525e5b404e",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"ms-icon-310x310.png": "779efe3c07bd3b1eaf99237cbeef17da",
"favicon-96x96.png": "966e495f20828fe4f1d977bb107996e3",
"ms-icon-144x144.png": "b455098384e75553c8d391a6b574ec4e",
"android-icon-96x96.png": "966e495f20828fe4f1d977bb107996e3",
"favicon.ico": "7b8f166616e0c2be8ef437b9d09fb304",
"ms-icon-150x150.png": "de6799d072135f434378f6407667fa27",
"apple-icon-76x76.png": "df3b62f6e5b0bc444f69502880787aa8",
"apple-icon-72x72.png": "4598ccc368059abb016598042a4c52f0",
"android-icon-36x36.png": "4229d07985f9f105a1981adc9fdf56a6",
"android-icon-48x48.png": "8e730414978ddb987e779e7a558269ec",
"apple-icon-60x60.png": "ac9e0944a551ffa349cd4971f5ef0cae",
"android-icon-192x192.png": "75261e467435994008ebe83f3a1e99be",
"main.dart.js": "906c953f783934c5e13d208a06c8c55d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"apple-icon-57x57.png": "aba97e542c69e7690e9f38c352a58e7c",
"favicon-32x32.png": "49a8be67bc9af1fb47563f9d26b28c02",
".git/ORIG_HEAD": "1eccada98a7ba0123a23786ab299c9f9",
".git/COMMIT_EDITMSG": "eb597a72681ef66f127ee15938700e01",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/refs/heads/master": "b5036f6abdb09a07ca2d48bc14a12437",
".git/refs/tags/v0.2-alpha": "d3f71d7ca22196918d538b1d47b437dd",
".git/refs/remotes/origin/master": "b5036f6abdb09a07ca2d48bc14a12437",
".git/objects/c3/0552d423692a5027bfd242e275d4475bba75fb": "e8f101911cc14ffb2847aa0e21868713",
".git/objects/cc/19fadd7e9c19cd58fe9c2624bfea12c385c5ba": "65341f801e1c9182849ea8260ff83fb7",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/18/782a4f9c41ef83f5e3c3134b874b8700476336": "af90129d82137860830a06e58aea87dc",
".git/objects/08/a8ea4f3a14c50c3e21086238610bc08193f14a": "d740d07db68690bab0cd16d158ce09cf",
".git/objects/08/f51f6dc85a83b428728c69feb4ff4b630fe038": "e9ec93d36bb7c9927780734a324f86c3",
".git/objects/f4/8157c912f5d5b7d1a16c09ed67c97f0f3cdc82": "0f6ffb9e21ee9ba1600dce2e073fb18a",
".git/objects/85/2c0f6d058bb27d3ad5cd06440efec1d34dd514": "7d83ad58dcfd28f8b86ba6ebd7f1760c",
".git/objects/44/1d3baab4f3bfc1ce251942e420988fac12a8f4": "ac3a2ba50af07d40313ad29d8023a3b1",
".git/objects/49/ecaca729027e2c7dfcf6e88b1ec5c3b1041cc5": "510513418104639816fbc38251f144f7",
".git/objects/da/69d4708f45e456681ea5977ea1e4655db6183b": "1859bcdfda3fc5e1f3cfd1dfe1044e79",
".git/objects/06/51cfb3e2be118598595e200856828675b5c9c5": "d5359542775e541de18baef64735c589",
".git/objects/17/ce311420cb954aee1ed7c3487794cd084cd4e4": "d5f209e8ab2903112706b6571b87437a",
".git/objects/94/b8f1ede227f4a44b5e94857b1988245fcce43b": "d47cc2c92425638e6b61cdc3a5d12ec3",
".git/objects/64/2915ea8e019f334a7e0f637a2cb6fe62284f4e": "eef4506d616ca98275a4c51c176cd1ea",
".git/objects/78/3cf3870c63f833697c699c02b3acd3bbf10eca": "bad6fa427319b9edfb4937676b481323",
".git/objects/78/91901f1fb373dcd8db385e13faf5ba845d5819": "e1c3ccf2a610adf7d00b3e17c54849ad",
".git/objects/5c/b218aff91a6a41f90ad0979bcbb6ecdd504ab5": "55319cfb72e695d6ddd3e08b477ee97e",
".git/objects/60/d428ae09e077fabc75f2db6109e7ab57a0f9d0": "cb743b52fcf60183f58a48d34e766832",
".git/objects/0c/2ea901f59285018e542c1122f35855705e37f1": "07cc1ef8a0776b861266daf94173626b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/97/c3522f92e9bf58802abb69b2246d6a33a88dfe": "cdcd02c436af7c4ba8d85ec6759ebc99",
".git/objects/f3/40cc80aa786df9299dc4399d86db0163ed8cda": "1518b583826b599445bb51b02f13c956",
".git/objects/e3/bce22866b143ba5956a9026857e4a9d3bfc8a5": "69b482492c7e0a5fd18309dd8f6ba609",
".git/objects/e3/9f43a4bf88987fdd973f6a1170fe025483ca78": "97828d1ec3a46f2594b847fa59f027a9",
".git/objects/70/ccab0059b6749a71647bdb505e93f3b4371757": "eab15deaf0b8ae01aa3a8c260a929934",
".git/objects/47/d669a3f44e8cd3fff22c30181ee86da5f4b047": "aa6dcab275d73632315b0935bd1952a0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/23/9719be73236783da3b1fc8913269c34fbc6309": "3fa1143645ccd1a1b69cdd8bd0f91494",
".git/objects/6d/c3cb7f51fede6ce668edc9e2933d1d182e6eb8": "ebf7103ef05a762ff4bfa9e0d33e67e6",
".git/objects/5a/3e4058a749a24c250fbeef2be155844d0b3cf8": "5c42f2631ce2c7d3ccd99e00bb0f70a8",
".git/objects/75/376fd4f78ac837d0026d866dd162151bec1a4e": "9264b228ce0aff899029c3bdb21c3104",
".git/objects/cd/c7d59d27511d65c873bad89cc7b4c124904b7f": "da885a40cc9f4a2b844b775ecd72c503",
".git/objects/pack/pack-88408d14e112c4d374092366d7e827921b44c133.idx": "04c3aff83f2472b4cc1e828f70abf427",
".git/objects/pack/pack-88408d14e112c4d374092366d7e827921b44c133.pack": "7e29bf53bedddf8e5975ee3f416dd1ee",
".git/objects/2f/5bd5ae67ee8f26e2a9dc0f083b9ad0760e5f37": "060a844518c9bf7bad87c84a1a68319c",
".git/objects/ee/3391b341753d35edeabe9459ec835e487efe10": "066f8eeab28329fc7a3f8f6deb5b11f1",
".git/objects/5d/ebd9b001dbd5de33c5db55392c6902b8c3db36": "0cd1ed27d3eb2611d2435a8083890ae0",
".git/objects/ff/5d81e8a3b40f1cd53602d66ca32e74d3918983": "b5805f7b337ce93cd62c2efbbad0916f",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/3b/233b91caf12c224d37937d465d426b6665b668": "b3f18c7d86d675fa3c36c674abe2a0b2",
".git/objects/76/ab6a72c4323f8d77a944f7c0d8f8dd5a9840a5": "c545b3da9a9ca7d8f88412c104ccdc0c",
".git/objects/0f/9ae1e05b4a1b4e14253c79cdbe338a401a4a8e": "ccd61dffaa1868f891e8aab356ada7d5",
".git/objects/aa/7c7abebff7073a6a8b1c5603fb2f31174ed0e6": "3b03d72403dec56d11abf8e4195d928f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/79/885dc5b983e7636764b7ce7e496b66423a1e7a": "b56a446dc6bbafafabeea8cb80558b73",
".git/objects/d4/99f90fa75cd7ab97c46d30f286314c6de76b8f": "ca71750deeea2a2d157062a27458af81",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/2c/b629e5d55407919e76e65d0beae5d73cef3adf": "d02227b0ba721be71117c00348be991e",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/index": "149e25305675d9f739d56fd29170a4cf",
".git/config": "7adce7eefc76c289ccc2e8188f23eb93",
".git/FETCH_HEAD": "ed9a95749e234b99cc19ac280ab314cc",
".git/logs/HEAD": "e26618f47dbbbc499fd38bff3c8385cb",
".git/logs/refs/heads/master": "e26618f47dbbbc499fd38bff3c8385cb",
".git/logs/refs/remotes/origin/master": "af2e48f8ffde11729909920ecf848a73",
"favicon-16x16.png": "2a548e93ea4ce3904a4e59197f0740a6",
"apple-icon-120x120.png": "e1f4a990ce689c50579c1ddc4e04e5ec",
"manifest.json": "7d407fb982ff9593ad74a1c094c6ad2d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
