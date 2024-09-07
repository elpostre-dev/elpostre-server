const products = [
  {
    "sName": "Coffeecake grande",
    "dPrice": 350,
    "sCategoryId": "f8ace026-493e-43ed-8a49-d6bcf0449da3",
    "sProductId": "89c924eb-1f26-43ac-aa7c-51a77ab0d851"
  },
  {
    "sName": "1 o 4 P tortugas",
    "dPrice": 50,
    "sCategoryId": "da804024-676c-419b-ad6b-5ed9319362d0",
    "sProductId": "92359b5c-049b-4a79-93eb-c40a229d909f"
  },
  {
    "sName": "1 tortuga gigante",
    "dPrice": 70,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "6fd0fb80-cc2c-4fa2-86c4-52fb8d338fad"
  },
  {
    "sName": "10 o 36 P tortugas",
    "dPrice": 320,
    "sCategoryId": "da804024-676c-419b-ad6b-5ed9319362d0",
    "sProductId": "d918f012-eb46-491d-88a6-d300de07ece3"
  },
  {
    "sName": "10 tortuguitas",
    "dPrice": 220,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "e45c7b92-42a7-4750-88d7-694791aadcb9"
  },
  {
    "sName": "2 o 10 P tortugas",
    "dPrice": 90,
    "sCategoryId": "da804024-676c-419b-ad6b-5ed9319362d0",
    "sProductId": "2a902141-b351-4a97-8ab3-7904e36282c9"
  },
  {
    "sName": "3 Tortugas",
    "dPrice": 220,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "40975dab-2f91-4059-ae30-7f28a4743f93"
  },
  {
    "sName": "4 leches",
    "dPrice": 80,
    "sCategoryId": "ca1fc7db-6265-40fa-9bd5-c78962cb90c4",
    "sProductId": "69e14bd1-9441-4a1b-9d85-aacb31ded99d"
  },
  {
    "sName": "4 leches CHICO",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "d069e04b-9ad1-4276-8d98-eef44b2684b5"
  },
  {
    "sName": "4 leches med",
    "dPrice": 350,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "38fd4545-a478-4970-814b-ce1249ef041a"
  },
  {
    "sName": "4 tortuguitas",
    "dPrice": 70,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "f3e54c02-ee54-4e0b-ab9d-24e0d85e55d9"
  },
  {
    "sName": "6 o 24 P tortugas",
    "dPrice": 190,
    "sCategoryId": "da804024-676c-419b-ad6b-5ed9319362d0",
    "sProductId": "a121027c-5b4b-4946-b40b-54b022f33161"
  },
  {
    "sName": "Acrilico chico galleta",
    "dPrice": 280,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "2c1859f9-6873-4bed-8c4b-650422a117a8"
  },
  {
    "sName": "Acrilico grande galleta",
    "dPrice": 420,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "46d0fa8f-fde5-41ce-b1da-0e3f52ecb185"
  },
  {
    "sName": "Acrilico mediano galleta",
    "dPrice": 350,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "7a1939e6-2da4-4203-83d8-2844d731b4b5"
  },
  {
    "sName": "Aderezo chico",
    "dPrice": 165,
    "sCategoryId": "0095e441-08a9-44ad-aef6-49e2c2d41dd0",
    "sProductId": "296677de-8577-430a-9852-8acdc9d1b6f1"
  },
  {
    "sName": "Betun choco med alto",
    "dPrice": 520,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "44815930-8c03-40a9-aa8e-502acef17941"
  },
  {
    "sName": "Bolsita avena",
    "dPrice": 60,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "0018275c-33d8-47f2-94ee-69afe3abefeb"
  },
  {
    "sName": "Bolsita avena/monkfruit",
    "dPrice": 60,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "1059fcee-22e9-447b-934b-57bd56e79e64"
  },
  {
    "sName": "Bolsita chocochip",
    "dPrice": 60,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "149121eb-d893-4bab-be61-b9cfa7240b68"
  },
  {
    "sName": "Brow Aleman med",
    "dPrice": 350,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "45f96b69-812a-4ac4-a817-d87e1469d90d"
  },
  {
    "sName": "Brow KETO",
    "dPrice": 50,
    "sCategoryId": "d3590a81-9644-45ca-87db-d3d2ae857655",
    "sProductId": "d8aebebf-3cf3-48fc-af16-b6a6fc589f95"
  },
  {
    "sName": "Brow largos 6",
    "dPrice": 150,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "ea08fa2c-8d42-4ae0-bb6f-d0e907fac056"
  },
  {
    "sName": "brow largos 8",
    "dPrice": 170,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "9d2cbb9c-736e-419b-b3b7-e61c347e2e83"
  },
  {
    "sName": "Brownie",
    "dPrice": 80,
    "sCategoryId": "ca1fc7db-6265-40fa-9bd5-c78962cb90c4",
    "sProductId": "90418e58-9a0b-4494-8714-b521d7e3e384"
  },
  {
    "sName": "Brownie azcr glass 6",
    "dPrice": 150,
    "sCategoryId": "72465a39-0548-4484-b71a-f918e086803a",
    "sProductId": "45ebe4dd-36bf-457e-9558-22fd24634d9a"
  },
  {
    "sName": "Brownie azcr glass 9",
    "dPrice": 190,
    "sCategoryId": "72465a39-0548-4484-b71a-f918e086803a",
    "sProductId": "9794032c-ab28-483d-98e2-a74143c41b15"
  },
  {
    "sName": "Brownie c/Aleman CHIC",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "35ed1361-7c95-483d-aa5c-4b826e8c9670"
  },
  {
    "sName": "Brownie c/Aleman gde",
    "dPrice": 660,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "6f15e19a-5bc2-4385-81ca-140e9137d705"
  },
  {
    "sName": "Brownie CHICO",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "f8bdf0aa-4c99-476e-8eaa-e0ab843720ee"
  },
  {
    "sName": "Brownie Cuadrado",
    "dPrice": 50,
    "sCategoryId": "72465a39-0548-4484-b71a-f918e086803a",
    "sProductId": "baa2b1fa-0bcb-48a3-a7ef-9cc7138a495d"
  },
  {
    "sName": "Brownie de corazon",
    "dPrice": 140,
    "sCategoryId": "a204ab83-e9b4-4a4d-8f06-ba4c05aca7b0",
    "sProductId": "0ee7fc40-299a-4475-bd82-6ca911ec3a6c"
  },
  {
    "sName": "Brownie Keto con quest",
    "dPrice": 55,
    "sCategoryId": "d3590a81-9644-45ca-87db-d3d2ae857655",
    "sProductId": "492e9373-fade-47d7-b4d9-28d70323d2a5"
  },
  {
    "sName": "Brownie med",
    "dPrice": 350,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "663fe966-2b96-47b5-802b-63c254966c2c"
  },
  {
    "sName": "Buñuelos",
    "dPrice": 280,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "9383262f-9ea2-41ab-b74d-91dab6c1a00c"
  },
  {
    "sName": "Caja acrilico galletas",
    "dPrice": 560,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "c3b52782-75b3-4a28-95a0-a673963b1949"
  },
  {
    "sName": "Caja chica avena",
    "dPrice": 250,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "6a5d94b6-b52f-499b-97a2-82feadd2a46e"
  },
  {
    "sName": "Caja chica chcochip",
    "dPrice": 250,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "0b4eb89e-bece-4adc-8278-07f5c9753c4f"
  },
  {
    "sName": "Caja grande avena",
    "dPrice": 390,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "2d021ab3-2659-4243-8181-5080ff8f226f"
  },
  {
    "sName": "Caja grande chcochip",
    "dPrice": 390,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "ea9517ff-e183-4556-ab5e-03e951734311"
  },
  {
    "sName": "Cajitas acrilico",
    "dPrice": 190,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "b1eeea64-6d63-40a4-bd33-0192410db1bb"
  },
  {
    "sName": "Charola brow glass",
    "dPrice": 240,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "2a515eb5-cfdf-4f91-b6e1-5200e5c784dd"
  },
  {
    "sName": "Charola quesitos",
    "dPrice": 230,
    "sCategoryId": "0095e441-08a9-44ad-aef6-49e2c2d41dd0",
    "sProductId": "08166fa4-4d83-4b0b-8a98-7b6da9f0ff2c"
  },
  {
    "sName": "Charolas Conchitas",
    "dPrice": 140,
    "sCategoryId": "0095e441-08a9-44ad-aef6-49e2c2d41dd0",
    "sProductId": "9f639664-f845-43d8-9296-e392fe281293"
  },
  {
    "sName": "Chico vidrio Avena",
    "dPrice": 280,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "30110642-57d9-41d8-afce-0c53a825a876"
  },
  {
    "sName": "Chico vidrio chocochi",
    "dPrice": 280,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "e2bfda1d-5d0c-47bb-b33c-c5e91cf2b2bc"
  },
  {
    "sName": "Chilitos chicos",
    "dPrice": 160,
    "sCategoryId": "0095e441-08a9-44ad-aef6-49e2c2d41dd0",
    "sProductId": "c38d3eea-9511-49b7-be90-d0c4a3ca2c86"
  },
  {
    "sName": "Chilitos grandes",
    "dPrice": 370,
    "sCategoryId": "0095e441-08a9-44ad-aef6-49e2c2d41dd0",
    "sProductId": "137426bb-7990-4d6e-b9e2-3eff361b5102"
  },
  {
    "sName": "Chocochip chico",
    "dPrice": 140,
    "sCategoryId": "f8ace026-493e-43ed-8a49-d6bcf0449da3",
    "sProductId": "3b3c9b6e-78ee-4f2b-ad68-b38a5d6470cf"
  },
  {
    "sName": "Chocochip grande",
    "dPrice": 350,
    "sCategoryId": "f8ace026-493e-43ed-8a49-d6bcf0449da3",
    "sProductId": "a971b908-9534-4681-86a8-6fadf86bdb53"
  },
  {
    "sName": "Chocolate fresas gde",
    "dPrice": 660,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "056ce099-cb40-4109-a29f-79fd7a818c87"
  },
  {
    "sName": "Chocolates Resses",
    "dPrice": 40,
    "sCategoryId": "d3590a81-9644-45ca-87db-d3d2ae857655",
    "sProductId": "130f4917-a402-4167-ad1b-97303f0b5c9c"
  },
  {
    "sName": "Cilindro avena grande",
    "dPrice": 380,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "4c75f5b8-813b-48a6-9d33-0d107f0636d7"
  },
  {
    "sName": "Cilindro avena mediano",
    "dPrice": 250,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "80f7e24c-a234-480e-8560-f6e31b6dcae1"
  },
  {
    "sName": "Cilindro chico avena",
    "dPrice": 130,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "e7fff232-b52a-4912-b004-276a0f48e5db"
  },
  {
    "sName": "Cilindro chico chocochip",
    "dPrice": 130,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "35b79024-1166-4fbe-98a7-6dea61b477cd"
  },
  {
    "sName": "Cilindro chococh mediano",
    "dPrice": 250,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "66da3b9a-6678-43a4-9478-1725e1ed1bc1"
  },
  {
    "sName": "Cilindro chocpch grande",
    "dPrice": 380,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "7ea0135c-df67-48c7-84b4-9455ed04727f"
  },
  {
    "sName": "Confeti med",
    "dPrice": 520,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "a8ea8223-7eb2-4606-99b9-2c83352b3d3b"
  },
  {
    "sName": "Confetti bajo",
    "dPrice": 290,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "63406bc1-659d-4dda-b961-2c063a50055a"
  },
  {
    "sName": "Confetti Chico",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "0eebfad8-17b8-4522-ba26-11fcc1f5365d"
  },
  {
    "sName": "Copita gansito",
    "dPrice": 60,
    "sCategoryId": "d3590a81-9644-45ca-87db-d3d2ae857655",
    "sProductId": "dc1cc7b2-3a49-4e28-8854-e72934da10cc"
  },
  {
    "sName": "Copita Keto Chocolate",
    "dPrice": 50,
    "sCategoryId": "d3590a81-9644-45ca-87db-d3d2ae857655",
    "sProductId": "6e33b05c-cc9f-4ff6-bb91-ad1ea36b1702"
  },
  {
    "sName": "Copita Keto fresa",
    "dPrice": 50,
    "sCategoryId": "d3590a81-9644-45ca-87db-d3d2ae857655",
    "sProductId": "3534067c-8c7e-48f0-911d-04258896cd41"
  },
  {
    "sName": "Copo nieve med alto",
    "dPrice": 560,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "7b16431e-89be-4fb8-b9cb-6e5cbe0bd1e7"
  },
  {
    "sName": "Copo nieve med bajo",
    "dPrice": 360,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "de6b7428-9716-4f13-b58d-7d212a1d5c9a"
  },
  {
    "sName": "Dark med bajo",
    "dPrice": 390,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "372b88d4-9bc5-4778-8c24-846379d9b069"
  },
  {
    "sName": "DARK Pastel grande",
    "dPrice": 930,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "1ef746e5-1141-4ffe-9f1c-bdc47582e196"
  },
  {
    "sName": "Dips",
    "dPrice": 180,
    "sCategoryId": "0095e441-08a9-44ad-aef6-49e2c2d41dd0",
    "sProductId": "e139861e-1aa4-458e-80cc-0db031ef34d4"
  },
  {
    "sName": "Ensalada verde",
    "dPrice": 130,
    "sCategoryId": "0095e441-08a9-44ad-aef6-49e2c2d41dd0",
    "sProductId": "fafcc63e-a765-4630-a358-19caa80eb195"
  },
  {
    "sName": "Ferrero med",
    "dPrice": 690,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "7ffff07c-d28d-40f4-89d7-a8e99df9b7ca"
  },
  {
    "sName": "Ferrero med bajo",
    "dPrice": 390,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "5054d0ce-6440-44d9-8a96-6a784ee55314"
  },
  {
    "sName": "Fresa CHICO",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "ab51fe96-6e05-4f5c-bd23-9eda97b05ae2"
  },
  {
    "sName": "Fresa med",
    "dPrice": 350,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "9c6fd6f3-5b2b-4856-8057-d2e10cc3e908"
  },
  {
    "sName": "Fresas c/ crema gde",
    "dPrice": 660,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "b76a5e38-dc4b-4b13-914e-e057744f0a5d"
  },
  {
    "sName": "Fresas con chocolate",
    "dPrice": 25,
    "sCategoryId": "1ca54b5d-5fdd-4e9e-87bb-1497c8b0f271",
    "sProductId": "c67cb7fa-e3dd-4164-8c35-a32709aa77bd"
  },
  {
    "sName": "Fresas con crema",
    "dPrice": 80,
    "sCategoryId": "ca1fc7db-6265-40fa-9bd5-c78962cb90c4",
    "sProductId": "8ecced00-27a2-4778-96ed-5e8995a100bc"
  },
  {
    "sName": "Frutos Rojos",
    "dPrice": 640,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "f67100c4-f79f-4f6d-8374-f868b68d04c0"
  },
  {
    "sName": "Galleta corazon",
    "dPrice": 45,
    "sCategoryId": "a204ab83-e9b4-4a4d-8f06-ba4c05aca7b0",
    "sProductId": "6b76f64b-91ee-4fe7-be88-19740e454bc7"
  },
  {
    "sName": "Galleta Gigante",
    "dPrice": 460,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "00a5f59f-da72-40b8-8fa0-604fc4d4df58"
  },
  {
    "sName": "Galleta gigante corazon",
    "dPrice": 440,
    "sCategoryId": "a204ab83-e9b4-4a4d-8f06-ba4c05aca7b0",
    "sProductId": "6f1bc660-14d0-4c31-a758-eeb16c475b62"
  },
  {
    "sName": "Galletas Brenton",
    "dPrice": 75,
    "sCategoryId": "0095e441-08a9-44ad-aef6-49e2c2d41dd0",
    "sProductId": "bffa25b5-929b-476c-8115-f30bc937b049"
  },
  {
    "sName": "Galletas de flor 6",
    "dPrice": 170,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "fabf5b05-f36d-4db1-8c90-832e6e7328d8"
  },
  {
    "sName": "Galletas de flor 9",
    "dPrice": 290,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "c3a58ec5-0c45-40e9-9265-eca8ea1dafa6"
  },
  {
    "sName": "Galletas largas 6",
    "dPrice": 260,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "13383c0f-b031-46fb-99bb-8b1ad5e39f70"
  },
  {
    "sName": "Galletas largas 8",
    "dPrice": 340,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "4e010291-5fe3-4a35-b07f-ba67c564b9db"
  },
  {
    "sName": "Gansito",
    "dPrice": 60,
    "sCategoryId": "d3590a81-9644-45ca-87db-d3d2ae857655",
    "sProductId": "d8b91e9b-65aa-4b00-9cb6-b305cd5026b8"
  },
  {
    "sName": "Grande vidrio avena",
    "dPrice": 480,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "379a5c9b-fde7-4743-ad96-d187374bfa13"
  },
  {
    "sName": "Grande vidrio chococh",
    "dPrice": 480,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "2b9fd73d-fb36-4937-b23a-4c6fdfcccfcd"
  },
  {
    "sName": "Hojarascas",
    "dPrice": 130,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "20b21ab2-a6c9-4d90-a266-4c8c07bb8e2a"
  },
  {
    "sName": "Ingrediente extra",
    "dPrice": 120,
    "sCategoryId": "7e98131f-62f5-4e13-a8f3-b25f4c69840f",
    "sProductId": "550b1f3e-ca5c-4111-9a92-d245af1bb3f6"
  },
  {
    "sName": "Kekito gigante",
    "dPrice": 520,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "753e08e8-a756-4c28-9f1e-d8f0f9bbdb99"
  },
  {
    "sName": "Kekito individual",
    "dPrice": 35,
    "sCategoryId": "1ca54b5d-5fdd-4e9e-87bb-1497c8b0f271",
    "sProductId": "bf35b2fb-455f-44ee-b237-527c8ac69dfa"
  },
  {
    "sName": "Kekitos con chocolate",
    "dPrice": 40,
    "sCategoryId": "1ca54b5d-5fdd-4e9e-87bb-1497c8b0f271",
    "sProductId": "46c332aa-0f37-473d-bb90-6ba2a8906ef0"
  },
  {
    "sName": "Keto vainilla chico",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "923ec7cf-7e7e-46c2-aeba-65fa807c743e"
  },
  {
    "sName": "Keto vainilla gde",
    "dPrice": 690,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "7137b500-841c-4dbf-be55-d8ce354c2029"
  },
  {
    "sName": "Keto vainilla med",
    "dPrice": 410,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "16e1f767-754f-4f59-afe4-0970e4e1f712"
  },
  {
    "sName": "Letrero 1234567890",
    "dPrice": 80,
    "sCategoryId": "7e98131f-62f5-4e13-a8f3-b25f4c69840f",
    "sProductId": "286ff40b-c77f-4808-a54d-03e827927649"
  },
  {
    "sName": "Letrero BestDad",
    "dPrice": 140,
    "sCategoryId": "7e98131f-62f5-4e13-a8f3-b25f4c69840f",
    "sProductId": "b62749e0-bf2e-4c8f-a7b1-566a1f28f5d3"
  },
  {
    "sName": "Letrero estrellas",
    "dPrice": 200,
    "sCategoryId": "7e98131f-62f5-4e13-a8f3-b25f4c69840f",
    "sProductId": "a23a8a9c-157d-4075-81fa-675090f04272"
  },
  {
    "sName": "Letrero grande",
    "dPrice": 120,
    "sCategoryId": "a204ab83-e9b4-4a4d-8f06-ba4c05aca7b0",
    "sProductId": "dfb21e72-5bd8-4c37-82b6-3c7c336944b6"
  },
  {
    "sName": "Letrero HBD",
    "dPrice": 120,
    "sCategoryId": "7e98131f-62f5-4e13-a8f3-b25f4c69840f",
    "sProductId": "ca352bb2-5af6-4982-b48a-b5a8fe547ff9"
  },
  {
    "sName": "Letrero med",
    "dPrice": 80,
    "sCategoryId": "a204ab83-e9b4-4a4d-8f06-ba4c05aca7b0",
    "sProductId": "8123729c-27e5-4864-9d8d-4d417678af72"
  },
  {
    "sName": "Letrero mini HBD",
    "dPrice": 25,
    "sCategoryId": "7e98131f-62f5-4e13-a8f3-b25f4c69840f",
    "sProductId": "73538ddb-f84f-47fc-97b9-5f9a10b8d51c"
  },
  {
    "sName": "Letrero navidad",
    "dPrice": 100,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "e394d6a9-af1a-4ae5-aadb-d7a709eea784"
  },
  {
    "sName": "Limon chico",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "1a81e6e5-e67c-4d2d-8176-717ef824a292"
  },
  {
    "sName": "Limon chico",
    "dPrice": 140,
    "sCategoryId": "f8ace026-493e-43ed-8a49-d6bcf0449da3",
    "sProductId": "4971bea2-7a50-462d-826e-df0e0301c051"
  },
  {
    "sName": "Limon grande",
    "dPrice": 620,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "7cc7861b-a25f-4faf-8093-e46e556e0184"
  },
  {
    "sName": "Limon grande",
    "dPrice": 350,
    "sCategoryId": "f8ace026-493e-43ed-8a49-d6bcf0449da3",
    "sProductId": "46710c19-9fc8-4f57-9d04-34365837af7e"
  },
  {
    "sName": "Limon med",
    "dPrice": 350,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "40ed32dc-257d-4c99-b243-bdde439e6b15"
  },
  {
    "sName": "Mango CHICO",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "de898e9e-66c2-4046-bd27-80d3bab61c06"
  },
  {
    "sName": "Mango con crema",
    "dPrice": 80,
    "sCategoryId": "ca1fc7db-6265-40fa-9bd5-c78962cb90c4",
    "sProductId": "8ef2f675-0874-44c5-9a16-19b1d92a4503"
  },
  {
    "sName": "Mango med",
    "dPrice": 350,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "f4730958-e97e-4bd4-b743-d5bc12c3554e"
  },
  {
    "sName": "Manzana CHICO",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "7a6b2a49-6767-4817-8bb4-2e1b3b29fbf1"
  },
  {
    "sName": "Manzana med",
    "dPrice": 350,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "739a6896-66ad-446a-acc1-3b5d0b229603"
  },
  {
    "sName": "Marinitas",
    "dPrice": 280,
    "sCategoryId": "0095e441-08a9-44ad-aef6-49e2c2d41dd0",
    "sProductId": "f3d866cb-ddb0-44b2-a441-964e38fe97a7"
  },
  {
    "sName": "Mechudo CHICO",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "a151acb8-5ff4-474a-99c4-2e25aefb1c60"
  },
  {
    "sName": "Mechudo gde",
    "dPrice": 660,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "c67ea2fc-6c83-4e38-ae73-2972856a31a9"
  },
  {
    "sName": "Mechudo med bajo",
    "dPrice": 350,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "a4a7cb53-568d-4cc7-8caf-8184a2a6f51d"
  },
  {
    "sName": "Med vidrio Avena",
    "dPrice": 380,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "a5b12bf4-a630-417b-93e6-5510c28504cc"
  },
  {
    "sName": "Med vidrio choco",
    "dPrice": 380,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "737c6a84-4566-4aa8-ab50-9fc790bc23b0"
  },
  {
    "sName": "Mini brownies 4",
    "dPrice": 80,
    "sCategoryId": "72465a39-0548-4484-b71a-f918e086803a",
    "sProductId": "919cb8a4-8699-4a75-8ee8-c885bac6007f"
  },
  {
    "sName": "Mini coffecake",
    "dPrice": 140,
    "sCategoryId": "f8ace026-493e-43ed-8a49-d6bcf0449da3",
    "sProductId": "2fd18954-8f3d-4ff0-b572-26dd8f6903a9"
  },
  {
    "sName": "Mini Muffins 12 pzas",
    "dPrice": 230,
    "sCategoryId": "a67e6110-4d75-499f-87f2-b38c4aba6f7a",
    "sProductId": "ddf414cc-8240-4f97-b18e-58a75dc22f63"
  },
  {
    "sName": "Minibrownies 25",
    "dPrice": 360,
    "sCategoryId": "72465a39-0548-4484-b71a-f918e086803a",
    "sProductId": "3b445aac-7336-44be-803a-80fcf90b3358"
  },
  {
    "sName": "Minibrownies 40",
    "dPrice": 510,
    "sCategoryId": "72465a39-0548-4484-b71a-f918e086803a",
    "sProductId": "2c953780-0b1c-4259-8638-0238554e1747"
  },
  {
    "sName": "Minibrownies 5",
    "dPrice": 90,
    "sCategoryId": "72465a39-0548-4484-b71a-f918e086803a",
    "sProductId": "cec5c224-9fd4-4bb4-8b31-69accb8cc7be"
  },
  {
    "sName": "Minibrownies 9",
    "dPrice": 150,
    "sCategoryId": "72465a39-0548-4484-b71a-f918e086803a",
    "sProductId": "9e974e6f-bc78-46f7-99de-5b1519be6e0b"
  },
  {
    "sName": "Minibrownies16",
    "dPrice": 260,
    "sCategoryId": "72465a39-0548-4484-b71a-f918e086803a",
    "sProductId": "b1ad9e90-bfdb-43b7-a59a-e0b8626e1600"
  },
  {
    "sName": "Minipays limon 25",
    "dPrice": 410,
    "sCategoryId": "fa1307a1-6eda-4345-9cea-9550b94cfc06",
    "sProductId": "58d5b3e2-9e66-4d9c-8cc8-93677d7f365d"
  },
  {
    "sName": "Minipays limon 40",
    "dPrice": 590,
    "sCategoryId": "fa1307a1-6eda-4345-9cea-9550b94cfc06",
    "sProductId": "b1367d3b-60c7-4b88-afae-358c913434d4"
  },
  {
    "sName": "Minipays manzana 25",
    "dPrice": 410,
    "sCategoryId": "fa1307a1-6eda-4345-9cea-9550b94cfc06",
    "sProductId": "b527b03b-b73e-41b4-a216-1fad1e918b1e"
  },
  {
    "sName": "Minipays manzana 40",
    "dPrice": 590,
    "sCategoryId": "fa1307a1-6eda-4345-9cea-9550b94cfc06",
    "sProductId": "c8f1eec9-70fe-4cf8-90fc-aab6bb38d29b"
  },
  {
    "sName": "Minipays nuez 25",
    "dPrice": 410,
    "sCategoryId": "fa1307a1-6eda-4345-9cea-9550b94cfc06",
    "sProductId": "17297be5-77ad-442d-8300-dbe8383b4e58"
  },
  {
    "sName": "Minipays nuez 40",
    "dPrice": 590,
    "sCategoryId": "fa1307a1-6eda-4345-9cea-9550b94cfc06",
    "sProductId": "07fa350c-2190-4322-9c2f-b08c4595071d"
  },
  {
    "sName": "Miniquequitos chocolate",
    "dPrice": 210,
    "sCategoryId": "a67e6110-4d75-499f-87f2-b38c4aba6f7a",
    "sProductId": "91a7c408-a83f-4325-9823-e47339b6361e"
  },
  {
    "sName": "Miniquequitos vainilla",
    "dPrice": 210,
    "sCategoryId": "a67e6110-4d75-499f-87f2-b38c4aba6f7a",
    "sProductId": "e53a5b31-73f8-45e6-8709-796fd24dac0a"
  },
  {
    "sName": "Minitorta pan arabe",
    "dPrice": 300,
    "sCategoryId": "0095e441-08a9-44ad-aef6-49e2c2d41dd0",
    "sProductId": "0d0c2bbf-ba14-4ecc-8624-9510ab92d910"
  },
  {
    "sName": "Minizanahoria 25",
    "dPrice": 340,
    "sCategoryId": "fa1307a1-6eda-4345-9cea-9550b94cfc06",
    "sProductId": "25f764ee-77b3-4335-88c9-6f68daa782bc"
  },
  {
    "sName": "Minizanahoria 40",
    "dPrice": 480,
    "sCategoryId": "fa1307a1-6eda-4345-9cea-9550b94cfc06",
    "sProductId": "589b9db7-51f9-49dc-a4db-ca7e0d8526ea"
  },
  {
    "sName": "Mnipay queso frta 25",
    "dPrice": 410,
    "sCategoryId": "fa1307a1-6eda-4345-9cea-9550b94cfc06",
    "sProductId": "05e7a500-9b4e-4dea-a4eb-cf5ce96bdb27"
  },
  {
    "sName": "Mnipay queso frta 40",
    "dPrice": 590,
    "sCategoryId": "fa1307a1-6eda-4345-9cea-9550b94cfc06",
    "sProductId": "6954e576-d9f8-41d8-b6a5-e7e38c1ca285"
  },
  {
    "sName": "Mono Jengibre med alto",
    "dPrice": 560,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "25856ff0-6249-42e9-bc7f-6f9b63edc972"
  },
  {
    "sName": "Mono jengibre med bajo",
    "dPrice": 360,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "197ad3bc-cce0-42df-b4ae-38de2dc26ba7"
  },
  {
    "sName": "Mostachon cajeta CHIC",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "622551ba-a1b1-4659-a8bc-134f643e56a5"
  },
  {
    "sName": "Mostachon cajeta gde",
    "dPrice": 660,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "3bc1887b-8041-45ca-afb5-998298c576bf"
  },
  {
    "sName": "Mostachon cajeta med",
    "dPrice": 350,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "ff097662-1ed8-48b1-b24f-4cffa4e68a20"
  },
  {
    "sName": "Mostachon de corazon",
    "dPrice": 620,
    "sCategoryId": "a204ab83-e9b4-4a4d-8f06-ba4c05aca7b0",
    "sProductId": "aeec7645-baeb-4f50-8547-c7cddac5bc59"
  },
  {
    "sName": "Mostachon fresa",
    "dPrice": 80,
    "sCategoryId": "ca1fc7db-6265-40fa-9bd5-c78962cb90c4",
    "sProductId": "7f836a23-b6fd-4d66-b211-5f75636bc646"
  },
  {
    "sName": "Mostachon fresa gde",
    "dPrice": 660,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "67a41275-b5ae-4b1a-a41b-d320fca112ca"
  },
  {
    "sName": "Mostachon fresas CHIC",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "f4bce0d8-3615-4c0e-addd-d5728cedd1d8"
  },
  {
    "sName": "Mostachon fresas med",
    "dPrice": 350,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "0505771d-2f1b-4fe1-a8e7-30e7424d4e30"
  },
  {
    "sName": "Mostachon mango",
    "dPrice": 80,
    "sCategoryId": "ca1fc7db-6265-40fa-9bd5-c78962cb90c4",
    "sProductId": "1b3dd5aa-3520-451f-bfbb-d185a933574a"
  },
  {
    "sName": "Mostachon Mango CHICO",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "b9511060-667a-48f4-b298-64b5ce20ab75"
  },
  {
    "sName": "Mostachon mango gde",
    "dPrice": 660,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "df322269-d5e1-4027-9565-671544cc5a44"
  },
  {
    "sName": "Mostachon Mango med",
    "dPrice": 350,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "d600420c-1566-47c2-9594-4917c64c0f23"
  },
  {
    "sName": "Oreo med",
    "dPrice": 520,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "f701e7ca-a46a-47f6-b9ab-9e69cc74a86d"
  },
  {
    "sName": "Oreo mediano bajo",
    "dPrice": 350,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "84d592a2-9488-47e6-b8ba-d49dfe4764d8"
  },
  {
    "sName": "P. Brownie gde",
    "dPrice": 660,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "18d8eb34-fdac-4feb-9f6f-fd2cda99ae66"
  },
  {
    "sName": "P. Rayado gde",
    "dPrice": 660,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "9ee5401d-ad3d-4363-82a0-7462f61b629b"
  },
  {
    "sName": "Pan chocolate/merengue",
    "dPrice": 520,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "5c3c3a95-8536-4354-97b4-f37806de7038"
  },
  {
    "sName": "Papas chicas",
    "dPrice": 75,
    "sCategoryId": "0095e441-08a9-44ad-aef6-49e2c2d41dd0",
    "sProductId": "23eae42c-36f9-4309-bd1e-a6ab4280e4ae"
  },
  {
    "sName": "Papas grandes",
    "dPrice": 210,
    "sCategoryId": "0095e441-08a9-44ad-aef6-49e2c2d41dd0",
    "sProductId": "0350a58c-5c13-4a84-878e-993c07d48dd9"
  },
  {
    "sName": "Paquete numero",
    "dPrice": 160,
    "sCategoryId": "7e98131f-62f5-4e13-a8f3-b25f4c69840f",
    "sProductId": "a6f9cf35-b950-4863-ad9d-9e6cbd9e75b9"
  },
  {
    "sName": "Pastel 4 leches gde",
    "dPrice": 590,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "026f444b-cc1d-48e6-bad7-73813aa70ba8"
  },
  {
    "sName": "Pastel Dark med",
    "dPrice": 640,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "974b6d4a-5121-4faf-abca-95c869df020d"
  },
  {
    "sName": "Pastel mechudo med",
    "dPrice": 520,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "57518364-97d2-4077-b7eb-587428778b7e"
  },
  {
    "sName": "Pastel pistache gde",
    "dPrice": 930,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "36783e52-dc79-402d-991b-fa6078654570"
  },
  {
    "sName": "Pastel Pistache med",
    "dPrice": 690,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "46e7023c-0226-48c9-800c-91167a86d54d"
  },
  {
    "sName": "Pastel rosas rosas med",
    "dPrice": 520,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "0fca3065-77e8-4832-9abb-054a630e61d4"
  },
  {
    "sName": "Pastel Toffe",
    "dPrice": 690,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "320b6a13-8b7c-4da0-984a-a1feb0e9e54e"
  },
  {
    "sName": "Pinguino CHICO",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "3c158448-614d-4b1e-bde8-df3e21a77bfa"
  },
  {
    "sName": "Pinguino corazon",
    "dPrice": 620,
    "sCategoryId": "a204ab83-e9b4-4a4d-8f06-ba4c05aca7b0",
    "sProductId": "3395e8f4-8343-4a6f-a21e-4e281207cccf"
  },
  {
    "sName": "Pinguino gde",
    "dPrice": 660,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "22712b92-7c41-4713-a67e-4ab85d7521de"
  },
  {
    "sName": "Pinguino med",
    "dPrice": 520,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "e686770f-def2-4576-b7dd-09472d02e30e"
  },
  {
    "sName": "Pistache med bajo",
    "dPrice": 390,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "552479fd-1cdd-4b2d-9fe3-d153ded8fee0"
  },
  {
    "sName": "Polvorones",
    "dPrice": 150,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "db5cf222-3208-406b-a3ee-1dc09ad71b0f"
  },
  {
    "sName": "Pretzels 14 feb",
    "dPrice": 80,
    "sCategoryId": "a204ab83-e9b4-4a4d-8f06-ba4c05aca7b0",
    "sProductId": "cbb28fb8-3c5e-4545-a921-af6f6d4f2d60"
  },
  {
    "sName": "Pretzels redondos",
    "dPrice": 70,
    "sCategoryId": "27e9dccd-9fc5-4268-8022-de805e6eb6eb",
    "sProductId": "cbd5340f-3386-403f-922d-12f770accb6a"
  },
  {
    "sName": "Q. Fresas gde",
    "dPrice": 660,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "6f57a41d-ea21-4996-9585-944a99004f31"
  },
  {
    "sName": "Q. Mango gde",
    "dPrice": 660,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "d577ccdf-c176-43fb-8104-d0b3cded261f"
  },
  {
    "sName": "Q. Manzana gde",
    "dPrice": 690,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "9795d9a7-b3a9-41eb-9288-9fccb72aeaa3"
  },
  {
    "sName": "Queso con fresas",
    "dPrice": 620,
    "sCategoryId": "a204ab83-e9b4-4a4d-8f06-ba4c05aca7b0",
    "sProductId": "19531c0f-e967-4b68-9be2-d7850d23831d"
  },
  {
    "sName": "Queso fresa",
    "dPrice": 80,
    "sCategoryId": "ca1fc7db-6265-40fa-9bd5-c78962cb90c4",
    "sProductId": "b5614552-b9b1-45e7-b7af-7a382b71732e"
  },
  {
    "sName": "Queso mango",
    "dPrice": 80,
    "sCategoryId": "ca1fc7db-6265-40fa-9bd5-c78962cb90c4",
    "sProductId": "07dc008f-f5ed-4604-8d5e-fea3f9912546"
  },
  {
    "sName": "Rayado CHICO",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "2effcdb4-0b3f-44f8-b26d-641f0c91e7f6"
  },
  {
    "sName": "Rosas chocolate gde",
    "dPrice": 790,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "6b559d6b-2353-4d41-917f-60a537a20ce3"
  },
  {
    "sName": "Rosas de chocolate",
    "dPrice": 620,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "5b2b99c7-7418-446e-a869-d1a116ba2b69"
  },
  {
    "sName": "Rosas rosas",
    "dPrice": 690,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "abef929a-5a38-4058-88c5-ff2c808f5121"
  },
  {
    "sName": "Rosca betun blanco",
    "dPrice": 590,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "cb6f0dfb-691e-41b3-aa70-5150f6711539"
  },
  {
    "sName": "Rosca choc/choc gde",
    "dPrice": 590,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "0cec65af-2a35-4709-b019-4e6276e829fe"
  },
  {
    "sName": "Rosca de Fresa gde",
    "dPrice": 690,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "1842a7c8-abc4-4f8f-ad04-18fb641f8b06"
  },
  {
    "sName": "Rosca de Mango gde",
    "dPrice": 690,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "a2b466c0-bf2e-4854-a73f-424cdfcbea51"
  },
  {
    "sName": "Rosca vaini/choco gde",
    "dPrice": 590,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "f4f26783-41cd-437c-9965-bb7dc4e8e6d9"
  },
  {
    "sName": "Salsa Sabore",
    "dPrice": 125,
    "sCategoryId": "0095e441-08a9-44ad-aef6-49e2c2d41dd0",
    "sProductId": "436bae96-57f1-434a-a5ab-572c7ec7d69f"
  },
  {
    "sName": "Sandwichitos",
    "dPrice": 340,
    "sCategoryId": "0095e441-08a9-44ad-aef6-49e2c2d41dd0",
    "sProductId": "06cc2d24-74b5-474b-9050-e7e1c8198f80"
  },
  {
    "sName": "Surtidas de 6",
    "dPrice": 180,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "23f4d1f0-bfc6-468a-96ed-848242e14c17"
  },
  {
    "sName": "Surtidas de 9",
    "dPrice": 260,
    "sCategoryId": "5f01a6ab-78bf-4335-9a9e-2699803e35c4",
    "sProductId": "073cb671-c904-4b67-8715-cc07ccb0a37e"
  },
  {
    "sName": "Surtido gde",
    "dPrice": 660,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "7f09b3be-c0b0-4a82-9866-fd0b4255e94a"
  },
  {
    "sName": "Tarjeta HBD",
    "dPrice": 40,
    "sCategoryId": "7e98131f-62f5-4e13-a8f3-b25f4c69840f",
    "sProductId": "14d9b65f-6209-42b9-9ed5-7ad2ea2b8538"
  },
  {
    "sName": "Tarjetas Gracias",
    "dPrice": 30,
    "sCategoryId": "7e98131f-62f5-4e13-a8f3-b25f4c69840f",
    "sProductId": "b4376fa5-23c8-49f7-b94e-948b30fbcd92"
  },
  {
    "sName": "Tarta de Nuez gde",
    "dPrice": 690,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "038e5d74-25e3-4551-8a0d-0b1dbb059bc4"
  },
  {
    "sName": "Tarta Nuez CHICO",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "dd3fee86-ef48-4781-bc41-58cedee21c20"
  },
  {
    "sName": "Toffe med bajo",
    "dPrice": 390,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "893f7e7a-887a-4a04-a178-27847c02134c"
  },
  {
    "sName": "Tortuga CHICO",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "f9ac30c2-5b16-4afe-95ed-6ef1daf969e2"
  },
  {
    "sName": "Tortuga gde",
    "dPrice": 660,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "bfe5a6dc-d218-48a2-a79f-e5758f8290b0"
  },
  {
    "sName": "Tortuga med",
    "dPrice": 350,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "bfde8e0c-8c74-4df8-ac8a-eba2a5b0f92f"
  },
  {
    "sName": "Tortuguitas",
    "dPrice": 80,
    "sCategoryId": "a204ab83-e9b4-4a4d-8f06-ba4c05aca7b0",
    "sProductId": "3023df76-fe23-497d-9fc0-8b0c17bf38c0"
  },
  {
    "sName": "Tradicional",
    "dPrice": 590,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "57cf8507-74df-49b5-9fed-a52499d5f289"
  },
  {
    "sName": "Trocitos de brownie",
    "dPrice": 40,
    "sCategoryId": "72465a39-0548-4484-b71a-f918e086803a",
    "sProductId": "dba3b933-aaf0-4161-8a9b-5f5ef320b06a"
  },
  {
    "sName": "Vaini/choco chico",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "d10bdaba-b866-4684-868a-b2c215568d21"
  },
  {
    "sName": "vaini/choco med bajo",
    "dPrice": 290,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "f671df7b-a92e-4c63-8f2b-051e49dabc2b"
  },
  {
    "sName": "Velita Chica",
    "dPrice": 25,
    "sCategoryId": "7e98131f-62f5-4e13-a8f3-b25f4c69840f",
    "sProductId": "b0f25953-185e-4070-96f1-63ed31ff8aa2"
  },
  {
    "sName": "Velita grande",
    "dPrice": 40,
    "sCategoryId": "7e98131f-62f5-4e13-a8f3-b25f4c69840f",
    "sProductId": "b922dbc1-03a2-4892-b0da-196a683308c9"
  },
  {
    "sName": "Zanahoria",
    "dPrice": 80,
    "sCategoryId": "ca1fc7db-6265-40fa-9bd5-c78962cb90c4",
    "sProductId": "b7928c54-2502-4a3d-a9df-a436baf5c9ef"
  },
  {
    "sName": "zanahoria CHICO",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "ad8f6fe8-1e43-4949-b58b-60f314577752"
  },
  {
    "sName": "Zanahoria gde",
    "dPrice": 660,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "888b5c05-5667-4221-8948-e40a199a1a13"
  },
  {
    "sName": "zanahoria med",
    "dPrice": 520,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "7082559a-fec8-469a-8a86-7bf031a1ece9"
  },
  {
    "sName": "zanahoria med bajo",
    "dPrice": 350,
    "sCategoryId": "ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2",
    "sProductId": "1ddc99c2-024a-4731-bc4b-322e703b6b24"
  },
  {
    "sName": "Zebra CHICO",
    "dPrice": 150,
    "sCategoryId": "c9dc855a-d30e-4062-93b5-dd099e259183",
    "sProductId": "7aae0fc4-ce69-41a0-a25b-432bc0d378b2"
  },
  {
    "sName": "Zebra gde",
    "dPrice": 690,
    "sCategoryId": "3fb71952-8b9f-433d-97ca-b5f3a73d7867",
    "sProductId": "662b4469-1045-40dd-8e45-59de51ec9fc6"
  },
  {
    "sName": "zebra med",
    "dPrice": 520,
    "sCategoryId": "475f3122-0d05-4604-97f8-8dce04081127",
    "sProductId": "af19cd8e-f9c3-4118-979a-7323bc27ea72"
  }
]

exports.seed = function (knex, Promise) {
  // deletes ALL existing entries
  return knex('Products').del().then(function () {
    // inserts seed entries
    return knex('Products').insert(products)
  })
}



// exports.seed = function (knex) {
//   try {
//     const catIds = {
//       Brownies: '72465a39-0548-4484-b71a-f918e086803a',
//       Minipays: 'fa1307a1-6eda-4345-9cea-9550b94cfc06',
//       Individuales: '1ca54b5d-5fdd-4e9e-87bb-1497c8b0f271',
//       Galletas: '5f01a6ab-78bf-4335-9a9e-2699803e35c4',
//       Tortugas: 'da804024-676c-419b-ad6b-5ed9319362d0',
//       Muffins: 'a67e6110-4d75-499f-87f2-b38c4aba6f7a',
//       PastelChico: 'c9dc855a-d30e-4062-93b5-dd099e259183',
//       PastelMedAlto: '475f3122-0d05-4604-97f8-8dce04081127',
//       PastelGrande: '3fb71952-8b9f-433d-97ca-b5f3a73d7867',
//       Navidad: '27e9dccd-9fc5-4268-8022-de805e6eb6eb',
//       Otros: '7e98131f-62f5-4e13-a8f3-b25f4c69840f',
//       PastelesEspeciales: 'db165e1d-5cd2-456e-9295-f89e4e11cbe8',
//       Copitas: 'ca1fc7db-6265-40fa-9bd5-c78962cb90c4',
//       Panques: 'f8ace026-493e-43ed-8a49-d6bcf0449da3',
//       Feb14: 'a204ab83-e9b4-4a4d-8f06-ba4c05aca7b0',
//       Entremes: '0095e441-08a9-44ad-aef6-49e2c2d41dd0',
//       Keto: 'd3590a81-9644-45ca-87db-d3d2ae857655',
//       PastelMedBajo: 'ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2',
//     }

//     const feb14Prods = [
//       { sProductId: 'd9a5ae82-3531-40bb-ba8e-b659bdbc4e8e', sCategoryId: catIds.Feb14, sName: 'Brownie de corazon', dPrice: 140 },
//       { sProductId: '3d94258e-6aa6-4089-ba6d-4141cc71c9db', sCategoryId: catIds.Feb14, sName: 'Galleta corazon', dPrice: 45 },
//       { sProductId: '7ccb9770-041b-4624-b786-31410607f17d', sCategoryId: catIds.Feb14, sName: 'Galleta gigante corazon', dPrice: 440 },
//       { sProductId: '03382d07-a5d0-4369-8b28-8ff65790e26e', sCategoryId: catIds.Feb14, sName: 'Letrero grande', dPrice: 120 },
//       { sProductId: '35398499-0807-4ef6-a999-75ae251d5112', sCategoryId: catIds.Feb14, sName: 'Letrero med', dPrice: 80 },
//       { sProductId: '75e86207-3c74-4c79-83cc-fbe67ebc87a8', sCategoryId: catIds.Feb14, sName: 'Mostachon de corazon', dPrice: 620 },
//       { sProductId: 'c97f8a84-f6a0-42bf-8f9f-a606dfb2fdeb', sCategoryId: catIds.Feb14, sName: 'Pinguino corazon', dPrice: 620 },
//       { sProductId: 'ecf5ef58-fe96-439d-8a0c-dadf2687f88f', sCategoryId: catIds.Feb14, sName: 'Pretzels 14 feb', dPrice: 80 },
//       { sProductId: 'ccffb4a4-1c09-499f-9fb0-8b43077ae755', sCategoryId: catIds.Feb14, sName: 'Queso con fresas', dPrice: 620 },
//       { sProductId: '8793123a-2daa-4042-9cff-efa24469bc3c', sCategoryId: catIds.Feb14, sName: 'Tortuguitas', dPrice: 80 },
//     ]

//     const brownieProds = [
//       { sProductId: '1d61774e-5b58-4287-979d-721d91ca16f9', sCategoryId: catIds.Brownies, sName: 'Brownie azcr glass 6', dPrice: 150 },
//       { sProductId: '33fdc26d-60ec-4b2b-a8bf-1ff1cdeb8d34', sCategoryId: catIds.Brownies, sName: 'Brownie azcr glass 9', dPrice: 190 },
//       { sProductId: 'be16a677-a483-43f6-8272-f2b302432e88', sCategoryId: catIds.Brownies, sName: 'Brownie Cuadrado', dPrice: 50 },
//       { sProductId: '4fa92806-1c44-485f-ac96-d770fff8542e', sCategoryId: catIds.Brownies, sName: 'Mini brownies 4', dPrice: 80 },
//       { sProductId: 'c0dc027e-54ef-4e2f-9d80-7fdc3f73b7e2', sCategoryId: catIds.Brownies, sName: 'Minibrownies 25', dPrice: 360 },
//       { sProductId: '3936b9c8-d8b9-4347-9773-bb2efa90bc3a', sCategoryId: catIds.Brownies, sName: 'Minibrownies 40', dPrice: 510 },
//       { sProductId: 'cff21d85-7d33-4fcc-9cb1-67f0f93610f5', sCategoryId: catIds.Brownies, sName: 'Minibrownies 5', dPrice: 90 },
//       { sProductId: 'b3695ebb-0773-4c89-b23e-634ddb801a43', sCategoryId: catIds.Brownies, sName: 'Minibrownies 9', dPrice: 150 },
//       { sProductId: '83103dc4-2683-4067-a542-30d7b3401dbb', sCategoryId: catIds.Brownies, sName: 'Minibrownies16', dPrice: 260 },
//       { sProductId: '11b033a8-fbb0-490b-8590-2d695fd452e2', sCategoryId: catIds.Brownies, sName: 'Trocitos de brownie', dPrice: 40 },
//     ]

//     const copitasProds = [
//       { sProductId: '0a54038e-7535-4711-92ea-e593d1b6663c', sCategoryId: catIds.Copitas, sName: '4 leches', dPrice: 80 },
//       { sProductId: '1748c249-3c7e-4ea6-83bc-e2272ba4b1ed', sCategoryId: catIds.Copitas, sName: 'Brownie', dPrice: 80 },
//       { sProductId: '76007fee-65bb-4c19-b7cd-ff8a887dfff7', sCategoryId: catIds.Copitas, sName: 'Fresas con crema', dPrice: 80 },
//       { sProductId: 'e73f5fc3-311c-45b5-b96d-92063fc02af0', sCategoryId: catIds.Copitas, sName: 'Mango con crema', dPrice: 80 },
//       { sProductId: 'dd3594b4-fad6-44ad-99d3-dc14ec81e780', sCategoryId: catIds.Copitas, sName: 'Mostachon fresa', dPrice: 80 },
//       { sProductId: 'd28ed8cc-faa2-47f2-ade8-6079c4e53251', sCategoryId: catIds.Copitas, sName: 'Mostachon mango', dPrice: 80 },
//       { sProductId: '808b579f-2439-40f3-a0fb-39805f5f22d7', sCategoryId: catIds.Copitas, sName: 'Queso fresa', dPrice: 80 },
//       { sProductId: 'b587d7c6-ac1c-4164-98af-ffc90756d49f', sCategoryId: catIds.Copitas, sName: 'Queso mango', dPrice: 80 },
//       { sProductId: '0801042e-a873-4e60-b75e-f5912196f6c8', sCategoryId: catIds.Copitas, sName: 'Zanahoria', dPrice: 80 },
//     ]

//     const copitasProds = [
//       { sProductId: '0a54038e-7535-4711-92ea-e593d1b6663c', sCategoryId: catIds.Copitas, sName: '4 leches', dPrice: 80 },
//     ]

//     // Deletes ALL existing entries
//     return knex('Products').del()
//       .then(function () {
//         // Inserts seed entries
//         return knex('Products').insert([...feb14Prods, ...brownieProds]);
//       });
//   } catch (err) {
//     console.log(err);
//   }
// };
