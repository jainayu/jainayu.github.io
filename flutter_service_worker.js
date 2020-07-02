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
"assets/images/myPhoto.jpg": "989cfda3c9d7bf2dfd26e11e5c24a8af",
"assets/images/darkBackground.png": "ea435a57edc4b2bc5425c0303af27d7a",
"assets/images/myPhoto.png": "841543e2fdabef8561f93ac554e307ec",
"assets/AssetManifest.json": "84076f532670f52c13c3bf7dfcc15ee8",
"index.html": "c89fc7a0c56a736761bf900884804782",
"/": "c89fc7a0c56a736761bf900884804782",
"apple-icon-precomposed.png": "a225aed438b0ca8922e754525e5b404e",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"myOGImage.jpg": "0c695ccdd5ec1d21a9ca436d374609a3",
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
"main.dart.js": "0742cc608a96b6741869f4ef67004344",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"apple-icon-57x57.png": "aba97e542c69e7690e9f38c352a58e7c",
"favicon-32x32.png": "49a8be67bc9af1fb47563f9d26b28c02",
".git/ORIG_HEAD": "26136dcf47c1a6e7b3a618f6f635860f",
".git/COMMIT_EDITMSG": "bf89eb179246470ace4d2df43917f38e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/refs/heads/master": "c1c50c1a377b59137d8f01b6fa27cc68",
".git/refs/tags/v0.2-alpha": "d3f71d7ca22196918d538b1d47b437dd",
".git/refs/tags/v1.0-beta.1": "b5c9f1e3dca57d4556c5762cc2dbd2e1",
".git/refs/remotes/origin/master": "c1c50c1a377b59137d8f01b6fa27cc68",
".git/objects/0a/b21e889597ff62257b741bfef096eba4b8f635": "3e5c3b3305d0f3593f03e488803e4146",
".git/objects/e0/e9f36d06bd927ad74c52c7f8b0744d5b55eaf9": "0a20bf3c689d71f11aa1e8611734e259",
".git/objects/96/ab79514bdc4e5efea2651cca9d581c97b066b0": "b04bc75bf94d87ea496121c9f878a3e7",
".git/objects/59/97f7089cd00ebfdd4281f580712e0c977dd6af": "a7048f7bc5c0482b692ae449d8349a2b",
".git/objects/b6/18473a70b43f680a24e2ddc592fa9237d7306f": "85533080334ca01200bd8f1c55db12ba",
".git/objects/5c/1dc2a24453f8eeff13479e896e5292b9b54960": "cf88c01e2c8ad4886d33ea1ae79a2268",
".git/objects/0c/aeaece91911b76a7bc8f4d10820b8b9a93d072": "1b8e43477e47f777fa33689ccae5ee4c",
".git/objects/27/80ef6645d6226e94b9d73c867c53b4fc12ae3c": "cbe2cf451b2d4e3a94e2ea483522e857",
".git/objects/e2/daf338f4f9479b815d1360fbcacbf4b501b614": "545c3baf625bbcbd28bfa58af6ed040d",
".git/objects/56/738930c95aeb8c8a270a5d451708e5cfebebe0": "1cfcbffc480139b825cb71bb2da92ce8",
".git/objects/ae/b5ff730b507874a09dca69819d320ac6768c45": "ae9b76c5e705fd2ac9f84a8159d9bd0c",
".git/objects/f3/85f056d78cfc325e1289b4824a81a7a7620b34": "a60be070a34b2b630d0e4a78a4507b92",
".git/objects/e8/8c76b33d8557a23536e7beb19f588238f93d8a": "c3a81dccc21e7a11bc7c7ae01c523fbb",
".git/objects/e8/86aa8839865d1844f9a52627f5bc6a0dc6ea92": "c74c73cacab36288a11f39988282fe1b",
".git/objects/be/6a0413482f8f0fd2b324ec035332522f409d74": "3df075b2a36c0d561269c8d8ea6b8d24",
".git/objects/be/cb0576f28dc3530f92275da4eab7e3cc9028e7": "b4f1ee7378752f285f2859d293ac325c",
".git/objects/81/74d6ce6a7a2cae588f657f9bbe2c9bd4e34bbe": "c56ade46ba3e73efc7ea47d7b83caef8",
".git/objects/5e/b6dd83d65f26bd8e715a8e6ccc19fa30e1f93c": "ea13eff0d0593b4911a89d6bd8adbb06",
".git/objects/88/3d00f942f56805274e2a5c0d0abcf9402df88e": "f2bde79defc7db29a0a1b65fe12398cf",
".git/objects/23/4afd471e26a966592b531961ec43d974af4f0e": "5cb92606eade94eec00203a7abec6b73",
".git/objects/4e/46b5739faa0c88fae887bb615e38ae02a0f42d": "b01a0e1ac8197fc1a6f9f42a5f7c9d08",
".git/objects/f8/fdb73385b591038d39c1f7e6ccfd1c3c352c8b": "800eaf7d6832f8aa9051e8dc343f4758",
".git/objects/cb/e700258103dd25a35c24abafd8d707839361b3": "1d2b8776a46f6c49113807a9d1754d6d",
".git/objects/cb/df968d3d9ad353bb8dafe29f40f98f73ec01b3": "8e515ad60ed553b80b9f2ff307b0e425",
".git/objects/75/984459a2f0f6a24bf0d9dc45d9112a69c0bb8d": "eacedc4d5da3287a605e7275c369d85b",
".git/objects/69/1f08b6cb0bfa6641a89c41e6b4d6179c41d89f": "3bf45433266acce1de1d5e45c4a6a273",
".git/objects/pack/pack-6faa0a752ec53a7c417a1b2b29f732f41e97b1a0.pack": "d77dda20e38e7807461eed23cf3c93bd",
".git/objects/pack/pack-6faa0a752ec53a7c417a1b2b29f732f41e97b1a0.idx": "d85ed91c3b81b568f4f9a20a4464e1d8",
".git/objects/33/82227a5940836453a02cf7e99c5eb681825e9a": "98c22fd66dbf4551524a54c48f2ceaf4",
".git/objects/29/512990d513b20ee7272b9dfe0811d28e3de1cc": "d21c157d580765b3746fa46350d4771f",
".git/objects/e1/7299f4c22d9273cbffb2475650920ef83573c9": "91c98ff29c90b207565cd1f000568e76",
".git/objects/76/c018479bbf63b642c670497fb6beea4e4e7f77": "a1ed68dd666b82c541fb7ff711d262b5",
".git/objects/8a/55dfcaef7ae3dd75da97aa119a2ff5fd6b894e": "8d1b452705c06da8e0636d8cfac8bd86",
".git/objects/51/45bdb0d82e05040b0d710985b493299a4ee606": "12632ee95928f50f7c87a9d0e1be8b30",
".git/objects/04/1c30fc9dc1cc838ad1a00c0af7f16e2467cba5": "b60c40d6123c6442e10afbbd239d8b6e",
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
".git/index": "1319416aecc96934dcbe1adfcd91fe16",
".git/config": "7adce7eefc76c289ccc2e8188f23eb93",
".git/FETCH_HEAD": "242f9bcb5e62f8c012479cb9b682d208",
".git/logs/HEAD": "4700ae8e152e7f251ad84c6dd39e96ff",
".git/logs/refs/heads/master": "4700ae8e152e7f251ad84c6dd39e96ff",
".git/logs/refs/remotes/origin/master": "75497faa134ee7bf8082dbc9bf346bb3",
"favicon-16x16.png": "2a548e93ea4ce3904a4e59197f0740a6",
"apple-icon-120x120.png": "e1f4a990ce689c50579c1ddc4e04e5ec",
"manifest.json": "f8cf8c608427a70092784ccd63b96f1b"
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
