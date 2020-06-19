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
<<<<<<< HEAD
"assets/NOTICES": "42d4359dfd5f8fa044b30e52bb14c492",
=======
"assets/NOTICES": "c945b63e3f4e808be1b460b3efa1a3f5",
>>>>>>> ca4269d5facf16deb0157c05e6d2e20fa4f3bc54
"assets/FontManifest.json": "e56c404021f361c1510c701e3af351f8",
"assets/images/myPhotoNew.jpg": "989cfda3c9d7bf2dfd26e11e5c24a8af",
"assets/images/myPhoto.png": "841543e2fdabef8561f93ac554e307ec",
"assets/AssetManifest.json": "417bc462044dd8831337c5903f900cc8",
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
<<<<<<< HEAD
"main.dart.js": "21e3c197cd8da08090d688e95c358cd8",
=======
"main.dart.js": "afb2085f47eac83dd57f7704dc62fc21",
>>>>>>> ca4269d5facf16deb0157c05e6d2e20fa4f3bc54
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"apple-icon-57x57.png": "aba97e542c69e7690e9f38c352a58e7c",
"favicon-32x32.png": "49a8be67bc9af1fb47563f9d26b28c02",
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
