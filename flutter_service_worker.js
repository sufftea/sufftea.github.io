'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "b0c3920b7212ad421ccc1859731345d3",
".git/refs/remotes/origin/main": "b0c3920b7212ad421ccc1859731345d3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/config": "61cbb65290efdbcdf1924f3a4ae9b1d5",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/objects/51/033b7e01c7cf1990812374fae1442fa663eb9a": "75dd1ae894d3139a3f85056c8bd25a2d",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/4b/81a4479f631f05b1e1b61d0770ebdaa6b9a5ea": "2e524438b0e513f8c423c32804114057",
".git/objects/c4/61f01dc044dc45177510d56521cd66c769d9db": "1cd41b68d9a9bc5bbe48359c8e315304",
".git/objects/1c/b1a0be0bf1b8b5c57bd13884ce2b795afb62ed": "ffe8206a9e5e493b7863d28b43be625d",
".git/objects/1a/31c13eb2d93cd72fecdc04641e647ca7ad729c": "51a627dcc81fe402d6892a0b7926b571",
".git/objects/37/4d65a4461d55a228295c6204646de5be49029e": "a2b8e0d5660f56a75a034802dbdf0037",
".git/objects/46/86e080031b0fdf074b2b3c7970bd36830158c7": "526f079fceafbe414eac4923dfd2bb27",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ea/91a30595a384b8686859582ba679b3b170bc0d": "fd400eac804de89d88c122b359245dda",
".git/objects/5b/1f460a4afeecaa94e4d63bf7f9c409ca68bb4b": "c4c2e3580771ae676da793279c7bb0c3",
".git/objects/fb/0deed7072e55400698146bb82a8e85deaf7925": "248853d8b6878a82e789b87536ff91da",
".git/objects/c6/aef4c46497644f850c18ed4535f253c6f88fd4": "451a81300081ec33f4d99fcc3cd2be67",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/a3/acf855398bb4dac2d33ecd9293bd3034cdd256": "351115b1bd36e92e1ff4e24ec1ccddcd",
".git/objects/bf/cd53052cca6883274a383fda6eb4722f26646a": "2b9d2d9dbb91c170ef481eb571a2b816",
".git/objects/80/c3420e085eb3bf0fcb2f8fc28d5f203df2d720": "6d81eed2cd99f6db44afd34fb15b1aa6",
".git/objects/09/6edf8fe4cd778d56cbd9ad5333f8bb5b4ad797": "7be60abd3bc20b5c841c6c8b39dd88c2",
".git/objects/33/a15488cfcaf084c4bfc6242b238b66229d7c9d": "29500dc02a813fce9cdc9cbb331878b1",
".git/objects/65/40505491c6df5398357f5b59d45327b7a5833f": "eb1c8b8a7aed1d5034e8025d5bef9dae",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/7898690ca1cafdbb1d8ac33c76d71e3a059d42": "5c60ae08473afd83716a27f655e3ea81",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/1f/2c2b4f9f9fc23f24e0781d26e0be66ffc0b759": "f19e54786915b2d4311b53efad2b5cb0",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/7c/61448f6cc63a9f140e28d204ce38aec22e2df1": "09860f9399f58ef88ad6b0665336d331",
".git/objects/2a/62ac2965dab0e147661376fec53e2d38fa2f95": "fd2199eaffcfb543f4b815b1e1eeba5c",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/fd/fc078dfb1547c3458950ced0b46e5363790193": "69a126aee6a9bbe9e2d880256aa9dab3",
".git/objects/6f/9d3b340cae64fae9d4c52694c2725209152a91": "ff96e0d0410bf9300a26d8414fad0fa5",
".git/objects/5c/75a37195b82b16511a286fe63db9a519de9afb": "78d981a544a42c42bd3af19d47feb30f",
".git/objects/44/7d42a59e48bdea8b80e64c32ce06aad5638a9d": "55571bf5cfc392723c0b1425a340d17a",
".git/objects/d9/f441ad8331428c405cb381256ff29f9a0b0429": "ef0f336cc8a013a034696c3a3d7ce01e",
".git/objects/e3/6a2f6fb597de3260f794f7ab83c90510bdb6ca": "3fd823f3114faafe945ebfec684e0bd0",
".git/objects/82/3ae00d9550556593c804c7631b7642a187117a": "a3b1b788e3dedab34a55621d06be2802",
".git/objects/ac/c80950697829c0fc73da2e7b21bc724bd70d21": "efba0bd79dae106bddbe5dc57bde815b",
".git/objects/1e/1b2161b77299a5fe2262ecb1e1eac9822ea1ce": "a4b2078365fd1ec5bd9488e111fa212c",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/98/0210a9db53909b0af85b6c7e635589bc19b328": "eb3dfa34a59d947a7ef344b5fe2af3a0",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e1/6aa3f6624b55a8c409fbe9f509ebd9a558ceb9": "115ade5fd5402682373d54b32f4e6aa0",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/41/ef2936455539fc16ddd131b4677f11485367de": "15385e3fb54cadb77ebc0dae100f9126",
".git/objects/95/abc2b580fd1837c009a841d7b8b5f8d62bfbdf": "af2a1db29a7d49fce7ed021e82242cea",
".git/index": "52611bcc6fe165de40519dc11d675954",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/heads/main": "5883448cf7587c701b381b699043c003",
".git/logs/refs/remotes/origin/main": "63fe51a4ec3f49cb1369d83a916b43b9",
".git/logs/HEAD": "5883448cf7587c701b381b699043c003",
"main.dart.js": "191ddcf8ed36b8ddb419687fec07c12b",
"index.html": "cc19622390d581c8343337dc4bf5d025",
"/": "cc19622390d581c8343337dc4bf5d025",
"version.json": "10480ab669b41b140cc75519feb448ba",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/NOTICES": "c14510e1005114ce8a4b4decb4205bd7",
"assets/AssetManifest.bin": "647fb026ddd5e51fca594a7f3ed1a2e5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/fonts/MaterialIcons-Regular.otf": "d61d7b2ba18eb40ead3086c42f878197",
"assets/assets/nested/chat.jpeg": "3a5ae3e2bc80dc9d4d867963adcf9c9b",
"assets/assets/nested/docs.jpeg": "e204afe05f9e9ac25d90724e3c4c1886",
"assets/assets/nested/inbox.jpeg": "9287f1b9977c3bc27a98093984be99ed",
"assets/assets/home/dialog.jpeg": "e0e7ccf45eb51e471292ea059fe09c8a",
"assets/assets/home/header.jpeg": "ab8d6c3487ba167d2faf91b5b9adeb4d",
"assets/assets/home/typesafe.jpeg": "116bfbfe5b060d1e4a5feea86c3e7ae3",
"assets/assets/home/guards.jpeg": "9177b7539fa00ea2dba6b6cfb8813cea",
"assets/assets/home/declarative.jpeg": "0c8c5d7425f7fb194aae2aa72b4e514c",
"assets/assets/home/extensible.jpeg": "941bd1a1d2cb2d69c3227b86e75cbdf2",
"assets/assets/home/nested.jpeg": "8bab424b7f8e4303a79d66922119c0e4",
"assets/assets/guard/secret.jpeg": "7bd4e275e8a0532b4018b1342032ee0b",
"assets/assets/value_based/product.jpeg": "01c6bca5a45236081331996c235b153d",
"assets/AssetManifest.bin.json": "05a2637812b718328d9a5511cd544d87",
"assets/AssetManifest.json": "f45a3123d593942468be9b5d4ffed056",
"assets/FontManifest.json": "578fa61108a9a871931214344b9060a7",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
