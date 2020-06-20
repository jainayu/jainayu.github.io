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
"assets/NOTICES": "1da3618a362a9376939f4dd175133463",
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
"main.dart.js": "f5a8e34ce044566d2df4cd0d489c4ee7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"apple-icon-57x57.png": "aba97e542c69e7690e9f38c352a58e7c",
"favicon-32x32.png": "49a8be67bc9af1fb47563f9d26b28c02",
".git/ORIG_HEAD": "e8d52daf7c6b0de0a8ed9b2880cd8cfc",
".git/COMMIT_EDITMSG": "82ac8df2dc56cc3d31712c35fe26a902",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/refs/heads/master": "b31af6a496ca35cb1ee570554f48fbae",
".git/refs/tags/v0.2-alpha": "d3f71d7ca22196918d538b1d47b437dd",
".git/refs/remotes/origin/master": "b31af6a496ca35cb1ee570554f48fbae",
".git/objects/0a/7f5f23bf53aa17cd27bfd669e736f0c0392b83": "99205649f1b0f1f42cd9eff7a1989be5",
".git/objects/c3/0552d423692a5027bfd242e275d4475bba75fb": "e8f101911cc14ffb2847aa0e21868713",
".git/objects/cc/91ad8549760a1889aa7125916376d01d1ce369": "bd5a9fd3f47732a11d314ca373344a48",
".git/objects/7a/dd47035e8900abc01d75513ff24f3897c332af": "a059aa95fed9a93f04b7446926097e93",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/18/782a4f9c41ef83f5e3c3134b874b8700476336": "af90129d82137860830a06e58aea87dc",
".git/objects/08/a8ea4f3a14c50c3e21086238610bc08193f14a": "d740d07db68690bab0cd16d158ce09cf",
".git/objects/08/f51f6dc85a83b428728c69feb4ff4b630fe038": "e9ec93d36bb7c9927780734a324f86c3",
".git/objects/91/efbf50b7534124c358a48a61bb59932f614cf0": "c0f97453d4d26970b5de443840739150",
".git/objects/52/47cddd7e912d93807dd8c6513118f4583330f6": "430e22c42dd6890fdef201d397b58413",
".git/objects/2b/8c3dd8ea0cd960e8a89051a8b40d93476d8309": "7a19bf6aed973ddec8941355c992f158",
".git/objects/85/2c0f6d058bb27d3ad5cd06440efec1d34dd514": "7d83ad58dcfd28f8b86ba6ebd7f1760c",
".git/objects/85/3e5782b81794faaa9a39769f5b4ed6904af57d": "d1f5000e3da877c6a48d4876b7ab19ce",
".git/objects/85/d5d44f9e3a02d75f3ec4f970d9b8de77cad67a": "a60636c8e950959908cac96c59f5c022",
".git/objects/92/c6be3db5045f56485daaf535c5ad7b8abf54a1": "01794c8b67238f09b29a697ec8c171bf",
".git/objects/86/91cc7d275d9b23e143cf40a8e83ac54da9fe36": "6c314b565247d4f323fd18aea689e4a8",
".git/objects/1c/20041102f743a143bff6a9faff4d1476618081": "4c1013c1ba27ad1e13a2fc56c68ca301",
".git/objects/e0/1890fac28b4dbd888f7b162fa17d8db54f0734": "7b1a3df354f75ee38ed69386d6885169",
".git/objects/b0/7dd11f122d1e31979d8b46c9af5da687b1e8b3": "ff2a7a6e5b7126d0ebd8894ee8941f3a",
".git/objects/44/1d3baab4f3bfc1ce251942e420988fac12a8f4": "ac3a2ba50af07d40313ad29d8023a3b1",
".git/objects/44/267d164f5e6048bf1cb07f8453f93a13df187b": "8292e24b91e143eb53c726052124a3aa",
".git/objects/59/06a7a0220c38329d4399c8b9dd283ebc520cce": "0d20c7acd39002db1676c3afb6b43d9b",
".git/objects/b9/ffc9b837283fb7a7166645cb692a2c4067fd46": "d275fb231e3e6f4e82f927bd8159022e",
".git/objects/7f/dd1a016103b19acd82e1bce285858fc64cc025": "8272ba3db3185278bd1196466264a52a",
".git/objects/11/c0606fd28a6251402fe1ba791b7563de2f93e4": "63fc37a75b385f058f98f90b47314f28",
".git/objects/98/08f1cc650e408d3649eb887ee08e58f3d39f1a": "a1cfe5036d091fbd50c40877e1f272f4",
".git/objects/43/1a9212fe32f7b8805cfa5de7930db4cc4022be": "6a306325c35910f11802513f8135e0a7",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/06/179b0303b87245854f269a0dc274da46fa7032": "e22225666791f65f888ef27fe2e2e931",
".git/objects/06/51cfb3e2be118598595e200856828675b5c9c5": "d5359542775e541de18baef64735c589",
".git/objects/dc/4a5adfc1eab07d18cd921aa770ed4731833ddb": "0f063bb001a17cdeede36642f45d0d73",
".git/objects/1a/54002e04cf5735fd2ef96ff5b351b302c90ec3": "c93f5415561f968d1b40a5703c0add28",
".git/objects/21/219f8ecab2772212553ec1ead1e1d2df1b25ae": "e83ca99255d08f968a7ad650da87b35c",
".git/objects/94/b8f1ede227f4a44b5e94857b1988245fcce43b": "d47cc2c92425638e6b61cdc3a5d12ec3",
".git/objects/64/2915ea8e019f334a7e0f637a2cb6fe62284f4e": "eef4506d616ca98275a4c51c176cd1ea",
".git/objects/67/c462716739e7faaa0144510f19e152c3cd0221": "652feda5de49afc1fdaba2bc0786ec4f",
".git/objects/78/3cf3870c63f833697c699c02b3acd3bbf10eca": "bad6fa427319b9edfb4937676b481323",
".git/objects/78/91901f1fb373dcd8db385e13faf5ba845d5819": "e1c3ccf2a610adf7d00b3e17c54849ad",
".git/objects/5c/b218aff91a6a41f90ad0979bcbb6ecdd504ab5": "55319cfb72e695d6ddd3e08b477ee97e",
".git/objects/a6/e11da809863dd3eb469f4da1e600e5c3a6d508": "6e1fbee639c836e230cac2962824fc4b",
".git/objects/60/d428ae09e077fabc75f2db6109e7ab57a0f9d0": "cb743b52fcf60183f58a48d34e766832",
".git/objects/25/691cd03f8e960865f1940182b201a103e29895": "23b2533ad43028a45485a8f4480c93f3",
".git/objects/8e/147354296d01efd43b761905093328c1ed6d2d": "5607ebfdd35ce1d83978c72b61a55c99",
".git/objects/36/dac34e82557bd1aa16fc865f5c85429bf38784": "5fb6f9a638b10e96d7df9c6db6fc6168",
".git/objects/36/14ef2fffbcdab1afa8d2be647cbbd7d38423b6": "c14d69f89ade15356ae6f9781e146e59",
".git/objects/c1/e39957324dde7b3da999ce2ed64173db88c95f": "66ce94f31872fb94396bcbe4234ef748",
".git/objects/1e/6daa870833b1a83eb2b0571f722bd7a411bcbf": "7b55aaf98915e97ed00b1364cd2c0cef",
".git/objects/0c/d4113527f07d9ba58ae7beff0ac20c31398fd2": "3b726b0df24f12c71f937ad997771d51",
".git/objects/0c/2ea901f59285018e542c1122f35855705e37f1": "07cc1ef8a0776b861266daf94173626b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/ef/0d0eb6994c8e69fc30fc04b32966d9fc6b72f1": "aa31757ec8cd7ddacbdc15d731e5cbdd",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/ae/1855f31a47d119c2a0d288d91465e170247b3b": "fb3565766e042e6428256d9743d9ad52",
".git/objects/ae/ff86da7fe5eb7e9419426137e09db247ae76c2": "b5909ea70db9296187a1b333cc751a36",
".git/objects/97/c3522f92e9bf58802abb69b2246d6a33a88dfe": "cdcd02c436af7c4ba8d85ec6759ebc99",
".git/objects/89/badf2e5d19d133150e0e800a47e66e8452d72f": "5b54b2e098a634ac2343a76ba17b902e",
".git/objects/1f/674f12fe5ec5c8097bdd5567b783e73308d867": "8f2cd8f56d1d897af65399b419c2ef96",
".git/objects/9d/de3617b7b800ffa3dc816a9d8dbc7ac8316234": "fcda34b9c5707aed84ad801eb39ff6b6",
".git/objects/e3/bce22866b143ba5956a9026857e4a9d3bfc8a5": "69b482492c7e0a5fd18309dd8f6ba609",
".git/objects/e3/9f43a4bf88987fdd973f6a1170fe025483ca78": "97828d1ec3a46f2594b847fa59f027a9",
".git/objects/f0/e0a64ae400d2004acab4038b7fd48b4a036687": "5d6fc08eb6d95d740b013eb5404913e3",
".git/objects/10/a7bfec6f4bac6e8c276ddaf1a5c6735d049dca": "4db72be8f17177b727c65a7d7f43206b",
".git/objects/e7/26140d83d5bfd7df170f5a2f7ef5071f0bda52": "703a44afed774210012de1b6473e381d",
".git/objects/57/ffc8285719a4cb259adf38ca2c10e5252e96ac": "ccd8186d78f2c66021487594e8be791d",
".git/objects/70/ccab0059b6749a71647bdb505e93f3b4371757": "eab15deaf0b8ae01aa3a8c260a929934",
".git/objects/70/82de752fdd639eed4de8dc04217142f1db292d": "435b79da9cf8dd2577768be7206a14db",
".git/objects/70/80cf8e953021650a1d3ac0843b4ef3cc4d3c6b": "5c3246ea20b26cf58b2ca3b6f76fa1c5",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/31b1bbaa4ff5464e4646dbb60ac9fa25f627d9": "2cfe8b212dd2c7029ac81e2018b52d5c",
".git/objects/d8/7d6fe94d3cd718dcf0aad733b1aad6abfec66d": "0f7e8e6d6663cdc05264648cc5d35826",
".git/objects/d8/7097bb3392664bdb666aff4cc5b55c891468af": "ebe2bed84029cd313e3ca26bd3e83797",
".git/objects/ca/4269d5facf16deb0157c05e6d2e20fa4f3bc54": "f7f096c13b349fe5a15a6736686d4659",
".git/objects/f2/1039d005c39f8b8043d8ab0ca600bb6bea57c2": "5269358c58531274650b14d523b454a6",
".git/objects/0b/521c8b73e3d4d34d7e34eaa72d8d0dc2a18eb4": "45c27a0f1492cda2eddeb4789aef4641",
".git/objects/0b/8c0faf09de8c678b493338dd986de78b0d705e": "a764a290b5b7071c47fcb722ae7a79c8",
".git/objects/32/a60f144d3528b7e3a775e66fe54ead36aa0f92": "78e2eaf1e95691e6f27b07ccff39b8ac",
".git/objects/d1/112a43f4395225e9c20b9dc52c77607f963612": "69952780efbe58a48cf06ca3982a1a39",
".git/objects/40/4f51a04801f707d47dd59b41d0ca48aa0f62da": "54b5cd17ff4cfab99e821a089b591344",
".git/objects/47/9c8bdf76efdd1ddea4b10e1c6d0a563ae9aad3": "30dcf82d7aa5edab7596e8436a287a57",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/22/afa116cb24e44b36d8bc11a4816b09bfb9125a": "c9b29342d42de36cfd8f9c5475c038bd",
".git/objects/9a/278a9e280c461e178a4238feaa50cb9940b438": "f787ea9f086985a2f7852b01e9c48f4b",
".git/objects/23/9719be73236783da3b1fc8913269c34fbc6309": "3fa1143645ccd1a1b69cdd8bd0f91494",
".git/objects/b3/29fcd951b3228b47758b15ab69689a967f9deb": "06d6f3564e8575a3edcca93c92473209",
".git/objects/b3/ecc207bfa70eb33f48937dced57b4aa9b06296": "c415f2ced81b1b9f839cc74b7b74ae0b",
".git/objects/34/bddbd89e233069f21b9c59410f8d27193505df": "93995ba51ea31d8b7e4b4491293f1c60",
".git/objects/6d/c3cb7f51fede6ce668edc9e2933d1d182e6eb8": "ebf7103ef05a762ff4bfa9e0d33e67e6",
".git/objects/c7/41de54494441e70db2b9d922bdf476402bf140": "0721ae9b12cb5138d388d2658293f409",
".git/objects/69/3b1d10ab30fd5ec2b8361f4d369f86f290ce62": "2987bc519d9f180f4dd5c9ce3821c72e",
".git/objects/69/3f75bca747364341f3aadbc4da68951e80e42b": "793b63fe3db61a8afef870d297cd2865",
".git/objects/cd/c7d59d27511d65c873bad89cc7b4c124904b7f": "da885a40cc9f4a2b844b775ecd72c503",
".git/objects/fb/ae8dbfb0a996c646af7d6b5eb82ab7bb90c83f": "223e4b8a0434fa22d047e57a07d05131",
".git/objects/2f/5bd5ae67ee8f26e2a9dc0f083b9ad0760e5f37": "060a844518c9bf7bad87c84a1a68319c",
".git/objects/ee/3391b341753d35edeabe9459ec835e487efe10": "066f8eeab28329fc7a3f8f6deb5b11f1",
".git/objects/19/b41d41fa923cc475a5c43b99c31bb4ad79000a": "678e1c290c430c9a3b88954d24b8ef68",
".git/objects/ff/5d81e8a3b40f1cd53602d66ca32e74d3918983": "b5805f7b337ce93cd62c2efbbad0916f",
".git/objects/9f/e55c049fbcc0b24cea3eb91808af07eee2bb3f": "6830ba45f71f503b8c9d6e137fb10141",
".git/objects/20/fafd1c91e7f2220d8ef9140a8ce84f1ec8774c": "c1d6ebeee37c6aef3f9b17a52897be13",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/8f/44343c08abdd9b905cf45ef95dfef9dffb86df": "0f25ce4956b679c42f0f9d4788d7c860",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/45/081702dad1874cf0949d273c7b35224a1f7fa6": "96551d48a20950a79b7e3a0b54b3f5a5",
".git/objects/7b/142ae32c23f2ca17acb0daeb211881d729303c": "0f4db5d66486ce049c2add96deb1180f",
".git/objects/7b/8a541c67c7fc20989959670c8c84700f9a5ab1": "c2acdd47596d125827c3ed719d1a9651",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/76/ab6a72c4323f8d77a944f7c0d8f8dd5a9840a5": "c545b3da9a9ca7d8f88412c104ccdc0c",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/9ae1e05b4a1b4e14253c79cdbe338a401a4a8e": "ccd61dffaa1868f891e8aab356ada7d5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/2c1e2ef13d8308e11f92449723f9a6abd0d808": "7c168f8c20176892e8d542495fa6f17d",
".git/objects/b7/406f5bced861f2c83510b014f2b1033e3110f3": "5265cfcd7e2992e4a0446596db1dd5d6",
".git/objects/79/885dc5b983e7636764b7ce7e496b66423a1e7a": "b56a446dc6bbafafabeea8cb80558b73",
".git/objects/79/cd92ac08620f74a096a10297f6ec49c2d2906b": "bede8aa382342cca857b355e348f12b6",
".git/objects/79/78776c3f56b3db351e9736326a33e527cbb90c": "f588a826cf12a30069324c3814d12f6c",
".git/objects/d4/effe080144ab4fe7ed0b0e625de9a97142aa33": "47a5a607e0fe7cc985d58c4a8ee1c0ee",
".git/objects/d4/b46bb0271ce78c106b0098551d6ba5e19e2ff6": "0a07f77e83646063e9aff05fbb15f2df",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/2c/b629e5d55407919e76e65d0beae5d73cef3adf": "d02227b0ba721be71117c00348be991e",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/d0/02852f75561faa76b7c5001b868972633ab952": "e23fe99e372dcf7f862e74294d81a178",
".git/objects/ab/b971a172a888ead83c1aa1acab9206bf03c269": "86695747aace0bc192cb2f366c868200",
".git/objects/9c/4d4e8d9182f0494dce82bfa865f807fe238568": "c879b309e5ade30c7db213434fb750b6",
".git/objects/65/c54b853fe19749c16aef84658fab2b84e79cf6": "2aae7cfca6da5c510e19f402b48cbd49",
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
".git/index": "ca3703c956bba7e54c805c21a796310d",
".git/config": "7adce7eefc76c289ccc2e8188f23eb93",
".git/FETCH_HEAD": "53c6851b11278ec2188f951d543bbd89",
".git/logs/HEAD": "4c909cdebb1e270b4abbb1febba4a72e",
".git/logs/refs/heads/master": "4c909cdebb1e270b4abbb1febba4a72e",
".git/logs/refs/remotes/origin/master": "c1634c3c91a274c9f2c2da03222e2272",
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
