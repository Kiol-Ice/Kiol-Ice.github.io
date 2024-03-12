'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "abe06d71cd83b7e9a6638404bf3fa96b",
".git/config": "3db1193b3d2b508626fee98797556827",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a399475106f93d1700f1d33fe2ad6a1d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "660624a8f8032b660e297d6c5cb65b54",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0bde7d9bc40be70b2b7f2197f35f7d2e",
".git/logs/refs/heads/master": "0bde7d9bc40be70b2b7f2197f35f7d2e",
".git/logs/refs/remotes/origin/master": "2875fccb04bf5edd0752ba087ff4453e",
".git/objects/00/4c6189d068615ed53f13bf3e9b9115da8fa87f": "adb5334ea44834775ae61fce349958cf",
".git/objects/04/2bab386ff7c6758a383deb3c82d9a36361952e": "8dfc82eb557bdd793e20b8ded29cabad",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/34064b5600837a1f22894a367ab84e0effd5c8": "0ae1c9040d5e03a8f5b94c82fb10881f",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0b/ae33d857d1e32db5e1227819e8f148f902fb44": "335c4a112acfa4b97a886434df1fe6a3",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/69fd085c82ab8280ca88d8f9490ec76ea06452": "1f2f9ea88e1efd7cfee381f3f9aeaf94",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/1d798a1a0d6de13ca35cb667531bcfecfaab5d": "fa7b98dfd6419334875d7724fec8dfc1",
".git/objects/11/3cd3cdc1706338a21279fae9072b7a3f1023e1": "d02abd62e2a0008ca36ae0f54dd79483",
".git/objects/14/36f5bd88554830fdf7f9d338392dec736672f5": "51367a8287c963ce7857e566b85e4b64",
".git/objects/14/f87a926e064257ce132419b1b54a4443948592": "416bebc17453d7f887f0b634cb7c0d7c",
".git/objects/15/c9104822568669db4cf9c38816ffc94bd4d9ad": "66a664b2ad9b5b3b910421223fe117bb",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/8f4f55f9c770e27e5927e9603076e56908599e": "df939d0012ded72ccbd63c433791be3b",
".git/objects/1a/77ffeb5437742bf63f2913031373ddf75fb81a": "c06b523cffe211569d67b5c97a849c0f",
".git/objects/1c/17e95fb1d86efd4e4b6bca66c6d8d1c4d30928": "80f123dbe7d8c4e6d2460d4b19b8108b",
".git/objects/1c/df9e49a670b80c779d93ac81b24a811a7f0e98": "026514f521c9e2929555d57baa4bd394",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/24/499baef8c637177f070d421987736d76a51d02": "34a8585f6e95553f8c7f5ad1486c2c98",
".git/objects/25/ea962a172b0bd8abc022dfabbc58ee1c02d9bf": "a05416e2649d1a4bea94b0b0555c0084",
".git/objects/26/8faab043786752e696b03b20247679ee65d6a5": "be41ebb0af0ce14caed3b9dff4ba239d",
".git/objects/28/20fa0e6c5219a5f5376f1da2312a9b4e46f02e": "e26af2026b891ddbe459013757136e6b",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/1bb1666f3080e5ee064c277735d535671db4e3": "85eb1fdd9b367b57aae4c87273d4333e",
".git/objects/2c/74141a137e530b5250760bf23a56114d3e0eb7": "d5c5e8f2000297666ab417fe99b92a0b",
".git/objects/2e/161aa0f155125d31377c21aff500bd7709634c": "6a7b30fcd311850bf5c0104ba122681a",
".git/objects/30/836a4bacda7f00ba79e8ed174259ab0a50ed59": "57d148e9b3a45119f1e8b0c77686a6fd",
".git/objects/32/c8b727f8f5bc4c861c774d017443445609db60": "c661ec0ea4c5cadccde6a28612e38af0",
".git/objects/34/3f21cbf32a8ec7b99ad55a18b7a10960f901d8": "16f5e66095199a70d155ea6046b415d6",
".git/objects/34/616958ed6cd3c0ad792262fa8c8def5b219faf": "fe48a6021f1c484d1d9a49977a541adb",
".git/objects/34/6c2e612afa4c9299091a02864b94e09ccdc699": "07ab2bf100fcd0155e2d01ae7f1ce4d7",
".git/objects/35/3f2ea6586b9a98391b7664c28362b0d26260c9": "12912bffa61c66825728b554538bcdd7",
".git/objects/37/d008846b09facf177b91ed6b77f3b7275964bd": "4c0ea5a26876880b781601ae39198491",
".git/objects/39/4a07a4b31d448bdb0765b9253b27a99eb7c489": "2ca4c9713c57965976ecebaeee98f25d",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/ccc12d0a6534f3c2ef12a2c471a4cf85caa4a5": "fbd0e57b9fde8509dead85afd0b8bfb4",
".git/objects/3a/d8fadd1841d86c394d03c16eaedbb3515ef74e": "654f9eb845ea6d4f65ea52464bfb9607",
".git/objects/3d/0ef6fab04a4b58e8c8c6f9803d4ec61ea73daa": "1384a2d548814720f113cd608e747ed3",
".git/objects/3d/b155b650e2fa4ce75213326eee20a664f742f9": "3b7403c701a167455e06fbc56c82230b",
".git/objects/3e/36ab3e79678a10ef9094910c77e17f76e5a132": "5f98af6cce79b4a7b28a156c58493659",
".git/objects/42/e323a14fb8bd48569221c68b365c4ac4cb93eb": "6873a37daf68fb76abe1b1794ac19452",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/35c4640e6d999602a70255c4101e84f83f7f59": "580cf3b31e5026d01a5e17466a5e12b9",
".git/objects/49/38af354bbb58e215b74928a70d5c98771d24be": "704b9c5dc0ed1d6151e745f7adf31c68",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4e/c91b4f15e01e0dc80774148c836bf7d8204d60": "8c1cb5c4cca32fa868763dbd1843b185",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/b1d81efea37b1fde4894b4a4c5355a2d01cdd5": "55b0eeefefa185b7be55b88298735abc",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/dd1bdf3020b1258dfa2d37227baefb9ba09d6d": "9eff8e0727e73f4d0bed56fc035326ed",
".git/objects/57/d7ef6b10ebb568cdedd4e00f6171c169c791f7": "282194502562d3fe593f9a7c482bb799",
".git/objects/5a/3569b2baba8d84982d2ea62f7ba5a991b66002": "b58a6315dfbddd8b9c4b6bc296669408",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/68fd5d9eddfef078b197576a5ca9de8c71aac5": "7d4fd3926e1ce13be5033445f2bbb7b1",
".git/objects/62/1fbb51f1203fdc04f5f95e6213f17d487efb3d": "c2c458c719247e671ffd0550352eeb26",
".git/objects/68/0235c215c7e078138d5ff27816ca89412ea68b": "16757bbb1baeb09031806a93c2017400",
".git/objects/69/8d0d840dcb4759b415d9fbcb661dc69294d5b2": "074cd4bc05b6d38291eb54c14cd1fa1b",
".git/objects/6a/9da2c233310f7221df815e36665128560168e3": "b4c9b4891895f6659aa3a7b00f142e0f",
".git/objects/6c/5e47dcfab91a8f24b3494bbb5a05174c00a48e": "190ac39f8aca8b2088a9d3f8807f08dc",
".git/objects/6e/c45cb940a1408d9331a2f52c1b15d2fdf25637": "22e117b5f65dede69f394d4512e28375",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/3dd75fbc611887a5178e94e7e6b2f67643db84": "a9646f1acf40f1822b4d3ce8797f490d",
".git/objects/72/86d69f2fa77168a59c5f18aa157cfe0ddff3d8": "f893c731b4bc69845f3b8f799a6a224f",
".git/objects/74/a6e0150f71d0441256376b0050fd98b4172e22": "7ac0e8a6bc4d47c54ecd5f3d22983eec",
".git/objects/78/9291951963cbd88f779769006fa89c5c1160ef": "d5c7e508b4959a4612ff2fb175d56ce3",
".git/objects/82/1c809f62a130e0d9b54b76e83eec64b6895b41": "337130df332452fe4fa05ea80f7140f5",
".git/objects/82/66993c6feae06dd0cbdb6aac176031b6b67bb2": "439a9c3d1b69cb778372b9d37bdbaccf",
".git/objects/85/3e95ee94a56f7de7df1578eae8b0a319721ef4": "1c508397385cb32c00b065c7f8612040",
".git/objects/87/68ce17996f0538c71150c02c0fb6c770d6cc2b": "fe562d2c672322f6018219c688c3fb68",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/34844199a9f887c15d66aac3e03139649d3744": "780beae81d2292c7f76516a9e52d0d2f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/60020e2e08c5adc2b77e79cc2e4dabd2181a23": "e88f532fdf2c528628de8534d5095ced",
".git/objects/8e/7c1e890b8071aa6d628d91bb352d2ad7b51b10": "616204073492d0fa3962f88db790ba44",
".git/objects/93/0c69f7d7aacdcd8674745a04ecc4836c74d4f3": "4b25fc13b8a696367b0018e5f76b3980",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/db9bac583aaa709144538c823fc73f103e71cc": "26b3e7c0e5b13a8766be7a4385dc91ba",
".git/objects/97/5c309341387978dd7d2ad9a6061dd0bd3cd688": "244475c00c3ea76e265c8b58afae84cc",
".git/objects/99/14425144d4b100461b9f1ef386a60ebc669b6a": "2804cab1cf04dd62adaf95fce0a33c0d",
".git/objects/99/379da46b55c960794b99566ecfa6518d7e587d": "9ee7dc53fe63305be194f21341851177",
".git/objects/9a/f8b914f27c9bc8317629cbc51be10f8e2be845": "983defcb787b26959602d29fa09c7ad5",
".git/objects/9b/e1fe1b62c18bc4248bebf2d7f54d982dd6ee56": "afd0a35532c48ae09dd8a4acd108f9fb",
".git/objects/9c/685cde5ec8759d3647b0fc43f15d4c9742246c": "3c280de8b5ff8c0fca91c58bfe583e1b",
".git/objects/9c/8f682365b4bc59ea9eb5347d1063183d7c51b6": "a01da82f006e10930a2620a7eefefe9b",
".git/objects/9d/233c31f81741285f828a21069be493b12e6df9": "f34023983e3745495c295665ec809655",
".git/objects/a2/c573ad8e5af8b44e9dc4ffa83be18785993f9f": "f98fc1458eb9d9855289b013e800b99d",
".git/objects/a3/3f444ecc724d62e094218aedfdac50eda8a68e": "d1222184d42c7db1d77b0c741c9fea4a",
".git/objects/a4/bde15f5a8bfaaf1527f46708b3f66c89832901": "ef233e7bd87402a033c51337fd6c1199",
".git/objects/a4/c122f44200e1d1f0d05eff352edf265f167cdf": "090dcf26e6d7387fb1db36a8e560ea2b",
".git/objects/a6/afeb4d48ff1d8025959e9bd7ab3eae9c592f5c": "a8e29aacd8407a490edff39ea43b922a",
".git/objects/a9/c372d7bd5c45eaff9d1bc1a0ffca145564d4ac": "81c4f22b35db48a5669a1baf5e2cbf78",
".git/objects/aa/aaa7695299f63b1801d23cc726250c44d39b51": "d35fd6d0a53eee458e135a832df13549",
".git/objects/ad/f68529b8671fd1183d195f5ec624b182d4595d": "e6d13f6e654fbddf7bbd2942529d76c6",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/591e1e0007490e50ca7185396d1f5e2091a057": "62b88a4bab2204cd3d01c51a2c110c2b",
".git/objects/b4/9c3bd5b862919e4abe7a9ead2402ddc7303be6": "4b6dbfcf36880172396f26f722b2148f",
".git/objects/b4/d51227c1643b784c4719605350d039e6266c30": "fcabc8f3a14f39e0790a454f2b246390",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/0be20caebaa4591bbf641a94bf8b685aeeace0": "b0dedffbd68a7695749bec3b860115da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/927f78eaec4f0e6233f1ec1080482c9f081e7c": "f09d7e5fc2497dc42d27f2ee2e416641",
".git/objects/bf/5034158ab45a1c75b78b466a04bc6320607aff": "5f3642f3faa5459605fed7760c04396b",
".git/objects/c1/02fe5157eb9e79915d2b842782abff81193e53": "75e58a2522b845210bcec51619d0c2c2",
".git/objects/c1/4fcbed51db3637f0eecde548e91d53e3c4a3ed": "0b70ca3e33834f1c3f239406d7769be3",
".git/objects/c3/f9fa8b235a48fea6de2460d8b36a6e745e802c": "6d79662fced0810fc8ac3e91917e668c",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/b5815b10c92f85123ab3a3310ba31f5ef0f8d9": "64cb75236e7ecf1b733847a6aa595ae0",
".git/objects/cd/136b95f17cdda0c0f15508a557f15caa5b4ecb": "975b6e4a9b1d7e1e3980e52c70013179",
".git/objects/ce/ff511503d36f0a1b7abc585fcbf393c89c9c67": "7ab17c56f18ed3a87901e44fa989ffb9",
".git/objects/cf/5a73535dd0c53240044a3c2d01121541a52fc3": "fd1c437e7a1e68a4f6845d52d63e6f15",
".git/objects/cf/5ce3d319e314d97e6f443425a3e3937a8ef73f": "07dd45b813dc35382ee0cca75c9d7ad7",
".git/objects/cf/a24fe400ee2415ea23d71a393d58ea57a5f85c": "94019d560b17920ddb935084fec069bc",
".git/objects/d3/8ebf184785fe91bcc783a02490694d7b410891": "9857b26e4c64430ab910c1436b9dd842",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/7521900f4fd0d72665b05a9f7ba4079d812870": "8f3144c10f8127ba171ff15074d5f6a5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/2499d4a818004858496729f5eafe1aa986ea1b": "b8d7c20b0d108d51266f7c8c05ff0c44",
".git/objects/d8/593bbfb8a6e32e97e93dce496d116cb1a32546": "47f72ede650b5e0dea89ef884ceb43d8",
".git/objects/d8/5950d3d7baf776e87bef48356d7bf0587f3d6b": "2910746271d7e74e5925efb27631ecca",
".git/objects/dc/e5179f6b5f93e0b870dc2a82b4e1ba29138ba8": "4b302504a125744a5168183c4261a3c8",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/99e71be6ea0bf1612eb531e61f6d4a44e6826b": "c4e769c356c7af68d7609672c24f7558",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/bc7a98badc52a11b9403eab9956ff049faab92": "86f3bb066d29d9113e53735a838129fa",
".git/objects/ef/6fb263f310a53338e280a5d3b66ade9725f78c": "20ab02c8c74985f1556f8696ba59a32b",
".git/objects/ef/dff675a4dd628c091e4bfdbeed10bbfec50165": "824d0925eb3d492b51175f59ba86b050",
".git/objects/f1/ba6ef5ab44be431ccf7dbe3f7f1199333d91a3": "c8b1db53be6c45202341f1cd9924b853",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/2299961dd06b69e4237964fd207db39c3f14e0": "35a94a53fa4b131ebb619ced6fbab6c1",
".git/objects/f6/a1a1aa86d06bc6b37b6e4cf9b8aacb72120ad7": "d5006b63ba01f39d7135a98bda10a106",
".git/objects/f7/74ba531018a8e11e1a204670352fec4efa4bb3": "73c26e9901c548b115f2c2ec2d8ca4cf",
".git/objects/f7/ab8d59083c629440e718e733d5b556f993c680": "71839832fcdde281f387994d1652513f",
".git/objects/f8/6212a2b7864f11aa75a6996f278e93dd6f11b7": "9b9991b0eee882db605566aa61d5b3d5",
".git/objects/f9/f9f8e06c9b0483ca8262914051f4bbca735f01": "233b799cec67828fdcd87e3b9115eef0",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fd/e3ef95d430fe9bf88ea0d3e9e5d7002762564d": "96b7f7901d3164e19f4ca0aed60c1ddc",
".git/ORIG_HEAD": "8b98edd212a3e521b9def3beaaf494f8",
".git/refs/heads/master": "8b98edd212a3e521b9def3beaaf494f8",
".git/refs/remotes/origin/master": "8b98edd212a3e521b9def3beaaf494f8",
"assets/AssetManifest.bin": "f6b80e0e07864a8283c406153fb6ab42",
"assets/AssetManifest.bin.json": "eb8c273da4d5c5e9b05ae198dc8aba2e",
"assets/AssetManifest.json": "0577ba3f4543dbdefe124f53f6f20ca3",
"assets/assets/questionsIcons/carre.png": "39b18eec8937850527122418b5af4045",
"assets/assets/questionsIcons/losange.png": "303e369ed797a2e1720ea3a6f7517964",
"assets/assets/questionsIcons/pyramide.png": "00f49d21b321518a8e9b1ab55b7b1135",
"assets/assets/questionsIcons/rond.png": "2f91a3c8665d989dab92514652da7dc7",
"assets/assets/questionsIcons/triangle.png": "b4504a8b451b0983f3587e0319cfc879",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a4efc2c6b9ffbc17ab39ce8b6b8b390f",
"assets/NOTICES": "67b8c573e87739487963a4f036c468c8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f906c5f470d9424d1bd5c656e20c72bd",
"/": "f906c5f470d9424d1bd5c656e20c72bd",
"main.dart.js": "5f5612271d0df0468386d5ffb777a96a",
"manifest.json": "08dcf471027634b92bb154ef6d9eb16e",
"README.md": "d2dcaa4f29869a2c584b5bc02dfca366",
"version.json": "8137ffb82c69ce3ea2f4b73b7655e6b4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
