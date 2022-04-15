'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8920a1bc9a67d5271c420f353aa412b7",
"index.html": "014ae8163792107f5068529bea411317",
"/": "014ae8163792107f5068529bea411317",
"main.dart.js": "6e2d7d730b19e50907678e149fcee095",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d5385fec312929b29e0e3e50953de34d",
".git/ORIG_HEAD": "850b6e1c93ed28d59b336b6af6c6bf12",
".git/config": "77906509c96165e3f4358177436ba20a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/03/7ad47f870a001b44b4477cab3525ef08cc5cb3": "e24921a042544fdcf3d9f373db0130b8",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/de2a77827e3349b938da93888e3ffbbfc8d0cb": "0d0989174a3296c7cfab15733b163a06",
".git/objects/0e/747742709d8aff732b58ade06fde2aeab1f363": "87d080c5387d0d1d895427177f7fe582",
".git/objects/0e/cfbcee2e4b698b5d12e1a0d19e6b808c236b00": "e086d8b4726a6fb446d891c778b42d2e",
".git/objects/33/17802cf8a73aef43c427fcb8dd4e6d341c9cdf": "342a4849c80076c940fa569192ed15e6",
".git/objects/a3/61904c51a4252b6e6641059ad6b1f38ba0d532": "68d2922829213cf20dcbb1cd700685e1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/3d1ebfdf2acbfe42c259041bf9b32694db47fd": "212ff761b8ce1afd0f028ab46c07e9e3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/a0861d4500c0ff9e506df4af4213a30ac55b6f": "82aeaca505cbeb2c8ed5b39a8a365230",
".git/objects/c0/1fa6db4d0599b2fbfa4dce1049e39b54e90651": "ba622dc96098084bff06369c6597ecd3",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4b/a85679602086373e951830be8c1b1217fed4cf": "6fa8d68097a1c8eda2e25406a901ab94",
".git/objects/29/4a66b7783b54e6e55a3f858e093c4346aa78ae": "6996e70c4b146901974956729d20f417",
".git/objects/45/6487b3a629eb2e874bad22f3fca6fae7816f54": "e76c8818999238edeb4ca0570ee79ae4",
".git/objects/1f/488d39879cf441e1e096006838dc9f6cd259ca": "08be32dc147e95a1f07e98989557980a",
".git/objects/80/b3796227b260293356a5d723d2b5e409d7c253": "4f921e5a1f84696a9d0aaf864cc8353c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/38cd6532dd061db177ec8ca8ce1a66e5c632be": "586ea7d7c321a796e048aac902c39cf8",
".git/objects/4d/a2f3de7849d7fb6844e57466c75442c76c1cab": "490481c68148f81723c1c4735ecf3bac",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/54/3d28238c3b7fb5d6e25bbb019a50ab490b0b37": "86efe6ea34f55bacaf8e21cf6f5f377e",
".git/objects/6d/e2983ac49849e0198aec689b8f2beb6127ae6a": "365efc8df4de4f1304a17ad349e5e42f",
".git/objects/01/4c2c2a01049512a45857647dc54bb6f415c7ab": "e614a83856adbfffc55f2853db8ccd25",
".git/objects/6c/23b91e8e3d404a4eac99caf8b0b753c85eaa29": "318ae0a541b912bdb9ec29da00bf488f",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/285111ce8e95d3aaf68070b4ef55569bd1db90": "5ed1790ae7ee23937470e89c6ad337c2",
".git/objects/0f/009889817e193eb18d555741508a68216637d0": "d388c24acc61cbf817927947f673c60d",
".git/objects/0f/32285d1e08ef0492f8c8327ef46b4912a1f4fe": "8218e1bb359226f0b0fac3ea266eef19",
".git/objects/64/4276b71411961d8657db505bbc13cc87b99e5f": "cdcb427b637c1bdf82192143b572bc10",
".git/objects/64/011a23e688ed5fc9096d5a907cd8d8653bfec0": "b07aa4c6fa21b3d3731a816f2e886592",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/a627526a1a11644fb316aee925390bc3a0877b": "ed4e195d0fa27e99ccb0c16f797b0899",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/f7/908cd1ee5b9e0414cd25a34348943434864086": "d8753baa892d13a23fb916f3e5f162bb",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/cb/b6764f94d72299726f03a7f9a514b7763b34b1": "8b567a7de1fd0f40cf5d702e7dbf51dd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/77/efae7aa3300807a7b72258d40653a9a5898eb2": "1afa4d446b139958db18695a1e8bfec1",
".git/objects/4a/9d116d6ea8f012a7c7c8ab7a8f5c0868b71682": "b442433f84f3ccdb48794e5d7fc74975",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/fbc695676c120e7bfa621ac50ba4cba1312c82": "6a337b6c0bd841084b8489c881aa993f",
".git/objects/15/2d6f280134556c8e11e1f5b0f33506242958df": "00c94707525b6d80eb87437c802a0c50",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/25/385054a9e8999cbe02d55d2a331e95db2dadea": "803e008f3ab199fd1629ce506d0e3481",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "13ce4a106130f9fbdcfd6e860fee5d75",
".git/logs/refs/heads/master": "13ce4a106130f9fbdcfd6e860fee5d75",
".git/logs/refs/remotes/origin/master": "e2b23eaec5399be88ae0ab0d41152f93",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "850b6e1c93ed28d59b336b6af6c6bf12",
".git/refs/remotes/origin/master": "850b6e1c93ed28d59b336b6af6c6bf12",
".git/index": "81d9f4c1432d1d83be0b611ef1db6e42",
".git/FETCH_HEAD": "f1a9bc49018d85f377de40fa71869837",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "aa6c7fa7989f1c6f838ebcbe6aa99de2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
