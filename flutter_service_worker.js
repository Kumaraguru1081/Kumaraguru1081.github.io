'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "03c801c5031862948d4f23a2d098ef7c",
".git/config": "f51805ddeb43f6d4703f04c47a7dd0ab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "84de8f96fe49ff298e78903e10596826",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "a95837121c3cef4ba7b005d5a357eae1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8b38ff78084449485dec6318c063ab82",
".git/logs/refs/heads/main": "8b38ff78084449485dec6318c063ab82",
".git/logs/refs/remotes/origin/HEAD": "6d5f790d42563326ab7d486382da5ab4",
".git/logs/refs/remotes/origin/main": "c64f9b61669d2bc269dd15334c5d2d19",
".git/objects/00/1f3a6ec059ab22519aced591a060c8a5a3cb3e": "866f5c0b746fb66ac2a5624ebaa4a375",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/066b71ff11da2224588e2a81f8da74e0bc4e68": "b36d84788a8a0c300cc48c4d2d4171a4",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/0a/741cb43d66c6790a2a913fa24c8878fb1ab7b5": "307011b7f3f57c355deba17946cc9f69",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0f/a6b675c0a52be9242fc68269eefce46828ad43": "3732df75a452960f40377486a7eb2955",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/16/375cffe129a15c90d5fa97c0131a3ce762f079": "23d483ce8229ae1fac28659a876fbb91",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/e80bb1de295919b564b83c4dab46ef39439b24": "be98bb54dcb945b4831983444dc3e125",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/7f5694ce6ce339f35bb58a657960ba9b26a6bc": "26ea2621da751d7b92d3f1984d54851b",
".git/objects/28/c6bf03016f6c994b70f38d1b7346e5831b531f": "859e347621927457ff896dba865a18fd",
".git/objects/28/dbfe8034f63071dc7dc596683bf44f8d24bd81": "d514197510299375c184af60b07209d4",
".git/objects/2c/cbfd967d9697cd4b83225558af2911e9571c9b": "79f574379587d27e91d5ebf05ea6e777",
".git/objects/2e/2934de6bf61043a4862e1a1cb7142269d8906e": "1c2fdd88f30dc3de944f3209dcff9dbd",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/30/b83853e8ec4605a145564dae50eec158decdaf": "1e91c65b941728fc1477138691fa8de6",
".git/objects/31/5e630a8dd01ab55b94c1b0b79b953c91d64c83": "bb401550baed426ecffac224f8c866fe",
".git/objects/33/7c40aaf69e8edd44241a0e7bbbea9e205a0de4": "4ca9da76a8272d0ede4ab1990c37799a",
".git/objects/34/c79c09d12db3ebcd2907b850ec5b162966980a": "f10eeebcdd0abb2cc22e983843a18703",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/38/191da02390173efeeff4d85337c83e832ccae0": "1cbce88f5566ebae16c46f5d7084bf72",
".git/objects/38/5e3b98ea55e561ad74d27f2c0ac97df29b06c6": "6c700a0702a7be039b841b91960f543e",
".git/objects/3a/d0ab7412ff58e09031376d41c11c94f9e62a4b": "0d6da4143af84ee94107c869fcefde49",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/41/7df6af27ba810fa106638bd4dda177660a8d77": "f4d79bc8cc5c0f2d86efd45856ad0f37",
".git/objects/44/63b0e9624da39eacf92d20e7bc7c087c64f03a": "51d879ece7fa7be5ad7faba5a87c6cea",
".git/objects/44/9a9f930826851b495d039f0c0d57f247536615": "64152505999d8f1e4fd9224415d1ffad",
".git/objects/44/e62bcf06ae649ea809590f8a861059886502e8": "2e42f843c31c0484de7ce7a7c79cd856",
".git/objects/45/303f9958e638faf87374486d0e96b89023351d": "7aaa290d8b5e7f86e33d4bffbaf2bf32",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/4c/de12118dda48d71e01fcb589a74d069c5d7cb5": "28e8a446706511f1a67da714824896ea",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/4d/eb0009da8d9ce354a7bcaeb49e61e8bf72bea2": "4e81bd5b996639a2782680c55f9d3239",
".git/objects/51/436ae8c982a8ac6f754dacd87bca3893a93fe7": "a3ea7fec6853745518b95592f2d465ec",
".git/objects/51/dee7eeb0d8850269f5fe78564f9e75dd04bcb0": "33f03534215a3dce7f83986fd72b037f",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/5a/93ef7d5d2218ee3518942d4b62ee91167407a9": "0955451cffa0e71edd419fa30214e141",
".git/objects/5b/9363c20101f2dbab81b02a1fcd48d0bfe274e0": "fef59a63c7019c9646f8d870496ed774",
".git/objects/5e/90d43605df0aa9051ad7b2f8a2a0610a09ae7e": "1f182a3361641b1791a69859805d99e8",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/68/eb9d1065cf4c7d0e5346418c92dfb71ac59902": "c7e4a3cda040ba545b380492baa335d8",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/6a/84f41e14e27f4b11f16f9ee39279ac98f8d5ac": "a913aaf750cc736879f14f53488f5c42",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/70/353489619def60644431bcb3a05ec06c5d093b": "902dc7a31b794c5e3c90c74a6ba35540",
".git/objects/70/693e4a8c128fc4350b157416374ca599ac8c7b": "6942d9ddf2906a8e847e7ef6889a4221",
".git/objects/72/271d5e41701cfbffad74d38640bf9cc7c1f7be": "e07153a480d4e159b70f80851f6a553d",
".git/objects/75/b2d164a5a98e212cca15ea7bf2ab5de5108680": "d453ef5dc75a6b2e158c081f7a51acac",
".git/objects/76/3ea98b4bb12c1a0131ffd769e05403d5b4fead": "2dab18776a2707fe5fc825d5cb34194c",
".git/objects/76/88eba8a40f7cc8b290966da623c180c1edc859": "ec6245740cab03b1958bcbd6cbd7325b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/1f4c0d3b87c1a2e620f58a44ab430c607ec6fa": "60f3d2a0777d6ccabbaea1d777a7530b",
".git/objects/80/dd6848309958801f535eb1fdd3069e37929959": "273e930701b67a4e962d9880203f0801",
".git/objects/84/d08f7b151f10507b1d8c24043ab1d088f4c0aa": "a6fbdf88da12c6ac558a3a6de7fc2c33",
".git/objects/86/ab07529b7577d2dce7315ea9cd43655b38b3a3": "b508e00168e2b4fa77711089d587c04d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2e11806b248ba30f4f26e7349c94381e890b53": "c64a1186e0f445b3d8d9dd6b9a1f5e04",
".git/objects/8b/8985b4e1d73059a02a87f561ac3741039aa9ea": "eafbefd2248229991550b91d67a21049",
".git/objects/8e/4bd5bc0cb06facac821060d8a69d6657bef7de": "53c6076d299a7558a7566b8543576a2d",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
".git/objects/93/3c557b1dc72a9dcc6449327c9ffaa693589983": "a1ff0d5c948cdcf59bf3c5c3d69b2e97",
".git/objects/93/67d483e44e14a7b58321035967961ed024d732": "ec5e9adea8ee35ee79c9613b26a34286",
".git/objects/94/adc3a3f97aa8ae37ba567d080f94f95ee8f9b7": "daee15d8fbbf348420b6eaf3d86cbf40",
".git/objects/9b/f7478940c1fa50b28c35bc3ffdf9b0ce4f2ab0": "07394f3b1a5487d7dbf39c3791939500",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/a11e9fd594cad63c261d1264bba79b7b1d873e": "3dcef0ad3f27c57720305c69f2e84865",
".git/objects/a1/da1b9e532055a5820ee16dc773a6ed7c12fd87": "b3d7ce1ee4157a6b735984e2d1bb669c",
".git/objects/a2/6eea4554797c08165ed290a62c12d7ae243abc": "d4197fb798052f2dc5b6b8b49607d83b",
".git/objects/a2/8140cfdb3ff9b7a11a9497b84546d615db2afa": "6d7635289ce43450f1e676e1c5444b06",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/a6/d6b8609df07bf62e5100a53a01510388bd2b22": "821831c6c42de47994c16f6a1db3ea7e",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/86a6b455245b6aefd6018afb90f1817bd3034a": "8dd8d2a09035c3fea9e6616a319a6cae",
".git/objects/ac/0ea4f6b3d2b3d3c7ab9b79c2d6537f77bca036": "f9fd8e85f2709dac1ba26408192f0002",
".git/objects/ac/a869a7daced2b75fb26b34e4bd48f173357a60": "e2d8e2fcf91765a230f2d3d24ba994d5",
".git/objects/ac/f223a4eb5bde58e9716174b63c9c14be6ae3a7": "122914a97507fa1841f1064710331dea",
".git/objects/b6/1ef8c9492db8a24dc2478943ce3ba12626213d": "5cdc6d0a27bcd8b359bee64cbd72848b",
".git/objects/b6/ce3e9a871cb63b4838d61f203bfd0dba9cfd7d": "aacfee04cbbdbf7b2f23f62fbd920363",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/6a58afdda22a443c752eaae3d60c2480511a9f": "d86646f2e9abb9d77e2e8346ade8749b",
".git/objects/c0/9544c7e7ea5f418c99752549df5b92ee629e8e": "4b0dbf6e92406e2fa88c22aa3f05b6c7",
".git/objects/c2/a09a7d90ef6a155dd7add04bfa8409af2c10b2": "1da42e7ccaa254141bc62ce9e8d9dbd3",
".git/objects/c4/df70d39da7941ef3f6dcb7f06a192d8dcb308d": "d394f8200d968d57839b22cbe657146e",
".git/objects/c5/05a8635265e70591a0ef5546d84e1ce44b91ad": "a101838a2a2a3dae7d913ddb73dc41a1",
".git/objects/c7/fef6adbac3ad960cac5b7e826ff0aeed3fb079": "ecf1a46f85b8e684034d2a58f92afe02",
".git/objects/c8/f9ed8f5cee1c98386d13b17e89f719e83555b2": "0fc2e076b543f37f90a9e7159555320c",
".git/objects/cc/55c918eca90b16a8737308720198651da066c0": "fc4b5788afd4d210b8327dbcaa4bdee1",
".git/objects/ce/e7add7fc1cf4f7cc4f7a01e044eda1211b1d87": "43d60de412ff81ebfe41f11378d26b9e",
".git/objects/cf/03b64ab74921a51ecb7bb557c98c2e651f2f33": "7554497e73c347efa45b81660663f20a",
".git/objects/cf/c6a00eeb2a06e3d41bf0bbe3eda83a6ccab35b": "9a0f8444368c740f7e27eb9edc509b8e",
".git/objects/d0/e1f58536026aebc4f1f70e481f6993c9ff088d": "18109e32e7fc3bf04e529c14b8723746",
".git/objects/d0/ef06e7edb86cdfe0d15b4b0d98334a86163658": "4d865184682ad08c3405e3934cd91fa9",
".git/objects/d3/41b6f55a656d8fb73e0a3750e1dd0ad1d54aeb": "2687b71ff655cf81b04f6c989dd2a158",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/8195aa0412ab73a9e2752ffbb00262f4e4be31": "cb752f0bc47821835e91967f827f6130",
".git/objects/d3/896c98444fbe7288d434169a28c532258a4466": "65bd2275cf87203cd8cbaa19e4cce2fc",
".git/objects/d3/8bd69eef499ec12d0f45fc16b2de3acb997417": "50872e5567f1b54554ae5904dff56b8d",
".git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "c4acea7ad0add3f7670f8bff8463c738",
".git/objects/d4/32d6edaea462eb89dd51c7df369bc76ed9c5f3": "bb52ee5680219cf3befc160d0a9e5779",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/d7/4aa35c28261a8e78264252be7f0f6f9406ec35": "f6d907a3303a508436779980f9fb2dfd",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/d8/a052651e72f6c4b7cb15992dc88280a6e78a22": "fe0886e812848dcc8f00cafa8e3a229d",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dc/dc2306c28505ebc0b6c3a359c4d252bf626b9f": "e712bf13b0d526e57c6ee1c8acc412d4",
".git/objects/e3/45b119d95cddac3cef2e05bf41850509dc6e64": "ec9296c60cef944100a8a323b67e76dc",
".git/objects/e4/bf2e4f9166bb4c412b5848fca008e7edad714b": "40ed7177b970a15fde00defd83bcd78e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/c5c54370372a4cdde7288a32733998d87bd767": "37c17914ddc243c1c81881069106b916",
".git/objects/e9/6ef602b8d172f7cd28ba656aac097f741c736d": "c3323f418dab0a55952c00cd3adbeb55",
".git/objects/eb/cae636cb3bbd7f284d794604103432cd630df9": "00475fdd0b65772e8d9aab5a8d251ae7",
".git/objects/f0/91b6b0bca859a3f474b03065bef75ba58a9e4c": "1aef8d0dea7cfdb7ffb51559c81d2fdf",
".git/objects/f1/cc92d1431681852b1fa0329bef79ca8ccd8bd2": "ec5f7bf7570a98741bb46ca9549cccad",
".git/objects/f2/0f989e2907b02aa8858f9da5ba307bb8681d93": "1be894735099f56716b0573ffdef88a8",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/f3/7f85338d7fdead6aedc62d3a455300bb18b568": "d79eb49a257d0728c53959d6270d58a4",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/fd/2bf96cd111f81a526ca341d0142fce7efdd80f": "778bc7882a8568efe3bcf5cb2e309328",
".git/objects/pack/pack-bf8b9cc8adf084454d48fb1b4a072a0c13af2120.idx": "e3e58ece59431a27a4a51806d790a839",
".git/objects/pack/pack-bf8b9cc8adf084454d48fb1b4a072a0c13af2120.pack": "9752af02c6061caecaaaa039596ff742",
".git/packed-refs": "682313b238281f125ca8f8a810b075cb",
".git/refs/heads/main": "566428c4e21b3ee27bbb409025d24150",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "566428c4e21b3ee27bbb409025d24150",
".git/sourcetreeconfig.json": "d02d0ce9fea11aef936e043489b78d42",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "35ff13481c121f63987cf75efb8756a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fba6d2936e3e379eeafc0f9bda75b96a",
"/": "fba6d2936e3e379eeafc0f9bda75b96a",
"main.dart.js": "342d2abc6e8ca7cfc3cddd13bf5662f8",
"manifest.json": "1111d5bb7c50a27334e5b6081b9f5969",
"version.json": "ec7f7eb8cc31c90f120580027077e0e6"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
