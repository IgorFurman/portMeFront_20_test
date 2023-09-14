'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "23a8e56e0933758987b145a90eb046c1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4d89b78b8e18a5b903be0f0a61370731",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a7fb5a15701b5a1929d1b9e225be0258",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3ef2780d104e9b84dae8e3ee0fc2a669",
".git/logs/refs/heads/main": "3ef2780d104e9b84dae8e3ee0fc2a669",
".git/logs/refs/remotes/origin/main": "ecb6f806bea96bd128e136aa5234a5ff",
".git/objects/00/9dddbf33ec841d6c1da3de986bc17312478123": "2b7849f7678ca424b0c5dc515075476f",
".git/objects/04/0ec46bcc6aea656f98aadbd626dc1098d51c91": "1d09ef38f1f7ac52128dfe7ccbb0dec2",
".git/objects/08/2019a84d2f8878736d23a6238bab05d1a50254": "3a4d32f21ec6960ea7d9acccb3bd8a15",
".git/objects/0d/ec38dec4a3f8d0b4f839999385f26c5722b491": "7cd50f26fe4eb3ba0329b4dff0e07cdf",
".git/objects/0e/201ec732cb50bc10be57e3512dfea2263bb183": "95ae2699d66f42a303b0aa86e1bbc823",
".git/objects/16/7679a085f30c01d8e6d007871ca42336b39085": "3467ad0e4cfbaa60dc84ac29187ebc24",
".git/objects/19/20af1e526a255ee2c70c5c4fe6eca54e768f0e": "eba684fae2f6d88d01f1c37af7c7d306",
".git/objects/19/f5d2fdb5c00b02b493e991d07480858a56d6fa": "3eb4ef9ae47bfcba36c9e1818af5e9d8",
".git/objects/20/1cc58b85387a7c15ca41662393dbd53e9c600f": "0250a4f0eb6d058379358ed628505414",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/4045b9d58cd8848644ca42bb74916f63b430ee": "2421a4e4638fa24fa35df3af27077331",
".git/objects/27/46e7b34a8886ac0821fb9fe1913881c83e5963": "60a9b4869efa44278cdc804419996b09",
".git/objects/29/a250986f37b5534bd46c2aebb89d8d9c676f45": "07ae4b3eedbd4f27252bed300a654a2c",
".git/objects/2e/91c03a3570563fefa397bea199c17b523994c7": "f50c490d123faf51ef251fde886fd7b7",
".git/objects/2f/0e45fa3c8aa7d59dc3e47f0ac1c7623d423aa4": "5f09bc511547c19681f7590c383e3978",
".git/objects/32/18094da20914648b2983535efc8e19ff47d579": "b8a463386c58e8f5b773dc45b8e1be89",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/40/099729fbde3a8d4e19331e96ebb5fbd88ab077": "72d49e132aedf74d997261942616dce7",
".git/objects/40/201ee1728c7e605b25b3afb7eb5003f16e5878": "dd753103d0074125c4f6f162a31a2165",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/48/00c6e245793044db6a73108d8000fbf705fad6": "5abc2b6de3e71bc093f99660802f2167",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/e2d1c669a74263b52e6a8e35811a24c72f2ea6": "9215aadc4f5ca382fddc679f43e236ba",
".git/objects/54/3f03deaa72b5437e2fca86a2e30a6cf2981491": "b677d1fd21efb47bdc85d8b0f028dc28",
".git/objects/55/099e822b86c848fc2f9ebf038e88c37f240fc5": "db88dba498015f73b9b3d2f99f769667",
".git/objects/57/8ffc38e206aa5bb2f4265d1c7477e749098f24": "b1ed51ebf23ea48d67a19ce3d88ab994",
".git/objects/5b/e3991d78eb93b3c727a62759252c4fe4df6bc0": "0573cd379958c7a6cfaa56597b9eaf3a",
".git/objects/6c/e9ffb2619f6b05c67770e2eea40624557bfc79": "f5e195cbccc06212443286763322eafd",
".git/objects/6d/52a26c70897aae688ce87c2d243ee390ac60d5": "45588095a312e9abb5ac60cca11e9e5c",
".git/objects/6f/1451dde8a552ace0f98abdebe47ecc327727cf": "7ce87cd7cfce0a6881ce4172ca829f3c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/0f94650c5472fecea06034c99720fe37cf3eaf": "6c4ddae42a43823208c5b732c2c1dd77",
".git/objects/86/e4ef46fbddeaa8a6f75dc4406873ad588fcf65": "2f6633cf90bb210572cda27d3b797fad",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/12f159bbd6d8a613254e6b926a08797f47b3e8": "a5c9b49340bac3f3ead56acbf260b33a",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/93/65268aeccfbeacfe294eeeaa326b277c832ff6": "8c99563a497d4b0f8ba5ab9339437b00",
".git/objects/94/b51965b88a0882a187e1f4dcd5770f4564f314": "05080c029aed53d41c3025772d840a0e",
".git/objects/96/563ef639fb9000f8d237b61933723339e12eed": "6a9c28edd78d942e30ab7e02acd8ebb0",
".git/objects/98/9f323b1e32b3522c404c91818fb9b67a5e76c0": "40621651a2d95c3406fd94d623dfce09",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/59a306bce7663df4aa764e57fa6259d072fc0c": "a6d3ca2456529b1b54674e1124a13138",
".git/objects/a2/566201cc0c00fee304a420b60417b579452179": "2718a4bb17f5f6830c6d6ab97129ee24",
".git/objects/a2/6f03e900419679289d243a62cdf056a6377623": "3dfbe0be8298367f78be6f37352bd74f",
".git/objects/a2/7cd5af4e525c49f5354e2f325f34b70b1d28a9": "a964087a4a0c1a6dcea52dea794357c0",
".git/objects/a3/d78350e8e7696aabceffa9b3afb32434ae9099": "7f21f8a8da2bcc22987deca9e9a9844c",
".git/objects/b3/7dea8b563716a877d5cc017cbf01bf9c034a29": "267b2874b3454c0fdec8dec59e9db623",
".git/objects/b6/7b6384f33c99a7a392bd9524b9e84286ff4d3a": "aab1c4cc78e8d1fcc4e1a1e5ce5ae19f",
".git/objects/b6/94967d89498dd399814bceaaf13aa26fd706d5": "f52a2e2d58dfb9643dd7ca9490a80d6e",
".git/objects/b6/b7d4d46ac5b04c775e8e4a6d478d80e43ed141": "2dab3da2cef1df5baa888f126cdaaa43",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c3/2e0ae5744099952b103d2b0ddef0a9c6ca6fa6": "f9d9447bcd7e48e3307345e97e24ac68",
".git/objects/c3/51f7deeda468257dfdb45ae308726dcbc28042": "19890c75a8ba27275c57431bd95e370e",
".git/objects/c4/f6dcc98c757923e619ccc0e8565b0ee3fbf4f4": "6f44d698f297b779e39ee990eb372ad8",
".git/objects/c6/2a3dc97c657362a85c09ef7688b5c04312509c": "1ec9885f24e0302c0805028e97a3682d",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/b591ae431a3c68aa1727d54691036ff39f7ef4": "f826fb5153d67a1fc33f8e01bce7cd2d",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e7/3ee18cdbaffd77ca283ed30a8a499fed676a76": "2264b48b7bfca3f9f5247dc1544d8f37",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/b7e4e7a882dc8e42944398e7d5d65a39ef71fe": "1cff607293a9663c94a45130e1afcb40",
".git/objects/f0/8fbd209a91f6a24ef298d6328b06edc99b4084": "55b4632d0e3ab0ed2c636707a299e038",
".git/objects/f1/f94a574121d4a9d61d4de6f220a32ba1762919": "231892c2bac3cba0bc75a81ace5fa0e6",
".git/objects/f5/778ca6d4692f37848a9c88518ebeecfb8ecf8c": "88e0c82bfb6d8b1df129987759288be5",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/ORIG_HEAD": "724083af8ba2737b353c43c635fdbf68",
".git/refs/heads/main": "724083af8ba2737b353c43c635fdbf68",
".git/refs/remotes/origin/main": "724083af8ba2737b353c43c635fdbf68",
"assets/AssetManifest.bin": "60687131a3dcdde7217f2adfdd2218ad",
"assets/AssetManifest.json": "05bce86bf194fa0f1bb5ad4c39169eae",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/l10n/en-US.json": "4df070d976957a8a5a41b049e4f403f1",
"assets/l10n/pl-PL.json": "df8032174c7aa295ba8e576b8c90c2b9",
"assets/NOTICES": "353b0ba576fbfbeb8610a21b4751eb61",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/packages/linkedin_login/assets/linked_in_logo.png": "86b61ef3acce4c1f108238e2ea4f5d1c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"auth.html": "807d78a21807a7e105fe1c4a2b066563",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ddf636ad3cac0b85724edef009b5b3c2",
"/": "ddf636ad3cac0b85724edef009b5b3c2",
"main.dart.js": "b3849dd2b6874ee43a127e7397818653",
"manifest.json": "4137147246a11ba2148318bc696c4202",
"version.json": "c5dbf69953aaeefae040d576055eb10e"};
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
