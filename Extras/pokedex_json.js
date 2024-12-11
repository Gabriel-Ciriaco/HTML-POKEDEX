const POKEDEX_JSON = [
  {
    id: 1,
    name: {
      english: "Bulbasaur",
      japanese: "フシギダネ",
      chinese: "妙蛙种子",
      french: "Bulbizarre",
    },
    type: ["Grama", "Venenoso"],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 45,
    },
    species: "Seed Pokémon",
    description:
      "Bulbasaur pode ser visto cochilando sob a luz brilhante do sol. Há uma semente em suas costas. Ao absorver os raios solares, a semente cresce progressivamente maior.",
    evolution: {
      next: [["2", "Level 16"]],
    },
    profile: {
      height: "0.7 m",
      weight: "6.9 kg",
      egg: ["Monster", "Grama"],
      ability: [
        ["Overgrow", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/001.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/001.png",
      hires: "./Imagens/Pokedex/hires/001.png",
    },
  },
  {
    id: 2,
    name: {
      english: "Ivysaur",
      japanese: "フシギソウ",
      chinese: "妙蛙草",
      french: "Herbizarre",
    },
    type: ["Grama", "Venenoso"],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 63,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 60,
    },
    species: "Seed Pokémon",
    description:
      "Há um botão nas costas deste Pokémon. Para suportar seu peso, as pernas e o tronco de Ivysaur crescem grossos e fortes. Se começar a passar mais tempo deitado ao sol, é sinal de que o botão logo florescerá em uma grande flor.",
    evolution: {
      prev: ["1", "Level 16"],
      next: [["3", "Level 32"]],
    },
    profile: {
      height: "1 m",
      weight: "13 kg",
      egg: ["Monster", "Grama"],
      ability: [
        ["Overgrow", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/002.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/002.png",
      hires: "./Imagens/Pokedex/hires/002.png",
    },
  },
  {
    id: 3,
    name: {
      english: "Venusaur",
      japanese: "フシギバナ",
      chinese: "妙蛙花",
      french: "Florizarre",
    },
    type: ["Grama", "Venenoso"],
    base: {
      HP: 80,
      Attack: 82,
      Defense: 83,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 80,
    },
    species: "Seed Pokémon",
    description:
      "Há uma grande flor nas costas de Venusaur. Diz-se que a flor adquire cores vivas se receber muita nutrição e luz solar. O aroma da flor acalma as emoções das pessoas.",
    evolution: {
      prev: ["2", "Level 32"],
    },
    profile: {
      height: "2 m",
      weight: "100 kg",
      egg: ["Monster", "Grama"],
      ability: [
        ["Overgrow", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/003.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/003.png",
      hires: "./Imagens/Pokedex/hires/003.png",
    },
  },
  {
    id: 4,
    name: {
      english: "Charmander",
      japanese: "ヒトカゲ",
      chinese: "小火龙",
      french: "Salamèche",
    },
    type: ["Fogo"],
    base: {
      HP: 39,
      Attack: 52,
      Defense: 43,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      Speed: 65,
    },
    species: "Lizard Pokémon",
    description:
      "A chama que queima na ponta de sua cauda é uma indicação de suas emoções. A chama vacila quando Charmander está se divertindo. Se o Pokémon ficar furioso, a chama queima ferozmente.",
    evolution: {
      next: [["5", "Level 16"]],
    },
    profile: {
      height: "0.6 m",
      weight: "8.5 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Blaze", "false"],
        ["Solar Power", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/004.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/004.png",
      hires: "./Imagens/Pokedex/hires/004.png",
    },
  },
  {
    id: 5,
    name: {
      english: "Charmeleon",
      japanese: "リザード",
      chinese: "火恐龙",
      french: "Reptincel",
    },
    type: ["Fogo"],
    base: {
      HP: 58,
      Attack: 64,
      Defense: 58,
      "Sp. Attack": 80,
      "Sp. Defense": 65,
      Speed: 80,
    },
    species: "Flame Pokémon",
    description:
      "Charmeleon destrói impiedosamente seus inimigos usando suas garras afiadas. Se encontrar um inimigo forte, ele fica agressivo. Nesse estado excitado, a chama na ponta de sua cauda brilha com uma cor branco azulada.",
    evolution: {
      prev: ["4", "Level 16"],
      next: [["6", "Level 36"]],
    },
    profile: {
      height: "1.1 m",
      weight: "19 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Blaze", "false"],
        ["Solar Power", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/005.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/005.png",
      hires: "./Imagens/Pokedex/hires/005.png",
    },
  },
  {
    id: 6,
    name: {
      english: "Charizard",
      japanese: "リザードン",
      chinese: "喷火龙",
      french: "Dracaufeu",
    },
    type: ["Fogo", "Voador"],
    base: {
      HP: 78,
      Attack: 84,
      Defense: 78,
      "Sp. Attack": 109,
      "Sp. Defense": 85,
      Speed: 100,
    },
    species: "Flame Pokémon",
    description:
      "Charizard voa pelo céu em busca de oponentes poderosos. Ele respira fogo de um calor tão grande que derrete qualquer coisa. No entanto, ele nunca vira sua respiração de fogo contra nenhum oponente mais fraco que ele.",
    evolution: {
      prev: ["5", "Level 36"],
    },
    profile: {
      height: "1.7 m",
      weight: "90.5 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Blaze", "false"],
        ["Solar Power", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/006.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/006.png",
      hires: "./Imagens/Pokedex/hires/006.png",
    },
  },
  {
    id: 7,
    name: {
      english: "Squirtle",
      japanese: "ゼニガメ",
      chinese: "杰尼龟",
      french: "Carapuce",
    },
    type: ["Água"],
    base: {
      HP: 44,
      Attack: 48,
      Defense: 65,
      "Sp. Attack": 50,
      "Sp. Defense": 64,
      Speed: 43,
    },
    species: "Tiny Turtle Pokémon",
    description:
      "A casca de Squirtle não é usada apenas para proteção. A forma arredondada da casca e os sulcos em sua superfície ajudam a minimizar a resistência na água, permitindo que este Pokémon nade em altas velocidades.",
    evolution: {
      next: [["8", "Level 16"]],
    },
    profile: {
      height: "0.5 m",
      weight: "9 kg",
      egg: ["Monster", "Água 1"],
      ability: [
        ["Torrent", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/007.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/007.png",
      hires: "./Imagens/Pokedex/hires/007.png",
    },
  },
  {
    id: 8,
    name: {
      english: "Wartortle",
      japanese: "カメール",
      chinese: "卡咪龟",
      french: "Carabaffe",
    },
    type: ["Água"],
    base: {
      HP: 59,
      Attack: 63,
      Defense: 80,
      "Sp. Attack": 65,
      "Sp. Defense": 80,
      Speed: 58,
    },
    species: "Turtle Pokémon",
    description:
      "Sua cauda é grande e coberta por uma pelagem rica e espessa. A cauda fica cada vez mais escura à medida que Wartortle envelhece. Os arranhões em sua casca são evidência da resistência deste Pokémon como lutador.",
    evolution: {
      prev: ["7", "Level 16"],
      next: [["9", "Level 36"]],
    },
    profile: {
      height: "1 m",
      weight: "22.5 kg",
      egg: ["Monster", "Água 1"],
      ability: [
        ["Torrent", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/008.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/008.png",
      hires: "./Imagens/Pokedex/hires/008.png",
    },
  },
  {
    id: 9,
    name: {
      english: "Blastoise",
      japanese: "カメックス",
      chinese: "水箭龟",
      french: "Tortank",
    },
    type: ["Água"],
    base: {
      HP: 79,
      Attack: 83,
      Defense: 100,
      "Sp. Attack": 85,
      "Sp. Defense": 105,
      Speed: 78,
    },
    species: "Shellfish Pokémon",
    description:
      "Blastoise possui jatos de água que saem de sua casca. Os jatos de água são muito precisos. Eles podem disparar balas de água com precisão suficiente para atingir latas vazias a uma distância de mais de 50 metros.",
    evolution: {
      prev: ["8", "Level 36"],
    },
    profile: {
      height: "1.6 m",
      weight: "85.5 kg",
      egg: ["Monster", "Água 1"],
      ability: [
        ["Torrent", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/009.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/009.png",
      hires: "./Imagens/Pokedex/hires/009.png",
    },
  },
  {
    id: 10,
    name: {
      english: "Caterpie",
      japanese: "キャタピー",
      chinese: "绿毛虫",
      french: "Chenipan",
    },
    type: ["Inseto"],
    base: {
      HP: 45,
      Attack: 30,
      Defense: 35,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      Speed: 45,
    },
    species: "Worm Pokémon",
    description:
      "Seu corpo é macio e fraco. Na natureza, seu destino perpétuo é ser visto pelos outros como alimento.",
    evolution: {
      next: [["11", "Level 7"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2.9 kg",
      egg: ["Inseto"],
      ability: [
        ["Shield Dust", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/010.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/010.png",
      hires: "./Imagens/Pokedex/hires/010.png",
    },
  },
  {
    id: 11,
    name: {
      english: "Metapod",
      japanese: "トランセル",
      chinese: "铁甲蛹",
      french: "Chrysacier",
    },
    type: ["Inseto"],
    base: {
      HP: 50,
      Attack: 20,
      Defense: 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      Speed: 30,
    },
    species: "Cocoon Pokémon",
    description:
      "Sua casca dura não se racha nem um pouco, mesmo que Pikipek a bicar, mas ela vai tombar, derramando suas entranhas.",
    evolution: {
      prev: ["10", "Level 7"],
      next: [["12", "Level 10"]],
    },
    profile: {
      height: "0.7 m",
      weight: "9.9 kg",
      egg: ["Inseto"],
      ability: [["Shed Skin", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/011.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/011.png",
      hires: "./Imagens/Pokedex/hires/011.png",
    },
  },
  {
    id: 12,
    name: {
      english: "Butterfree",
      japanese: "バタフリー",
      chinese: "巴大蝶",
      french: "Papilusion",
    },
    type: ["Inseto", "Voador"],
    base: {
      HP: 60,
      Attack: 45,
      Defense: 50,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      Speed: 70,
    },
    species: "Butterfly Pokémon",
    description:
      "Néctar de flores bonitas é sua comida favorita. Em campos de flores, ele tem batalhas acirradas com Cutiefly por território.",
    evolution: {
      prev: ["11", "Level 10"],
    },
    profile: {
      height: "1.1 m",
      weight: "32 kg",
      egg: ["Inseto"],
      ability: [
        ["Compound Eyes", "false"],
        ["Tinted Lens", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/012.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/012.png",
      hires: "./Imagens/Pokedex/hires/012.png",
    },
  },
  {
    id: 13,
    name: {
      english: "Weedle",
      japanese: "ビードル",
      chinese: "独角虫",
      french: "Aspicot",
    },
    type: ["Inseto", "Venenoso"],
    base: {
      HP: 40,
      Attack: 35,
      Defense: 30,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      Speed: 50,
    },
    species: "Hairy Inseto Pokémon",
    description:
      "Weedle possui um olfato extremamente aguçado. É capaz de distinguir seus tipos favoritos de folhas daquelas que não gosta apenas cheirando com seu grande probóscide vermelho (nariz).",
    evolution: {
      next: [["14", "Level 7"]],
    },
    profile: {
      height: "0.3 m",
      weight: "3.2 kg",
      egg: ["Inseto"],
      ability: [
        ["Shield Dust", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/013.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/013.png",
      hires: "./Imagens/Pokedex/hires/013.png",
    },
  },
  {
    id: 14,
    name: {
      english: "Kakuna",
      japanese: "コクーン",
      chinese: "铁壳蛹",
      french: "Coconfort",
    },
    type: ["Inseto", "Venenoso"],
    base: {
      HP: 45,
      Attack: 25,
      Defense: 50,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      Speed: 35,
    },
    species: "Cocoon Pokémon",
    description:
      "Kakuna permanece praticamente imóvel enquanto se agarra a uma árvore. No entanto, por dentro, está extremamente ocupado enquanto se prepara para sua evolução futura. Isso é evidente pela quão quente a casca fica ao toque.",
    evolution: {
      prev: ["13", "Level 7"],
      next: [["15", "Level 10"]],
    },
    profile: {
      height: "0.6 m",
      weight: "10 kg",
      egg: ["Inseto"],
      ability: [["Shed Skin", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/014.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/014.png",
      hires: "./Imagens/Pokedex/hires/014.png",
    },
  },
  {
    id: 15,
    name: {
      english: "Beedrill",
      japanese: "スピアー",
      chinese: "大针蜂",
      french: "Dardargnan",
    },
    type: ["Inseto", "Venenoso"],
    base: {
      HP: 65,
      Attack: 90,
      Defense: 40,
      "Sp. Attack": 45,
      "Sp. Defense": 80,
      Speed: 75,
    },
    species: "Venenoso Bee Pokémon",
    description:
      "Beedrill é extremamente territorial. Ninguém deve se aproximar de seu ninho - isso é para sua própria segurança. Se enfurecido, eles atacarão em um enxame furioso.",
    evolution: {
      prev: ["14", "Level 10"],
    },
    profile: {
      height: "1 m",
      weight: "29.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Sniper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/015.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/015.png",
      hires: "./Imagens/Pokedex/hires/015.png",
    },
  },
  {
    id: 16,
    name: {
      english: "Pidgey",
      japanese: "ポッポ",
      chinese: "波波",
      french: "Roucool",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 40,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 56,
    },
    species: "Tiny Bird Pokémon",
    description:
      "Pidgey possui um sentido de direção extremamente aguçado. É capaz de retornar invariavelmente para casa, em seu ninho, não importa quão longe esteja de seus arredores familiares.",
    evolution: {
      next: [["17", "Level 18"]],
    },
    profile: {
      height: "0.3 m",
      weight: "1.8 kg",
      egg: ["Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Tangled Feet", "false"],
        ["Big Pecks", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/016.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/016.png",
      hires: "./Imagens/Pokedex/hires/016.png",
    },
  },
  {
    id: 17,
    name: {
      english: "Pidgeotto",
      japanese: "ピジョン",
      chinese: "比比鸟",
      french: "Roucoups",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 63,
      Attack: 60,
      Defense: 55,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 71,
    },
    species: "Bird Pokémon",
    description:
      "Pidgeotto reivindica uma grande área como seu território próprio. Este Pokémon voa ao redor, patrulhando seu espaço vital. Se seu território for violado, ele não mostra nenhuma piedade em punir completamente o inimigo com suas garras afiadas.",
    evolution: {
      prev: ["16", "Level 18"],
      next: [["18", "Level 36"]],
    },
    profile: {
      height: "1.1 m",
      weight: "30 kg",
      egg: ["Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Tangled Feet", "false"],
        ["Big Pecks", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/017.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/017.png",
      hires: "./Imagens/Pokedex/hires/017.png",
    },
  },
  {
    id: 18,
    name: {
      english: "Pidgeot",
      japanese: "ピジョット",
      chinese: "大比鸟",
      french: "Roucarnage",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 83,
      Attack: 80,
      Defense: 75,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      Speed: 101,
    },
    species: "Bird Pokémon",
    description:
      "Este Pokémon possui uma plumagem deslumbrante de penas lindamente brilhantes. Muitos Treinadores são cativados pela impressionante beleza das penas em sua cabeça, levando-os a escolher Pidgeot como seu Pokémon.",
    evolution: {
      prev: ["17", "Level 36"],
    },
    profile: {
      height: "1.5 m",
      weight: "39.5 kg",
      egg: ["Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Tangled Feet", "false"],
        ["Big Pecks", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/018.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/018.png",
      hires: "./Imagens/Pokedex/hires/018.png",
    },
  },
  {
    id: 19,
    name: {
      english: "Rattata",
      japanese: "コラッタ",
      chinese: "小拉达",
      french: "Rattata",
    },
    type: ["Normal"],
    base: {
      HP: 30,
      Attack: 56,
      Defense: 35,
      "Sp. Attack": 25,
      "Sp. Defense": 35,
      Speed: 72,
    },
    species: "Mouse Pokémon",
    description:
      "Este Pokémon é comum, mas perigoso. Seus incisivos afiados podem cortar facilmente a madeira dura.",
    evolution: {
      next: [["20", "Level 20"]],
    },
    profile: {
      height: "0.3 m",
      weight: "3.5 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Guts", "false"],
        ["Hustle", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/019.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/019.png",
      hires: "./Imagens/Pokedex/hires/019.png",
    },
  },
  {
    id: 20,
    name: {
      english: "Raticate",
      japanese: "ラッタ",
      chinese: "拉达",
      french: "Rattatac",
    },
    type: ["Normal"],
    base: {
      HP: 55,
      Attack: 81,
      Defense: 60,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      Speed: 97,
    },
    species: "Mouse Pokémon",
    description:
      "Seus bigodes são essenciais para manter seu equilíbrio. Não importa quão amigável você seja, ele ficará com raiva e morderá você se você tocar seus bigodes.",
    evolution: {
      prev: ["19", "Level 20"],
    },
    profile: {
      height: "0.7 m",
      weight: "18.5 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Guts", "false"],
        ["Hustle", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/020.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/020.png",
      hires: "./Imagens/Pokedex/hires/020.png",
    },
  },
  {
    id: 21,
    name: {
      english: "Spearow",
      japanese: "オニスズメ",
      chinese: "烈雀",
      french: "Piafabec",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 40,
      Attack: 60,
      Defense: 30,
      "Sp. Attack": 31,
      "Sp. Defense": 31,
      Speed: 70,
    },
    species: "Tiny Bird Pokémon",
    description:
      "Devido às suas asas curtas, não pode voar longas distâncias. Ele vagueia inquieto e bicada Pokémon inseto.",
    evolution: {
      next: [["22", "Level 20"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2 kg",
      egg: ["Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Sniper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/021.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/021.png",
      hires: "./Imagens/Pokedex/hires/021.png",
    },
  },
  {
    id: 22,
    name: {
      english: "Fearow",
      japanese: "オニドリル",
      chinese: "大嘴雀",
      french: "Rapasdepic",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 65,
      Attack: 90,
      Defense: 65,
      "Sp. Attack": 61,
      "Sp. Defense": 61,
      Speed: 100,
    },
    species: "Beak Pokémon",
    description:
      "Em Alola, Pokémon peixe são suas presas. Pode ser visto circulando acima do oceano em busca de comida.",
    evolution: {
      prev: ["21", "Level 20"],
    },
    profile: {
      height: "1.2 m",
      weight: "38 kg",
      egg: ["Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Sniper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/022.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/022.png",
      hires: "./Imagens/Pokedex/hires/022.png",
    },
  },
  {
    id: 23,
    name: {
      english: "Ekans",
      japanese: "アーボ",
      chinese: "阿柏蛇",
      french: "Abo",
    },
    type: ["Venenoso"],
    base: {
      HP: 35,
      Attack: 60,
      Defense: 44,
      "Sp. Attack": 40,
      "Sp. Defense": 54,
      Speed: 55,
    },
    species: "Snake Pokémon",
    description:
      "Os ovos de Pokémon pássaro são sua comida favorita. Ele engole os ovos inteiros, então às vezes um ovo fica preso e Ekans desmaia.",
    evolution: {
      next: [["24", "Level 22"]],
    },
    profile: {
      height: "2 m",
      weight: "6.9 kg",
      egg: ["Field", "Dragão"],
      ability: [
        ["Intimidate", "false"],
        ["Shed Skin", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/023.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/023.png",
      hires: "./Imagens/Pokedex/hires/023.png",
    },
  },
  {
    id: 24,
    name: {
      english: "Arbok",
      japanese: "アーボック",
      chinese: "阿柏怪",
      french: "Arbok",
    },
    type: ["Venenoso"],
    base: {
      HP: 60,
      Attack: 95,
      Defense: 69,
      "Sp. Attack": 65,
      "Sp. Defense": 79,
      Speed: 80,
    },
    species: "Cobra Pokémon",
    description:
      "Após atordoar seus oponentes com o padrão em seu estômago, ele rapidamente os envolve em seu corpo e espera que parem de se mover.",
    evolution: {
      prev: ["23", "Level 22"],
    },
    profile: {
      height: "3.5 m",
      weight: "65 kg",
      egg: ["Field", "Dragão"],
      ability: [
        ["Intimidate", "false"],
        ["Shed Skin", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/024.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/024.png",
      hires: "./Imagens/Pokedex/hires/024.png",
    },
  },
  {
    id: 25,
    name: {
      english: "Pikachu",
      japanese: "ピカチュウ",
      chinese: "皮卡丘",
      french: "Pikachu",
    },
    type: ["Elétrico"],
    base: {
      HP: 35,
      Attack: 55,
      Defense: 40,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 90,
    },
    species: "Mouse Pokémon",
    description:
      "Enquanto dorme, gera eletricidade nos sacos em suas bochechas. Se não estiver dormindo o suficiente, só poderá usar eletricidade fraca.",
    evolution: {
      prev: ["172", "high Friendship"],
      next: [["26", "use Thunder Stone"]],
    },
    profile: {
      height: "0.4 m",
      weight: "6 kg",
      egg: ["Field", "Fada"],
      ability: [
        ["Static", "false"],
        ["Lightning Rod", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/025.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/025.png",
      hires: "./Imagens/Pokedex/hires/025.png",
    },
  },
  {
    id: 26,
    name: {
      english: "Raichu",
      japanese: "ライチュウ",
      chinese: "雷丘",
      french: "Raichu",
    },
    type: ["Elétrico"],
    base: {
      HP: 60,
      Attack: 90,
      Defense: 55,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      Speed: 110,
    },
    species: "Mouse Pokémon",
    description:
      "Como muitos Treinadores gostam da aparência de Pikachu, você não vê muito este Pokémon.",
    evolution: {
      prev: ["25", "use Thunder Stone"],
    },
    profile: {
      height: "0.8 m",
      weight: "30 kg",
      egg: ["Field", "Fada"],
      ability: [
        ["Static", "false"],
        ["Lightning Rod", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/026.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/026.png",
      hires: "./Imagens/Pokedex/hires/026.png",
    },
  },
  {
    id: 27,
    name: {
      english: "Sandshrew",
      japanese: "サンド",
      chinese: "穿山鼠",
      french: "Sabelette",
    },
    type: ["Terra"],
    base: {
      HP: 50,
      Attack: 75,
      Defense: 85,
      "Sp. Attack": 20,
      "Sp. Defense": 30,
      Speed: 40,
    },
    species: "Mouse Pokémon",
    description:
      "Quando sua pele fica enrugada pela umidade, ele se dirige para um vulcão. Ele deita-se em um lugar com muito calor geotérmico e seca-se.",
    evolution: {
      next: [["28", "Level 22"]],
    },
    profile: {
      height: "0.6 m",
      weight: "12 kg",
      egg: ["Field"],
      ability: [
        ["Sand Veil", "false"],
        ["Sand Rush", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/027.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/027.png",
      hires: "./Imagens/Pokedex/hires/027.png",
    },
  },
  {
    id: 28,
    name: {
      english: "Sandslash",
      japanese: "サンドパン",
      chinese: "穿山王",
      french: "Sablaireau",
    },
    type: ["Terra"],
    base: {
      HP: 75,
      Attack: 100,
      Defense: 110,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      Speed: 65,
    },
    species: "Mouse Pokémon",
    description:
      "Graças às suas garras grossas, é bom em escalar árvores. Há muitos Sandslash que se estacionam em árvores e vão direto para dormir.",
    evolution: {
      prev: ["27", "Level 22"],
    },
    profile: {
      height: "1 m",
      weight: "29.5 kg",
      egg: ["Field"],
      ability: [
        ["Sand Veil", "false"],
        ["Sand Rush", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/028.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/028.png",
      hires: "./Imagens/Pokedex/hires/028.png",
    },
  },
  {
    id: 29,
    name: {
      english: "Nidoran♀",
      japanese: "ニドラン♀",
      chinese: "尼多兰",
      french: "Nidoran♀",
    },
    type: ["Venenoso"],
    base: {
      HP: 55,
      Attack: 47,
      Defense: 52,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 41,
    },
    species: "Venenoso Pin Pokémon",
    description:
      "Nidoran♀ possui farpas que secretam um veneno poderoso. Acredita-se que se desenvolveram como proteção para este Pokémon de corpo pequeno. Quando enfurecido, ele libera uma toxina horrível de seu chifre.",
    evolution: {
      next: [["30", "Level 16"]],
    },
    profile: {
      height: "0.4 m",
      weight: "7 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Venenoso Point", "false"],
        ["Rivalry", "false"],
        ["Hustle", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/029.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/029.png",
      hires: "./Imagens/Pokedex/hires/029.png",
    },
  },
  {
    id: 30,
    name: {
      english: "Nidorina",
      japanese: "ニドリーナ",
      chinese: "尼多娜",
      french: "Nidorina",
    },
    type: ["Venenoso"],
    base: {
      HP: 70,
      Attack: 62,
      Defense: 67,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 56,
    },
    species: "Venenoso Pin Pokémon",
    description:
      "Quando Nidorina estão com seus amigos ou família, mantêm suas farpas escondidas para evitar machucar um ao outro. Este Pokémon parece ficar nervoso se separado dos outros.",
    evolution: {
      prev: ["29", "Level 16"],
      next: [["31", "use Moon Stone"]],
    },
    profile: {
      height: "0.8 m",
      weight: "20 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Venenoso Point", "false"],
        ["Rivalry", "false"],
        ["Hustle", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/030.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/030.png",
      hires: "./Imagens/Pokedex/hires/030.png",
    },
  },
  {
    id: 31,
    name: {
      english: "Nidoqueen",
      japanese: "ニドクイン",
      chinese: "尼多后",
      french: "Nidoqueen",
    },
    type: ["Venenoso", "Terra"],
    base: {
      HP: 90,
      Attack: 92,
      Defense: 87,
      "Sp. Attack": 75,
      "Sp. Defense": 85,
      Speed: 76,
    },
    species: "Drill Pokémon",
    description:
      "O corpo de Nidoqueen é revestido por escamas extremamente duras. É adepta em enviar inimigos voando com ataques brutais. Este Pokémon está em seu auge quando está defendendo seus filhotes.",
    evolution: {
      prev: ["30", "use Moon Stone"],
    },
    profile: {
      height: "1.3 m",
      weight: "60 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Venenoso Point", "false"],
        ["Rivalry", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/031.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/031.png",
      hires: "./Imagens/Pokedex/hires/031.png",
    },
  },
  {
    id: 32,
    name: {
      english: "Nidoran♂",
      japanese: "ニドラン♂",
      chinese: "尼多朗",
      french: "Nidoran♂",
    },
    type: ["Venenoso"],
    base: {
      HP: 46,
      Attack: 57,
      Defense: 40,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 50,
    },
    species: "Venenoso Pin Pokémon",
    description:
      "Nidoran♂ desenvolveu músculos para mover seus ouvidos. Graças a eles, os ouvidos podem ser livremente movidos em qualquer direção. Nem mesmo o menor som escapa da atenção deste Pokémon.",
    evolution: {
      next: [["33", "Level 16"]],
    },
    profile: {
      height: "0.5 m",
      weight: "9 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Venenoso Point", "false"],
        ["Rivalry", "false"],
        ["Hustle", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/032.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/032.png",
      hires: "./Imagens/Pokedex/hires/032.png",
    },
  },
  {
    id: 33,
    name: {
      english: "Nidorino",
      japanese: "ニドリーノ",
      chinese: "尼多力诺",
      french: "Nidorino",
    },
    type: ["Venenoso"],
    base: {
      HP: 61,
      Attack: 72,
      Defense: 57,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 65,
    },
    species: "Venenoso Pin Pokémon",
    description:
      "Nidorino possui um chifre mais duro que um diamante. Se sentir uma presença hostil, todas as farpas em suas costas se eriçam de uma vez e ele desafia o inimigo com todas as suas forças.",
    evolution: {
      prev: ["32", "Level 16"],
      next: [["34", "use Moon Stone"]],
    },
    profile: {
      height: "0.9 m",
      weight: "19.5 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Venenoso Point", "false"],
        ["Rivalry", "false"],
        ["Hustle", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/033.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/033.png",
      hires: "./Imagens/Pokedex/hires/033.png",
    },
  },
  {
    id: 34,
    name: {
      english: "Nidoking",
      japanese: "ニドキング",
      chinese: "尼多王",
      french: "Nidoking",
    },
    type: ["Venenoso", "Terra"],
    base: {
      HP: 81,
      Attack: 102,
      Defense: 77,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      Speed: 85,
    },
    species: "Drill Pokémon",
    description:
      "A cauda grossa de Nidoking possui um poder destrutivo enorme. Com um balanço, pode derrubar uma torre de transmissão de metal. Uma vez que este Pokémon entra em uma onda de fúria, não há como pará-lo.",
    evolution: {
      prev: ["33", "use Moon Stone"],
    },
    profile: {
      height: "1.4 m",
      weight: "62 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Venenoso Point", "false"],
        ["Rivalry", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/034.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/034.png",
      hires: "./Imagens/Pokedex/hires/034.png",
    },
  },
  {
    id: 35,
    name: {
      english: "Clefairy",
      japanese: "ピッピ",
      chinese: "皮皮",
      french: "Mélofée",
    },
    type: ["Fada"],
    base: {
      HP: 70,
      Attack: 45,
      Defense: 48,
      "Sp. Attack": 60,
      "Sp. Defense": 65,
      Speed: 35,
    },
    species: "Fada Pokémon",
    description:
      "Banhado pelo luar, suas asas brilham levemente. Sem nem mesmo bater, Clefairy sobe no ar, onde dança ao redor.",
    evolution: {
      prev: ["173", "high Friendship"],
      next: [["36", "use Moon Stone"]],
    },
    profile: {
      height: "0.6 m",
      weight: "7.5 kg",
      egg: ["Fada"],
      ability: [
        ["Cute Charm", "false"],
        ["Magic Guard", "false"],
        ["Friend Guard", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/035.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/035.png",
      hires: "./Imagens/Pokedex/hires/035.png",
    },
  },
  {
    id: 36,
    name: {
      english: "Clefable",
      japanese: "ピクシー",
      chinese: "皮可西",
      french: "Mélodelfe",
    },
    type: ["Fada"],
    base: {
      HP: 95,
      Attack: 70,
      Defense: 73,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      Speed: 60,
    },
    species: "Fada Pokémon",
    description:
      "Alguns cientistas acreditam que ele olha intensamente para o céu nas noites de lua cheia porque está com saudades de casa.",
    evolution: {
      prev: ["35", "use Moon Stone"],
    },
    profile: {
      height: "1.3 m",
      weight: "40 kg",
      egg: ["Fada"],
      ability: [
        ["Cute Charm", "false"],
        ["Magic Guard", "false"],
        ["Unaware", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/036.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/036.png",
      hires: "./Imagens/Pokedex/hires/036.png",
    },
  },
  {
    id: 37,
    name: {
      english: "Vulpix",
      japanese: "ロコン",
      chinese: "六尾",
      french: "Goupix",
    },
    type: ["Fogo"],
    base: {
      HP: 38,
      Attack: 41,
      Defense: 40,
      "Sp. Attack": 50,
      "Sp. Defense": 65,
      Speed: 65,
    },
    species: "Fox Pokémon",
    description:
      "Ele manipula bolas de fogo para capturar sua presa. Se você criar um desde quando é jovem, ele crescerá perto de você como um Pokémon filhote.",
    evolution: {
      next: [["38", "use Fogo Stone"]],
    },
    profile: {
      height: "0.6 m",
      weight: "9.9 kg",
      egg: ["Field"],
      ability: [
        ["Flash Fogo", "false"],
        ["Drought", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/037.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/037.png",
      hires: "./Imagens/Pokedex/hires/037.png",
    },
  },
  {
    id: 38,
    name: {
      english: "Ninetales",
      japanese: "キュウコン",
      chinese: "九尾",
      french: "Feunard",
    },
    type: ["Fogo"],
    base: {
      HP: 73,
      Attack: 76,
      Defense: 75,
      "Sp. Attack": 81,
      "Sp. Defense": 100,
      Speed: 100,
    },
    species: "Fox Pokémon",
    description:
      "As chamas flutuantes que ele expele de sua boca deixam seus oponentes hipnotizados. Então, este Pokémon extremamente inteligente ataca.",
    evolution: {
      prev: ["37", "use Fogo Stone"],
    },
    profile: {
      height: "1.1 m",
      weight: "19.9 kg",
      egg: ["Field"],
      ability: [
        ["Flash Fogo", "false"],
        ["Drought", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/038.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/038.png",
      hires: "./Imagens/Pokedex/hires/038.png",
    },
  },
  {
    id: 39,
    name: {
      english: "Jigglypuff",
      japanese: "プリン",
      chinese: "胖丁",
      french: "Rondoudou",
    },
    type: ["Normal", "Fada"],
    base: {
      HP: 115,
      Attack: 45,
      Defense: 20,
      "Sp. Attack": 45,
      "Sp. Defense": 25,
      Speed: 20,
    },
    species: "Balloon Pokémon",
    description:
      "As canções que eles cantam são totalmente diferentes dependendo da região em que vivem. Algumas até soam como se estivessem gritando!",
    evolution: {
      prev: ["174", "high Friendship"],
      next: [["40", "use Moon Stone"]],
    },
    profile: {
      height: "0.5 m",
      weight: "5.5 kg",
      egg: ["Fada"],
      ability: [
        ["Cute Charm", "false"],
        ["Competitive", "false"],
        ["Friend Guard", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/039.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/039.png",
      hires: "./Imagens/Pokedex/hires/039.png",
    },
  },
  {
    id: 40,
    name: {
      english: "Wigglytuff",
      japanese: "プクリン",
      chinese: "胖可丁",
      french: "Grodoudou",
    },
    type: ["Normal", "Fada"],
    base: {
      HP: 140,
      Attack: 70,
      Defense: 45,
      "Sp. Attack": 85,
      "Sp. Defense": 50,
      Speed: 45,
    },
    species: "Balloon Pokémon",
    description:
      "Quando fica com raiva, inala com todas as forças e seu corpo se infla gradualmente. Às vezes podem crescer 20 vezes mais!",
    evolution: {
      prev: ["39", "use Moon Stone"],
    },
    profile: {
      height: "1 m",
      weight: "12 kg",
      egg: ["Fada"],
      ability: [
        ["Cute Charm", "false"],
        ["Competitive", "false"],
        ["Frisk", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/040.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/040.png",
      hires: "./Imagens/Pokedex/hires/040.png",
    },
  },
  {
    id: 41,
    name: {
      english: "Zubat",
      japanese: "ズバット",
      chinese: "超音蝠",
      french: "Nosferapti",
    },
    type: ["Venenoso", "Voador"],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 35,
      "Sp. Attack": 30,
      "Sp. Defense": 40,
      Speed: 55,
    },
    species: "Bat Pokémon",
    description:
      "Sua pele é tão fina que eles serão queimados se a luz solar atingi-los. Quando fica frio lá fora, eles se reúnem para aquecer os corpos uns dos outros.",
    evolution: {
      next: [["42", "Level 22"]],
    },
    profile: {
      height: "0.8 m",
      weight: "7.5 kg",
      egg: ["Voador"],
      ability: [
        ["Inner Focus", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/041.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/041.png",
      hires: "./Imagens/Pokedex/hires/041.png",
    },
  },
  {
    id: 42,
    name: {
      english: "Golbat",
      japanese: "ゴルバット",
      chinese: "大嘴蝠",
      french: "Nosferalto",
    },
    type: ["Venenoso", "Voador"],
    base: {
      HP: 75,
      Attack: 80,
      Defense: 70,
      "Sp. Attack": 65,
      "Sp. Defense": 75,
      Speed: 90,
    },
    species: "Bat Pokémon",
    description:
      "Eles podem sugar mais de 10 onças de sangue de uma vez. Sabe-se que eles bebem tanto sangue que não podem mais voar.",
    evolution: {
      prev: ["41", "Level 22"],
      next: [["169", "high Friendship"]],
    },
    profile: {
      height: "1.6 m",
      weight: "55 kg",
      egg: ["Voador"],
      ability: [
        ["Inner Focus", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/042.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/042.png",
      hires: "./Imagens/Pokedex/hires/042.png",
    },
  },
  {
    id: 43,
    name: {
      english: "Oddish",
      japanese: "ナゾノクサ",
      chinese: "走路草",
      french: "Mystherbe",
    },
    type: ["Grama", "Venenoso"],
    base: {
      HP: 45,
      Attack: 50,
      Defense: 55,
      "Sp. Attack": 75,
      "Sp. Defense": 65,
      Speed: 30,
    },
    species: "Weed Pokémon",
    description:
      "Oddish procura um solo fértil e rico em nutrientes, depois se planta. Durante o dia, enquanto está plantado, acredita-se que os pés deste Pokémon mudam de forma e se tornam semelhantes às raízes das árvores.",
    evolution: {
      next: [["44", "Level 21"]],
    },
    profile: {
      height: "0.5 m",
      weight: "5.4 kg",
      egg: ["Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/043.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/043.png",
      hires: "./Imagens/Pokedex/hires/043.png",
    },
  },
  {
    id: 44,
    name: {
      english: "Gloom",
      japanese: "クサイハナ",
      chinese: "臭臭花",
      french: "Ortide",
    },
    type: ["Grama", "Venenoso"],
    base: {
      HP: 60,
      Attack: 65,
      Defense: 70,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      Speed: 40,
    },
    species: "Weed Pokémon",
    description:
      "De sua boca, Gloom goteja mel que cheira absolutamente horrível. Aparentemente, ele adora o fedor horrível. Ele cheira os vapores nojentos e depois babam ainda mais de seu mel.",
    evolution: {
      prev: ["43", "Level 21"],
      next: [
        ["45", "use Leaf Stone"],
        ["182", "use Sun Stone"],
      ],
    },
    profile: {
      height: "0.8 m",
      weight: "8.6 kg",
      egg: ["Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Stench", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/044.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/044.png",
      hires: "./Imagens/Pokedex/hires/044.png",
    },
  },
  {
    id: 45,
    name: {
      english: "Vileplume",
      japanese: "ラフレシア",
      chinese: "霸王花",
      french: "Rafflesia",
    },
    type: ["Grama", "Venenoso"],
    base: {
      HP: 75,
      Attack: 80,
      Defense: 85,
      "Sp. Attack": 110,
      "Sp. Defense": 90,
      Speed: 50,
    },
    species: "Flower Pokémon",
    description:
      "Vileplume possui as maiores pétalas do mundo. Elas são usadas para atrair presas que são então aspergidas com esporos tóxicos. Uma vez que as presas são imobilizadas, este Pokémon as captura e devora.",
    evolution: {
      prev: ["44", "use Leaf Stone"],
    },
    profile: {
      height: "1.2 m",
      weight: "18.6 kg",
      egg: ["Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Effect Spore", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/045.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/045.png",
      hires: "./Imagens/Pokedex/hires/045.png",
    },
  },
  {
    id: 46,
    name: {
      english: "Paras",
      japanese: "パラス",
      chinese: "派拉斯",
      french: "Paras",
    },
    type: ["Inseto", "Grama"],
    base: {
      HP: 35,
      Attack: 70,
      Defense: 55,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      Speed: 25,
    },
    species: "Mushroom Pokémon",
    description:
      "Os cogumelos, conhecidos como tochukaso, estão controlando o inseto. Mesmo que o inseto incomode os cogumelos, eles mandam-no desaparecer.",
    evolution: {
      next: [["47", "Level 24"]],
    },
    profile: {
      height: "0.3 m",
      weight: "5.4 kg",
      egg: ["Inseto", "Grama"],
      ability: [
        ["Effect Spore", "false"],
        ["Dry Skin", "false"],
        ["Damp", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/046.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/046.png",
      hires: "./Imagens/Pokedex/hires/046.png",
    },
  },
  {
    id: 47,
    name: {
      english: "Parasect",
      japanese: "パラセクト",
      chinese: "派拉斯特",
      french: "Parasect",
    },
    type: ["Inseto", "Grama"],
    base: {
      HP: 60,
      Attack: 95,
      Defense: 80,
      "Sp. Attack": 60,
      "Sp. Defense": 80,
      Speed: 30,
    },
    species: "Mushroom Pokémon",
    description:
      "Seus esporos venenosos também são usados na medicina tradicional. Aparentemente, os esporos produzidos em Alola não são de qualidade muito boa.",
    evolution: {
      prev: ["46", "Level 24"],
    },
    profile: {
      height: "1 m",
      weight: "29.5 kg",
      egg: ["Inseto", "Grama"],
      ability: [
        ["Effect Spore", "false"],
        ["Dry Skin", "false"],
        ["Damp", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/047.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/047.png",
      hires: "./Imagens/Pokedex/hires/047.png",
    },
  },
  {
    id: 48,
    name: {
      english: "Venonat",
      japanese: "コンパン",
      chinese: "毛球",
      french: "Mimitoss",
    },
    type: ["Inseto", "Venenoso"],
    base: {
      HP: 60,
      Attack: 55,
      Defense: 50,
      "Sp. Attack": 40,
      "Sp. Defense": 55,
      Speed: 45,
    },
    species: "Insect Pokémon",
    description:
      "Diz-se que Venonat evoluiu com uma camada de pelos finos e rígidos que cobre todo o seu corpo para proteção. Possui grandes olhos que nunca deixam de detectar até mesmo presas minúsculas.",
    evolution: {
      next: [["49", "Level 31"]],
    },
    profile: {
      height: "1 m",
      weight: "30 kg",
      egg: ["Inseto"],
      ability: [
        ["Compound Eyes", "false"],
        ["Tinted Lens", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/048.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/048.png",
      hires: "./Imagens/Pokedex/hires/048.png",
    },
  },
  {
    id: 49,
    name: {
      english: "Venomoth",
      japanese: "モルフォン",
      chinese: "摩鲁蛾",
      french: "Aéromite",
    },
    type: ["Inseto", "Venenoso"],
    base: {
      HP: 70,
      Attack: 65,
      Defense: 60,
      "Sp. Attack": 90,
      "Sp. Defense": 75,
      Speed: 90,
    },
    species: "Venenoso Moth Pokémon",
    description:
      "Venomoth é noturno - é um Pokémon que só se torna ativo à noite. Suas presas favoritas são pequenos insetos que se reúnem em torno de postes de luz, atraídos pela luz na escuridão.",
    evolution: {
      prev: ["48", "Level 31"],
    },
    profile: {
      height: "1.5 m",
      weight: "12.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Shield Dust", "false"],
        ["Tinted Lens", "false"],
        ["Wonder Skin", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/049.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/049.png",
      hires: "./Imagens/Pokedex/hires/049.png",
    },
  },
  {
    id: 50,
    name: {
      english: "Diglett",
      japanese: "ディグダ",
      chinese: "地鼠",
      french: "Taupiqueur",
    },
    type: ["Terra"],
    base: {
      HP: 10,
      Attack: 55,
      Defense: 25,
      "Sp. Attack": 35,
      "Sp. Defense": 45,
      Speed: 95,
    },
    species: "Mole Pokémon",
    description:
      "Ao redor de suas plantações, os agricultores plantam o tipo de árvore que Diglett gosta de comer como uma forma de fazer Diglett arar os campos para eles.",
    evolution: {
      next: [["51", "Level 26"]],
    },
    profile: {
      height: "0.2 m",
      weight: "0.8 kg",
      egg: ["Field"],
      ability: [
        ["Sand Veil", "false"],
        ["Arena Trap", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/050.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/050.png",
      hires: "./Imagens/Pokedex/hires/050.png",
    },
  },
  {
    id: 51,
    name: {
      english: "Dugtrio",
      japanese: "ダグトリオ",
      chinese: "三地鼠",
      french: "Triopikeur",
    },
    type: ["Terra"],
    base: {
      HP: 35,
      Attack: 100,
      Defense: 50,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      Speed: 120,
    },
    species: "Mole Pokémon",
    description:
      "As cabeças de Dugtrio são elegantes, lisas e incrivelmente duras. Ele pode cavar qualquer solo com seus cabeçadas.",
    evolution: {
      prev: ["50", "Level 26"],
    },
    profile: {
      height: "0.7 m",
      weight: "33.3 kg",
      egg: ["Field"],
      ability: [
        ["Sand Veil", "false"],
        ["Arena Trap", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/051.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/051.png",
      hires: "./Imagens/Pokedex/hires/051.png",
    },
  },
  {
    id: 52,
    name: {
      english: "Meowth",
      japanese: "ニャース",
      chinese: "喵喵",
      french: "Miaouss",
    },
    type: ["Normal"],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 35,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 90,
    },
    species: "Scratch Cat Pokémon",
    description:
      "Ele adora moedas, então, se você der uma a ele, poderá fazer amizade com Meowth facilmente. Mas é inconstante, então você não pode contar com essa amizade durando.",
    evolution: {
      next: [["53", "Level 28"]],
    },
    profile: {
      height: "0.4 m",
      weight: "4.2 kg",
      egg: ["Field"],
      ability: [
        ["Pickup", "false"],
        ["Technician", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/052.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/052.png",
      hires: "./Imagens/Pokedex/hires/052.png",
    },
  },
  {
    id: 53,
    name: {
      english: "Persian",
      japanese: "ペルシアン",
      chinese: "猫老大",
      french: "Persian",
    },
    type: ["Normal"],
    base: {
      HP: 65,
      Attack: 70,
      Defense: 60,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 115,
    },
    species: "Classy Cat Pokémon",
    description:
      "Este Pokémon é popular entre pessoas ricas. Também é alvo de caçadores que estão atrás da joia em sua testa.",
    evolution: {
      prev: ["52", "Level 28"],
    },
    profile: {
      height: "1 m",
      weight: "32 kg",
      egg: ["Field"],
      ability: [
        ["Limber", "false"],
        ["Technician", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/053.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/053.png",
      hires: "./Imagens/Pokedex/hires/053.png",
    },
  },
  {
    id: 54,
    name: {
      english: "Psyduck",
      japanese: "コダック",
      chinese: "可达鸭",
      french: "Psykokwak",
    },
    type: ["Água"],
    base: {
      HP: 50,
      Attack: 52,
      Defense: 48,
      "Sp. Attack": 65,
      "Sp. Defense": 50,
      Speed: 55,
    },
    species: "Duck Pokémon",
    description:
      "Foi descoberto que suas células cerebrais são 10 vezes mais ativas quando Psyduck está com dor de cabeça.",
    evolution: {
      next: [["55", "Level 33"]],
    },
    profile: {
      height: "0.8 m",
      weight: "19.6 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Damp", "false"],
        ["Cloud Nine", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/054.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/054.png",
      hires: "./Imagens/Pokedex/hires/054.png",
    },
  },
  {
    id: 55,
    name: {
      english: "Golduck",
      japanese: "ゴルダック",
      chinese: "哥达鸭",
      french: "Akwakwak",
    },
    type: ["Água"],
    base: {
      HP: 80,
      Attack: 82,
      Defense: 78,
      "Sp. Attack": 95,
      "Sp. Defense": 80,
      Speed: 85,
    },
    species: "Duck Pokémon",
    description:
      "Um nadador profissional, ele pode continuar nadando por dois dias seguidos balançando sua longa cauda habilmente.",
    evolution: {
      prev: ["54", "Level 33"],
    },
    profile: {
      height: "1.7 m",
      weight: "76.6 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Damp", "false"],
        ["Cloud Nine", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/055.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/055.png",
      hires: "./Imagens/Pokedex/hires/055.png",
    },
  },
  {
    id: 56,
    name: {
      english: "Mankey",
      japanese: "マンキー",
      chinese: "猴怪",
      french: "Férosinge",
    },
    type: ["Lutador"],
    base: {
      HP: 40,
      Attack: 80,
      Defense: 35,
      "Sp. Attack": 35,
      "Sp. Defense": 45,
      Speed: 70,
    },
    species: "Pig Monkey Pokémon",
    description:
      "Se um ficar com raiva, todos os outros ao seu redor ficarão com raiva, então o silêncio é um visitante raro em um grupo de Mankey.",
    evolution: {
      next: [["57", "Level 28"]],
    },
    profile: {
      height: "0.5 m",
      weight: "28 kg",
      egg: ["Field"],
      ability: [
        ["Vital Spirit", "false"],
        ["Anger Point", "false"],
        ["Defiant", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/056.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/056.png",
      hires: "./Imagens/Pokedex/hires/056.png",
    },
  },
  {
    id: 57,
    name: {
      english: "Primeape",
      japanese: "オコリザル",
      chinese: "火暴猴",
      french: "Colossinge",
    },
    type: ["Lutador"],
    base: {
      HP: 65,
      Attack: 105,
      Defense: 60,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      Speed: 95,
    },
    species: "Pig Monkey Pokémon",
    description:
      "Os vasos sanguíneos em seu cérebro são mais resistentes do que os de outros Pokémon, então ele pode permanecer saudável apesar de sua raiva constante.",
    evolution: {
      prev: ["56", "Level 28"],
    },
    profile: {
      height: "1 m",
      weight: "32 kg",
      egg: ["Field"],
      ability: [
        ["Vital Spirit", "false"],
        ["Anger Point", "false"],
        ["Defiant", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/057.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/057.png",
      hires: "./Imagens/Pokedex/hires/057.png",
    },
  },
  {
    id: 58,
    name: {
      english: "Growlithe",
      japanese: "ガーディ",
      chinese: "卡蒂狗",
      french: "Caninos",
    },
    type: ["Fogo"],
    base: {
      HP: 55,
      Attack: 70,
      Defense: 45,
      "Sp. Attack": 70,
      "Sp. Defense": 50,
      Speed: 60,
    },
    species: "Puppy Pokémon",
    description:
      "Ele vive ao lado dos humanos desde tempos imemoriais. Seus ossos foram encontrados em escavações de ruínas da Idade da Pedra.",
    evolution: {
      next: [["59", "use Fogo Stone"]],
    },
    profile: {
      height: "0.7 m",
      weight: "19 kg",
      egg: ["Field"],
      ability: [
        ["Intimidate", "false"],
        ["Flash Fogo", "false"],
        ["Justified", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/058.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/058.png",
      hires: "./Imagens/Pokedex/hires/058.png",
    },
  },
  {
    id: 59,
    name: {
      english: "Arcanine",
      japanese: "ウインディ",
      chinese: "风速狗",
      french: "Arcanin",
    },
    type: ["Fogo"],
    base: {
      HP: 90,
      Attack: 110,
      Defense: 80,
      "Sp. Attack": 100,
      "Sp. Defense": 80,
      Speed: 95,
    },
    species: "Legendary Pokémon",
    description:
      "Existem tantos contos antigos sobre eles que são chamados de Pokémon lendários, mas há muito mais deles por aí do que você esperaria.",
    evolution: {
      prev: ["58", "use Fogo Stone"],
    },
    profile: {
      height: "1.9 m",
      weight: "155 kg",
      egg: ["Field"],
      ability: [
        ["Intimidate", "false"],
        ["Flash Fogo", "false"],
        ["Justified", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/059.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/059.png",
      hires: "./Imagens/Pokedex/hires/059.png",
    },
  },
  {
    id: 60,
    name: {
      english: "Poliwag",
      japanese: "ニョロモ",
      chinese: "蚊香蝌蚪",
      french: "Ptitard",
    },
    type: ["Água"],
    base: {
      HP: 40,
      Attack: 50,
      Defense: 40,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 90,
    },
    species: "Tadpole Pokémon",
    description:
      "A direção do redemoinho em seus estômagos difere dependendo de onde vivem. Os aficionados por Poliwag podem distingui-los à primeira vista.",
    evolution: {
      next: [["61", "Level 25"]],
    },
    profile: {
      height: "0.6 m",
      weight: "12.4 kg",
      egg: ["Água 1"],
      ability: [
        ["Água Absorb", "false"],
        ["Damp", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/060.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/060.png",
      hires: "./Imagens/Pokedex/hires/060.png",
    },
  },
  {
    id: 61,
    name: {
      english: "Poliwhirl",
      japanese: "ニョロゾ",
      chinese: "蚊香君",
      french: "Têtarte",
    },
    type: ["Água"],
    base: {
      HP: 65,
      Attack: 65,
      Defense: 65,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 90,
    },
    species: "Tadpole Pokémon",
    description:
      "Sua saúde sofre quando sua pele seca, então certifique-se de hidratá-la diligentemente.",
    evolution: {
      prev: ["60", "Level 25"],
      next: [
        ["62", "use Água Stone"],
        ["186", "trade holding Kings Rocha"],
      ],
    },
    profile: {
      height: "1 m",
      weight: "20 kg",
      egg: ["Água 1"],
      ability: [
        ["Água Absorb", "false"],
        ["Damp", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/061.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/061.png",
      hires: "./Imagens/Pokedex/hires/061.png",
    },
  },
  {
    id: 62,
    name: {
      english: "Poliwrath",
      japanese: "ニョロボン",
      chinese: "蚊香泳士",
      french: "Tartard",
    },
    type: ["Água", "Lutador"],
    base: {
      HP: 90,
      Attack: 95,
      Defense: 95,
      "Sp. Attack": 70,
      "Sp. Defense": 90,
      Speed: 70,
    },
    species: "Tadpole Pokémon",
    description:
      "Os músculos que desenvolveu com a natação são grossos e poderosos. Quando ele acerta um soco quadrado, pode transformar enormes pedras em pó.",
    evolution: {
      prev: ["61", "use Água Stone"],
    },
    profile: {
      height: "1.3 m",
      weight: "54 kg",
      egg: ["Água 1"],
      ability: [
        ["Água Absorb", "false"],
        ["Damp", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/062.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/062.png",
      hires: "./Imagens/Pokedex/hires/062.png",
    },
  },
  {
    id: 63,
    name: {
      english: "Abra",
      japanese: "ケーシィ",
      chinese: "凯西",
      french: "Abra",
    },
    type: ["Psíquico"],
    base: {
      HP: 25,
      Attack: 20,
      Defense: 15,
      "Sp. Attack": 105,
      "Sp. Defense": 55,
      Speed: 90,
    },
    species: "Psi Pokémon",
    description:
      "Ele pode ler a mente dos outros e se teletransportará quando o perigo se aproximar. Você deve limpar sua mente se quiser capturá-lo.",
    evolution: {
      next: [["64", "Level 16"]],
    },
    profile: {
      height: "0.9 m",
      weight: "19.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Synchronize", "false"],
        ["Inner Focus", "false"],
        ["Magic Guard", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/063.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/063.png",
      hires: "./Imagens/Pokedex/hires/063.png",
    },
  },
  {
    id: 64,
    name: {
      english: "Kadabra",
      japanese: "ユンゲラー",
      chinese: "勇基拉",
      french: "Kadabra",
    },
    type: ["Psíquico"],
    base: {
      HP: 40,
      Attack: 35,
      Defense: 30,
      "Sp. Attack": 120,
      "Sp. Defense": 70,
      Speed: 105,
    },
    species: "Psi Pokémon",
    description:
      "Possui fortes capacidades mentais, mas seus poderes psíquicos são reduzidos à metade quando não está segurando uma colher de prata.",
    evolution: {
      prev: ["63", "Level 16"],
      next: [["65", "Trade"]],
    },
    profile: {
      height: "1.3 m",
      weight: "56.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Synchronize", "false"],
        ["Inner Focus", "false"],
        ["Magic Guard", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/064.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/064.png",
      hires: "./Imagens/Pokedex/hires/064.png",
    },
  },
  {
    id: 65,
    name: {
      english: "Alakazam",
      japanese: "フーディン",
      chinese: "胡地",
      french: "Alakazam",
    },
    type: ["Psíquico"],
    base: {
      HP: 55,
      Attack: 50,
      Defense: 45,
      "Sp. Attack": 135,
      "Sp. Defense": 95,
      Speed: 120,
    },
    species: "Psi Pokémon",
    description:
      "Se confia profundamente em alguém, deixará que essa pessoa tenha uma de suas colheres. Qualquer coisa que você comer com essa colher é aparentemente deliciosa.",
    evolution: {
      prev: ["64", "Trade"],
    },
    profile: {
      height: "1.5 m",
      weight: "48 kg",
      egg: ["Human-Like"],
      ability: [
        ["Synchronize", "false"],
        ["Inner Focus", "false"],
        ["Magic Guard", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/065.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/065.png",
      hires: "./Imagens/Pokedex/hires/065.png",
    },
  },
  {
    id: 66,
    name: {
      english: "Machop",
      japanese: "ワンリキー",
      chinese: "腕力",
      french: "Machoc",
    },
    type: ["Lutador"],
    base: {
      HP: 70,
      Attack: 80,
      Defense: 50,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 35,
    },
    species: "Superpower Pokémon",
    description:
      "Ele gosta de comida altamente nutritiva porque seus instintos o levam a construir músculos eficientemente.",
    evolution: {
      next: [["67", "Level 28"]],
    },
    profile: {
      height: "0.8 m",
      weight: "19.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Guts", "false"],
        ["No Guard", "false"],
        ["Steadfast", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/066.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/066.png",
      hires: "./Imagens/Pokedex/hires/066.png",
    },
  },
  {
    id: 67,
    name: {
      english: "Machoke",
      japanese: "ゴーリキー",
      chinese: "豪力",
      french: "Machopeur",
    },
    type: ["Lutador"],
    base: {
      HP: 80,
      Attack: 100,
      Defense: 70,
      "Sp. Attack": 50,
      "Sp. Defense": 60,
      Speed: 45,
    },
    species: "Superpower Pokémon",
    description:
      "Um motivo popular para esculturas, seus músculos incrivelmente bem desenvolvidos capturaram a imaginação de muitos artistas.",
    evolution: {
      prev: ["66", "Level 28"],
      next: [["68", "Trade"]],
    },
    profile: {
      height: "1.5 m",
      weight: "70.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Guts", "false"],
        ["No Guard", "false"],
        ["Steadfast", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/067.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/067.png",
      hires: "./Imagens/Pokedex/hires/067.png",
    },
  },
  {
    id: 68,
    name: {
      english: "Machamp",
      japanese: "カイリキー",
      chinese: "怪力",
      french: "Mackogneur",
    },
    type: ["Lutador"],
    base: {
      HP: 90,
      Attack: 130,
      Defense: 80,
      "Sp. Attack": 65,
      "Sp. Defense": 85,
      Speed: 55,
    },
    species: "Superpower Pokémon",
    description:
      "Com quatro braços, pode atacar e defender simultaneamente. Diz-se que dominou todas as artes marciais do mundo.",
    evolution: {
      prev: ["67", "Trade"],
    },
    profile: {
      height: "1.6 m",
      weight: "130 kg",
      egg: ["Human-Like"],
      ability: [
        ["Guts", "false"],
        ["No Guard", "false"],
        ["Steadfast", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/068.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/068.png",
      hires: "./Imagens/Pokedex/hires/068.png",
    },
  },
  {
    id: 69,
    name: {
      english: "Bellsprout",
      japanese: "マダツボミ",
      chinese: "喇叭芽",
      french: "Chétiflor",
    },
    type: ["Grama", "Venenoso"],
    base: {
      HP: 50,
      Attack: 75,
      Defense: 35,
      "Sp. Attack": 70,
      "Sp. Defense": 30,
      Speed: 40,
    },
    species: "Flower Pokémon",
    description:
      "O corpo fino e flexível de Bellsprout permite que ele se dobre e balance para evitar qualquer ataque, por mais forte que seja. De sua boca, este Pokémon cospe um fluido corrosivo que derrete até mesmo ferro.",
    evolution: {
      next: [["70", "Level 21"]],
    },
    profile: {
      height: "0.7 m",
      weight: "4 kg",
      egg: ["Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Gluttony", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/069.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/069.png",
      hires: "./Imagens/Pokedex/hires/069.png",
    },
  },
  {
    id: 70,
    name: {
      english: "Weepinbell",
      japanese: "ウツドン",
      chinese: "口呆花",
      french: "Boustiflor",
    },
    type: ["Grama", "Venenoso"],
    base: {
      HP: 65,
      Attack: 90,
      Defense: 50,
      "Sp. Attack": 85,
      "Sp. Defense": 45,
      Speed: 55,
    },
    species: "Flycatcher Pokémon",
    description:
      "Weepinbell possui um grande gancho em sua traseira. À noite, o Pokémon se prende a um galho de árvore e vai dormir. Se ele se mover durante o sono, pode acordar e se encontrar no chão.",
    evolution: {
      prev: ["69", "Level 21"],
      next: [["71", "use Leaf Stone"]],
    },
    profile: {
      height: "1 m",
      weight: "6.4 kg",
      egg: ["Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Gluttony", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/070.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/070.png",
      hires: "./Imagens/Pokedex/hires/070.png",
    },
  },
  {
    id: 71,
    name: {
      english: "Victreebel",
      japanese: "ウツボット",
      chinese: "大食花",
      french: "Empiflor",
    },
    type: ["Grama", "Venenoso"],
    base: {
      HP: 80,
      Attack: 105,
      Defense: 65,
      "Sp. Attack": 100,
      "Sp. Defense": 70,
      Speed: 70,
    },
    species: "Flycatcher Pokémon",
    description:
      "Victreebel possui uma longa videira que se estende de sua cabeça. Esta videira é agitada e balançada como se fosse um animal para atrair presas. Quando uma presa desavisada se aproxima, este Pokémon a engole inteira.",
    evolution: {
      prev: ["70", "use Leaf Stone"],
    },
    profile: {
      height: "1.7 m",
      weight: "15.5 kg",
      egg: ["Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Gluttony", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/071.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/071.png",
      hires: "./Imagens/Pokedex/hires/071.png",
    },
  },
  {
    id: 72,
    name: {
      english: "Tentacool",
      japanese: "メノクラゲ",
      chinese: "玛瑙水母",
      french: "Tentacool",
    },
    type: ["Água", "Venenoso"],
    base: {
      HP: 40,
      Attack: 40,
      Defense: 35,
      "Sp. Attack": 50,
      "Sp. Defense": 100,
      Speed: 70,
    },
    species: "Jellyfish Pokémon",
    description:
      "Seu corpo é 99% água. O restante 1% contém o órgão que produz seu veneno.",
    evolution: {
      next: [["73", "Level 30"]],
    },
    profile: {
      height: "0.9 m",
      weight: "45.5 kg",
      egg: ["Água 3"],
      ability: [
        ["Clear Body", "false"],
        ["Liquid Ooze", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/072.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/072.png",
      hires: "./Imagens/Pokedex/hires/072.png",
    },
  },
  {
    id: 73,
    name: {
      english: "Tentacruel",
      japanese: "ドククラゲ",
      chinese: "毒刺水母",
      french: "Tentacruel",
    },
    type: ["Água", "Venenoso"],
    base: {
      HP: 80,
      Attack: 70,
      Defense: 65,
      "Sp. Attack": 80,
      "Sp. Defense": 120,
      Speed: 100,
    },
    species: "Jellyfish Pokémon",
    description:
      "Ele se comunica com outros de sua espécie acendendo os orbes vermelhos em sua cabeça. Quando os orbes estão piscando, é um sinal de alerta.",
    evolution: {
      prev: ["72", "Level 30"],
    },
    profile: {
      height: "1.6 m",
      weight: "55 kg",
      egg: ["Água 3"],
      ability: [
        ["Clear Body", "false"],
        ["Liquid Ooze", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/073.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/073.png",
      hires: "./Imagens/Pokedex/hires/073.png",
    },
  },
  {
    id: 74,
    name: {
      english: "Geodude",
      japanese: "イシツブテ",
      chinese: "小拳石",
      french: "Racaillou",
    },
    type: ["Rocha", "Terra"],
    base: {
      HP: 40,
      Attack: 80,
      Defense: 100,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 20,
    },
    species: "Rocha Pokémon",
    description:
      "Ele usa ambas as mãos para escalar penhascos íngremes. Sabe-se que as pessoas que o veem em ação passaram a praticar escalada.",
    evolution: {
      next: [["75", "Level 25"]],
    },
    profile: {
      height: "0.4 m",
      weight: "20 kg",
      egg: ["Mineral"],
      ability: [
        ["Rocha Head", "false"],
        ["Sturdy", "false"],
        ["Sand Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/074.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/074.png",
      hires: "./Imagens/Pokedex/hires/074.png",
    },
  },
  {
    id: 75,
    name: {
      english: "Graveler",
      japanese: "ゴローン",
      chinese: "隆隆石",
      french: "Gravalanch",
    },
    type: ["Rocha", "Terra"],
    base: {
      HP: 55,
      Attack: 95,
      Defense: 115,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      Speed: 35,
    },
    species: "Rocha Pokémon",
    description:
      "Ele viaja rolando pelos penhascos. Se cair em um rio, explodirá com seu último suspiro.",
    evolution: {
      prev: ["74", "Level 25"],
      next: [["76", "Trade"]],
    },
    profile: {
      height: "1 m",
      weight: "105 kg",
      egg: ["Mineral"],
      ability: [
        ["Rocha Head", "false"],
        ["Sturdy", "false"],
        ["Sand Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/075.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/075.png",
      hires: "./Imagens/Pokedex/hires/075.png",
    },
  },
  {
    id: 76,
    name: {
      english: "Golem",
      japanese: "ゴローニャ",
      chinese: "隆隆岩",
      french: "Grolem",
    },
    type: ["Rocha", "Terra"],
    base: {
      HP: 80,
      Attack: 120,
      Defense: 130,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      Speed: 45,
    },
    species: "Megaton Pokémon",
    description:
      "Ele detona seu próprio corpo. O poder dessa explosão pode impulsioná-lo para cima dos caminhos íngremes da montanha com incrível velocidade.",
    evolution: {
      prev: ["75", "Trade"],
    },
    profile: {
      height: "1.4 m",
      weight: "300 kg",
      egg: ["Mineral"],
      ability: [
        ["Rocha Head", "false"],
        ["Sturdy", "false"],
        ["Sand Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/076.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/076.png",
      hires: "./Imagens/Pokedex/hires/076.png",
    },
  },
  {
    id: 77,
    name: {
      english: "Ponyta",
      japanese: "ポニータ",
      chinese: "小火马",
      french: "Ponyta",
    },
    type: ["Fogo"],
    base: {
      HP: 50,
      Attack: 85,
      Defense: 55,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 90,
    },
    species: "Fogo Horse Pokémon",
    description:
      "Ponyta é muito fraco ao nascer. Mal consegue ficar de pé. Este Pokémon fica mais forte tropeçando e caindo para acompanhar seu pai.",
    evolution: {
      next: [["78", "Level 40"]],
    },
    profile: {
      height: "1 m",
      weight: "30 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Flash Fogo", "false"],
        ["Flame Body", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/077.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/077.png",
      hires: "./Imagens/Pokedex/hires/077.png",
    },
  },
  {
    id: 78,
    name: {
      english: "Rapidash",
      japanese: "ギャロップ",
      chinese: "烈焰马",
      french: "Galopa",
    },
    type: ["Fogo"],
    base: {
      HP: 65,
      Attack: 100,
      Defense: 70,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 105,
    },
    species: "Fogo Horse Pokémon",
    description:
      "Rapidash geralmente pode ser visto correndo casualmente nos campos e planícies. No entanto, quando este Pokémon fica sério, suas crinas flamejantes acendem e brilham enquanto ele galopa até 150 mph.",
    evolution: {
      prev: ["77", "Level 40"],
    },
    profile: {
      height: "1.7 m",
      weight: "95 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Flash Fogo", "false"],
        ["Flame Body", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/078.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/078.png",
      hires: "./Imagens/Pokedex/hires/078.png",
    },
  },
  {
    id: 79,
    name: {
      english: "Slowpoke",
      japanese: "ヤドン",
      chinese: "呆呆兽",
      french: "Ramoloss",
    },
    type: ["Água", "Psíquico"],
    base: {
      HP: 90,
      Attack: 65,
      Defense: 65,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 15,
    },
    species: "Dopey Pokémon",
    description:
      "Embora suas caudas, que caem naturalmente, possam ser facilmente encontradas por aí, elas são um ingrediente precioso para cozinhar.",
    evolution: {
      next: [
        ["80", "Level 37"],
        ["199", "trade holding Kings Rocha"],
      ],
    },
    profile: {
      height: "1.2 m",
      weight: "36 kg",
      egg: ["Monster", "Água 1"],
      ability: [
        ["Oblivious", "false"],
        ["Own Tempo", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/079.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/079.png",
      hires: "./Imagens/Pokedex/hires/079.png",
    },
  },
  {
    id: 80,
    name: {
      english: "Slowbro",
      japanese: "ヤドラン",
      chinese: "呆壳兽",
      french: "Flagadoss",
    },
    type: ["Água", "Psíquico"],
    base: {
      HP: 95,
      Attack: 75,
      Defense: 110,
      "Sp. Attack": 100,
      "Sp. Defense": 80,
      Speed: 30,
    },
    species: "Hermit Crab Pokémon",
    description:
      "Shellder, em sua ganância por sugar cada vez mais doçura da cauda de Slowbro, metamorfoseou-se em uma casca em espiral.",
    evolution: {
      prev: ["79", "Level 37"],
    },
    profile: {
      height: "1.6 m",
      weight: "78.5 kg",
      egg: ["Monster", "Água 1"],
      ability: [
        ["Oblivious", "false"],
        ["Own Tempo", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/080.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/080.png",
      hires: "./Imagens/Pokedex/hires/080.png",
    },
  },
  {
    id: 81,
    name: {
      english: "Magnemite",
      japanese: "コイル",
      chinese: "小磁怪",
      french: "Magnéti",
    },
    type: ["Elétrico", "Metal"],
    base: {
      HP: 25,
      Attack: 35,
      Defense: 70,
      "Sp. Attack": 95,
      "Sp. Defense": 55,
      Speed: 45,
    },
    species: "Magnet Pokémon",
    description:
      "Talvez porque as linhas elétricas sejam frequentemente enterradas hoje em dia, o número de ataques de Magnemite em usinas de energia aumentou.",
    evolution: {
      next: [["82", "Level 30"]],
    },
    profile: {
      height: "0.3 m",
      weight: "6 kg",
      egg: ["Mineral"],
      ability: [
        ["Magnet Pull", "false"],
        ["Sturdy", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/081.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/081.png",
      hires: "./Imagens/Pokedex/hires/081.png",
    },
  },
  {
    id: 82,
    name: {
      english: "Magneton",
      japanese: "レアコイル",
      chinese: "三合一磁怪",
      french: "Magnéton",
    },
    type: ["Elétrico", "Metal"],
    base: {
      HP: 50,
      Attack: 60,
      Defense: 95,
      "Sp. Attack": 120,
      "Sp. Defense": 70,
      Speed: 70,
    },
    species: "Magnet Pokémon",
    description:
      "Quando se formam nuvens de chuva, muitos Magneton se reúnem em lugares altos para esperar que um raio caia.",
    evolution: {
      prev: ["81", "Level 30"],
      next: [["462", "level up in a Magnetic Field area"]],
    },
    profile: {
      height: "1 m",
      weight: "60 kg",
      egg: ["Mineral"],
      ability: [
        ["Magnet Pull", "false"],
        ["Sturdy", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/082.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/082.png",
      hires: "./Imagens/Pokedex/hires/082.png",
    },
  },
  {
    id: 83,
    name: {
      english: "Farfetch'd",
      japanese: "カモネギ",
      chinese: "大葱鸭",
      french: "Canarticho",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 52,
      Attack: 90,
      Defense: 55,
      "Sp. Attack": 58,
      "Sp. Defense": 62,
      Speed: 60,
    },
    species: "Wild Duck Pokémon",
    description:
      "Farfetch'd é sempre visto com um caule de alguma planta. Aparentemente, existem caules bons e caules ruins. Sabe-se que este Pokémon luta com outros por caules.",
    evolution: {},
    profile: {
      height: "0.8 m",
      weight: "15 kg",
      egg: ["Voador", "Field"],
      ability: [
        ["Keen Eye", "false"],
        ["Inner Focus", "false"],
        ["Defiant", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/083.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/083.png",
      hires: "./Imagens/Pokedex/hires/083.png",
    },
  },
  {
    id: 84,
    name: {
      english: "Doduo",
      japanese: "ドードー",
      chinese: "嘟嘟",
      french: "Doduo",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 35,
      Attack: 85,
      Defense: 45,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 75,
    },
    species: "Twin Bird Pokémon",
    description:
      "As duas cabeças de Doduo contêm cérebros completamente idênticos. Um estudo científico relatou que, em raras ocasiões, haverá exemplos deste Pokémon possuindo conjuntos diferentes de cérebros.",
    evolution: {
      next: [["85", "Level 31"]],
    },
    profile: {
      height: "1.4 m",
      weight: "39.2 kg",
      egg: ["Voador"],
      ability: [
        ["Run Away", "false"],
        ["Early Bird", "false"],
        ["Tangled Feet", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/084.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/084.png",
      hires: "./Imagens/Pokedex/hires/084.png",
    },
  },
  {
    id: 85,
    name: {
      english: "Dodrio",
      japanese: "ドードリオ",
      chinese: "嘟嘟利",
      french: "Dodrio",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 60,
      Attack: 110,
      Defense: 70,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 110,
    },
    species: "Triple Bird Pokémon",
    description:
      "Aparentemente, as cabeças não são as únicas partes do corpo que Dodrio tem três. Ele também tem três conjuntos de corações e pulmões, por isso é capaz de correr longas distâncias sem descanso.",
    evolution: {
      prev: ["84", "Level 31"],
    },
    profile: {
      height: "1.8 m",
      weight: "85.2 kg",
      egg: ["Voador"],
      ability: [
        ["Run Away", "false"],
        ["Early Bird", "false"],
        ["Tangled Feet", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/085.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/085.png",
      hires: "./Imagens/Pokedex/hires/085.png",
    },
  },
  {
    id: 86,
    name: {
      english: "Seel",
      japanese: "パウワウ",
      chinese: "小海狮",
      french: "Otaria",
    },
    type: ["Água"],
    base: {
      HP: 65,
      Attack: 45,
      Defense: 55,
      "Sp. Attack": 45,
      "Sp. Defense": 70,
      Speed: 45,
    },
    species: "Sea Lion Pokémon",
    description:
      "Graças à sua espessa gordura, os mares frios não o incomodam de forma alguma, mas ele se cansa com bastante facilidade em águas quentes.",
    evolution: {
      next: [["87", "Level 34"]],
    },
    profile: {
      height: "1.1 m",
      weight: "90 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Hydration", "false"],
        ["Gelo Body", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/086.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/086.png",
      hires: "./Imagens/Pokedex/hires/086.png",
    },
  },
  {
    id: 87,
    name: {
      english: "Dewgong",
      japanese: "ジュゴン",
      chinese: "白海狮",
      french: "Lamantine",
    },
    type: ["Água", "Gelo"],
    base: {
      HP: 90,
      Attack: 70,
      Defense: 80,
      "Sp. Attack": 70,
      "Sp. Defense": 95,
      Speed: 70,
    },
    species: "Sea Lion Pokémon",
    description:
      "Ele toma sol na praia após as refeições. O aumento de sua temperatura corporal ajuda sua digestão.",
    evolution: {
      prev: ["86", "Level 34"],
    },
    profile: {
      height: "1.7 m",
      weight: "120 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Hydration", "false"],
        ["Gelo Body", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/087.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/087.png",
      hires: "./Imagens/Pokedex/hires/087.png",
    },
  },
  {
    id: 88,
    name: {
      english: "Grimer",
      japanese: "ベトベター",
      chinese: "臭泥",
      french: "Tadmorv",
    },
    type: ["Venenoso"],
    base: {
      HP: 80,
      Attack: 80,
      Defense: 50,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      Speed: 25,
    },
    species: "Sludge Pokémon",
    description:
      "A água residual proveniente das fábricas está limpa hoje em dia, então Grimer não tem nada para comer. Diz-se que estão à beira da extinção.",
    evolution: {
      next: [["89", "Level 38"]],
    },
    profile: {
      height: "0.9 m",
      weight: "30 kg",
      egg: ["Amorphous"],
      ability: [
        ["Stench", "false"],
        ["Sticky Hold", "false"],
        ["Venenoso Touch", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/088.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/088.png",
      hires: "./Imagens/Pokedex/hires/088.png",
    },
  },
  {
    id: 89,
    name: {
      english: "Muk",
      japanese: "ベトベトン",
      chinese: "臭臭泥",
      french: "Grotadmorv",
    },
    type: ["Venenoso"],
    base: {
      HP: 105,
      Attack: 105,
      Defense: 75,
      "Sp. Attack": 65,
      "Sp. Defense": 100,
      Speed: 50,
    },
    species: "Sludge Pokémon",
    description:
      "Como espalham germes por toda parte, há muito tempo são alvo de extermínio, levando a um declínio acentuado de sua população.",
    evolution: {
      prev: ["88", "Level 38"],
    },
    profile: {
      height: "1.2 m",
      weight: "30 kg",
      egg: ["Amorphous"],
      ability: [
        ["Stench", "false"],
        ["Sticky Hold", "false"],
        ["Venenoso Touch", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/089.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/089.png",
      hires: "./Imagens/Pokedex/hires/089.png",
    },
  },
  {
    id: 90,
    name: {
      english: "Shellder",
      japanese: "シェルダー",
      chinese: "大舌贝",
      french: "Kokiyas",
    },
    type: ["Água"],
    base: {
      HP: 30,
      Attack: 65,
      Defense: 100,
      "Sp. Attack": 45,
      "Sp. Defense": 25,
      Speed: 40,
    },
    species: "Bivalve Pokémon",
    description:
      "Mesmo quando sua casca está fechada, sua língua ainda fica para fora. Se você der um bom puxão na língua dele, o choque fará com que Shellder abra sua casca.",
    evolution: {
      next: [["91", "use Água Stone"]],
    },
    profile: {
      height: "0.3 m",
      weight: "4 kg",
      egg: ["Água 3"],
      ability: [
        ["Shell Armor", "false"],
        ["Skill Link", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/090.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/090.png",
      hires: "./Imagens/Pokedex/hires/090.png",
    },
  },
  {
    id: 91,
    name: {
      english: "Cloyster",
      japanese: "パルシェン",
      chinese: "刺甲贝",
      french: "Crustabri",
    },
    type: ["Água", "Gelo"],
    base: {
      HP: 50,
      Attack: 95,
      Defense: 180,
      "Sp. Attack": 85,
      "Sp. Defense": 45,
      Speed: 70,
    },
    species: "Bivalve Pokémon",
    description:
      "As caudas de Slowpoke são sua comida favorita. Sabe-se até que ele sobe na terra para procurar Slowpoke de vez em quando.",
    evolution: {
      prev: ["90", "use Água Stone"],
    },
    profile: {
      height: "1.5 m",
      weight: "132.5 kg",
      egg: ["Água 3"],
      ability: [
        ["Shell Armor", "false"],
        ["Skill Link", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/091.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/091.png",
      hires: "./Imagens/Pokedex/hires/091.png",
    },
  },
  {
    id: 92,
    name: {
      english: "Gastly",
      japanese: "ゴース",
      chinese: "鬼斯",
      french: "Fantominus",
    },
    type: ["Fantasma", "Venenoso"],
    base: {
      HP: 30,
      Attack: 35,
      Defense: 30,
      "Sp. Attack": 100,
      "Sp. Defense": 35,
      Speed: 80,
    },
    species: "Gas Pokémon",
    description:
      "O gás venenoso compreende 95% de seu corpo. Diz-se que os 5% restantes são constituídos pelas almas daqueles que morreram com o gás.",
    evolution: {
      next: [["93", "Level 25"]],
    },
    profile: {
      height: "1.3 m",
      weight: "0.1 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/092.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/092.png",
      hires: "./Imagens/Pokedex/hires/092.png",
    },
  },
  {
    id: 93,
    name: {
      english: "Haunter",
      japanese: "ゴースト",
      chinese: "鬼斯通",
      french: "Spectrum",
    },
    type: ["Fantasma", "Venenoso"],
    base: {
      HP: 45,
      Attack: 50,
      Defense: 45,
      "Sp. Attack": 115,
      "Sp. Defense": 55,
      Speed: 95,
    },
    species: "Gas Pokémon",
    description:
      "É perigoso sair sozinho à noite quando você está se sentindo triste. Haunter vai te pegar, e você não conseguirá voltar para casa.",
    evolution: {
      prev: ["92", "Level 25"],
      next: [["94", "Trade"]],
    },
    profile: {
      height: "1.6 m",
      weight: "0.1 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/093.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/093.png",
      hires: "./Imagens/Pokedex/hires/093.png",
    },
  },
  {
    id: 94,
    name: {
      english: "Gengar",
      japanese: "ゲンガー",
      chinese: "耿鬼",
      french: "Ectoplasma",
    },
    type: ["Fantasma", "Venenoso"],
    base: {
      HP: 60,
      Attack: 65,
      Defense: 60,
      "Sp. Attack": 130,
      "Sp. Defense": 75,
      Speed: 110,
    },
    species: "Shadow Pokémon",
    description:
      "Nem sua casa é segura. Gengar vai espreitar em qualquer canto escuro de um cômodo que puder encontrar e esperar sua chance de pegar sua presa.",
    evolution: {
      prev: ["93", "Trade"],
    },
    profile: {
      height: "1.5 m",
      weight: "40.5 kg",
      egg: ["Amorphous"],
      ability: [["Cursed Body", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/094.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/094.png",
      hires: "./Imagens/Pokedex/hires/094.png",
    },
  },
  {
    id: 95,
    name: {
      english: "Onix",
      japanese: "イワーク",
      chinese: "大岩蛇",
      french: "Onix",
    },
    type: ["Rocha", "Terra"],
    base: {
      HP: 35,
      Attack: 45,
      Defense: 160,
      "Sp. Attack": 30,
      "Sp. Defense": 45,
      Speed: 70,
    },
    species: "Rocha Snake Pokémon",
    description:
      "Onix possui um imã em seu cérebro. Ele atua como uma bússola para que este Pokémon não perca a direção enquanto está tunelando. À medida que envelhece, seu corpo fica cada vez mais redondo e liso.",
    evolution: {
      next: [["208", "trade holding Metal Coat"]],
    },
    profile: {
      height: "8.8 m",
      weight: "210 kg",
      egg: ["Mineral"],
      ability: [
        ["Rocha Head", "false"],
        ["Sturdy", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/095.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/095.png",
      hires: "./Imagens/Pokedex/hires/095.png",
    },
  },
  {
    id: 96,
    name: {
      english: "Drowzee",
      japanese: "スリープ",
      chinese: "催眠貘",
      french: "Soporifik",
    },
    type: ["Psíquico"],
    base: {
      HP: 60,
      Attack: 48,
      Defense: 45,
      "Sp. Attack": 43,
      "Sp. Defense": 90,
      Speed: 42,
    },
    species: "Hypnosis Pokémon",
    description:
      "Ele coloca sua presa para dormir e devora seus sonhos. Parece que maus sonhos têm gosto azedo, então Drowzee não gosta particularmente de comê-los.",
    evolution: {
      next: [["97", "Level 26"]],
    },
    profile: {
      height: "1 m",
      weight: "32.4 kg",
      egg: ["Human-Like"],
      ability: [
        ["Insomnia", "false"],
        ["Forewarn", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/096.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/096.png",
      hires: "./Imagens/Pokedex/hires/096.png",
    },
  },
  {
    id: 97,
    name: {
      english: "Hypno",
      japanese: "スリーパー",
      chinese: "引梦貘人",
      french: "Hypnomade",
    },
    type: ["Psíquico"],
    base: {
      HP: 85,
      Attack: 73,
      Defense: 70,
      "Sp. Attack": 73,
      "Sp. Defense": 115,
      Speed: 67,
    },
    species: "Hypnosis Pokémon",
    description:
      "Há alguns Hypno que ajudam médicos com pacientes que não conseguem dormir à noite nos hospitais.",
    evolution: {
      prev: ["96", "Level 26"],
    },
    profile: {
      height: "1.6 m",
      weight: "75.6 kg",
      egg: ["Human-Like"],
      ability: [
        ["Insomnia", "false"],
        ["Forewarn", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/097.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/097.png",
      hires: "./Imagens/Pokedex/hires/097.png",
    },
  },
  {
    id: 98,
    name: {
      english: "Krabby",
      japanese: "クラブ",
      chinese: "大钳蟹",
      french: "Krabby",
    },
    type: ["Água"],
    base: {
      HP: 30,
      Attack: 105,
      Defense: 90,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      Speed: 50,
    },
    species: "River Crab Pokémon",
    description:
      "Krabby vive em praias, escavado dentro de buracos cavados na areia. Em praias arenosas com pouco alimento, esses Pokémon podem ser vistos brigando entre si por território.",
    evolution: {
      next: [["99", "Level 28"]],
    },
    profile: {
      height: "0.4 m",
      weight: "6.5 kg",
      egg: ["Água 3"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Shell Armor", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/098.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/098.png",
      hires: "./Imagens/Pokedex/hires/098.png",
    },
  },
  {
    id: 99,
    name: {
      english: "Kingler",
      japanese: "キングラー",
      chinese: "巨钳蟹",
      french: "Krabboss",
    },
    type: ["Água"],
    base: {
      HP: 55,
      Attack: 130,
      Defense: 115,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 75,
    },
    species: "Pincer Pokémon",
    description:
      "Kingler possui uma enorme e gigantesca garra. Ele acena com essa enorme garra no ar para se comunicar com os outros. No entanto, como a garra é muito pesada, o Pokémon se cansa rapidamente.",
    evolution: {
      prev: ["98", "Level 28"],
    },
    profile: {
      height: "1.3 m",
      weight: "60 kg",
      egg: ["Água 3"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Shell Armor", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/099.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/099.png",
      hires: "./Imagens/Pokedex/hires/099.png",
    },
  },
  {
    id: 100,
    name: {
      english: "Voltorb",
      japanese: "ビリリダマ",
      chinese: "霹雳电球",
      french: "Voltorbe",
    },
    type: ["Elétrico"],
    base: {
      HP: 40,
      Attack: 30,
      Defense: 50,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 100,
    },
    species: "Ball Pokémon",
    description:
      "Voltorb é extremamente sensível - ele explode com o menor dos choques. Diz-se que foi criado pela primeira vez quando uma Pokébola foi exposta a um poderoso pulso de energia.",
    evolution: {
      next: [["101", "Level 30"]],
    },
    profile: {
      height: "0.5 m",
      weight: "10.4 kg",
      egg: ["Mineral"],
      ability: [
        ["Soundproof", "false"],
        ["Static", "false"],
        ["Aftermath", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/100.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/100.png",
      hires: "./Imagens/Pokedex/hires/100.png",
    },
  },
  {
    id: 101,
    name: {
      english: "Electrode",
      japanese: "マルマイン",
      chinese: "顽皮雷弹",
      french: "Électrode",
    },
    type: ["Elétrico"],
    base: {
      HP: 60,
      Attack: 50,
      Defense: 70,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 150,
    },
    species: "Ball Pokémon",
    description:
      "Uma das características de Electrode é sua atração pela eletricidade. É um Pokémon problemático que se congrega principalmente em usinas de energia para se alimentar de eletricidade que acabou de ser gerada.",
    evolution: {
      prev: ["100", "Level 30"],
    },
    profile: {
      height: "1.2 m",
      weight: "66.6 kg",
      egg: ["Mineral"],
      ability: [
        ["Soundproof", "false"],
        ["Static", "false"],
        ["Aftermath", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/101.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/101.png",
      hires: "./Imagens/Pokedex/hires/101.png",
    },
  },
  {
    id: 102,
    name: {
      english: "Exeggcute",
      japanese: "タマタマ",
      chinese: "蛋蛋",
      french: "Noeunoeuf",
    },
    type: ["Grama", "Psíquico"],
    base: {
      HP: 60,
      Attack: 40,
      Defense: 80,
      "Sp. Attack": 60,
      "Sp. Defense": 45,
      Speed: 40,
    },
    species: "Egg Pokémon",
    description:
      "Embora tenham o mesmo tamanho que outros Exeggcute, os produzidos em Alola são bastante pesados. Suas conchas estão cheias.",
    evolution: {
      next: [["103", "use Leaf Stone"]],
    },
    profile: {
      height: "0.4 m",
      weight: "2.5 kg",
      egg: ["Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Harvest", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/102.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/102.png",
      hires: "./Imagens/Pokedex/hires/102.png",
    },
  },
  {
    id: 103,
    name: {
      english: "Exeggutor",
      japanese: "ナッシー",
      chinese: "椰蛋树",
      french: "Noadkoko",
    },
    type: ["Grama", "Psíquico"],
    base: {
      HP: 95,
      Attack: 95,
      Defense: 85,
      "Sp. Attack": 125,
      "Sp. Defense": 75,
      Speed: 55,
    },
    species: "Coconut Pokémon",
    description:
      "Cada uma de suas três cabeças tem seus próprios pensamentos. Quando querem ir em direções diferentes, Exeggutor fica incapaz de se mover.",
    evolution: {
      prev: ["102", "use Leaf Stone"],
    },
    profile: {
      height: "2 m",
      weight: "120 kg",
      egg: ["Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Harvest", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/103.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/103.png",
      hires: "./Imagens/Pokedex/hires/103.png",
    },
  },
  {
    id: 104,
    name: {
      english: "Cubone",
      japanese: "カラカラ",
      chinese: "卡拉卡拉",
      french: "Osselait",
    },
    type: ["Terra"],
    base: {
      HP: 50,
      Attack: 50,
      Defense: 95,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      Speed: 35,
    },
    species: "Lonely Pokémon",
    description:
      "Ele usa o crânio de sua mãe na cabeça, então ninguém sabe como é seu rosto nu. No entanto, está claro que ele está sempre chorando.",
    evolution: {
      next: [["105", "Level 28"]],
    },
    profile: {
      height: "0.4 m",
      weight: "6.5 kg",
      egg: ["Monster"],
      ability: [
        ["Rocha Head", "false"],
        ["Lightning Rod", "false"],
        ["Battle Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/104.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/104.png",
      hires: "./Imagens/Pokedex/hires/104.png",
    },
  },
  {
    id: 105,
    name: {
      english: "Marowak",
      japanese: "ガラガラ",
      chinese: "嘎啦嘎啦",
      french: "Ossatueur",
    },
    type: ["Terra"],
    base: {
      HP: 60,
      Attack: 80,
      Defense: 110,
      "Sp. Attack": 50,
      "Sp. Defense": 80,
      Speed: 45,
    },
    species: "Bone Keeper Pokémon",
    description:
      "Eles batem ritmicamente seus ossos para se comunicar entre si. Existem quase 50 padrões rítmicos diferentes.",
    evolution: {
      prev: ["104", "Level 28"],
    },
    profile: {
      height: "1 m",
      weight: "45 kg",
      egg: ["Monster"],
      ability: [
        ["Rocha Head", "false"],
        ["Lightning Rod", "false"],
        ["Battle Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/105.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/105.png",
      hires: "./Imagens/Pokedex/hires/105.png",
    },
  },
  {
    id: 106,
    name: {
      english: "Hitmonlee",
      japanese: "サワムラー",
      chinese: "飞腿郎",
      french: "Kicklee",
    },
    type: ["Lutador"],
    base: {
      HP: 50,
      Attack: 120,
      Defense: 53,
      "Sp. Attack": 35,
      "Sp. Defense": 110,
      Speed: 87,
    },
    species: "Kicking Pokémon",
    description:
      "As pernas de Hitmonlee se contraem e se estendem livremente. Usando essas pernas semelhantes a molas, ele derruba inimigos com chutes devastadores. Após a batalha, ele esfrega as pernas e solta os músculos para superar a fadiga.",
    evolution: {
      prev: ["236", "Level 20, Attack > Defense"],
    },
    profile: {
      height: "1.5 m",
      weight: "49.8 kg",
      egg: ["Human-Like"],
      ability: [
        ["Limber", "false"],
        ["Reckless", "false"],
        ["Unburden", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/106.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/106.png",
      hires: "./Imagens/Pokedex/hires/106.png",
    },
  },
  {
    id: 107,
    name: {
      english: "Hitmonchan",
      japanese: "エビワラー",
      chinese: "快拳郎",
      french: "Tygnon",
    },
    type: ["Lutador"],
    base: {
      HP: 50,
      Attack: 105,
      Defense: 79,
      "Sp. Attack": 35,
      "Sp. Defense": 110,
      Speed: 76,
    },
    species: "Punching Pokémon",
    description:
      "Diz-se que Hitmonchan possui o espírito de um boxeador que estava trabalhando em direção a um campeonato mundial. Este Pokémon possui um espírito indomável e nunca desistirá diante da adversidade.",
    evolution: {
      prev: ["236", "Level 20, Attack < Defense"],
    },
    profile: {
      height: "1.4 m",
      weight: "50.2 kg",
      egg: ["Human-Like"],
      ability: [
        ["Keen Eye", "false"],
        ["Iron Fist", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/107.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/107.png",
      hires: "./Imagens/Pokedex/hires/107.png",
    },
  },
  {
    id: 108,
    name: {
      english: "Lickitung",
      japanese: "ベロリンガ",
      chinese: "大舌头",
      french: "Excelangue",
    },
    type: ["Normal"],
    base: {
      HP: 90,
      Attack: 55,
      Defense: 75,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      Speed: 30,
    },
    species: "Licking Pokémon",
    description:
      "Ele lambe a sujeira limpa com sua língua. Qualquer coisa que ele lamba sempre cheira mal depois, então se está realmente limpo é ... questionável.",
    evolution: {
      next: [["463", "after Rollout learned"]],
    },
    profile: {
      height: "1.2 m",
      weight: "65.5 kg",
      egg: ["Monster"],
      ability: [
        ["Own Tempo", "false"],
        ["Oblivious", "false"],
        ["Cloud Nine", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/108.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/108.png",
      hires: "./Imagens/Pokedex/hires/108.png",
    },
  },
  {
    id: 109,
    name: {
      english: "Koffing",
      japanese: "ドガース",
      chinese: "瓦斯弹",
      french: "Smogo",
    },
    type: ["Venenoso"],
    base: {
      HP: 40,
      Attack: 65,
      Defense: 95,
      "Sp. Attack": 60,
      "Sp. Defense": 45,
      Speed: 35,
    },
    species: "Venenoso Gas Pokémon",
    description:
      "Koffing incorpora substâncias tóxicas. Ele mistura as toxinas com lixo cru para desencadear uma reação química que resulta em um gás venenoso terrivelmente poderoso. Quanto mais alta a temperatura, mais gás é produzido por este Pokémon.",
    evolution: {
      next: [["110", "Level 35"]],
    },
    profile: {
      height: "0.6 m",
      weight: "1 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/109.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/109.png",
      hires: "./Imagens/Pokedex/hires/109.png",
    },
  },
  {
    id: 110,
    name: {
      english: "Weezing",
      japanese: "マタドガス",
      chinese: "双弹瓦斯",
      french: "Smogogo",
    },
    type: ["Venenoso"],
    base: {
      HP: 65,
      Attack: 90,
      Defense: 120,
      "Sp. Attack": 85,
      "Sp. Defense": 70,
      Speed: 60,
    },
    species: "Venenoso Gas Pokémon",
    description:
      "Weezing alternadamente encolhe e infla seus corpos gêmeos para misturar gases tóxicos dentro. Quanto mais os gases são misturados, mais poderosos se tornam os venenos. O Pokémon também fica mais podre.",
    evolution: {
      prev: ["109", "Level 35"],
    },
    profile: {
      height: "1.2 m",
      weight: "9.5 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/110.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/110.png",
      hires: "./Imagens/Pokedex/hires/110.png",
    },
  },
  {
    id: 111,
    name: {
      english: "Rhyhorn",
      japanese: "サイホーン",
      chinese: "独角犀牛",
      french: "Rhinocorne",
    },
    type: ["Terra", "Rocha"],
    base: {
      HP: 80,
      Attack: 85,
      Defense: 95,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 25,
    },
    species: "Spikes Pokémon",
    description:
      "O cérebro de Rhyhorn é muito pequeno. É tão denso que, durante uma corrida, ele esquece por que começou a correr em primeiro lugar. Aparentemente, ele se lembra às vezes se demolir algo.",
    evolution: {
      next: [["112", "Level 42"]],
    },
    profile: {
      height: "1 m",
      weight: "115 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Lightning Rod", "false"],
        ["Rocha Head", "false"],
        ["Reckless", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/111.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/111.png",
      hires: "./Imagens/Pokedex/hires/111.png",
    },
  },
  {
    id: 112,
    name: {
      english: "Rhydon",
      japanese: "サイドン",
      chinese: "钻角犀兽",
      french: "Rhinoféros",
    },
    type: ["Terra", "Rocha"],
    base: {
      HP: 105,
      Attack: 130,
      Defense: 120,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      Speed: 40,
    },
    species: "Drill Pokémon",
    description:
      "Rhydon possui um chifre que serve como uma broca. É usado para destruir rochas e pedras. Este Pokémon ocasionalmente bate em riachos de magma, mas a pele semelhante a uma armadura o impede de sentir o calor.",
    evolution: {
      prev: ["111", "Level 42"],
      next: [["464", "trade holding Protector"]],
    },
    profile: {
      height: "1.9 m",
      weight: "120 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Lightning Rod", "false"],
        ["Rocha Head", "false"],
        ["Reckless", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/112.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/112.png",
      hires: "./Imagens/Pokedex/hires/112.png",
    },
  },
  {
    id: 113,
    name: {
      english: "Chansey",
      japanese: "ラッキー",
      chinese: "吉利蛋",
      french: "Leveinard",
    },
    type: ["Normal"],
    base: {
      HP: 250,
      Attack: 5,
      Defense: 5,
      "Sp. Attack": 35,
      "Sp. Defense": 105,
      Speed: 50,
    },
    species: "Egg Pokémon",
    description:
      "Devido ao excesso de colheita dos ovos em suas barrigas pelas pessoas no passado, a população de Chansey permanece muito pequena.",
    evolution: {
      prev: ["440", "hold Oval Stone, Daytime"],
      next: [["242", "high Friendship"]],
    },
    profile: {
      height: "1.1 m",
      weight: "34.6 kg",
      egg: ["Fada"],
      ability: [
        ["Natural Cure", "false"],
        ["Serene Grace", "false"],
        ["Healer", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/113.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/113.png",
      hires: "./Imagens/Pokedex/hires/113.png",
    },
  },
  {
    id: 114,
    name: {
      english: "Tangela",
      japanese: "モンジャラ",
      chinese: "蔓藤怪",
      french: "Saquedeneu",
    },
    type: ["Grama"],
    base: {
      HP: 65,
      Attack: 55,
      Defense: 115,
      "Sp. Attack": 100,
      "Sp. Defense": 40,
      Speed: 60,
    },
    species: "Vine Pokémon",
    description:
      "As videiras de Tangela se soltam facilmente se forem agarradas. Isso acontece sem dor, permitindo que ele faça uma fuga rápida. As videiras perdidas são substituídas por videiras recém-cultivadas no dia seguinte.",
    evolution: {
      next: [["465", "after Ancient Power learned"]],
    },
    profile: {
      height: "1 m",
      weight: "35 kg",
      egg: ["Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Leaf Guard", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/114.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/114.png",
      hires: "./Imagens/Pokedex/hires/114.png",
    },
  },
  {
    id: 115,
    name: {
      english: "Kangaskhan",
      japanese: "ガルーラ",
      chinese: "袋兽",
      french: "Kangourex",
    },
    type: ["Normal"],
    base: {
      HP: 105,
      Attack: 95,
      Defense: 80,
      "Sp. Attack": 40,
      "Sp. Defense": 80,
      Speed: 90,
    },
    species: "Parent Pokémon",
    description:
      "Você não deve se aproximar da criança quando ela está brincando fora da bolsa de sua mãe. Sua mãe está sempre por perto vigiando-a.",
    evolution: {},
    profile: {
      height: "2.2 m",
      weight: "80 kg",
      egg: ["Monster"],
      ability: [
        ["Early Bird", "false"],
        ["Scrappy", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/115.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/115.png",
      hires: "./Imagens/Pokedex/hires/115.png",
    },
  },
  {
    id: 116,
    name: {
      english: "Horsea",
      japanese: "タッツー",
      chinese: "墨海马",
      french: "Hypotrempe",
    },
    type: ["Água"],
    base: {
      HP: 30,
      Attack: 40,
      Defense: 70,
      "Sp. Attack": 70,
      "Sp. Defense": 25,
      Speed: 60,
    },
    species: "Dragão Pokémon",
    description:
      "Se Horsea sentir perigo, ele espirrará reflexivamente uma tinta preta densa de sua boca e tentará escapar. Este Pokémon nada batendo inteligentemente a nadadeira nas costas.",
    evolution: {
      next: [["117", "Level 32"]],
    },
    profile: {
      height: "0.4 m",
      weight: "8 kg",
      egg: ["Água 1", "Dragão"],
      ability: [
        ["Swift Swim", "false"],
        ["Sniper", "false"],
        ["Damp", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/116.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/116.png",
      hires: "./Imagens/Pokedex/hires/116.png",
    },
  },
  {
    id: 117,
    name: {
      english: "Seadra",
      japanese: "シードラ",
      chinese: "海刺龙",
      french: "Hypocéan",
    },
    type: ["Água"],
    base: {
      HP: 55,
      Attack: 65,
      Defense: 95,
      "Sp. Attack": 95,
      "Sp. Defense": 45,
      Speed: 85,
    },
    species: "Dragão Pokémon",
    description:
      "Seadra gera redemoinhos girando seu corpo. Os redemoinhos são fortes o suficiente para engolir até mesmo barcos de pesca. Este Pokémon enfraquece as presas com essas correntes e depois as engole inteiras.",
    evolution: {
      prev: ["116", "Level 32"],
      next: [["230", "trade holding Dragão Scale"]],
    },
    profile: {
      height: "1.2 m",
      weight: "25 kg",
      egg: ["Água 1", "Dragão"],
      ability: [
        ["Venenoso Point", "false"],
        ["Sniper", "false"],
        ["Damp", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/117.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/117.png",
      hires: "./Imagens/Pokedex/hires/117.png",
    },
  },
  {
    id: 118,
    name: {
      english: "Goldeen",
      japanese: "トサキント",
      chinese: "角金鱼",
      french: "Poissirène",
    },
    type: ["Água"],
    base: {
      HP: 45,
      Attack: 67,
      Defense: 60,
      "Sp. Attack": 35,
      "Sp. Defense": 50,
      Speed: 63,
    },
    species: "Goldfish Pokémon",
    description:
      'A maneira como ele nada ao longo de suas nadadeiras semelhantes a vestidos lhe rendeu o nome de "princesa da água".',
    evolution: {
      next: [["119", "Level 33"]],
    },
    profile: {
      height: "0.6 m",
      weight: "15 kg",
      egg: ["Água 2"],
      ability: [
        ["Swift Swim", "false"],
        ["Água Veil", "false"],
        ["Lightning Rod", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/118.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/118.png",
      hires: "./Imagens/Pokedex/hires/118.png",
    },
  },
  {
    id: 119,
    name: {
      english: "Seaking",
      japanese: "アズマオウ",
      chinese: "金鱼王",
      french: "Poissoroy",
    },
    type: ["Água"],
    base: {
      HP: 80,
      Attack: 92,
      Defense: 65,
      "Sp. Attack": 65,
      "Sp. Defense": 80,
      Speed: 68,
    },
    species: "Goldfish Pokémon",
    description:
      "Para atrair fêmeas, os machos dançam no fundo do rio. As fêmeas se reúnem em torno do macho que dança com mais graça.",
    evolution: {
      prev: ["118", "Level 33"],
    },
    profile: {
      height: "1.3 m",
      weight: "39 kg",
      egg: ["Água 2"],
      ability: [
        ["Swift Swim", "false"],
        ["Água Veil", "false"],
        ["Lightning Rod", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/119.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/119.png",
      hires: "./Imagens/Pokedex/hires/119.png",
    },
  },
  {
    id: 120,
    name: {
      english: "Staryu",
      japanese: "ヒトデマン",
      chinese: "海星星",
      french: "Stari",
    },
    type: ["Água"],
    base: {
      HP: 30,
      Attack: 45,
      Defense: 55,
      "Sp. Attack": 70,
      "Sp. Defense": 55,
      Speed: 85,
    },
    species: "Star Shape Pokémon",
    description:
      "Nenhum número de ferimentos pode incomodar Staryu. Seus incríveis poderes regenerativos o retornam ao estado anterior em meio dia!",
    evolution: {
      next: [["121", "use Água Stone"]],
    },
    profile: {
      height: "0.8 m",
      weight: "34.5 kg",
      egg: ["Água 3"],
      ability: [
        ["Illuminate", "false"],
        ["Natural Cure", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/120.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/120.png",
      hires: "./Imagens/Pokedex/hires/120.png",
    },
  },
  {
    id: 121,
    name: {
      english: "Starmie",
      japanese: "スターミー",
      chinese: "宝石海星",
      french: "Staross",
    },
    type: ["Água", "Psíquico"],
    base: {
      HP: 60,
      Attack: 75,
      Defense: 85,
      "Sp. Attack": 100,
      "Sp. Defense": 85,
      Speed: 115,
    },
    species: "Mysterious Pokémon",
    description:
      "Ele gira seu corpo geometricamente formado para nadar pela água. Ele sempre parece estar enviando ondas de rádio misteriosas.",
    evolution: {
      prev: ["120", "use Água Stone"],
    },
    profile: {
      height: "1.1 m",
      weight: "80 kg",
      egg: ["Água 3"],
      ability: [
        ["Illuminate", "false"],
        ["Natural Cure", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/121.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/121.png",
      hires: "./Imagens/Pokedex/hires/121.png",
    },
  },
  {
    id: 122,
    name: {
      english: "Mr. Mime",
      japanese: "バリヤード",
      chinese: "魔墙人偶",
      french: "M. Mime",
    },
    type: ["Psíquico", "Fada"],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 65,
      "Sp. Attack": 100,
      "Sp. Defense": 120,
      Speed: 90,
    },
    species: "Barrier Pokémon",
    description:
      "Ele cria paredes invisíveis com sua pantomima. Se você não agir impressionado, ele o atacará com um tapa duplo!",
    evolution: {
      prev: ["439", "after Mimic learned"],
    },
    profile: {
      height: "1.3 m",
      weight: "54.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Soundproof", "false"],
        ["Filter", "false"],
        ["Technician", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/122.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/122.png",
      hires: "./Imagens/Pokedex/hires/122.png",
    },
  },
  {
    id: 123,
    name: {
      english: "Scyther",
      japanese: "ストライク",
      chinese: "飞天螳螂",
      french: "Insécateur",
    },
    type: ["Inseto", "Voador"],
    base: {
      HP: 70,
      Attack: 110,
      Defense: 80,
      "Sp. Attack": 55,
      "Sp. Defense": 80,
      Speed: 105,
    },
    species: "Mantis Pokémon",
    description:
      "Alguns o chamam de ninja. Seus movimentos - imperceptivelmente rápidos - são suficientes para dividir o ar em dois. É muito popular em Alola.",
    evolution: {
      next: [["212", "trade holding Metal Coat"]],
    },
    profile: {
      height: "1.5 m",
      weight: "56 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Technician", "false"],
        ["Steadfast", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/123.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/123.png",
      hires: "./Imagens/Pokedex/hires/123.png",
    },
  },
  {
    id: 124,
    name: {
      english: "Jynx",
      japanese: "ルージュラ",
      chinese: "迷唇姐",
      french: "Lippoutou",
    },
    type: ["Gelo", "Psíquico"],
    base: {
      HP: 65,
      Attack: 50,
      Defense: 35,
      "Sp. Attack": 115,
      "Sp. Defense": 95,
      Speed: 95,
    },
    species: "Human Shape Pokémon",
    description:
      "Seus estranhos gritos soam como linguagem humana. Há alguns músicos que compõem canções para Jynx cantar.",
    evolution: {
      prev: ["238", "Level 30"],
    },
    profile: {
      height: "1.4 m",
      weight: "40.6 kg",
      egg: ["Human-Like"],
      ability: [
        ["Oblivious", "false"],
        ["Forewarn", "false"],
        ["Dry Skin", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/124.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/124.png",
      hires: "./Imagens/Pokedex/hires/124.png",
    },
  },
  {
    id: 125,
    name: {
      english: "Electabuzz",
      japanese: "エレブー",
      chinese: "电击兽",
      french: "Élektek",
    },
    type: ["Elétrico"],
    base: {
      HP: 65,
      Attack: 83,
      Defense: 57,
      "Sp. Attack": 95,
      "Sp. Defense": 85,
      Speed: 105,
    },
    species: "Elétrico Pokémon",
    description:
      "Embora seja frequentemente culpado por quedas de energia, a verdade é que a causa das quedas é mais frequentemente um erro por parte da companhia elétrica.",
    evolution: {
      prev: ["239", "Level 30"],
      next: [["466", "trade holding Electirizer"]],
    },
    profile: {
      height: "1.1 m",
      weight: "30 kg",
      egg: ["Human-Like"],
      ability: [
        ["Static", "false"],
        ["Vital Spirit", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/125.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/125.png",
      hires: "./Imagens/Pokedex/hires/125.png",
    },
  },
  {
    id: 126,
    name: {
      english: "Magmar",
      japanese: "ブーバー",
      chinese: "鸭嘴火兽",
      french: "Magmar",
    },
    type: ["Fogo"],
    base: {
      HP: 65,
      Attack: 95,
      Defense: 57,
      "Sp. Attack": 100,
      "Sp. Defense": 85,
      Speed: 93,
    },
    species: "SpitFogo Pokémon",
    description:
      "Quanto mais quente o lugar, melhor eles se sentem. Magmar em Alola são considerados mais resistentes do que aqueles em outras áreas.",
    evolution: {
      prev: ["240", "Level 30"],
      next: [["467", "trade holding Magmarizer"]],
    },
    profile: {
      height: "1.3 m",
      weight: "44.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Flame Body", "false"],
        ["Vital Spirit", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/126.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/126.png",
      hires: "./Imagens/Pokedex/hires/126.png",
    },
  },
  {
    id: 127,
    name: {
      english: "Pinsir",
      japanese: "カイロス",
      chinese: "凯罗斯",
      french: "Scarabrute",
    },
    type: ["Inseto"],
    base: {
      HP: 65,
      Attack: 125,
      Defense: 100,
      "Sp. Attack": 55,
      "Sp. Defense": 70,
      Speed: 85,
    },
    species: "Stag Beetle Pokémon",
    description:
      "Embora seja resistente, não suporta bem o frio. Quando cai a noite, ele se enterra na folhagem e dorme.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "55 kg",
      egg: ["Inseto"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Mold Breaker", "false"],
        ["Moxie", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/127.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/127.png",
      hires: "./Imagens/Pokedex/hires/127.png",
    },
  },
  {
    id: 128,
    name: {
      english: "Tauros",
      japanese: "ケンタロス",
      chinese: "肯泰罗",
      french: "Tauros",
    },
    type: ["Normal"],
    base: {
      HP: 75,
      Attack: 100,
      Defense: 95,
      "Sp. Attack": 40,
      "Sp. Defense": 70,
      Speed: 110,
    },
    species: "Wild Bull Pokémon",
    description:
      "O clima parece estar relacionado ao motivo pelo qual Tauros em Alola são um pouco mais calmos do que aqueles em outras regiões.",
    evolution: {},
    profile: {
      height: "1.4 m",
      weight: "88.4 kg",
      egg: ["Field"],
      ability: [
        ["Intimidate", "false"],
        ["Anger Point", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/128.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/128.png",
      hires: "./Imagens/Pokedex/hires/128.png",
    },
  },
  {
    id: 129,
    name: {
      english: "Magikarp",
      japanese: "コイキング",
      chinese: "鲤鱼王",
      french: "Magicarpe",
    },
    type: ["Água"],
    base: {
      HP: 20,
      Attack: 10,
      Defense: 55,
      "Sp. Attack": 15,
      "Sp. Defense": 20,
      Speed: 80,
    },
    species: "Fish Pokémon",
    description:
      "Graças à sua forte resistência à vida, a água suja não os incomoda de forma alguma. Eles vivem em águas em todo o mundo!",
    evolution: {
      next: [["130", "Level 20"]],
    },
    profile: {
      height: "0.9 m",
      weight: "10 kg",
      egg: ["Água 2", "Dragão"],
      ability: [
        ["Swift Swim", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/129.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/129.png",
      hires: "./Imagens/Pokedex/hires/129.png",
    },
  },
  {
    id: 130,
    name: {
      english: "Gyarados",
      japanese: "ギャラドス",
      chinese: "暴鲤龙",
      french: "Léviator",
    },
    type: ["Água", "Voador"],
    base: {
      HP: 95,
      Attack: 125,
      Defense: 79,
      "Sp. Attack": 60,
      "Sp. Defense": 100,
      Speed: 81,
    },
    species: "Atrocious Pokémon",
    description:
      "A energia da evolução estimulou fortemente suas células cerebrais, fazendo com que se tornasse muito feroz.",
    evolution: {
      prev: ["129", "Level 20"],
    },
    profile: {
      height: "6.5 m",
      weight: "235 kg",
      egg: ["Água 2", "Dragão"],
      ability: [
        ["Intimidate", "false"],
        ["Moxie", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/130.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/130.png",
      hires: "./Imagens/Pokedex/hires/130.png",
    },
  },
  {
    id: 131,
    name: {
      english: "Lapras",
      japanese: "ラプラス",
      chinese: "拉普拉斯",
      french: "Lokhlass",
    },
    type: ["Água", "Gelo"],
    base: {
      HP: 130,
      Attack: 85,
      Defense: 80,
      "Sp. Attack": 85,
      "Sp. Defense": 95,
      Speed: 60,
    },
    species: "Transport Pokémon",
    description:
      "Eles foram tão apreciados que agora há uma abundância. A população de Pokémon peixes diminuiu em águas com muitos Lapras.",
    evolution: {},
    profile: {
      height: "2.5 m",
      weight: "220 kg",
      egg: ["Monster", "Água 1"],
      ability: [
        ["Água Absorb", "false"],
        ["Shell Armor", "false"],
        ["Hydration", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/131.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/131.png",
      hires: "./Imagens/Pokedex/hires/131.png",
    },
  },
  {
    id: 132,
    name: {
      english: "Ditto",
      japanese: "メタモン",
      chinese: "百变怪",
      french: "Métamorph",
    },
    type: ["Normal"],
    base: {
      HP: 48,
      Attack: 48,
      Defense: 48,
      "Sp. Attack": 48,
      "Sp. Defense": 48,
      Speed: 48,
    },
    species: "Transform Pokémon",
    description:
      "Ele se transforma em qualquer coisa que vê. Se a coisa em que está se transformando não está bem na frente dele, Ditto depende de sua memória - então às vezes falha.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "4 kg",
      egg: ["Ditto"],
      ability: [
        ["Limber", "false"],
        ["Imposter", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/132.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/132.png",
      hires: "./Imagens/Pokedex/hires/132.png",
    },
  },
  {
    id: 133,
    name: {
      english: "Eevee",
      japanese: "イーブイ",
      chinese: "伊布",
      french: "Évoli",
    },
    type: ["Normal"],
    base: {
      HP: 55,
      Attack: 55,
      Defense: 50,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      Speed: 55,
    },
    species: "Evolution Pokémon",
    description:
      "Seus genes são facilmente influenciados por seu ambiente. Até mesmo seu rosto começa a ficar parecido com o de seu treinador.",
    evolution: {
      next: [
        ["134", "use Água Stone"],
        ["135", "use Thunder Stone"],
        ["136", "use Fogo Stone"],
        ["196", "high Friendship, Daytime"],
        ["197", "high Friendship, Nighttime"],
        ["470", "level up near a Mossy Rocha"],
        ["471", "level up near an Icy Rocha"],
        ["700", "High Affection and knowing Fada move"],
      ],
    },
    profile: {
      height: "0.3 m",
      weight: "6.5 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Adaptability", "false"],
        ["Anticipation", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/133.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/133.png",
      hires: "./Imagens/Pokedex/hires/133.png",
    },
  },
  {
    id: 134,
    name: {
      english: "Vaporeon",
      japanese: "シャワーズ",
      chinese: "水伊布",
      french: "Aquali",
    },
    type: ["Água"],
    base: {
      HP: 130,
      Attack: 65,
      Defense: 60,
      "Sp. Attack": 110,
      "Sp. Defense": 95,
      Speed: 65,
    },
    species: "Bubble Jet Pokémon",
    description:
      "Ele detecta umidade próxima com sua nadadeira. Quando sua nadadeira começa a tremer rapidamente, isso significa que choverá em algumas horas.",
    evolution: {
      prev: ["133", "use Água Stone"],
    },
    profile: {
      height: "1 m",
      weight: "29 kg",
      egg: ["Field"],
      ability: [
        ["Água Absorb", "false"],
        ["Hydration", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/134.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/134.png",
      hires: "./Imagens/Pokedex/hires/134.png",
    },
  },
  {
    id: 135,
    name: {
      english: "Jolteon",
      japanese: "サンダース",
      chinese: "雷伊布",
      french: "Voltali",
    },
    type: ["Elétrico"],
    base: {
      HP: 65,
      Attack: 65,
      Defense: 60,
      "Sp. Attack": 110,
      "Sp. Defense": 95,
      Speed: 130,
    },
    species: "Lightning Pokémon",
    description:
      "Seu pelo fica eriçado, tornando-se como agulhas que atira nos inimigos. Uma vez enfraquecidos, ele os mata com um choque de 10.000 volts.",
    evolution: {
      prev: ["133", "use Thunder Stone"],
    },
    profile: {
      height: "0.8 m",
      weight: "24.5 kg",
      egg: ["Field"],
      ability: [
        ["Volt Absorb", "false"],
        ["Quick Feet", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/135.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/135.png",
      hires: "./Imagens/Pokedex/hires/135.png",
    },
  },
  {
    id: 136,
    name: {
      english: "Flareon",
      japanese: "ブースター",
      chinese: "火伊布",
      french: "Pyroli",
    },
    type: ["Fogo"],
    base: {
      HP: 65,
      Attack: 130,
      Defense: 60,
      "Sp. Attack": 95,
      "Sp. Defense": 110,
      Speed: 65,
    },
    species: "Flame Pokémon",
    description:
      "A câmara de chama dentro de seu corpo se inflama quando Flareon fica agitado, atingindo temperaturas de até 1.650 graus Fahrenheit.",
    evolution: {
      prev: ["133", "use Fogo Stone"],
    },
    profile: {
      height: "0.9 m",
      weight: "25 kg",
      egg: ["Field"],
      ability: [
        ["Flash Fogo", "false"],
        ["Guts", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/136.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/136.png",
      hires: "./Imagens/Pokedex/hires/136.png",
    },
  },
  {
    id: 137,
    name: {
      english: "Porygon",
      japanese: "ポリゴン",
      chinese: "多边兽",
      french: "Porygon",
    },
    type: ["Normal"],
    base: {
      HP: 65,
      Attack: 60,
      Defense: 70,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      Speed: 40,
    },
    species: "Virtual Pokémon",
    description:
      "Foi construído há 20 anos por cientistas que sonhavam em explorar o espaço. Seus sonhos ainda não se realizaram.",
    evolution: {
      next: [["233", "trade holding Upgrade"]],
    },
    profile: {
      height: "0.8 m",
      weight: "36.5 kg",
      egg: ["Mineral"],
      ability: [
        ["Trace", "false"],
        ["Download", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/137.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/137.png",
      hires: "./Imagens/Pokedex/hires/137.png",
    },
  },
  {
    id: 138,
    name: {
      english: "Omanyte",
      japanese: "オムナイト",
      chinese: "菊石兽",
      french: "Amonita",
    },
    type: ["Rocha", "Água"],
    base: {
      HP: 35,
      Attack: 40,
      Defense: 100,
      "Sp. Attack": 90,
      "Sp. Defense": 55,
      Speed: 35,
    },
    species: "Spiral Pokémon",
    description:
      "Foi restaurado a partir de um fóssil antigo. Esses fósseis Helix são escavados em áreas que já foram oceanos há muito, muito tempo.",
    evolution: {
      next: [["139", "Level 40"]],
    },
    profile: {
      height: "0.4 m",
      weight: "7.5 kg",
      egg: ["Água 1", "Água 3"],
      ability: [
        ["Swift Swim", "false"],
        ["Shell Armor", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/138.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/138.png",
      hires: "./Imagens/Pokedex/hires/138.png",
    },
  },
  {
    id: 139,
    name: {
      english: "Omastar",
      japanese: "オムスター",
      chinese: "多刺菊石兽",
      french: "Amonistar",
    },
    type: ["Rocha", "Água"],
    base: {
      HP: 70,
      Attack: 60,
      Defense: 125,
      "Sp. Attack": 115,
      "Sp. Defense": 70,
      Speed: 55,
    },
    species: "Spiral Pokémon",
    description:
      "Ele envolve sua presa em seus tentáculos para imobilizá-la e depois a mata com suas presas afiadas.",
    evolution: {
      prev: ["138", "Level 40"],
    },
    profile: {
      height: "1 m",
      weight: "35 kg",
      egg: ["Água 1", "Água 3"],
      ability: [
        ["Swift Swim", "false"],
        ["Shell Armor", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/139.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/139.png",
      hires: "./Imagens/Pokedex/hires/139.png",
    },
  },
  {
    id: 140,
    name: {
      english: "Kabuto",
      japanese: "カブト",
      chinese: "化石盔",
      french: "Kabuto",
    },
    type: ["Rocha", "Água"],
    base: {
      HP: 30,
      Attack: 80,
      Defense: 90,
      "Sp. Attack": 55,
      "Sp. Defense": 45,
      Speed: 55,
    },
    species: "Shellfish Pokémon",
    description:
      "Este Pokémon tornou-se extinto em todos os lugares, exceto em algumas áreas. Ele se protege com sua casca dura.",
    evolution: {
      next: [["141", "Level 40"]],
    },
    profile: {
      height: "0.5 m",
      weight: "11.5 kg",
      egg: ["Água 1", "Água 3"],
      ability: [
        ["Swift Swim", "false"],
        ["Battle Armor", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/140.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/140.png",
      hires: "./Imagens/Pokedex/hires/140.png",
    },
  },
  {
    id: 141,
    name: {
      english: "Kabutops",
      japanese: "カブトプス",
      chinese: "镰刀盔",
      french: "Kabutops",
    },
    type: ["Rocha", "Água"],
    base: {
      HP: 60,
      Attack: 115,
      Defense: 105,
      "Sp. Attack": 65,
      "Sp. Defense": 70,
      Speed: 80,
    },
    species: "Shellfish Pokémon",
    description:
      "Ele nada a velocidades de aproximadamente 29 nós, fechando rapidamente sua presa e cortando-a com suas foGelos para matá-la.",
    evolution: {
      prev: ["140", "Level 40"],
    },
    profile: {
      height: "1.3 m",
      weight: "40.5 kg",
      egg: ["Água 1", "Água 3"],
      ability: [
        ["Swift Swim", "false"],
        ["Battle Armor", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/141.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/141.png",
      hires: "./Imagens/Pokedex/hires/141.png",
    },
  },
  {
    id: 142,
    name: {
      english: "Aerodactyl",
      japanese: "プテラ",
      chinese: "化石翼龙",
      french: "Ptéra",
    },
    type: ["Rocha", "Voador"],
    base: {
      HP: 80,
      Attack: 105,
      Defense: 65,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      Speed: 130,
    },
    species: "Fossil Pokémon",
    description:
      "Ele voou pelos céus abertos sobre o antigo continente como se fossem seus próprios. Quando tocou o solo, sua caminhada estava fraca e lenta.",
    evolution: {},
    profile: {
      height: "1.8 m",
      weight: "59 kg",
      egg: ["Voador"],
      ability: [
        ["Rocha Head", "false"],
        ["Pressure", "false"],
        ["Unnerve", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/142.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/142.png",
      hires: "./Imagens/Pokedex/hires/142.png",
    },
  },
  {
    id: 143,
    name: {
      english: "Snorlax",
      japanese: "カビゴン",
      chinese: "卡比兽",
      french: "Ronflex",
    },
    type: ["Normal"],
    base: {
      HP: 160,
      Attack: 110,
      Defense: 65,
      "Sp. Attack": 65,
      "Sp. Defense": 110,
      Speed: 30,
    },
    species: "Sleeping Pokémon",
    description:
      "Ele não tem interesse em outra coisa senão comer. Mesmo que você suba em seu estômago enquanto ele está tirando uma soneca, ele não parece se importar nada!",
    evolution: {
      prev: ["446", "high Friendship"],
    },
    profile: {
      height: "2.1 m",
      weight: "460 kg",
      egg: ["Monster"],
      ability: [
        ["Immunity", "false"],
        ["Thick Fat", "false"],
        ["Gluttony", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/143.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/143.png",
      hires: "./Imagens/Pokedex/hires/143.png",
    },
  },
  {
    id: 144,
    name: {
      english: "Articuno",
      japanese: "フリーザー",
      chinese: "急冻鸟",
      french: "Artikodin",
    },
    type: ["Gelo", "Voador"],
    base: {
      HP: 90,
      Attack: 85,
      Defense: 100,
      "Sp. Attack": 95,
      "Sp. Defense": 125,
      Speed: 85,
    },
    species: "Freeze Pokémon",
    description:
      "Articuno é um Pokémon lendário que pode controlar o gelo. O bater de suas asas gela o ar. Como resultado, diz-se que quando este Pokémon voa, nevará.",
    evolution: {},
    profile: {
      height: "1.7 m",
      weight: "55.4 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Snow Cloak", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/144.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/144.png",
      hires: "./Imagens/Pokedex/hires/144.png",
    },
  },
  {
    id: 145,
    name: {
      english: "Zapdos",
      japanese: "サンダー",
      chinese: "闪电鸟",
      french: "Électhor",
    },
    type: ["Elétrico", "Voador"],
    base: {
      HP: 90,
      Attack: 90,
      Defense: 85,
      "Sp. Attack": 125,
      "Sp. Defense": 90,
      Speed: 100,
    },
    species: "Elétrico Pokémon",
    description:
      "Zapdos é um Pokémon lendário que tem a capacidade de controlar a eletricidade. Geralmente vive em nuvens de tempestade. O Pokémon ganha poder se for atingido por raios.",
    evolution: {},
    profile: {
      height: "1.6 m",
      weight: "52.6 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Static", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/145.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/145.png",
      hires: "./Imagens/Pokedex/hires/145.png",
    },
  },
  {
    id: 146,
    name: {
      english: "Moltres",
      japanese: "ファイヤー",
      chinese: "火焰鸟",
      french: "Sulfura",
    },
    type: ["Fogo", "Voador"],
    base: {
      HP: 90,
      Attack: 100,
      Defense: 90,
      "Sp. Attack": 125,
      "Sp. Defense": 85,
      Speed: 90,
    },
    species: "Flame Pokémon",
    description:
      "Moltres é um Pokémon lendário que tem a capacidade de controlar o fogo. Diz-se que se este Pokémon for ferido, ele mergulha seu corpo no magma derretido de um vulcão para queimar e se curar.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "60 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Flame Body", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/146.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/146.png",
      hires: "./Imagens/Pokedex/hires/146.png",
    },
  },
  {
    id: 147,
    name: {
      english: "Dratini",
      japanese: "ミニリュウ",
      chinese: "迷你龙",
      french: "Minidraco",
    },
    type: ["Dragão"],
    base: {
      HP: 41,
      Attack: 64,
      Defense: 45,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 50,
    },
    species: "Dragão Pokémon",
    description:
      "Ele muda de pele - quase diariamente - e cresce. Sua pele é macia logo após ser derramada.",
    evolution: {
      next: [["148", "Level 30"]],
    },
    profile: {
      height: "1.8 m",
      weight: "3.3 kg",
      egg: ["Água 1", "Dragão"],
      ability: [
        ["Shed Skin", "false"],
        ["Marvel Scale", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/147.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/147.png",
      hires: "./Imagens/Pokedex/hires/147.png",
    },
  },
  {
    id: 148,
    name: {
      english: "Dragãoair",
      japanese: "ハクリュー",
      chinese: "哈克龙",
      french: "Draco",
    },
    type: ["Dragão"],
    base: {
      HP: 61,
      Attack: 84,
      Defense: 65,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      Speed: 70,
    },
    species: "Dragão Pokémon",
    description:
      "Alguns dizem que, se você o vir no início do ano, voando pelo céu e torcendo seu corpo, você terá saúde o ano todo.",
    evolution: {
      prev: ["147", "Level 30"],
      next: [["149", "Level 55"]],
    },
    profile: {
      height: "4 m",
      weight: "16.5 kg",
      egg: ["Água 1", "Dragão"],
      ability: [
        ["Shed Skin", "false"],
        ["Marvel Scale", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/148.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/148.png",
      hires: "./Imagens/Pokedex/hires/148.png",
    },
  },
  {
    id: 149,
    name: {
      english: "Dragãoite",
      japanese: "カイリュー",
      chinese: "快龙",
      french: "Dracolosse",
    },
    type: ["Dragão", "Voador"],
    base: {
      HP: 91,
      Attack: 134,
      Defense: 95,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 80,
    },
    species: "Dragão Pokémon",
    description:
      "Você ouvirá muitas histórias sobre este Pokémon de bom coração resgatando pessoas ou Pokémon que estão se afogando.",
    evolution: {
      prev: ["148", "Level 55"],
    },
    profile: {
      height: "2.2 m",
      weight: "210 kg",
      egg: ["Água 1", "Dragão"],
      ability: [
        ["Inner Focus", "false"],
        ["Multiscale", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/149.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/149.png",
      hires: "./Imagens/Pokedex/hires/149.png",
    },
  },
  {
    id: 150,
    name: {
      english: "Mewtwo",
      japanese: "ミュウツー",
      chinese: "超梦",
      french: "Mewtwo",
    },
    type: ["Psíquico"],
    base: {
      HP: 106,
      Attack: 110,
      Defense: 90,
      "Sp. Attack": 154,
      "Sp. Defense": 90,
      Speed: 130,
    },
    species: "Genetic Pokémon",
    description:
      "Mewtwo é um Pokémon que foi criado por manipulação genética. No entanto, mesmo que o poder científico dos humanos tenha criado o corpo deste Pokémon, eles falharam em dotar Mewtwo com um coração compassivo.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "122 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Unnerve", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/150.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/150.png",
      hires: "./Imagens/Pokedex/hires/150.png",
    },
  },
  {
    id: 151,
    name: {
      english: "Mew",
      japanese: "ミュウ",
      chinese: "梦幻",
      french: "Mew",
    },
    type: ["Psíquico"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 100,
    },
    species: "New Species Pokémon",
    description:
      "Diz-se que Mew possui a composição genética de todos os Pokémon. É capaz de se tornar invisível à vontade, por isso evita completamente ser notado mesmo que se aproxime das pessoas.",
    evolution: {},
    profile: {
      height: "0.4 m",
      weight: "4 kg",
      egg: ["Undiscovered"],
      ability: [["Synchronize", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/151.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/151.png",
      hires: "./Imagens/Pokedex/hires/151.png",
    },
  },
  {
    id: 152,
    name: {
      english: "Chikorita",
      japanese: "チコリータ",
      chinese: "菊草叶",
      french: "Germignon",
    },
    type: ["Grama"],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 65,
      "Sp. Attack": 49,
      "Sp. Defense": 65,
      Speed: 45,
    },
    species: "Leaf Pokémon",
    description:
      "Na batalha, Chikorita acena com sua folha ao redor para manter o inimigo à distância. No entanto, uma doce fragrância também emana da folha, acalmando o Pokémon que está lutando e criando uma atmosfera aconchegante e amigável ao redor.",
    evolution: {
      next: [["153", "Level 16"]],
    },
    profile: {
      height: "0.9 m",
      weight: "6.4 kg",
      egg: ["Monster", "Grama"],
      ability: [
        ["Overgrow", "false"],
        ["Leaf Guard", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/152.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/152.png",
      hires: "./Imagens/Pokedex/hires/152.png",
    },
  },
  {
    id: 153,
    name: {
      english: "Bayleef",
      japanese: "ベイリーフ",
      chinese: "月桂叶",
      french: "Macronium",
    },
    type: ["Grama"],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 80,
      "Sp. Attack": 63,
      "Sp. Defense": 80,
      Speed: 60,
    },
    species: "Leaf Pokémon",
    description:
      "O pescoço de Bayleef é cercado por folhas enroladas. Dentro de cada folha tubular há um pequeno broto de uma árvore. A fragrância deste broto deixa as pessoas animadas.",
    evolution: {
      prev: ["152", "Level 16"],
      next: [["154", "Level 32"]],
    },
    profile: {
      height: "1.2 m",
      weight: "15.8 kg",
      egg: ["Monster", "Grama"],
      ability: [
        ["Overgrow", "false"],
        ["Leaf Guard", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/153.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/153.png",
      hires: "./Imagens/Pokedex/hires/153.png",
    },
  },
  {
    id: 154,
    name: {
      english: "Meganium",
      japanese: "メガニウム",
      chinese: "大竺葵",
      french: "Méganium",
    },
    type: ["Grama"],
    base: {
      HP: 80,
      Attack: 82,
      Defense: 100,
      "Sp. Attack": 83,
      "Sp. Defense": 100,
      Speed: 80,
    },
    species: "Herb Pokémon",
    description:
      "A fragrância da flor de Meganium acalma e acalma as emoções. Na batalha, este Pokémon exala mais de seu aroma calmante para embotar o espírito de luta do inimigo.",
    evolution: {
      prev: ["153", "Level 32"],
    },
    profile: {
      height: "1.8 m",
      weight: "100.5 kg",
      egg: ["Monster", "Grama"],
      ability: [
        ["Overgrow", "false"],
        ["Leaf Guard", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/154.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/154.png",
      hires: "./Imagens/Pokedex/hires/154.png",
    },
  },
  {
    id: 155,
    name: {
      english: "Cyndaquil",
      japanese: "ヒノアラシ",
      chinese: "火球鼠",
      french: "HérGelondre",
    },
    type: ["Fogo"],
    base: {
      HP: 39,
      Attack: 52,
      Defense: 43,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      Speed: 65,
    },
    species: "Fogo Mouse Pokémon",
    description:
      "Cyndaquil se protege acendendo as chamas em suas costas. As chamas são vigorosas se o Pokémon estiver com raiva. No entanto, se estiver cansado, as chamas espirram fitosamente com combustão incompleta.",
    evolution: {
      next: [["156", "Level 14"]],
    },
    profile: {
      height: "0.5 m",
      weight: "7.9 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Flash Fogo", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/155.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/155.png",
      hires: "./Imagens/Pokedex/hires/155.png",
    },
  },
  {
    id: 156,
    name: {
      english: "Quilava",
      japanese: "マグマラシ",
      chinese: "火岩鼠",
      french: "Feurisson",
    },
    type: ["Fogo"],
    base: {
      HP: 58,
      Attack: 64,
      Defense: 58,
      "Sp. Attack": 80,
      "Sp. Defense": 65,
      Speed: 80,
    },
    species: "Volcano Pokémon",
    description:
      "Quilava mantém seus inimigos à distância com a intensidade de suas chamas e rajadas de ar superaquecido. Este Pokémon aplica sua notável agilidade para desviar ataques mesmo enquanto queima o inimigo com chamas.",
    evolution: {
      prev: ["155", "Level 14"],
      next: [["157", "Level 36"]],
    },
    profile: {
      height: "0.9 m",
      weight: "19 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Flash Fogo", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/156.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/156.png",
      hires: "./Imagens/Pokedex/hires/156.png",
    },
  },
  {
    id: 157,
    name: {
      english: "Typhlosion",
      japanese: "バクフーン",
      chinese: "火暴兽",
      french: "Typhlosion",
    },
    type: ["Fogo"],
    base: {
      HP: 78,
      Attack: 84,
      Defense: 78,
      "Sp. Attack": 109,
      "Sp. Defense": 85,
      Speed: 100,
    },
    species: "Volcano Pokémon",
    description:
      "Typhlosion se esconde atrás de uma névoa de calor cintilante que cria usando suas chamas intensamente quentes. Este Pokémon cria explosões flamejantes que queimam tudo em cinzas.",
    evolution: {
      prev: ["156", "Level 36"],
    },
    profile: {
      height: "1.7 m",
      weight: "79.5 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Flash Fogo", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/157.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/157.png",
      hires: "./Imagens/Pokedex/hires/157.png",
    },
  },
  {
    id: 158,
    name: {
      english: "Totodile",
      japanese: "ワニノコ",
      chinese: "小锯鳄",
      french: "Kaiminus",
    },
    type: ["Água"],
    base: {
      HP: 50,
      Attack: 65,
      Defense: 64,
      "Sp. Attack": 44,
      "Sp. Defense": 48,
      Speed: 43,
    },
    species: "Big Jaw Pokémon",
    description:
      "Apesar do tamanho reduzido de seu corpo, as mandíbulas de Totodile são muito poderosas. Embora o Pokémon possa pensar que está apenas mordendo brincando, sua mordida tem força suficiente para causar ferimentos graves.",
    evolution: {
      next: [["159", "Level 18"]],
    },
    profile: {
      height: "0.6 m",
      weight: "9.5 kg",
      egg: ["Monster", "Água 1"],
      ability: [
        ["Torrent", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/158.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/158.png",
      hires: "./Imagens/Pokedex/hires/158.png",
    },
  },
  {
    id: 159,
    name: {
      english: "Croconaw",
      japanese: "アリゲイツ",
      chinese: "蓝鳄",
      french: "Crocrodil",
    },
    type: ["Água"],
    base: {
      HP: 65,
      Attack: 80,
      Defense: 80,
      "Sp. Attack": 59,
      "Sp. Defense": 63,
      Speed: 58,
    },
    species: "Big Jaw Pokémon",
    description:
      "Uma vez que Croconaw prendeu suas mandíbulas em seu inimigo, ele absolutamente não soltará. Como as pontas de suas presas são bifurcadas para trás como anzol de pesca com farpas, elas se tornam impossíveis de remover quando afundaram.",
    evolution: {
      prev: ["158", "Level 18"],
      next: [["160", "Level 30"]],
    },
    profile: {
      height: "1.1 m",
      weight: "25 kg",
      egg: ["Monster", "Água 1"],
      ability: [
        ["Torrent", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/159.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/159.png",
      hires: "./Imagens/Pokedex/hires/159.png",
    },
  },
  {
    id: 160,
    name: {
      english: "Feraligator",
      japanese: "オーダイル",
      chinese: "大力鳄",
      french: "Aligatueur",
    },
    type: ["Água"],
    base: {
      HP: 85,
      Attack: 105,
      Defense: 100,
      "Sp. Attack": 79,
      "Sp. Defense": 83,
      Speed: 78,
    },
    species: "Big Jaw Pokémon",
    description:
      "Feraligator intimida seus inimigos abrindo sua enorme boca. Na batalha, ele chuta o chão com força com suas grossas e poderosas pernas traseiras para atacar o inimigo em uma velocidade incrível.",
    evolution: {
      prev: ["159", "Level 30"],
    },
    profile: {
      height: "2.3 m",
      weight: "88.8 kg",
      egg: ["Monster", "Água 1"],
      ability: [
        ["Torrent", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/160.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/160.png",
      hires: "./Imagens/Pokedex/hires/160.png",
    },
  },
  {
    id: 161,
    name: {
      english: "Sentret",
      japanese: "オタチ",
      chinese: "尾立",
      french: "Fouinette",
    },
    type: ["Normal"],
    base: {
      HP: 35,
      Attack: 46,
      Defense: 34,
      "Sp. Attack": 35,
      "Sp. Defense": 45,
      Speed: 20,
    },
    species: "Scout Pokémon",
    description:
      "Quando Sentret dorme, faz isso enquanto outro fica de guarda. O sentinela acorda os outros ao primeiro sinal de perigo. Quando este Pokémon se separa de sua matilha, fica incapaz de dormir devido ao medo.",
    evolution: {
      next: [["162", "Level 15"]],
    },
    profile: {
      height: "0.8 m",
      weight: "6 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Keen Eye", "false"],
        ["Frisk", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/161.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/161.png",
      hires: "./Imagens/Pokedex/hires/161.png",
    },
  },
  {
    id: 162,
    name: {
      english: "Furret",
      japanese: "オオタチ",
      chinese: "大尾立",
      french: "Fouinar",
    },
    type: ["Normal"],
    base: {
      HP: 85,
      Attack: 76,
      Defense: 64,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      Speed: 90,
    },
    species: "Long Body Pokémon",
    description:
      "Furret tem uma construção muito fina. Quando atacado, pode se contorcer esguio através de espaços estreitos e escapar. Apesar de seus membros curtos, este Pokémon é muito ágil e veloz.",
    evolution: {
      prev: ["161", "Level 15"],
    },
    profile: {
      height: "1.8 m",
      weight: "32.5 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Keen Eye", "false"],
        ["Frisk", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/162.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/162.png",
      hires: "./Imagens/Pokedex/hires/162.png",
    },
  },
  {
    id: 163,
    name: {
      english: "Hoothoot",
      japanese: "ホーホー",
      chinese: "咕咕",
      french: "Hoothoot",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 60,
      Attack: 30,
      Defense: 30,
      "Sp. Attack": 36,
      "Sp. Defense": 56,
      Speed: 50,
    },
    species: "Owl Pokémon",
    description:
      "Ele grita na mesma hora todos os dias. Muito tempo atrás, as pessoas o apreciavam e o consideravam um mensageiro divino enviado para dizer as horas.",
    evolution: {
      next: [["164", "Level 20"]],
    },
    profile: {
      height: "0.7 m",
      weight: "21.2 kg",
      egg: ["Voador"],
      ability: [
        ["Insomnia", "false"],
        ["Keen Eye", "false"],
        ["Tinted Lens", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/163.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/163.png",
      hires: "./Imagens/Pokedex/hires/163.png",
    },
  },
  {
    id: 164,
    name: {
      english: "Noctowl",
      japanese: "ヨルノズク",
      chinese: "猫头夜鹰",
      french: "Noarfang",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 100,
      Attack: 50,
      Defense: 50,
      "Sp. Attack": 86,
      "Sp. Defense": 96,
      Speed: 70,
    },
    species: "Owl Pokémon",
    description:
      "Quando ele vira a cabeça completamente de cabeça para baixo, você sabe que está incomodado com algo. Se você não deixá-lo em paz, ele vai bicar você.",
    evolution: {
      prev: ["163", "Level 20"],
    },
    profile: {
      height: "1.6 m",
      weight: "40.8 kg",
      egg: ["Voador"],
      ability: [
        ["Insomnia", "false"],
        ["Keen Eye", "false"],
        ["Tinted Lens", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/164.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/164.png",
      hires: "./Imagens/Pokedex/hires/164.png",
    },
  },
  {
    id: 165,
    name: {
      english: "Ledyba",
      japanese: "レディバ",
      chinese: "芭瓢虫",
      french: "Coxy",
    },
    type: ["Inseto", "Voador"],
    base: {
      HP: 40,
      Attack: 20,
      Defense: 30,
      "Sp. Attack": 40,
      "Sp. Defense": 80,
      Speed: 55,
    },
    species: "Five Star Pokémon",
    description:
      "Esses Pokémon muito covardes se unem e usam Reflexo para proteger seu ninho.",
    evolution: {
      next: [["166", "Level 18"]],
    },
    profile: {
      height: "1 m",
      weight: "10.8 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Early Bird", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/165.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/165.png",
      hires: "./Imagens/Pokedex/hires/165.png",
    },
  },
  {
    id: 166,
    name: {
      english: "Ledian",
      japanese: "レディアン",
      chinese: "安瓢虫",
      french: "Coxyclaque",
    },
    type: ["Inseto", "Voador"],
    base: {
      HP: 55,
      Attack: 35,
      Defense: 50,
      "Sp. Attack": 55,
      "Sp. Defense": 110,
      Speed: 85,
    },
    species: "Five Star Pokémon",
    description:
      "Ele voa pelo céu noturno, espalhando poeira brilhante. De acordo com alguns, se essa poeira grudar em você, coisas boas acontecerão com você.",
    evolution: {
      prev: ["165", "Level 18"],
    },
    profile: {
      height: "1.4 m",
      weight: "35.6 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Early Bird", "false"],
        ["Iron Fist", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/166.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/166.png",
      hires: "./Imagens/Pokedex/hires/166.png",
    },
  },
  {
    id: 167,
    name: {
      english: "Spinarak",
      japanese: "イトマル",
      chinese: "圆丝蛛",
      french: "Mimigal",
    },
    type: ["Inseto", "Venenoso"],
    base: {
      HP: 40,
      Attack: 60,
      Defense: 40,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 30,
    },
    species: "String Spit Pokémon",
    description:
      "Embora o veneno de suas presas não seja tão forte, é potente o suficiente para enfraquecer a presa que fica presa em sua teia.",
    evolution: {
      next: [["168", "Level 22"]],
    },
    profile: {
      height: "0.5 m",
      weight: "8.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Insomnia", "false"],
        ["Sniper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/167.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/167.png",
      hires: "./Imagens/Pokedex/hires/167.png",
    },
  },
  {
    id: 168,
    name: {
      english: "Ariados",
      japanese: "アリアドス",
      chinese: "阿利多斯",
      french: "Migalos",
    },
    type: ["Inseto", "Venenoso"],
    base: {
      HP: 70,
      Attack: 90,
      Defense: 70,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      Speed: 40,
    },
    species: "Long Leg Pokémon",
    description:
      "Ele cospe fios de sua boca para pegar sua presa. Quando cai a noite, ele deixa sua teia para caçar agressivamente.",
    evolution: {
      prev: ["167", "Level 22"],
    },
    profile: {
      height: "1.1 m",
      weight: "33.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Insomnia", "false"],
        ["Sniper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/168.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/168.png",
      hires: "./Imagens/Pokedex/hires/168.png",
    },
  },
  {
    id: 169,
    name: {
      english: "Crobat",
      japanese: "クロバット",
      chinese: "叉字蝠",
      french: "Nostenfer",
    },
    type: ["Venenoso", "Voador"],
    base: {
      HP: 85,
      Attack: 90,
      Defense: 80,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      Speed: 130,
    },
    species: "Bat Pokémon",
    description:
      "Ele se alimenta do sangue de pessoas e Pokémon vivos. Se não puder beber sangue por um curto período, fica fraco e incapaz de voar.",
    evolution: {
      prev: ["42", "high Friendship"],
    },
    profile: {
      height: "1.8 m",
      weight: "75 kg",
      egg: ["Voador"],
      ability: [
        ["Inner Focus", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/169.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/169.png",
      hires: "./Imagens/Pokedex/hires/169.png",
    },
  },
  {
    id: 170,
    name: {
      english: "Chinchou",
      japanese: "チョンチー",
      chinese: "灯笼鱼",
      french: "Loupio",
    },
    type: ["Água", "Elétrico"],
    base: {
      HP: 75,
      Attack: 38,
      Defense: 38,
      "Sp. Attack": 56,
      "Sp. Defense": 56,
      Speed: 67,
    },
    species: "Angler Pokémon",
    description:
      "Chinchou piscam suas antenas brilhantes um para o outro para reivindicar seu território respectivo.",
    evolution: {
      next: [["171", "Level 27"]],
    },
    profile: {
      height: "0.5 m",
      weight: "12 kg",
      egg: ["Água 2"],
      ability: [
        ["Volt Absorb", "false"],
        ["Illuminate", "false"],
        ["Água Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/170.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/170.png",
      hires: "./Imagens/Pokedex/hires/170.png",
    },
  },
  {
    id: 171,
    name: {
      english: "Lanturn",
      japanese: "ランターン",
      chinese: "电灯怪",
      french: "Lanturn",
    },
    type: ["Água", "Elétrico"],
    base: {
      HP: 125,
      Attack: 58,
      Defense: 58,
      "Sp. Attack": 76,
      "Sp. Defense": 76,
      Speed: 67,
    },
    species: "Light Pokémon",
    description:
      "Ele vive nas profundezas do oceano. Ele cega sua presa com luz, usando o momento em que ficam deslumbrados para engoli-los inteiros.",
    evolution: {
      prev: ["170", "Level 27"],
    },
    profile: {
      height: "1.2 m",
      weight: "22.5 kg",
      egg: ["Água 2"],
      ability: [
        ["Volt Absorb", "false"],
        ["Illuminate", "false"],
        ["Água Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/171.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/171.png",
      hires: "./Imagens/Pokedex/hires/171.png",
    },
  },
  {
    id: 172,
    name: {
      english: "Pichu",
      japanese: "ピチュー",
      chinese: "皮丘",
      french: "Pichu",
    },
    type: ["Elétrico"],
    base: {
      HP: 20,
      Attack: 40,
      Defense: 15,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 60,
    },
    species: "Tiny Mouse Pokémon",
    description:
      "Ele tem sacos elétricos em suas bochechas. Quando estão totalmente carregados, Pichu brinca muito energicamente.",
    evolution: {
      next: [["25", "high Friendship"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Static", "false"],
        ["Lightning Rod", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/172.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/172.png",
      hires: "./Imagens/Pokedex/hires/172.png",
    },
  },
  {
    id: 173,
    name: {
      english: "Cleffa",
      japanese: "ピィ",
      chinese: "皮宝宝",
      french: "Mélo",
    },
    type: ["Fada"],
    base: {
      HP: 50,
      Attack: 25,
      Defense: 28,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      Speed: 15,
    },
    species: "Star Shape Pokémon",
    description:
      "Diz-se que veio aqui montado em uma estrela cadente, Cleffa parece aparecer em lugares onde meteoritos caíram no passado.",
    evolution: {
      next: [["35", "high Friendship"]],
    },
    profile: {
      height: "0.3 m",
      weight: "3 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Cute Charm", "false"],
        ["Magic Guard", "false"],
        ["Friend Guard", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/173.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/173.png",
      hires: "./Imagens/Pokedex/hires/173.png",
    },
  },
  {
    id: 174,
    name: {
      english: "Igglybuff",
      japanese: "ププリン",
      chinese: "宝宝丁",
      french: "Toudoudou",
    },
    type: ["Normal", "Fada"],
    base: {
      HP: 90,
      Attack: 30,
      Defense: 15,
      "Sp. Attack": 40,
      "Sp. Defense": 20,
      Speed: 15,
    },
    species: "Balloon Pokémon",
    description:
      "Deixado à própria sorte, ele constantemente praticará canto. Você deve fazê-lo dar uma pausa para não machucar sua garganta.",
    evolution: {
      next: [["39", "high Friendship"]],
    },
    profile: {
      height: "0.3 m",
      weight: "1 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Cute Charm", "false"],
        ["Competitive", "false"],
        ["Friend Guard", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/174.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/174.png",
      hires: "./Imagens/Pokedex/hires/174.png",
    },
  },
  {
    id: 175,
    name: {
      english: "Togepi",
      japanese: "トゲピー",
      chinese: "波克比",
      french: "Togepi",
    },
    type: ["Fada"],
    base: {
      HP: 35,
      Attack: 20,
      Defense: 65,
      "Sp. Attack": 40,
      "Sp. Defense": 65,
      Speed: 20,
    },
    species: "Spike Ball Pokémon",
    description:
      "Como sua energia, Togepi usa as emoções positivas de compaixão e prazer exsudadas por pessoas e Pokémon. Este Pokémon armazena sentimentos de felicidade dentro de sua casca e depois os compartilha com os outros.",
    evolution: {
      next: [["176", "high Friendship"]],
    },
    profile: {
      height: "0.3 m",
      weight: "1.5 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Hustle", "false"],
        ["Serene Grace", "false"],
        ["Super Luck", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/175.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/175.png",
      hires: "./Imagens/Pokedex/hires/175.png",
    },
  },
  {
    id: 176,
    name: {
      english: "Togetic",
      japanese: "トゲチック",
      chinese: "波克基古",
      french: "Togetic",
    },
    type: ["Fada", "Voador"],
    base: {
      HP: 55,
      Attack: 40,
      Defense: 85,
      "Sp. Attack": 80,
      "Sp. Defense": 105,
      Speed: 40,
    },
    species: "Happiness Pokémon",
    description:
      "Diz-se que Togetic é um Pokémon que traz boa sorte. Quando o Pokémon avista alguém que é puro de coração, diz-se que ele aparece e compartilha sua felicidade com essa pessoa.",
    evolution: {
      prev: ["175", "high Friendship"],
      next: [["468", "use Shiny Stone"]],
    },
    profile: {
      height: "0.6 m",
      weight: "3.2 kg",
      egg: ["Voador", "Fada"],
      ability: [
        ["Hustle", "false"],
        ["Serene Grace", "false"],
        ["Super Luck", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/176.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/176.png",
      hires: "./Imagens/Pokedex/hires/176.png",
    },
  },
  {
    id: 177,
    name: {
      english: "Natu",
      japanese: "ネイティ",
      chinese: "天然雀",
      french: "Natu",
    },
    type: ["Psíquico", "Voador"],
    base: {
      HP: 40,
      Attack: 50,
      Defense: 45,
      "Sp. Attack": 70,
      "Sp. Defense": 45,
      Speed: 70,
    },
    species: "Tiny Bird Pokémon",
    description:
      "O olhar em seus olhos dá a impressão de que ele está observando você cuidadosamente. Se você se aproximar dele, Natu pulará para longe.",
    evolution: {
      next: [["178", "Level 25"]],
    },
    profile: {
      height: "0.2 m",
      weight: "2 kg",
      egg: ["Voador"],
      ability: [
        ["Synchronize", "false"],
        ["Early Bird", "false"],
        ["Magic Bounce", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/177.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/177.png",
      hires: "./Imagens/Pokedex/hires/177.png",
    },
  },
  {
    id: 178,
    name: {
      english: "Xatu",
      japanese: "ネイティオ",
      chinese: "天然鸟",
      french: "Xatu",
    },
    type: ["Psíquico", "Voador"],
    base: {
      HP: 65,
      Attack: 75,
      Defense: 70,
      "Sp. Attack": 95,
      "Sp. Defense": 70,
      Speed: 95,
    },
    species: "Mystic Pokémon",
    description:
      "Embora possa ver o futuro, não tem desejo de mudá-lo, o que provavelmente é por isso que permanece imóvel o tempo todo.",
    evolution: {
      prev: ["177", "Level 25"],
    },
    profile: {
      height: "1.5 m",
      weight: "15 kg",
      egg: ["Voador"],
      ability: [
        ["Synchronize", "false"],
        ["Early Bird", "false"],
        ["Magic Bounce", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/178.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/178.png",
      hires: "./Imagens/Pokedex/hires/178.png",
    },
  },
  {
    id: 179,
    name: {
      english: "Mareep",
      japanese: "メリープ",
      chinese: "咩利羊",
      french: "Wattouat",
    },
    type: ["Elétrico"],
    base: {
      HP: 55,
      Attack: 40,
      Defense: 40,
      "Sp. Attack": 65,
      "Sp. Defense": 45,
      Speed: 35,
    },
    species: "Wool Pokémon",
    description:
      "Esfregar sua lã gera eletricidade. Você vai querer acariciá-lo porque é fofo, mas se você usar sua mão nua, você levará um choque doloroso.",
    evolution: {
      next: [["180", "Level 15"]],
    },
    profile: {
      height: "0.6 m",
      weight: "7.8 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Static", "false"],
        ["Plus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/179.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/179.png",
      hires: "./Imagens/Pokedex/hires/179.png",
    },
  },
  {
    id: 180,
    name: {
      english: "Flaaffy",
      japanese: "モココ",
      chinese: "茸茸羊",
      french: "Lainergie",
    },
    type: ["Elétrico"],
    base: {
      HP: 70,
      Attack: 55,
      Defense: 55,
      "Sp. Attack": 80,
      "Sp. Defense": 60,
      Speed: 45,
    },
    species: "Wool Pokémon",
    description:
      "Ele armazena eletricidade em sua lã fofa. Se armazenar demais, começará a ficar careca nessas manchas.",
    evolution: {
      prev: ["179", "Level 15"],
      next: [["181", "Level 30"]],
    },
    profile: {
      height: "0.8 m",
      weight: "13.3 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Static", "false"],
        ["Plus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/180.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/180.png",
      hires: "./Imagens/Pokedex/hires/180.png",
    },
  },
  {
    id: 181,
    name: {
      english: "Ampharos",
      japanese: "デンリュウ",
      chinese: "电龙",
      french: "Pharamp",
    },
    type: ["Elétrico"],
    base: {
      HP: 90,
      Attack: 75,
      Defense: 85,
      "Sp. Attack": 115,
      "Sp. Defense": 90,
      Speed: 55,
    },
    species: "Light Pokémon",
    description:
      "Sua cauda brilha forte e forte. É valorizada desde há muito tempo como um farol para marinheiros.",
    evolution: {
      prev: ["180", "Level 30"],
    },
    profile: {
      height: "1.4 m",
      weight: "61.5 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Static", "false"],
        ["Plus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/181.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/181.png",
      hires: "./Imagens/Pokedex/hires/181.png",
    },
  },
  {
    id: 182,
    name: {
      english: "Bellossom",
      japanese: "キレイハナ",
      chinese: "美丽花",
      french: "Joliflor",
    },
    type: ["Grama"],
    base: {
      HP: 75,
      Attack: 80,
      Defense: 95,
      "Sp. Attack": 90,
      "Sp. Defense": 100,
      Speed: 50,
    },
    species: "Flower Pokémon",
    description:
      "Uma Bellossom cultiva flores mais bonitas se evoluiu de um Gloom fedorento - quanto mais fedorento melhor. À noite, este Pokémon fecha suas pétalas e vai dormir.",
    evolution: {
      prev: ["44", "use Sun Stone"],
    },
    profile: {
      height: "0.4 m",
      weight: "5.8 kg",
      egg: ["Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Healer", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/182.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/182.png",
      hires: "./Imagens/Pokedex/hires/182.png",
    },
  },
  {
    id: 183,
    name: {
      english: "Marill",
      japanese: "マリル",
      chinese: "玛力露",
      french: "Marill",
    },
    type: ["Água", "Fada"],
    base: {
      HP: 70,
      Attack: 20,
      Defense: 50,
      "Sp. Attack": 20,
      "Sp. Defense": 50,
      Speed: 40,
    },
    species: "Aqua Mouse Pokémon",
    description:
      "Ao pescar comida na beira de um riacho de fluxo rápido, Marill envolve sua cauda ao redor do tronco de uma árvore. A cauda deste Pokémon é flexível e configurada para se esticar.",
    evolution: {
      prev: ["298", "high Friendship"],
      next: [["184", "Level 18"]],
    },
    profile: {
      height: "0.4 m",
      weight: "8.5 kg",
      egg: ["Água 1", "Fada"],
      ability: [
        ["Thick Fat", "false"],
        ["Huge Power", "false"],
        ["Sap Sipper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/183.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/183.png",
      hires: "./Imagens/Pokedex/hires/183.png",
    },
  },
  {
    id: 184,
    name: {
      english: "Azumarill",
      japanese: "マリルリ",
      chinese: "玛力露丽",
      french: "Azumarill",
    },
    type: ["Água", "Fada"],
    base: {
      HP: 100,
      Attack: 50,
      Defense: 80,
      "Sp. Attack": 60,
      "Sp. Defense": 80,
      Speed: 50,
    },
    species: "Aqua Rabbit Pokémon",
    description:
      "Azumarill pode fazer balões de ar. Ele faz esses balões de ar se avistar um Pokémon se afogando. Os balões de ar permitem que o Pokémon com problemas respire.",
    evolution: {
      prev: ["183", "Level 18"],
    },
    profile: {
      height: "0.8 m",
      weight: "28.5 kg",
      egg: ["Água 1", "Fada"],
      ability: [
        ["Thick Fat", "false"],
        ["Huge Power", "false"],
        ["Sap Sipper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/184.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/184.png",
      hires: "./Imagens/Pokedex/hires/184.png",
    },
  },
  {
    id: 185,
    name: {
      english: "Sudowoodo",
      japanese: "ウソッキー",
      chinese: "树才怪‎",
      french: "Simularbre",
    },
    type: ["Rocha"],
    base: {
      HP: 70,
      Attack: 100,
      Defense: 115,
      "Sp. Attack": 30,
      "Sp. Defense": 65,
      Speed: 30,
    },
    species: "Imitation Pokémon",
    description:
      "O resultado de manter a mesma pose o tempo todo são braços que se tornaram flexíveis e fortes.",
    evolution: {
      prev: ["438", "after Mimic learned"],
    },
    profile: {
      height: "1.2 m",
      weight: "38 kg",
      egg: ["Mineral"],
      ability: [
        ["Sturdy", "false"],
        ["Rocha Head", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/185.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/185.png",
      hires: "./Imagens/Pokedex/hires/185.png",
    },
  },
  {
    id: 186,
    name: {
      english: "Politoed",
      japanese: "ニョロトノ",
      chinese: "蚊香蛙皇",
      french: "Tarpaud",
    },
    type: ["Água"],
    base: {
      HP: 90,
      Attack: 75,
      Defense: 75,
      "Sp. Attack": 90,
      "Sp. Defense": 100,
      Speed: 70,
    },
    species: "Frog Pokémon",
    description:
      "Quanto mais longo e mais luxuoso o cabelo encaracolado em sua cabeça, maior é o número de Poliwag e Poliwhirl que o obedecerão.",
    evolution: {
      prev: ["61", "trade holding Kings Rocha"],
    },
    profile: {
      height: "1.1 m",
      weight: "33.9 kg",
      egg: ["Água 1"],
      ability: [
        ["Água Absorb", "false"],
        ["Damp", "false"],
        ["Drizzle", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/186.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/186.png",
      hires: "./Imagens/Pokedex/hires/186.png",
    },
  },
  {
    id: 187,
    name: {
      english: "Hoppip",
      japanese: "ハネッコ",
      chinese: "毽子草",
      french: "Granivol",
    },
    type: ["Grama", "Voador"],
    base: {
      HP: 35,
      Attack: 35,
      Defense: 40,
      "Sp. Attack": 35,
      "Sp. Defense": 55,
      Speed: 50,
    },
    species: "Cottonweed Pokémon",
    description:
      "Este Pokémon flutua e flutua com o vento. Se sentir a aproximação de ventos fortes, Hoppip liga suas folhas com outras Hoppip para se preparar contra ser levado pelo vento.",
    evolution: {
      next: [["188", "Level 18"]],
    },
    profile: {
      height: "0.4 m",
      weight: "0.5 kg",
      egg: ["Fada", "Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Leaf Guard", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/187.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/187.png",
      hires: "./Imagens/Pokedex/hires/187.png",
    },
  },
  {
    id: 188,
    name: {
      english: "Skiploom",
      japanese: "ポポッコ",
      chinese: "毽子花",
      french: "Floravol",
    },
    type: ["Grama", "Voador"],
    base: {
      HP: 55,
      Attack: 45,
      Defense: 50,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      Speed: 80,
    },
    species: "Cottonweed Pokémon",
    description:
      "A flor de Skiploom floresce quando a temperatura sobe acima de 64 graus Fahrenheit. Quanto a flor se abre depende da temperatura. Por esse motivo, este Pokémon é às vezes usado como termômetro.",
    evolution: {
      prev: ["187", "Level 18"],
      next: [["189", "Level 27"]],
    },
    profile: {
      height: "0.6 m",
      weight: "1 kg",
      egg: ["Fada", "Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Leaf Guard", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/188.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/188.png",
      hires: "./Imagens/Pokedex/hires/188.png",
    },
  },
  {
    id: 189,
    name: {
      english: "Jumpluff",
      japanese: "ワタッコ",
      chinese: "毽子棉",
      french: "Cotovol",
    },
    type: ["Grama", "Voador"],
    base: {
      HP: 75,
      Attack: 55,
      Defense: 70,
      "Sp. Attack": 55,
      "Sp. Defense": 95,
      Speed: 110,
    },
    species: "Cottonweed Pokémon",
    description:
      "Jumpluff cavalga ventos quentes do sul para cruzar o mar e voar para terras estrangeiras. O Pokémon desce ao solo quando encontra ar frio enquanto está flutuando.",
    evolution: {
      prev: ["188", "Level 27"],
    },
    profile: {
      height: "0.8 m",
      weight: "3 kg",
      egg: ["Fada", "Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Leaf Guard", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/189.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/189.png",
      hires: "./Imagens/Pokedex/hires/189.png",
    },
  },
  {
    id: 190,
    name: {
      english: "Aipom",
      japanese: "エイパム",
      chinese: "长尾怪手",
      french: "Capumain",
    },
    type: ["Normal"],
    base: {
      HP: 55,
      Attack: 70,
      Defense: 55,
      "Sp. Attack": 40,
      "Sp. Defense": 55,
      Speed: 85,
    },
    species: "Long Tail Pokémon",
    description:
      "Ele procura presas do topo das árvores. Quando avista sua comida favorita, Bounsweet, Aipom fica animado e se lança.",
    evolution: {
      next: [["424", "after Double Hit learned"]],
    },
    profile: {
      height: "0.8 m",
      weight: "11.5 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Pickup", "false"],
        ["Skill Link", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/190.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/190.png",
      hires: "./Imagens/Pokedex/hires/190.png",
    },
  },
  {
    id: 191,
    name: {
      english: "Sunkern",
      japanese: "ヒマナッツ",
      chinese: "向日种子",
      french: "Tournegrin",
    },
    type: ["Grama"],
    base: {
      HP: 30,
      Attack: 30,
      Defense: 30,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 30,
    },
    species: "Seed Pokémon",
    description:
      "Sunkern tenta se mover o mínimo possível. Ele faz isso porque tenta conservar todos os nutrientes que armazenou em seu corpo para sua evolução. Ele não comerá nada, subsistindo apenas com orvalho da manhã.",
    evolution: {
      next: [["192", "use Sun Stone"]],
    },
    profile: {
      height: "0.3 m",
      weight: "1.8 kg",
      egg: ["Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Solar Power", "false"],
        ["Early Bird", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/191.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/191.png",
      hires: "./Imagens/Pokedex/hires/191.png",
    },
  },
  {
    id: 192,
    name: {
      english: "Sunflora",
      japanese: "キマワリ",
      chinese: "向日花怪",
      french: "Héliatronc",
    },
    type: ["Grama"],
    base: {
      HP: 75,
      Attack: 75,
      Defense: 55,
      "Sp. Attack": 105,
      "Sp. Defense": 85,
      Speed: 30,
    },
    species: "Sun Pokémon",
    description:
      "Sunflora converte energia solar em nutrição. Ele se move ativamente durante o dia quando está quente. Ele para de se mover assim que o sol se põe para a noite.",
    evolution: {
      prev: ["191", "use Sun Stone"],
    },
    profile: {
      height: "0.8 m",
      weight: "8.5 kg",
      egg: ["Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Solar Power", "false"],
        ["Early Bird", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/192.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/192.png",
      hires: "./Imagens/Pokedex/hires/192.png",
    },
  },
  {
    id: 193,
    name: {
      english: "Yanma",
      japanese: "ヤンヤンマ",
      chinese: "蜻蜻蜓",
      french: "Yanma",
    },
    type: ["Inseto", "Voador"],
    base: {
      HP: 65,
      Attack: 65,
      Defense: 45,
      "Sp. Attack": 75,
      "Sp. Defense": 45,
      Speed: 95,
    },
    species: "Clear Wing Pokémon",
    description:
      "Yanma é capaz de ver 360 graus sem precisar mover os olhos. É um grande voador que é adepto em fazer paradas repentinas e virar no ar. Este Pokémon usa sua habilidade de voar para perseguir rapidamente presas alvejadas.",
    evolution: {
      next: [["469", "after Ancient Power learned"]],
    },
    profile: {
      height: "1.2 m",
      weight: "38 kg",
      egg: ["Inseto"],
      ability: [
        ["Speed Boost", "false"],
        ["Compound Eyes", "false"],
        ["Frisk", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/193.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/193.png",
      hires: "./Imagens/Pokedex/hires/193.png",
    },
  },
  {
    id: 194,
    name: {
      english: "Wooper",
      japanese: "ウパー",
      chinese: "乌波",
      french: "Axoloto",
    },
    type: ["Água", "Terra"],
    base: {
      HP: 55,
      Attack: 45,
      Defense: 45,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      Speed: 15,
    },
    species: "Água Fish Pokémon",
    description:
      "Wooper geralmente vive na água. No entanto, ocasionalmente sai para a terra em busca de comida. Em terra, ele cobre seu corpo com um filme tóxico pegajoso.",
    evolution: {
      next: [["195", "Level 20"]],
    },
    profile: {
      height: "0.4 m",
      weight: "8.5 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Damp", "false"],
        ["Água Absorb", "false"],
        ["Unaware", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/194.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/194.png",
      hires: "./Imagens/Pokedex/hires/194.png",
    },
  },
  {
    id: 195,
    name: {
      english: "Quagsire",
      japanese: "ヌオー",
      chinese: "沼王",
      french: "Maraiste",
    },
    type: ["Água", "Terra"],
    base: {
      HP: 95,
      Attack: 85,
      Defense: 85,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 35,
    },
    species: "Água Fish Pokémon",
    description:
      "Quagsire caça comida deixando a boca aberta na água e esperando que sua presa tropece sem saber. Como o Pokémon não se move, ele não fica com muita fome.",
    evolution: {
      prev: ["194", "Level 20"],
    },
    profile: {
      height: "1.4 m",
      weight: "75 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Damp", "false"],
        ["Água Absorb", "false"],
        ["Unaware", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/195.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/195.png",
      hires: "./Imagens/Pokedex/hires/195.png",
    },
  },
  {
    id: 196,
    name: {
      english: "Espeon",
      japanese: "エーフィ",
      chinese: "太阳伊布",
      french: "Mentali",
    },
    type: ["Psíquico"],
    base: {
      HP: 65,
      Attack: 65,
      Defense: 60,
      "Sp. Attack": 130,
      "Sp. Defense": 95,
      Speed: 110,
    },
    species: "Sun Pokémon",
    description:
      "O poder psíquico se acumula na esfera em sua testa enquanto toma banho de sol. Espeon não é bom em lutar à noite.",
    evolution: {
      prev: ["133", "high Friendship, Daytime"],
    },
    profile: {
      height: "0.9 m",
      weight: "26.5 kg",
      egg: ["Field"],
      ability: [
        ["Synchronize", "false"],
        ["Magic Bounce", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/196.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/196.png",
      hires: "./Imagens/Pokedex/hires/196.png",
    },
  },
  {
    id: 197,
    name: {
      english: "Umbreon",
      japanese: "ブラッキー",
      chinese: "月亮伊布",
      french: "Noctali",
    },
    type: ["Sombrio"],
    base: {
      HP: 95,
      Attack: 65,
      Defense: 110,
      "Sp. Attack": 60,
      "Sp. Defense": 130,
      Speed: 65,
    },
    species: "Moonlight Pokémon",
    description:
      "Ele espreita na escuridão da noite procurando por presas. No momento em que ele se lança, os anéis em seu corpo brilham fracamente, mas sinistramente.",
    evolution: {
      prev: ["133", "high Friendship, Nighttime"],
    },
    profile: {
      height: "1 m",
      weight: "27 kg",
      egg: ["Field"],
      ability: [
        ["Synchronize", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/197.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/197.png",
      hires: "./Imagens/Pokedex/hires/197.png",
    },
  },
  {
    id: 198,
    name: {
      english: "Murkrow",
      japanese: "ヤミカラス",
      chinese: "黑暗鸦",
      french: "Cornèbre",
    },
    type: ["Sombrio", "Voador"],
    base: {
      HP: 60,
      Attack: 85,
      Defense: 42,
      "Sp. Attack": 85,
      "Sp. Defense": 42,
      Speed: 91,
    },
    species: "Sombrioness Pokémon",
    description:
      "Ele procura coisas brilhantes para seu chefe. Diz-se que a presença de Murkrow é azarada, por isso muitas pessoas o detestam.",
    evolution: {
      next: [["430", "use Dusk Stone"]],
    },
    profile: {
      height: "0.5 m",
      weight: "2.1 kg",
      egg: ["Voador"],
      ability: [
        ["Insomnia", "false"],
        ["Super Luck", "false"],
        ["Prankster", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/198.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/198.png",
      hires: "./Imagens/Pokedex/hires/198.png",
    },
  },
  {
    id: 199,
    name: {
      english: "Slowking",
      japanese: "ヤドキング",
      chinese: "呆呆王",
      french: "Roigada",
    },
    type: ["Água", "Psíquico"],
    base: {
      HP: 95,
      Attack: 75,
      Defense: 80,
      "Sp. Attack": 100,
      "Sp. Defense": 110,
      Speed: 30,
    },
    species: "Royal Pokémon",
    description:
      'É chamado de "o sábio do mar". Ele se envolve em batalhas de inteligência com Oranguru, mas o resultado geralmente é um empate.',
    evolution: {
      prev: ["79", "trade holding Kings Rocha"],
    },
    profile: {
      height: "2 m",
      weight: "79.5 kg",
      egg: ["Monster", "Água 1"],
      ability: [
        ["Oblivious", "false"],
        ["Own Tempo", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/199.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/199.png",
      hires: "./Imagens/Pokedex/hires/199.png",
    },
  },
  {
    id: 200,
    name: {
      english: "Misdreavus",
      japanese: "ムウマ",
      chinese: "梦妖",
      french: "Feuforêve",
    },
    type: ["Fantasma"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 60,
      "Sp. Attack": 85,
      "Sp. Defense": 85,
      Speed: 85,
    },
    species: "Screech Pokémon",
    description:
      "O que o deixa feliz é imitar as vozes das pessoas chorando e assustar todo mundo. Ele não lida bem com pessoas que não são facilmente assustadas.",
    evolution: {
      next: [["429", "use Dusk Stone"]],
    },
    profile: {
      height: "0.7 m",
      weight: "1 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/200.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/200.png",
      hires: "./Imagens/Pokedex/hires/200.png",
    },
  },
  {
    id: 201,
    name: {
      english: "Unown",
      japanese: "アンノーン",
      chinese: "未知图腾",
      french: "Zarbi",
    },
    type: ["Psíquico"],
    base: {
      HP: 48,
      Attack: 72,
      Defense: 48,
      "Sp. Attack": 72,
      "Sp. Defense": 48,
      Speed: 48,
    },
    species: "Symbol Pokémon",
    description:
      "Este Pokémon tem a forma de uma escrita antiga. É um mistério sobre qual surgiu primeiro, as escritas antigas ou os diversos Unown. A pesquisa sobre este tópico está em andamento, mas nada se sabe.",
    evolution: {},
    profile: {
      height: "0.5 m",
      weight: "5 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/201.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/201.png",
      hires: "./Imagens/Pokedex/hires/201.png",
    },
  },
  {
    id: 202,
    name: {
      english: "Wobbuffet",
      japanese: "ソーナンス",
      chinese: "果然翁",
      french: "Qulbutoké",
    },
    type: ["Psíquico"],
    base: {
      HP: 190,
      Attack: 33,
      Defense: 58,
      "Sp. Attack": 33,
      "Sp. Defense": 58,
      Speed: 33,
    },
    species: "Patient Pokémon",
    description:
      "Wobbuffet não faz nada além de suportar ataques - ele não atacará por conta própria. No entanto, ele não suportará um ataque em sua cauda. Quando isso acontece, o Pokémon tentará levar o inimigo com ele usando Destiny Bond.",
    evolution: {
      prev: ["360", "Level 15"],
    },
    profile: {
      height: "1.3 m",
      weight: "28.5 kg",
      egg: ["Amorphous"],
      ability: [
        ["Shadow Tag", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/202.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/202.png",
      hires: "./Imagens/Pokedex/hires/202.png",
    },
  },
  {
    id: 203,
    name: {
      english: "Girafarig",
      japanese: "キリンリキ",
      chinese: "麒麟奇",
      french: "Girafarig",
    },
    type: ["Normal", "Psíquico"],
    base: {
      HP: 70,
      Attack: 80,
      Defense: 65,
      "Sp. Attack": 90,
      "Sp. Defense": 65,
      Speed: 85,
    },
    species: "Long Neck Pokémon",
    description:
      "A cabeça traseira de Girafarig contém um pequeno cérebro que é muito pequeno para pensar. No entanto, a cabeça traseira não precisa dormir, então pode vigiar seus arredores 24 horas por dia.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "41.5 kg",
      egg: ["Field"],
      ability: [
        ["Inner Focus", "false"],
        ["Early Bird", "false"],
        ["Sap Sipper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/203.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/203.png",
      hires: "./Imagens/Pokedex/hires/203.png",
    },
  },
  {
    id: 204,
    name: {
      english: "Pineco",
      japanese: "クヌギダマ",
      chinese: "榛果球",
      french: "Pomdepik",
    },
    type: ["Inseto"],
    base: {
      HP: 50,
      Attack: 65,
      Defense: 90,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 15,
    },
    species: "Bagworm Pokémon",
    description:
      "Ele gruda casca de árvore em si mesmo com sua saliva, ficando mais grosso e maior. Pineco idosos são ridiculamente enormes.",
    evolution: {
      next: [["205", "Level 31"]],
    },
    profile: {
      height: "0.6 m",
      weight: "7.2 kg",
      egg: ["Inseto"],
      ability: [
        ["Sturdy", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/204.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/204.png",
      hires: "./Imagens/Pokedex/hires/204.png",
    },
  },
  {
    id: 205,
    name: {
      english: "Forretress",
      japanese: "フォレトス",
      chinese: "佛烈托斯",
      french: "Foretress",
    },
    type: ["Inseto", "Metal"],
    base: {
      HP: 75,
      Attack: 90,
      Defense: 140,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 40,
    },
    species: "Bagworm Pokémon",
    description:
      "No momento em que ele devora sua presa, o interior de sua casca é exposto, mas até hoje ninguém jamais viu essa visão.",
    evolution: {
      prev: ["204", "Level 31"],
    },
    profile: {
      height: "1.2 m",
      weight: "125.8 kg",
      egg: ["Inseto"],
      ability: [
        ["Sturdy", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/205.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/205.png",
      hires: "./Imagens/Pokedex/hires/205.png",
    },
  },
  {
    id: 206,
    name: {
      english: "Dunsparce",
      japanese: "ノコッチ",
      chinese: "土龙弟弟",
      french: "Insolourdo",
    },
    type: ["Normal"],
    base: {
      HP: 100,
      Attack: 70,
      Defense: 70,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 45,
    },
    species: "Land Snake Pokémon",
    description:
      "Quando vê uma pessoa, cava um buraco com a cauda para escapar. Se você encontrar um, considere-se sortudo.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "14 kg",
      egg: ["Field"],
      ability: [
        ["Serene Grace", "false"],
        ["Run Away", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/206.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/206.png",
      hires: "./Imagens/Pokedex/hires/206.png",
    },
  },
  {
    id: 207,
    name: {
      english: "Gligar",
      japanese: "グライガー",
      chinese: "天蝎",
      french: "Scorplane",
    },
    type: ["Terra", "Voador"],
    base: {
      HP: 65,
      Attack: 75,
      Defense: 105,
      "Sp. Attack": 35,
      "Sp. Defense": 65,
      Speed: 85,
    },
    species: "Fly Scorpion Pokémon",
    description:
      "Gligar desliza pelo ar sem um som como se estivesse deslizando. Este Pokémon se agarra ao rosto de seu inimigo usando suas patas traseiras com garras e as grandes pinças em suas patas dianteiras, depois injeta a presa com sua lança venenosa.",
    evolution: {
      next: [["472", "hold Razor Fang, Nighttime"]],
    },
    profile: {
      height: "1.1 m",
      weight: "64.8 kg",
      egg: ["Inseto"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Sand Veil", "false"],
        ["Immunity", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/207.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/207.png",
      hires: "./Imagens/Pokedex/hires/207.png",
    },
  },
  {
    id: 208,
    name: {
      english: "Metalix",
      japanese: "ハガネール",
      chinese: "大钢蛇",
      french: "Metalix",
    },
    type: ["Metal", "Terra"],
    base: {
      HP: 75,
      Attack: 85,
      Defense: 200,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      Speed: 30,
    },
    species: "Iron Snake Pokémon",
    description:
      "Metalix vive ainda mais abaixo do solo do que Onix. Sabe-se que este Pokémon cava em direção ao núcleo da Terra. Existem registros de este Pokémon atingindo uma profundidade de mais de seis décimos de uma milha abaixo do solo.",
    evolution: {
      prev: ["95", "trade holding Metal Coat"],
    },
    profile: {
      height: "9.2 m",
      weight: "400 kg",
      egg: ["Mineral"],
      ability: [
        ["Rocha Head", "false"],
        ["Sturdy", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/208.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/208.png",
      hires: "./Imagens/Pokedex/hires/208.png",
    },
  },
  {
    id: 209,
    name: {
      english: "Snubbull",
      japanese: "ブルー",
      chinese: "布鲁",
      french: "Snubbull",
    },
    type: ["Fada"],
    base: {
      HP: 60,
      Attack: 80,
      Defense: 50,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 30,
    },
    species: "Fada Pokémon",
    description:
      "Em contraste com sua aparência, ele é bastante tímido. Quando brinca com outros filhotes de Pokémon, às vezes é intimidado.",
    evolution: {
      next: [["210", "Level 23"]],
    },
    profile: {
      height: "0.6 m",
      weight: "7.8 kg",
      egg: ["Field", "Fada"],
      ability: [
        ["Intimidate", "false"],
        ["Run Away", "false"],
        ["Rattled", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/209.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/209.png",
      hires: "./Imagens/Pokedex/hires/209.png",
    },
  },
  {
    id: 210,
    name: {
      english: "Granbull",
      japanese: "グランブル",
      chinese: "布鲁皇",
      french: "Granbull",
    },
    type: ["Fada"],
    base: {
      HP: 90,
      Attack: 120,
      Defense: 75,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 45,
    },
    species: "Fada Pokémon",
    description:
      "Embora seja popular entre jovens, Granbull é tímido e sensível, por isso é totalmente incompetente como cão de guarda.",
    evolution: {
      prev: ["209", "Level 23"],
    },
    profile: {
      height: "1.4 m",
      weight: "48.7 kg",
      egg: ["Field", "Fada"],
      ability: [
        ["Intimidate", "false"],
        ["Quick Feet", "false"],
        ["Rattled", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/210.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/210.png",
      hires: "./Imagens/Pokedex/hires/210.png",
    },
  },
  {
    id: 211,
    name: {
      english: "Qwilfish",
      japanese: "ハリーセン",
      chinese: "千针鱼",
      french: "Qwilfish",
    },
    type: ["Água", "Venenoso"],
    base: {
      HP: 65,
      Attack: 95,
      Defense: 85,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 85,
    },
    species: "Balloon Pokémon",
    description:
      "Qwilfish suga água, inflando-se. Este Pokémon usa a pressão da água que engoliu para atirar penas venenosas de uma só vez em todo o corpo. Ele acha a natação um tanto desafiadora.",
    evolution: {},
    profile: {
      height: "0.5 m",
      weight: "3.9 kg",
      egg: ["Água 2"],
      ability: [
        ["Venenoso Point", "false"],
        ["Swift Swim", "false"],
        ["Intimidate", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/211.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/211.png",
      hires: "./Imagens/Pokedex/hires/211.png",
    },
  },
  {
    id: 212,
    name: {
      english: "Scizor",
      japanese: "ハッサム",
      chinese: "巨钳螳螂",
      french: "Cizayox",
    },
    type: ["Inseto", "Metal"],
    base: {
      HP: 70,
      Attack: 130,
      Defense: 100,
      "Sp. Attack": 55,
      "Sp. Defense": 80,
      Speed: 65,
    },
    species: "Pincer Pokémon",
    description:
      "Uma vez que identificou algo como inimigo, ele continuará batendo neles com suas pinças de aço duro até que não reste nada além de restos.",
    evolution: {
      prev: ["123", "trade holding Metal Coat"],
    },
    profile: {
      height: "1.8 m",
      weight: "118 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Technician", "false"],
        ["Light Metal", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/212.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/212.png",
      hires: "./Imagens/Pokedex/hires/212.png",
    },
  },
  {
    id: 213,
    name: {
      english: "Shuckle",
      japanese: "ツボツボ",
      chinese: "壶壶",
      french: "Caratroc",
    },
    type: ["Inseto", "Rocha"],
    base: {
      HP: 20,
      Attack: 10,
      Defense: 230,
      "Sp. Attack": 10,
      "Sp. Defense": 230,
      Speed: 5,
    },
    species: "Mold Pokémon",
    description:
      "Shuckle se esconde silenciosamente sob as pedras, mantendo seu corpo escondido dentro de sua casca dura enquanto come bagas que armazenou. As bagas se misturam com seus fluidos corporais para se tornarem um suco.",
    evolution: {},
    profile: {
      height: "0.6 m",
      weight: "20.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Sturdy", "false"],
        ["Gluttony", "false"],
        ["Contrary", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/213.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/213.png",
      hires: "./Imagens/Pokedex/hires/213.png",
    },
  },
  {
    id: 214,
    name: {
      english: "Heracross",
      japanese: "ヘラクロス",
      chinese: "赫拉克罗斯",
      french: "Scarhino",
    },
    type: ["Inseto", "Lutador"],
    base: {
      HP: 80,
      Attack: 125,
      Defense: 75,
      "Sp. Attack": 40,
      "Sp. Defense": 95,
      Speed: 85,
    },
    species: "Single Horn Pokémon",
    description:
      "Ele vaga pelas florestas procurando néctar doce. Embora se orgulhe de sua fantástica força física, ele não é tão bom em voar.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "54 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Guts", "false"],
        ["Moxie", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/214.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/214.png",
      hires: "./Imagens/Pokedex/hires/214.png",
    },
  },
  {
    id: 215,
    name: {
      english: "Sneasel",
      japanese: "ニューラ",
      chinese: "狃拉",
      french: "Farfuret",
    },
    type: ["Sombrio", "Gelo"],
    base: {
      HP: 55,
      Attack: 95,
      Defense: 55,
      "Sp. Attack": 35,
      "Sp. Defense": 75,
      Speed: 115,
    },
    species: "Sharp Claw Pokémon",
    description:
      "Ele se mistura na escuridão da noite para emboscar sua presa. Sneasel atacará Sandshrew, mas sua pele dura pode fazer com que as garras de Sneasel se quebrem.",
    evolution: {
      next: [["461", "hold Razor Claw, Nighttime"]],
    },
    profile: {
      height: "0.9 m",
      weight: "28 kg",
      egg: ["Field"],
      ability: [
        ["Inner Focus", "false"],
        ["Keen Eye", "false"],
        ["Pickpocket", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/215.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/215.png",
      hires: "./Imagens/Pokedex/hires/215.png",
    },
  },
  {
    id: 216,
    name: {
      english: "Teddiursa",
      japanese: "ヒメグマ",
      chinese: "熊宝宝",
      french: "Teddiursa",
    },
    type: ["Normal"],
    base: {
      HP: 60,
      Attack: 80,
      Defense: 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 40,
    },
    species: "Little Bear Pokémon",
    description:
      "Este Pokémon gosta de lamber suas palmas que são adoçadas por serem embebidas em mel. Teddiursa prepara seu próprio mel misturando frutas e pólen coletados por Beedrill.",
    evolution: {
      next: [["217", "Level 30"]],
    },
    profile: {
      height: "0.6 m",
      weight: "8.8 kg",
      egg: ["Field"],
      ability: [
        ["Pickup", "false"],
        ["Quick Feet", "false"],
        ["Honey Gather", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/216.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/216.png",
      hires: "./Imagens/Pokedex/hires/216.png",
    },
  },
  {
    id: 217,
    name: {
      english: "Ursaring",
      japanese: "リングマ",
      chinese: "圈圈熊",
      french: "Ursaring",
    },
    type: ["Normal"],
    base: {
      HP: 90,
      Attack: 130,
      Defense: 75,
      "Sp. Attack": 75,
      "Sp. Defense": 75,
      Speed: 55,
    },
    species: "Hibernator Pokémon",
    description:
      "Nas florestas habitadas por Ursaring, diz-se que há muitos riachos e árvores imponentes onde eles reúnem comida. Este Pokémon caminha por sua floresta reunindo comida todos os dias.",
    evolution: {
      prev: ["216", "Level 30"],
    },
    profile: {
      height: "1.8 m",
      weight: "125.8 kg",
      egg: ["Field"],
      ability: [
        ["Guts", "false"],
        ["Quick Feet", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/217.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/217.png",
      hires: "./Imagens/Pokedex/hires/217.png",
    },
  },
  {
    id: 218,
    name: {
      english: "Slugma",
      japanese: "マグマッグ",
      chinese: "熔岩虫",
      french: "Limagma",
    },
    type: ["Fogo"],
    base: {
      HP: 40,
      Attack: 40,
      Defense: 40,
      "Sp. Attack": 70,
      "Sp. Defense": 40,
      Speed: 20,
    },
    species: "Lava Pokémon",
    description:
      "Slugma não tem sangue em seu corpo. Em vez disso, magma intensamente quente circula pelo corpo deste Pokémon, transportando nutrientes e oxigênio essenciais para seus órgãos.",
    evolution: {
      next: [["219", "Level 38"]],
    },
    profile: {
      height: "0.7 m",
      weight: "35 kg",
      egg: ["Amorphous"],
      ability: [
        ["Magma Armor", "false"],
        ["Flame Body", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/218.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/218.png",
      hires: "./Imagens/Pokedex/hires/218.png",
    },
  },
  {
    id: 219,
    name: {
      english: "Magcargo",
      japanese: "マグカルゴ",
      chinese: "熔岩蜗牛",
      french: "Volcaropod",
    },
    type: ["Fogo", "Rocha"],
    base: {
      HP: 60,
      Attack: 50,
      Defense: 120,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      Speed: 30,
    },
    species: "Lava Pokémon",
    description:
      "A temperatura corporal de Magcargo é de aproximadamente 18.000 graus Fahrenheit. A água é vaporizada em contato. Se este Pokémon for pego na chuva, as gotas de chuva se transformarão instantaneamente em vapor, cobrindo a área em uma neblina espessa.",
    evolution: {
      prev: ["218", "Level 38"],
    },
    profile: {
      height: "0.8 m",
      weight: "55 kg",
      egg: ["Amorphous"],
      ability: [
        ["Magma Armor", "false"],
        ["Flame Body", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/219.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/219.png",
      hires: "./Imagens/Pokedex/hires/219.png",
    },
  },
  {
    id: 220,
    name: {
      english: "Swinub",
      japanese: "ウリムー",
      chinese: "小山猪",
      french: "Marcacrin",
    },
    type: ["Gelo", "Terra"],
    base: {
      HP: 50,
      Attack: 50,
      Defense: 40,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 50,
    },
    species: "Pig Pokémon",
    description:
      "Swinub procura comida esfregando o nariz no chão. Sua comida favorita é um cogumelo que cresce sob a cobertura de grama morta. Este Pokémon ocasionalmente desenterra fontes termais.",
    evolution: {
      next: [["221", "Level 33"]],
    },
    profile: {
      height: "0.4 m",
      weight: "6.5 kg",
      egg: ["Field"],
      ability: [
        ["Oblivious", "false"],
        ["Snow Cloak", "false"],
        ["Thick Fat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/220.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/220.png",
      hires: "./Imagens/Pokedex/hires/220.png",
    },
  },
  {
    id: 221,
    name: {
      english: "Piloswine",
      japanese: "イノムー",
      chinese: "长毛猪",
      french: "Cochignon",
    },
    type: ["Gelo", "Terra"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 80,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 50,
    },
    species: "Swine Pokémon",
    description:
      "Piloswine é coberto por uma espessa camada de cabelo longo que lhe permite suportar o frio congelante. Este Pokémon usa suas presas para desenterrar comida que foi enterrada sob o gelo.",
    evolution: {
      prev: ["220", "Level 33"],
      next: [["473", "after Ancient Power learned"]],
    },
    profile: {
      height: "1.1 m",
      weight: "55.8 kg",
      egg: ["Field"],
      ability: [
        ["Oblivious", "false"],
        ["Snow Cloak", "false"],
        ["Thick Fat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/221.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/221.png",
      hires: "./Imagens/Pokedex/hires/221.png",
    },
  },
  {
    id: 222,
    name: {
      english: "Corsola",
      japanese: "サニーゴ",
      chinese: "太阳珊瑚",
      french: "Corayon",
    },
    type: ["Água", "Rocha"],
    base: {
      HP: 65,
      Attack: 55,
      Defense: 95,
      "Sp. Attack": 65,
      "Sp. Defense": 95,
      Speed: 35,
    },
    species: "Coral Pokémon",
    description:
      "Em Alola, onde seus inimigos naturais Mareanie são abundantes, muitos Corsola têm galhos atrofiados em suas cabeças.",
    evolution: {},
    profile: {
      height: "0.6 m",
      weight: "5 kg",
      egg: ["Água 1", "Água 3"],
      ability: [
        ["Hustle", "false"],
        ["Natural Cure", "false"],
        ["Regenerator", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/222.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/222.png",
      hires: "./Imagens/Pokedex/hires/222.png",
    },
  },
  {
    id: 223,
    name: {
      english: "Remoraid",
      japanese: "テッポウオ",
      chinese: "铁炮鱼",
      french: "Rémoraid",
    },
    type: ["Água"],
    base: {
      HP: 35,
      Attack: 65,
      Defense: 35,
      "Sp. Attack": 65,
      "Sp. Defense": 35,
      Speed: 65,
    },
    species: "Jet Pokémon",
    description:
      'Também conhecido como "atirador de precisão dos mares", seu canhão de água pode atingir a presa sem falha a mais de 300 pés de distância.',
    evolution: {
      next: [["224", "Level 25"]],
    },
    profile: {
      height: "0.6 m",
      weight: "12 kg",
      egg: ["Água 1", "Água 2"],
      ability: [
        ["Hustle", "false"],
        ["Sniper", "false"],
        ["Moody", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/223.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/223.png",
      hires: "./Imagens/Pokedex/hires/223.png",
    },
  },
  {
    id: 224,
    name: {
      english: "Octillery",
      japanese: "オクタン",
      chinese: "章鱼桶",
      french: "Octillery",
    },
    type: ["Água"],
    base: {
      HP: 75,
      Attack: 105,
      Defense: 75,
      "Sp. Attack": 105,
      "Sp. Defense": 75,
      Speed: 45,
    },
    species: "Jet Pokémon",
    description:
      "Geralmente dorme em cavernas. A tinta preta como breu que Octillery cospe também é usada para cozinhar.",
    evolution: {
      prev: ["223", "Level 25"],
    },
    profile: {
      height: "0.9 m",
      weight: "28.5 kg",
      egg: ["Água 1", "Água 2"],
      ability: [
        ["Suction Cups", "false"],
        ["Sniper", "false"],
        ["Moody", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/224.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/224.png",
      hires: "./Imagens/Pokedex/hires/224.png",
    },
  },
  {
    id: 225,
    name: {
      english: "Delibird",
      japanese: "デリバード",
      chinese: "信使鸟",
      french: "Cadoizo",
    },
    type: ["Gelo", "Voador"],
    base: {
      HP: 45,
      Attack: 55,
      Defense: 45,
      "Sp. Attack": 65,
      "Sp. Defense": 45,
      Speed: 75,
    },
    species: "Delivery Pokémon",
    description:
      "Ele embrulha comida em sua cauda para carregá-la. O Delibird com a maior cauda é o chefe do bando!",
    evolution: {},
    profile: {
      height: "0.9 m",
      weight: "16 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Vital Spirit", "false"],
        ["Hustle", "false"],
        ["Insomnia", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/225.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/225.png",
      hires: "./Imagens/Pokedex/hires/225.png",
    },
  },
  {
    id: 226,
    name: {
      english: "Mantine",
      japanese: "マンタイン",
      chinese: "巨翅飞鱼",
      french: "Démanta",
    },
    type: ["Água", "Voador"],
    base: {
      HP: 85,
      Attack: 40,
      Defense: 70,
      "Sp. Attack": 80,
      "Sp. Defense": 140,
      Speed: 70,
    },
    species: "Kite Pokémon",
    description:
      "Muitas pessoas praticaram surfe porque admiram como Mantine nada magnificamente.",
    evolution: {
      prev: ["458", "with Remoraid in party"],
    },
    profile: {
      height: "2.1 m",
      weight: "220 kg",
      egg: ["Água 1"],
      ability: [
        ["Swift Swim", "false"],
        ["Água Absorb", "false"],
        ["Água Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/226.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/226.png",
      hires: "./Imagens/Pokedex/hires/226.png",
    },
  },
  {
    id: 227,
    name: {
      english: "Skarmory",
      japanese: "エアームド",
      chinese: "盔甲鸟",
      french: "Airmure",
    },
    type: ["Metal", "Voador"],
    base: {
      HP: 65,
      Attack: 80,
      Defense: 140,
      "Sp. Attack": 40,
      "Sp. Defense": 70,
      Speed: 70,
    },
    species: "Armor Bird Pokémon",
    description:
      "Seu corpo é drapeado em armadura de aço. Parece pesado, mas pode voar a velocidades de até 185 milhas por hora!",
    evolution: {},
    profile: {
      height: "1.7 m",
      weight: "50.5 kg",
      egg: ["Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Sturdy", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/227.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/227.png",
      hires: "./Imagens/Pokedex/hires/227.png",
    },
  },
  {
    id: 228,
    name: {
      english: "Houndour",
      japanese: "デルビル",
      chinese: "戴鲁比",
      french: "Malosse",
    },
    type: ["Sombrio", "Fogo"],
    base: {
      HP: 45,
      Attack: 60,
      Defense: 30,
      "Sp. Attack": 80,
      "Sp. Defense": 50,
      Speed: 65,
    },
    species: "Sombrio Pokémon",
    description:
      "Eles fazem uivos sinistros repetidos antes do amanhecer para chamar atenção para seu bando.",
    evolution: {
      next: [["229", "Level 24"]],
    },
    profile: {
      height: "0.6 m",
      weight: "10.8 kg",
      egg: ["Field"],
      ability: [
        ["Early Bird", "false"],
        ["Flash Fogo", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/228.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/228.png",
      hires: "./Imagens/Pokedex/hires/228.png",
    },
  },
  {
    id: 229,
    name: {
      english: "Houndoom",
      japanese: "ヘルガー",
      chinese: "黑鲁加",
      french: "Démolosse",
    },
    type: ["Sombrio", "Fogo"],
    base: {
      HP: 75,
      Attack: 90,
      Defense: 50,
      "Sp. Attack": 110,
      "Sp. Defense": 80,
      Speed: 95,
    },
    species: "Sombrio Pokémon",
    description:
      "Identificável por seus uivos sinistros, as pessoas há muito tempo pensavam que era o ceifador e o temiam.",
    evolution: {
      prev: ["228", "Level 24"],
    },
    profile: {
      height: "1.4 m",
      weight: "35 kg",
      egg: ["Field"],
      ability: [
        ["Early Bird", "false"],
        ["Flash Fogo", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/229.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/229.png",
      hires: "./Imagens/Pokedex/hires/229.png",
    },
  },
  {
    id: 230,
    name: {
      english: "Kingdra",
      japanese: "キングドラ",
      chinese: "刺龙王",
      french: "Hyporoi",
    },
    type: ["Água", "Dragão"],
    base: {
      HP: 75,
      Attack: 95,
      Defense: 95,
      "Sp. Attack": 95,
      "Sp. Defense": 95,
      Speed: 85,
    },
    species: "Dragão Pokémon",
    description:
      "Kingdra dorme no fundo do mar onde está desprovido de vida. Quando chega uma tempestade, diz-se que o Pokémon acorda e vagueia em busca de presas.",
    evolution: {
      prev: ["117", "trade holding Dragão Scale"],
    },
    profile: {
      height: "1.8 m",
      weight: "152 kg",
      egg: ["Água 1", "Dragão"],
      ability: [
        ["Swift Swim", "false"],
        ["Sniper", "false"],
        ["Damp", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/230.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/230.png",
      hires: "./Imagens/Pokedex/hires/230.png",
    },
  },
  {
    id: 231,
    name: {
      english: "Phanpy",
      japanese: "ゴマゾウ",
      chinese: "小小象",
      french: "Phanpy",
    },
    type: ["Terra"],
    base: {
      HP: 90,
      Attack: 60,
      Defense: 60,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 40,
    },
    species: "Long Nose Pokémon",
    description:
      "Phanpy usa seu longo nariz para se banhar. Quando outros se reúnem ao redor, eles se molham completamente com água. Esses Pokémon podem ser vistos secando seus corpos encharcados na beira da água.",
    evolution: {
      next: [["232", "Level 25"]],
    },
    profile: {
      height: "0.5 m",
      weight: "33.5 kg",
      egg: ["Field"],
      ability: [
        ["Pickup", "false"],
        ["Sand Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/231.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/231.png",
      hires: "./Imagens/Pokedex/hires/231.png",
    },
  },
  {
    id: 232,
    name: {
      english: "Donphan",
      japanese: "ドンファン",
      chinese: "顿甲",
      french: "Donphan",
    },
    type: ["Terra"],
    base: {
      HP: 90,
      Attack: 120,
      Defense: 120,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 50,
    },
    species: "Armor Pokémon",
    description:
      "Se Donphan fosse enfrentar com seu corpo duro, até mesmo uma casa poderia ser destruída. Usando sua força massiva, o Pokémon ajuda a limpar deslizamentos de terra e lama que bloqueiam trilhas de montanha.",
    evolution: {
      prev: ["231", "Level 25"],
    },
    profile: {
      height: "1.1 m",
      weight: "120 kg",
      egg: ["Field"],
      ability: [
        ["Sturdy", "false"],
        ["Sand Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/232.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/232.png",
      hires: "./Imagens/Pokedex/hires/232.png",
    },
  },
  {
    id: 233,
    name: {
      english: "Porygon2",
      japanese: "ポリゴン２",
      chinese: "多边兽Ⅱ",
      french: "Porygon2",
    },
    type: ["Normal"],
    base: {
      HP: 85,
      Attack: 80,
      Defense: 90,
      "Sp. Attack": 105,
      "Sp. Defense": 95,
      Speed: 60,
    },
    species: "Virtual Pokémon",
    description:
      "Mesmo que não morra no vácuo do espaço, ele não pode se mover muito bem na gravidade zero.",
    evolution: {
      prev: ["137", "trade holding Upgrade"],
      next: [["474", "trade holding Dubious Disc"]],
    },
    profile: {
      height: "0.6 m",
      weight: "32.5 kg",
      egg: ["Mineral"],
      ability: [
        ["Trace", "false"],
        ["Download", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/233.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/233.png",
      hires: "./Imagens/Pokedex/hires/233.png",
    },
  },
  {
    id: 234,
    name: {
      english: "Stantler",
      japanese: "オドシシ",
      chinese: "惊角鹿",
      french: "Cerfrousse",
    },
    type: ["Normal"],
    base: {
      HP: 73,
      Attack: 95,
      Defense: 62,
      "Sp. Attack": 85,
      "Sp. Defense": 65,
      Speed: 85,
    },
    species: "Big Horn Pokémon",
    description:
      "As magníficas corças de Stantler eram negociadas a preços altos como obras de arte. Como resultado, este Pokémon foi caçado perto da extinção por aqueles que estavam atrás das corças preciosas.",
    evolution: {},
    profile: {
      height: "1.4 m",
      weight: "71.2 kg",
      egg: ["Field"],
      ability: [
        ["Intimidate", "false"],
        ["Frisk", "false"],
        ["Sap Sipper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/234.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/234.png",
      hires: "./Imagens/Pokedex/hires/234.png",
    },
  },
  {
    id: 235,
    name: {
      english: "Smeargle",
      japanese: "ドーブル",
      chinese: "图图犬",
      french: "Queulorior",
    },
    type: ["Normal"],
    base: {
      HP: 55,
      Attack: 20,
      Defense: 35,
      "Sp. Attack": 20,
      "Sp. Defense": 45,
      Speed: 75,
    },
    species: "Painter Pokémon",
    description:
      "Ele desenha símbolos com o fluido que escorre da ponta de sua cauda. Dependendo do símbolo, fanáticos por Smeargle pagarão muito dinheiro por eles.",
    evolution: {},
    profile: {
      height: "1.2 m",
      weight: "58 kg",
      egg: ["Field"],
      ability: [
        ["Own Tempo", "false"],
        ["Technician", "false"],
        ["Moody", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/235.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/235.png",
      hires: "./Imagens/Pokedex/hires/235.png",
    },
  },
  {
    id: 236,
    name: {
      english: "Tyrogue",
      japanese: "バルキー",
      chinese: "无畏小子",
      french: "DeInsetoant",
    },
    type: ["Lutador"],
    base: {
      HP: 35,
      Attack: 35,
      Defense: 35,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 35,
    },
    species: "Scuffle Pokémon",
    description:
      "Tyrogue fica estressado se não treina todos os dias. Ao criar este Pokémon, o treinador deve estabelecer e manter vários métodos de treinamento.",
    evolution: {
      next: [
        ["106", "Level 20, Attack > Defense"],
        ["107", "Level 20, Attack < Defense"],
        ["237", "Level 20, Attack = Defense"],
      ],
    },
    profile: {
      height: "0.7 m",
      weight: "21 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Guts", "false"],
        ["Steadfast", "false"],
        ["Vital Spirit", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/236.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/236.png",
      hires: "./Imagens/Pokedex/hires/236.png",
    },
  },
  {
    id: 237,
    name: {
      english: "Hitmontop",
      japanese: "カポエラー",
      chinese: "战舞郎",
      french: "Kapoera",
    },
    type: ["Lutador"],
    base: {
      HP: 50,
      Attack: 95,
      Defense: 95,
      "Sp. Attack": 35,
      "Sp. Defense": 110,
      Speed: 70,
    },
    species: "Handstand Pokémon",
    description:
      "Hitmontop gira na cabeça em alta velocidade, enquanto dá chutes. Esta técnica é uma mistura impressionante de ataque e defesa ao mesmo tempo. O Pokémon viaja mais rápido girando do que andando.",
    evolution: {
      prev: ["236", "Level 20, Attack = Defense"],
    },
    profile: {
      height: "1.4 m",
      weight: "48 kg",
      egg: ["Human-Like"],
      ability: [
        ["Intimidate", "false"],
        ["Technician", "false"],
        ["Steadfast", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/237.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/237.png",
      hires: "./Imagens/Pokedex/hires/237.png",
    },
  },
  {
    id: 238,
    name: {
      english: "Smoochum",
      japanese: "ムチュール",
      chinese: "迷唇娃",
      french: "Lippouti",
    },
    type: ["Gelo", "Psíquico"],
    base: {
      HP: 45,
      Attack: 30,
      Defense: 15,
      "Sp. Attack": 85,
      "Sp. Defense": 65,
      Speed: 65,
    },
    species: "Kiss Pokémon",
    description:
      "Sensores altamente perceptíveis, os lábios de Smoochum são mantidos úmidos por sua aplicação diária de seiva de árvore.",
    evolution: {
      next: [["124", "Level 30"]],
    },
    profile: {
      height: "0.4 m",
      weight: "6 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Oblivious", "false"],
        ["Forewarn", "false"],
        ["Hydration", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/238.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/238.png",
      hires: "./Imagens/Pokedex/hires/238.png",
    },
  },
  {
    id: 239,
    name: {
      english: "Elekid",
      japanese: "エレキッド",
      chinese: "电击怪",
      french: "Élekid",
    },
    type: ["Elétrico"],
    base: {
      HP: 45,
      Attack: 63,
      Defense: 37,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      Speed: 95,
    },
    species: "Elétrico Pokémon",
    description:
      "Quando seus chifres brilham de um branco azulado, esse é o sinal de que estão totalmente carregados. Você levará um choque chocante se tocá-lo!",
    evolution: {
      next: [["125", "Level 30"]],
    },
    profile: {
      height: "0.6 m",
      weight: "23.5 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Static", "false"],
        ["Vital Spirit", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/239.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/239.png",
      hires: "./Imagens/Pokedex/hires/239.png",
    },
  },
  {
    id: 240,
    name: {
      english: "Magby",
      japanese: "ブビィ",
      chinese: "鸭嘴宝宝",
      french: "Magby",
    },
    type: ["Fogo"],
    base: {
      HP: 45,
      Attack: 75,
      Defense: 37,
      "Sp. Attack": 70,
      "Sp. Defense": 55,
      Speed: 83,
    },
    species: "Live Coal Pokémon",
    description:
      "Sua temperatura corporal é sempre de cerca de 1.100 graus Fahrenheit. Se Magby cair em uma lagoa pequena o suficiente, tudo secará.",
    evolution: {
      next: [["126", "Level 30"]],
    },
    profile: {
      height: "0.7 m",
      weight: "21.4 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Flame Body", "false"],
        ["Vital Spirit", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/240.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/240.png",
      hires: "./Imagens/Pokedex/hires/240.png",
    },
  },
  {
    id: 241,
    name: {
      english: "Miltank",
      japanese: "ミルタンク",
      chinese: "大奶罐",
      french: "Écrémeuh",
    },
    type: ["Normal"],
    base: {
      HP: 95,
      Attack: 80,
      Defense: 105,
      "Sp. Attack": 40,
      "Sp. Defense": 70,
      Speed: 100,
    },
    species: "Milk Cow Pokémon",
    description:
      "Seu leite é delicioso e cheio de nutrientes. No entanto, se você beber demais, pode fazer sua barriga doer, então tome cuidado.",
    evolution: {},
    profile: {
      height: "1.2 m",
      weight: "75.5 kg",
      egg: ["Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Scrappy", "false"],
        ["Sap Sipper", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/241.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/241.png",
      hires: "./Imagens/Pokedex/hires/241.png",
    },
  },
  {
    id: 242,
    name: {
      english: "Blissey",
      japanese: "ハピナス",
      chinese: "幸福蛋",
      french: "Leuphorie",
    },
    type: ["Normal"],
    base: {
      HP: 255,
      Attack: 10,
      Defense: 10,
      "Sp. Attack": 75,
      "Sp. Defense": 135,
      Speed: 55,
    },
    species: "Happiness Pokémon",
    description:
      "Este Pokémon está transbordando de amor. Apenas Chansey que compartilham um forte vínculo com seu treinador podem evoluir, dizem as pessoas.",
    evolution: {
      prev: ["113", "high Friendship"],
    },
    profile: {
      height: "1.5 m",
      weight: "46.8 kg",
      egg: ["Fada"],
      ability: [
        ["Natural Cure", "false"],
        ["Serene Grace", "false"],
        ["Healer", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/242.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/242.png",
      hires: "./Imagens/Pokedex/hires/242.png",
    },
  },
  {
    id: 243,
    name: {
      english: "Raikou",
      japanese: "ライコウ",
      chinese: "雷公",
      french: "Raikou",
    },
    type: ["Elétrico"],
    base: {
      HP: 90,
      Attack: 85,
      Defense: 75,
      "Sp. Attack": 115,
      "Sp. Defense": 100,
      Speed: 115,
    },
    species: "Thunder Pokémon",
    description:
      "Raikou personifica a velocidade do raio. Os rugidos deste Pokémon enviam ondas de choque trepidando pelo ar e sacudem o chão como se raios tivessem caído.",
    evolution: {},
    profile: {
      height: "1.9 m",
      weight: "178 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/243.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/243.png",
      hires: "./Imagens/Pokedex/hires/243.png",
    },
  },
  {
    id: 244,
    name: {
      english: "Entei",
      japanese: "エンテイ",
      chinese: "炎帝",
      french: "Entei",
    },
    type: ["Fogo"],
    base: {
      HP: 115,
      Attack: 115,
      Defense: 85,
      "Sp. Attack": 90,
      "Sp. Defense": 75,
      Speed: 100,
    },
    species: "Volcano Pokémon",
    description:
      "Entei personifica a paixão do magma. Acredita-se que este Pokémon nasceu na erupção de um vulcão. Ele envia enormes rajadas de fogo que consomem completamente tudo que tocam.",
    evolution: {},
    profile: {
      height: "2.1 m",
      weight: "198 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/244.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/244.png",
      hires: "./Imagens/Pokedex/hires/244.png",
    },
  },
  {
    id: 245,
    name: {
      english: "Suicune",
      japanese: "スイクン",
      chinese: "水君",
      french: "Suicune",
    },
    type: ["Água"],
    base: {
      HP: 100,
      Attack: 75,
      Defense: 115,
      "Sp. Attack": 90,
      "Sp. Defense": 115,
      Speed: 85,
    },
    species: "Aurora Pokémon",
    description:
      "Suicune personifica a compaixão de uma fonte pura de água. Ele corre pela terra com graciosidade. Este Pokémon tem o poder de purificar água suja.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "187 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/245.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/245.png",
      hires: "./Imagens/Pokedex/hires/245.png",
    },
  },
  {
    id: 246,
    name: {
      english: "Larvitar",
      japanese: "ヨーギラス",
      chinese: "幼基拉斯",
      french: "Embrylex",
    },
    type: ["Rocha", "Terra"],
    base: {
      HP: 50,
      Attack: 64,
      Defense: 50,
      "Sp. Attack": 45,
      "Sp. Defense": 50,
      Speed: 41,
    },
    species: "Rocha Skin Pokémon",
    description:
      "Criado com nutrientes que encontra na sujeira, ele come aproximadamente uma montanha de sujeira antes de se tornar uma pupa.",
    evolution: {
      next: [["247", "Level 30"]],
    },
    profile: {
      height: "0.6 m",
      weight: "72 kg",
      egg: ["Monster"],
      ability: [
        ["Guts", "false"],
        ["Sand Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/246.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/246.png",
      hires: "./Imagens/Pokedex/hires/246.png",
    },
  },
  {
    id: 247,
    name: {
      english: "Pupitar",
      japanese: "サナギラス",
      chinese: "沙基拉斯",
      french: "Ymphect",
    },
    type: ["Rocha", "Terra"],
    base: {
      HP: 70,
      Attack: 84,
      Defense: 70,
      "Sp. Attack": 65,
      "Sp. Defense": 70,
      Speed: 51,
    },
    species: "Hard Shell Pokémon",
    description:
      "Esta pupa perigosa se contorce. Sua casca é tão dura quanto a rocha, contendo seu novo corpo em formação gradual dentro.",
    evolution: {
      prev: ["246", "Level 30"],
      next: [["248", "Level 55"]],
    },
    profile: {
      height: "1.2 m",
      weight: "152 kg",
      egg: ["Monster"],
      ability: [["Shed Skin", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/247.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/247.png",
      hires: "./Imagens/Pokedex/hires/247.png",
    },
  },
  {
    id: 248,
    name: {
      english: "Tyranitar",
      japanese: "バンギラス",
      chinese: "班基拉斯",
      french: "Tyranocif",
    },
    type: ["Rocha", "Sombrio"],
    base: {
      HP: 100,
      Attack: 134,
      Defense: 110,
      "Sp. Attack": 95,
      "Sp. Defense": 100,
      Speed: 61,
    },
    species: "Armor Pokémon",
    description:
      "Este Pokémon é um desastre móvel, deixando montanhas desmoronadas e casas destruídas em seu rastro.",
    evolution: {
      prev: ["247", "Level 55"],
    },
    profile: {
      height: "2 m",
      weight: "202 kg",
      egg: ["Monster"],
      ability: [
        ["Sand Stream", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/248.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/248.png",
      hires: "./Imagens/Pokedex/hires/248.png",
    },
  },
  {
    id: 249,
    name: {
      english: "Lugia",
      japanese: "ルギア",
      chinese: "洛奇亚",
      french: "Lugia",
    },
    type: ["Psíquico", "Voador"],
    base: {
      HP: 106,
      Attack: 90,
      Defense: 130,
      "Sp. Attack": 90,
      "Sp. Defense": 154,
      Speed: 110,
    },
    species: "Diving Pokémon",
    description:
      "As asas de Lugia possuem um poder devastador - um leve bater de suas asas pode explodir casas comuns. Como resultado, este Pokémon escolhe viver fora de vista nas profundezas do mar.",
    evolution: {},
    profile: {
      height: "5.2 m",
      weight: "216 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Multiscale", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/249.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/249.png",
      hires: "./Imagens/Pokedex/hires/249.png",
    },
  },
  {
    id: 250,
    name: {
      english: "Ho-Oh",
      japanese: "ホウオウ",
      chinese: "凤王",
      french: "Ho-Oh",
    },
    type: ["Fogo", "Voador"],
    base: {
      HP: 106,
      Attack: 130,
      Defense: 90,
      "Sp. Attack": 110,
      "Sp. Defense": 154,
      Speed: 90,
    },
    species: "Rainbow Pokémon",
    description:
      "As penas de Ho-Oh brilham em sete cores dependendo do ângulo em que são atingidas pela luz. Diz-se que essas penas trazem felicidade aos portadores. Diz-se que este Pokémon vive a pé de um arco-íris.",
    evolution: {},
    profile: {
      height: "3.8 m",
      weight: "199 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Regenerator", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/250.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/250.png",
      hires: "./Imagens/Pokedex/hires/250.png",
    },
  },
  {
    id: 251,
    name: {
      english: "Celebi",
      japanese: "セレビィ",
      chinese: "时拉比",
      french: "Celebi",
    },
    type: ["Psíquico", "Grama"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 100,
    },
    species: "Time Travel Pokémon",
    description:
      "Este Pokémon veio do futuro cruzando o tempo. Acredita-se que, enquanto Celebi aparecer, um futuro brilhante e radiante nos aguarda.",
    evolution: {},
    profile: {
      height: "0.6 m",
      weight: "5 kg",
      egg: ["Undiscovered"],
      ability: [["Natural Cure", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/251.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/251.png",
      hires: "./Imagens/Pokedex/hires/251.png",
    },
  },
  {
    id: 252,
    name: {
      english: "Treecko",
      japanese: "キモリ",
      chinese: "木守宫",
      french: "Arcko",
    },
    type: ["Grama"],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 35,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      Speed: 70,
    },
    species: "Wood Gecko Pokémon",
    description:
      "Treecko é legal, calmo e coletado - ele nunca entra em pânico em nenhuma situação. Se um inimigo maior encarasse este Pokémon, ele retribuiria o olhar sem ceder um centímetro de terreno.",
    evolution: {
      next: [["253", "Level 16"]],
    },
    profile: {
      height: "0.5 m",
      weight: "5 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Overgrow", "false"],
        ["Unburden", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/252.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/252.png",
      hires: "./Imagens/Pokedex/hires/252.png",
    },
  },
  {
    id: 253,
    name: {
      english: "Grovyle",
      japanese: "ジュプトル",
      chinese: "森林蜥蜴",
      french: "Massko",
    },
    type: ["Grama"],
    base: {
      HP: 50,
      Attack: 65,
      Defense: 45,
      "Sp. Attack": 85,
      "Sp. Defense": 65,
      Speed: 95,
    },
    species: "Wood Gecko Pokémon",
    description:
      "Este Pokémon voa habilmente de galho em galho nas árvores. Em uma floresta, nenhum Pokémon pode esperar pegar um Grovyle fugindo, não importa quão rápido seja.",
    evolution: {
      prev: ["252", "Level 16"],
      next: [["254", "Level 36"]],
    },
    profile: {
      height: "0.9 m",
      weight: "21.6 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Overgrow", "false"],
        ["Unburden", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/253.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/253.png",
      hires: "./Imagens/Pokedex/hires/253.png",
    },
  },
  {
    id: 254,
    name: {
      english: "Sceptile",
      japanese: "ジュカイン",
      chinese: "蜥蜴王",
      french: "Jungko",
    },
    type: ["Grama"],
    base: {
      HP: 70,
      Attack: 85,
      Defense: 65,
      "Sp. Attack": 105,
      "Sp. Defense": 85,
      Speed: 120,
    },
    species: "Forest Pokémon",
    description:
      "Sceptile tem sementes crescendo em suas costas. Diz-se que estão cheias de nutrientes que revitalizam as árvores. Este Pokémon cria as árvores em uma floresta com cuidado amoroso.",
    evolution: {
      prev: ["253", "Level 36"],
    },
    profile: {
      height: "1.7 m",
      weight: "52.2 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Overgrow", "false"],
        ["Unburden", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/254.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/254.png",
      hires: "./Imagens/Pokedex/hires/254.png",
    },
  },
  {
    id: 255,
    name: {
      english: "Torchic",
      japanese: "アチャモ",
      chinese: "火稚鸡",
      french: "Poussifeu",
    },
    type: ["Fogo"],
    base: {
      HP: 45,
      Attack: 60,
      Defense: 40,
      "Sp. Attack": 70,
      "Sp. Defense": 50,
      Speed: 45,
    },
    species: "Chick Pokémon",
    description:
      "Torchic tem um lugar dentro de seu corpo onde guarda sua chama. Dê um abraço nele - ele estará brilhando com calor. Este Pokémon é coberto por toda parte por uma camada fofa de penugem.",
    evolution: {
      next: [["256", "Level 16"]],
    },
    profile: {
      height: "0.4 m",
      weight: "2.5 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Speed Boost", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/255.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/255.png",
      hires: "./Imagens/Pokedex/hires/255.png",
    },
  },
  {
    id: 256,
    name: {
      english: "Combusken",
      japanese: "ワカシャモ",
      chinese: "力壮鸡",
      french: "Galifeu",
    },
    type: ["Fogo", "Lutador"],
    base: {
      HP: 60,
      Attack: 85,
      Defense: 60,
      "Sp. Attack": 85,
      "Sp. Defense": 60,
      Speed: 55,
    },
    species: "Young Fowl Pokémon",
    description:
      "Combusken batalha com as chamas intensamente quentes que expele de seu bico e com chutes extraordinariamente destrutivos. O grito deste Pokémon é muito alto e perturbador.",
    evolution: {
      prev: ["255", "Level 16"],
      next: [["257", "Level 36"]],
    },
    profile: {
      height: "0.9 m",
      weight: "19.5 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Speed Boost", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/256.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/256.png",
      hires: "./Imagens/Pokedex/hires/256.png",
    },
  },
  {
    id: 257,
    name: {
      english: "Blaziken",
      japanese: "バシャーモ",
      chinese: "火焰鸡",
      french: "Braségali",
    },
    type: ["Fogo", "Lutador"],
    base: {
      HP: 80,
      Attack: 120,
      Defense: 70,
      "Sp. Attack": 110,
      "Sp. Defense": 70,
      Speed: 80,
    },
    species: "Blaze Pokémon",
    description:
      "Blaziken tem pernas incrivelmente fortes - pode facilmente limpar um prédio de 30 andares em um salto. Os socos flamejantes deste Pokémon deixam seus inimigos queimados e enegrecidos.",
    evolution: {
      prev: ["256", "Level 36"],
    },
    profile: {
      height: "1.9 m",
      weight: "52 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Speed Boost", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/257.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/257.png",
      hires: "./Imagens/Pokedex/hires/257.png",
    },
  },
  {
    id: 258,
    name: {
      english: "Mudkip",
      japanese: "ミズゴロウ",
      chinese: "水跃鱼",
      french: "Gobou",
    },
    type: ["Água"],
    base: {
      HP: 50,
      Attack: 70,
      Defense: 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 40,
    },
    species: "Mud Fish Pokémon",
    description:
      "Na água, Mudkip respira usando as guelras em suas bochechas. Se enfrentar uma situação difícil em batalha, este Pokémon desencadeará seu incrível poder - pode esmagar rochas maiores que ele mesmo.",
    evolution: {
      next: [["259", "Level 16"]],
    },
    profile: {
      height: "0.4 m",
      weight: "7.6 kg",
      egg: ["Monster", "Água 1"],
      ability: [
        ["Torrent", "false"],
        ["Damp", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/258.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/258.png",
      hires: "./Imagens/Pokedex/hires/258.png",
    },
  },
  {
    id: 259,
    name: {
      english: "Marshtomp",
      japanese: "ヌマクロー",
      chinese: "沼跃鱼",
      french: "Flobio",
    },
    type: ["Água", "Terra"],
    base: {
      HP: 70,
      Attack: 85,
      Defense: 70,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      Speed: 50,
    },
    species: "Mud Fish Pokémon",
    description:
      "Marshtomp é muito mais rápido em viajar pela lama do que em nadar. As nádegas deste Pokémon exibem um desenvolvimento óbvio, dando-lhe a capacidade de andar apenas sobre suas patas traseiras.",
    evolution: {
      prev: ["258", "Level 16"],
      next: [["260", "Level 36"]],
    },
    profile: {
      height: "0.7 m",
      weight: "28 kg",
      egg: ["Monster", "Água 1"],
      ability: [
        ["Torrent", "false"],
        ["Damp", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/259.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/259.png",
      hires: "./Imagens/Pokedex/hires/259.png",
    },
  },
  {
    id: 260,
    name: {
      english: "Swampert",
      japanese: "ラグラージ",
      chinese: "巨沼怪",
      french: "Laggron",
    },
    type: ["Água", "Terra"],
    base: {
      HP: 100,
      Attack: 110,
      Defense: 90,
      "Sp. Attack": 85,
      "Sp. Defense": 90,
      Speed: 60,
    },
    species: "Mud Fish Pokémon",
    description:
      "Swampert prevê tempestades sentindo diferenças sutis nos sons das ondas e dos ventos marés com suas nadadeiras. Se uma tempestade estiver se aproximando, ele empilha pedras para se proteger.",
    evolution: {
      prev: ["259", "Level 36"],
    },
    profile: {
      height: "1.5 m",
      weight: "81.9 kg",
      egg: ["Monster", "Água 1"],
      ability: [
        ["Torrent", "false"],
        ["Damp", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/260.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/260.png",
      hires: "./Imagens/Pokedex/hires/260.png",
    },
  },
  {
    id: 261,
    name: {
      english: "Poochyena",
      japanese: "ポチエナ",
      chinese: "土狼犬",
      french: "Medhyèna",
    },
    type: ["Sombrio"],
    base: {
      HP: 35,
      Attack: 55,
      Defense: 35,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 35,
    },
    species: "Bite Pokémon",
    description:
      "Poochyena é um onívoro - ele comerá qualquer coisa. Uma característica distintiva é o tamanho de suas presas em comparação com seu corpo. Este Pokémon tenta intimidar seus inimigos fazendo o pelo em sua cauda eriçar.",
    evolution: {
      next: [["262", "Level 18"]],
    },
    profile: {
      height: "0.5 m",
      weight: "13.6 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Quick Feet", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/261.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/261.png",
      hires: "./Imagens/Pokedex/hires/261.png",
    },
  },
  {
    id: 262,
    name: {
      english: "Mightyena",
      japanese: "グラエナ",
      chinese: "大狼犬",
      french: "Grahyèna",
    },
    type: ["Sombrio"],
    base: {
      HP: 70,
      Attack: 90,
      Defense: 70,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 70,
    },
    species: "Bite Pokémon",
    description:
      "Mightyena viaja e age como uma matilha na natureza. A memória de sua vida na natureza o obriga a obedecer apenas aqueles treinadores que ele reconhece como possuindo habilidade superior.",
    evolution: {
      prev: ["261", "Level 18"],
    },
    profile: {
      height: "1 m",
      weight: "37 kg",
      egg: ["Field"],
      ability: [
        ["Intimidate", "false"],
        ["Quick Feet", "false"],
        ["Moxie", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/262.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/262.png",
      hires: "./Imagens/Pokedex/hires/262.png",
    },
  },
  {
    id: 263,
    name: {
      english: "Zigzagoon",
      japanese: "ジグザグマ",
      chinese: "蛇纹熊",
      french: "Zigzaton",
    },
    type: ["Normal"],
    base: {
      HP: 38,
      Attack: 30,
      Defense: 41,
      "Sp. Attack": 30,
      "Sp. Defense": 41,
      Speed: 60,
    },
    species: "Tiny Raccoon Pokémon",
    description:
      "O pelo nas costas de Zigzagoon é eriçado. Ele esfrega o pelo duro nas costas nas árvores para deixar suas marcas territoriais. Este Pokémon pode fingir estar morto para enganar inimigos em batalha.",
    evolution: {
      next: [["264", "Level 20"]],
    },
    profile: {
      height: "0.4 m",
      weight: "17.5 kg",
      egg: ["Field"],
      ability: [
        ["Pickup", "false"],
        ["Gluttony", "false"],
        ["Quick Feet", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/263.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/263.png",
      hires: "./Imagens/Pokedex/hires/263.png",
    },
  },
  {
    id: 264,
    name: {
      english: "Linoone",
      japanese: "マッスグマ",
      chinese: "直冲熊",
      french: "Linéon",
    },
    type: ["Normal"],
    base: {
      HP: 78,
      Attack: 70,
      Defense: 61,
      "Sp. Attack": 50,
      "Sp. Defense": 61,
      Speed: 100,
    },
    species: "Rushing Pokémon",
    description:
      "Ao caçar, Linoone fará uma linha reta para a presa em uma corrida completa. Embora este Pokémon seja capaz de atingir 60 mph, ele tem que parar com um guincho antes de poder virar.",
    evolution: {
      prev: ["263", "Level 20"],
      next: [["862", "Level 35, Nighttime"]],
    },
    profile: {
      height: "0.5 m",
      weight: "32.5 kg",
      egg: ["Field"],
      ability: [
        ["Pickup", "false"],
        ["Gluttony", "false"],
        ["Quick Feet", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/264.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/264.png",
      hires: "./Imagens/Pokedex/hires/264.png",
    },
  },
  {
    id: 265,
    name: {
      english: "Wurmple",
      japanese: "ケムッソ",
      chinese: "刺尾虫",
      french: "Chenipotte",
    },
    type: ["Inseto"],
    base: {
      HP: 45,
      Attack: 45,
      Defense: 35,
      "Sp. Attack": 20,
      "Sp. Defense": 30,
      Speed: 20,
    },
    species: "Worm Pokémon",
    description:
      "Wurmple é alvo de Swellow como presa. Este Pokémon tentará resistir apontando os espinhos em sua traseira para o predador atacante. Ele enfraquecerá o inimigo vazando veneno dos espinhos.",
    evolution: {
      next: [
        ["266", "Level 7, random based on personality"],
        ["268", "Level 7, random based on personality"],
      ],
    },
    profile: {
      height: "0.3 m",
      weight: "3.6 kg",
      egg: ["Inseto"],
      ability: [
        ["Shield Dust", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/265.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/265.png",
      hires: "./Imagens/Pokedex/hires/265.png",
    },
  },
  {
    id: 266,
    name: {
      english: "Silcoon",
      japanese: "カラサリス",
      chinese: "甲壳茧",
      french: "Armulys",
    },
    type: ["Inseto"],
    base: {
      HP: 50,
      Attack: 35,
      Defense: 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      Speed: 15,
    },
    species: "Cocoon Pokémon",
    description:
      "Silcoon pensava-se que suportaria a fome e não consumiria nada antes de sua evolução. No entanto, agora se acredita que este Pokémon sacia sua sede bebendo água da chuva que se acumula em sua seda.",
    evolution: {
      prev: ["265", "Level 7, random based on personality"],
      next: [["267", "Level 10"]],
    },
    profile: {
      height: "0.6 m",
      weight: "10 kg",
      egg: ["Inseto"],
      ability: [["Shed Skin", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/266.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/266.png",
      hires: "./Imagens/Pokedex/hires/266.png",
    },
  },
  {
    id: 267,
    name: {
      english: "Beautifly",
      japanese: "アゲハント",
      chinese: "狩猎凤蝶",
      french: "Charmillon",
    },
    type: ["Inseto", "Voador"],
    base: {
      HP: 60,
      Attack: 70,
      Defense: 50,
      "Sp. Attack": 100,
      "Sp. Defense": 50,
      Speed: 65,
    },
    species: "Butterfly Pokémon",
    description:
      "Beautifly tem uma boca longa como uma agulha enrolada, que é muito conveniente para coletar pólen de flores. Este Pokémon cavalga os ventos da primavera enquanto flutua ao redor coletando pólen.",
    evolution: {
      prev: ["266", "Level 10"],
    },
    profile: {
      height: "1 m",
      weight: "28.4 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Rivalry", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/267.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/267.png",
      hires: "./Imagens/Pokedex/hires/267.png",
    },
  },
  {
    id: 268,
    name: {
      english: "Cascoon",
      japanese: "マユルド",
      chinese: "盾甲茧",
      french: "Blindalys",
    },
    type: ["Inseto"],
    base: {
      HP: 50,
      Attack: 35,
      Defense: 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      Speed: 15,
    },
    species: "Cocoon Pokémon",
    description:
      "Se for atacado, Cascoon permanece imóvel, por mais que possa ser machucado. Ele faz isso porque, se se movesse, seu corpo ficaria fraco após a evolução. Este Pokémon também não esquecerá a dor que suportou.",
    evolution: {
      prev: ["265", "Level 7, random based on personality"],
      next: [["269", "Level 10"]],
    },
    profile: {
      height: "0.7 m",
      weight: "11.5 kg",
      egg: ["Inseto"],
      ability: [["Shed Skin", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/268.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/268.png",
      hires: "./Imagens/Pokedex/hires/268.png",
    },
  },
  {
    id: 269,
    name: {
      english: "Dustox",
      japanese: "ドクケイル",
      chinese: "毒粉蛾",
      french: "Papinox",
    },
    type: ["Inseto", "Venenoso"],
    base: {
      HP: 60,
      Attack: 50,
      Defense: 70,
      "Sp. Attack": 50,
      "Sp. Defense": 90,
      Speed: 65,
    },
    species: "Venenoso Moth Pokémon",
    description:
      "Quando Dustox bate suas asas, uma fina poeira é espalhada por toda parte. Essa poeira é na verdade um veneno poderoso que até fará um lutador profissional ficar doente. Este Pokémon procura comida usando suas antenas como radar.",
    evolution: {
      prev: ["265", "Level 10"],
    },
    profile: {
      height: "1.2 m",
      weight: "31.6 kg",
      egg: ["Inseto"],
      ability: [
        ["Shield Dust", "false"],
        ["Compound Eyes", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/269.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/269.png",
      hires: "./Imagens/Pokedex/hires/269.png",
    },
  },
  {
    id: 270,
    name: {
      english: "Lotad",
      japanese: "ハスボー",
      chinese: "莲叶童子",
      french: "Nénupiot",
    },
    type: ["Água", "Grama"],
    base: {
      HP: 40,
      Attack: 30,
      Defense: 30,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      Speed: 30,
    },
    species: "Água Weed Pokémon",
    description:
      "Lotad, diz-se, habitou a terra antes. No entanto, acredita-se que este Pokémon tenha retornado à água porque a folha em sua cabeça cresceu grande e pesada. Agora vive flutuando sobre a água.",
    evolution: {
      next: [["271", "Level 14"]],
    },
    profile: {
      height: "0.5 m",
      weight: "2.6 kg",
      egg: ["Água 1", "Grama"],
      ability: [
        ["Swift Swim", "false"],
        ["Rain Dish", "false"],
        ["Own Tempo", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/270.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/270.png",
      hires: "./Imagens/Pokedex/hires/270.png",
    },
  },
  {
    id: 271,
    name: {
      english: "Lombre",
      japanese: "ハスブレロ",
      chinese: "莲帽小童",
      french: "Lombre",
    },
    type: ["Água", "Grama"],
    base: {
      HP: 60,
      Attack: 50,
      Defense: 50,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      Speed: 50,
    },
    species: "Jolly Pokémon",
    description:
      "Todo o corpo de Lombre é coberto por um filme escorregadio e viscoso. É horrível ser tocado pelas mãos deste Pokémon. Lombre é frequentemente confundido com uma criança humana.",
    evolution: {
      prev: ["270", "Level 14"],
      next: [["272", "use Água Stone"]],
    },
    profile: {
      height: "1.2 m",
      weight: "32.5 kg",
      egg: ["Água 1", "Grama"],
      ability: [
        ["Swift Swim", "false"],
        ["Rain Dish", "false"],
        ["Own Tempo", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/271.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/271.png",
      hires: "./Imagens/Pokedex/hires/271.png",
    },
  },
  {
    id: 272,
    name: {
      english: "Ludicolo",
      japanese: "ルンパッパ",
      chinese: "乐天河童",
      french: "Ludicolo",
    },
    type: ["Água", "Grama"],
    base: {
      HP: 80,
      Attack: 70,
      Defense: 70,
      "Sp. Attack": 90,
      "Sp. Defense": 100,
      Speed: 70,
    },
    species: "Carefree Pokémon",
    description:
      "Ao ouvir um ritmo animado e alegre, as células do corpo de Ludicolo se tornam muito enérgicas e ativas. Mesmo em batalha, este Pokémon exibirá uma quantidade incrível de poder.",
    evolution: {
      prev: ["271", "use Água Stone"],
    },
    profile: {
      height: "1.5 m",
      weight: "55 kg",
      egg: ["Água 1", "Grama"],
      ability: [
        ["Swift Swim", "false"],
        ["Rain Dish", "false"],
        ["Own Tempo", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/272.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/272.png",
      hires: "./Imagens/Pokedex/hires/272.png",
    },
  },
  {
    id: 273,
    name: {
      english: "Seedot",
      japanese: "タネボー",
      chinese: "橡实果",
      french: "Grainipiot",
    },
    type: ["Grama"],
    base: {
      HP: 40,
      Attack: 40,
      Defense: 50,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 30,
    },
    species: "Acorn Pokémon",
    description:
      "Seedot parece exatamente como uma bolota quando está pendurado em um galho de árvore. Ele assusta outros Pokémon movendo-se repentinamente. Este Pokémon polpa seu corpo uma vez por dia usando folhas.",
    evolution: {
      next: [["274", "Level 14"]],
    },
    profile: {
      height: "0.5 m",
      weight: "4 kg",
      egg: ["Field", "Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Early Bird", "false"],
        ["Pickpocket", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/273.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/273.png",
      hires: "./Imagens/Pokedex/hires/273.png",
    },
  },
  {
    id: 274,
    name: {
      english: "Nuzleaf",
      japanese: "コノハナ",
      chinese: "长鼻叶",
      french: "Pifeuil",
    },
    type: ["Grama", "Sombrio"],
    base: {
      HP: 70,
      Attack: 70,
      Defense: 40,
      "Sp. Attack": 60,
      "Sp. Defense": 40,
      Speed: 60,
    },
    species: "Wily Pokémon",
    description:
      "Este Pokémon puxa a folha em sua cabeça e faz uma flauta com ela. O som da flauta de Nuzleaf causa medo e incerteza nos corações das pessoas perdidas em uma floresta.",
    evolution: {
      prev: ["273", "Level 14"],
      next: [["275", "use Leaf Stone"]],
    },
    profile: {
      height: "1 m",
      weight: "28 kg",
      egg: ["Field", "Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Early Bird", "false"],
        ["Pickpocket", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/274.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/274.png",
      hires: "./Imagens/Pokedex/hires/274.png",
    },
  },
  {
    id: 275,
    name: {
      english: "Shiftry",
      japanese: "ダーテング",
      chinese: "狡猾天狗",
      french: "TengalGelo",
    },
    type: ["Grama", "Sombrio"],
    base: {
      HP: 90,
      Attack: 100,
      Defense: 60,
      "Sp. Attack": 90,
      "Sp. Defense": 60,
      Speed: 80,
    },
    species: "Wicked Pokémon",
    description:
      "Os grandes fãs de Shiftry geram rajadas de vento incríveis a uma velocidade próxima a 100 pés por segundo. O vento chicoteado sopra tudo para longe. Este Pokémon escolhe viver quietamente nas profundezas das florestas.",
    evolution: {
      prev: ["274", "use Leaf Stone"],
    },
    profile: {
      height: "1.3 m",
      weight: "59.6 kg",
      egg: ["Field", "Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Early Bird", "false"],
        ["Pickpocket", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/275.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/275.png",
      hires: "./Imagens/Pokedex/hires/275.png",
    },
  },
  {
    id: 276,
    name: {
      english: "Taillow",
      japanese: "スバメ",
      chinese: "傲骨燕",
      french: "Nirondelle",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 40,
      Attack: 55,
      Defense: 30,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 85,
    },
    species: "Tiny Swallow Pokémon",
    description:
      "Taillow é jovem - acabou de sair do ninho. Como resultado, às vezes fica solitário e chora à noite. Este Pokémon se alimenta de Wurmple que vivem nas florestas.",
    evolution: {
      next: [["277", "Level 22"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2.3 kg",
      egg: ["Voador"],
      ability: [
        ["Guts", "false"],
        ["Scrappy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/276.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/276.png",
      hires: "./Imagens/Pokedex/hires/276.png",
    },
  },
  {
    id: 277,
    name: {
      english: "Swellow",
      japanese: "オオスバメ",
      chinese: "大王燕",
      french: "Hélédelle",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 60,
      Attack: 85,
      Defense: 60,
      "Sp. Attack": 75,
      "Sp. Defense": 50,
      Speed: 125,
    },
    species: "Swallow Pokémon",
    description:
      "Swellow é muito consciente da manutenção de suas asas brilhantes. Uma vez que dois Swellow são reunidos, eles diligentemente cuidam da limpeza das asas um do outro.",
    evolution: {
      prev: ["276", "Level 22"],
    },
    profile: {
      height: "0.7 m",
      weight: "19.8 kg",
      egg: ["Voador"],
      ability: [
        ["Guts", "false"],
        ["Scrappy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/277.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/277.png",
      hires: "./Imagens/Pokedex/hires/277.png",
    },
  },
  {
    id: 278,
    name: {
      english: "Wingull",
      japanese: "キャモメ",
      chinese: "长翅鸥",
      french: "Goélise",
    },
    type: ["Água", "Voador"],
    base: {
      HP: 40,
      Attack: 30,
      Defense: 30,
      "Sp. Attack": 55,
      "Sp. Defense": 30,
      Speed: 85,
    },
    species: "Seagull Pokémon",
    description:
      "Ele constrói ninhos em penhascos perto do mar. Ele circula nos céus acima do oceano procurando por sua comida favorita - Wishiwashi.",
    evolution: {
      next: [["279", "Level 25"]],
    },
    profile: {
      height: "0.6 m",
      weight: "9.5 kg",
      egg: ["Água 1", "Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Hydration", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/278.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/278.png",
      hires: "./Imagens/Pokedex/hires/278.png",
    },
  },
  {
    id: 279,
    name: {
      english: "Pelipper",
      japanese: "ペリッパー",
      chinese: "大嘴鸥",
      french: "Bekipan",
    },
    type: ["Água", "Voador"],
    base: {
      HP: 60,
      Attack: 50,
      Defense: 100,
      "Sp. Attack": 95,
      "Sp. Defense": 70,
      Speed: 65,
    },
    species: "Água Bird Pokémon",
    description:
      "Ele recolhe Wishiwashi em seu enorme bico e os engole inteiros. Ele pode devorar mais de 30 de uma vez!",
    evolution: {
      prev: ["278", "Level 25"],
    },
    profile: {
      height: "1.2 m",
      weight: "28 kg",
      egg: ["Água 1", "Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Drizzle", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/279.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/279.png",
      hires: "./Imagens/Pokedex/hires/279.png",
    },
  },
  {
    id: 280,
    name: {
      english: "Ralts",
      japanese: "ラルトス",
      chinese: "拉鲁拉丝",
      french: "Tarsal",
    },
    type: ["Psíquico", "Fada"],
    base: {
      HP: 28,
      Attack: 25,
      Defense: 25,
      "Sp. Attack": 45,
      "Sp. Defense": 35,
      Speed: 40,
    },
    species: "Feeling Pokémon",
    description:
      "Ralts tem a capacidade de sentir as emoções das pessoas. Se seu treinador estiver de bom humor, este Pokémon ficará alegre e alegre da mesma forma.",
    evolution: {
      next: [["281", "Level 20"]],
    },
    profile: {
      height: "0.4 m",
      weight: "6.6 kg",
      egg: ["Amorphous"],
      ability: [
        ["Synchronize", "false"],
        ["Trace", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/280.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/280.png",
      hires: "./Imagens/Pokedex/hires/280.png",
    },
  },
  {
    id: 281,
    name: {
      english: "Kirlia",
      japanese: "キルリア",
      chinese: "奇鲁莉安",
      french: "Kirlia",
    },
    type: ["Psíquico", "Fada"],
    base: {
      HP: 38,
      Attack: 35,
      Defense: 35,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      Speed: 50,
    },
    species: "Emotion Pokémon",
    description:
      "Kirlia usa os chifres em sua cabeça para amplificar seu poder psicoquinético. Quando o Pokémon usa seu poder, o ar ao seu redor se distorce, criando miragens de cenários inexistentes.",
    evolution: {
      prev: ["280", "Level 20"],
      next: [["282", "Level 30"]],
    },
    profile: {
      height: "0.8 m",
      weight: "20.2 kg",
      egg: ["Amorphous"],
      ability: [
        ["Synchronize", "false"],
        ["Trace", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/281.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/281.png",
      hires: "./Imagens/Pokedex/hires/281.png",
    },
  },
  {
    id: 282,
    name: {
      english: "Gardevoir",
      japanese: "サーナイト",
      chinese: "沙奈朵",
      french: "Gardevoir",
    },
    type: ["Psíquico", "Fada"],
    base: {
      HP: 68,
      Attack: 65,
      Defense: 65,
      "Sp. Attack": 125,
      "Sp. Defense": 115,
      Speed: 80,
    },
    species: "Embrace Pokémon",
    description:
      "Gardevoir tem o poder psicoquinético de distorcer as dimensões e criar um pequeno buraco negro. Este Pokémon tentará proteger seu treinador mesmo à custa de sua própria vida.",
    evolution: {
      prev: ["281", "Level 30"],
    },
    profile: {
      height: "1.6 m",
      weight: "48.4 kg",
      egg: ["Amorphous"],
      ability: [
        ["Synchronize", "false"],
        ["Trace", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/282.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/282.png",
      hires: "./Imagens/Pokedex/hires/282.png",
    },
  },
  {
    id: 283,
    name: {
      english: "Surskit",
      japanese: "アメタマ",
      chinese: "溜溜糖球",
      french: "Arakdo",
    },
    type: ["Inseto", "Água"],
    base: {
      HP: 40,
      Attack: 30,
      Defense: 32,
      "Sp. Attack": 50,
      "Sp. Defense": 52,
      Speed: 65,
    },
    species: "Pond Skater Pokémon",
    description:
      "Ele vive em lagoas e pântanos que apresentam muita vida vegetal. Ele costuma lutar com Dewpider, cujo habitat e dieta são semelhantes.",
    evolution: {
      next: [["284", "Level 22"]],
    },
    profile: {
      height: "0.5 m",
      weight: "1.7 kg",
      egg: ["Água 1", "Inseto"],
      ability: [
        ["Swift Swim", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/283.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/283.png",
      hires: "./Imagens/Pokedex/hires/283.png",
    },
  },
  {
    id: 284,
    name: {
      english: "Masquerain",
      japanese: "アメモース",
      chinese: "雨翅蛾",
      french: "Maskadra",
    },
    type: ["Inseto", "Voador"],
    base: {
      HP: 70,
      Attack: 60,
      Defense: 62,
      "Sp. Attack": 100,
      "Sp. Defense": 82,
      Speed: 80,
    },
    species: "Eyeball Pokémon",
    description:
      "Suas antenas finas, semelhantes a asas, são altamente absorventes. Ele espera dias chuvosos em buracos de árvores.",
    evolution: {
      prev: ["283", "Level 22"],
    },
    profile: {
      height: "0.8 m",
      weight: "3.6 kg",
      egg: ["Água 1", "Inseto"],
      ability: [
        ["Intimidate", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/284.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/284.png",
      hires: "./Imagens/Pokedex/hires/284.png",
    },
  },
  {
    id: 285,
    name: {
      english: "Shroomish",
      japanese: "キノココ",
      chinese: "蘑蘑菇",
      french: "Balignon",
    },
    type: ["Grama"],
    base: {
      HP: 60,
      Attack: 40,
      Defense: 60,
      "Sp. Attack": 40,
      "Sp. Defense": 60,
      Speed: 35,
    },
    species: "Mushroom Pokémon",
    description:
      "Se Shroomish sentir perigo, ele sacudirá seu corpo e espalhará esporos do topo de sua cabeça. Os esporos deste Pokémon são tão tóxicos que fazem árvores e ervas murcharem.",
    evolution: {
      next: [["286", "Level 23"]],
    },
    profile: {
      height: "0.4 m",
      weight: "4.5 kg",
      egg: ["Fada", "Grama"],
      ability: [
        ["Effect Spore", "false"],
        ["Venenoso Heal", "false"],
        ["Quick Feet", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/285.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/285.png",
      hires: "./Imagens/Pokedex/hires/285.png",
    },
  },
  {
    id: 286,
    name: {
      english: "Breloom",
      japanese: "キノガッサ",
      chinese: "斗笠菇",
      french: "Chapignon",
    },
    type: ["Grama", "Lutador"],
    base: {
      HP: 60,
      Attack: 130,
      Defense: 80,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 70,
    },
    species: "Mushroom Pokémon",
    description:
      "As sementes que cercam a cauda de Breloom são feitas de esporos tóxicos endurecidos. É horrível comer as sementes. Apenas dar uma mordida na semente deste Pokémon fará sua barriga roncar.",
    evolution: {
      prev: ["285", "Level 23"],
    },
    profile: {
      height: "1.2 m",
      weight: "39.2 kg",
      egg: ["Fada", "Grama"],
      ability: [
        ["Effect Spore", "false"],
        ["Venenoso Heal", "false"],
        ["Technician", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/286.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/286.png",
      hires: "./Imagens/Pokedex/hires/286.png",
    },
  },
  {
    id: 287,
    name: {
      english: "Slakoth",
      japanese: "ナマケロ",
      chinese: "懒人獭",
      french: "Parecool",
    },
    type: ["Normal"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 60,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 30,
    },
    species: "Slacker Pokémon",
    description:
      "O coração de Slakoth bate apenas uma vez por minuto. Aconteça o que acontecer, ele está contente em ficar parado sem movimento. É raro ver este Pokémon em movimento.",
    evolution: {
      next: [["288", "Level 18"]],
    },
    profile: {
      height: "0.8 m",
      weight: "24 kg",
      egg: ["Field"],
      ability: [["Truant", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/287.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/287.png",
      hires: "./Imagens/Pokedex/hires/287.png",
    },
  },
  {
    id: 288,
    name: {
      english: "Vigoroth",
      japanese: "ヤルキモノ",
      chinese: "过动猿",
      french: "Vigoroth",
    },
    type: ["Normal"],
    base: {
      HP: 80,
      Attack: 80,
      Defense: 80,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 90,
    },
    species: "Wild Monkey Pokémon",
    description:
      "Vigoroth é simplesmente incapaz de permanecer imóvel. Mesmo quando tenta dormir, o sangue em suas veias fica agitado, obrigando este Pokémon a correr selvagem pela selva antes que possa se acalmar.",
    evolution: {
      prev: ["287", "Level 18"],
      next: [["289", "Level 36"]],
    },
    profile: {
      height: "1.4 m",
      weight: "46.5 kg",
      egg: ["Field"],
      ability: [["Vital Spirit", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/288.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/288.png",
      hires: "./Imagens/Pokedex/hires/288.png",
    },
  },
  {
    id: 289,
    name: {
      english: "Slaking",
      japanese: "ケッキング",
      chinese: "请假王",
      french: "Monaflèmit",
    },
    type: ["Normal"],
    base: {
      HP: 150,
      Attack: 160,
      Defense: 100,
      "Sp. Attack": 95,
      "Sp. Defense": 65,
      Speed: 100,
    },
    species: "Lazy Pokémon",
    description:
      "Onde quer que Slaking viva, anéis de mais de um metro de diâmetro aparecem em campos gramados. Eles são feitos pelo Pokémon enquanto come toda a grama ao alcance enquanto está deitado no chão.",
    evolution: {
      prev: ["288", "Level 36"],
    },
    profile: {
      height: "2 m",
      weight: "130.5 kg",
      egg: ["Field"],
      ability: [["Truant", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/289.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/289.png",
      hires: "./Imagens/Pokedex/hires/289.png",
    },
  },
  {
    id: 290,
    name: {
      english: "Nincada",
      japanese: "ツチニン",
      chinese: "土居忍士",
      french: "Ningale",
    },
    type: ["Inseto", "Terra"],
    base: {
      HP: 31,
      Attack: 45,
      Defense: 90,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 40,
    },
    species: "Trainee Pokémon",
    description:
      "Nincada vive subterrâneo. Ele usa suas garras afiadas para esculpir as raízes das árvores e absorver umidade e nutrientes. Este Pokémon não pode suportar a luz solar brilhante, por isso evita.",
    evolution: {
      next: [
        ["291", "Level 20"],
        ["292", "Level 20, empty spot in party, Pokéball in bag"],
      ],
    },
    profile: {
      height: "0.5 m",
      weight: "5.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Compound Eyes", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/290.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/290.png",
      hires: "./Imagens/Pokedex/hires/290.png",
    },
  },
  {
    id: 291,
    name: {
      english: "Ninjask",
      japanese: "テッカニン",
      chinese: "铁面忍者",
      french: "Ninjask",
    },
    type: ["Inseto", "Voador"],
    base: {
      HP: 61,
      Attack: 90,
      Defense: 45,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 160,
    },
    species: "Ninja Pokémon",
    description:
      "Se Ninjask não for treinado corretamente, ele se recusará a obedecer ao treinador e chorará alto continuamente. Devido a essa qualidade, diz-se que este Pokémon é aquele que testa as habilidades do treinador.",
    evolution: {
      prev: ["290", "Level 20"],
    },
    profile: {
      height: "0.8 m",
      weight: "12 kg",
      egg: ["Inseto"],
      ability: [
        ["Speed Boost", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/291.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/291.png",
      hires: "./Imagens/Pokedex/hires/291.png",
    },
  },
  {
    id: 292,
    name: {
      english: "Shedinja",
      japanese: "ヌケニン",
      chinese: "脱壳忍者",
      french: "Munja",
    },
    type: ["Inseto", "Fantasma"],
    base: {
      HP: 1,
      Attack: 90,
      Defense: 45,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 40,
    },
    species: "Shed Pokémon",
    description:
      "Shedinja é um Pokémon peculiar. Parece aparecer sem ser procurado em uma Pokébola após um Nincada evoluir. Este Pokémon bizarro é totalmente imóvel - ele nem respira.",
    evolution: {
      prev: ["290", "Level 20, empty spot in party, Pokéball in bag"],
    },
    profile: {
      height: "0.8 m",
      weight: "1.2 kg",
      egg: ["Mineral"],
      ability: [["Wonder Guard", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/292.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/292.png",
      hires: "./Imagens/Pokedex/hires/292.png",
    },
  },
  {
    id: 293,
    name: {
      english: "Whismur",
      japanese: "ゴニョニョ",
      chinese: "咕妞妞",
      french: "Chuchmur",
    },
    type: ["Normal"],
    base: {
      HP: 64,
      Attack: 51,
      Defense: 23,
      "Sp. Attack": 51,
      "Sp. Defense": 23,
      Speed: 28,
    },
    species: "Whisper Pokémon",
    description:
      "Whismur é muito tímido. Se começar a chorar alto, ficará assustado com seu próprio choro e chorará ainda mais. Quando finalmente para de chorar, o Pokémon vai dormir, todo cansado.",
    evolution: {
      next: [["294", "Level 20"]],
    },
    profile: {
      height: "0.6 m",
      weight: "16.3 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Soundproof", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/293.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/293.png",
      hires: "./Imagens/Pokedex/hires/293.png",
    },
  },
  {
    id: 294,
    name: {
      english: "Loudred",
      japanese: "ドゴーム",
      chinese: "吼爆弹",
      french: "Ramboum",
    },
    type: ["Normal"],
    base: {
      HP: 84,
      Attack: 71,
      Defense: 43,
      "Sp. Attack": 71,
      "Sp. Defense": 43,
      Speed: 48,
    },
    species: "Big VoGelo Pokémon",
    description:
      "Loudred grita enquanto pisa com os pés. Depois de terminar de gritar, este Pokémon fica incapaz de ouvir qualquer coisa por um tempo. Isso é considerado um ponto fraco.",
    evolution: {
      prev: ["293", "Level 20"],
      next: [["295", "Level 40"]],
    },
    profile: {
      height: "1 m",
      weight: "40.5 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Soundproof", "false"],
        ["Scrappy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/294.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/294.png",
      hires: "./Imagens/Pokedex/hires/294.png",
    },
  },
  {
    id: 295,
    name: {
      english: "Exploud",
      japanese: "バクオング",
      chinese: "爆音怪",
      french: "Brouhabam",
    },
    type: ["Normal"],
    base: {
      HP: 104,
      Attack: 91,
      Defense: 63,
      "Sp. Attack": 91,
      "Sp. Defense": 73,
      Speed: 68,
    },
    species: "Loud Noise Pokémon",
    description:
      "Exploud comunica seus sentimentos aos outros emitindo sons semelhantes a assobios dos tubos em seu corpo. Este Pokémon só aumenta sua voz quando está em batalha.",
    evolution: {
      prev: ["294", "Level 40"],
    },
    profile: {
      height: "1.5 m",
      weight: "84 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Soundproof", "false"],
        ["Scrappy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/295.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/295.png",
      hires: "./Imagens/Pokedex/hires/295.png",
    },
  },
  {
    id: 296,
    name: {
      english: "Makuhita",
      japanese: "マクノシタ",
      chinese: "幕下力士",
      french: "Makuhita",
    },
    type: ["Lutador"],
    base: {
      HP: 72,
      Attack: 60,
      Defense: 30,
      "Sp. Attack": 20,
      "Sp. Defense": 30,
      Speed: 25,
    },
    species: "Guts Pokémon",
    description:
      "Há um boato de uma receita tradicional de ensopado que os treinadores podem usar para criar Makuhita fortes.",
    evolution: {
      next: [["297", "Level 24"]],
    },
    profile: {
      height: "1 m",
      weight: "86.4 kg",
      egg: ["Human-Like"],
      ability: [
        ["Thick Fat", "false"],
        ["Guts", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/296.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/296.png",
      hires: "./Imagens/Pokedex/hires/296.png",
    },
  },
  {
    id: 297,
    name: {
      english: "Hariyama",
      japanese: "ハリテヤマ",
      chinese: "铁掌力士",
      french: "Hariyama",
    },
    type: ["Lutador"],
    base: {
      HP: 144,
      Attack: 120,
      Defense: 60,
      "Sp. Attack": 40,
      "Sp. Defense": 60,
      Speed: 50,
    },
    species: "Arm Thrust Pokémon",
    description:
      "Hariyama grandes e gordos não são necessariamente fortes. Existem alguns pequenos que se movem com agilidade e usam movimentos habilmente.",
    evolution: {
      prev: ["296", "Level 24"],
    },
    profile: {
      height: "2.3 m",
      weight: "253.8 kg",
      egg: ["Human-Like"],
      ability: [
        ["Thick Fat", "false"],
        ["Guts", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/297.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/297.png",
      hires: "./Imagens/Pokedex/hires/297.png",
    },
  },
  {
    id: 298,
    name: {
      english: "Azurill",
      japanese: "ルリリ",
      chinese: "露力丽",
      french: "Azurill",
    },
    type: ["Normal", "Fada"],
    base: {
      HP: 50,
      Attack: 20,
      Defense: 40,
      "Sp. Attack": 20,
      "Sp. Defense": 40,
      Speed: 20,
    },
    species: "Polka Dot Pokémon",
    description:
      "A cauda de Azurill é grande e elástica. Está cheia de nutrientes que este Pokémon precisa para crescer. Azurill pode ser visto pulando e brincando em sua grande cauda de borracha.",
    evolution: {
      next: [["183", "high Friendship"]],
    },
    profile: {
      height: "0.2 m",
      weight: "2 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Thick Fat", "false"],
        ["Huge Power", "false"],
        ["Sap Sipper", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/298.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/298.png",
      hires: "./Imagens/Pokedex/hires/298.png",
    },
  },
  {
    id: 299,
    name: {
      english: "Nosepass",
      japanese: "ノズパス",
      chinese: "朝北鼻",
      french: "Tarinor",
    },
    type: ["Rocha"],
    base: {
      HP: 30,
      Attack: 45,
      Defense: 135,
      "Sp. Attack": 45,
      "Sp. Defense": 90,
      Speed: 30,
    },
    species: "Compass Pokémon",
    description:
      "Ele caça sem mover um músculo, puxando sua presa com poderoso magnetismo. Mas às vezes puxa inimigos naturais para perto.",
    evolution: {
      next: [["476", "level up in a Magnetic Field area"]],
    },
    profile: {
      height: "1 m",
      weight: "97 kg",
      egg: ["Mineral"],
      ability: [
        ["Sturdy", "false"],
        ["Magnet Pull", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/299.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/299.png",
      hires: "./Imagens/Pokedex/hires/299.png",
    },
  },
  {
    id: 300,
    name: {
      english: "Skitty",
      japanese: "エネコ",
      chinese: "向尾喵",
      french: "Skitty",
    },
    type: ["Normal"],
    base: {
      HP: 50,
      Attack: 45,
      Defense: 45,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 50,
    },
    species: "Kitten Pokémon",
    description:
      "Skitty é conhecido por perseguir sua própria cauda brincando. Na natureza, este Pokémon vive em buracos nas árvores das florestas. É muito popular como animal de estimação por sua aparência adorável.",
    evolution: {
      next: [["301", "use Moon Stone"]],
    },
    profile: {
      height: "0.6 m",
      weight: "11 kg",
      egg: ["Field", "Fada"],
      ability: [
        ["Cute Charm", "false"],
        ["Normalize", "false"],
        ["Wonder Skin", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/300.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/300.png",
      hires: "./Imagens/Pokedex/hires/300.png",
    },
  },
  {
    id: 301,
    name: {
      english: "Delcatty",
      japanese: "エネコロロ",
      chinese: "优雅猫",
      french: "Delcatty",
    },
    type: ["Normal"],
    base: {
      HP: 70,
      Attack: 65,
      Defense: 65,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 90,
    },
    species: "Prim Pokémon",
    description:
      "Delcatty dorme onde quiser sem manter um ninho permanente. Se outros Pokémon se aproximarem enquanto dorme, este Pokémon nunca lutará - ele simplesmente se afastará para outro lugar.",
    evolution: {
      prev: ["300", "use Moon Stone"],
    },
    profile: {
      height: "1.1 m",
      weight: "32.6 kg",
      egg: ["Field", "Fada"],
      ability: [
        ["Cute Charm", "false"],
        ["Normalize", "false"],
        ["Wonder Skin", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/301.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/301.png",
      hires: "./Imagens/Pokedex/hires/301.png",
    },
  },
  {
    id: 302,
    name: {
      english: "Sableye",
      japanese: "ヤミラミ",
      chinese: "勾魂眼",
      french: "Ténéfix",
    },
    type: ["Sombrio", "Fantasma"],
    base: {
      HP: 50,
      Attack: 75,
      Defense: 75,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 50,
    },
    species: "Sombrioness Pokémon",
    description:
      "Materiais de gemas que come flutuam na superfície de seu corpo e podem formar um número infinito de padrões entre indivíduos.",
    evolution: {},
    profile: {
      height: "0.5 m",
      weight: "11 kg",
      egg: ["Human-Like"],
      ability: [
        ["Keen Eye", "false"],
        ["Stall", "false"],
        ["Prankster", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/302.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/302.png",
      hires: "./Imagens/Pokedex/hires/302.png",
    },
  },
  {
    id: 303,
    name: {
      english: "Mawile",
      japanese: "クチート",
      chinese: "大嘴娃",
      french: "Mysdibule",
    },
    type: ["Metal", "Fada"],
    base: {
      HP: 50,
      Attack: 85,
      Defense: 85,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 50,
    },
    species: "Deceiver Pokémon",
    description:
      "Ele tem duas bocas. As grandes mandíbulas na parte de trás da cabeça não podem sentir gosto de nada, por isso é a boca que ele usa para comer alimentos que não gosta.",
    evolution: {},
    profile: {
      height: "0.6 m",
      weight: "11.5 kg",
      egg: ["Field", "Fada"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Intimidate", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/303.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/303.png",
      hires: "./Imagens/Pokedex/hires/303.png",
    },
  },
  {
    id: 304,
    name: {
      english: "Aron",
      japanese: "ココドラ",
      chinese: "可可多拉",
      french: "Galekid",
    },
    type: ["Metal", "Rocha"],
    base: {
      HP: 50,
      Attack: 70,
      Defense: 100,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 30,
    },
    species: "Iron Armor Pokémon",
    description:
      "Aron tem um corpo de aço. Com uma carga total, este Pokémon pode demolir até mesmo um caminhão basculante pesado. O caminhão basculante destruído se torna uma refeição útil para o Pokémon.",
    evolution: {
      next: [["305", "Level 32"]],
    },
    profile: {
      height: "0.4 m",
      weight: "60 kg",
      egg: ["Monster"],
      ability: [
        ["Sturdy", "false"],
        ["Rocha Head", "false"],
        ["Heavy Metal", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/304.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/304.png",
      hires: "./Imagens/Pokedex/hires/304.png",
    },
  },
  {
    id: 305,
    name: {
      english: "Lairon",
      japanese: "コドラ",
      chinese: "可多拉",
      french: "Galegon",
    },
    type: ["Metal", "Rocha"],
    base: {
      HP: 60,
      Attack: 90,
      Defense: 140,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 40,
    },
    species: "Iron Armor Pokémon",
    description:
      "Lairon se alimenta de ferro contido em rochas e água. Ele faz seu ninho em montanhas onde o minério de ferro é enterrado. Como resultado, o Pokémon muitas vezes se choca com humanos que mineram o minério de ferro.",
    evolution: {
      prev: ["304", "Level 32"],
      next: [["306", "Level 42"]],
    },
    profile: {
      height: "0.9 m",
      weight: "120 kg",
      egg: ["Monster"],
      ability: [
        ["Sturdy", "false"],
        ["Rocha Head", "false"],
        ["Heavy Metal", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/305.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/305.png",
      hires: "./Imagens/Pokedex/hires/305.png",
    },
  },
  {
    id: 306,
    name: {
      english: "Aggron",
      japanese: "ボスゴドラ",
      chinese: "波士可多拉",
      french: "Galeking",
    },
    type: ["Metal", "Rocha"],
    base: {
      HP: 70,
      Attack: 110,
      Defense: 180,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 50,
    },
    species: "Iron Armor Pokémon",
    description:
      "Aggron é protetor de seu ambiente. Se sua montanha for devastada por um deslizamento de terra ou um incêndio, este Pokémon transportará solo para a área, plantará árvores e restaurará lindamente seu próprio território.",
    evolution: {
      prev: ["305", "Level 42"],
    },
    profile: {
      height: "2.1 m",
      weight: "360 kg",
      egg: ["Monster"],
      ability: [
        ["Sturdy", "false"],
        ["Rocha Head", "false"],
        ["Heavy Metal", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/306.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/306.png",
      hires: "./Imagens/Pokedex/hires/306.png",
    },
  },
  {
    id: 307,
    name: {
      english: "Meditite",
      japanese: "アサナン",
      chinese: "玛沙那",
      french: "Méditikka",
    },
    type: ["Lutador", "Psíquico"],
    base: {
      HP: 30,
      Attack: 40,
      Defense: 55,
      "Sp. Attack": 40,
      "Sp. Defense": 55,
      Speed: 60,
    },
    species: "Meditate Pokémon",
    description:
      "Meditite aumenta sua energia interna através da meditação. Ele sobrevive com apenas uma baga por dia. A alimentação mínima é outro aspecto do treinamento deste Pokémon.",
    evolution: {
      next: [["308", "Level 37"]],
    },
    profile: {
      height: "0.6 m",
      weight: "11.2 kg",
      egg: ["Human-Like"],
      ability: [
        ["Pure Power", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/307.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/307.png",
      hires: "./Imagens/Pokedex/hires/307.png",
    },
  },
  {
    id: 308,
    name: {
      english: "Medicham",
      japanese: "チャーレム",
      chinese: "恰雷姆",
      french: "Charmina",
    },
    type: ["Lutador", "Psíquico"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 75,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      Speed: 80,
    },
    species: "Meditate Pokémon",
    description:
      "Por meio do poder da meditação, Medicham desenvolveu seu sexto sentido. Ele ganhou a habilidade de usar poderes psicoquinéticos. Sabe-se que este Pokémon medita por um mês inteiro sem comer.",
    evolution: {
      prev: ["307", "Level 37"],
    },
    profile: {
      height: "1.3 m",
      weight: "31.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Pure Power", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/308.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/308.png",
      hires: "./Imagens/Pokedex/hires/308.png",
    },
  },
  {
    id: 309,
    name: {
      english: "Electrike",
      japanese: "ラクライ",
      chinese: "落雷兽",
      french: "Dynavolt",
    },
    type: ["Elétrico"],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 40,
      "Sp. Attack": 65,
      "Sp. Defense": 40,
      Speed: 65,
    },
    species: "Lightning Pokémon",
    description:
      "A eletricidade estática se acumula em todo o corpo enquanto os fios de seu pelo longo se esfregam. Este Pokémon possui uma velocidade incrível.",
    evolution: {
      next: [["310", "Level 26"]],
    },
    profile: {
      height: "0.6 m",
      weight: "15.2 kg",
      egg: ["Field"],
      ability: [
        ["Static", "false"],
        ["Lightning Rod", "false"],
        ["Minus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/309.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/309.png",
      hires: "./Imagens/Pokedex/hires/309.png",
    },
  },
  {
    id: 310,
    name: {
      english: "Manectric",
      japanese: "ライボルト",
      chinese: "雷电兽",
      french: "Élecsprint",
    },
    type: ["Elétrico"],
    base: {
      HP: 70,
      Attack: 75,
      Defense: 60,
      "Sp. Attack": 105,
      "Sp. Defense": 60,
      Speed: 105,
    },
    species: "Discharge Pokémon",
    description:
      "Ele estimula seus próprios músculos com eletricidade, para que possa se mover rapidamente. Ele também alivia sua dor com eletricidade, para que possa se recuperar rapidamente também.",
    evolution: {
      prev: ["309", "Level 26"],
    },
    profile: {
      height: "1.5 m",
      weight: "40.2 kg",
      egg: ["Field"],
      ability: [
        ["Static", "false"],
        ["Lightning Rod", "false"],
        ["Minus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/310.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/310.png",
      hires: "./Imagens/Pokedex/hires/310.png",
    },
  },
  {
    id: 311,
    name: {
      english: "Plusle",
      japanese: "プラスル",
      chinese: "正电拍拍",
      french: "Posipi",
    },
    type: ["Elétrico"],
    base: {
      HP: 60,
      Attack: 50,
      Defense: 40,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      Speed: 95,
    },
    species: "Cheering Pokémon",
    description:
      "Quando Plusle está torcendo por seu parceiro, ele pisca com faíscas elétricas em todo o corpo. Se seu parceiro perder, este Pokémon chora alto.",
    evolution: {},
    profile: {
      height: "0.4 m",
      weight: "4.2 kg",
      egg: ["Fada"],
      ability: [
        ["Plus", "false"],
        ["Lightning Rod", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/311.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/311.png",
      hires: "./Imagens/Pokedex/hires/311.png",
    },
  },
  {
    id: 312,
    name: {
      english: "Minun",
      japanese: "マイナン",
      chinese: "负电拍拍",
      french: "Négapi",
    },
    type: ["Elétrico"],
    base: {
      HP: 60,
      Attack: 40,
      Defense: 50,
      "Sp. Attack": 75,
      "Sp. Defense": 85,
      Speed: 95,
    },
    species: "Cheering Pokémon",
    description:
      "Minun adora torcer por seu parceiro em batalha. Ele emite faíscas de seu corpo enquanto está fazendo isso. Se seu parceiro estiver em problemas, este Pokémon emite quantidades crescentes de faíscas.",
    evolution: {},
    profile: {
      height: "0.4 m",
      weight: "4.2 kg",
      egg: ["Fada"],
      ability: [
        ["Minus", "false"],
        ["Volt Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/312.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/312.png",
      hires: "./Imagens/Pokedex/hires/312.png",
    },
  },
  {
    id: 313,
    name: {
      english: "Volbeat",
      japanese: "バルビート",
      chinese: "电萤虫",
      french: "Muciole",
    },
    type: ["Inseto"],
    base: {
      HP: 65,
      Attack: 73,
      Defense: 75,
      "Sp. Attack": 47,
      "Sp. Defense": 85,
      Speed: 85,
    },
    species: "Fogofly Pokémon",
    description:
      "A cauda de Volbeat brilha como uma lâmpada. Com outros Volbeat, ele usa sua cauda para desenhar formas geométricas no céu noturno. Este Pokémon adora o doce aroma exalado por Illumise.",
    evolution: {},
    profile: {
      height: "0.7 m",
      weight: "17.7 kg",
      egg: ["Inseto", "Human-Like"],
      ability: [
        ["Illuminate", "false"],
        ["Swarm", "false"],
        ["Prankster", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/313.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/313.png",
      hires: "./Imagens/Pokedex/hires/313.png",
    },
  },
  {
    id: 314,
    name: {
      english: "Illumise",
      japanese: "イルミーゼ",
      chinese: "甜甜萤",
      french: "Lumivole",
    },
    type: ["Inseto"],
    base: {
      HP: 65,
      Attack: 47,
      Defense: 75,
      "Sp. Attack": 73,
      "Sp. Defense": 85,
      Speed: 85,
    },
    species: "Fogofly Pokémon",
    description:
      "Illumise lidera um voo de Volbeat iluminado para desenhar sinais no céu noturno. Diz-se que este Pokémon ganha maior respeito de seus pares compondo designs mais complexos no céu.",
    evolution: {},
    profile: {
      height: "0.6 m",
      weight: "17.7 kg",
      egg: ["Inseto", "Human-Like"],
      ability: [
        ["Oblivious", "false"],
        ["Tinted Lens", "false"],
        ["Prankster", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/314.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/314.png",
      hires: "./Imagens/Pokedex/hires/314.png",
    },
  },
  {
    id: 315,
    name: {
      english: "Roselia",
      japanese: "ロゼリア",
      chinese: "毒蔷薇",
      french: "Rosélia",
    },
    type: ["Grama", "Venenoso"],
    base: {
      HP: 50,
      Attack: 60,
      Defense: 45,
      "Sp. Attack": 100,
      "Sp. Defense": 80,
      Speed: 65,
    },
    species: "Thorn Pokémon",
    description:
      "Em ocasiões extremamente raras, diz-se que uma Roselia aparece com suas flores em cores incomuns. Os espinhos na cabeça deste Pokémon contêm um veneno cruel.",
    evolution: {
      prev: ["406", "high Friendship, Daytime"],
      next: [["407", "use Shiny Stone"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2 kg",
      egg: ["Fada", "Grama"],
      ability: [
        ["Natural Cure", "false"],
        ["Venenoso Point", "false"],
        ["Leaf Guard", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/315.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/315.png",
      hires: "./Imagens/Pokedex/hires/315.png",
    },
  },
  {
    id: 316,
    name: {
      english: "Gulpin",
      japanese: "ゴクリン",
      chinese: "溶食兽",
      french: "Gloupti",
    },
    type: ["Venenoso"],
    base: {
      HP: 70,
      Attack: 43,
      Defense: 53,
      "Sp. Attack": 43,
      "Sp. Defense": 53,
      Speed: 40,
    },
    species: "Stomach Pokémon",
    description:
      "A maior parte do corpo de Gulpin é composta por seu estômago - seu coração e cérebro são muito pequenos em comparação. O estômago deste Pokémon contém enzimas especiais que dissolvem qualquer coisa.",
    evolution: {
      next: [["317", "Level 26"]],
    },
    profile: {
      height: "0.4 m",
      weight: "10.3 kg",
      egg: ["Amorphous"],
      ability: [
        ["Liquid Ooze", "false"],
        ["Sticky Hold", "false"],
        ["Gluttony", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/316.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/316.png",
      hires: "./Imagens/Pokedex/hires/316.png",
    },
  },
  {
    id: 317,
    name: {
      english: "Swalot",
      japanese: "マルノーム",
      chinese: "吞食兽",
      french: "Avaltout",
    },
    type: ["Venenoso"],
    base: {
      HP: 100,
      Attack: 73,
      Defense: 83,
      "Sp. Attack": 73,
      "Sp. Defense": 83,
      Speed: 55,
    },
    species: "Venenoso Bag Pokémon",
    description:
      "Swalot não tem dentes, então o que come, engole inteiro, não importa o quê. Sua boca cavernosa boceja amplamente. Um pneu de automóvel poderia facilmente caber dentro da boca deste Pokémon.",
    evolution: {
      prev: ["316", "Level 26"],
    },
    profile: {
      height: "1.7 m",
      weight: "80 kg",
      egg: ["Amorphous"],
      ability: [
        ["Liquid Ooze", "false"],
        ["Sticky Hold", "false"],
        ["Gluttony", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/317.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/317.png",
      hires: "./Imagens/Pokedex/hires/317.png",
    },
  },
  {
    id: 318,
    name: {
      english: "Carvanha",
      japanese: "キバニア",
      chinese: "利牙鱼",
      french: "Carvanha",
    },
    type: ["Água", "Sombrio"],
    base: {
      HP: 45,
      Attack: 90,
      Defense: 20,
      "Sp. Attack": 65,
      "Sp. Defense": 20,
      Speed: 65,
    },
    species: "Savage Pokémon",
    description:
      "Com suas mandíbulas e presas robustas, ele pode facilmente cortar barcos de madeira em lascas. Ele luta com Basculin por comida.",
    evolution: {
      next: [["319", "Level 30"]],
    },
    profile: {
      height: "0.8 m",
      weight: "20.8 kg",
      egg: ["Água 2"],
      ability: [
        ["Rough Skin", "false"],
        ["Speed Boost", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/318.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/318.png",
      hires: "./Imagens/Pokedex/hires/318.png",
    },
  },
  {
    id: 319,
    name: {
      english: "Sharpedo",
      japanese: "サメハダー",
      chinese: "巨牙鲨",
      french: "Sharpedo",
    },
    type: ["Água", "Sombrio"],
    base: {
      HP: 70,
      Attack: 120,
      Defense: 40,
      "Sp. Attack": 95,
      "Sp. Defense": 40,
      Speed: 95,
    },
    species: "Brutal Pokémon",
    description:
      "Ele bebe água do mar e a jorra de sua traseira para se impulsionar. É muito sensível ao cheiro de sangue.",
    evolution: {
      prev: ["318", "Level 30"],
    },
    profile: {
      height: "1.8 m",
      weight: "88.8 kg",
      egg: ["Água 2"],
      ability: [
        ["Rough Skin", "false"],
        ["Speed Boost", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/319.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/319.png",
      hires: "./Imagens/Pokedex/hires/319.png",
    },
  },
  {
    id: 320,
    name: {
      english: "Wailmer",
      japanese: "ホエルコ",
      chinese: "吼吼鲸",
      french: "Wailmer",
    },
    type: ["Água"],
    base: {
      HP: 130,
      Attack: 70,
      Defense: 35,
      "Sp. Attack": 70,
      "Sp. Defense": 35,
      Speed: 60,
    },
    species: "Ball Whale Pokémon",
    description:
      "Devido às suas memórias de quando viviam na terra, grupos deles podem, muito raramente, subir na costa.",
    evolution: {
      next: [["321", "Level 40"]],
    },
    profile: {
      height: "2 m",
      weight: "130 kg",
      egg: ["Field", "Água 2"],
      ability: [
        ["Água Veil", "false"],
        ["Oblivious", "false"],
        ["Pressure", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/320.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/320.png",
      hires: "./Imagens/Pokedex/hires/320.png",
    },
  },
  {
    id: 321,
    name: {
      english: "Wailord",
      japanese: "ホエルオー",
      chinese: "吼鲸王",
      french: "Wailord",
    },
    type: ["Água"],
    base: {
      HP: 170,
      Attack: 90,
      Defense: 45,
      "Sp. Attack": 90,
      "Sp. Defense": 45,
      Speed: 60,
    },
    species: "Float Whale Pokémon",
    description:
      "Quando um pequeno Wailmer é atacado por Sharpedo ou Dhelmise, todo o seu bando trabalha junto para protegê-lo.",
    evolution: {
      prev: ["320", "Level 40"],
    },
    profile: {
      height: "14.5 m",
      weight: "398 kg",
      egg: ["Field", "Água 2"],
      ability: [
        ["Água Veil", "false"],
        ["Oblivious", "false"],
        ["Pressure", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/321.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/321.png",
      hires: "./Imagens/Pokedex/hires/321.png",
    },
  },
  {
    id: 322,
    name: {
      english: "Numel",
      japanese: "ドンメル",
      chinese: "呆火驼",
      french: "Chamallot",
    },
    type: ["Fogo", "Terra"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 40,
      "Sp. Attack": 65,
      "Sp. Defense": 45,
      Speed: 35,
    },
    species: "Numb Pokémon",
    description:
      "Numel armazena magma de quase 2.200 graus Fahrenheit dentro de seu corpo. Se ficar molhado, o magma esfria e endurece. Nesse caso, o corpo do Pokémon fica pesado e seus movimentos ficam lentos.",
    evolution: {
      next: [["323", "Level 33"]],
    },
    profile: {
      height: "0.7 m",
      weight: "24 kg",
      egg: ["Field"],
      ability: [
        ["Oblivious", "false"],
        ["Simple", "false"],
        ["Own Tempo", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/322.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/322.png",
      hires: "./Imagens/Pokedex/hires/322.png",
    },
  },
  {
    id: 323,
    name: {
      english: "Camerupt",
      japanese: "バクーダ",
      chinese: "喷火驼",
      french: "Camérupt",
    },
    type: ["Fogo", "Terra"],
    base: {
      HP: 70,
      Attack: 100,
      Defense: 70,
      "Sp. Attack": 105,
      "Sp. Defense": 75,
      Speed: 40,
    },
    species: "Eruption Pokémon",
    description:
      "As corcundas nas costas de Camerupt são formadas por uma transformação de seus ossos. Às vezes, eles explodem magma derretido. Este Pokémon aparentemente entra em erupção frequentemente quando está enfurecido.",
    evolution: {
      prev: ["322", "Level 33"],
    },
    profile: {
      height: "1.9 m",
      weight: "220 kg",
      egg: ["Field"],
      ability: [
        ["Magma Armor", "false"],
        ["Solid Rocha", "false"],
        ["Anger Point", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/323.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/323.png",
      hires: "./Imagens/Pokedex/hires/323.png",
    },
  },
  {
    id: 324,
    name: {
      english: "Torkoal",
      japanese: "コータス",
      chinese: "煤炭龟",
      french: "Chartor",
    },
    type: ["Fogo"],
    base: {
      HP: 70,
      Attack: 85,
      Defense: 140,
      "Sp. Attack": 85,
      "Sp. Defense": 70,
      Speed: 20,
    },
    species: "Coal Pokémon",
    description:
      "Ele queima carvão para produzir energia. Quando queima todo o carvão, fica incapaz de se mover.",
    evolution: {},
    profile: {
      height: "0.5 m",
      weight: "80.4 kg",
      egg: ["Field"],
      ability: [
        ["White Smoke", "false"],
        ["Drought", "false"],
        ["Shell Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/324.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/324.png",
      hires: "./Imagens/Pokedex/hires/324.png",
    },
  },
  {
    id: 325,
    name: {
      english: "Spoink",
      japanese: "バネブー",
      chinese: "跳跳猪",
      french: "Spoink",
    },
    type: ["Psíquico"],
    base: {
      HP: 60,
      Attack: 25,
      Defense: 35,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      Speed: 60,
    },
    species: "Bounce Pokémon",
    description:
      "Spoink mantém uma pérola no topo de sua cabeça. A pérola funciona para amplificar os poderes psicoquinéticos deste Pokémon. Portanto, está em constante busca por uma pérola maior.",
    evolution: {
      next: [["326", "Level 32"]],
    },
    profile: {
      height: "0.7 m",
      weight: "30.6 kg",
      egg: ["Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Own Tempo", "false"],
        ["Gluttony", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/325.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/325.png",
      hires: "./Imagens/Pokedex/hires/325.png",
    },
  },
  {
    id: 326,
    name: {
      english: "Grumpig",
      japanese: "ブーピッグ",
      chinese: "噗噗猪",
      french: "Groret",
    },
    type: ["Psíquico"],
    base: {
      HP: 80,
      Attack: 45,
      Defense: 65,
      "Sp. Attack": 90,
      "Sp. Defense": 110,
      Speed: 80,
    },
    species: "Manipulate Pokémon",
    description:
      "Grumpig usa as pérolas negras em seu corpo para exercer seus poderes fantásticos. Quando está fazendo isso, dança bizarramente. As pérolas negras deste Pokémon são valiosas como obras de arte.",
    evolution: {
      prev: ["325", "Level 32"],
    },
    profile: {
      height: "0.9 m",
      weight: "71.5 kg",
      egg: ["Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Own Tempo", "false"],
        ["Gluttony", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/326.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/326.png",
      hires: "./Imagens/Pokedex/hires/326.png",
    },
  },
  {
    id: 327,
    name: {
      english: "Spinda",
      japanese: "パッチール",
      chinese: "晃晃斑",
      french: "Spinda",
    },
    type: ["Normal"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 60,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 60,
    },
    species: "Spot Panda Pokémon",
    description:
      "O padrão de manchas de cada Spinda é diferente. Com seus movimentos cambaleantes, ele evade os ataques dos oponentes brilhantemente!",
    evolution: {},
    profile: {
      height: "1.1 m",
      weight: "5 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Own Tempo", "false"],
        ["Tangled Feet", "false"],
        ["Contrary", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/327.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/327.png",
      hires: "./Imagens/Pokedex/hires/327.png",
    },
  },
  {
    id: 328,
    name: {
      english: "Trapinch",
      japanese: "ナックラー",
      chinese: "大颚蚁",
      french: "Kraknoix",
    },
    type: ["Terra"],
    base: {
      HP: 45,
      Attack: 100,
      Defense: 45,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      Speed: 10,
    },
    species: "Ant Pit Pokémon",
    description:
      "Ele constrói ninhos que funcionam como armadilhas, esperando que sua presa seja pega. Quando cai a noite, ele cava um lugar sob a areia para dormir.",
    evolution: {
      next: [["329", "Level 35"]],
    },
    profile: {
      height: "0.7 m",
      weight: "15 kg",
      egg: ["Inseto"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Arena Trap", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/328.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/328.png",
      hires: "./Imagens/Pokedex/hires/328.png",
    },
  },
  {
    id: 329,
    name: {
      english: "Vibrava",
      japanese: "ビブラーバ",
      chinese: "超音波幼虫",
      french: "Vibraninf",
    },
    type: ["Terra", "Dragão"],
    base: {
      HP: 50,
      Attack: 70,
      Defense: 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 70,
    },
    species: "Vibration Pokémon",
    description:
      "Ele vibra suas asas para enviar ondas sonoras estranhas. Treinadores que estão com ele precisam de protetores de ouvido.",
    evolution: {
      prev: ["328", "Level 35"],
      next: [["330", "Level 45"]],
    },
    profile: {
      height: "1.1 m",
      weight: "15.3 kg",
      egg: ["Inseto"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/329.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/329.png",
      hires: "./Imagens/Pokedex/hires/329.png",
    },
  },
  {
    id: 330,
    name: {
      english: "Flygon",
      japanese: "フライゴン",
      chinese: "沙漠蜻蜓",
      french: "Libégon",
    },
    type: ["Terra", "Dragão"],
    base: {
      HP: 80,
      Attack: 100,
      Defense: 80,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 100,
    },
    species: "Mystic Pokémon",
    description:
      "As pessoas continuam tendo seus corações roubados por suas canções encantadoras e se encontram encalhadas no deserto.",
    evolution: {
      prev: ["329", "Level 45"],
    },
    profile: {
      height: "2 m",
      weight: "82 kg",
      egg: ["Inseto"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/330.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/330.png",
      hires: "./Imagens/Pokedex/hires/330.png",
    },
  },
  {
    id: 331,
    name: {
      english: "Cacnea",
      japanese: "サボネア",
      chinese: "刺球仙人掌",
      french: "Cacnea",
    },
    type: ["Grama"],
    base: {
      HP: 50,
      Attack: 85,
      Defense: 40,
      "Sp. Attack": 85,
      "Sp. Defense": 40,
      Speed: 35,
    },
    species: "Cactus Pokémon",
    description:
      "Quanto mais árido e severo o ambiente, mais bonita e perfumada é a flor que Cacnea cultiva. Este Pokémon batalha balançando selvagemente seus braços espinhosos.",
    evolution: {
      next: [["332", "Level 32"]],
    },
    profile: {
      height: "0.4 m",
      weight: "51.3 kg",
      egg: ["Grama", "Human-Like"],
      ability: [
        ["Sand Veil", "false"],
        ["Água Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/331.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/331.png",
      hires: "./Imagens/Pokedex/hires/331.png",
    },
  },
  {
    id: 332,
    name: {
      english: "Cacturne",
      japanese: "ノクタス",
      chinese: "梦歌仙人掌",
      french: "Cacturne",
    },
    type: ["Grama", "Sombrio"],
    base: {
      HP: 70,
      Attack: 115,
      Defense: 60,
      "Sp. Attack": 115,
      "Sp. Defense": 60,
      Speed: 55,
    },
    species: "Scarecrow Pokémon",
    description:
      "Se um viajante estiver passando por um deserto no meio da noite, Cacturne seguirá em um grupo desleixado. O Pokémon está esperando o momento certo, esperando que o viajante se canse e fique incapaz de se mover.",
    evolution: {
      prev: ["331", "Level 32"],
    },
    profile: {
      height: "1.3 m",
      weight: "77.4 kg",
      egg: ["Grama", "Human-Like"],
      ability: [
        ["Sand Veil", "false"],
        ["Água Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/332.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/332.png",
      hires: "./Imagens/Pokedex/hires/332.png",
    },
  },
  {
    id: 333,
    name: {
      english: "Swablu",
      japanese: "チルット",
      chinese: "青绵鸟",
      french: "Tylton",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 45,
      Attack: 40,
      Defense: 60,
      "Sp. Attack": 40,
      "Sp. Defense": 75,
      Speed: 50,
    },
    species: "Cotton Bird Pokémon",
    description:
      "Swablu adora deixar as coisas limpas. Se vir algo sujo, ele limpará e polirá com suas asas de algodão. Se suas asas ficarem sujas, este Pokémon encontrará um riacho e tomará banho.",
    evolution: {
      next: [["334", "Level 35"]],
    },
    profile: {
      height: "0.4 m",
      weight: "1.2 kg",
      egg: ["Voador", "Dragão"],
      ability: [
        ["Natural Cure", "false"],
        ["Cloud Nine", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/333.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/333.png",
      hires: "./Imagens/Pokedex/hires/333.png",
    },
  },
  {
    id: 334,
    name: {
      english: "Altaria",
      japanese: "チルタリス",
      chinese: "七夕青鸟",
      french: "Altaria",
    },
    type: ["Dragão", "Voador"],
    base: {
      HP: 75,
      Attack: 70,
      Defense: 90,
      "Sp. Attack": 70,
      "Sp. Defense": 105,
      Speed: 80,
    },
    species: "Humming Pokémon",
    description:
      "Altaria canta em uma soprano maravilhosa. Suas asas são como nuvens de algodão. Este Pokémon pega correntes ascendentes com suas asas flutuantes e sobe alto no azul selvagem do céu.",
    evolution: {
      prev: ["333", "Level 35"],
    },
    profile: {
      height: "1.1 m",
      weight: "20.6 kg",
      egg: ["Voador", "Dragão"],
      ability: [
        ["Natural Cure", "false"],
        ["Cloud Nine", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/334.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/334.png",
      hires: "./Imagens/Pokedex/hires/334.png",
    },
  },
  {
    id: 335,
    name: {
      english: "Zangoose",
      japanese: "ザングース",
      chinese: "猫鼬斩",
      french: "Mangriff",
    },
    type: ["Normal"],
    base: {
      HP: 73,
      Attack: 115,
      Defense: 60,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 90,
    },
    species: "Cat Ferret Pokémon",
    description:
      "Zangoose geralmente fica de quatro, mas quando fica com raiva, levanta-se sobre suas patas traseiras e estende suas garras. Este Pokémon compartilha uma amarga rivalidade com Seviper que remonta a gerações.",
    evolution: {},
    profile: {
      height: "1.3 m",
      weight: "40.3 kg",
      egg: ["Field"],
      ability: [
        ["Immunity", "false"],
        ["Toxic Boost", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/335.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/335.png",
      hires: "./Imagens/Pokedex/hires/335.png",
    },
  },
  {
    id: 336,
    name: {
      english: "Seviper",
      japanese: "ハブネーク",
      chinese: "饭匙蛇",
      french: "Séviper",
    },
    type: ["Venenoso"],
    base: {
      HP: 73,
      Attack: 100,
      Defense: 60,
      "Sp. Attack": 100,
      "Sp. Defense": 60,
      Speed: 65,
    },
    species: "Fang Snake Pokémon",
    description:
      "A cauda semelhante a uma espada de Seviper serve a dois propósitos - ela corta inimigos e os apaga com veneno secretado. Este Pokémon não desistirá de sua longa disputa sangrenta com Zangoose.",
    evolution: {},
    profile: {
      height: "2.7 m",
      weight: "52.5 kg",
      egg: ["Field", "Dragão"],
      ability: [
        ["Shed Skin", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/336.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/336.png",
      hires: "./Imagens/Pokedex/hires/336.png",
    },
  },
  {
    id: 337,
    name: {
      english: "Lunatone",
      japanese: "ルナトーン",
      chinese: "月石",
      french: "Séléroc",
    },
    type: ["Rocha", "Psíquico"],
    base: {
      HP: 90,
      Attack: 55,
      Defense: 65,
      "Sp. Attack": 95,
      "Sp. Defense": 85,
      Speed: 70,
    },
    species: "Meteorite Pokémon",
    description:
      "Lunatone torna-se ativo por volta da hora da lua cheia. Em vez de andar, ele se move flutuando no ar. Os olhos vermelhos intimidadores do Pokémon fazem com que todos que o vejam fiquem transfixados com medo.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "168 kg",
      egg: ["Mineral"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/337.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/337.png",
      hires: "./Imagens/Pokedex/hires/337.png",
    },
  },
  {
    id: 338,
    name: {
      english: "Solrock",
      japanese: "ソルロック",
      chinese: "太阳岩",
      french: "Solaroc",
    },
    type: ["Rocha", "Psíquico"],
    base: {
      HP: 90,
      Attack: 95,
      Defense: 85,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      Speed: 70,
    },
    species: "Meteorite Pokémon",
    description:
      "A luz solar é a fonte de poder de Solrock. Diz-se que ele possui a capacidade de ler as emoções dos outros. Este Pokémon emite calor intenso enquanto gira seu corpo.",
    evolution: {},
    profile: {
      height: "1.2 m",
      weight: "154 kg",
      egg: ["Mineral"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/338.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/338.png",
      hires: "./Imagens/Pokedex/hires/338.png",
    },
  },
  {
    id: 339,
    name: {
      english: "Barboach",
      japanese: "ドジョッチ",
      chinese: "泥泥鳅",
      french: "Barloche",
    },
    type: ["Água", "Terra"],
    base: {
      HP: 50,
      Attack: 48,
      Defense: 43,
      "Sp. Attack": 46,
      "Sp. Defense": 41,
      Speed: 60,
    },
    species: "Whiskers Pokémon",
    description:
      "Seus bigodes estão cheios de nervos. Eles podem sentir cheiros e sabores como o nariz ou a língua de uma pessoa.",
    evolution: {
      next: [["340", "Level 30"]],
    },
    profile: {
      height: "0.4 m",
      weight: "1.9 kg",
      egg: ["Água 2"],
      ability: [
        ["Oblivious", "false"],
        ["Anticipation", "false"],
        ["Hydration", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/339.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/339.png",
      hires: "./Imagens/Pokedex/hires/339.png",
    },
  },
  {
    id: 340,
    name: {
      english: "Whiscash",
      japanese: "ナマズン",
      chinese: "鲶鱼王",
      french: "Barbicha",
    },
    type: ["Água", "Terra"],
    base: {
      HP: 110,
      Attack: 78,
      Defense: 73,
      "Sp. Attack": 76,
      "Sp. Defense": 71,
      Speed: 60,
    },
    species: "Whiskers Pokémon",
    description:
      "Sua visão não é tão boa. Ele sente vibrações na água com seus bigodes para determinar a localização de sua presa.",
    evolution: {
      prev: ["339", "Level 30"],
    },
    profile: {
      height: "0.9 m",
      weight: "23.6 kg",
      egg: ["Água 2"],
      ability: [
        ["Oblivious", "false"],
        ["Anticipation", "false"],
        ["Hydration", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/340.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/340.png",
      hires: "./Imagens/Pokedex/hires/340.png",
    },
  },
  {
    id: 341,
    name: {
      english: "Corphish",
      japanese: "ヘイガニ",
      chinese: "龙虾小兵",
      french: "Écrapince",
    },
    type: ["Água"],
    base: {
      HP: 43,
      Attack: 80,
      Defense: 65,
      "Sp. Attack": 50,
      "Sp. Defense": 35,
      Speed: 35,
    },
    species: "Ruffian Pokémon",
    description:
      "Ele pode se adaptar muito bem ao seu ambiente. Feebas e Corphish são quase os únicos Pokémon a viver em valas estagnadas.",
    evolution: {
      next: [["342", "Level 30"]],
    },
    profile: {
      height: "0.6 m",
      weight: "11.5 kg",
      egg: ["Água 1", "Água 3"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Shell Armor", "false"],
        ["Adaptability", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/341.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/341.png",
      hires: "./Imagens/Pokedex/hires/341.png",
    },
  },
  {
    id: 342,
    name: {
      english: "Crawdaunt",
      japanese: "シザリガー",
      chinese: "铁螯龙虾",
      french: "Colhomard",
    },
    type: ["Água", "Sombrio"],
    base: {
      HP: 63,
      Attack: 120,
      Defense: 85,
      "Sp. Attack": 90,
      "Sp. Defense": 55,
      Speed: 55,
    },
    species: "Rogue Pokémon",
    description:
      "Suas pinças costumam cair. Diferentemente de Crabrawler ou Clauncher, a carne em suas garras é completamente nojenta e fedorenta.",
    evolution: {
      prev: ["341", "Level 30"],
    },
    profile: {
      height: "1.1 m",
      weight: "32.8 kg",
      egg: ["Água 1", "Água 3"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Shell Armor", "false"],
        ["Adaptability", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/342.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/342.png",
      hires: "./Imagens/Pokedex/hires/342.png",
    },
  },
  {
    id: 343,
    name: {
      english: "Baltoy",
      japanese: "ヤジロン",
      chinese: "天秤偶",
      french: "Balbuto",
    },
    type: ["Terra", "Psíquico"],
    base: {
      HP: 40,
      Attack: 40,
      Defense: 55,
      "Sp. Attack": 40,
      "Sp. Defense": 70,
      Speed: 55,
    },
    species: "Clay Doll Pokémon",
    description:
      "Quando encontram outros de sua espécie, gritam alto e se reúnem. Grandes números deles podem ser encontrados em antigos cemitérios.",
    evolution: {
      next: [["344", "Level 36"]],
    },
    profile: {
      height: "0.5 m",
      weight: "21.5 kg",
      egg: ["Mineral"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/343.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/343.png",
      hires: "./Imagens/Pokedex/hires/343.png",
    },
  },
  {
    id: 344,
    name: {
      english: "Claydol",
      japanese: "ネンドール",
      chinese: "念力土偶",
      french: "Kaorine",
    },
    type: ["Terra", "Psíquico"],
    base: {
      HP: 60,
      Attack: 70,
      Defense: 105,
      "Sp. Attack": 70,
      "Sp. Defense": 120,
      Speed: 75,
    },
    species: "Clay Doll Pokémon",
    description:
      "Os antigos que o fizeram aparentemente o modelaram após algo que desceu do céu. Ele dispara feixes de ambos os braços.",
    evolution: {
      prev: ["343", "Level 36"],
    },
    profile: {
      height: "1.5 m",
      weight: "108 kg",
      egg: ["Mineral"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/344.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/344.png",
      hires: "./Imagens/Pokedex/hires/344.png",
    },
  },
  {
    id: 345,
    name: {
      english: "Lileep",
      japanese: "リリーラ",
      chinese: "触手百合",
      french: "Lilia",
    },
    type: ["Rocha", "Grama"],
    base: {
      HP: 66,
      Attack: 41,
      Defense: 77,
      "Sp. Attack": 61,
      "Sp. Defense": 87,
      Speed: 23,
    },
    species: "Sea Lily Pokémon",
    description:
      "Ele se apega às rochas com seus poderosos ventosas e não pode ser lavado, não importa quão agitado seja o surfe.",
    evolution: {
      next: [["346", "Level 40"]],
    },
    profile: {
      height: "1 m",
      weight: "23.8 kg",
      egg: ["Água 3"],
      ability: [
        ["Suction Cups", "false"],
        ["Storm Drain", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/345.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/345.png",
      hires: "./Imagens/Pokedex/hires/345.png",
    },
  },
  {
    id: 346,
    name: {
      english: "Cradily",
      japanese: "ユレイドル",
      chinese: "摇篮百合",
      french: "Vacilys",
    },
    type: ["Rocha", "Grama"],
    base: {
      HP: 86,
      Attack: 81,
      Defense: 97,
      "Sp. Attack": 81,
      "Sp. Defense": 107,
      Speed: 43,
    },
    species: "Barnacle Pokémon",
    description:
      "Este Pokémon carnívoro vivia em mares primordiais. Ele captura presas em seus oito tentáculos e as dissolve com fluido digestivo enquanto come.",
    evolution: {
      prev: ["345", "Level 40"],
    },
    profile: {
      height: "1.5 m",
      weight: "60.4 kg",
      egg: ["Água 3"],
      ability: [
        ["Suction Cups", "false"],
        ["Storm Drain", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/346.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/346.png",
      hires: "./Imagens/Pokedex/hires/346.png",
    },
  },
  {
    id: 347,
    name: {
      english: "Anorith",
      japanese: "アノプス",
      chinese: "太古羽虫",
      french: "Anorith",
    },
    type: ["Rocha", "Inseto"],
    base: {
      HP: 45,
      Attack: 95,
      Defense: 50,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      Speed: 75,
    },
    species: "Old Shrimp Pokémon",
    description:
      "Este é um tipo de Pokémon primitivo de inseto. Com oito asas, aparentemente poderia nadar muito mais rápido do que você esperaria.",
    evolution: {
      next: [["348", "Level 40"]],
    },
    profile: {
      height: "0.7 m",
      weight: "12.5 kg",
      egg: ["Água 3"],
      ability: [
        ["Battle Armor", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/347.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/347.png",
      hires: "./Imagens/Pokedex/hires/347.png",
    },
  },
  {
    id: 348,
    name: {
      english: "Armaldo",
      japanese: "アーマルド",
      chinese: "太古盔甲",
      french: "Armaldo",
    },
    type: ["Rocha", "Inseto"],
    base: {
      HP: 75,
      Attack: 125,
      Defense: 100,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      Speed: 45,
    },
    species: "Plate Pokémon",
    description:
      "Armaldo se adaptou de viver na água para viver na terra. Foi determinado que ele é o ancestral de alguns Pokémon inseto.",
    evolution: {
      prev: ["347", "Level 40"],
    },
    profile: {
      height: "1.5 m",
      weight: "68.2 kg",
      egg: ["Água 3"],
      ability: [
        ["Battle Armor", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/348.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/348.png",
      hires: "./Imagens/Pokedex/hires/348.png",
    },
  },
  {
    id: 349,
    name: {
      english: "Feebas",
      japanese: "ヒンバス",
      chinese: "丑丑鱼",
      french: "Barpau",
    },
    type: ["Água"],
    base: {
      HP: 20,
      Attack: 15,
      Defense: 20,
      "Sp. Attack": 10,
      "Sp. Defense": 55,
      Speed: 80,
    },
    species: "Fish Pokémon",
    description:
      "Devido à sua aparência deplorável, a maioria das pessoas não dá atenção a ele, mas há alguns que colecionam Feebas - e apenas Feebas!",
    evolution: {
      next: [["350", "trade holding Prism Scale, or level up with max Beauty"]],
    },
    profile: {
      height: "0.6 m",
      weight: "7.4 kg",
      egg: ["Água 1", "Dragão"],
      ability: [
        ["Swift Swim", "false"],
        ["Oblivious", "false"],
        ["Adaptability", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/349.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/349.png",
      hires: "./Imagens/Pokedex/hires/349.png",
    },
  },
  {
    id: 350,
    name: {
      english: "Milotic",
      japanese: "ミロカロス",
      chinese: "美纳斯",
      french: "Milobellus",
    },
    type: ["Água"],
    base: {
      HP: 95,
      Attack: 60,
      Defense: 79,
      "Sp. Attack": 100,
      "Sp. Defense": 125,
      Speed: 81,
    },
    species: "Tender Pokémon",
    description:
      "Seu lugar de habitação é o fundo de grandes lagos. Diz-se que aqueles que contemplam sua beleza têm seus corações purificados.",
    evolution: {
      prev: ["349", "trade holding Prism Scale, or level up with max Beauty"],
    },
    profile: {
      height: "6.2 m",
      weight: "162 kg",
      egg: ["Água 1", "Dragão"],
      ability: [
        ["Marvel Scale", "false"],
        ["Competitive", "false"],
        ["Cute Charm", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/350.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/350.png",
      hires: "./Imagens/Pokedex/hires/350.png",
    },
  },
  {
    id: 351,
    name: {
      english: "Castform",
      japanese: "ポワルン",
      chinese: "飘浮泡泡",
      french: "Morphéo",
    },
    type: ["Normal"],
    base: {
      HP: 70,
      Attack: 70,
      Defense: 70,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      Speed: 70,
    },
    species: "Weather Pokémon",
    description:
      "Sua forma muda dependendo do clima. Quanto mais rudes forem as condições, mais rude será a disposição de Castform!",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "0.8 kg",
      egg: ["Fada", "Amorphous"],
      ability: [["Forecast", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/351.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/351.png",
      hires: "./Imagens/Pokedex/hires/351.png",
    },
  },
  {
    id: 352,
    name: {
      english: "Kecleon",
      japanese: "カクレオン",
      chinese: "变隐龙",
      french: "Kecleon",
    },
    type: ["Normal"],
    base: {
      HP: 60,
      Attack: 90,
      Defense: 70,
      "Sp. Attack": 60,
      "Sp. Defense": 120,
      Speed: 40,
    },
    species: "Color Swap Pokémon",
    description:
      "Sua cor muda para disfarce e também quando seu humor ou saúde muda. Quanto mais escura a cor, mais saudável ele está.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "22 kg",
      egg: ["Field"],
      ability: [
        ["Color Change", "false"],
        ["Protean", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/352.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/352.png",
      hires: "./Imagens/Pokedex/hires/352.png",
    },
  },
  {
    id: 353,
    name: {
      english: "Shuppet",
      japanese: "カゲボウズ",
      chinese: "怨影娃娃",
      french: "Polichombr",
    },
    type: ["Fantasma"],
    base: {
      HP: 44,
      Attack: 75,
      Defense: 35,
      "Sp. Attack": 63,
      "Sp. Defense": 33,
      Speed: 45,
    },
    species: "Puppet Pokémon",
    description:
      'Há um provérbio que diz: "Fuja da casa onde Shuppet se reúne no crescente crepúsculo".',
    evolution: {
      next: [["354", "Level 37"]],
    },
    profile: {
      height: "0.6 m",
      weight: "2.3 kg",
      egg: ["Amorphous"],
      ability: [
        ["Insomnia", "false"],
        ["Frisk", "false"],
        ["Cursed Body", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/353.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/353.png",
      hires: "./Imagens/Pokedex/hires/353.png",
    },
  },
  {
    id: 354,
    name: {
      english: "Banette",
      japanese: "ジュペッタ",
      chinese: "诅咒娃娃",
      french: "Branette",
    },
    type: ["Fantasma"],
    base: {
      HP: 64,
      Attack: 115,
      Defense: 65,
      "Sp. Attack": 83,
      "Sp. Defense": 63,
      Speed: 65,
    },
    species: "Marionette Pokémon",
    description:
      "O ressentimento por ser abandonado o fez surgir. Alguns dizem que tratá-lo bem o satisfará e que ele voltará a ser um brinquedo de pelúcia.",
    evolution: {
      prev: ["353", "Level 37"],
    },
    profile: {
      height: "1.1 m",
      weight: "12.5 kg",
      egg: ["Amorphous"],
      ability: [
        ["Insomnia", "false"],
        ["Frisk", "false"],
        ["Cursed Body", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/354.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/354.png",
      hires: "./Imagens/Pokedex/hires/354.png",
    },
  },
  {
    id: 355,
    name: {
      english: "Duskull",
      japanese: "ヨマワル",
      chinese: "夜巡灵",
      french: "Skelénox",
    },
    type: ["Fantasma"],
    base: {
      HP: 20,
      Attack: 40,
      Defense: 90,
      "Sp. Attack": 30,
      "Sp. Defense": 90,
      Speed: 25,
    },
    species: "Requiem Pokémon",
    description:
      "Duskull vagueia perdido nas profundezas da escuridão da meia-noite. Há uma advertência frequentemente contada a crianças mal-comportadas de que este Pokémon levará embora crianças más que ganham broncas de suas mães.",
    evolution: {
      next: [["356", "Level 37"]],
    },
    profile: {
      height: "0.8 m",
      weight: "15 kg",
      egg: ["Amorphous"],
      ability: [
        ["Levitate", "false"],
        ["Frisk", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/355.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/355.png",
      hires: "./Imagens/Pokedex/hires/355.png",
    },
  },
  {
    id: 356,
    name: {
      english: "Dusclops",
      japanese: "サマヨール",
      chinese: "彷徨夜灵",
      french: "Téraclope",
    },
    type: ["Fantasma"],
    base: {
      HP: 40,
      Attack: 70,
      Defense: 130,
      "Sp. Attack": 60,
      "Sp. Defense": 130,
      Speed: 25,
    },
    species: "Beckon Pokémon",
    description:
      "Dusclops absorve qualquer coisa, não importa quão grande seja o objeto. Este Pokémon hipnotiza seu inimigo acenando com as mãos de uma maneira macabra e trazendo seu único olho para suportar. O inimigo hipnotizado é feito para fazer a vontade de Dusclops.",
    evolution: {
      prev: ["355", "Level 37"],
      next: [["477", "trade holding Reaper Cloth"]],
    },
    profile: {
      height: "1.6 m",
      weight: "30.6 kg",
      egg: ["Amorphous"],
      ability: [
        ["Pressure", "false"],
        ["Frisk", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/356.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/356.png",
      hires: "./Imagens/Pokedex/hires/356.png",
    },
  },
  {
    id: 357,
    name: {
      english: "Tropius",
      japanese: "トロピウス",
      chinese: "热带龙",
      french: "Tropius",
    },
    type: ["Grama", "Voador"],
    base: {
      HP: 99,
      Attack: 68,
      Defense: 83,
      "Sp. Attack": 72,
      "Sp. Defense": 87,
      Speed: 51,
    },
    species: "Fruit Pokémon",
    description:
      "Cachos de frutas deliciosas crescem ao redor de seu pescoço. Em áreas quentes, muitas fazendas criam Tropius.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "100 kg",
      egg: ["Monster", "Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Solar Power", "false"],
        ["Harvest", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/357.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/357.png",
      hires: "./Imagens/Pokedex/hires/357.png",
    },
  },
  {
    id: 358,
    name: {
      english: "Chimecho",
      japanese: "チリーン",
      chinese: "风铃铃",
      french: "Éoko",
    },
    type: ["Psíquico"],
    base: {
      HP: 75,
      Attack: 50,
      Defense: 80,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      Speed: 65,
    },
    species: "Wind Chime Pokémon",
    description:
      "Em ventos fortes, Chimecho chora enquanto pendura em um galho de árvore ou nas beiradas de um prédio usando uma ventosa em sua cabeça. Este Pokémon colhe bagas com sua longa cauda e as come.",
    evolution: {
      prev: ["433", "high Friendship, Nighttime"],
    },
    profile: {
      height: "0.6 m",
      weight: "1 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/358.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/358.png",
      hires: "./Imagens/Pokedex/hires/358.png",
    },
  },
  {
    id: 359,
    name: {
      english: "Absol",
      japanese: "アブソル",
      chinese: "阿勃梭鲁",
      french: "Absol",
    },
    type: ["Sombrio"],
    base: {
      HP: 65,
      Attack: 130,
      Defense: 60,
      "Sp. Attack": 75,
      "Sp. Defense": 60,
      Speed: 75,
    },
    species: "Disaster Pokémon",
    description:
      "Os idosos o chamam de Pokémon desastre e o detestam, mas o interesse em seu poder de prever desastres está aumentando.",
    evolution: {},
    profile: {
      height: "1.2 m",
      weight: "47 kg",
      egg: ["Field"],
      ability: [
        ["Pressure", "false"],
        ["Super Luck", "false"],
        ["Justified", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/359.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/359.png",
      hires: "./Imagens/Pokedex/hires/359.png",
    },
  },
  {
    id: 360,
    name: {
      english: "Wynaut",
      japanese: "ソーナノ",
      chinese: "小果然",
      french: "Okéoké",
    },
    type: ["Psíquico"],
    base: {
      HP: 95,
      Attack: 23,
      Defense: 48,
      "Sp. Attack": 23,
      "Sp. Defense": 48,
      Speed: 23,
    },
    species: "Bright Pokémon",
    description:
      "Wynaut se reúnem em noites de lua cheia para brincar apertando-se um contra o outro. Ao ser apertado, este Pokémon ganha resistência e é treinado para distribuir poderosos contra-ataques.",
    evolution: {
      next: [["202", "Level 15"]],
    },
    profile: {
      height: "0.6 m",
      weight: "14 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Shadow Tag", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/360.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/360.png",
      hires: "./Imagens/Pokedex/hires/360.png",
    },
  },
  {
    id: 361,
    name: {
      english: "Snorunt",
      japanese: "ユキワラシ",
      chinese: "雪童子",
      french: "Stalgamin",
    },
    type: ["Gelo"],
    base: {
      HP: 50,
      Attack: 50,
      Defense: 50,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 50,
    },
    species: "Snow Hat Pokémon",
    description:
      "Pessoas ricas de áreas frias compartilham memórias de infância de brincar com Snorunt.",
    evolution: {
      next: [
        ["362", "Level 42"],
        ["478", "use Dawn Stone, Female"],
      ],
    },
    profile: {
      height: "0.7 m",
      weight: "16.8 kg",
      egg: ["Fada", "Mineral"],
      ability: [
        ["Inner Focus", "false"],
        ["Gelo Body", "false"],
        ["Moody", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/361.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/361.png",
      hires: "./Imagens/Pokedex/hires/361.png",
    },
  },
  {
    id: 362,
    name: {
      english: "Glalie",
      japanese: "オニゴーリ",
      chinese: "冰鬼护",
      french: "Oniglali",
    },
    type: ["Gelo"],
    base: {
      HP: 80,
      Attack: 80,
      Defense: 80,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 80,
    },
    species: "Face Pokémon",
    description:
      "Seu corpo real é uma rocha que não é particularmente dura. Glalie absorve umidade do ar e se cobre com uma armadura de gelo.",
    evolution: {
      prev: ["361", "Level 42"],
    },
    profile: {
      height: "1.5 m",
      weight: "256.5 kg",
      egg: ["Fada", "Mineral"],
      ability: [
        ["Inner Focus", "false"],
        ["Gelo Body", "false"],
        ["Moody", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/362.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/362.png",
      hires: "./Imagens/Pokedex/hires/362.png",
    },
  },
  {
    id: 363,
    name: {
      english: "Spheal",
      japanese: "タマザラシ",
      chinese: "海豹球",
      french: "Obalie",
    },
    type: ["Gelo", "Água"],
    base: {
      HP: 70,
      Attack: 40,
      Defense: 50,
      "Sp. Attack": 55,
      "Sp. Defense": 50,
      Speed: 25,
    },
    species: "Clap Pokémon",
    description:
      "Spheal sempre viaja rolando em seu corpo semelhante a uma bola. Quando chega a estação dos Gelobergs, este Pokémon pode ser visto rolando sobre o gelo e cruzando o mar.",
    evolution: {
      next: [["364", "Level 32"]],
    },
    profile: {
      height: "0.8 m",
      weight: "39.5 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Gelo Body", "false"],
        ["Oblivious", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/363.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/363.png",
      hires: "./Imagens/Pokedex/hires/363.png",
    },
  },
  {
    id: 364,
    name: {
      english: "Sealeo",
      japanese: "トドグラー",
      chinese: "海魔狮",
      french: "Phogleur",
    },
    type: ["Gelo", "Água"],
    base: {
      HP: 90,
      Attack: 60,
      Defense: 70,
      "Sp. Attack": 75,
      "Sp. Defense": 70,
      Speed: 45,
    },
    species: "Ball Roll Pokémon",
    description:
      "Sealeo costuma equilibrar e rolar coisas na ponta de seu nariz. Enquanto o Pokémon está rolando algo, ele verifica o aroma e a textura do objeto para determinar se gosta ou não do objeto.",
    evolution: {
      prev: ["363", "Level 32"],
      next: [["365", "Level 44"]],
    },
    profile: {
      height: "1.1 m",
      weight: "87.6 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Gelo Body", "false"],
        ["Oblivious", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/364.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/364.png",
      hires: "./Imagens/Pokedex/hires/364.png",
    },
  },
  {
    id: 365,
    name: {
      english: "Walrein",
      japanese: "トドゼルガ",
      chinese: "帝牙海狮",
      french: "Kaimorse",
    },
    type: ["Gelo", "Água"],
    base: {
      HP: 110,
      Attack: 80,
      Defense: 90,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      Speed: 65,
    },
    species: "Gelo Break Pokémon",
    description:
      "Walrein nada por toda parte em água gelada enquanto esmaga Gelobergs com seus grandes e imponentes presas. Sua espessa camada de gordura faz com que os ataques inimigos ricocheteiem inofensivamente.",
    evolution: {
      prev: ["364", "Level 44"],
    },
    profile: {
      height: "1.4 m",
      weight: "150.6 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Gelo Body", "false"],
        ["Oblivious", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/365.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/365.png",
      hires: "./Imagens/Pokedex/hires/365.png",
    },
  },
  {
    id: 366,
    name: {
      english: "Clamperl",
      japanese: "パールル",
      chinese: "珍珠贝",
      french: "Coquiperl",
    },
    type: ["Água"],
    base: {
      HP: 35,
      Attack: 64,
      Defense: 85,
      "Sp. Attack": 74,
      "Sp. Defense": 55,
      Speed: 32,
    },
    species: "Bivalve Pokémon",
    description:
      "As pérolas de Clamperl são extremamente preciosas. Elas podem ser mais de 10 vezes mais caras que as pérolas de Shellder.",
    evolution: {
      next: [
        ["367", "trade holding Deep Sea Tooth"],
        ["368", "trade holding Deep Sea Scale"],
      ],
    },
    profile: {
      height: "0.4 m",
      weight: "52.5 kg",
      egg: ["Água 1"],
      ability: [
        ["Shell Armor", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/366.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/366.png",
      hires: "./Imagens/Pokedex/hires/366.png",
    },
  },
  {
    id: 367,
    name: {
      english: "Huntail",
      japanese: "ハンテール",
      chinese: "猎斑鱼",
      french: "Serpang",
    },
    type: ["Água"],
    base: {
      HP: 55,
      Attack: 104,
      Defense: 105,
      "Sp. Attack": 94,
      "Sp. Defense": 75,
      Speed: 52,
    },
    species: "Deep Sea Pokémon",
    description:
      "Mares profundos são seu habitat. De acordo com a tradição, quando Huntail sobem na costa, algo infeliz acontecerá.",
    evolution: {
      prev: ["366", "trade holding Deep Sea Tooth"],
    },
    profile: {
      height: "1.7 m",
      weight: "27 kg",
      egg: ["Água 1"],
      ability: [
        ["Swift Swim", "false"],
        ["Água Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/367.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/367.png",
      hires: "./Imagens/Pokedex/hires/367.png",
    },
  },
  {
    id: 368,
    name: {
      english: "Gorebyss",
      japanese: "サクラビス",
      chinese: "樱花鱼",
      french: "Rosabyss",
    },
    type: ["Água"],
    base: {
      HP: 55,
      Attack: 84,
      Defense: 105,
      "Sp. Attack": 114,
      "Sp. Defense": 75,
      Speed: 52,
    },
    species: "South Sea Pokémon",
    description:
      "Ele suga fluidos corporais de sua presa. A carne sobrando afunda no fundo do mar, onde se torna alimento para outros Pokémon.",
    evolution: {
      prev: ["366", "trade holding Deep Sea Scale"],
    },
    profile: {
      height: "1.8 m",
      weight: "22.6 kg",
      egg: ["Água 1"],
      ability: [
        ["Swift Swim", "false"],
        ["Hydration", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/368.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/368.png",
      hires: "./Imagens/Pokedex/hires/368.png",
    },
  },
  {
    id: 369,
    name: {
      english: "Relicanth",
      japanese: "ジーランス",
      chinese: "古空棘鱼",
      french: "Relicanth",
    },
    type: ["Água", "Rocha"],
    base: {
      HP: 100,
      Attack: 90,
      Defense: 130,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      Speed: 55,
    },
    species: "Longevity Pokémon",
    description:
      "A razão pela qual não mudou nada em cem milhões de anos é que aparentemente já é uma forma de vida perfeita.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "23.4 kg",
      egg: ["Água 1", "Água 2"],
      ability: [
        ["Swift Swim", "false"],
        ["Rocha Head", "false"],
        ["Sturdy", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/369.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/369.png",
      hires: "./Imagens/Pokedex/hires/369.png",
    },
  },
  {
    id: 370,
    name: {
      english: "Luvdisc",
      japanese: "ラブカス",
      chinese: "爱心鱼",
      french: "Lovdisc",
    },
    type: ["Água"],
    base: {
      HP: 43,
      Attack: 30,
      Defense: 55,
      "Sp. Attack": 40,
      "Sp. Defense": 65,
      Speed: 97,
    },
    species: "Rendezvous Pokémon",
    description:
      "Luvdisc faz sua casa em recifes de corais em mares quentes. Ele adora dormir no espaço entre os galhos de Corsola.",
    evolution: {},
    profile: {
      height: "0.6 m",
      weight: "8.7 kg",
      egg: ["Água 2"],
      ability: [
        ["Swift Swim", "false"],
        ["Hydration", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/370.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/370.png",
      hires: "./Imagens/Pokedex/hires/370.png",
    },
  },
  {
    id: 371,
    name: {
      english: "Bagon",
      japanese: "タツベイ",
      chinese: "宝贝龙",
      french: "Draby",
    },
    type: ["Dragão"],
    base: {
      HP: 45,
      Attack: 75,
      Defense: 60,
      "Sp. Attack": 40,
      "Sp. Defense": 30,
      Speed: 50,
    },
    species: "Rocha Head Pokémon",
    description:
      "Algumas teorias sugerem que seu comportamento de bater a cabeça fortemente nas coisas estimula células que afetam sua evolução.",
    evolution: {
      next: [["372", "Level 30"]],
    },
    profile: {
      height: "0.6 m",
      weight: "42.1 kg",
      egg: ["Dragão"],
      ability: [
        ["Rocha Head", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/371.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/371.png",
      hires: "./Imagens/Pokedex/hires/371.png",
    },
  },
  {
    id: 372,
    name: {
      english: "Shelgon",
      japanese: "コモルー",
      chinese: "甲壳龙",
      french: "Drackhaus",
    },
    type: ["Dragão"],
    base: {
      HP: 65,
      Attack: 95,
      Defense: 100,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      Speed: 50,
    },
    species: "Endurance Pokémon",
    description:
      "Shelgon vive nas profundezas das cavernas. Ele fica fechado em sua casca dura, sonhando com o dia em que poderá voar.",
    evolution: {
      prev: ["371", "Level 30"],
      next: [["373", "Level 50"]],
    },
    profile: {
      height: "1.1 m",
      weight: "110.5 kg",
      egg: ["Dragão"],
      ability: [
        ["Rocha Head", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/372.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/372.png",
      hires: "./Imagens/Pokedex/hires/372.png",
    },
  },
  {
    id: 373,
    name: {
      english: "Salamence",
      japanese: "ボーマンダ",
      chinese: "暴飞龙",
      french: "Drattak",
    },
    type: ["Dragão", "Voador"],
    base: {
      HP: 95,
      Attack: 135,
      Defense: 80,
      "Sp. Attack": 110,
      "Sp. Defense": 80,
      Speed: 100,
    },
    species: "Dragão Pokémon",
    description:
      "Graças a seus fervorosos desejos, as células em seu corpo finalmente mutaram e, finalmente, ele tem o desejo de seu coração - asas.",
    evolution: {
      prev: ["372", "Level 50"],
    },
    profile: {
      height: "1.5 m",
      weight: "102.6 kg",
      egg: ["Dragão"],
      ability: [
        ["Intimidate", "false"],
        ["Moxie", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/373.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/373.png",
      hires: "./Imagens/Pokedex/hires/373.png",
    },
  },
  {
    id: 374,
    name: {
      english: "Beldum",
      japanese: "ダンバル",
      chinese: "铁哑铃",
      french: "Terhal",
    },
    type: ["Metal", "Psíquico"],
    base: {
      HP: 40,
      Attack: 55,
      Defense: 80,
      "Sp. Attack": 35,
      "Sp. Defense": 60,
      Speed: 30,
    },
    species: "Iron Ball Pokémon",
    description:
      "Se você irritá-lo, ele fará mais do que correr. Ele também explodirá um forte magnetismo, fazendo com que máquinas próximas se quebrem.",
    evolution: {
      next: [["375", "Level 20"]],
    },
    profile: {
      height: "0.6 m",
      weight: "95.2 kg",
      egg: ["Mineral"],
      ability: [
        ["Clear Body", "false"],
        ["Light Metal", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/374.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/374.png",
      hires: "./Imagens/Pokedex/hires/374.png",
    },
  },
  {
    id: 375,
    name: {
      english: "Metang",
      japanese: "メタング",
      chinese: "金属怪",
      french: "Métang",
    },
    type: ["Metal", "Psíquico"],
    base: {
      HP: 60,
      Attack: 75,
      Defense: 100,
      "Sp. Attack": 55,
      "Sp. Defense": 80,
      Speed: 50,
    },
    species: "Iron Claw Pokémon",
    description:
      "Ele voa em altas velocidades pelos céus. Quando encontra sua presa, Metang agarra firmemente com suas garras afiadas e nunca solta.",
    evolution: {
      prev: ["374", "Level 20"],
      next: [["376", "Level 45"]],
    },
    profile: {
      height: "1.2 m",
      weight: "202.5 kg",
      egg: ["Mineral"],
      ability: [
        ["Clear Body", "false"],
        ["Light Metal", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/375.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/375.png",
      hires: "./Imagens/Pokedex/hires/375.png",
    },
  },
  {
    id: 376,
    name: {
      english: "Metagross",
      japanese: "メタグロス",
      chinese: "巨金怪",
      french: "Métalosse",
    },
    type: ["Metal", "Psíquico"],
    base: {
      HP: 80,
      Attack: 135,
      Defense: 130,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      Speed: 70,
    },
    species: "Iron Leg Pokémon",
    description:
      "Ele analisa seus oponentes com mais precisão do que um supercomputador, o que lhe permite calmarmente encurralá-los.",
    evolution: {
      prev: ["375", "Level 45"],
    },
    profile: {
      height: "1.6 m",
      weight: "550 kg",
      egg: ["Mineral"],
      ability: [
        ["Clear Body", "false"],
        ["Light Metal", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/376.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/376.png",
      hires: "./Imagens/Pokedex/hires/376.png",
    },
  },
  {
    id: 377,
    name: {
      english: "Regirock",
      japanese: "レジロック",
      chinese: "雷吉洛克",
      french: "Regirock",
    },
    type: ["Rocha"],
    base: {
      HP: 80,
      Attack: 100,
      Defense: 200,
      "Sp. Attack": 50,
      "Sp. Defense": 100,
      Speed: 50,
    },
    species: "Rocha Peak Pokémon",
    description:
      "O corpo de Regirock é composto inteiramente de rochas. Recentemente, um estudo fez a surpreendente descoberta de que as rochas foram todas desenterradas de locais diferentes.",
    evolution: {},
    profile: {
      height: "1.7 m",
      weight: "230 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Clear Body", "false"],
        ["Sturdy", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/377.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/377.png",
      hires: "./Imagens/Pokedex/hires/377.png",
    },
  },
  {
    id: 378,
    name: {
      english: "RegGelo",
      japanese: "レジアイス",
      chinese: "雷吉艾斯",
      french: "RegGelo",
    },
    type: ["Gelo"],
    base: {
      HP: 80,
      Attack: 50,
      Defense: 100,
      "Sp. Attack": 100,
      "Sp. Defense": 200,
      Speed: 50,
    },
    species: "Geloberg Pokémon",
    description:
      "RegGelo se cobre com ar gelado de -328 graus Fahrenheit. As coisas congelarão sólidas apenas por se aproximar deste Pokémon. Seu corpo gelado é tão frio que não derreterá mesmo que esteja imerso em magma.",
    evolution: {},
    profile: {
      height: "1.8 m",
      weight: "175 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Clear Body", "false"],
        ["Gelo Body", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/378.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/378.png",
      hires: "./Imagens/Pokedex/hires/378.png",
    },
  },
  {
    id: 379,
    name: {
      english: "Registeel",
      japanese: "レジスチル",
      chinese: "雷吉斯奇鲁",
      french: "Registeel",
    },
    type: ["Metal"],
    base: {
      HP: 80,
      Attack: 75,
      Defense: 150,
      "Sp. Attack": 75,
      "Sp. Defense": 150,
      Speed: 50,
    },
    species: "Iron Pokémon",
    description:
      "Registeel foi preso por pessoas na antiguidade. Acredita-se que o metal que compõe seu corpo seja uma substância curiosa que não é deste mundo.",
    evolution: {},
    profile: {
      height: "1.9 m",
      weight: "205 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Clear Body", "false"],
        ["Light Metal", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/379.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/379.png",
      hires: "./Imagens/Pokedex/hires/379.png",
    },
  },
  {
    id: 380,
    name: {
      english: "Latias",
      japanese: "ラティアス",
      chinese: "拉帝亚斯",
      french: "Latias",
    },
    type: ["Dragão", "Psíquico"],
    base: {
      HP: 80,
      Attack: 80,
      Defense: 90,
      "Sp. Attack": 110,
      "Sp. Defense": 130,
      Speed: 110,
    },
    species: "Eon Pokémon",
    description:
      "Latias é altamente inteligente e capaz de entender a fala humana. É coberto por uma penugem semelhante a vidro. O Pokémon envolve seu corpo com sua penugem e refracta luz para alterar sua aparência.",
    evolution: {},
    profile: {
      height: "1.4 m",
      weight: "40 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/380.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/380.png",
      hires: "./Imagens/Pokedex/hires/380.png",
    },
  },
  {
    id: 381,
    name: {
      english: "Latios",
      japanese: "ラティオス",
      chinese: "拉帝欧斯",
      french: "Latios",
    },
    type: ["Dragão", "Psíquico"],
    base: {
      HP: 80,
      Attack: 90,
      Defense: 80,
      "Sp. Attack": 130,
      "Sp. Defense": 110,
      Speed: 110,
    },
    species: "Eon Pokémon",
    description:
      "Latios só abrirá seu coração para um treinador com um espírito compassivo. Este Pokémon pode voar mais rápido que um avião a jato, dobrando suas patas dianteiras para minimizar a resistência do ar.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "60 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/381.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/381.png",
      hires: "./Imagens/Pokedex/hires/381.png",
    },
  },
  {
    id: 382,
    name: {
      english: "Kyogre",
      japanese: "カイオーガ",
      chinese: "盖欧卡",
      french: "Kyogre",
    },
    type: ["Água"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 90,
      "Sp. Attack": 150,
      "Sp. Defense": 140,
      Speed: 90,
    },
    species: "Sea Basin Pokémon",
    description:
      "Kyogre é considerado a personificação do próprio mar. Lendas contam de suas muitas batalhas contra Groudon, enquanto cada um buscava ganhar o poder da natureza.",
    evolution: {},
    profile: {
      height: "4.5 m",
      weight: "352 kg",
      egg: ["Undiscovered"],
      ability: [["Drizzle", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/382.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/382.png",
      hires: "./Imagens/Pokedex/hires/382.png",
    },
  },
  {
    id: 383,
    name: {
      english: "Groudon",
      japanese: "グラードン",
      chinese: "固拉多",
      french: "Groudon",
    },
    type: ["Terra"],
    base: {
      HP: 100,
      Attack: 150,
      Defense: 140,
      "Sp. Attack": 100,
      "Sp. Defense": 90,
      Speed: 90,
    },
    species: "Continent Pokémon",
    description:
      "Por meio da Reversão Primal e com todo o poder da natureza, ele reassumirá sua verdadeira forma. Ele pode fazer o magma entrar em erupção e expandir a massa de terra do mundo.",
    evolution: {},
    profile: {
      height: "3.5 m",
      weight: "950 kg",
      egg: ["Undiscovered"],
      ability: [["Drought", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/383.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/383.png",
      hires: "./Imagens/Pokedex/hires/383.png",
    },
  },
  {
    id: 384,
    name: {
      english: "Rayquaza",
      japanese: "レックウザ",
      chinese: "烈空坐",
      french: "Rayquaza",
    },
    type: ["Dragão", "Voador"],
    base: {
      HP: 105,
      Attack: 150,
      Defense: 90,
      "Sp. Attack": 150,
      "Sp. Defense": 90,
      Speed: 95,
    },
    species: "Sky High Pokémon",
    description:
      "Ele voa para sempre através da camada de ozônio, consumindo meteoroides para sustento. Os muitos meteoroides em seu corpo fornecem a energia necessária para Mega Evoluir.",
    evolution: {},
    profile: {
      height: "7 m",
      weight: "206.5 kg",
      egg: ["Undiscovered"],
      ability: [["Air Lock", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/384.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/384.png",
      hires: "./Imagens/Pokedex/hires/384.png",
    },
  },
  {
    id: 385,
    name: {
      english: "Jirachi",
      japanese: "ジラーチ",
      chinese: "基拉祈",
      french: "Jirachi",
    },
    type: ["Metal", "Psíquico"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 100,
    },
    species: "Wish Pokémon",
    description:
      "Jirachi despertará de seu sono de mil anos se você cantar para ele com uma voz de pureza. Diz-se que ele realiza qualquer desejo que as pessoas desejam.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "1.1 kg",
      egg: ["Undiscovered"],
      ability: [["Serene Grace", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/385.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/385.png",
      hires: "./Imagens/Pokedex/hires/385.png",
    },
  },
  {
    id: 386,
    name: {
      english: "Deoxys",
      japanese: "デオキシス",
      chinese: "代欧奇希斯",
      french: "Deoxys",
    },
    type: ["Psíquico"],
    base: {
      HP: 50,
      Attack: 150,
      Defense: 50,
      "Sp. Attack": 150,
      "Sp. Defense": 50,
      Speed: 150,
    },
    species: "DNA Pokémon",
    description:
      "Deoxys surgiu de um vírus que veio do espaço. É altamente inteligente e usa poderes psicoquinéticos. Este Pokémon dispara lasers do órgão cristalino em seu peito.",
    evolution: {},
    profile: {
      height: "1.7 m",
      weight: "60.8 kg",
      egg: ["Undiscovered"],
      ability: [["Pressure", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/386.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/386.png",
      hires: "./Imagens/Pokedex/hires/386.png",
    },
  },
  {
    id: 387,
    name: {
      english: "Turtwig",
      japanese: "ナエトル",
      chinese: "草苗龟",
      french: "Tortipouss",
    },
    type: ["Grama"],
    base: {
      HP: 55,
      Attack: 68,
      Defense: 64,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      Speed: 31,
    },
    species: "Tiny Leaf Pokémon",
    description:
      "Ele realiza fotossíntese com seu corpo, produzindo oxigênio. A folha em sua cabeça murcha se estiver com sede.",
    evolution: {
      next: [["388", "Level 18"]],
    },
    profile: {
      height: "0.4 m",
      weight: "10.2 kg",
      egg: ["Monster", "Grama"],
      ability: [
        ["Overgrow", "false"],
        ["Shell Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/387.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/387.png",
      hires: "./Imagens/Pokedex/hires/387.png",
    },
  },
  {
    id: 388,
    name: {
      english: "Grotle",
      japanese: "ハヤシガメ",
      chinese: "树林龟",
      french: "Boskara",
    },
    type: ["Grama"],
    base: {
      HP: 75,
      Attack: 89,
      Defense: 85,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      Speed: 36,
    },
    species: "Grove Pokémon",
    description:
      "Ele sabe onde a água pura brota. Ele carrega outros Pokémon nas costas.",
    evolution: {
      prev: ["387", "Level 18"],
      next: [["389", "Level 32"]],
    },
    profile: {
      height: "1.1 m",
      weight: "97 kg",
      egg: ["Monster", "Grama"],
      ability: [
        ["Overgrow", "false"],
        ["Shell Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/388.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/388.png",
      hires: "./Imagens/Pokedex/hires/388.png",
    },
  },
  {
    id: 389,
    name: {
      english: "Torterra",
      japanese: "ドダイトス",
      chinese: "土台龟",
      french: "Torterra",
    },
    type: ["Grama", "Terra"],
    base: {
      HP: 95,
      Attack: 109,
      Defense: 105,
      "Sp. Attack": 75,
      "Sp. Defense": 85,
      Speed: 56,
    },
    species: "Continent Pokémon",
    description:
      "Pequenos Pokémon ocasionalmente se reúnem em sua costas imóveis para começar a construir seus ninhos.",
    evolution: {
      prev: ["388", "Level 32"],
    },
    profile: {
      height: "2.2 m",
      weight: "310 kg",
      egg: ["Monster", "Grama"],
      ability: [
        ["Overgrow", "false"],
        ["Shell Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/389.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/389.png",
      hires: "./Imagens/Pokedex/hires/389.png",
    },
  },
  {
    id: 390,
    name: {
      english: "Chimchar",
      japanese: "ヒコザル",
      chinese: "小火焰猴",
      french: "Ouisticram",
    },
    type: ["Fogo"],
    base: {
      HP: 44,
      Attack: 58,
      Defense: 44,
      "Sp. Attack": 58,
      "Sp. Defense": 44,
      Speed: 61,
    },
    species: "Chimp Pokémon",
    description:
      "O gás produzido em sua barriga queima de sua extremidade traseira. O fogo queima fracamente quando ele se sente doente.",
    evolution: {
      next: [["391", "Level 14"]],
    },
    profile: {
      height: "0.5 m",
      weight: "6.2 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Blaze", "false"],
        ["Iron Fist", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/390.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/390.png",
      hires: "./Imagens/Pokedex/hires/390.png",
    },
  },
  {
    id: 391,
    name: {
      english: "Monferno",
      japanese: "モウカザル",
      chinese: "猛火猴",
      french: "Chimpenfeu",
    },
    type: ["Fogo", "Lutador"],
    base: {
      HP: 64,
      Attack: 78,
      Defense: 52,
      "Sp. Attack": 78,
      "Sp. Defense": 52,
      Speed: 81,
    },
    species: "Playful Pokémon",
    description:
      "Ele usa tetos e paredes para lançar ataques aéreos. Sua cauda de fogo é apenas uma arma.",
    evolution: {
      prev: ["390", "Level 14"],
      next: [["392", "Level 36"]],
    },
    profile: {
      height: "0.9 m",
      weight: "22 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Blaze", "false"],
        ["Iron Fist", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/391.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/391.png",
      hires: "./Imagens/Pokedex/hires/391.png",
    },
  },
  {
    id: 392,
    name: {
      english: "Infernape",
      japanese: "ゴウカザル",
      chinese: "烈焰猴",
      french: "Simiabraz",
    },
    type: ["Fogo", "Lutador"],
    base: {
      HP: 76,
      Attack: 104,
      Defense: 71,
      "Sp. Attack": 104,
      "Sp. Defense": 71,
      Speed: 108,
    },
    species: "Flame Pokémon",
    description:
      "Ele joga seus inimigos para cima com agilidade. Ele usa todos os membros para lutar em seu próprio estilo único.",
    evolution: {
      prev: ["391", "Level 36"],
    },
    profile: {
      height: "1.2 m",
      weight: "55 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Blaze", "false"],
        ["Iron Fist", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/392.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/392.png",
      hires: "./Imagens/Pokedex/hires/392.png",
    },
  },
  {
    id: 393,
    name: {
      english: "Piplup",
      japanese: "ポッチャマ",
      chinese: "波加曼",
      french: "Tiplouf",
    },
    type: ["Água"],
    base: {
      HP: 53,
      Attack: 51,
      Defense: 53,
      "Sp. Attack": 61,
      "Sp. Defense": 56,
      Speed: 40,
    },
    species: "Penguin Pokémon",
    description:
      "Porque é muito orgulhoso, odeia aceitar comida das pessoas. Sua espessa penugem o protege do frio.",
    evolution: {
      next: [["394", "Level 16"]],
    },
    profile: {
      height: "0.4 m",
      weight: "5.2 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Torrent", "false"],
        ["Defiant", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/393.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/393.png",
      hires: "./Imagens/Pokedex/hires/393.png",
    },
  },
  {
    id: 394,
    name: {
      english: "Prinplup",
      japanese: "ポッタイシ",
      chinese: "波皇子",
      french: "Prinplouf",
    },
    type: ["Água"],
    base: {
      HP: 64,
      Attack: 66,
      Defense: 68,
      "Sp. Attack": 81,
      "Sp. Defense": 76,
      Speed: 50,
    },
    species: "Penguin Pokémon",
    description:
      "Ele vive uma vida solitária. Suas asas desferem golpes cruéis que podem quebrar até mesmo as árvores mais grossas.",
    evolution: {
      prev: ["393", "Level 16"],
      next: [["395", "Level 36"]],
    },
    profile: {
      height: "0.8 m",
      weight: "23 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Torrent", "false"],
        ["Defiant", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/394.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/394.png",
      hires: "./Imagens/Pokedex/hires/394.png",
    },
  },
  {
    id: 395,
    name: {
      english: "Empoleon",
      japanese: "エンペルト",
      chinese: "帝王拿波",
      french: "Pingoléon",
    },
    type: ["Água", "Metal"],
    base: {
      HP: 84,
      Attack: 86,
      Defense: 88,
      "Sp. Attack": 111,
      "Sp. Defense": 101,
      Speed: 60,
    },
    species: "Emperor Pokémon",
    description:
      "Os três chifres que se estendem de seu bico atestam seu poder. O líder tem os maiores chifres.",
    evolution: {
      prev: ["394", "Level 36"],
    },
    profile: {
      height: "1.7 m",
      weight: "84.5 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Torrent", "false"],
        ["Defiant", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/395.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/395.png",
      hires: "./Imagens/Pokedex/hires/395.png",
    },
  },
  {
    id: 396,
    name: {
      english: "Starly",
      japanese: "ムックル",
      chinese: "姆克儿",
      french: "Étourmi",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 40,
      Attack: 55,
      Defense: 30,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 60,
    },
    species: "Starling Pokémon",
    description:
      "Eles se reúnem em torno de montanhas e campos, perseguindo Pokémon inseto. Seu canto é barulhento e irritante.",
    evolution: {
      next: [["397", "Level 14"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2 kg",
      egg: ["Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Reckless", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/396.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/396.png",
      hires: "./Imagens/Pokedex/hires/396.png",
    },
  },
  {
    id: 397,
    name: {
      english: "Staravia",
      japanese: "ムクバード",
      chinese: "姆克鸟",
      french: "Étourvol",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 55,
      Attack: 75,
      Defense: 50,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 80,
    },
    species: "Starling Pokémon",
    description:
      "Ele vive em florestas e campos. Brigas por território ocorrem quando os bandos colidem.",
    evolution: {
      prev: ["396", "Level 14"],
      next: [["398", "Level 34"]],
    },
    profile: {
      height: "0.6 m",
      weight: "15.5 kg",
      egg: ["Voador"],
      ability: [
        ["Intimidate", "false"],
        ["Reckless", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/397.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/397.png",
      hires: "./Imagens/Pokedex/hires/397.png",
    },
  },
  {
    id: 398,
    name: {
      english: "Staraptor",
      japanese: "ムクホーク",
      chinese: "姆克鹰",
      french: "Étouraptor",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 85,
      Attack: 120,
      Defense: 70,
      "Sp. Attack": 50,
      "Sp. Defense": 60,
      Speed: 100,
    },
    species: "Predator Pokémon",
    description:
      "Quando Staravia evolui para Staraptor, eles deixam o bando para viver sozinhos. Eles têm asas resistentes.",
    evolution: {
      prev: ["397", "Level 34"],
    },
    profile: {
      height: "1.2 m",
      weight: "24.9 kg",
      egg: ["Voador"],
      ability: [
        ["Intimidate", "false"],
        ["Reckless", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/398.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/398.png",
      hires: "./Imagens/Pokedex/hires/398.png",
    },
  },
  {
    id: 399,
    name: {
      english: "Bidoof",
      japanese: "ビッパ",
      chinese: "大牙狸",
      french: "Keunotor",
    },
    type: ["Normal"],
    base: {
      HP: 59,
      Attack: 45,
      Defense: 40,
      "Sp. Attack": 35,
      "Sp. Defense": 40,
      Speed: 31,
    },
    species: "Plump Mouse Pokémon",
    description:
      "Ele constantemente rói troncos e rochas para desgastar seus dentes da frente. Ele aninha-se ao lado da água.",
    evolution: {
      next: [["400", "Level 15"]],
    },
    profile: {
      height: "0.5 m",
      weight: "20 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Simple", "false"],
        ["Unaware", "false"],
        ["Moody", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/399.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/399.png",
      hires: "./Imagens/Pokedex/hires/399.png",
    },
  },
  {
    id: 400,
    name: {
      english: "Bibarel",
      japanese: "ビーダル",
      chinese: "大尾狸",
      french: "Castorno",
    },
    type: ["Normal", "Água"],
    base: {
      HP: 79,
      Attack: 85,
      Defense: 60,
      "Sp. Attack": 55,
      "Sp. Defense": 60,
      Speed: 71,
    },
    species: "Beaver Pokémon",
    description:
      "Ele faz seu ninho represando riachos com casca e lama. É conhecido como um trabalhador incansável.",
    evolution: {
      prev: ["399", "Level 15"],
    },
    profile: {
      height: "1 m",
      weight: "31.5 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Simple", "false"],
        ["Unaware", "false"],
        ["Moody", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/400.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/400.png",
      hires: "./Imagens/Pokedex/hires/400.png",
    },
  },
  {
    id: 401,
    name: {
      english: "Kricketot",
      japanese: "コロボーシ",
      chinese: "圆法师",
      french: "Crikzik",
    },
    type: ["Inseto"],
    base: {
      HP: 37,
      Attack: 25,
      Defense: 41,
      "Sp. Attack": 25,
      "Sp. Defense": 41,
      Speed: 25,
    },
    species: "Cricket Pokémon",
    description:
      "Quando suas antenas se tocam, soa como a música de um xilofone.",
    evolution: {
      next: [["402", "Level 10"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2.2 kg",
      egg: ["Inseto"],
      ability: [
        ["Shed Skin", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/401.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/401.png",
      hires: "./Imagens/Pokedex/hires/401.png",
    },
  },
  {
    id: 402,
    name: {
      english: "Kricketune",
      japanese: "コロトック",
      chinese: "音箱蟀",
      french: "Mélokrik",
    },
    type: ["Inseto"],
    base: {
      HP: 77,
      Attack: 85,
      Defense: 51,
      "Sp. Attack": 55,
      "Sp. Defense": 51,
      Speed: 65,
    },
    species: "Cricket Pokémon",
    description:
      "Ele sinaliza suas emoções com suas melodias. Cientistas estão estudando esses padrões melódicos.",
    evolution: {
      prev: ["401", "Level 10"],
    },
    profile: {
      height: "1 m",
      weight: "25.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Technician", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/402.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/402.png",
      hires: "./Imagens/Pokedex/hires/402.png",
    },
  },
  {
    id: 403,
    name: {
      english: "Shinx",
      japanese: "コリンク",
      chinese: "小猫怪",
      french: "Lixy",
    },
    type: ["Elétrico"],
    base: {
      HP: 45,
      Attack: 65,
      Defense: 34,
      "Sp. Attack": 40,
      "Sp. Defense": 34,
      Speed: 45,
    },
    species: "Flash Pokémon",
    description:
      "Todo o seu pelo brilha se houver perigo. Ele foge enquanto o inimigo está momentaneamente cego.",
    evolution: {
      next: [["404", "Level 15"]],
    },
    profile: {
      height: "0.5 m",
      weight: "9.5 kg",
      egg: ["Field"],
      ability: [
        ["Rivalry", "false"],
        ["Intimidate", "false"],
        ["Guts", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/403.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/403.png",
      hires: "./Imagens/Pokedex/hires/403.png",
    },
  },
  {
    id: 404,
    name: {
      english: "Luxio",
      japanese: "ルクシオ",
      chinese: "勒克猫",
      french: "Luxio",
    },
    type: ["Elétrico"],
    base: {
      HP: 60,
      Attack: 85,
      Defense: 49,
      "Sp. Attack": 60,
      "Sp. Defense": 49,
      Speed: 60,
    },
    species: "Spark Pokémon",
    description:
      "Forte eletricidade percorre as pontas de suas garras afiadas. Um leve arranhão causa desmaio nos inimigos.",
    evolution: {
      prev: ["403", "Level 15"],
      next: [["405", "Level 30"]],
    },
    profile: {
      height: "0.9 m",
      weight: "30.5 kg",
      egg: ["Field"],
      ability: [
        ["Rivalry", "false"],
        ["Intimidate", "false"],
        ["Guts", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/404.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/404.png",
      hires: "./Imagens/Pokedex/hires/404.png",
    },
  },
  {
    id: 405,
    name: {
      english: "Luxray",
      japanese: "レントラー",
      chinese: "伦琴猫",
      french: "Luxray",
    },
    type: ["Elétrico"],
    base: {
      HP: 80,
      Attack: 120,
      Defense: 79,
      "Sp. Attack": 95,
      "Sp. Defense": 79,
      Speed: 70,
    },
    species: "Gleam Eyes Pokémon",
    description:
      "A habilidade de Luxray de ver através de objetos é útil quando está procurando por perigo.",
    evolution: {
      prev: ["404", "Level 30"],
    },
    profile: {
      height: "1.4 m",
      weight: "42 kg",
      egg: ["Field"],
      ability: [
        ["Rivalry", "false"],
        ["Intimidate", "false"],
        ["Guts", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/405.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/405.png",
      hires: "./Imagens/Pokedex/hires/405.png",
    },
  },
  {
    id: 406,
    name: {
      english: "Budew",
      japanese: "スボミー",
      chinese: "含羞苞",
      french: "Rozbouton",
    },
    type: ["Grama", "Venenoso"],
    base: {
      HP: 40,
      Attack: 30,
      Defense: 35,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      Speed: 55,
    },
    species: "Bud Pokémon",
    description:
      "Durante o inverno, ele fecha seu botão e suporta o frio. Na primavera, o botão se abre e libera pólen.",
    evolution: {
      next: [["315", "high Friendship, Daytime"]],
    },
    profile: {
      height: "0.2 m",
      weight: "1.2 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Natural Cure", "false"],
        ["Venenoso Point", "false"],
        ["Leaf Guard", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/406.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/406.png",
      hires: "./Imagens/Pokedex/hires/406.png",
    },
  },
  {
    id: 407,
    name: {
      english: "Roserade",
      japanese: "ロズレイド",
      chinese: "罗丝雷朵",
      french: "Roserade",
    },
    type: ["Grama", "Venenoso"],
    base: {
      HP: 60,
      Attack: 70,
      Defense: 65,
      "Sp. Attack": 125,
      "Sp. Defense": 105,
      Speed: 90,
    },
    species: "Bouquet Pokémon",
    description:
      "Com os movimentos de um dançarino, ele ataca com chicotes que são densamente forrados com espinhos venenosos.",
    evolution: {
      prev: ["315", "use Shiny Stone"],
    },
    profile: {
      height: "0.9 m",
      weight: "14.5 kg",
      egg: ["Fada", "Grama"],
      ability: [
        ["Natural Cure", "false"],
        ["Venenoso Point", "false"],
        ["Technician", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/407.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/407.png",
      hires: "./Imagens/Pokedex/hires/407.png",
    },
  },
  {
    id: 408,
    name: {
      english: "Cranidos",
      japanese: "ズガイドス",
      chinese: "头盖龙",
      french: "Kranidos",
    },
    type: ["Rocha"],
    base: {
      HP: 67,
      Attack: 125,
      Defense: 40,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 58,
    },
    species: "Head Butt Pokémon",
    description:
      "Seu crânio duro é sua característica distintiva. Ele quebrou árvores com cabeçadas e depois se alimentou de suas bagas maduras.",
    evolution: {
      next: [["409", "Level 30"]],
    },
    profile: {
      height: "0.9 m",
      weight: "31.5 kg",
      egg: ["Monster"],
      ability: [
        ["Mold Breaker", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/408.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/408.png",
      hires: "./Imagens/Pokedex/hires/408.png",
    },
  },
  {
    id: 409,
    name: {
      english: "Rampardos",
      japanese: "ラムパルド",
      chinese: "战槌龙",
      french: "Charkos",
    },
    type: ["Rocha"],
    base: {
      HP: 97,
      Attack: 165,
      Defense: 60,
      "Sp. Attack": 65,
      "Sp. Defense": 50,
      Speed: 58,
    },
    species: "Head Butt Pokémon",
    description:
      "Este Pokémon antigo usava cabeçadas habilmente. Seu cérebro era realmente pequeno, por isso algumas teorias sugerem que sua estupidez levou à sua extinção.",
    evolution: {
      prev: ["408", "Level 30"],
    },
    profile: {
      height: "1.6 m",
      weight: "102.5 kg",
      egg: ["Monster"],
      ability: [
        ["Mold Breaker", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/409.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/409.png",
      hires: "./Imagens/Pokedex/hires/409.png",
    },
  },
  {
    id: 410,
    name: {
      english: "Shieldon",
      japanese: "タテトプス",
      chinese: "盾甲龙",
      french: "Dinoclier",
    },
    type: ["Rocha", "Metal"],
    base: {
      HP: 30,
      Attack: 42,
      Defense: 118,
      "Sp. Attack": 42,
      "Sp. Defense": 88,
      Speed: 30,
    },
    species: "Shield Pokémon",
    description:
      "Embora seus fósseis possam ser encontrados em camadas de rocha primitiva, nada além de seu rosto foi descoberto.",
    evolution: {
      next: [["411", "Level 30"]],
    },
    profile: {
      height: "0.5 m",
      weight: "57 kg",
      egg: ["Monster"],
      ability: [
        ["Sturdy", "false"],
        ["Soundproof", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/410.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/410.png",
      hires: "./Imagens/Pokedex/hires/410.png",
    },
  },
  {
    id: 411,
    name: {
      english: "Bastiodon",
      japanese: "トリデプス",
      chinese: "护城龙",
      french: "Bastiodon",
    },
    type: ["Rocha", "Metal"],
    base: {
      HP: 60,
      Attack: 52,
      Defense: 168,
      "Sp. Attack": 47,
      "Sp. Defense": 138,
      Speed: 30,
    },
    species: "Shield Pokémon",
    description:
      "Este Pokémon é de cerca de 100 milhões de anos atrás. Seu rosto terrivelmente resistente é mais duro que aço.",
    evolution: {
      prev: ["410", "Level 30"],
    },
    profile: {
      height: "1.3 m",
      weight: "149.5 kg",
      egg: ["Monster"],
      ability: [
        ["Sturdy", "false"],
        ["Soundproof", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/411.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/411.png",
      hires: "./Imagens/Pokedex/hires/411.png",
    },
  },
  {
    id: 412,
    name: {
      english: "Burmy",
      japanese: "ミノムッチ",
      chinese: "结草儿",
      french: "Cheniti",
    },
    type: ["Inseto"],
    base: {
      HP: 40,
      Attack: 29,
      Defense: 45,
      "Sp. Attack": 29,
      "Sp. Defense": 45,
      Speed: 36,
    },
    species: "Bagworm Pokémon",
    description:
      "Se sua capa for quebrada em batalha, ele rapidamente refaz a capa com materiais próximos.",
    evolution: {
      next: [
        ["413", "Level 20, Female"],
        ["414", "Level 20, Male"],
      ],
    },
    profile: {
      height: "0.2 m",
      weight: "3.4 kg",
      egg: ["Inseto"],
      ability: [
        ["Shed Skin", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/412.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/412.png",
      hires: "./Imagens/Pokedex/hires/412.png",
    },
  },
  {
    id: 413,
    name: {
      english: "Wormadam",
      japanese: "ミノマダム",
      chinese: "结草贵妇",
      french: "Cheniselle",
    },
    type: ["Inseto", "Grama"],
    base: {
      HP: 60,
      Attack: 59,
      Defense: 85,
      "Sp. Attack": 79,
      "Sp. Defense": 105,
      Speed: 36,
    },
    species: "Bagworm Pokémon",
    description:
      "Quando Burmy evoluiu, sua capa se tornou parte do corpo deste Pokémon. A capa nunca é derramada.",
    evolution: {
      prev: ["412", "Level 20, Female"],
    },
    profile: {
      height: "0.5 m",
      weight: "6.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Anticipation", "false"],
        ["Overcoat", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/413.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/413.png",
      hires: "./Imagens/Pokedex/hires/413.png",
    },
  },
  {
    id: 414,
    name: {
      english: "Mothim",
      japanese: "ガーメイル",
      chinese: "绅士蛾",
      french: "Papilord",
    },
    type: ["Inseto", "Voador"],
    base: {
      HP: 70,
      Attack: 94,
      Defense: 50,
      "Sp. Attack": 94,
      "Sp. Defense": 50,
      Speed: 66,
    },
    species: "Moth Pokémon",
    description: "Ele flutua à noite e rouba mel da colmeia de Combee.",
    evolution: {
      prev: ["412", "Level 20, Male"],
    },
    profile: {
      height: "0.9 m",
      weight: "23.3 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Tinted Lens", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/414.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/414.png",
      hires: "./Imagens/Pokedex/hires/414.png",
    },
  },
  {
    id: 415,
    name: {
      english: "Combee",
      japanese: "ミツハニー",
      chinese: "三蜜蜂",
      french: "Apitrini",
    },
    type: ["Inseto", "Voador"],
    base: {
      HP: 30,
      Attack: 30,
      Defense: 42,
      "Sp. Attack": 30,
      "Sp. Defense": 42,
      Speed: 70,
    },
    species: "Tiny Bee Pokémon",
    description:
      "Ele coleta e entrega mel para sua colônia. À noite, eles se aglomeram para formar uma colmeia e dormir.",
    evolution: {
      next: [["416", "Level 21, Female"]],
    },
    profile: {
      height: "0.3 m",
      weight: "5.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Honey Gather", "false"],
        ["Hustle", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/415.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/415.png",
      hires: "./Imagens/Pokedex/hires/415.png",
    },
  },
  {
    id: 416,
    name: {
      english: "Vespiquen",
      japanese: "ビークイン",
      chinese: "蜂女王",
      french: "Apireine",
    },
    type: ["Inseto", "Voador"],
    base: {
      HP: 70,
      Attack: 80,
      Defense: 102,
      "Sp. Attack": 80,
      "Sp. Defense": 102,
      Speed: 40,
    },
    species: "Beehive Pokémon",
    description:
      "Seu abdômen é um favo de mel para larvas. Ele cria suas larvas com mel coletado por Combee.",
    evolution: {
      prev: ["415", "Level 21, Female"],
    },
    profile: {
      height: "1.2 m",
      weight: "38.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Pressure", "false"],
        ["Unnerve", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/416.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/416.png",
      hires: "./Imagens/Pokedex/hires/416.png",
    },
  },
  {
    id: 417,
    name: {
      english: "Pachirisu",
      japanese: "パチリス",
      chinese: "帕奇利兹",
      french: "Pachirisu",
    },
    type: ["Elétrico"],
    base: {
      HP: 60,
      Attack: 45,
      Defense: 70,
      "Sp. Attack": 45,
      "Sp. Defense": 90,
      Speed: 95,
    },
    species: "EleSquirrel Pokémon",
    description:
      "Um par pode ser visto esfregando suas bolsas de bochecha juntas em um esforço para compartilhar eletricidade armazenada.",
    evolution: {},
    profile: {
      height: "0.4 m",
      weight: "3.9 kg",
      egg: ["Field", "Fada"],
      ability: [
        ["Run Away", "false"],
        ["Pickup", "false"],
        ["Volt Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/417.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/417.png",
      hires: "./Imagens/Pokedex/hires/417.png",
    },
  },
  {
    id: 418,
    name: {
      english: "Buizel",
      japanese: "ブイゼル",
      chinese: "泳圈鼬",
      french: "Mustébouée",
    },
    type: ["Água"],
    base: {
      HP: 55,
      Attack: 65,
      Defense: 35,
      "Sp. Attack": 60,
      "Sp. Defense": 30,
      Speed: 85,
    },
    species: "Sea Weasel Pokémon",
    description:
      "Ele infla o saco de flutuação ao redor de seu pescoço e estica a cabeça para fora da água para ver o que está acontecendo.",
    evolution: {
      next: [["419", "Level 26"]],
    },
    profile: {
      height: "0.7 m",
      weight: "29.5 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Swift Swim", "false"],
        ["Água Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/418.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/418.png",
      hires: "./Imagens/Pokedex/hires/418.png",
    },
  },
  {
    id: 419,
    name: {
      english: "Floatzel",
      japanese: "フローゼル",
      chinese: "浮潜鼬",
      french: "Mustéflott",
    },
    type: ["Água"],
    base: {
      HP: 85,
      Attack: 105,
      Defense: 55,
      "Sp. Attack": 85,
      "Sp. Defense": 50,
      Speed: 115,
    },
    species: "Sea Weasel Pokémon",
    description:
      "Seu saco de flutuação se desenvolveu como resultado da perseguição de presas aquáticas. Pode servir como uma balsa de borracha.",
    evolution: {
      prev: ["418", "Level 26"],
    },
    profile: {
      height: "1.1 m",
      weight: "33.5 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Swift Swim", "false"],
        ["Água Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/419.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/419.png",
      hires: "./Imagens/Pokedex/hires/419.png",
    },
  },
  {
    id: 420,
    name: {
      english: "Cherubi",
      japanese: "チェリンボ",
      chinese: "樱花宝",
      french: "Ceribou",
    },
    type: ["Grama"],
    base: {
      HP: 45,
      Attack: 35,
      Defense: 45,
      "Sp. Attack": 62,
      "Sp. Defense": 53,
      Speed: 35,
    },
    species: "Cherry Pokémon",
    description:
      "Ele evolui sugando a energia da pequena bola onde armazenava nutrientes.",
    evolution: {
      next: [["421", "Level 25"]],
    },
    profile: {
      height: "0.4 m",
      weight: "3.3 kg",
      egg: ["Fada", "Grama"],
      ability: [["Chlorophyll", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/420.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/420.png",
      hires: "./Imagens/Pokedex/hires/420.png",
    },
  },
  {
    id: 421,
    name: {
      english: "Cherrim",
      japanese: "チェリム",
      chinese: "樱花儿",
      french: "Ceriflor",
    },
    type: ["Grama"],
    base: {
      HP: 70,
      Attack: 60,
      Defense: 70,
      "Sp. Attack": 87,
      "Sp. Defense": 78,
      Speed: 85,
    },
    species: "Blossom Pokémon",
    description:
      "Se sentir luz solar forte, ele abre suas pétalas dobradas para absorver os raios do sol com todo o seu corpo.",
    evolution: {
      prev: ["420", "Level 25"],
    },
    profile: {
      height: "0.5 m",
      weight: "9.3 kg",
      egg: ["Fada", "Grama"],
      ability: [["Flower Gift", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/421.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/421.png",
      hires: "./Imagens/Pokedex/hires/421.png",
    },
  },
  {
    id: 422,
    name: {
      english: "Shellos",
      japanese: "カラナクシ",
      chinese: "无壳海兔",
      french: "Sancoki",
    },
    type: ["Água"],
    base: {
      HP: 76,
      Attack: 48,
      Defense: 48,
      "Sp. Attack": 57,
      "Sp. Defense": 62,
      Speed: 34,
    },
    species: "Sea Slug Pokémon",
    description:
      "Quando sente perigo, um líquido roxo escorre dele. Acredita-se que o líquido seja algo parecido com suor gorduroso.",
    evolution: {
      next: [["423", "Level 30"]],
    },
    profile: {
      height: "0.3 m",
      weight: "6.3 kg",
      egg: ["Água 1", "Amorphous"],
      ability: [
        ["Sticky Hold", "false"],
        ["Storm Drain", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/422.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/422.png",
      hires: "./Imagens/Pokedex/hires/422.png",
    },
  },
  {
    id: 423,
    name: {
      english: "Gastrodon",
      japanese: "トリトドン",
      chinese: "海兔兽",
      french: "Tritosor",
    },
    type: ["Água", "Terra"],
    base: {
      HP: 111,
      Attack: 83,
      Defense: 68,
      "Sp. Attack": 92,
      "Sp. Defense": 82,
      Speed: 39,
    },
    species: "Sea Slug Pokémon",
    description:
      "Sua forma e cor mudam, dependendo de seu ambiente e dieta. Há muitos deles em praias onde as ondas são calmas.",
    evolution: {
      prev: ["422", "Level 30"],
    },
    profile: {
      height: "0.9 m",
      weight: "29.9 kg",
      egg: ["Água 1", "Amorphous"],
      ability: [
        ["Sticky Hold", "false"],
        ["Storm Drain", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/423.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/423.png",
      hires: "./Imagens/Pokedex/hires/423.png",
    },
  },
  {
    id: 424,
    name: {
      english: "Ambipom",
      japanese: "エテボース",
      chinese: "双尾怪手",
      french: "Capidextre",
    },
    type: ["Normal"],
    base: {
      HP: 75,
      Attack: 100,
      Defense: 66,
      "Sp. Attack": 60,
      "Sp. Defense": 66,
      Speed: 115,
    },
    species: "Long Tail Pokémon",
    description:
      "Ele usa suas caudas para tudo. Se ele envolver ambas as caudas em você e lhe der um aperto, isso é prova de que ele realmente gosta de você.",
    evolution: {
      prev: ["190", "after Double Hit learned"],
    },
    profile: {
      height: "1.2 m",
      weight: "20.3 kg",
      egg: ["Field"],
      ability: [
        ["Technician", "false"],
        ["Pickup", "false"],
        ["Skill Link", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/424.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/424.png",
      hires: "./Imagens/Pokedex/hires/424.png",
    },
  },
  {
    id: 425,
    name: {
      english: "Drifloon",
      japanese: "フワンテ",
      chinese: "飘飘球",
      french: "Baudrive",
    },
    type: ["Fantasma", "Voador"],
    base: {
      HP: 90,
      Attack: 50,
      Defense: 34,
      "Sp. Attack": 60,
      "Sp. Defense": 44,
      Speed: 70,
    },
    species: "Balloon Pokémon",
    description:
      "Almas errantes reunidas para formar este Pokémon. Ao tentar fazer amizade com crianças, Drifloon as agarra pela mão.",
    evolution: {
      next: [["426", "Level 28"]],
    },
    profile: {
      height: "0.4 m",
      weight: "1.2 kg",
      egg: ["Amorphous"],
      ability: [
        ["Aftermath", "false"],
        ["Unburden", "false"],
        ["Flare Boost", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/425.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/425.png",
      hires: "./Imagens/Pokedex/hires/425.png",
    },
  },
  {
    id: 426,
    name: {
      english: "Drifblim",
      japanese: "フワライド",
      chinese: "随风球",
      french: "Grodrive",
    },
    type: ["Fantasma", "Voador"],
    base: {
      HP: 150,
      Attack: 80,
      Defense: 44,
      "Sp. Attack": 90,
      "Sp. Defense": 54,
      Speed: 80,
    },
    species: "Blimp Pokémon",
    description:
      "A matéria-prima do gás dentro de seu corpo são almas. Quando seu corpo começa a desinflar, diz-se que ele carrega pessoas e Pokémon.",
    evolution: {
      prev: ["425", "Level 28"],
    },
    profile: {
      height: "1.2 m",
      weight: "15 kg",
      egg: ["Amorphous"],
      ability: [
        ["Aftermath", "false"],
        ["Unburden", "false"],
        ["Flare Boost", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/426.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/426.png",
      hires: "./Imagens/Pokedex/hires/426.png",
    },
  },
  {
    id: 427,
    name: {
      english: "Buneary",
      japanese: "ミミロル",
      chinese: "卷卷耳",
      french: "Laporeille",
    },
    type: ["Normal"],
    base: {
      HP: 55,
      Attack: 66,
      Defense: 44,
      "Sp. Attack": 44,
      "Sp. Defense": 56,
      Speed: 85,
    },
    species: "Rabbit Pokémon",
    description:
      "A razão pela qual ele mantém uma orelha enrolada é para que possa lançar um rápido contra-ataque se for atacado por um inimigo.",
    evolution: {
      next: [["428", "high Friendship"]],
    },
    profile: {
      height: "0.4 m",
      weight: "5.5 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Run Away", "false"],
        ["Klutz", "false"],
        ["Limber", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/427.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/427.png",
      hires: "./Imagens/Pokedex/hires/427.png",
    },
  },
  {
    id: 428,
    name: {
      english: "Lopunny",
      japanese: "ミミロップ",
      chinese: "长耳兔",
      french: "Lockpin",
    },
    type: ["Normal"],
    base: {
      HP: 65,
      Attack: 76,
      Defense: 84,
      "Sp. Attack": 54,
      "Sp. Defense": 96,
      Speed: 105,
    },
    species: "Rabbit Pokémon",
    description:
      "Ele é notavelmente cauteloso e tem aversão a lutar, mas ao mesmo tempo, pode desferir chutes poderosos com suas pernas lithe.",
    evolution: {
      prev: ["427", "high Friendship"],
    },
    profile: {
      height: "1.2 m",
      weight: "33.3 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Cute Charm", "false"],
        ["Klutz", "false"],
        ["Limber", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/428.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/428.png",
      hires: "./Imagens/Pokedex/hires/428.png",
    },
  },
  {
    id: 429,
    name: {
      english: "Mismagius",
      japanese: "ムウマージ",
      chinese: "梦妖魔",
      french: "Magirêve",
    },
    type: ["Fantasma"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 60,
      "Sp. Attack": 105,
      "Sp. Defense": 105,
      Speed: 105,
    },
    species: "Magical Pokémon",
    description:
      "Seus maldições murmuradas podem causar terríveis dores de cabeça ou visões assustadoras que atormentam os outros.",
    evolution: {
      prev: ["200", "use Dusk Stone"],
    },
    profile: {
      height: "0.9 m",
      weight: "4.4 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/429.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/429.png",
      hires: "./Imagens/Pokedex/hires/429.png",
    },
  },
  {
    id: 430,
    name: {
      english: "Honchkrow",
      japanese: "ドンカラス",
      chinese: "乌鸦头头",
      french: "Corboss",
    },
    type: ["Sombrio", "Voador"],
    base: {
      HP: 100,
      Attack: 125,
      Defense: 52,
      "Sp. Attack": 105,
      "Sp. Defense": 52,
      Speed: 71,
    },
    species: "Big Boss Pokémon",
    description:
      "Seus capangas cuidam da maior parte das lutas por ele. A única vez que suja suas próprias mãos é para dar um golpe final para acabar com um oponente.",
    evolution: {
      prev: ["198", "use Dusk Stone"],
    },
    profile: {
      height: "0.9 m",
      weight: "27.3 kg",
      egg: ["Voador"],
      ability: [
        ["Insomnia", "false"],
        ["Super Luck", "false"],
        ["Moxie", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/430.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/430.png",
      hires: "./Imagens/Pokedex/hires/430.png",
    },
  },
  {
    id: 431,
    name: {
      english: "Glameow",
      japanese: "ニャルマー",
      chinese: "魅力喵",
      french: "Chaglam",
    },
    type: ["Normal"],
    base: {
      HP: 49,
      Attack: 55,
      Defense: 42,
      "Sp. Attack": 42,
      "Sp. Defense": 37,
      Speed: 85,
    },
    species: "Catty Pokémon",
    description:
      "Quando está feliz, Glameow demonstra belos movimentos de sua cauda, como uma fita dançante.",
    evolution: {
      next: [["432", "Level 38"]],
    },
    profile: {
      height: "0.5 m",
      weight: "3.9 kg",
      egg: ["Field"],
      ability: [
        ["Limber", "false"],
        ["Own Tempo", "false"],
        ["Keen Eye", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/431.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/431.png",
      hires: "./Imagens/Pokedex/hires/431.png",
    },
  },
  {
    id: 432,
    name: {
      english: "Purugly",
      japanese: "ブニャット",
      chinese: "东施喵",
      french: "Chaffreux",
    },
    type: ["Normal"],
    base: {
      HP: 71,
      Attack: 82,
      Defense: 64,
      "Sp. Attack": 64,
      "Sp. Defense": 59,
      Speed: 112,
    },
    species: "Tiger Cat Pokémon",
    description:
      "Para parecer intimidantemente corpulento, ele aperta firmemente sua cintura com suas duas caudas.",
    evolution: {
      prev: ["431", "Level 38"],
    },
    profile: {
      height: "1 m",
      weight: "43.8 kg",
      egg: ["Field"],
      ability: [
        ["Thick Fat", "false"],
        ["Own Tempo", "false"],
        ["Defiant", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/432.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/432.png",
      hires: "./Imagens/Pokedex/hires/432.png",
    },
  },
  {
    id: 433,
    name: {
      english: "Chingling",
      japanese: "リーシャン",
      chinese: "铃铛响",
      french: "Korillon",
    },
    type: ["Psíquico"],
    base: {
      HP: 45,
      Attack: 30,
      Defense: 50,
      "Sp. Attack": 65,
      "Sp. Defense": 50,
      Speed: 45,
    },
    species: "Bell Pokémon",
    description:
      "Há uma esfera dentro de sua boca. Quando ele pula, a esfera balança para cima e para baixo e faz um som estridente.",
    evolution: {
      next: [["358", "high Friendship, Nighttime"]],
    },
    profile: {
      height: "0.2 m",
      weight: "0.6 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/433.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/433.png",
      hires: "./Imagens/Pokedex/hires/433.png",
    },
  },
  {
    id: 434,
    name: {
      english: "Stunky",
      japanese: "スカンプー",
      chinese: "臭鼬噗",
      french: "Moufouette",
    },
    type: ["Venenoso", "Sombrio"],
    base: {
      HP: 63,
      Attack: 63,
      Defense: 47,
      "Sp. Attack": 41,
      "Sp. Defense": 41,
      Speed: 74,
    },
    species: "Skunk Pokémon",
    description:
      "Ele se protege espirrando um líquido nojento de sua traseira. O mau cheiro persiste por 24 horas.",
    evolution: {
      next: [["435", "Level 34"]],
    },
    profile: {
      height: "0.4 m",
      weight: "19.2 kg",
      egg: ["Field"],
      ability: [
        ["Stench", "false"],
        ["Aftermath", "false"],
        ["Keen Eye", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/434.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/434.png",
      hires: "./Imagens/Pokedex/hires/434.png",
    },
  },
  {
    id: 435,
    name: {
      english: "Skuntank",
      japanese: "スカタンク",
      chinese: "坦克臭鼬",
      french: "Moufflair",
    },
    type: ["Venenoso", "Sombrio"],
    base: {
      HP: 103,
      Attack: 93,
      Defense: 67,
      "Sp. Attack": 71,
      "Sp. Defense": 61,
      Speed: 84,
    },
    species: "Skunk Pokémon",
    description:
      "Ele espirra um líquido fedorento de sua cauda. O fluido cheira pior quanto mais tempo é deixado a fermentar.",
    evolution: {
      prev: ["434", "Level 34"],
    },
    profile: {
      height: "1 m",
      weight: "38 kg",
      egg: ["Field"],
      ability: [
        ["Stench", "false"],
        ["Aftermath", "false"],
        ["Keen Eye", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/435.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/435.png",
      hires: "./Imagens/Pokedex/hires/435.png",
    },
  },
  {
    id: 436,
    name: {
      english: "Bronzor",
      japanese: "ドーミラー",
      chinese: "铜镜怪",
      french: "Archéomire",
    },
    type: ["Metal", "Psíquico"],
    base: {
      HP: 57,
      Attack: 24,
      Defense: 86,
      "Sp. Attack": 24,
      "Sp. Defense": 86,
      Speed: 23,
    },
    species: "Bronze Pokémon",
    description:
      "Implementos moldados como ele foram descobertos em tumbas antigas. Não se sabe se eles estão relacionados.",
    evolution: {
      next: [["437", "Level 33"]],
    },
    profile: {
      height: "0.5 m",
      weight: "60.5 kg",
      egg: ["Mineral"],
      ability: [
        ["Levitate", "false"],
        ["Heatproof", "false"],
        ["Heavy Metal", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/436.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/436.png",
      hires: "./Imagens/Pokedex/hires/436.png",
    },
  },
  {
    id: 437,
    name: {
      english: "Bronzong",
      japanese: "ドータクン",
      chinese: "青铜钟",
      french: "Archéodong",
    },
    type: ["Metal", "Psíquico"],
    base: {
      HP: 67,
      Attack: 89,
      Defense: 116,
      "Sp. Attack": 79,
      "Sp. Defense": 116,
      Speed: 33,
    },
    species: "Bronze Bell Pokémon",
    description:
      "Os antigos acreditavam que pedir chuva a Bronzong era a maneira de fazer as plantações crescerem.",
    evolution: {
      prev: ["436", "Level 33"],
    },
    profile: {
      height: "1.3 m",
      weight: "187 kg",
      egg: ["Mineral"],
      ability: [
        ["Levitate", "false"],
        ["Heatproof", "false"],
        ["Heavy Metal", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/437.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/437.png",
      hires: "./Imagens/Pokedex/hires/437.png",
    },
  },
  {
    id: 438,
    name: {
      english: "Bonsly",
      japanese: "ウソハチ",
      chinese: "盆才怪",
      french: "Manzaï",
    },
    type: ["Rocha"],
    base: {
      HP: 50,
      Attack: 80,
      Defense: 95,
      "Sp. Attack": 10,
      "Sp. Defense": 45,
      Speed: 10,
    },
    species: "Bonsai Pokémon",
    description:
      "Se seu corpo ficar muito úmido, ele morrerá. Então, em um processo semelhante à transpiração, seus olhos expelem umidade.",
    evolution: {
      next: [["185", "after Mimic learned"]],
    },
    profile: {
      height: "0.5 m",
      weight: "15 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Sturdy", "false"],
        ["Rocha Head", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/438.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/438.png",
      hires: "./Imagens/Pokedex/hires/438.png",
    },
  },
  {
    id: 439,
    name: {
      english: "Mime Jr.",
      japanese: "マネネ",
      chinese: "魔尼尼",
      french: "Mime Jr",
    },
    type: ["Psíquico", "Fada"],
    base: {
      HP: 20,
      Attack: 25,
      Defense: 45,
      "Sp. Attack": 70,
      "Sp. Defense": 90,
      Speed: 60,
    },
    species: "Mime Pokémon",
    description:
      "Quando surpreende um oponente, Mime Jr. se sente tão feliz que acaba esquecendo que estava imitando algo.",
    evolution: {
      next: [["122", "after Mimic learned"]],
    },
    profile: {
      height: "0.6 m",
      weight: "13 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Soundproof", "false"],
        ["Filter", "false"],
        ["Technician", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/439.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/439.png",
      hires: "./Imagens/Pokedex/hires/439.png",
    },
  },
  {
    id: 440,
    name: {
      english: "Happiny",
      japanese: "ピンプク",
      chinese: "小福蛋",
      french: "Ptiravi",
    },
    type: ["Normal"],
    base: {
      HP: 100,
      Attack: 5,
      Defense: 5,
      "Sp. Attack": 15,
      "Sp. Defense": 65,
      Speed: 30,
    },
    species: "Playhouse Pokémon",
    description:
      "Quando vê algo redondo e branco, Happiny coloca na bolsa em seu estômago. Às vezes, fica sobrecarregado e não consegue se mover.",
    evolution: {
      next: [["113", "hold Oval Stone, Daytime"]],
    },
    profile: {
      height: "0.6 m",
      weight: "24.4 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Natural Cure", "false"],
        ["Serene Grace", "false"],
        ["Friend Guard", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/440.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/440.png",
      hires: "./Imagens/Pokedex/hires/440.png",
    },
  },
  {
    id: 441,
    name: {
      english: "Chatot",
      japanese: "ペラップ",
      chinese: "聒噪鸟",
      french: "Pijako",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 76,
      Attack: 65,
      Defense: 45,
      "Sp. Attack": 92,
      "Sp. Defense": 42,
      Speed: 91,
    },
    species: "Music Note Pokémon",
    description:
      "Ele pode aprender e falar palavras humanas. Se se reunirem, todos aprenderão o mesmo ditado.",
    evolution: {},
    profile: {
      height: "0.5 m",
      weight: "1.9 kg",
      egg: ["Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Tangled Feet", "false"],
        ["Big Pecks", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/441.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/441.png",
      hires: "./Imagens/Pokedex/hires/441.png",
    },
  },
  {
    id: 442,
    name: {
      english: "Spiritomb",
      japanese: "ミカルゲ",
      chinese: "花岩怪",
      french: "Spiritomb",
    },
    type: ["Fantasma", "Sombrio"],
    base: {
      HP: 50,
      Attack: 92,
      Defense: 108,
      "Sp. Attack": 92,
      "Sp. Defense": 108,
      Speed: 35,
    },
    species: "Forbidden Pokémon",
    description:
      "Ele foi amarrado a uma fenda em uma pedra angular estranha como punição por malfeitos há 500 anos.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "108 kg",
      egg: ["Amorphous"],
      ability: [
        ["Pressure", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/442.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/442.png",
      hires: "./Imagens/Pokedex/hires/442.png",
    },
  },
  {
    id: 443,
    name: {
      english: "Gible",
      japanese: "フカマル",
      chinese: "圆陆鲨",
      french: "Griknot",
    },
    type: ["Dragão", "Terra"],
    base: {
      HP: 58,
      Attack: 70,
      Defense: 45,
      "Sp. Attack": 40,
      "Sp. Defense": 45,
      Speed: 42,
    },
    species: "Land Shark Pokémon",
    description:
      "Sua casa original é uma área muito mais quente que Alola. Se você está planejando viver com um, sua conta de aquecimento aumentará.",
    evolution: {
      next: [["444", "Level 24"]],
    },
    profile: {
      height: "0.7 m",
      weight: "20.5 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Sand Veil", "false"],
        ["Rough Skin", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/443.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/443.png",
      hires: "./Imagens/Pokedex/hires/443.png",
    },
  },
  {
    id: 444,
    name: {
      english: "Gabite",
      japanese: "ガバイト",
      chinese: "尖牙陆鲨",
      french: "Carmache",
    },
    type: ["Dragão", "Terra"],
    base: {
      HP: 68,
      Attack: 90,
      Defense: 65,
      "Sp. Attack": 50,
      "Sp. Defense": 55,
      Speed: 82,
    },
    species: "Cave Pokémon",
    description:
      "Ele troca de pele e cresce gradualmente. Suas escamas podem ser moídas em pó e usadas como matéria-prima para medicina tradicional.",
    evolution: {
      prev: ["443", "Level 24"],
      next: [["445", "Level 48"]],
    },
    profile: {
      height: "1.4 m",
      weight: "56 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Sand Veil", "false"],
        ["Rough Skin", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/444.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/444.png",
      hires: "./Imagens/Pokedex/hires/444.png",
    },
  },
  {
    id: 445,
    name: {
      english: "Garchomp",
      japanese: "ガブリアス",
      chinese: "烈咬陆鲨",
      french: "Carchacrok",
    },
    type: ["Dragão", "Terra"],
    base: {
      HP: 108,
      Attack: 130,
      Defense: 95,
      "Sp. Attack": 80,
      "Sp. Defense": 85,
      Speed: 102,
    },
    species: "Mach Pokémon",
    description:
      "Suas escamas finas não apenas reduzem a resistência do vento, mas suas bordas afiadas também causam ferimentos em qualquer oponente que o ataque.",
    evolution: {
      prev: ["444", "Level 48"],
    },
    profile: {
      height: "1.9 m",
      weight: "95 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Sand Veil", "false"],
        ["Rough Skin", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/445.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/445.png",
      hires: "./Imagens/Pokedex/hires/445.png",
    },
  },
  {
    id: 446,
    name: {
      english: "Munchlax",
      japanese: "ゴンベ",
      chinese: "小卡比兽",
      french: "Goinfrex",
    },
    type: ["Normal"],
    base: {
      HP: 135,
      Attack: 85,
      Defense: 40,
      "Sp. Attack": 40,
      "Sp. Defense": 85,
      Speed: 5,
    },
    species: "Big Eater Pokémon",
    description:
      "Qualquer coisa que pareça comestível, Munchlax irá engolir inteiro. Seu estômago é resistente o suficiente para aguentar, mesmo que a comida esteja podre.",
    evolution: {
      next: [["143", "high Friendship"]],
    },
    profile: {
      height: "0.6 m",
      weight: "105 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pickup", "false"],
        ["Thick Fat", "false"],
        ["Gluttony", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/446.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/446.png",
      hires: "./Imagens/Pokedex/hires/446.png",
    },
  },
  {
    id: 447,
    name: {
      english: "Riolu",
      japanese: "リオル",
      chinese: "利欧路",
      french: "Riolu",
    },
    type: ["Lutador"],
    base: {
      HP: 40,
      Attack: 70,
      Defense: 40,
      "Sp. Attack": 35,
      "Sp. Defense": 40,
      Speed: 60,
    },
    species: "Emanation Pokémon",
    description:
      "Ele usa ondas chamadas auras para se comunicar com outros de sua espécie. Ele não faz nenhum barulho durante esse tempo, então seus inimigos não podem detectá-lo.",
    evolution: {
      next: [["448", "high Friendship, Daytime"]],
    },
    profile: {
      height: "0.7 m",
      weight: "20.2 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Steadfast", "false"],
        ["Inner Focus", "false"],
        ["Prankster", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/447.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/447.png",
      hires: "./Imagens/Pokedex/hires/447.png",
    },
  },
  {
    id: 448,
    name: {
      english: "Lucario",
      japanese: "ルカリオ",
      chinese: "路卡利欧",
      french: "Lucario",
    },
    type: ["Lutador", "Metal"],
    base: {
      HP: 70,
      Attack: 110,
      Defense: 70,
      "Sp. Attack": 115,
      "Sp. Defense": 70,
      Speed: 90,
    },
    species: "Aura Pokémon",
    description:
      "Lucario lê os sentimentos de seu oponente com suas ondas de aura. Ele descobre coisas que preferiria não saber, por isso fica estressado facilmente.",
    evolution: {
      prev: ["447", "high Friendship, Daytime"],
    },
    profile: {
      height: "1.2 m",
      weight: "54 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Steadfast", "false"],
        ["Inner Focus", "false"],
        ["Justified", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/448.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/448.png",
      hires: "./Imagens/Pokedex/hires/448.png",
    },
  },
  {
    id: 449,
    name: {
      english: "Hippopotas",
      japanese: "ヒポポタス",
      chinese: "沙河马",
      french: "Hippopotas",
    },
    type: ["Terra"],
    base: {
      HP: 68,
      Attack: 72,
      Defense: 78,
      "Sp. Attack": 38,
      "Sp. Defense": 42,
      Speed: 32,
    },
    species: "Hippo Pokémon",
    description:
      "Ele se envolve em areia para se proteger de germes. Ele não gosta de ficar molhado.",
    evolution: {
      next: [["450", "Level 34"]],
    },
    profile: {
      height: "0.8 m",
      weight: "49.5 kg",
      egg: ["Field"],
      ability: [
        ["Sand Stream", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/449.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/449.png",
      hires: "./Imagens/Pokedex/hires/449.png",
    },
  },
  {
    id: 450,
    name: {
      english: "Hippowdon",
      japanese: "カバルドン",
      chinese: "河马兽",
      french: "Hippodocus",
    },
    type: ["Terra"],
    base: {
      HP: 108,
      Attack: 112,
      Defense: 118,
      "Sp. Attack": 68,
      "Sp. Defense": 72,
      Speed: 47,
    },
    species: "Heavyweight Pokémon",
    description:
      "Ele lança areia armazenada internamente em seus portos para criar um redemoinho imponente para ataque.",
    evolution: {
      prev: ["449", "Level 34"],
    },
    profile: {
      height: "2 m",
      weight: "300 kg",
      egg: ["Field"],
      ability: [
        ["Sand Stream", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/450.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/450.png",
      hires: "./Imagens/Pokedex/hires/450.png",
    },
  },
  {
    id: 451,
    name: {
      english: "Skorupi",
      japanese: "スコルピ",
      chinese: "钳尾蝎",
      french: "Rapion",
    },
    type: ["Venenoso", "Inseto"],
    base: {
      HP: 40,
      Attack: 50,
      Defense: 90,
      "Sp. Attack": 30,
      "Sp. Defense": 55,
      Speed: 65,
    },
    species: "Scorpion Pokémon",
    description:
      "Ele se esconde sob a areia para esperar por presas. Suas garras da cauda podem injetar sua presa com um veneno selvagem.",
    evolution: {
      next: [["452", "Level 40"]],
    },
    profile: {
      height: "0.8 m",
      weight: "12 kg",
      egg: ["Inseto", "Água 3"],
      ability: [
        ["Battle Armor", "false"],
        ["Sniper", "false"],
        ["Keen Eye", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/451.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/451.png",
      hires: "./Imagens/Pokedex/hires/451.png",
    },
  },
  {
    id: 452,
    name: {
      english: "Drapion",
      japanese: "ドラピオン",
      chinese: "龙王蝎",
      french: "Drascore",
    },
    type: ["Venenoso", "Sombrio"],
    base: {
      HP: 70,
      Attack: 90,
      Defense: 110,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      Speed: 95,
    },
    species: "Ogre Scorpion Pokémon",
    description:
      "Suas garras de garras têm poder suficiente para transformar um carro em sucata. As pontas de suas garras liberam veneno.",
    evolution: {
      prev: ["451", "Level 40"],
    },
    profile: {
      height: "1.3 m",
      weight: "61.5 kg",
      egg: ["Inseto", "Água 3"],
      ability: [
        ["Battle Armor", "false"],
        ["Sniper", "false"],
        ["Keen Eye", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/452.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/452.png",
      hires: "./Imagens/Pokedex/hires/452.png",
    },
  },
  {
    id: 453,
    name: {
      english: "Croagunk",
      japanese: "グレッグル",
      chinese: "不良蛙",
      french: "Cradopaud",
    },
    type: ["Venenoso", "Lutador"],
    base: {
      HP: 48,
      Attack: 61,
      Defense: 40,
      "Sp. Attack": 61,
      "Sp. Defense": 40,
      Speed: 50,
    },
    species: "Toxic Mouth Pokémon",
    description:
      "Inflando seus sacos de veneno, ele enche a área com um som estranho e acerta oponentes assustados com uma picada venenosa.",
    evolution: {
      next: [["454", "Level 37"]],
    },
    profile: {
      height: "0.7 m",
      weight: "23 kg",
      egg: ["Human-Like"],
      ability: [
        ["Anticipation", "false"],
        ["Dry Skin", "false"],
        ["Venenoso Touch", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/453.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/453.png",
      hires: "./Imagens/Pokedex/hires/453.png",
    },
  },
  {
    id: 454,
    name: {
      english: "Toxicroak",
      japanese: "ドクロッグ",
      chinese: "毒骷蛙",
      french: "Coatox",
    },
    type: ["Venenoso", "Lutador"],
    base: {
      HP: 83,
      Attack: 106,
      Defense: 65,
      "Sp. Attack": 86,
      "Sp. Defense": 65,
      Speed: 85,
    },
    species: "Toxic Mouth Pokémon",
    description:
      "Suas garras de nódulos secretam uma toxina tão vil que até mesmo um arranhão pode ser fatal.",
    evolution: {
      prev: ["453", "Level 37"],
    },
    profile: {
      height: "1.3 m",
      weight: "44.4 kg",
      egg: ["Human-Like"],
      ability: [
        ["Anticipation", "false"],
        ["Dry Skin", "false"],
        ["Venenoso Touch", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/454.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/454.png",
      hires: "./Imagens/Pokedex/hires/454.png",
    },
  },
  {
    id: 455,
    name: {
      english: "Carnivine",
      japanese: "マスキッパ",
      chinese: "尖牙笼",
      french: "Vortente",
    },
    type: ["Grama"],
    base: {
      HP: 74,
      Attack: 100,
      Defense: 72,
      "Sp. Attack": 90,
      "Sp. Defense": 72,
      Speed: 46,
    },
    species: "Inseto Catcher Pokémon",
    description:
      "Ele se liga a árvores em pântanos. Ele atrai presas com sua baba de cheiro doce e as engole.",
    evolution: {},
    profile: {
      height: "1.4 m",
      weight: "27 kg",
      egg: ["Grama"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/455.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/455.png",
      hires: "./Imagens/Pokedex/hires/455.png",
    },
  },
  {
    id: 456,
    name: {
      english: "Finneon",
      japanese: "ケイコウオ",
      chinese: "荧光鱼",
      french: "Écayon",
    },
    type: ["Água"],
    base: {
      HP: 49,
      Attack: 49,
      Defense: 56,
      "Sp. Attack": 49,
      "Sp. Defense": 61,
      Speed: 66,
    },
    species: "Wing Fish Pokémon",
    description:
      "Ele atrai presas com suas nadadeiras caudais brilhantes. Ele fica perto da superfície durante o dia e se move para as profundezas quando cai a noite.",
    evolution: {
      next: [["457", "Level 31"]],
    },
    profile: {
      height: "0.4 m",
      weight: "7 kg",
      egg: ["Água 2"],
      ability: [
        ["Swift Swim", "false"],
        ["Storm Drain", "false"],
        ["Água Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/456.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/456.png",
      hires: "./Imagens/Pokedex/hires/456.png",
    },
  },
  {
    id: 457,
    name: {
      english: "Lumineon",
      japanese: "ネオラント",
      chinese: "霓虹鱼",
      french: "Luminéon",
    },
    type: ["Água"],
    base: {
      HP: 69,
      Attack: 69,
      Defense: 76,
      "Sp. Attack": 69,
      "Sp. Defense": 86,
      Speed: 91,
    },
    species: "Neon Pokémon",
    description:
      "As fantásticas luzes de suas nadadeiras brilham como estrelas no céu noturno.",
    evolution: {
      prev: ["456", "Level 31"],
    },
    profile: {
      height: "1.2 m",
      weight: "24 kg",
      egg: ["Água 2"],
      ability: [
        ["Swift Swim", "false"],
        ["Storm Drain", "false"],
        ["Água Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/457.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/457.png",
      hires: "./Imagens/Pokedex/hires/457.png",
    },
  },
  {
    id: 458,
    name: {
      english: "Mantyke",
      japanese: "タマンタ",
      chinese: "小球飞鱼",
      french: "Babimanta",
    },
    type: ["Água", "Voador"],
    base: {
      HP: 45,
      Attack: 20,
      Defense: 50,
      "Sp. Attack": 60,
      "Sp. Defense": 120,
      Speed: 50,
    },
    species: "Kite Pokémon",
    description:
      "Mantyke são amigáveis com as pessoas e se aproximam dos barcos. Os padrões em suas costas diferem dependendo de seu habitat.",
    evolution: {
      next: [["226", "with Remoraid in party"]],
    },
    profile: {
      height: "1 m",
      weight: "65 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Swift Swim", "false"],
        ["Água Absorb", "false"],
        ["Água Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/458.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/458.png",
      hires: "./Imagens/Pokedex/hires/458.png",
    },
  },
  {
    id: 459,
    name: {
      english: "Snover",
      japanese: "ユキカブリ",
      chinese: "雪笠怪",
      french: "Blizzi",
    },
    type: ["Grama", "Gelo"],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 50,
      "Sp. Attack": 62,
      "Sp. Defense": 60,
      Speed: 40,
    },
    species: "Frost Tree Pokémon",
    description:
      "Na primavera, ele cultiva bagas com a textura de guloseimas congeladas ao redor de sua barriga.",
    evolution: {
      next: [["460", "Level 40"]],
    },
    profile: {
      height: "1 m",
      weight: "50.5 kg",
      egg: ["Monster", "Grama"],
      ability: [
        ["Snow Warning", "false"],
        ["Soundproof", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/459.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/459.png",
      hires: "./Imagens/Pokedex/hires/459.png",
    },
  },
  {
    id: 460,
    name: {
      english: "Abomasnow",
      japanese: "ユキノオー",
      chinese: "暴雪王",
      french: "Blizzaroi",
    },
    type: ["Grama", "Gelo"],
    base: {
      HP: 90,
      Attack: 92,
      Defense: 75,
      "Sp. Attack": 92,
      "Sp. Defense": 85,
      Speed: 60,
    },
    species: "Frost Tree Pokémon",
    description:
      "Ele vive uma vida tranquila em montanhas que são perpetuamente cobertas de neve. Ele se esconde, provocando nevascas.",
    evolution: {
      prev: ["459", "Level 40"],
    },
    profile: {
      height: "2.2 m",
      weight: "135.5 kg",
      egg: ["Monster", "Grama"],
      ability: [
        ["Snow Warning", "false"],
        ["Soundproof", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/460.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/460.png",
      hires: "./Imagens/Pokedex/hires/460.png",
    },
  },
  {
    id: 461,
    name: {
      english: "Weavile",
      japanese: "マニューラ",
      chinese: "玛狃拉",
      french: "Dimoret",
    },
    type: ["Sombrio", "Gelo"],
    base: {
      HP: 70,
      Attack: 120,
      Defense: 65,
      "Sp. Attack": 45,
      "Sp. Defense": 85,
      Speed: 125,
    },
    species: "Sharp Claw Pokémon",
    description:
      "Graças à sua inteligência aumentada, brigar por comida é uma coisa do passado. Um arranhão de suas garras lhe dará um caso de congelamento!",
    evolution: {
      prev: ["215", "hold Razor Claw, Nighttime"],
    },
    profile: {
      height: "1.1 m",
      weight: "34 kg",
      egg: ["Field"],
      ability: [
        ["Pressure", "false"],
        ["Pickpocket", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/461.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/461.png",
      hires: "./Imagens/Pokedex/hires/461.png",
    },
  },
  {
    id: 462,
    name: {
      english: "Magnezone",
      japanese: "ジバコイル",
      chinese: "自爆磁怪",
      french: "Magnézone",
    },
    type: ["Elétrico", "Metal"],
    base: {
      HP: 70,
      Attack: 70,
      Defense: 115,
      "Sp. Attack": 130,
      "Sp. Defense": 90,
      Speed: 60,
    },
    species: "Magnet Area Pokémon",
    description:
      "Há ainda pessoas que acreditam que este Pokémon veio do espaço sideral. Ele emana um poderoso campo magnético.",
    evolution: {
      prev: ["82", "level up in a Magnetic Field area"],
    },
    profile: {
      height: "1.2 m",
      weight: "180 kg",
      egg: ["Mineral"],
      ability: [
        ["Magnet Pull", "false"],
        ["Sturdy", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/462.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/462.png",
      hires: "./Imagens/Pokedex/hires/462.png",
    },
  },
  {
    id: 463,
    name: {
      english: "Lickilicky",
      japanese: "ベロベルト",
      chinese: "大舌舔",
      french: "Coudlangue",
    },
    type: ["Normal"],
    base: {
      HP: 110,
      Attack: 85,
      Defense: 95,
      "Sp. Attack": 80,
      "Sp. Defense": 95,
      Speed: 50,
    },
    species: "Licking Pokémon",
    description:
      "Ele usa sua língua muito mais habilmente do que suas mãos ou seus pés. Ele pode pegar habilmente um único feijão pequeno com sua língua.",
    evolution: {
      prev: ["108", "after Rollout learned"],
    },
    profile: {
      height: "1.7 m",
      weight: "140 kg",
      egg: ["Monster"],
      ability: [
        ["Own Tempo", "false"],
        ["Oblivious", "false"],
        ["Cloud Nine", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/463.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/463.png",
      hires: "./Imagens/Pokedex/hires/463.png",
    },
  },
  {
    id: 464,
    name: {
      english: "Rhyperior",
      japanese: "ドサイドン",
      chinese: "超甲狂犀",
      french: "Rhinastoc",
    },
    type: ["Terra", "Rocha"],
    base: {
      HP: 115,
      Attack: 140,
      Defense: 130,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 40,
    },
    species: "Drill Pokémon",
    description:
      "Ele coloca pedras em buracos em suas palmas e usa seus músculos para atirar nelas. Geodude são atirados em raras ocasiões.",
    evolution: {
      prev: ["112", "trade holding Protector"],
    },
    profile: {
      height: "2.4 m",
      weight: "282.8 kg",
      egg: ["Monster", "Field"],
      ability: [
        ["Lightning Rod", "false"],
        ["Solid Rocha", "false"],
        ["Reckless", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/464.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/464.png",
      hires: "./Imagens/Pokedex/hires/464.png",
    },
  },
  {
    id: 465,
    name: {
      english: "Tangrowth",
      japanese: "モジャンボ",
      chinese: "巨蔓藤",
      french: "Bouldeneu",
    },
    type: ["Grama"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 125,
      "Sp. Attack": 110,
      "Sp. Defense": 50,
      Speed: 50,
    },
    species: "Vine Pokémon",
    description:
      "Suas videiras crescem tanto que, na estação quente, você nem consegue ver seus olhos.",
    evolution: {
      prev: ["114", "after Ancient Power learned"],
    },
    profile: {
      height: "2 m",
      weight: "128.6 kg",
      egg: ["Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Leaf Guard", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/465.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/465.png",
      hires: "./Imagens/Pokedex/hires/465.png",
    },
  },
  {
    id: 466,
    name: {
      english: "Electivire",
      japanese: "エレキブル",
      chinese: "电击魔兽",
      french: "Élekable",
    },
    type: ["Elétrico"],
    base: {
      HP: 75,
      Attack: 123,
      Defense: 67,
      "Sp. Attack": 95,
      "Sp. Defense": 85,
      Speed: 95,
    },
    species: "Thunderbolt Pokémon",
    description:
      "Um único Electivire pode fornecer eletricidade suficiente para todos os edifícios de uma grande cidade por um ano.",
    evolution: {
      prev: ["125", "trade holding Electirizer"],
    },
    profile: {
      height: "1.8 m",
      weight: "138.6 kg",
      egg: ["Human-Like"],
      ability: [
        ["Motor Drive", "false"],
        ["Vital Spirit", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/466.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/466.png",
      hires: "./Imagens/Pokedex/hires/466.png",
    },
  },
  {
    id: 467,
    name: {
      english: "Magmortar",
      japanese: "ブーバーン",
      chinese: "鸭嘴炎兽",
      french: "Maganon",
    },
    type: ["Fogo"],
    base: {
      HP: 75,
      Attack: 95,
      Defense: 67,
      "Sp. Attack": 125,
      "Sp. Defense": 95,
      Speed: 83,
    },
    species: "Blast Pokémon",
    description:
      "Magmortar derruba seus inimigos atirando bolas de fogo, que os queimam até ficar preto. Ele evita esse método quando caça presas.",
    evolution: {
      prev: ["126", "trade holding Magmarizer"],
    },
    profile: {
      height: "1.6 m",
      weight: "68 kg",
      egg: ["Human-Like"],
      ability: [
        ["Flame Body", "false"],
        ["Vital Spirit", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/467.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/467.png",
      hires: "./Imagens/Pokedex/hires/467.png",
    },
  },
  {
    id: 468,
    name: {
      english: "Togekiss",
      japanese: "トゲキッス",
      chinese: "波克基斯",
      french: "Togekiss",
    },
    type: ["Fada", "Voador"],
    base: {
      HP: 85,
      Attack: 50,
      Defense: 95,
      "Sp. Attack": 120,
      "Sp. Defense": 115,
      Speed: 80,
    },
    species: "Jubilee Pokémon",
    description:
      "Ele compartilha muitas bênçãos com pessoas que respeitam os direitos uns dos outros e evitam conflitos desnecessários.",
    evolution: {
      prev: ["176", "use Shiny Stone"],
    },
    profile: {
      height: "1.5 m",
      weight: "38 kg",
      egg: ["Voador", "Fada"],
      ability: [
        ["Hustle", "false"],
        ["Serene Grace", "false"],
        ["Super Luck", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/468.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/468.png",
      hires: "./Imagens/Pokedex/hires/468.png",
    },
  },
  {
    id: 469,
    name: {
      english: "Yanmega",
      japanese: "メガヤンマ",
      chinese: "远古巨蜓",
      french: "Yanmega",
    },
    type: ["Inseto", "Voador"],
    base: {
      HP: 86,
      Attack: 76,
      Defense: 86,
      "Sp. Attack": 116,
      "Sp. Defense": 56,
      Speed: 95,
    },
    species: "Ogre Darner Pokémon",
    description:
      "Este Pokémon de seis patas é facilmente capaz de transportar um adulto em vôo. As asas em sua cauda ajudam a manter o equilíbrio.",
    evolution: {
      prev: ["193", "after Ancient Power learned"],
    },
    profile: {
      height: "1.9 m",
      weight: "51.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Speed Boost", "false"],
        ["Tinted Lens", "false"],
        ["Frisk", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/469.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/469.png",
      hires: "./Imagens/Pokedex/hires/469.png",
    },
  },
  {
    id: 470,
    name: {
      english: "Leafeon",
      japanese: "リーフィア",
      chinese: "叶伊布",
      french: "Phyllali",
    },
    type: ["Grama"],
    base: {
      HP: 65,
      Attack: 110,
      Defense: 130,
      "Sp. Attack": 60,
      "Sp. Defense": 65,
      Speed: 95,
    },
    species: "Verdant Pokémon",
    description:
      "Ele obtém sua nutrição da fotossíntese. Ele vive uma vida tranquila nas profundezas das florestas onde correm rios limpos.",
    evolution: {
      prev: ["133", "level up near a Mossy Rocha"],
    },
    profile: {
      height: "1 m",
      weight: "25.5 kg",
      egg: ["Field"],
      ability: [
        ["Leaf Guard", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/470.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/470.png",
      hires: "./Imagens/Pokedex/hires/470.png",
    },
  },
  {
    id: 471,
    name: {
      english: "Glaceon",
      japanese: "グレイシア",
      chinese: "冰伊布",
      french: "Givrali",
    },
    type: ["Gelo"],
    base: {
      HP: 65,
      Attack: 60,
      Defense: 110,
      "Sp. Attack": 130,
      "Sp. Defense": 95,
      Speed: 65,
    },
    species: "Fresh Snow Pokémon",
    description:
      "Ele pode congelar instantaneamente qualquer umidade que esteja ao seu redor, criando pellets de gelo para atirar em sua presa.",
    evolution: {
      prev: ["133", "level up near an Icy Rocha"],
    },
    profile: {
      height: "0.8 m",
      weight: "25.9 kg",
      egg: ["Field"],
      ability: [
        ["Snow Cloak", "false"],
        ["Gelo Body", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/471.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/471.png",
      hires: "./Imagens/Pokedex/hires/471.png",
    },
  },
  {
    id: 472,
    name: {
      english: "Gliscor",
      japanese: "グライオン",
      chinese: "天蝎王",
      french: "Scorvol",
    },
    type: ["Terra", "Voador"],
    base: {
      HP: 75,
      Attack: 95,
      Defense: 125,
      "Sp. Attack": 45,
      "Sp. Defense": 75,
      Speed: 95,
    },
    species: "Fang Scorpion Pokémon",
    description:
      "Seu vôo é silencioso. Ele usa sua longa cauda para carregar sua presa ... Então suas presas alongadas fazem o resto.",
    evolution: {
      prev: ["207", "hold Razor Fang, Nighttime"],
    },
    profile: {
      height: "2 m",
      weight: "42.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Sand Veil", "false"],
        ["Venenoso Heal", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/472.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/472.png",
      hires: "./Imagens/Pokedex/hires/472.png",
    },
  },
  {
    id: 473,
    name: {
      english: "Mamoswine",
      japanese: "マンムー",
      chinese: "象牙猪",
      french: "Mammochon",
    },
    type: ["Gelo", "Terra"],
    base: {
      HP: 110,
      Attack: 130,
      Defense: 80,
      "Sp. Attack": 70,
      "Sp. Defense": 60,
      Speed: 80,
    },
    species: "Twin Tusk Pokémon",
    description:
      "Suas presas impressionantes são feitas de gelo. A população diminuiu quando ficou quente após a era do gelo.",
    evolution: {
      prev: ["221", "after Ancient Power learned"],
    },
    profile: {
      height: "2.5 m",
      weight: "291 kg",
      egg: ["Field"],
      ability: [
        ["Oblivious", "false"],
        ["Snow Cloak", "false"],
        ["Thick Fat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/473.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/473.png",
      hires: "./Imagens/Pokedex/hires/473.png",
    },
  },
  {
    id: 474,
    name: {
      english: "Porygon-Z",
      japanese: "ポリゴンＺ",
      chinese: "多边兽Ｚ",
      french: "Porygon-Z",
    },
    type: ["Normal"],
    base: {
      HP: 85,
      Attack: 80,
      Defense: 70,
      "Sp. Attack": 135,
      "Sp. Defense": 75,
      Speed: 90,
    },
    species: "Virtual Pokémon",
    description:
      "Uma atualização defeituosa foi adicionada à sua programação. Seu comportamento é notavelmente estranho, por isso o experimento pode ter sido um fracasso.",
    evolution: {
      prev: ["233", "trade holding Dubious Disc"],
    },
    profile: {
      height: "0.9 m",
      weight: "34 kg",
      egg: ["Mineral"],
      ability: [
        ["Adaptability", "false"],
        ["Download", "false"],
        ["Analytic", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/474.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/474.png",
      hires: "./Imagens/Pokedex/hires/474.png",
    },
  },
  {
    id: 475,
    name: {
      english: "Gallade",
      japanese: "エルレイド",
      chinese: "艾路雷朵",
      french: "Gallame",
    },
    type: ["Psíquico", "Lutador"],
    base: {
      HP: 68,
      Attack: 125,
      Defense: 65,
      "Sp. Attack": 65,
      "Sp. Defense": 115,
      Speed: 80,
    },
    species: "Blade Pokémon",
    description:
      "Um mestre da cortesia e da esgrima, ele luta usando espadas extensíveis em seus cotovelos.",
    evolution: {
      prev: ["281", "use Dawn Stone, Male"],
    },
    profile: {
      height: "1.6 m",
      weight: "52 kg",
      egg: ["Amorphous"],
      ability: [
        ["Steadfast", "false"],
        ["Justified", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/475.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/475.png",
      hires: "./Imagens/Pokedex/hires/475.png",
    },
  },
  {
    id: 476,
    name: {
      english: "Probopass",
      japanese: "ダイノーズ",
      chinese: "大朝北鼻",
      french: "Tarinorme",
    },
    type: ["Rocha", "Metal"],
    base: {
      HP: 60,
      Attack: 55,
      Defense: 145,
      "Sp. Attack": 75,
      "Sp. Defense": 150,
      Speed: 40,
    },
    species: "Compass Pokémon",
    description:
      "Ele usa três pequenas unidades para capturar presas e lutar contra inimigos. O corpo principal apenas dá ordens.",
    evolution: {
      prev: ["299", "level up in a Magnetic Field area"],
    },
    profile: {
      height: "1.4 m",
      weight: "340 kg",
      egg: ["Mineral"],
      ability: [
        ["Sturdy", "false"],
        ["Magnet Pull", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/476.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/476.png",
      hires: "./Imagens/Pokedex/hires/476.png",
    },
  },
  {
    id: 477,
    name: {
      english: "Dusknoir",
      japanese: "ヨノワール",
      chinese: "黑夜魔灵",
      french: "Noctunoir",
    },
    type: ["Fantasma"],
    base: {
      HP: 45,
      Attack: 100,
      Defense: 135,
      "Sp. Attack": 65,
      "Sp. Defense": 135,
      Speed: 45,
    },
    species: "Gripper Pokémon",
    description:
      "A antena em sua cabeça capta ondas de rádio do mundo dos espíritos que o ordenam a levar as pessoas para lá.",
    evolution: {
      prev: ["356", "trade holding Reaper Cloth"],
    },
    profile: {
      height: "2.2 m",
      weight: "106.6 kg",
      egg: ["Amorphous"],
      ability: [
        ["Pressure", "false"],
        ["Frisk", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/477.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/477.png",
      hires: "./Imagens/Pokedex/hires/477.png",
    },
  },
  {
    id: 478,
    name: {
      english: "Froslass",
      japanese: "ユキメノコ",
      chinese: "雪妖女",
      french: "Momartik",
    },
    type: ["Gelo", "Fantasma"],
    base: {
      HP: 70,
      Attack: 80,
      Defense: 70,
      "Sp. Attack": 80,
      "Sp. Defense": 70,
      Speed: 110,
    },
    species: "Snow Land Pokémon",
    description:
      "Diz-se que, nas noites de terríveis tempestades de neve, ele desce para povoados humanos. Se você ouvi-lo batendo à sua porta, não abra!",
    evolution: {
      prev: ["361", "use Dawn Stone, Female"],
    },
    profile: {
      height: "1.3 m",
      weight: "26.6 kg",
      egg: ["Fada", "Mineral"],
      ability: [
        ["Snow Cloak", "false"],
        ["Cursed Body", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/478.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/478.png",
      hires: "./Imagens/Pokedex/hires/478.png",
    },
  },
  {
    id: 479,
    name: {
      english: "Rotom",
      japanese: "ロトム",
      chinese: "洛托姆",
      french: "Motisma",
    },
    type: ["Elétrico", "Fantasma"],
    base: {
      HP: 50,
      Attack: 50,
      Defense: 77,
      "Sp. Attack": 95,
      "Sp. Defense": 77,
      Speed: 91,
    },
    species: "Plasma Pokémon",
    description:
      "Seu corpo é composto de plasma. É conhecido por infiltrar dispositivos eletrônicos e causar estragos.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "0.3 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/479.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/479.png",
      hires: "./Imagens/Pokedex/hires/479.png",
    },
  },
  {
    id: 480,
    name: {
      english: "Uxie",
      japanese: "ユクシー",
      chinese: "由克希",
      french: "Créhelf",
    },
    type: ["Psíquico"],
    base: {
      HP: 75,
      Attack: 75,
      Defense: 130,
      "Sp. Attack": 75,
      "Sp. Defense": 130,
      Speed: 95,
    },
    species: "Knowledge Pokémon",
    description:
      "Diz-se que seu surgimento deu aos humanos a inteligência para melhorar sua qualidade de vida.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "0.3 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/480.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/480.png",
      hires: "./Imagens/Pokedex/hires/480.png",
    },
  },
  {
    id: 481,
    name: {
      english: "Mesprit",
      japanese: "エムリット",
      chinese: "艾姆利多",
      french: "Créfollet",
    },
    type: ["Psíquico"],
    base: {
      HP: 80,
      Attack: 105,
      Defense: 105,
      "Sp. Attack": 105,
      "Sp. Defense": 105,
      Speed: 80,
    },
    species: "Emotion Pokémon",
    description:
      "Ele dorme no fundo de um lago. Diz-se que seu espírito deixa seu corpo para voar na superfície do lago.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "0.3 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/481.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/481.png",
      hires: "./Imagens/Pokedex/hires/481.png",
    },
  },
  {
    id: 482,
    name: {
      english: "Azelf",
      japanese: "アグノム",
      chinese: "亚克诺姆",
      french: "Créfadet",
    },
    type: ["Psíquico"],
    base: {
      HP: 75,
      Attack: 125,
      Defense: 70,
      "Sp. Attack": 125,
      "Sp. Defense": 70,
      Speed: 115,
    },
    species: "Willpower Pokémon",
    description:
      "Acredita-se que Uxie, Mesprit e Azelf vieram todos do mesmo ovo.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "0.3 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/482.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/482.png",
      hires: "./Imagens/Pokedex/hires/482.png",
    },
  },
  {
    id: 483,
    name: {
      english: "Dialga",
      japanese: "ディアルガ",
      chinese: "帝牙卢卡",
      french: "Dialga",
    },
    type: ["Metal", "Dragão"],
    base: {
      HP: 100,
      Attack: 120,
      Defense: 120,
      "Sp. Attack": 150,
      "Sp. Defense": 100,
      Speed: 90,
    },
    species: "Temporal Pokémon",
    description:
      "Ele tem o poder de controlar o tempo. Ele aparece em mitos da região de Sinnoh como uma divindade antiga.",
    evolution: {},
    profile: {
      height: "5.4 m",
      weight: "683 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Telepathy", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/483.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/483.png",
      hires: "./Imagens/Pokedex/hires/483.png",
    },
  },
  {
    id: 484,
    name: {
      english: "Palkia",
      japanese: "パルキア",
      chinese: "帕路奇亚",
      french: "Palkia",
    },
    type: ["Água", "Dragão"],
    base: {
      HP: 90,
      Attack: 120,
      Defense: 100,
      "Sp. Attack": 150,
      "Sp. Defense": 120,
      Speed: 100,
    },
    species: "Spatial Pokémon",
    description:
      "Ele tem a capacidade de distorcer o espaço. É descrito como uma divindade na mitologia da região de Sinnoh.",
    evolution: {},
    profile: {
      height: "4.2 m",
      weight: "336 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Telepathy", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/484.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/484.png",
      hires: "./Imagens/Pokedex/hires/484.png",
    },
  },
  {
    id: 485,
    name: {
      english: "Heatran",
      japanese: "ヒードラン",
      chinese: "席多蓝恩",
      french: "Heatran",
    },
    type: ["Fogo", "Metal"],
    base: {
      HP: 91,
      Attack: 90,
      Defense: 106,
      "Sp. Attack": 130,
      "Sp. Defense": 106,
      Speed: 77,
    },
    species: "Lava Dome Pokémon",
    description:
      "Sangue fervente, como magma, circula em seu corpo. Ele faz sua morada em cavernas vulcânicas.",
    evolution: {},
    profile: {
      height: "1.7 m",
      weight: "430 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Flash Fogo", "false"],
        ["Flame Body", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/485.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/485.png",
      hires: "./Imagens/Pokedex/hires/485.png",
    },
  },
  {
    id: 486,
    name: {
      english: "Regigigas",
      japanese: "レジギガス",
      chinese: "雷吉奇卡斯",
      french: "Regigigas",
    },
    type: ["Normal"],
    base: {
      HP: 110,
      Attack: 160,
      Defense: 110,
      "Sp. Attack": 80,
      "Sp. Defense": 110,
      Speed: 100,
    },
    species: "Colossal Pokémon",
    description:
      "Existe uma lenda duradoura que afirma que este Pokémon rebocava continentes com cordas.",
    evolution: {},
    profile: {
      height: "3.7 m",
      weight: "420 kg",
      egg: ["Undiscovered"],
      ability: [["Slow Start", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/486.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/486.png",
      hires: "./Imagens/Pokedex/hires/486.png",
    },
  },
  {
    id: 487,
    name: {
      english: "Giratina",
      japanese: "ギラティナ",
      chinese: "骑拉帝纳",
      french: "Giratina",
    },
    type: ["Fantasma", "Dragão"],
    base: {
      HP: 150,
      Attack: 100,
      Defense: 120,
      "Sp. Attack": 100,
      "Sp. Defense": 120,
      Speed: 90,
    },
    species: "Renegade Pokémon",
    description:
      "Ele foi banido por sua violência. Ele observou silenciosamente o velho mundo do Mundo da Distorção.",
    evolution: {},
    profile: {
      height: "4.5 m",
      weight: "750 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Pressure", "false"],
        ["Telepathy", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/487.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/487.png",
      hires: "./Imagens/Pokedex/hires/487.png",
    },
  },
  {
    id: 488,
    name: {
      english: "Cresselia",
      japanese: "クレセリア",
      chinese: "克雷色利亚",
      french: "Cresselia",
    },
    type: ["Psíquico"],
    base: {
      HP: 120,
      Attack: 70,
      Defense: 120,
      "Sp. Attack": 75,
      "Sp. Defense": 130,
      Speed: 85,
    },
    species: "Lunar Pokémon",
    description:
      "Aqueles que dormem segurando a pena de Cresselia têm a certeza de ter sonhos alegres. Diz-se que representa a lua crescente.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "85.6 kg",
      egg: ["Undiscovered"],
      ability: [["Levitate", "false"]],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/488.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/488.png",
      hires: "./Imagens/Pokedex/hires/488.png",
    },
  },
  {
    id: 489,
    name: {
      english: "Phione",
      japanese: "フィオネ",
      chinese: "霏欧纳",
      french: "Phione",
    },
    type: ["Água"],
    base: {
      HP: 80,
      Attack: 80,
      Defense: 80,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 80,
    },
    species: "Sea Drifter Pokémon",
    description:
      "Ele flutua em mares quentes. Ele sempre retorna ao lugar onde nasceu, não importa quão longe tenha flutuado.",
    evolution: {},
    profile: {
      height: "0.4 m",
      weight: "3.1 kg",
      egg: ["Água 1", "Fada"],
      ability: [["Hydration", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/489.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/489.png",
      hires: "./Imagens/Pokedex/hires/489.png",
    },
  },
  {
    id: 490,
    name: {
      english: "Manaphy",
      japanese: "マナフィ",
      chinese: "玛纳霏",
      french: "Manaphy",
    },
    type: ["Água"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 100,
    },
    species: "Seafaring Pokémon",
    description:
      "Ele começa sua vida com um poder maravilhoso que lhe permite se conectar com qualquer tipo de Pokémon.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "1.4 kg",
      egg: ["Água 1", "Fada"],
      ability: [["Hydration", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/490.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/490.png",
      hires: "./Imagens/Pokedex/hires/490.png",
    },
  },
  {
    id: 491,
    name: {
      english: "Sombriorai",
      japanese: "ダークライ",
      chinese: "达克莱伊",
      french: "Sombriorai",
    },
    type: ["Sombrio"],
    base: {
      HP: 70,
      Attack: 90,
      Defense: 90,
      "Sp. Attack": 135,
      "Sp. Defense": 90,
      Speed: 125,
    },
    species: "Pitch-Black Pokémon",
    description:
      "Ele pode adormecer as pessoas e fazê-las sonhar. Ele é ativo durante as noites da lua nova.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "50.5 kg",
      egg: ["Undiscovered"],
      ability: [["Bad Dreams", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/491.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/491.png",
      hires: "./Imagens/Pokedex/hires/491.png",
    },
  },
  {
    id: 492,
    name: {
      english: "Shaymin",
      japanese: "シェイミ",
      chinese: "谢米",
      french: "Shaymin",
    },
    type: ["Grama"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 100,
    },
    species: "Gratitude Pokémon",
    description:
      "A floração das flores Gracidea confere a ele o poder do vôo. Sentimentos de gratidão são a mensagem que ele entrega.",
    evolution: {},
    profile: {
      height: "0.2 m",
      weight: "2.1 kg",
      egg: ["Undiscovered"],
      ability: [["Natural Cure", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/492.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/492.png",
      hires: "./Imagens/Pokedex/hires/492.png",
    },
  },
  {
    id: 493,
    name: {
      english: "Arceus",
      japanese: "アルセウス",
      chinese: "阿尔宙斯",
      french: "Arceus",
    },
    type: ["Normal"],
    base: {
      HP: 120,
      Attack: 120,
      Defense: 120,
      "Sp. Attack": 120,
      "Sp. Defense": 120,
      Speed: 120,
    },
    species: "Alpha Pokémon",
    description:
      "É contado na mitologia que este Pokémon nasceu antes mesmo da existência do universo.",
    evolution: {},
    profile: {
      height: "3.2 m",
      weight: "320 kg",
      egg: ["Undiscovered"],
      ability: [["Multitype", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/493.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/493.png",
      hires: "./Imagens/Pokedex/hires/493.png",
    },
  },
  {
    id: 494,
    name: {
      english: "Victini",
      japanese: "ビクティニ",
      chinese: "比克提尼",
      french: "Victini",
    },
    type: ["Psíquico", "Fogo"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 100,
    },
    species: "Victory Pokémon",
    description:
      "Quando compartilha a energia infinita que cria, todo o corpo daquele ser ficará transbordando de poder.",
    evolution: {},
    profile: {
      height: "0.4 m",
      weight: "4 kg",
      egg: ["Undiscovered"],
      ability: [["Victory Star", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/494.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/494.png",
      hires: "./Imagens/Pokedex/hires/494.png",
    },
  },
  {
    id: 495,
    name: {
      english: "Snivy",
      japanese: "ツタージャ",
      chinese: "藤藤蛇",
      french: "Vipélierre",
    },
    type: ["Grama"],
    base: {
      HP: 45,
      Attack: 45,
      Defense: 55,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      Speed: 63,
    },
    species: "Grama Snake Pokémon",
    description:
      "Eles fazem fotossíntese banhando suas caudas na luz do sol. Quando não estão se sentindo bem, suas caudas caem.",
    evolution: {
      next: [["496", "Level 17"]],
    },
    profile: {
      height: "0.6 m",
      weight: "8.1 kg",
      egg: ["Field", "Grama"],
      ability: [
        ["Overgrow", "false"],
        ["Contrary", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/495.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/495.png",
      hires: "./Imagens/Pokedex/hires/495.png",
    },
  },
  {
    id: 496,
    name: {
      english: "Servine",
      japanese: "ジャノビー",
      chinese: "青藤蛇",
      french: "Lianaja",
    },
    type: ["Grama"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 75,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      Speed: 83,
    },
    species: "Grama Snake Pokémon",
    description:
      "Quando fica sujo, suas folhas não podem ser usadas na fotossíntese, por isso ele sempre se mantém limpo.",
    evolution: {
      prev: ["495", "Level 17"],
      next: [["497", "Level 36"]],
    },
    profile: {
      height: "0.8 m",
      weight: "16 kg",
      egg: ["Field", "Grama"],
      ability: [
        ["Overgrow", "false"],
        ["Contrary", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/496.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/496.png",
      hires: "./Imagens/Pokedex/hires/496.png",
    },
  },
  {
    id: 497,
    name: {
      english: "Serperior",
      japanese: "ジャローダ",
      chinese: "君主蛇",
      french: "Majaspic",
    },
    type: ["Grama"],
    base: {
      HP: 75,
      Attack: 75,
      Defense: 95,
      "Sp. Attack": 75,
      "Sp. Defense": 95,
      Speed: 113,
    },
    species: "Regal Pokémon",
    description:
      "Ele pode parar os movimentos de seus oponentes com apenas um olhar. Ele absorve energia solar e a aumenta internamente.",
    evolution: {
      prev: ["496", "Level 36"],
    },
    profile: {
      height: "3.3 m",
      weight: "63 kg",
      egg: ["Field", "Grama"],
      ability: [
        ["Overgrow", "false"],
        ["Contrary", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/497.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/497.png",
      hires: "./Imagens/Pokedex/hires/497.png",
    },
  },
  {
    id: 498,
    name: {
      english: "Tepig",
      japanese: "ポカブ",
      chinese: "暖暖猪",
      french: "Gruikui",
    },
    type: ["Fogo"],
    base: {
      HP: 65,
      Attack: 63,
      Defense: 45,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      Speed: 45,
    },
    species: "Fogo Pig Pokémon",
    description:
      "Ele adora comer bagas torradas, mas às vezes fica muito animado e as queima até o limite.",
    evolution: {
      next: [["499", "Level 17"]],
    },
    profile: {
      height: "0.5 m",
      weight: "9.9 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Thick Fat", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/498.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/498.png",
      hires: "./Imagens/Pokedex/hires/498.png",
    },
  },
  {
    id: 499,
    name: {
      english: "Pignite",
      japanese: "チャオブー",
      chinese: "炒炒猪",
      french: "Grotichon",
    },
    type: ["Fogo", "Lutador"],
    base: {
      HP: 90,
      Attack: 93,
      Defense: 55,
      "Sp. Attack": 70,
      "Sp. Defense": 55,
      Speed: 55,
    },
    species: "Fogo Pig Pokémon",
    description:
      "Quando seu fogo interno aumenta, seus movimentos ficam mais nítidos e rápidos. Quando está com problemas, ele emite fumaça.",
    evolution: {
      prev: ["498", "Level 17"],
      next: [["500", "Level 36"]],
    },
    profile: {
      height: "1 m",
      weight: "55.5 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Thick Fat", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/499.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/499.png",
      hires: "./Imagens/Pokedex/hires/499.png",
    },
  },
  {
    id: 500,
    name: {
      english: "Emboar",
      japanese: "エンブオー",
      chinese: "炎武王",
      french: "Roitiflam",
    },
    type: ["Fogo", "Lutador"],
    base: {
      HP: 110,
      Attack: 123,
      Defense: 65,
      "Sp. Attack": 100,
      "Sp. Defense": 65,
      Speed: 65,
    },
    species: "Mega Fogo Pig Pokémon",
    description:
      "Ele dominou movimentos de luta rápidos e poderosos. Ele cultiva uma barba de fogo.",
    evolution: {
      prev: ["499", "Level 36"],
    },
    profile: {
      height: "1.6 m",
      weight: "150 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Reckless", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/500.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/500.png",
      hires: "./Imagens/Pokedex/hires/500.png",
    },
  },
  {
    id: 501,
    name: {
      english: "Oshawott",
      japanese: "ミジュマル",
      chinese: "水水獭",
      french: "Moustillon",
    },
    type: ["Água"],
    base: {
      HP: 55,
      Attack: 55,
      Defense: 45,
      "Sp. Attack": 63,
      "Sp. Defense": 45,
      Speed: 45,
    },
    species: "Sea Otter Pokémon",
    description:
      "Ele luta usando o escalchop em seu estômago. Em resposta a um ataque, ele revida imediatamente cortando.",
    evolution: {
      next: [["502", "Level 17"]],
    },
    profile: {
      height: "0.5 m",
      weight: "5.9 kg",
      egg: ["Field"],
      ability: [
        ["Torrent", "false"],
        ["Shell Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/501.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/501.png",
      hires: "./Imagens/Pokedex/hires/501.png",
    },
  },
  {
    id: 502,
    name: {
      english: "Dewott",
      japanese: "フタチマル",
      chinese: "双刃丸",
      french: "Mateloutre",
    },
    type: ["Água"],
    base: {
      HP: 75,
      Attack: 75,
      Defense: 60,
      "Sp. Attack": 83,
      "Sp. Defense": 60,
      Speed: 60,
    },
    species: "Discipline Pokémon",
    description:
      "Como resultado de um treinamento rigoroso, cada Dewott aprende formas diferentes de usar os escalchops.",
    evolution: {
      prev: ["501", "Level 17"],
      next: [["503", "Level 36"]],
    },
    profile: {
      height: "0.8 m",
      weight: "24.5 kg",
      egg: ["Field"],
      ability: [
        ["Torrent", "false"],
        ["Shell Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/502.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/502.png",
      hires: "./Imagens/Pokedex/hires/502.png",
    },
  },
  {
    id: 503,
    name: {
      english: "Samurott",
      japanese: "ダイケンキ",
      chinese: "大剑鬼",
      french: "Clamiral",
    },
    type: ["Água"],
    base: {
      HP: 95,
      Attack: 100,
      Defense: 85,
      "Sp. Attack": 108,
      "Sp. Defense": 70,
      Speed: 70,
    },
    species: "Formidable Pokémon",
    description:
      "Um único golpe da espada incorporada em sua armadura pode derrubar um oponente. Um simples olhar de um deles silencia todos.",
    evolution: {
      prev: ["502", "Level 36"],
    },
    profile: {
      height: "1.5 m",
      weight: "94.6 kg",
      egg: ["Field"],
      ability: [
        ["Torrent", "false"],
        ["Shell Armor", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/503.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/503.png",
      hires: "./Imagens/Pokedex/hires/503.png",
    },
  },
  {
    id: 504,
    name: {
      english: "Patrat",
      japanese: "ミネズミ",
      chinese: "探探鼠",
      french: "Ratentif",
    },
    type: ["Normal"],
    base: {
      HP: 45,
      Attack: 55,
      Defense: 39,
      "Sp. Attack": 35,
      "Sp. Defense": 39,
      Speed: 42,
    },
    species: "Scout Pokémon",
    description:
      "Extremamente cauteloso, um deles estará sempre de olho, mas não notará um inimigo vindo de trás.",
    evolution: {
      next: [["505", "Level 20"]],
    },
    profile: {
      height: "0.5 m",
      weight: "11.6 kg",
      egg: ["Field"],
      ability: [
        ["Run Away", "false"],
        ["Keen Eye", "false"],
        ["Analytic", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/504.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/504.png",
      hires: "./Imagens/Pokedex/hires/504.png",
    },
  },
  {
    id: 505,
    name: {
      english: "Watchog",
      japanese: "ミルホッグ",
      chinese: "步哨鼠",
      french: "Miradar",
    },
    type: ["Normal"],
    base: {
      HP: 60,
      Attack: 85,
      Defense: 69,
      "Sp. Attack": 60,
      "Sp. Defense": 69,
      Speed: 77,
    },
    species: "Lookout Pokémon",
    description:
      "Quando veem um inimigo, suas caudas ficam altas e eles cospem as sementes de bagas armazenadas em suas bolsas de bochecha.",
    evolution: {
      prev: ["504", "Level 20"],
    },
    profile: {
      height: "1.1 m",
      weight: "27 kg",
      egg: ["Field"],
      ability: [
        ["Illuminate", "false"],
        ["Keen Eye", "false"],
        ["Analytic", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/505.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/505.png",
      hires: "./Imagens/Pokedex/hires/505.png",
    },
  },
  {
    id: 506,
    name: {
      english: "Lillipup",
      japanese: "ヨーテリー",
      chinese: "小约克",
      french: "Ponchiot",
    },
    type: ["Normal"],
    base: {
      HP: 45,
      Attack: 60,
      Defense: 45,
      "Sp. Attack": 25,
      "Sp. Defense": 45,
      Speed: 55,
    },
    species: "Puppy Pokémon",
    description:
      "Este Pokémon é popular entre iniciantes porque é inteligente, obediente aos comandos de seu treinador e fácil de criar.",
    evolution: {
      next: [["507", "Level 16"]],
    },
    profile: {
      height: "0.4 m",
      weight: "4.1 kg",
      egg: ["Field"],
      ability: [
        ["Vital Spirit", "false"],
        ["Pickup", "false"],
        ["Run Away", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/506.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/506.png",
      hires: "./Imagens/Pokedex/hires/506.png",
    },
  },
  {
    id: 507,
    name: {
      english: "Herdier",
      japanese: "ハーデリア",
      chinese: "哈约克",
      french: "Ponchien",
    },
    type: ["Normal"],
    base: {
      HP: 65,
      Attack: 80,
      Defense: 65,
      "Sp. Attack": 35,
      "Sp. Defense": 65,
      Speed: 60,
    },
    species: "Loyal Dog Pokémon",
    description:
      "Ele vive com as pessoas há tanto tempo que representações dele podem ser encontradas nas paredes de cavernas de muito, muito tempo atrás.",
    evolution: {
      prev: ["506", "Level 16"],
      next: [["508", "Level 32"]],
    },
    profile: {
      height: "0.9 m",
      weight: "14.7 kg",
      egg: ["Field"],
      ability: [
        ["Intimidate", "false"],
        ["Sand Rush", "false"],
        ["Scrappy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/507.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/507.png",
      hires: "./Imagens/Pokedex/hires/507.png",
    },
  },
  {
    id: 508,
    name: {
      english: "Stoutland",
      japanese: "ムーランド",
      chinese: "长毛狗",
      french: "Mastouffe",
    },
    type: ["Normal"],
    base: {
      HP: 85,
      Attack: 110,
      Defense: 90,
      "Sp. Attack": 45,
      "Sp. Defense": 90,
      Speed: 80,
    },
    species: "Big-Hearted Pokémon",
    description:
      "Sua pelagem é longa e espessa. Há muito tempo, em regiões frias, todas as famílias mantinham um Stoutland.",
    evolution: {
      prev: ["507", "Level 32"],
    },
    profile: {
      height: "1.2 m",
      weight: "61 kg",
      egg: ["Field"],
      ability: [
        ["Intimidate", "false"],
        ["Sand Rush", "false"],
        ["Scrappy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/508.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/508.png",
      hires: "./Imagens/Pokedex/hires/508.png",
    },
  },
  {
    id: 509,
    name: {
      english: "Purrloin",
      japanese: "チョロネコ",
      chinese: "扒手猫",
      french: "Chacripan",
    },
    type: ["Sombrio"],
    base: {
      HP: 41,
      Attack: 50,
      Defense: 37,
      "Sp. Attack": 50,
      "Sp. Defense": 37,
      Speed: 66,
    },
    species: "Devious Pokémon",
    description:
      "Eles roubam das pessoas por diversão, mas suas vítimas não podem deixar de perdoá-los. Seu ato enganadoramente fofo é perfeito.",
    evolution: {
      next: [["510", "Level 20"]],
    },
    profile: {
      height: "0.4 m",
      weight: "10.1 kg",
      egg: ["Field"],
      ability: [
        ["Limber", "false"],
        ["Unburden", "false"],
        ["Prankster", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/509.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/509.png",
      hires: "./Imagens/Pokedex/hires/509.png",
    },
  },
  {
    id: 510,
    name: {
      english: "Liepard",
      japanese: "レパルダス",
      chinese: "酷豹",
      french: "Léopardus",
    },
    type: ["Sombrio"],
    base: {
      HP: 64,
      Attack: 88,
      Defense: 50,
      "Sp. Attack": 88,
      "Sp. Defense": 50,
      Speed: 106,
    },
    species: "Cruel Pokémon",
    description:
      "Furtivamente, ele se aproxima de seu alvo, atacando por trás antes que sua vítima tenha chance de reagir.",
    evolution: {
      prev: ["509", "Level 20"],
    },
    profile: {
      height: "1.1 m",
      weight: "37.5 kg",
      egg: ["Field"],
      ability: [
        ["Limber", "false"],
        ["Unburden", "false"],
        ["Prankster", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/510.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/510.png",
      hires: "./Imagens/Pokedex/hires/510.png",
    },
  },
  {
    id: 511,
    name: {
      english: "Pansage",
      japanese: "ヤナップ",
      chinese: "花椰猴",
      french: "Feuillajou",
    },
    type: ["Grama"],
    base: {
      HP: 50,
      Attack: 53,
      Defense: 48,
      "Sp. Attack": 53,
      "Sp. Defense": 48,
      Speed: 64,
    },
    species: "Grama Monkey Pokémon",
    description:
      "Ele é bom em encontrar bagas e as coleta de todos os lugares. Ele é gentil o suficiente para compartilhá-las com amigos.",
    evolution: {
      next: [["512", "use Leaf Stone"]],
    },
    profile: {
      height: "0.6 m",
      weight: "10.5 kg",
      egg: ["Field"],
      ability: [
        ["Gluttony", "false"],
        ["Overgrow", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/511.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/511.png",
      hires: "./Imagens/Pokedex/hires/511.png",
    },
  },
  {
    id: 512,
    name: {
      english: "Simisage",
      japanese: "ヤナッキー",
      chinese: "花椰猿",
      french: "Feuiloutan",
    },
    type: ["Grama"],
    base: {
      HP: 75,
      Attack: 98,
      Defense: 63,
      "Sp. Attack": 98,
      "Sp. Defense": 63,
      Speed: 101,
    },
    species: "Thorn Monkey Pokémon",
    description:
      "De mau humor, ele luta balançando sua cauda barbelada selvagemente. A folha crescendo em sua cabeça é muito amarga.",
    evolution: {
      prev: ["511", "use Leaf Stone"],
    },
    profile: {
      height: "1.1 m",
      weight: "30.5 kg",
      egg: ["Field"],
      ability: [
        ["Gluttony", "false"],
        ["Overgrow", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/512.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/512.png",
      hires: "./Imagens/Pokedex/hires/512.png",
    },
  },
  {
    id: 513,
    name: {
      english: "Pansear",
      japanese: "バオップ",
      chinese: "爆香猴",
      french: "Flamajou",
    },
    type: ["Fogo"],
    base: {
      HP: 50,
      Attack: 53,
      Defense: 48,
      "Sp. Attack": 53,
      "Sp. Defense": 48,
      Speed: 64,
    },
    species: "High Temp Pokémon",
    description:
      "Este Pokémon vive em cavernas em vulcões. O fogo dentro do tufo em sua cabeça pode atingir 600 graus Fahrenheit.",
    evolution: {
      next: [["514", "use Fogo Stone"]],
    },
    profile: {
      height: "0.6 m",
      weight: "11 kg",
      egg: ["Field"],
      ability: [
        ["Gluttony", "false"],
        ["Blaze", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/513.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/513.png",
      hires: "./Imagens/Pokedex/hires/513.png",
    },
  },
  {
    id: 514,
    name: {
      english: "Simisear",
      japanese: "バオッキー",
      chinese: "爆香猿",
      french: "Flamoutan",
    },
    type: ["Fogo"],
    base: {
      HP: 75,
      Attack: 98,
      Defense: 63,
      "Sp. Attack": 98,
      "Sp. Defense": 63,
      Speed: 101,
    },
    species: "Ember Pokémon",
    description:
      "Quando fica animado, brasas saem de sua cabeça e cauda e ele fica quente. Por alguma razão, ele adora doces.",
    evolution: {
      prev: ["513", "use Fogo Stone"],
    },
    profile: {
      height: "1 m",
      weight: "28 kg",
      egg: ["Field"],
      ability: [
        ["Gluttony", "false"],
        ["Blaze", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/514.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/514.png",
      hires: "./Imagens/Pokedex/hires/514.png",
    },
  },
  {
    id: 515,
    name: {
      english: "Panpour",
      japanese: "ヒヤップ",
      chinese: "冷水猴",
      french: "Flotajou",
    },
    type: ["Água"],
    base: {
      HP: 50,
      Attack: 53,
      Defense: 48,
      "Sp. Attack": 53,
      "Sp. Defense": 48,
      Speed: 64,
    },
    species: "Spray Pokémon",
    description:
      "A água armazenada dentro do tufo em sua cabeça está cheia de nutrientes. Plantas que recebem sua água crescem grandes.",
    evolution: {
      next: [["516", "use Água Stone"]],
    },
    profile: {
      height: "0.6 m",
      weight: "13.5 kg",
      egg: ["Field"],
      ability: [
        ["Gluttony", "false"],
        ["Torrent", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/515.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/515.png",
      hires: "./Imagens/Pokedex/hires/515.png",
    },
  },
  {
    id: 516,
    name: {
      english: "Simipour",
      japanese: "ヒヤッキー",
      chinese: "冷水猿",
      french: "Flotoutan",
    },
    type: ["Água"],
    base: {
      HP: 75,
      Attack: 98,
      Defense: 63,
      "Sp. Attack": 98,
      "Sp. Defense": 63,
      Speed: 101,
    },
    species: "Geyser Pokémon",
    description:
      "Ele prefere lugares com água limpa. Quando seu tufo fica baixo, ele o reabastece sifonando água com sua cauda.",
    evolution: {
      prev: ["515", "use Água Stone"],
    },
    profile: {
      height: "1 m",
      weight: "29 kg",
      egg: ["Field"],
      ability: [
        ["Gluttony", "false"],
        ["Torrent", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/516.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/516.png",
      hires: "./Imagens/Pokedex/hires/516.png",
    },
  },
  {
    id: 517,
    name: {
      english: "Munna",
      japanese: "ムンナ",
      chinese: "食梦梦",
      french: "Munna",
    },
    type: ["Psíquico"],
    base: {
      HP: 76,
      Attack: 25,
      Defense: 45,
      "Sp. Attack": 67,
      "Sp. Defense": 55,
      Speed: 24,
    },
    species: "Dream Eater Pokémon",
    description:
      "Ele come os sonhos das pessoas e dos Pokémon. Quando come um sonho agradável, ele expele névoa cor-de-rosa.",
    evolution: {
      next: [["518", "use Moon Stone"]],
    },
    profile: {
      height: "0.6 m",
      weight: "23.3 kg",
      egg: ["Field"],
      ability: [
        ["Forewarn", "false"],
        ["Synchronize", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/517.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/517.png",
      hires: "./Imagens/Pokedex/hires/517.png",
    },
  },
  {
    id: 518,
    name: {
      english: "Musharna",
      japanese: "ムシャーナ",
      chinese: "梦梦蚀",
      french: "Mushana",
    },
    type: ["Psíquico"],
    base: {
      HP: 116,
      Attack: 55,
      Defense: 85,
      "Sp. Attack": 107,
      "Sp. Defense": 95,
      Speed: 29,
    },
    species: "Drowsing Pokémon",
    description:
      "A névoa dos sonhos que sai de sua testa muda para muitas cores diferentes dependendo do sonho que foi comido.",
    evolution: {
      prev: ["517", "use Moon Stone"],
    },
    profile: {
      height: "1.1 m",
      weight: "60.5 kg",
      egg: ["Field"],
      ability: [
        ["Forewarn", "false"],
        ["Synchronize", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/518.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/518.png",
      hires: "./Imagens/Pokedex/hires/518.png",
    },
  },
  {
    id: 519,
    name: {
      english: "Pidove",
      japanese: "マメパト",
      chinese: "豆豆鸽",
      french: "Poichigeon",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 50,
      Attack: 55,
      Defense: 50,
      "Sp. Attack": 36,
      "Sp. Defense": 30,
      Speed: 43,
    },
    species: "Tiny Pigeon Pokémon",
    description:
      "Esses Pokémon vivem em cidades. Eles estão acostumados com as pessoas. Bandos costumam se reunir em parques e praças.",
    evolution: {
      next: [["520", "Level 21"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2.1 kg",
      egg: ["Voador"],
      ability: [
        ["Big Pecks", "false"],
        ["Super Luck", "false"],
        ["Rivalry", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/519.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/519.png",
      hires: "./Imagens/Pokedex/hires/519.png",
    },
  },
  {
    id: 520,
    name: {
      english: "Tranquill",
      japanese: "ハトーボー",
      chinese: "咕咕鸽",
      french: "Colombeau",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 62,
      Attack: 77,
      Defense: 62,
      "Sp. Attack": 50,
      "Sp. Defense": 42,
      Speed: 65,
    },
    species: "Wild Pigeon Pokémon",
    description:
      "Não importa onde vá no mundo, ele sabe onde está seu ninho, por isso nunca se separa de seu treinador.",
    evolution: {
      prev: ["519", "Level 21"],
      next: [["521", "Level 32"]],
    },
    profile: {
      height: "0.6 m",
      weight: "15 kg",
      egg: ["Voador"],
      ability: [
        ["Big Pecks", "false"],
        ["Super Luck", "false"],
        ["Rivalry", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/520.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/520.png",
      hires: "./Imagens/Pokedex/hires/520.png",
    },
  },
  {
    id: 521,
    name: {
      english: "Unfezant",
      japanese: "ケンホロウ",
      chinese: "高傲雉鸡",
      french: "Déflaisan",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 80,
      Attack: 115,
      Defense: 80,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      Speed: 93,
    },
    species: "Proud Pokémon",
    description:
      "Machos têm plumagem em suas cabeças. Eles nunca deixarão a si mesmos se sentirem próximos a ninguém além de seus treinadores.",
    evolution: {
      prev: ["520", "Level 32"],
    },
    profile: {
      height: "1.2 m",
      weight: "29 kg",
      egg: ["Voador"],
      ability: [
        ["Big Pecks", "false"],
        ["Super Luck", "false"],
        ["Rivalry", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/521.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/521.png",
      hires: "./Imagens/Pokedex/hires/521.png",
    },
  },
  {
    id: 522,
    name: {
      english: "Blitzle",
      japanese: "シママ",
      chinese: "斑斑马",
      french: "Zébibron",
    },
    type: ["Elétrico"],
    base: {
      HP: 45,
      Attack: 60,
      Defense: 32,
      "Sp. Attack": 50,
      "Sp. Defense": 32,
      Speed: 76,
    },
    species: "Electrified Pokémon",
    description:
      "Sua juba brilha quando descarrega eletricidade. Eles usam a frequência e o ritmo desses flashes para se comunicar.",
    evolution: {
      next: [["523", "Level 27"]],
    },
    profile: {
      height: "0.8 m",
      weight: "29.8 kg",
      egg: ["Field"],
      ability: [
        ["Lightning Rod", "false"],
        ["Motor Drive", "false"],
        ["Sap Sipper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/522.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/522.png",
      hires: "./Imagens/Pokedex/hires/522.png",
    },
  },
  {
    id: 523,
    name: {
      english: "Zebstrika",
      japanese: "ゼブライカ",
      chinese: "雷电斑马",
      french: "Zéblitz",
    },
    type: ["Elétrico"],
    base: {
      HP: 75,
      Attack: 100,
      Defense: 63,
      "Sp. Attack": 80,
      "Sp. Defense": 63,
      Speed: 116,
    },
    species: "Thunderbolt Pokémon",
    description:
      "Eles têm movimentos semelhantes a raios. Quando Zebstrika correm na velocidade máxima, o som do trovão reverbera.",
    evolution: {
      prev: ["522", "Level 27"],
    },
    profile: {
      height: "1.6 m",
      weight: "79.5 kg",
      egg: ["Field"],
      ability: [
        ["Lightning Rod", "false"],
        ["Motor Drive", "false"],
        ["Sap Sipper", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/523.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/523.png",
      hires: "./Imagens/Pokedex/hires/523.png",
    },
  },
  {
    id: 524,
    name: {
      english: "Roggenrola",
      japanese: "ダンゴロ",
      chinese: "石丸子",
      french: "Nodulithe",
    },
    type: ["Rocha"],
    base: {
      HP: 55,
      Attack: 75,
      Defense: 85,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      Speed: 15,
    },
    species: "Mantle Pokémon",
    description:
      "Ele foi encontrado em uma fenda em uma camada de rocha exposta. O material que compõe seu corpo é sujeira de várias centenas de anos atrás.",
    evolution: {
      next: [["525", "Level 25"]],
    },
    profile: {
      height: "0.4 m",
      weight: "18 kg",
      egg: ["Mineral"],
      ability: [
        ["Sturdy", "false"],
        ["Weak Armor", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/524.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/524.png",
      hires: "./Imagens/Pokedex/hires/524.png",
    },
  },
  {
    id: 525,
    name: {
      english: "Boldore",
      japanese: "ガントル",
      chinese: "地幔岩",
      french: "Géolithe",
    },
    type: ["Rocha"],
    base: {
      HP: 70,
      Attack: 105,
      Defense: 105,
      "Sp. Attack": 50,
      "Sp. Defense": 40,
      Speed: 20,
    },
    species: "Ore Pokémon",
    description:
      "Seus cristais alaranjados são pedaços de energia poderosa. Eles são valiosos, por isso Boldore é às vezes alvo deles.",
    evolution: {
      prev: ["524", "Level 25"],
      next: [["526", "Trade"]],
    },
    profile: {
      height: "0.9 m",
      weight: "102 kg",
      egg: ["Mineral"],
      ability: [
        ["Sturdy", "false"],
        ["Weak Armor", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/525.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/525.png",
      hires: "./Imagens/Pokedex/hires/525.png",
    },
  },
  {
    id: 526,
    name: {
      english: "Gigalith",
      japanese: "ギガイアス",
      chinese: "庞岩怪",
      french: "Gigalithe",
    },
    type: ["Rocha"],
    base: {
      HP: 85,
      Attack: 135,
      Defense: 130,
      "Sp. Attack": 60,
      "Sp. Defense": 80,
      Speed: 25,
    },
    species: "Compressed Pokémon",
    description:
      "Ele absorve raios de luz solar e dispara energia. Normalmente, ele está escondido nas profundezas da superfície.",
    evolution: {
      prev: ["525", "Trade"],
    },
    profile: {
      height: "1.7 m",
      weight: "260 kg",
      egg: ["Mineral"],
      ability: [
        ["Sturdy", "false"],
        ["Sand Stream", "false"],
        ["Sand Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/526.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/526.png",
      hires: "./Imagens/Pokedex/hires/526.png",
    },
  },
  {
    id: 527,
    name: {
      english: "Woobat",
      japanese: "コロモリ",
      chinese: "滚滚蝙蝠",
      french: "Chovsourir",
    },
    type: ["Psíquico", "Voador"],
    base: {
      HP: 65,
      Attack: 45,
      Defense: 43,
      "Sp. Attack": 55,
      "Sp. Defense": 43,
      Speed: 72,
    },
    species: "Bat Pokémon",
    description:
      "A marca em forma de coração deixada em um corpo após um Woobat ter sido anexado a ele é considerada de boa sorte.",
    evolution: {
      next: [["528", "high Friendship"]],
    },
    profile: {
      height: "0.4 m",
      weight: "2.1 kg",
      egg: ["Voador", "Field"],
      ability: [
        ["Unaware", "false"],
        ["Klutz", "false"],
        ["Simple", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/527.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/527.png",
      hires: "./Imagens/Pokedex/hires/527.png",
    },
  },
  {
    id: 528,
    name: {
      english: "Swoobat",
      japanese: "ココロモリ",
      chinese: "心蝙蝠",
      french: "Rhinolove",
    },
    type: ["Psíquico", "Voador"],
    base: {
      HP: 67,
      Attack: 57,
      Defense: 55,
      "Sp. Attack": 77,
      "Sp. Defense": 55,
      Speed: 114,
    },
    species: "Courting Pokémon",
    description:
      "Qualquer pessoa que entre em contato com as ondas ultrassônicas emitidas por um macho cortejando experimenta uma mudança de humor positiva.",
    evolution: {
      prev: ["527", "high Friendship"],
    },
    profile: {
      height: "0.9 m",
      weight: "10.5 kg",
      egg: ["Voador", "Field"],
      ability: [
        ["Unaware", "false"],
        ["Klutz", "false"],
        ["Simple", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/528.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/528.png",
      hires: "./Imagens/Pokedex/hires/528.png",
    },
  },
  {
    id: 529,
    name: {
      english: "Drilbur",
      japanese: "モグリュー",
      chinese: "螺钉地鼠",
      french: "Rototaupe",
    },
    type: ["Terra"],
    base: {
      HP: 60,
      Attack: 85,
      Defense: 40,
      "Sp. Attack": 30,
      "Sp. Defense": 45,
      Speed: 68,
    },
    species: "Mole Pokémon",
    description:
      "Girando seu corpo, ele pode cavar direto no chão a uma velocidade de 30 mph.",
    evolution: {
      next: [["530", "Level 31"]],
    },
    profile: {
      height: "0.3 m",
      weight: "8.5 kg",
      egg: ["Field"],
      ability: [
        ["Sand Rush", "false"],
        ["Sand Force", "false"],
        ["Mold Breaker", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/529.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/529.png",
      hires: "./Imagens/Pokedex/hires/529.png",
    },
  },
  {
    id: 530,
    name: {
      english: "Excadrill",
      japanese: "ドリュウズ",
      chinese: "龙头地鼠",
      french: "Minotaupe",
    },
    type: ["Terra", "Metal"],
    base: {
      HP: 110,
      Attack: 135,
      Defense: 60,
      "Sp. Attack": 50,
      "Sp. Defense": 65,
      Speed: 88,
    },
    species: "Subterrene Pokémon",
    description:
      "Mais de 300 pés abaixo da superfície, eles constroem ninhos labirínticos. Sua atividade pode ser destrutiva para túneis de metrô.",
    evolution: {
      prev: ["529", "Level 31"],
    },
    profile: {
      height: "0.7 m",
      weight: "40.4 kg",
      egg: ["Field"],
      ability: [
        ["Sand Rush", "false"],
        ["Sand Force", "false"],
        ["Mold Breaker", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/530.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/530.png",
      hires: "./Imagens/Pokedex/hires/530.png",
    },
  },
  {
    id: 531,
    name: {
      english: "Audino",
      japanese: "タブンネ",
      chinese: "差不多娃娃",
      french: "Nanméouïe",
    },
    type: ["Normal"],
    base: {
      HP: 103,
      Attack: 60,
      Defense: 86,
      "Sp. Attack": 60,
      "Sp. Defense": 86,
      Speed: 50,
    },
    species: "Hearing Pokémon",
    description:
      "Ele toca outros com os tentáculos em suas orelhas, usando o som de seus batimentos cardíacos para dizer como estão se sentindo.",
    evolution: {},
    profile: {
      height: "1.1 m",
      weight: "31 kg",
      egg: ["Fada"],
      ability: [
        ["Healer", "false"],
        ["Regenerator", "false"],
        ["Klutz", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/531.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/531.png",
      hires: "./Imagens/Pokedex/hires/531.png",
    },
  },
  {
    id: 532,
    name: {
      english: "Timburr",
      japanese: "ドッコラー",
      chinese: "搬运小匠",
      french: "Charpenti",
    },
    type: ["Lutador"],
    base: {
      HP: 75,
      Attack: 80,
      Defense: 55,
      "Sp. Attack": 25,
      "Sp. Defense": 35,
      Speed: 35,
    },
    species: "Muscular Pokémon",
    description:
      "Sempre carregando troncos quadrados, eles ajudam na construção. À medida que crescem, carregam troncos maiores.",
    evolution: {
      next: [["533", "Level 25"]],
    },
    profile: {
      height: "0.6 m",
      weight: "12.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Guts", "false"],
        ["Sheer Force", "false"],
        ["Iron Fist", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/532.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/532.png",
      hires: "./Imagens/Pokedex/hires/532.png",
    },
  },
  {
    id: 533,
    name: {
      english: "Gurdurr",
      japanese: "ドテッコツ",
      chinese: "铁骨土人",
      french: "Ouvrifier",
    },
    type: ["Lutador"],
    base: {
      HP: 85,
      Attack: 105,
      Defense: 85,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      Speed: 40,
    },
    species: "Muscular Pokémon",
    description:
      "Este Pokémon é tão muscular e fortemente construído que até mesmo um grupo de lutadores não conseguiria fazê-lo mover um centímetro.",
    evolution: {
      prev: ["532", "Level 25"],
      next: [["534", "Trade"]],
    },
    profile: {
      height: "1.2 m",
      weight: "40 kg",
      egg: ["Human-Like"],
      ability: [
        ["Guts", "false"],
        ["Sheer Force", "false"],
        ["Iron Fist", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/533.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/533.png",
      hires: "./Imagens/Pokedex/hires/533.png",
    },
  },
  {
    id: 534,
    name: {
      english: "Conkeldurr",
      japanese: "ローブシン",
      chinese: "修建老匠",
      french: "Bétochef",
    },
    type: ["Lutador"],
    base: {
      HP: 105,
      Attack: 140,
      Defense: 95,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      Speed: 45,
    },
    species: "Muscular Pokémon",
    description:
      "Em vez de confiar na força, eles dominam movimentos que utilizam a força centrífuga de concreto giratório.",
    evolution: {
      prev: ["533", "Trade"],
    },
    profile: {
      height: "1.4 m",
      weight: "87 kg",
      egg: ["Human-Like"],
      ability: [
        ["Guts", "false"],
        ["Sheer Force", "false"],
        ["Iron Fist", "true"],
      ],
      gender: "75:25",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/534.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/534.png",
      hires: "./Imagens/Pokedex/hires/534.png",
    },
  },
  {
    id: 535,
    name: {
      english: "Tympole",
      japanese: "オタマロ",
      chinese: "圆蝌蚪",
      french: "Tritonde",
    },
    type: ["Água"],
    base: {
      HP: 50,
      Attack: 50,
      Defense: 40,
      "Sp. Attack": 50,
      "Sp. Defense": 40,
      Speed: 64,
    },
    species: "Tadpole Pokémon",
    description:
      "Vibrando suas bochechas, ele emite ondas sonoras imperceptíveis aos humanos. Ele usa o ritmo desses sons para falar.",
    evolution: {
      next: [["536", "Level 25"]],
    },
    profile: {
      height: "0.5 m",
      weight: "4.5 kg",
      egg: ["Água 1"],
      ability: [
        ["Swift Swim", "false"],
        ["Hydration", "false"],
        ["Água Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/535.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/535.png",
      hires: "./Imagens/Pokedex/hires/535.png",
    },
  },
  {
    id: 536,
    name: {
      english: "Palpitoad",
      japanese: "ガマガル",
      chinese: "蓝蟾蜍",
      french: "Batracné",
    },
    type: ["Água", "Terra"],
    base: {
      HP: 75,
      Attack: 65,
      Defense: 55,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      Speed: 69,
    },
    species: "Vibration Pokémon",
    description:
      "Ele vive na água e na terra. Ele usa sua língua longa e pegajosa para imobilizar seus oponentes.",
    evolution: {
      prev: ["535", "Level 25"],
      next: [["537", "Level 36"]],
    },
    profile: {
      height: "0.8 m",
      weight: "17 kg",
      egg: ["Água 1"],
      ability: [
        ["Swift Swim", "false"],
        ["Hydration", "false"],
        ["Água Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/536.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/536.png",
      hires: "./Imagens/Pokedex/hires/536.png",
    },
  },
  {
    id: 537,
    name: {
      english: "Seismitoad",
      japanese: "ガマゲロゲ",
      chinese: "蟾蜍王",
      french: "Crapustule",
    },
    type: ["Água", "Terra"],
    base: {
      HP: 105,
      Attack: 95,
      Defense: 75,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      Speed: 74,
    },
    species: "Vibration Pokémon",
    description:
      "Eles atiram líquido paralisante de seus inchaços na cabeça. Eles usam vibração para machucar seus oponentes.",
    evolution: {
      prev: ["536", "Level 36"],
    },
    profile: {
      height: "1.5 m",
      weight: "62 kg",
      egg: ["Água 1"],
      ability: [
        ["Swift Swim", "false"],
        ["Venenoso Touch", "false"],
        ["Água Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/537.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/537.png",
      hires: "./Imagens/Pokedex/hires/537.png",
    },
  },
  {
    id: 538,
    name: {
      english: "Throh",
      japanese: "ナゲキ",
      chinese: "投摔鬼",
      french: "Judokrak",
    },
    type: ["Lutador"],
    base: {
      HP: 120,
      Attack: 100,
      Defense: 85,
      "Sp. Attack": 30,
      "Sp. Defense": 85,
      Speed: 45,
    },
    species: "Judo Pokémon",
    description:
      "Quando encontra um inimigo maior que si mesmo, ele quer jogá-lo. Ele muda de cinto à medida que fica mais forte.",
    evolution: {},
    profile: {
      height: "1.3 m",
      weight: "55.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Guts", "false"],
        ["Inner Focus", "false"],
        ["Mold Breaker", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/538.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/538.png",
      hires: "./Imagens/Pokedex/hires/538.png",
    },
  },
  {
    id: 539,
    name: {
      english: "Sawk",
      japanese: "ダゲキ",
      chinese: "打击鬼",
      french: "Karaclée",
    },
    type: ["Lutador"],
    base: {
      HP: 75,
      Attack: 125,
      Defense: 75,
      "Sp. Attack": 30,
      "Sp. Defense": 75,
      Speed: 85,
    },
    species: "Karate Pokémon",
    description:
      "Amarrando seus cintos, eles ficam entusiasmados e seus socos se tornam mais destrutivos. Perturbar seu treinamento os irrita.",
    evolution: {},
    profile: {
      height: "1.4 m",
      weight: "51 kg",
      egg: ["Human-Like"],
      ability: [
        ["Sturdy", "false"],
        ["Inner Focus", "false"],
        ["Mold Breaker", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/539.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/539.png",
      hires: "./Imagens/Pokedex/hires/539.png",
    },
  },
  {
    id: 540,
    name: {
      english: "Sewaddle",
      japanese: "クルミル",
      chinese: "虫宝包",
      french: "Larveyette",
    },
    type: ["Inseto", "Grama"],
    base: {
      HP: 45,
      Attack: 53,
      Defense: 70,
      "Sp. Attack": 40,
      "Sp. Defense": 60,
      Speed: 42,
    },
    species: "Sewing Pokémon",
    description:
      "Como este Pokémon faz suas próprias roupas com folhas, ele é um mascote popular para designers de moda.",
    evolution: {
      next: [["541", "Level 20"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Chlorophyll", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/540.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/540.png",
      hires: "./Imagens/Pokedex/hires/540.png",
    },
  },
  {
    id: 541,
    name: {
      english: "Swadloon",
      japanese: "クルマユ",
      chinese: "宝包茧",
      french: "Couverdure",
    },
    type: ["Inseto", "Grama"],
    base: {
      HP: 55,
      Attack: 63,
      Defense: 90,
      "Sp. Attack": 50,
      "Sp. Defense": 80,
      Speed: 42,
    },
    species: "Leaf-Wrapped Pokémon",
    description:
      "Ele se protege do frio envolvendo-se em folhas. Ele fica em movimento, comendo folhas nas florestas.",
    evolution: {
      prev: ["540", "Level 20"],
      next: [["542", "high Friendship"]],
    },
    profile: {
      height: "0.5 m",
      weight: "7.3 kg",
      egg: ["Inseto"],
      ability: [
        ["Leaf Guard", "false"],
        ["Chlorophyll", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/541.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/541.png",
      hires: "./Imagens/Pokedex/hires/541.png",
    },
  },
  {
    id: 542,
    name: {
      english: "Leavanny",
      japanese: "ハハコモリ",
      chinese: "保姆虫",
      french: "Manternel",
    },
    type: ["Inseto", "Grama"],
    base: {
      HP: 75,
      Attack: 103,
      Defense: 80,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      Speed: 92,
    },
    species: "Nurturing Pokémon",
    description:
      "Ele mantém seus ovos quentes com o calor da fermentação das folhas. Ele também usa folhas para fazer embrulhos quentes para Sewaddle.",
    evolution: {
      prev: ["541", "high Friendship"],
    },
    profile: {
      height: "1.2 m",
      weight: "20.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Chlorophyll", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/542.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/542.png",
      hires: "./Imagens/Pokedex/hires/542.png",
    },
  },
  {
    id: 543,
    name: {
      english: "Venipede",
      japanese: "フシデ",
      chinese: "百足蜈蚣",
      french: "Venipatte",
    },
    type: ["Inseto", "Venenoso"],
    base: {
      HP: 30,
      Attack: 45,
      Defense: 59,
      "Sp. Attack": 30,
      "Sp. Defense": 39,
      Speed: 57,
    },
    species: "Centipede Pokémon",
    description:
      "Sua mordida injeta um veneno potente, suficiente para paralisar grandes Pokémon pássaros que tentam se alimentar dele.",
    evolution: {
      next: [["544", "Level 22"]],
    },
    profile: {
      height: "0.4 m",
      weight: "5.3 kg",
      egg: ["Inseto"],
      ability: [
        ["Venenoso Point", "false"],
        ["Swarm", "false"],
        ["Speed Boost", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/543.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/543.png",
      hires: "./Imagens/Pokedex/hires/543.png",
    },
  },
  {
    id: 544,
    name: {
      english: "Whirlipede",
      japanese: "ホイーガ",
      chinese: "车轮球",
      french: "Scobolide",
    },
    type: ["Inseto", "Venenoso"],
    base: {
      HP: 40,
      Attack: 55,
      Defense: 99,
      "Sp. Attack": 40,
      "Sp. Defense": 79,
      Speed: 47,
    },
    species: "Curlipede Pokémon",
    description:
      "Normalmente, ele fica imóvel, mas quando atacado, gira em alta velocidade e depois bate em seu oponente.",
    evolution: {
      prev: ["543", "Level 22"],
      next: [["545", "Level 30"]],
    },
    profile: {
      height: "1.2 m",
      weight: "58.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Venenoso Point", "false"],
        ["Swarm", "false"],
        ["Speed Boost", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/544.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/544.png",
      hires: "./Imagens/Pokedex/hires/544.png",
    },
  },
  {
    id: 545,
    name: {
      english: "Scolipede",
      japanese: "ペンドラー",
      chinese: "蜈蚣王",
      french: "Brutapode",
    },
    type: ["Inseto", "Venenoso"],
    base: {
      HP: 60,
      Attack: 100,
      Defense: 89,
      "Sp. Attack": 55,
      "Sp. Defense": 69,
      Speed: 112,
    },
    species: "Megapede Pokémon",
    description:
      "Com movimentos rápidos, ele persegue seus inimigos, atacando implacavelmente com seus chifres até prevalecer.",
    evolution: {
      prev: ["544", "Level 30"],
    },
    profile: {
      height: "2.5 m",
      weight: "200.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Venenoso Point", "false"],
        ["Swarm", "false"],
        ["Speed Boost", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/545.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/545.png",
      hires: "./Imagens/Pokedex/hires/545.png",
    },
  },
  {
    id: 546,
    name: {
      english: "Cottonee",
      japanese: "モンメン",
      chinese: "木棉球",
      french: "Doudouvet",
    },
    type: ["Grama", "Fada"],
    base: {
      HP: 40,
      Attack: 27,
      Defense: 60,
      "Sp. Attack": 37,
      "Sp. Defense": 50,
      Speed: 66,
    },
    species: "Cotton Puff Pokémon",
    description:
      "Quando atacado, ele expele algodão de seu corpo para criar uma distração. O algodão que ele perde cresce rapidamente.",
    evolution: {
      next: [["547", "use Sun Stone"]],
    },
    profile: {
      height: "0.3 m",
      weight: "0.6 kg",
      egg: ["Fada", "Grama"],
      ability: [
        ["Prankster", "false"],
        ["Infiltrator", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/546.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/546.png",
      hires: "./Imagens/Pokedex/hires/546.png",
    },
  },
  {
    id: 547,
    name: {
      english: "Whimsicott",
      japanese: "エルフーン",
      chinese: "风妖精",
      french: "Farfaduvet",
    },
    type: ["Grama", "Fada"],
    base: {
      HP: 60,
      Attack: 67,
      Defense: 85,
      "Sp. Attack": 77,
      "Sp. Defense": 75,
      Speed: 116,
    },
    species: "Windveiled Pokémon",
    description:
      "Whimsicott não vive em um local fixo. Ele flutua em ventos giratórios, aparecendo em todos os lugares para realizar sua travessura.",
    evolution: {
      prev: ["546", "use Sun Stone"],
    },
    profile: {
      height: "0.7 m",
      weight: "6.6 kg",
      egg: ["Fada", "Grama"],
      ability: [
        ["Prankster", "false"],
        ["Infiltrator", "false"],
        ["Chlorophyll", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/547.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/547.png",
      hires: "./Imagens/Pokedex/hires/547.png",
    },
  },
  {
    id: 548,
    name: {
      english: "Petilil",
      japanese: "チュリネ",
      chinese: "百合根娃娃",
      french: "Chlorobule",
    },
    type: ["Grama"],
    base: {
      HP: 45,
      Attack: 35,
      Defense: 50,
      "Sp. Attack": 70,
      "Sp. Defense": 50,
      Speed: 30,
    },
    species: "Bulb Pokémon",
    description:
      "Eles preferem água e solo limpos. Quando o ambiente em que vivem fica ruim, todo o bando se muda para uma nova área.",
    evolution: {
      next: [["549", "use Sun Stone"]],
    },
    profile: {
      height: "0.5 m",
      weight: "6.6 kg",
      egg: ["Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Own Tempo", "false"],
        ["Leaf Guard", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/548.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/548.png",
      hires: "./Imagens/Pokedex/hires/548.png",
    },
  },
  {
    id: 549,
    name: {
      english: "Lilligant",
      japanese: "ドレディア",
      chinese: "裙儿小姐",
      french: "Fragilady",
    },
    type: ["Grama"],
    base: {
      HP: 70,
      Attack: 60,
      Defense: 75,
      "Sp. Attack": 110,
      "Sp. Defense": 75,
      Speed: 90,
    },
    species: "Flowering Pokémon",
    description:
      "Ele é bem querido por outros Pokémon por sua beleza. A flor em sua cabeça precisa de cuidados constantes, ou logo murchará e apodrecerá.",
    evolution: {
      prev: ["548", "use Sun Stone"],
    },
    profile: {
      height: "1.1 m",
      weight: "16.3 kg",
      egg: ["Grama"],
      ability: [
        ["Chlorophyll", "false"],
        ["Own Tempo", "false"],
        ["Leaf Guard", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/549.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/549.png",
      hires: "./Imagens/Pokedex/hires/549.png",
    },
  },
  {
    id: 550,
    name: {
      english: "Basculin",
      japanese: "バスラオ",
      chinese: "野蛮鲈鱼",
      french: "Bargantua",
    },
    type: ["Água"],
    base: {
      HP: 70,
      Attack: 92,
      Defense: 65,
      "Sp. Attack": 80,
      "Sp. Defense": 55,
      Speed: 98,
    },
    species: "Hostile Pokémon",
    description:
      "Quando uma escola de Basculin aparece em um lago, tudo o mais desaparece, exceto Corphish e Crawdaunt. Isso mostra o quão violentos são os Basculin.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "18 kg",
      egg: ["Água 2"],
      ability: [
        ["Reckless", "false"],
        ["Adaptability", "false"],
        ["Mold Breaker", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/550.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/550.png",
      hires: "./Imagens/Pokedex/hires/550.png",
    },
  },
  {
    id: 551,
    name: {
      english: "Sandile",
      japanese: "メグロコ",
      chinese: "黑眼鳄",
      french: "Mascaïman",
    },
    type: ["Terra", "Sombrio"],
    base: {
      HP: 50,
      Attack: 72,
      Defense: 35,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 65,
    },
    species: "Desert Croc Pokémon",
    description:
      'Sandile ainda não é bom em caçar, então come principalmente coisas que desabaram no deserto. É chamado de "o limpador do deserto".',
    evolution: {
      next: [["552", "Level 29"]],
    },
    profile: {
      height: "0.7 m",
      weight: "15.2 kg",
      egg: ["Field"],
      ability: [
        ["Intimidate", "false"],
        ["Moxie", "false"],
        ["Anger Point", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/551.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/551.png",
      hires: "./Imagens/Pokedex/hires/551.png",
    },
  },
  {
    id: 552,
    name: {
      english: "Krokorok",
      japanese: "ワルビル",
      chinese: "混混鳄",
      french: "Escroco",
    },
    type: ["Terra", "Sombrio"],
    base: {
      HP: 60,
      Attack: 82,
      Defense: 45,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      Speed: 74,
    },
    species: "Desert Croc Pokémon",
    description:
      "Ele enterra parte de sua presa na areia para usar como refeições de emergência quando suas caçadas não são bem-sucedidas.",
    evolution: {
      prev: ["551", "Level 29"],
      next: [["553", "Level 40"]],
    },
    profile: {
      height: "1 m",
      weight: "33.4 kg",
      egg: ["Field"],
      ability: [
        ["Intimidate", "false"],
        ["Moxie", "false"],
        ["Anger Point", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/552.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/552.png",
      hires: "./Imagens/Pokedex/hires/552.png",
    },
  },
  {
    id: 553,
    name: {
      english: "Krookodile",
      japanese: "ワルビアル",
      chinese: "流氓鳄",
      french: "Crocorible",
    },
    type: ["Terra", "Sombrio"],
    base: {
      HP: 95,
      Attack: 117,
      Defense: 80,
      "Sp. Attack": 65,
      "Sp. Defense": 70,
      Speed: 92,
    },
    species: "Intimidation Pokémon",
    description:
      "Ele se esconde em tempestades de areia que Flygon levantam e espera pacientemente que a presa apareça.",
    evolution: {
      prev: ["552", "Level 40"],
    },
    profile: {
      height: "1.5 m",
      weight: "96.3 kg",
      egg: ["Field"],
      ability: [
        ["Intimidate", "false"],
        ["Moxie", "false"],
        ["Anger Point", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/553.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/553.png",
      hires: "./Imagens/Pokedex/hires/553.png",
    },
  },
  {
    id: 554,
    name: {
      english: "Darumaka",
      japanese: "ダルマッカ",
      chinese: "火红不倒翁",
      french: "Darumarond",
    },
    type: ["Fogo"],
    base: {
      HP: 70,
      Attack: 90,
      Defense: 45,
      "Sp. Attack": 15,
      "Sp. Defense": 45,
      Speed: 50,
    },
    species: "Zen Charm Pokémon",
    description:
      "Quando dorme, puxa seus membros para dentro de seu corpo e seu fogo interno desce para 1.100 graus Fahrenheit.",
    evolution: {
      next: [["555", "use Gelo Stone"]],
    },
    profile: {
      height: "0.6 m",
      weight: "37.5 kg",
      egg: ["Field"],
      ability: [
        ["Hustle", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/554.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/554.png",
      hires: "./Imagens/Pokedex/hires/554.png",
    },
  },
  {
    id: 555,
    name: {
      english: "Darmanitan",
      japanese: "ヒヒダルマ",
      chinese: "达摩狒狒",
      french: "Darumacho",
    },
    type: ["Fogo"],
    base: {
      HP: 105,
      Attack: 140,
      Defense: 55,
      "Sp. Attack": 30,
      "Sp. Defense": 55,
      Speed: 95,
    },
    species: "Blazing Pokémon",
    description:
      "Seu fogo interno queima a 2.500 graus Fahrenheit, produzindo energia suficiente para destruir um caminhão basculante com um soco.",
    evolution: {
      prev: ["554", "use Gelo Stone"],
    },
    profile: {
      height: "1.3 m",
      weight: "92.9 kg",
      egg: ["Field"],
      ability: [
        ["Sheer Force", "false"],
        ["Zen Mode", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/555.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/555.png",
      hires: "./Imagens/Pokedex/hires/555.png",
    },
  },
  {
    id: 556,
    name: {
      english: "Maractus",
      japanese: "マラカッチ",
      chinese: "沙铃仙人掌",
      french: "Maracachi",
    },
    type: ["Grama"],
    base: {
      HP: 75,
      Attack: 86,
      Defense: 67,
      "Sp. Attack": 106,
      "Sp. Defense": 67,
      Speed: 60,
    },
    species: "Cactus Pokémon",
    description:
      "Regiões áridas são seu habitat. Eles se movem ritmicamente, fazendo um som semelhante a maracas.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "28 kg",
      egg: ["Grama"],
      ability: [
        ["Água Absorb", "false"],
        ["Chlorophyll", "false"],
        ["Storm Drain", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/556.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/556.png",
      hires: "./Imagens/Pokedex/hires/556.png",
    },
  },
  {
    id: 557,
    name: {
      english: "Dwebble",
      japanese: "イシズマイ",
      chinese: "石居蟹",
      french: "Crabicoque",
    },
    type: ["Inseto", "Rocha"],
    base: {
      HP: 50,
      Attack: 65,
      Defense: 85,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 55,
    },
    species: "Rocha Inn Pokémon",
    description:
      "Quando encontra uma pedra de tamanho adequado, ele secreta um líquido de sua boca para abrir um buraco para entrar.",
    evolution: {
      next: [["558", "Level 34"]],
    },
    profile: {
      height: "0.3 m",
      weight: "14.5 kg",
      egg: ["Inseto", "Mineral"],
      ability: [
        ["Sturdy", "false"],
        ["Shell Armor", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/557.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/557.png",
      hires: "./Imagens/Pokedex/hires/557.png",
    },
  },
  {
    id: 558,
    name: {
      english: "Crustle",
      japanese: "イワパレス",
      chinese: "岩殿居蟹",
      french: "Crabaraque",
    },
    type: ["Inseto", "Rocha"],
    base: {
      HP: 70,
      Attack: 105,
      Defense: 125,
      "Sp. Attack": 65,
      "Sp. Defense": 75,
      Speed: 45,
    },
    species: "Stone Home Pokémon",
    description:
      "Competindo por território, Crustle lutam ferozmente. Aquele cujo bloco é quebrado é o perdedor da batalha.",
    evolution: {
      prev: ["557", "Level 34"],
    },
    profile: {
      height: "1.4 m",
      weight: "200 kg",
      egg: ["Inseto", "Mineral"],
      ability: [
        ["Sturdy", "false"],
        ["Shell Armor", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/558.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/558.png",
      hires: "./Imagens/Pokedex/hires/558.png",
    },
  },
  {
    id: 559,
    name: {
      english: "Scraggy",
      japanese: "ズルッグ",
      chinese: "滑滑小子",
      french: "Baggiguane",
    },
    type: ["Sombrio", "Lutador"],
    base: {
      HP: 50,
      Attack: 75,
      Defense: 70,
      "Sp. Attack": 35,
      "Sp. Defense": 70,
      Speed: 48,
    },
    species: "Shedding Pokémon",
    description:
      "Ele estica sua pele flácida até o pescoço para se proteger. Quanto mais flácida sua pele, mais respeito eles ganham.",
    evolution: {
      next: [["560", "Level 39"]],
    },
    profile: {
      height: "0.6 m",
      weight: "11.8 kg",
      egg: ["Field", "Dragão"],
      ability: [
        ["Shed Skin", "false"],
        ["Moxie", "false"],
        ["Intimidate", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/559.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/559.png",
      hires: "./Imagens/Pokedex/hires/559.png",
    },
  },
  {
    id: 560,
    name: {
      english: "Scrafty",
      japanese: "ズルズキン",
      chinese: "头巾混混",
      french: "Baggaïd",
    },
    type: ["Sombrio", "Lutador"],
    base: {
      HP: 65,
      Attack: 90,
      Defense: 115,
      "Sp. Attack": 45,
      "Sp. Defense": 115,
      Speed: 58,
    },
    species: "Hoodlum Pokémon",
    description:
      "Ele provoca seus oponentes cuspindo. Ele tem um determinado território que nunca deixa sua vida inteira.",
    evolution: {
      prev: ["559", "Level 39"],
    },
    profile: {
      height: "1.1 m",
      weight: "30 kg",
      egg: ["Field", "Dragão"],
      ability: [
        ["Shed Skin", "false"],
        ["Moxie", "false"],
        ["Intimidate", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/560.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/560.png",
      hires: "./Imagens/Pokedex/hires/560.png",
    },
  },
  {
    id: 561,
    name: {
      english: "Sigilyph",
      japanese: "シンボラー",
      chinese: "象征鸟",
      french: "Cryptéro",
    },
    type: ["Psíquico", "Voador"],
    base: {
      HP: 72,
      Attack: 58,
      Defense: 80,
      "Sp. Attack": 103,
      "Sp. Defense": 80,
      Speed: 97,
    },
    species: "Avianoid Pokémon",
    description:
      "Os guardiões de uma cidade antiga, eles sempre voam pela mesma rota enquanto vigiam invasores.",
    evolution: {},
    profile: {
      height: "1.4 m",
      weight: "14 kg",
      egg: ["Voador"],
      ability: [
        ["Wonder Skin", "false"],
        ["Magic Guard", "false"],
        ["Tinted Lens", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/561.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/561.png",
      hires: "./Imagens/Pokedex/hires/561.png",
    },
  },
  {
    id: 562,
    name: {
      english: "Yamask",
      japanese: "デスマス",
      chinese: "哭哭面具",
      french: "Tutafeh",
    },
    type: ["Fantasma"],
    base: {
      HP: 38,
      Attack: 30,
      Defense: 85,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      Speed: 30,
    },
    species: "Spirit Pokémon",
    description:
      "Cada um deles carrega uma máscara que costumava ser seu rosto quando era humano. Às vezes, eles olham para isso e choram.",
    evolution: {
      next: [["867", "near Dusty Bowl"]],
    },
    profile: {
      height: "0.5 m",
      weight: "1.5 kg",
      egg: ["Mineral", "Amorphous"],
      ability: [["Mummy", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/562.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/562.png",
      hires: "./Imagens/Pokedex/hires/562.png",
    },
  },
  {
    id: 563,
    name: {
      english: "Cofagrigus",
      japanese: "デスカーン",
      chinese: "死神棺",
      french: "Tutankafer",
    },
    type: ["Fantasma"],
    base: {
      HP: 58,
      Attack: 50,
      Defense: 145,
      "Sp. Attack": 95,
      "Sp. Defense": 105,
      Speed: 30,
    },
    species: "Coffin Pokémon",
    description:
      "Ladrões de sepulturas que os confundem com caixões de verdade e se aproximam demais acabam presos dentro de seus corpos.",
    evolution: {
      prev: ["562", "Level 34"],
    },
    profile: {
      height: "1.7 m",
      weight: "76.5 kg",
      egg: ["Mineral", "Amorphous"],
      ability: [["Mummy", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/563.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/563.png",
      hires: "./Imagens/Pokedex/hires/563.png",
    },
  },
  {
    id: 564,
    name: {
      english: "Tirtouga",
      japanese: "プロトーガ",
      chinese: "原盖海龟",
      french: "Carapagos",
    },
    type: ["Água", "Rocha"],
    base: {
      HP: 54,
      Attack: 78,
      Defense: 103,
      "Sp. Attack": 53,
      "Sp. Defense": 45,
      Speed: 22,
    },
    species: "Prototurtle Pokémon",
    description:
      "Seus terrenos de caça abrangiam uma ampla área, desde a terra até mais de meia milha de profundidade no oceano.",
    evolution: {
      next: [["565", "Level 37"]],
    },
    profile: {
      height: "0.7 m",
      weight: "16.5 kg",
      egg: ["Água 1", "Água 3"],
      ability: [
        ["Solid Rocha", "false"],
        ["Sturdy", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/564.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/564.png",
      hires: "./Imagens/Pokedex/hires/564.png",
    },
  },
  {
    id: 565,
    name: {
      english: "Carracosta",
      japanese: "アバゴーラ",
      chinese: "肋骨海龟",
      french: "Mégapagos",
    },
    type: ["Água", "Rocha"],
    base: {
      HP: 74,
      Attack: 108,
      Defense: 133,
      "Sp. Attack": 83,
      "Sp. Defense": 65,
      Speed: 32,
    },
    species: "Prototurtle Pokémon",
    description:
      "Carracosta come cada pedaço da presa que captura, até mesmo as conchas e os ossos, para fortalecer ainda mais sua resistente concha.",
    evolution: {
      prev: ["564", "Level 37"],
    },
    profile: {
      height: "1.2 m",
      weight: "81 kg",
      egg: ["Água 1", "Água 3"],
      ability: [
        ["Solid Rocha", "false"],
        ["Sturdy", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/565.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/565.png",
      hires: "./Imagens/Pokedex/hires/565.png",
    },
  },
  {
    id: 566,
    name: {
      english: "Archen",
      japanese: "アーケン",
      chinese: "始祖小鸟",
      french: "Arkéapti",
    },
    type: ["Rocha", "Voador"],
    base: {
      HP: 55,
      Attack: 112,
      Defense: 45,
      "Sp. Attack": 74,
      "Sp. Defense": 45,
      Speed: 70,
    },
    species: "First Bird Pokémon",
    description:
      "Restaurado de um fóssil, este antigo Pokémon pássaro tem asas, mas ainda não pode voar.",
    evolution: {
      next: [["567", "Level 37"]],
    },
    profile: {
      height: "0.5 m",
      weight: "9.5 kg",
      egg: ["Voador", "Água 3"],
      ability: [["Defeatist", "false"]],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/566.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/566.png",
      hires: "./Imagens/Pokedex/hires/566.png",
    },
  },
  {
    id: 567,
    name: {
      english: "Archeops",
      japanese: "アーケオス",
      chinese: "始祖大鸟",
      french: "Aéroptéryx",
    },
    type: ["Rocha", "Voador"],
    base: {
      HP: 75,
      Attack: 140,
      Defense: 65,
      "Sp. Attack": 112,
      "Sp. Defense": 65,
      Speed: 110,
    },
    species: "First Bird Pokémon",
    description:
      "Diz-se que é um ancestral de Pokémon pássaro, os músculos que usa para bater suas asas ainda são fracos, por isso precisa de uma longa pista para decolar.",
    evolution: {
      prev: ["566", "Level 37"],
    },
    profile: {
      height: "1.4 m",
      weight: "32 kg",
      egg: ["Voador", "Água 3"],
      ability: [["Defeatist", "false"]],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/567.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/567.png",
      hires: "./Imagens/Pokedex/hires/567.png",
    },
  },
  {
    id: 568,
    name: {
      english: "Trubbish",
      japanese: "ヤブクロン",
      chinese: "破破袋",
      french: "Miamiasme",
    },
    type: ["Venenoso"],
    base: {
      HP: 50,
      Attack: 50,
      Defense: 62,
      "Sp. Attack": 40,
      "Sp. Defense": 62,
      Speed: 65,
    },
    species: "Trash Bag Pokémon",
    description:
      "Se um jovem Pokémon ou criança respirar o gás tóxico que Trubbish exala, pode ser uma situação perigosa.",
    evolution: {
      next: [["569", "Level 36"]],
    },
    profile: {
      height: "0.6 m",
      weight: "31 kg",
      egg: ["Mineral"],
      ability: [
        ["Stench", "false"],
        ["Sticky Hold", "false"],
        ["Aftermath", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/568.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/568.png",
      hires: "./Imagens/Pokedex/hires/568.png",
    },
  },
  {
    id: 569,
    name: {
      english: "Garbodor",
      japanese: "ダストダス",
      chinese: "灰尘山",
      french: "Miasmax",
    },
    type: ["Venenoso"],
    base: {
      HP: 80,
      Attack: 95,
      Defense: 82,
      "Sp. Attack": 60,
      "Sp. Defense": 82,
      Speed: 75,
    },
    species: "Trash Heap Pokémon",
    description:
      "Alguns dizem que a razão pela qual Garbodor em Alola são um pouco mais fortes que seus homólogos em outros lugares é a presença de Muk, seu inimigo natural.",
    evolution: {
      prev: ["568", "Level 36"],
    },
    profile: {
      height: "1.9 m",
      weight: "107.3 kg",
      egg: ["Mineral"],
      ability: [
        ["Stench", "false"],
        ["Weak Armor", "false"],
        ["Aftermath", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/569.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/569.png",
      hires: "./Imagens/Pokedex/hires/569.png",
    },
  },
  {
    id: 570,
    name: {
      english: "Zorua",
      japanese: "ゾロア",
      chinese: "索罗亚",
      french: "Zorua",
    },
    type: ["Sombrio"],
    base: {
      HP: 40,
      Attack: 65,
      Defense: 40,
      "Sp. Attack": 80,
      "Sp. Defense": 40,
      Speed: 65,
    },
    species: "Tricky Fox Pokémon",
    description:
      "Se uma criança normalmente falante de repente parar de falar, pode ter sido substituída por Zorua.",
    evolution: {
      next: [["571", "Level 30"]],
    },
    profile: {
      height: "0.7 m",
      weight: "12.5 kg",
      egg: ["Field"],
      ability: [["Illusion", "false"]],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/570.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/570.png",
      hires: "./Imagens/Pokedex/hires/570.png",
    },
  },
  {
    id: 571,
    name: {
      english: "Zoroark",
      japanese: "ゾロアーク",
      chinese: "索罗亚克",
      french: "Zoroark",
    },
    type: ["Sombrio"],
    base: {
      HP: 60,
      Attack: 105,
      Defense: 60,
      "Sp. Attack": 120,
      "Sp. Defense": 60,
      Speed: 105,
    },
    species: "Illusion Fox Pokémon",
    description:
      "Se ele acha que os humanos vão descobrir sua toca, Zoroark mostra a eles visões que os fazem vagar pelas florestas.",
    evolution: {
      prev: ["570", "Level 30"],
    },
    profile: {
      height: "1.6 m",
      weight: "81.1 kg",
      egg: ["Field"],
      ability: [["Illusion", "false"]],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/571.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/571.png",
      hires: "./Imagens/Pokedex/hires/571.png",
    },
  },
  {
    id: 572,
    name: {
      english: "Minccino",
      japanese: "チラーミィ",
      chinese: "泡沫栗鼠",
      french: "Chinchidou",
    },
    type: ["Normal"],
    base: {
      HP: 55,
      Attack: 50,
      Defense: 40,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 75,
    },
    species: "Chinchilla Pokémon",
    description:
      "Quando sua cauda fica suja com a autolimpeza ou com a limpeza de seu ninho, Minccino passa um dia inteiro lavando sua cauda em água limpa da primavera.",
    evolution: {
      next: [["573", "use Shiny Stone"]],
    },
    profile: {
      height: "0.4 m",
      weight: "5.8 kg",
      egg: ["Field"],
      ability: [
        ["Cute Charm", "false"],
        ["Technician", "false"],
        ["Skill Link", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/572.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/572.png",
      hires: "./Imagens/Pokedex/hires/572.png",
    },
  },
  {
    id: 573,
    name: {
      english: "Cinccino",
      japanese: "チラチーノ",
      chinese: "奇诺栗鼠",
      french: "Pashmilla",
    },
    type: ["Normal"],
    base: {
      HP: 75,
      Attack: 95,
      Defense: 60,
      "Sp. Attack": 65,
      "Sp. Defense": 60,
      Speed: 115,
    },
    species: "Scarf Pokémon",
    description:
      "O óleo que se exala de seu corpo é muito suave. Para pessoas com problemas de pele, este óleo é um tratamento eficaz.",
    evolution: {
      prev: ["572", "use Shiny Stone"],
    },
    profile: {
      height: "0.5 m",
      weight: "7.5 kg",
      egg: ["Field"],
      ability: [
        ["Cute Charm", "false"],
        ["Technician", "false"],
        ["Skill Link", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/573.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/573.png",
      hires: "./Imagens/Pokedex/hires/573.png",
    },
  },
  {
    id: 574,
    name: {
      english: "Gothita",
      japanese: "ゴチム",
      chinese: "哥德宝宝",
      french: "Scrutella",
    },
    type: ["Psíquico"],
    base: {
      HP: 45,
      Attack: 30,
      Defense: 50,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      Speed: 45,
    },
    species: "Fixation Pokémon",
    description:
      "Eles observam atentamente tanto treinadores quanto Pokémon. Aparentemente, eles estão olhando para algo que apenas Gothita pode ver.",
    evolution: {
      next: [["575", "Level 32"]],
    },
    profile: {
      height: "0.4 m",
      weight: "5.8 kg",
      egg: ["Human-Like"],
      ability: [
        ["Frisk", "false"],
        ["Competitive", "false"],
        ["Shadow Tag", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/574.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/574.png",
      hires: "./Imagens/Pokedex/hires/574.png",
    },
  },
  {
    id: 575,
    name: {
      english: "Gothorita",
      japanese: "ゴチミル",
      chinese: "哥德小童",
      french: "Mesmérella",
    },
    type: ["Psíquico"],
    base: {
      HP: 60,
      Attack: 45,
      Defense: 70,
      "Sp. Attack": 75,
      "Sp. Defense": 85,
      Speed: 55,
    },
    species: "Manipulate Pokémon",
    description:
      "De acordo com muitos contos antigos, ele cria amigos para si mesmo controlando crianças adormecidas em noites estreladas.",
    evolution: {
      prev: ["574", "Level 32"],
      next: [["576", "Level 41"]],
    },
    profile: {
      height: "0.7 m",
      weight: "18 kg",
      egg: ["Human-Like"],
      ability: [
        ["Frisk", "false"],
        ["Competitive", "false"],
        ["Shadow Tag", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/575.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/575.png",
      hires: "./Imagens/Pokedex/hires/575.png",
    },
  },
  {
    id: 576,
    name: {
      english: "Gothitelle",
      japanese: "ゴチルゼル",
      chinese: "哥德小姐",
      french: "Sidérella",
    },
    type: ["Psíquico"],
    base: {
      HP: 70,
      Attack: 55,
      Defense: 95,
      "Sp. Attack": 95,
      "Sp. Defense": 110,
      Speed: 65,
    },
    species: "Astral Body Pokémon",
    description:
      "Eles podem prever o futuro a partir da colocação e movimento das estrelas. Eles podem ver a expectativa de vida dos treinadores.",
    evolution: {
      prev: ["575", "Level 41"],
    },
    profile: {
      height: "1.5 m",
      weight: "44 kg",
      egg: ["Human-Like"],
      ability: [
        ["Frisk", "false"],
        ["Competitive", "false"],
        ["Shadow Tag", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/576.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/576.png",
      hires: "./Imagens/Pokedex/hires/576.png",
    },
  },
  {
    id: 577,
    name: {
      english: "Solosis",
      japanese: "ユニラン",
      chinese: "单卵细胞球",
      french: "Nucléos",
    },
    type: ["Psíquico"],
    base: {
      HP: 45,
      Attack: 30,
      Defense: 40,
      "Sp. Attack": 105,
      "Sp. Defense": 50,
      Speed: 20,
    },
    species: "Cell Pokémon",
    description:
      "Eles expulsam atacantes usando poder psíquico. Eles podem usar telepatia para falar com os outros.",
    evolution: {
      next: [["578", "Level 32"]],
    },
    profile: {
      height: "0.3 m",
      weight: "1 kg",
      egg: ["Amorphous"],
      ability: [
        ["Overcoat", "false"],
        ["Magic Guard", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/577.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/577.png",
      hires: "./Imagens/Pokedex/hires/577.png",
    },
  },
  {
    id: 578,
    name: {
      english: "Duosion",
      japanese: "ダブラン",
      chinese: "双卵细胞球",
      french: "Méios",
    },
    type: ["Psíquico"],
    base: {
      HP: 65,
      Attack: 40,
      Defense: 50,
      "Sp. Attack": 125,
      "Sp. Defense": 60,
      Speed: 30,
    },
    species: "Mitosis Pokémon",
    description:
      "Quando seus dois cérebros divididos pensam os mesmos pensamentos, seu poder psíquico é maximizado.",
    evolution: {
      prev: ["577", "Level 32"],
      next: [["579", "Level 41"]],
    },
    profile: {
      height: "0.6 m",
      weight: "8 kg",
      egg: ["Amorphous"],
      ability: [
        ["Overcoat", "false"],
        ["Magic Guard", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/578.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/578.png",
      hires: "./Imagens/Pokedex/hires/578.png",
    },
  },
  {
    id: 579,
    name: {
      english: "Reuniclus",
      japanese: "ランクルス",
      chinese: "人造细胞卵",
      french: "Symbios",
    },
    type: ["Psíquico"],
    base: {
      HP: 110,
      Attack: 65,
      Defense: 75,
      "Sp. Attack": 125,
      "Sp. Defense": 85,
      Speed: 30,
    },
    species: "Multiplying Pokémon",
    description:
      "Quando Reuniclus apertam as mãos, uma rede se forma entre seus cérebros, aumentando seu poder psíquico.",
    evolution: {
      prev: ["578", "Level 41"],
    },
    profile: {
      height: "1 m",
      weight: "20.1 kg",
      egg: ["Amorphous"],
      ability: [
        ["Overcoat", "false"],
        ["Magic Guard", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/579.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/579.png",
      hires: "./Imagens/Pokedex/hires/579.png",
    },
  },
  {
    id: 580,
    name: {
      english: "Ducklett",
      japanese: "コアルヒー",
      chinese: "鸭宝宝",
      french: "Couaneton",
    },
    type: ["Água", "Voador"],
    base: {
      HP: 62,
      Attack: 44,
      Defense: 50,
      "Sp. Attack": 44,
      "Sp. Defense": 50,
      Speed: 55,
    },
    species: "Água Bird Pokémon",
    description:
      "Eles são melhores em nadar do que voar e comem com prazer sua comida favorita, musgo de turfa, enquanto mergulham debaixo d'água.",
    evolution: {
      next: [["581", "Level 35"]],
    },
    profile: {
      height: "0.5 m",
      weight: "5.5 kg",
      egg: ["Água 1", "Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Big Pecks", "false"],
        ["Hydration", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/580.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/580.png",
      hires: "./Imagens/Pokedex/hires/580.png",
    },
  },
  {
    id: 581,
    name: {
      english: "Swanna",
      japanese: "スワンナ",
      chinese: "舞天鹅",
      french: "Lakmécygne",
    },
    type: ["Água", "Voador"],
    base: {
      HP: 75,
      Attack: 87,
      Defense: 63,
      "Sp. Attack": 87,
      "Sp. Defense": 63,
      Speed: 98,
    },
    species: "White Bird Pokémon",
    description:
      "Swanna começam a dançar ao anoitecer. Aquele que dança no meio é o líder do bando.",
    evolution: {
      prev: ["580", "Level 35"],
    },
    profile: {
      height: "1.3 m",
      weight: "24.2 kg",
      egg: ["Água 1", "Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Big Pecks", "false"],
        ["Hydration", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/581.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/581.png",
      hires: "./Imagens/Pokedex/hires/581.png",
    },
  },
  {
    id: 582,
    name: {
      english: "Vanillite",
      japanese: "バニプッチ",
      chinese: "迷你冰",
      french: "Sorbébé",
    },
    type: ["Gelo"],
    base: {
      HP: 36,
      Attack: 50,
      Defense: 50,
      "Sp. Attack": 65,
      "Sp. Defense": 60,
      Speed: 44,
    },
    species: "Fresh Snow Pokémon",
    description:
      "Quando o sol da manhã atingiu um pingente de gelo, ele desejou não derreter e assim nasceu Vanillite. À noite, ele se enterra na neve para dormir.",
    evolution: {
      next: [["583", "Level 35"]],
    },
    profile: {
      height: "0.4 m",
      weight: "5.7 kg",
      egg: ["Mineral"],
      ability: [
        ["Gelo Body", "false"],
        ["Snow Cloak", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/582.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/582.png",
      hires: "./Imagens/Pokedex/hires/582.png",
    },
  },
  {
    id: 583,
    name: {
      english: "Vanillish",
      japanese: "バニリッチ",
      chinese: "多多冰",
      french: "Sorboul",
    },
    type: ["Gelo"],
    base: {
      HP: 51,
      Attack: 65,
      Defense: 65,
      "Sp. Attack": 80,
      "Sp. Defense": 75,
      Speed: 59,
    },
    species: "Icy Snow Pokémon",
    description:
      "Este Pokémon corajoso sobreviveu à Era do Gelo. É incrivelmente popular em regiões muito quentes.",
    evolution: {
      prev: ["582", "Level 35"],
      next: [["584", "Level 47"]],
    },
    profile: {
      height: "1.1 m",
      weight: "41 kg",
      egg: ["Mineral"],
      ability: [
        ["Gelo Body", "false"],
        ["Snow Cloak", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/583.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/583.png",
      hires: "./Imagens/Pokedex/hires/583.png",
    },
  },
  {
    id: 584,
    name: {
      english: "Vanilluxe",
      japanese: "バイバニラ",
      chinese: "双倍多多冰",
      french: "Sorbouboul",
    },
    type: ["Gelo"],
    base: {
      HP: 71,
      Attack: 95,
      Defense: 85,
      "Sp. Attack": 110,
      "Sp. Defense": 95,
      Speed: 79,
    },
    species: "Snowstorm Pokémon",
    description:
      "Vanilluxe nasce quando dois Vanillish, meio derretidos pela luz do dia, se grudam um no outro e congelam juntos no retorno frio da noite.",
    evolution: {
      prev: ["583", "Level 47"],
    },
    profile: {
      height: "1.3 m",
      weight: "57.5 kg",
      egg: ["Mineral"],
      ability: [
        ["Gelo Body", "false"],
        ["Snow Warning", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/584.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/584.png",
      hires: "./Imagens/Pokedex/hires/584.png",
    },
  },
  {
    id: 585,
    name: {
      english: "Deerling",
      japanese: "シキジカ",
      chinese: "四季鹿",
      french: "Vivaldaim",
    },
    type: ["Normal", "Grama"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 50,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      Speed: 75,
    },
    species: "Season Pokémon",
    description:
      "A mudança das estações muda a cor e o cheiro da pelagem deste Pokémon. As pessoas usam para marcar as estações.",
    evolution: {
      next: [["586", "Level 34"]],
    },
    profile: {
      height: "0.6 m",
      weight: "19.5 kg",
      egg: ["Field"],
      ability: [
        ["Chlorophyll", "false"],
        ["Sap Sipper", "false"],
        ["Serene Grace", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/585.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/585.png",
      hires: "./Imagens/Pokedex/hires/585.png",
    },
  },
  {
    id: 586,
    name: {
      english: "Sawsbuck",
      japanese: "メブキジカ",
      chinese: "萌芽鹿",
      french: "Haydaim",
    },
    type: ["Normal", "Grama"],
    base: {
      HP: 80,
      Attack: 100,
      Defense: 70,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      Speed: 95,
    },
    species: "Season Pokémon",
    description:
      "Eles migram de acordo com as estações, por isso algumas pessoas chamam Sawsbuck de prenúncios da primavera.",
    evolution: {
      prev: ["585", "Level 34"],
    },
    profile: {
      height: "1.9 m",
      weight: "92.5 kg",
      egg: ["Field"],
      ability: [
        ["Chlorophyll", "false"],
        ["Sap Sipper", "false"],
        ["Serene Grace", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/586.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/586.png",
      hires: "./Imagens/Pokedex/hires/586.png",
    },
  },
  {
    id: 587,
    name: {
      english: "Emolga",
      japanese: "エモンガ",
      chinese: "电飞鼠",
      french: "Emolga",
    },
    type: ["Elétrico", "Voador"],
    base: {
      HP: 55,
      Attack: 75,
      Defense: 60,
      "Sp. Attack": 75,
      "Sp. Defense": 60,
      Speed: 103,
    },
    species: "Sky Squirrel Pokémon",
    description:
      "Enquanto voa, ele espalha eletricidade ao redor, por isso os Pokémon pássaro mantêm distância. É por isso que Emolga pode manter toda sua comida para si.",
    evolution: {},
    profile: {
      height: "0.4 m",
      weight: "5 kg",
      egg: ["Field"],
      ability: [
        ["Static", "false"],
        ["Motor Drive", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/587.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/587.png",
      hires: "./Imagens/Pokedex/hires/587.png",
    },
  },
  {
    id: 588,
    name: {
      english: "Karrablast",
      japanese: "カブルモ",
      chinese: "盖盖虫",
      french: "Carabing",
    },
    type: ["Inseto"],
    base: {
      HP: 50,
      Attack: 75,
      Defense: 45,
      "Sp. Attack": 40,
      "Sp. Defense": 45,
      Speed: 60,
    },
    species: "Clamping Pokémon",
    description:
      "Por alguma razão, eles evoluem quando recebem energia elétrica enquanto estão atacando Shelmet.",
    evolution: {
      next: [["589", "Trade with Shelmet"]],
    },
    profile: {
      height: "0.5 m",
      weight: "5.9 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Shed Skin", "false"],
        ["No Guard", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/588.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/588.png",
      hires: "./Imagens/Pokedex/hires/588.png",
    },
  },
  {
    id: 589,
    name: {
      english: "Escavalier",
      japanese: "シュバルゴ",
      chinese: "骑士蜗牛",
      french: "Lançargot",
    },
    type: ["Inseto", "Metal"],
    base: {
      HP: 70,
      Attack: 135,
      Defense: 105,
      "Sp. Attack": 60,
      "Sp. Defense": 105,
      Speed: 20,
    },
    species: "Cavalry Pokémon",
    description:
      "Esses Pokémon evoluem usando a cobertura de concha de um Shelmet. A armadura de aço protege todo o seu corpo.",
    evolution: {
      prev: ["588", "Trade with Shelmet"],
    },
    profile: {
      height: "1 m",
      weight: "33 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Shell Armor", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/589.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/589.png",
      hires: "./Imagens/Pokedex/hires/589.png",
    },
  },
  {
    id: 590,
    name: {
      english: "Foongus",
      japanese: "タマゲタケ",
      chinese: "哎呀球菇",
      french: "Trompignon",
    },
    type: ["Grama", "Venenoso"],
    base: {
      HP: 69,
      Attack: 55,
      Defense: 45,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      Speed: 15,
    },
    species: "Mushroom Pokémon",
    description:
      "Ele atrai Pokémon com seu padrão que parece exatamente com uma Pokébola, depois libera esporos venenosos.",
    evolution: {
      next: [["591", "Level 39"]],
    },
    profile: {
      height: "0.2 m",
      weight: "1 kg",
      egg: ["Grama"],
      ability: [
        ["Effect Spore", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/590.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/590.png",
      hires: "./Imagens/Pokedex/hires/590.png",
    },
  },
  {
    id: 591,
    name: {
      english: "Amoonguss",
      japanese: "モロバレル",
      chinese: "败露球菇",
      french: "Gaulet",
    },
    type: ["Grama", "Venenoso"],
    base: {
      HP: 114,
      Attack: 85,
      Defense: 70,
      "Sp. Attack": 85,
      "Sp. Defense": 80,
      Speed: 30,
    },
    species: "Mushroom Pokémon",
    description:
      "Ele atrai presas dançando e acenando com seus bonés de braço, que se assemelham a Pokébolas, em um movimento oscilante.",
    evolution: {
      prev: ["590", "Level 39"],
    },
    profile: {
      height: "0.6 m",
      weight: "10.5 kg",
      egg: ["Grama"],
      ability: [
        ["Effect Spore", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/591.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/591.png",
      hires: "./Imagens/Pokedex/hires/591.png",
    },
  },
  {
    id: 592,
    name: {
      english: "Frillish",
      japanese: "プルリル",
      chinese: "轻飘飘",
      french: "Viskuse",
    },
    type: ["Água", "Fantasma"],
    base: {
      HP: 55,
      Attack: 40,
      Defense: 50,
      "Sp. Attack": 65,
      "Sp. Defense": 85,
      Speed: 40,
    },
    species: "Floating Pokémon",
    description:
      "Usando os espinhos venenosos invisíveis em seus braços e pernas semelhantes a véus, ele paralisa seus inimigos e faz com que se afoguem.",
    evolution: {
      next: [["593", "Level 40"]],
    },
    profile: {
      height: "1.2 m",
      weight: "33 kg",
      egg: ["Amorphous"],
      ability: [
        ["Água Absorb", "false"],
        ["Cursed Body", "false"],
        ["Damp", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/592.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/592.png",
      hires: "./Imagens/Pokedex/hires/592.png",
    },
  },
  {
    id: 593,
    name: {
      english: "JellGelont",
      japanese: "ブルンゲル",
      chinese: "胖嘟嘟",
      french: "Moyade",
    },
    type: ["Água", "Fantasma"],
    base: {
      HP: 100,
      Attack: 60,
      Defense: 70,
      "Sp. Attack": 85,
      "Sp. Defense": 105,
      Speed: 60,
    },
    species: "Floating Pokémon",
    description:
      "Pescadores têm medo de JellGelont. Diz-se que ele os arrasta para o mar e rouba suas vidas.",
    evolution: {
      prev: ["592", "Level 40"],
    },
    profile: {
      height: "2.2 m",
      weight: "135 kg",
      egg: ["Amorphous"],
      ability: [
        ["Água Absorb", "false"],
        ["Cursed Body", "false"],
        ["Damp", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/593.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/593.png",
      hires: "./Imagens/Pokedex/hires/593.png",
    },
  },
  {
    id: 594,
    name: {
      english: "Alomomola",
      japanese: "ママンボウ",
      chinese: "保姆曼波",
      french: "Mamanbo",
    },
    type: ["Água"],
    base: {
      HP: 165,
      Attack: 75,
      Defense: 80,
      "Sp. Attack": 40,
      "Sp. Defense": 45,
      Speed: 65,
    },
    species: "Caring Pokémon",
    description:
      "A razão pela qual ele ajuda Pokémon em estado enfraquecido é que qualquer Pokémon que venha atrás deles também pode atacar Alomomola.",
    evolution: {},
    profile: {
      height: "1.2 m",
      weight: "31.6 kg",
      egg: ["Água 1", "Água 2"],
      ability: [
        ["Healer", "false"],
        ["Hydration", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/594.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/594.png",
      hires: "./Imagens/Pokedex/hires/594.png",
    },
  },
  {
    id: 595,
    name: {
      english: "Joltik",
      japanese: "バチュル",
      chinese: "电电虫",
      french: "Statitik",
    },
    type: ["Inseto", "Elétrico"],
    base: {
      HP: 50,
      Attack: 47,
      Defense: 50,
      "Sp. Attack": 57,
      "Sp. Defense": 50,
      Speed: 65,
    },
    species: "Attaching Pokémon",
    description:
      "Eles se apegam a Pokémon de grande porte e absorvem eletricidade estática, que armazenam em uma bolsa elétrica.",
    evolution: {
      next: [["596", "Level 36"]],
    },
    profile: {
      height: "0.1 m",
      weight: "0.6 kg",
      egg: ["Inseto"],
      ability: [
        ["Compound Eyes", "false"],
        ["Unnerve", "false"],
        ["Swarm", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/595.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/595.png",
      hires: "./Imagens/Pokedex/hires/595.png",
    },
  },
  {
    id: 596,
    name: {
      english: "Galvantula",
      japanese: "デンチュラ",
      chinese: "电蜘蛛",
      french: "Mygavolt",
    },
    type: ["Inseto", "Elétrico"],
    base: {
      HP: 70,
      Attack: 77,
      Defense: 60,
      "Sp. Attack": 97,
      "Sp. Defense": 60,
      Speed: 108,
    },
    species: "EleSpider Pokémon",
    description:
      "Quando atacados, eles criam uma barreira elétrica cuspindo muitos fios carregados eletricamente.",
    evolution: {
      prev: ["595", "Level 36"],
    },
    profile: {
      height: "0.8 m",
      weight: "14.3 kg",
      egg: ["Inseto"],
      ability: [
        ["Compound Eyes", "false"],
        ["Unnerve", "false"],
        ["Swarm", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/596.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/596.png",
      hires: "./Imagens/Pokedex/hires/596.png",
    },
  },
  {
    id: 597,
    name: {
      english: "Ferroseed",
      japanese: "テッシード",
      chinese: "种子铁球",
      french: "Grindur",
    },
    type: ["Grama", "Metal"],
    base: {
      HP: 44,
      Attack: 50,
      Defense: 91,
      "Sp. Attack": 24,
      "Sp. Defense": 86,
      Speed: 10,
    },
    species: "Thorn Seed Pokémon",
    description:
      "Ele absorve o ferro que encontra na rocha enquanto se agarra ao teto. Ele atira espinhos quando está em perigo.",
    evolution: {
      next: [["598", "Level 40"]],
    },
    profile: {
      height: "0.6 m",
      weight: "18.8 kg",
      egg: ["Grama", "Mineral"],
      ability: [["Iron Barbs", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/597.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/597.png",
      hires: "./Imagens/Pokedex/hires/597.png",
    },
  },
  {
    id: 598,
    name: {
      english: "Ferrothorn",
      japanese: "ナットレイ",
      chinese: "坚果哑铃",
      french: "Noacier",
    },
    type: ["Grama", "Metal"],
    base: {
      HP: 74,
      Attack: 94,
      Defense: 131,
      "Sp. Attack": 54,
      "Sp. Defense": 116,
      Speed: 20,
    },
    species: "Thorn Pod Pokémon",
    description:
      "Eles se apegam aos tetos das cavernas, disparando espinhos de aço em alvos que passam por baixo deles.",
    evolution: {
      prev: ["597", "Level 40"],
    },
    profile: {
      height: "1 m",
      weight: "110 kg",
      egg: ["Grama", "Mineral"],
      ability: [
        ["Iron Barbs", "false"],
        ["Anticipation", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/598.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/598.png",
      hires: "./Imagens/Pokedex/hires/598.png",
    },
  },
  {
    id: 599,
    name: {
      english: "Klink",
      japanese: "ギアル",
      chinese: "齿轮儿",
      french: "Tic",
    },
    type: ["Metal"],
    base: {
      HP: 40,
      Attack: 55,
      Defense: 70,
      "Sp. Attack": 45,
      "Sp. Defense": 60,
      Speed: 30,
    },
    species: "Gear Pokémon",
    description:
      "As duas minengrenagens que se encaixam são predeterminadas. Cada um irá se recuperar de outras minengrenagens sem engrenar.",
    evolution: {
      next: [["600", "Level 38"]],
    },
    profile: {
      height: "0.3 m",
      weight: "21 kg",
      egg: ["Mineral"],
      ability: [
        ["Plus", "false"],
        ["Minus", "false"],
        ["Clear Body", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/599.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/599.png",
      hires: "./Imagens/Pokedex/hires/599.png",
    },
  },
  {
    id: 600,
    name: {
      english: "Klang",
      japanese: "ギギアル",
      chinese: "齿轮组",
      french: "Clic",
    },
    type: ["Metal"],
    base: {
      HP: 60,
      Attack: 80,
      Defense: 95,
      "Sp. Attack": 70,
      "Sp. Defense": 85,
      Speed: 50,
    },
    species: "Gear Pokémon",
    description:
      "Uma minengrenagem e uma grande engrenagem compõem seu corpo. Se a minengrenagem que ele lança em um inimigo não retornar, ele morrerá.",
    evolution: {
      prev: ["599", "Level 38"],
      next: [["601", "Level 49"]],
    },
    profile: {
      height: "0.6 m",
      weight: "51 kg",
      egg: ["Mineral"],
      ability: [
        ["Plus", "false"],
        ["Minus", "false"],
        ["Clear Body", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/600.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/600.png",
      hires: "./Imagens/Pokedex/hires/600.png",
    },
  },
  {
    id: 601,
    name: {
      english: "Klinklang",
      japanese: "ギギギアル",
      chinese: "齿轮怪",
      french: "Cliticlic",
    },
    type: ["Metal"],
    base: {
      HP: 60,
      Attack: 100,
      Defense: 115,
      "Sp. Attack": 70,
      "Sp. Defense": 85,
      Speed: 90,
    },
    species: "Gear Pokémon",
    description:
      "Seu núcleo vermelho funciona como um tanque de energia. Ele dispara a energia carregada através de seus espinhos em uma área.",
    evolution: {
      prev: ["600", "Level 49"],
    },
    profile: {
      height: "0.6 m",
      weight: "81 kg",
      egg: ["Mineral"],
      ability: [
        ["Plus", "false"],
        ["Minus", "false"],
        ["Clear Body", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/601.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/601.png",
      hires: "./Imagens/Pokedex/hires/601.png",
    },
  },
  {
    id: 602,
    name: {
      english: "Tynamo",
      japanese: "シビシラス",
      chinese: "麻麻小鱼",
      french: "Anchwatt",
    },
    type: ["Elétrico"],
    base: {
      HP: 35,
      Attack: 55,
      Defense: 40,
      "Sp. Attack": 45,
      "Sp. Defense": 40,
      Speed: 60,
    },
    species: "EleFish Pokémon",
    description:
      "Um sozinho só pode emitir um fio de eletricidade, por isso um grupo deles se reúne para liberar um poderoso choque elétrico.",
    evolution: {
      next: [["603", "Level 39"]],
    },
    profile: {
      height: "0.2 m",
      weight: "0.3 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/602.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/602.png",
      hires: "./Imagens/Pokedex/hires/602.png",
    },
  },
  {
    id: 603,
    name: {
      english: "Eelektrik",
      japanese: "シビビール",
      chinese: "麻麻鳗",
      french: "Lampéroie",
    },
    type: ["Elétrico"],
    base: {
      HP: 65,
      Attack: 85,
      Defense: 70,
      "Sp. Attack": 75,
      "Sp. Defense": 70,
      Speed: 40,
    },
    species: "EleFish Pokémon",
    description:
      "Esses Pokémon têm um grande apetite. Quando avistam sua presa, atacam e a paralisam com eletricidade.",
    evolution: {
      prev: ["602", "Level 39"],
      next: [["604", "use Thunder Stone"]],
    },
    profile: {
      height: "1.2 m",
      weight: "22 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/603.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/603.png",
      hires: "./Imagens/Pokedex/hires/603.png",
    },
  },
  {
    id: 604,
    name: {
      english: "Eelektross",
      japanese: "シビルドン",
      chinese: "麻麻鳗鱼王",
      french: "Ohmassacre",
    },
    type: ["Elétrico"],
    base: {
      HP: 85,
      Attack: 115,
      Defense: 80,
      "Sp. Attack": 105,
      "Sp. Defense": 80,
      Speed: 50,
    },
    species: "EleFish Pokémon",
    description:
      "Eles saem do oceano usando seus braços. Eles atacarão presas na costa e imediatamente as arrastarão para o oceano.",
    evolution: {
      prev: ["603", "use Thunder Stone"],
    },
    profile: {
      height: "2.1 m",
      weight: "80.5 kg",
      egg: ["Amorphous"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/604.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/604.png",
      hires: "./Imagens/Pokedex/hires/604.png",
    },
  },
  {
    id: 605,
    name: {
      english: "Elgyem",
      japanese: "リグレー",
      chinese: "小灰怪",
      french: "Lewsor",
    },
    type: ["Psíquico"],
    base: {
      HP: 55,
      Attack: 55,
      Defense: 55,
      "Sp. Attack": 85,
      "Sp. Defense": 55,
      Speed: 30,
    },
    species: "Cerebral Pokémon",
    description:
      "Este Pokémon é cercado de mistério. Diz-se que apareceu de um OVNI que caiu do céu há cerca de 50 anos.",
    evolution: {
      next: [["606", "Level 42"]],
    },
    profile: {
      height: "0.5 m",
      weight: "9 kg",
      egg: ["Human-Like"],
      ability: [
        ["Telepathy", "false"],
        ["Synchronize", "false"],
        ["Analytic", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/605.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/605.png",
      hires: "./Imagens/Pokedex/hires/605.png",
    },
  },
  {
    id: 606,
    name: {
      english: "Beheeyem",
      japanese: "オーベム",
      chinese: "大宇怪",
      french: "Neitram",
    },
    type: ["Psíquico"],
    base: {
      HP: 75,
      Attack: 75,
      Defense: 75,
      "Sp. Attack": 125,
      "Sp. Defense": 95,
      Speed: 40,
    },
    species: "Cerebral Pokémon",
    description:
      "Ele tem fortes poderes psíquicos. Usando seus dedos que piscam em três cores diferentes, ele controla seus oponentes e reescreve suas memórias.",
    evolution: {
      prev: ["605", "Level 42"],
    },
    profile: {
      height: "1 m",
      weight: "34.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Telepathy", "false"],
        ["Synchronize", "false"],
        ["Analytic", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/606.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/606.png",
      hires: "./Imagens/Pokedex/hires/606.png",
    },
  },
  {
    id: 607,
    name: {
      english: "Litwick",
      japanese: "ヒトモシ",
      chinese: "烛光灵",
      french: "Funécire",
    },
    type: ["Fantasma", "Fogo"],
    base: {
      HP: 50,
      Attack: 30,
      Defense: 55,
      "Sp. Attack": 65,
      "Sp. Defense": 55,
      Speed: 20,
    },
    species: "Candle Pokémon",
    description:
      "Litwick brilha uma luz que absorve a energia vital das pessoas e dos Pokémon, que se torna o combustível que ele queima.",
    evolution: {
      next: [["608", "Level 41"]],
    },
    profile: {
      height: "0.3 m",
      weight: "3.1 kg",
      egg: ["Amorphous"],
      ability: [
        ["Flash Fogo", "false"],
        ["Flame Body", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/607.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/607.png",
      hires: "./Imagens/Pokedex/hires/607.png",
    },
  },
  {
    id: 608,
    name: {
      english: "Lampent",
      japanese: "ランプラー",
      chinese: "灯火幽灵",
      french: "Mélancolux",
    },
    type: ["Fantasma", "Fogo"],
    base: {
      HP: 60,
      Attack: 40,
      Defense: 60,
      "Sp. Attack": 95,
      "Sp. Defense": 60,
      Speed: 55,
    },
    species: "Lamp Pokémon",
    description:
      "Ele chega perto do momento da morte e rouba o espírito do corpo.",
    evolution: {
      prev: ["607", "Level 41"],
      next: [["609", "use Dusk Stone"]],
    },
    profile: {
      height: "0.6 m",
      weight: "13 kg",
      egg: ["Amorphous"],
      ability: [
        ["Flash Fogo", "false"],
        ["Flame Body", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/608.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/608.png",
      hires: "./Imagens/Pokedex/hires/608.png",
    },
  },
  {
    id: 609,
    name: {
      english: "Chandelure",
      japanese: "シャンデラ",
      chinese: "水晶灯火灵",
      french: "Lugulabre",
    },
    type: ["Fantasma", "Fogo"],
    base: {
      HP: 60,
      Attack: 55,
      Defense: 90,
      "Sp. Attack": 145,
      "Sp. Defense": 90,
      Speed: 80,
    },
    species: "Luring Pokémon",
    description:
      "Os espíritos queimados em sua chama sinistra perdem o caminho e vagam por este mundo para sempre.",
    evolution: {
      prev: ["608", "use Dusk Stone"],
    },
    profile: {
      height: "1 m",
      weight: "34.3 kg",
      egg: ["Amorphous"],
      ability: [
        ["Flash Fogo", "false"],
        ["Flame Body", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/609.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/609.png",
      hires: "./Imagens/Pokedex/hires/609.png",
    },
  },
  {
    id: 610,
    name: {
      english: "Axew",
      japanese: "キバゴ",
      chinese: "牙牙",
      french: "Coupenotte",
    },
    type: ["Dragão"],
    base: {
      HP: 46,
      Attack: 87,
      Defense: 60,
      "Sp. Attack": 30,
      "Sp. Defense": 40,
      Speed: 57,
    },
    species: "Tusk Pokémon",
    description:
      "Eles marcam seu território deixando cortes em árvores com suas presas. Se uma presa quebrar, uma nova cresce rapidamente.",
    evolution: {
      next: [["611", "Level 38"]],
    },
    profile: {
      height: "0.6 m",
      weight: "18 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Rivalry", "false"],
        ["Mold Breaker", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/610.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/610.png",
      hires: "./Imagens/Pokedex/hires/610.png",
    },
  },
  {
    id: 611,
    name: {
      english: "Fraxure",
      japanese: "オノンド",
      chinese: "斧牙龙",
      french: "Incisache",
    },
    type: ["Dragão"],
    base: {
      HP: 66,
      Attack: 117,
      Defense: 70,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      Speed: 67,
    },
    species: "Axe Jaw Pokémon",
    description:
      "Uma presa quebrada não voltará a crescer, por isso afia diligentemente suas presas nas pedras do rio após o fim de uma batalha.",
    evolution: {
      prev: ["610", "Level 38"],
      next: [["612", "Level 48"]],
    },
    profile: {
      height: "1 m",
      weight: "36 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Rivalry", "false"],
        ["Mold Breaker", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/611.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/611.png",
      hires: "./Imagens/Pokedex/hires/611.png",
    },
  },
  {
    id: 612,
    name: {
      english: "Haxorus",
      japanese: "オノノクス",
      chinese: "双斧战龙",
      french: "Tranchodon",
    },
    type: ["Dragão"],
    base: {
      HP: 76,
      Attack: 147,
      Defense: 90,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      Speed: 97,
    },
    species: "Axe Jaw Pokémon",
    description:
      "Suas presas resistentes permanecerão afiadas mesmo se usadas para cortar vigas de aço. Esses Pokémon são cobertos por uma armadura dura.",
    evolution: {
      prev: ["611", "Level 48"],
    },
    profile: {
      height: "1.8 m",
      weight: "105.5 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Rivalry", "false"],
        ["Mold Breaker", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/612.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/612.png",
      hires: "./Imagens/Pokedex/hires/612.png",
    },
  },
  {
    id: 613,
    name: {
      english: "Cubchoo",
      japanese: "クマシュン",
      chinese: "喷嚏熊",
      french: "Polarhume",
    },
    type: ["Gelo"],
    base: {
      HP: 55,
      Attack: 70,
      Defense: 40,
      "Sp. Attack": 60,
      "Sp. Defense": 40,
      Speed: 40,
    },
    species: "Chill Pokémon",
    description:
      "Seu muco é um barômetro de saúde. Quando saudável, seu muco é pegajoso e o poder de seus movimentos de gelo aumenta.",
    evolution: {
      next: [["614", "Level 37"]],
    },
    profile: {
      height: "0.5 m",
      weight: "8.5 kg",
      egg: ["Field"],
      ability: [
        ["Snow Cloak", "false"],
        ["Slush Rush", "false"],
        ["Rattled", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/613.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/613.png",
      hires: "./Imagens/Pokedex/hires/613.png",
    },
  },
  {
    id: 614,
    name: {
      english: "Beartic",
      japanese: "ツンベアー",
      chinese: "冻原熊",
      french: "Polagriffe",
    },
    type: ["Gelo"],
    base: {
      HP: 95,
      Attack: 130,
      Defense: 80,
      "Sp. Attack": 70,
      "Sp. Defense": 80,
      Speed: 50,
    },
    species: "Freezing Pokémon",
    description:
      "Ele congela sua respiração para criar presas e garras de gelo para lutar. Áreas frias do norte são seu habitat.",
    evolution: {
      prev: ["613", "Level 37"],
    },
    profile: {
      height: "2.6 m",
      weight: "260 kg",
      egg: ["Field"],
      ability: [
        ["Snow Cloak", "false"],
        ["Slush Rush", "false"],
        ["Swift Swim", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/614.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/614.png",
      hires: "./Imagens/Pokedex/hires/614.png",
    },
  },
  {
    id: 615,
    name: {
      english: "Cryogonal",
      japanese: "フリージオ",
      chinese: "几何雪花",
      french: "Hexagel",
    },
    type: ["Gelo"],
    base: {
      HP: 80,
      Attack: 50,
      Defense: 50,
      "Sp. Attack": 95,
      "Sp. Defense": 135,
      Speed: 105,
    },
    species: "Crystallizing Pokémon",
    description:
      "Eles são compostos de cristais de gelo. Capturam presas com correntes de gelo, congelando a presa a -148 graus Fahrenheit.",
    evolution: {},
    profile: {
      height: "1.1 m",
      weight: "148 kg",
      egg: ["Mineral"],
      ability: [["Levitate", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/615.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/615.png",
      hires: "./Imagens/Pokedex/hires/615.png",
    },
  },
  {
    id: 616,
    name: {
      english: "Shelmet",
      japanese: "チョボマキ",
      chinese: "小嘴蜗",
      french: "Escargaume",
    },
    type: ["Inseto"],
    base: {
      HP: 50,
      Attack: 40,
      Defense: 85,
      "Sp. Attack": 40,
      "Sp. Defense": 65,
      Speed: 25,
    },
    species: "Snail Pokémon",
    description:
      "Ele evolui quando banhado em uma energia semelhante à elétrica junto com Karrablast. A razão ainda é desconhecida.",
    evolution: {
      next: [["617", "Trade with Karrablast"]],
    },
    profile: {
      height: "0.4 m",
      weight: "7.7 kg",
      egg: ["Inseto"],
      ability: [
        ["Hydration", "false"],
        ["Shell Armor", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/616.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/616.png",
      hires: "./Imagens/Pokedex/hires/616.png",
    },
  },
  {
    id: 617,
    name: {
      english: "Accelgor",
      japanese: "アギルダー",
      chinese: "敏捷虫",
      french: "Limaspeed",
    },
    type: ["Inseto"],
    base: {
      HP: 80,
      Attack: 70,
      Defense: 40,
      "Sp. Attack": 100,
      "Sp. Defense": 60,
      Speed: 145,
    },
    species: "Shell Out Pokémon",
    description:
      "Quando seu corpo seca, ele enfraquece. Então, para evitar a desidratação, ele se envolve em muitas camadas de membrana fina.",
    evolution: {
      prev: ["616", "Trade with Karrablast"],
    },
    profile: {
      height: "0.8 m",
      weight: "25.3 kg",
      egg: ["Inseto"],
      ability: [
        ["Hydration", "false"],
        ["Sticky Hold", "false"],
        ["Unburden", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/617.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/617.png",
      hires: "./Imagens/Pokedex/hires/617.png",
    },
  },
  {
    id: 618,
    name: {
      english: "Stunfisk",
      japanese: "マッギョ",
      chinese: "泥巴鱼",
      french: "Limonde",
    },
    type: ["Terra", "Elétrico"],
    base: {
      HP: 109,
      Attack: 66,
      Defense: 84,
      "Sp. Attack": 81,
      "Sp. Defense": 99,
      Speed: 32,
    },
    species: "Trap Pokémon",
    description:
      "Ele se esconde na lama da costa. Então ele espera. Quando a presa o toca, ele dá uma descarga de eletricidade.",
    evolution: {},
    profile: {
      height: "0.7 m",
      weight: "11 kg",
      egg: ["Água 1", "Amorphous"],
      ability: [
        ["Static", "false"],
        ["Limber", "false"],
        ["Sand Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/618.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/618.png",
      hires: "./Imagens/Pokedex/hires/618.png",
    },
  },
  {
    id: 619,
    name: {
      english: "Mienfoo",
      japanese: "コジョフー",
      chinese: "功夫鼬",
      french: "Kungfouine",
    },
    type: ["Lutador"],
    base: {
      HP: 45,
      Attack: 85,
      Defense: 50,
      "Sp. Attack": 55,
      "Sp. Defense": 50,
      Speed: 65,
    },
    species: "Martial Arts Pokémon",
    description:
      "Eles se isolam nas montanhas e se dedicam ao treinamento. A forma de seus chutes e golpes difere de bando para bando.",
    evolution: {
      next: [["620", "Level 50"]],
    },
    profile: {
      height: "0.9 m",
      weight: "20 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Inner Focus", "false"],
        ["Regenerator", "false"],
        ["Reckless", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/619.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/619.png",
      hires: "./Imagens/Pokedex/hires/619.png",
    },
  },
  {
    id: 620,
    name: {
      english: "Mienshao",
      japanese: "コジョンド",
      chinese: "师父鼬",
      french: "Shaofouine",
    },
    type: ["Lutador"],
    base: {
      HP: 65,
      Attack: 125,
      Defense: 60,
      "Sp. Attack": 95,
      "Sp. Defense": 60,
      Speed: 105,
    },
    species: "Martial Arts Pokémon",
    description:
      "Quando Mienshao deixa escapar um uivo bizarro, você está em perigo. Uma enxurrada de chutes e golpes rápidos demais para ver está prestes a ser desfechada!",
    evolution: {
      prev: ["619", "Level 50"],
    },
    profile: {
      height: "1.4 m",
      weight: "35.5 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Inner Focus", "false"],
        ["Regenerator", "false"],
        ["Reckless", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/620.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/620.png",
      hires: "./Imagens/Pokedex/hires/620.png",
    },
  },
  {
    id: 621,
    name: {
      english: "Druddigon",
      japanese: "クリムガン",
      chinese: "赤面龙",
      french: "Drakkarmin",
    },
    type: ["Dragão"],
    base: {
      HP: 77,
      Attack: 120,
      Defense: 90,
      "Sp. Attack": 60,
      "Sp. Defense": 90,
      Speed: 48,
    },
    species: "Cave Pokémon",
    description:
      "Ele se infiltra em túneis que Pokémon como Diglett e Dugtrio cavaram e espera silenciosamente que a presa passe por eles.",
    evolution: {},
    profile: {
      height: "1.6 m",
      weight: "139 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Rough Skin", "false"],
        ["Sheer Force", "false"],
        ["Mold Breaker", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/621.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/621.png",
      hires: "./Imagens/Pokedex/hires/621.png",
    },
  },
  {
    id: 622,
    name: {
      english: "Golett",
      japanese: "ゴビット",
      chinese: "泥偶小人",
      french: "Gringolem",
    },
    type: ["Terra", "Fantasma"],
    base: {
      HP: 59,
      Attack: 74,
      Defense: 50,
      "Sp. Attack": 35,
      "Sp. Defense": 50,
      Speed: 35,
    },
    species: "Automaton Pokémon",
    description:
      "Embora os antigos aparentemente o tenham construído trabalhando com argila, a fonte de sua energia é incerta.",
    evolution: {
      next: [["623", "Level 43"]],
    },
    profile: {
      height: "1 m",
      weight: "92 kg",
      egg: ["Mineral"],
      ability: [
        ["Iron Fist", "false"],
        ["Klutz", "false"],
        ["No Guard", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/622.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/622.png",
      hires: "./Imagens/Pokedex/hires/622.png",
    },
  },
  {
    id: 623,
    name: {
      english: "Golurk",
      japanese: "ゴルーグ",
      chinese: "泥偶巨人",
      french: "Golemastoc",
    },
    type: ["Terra", "Fantasma"],
    base: {
      HP: 89,
      Attack: 124,
      Defense: 80,
      "Sp. Attack": 55,
      "Sp. Defense": 80,
      Speed: 55,
    },
    species: "Automaton Pokémon",
    description:
      "Quando o selo em seu peito é removido, ele fica furioso indiscriminadamente, transformando toda a cidade ao seu redor em uma montanha de entulho.",
    evolution: {
      prev: ["622", "Level 43"],
    },
    profile: {
      height: "2.8 m",
      weight: "330 kg",
      egg: ["Mineral"],
      ability: [
        ["Iron Fist", "false"],
        ["Klutz", "false"],
        ["No Guard", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/623.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/623.png",
      hires: "./Imagens/Pokedex/hires/623.png",
    },
  },
  {
    id: 624,
    name: {
      english: "Pawniard",
      japanese: "コマタナ",
      chinese: "驹刀小兵",
      french: "Scalpion",
    },
    type: ["Sombrio", "Metal"],
    base: {
      HP: 45,
      Attack: 85,
      Defense: 70,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      Speed: 60,
    },
    species: "Sharp Blade Pokémon",
    description:
      "Ele segue as ordens de Bisharp até o fim quando ataca inimigos. Após cortar um oponente, Pawniard choca suas duas lâminas juntas.",
    evolution: {
      next: [["625", "Level 52"]],
    },
    profile: {
      height: "0.5 m",
      weight: "10.2 kg",
      egg: ["Human-Like"],
      ability: [
        ["Defiant", "false"],
        ["Inner Focus", "false"],
        ["Pressure", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/624.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/624.png",
      hires: "./Imagens/Pokedex/hires/624.png",
    },
  },
  {
    id: 625,
    name: {
      english: "Bisharp",
      japanese: "キリキザン",
      chinese: "劈斩司令",
      french: "Scalproie",
    },
    type: ["Sombrio", "Metal"],
    base: {
      HP: 65,
      Attack: 125,
      Defense: 100,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      Speed: 70,
    },
    species: "Sword Blade Pokémon",
    description:
      "Ele lidera um grupo de Pawniard. Bisharp nem muda sua expressão quando dá o golpe final em um oponente.",
    evolution: {
      prev: ["624", "Level 52"],
    },
    profile: {
      height: "1.6 m",
      weight: "70 kg",
      egg: ["Human-Like"],
      ability: [
        ["Defiant", "false"],
        ["Inner Focus", "false"],
        ["Pressure", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/625.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/625.png",
      hires: "./Imagens/Pokedex/hires/625.png",
    },
  },
  {
    id: 626,
    name: {
      english: "Bouffalant",
      japanese: "バッフロン",
      chinese: "爆炸头水牛",
      french: "Frison",
    },
    type: ["Normal"],
    base: {
      HP: 95,
      Attack: 110,
      Defense: 95,
      "Sp. Attack": 40,
      "Sp. Defense": 95,
      Speed: 55,
    },
    species: "Bash Buffalo Pokémon",
    description:
      "Sua pelagem fofa absorve danos, mesmo que eles golpeiem inimigos com uma cabeçada feroz.",
    evolution: {},
    profile: {
      height: "1.6 m",
      weight: "94.6 kg",
      egg: ["Field"],
      ability: [
        ["Reckless", "false"],
        ["Sap Sipper", "false"],
        ["Soundproof", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/626.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/626.png",
      hires: "./Imagens/Pokedex/hires/626.png",
    },
  },
  {
    id: 627,
    name: {
      english: "Rufflet",
      japanese: "ワシボン",
      chinese: "毛头小鹰",
      french: "Furaiglon",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 70,
      Attack: 83,
      Defense: 50,
      "Sp. Attack": 37,
      "Sp. Defense": 50,
      Speed: 60,
    },
    species: "Eaglet Pokémon",
    description:
      "Conhecido como um guerreiro nato, logo após seu nascimento, ele desafiará seu pai para uma luta para ganhar sua aceitação.",
    evolution: {
      next: [["628", "Level 54"]],
    },
    profile: {
      height: "0.5 m",
      weight: "10.5 kg",
      egg: ["Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Sheer Force", "false"],
        ["Hustle", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/627.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/627.png",
      hires: "./Imagens/Pokedex/hires/627.png",
    },
  },
  {
    id: 628,
    name: {
      english: "Braviary",
      japanese: "ウォーグル",
      chinese: "勇士雄鹰",
      french: "Gueriaigle",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 100,
      Attack: 123,
      Defense: 75,
      "Sp. Attack": 57,
      "Sp. Defense": 75,
      Speed: 80,
    },
    species: "Valiant Pokémon",
    description:
      'Conhecido como "o herói dos céus", este Pokémon é tão orgulhoso e tão corajoso que nunca recuará, mesmo quando estiver ferido.',
    evolution: {
      prev: ["627", "Level 54"],
    },
    profile: {
      height: "1.5 m",
      weight: "41 kg",
      egg: ["Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Sheer Force", "false"],
        ["Defiant", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/628.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/628.png",
      hires: "./Imagens/Pokedex/hires/628.png",
    },
  },
  {
    id: 629,
    name: {
      english: "Vullaby",
      japanese: "バルチャイ",
      chinese: "秃鹰丫头",
      french: "Vostourno",
    },
    type: ["Sombrio", "Voador"],
    base: {
      HP: 70,
      Attack: 55,
      Defense: 75,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      Speed: 60,
    },
    species: "Diapered Pokémon",
    description:
      "Seu apetite saudável leva a surtos de crescimento visíveis. Ele costuma ter que substituir os ossos que usa à medida que seu tamanho aumenta.",
    evolution: {
      next: [["630", "Level 54"]],
    },
    profile: {
      height: "0.5 m",
      weight: "9 kg",
      egg: ["Voador"],
      ability: [
        ["Big Pecks", "false"],
        ["Overcoat", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/629.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/629.png",
      hires: "./Imagens/Pokedex/hires/629.png",
    },
  },
  {
    id: 630,
    name: {
      english: "Mandibuzz",
      japanese: "バルジーナ",
      chinese: "秃鹰娜",
      french: "VaututrGelo",
    },
    type: ["Sombrio", "Voador"],
    base: {
      HP: 110,
      Attack: 65,
      Defense: 105,
      "Sp. Attack": 55,
      "Sp. Defense": 95,
      Speed: 80,
    },
    species: "Bone Vulture Pokémon",
    description:
      "Ele está sempre procurando comida para Vullaby. Quando encontra um Pokémon fraco, Mandibuzz o arremessa direto para seu ninho.",
    evolution: {
      prev: ["629", "Level 54"],
    },
    profile: {
      height: "1.2 m",
      weight: "39.5 kg",
      egg: ["Voador"],
      ability: [
        ["Big Pecks", "false"],
        ["Overcoat", "false"],
        ["Weak Armor", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/630.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/630.png",
      hires: "./Imagens/Pokedex/hires/630.png",
    },
  },
  {
    id: 631,
    name: {
      english: "Heatmor",
      japanese: "クイタラン",
      chinese: "熔蚁兽",
      french: "Aflamanoir",
    },
    type: ["Fogo"],
    base: {
      HP: 85,
      Attack: 97,
      Defense: 66,
      "Sp. Attack": 105,
      "Sp. Defense": 66,
      Speed: 65,
    },
    species: "Anteater Pokémon",
    description:
      "Ele aspira ar através de sua cauda, transforma em fogo e usa como língua. Ele derrete Durant e os come.",
    evolution: {},
    profile: {
      height: "1.4 m",
      weight: "58 kg",
      egg: ["Field"],
      ability: [
        ["Gluttony", "false"],
        ["Flash Fogo", "false"],
        ["White Smoke", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/631.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/631.png",
      hires: "./Imagens/Pokedex/hires/631.png",
    },
  },
  {
    id: 632,
    name: {
      english: "Durant",
      japanese: "アイアント",
      chinese: "铁蚁",
      french: "Fermite",
    },
    type: ["Inseto", "Metal"],
    base: {
      HP: 58,
      Attack: 109,
      Defense: 112,
      "Sp. Attack": 48,
      "Sp. Defense": 48,
      Speed: 109,
    },
    species: "Iron Ant Pokémon",
    description:
      "Eles atacam em grupos, cobrindo-se com armadura de aço para se proteger de Heatmor.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "33 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", "false"],
        ["Hustle", "false"],
        ["Truant", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/632.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/632.png",
      hires: "./Imagens/Pokedex/hires/632.png",
    },
  },
  {
    id: 633,
    name: {
      english: "Deino",
      japanese: "モノズ",
      chinese: "单首龙",
      french: "Solochi",
    },
    type: ["Sombrio", "Dragão"],
    base: {
      HP: 52,
      Attack: 65,
      Defense: 50,
      "Sp. Attack": 45,
      "Sp. Defense": 50,
      Speed: 38,
    },
    species: "Irate Pokémon",
    description:
      "Sem visão, ele não está ciente de seu ambiente, por isso bate em coisas e come qualquer coisa que se mova.",
    evolution: {
      next: [["634", "Level 50"]],
    },
    profile: {
      height: "0.8 m",
      weight: "17.3 kg",
      egg: ["Dragão"],
      ability: [["Hustle", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/633.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/633.png",
      hires: "./Imagens/Pokedex/hires/633.png",
    },
  },
  {
    id: 634,
    name: {
      english: "Zweilous",
      japanese: "ジヘッド",
      chinese: "双首暴龙",
      french: "Diamat",
    },
    type: ["Sombrio", "Dragão"],
    base: {
      HP: 72,
      Attack: 85,
      Defense: 70,
      "Sp. Attack": 65,
      "Sp. Defense": 70,
      Speed: 58,
    },
    species: "Hostile Pokémon",
    description:
      "Depois de comer toda a comida em seu território, ele se muda para outra área. Suas duas cabeças não se dão bem.",
    evolution: {
      prev: ["633", "Level 50"],
      next: [["635", "Level 64"]],
    },
    profile: {
      height: "1.4 m",
      weight: "50 kg",
      egg: ["Dragão"],
      ability: [["Hustle", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/634.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/634.png",
      hires: "./Imagens/Pokedex/hires/634.png",
    },
  },
  {
    id: 635,
    name: {
      english: "Hydreigon",
      japanese: "サザンドラ",
      chinese: "三首恶龙",
      french: "Trioxhydre",
    },
    type: ["Sombrio", "Dragão"],
    base: {
      HP: 92,
      Attack: 105,
      Defense: 90,
      "Sp. Attack": 125,
      "Sp. Defense": 90,
      Speed: 98,
    },
    species: "Brutal Pokémon",
    description:
      "Ele responde ao movimento atacando. Este Pokémon assustador de três cabeças devora tudo em seu caminho!",
    evolution: {
      prev: ["634", "Level 64"],
    },
    profile: {
      height: "1.8 m",
      weight: "160 kg",
      egg: ["Dragão"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/635.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/635.png",
      hires: "./Imagens/Pokedex/hires/635.png",
    },
  },
  {
    id: 636,
    name: {
      english: "Larvesta",
      japanese: "メラルバ",
      chinese: "燃烧虫",
      french: "Pyronille",
    },
    type: ["Inseto", "Fogo"],
    base: {
      HP: 55,
      Attack: 85,
      Defense: 55,
      "Sp. Attack": 50,
      "Sp. Defense": 55,
      Speed: 60,
    },
    species: "Torch Pokémon",
    description:
      "Ele se protege com fogo. Há muito tempo, as pessoas acreditavam que Larvesta tinha um ninho no sol.",
    evolution: {
      next: [["637", "Level 59"]],
    },
    profile: {
      height: "1.1 m",
      weight: "28.8 kg",
      egg: ["Inseto"],
      ability: [
        ["Flame Body", "false"],
        ["Swarm", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/636.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/636.png",
      hires: "./Imagens/Pokedex/hires/636.png",
    },
  },
  {
    id: 637,
    name: {
      english: "Volcarona",
      japanese: "ウルガモス",
      chinese: "火神蛾",
      french: "Pyrax",
    },
    type: ["Inseto", "Fogo"],
    base: {
      HP: 85,
      Attack: 60,
      Defense: 65,
      "Sp. Attack": 135,
      "Sp. Defense": 105,
      Speed: 100,
    },
    species: "Sun Pokémon",
    description:
      "De acordo com lendas, ele foi chocado de um casulo flamejante para salvar pessoas e Pokémon que estavam sofrendo com o frio.",
    evolution: {
      prev: ["636", "Level 59"],
    },
    profile: {
      height: "1.6 m",
      weight: "46 kg",
      egg: ["Inseto"],
      ability: [
        ["Flame Body", "false"],
        ["Swarm", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/637.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/637.png",
      hires: "./Imagens/Pokedex/hires/637.png",
    },
  },
  {
    id: 638,
    name: {
      english: "Cobalion",
      japanese: "コバルオン",
      chinese: "勾帕路翁",
      french: "Cobaltium",
    },
    type: ["Metal", "Lutador"],
    base: {
      HP: 91,
      Attack: 90,
      Defense: 129,
      "Sp. Attack": 90,
      "Sp. Defense": 72,
      Speed: 108,
    },
    species: "Iron Will Pokémon",
    description:
      "Ele tem um corpo e um coração de aço. Ele trabalhou com seus aliados para punir as pessoas quando machucavam Pokémon.",
    evolution: {},
    profile: {
      height: "2.1 m",
      weight: "250 kg",
      egg: ["Undiscovered"],
      ability: [["Justified", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/638.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/638.png",
      hires: "./Imagens/Pokedex/hires/638.png",
    },
  },
  {
    id: 639,
    name: {
      english: "Terrakion",
      japanese: "テラキオン",
      chinese: "代拉基翁",
      french: "Terrakium",
    },
    type: ["Rocha", "Lutador"],
    base: {
      HP: 91,
      Attack: 129,
      Defense: 90,
      "Sp. Attack": 72,
      "Sp. Defense": 90,
      Speed: 108,
    },
    species: "Cavern Pokémon",
    description:
      "Falado em lenda, este Pokémon usou seu poder fenomenal para destruir um castelo em seu esforço para proteger Pokémon.",
    evolution: {},
    profile: {
      height: "1.9 m",
      weight: "260 kg",
      egg: ["Undiscovered"],
      ability: [["Justified", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/639.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/639.png",
      hires: "./Imagens/Pokedex/hires/639.png",
    },
  },
  {
    id: 640,
    name: {
      english: "Virizion",
      japanese: "ビリジオン",
      chinese: "毕力吉翁",
      french: "Viridium",
    },
    type: ["Grama", "Lutador"],
    base: {
      HP: 91,
      Attack: 90,
      Defense: 72,
      "Sp. Attack": 90,
      "Sp. Defense": 129,
      Speed: 108,
    },
    species: "Gramaland Pokémon",
    description:
      "Lendas dizem que este Pokémon confundiu oponentes com seus movimentos rápidos.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "200 kg",
      egg: ["Undiscovered"],
      ability: [["Justified", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/640.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/640.png",
      hires: "./Imagens/Pokedex/hires/640.png",
    },
  },
  {
    id: 641,
    name: {
      english: "Tornadus",
      japanese: "トルネロス",
      chinese: "龙卷云",
      french: "Boréas",
    },
    type: ["Voador"],
    base: {
      HP: 79,
      Attack: 115,
      Defense: 70,
      "Sp. Attack": 125,
      "Sp. Defense": 80,
      Speed: 111,
    },
    species: "Cyclone Pokémon",
    description:
      "Tornadus expele energia massiva de sua cauda, causando tempestades severas. Seu poder é grande o suficiente para derrubar casas.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "63 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Prankster", "false"],
        ["Defiant", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/641.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/641.png",
      hires: "./Imagens/Pokedex/hires/641.png",
    },
  },
  {
    id: 642,
    name: {
      english: "Thundurus",
      japanese: "ボルトロス",
      chinese: "雷电云",
      french: "Fulguris",
    },
    type: ["Elétrico", "Voador"],
    base: {
      HP: 79,
      Attack: 115,
      Defense: 70,
      "Sp. Attack": 125,
      "Sp. Defense": 80,
      Speed: 111,
    },
    species: "Bolt Strike Pokémon",
    description:
      "Enquanto voa, ele atira raios por todo o lugar e causa incêndios florestais. Portanto, é desgostado.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "61 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Prankster", "false"],
        ["Defiant", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/642.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/642.png",
      hires: "./Imagens/Pokedex/hires/642.png",
    },
  },
  {
    id: 643,
    name: {
      english: "Reshiram",
      japanese: "レシラム",
      chinese: "莱希拉姆",
      french: "Reshiram",
    },
    type: ["Dragão", "Fogo"],
    base: {
      HP: 100,
      Attack: 120,
      Defense: 100,
      "Sp. Attack": 150,
      "Sp. Defense": 120,
      Speed: 90,
    },
    species: "Vast White Pokémon",
    description:
      "Quando a cauda de Reshiram brilha, a energia térmica move a atmosfera e muda o clima do mundo.",
    evolution: {},
    profile: {
      height: "3.2 m",
      weight: "330 kg",
      egg: ["Undiscovered"],
      ability: [["Turboblaze", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/643.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/643.png",
      hires: "./Imagens/Pokedex/hires/643.png",
    },
  },
  {
    id: 644,
    name: {
      english: "Zekrom",
      japanese: "ゼクロム",
      chinese: "捷克罗姆",
      french: "Zekrom",
    },
    type: ["Dragão", "Elétrico"],
    base: {
      HP: 100,
      Attack: 150,
      Defense: 120,
      "Sp. Attack": 120,
      "Sp. Defense": 100,
      Speed: 90,
    },
    species: "Deep Black Pokémon",
    description:
      "Ocultando-se em nuvens de raios, ele voa por toda a região de Unova. Ele cria eletricidade em sua cauda.",
    evolution: {},
    profile: {
      height: "2.9 m",
      weight: "345 kg",
      egg: ["Undiscovered"],
      ability: [["Teravolt", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/644.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/644.png",
      hires: "./Imagens/Pokedex/hires/644.png",
    },
  },
  {
    id: 645,
    name: {
      english: "Landorus",
      japanese: "ランドロス",
      chinese: "土地云",
      french: "Démétéros",
    },
    type: ["Terra", "Voador"],
    base: {
      HP: 89,
      Attack: 125,
      Defense: 90,
      "Sp. Attack": 115,
      "Sp. Defense": 80,
      Speed: 101,
    },
    species: "Abundance Pokémon",
    description:
      "Das forças do raio e do vento, ele cria energia para dar nutrientes ao solo e tornar a terra abundante.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "68 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Sand Force", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "100:0",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/645.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/645.png",
      hires: "./Imagens/Pokedex/hires/645.png",
    },
  },
  {
    id: 646,
    name: {
      english: "Kyurem",
      japanese: "キュレム",
      chinese: "酋雷姆",
      french: "Kyurem",
    },
    type: ["Dragão", "Gelo"],
    base: {
      HP: 125,
      Attack: 130,
      Defense: 90,
      "Sp. Attack": 130,
      "Sp. Defense": 90,
      Speed: 95,
    },
    species: "Boundary Pokémon",
    description:
      "Ele gera uma energia poderosa e congelante dentro de si, mas seu corpo ficou congelado quando a energia vazou.",
    evolution: {},
    profile: {
      height: "3 m",
      weight: "325 kg",
      egg: ["Undiscovered"],
      ability: [["Pressure", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/646.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/646.png",
      hires: "./Imagens/Pokedex/hires/646.png",
    },
  },
  {
    id: 647,
    name: {
      english: "Keldeo",
      japanese: "ケルディオ",
      chinese: "凯路迪欧",
      french: "Keldeo",
    },
    type: ["Água", "Lutador"],
    base: {
      HP: 91,
      Attack: 72,
      Defense: 90,
      "Sp. Attack": 129,
      "Sp. Defense": 90,
      Speed: 108,
    },
    species: "Colt Pokémon",
    description:
      "Quando é resoluto, seu corpo se enche de poder e ele fica mais rápido. Seus saltos são então rápidos demais para seguir.",
    evolution: {},
    profile: {
      height: "1.4 m",
      weight: "48.5 kg",
      egg: ["Undiscovered"],
      ability: [["Justified", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/647.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/647.png",
      hires: "./Imagens/Pokedex/hires/647.png",
    },
  },
  {
    id: 648,
    name: {
      english: "Meloetta",
      japanese: "メロエッタ",
      chinese: "美洛耶塔",
      french: "Meloetta",
    },
    type: ["Normal", "Psíquico"],
    base: {
      HP: 100,
      Attack: 77,
      Defense: 77,
      "Sp. Attack": 128,
      "Sp. Defense": 128,
      Speed: 90,
    },
    species: "Melody Pokémon",
    description:
      "Suas melodias são cantadas com um método de vocalização especial que pode controlar os sentimentos daqueles que ouvem.",
    evolution: {},
    profile: {
      height: "0.6 m",
      weight: "6.5 kg",
      egg: ["Undiscovered"],
      ability: [["Serene Grace", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/648.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/648.png",
      hires: "./Imagens/Pokedex/hires/648.png",
    },
  },
  {
    id: 649,
    name: {
      english: "Genesect",
      japanese: "ゲノセクト",
      chinese: "盖诺赛克特",
      french: "Genesect",
    },
    type: ["Inseto", "Metal"],
    base: {
      HP: 71,
      Attack: 120,
      Defense: 95,
      "Sp. Attack": 120,
      "Sp. Defense": 95,
      Speed: 99,
    },
    species: "Paleozoic Pokémon",
    description:
      "Este Pokémon existia há 300 milhões de anos. A Equipe Plasma o alterou e anexou um canhão às suas costas.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "82.5 kg",
      egg: ["Undiscovered"],
      ability: [["Download", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/649.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/649.png",
      hires: "./Imagens/Pokedex/hires/649.png",
    },
  },
  {
    id: 650,
    name: {
      english: "Chespin",
      japanese: "ハリマロン",
      chinese: "哈力栗",
      french: "Marisson",
    },
    type: ["Grama"],
    base: {
      HP: 56,
      Attack: 61,
      Defense: 65,
      "Sp. Attack": 48,
      "Sp. Defense": 45,
      Speed: 38,
    },
    species: "Spiny Nut Pokémon",
    description:
      "Uma concha de madeira tão espessa cobre sua cabeça e costas que até mesmo um golpe direto de um caminhão não o afetaria.",
    evolution: {
      next: [["651", "Level 16"]],
    },
    profile: {
      height: "0.4 m",
      weight: "9 kg",
      egg: ["Field"],
      ability: [
        ["Overgrow", "false"],
        ["Bulletproof", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/650.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/650.png",
      hires: "./Imagens/Pokedex/hires/650.png",
    },
  },
  {
    id: 651,
    name: {
      english: "Quilladin",
      japanese: "ハリボーグ",
      chinese: "胖胖哈力",
      french: "Boguérisse",
    },
    type: ["Grama"],
    base: {
      HP: 61,
      Attack: 78,
      Defense: 95,
      "Sp. Attack": 56,
      "Sp. Defense": 58,
      Speed: 57,
    },
    species: "Spiny Armor Pokémon",
    description:
      "Eles fortalecem seus corpos inferiores correndo um no outro. Eles são muito gentis e não começam brigas.",
    evolution: {
      prev: ["650", "Level 16"],
      next: [["652", "Level 36"]],
    },
    profile: {
      height: "0.7 m",
      weight: "29 kg",
      egg: ["Field"],
      ability: [
        ["Overgrow", "false"],
        ["Bulletproof", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/651.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/651.png",
      hires: "./Imagens/Pokedex/hires/651.png",
    },
  },
  {
    id: 652,
    name: {
      english: "Chesnaught",
      japanese: "ブリガロン",
      chinese: "布里卡隆",
      french: "Blindépique",
    },
    type: ["Grama", "Lutador"],
    base: {
      HP: 88,
      Attack: 107,
      Defense: 122,
      "Sp. Attack": 74,
      "Sp. Defense": 75,
      Speed: 64,
    },
    species: "Spiny Armor Pokémon",
    description:
      "Quando assume uma postura defensiva com os punhos guardando o rosto, ele poderia resistir a uma explosão de bomba.",
    evolution: {
      prev: ["651", "Level 36"],
    },
    profile: {
      height: "1.6 m",
      weight: "90 kg",
      egg: ["Field"],
      ability: [
        ["Overgrow", "false"],
        ["Bulletproof", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/652.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/652.png",
      hires: "./Imagens/Pokedex/hires/652.png",
    },
  },
  {
    id: 653,
    name: {
      english: "Fennekin",
      japanese: "フォッコ",
      chinese: "火狐狸",
      french: "Feunnec",
    },
    type: ["Fogo"],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 40,
      "Sp. Attack": 62,
      "Sp. Defense": 60,
      Speed: 60,
    },
    species: "Fox Pokémon",
    description:
      "Enquanto caminha, ele mastiga um galho no lugar de um lanche. Ele intimida oponentes soprando ar quente de seus ouvidos.",
    evolution: {
      next: [["654", "Level 16"]],
    },
    profile: {
      height: "0.4 m",
      weight: "9.4 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Magician", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/653.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/653.png",
      hires: "./Imagens/Pokedex/hires/653.png",
    },
  },
  {
    id: 654,
    name: {
      english: "Braixen",
      japanese: "テールナー",
      chinese: "长尾火狐",
      french: "Roussil",
    },
    type: ["Fogo"],
    base: {
      HP: 59,
      Attack: 59,
      Defense: 58,
      "Sp. Attack": 90,
      "Sp. Defense": 70,
      Speed: 73,
    },
    species: "Fox Pokémon",
    description:
      "Quando o galho é arrancado de sua cauda, a fricção acende o galho. A chama é usada para enviar sinais a seus aliados.",
    evolution: {
      prev: ["653", "Level 16"],
      next: [["655", "Level 36"]],
    },
    profile: {
      height: "1 m",
      weight: "14.5 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Magician", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/654.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/654.png",
      hires: "./Imagens/Pokedex/hires/654.png",
    },
  },
  {
    id: 655,
    name: {
      english: "Delphox",
      japanese: "マフォクシー",
      chinese: "妖火红狐",
      french: "Goupelin",
    },
    type: ["Fogo", "Psíquico"],
    base: {
      HP: 75,
      Attack: 69,
      Defense: 72,
      "Sp. Attack": 114,
      "Sp. Defense": 100,
      Speed: 104,
    },
    species: "Fox Pokémon",
    description:
      "Usando poder psíquico, ele gera um vórtGelo de fogo de 5.400 graus Fahrenheit, incinerando inimigos varridos neste redemoinho de chama.",
    evolution: {
      prev: ["654", "Level 36"],
    },
    profile: {
      height: "1.5 m",
      weight: "39 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Magician", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/655.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/655.png",
      hires: "./Imagens/Pokedex/hires/655.png",
    },
  },
  {
    id: 656,
    name: {
      english: "Froakie",
      japanese: "ケロマツ",
      chinese: "呱呱泡蛙",
      french: "Grenousse",
    },
    type: ["Água"],
    base: {
      HP: 41,
      Attack: 56,
      Defense: 40,
      "Sp. Attack": 62,
      "Sp. Defense": 44,
      Speed: 71,
    },
    species: "Bubble Frog Pokémon",
    description:
      "Ele se protege com bolhas delicadas. Sob seu ar alegre, ele mantém um olho vigilante em seus arredores.",
    evolution: {
      next: [["657", "Level 16"]],
    },
    profile: {
      height: "0.3 m",
      weight: "7 kg",
      egg: ["Água 1"],
      ability: [
        ["Torrent", "false"],
        ["Protean", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/656.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/656.png",
      hires: "./Imagens/Pokedex/hires/656.png",
    },
  },
  {
    id: 657,
    name: {
      english: "Frogadier",
      japanese: "ゲコガシラ",
      chinese: "呱头蛙",
      french: "Croâporal",
    },
    type: ["Água"],
    base: {
      HP: 54,
      Attack: 63,
      Defense: 52,
      "Sp. Attack": 83,
      "Sp. Defense": 56,
      Speed: 97,
    },
    species: "Bubble Frog Pokémon",
    description:
      "Sua rapidez é incomparável. Ele pode escalar uma torre de mais de 2.000 pés em um minuto.",
    evolution: {
      prev: ["656", "Level 16"],
      next: [["658", "Level 36"]],
    },
    profile: {
      height: "0.6 m",
      weight: "10.9 kg",
      egg: ["Água 1"],
      ability: [
        ["Torrent", "false"],
        ["Protean", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/657.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/657.png",
      hires: "./Imagens/Pokedex/hires/657.png",
    },
  },
  {
    id: 658,
    name: {
      english: "Greninja",
      japanese: "ゲッコウガ",
      chinese: "甲贺忍蛙",
      french: "Amphinobi",
    },
    type: ["Água", "Sombrio"],
    base: {
      HP: 72,
      Attack: 95,
      Defense: 67,
      "Sp. Attack": 103,
      "Sp. Defense": 71,
      Speed: 122,
    },
    species: "Ninja Pokémon",
    description:
      "Ele aparece e desaparece com a graça de um ninja. Ele brinca com seus inimigos usando movimentos rápidos, enquanto os corta com estrelas de água afiadas.",
    evolution: {
      prev: ["657", "Level 36"],
    },
    profile: {
      height: "1.5 m",
      weight: "40 kg",
      egg: ["Água 1"],
      ability: [
        ["Torrent", "false"],
        ["Protean", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/658.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/658.png",
      hires: "./Imagens/Pokedex/hires/658.png",
    },
  },
  {
    id: 659,
    name: {
      english: "Bunnelby",
      japanese: "ホルビー",
      chinese: "掘掘兔",
      french: "Sapereau",
    },
    type: ["Normal"],
    base: {
      HP: 38,
      Attack: 36,
      Defense: 38,
      "Sp. Attack": 32,
      "Sp. Defense": 36,
      Speed: 57,
    },
    species: "Digging Pokémon",
    description:
      "Ele tem orelhas como pás. Cavar buracos fortalece suas orelhas tanto que podem cortar raízes grossas sem esforço.",
    evolution: {
      next: [["660", "Level 20"]],
    },
    profile: {
      height: "0.4 m",
      weight: "5 kg",
      egg: ["Field"],
      ability: [
        ["Pickup", "false"],
        ["Cheek Pouch", "false"],
        ["Huge Power", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/659.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/659.png",
      hires: "./Imagens/Pokedex/hires/659.png",
    },
  },
  {
    id: 660,
    name: {
      english: "Diggersby",
      japanese: "ホルード",
      chinese: "掘地兔",
      french: "Excavarenne",
    },
    type: ["Normal", "Terra"],
    base: {
      HP: 85,
      Attack: 56,
      Defense: 77,
      "Sp. Attack": 50,
      "Sp. Defense": 77,
      Speed: 78,
    },
    species: "Digging Pokémon",
    description:
      "Tão poderoso quanto uma escavadora, suas orelhas podem reduzir a rocha densa a entulho. Quando termina de cavar, ele descansa preguiçosamente.",
    evolution: {
      prev: ["659", "Level 20"],
    },
    profile: {
      height: "1 m",
      weight: "42.4 kg",
      egg: ["Field"],
      ability: [
        ["Pickup", "false"],
        ["Cheek Pouch", "false"],
        ["Huge Power", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/660.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/660.png",
      hires: "./Imagens/Pokedex/hires/660.png",
    },
  },
  {
    id: 661,
    name: {
      english: "Fletchling",
      japanese: "ヤヤコマ",
      chinese: "小箭雀",
      french: "Passerouge",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 45,
      Attack: 50,
      Defense: 43,
      "Sp. Attack": 40,
      "Sp. Defense": 38,
      Speed: 62,
    },
    species: "Tiny Robin Pokémon",
    description:
      "Seu corpo está sempre quente. Treinadores que vivem em áreas frias aparentemente dormem com ele em sua cama.",
    evolution: {
      next: [["662", "Level 17"]],
    },
    profile: {
      height: "0.3 m",
      weight: "1.7 kg",
      egg: ["Voador"],
      ability: [
        ["Big Pecks", "false"],
        ["Gale Wings", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/661.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/661.png",
      hires: "./Imagens/Pokedex/hires/661.png",
    },
  },
  {
    id: 662,
    name: {
      english: "Fletchinder",
      japanese: "ヒノヤコマ",
      chinese: "火箭雀",
      french: "Braisillon",
    },
    type: ["Fogo", "Voador"],
    base: {
      HP: 62,
      Attack: 73,
      Defense: 55,
      "Sp. Attack": 56,
      "Sp. Defense": 52,
      Speed: 84,
    },
    species: "Ember Pokémon",
    description:
      "Sua velocidade logo após a decolagem já o coloca na classe de velocidade máxima de todos os Pokémon pássaro.",
    evolution: {
      prev: ["661", "Level 17"],
      next: [["663", "Level 35"]],
    },
    profile: {
      height: "0.7 m",
      weight: "16 kg",
      egg: ["Voador"],
      ability: [
        ["Flame Body", "false"],
        ["Gale Wings", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/662.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/662.png",
      hires: "./Imagens/Pokedex/hires/662.png",
    },
  },
  {
    id: 663,
    name: {
      english: "Talonflame",
      japanese: "ファイアロー",
      chinese: "烈箭鹰",
      french: "Flambusard",
    },
    type: ["Fogo", "Voador"],
    base: {
      HP: 78,
      Attack: 81,
      Defense: 71,
      "Sp. Attack": 74,
      "Sp. Defense": 69,
      Speed: 126,
    },
    species: "Scorching Pokémon",
    description:
      "Pokémon pássaro compõem a maior parte de sua dieta. Ele se aproxima em altas velocidades e os bate no chão com seu poderoso chute.",
    evolution: {
      prev: ["662", "Level 35"],
    },
    profile: {
      height: "1.2 m",
      weight: "24.5 kg",
      egg: ["Voador"],
      ability: [
        ["Flame Body", "false"],
        ["Gale Wings", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/663.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/663.png",
      hires: "./Imagens/Pokedex/hires/663.png",
    },
  },
  {
    id: 664,
    name: {
      english: "ScatterInseto",
      japanese: "コフキムシ",
      chinese: "粉蝶虫",
      french: "Lépidonille",
    },
    type: ["Inseto"],
    base: {
      HP: 38,
      Attack: 35,
      Defense: 40,
      "Sp. Attack": 27,
      "Sp. Defense": 25,
      Speed: 35,
    },
    species: "Scatterdust Pokémon",
    description:
      "O pó que cobre seu corpo regula sua temperatura, para que possa viver em qualquer região ou clima.",
    evolution: {
      next: [["665", "Level 9"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Shield Dust", "false"],
        ["Compound Eyes", "false"],
        ["Friend Guard", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/664.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/664.png",
      hires: "./Imagens/Pokedex/hires/664.png",
    },
  },
  {
    id: 665,
    name: {
      english: "Spewpa",
      japanese: "コフーライ",
      chinese: "粉蝶蛹",
      french: "Pérégrain",
    },
    type: ["Inseto"],
    base: {
      HP: 45,
      Attack: 22,
      Defense: 60,
      "Sp. Attack": 27,
      "Sp. Defense": 30,
      Speed: 29,
    },
    species: "Scatterdust Pokémon",
    description:
      "Os bicos dos Pokémon pássaro não conseguem começar a arranhar seu corpo robusto. Para se defender, ele cospe pó.",
    evolution: {
      prev: ["664", "Level 9"],
      next: [["666", "Level 12"]],
    },
    profile: {
      height: "0.3 m",
      weight: "8.4 kg",
      egg: ["Inseto"],
      ability: [
        ["Shed Skin", "false"],
        ["Friend Guard", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/665.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/665.png",
      hires: "./Imagens/Pokedex/hires/665.png",
    },
  },
  {
    id: 666,
    name: {
      english: "Vivillon",
      japanese: "ビビヨン",
      chinese: "彩粉蝶",
      french: "Prismillon",
    },
    type: ["Inseto", "Voador"],
    base: {
      HP: 80,
      Attack: 52,
      Defense: 50,
      "Sp. Attack": 90,
      "Sp. Defense": 50,
      Speed: 89,
    },
    species: "Scale Pokémon",
    description:
      "Os padrões nas asas deste Pokémon dependem do clima e da topografia de seu habitat. Ele espalha escamas coloridas.",
    evolution: {
      prev: ["665", "Level 12"],
    },
    profile: {
      height: "1.2 m",
      weight: "17 kg",
      egg: ["Inseto"],
      ability: [
        ["Shield Dust", "false"],
        ["Compound Eyes", "false"],
        ["Friend Guard", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/666.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/666.png",
      hires: "./Imagens/Pokedex/hires/666.png",
    },
  },
  {
    id: 667,
    name: {
      english: "Litleo",
      japanese: "シシコ",
      chinese: "小狮狮",
      french: "Hélionceau",
    },
    type: ["Fogo", "Normal"],
    base: {
      HP: 62,
      Attack: 50,
      Defense: 58,
      "Sp. Attack": 73,
      "Sp. Defense": 54,
      Speed: 72,
    },
    species: "Lion Cub Pokémon",
    description:
      "Este Pokémon de sangue quente está cheio de curiosidade. Quando fica com raiva ou começa a lutar, sua curta juba fica quente.",
    evolution: {
      next: [["668", "Level 35"]],
    },
    profile: {
      height: "0.6 m",
      weight: "13.5 kg",
      egg: ["Field"],
      ability: [
        ["Rivalry", "false"],
        ["Unnerve", "false"],
        ["Moxie", "true"],
      ],
      gender: "12.5:87.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/667.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/667.png",
      hires: "./Imagens/Pokedex/hires/667.png",
    },
  },
  {
    id: 668,
    name: {
      english: "Pyroar",
      japanese: "カエンジシ",
      chinese: "火炎狮",
      french: "Némélios",
    },
    type: ["Fogo", "Normal"],
    base: {
      HP: 86,
      Attack: 68,
      Defense: 72,
      "Sp. Attack": 109,
      "Sp. Defense": 66,
      Speed: 106,
    },
    species: "Royal Pokémon",
    description:
      "A temperatura de sua respiração é superior a 10.000 graus Fahrenheit, mas Pyroar não a usa em sua presa. Este Pokémon prefere comer carne crua.",
    evolution: {
      prev: ["667", "Level 35"],
    },
    profile: {
      height: "1.5 m",
      weight: "81.5 kg",
      egg: ["Field"],
      ability: [
        ["Rivalry", "false"],
        ["Unnerve", "false"],
        ["Moxie", "true"],
      ],
      gender: "12.5:87.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/668.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/668.png",
      hires: "./Imagens/Pokedex/hires/668.png",
    },
  },
  {
    id: 669,
    name: {
      english: "Flabébé",
      japanese: "フラベベ",
      chinese: "花蓓蓓",
      french: "Flabébé",
    },
    type: ["Fada"],
    base: {
      HP: 44,
      Attack: 38,
      Defense: 39,
      "Sp. Attack": 61,
      "Sp. Defense": 79,
      Speed: 42,
    },
    species: "Single Bloom Pokémon",
    description:
      "Flabébé usa uma coroa feita de pólen que coletou de sua flor. A coroa tem propriedades curativas ocultas.",
    evolution: {
      next: [["670", "Level 19"]],
    },
    profile: {
      height: "0.1 m",
      weight: "0.1 kg",
      egg: ["Fada"],
      ability: [
        ["Flower Veil", "false"],
        ["Symbiosis", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/669.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/669.png",
      hires: "./Imagens/Pokedex/hires/669.png",
    },
  },
  {
    id: 670,
    name: {
      english: "Floette",
      japanese: "フラエッテ",
      chinese: "花叶蒂",
      french: "FLOETTE",
    },
    type: ["Fada"],
    base: {
      HP: 54,
      Attack: 45,
      Defense: 47,
      "Sp. Attack": 75,
      "Sp. Defense": 98,
      Speed: 52,
    },
    species: "Single Bloom Pokémon",
    description:
      "Ele dá seu próprio poder às flores, derramando seu coração cuidando delas. Floette nunca perdoa ninguém que bagunce um canteiro de flores.",
    evolution: {
      prev: ["669", "Level 19"],
      next: [["671", "use Shiny Stone"]],
    },
    profile: {
      height: "0.2 m",
      weight: "0.9 kg",
      egg: ["Fada"],
      ability: [
        ["Flower Veil", "false"],
        ["Symbiosis", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/670.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/670.png",
      hires: "./Imagens/Pokedex/hires/670.png",
    },
  },
  {
    id: 671,
    name: {
      english: "Florges",
      japanese: "フラージェス",
      chinese: "花洁夫人",
      french: "Florges",
    },
    type: ["Fada"],
    base: {
      HP: 78,
      Attack: 65,
      Defense: 68,
      "Sp. Attack": 112,
      "Sp. Defense": 154,
      Speed: 75,
    },
    species: "Garden Pokémon",
    description:
      "Sua vida pode durar várias centenas de anos. Diz-se que ele dedica toda sua vida a proteger jardins.",
    evolution: {
      prev: ["670", "use Shiny Stone"],
    },
    profile: {
      height: "1.1 m",
      weight: "10 kg",
      egg: ["Fada"],
      ability: [
        ["Flower Veil", "false"],
        ["Symbiosis", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/671.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/671.png",
      hires: "./Imagens/Pokedex/hires/671.png",
    },
  },
  {
    id: 672,
    name: {
      english: "Skiddo",
      japanese: "メェークル",
      chinese: "坐骑小羊",
      french: "Cabriolaine",
    },
    type: ["Grama"],
    base: {
      HP: 66,
      Attack: 65,
      Defense: 48,
      "Sp. Attack": 62,
      "Sp. Defense": 57,
      Speed: 52,
    },
    species: "Mount Pokémon",
    description:
      "Se tiver sol e água, não precisa comer, porque pode gerar energia das folhas nas costas.",
    evolution: {
      next: [["673", "Level 32"]],
    },
    profile: {
      height: "0.9 m",
      weight: "31 kg",
      egg: ["Field"],
      ability: [
        ["Sap Sipper", "false"],
        ["Grama Pelt", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/672.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/672.png",
      hires: "./Imagens/Pokedex/hires/672.png",
    },
  },
  {
    id: 673,
    name: {
      english: "Gogoat",
      japanese: "ゴーゴート",
      chinese: "坐骑山羊",
      french: "Chevroum",
    },
    type: ["Grama"],
    base: {
      HP: 123,
      Attack: 100,
      Defense: 62,
      "Sp. Attack": 97,
      "Sp. Defense": 81,
      Speed: 68,
    },
    species: "Mount Pokémon",
    description:
      "Eles habitam regiões montanhosas. O líder do rebanho é decidido por uma batalha de chifres chocando.",
    evolution: {
      prev: ["672", "Level 32"],
    },
    profile: {
      height: "1.7 m",
      weight: "91 kg",
      egg: ["Field"],
      ability: [
        ["Sap Sipper", "false"],
        ["Grama Pelt", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/673.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/673.png",
      hires: "./Imagens/Pokedex/hires/673.png",
    },
  },
  {
    id: 674,
    name: {
      english: "Pancham",
      japanese: "ヤンチャム",
      chinese: "顽皮熊猫",
      french: "Pandespiègle",
    },
    type: ["Lutador"],
    base: {
      HP: 67,
      Attack: 82,
      Defense: 62,
      "Sp. Attack": 46,
      "Sp. Defense": 48,
      Speed: 43,
    },
    species: "Playful Pokémon",
    description:
      "Ele está desesperado para intimidar seus oponentes. Seja gentil e finja estar assustado se você o pegar olhando para você intensamente.",
    evolution: {
      next: [["675", "Level 32, Sombrio type Pokémon in party"]],
    },
    profile: {
      height: "0.6 m",
      weight: "8 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Iron Fist", "false"],
        ["Mold Breaker", "false"],
        ["Scrappy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/674.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/674.png",
      hires: "./Imagens/Pokedex/hires/674.png",
    },
  },
  {
    id: 675,
    name: {
      english: "Pangoro",
      japanese: "ゴロンダ",
      chinese: "流氓熊猫",
      french: "Pandarbare",
    },
    type: ["Lutador", "Sombrio"],
    base: {
      HP: 95,
      Attack: 124,
      Defense: 78,
      "Sp. Attack": 69,
      "Sp. Defense": 71,
      Speed: 58,
    },
    species: "Daunting Pokémon",
    description:
      "Pangoro é do tipo que fala com os punhos. Ele não diz muito enquanto golpeia oponentes com força suficiente para enviar um caminhão basculante voando.",
    evolution: {
      prev: ["674", "Level 32, Sombrio type Pokémon in party"],
    },
    profile: {
      height: "2.1 m",
      weight: "136 kg",
      egg: ["Field", "Human-Like"],
      ability: [
        ["Iron Fist", "false"],
        ["Mold Breaker", "false"],
        ["Scrappy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/675.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/675.png",
      hires: "./Imagens/Pokedex/hires/675.png",
    },
  },
  {
    id: 676,
    name: {
      english: "Furfrou",
      japanese: "トリミアン",
      chinese: "多丽米亚",
      french: "Couafarel",
    },
    type: ["Normal"],
    base: {
      HP: 75,
      Attack: 80,
      Defense: 60,
      "Sp. Attack": 65,
      "Sp. Defense": 90,
      Speed: 102,
    },
    species: "Poodle Pokémon",
    description:
      "Deixado sozinho, seu pelo ficará cada vez mais comprido, mas ele só permitirá que alguém de quem confia o corte.",
    evolution: {},
    profile: {
      height: "1.2 m",
      weight: "28 kg",
      egg: ["Field"],
      ability: [["Fur Coat", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/676.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/676.png",
      hires: "./Imagens/Pokedex/hires/676.png",
    },
  },
  {
    id: 677,
    name: {
      english: "Espurr",
      japanese: "ニャスパー",
      chinese: "妙喵",
      french: "Psystigri",
    },
    type: ["Psíquico"],
    base: {
      HP: 62,
      Attack: 48,
      Defense: 54,
      "Sp. Attack": 63,
      "Sp. Defense": 60,
      Speed: 68,
    },
    species: "Restraint Pokémon",
    description:
      "Ele tem energia psíquica suficiente para explodir tudo dentro de 300 pés de si mesmo, mas não tem controle sobre seu poder.",
    evolution: {
      next: [["678", "Level 25"]],
    },
    profile: {
      height: "0.3 m",
      weight: "3.5 kg",
      egg: ["Field"],
      ability: [
        ["Keen Eye", "false"],
        ["Infiltrator", "false"],
        ["Own Tempo", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/677.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/677.png",
      hires: "./Imagens/Pokedex/hires/677.png",
    },
  },
  {
    id: 678,
    name: {
      english: "Meowstic",
      japanese: "ニャオニクス",
      chinese: "超能妙喵",
      french: "Mistigrix",
    },
    type: ["Psíquico"],
    base: {
      HP: 74,
      Attack: 48,
      Defense: 76,
      "Sp. Attack": 83,
      "Sp. Defense": 81,
      Speed: 104,
    },
    species: "Constraint Pokémon",
    description:
      "Os padrões de globo ocular no interior de suas orelhas emitem energia psíquica. Ele mantém os padrões bem cobertos porque esse poder é muito imenso.",
    evolution: {
      prev: ["677", "Level 25"],
    },
    profile: {
      height: "0.6 m",
      weight: "8.5 kg",
      egg: ["Field"],
      ability: [
        ["Keen Eye", "false"],
        ["Infiltrator", "false"],
        ["Prankster", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/678.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/678.png",
      hires: "./Imagens/Pokedex/hires/678.png",
    },
  },
  {
    id: 679,
    name: {
      english: "Honedge",
      japanese: "ヒトツキ",
      chinese: "独剑鞘",
      french: "Monorpale",
    },
    type: ["Metal", "Fantasma"],
    base: {
      HP: 45,
      Attack: 80,
      Defense: 100,
      "Sp. Attack": 35,
      "Sp. Defense": 37,
      Speed: 28,
    },
    species: "Sword Pokémon",
    description:
      "Se alguém ousar agarrar sua empunhadura, ele envolve um pano azul no braço dessa pessoa e drena completamente sua energia vital.",
    evolution: {
      next: [["680", "Level 35"]],
    },
    profile: {
      height: "0.8 m",
      weight: "2 kg",
      egg: ["Mineral"],
      ability: [["No Guard", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/679.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/679.png",
      hires: "./Imagens/Pokedex/hires/679.png",
    },
  },
  {
    id: 680,
    name: {
      english: "Doublade",
      japanese: "ニダンギル",
      chinese: "双剑鞘",
      french: "Dimoclès",
    },
    type: ["Metal", "Fantasma"],
    base: {
      HP: 59,
      Attack: 110,
      Defense: 150,
      "Sp. Attack": 45,
      "Sp. Defense": 49,
      Speed: 35,
    },
    species: "Sword Pokémon",
    description:
      "Os complexos padrões de ataque de suas duas espadas são imparáveis, mesmo para um oponente altamente realizado na esgrima.",
    evolution: {
      prev: ["679", "Level 35"],
      next: [["681", "use Dusk Stone"]],
    },
    profile: {
      height: "0.8 m",
      weight: "4.5 kg",
      egg: ["Mineral"],
      ability: [["No Guard", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/680.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/680.png",
      hires: "./Imagens/Pokedex/hires/680.png",
    },
  },
  {
    id: 681,
    name: {
      english: "Aegislash",
      japanese: "ギルガルド",
      chinese: "坚盾剑怪",
      french: "Exagide",
    },
    type: ["Metal", "Fantasma"],
    base: {
      HP: 60,
      Attack: 50,
      Defense: 150,
      "Sp. Attack": 50,
      "Sp. Defense": 150,
      Speed: 60,
    },
    species: "Royal Sword Pokémon",
    description:
      "Aparentemente, ele pode detectar as qualidades inatas de liderança. Segundo a lenda, quem ele reconhecer está destinado a se tornar rei.",
    evolution: {
      prev: ["680", "use Dusk Stone"],
    },
    profile: {
      height: "1.7 m",
      weight: "53 kg",
      egg: ["Mineral"],
      ability: [["Stance Change", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/681.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/681.png",
      hires: "./Imagens/Pokedex/hires/681.png",
    },
  },
  {
    id: 682,
    name: {
      english: "Spritzee",
      japanese: "シュシュプ",
      chinese: "粉香香",
      french: "Fluvetin",
    },
    type: ["Fada"],
    base: {
      HP: 78,
      Attack: 52,
      Defense: 60,
      "Sp. Attack": 63,
      "Sp. Defense": 65,
      Speed: 23,
    },
    species: "Perfume Pokémon",
    description:
      "No passado, em vez de usar perfume, as senhoras reais carregavam um Spritzee que exalava uma fragrância de que gostavam.",
    evolution: {
      next: [["683", "trade holding Sachet"]],
    },
    profile: {
      height: "0.2 m",
      weight: "0.5 kg",
      egg: ["Fada"],
      ability: [
        ["Healer", "false"],
        ["Aroma Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/682.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/682.png",
      hires: "./Imagens/Pokedex/hires/682.png",
    },
  },
  {
    id: 683,
    name: {
      english: "Aromatisse",
      japanese: "フレフワン",
      chinese: "芳香精",
      french: "Cocotine",
    },
    type: ["Fada"],
    base: {
      HP: 101,
      Attack: 72,
      Defense: 72,
      "Sp. Attack": 99,
      "Sp. Defense": 89,
      Speed: 29,
    },
    species: "Fragrance Pokémon",
    description:
      "Seu cheiro é tão avassalador que, a menos que um treinador realmente goste do cheiro, ele terá dificuldade em caminhar ao lado dele.",
    evolution: {
      prev: ["682", "trade holding Sachet"],
    },
    profile: {
      height: "0.8 m",
      weight: "15.5 kg",
      egg: ["Fada"],
      ability: [
        ["Healer", "false"],
        ["Aroma Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/683.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/683.png",
      hires: "./Imagens/Pokedex/hires/683.png",
    },
  },
  {
    id: 684,
    name: {
      english: "Swirlix",
      japanese: "ペロッパフ",
      chinese: "绵绵泡芙",
      french: "Sucroquin",
    },
    type: ["Fada"],
    base: {
      HP: 62,
      Attack: 48,
      Defense: 66,
      "Sp. Attack": 59,
      "Sp. Defense": 57,
      Speed: 49,
    },
    species: "Cotton Candy Pokémon",
    description: "Como só come doces, seu pelo é tão doce quanto algodão doce.",
    evolution: {
      next: [["685", "trade holding Whipped Dream"]],
    },
    profile: {
      height: "0.4 m",
      weight: "3.5 kg",
      egg: ["Fada"],
      ability: [
        ["Sweet Veil", "false"],
        ["Unburden", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/684.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/684.png",
      hires: "./Imagens/Pokedex/hires/684.png",
    },
  },
  {
    id: 685,
    name: {
      english: "Slurpuff",
      japanese: "ペロリーム",
      chinese: "胖甜妮",
      french: "Cupcanaille",
    },
    type: ["Fada"],
    base: {
      HP: 82,
      Attack: 80,
      Defense: 86,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      Speed: 72,
    },
    species: "Meringue Pokémon",
    description:
      "Seu olfato é 100 milhões de vezes melhor que o de um humano, por isso até mesmo o mais fraco cheiro lhe conta sobre tudo na área. É como se ele pudesse ver com o nariz!",
    evolution: {
      prev: ["684", "trade holding Whipped Dream"],
    },
    profile: {
      height: "0.8 m",
      weight: "5 kg",
      egg: ["Fada"],
      ability: [
        ["Sweet Veil", "false"],
        ["Unburden", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/685.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/685.png",
      hires: "./Imagens/Pokedex/hires/685.png",
    },
  },
  {
    id: 686,
    name: {
      english: "Inkay",
      japanese: "マーイーカ",
      chinese: "好啦鱿",
      french: "Sepiatop",
    },
    type: ["Sombrio", "Psíquico"],
    base: {
      HP: 53,
      Attack: 54,
      Defense: 53,
      "Sp. Attack": 37,
      "Sp. Defense": 46,
      Speed: 45,
    },
    species: "Revolving Pokémon",
    description:
      "Ao trocar informações com outros de sua espécie, ele pisca os pontos emissores de luz em seu corpo em um ritmo complexo.",
    evolution: {
      next: [["687", "Level 30, holding console upside down"]],
    },
    profile: {
      height: "0.4 m",
      weight: "3.5 kg",
      egg: ["Água 1", "Água 2"],
      ability: [
        ["Contrary", "false"],
        ["Suction Cups", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/686.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/686.png",
      hires: "./Imagens/Pokedex/hires/686.png",
    },
  },
  {
    id: 687,
    name: {
      english: "Malamar",
      japanese: "カラマネロ",
      chinese: "乌贼王",
      french: "Sepiatroce",
    },
    type: ["Sombrio", "Psíquico"],
    base: {
      HP: 86,
      Attack: 92,
      Defense: 88,
      "Sp. Attack": 68,
      "Sp. Defense": 75,
      Speed: 73,
    },
    species: "Overturning Pokémon",
    description:
      "Ele pisca o padrão em seu torso para controlar sua presa e atraí-la. As bordas de suas nadadeiras são extremamente afiadas.",
    evolution: {
      prev: ["686", "Level 30, holding console upside down"],
    },
    profile: {
      height: "1.5 m",
      weight: "47 kg",
      egg: ["Água 1", "Água 2"],
      ability: [
        ["Contrary", "false"],
        ["Suction Cups", "false"],
        ["Infiltrator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/687.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/687.png",
      hires: "./Imagens/Pokedex/hires/687.png",
    },
  },
  {
    id: 688,
    name: {
      english: "Binacle",
      japanese: "カメテテ",
      chinese: "龟脚脚",
      french: "Opermine",
    },
    type: ["Rocha", "Água"],
    base: {
      HP: 42,
      Attack: 52,
      Defense: 67,
      "Sp. Attack": 39,
      "Sp. Defense": 56,
      Speed: 50,
    },
    species: "Two-Handed Pokémon",
    description:
      "Eles se esticam e depois se contraem, puxando suas rochas junto com eles em saltos ousados. Eles comem algas que lavam na costa.",
    evolution: {
      next: [["689", "Level 39"]],
    },
    profile: {
      height: "0.5 m",
      weight: "31 kg",
      egg: ["Água 3"],
      ability: [
        ["Tough Claws", "false"],
        ["Sniper", "false"],
        ["Pickpocket", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/688.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/688.png",
      hires: "./Imagens/Pokedex/hires/688.png",
    },
  },
  {
    id: 689,
    name: {
      english: "Barbaracle",
      japanese: "ガメノデス",
      chinese: "龟足巨铠",
      french: "Golgopathe",
    },
    type: ["Rocha", "Água"],
    base: {
      HP: 72,
      Attack: 105,
      Defense: 115,
      "Sp. Attack": 54,
      "Sp. Defense": 86,
      Speed: 68,
    },
    species: "Collective Pokémon",
    description:
      "As pernas e as mãos de Barbaracle têm mentes próprias e se movem independentemente. Mas eles geralmente seguem as ordens da cabeça.",
    evolution: {
      prev: ["688", "Level 39"],
    },
    profile: {
      height: "1.3 m",
      weight: "96 kg",
      egg: ["Água 3"],
      ability: [
        ["Tough Claws", "false"],
        ["Sniper", "false"],
        ["Pickpocket", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/689.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/689.png",
      hires: "./Imagens/Pokedex/hires/689.png",
    },
  },
  {
    id: 690,
    name: {
      english: "Skrelp",
      japanese: "クズモー",
      chinese: "垃垃藻",
      french: "Venalgue",
    },
    type: ["Venenoso", "Água"],
    base: {
      HP: 50,
      Attack: 60,
      Defense: 60,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      Speed: 30,
    },
    species: "Mock Kelp Pokémon",
    description:
      "Ele não é bom em nadar, por isso se agarra às algas. Na região de Alola, costuma ser encontrado perto de Dhelmise.",
    evolution: {
      next: [["691", "Level 48"]],
    },
    profile: {
      height: "0.5 m",
      weight: "7.3 kg",
      egg: ["Água 1", "Dragão"],
      ability: [
        ["Venenoso Point", "false"],
        ["Venenoso Touch", "false"],
        ["Adaptability", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/690.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/690.png",
      hires: "./Imagens/Pokedex/hires/690.png",
    },
  },
  {
    id: 691,
    name: {
      english: "Dragalge",
      japanese: "ドラミドロ",
      chinese: "毒藻龙",
      french: "Kravarech",
    },
    type: ["Venenoso", "Dragão"],
    base: {
      HP: 65,
      Attack: 75,
      Defense: 90,
      "Sp. Attack": 97,
      "Sp. Defense": 123,
      Speed: 44,
    },
    species: "Mock Kelp Pokémon",
    description:
      "Ele se mistura com algas para emboscar sua presa e depois derrubá-la com um líquido venenoso forte o suficiente para derreter metal.",
    evolution: {
      prev: ["690", "Level 48"],
    },
    profile: {
      height: "1.8 m",
      weight: "81.5 kg",
      egg: ["Água 1", "Dragão"],
      ability: [
        ["Venenoso Point", "false"],
        ["Venenoso Touch", "false"],
        ["Adaptability", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/691.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/691.png",
      hires: "./Imagens/Pokedex/hires/691.png",
    },
  },
  {
    id: 692,
    name: {
      english: "Clauncher",
      japanese: "ウデッポウ",
      chinese: "铁臂枪虾",
      french: "Flingouste",
    },
    type: ["Água"],
    base: {
      HP: 50,
      Attack: 53,
      Defense: 62,
      "Sp. Attack": 58,
      "Sp. Defense": 63,
      Speed: 44,
    },
    species: "Água Gun Pokémon",
    description:
      "Ele se move jantando água de sua pinça direita. Ele tem um fraco senso de equilíbrio, por isso é péssimo em nadar direto.",
    evolution: {
      next: [["693", "Level 37"]],
    },
    profile: {
      height: "0.5 m",
      weight: "8.3 kg",
      egg: ["Água 1", "Água 3"],
      ability: [["Mega Launcher", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/692.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/692.png",
      hires: "./Imagens/Pokedex/hires/692.png",
    },
  },
  {
    id: 693,
    name: {
      english: "Clawitzer",
      japanese: "ブロスター",
      chinese: "钢炮臂虾",
      french: "Gamblast",
    },
    type: ["Água"],
    base: {
      HP: 71,
      Attack: 73,
      Defense: 88,
      "Sp. Attack": 120,
      "Sp. Defense": 89,
      Speed: 59,
    },
    species: "Howitzer Pokémon",
    description:
      "Seu braço direito está cheio de carne. Quando sua pinça cai, é exportada para ser usada como ingrediente culinário.",
    evolution: {
      prev: ["692", "Level 37"],
    },
    profile: {
      height: "1.3 m",
      weight: "35.3 kg",
      egg: ["Água 1", "Água 3"],
      ability: [["Mega Launcher", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/693.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/693.png",
      hires: "./Imagens/Pokedex/hires/693.png",
    },
  },
  {
    id: 694,
    name: {
      english: "Helioptile",
      japanese: "エリキテル",
      chinese: "伞电蜥",
      french: "Galvaran",
    },
    type: ["Elétrico", "Normal"],
    base: {
      HP: 44,
      Attack: 38,
      Defense: 33,
      "Sp. Attack": 61,
      "Sp. Defense": 43,
      Speed: 70,
    },
    species: "Generator Pokémon",
    description:
      "Os babados de cada lado de sua cabeça têm células que geram eletricidade quando expostas à luz solar.",
    evolution: {
      next: [["695", "use Sun Stone"]],
    },
    profile: {
      height: "0.5 m",
      weight: "6 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Dry Skin", "false"],
        ["Sand Veil", "false"],
        ["Solar Power", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/694.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/694.png",
      hires: "./Imagens/Pokedex/hires/694.png",
    },
  },
  {
    id: 695,
    name: {
      english: "Heliolisk",
      japanese: "エレザード",
      chinese: "光电伞蜥",
      french: "Iguolta",
    },
    type: ["Elétrico", "Normal"],
    base: {
      HP: 62,
      Attack: 55,
      Defense: 52,
      "Sp. Attack": 109,
      "Sp. Defense": 94,
      Speed: 109,
    },
    species: "Generator Pokémon",
    description:
      "Ele estimula seus músculos com eletricidade, aumentando a força em suas pernas e permitindo que corra 100 jardas em cinco segundos.",
    evolution: {
      prev: ["694", "use Sun Stone"],
    },
    profile: {
      height: "1 m",
      weight: "21 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Dry Skin", "false"],
        ["Sand Veil", "false"],
        ["Solar Power", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/695.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/695.png",
      hires: "./Imagens/Pokedex/hires/695.png",
    },
  },
  {
    id: 696,
    name: {
      english: "Tyrunt",
      japanese: "チゴラス",
      chinese: "宝宝暴龙",
      french: "Ptyranidur",
    },
    type: ["Rocha", "Dragão"],
    base: {
      HP: 58,
      Attack: 89,
      Defense: 77,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      Speed: 48,
    },
    species: "Royal Heir Pokémon",
    description:
      "Tyrunt é mimado e egoísta. Pode estar apenas tentando brincar, mas às vezes aqueles com quem está tentando brincar ficam gravemente feridos.",
    evolution: {
      next: [["697", "Level 39, Daytime"]],
    },
    profile: {
      height: "0.8 m",
      weight: "26 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Strong Jaw", "false"],
        ["Sturdy", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/696.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/696.png",
      hires: "./Imagens/Pokedex/hires/696.png",
    },
  },
  {
    id: 697,
    name: {
      english: "Tyrantrum",
      japanese: "ガチゴラス",
      chinese: "怪颚龙",
      french: "Rexillius",
    },
    type: ["Rocha", "Dragão"],
    base: {
      HP: 82,
      Attack: 121,
      Defense: 119,
      "Sp. Attack": 69,
      "Sp. Defense": 59,
      Speed: 71,
    },
    species: "Despot Pokémon",
    description:
      "O rei do mundo antigo, ele pode facilmente esmagar um carro com a força devastadora de suas enormes mandíbulas.",
    evolution: {
      prev: ["696", "Level 39, Daytime"],
    },
    profile: {
      height: "2.5 m",
      weight: "270 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Strong Jaw", "false"],
        ["Rocha Head", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/697.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/697.png",
      hires: "./Imagens/Pokedex/hires/697.png",
    },
  },
  {
    id: 698,
    name: {
      english: "Amaura",
      japanese: "アマルス",
      chinese: "冰雪龙",
      french: "Amagara",
    },
    type: ["Rocha", "Gelo"],
    base: {
      HP: 77,
      Attack: 59,
      Defense: 50,
      "Sp. Attack": 67,
      "Sp. Defense": 63,
      Speed: 46,
    },
    species: "Tundra Pokémon",
    description:
      "Amaura foi restaurado com sucesso, mas não se espera que viva muito devido ao calor do ambiente atual.",
    evolution: {
      next: [["699", "Level 39, Nighttime"]],
    },
    profile: {
      height: "1.3 m",
      weight: "25.2 kg",
      egg: ["Monster"],
      ability: [
        ["Refrigerate", "false"],
        ["Snow Warning", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/698.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/698.png",
      hires: "./Imagens/Pokedex/hires/698.png",
    },
  },
  {
    id: 699,
    name: {
      english: "Aurorus",
      japanese: "アマルルガ",
      chinese: "冰雪巨龙",
      french: "Dragmara",
    },
    type: ["Rocha", "Gelo"],
    base: {
      HP: 123,
      Attack: 77,
      Defense: 72,
      "Sp. Attack": 99,
      "Sp. Defense": 92,
      Speed: 58,
    },
    species: "Tundra Pokémon",
    description:
      "Este Pokémon normalmente silencioso e gentil tem uma temperatura superficial de cerca de -240 graus Fahrenheit.",
    evolution: {
      prev: ["698", "Level 39, Nighttime"],
    },
    profile: {
      height: "2.7 m",
      weight: "225 kg",
      egg: ["Monster"],
      ability: [
        ["Refrigerate", "false"],
        ["Snow Warning", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/699.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/699.png",
      hires: "./Imagens/Pokedex/hires/699.png",
    },
  },
  {
    id: 700,
    name: {
      english: "Sylveon",
      japanese: "ニンフィア",
      chinese: "仙子伊布",
      french: "Nymphali",
    },
    type: ["Fada"],
    base: {
      HP: 95,
      Attack: 65,
      Defense: 65,
      "Sp. Attack": 110,
      "Sp. Defense": 130,
      Speed: 60,
    },
    species: "Intertwining Pokémon",
    description:
      "Sylveon envolve seus tentáculos semelhantes a fitas ao redor do braço de seu treinador porque esse toque permite que ele leia os sentimentos de seu treinador.",
    evolution: {
      prev: ["133", "High Affection, knowing Fada move"],
    },
    profile: {
      height: "1 m",
      weight: "23.5 kg",
      egg: ["Field"],
      ability: [
        ["Cute Charm", "false"],
        ["Pixilate", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/700.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/700.png",
      hires: "./Imagens/Pokedex/hires/700.png",
    },
  },
  {
    id: 701,
    name: {
      english: "Hawlucha",
      japanese: "ルチャブル",
      chinese: "摔角鹰人",
      french: "Brutalibré",
    },
    type: ["Lutador", "Voador"],
    base: {
      HP: 78,
      Attack: 92,
      Defense: 75,
      "Sp. Attack": 74,
      "Sp. Defense": 63,
      Speed: 118,
    },
    species: "Wrestling Pokémon",
    description:
      "Em combate, Hawlucha salta ágilmente, aproveitando os pontos cegos de seus oponentes. Ele também é habilidoso em usar manobras de submissão excelentes.",
    evolution: {},
    profile: {
      height: "0.8 m",
      weight: "21.5 kg",
      egg: ["Human-Like"],
      ability: [
        ["Limber", "false"],
        ["Unburden", "false"],
        ["Mold Breaker", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/701.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/701.png",
      hires: "./Imagens/Pokedex/hires/701.png",
    },
  },
  {
    id: 702,
    name: {
      english: "Dedenne",
      japanese: "デデンネ",
      chinese: "咚咚鼠",
      french: "DEDENNE",
    },
    type: ["Elétrico", "Fada"],
    base: {
      HP: 67,
      Attack: 58,
      Defense: 57,
      "Sp. Attack": 81,
      "Sp. Defense": 67,
      Speed: 101,
    },
    species: "Antenna Pokémon",
    description:
      "Seus bigodes superiores são sensores que examinam seus arredores. Seus bigodes inferiores são órgãos que disparam eletricidade.",
    evolution: {},
    profile: {
      height: "0.2 m",
      weight: "2.2 kg",
      egg: ["Field", "Fada"],
      ability: [
        ["Cheek Pouch", "false"],
        ["Pickup", "false"],
        ["Plus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/702.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/702.png",
      hires: "./Imagens/Pokedex/hires/702.png",
    },
  },
  {
    id: 703,
    name: {
      english: "Carbink",
      japanese: "メレシー",
      chinese: "小碎钻",
      french: "Strassie",
    },
    type: ["Rocha", "Fada"],
    base: {
      HP: 50,
      Attack: 50,
      Defense: 150,
      "Sp. Attack": 50,
      "Sp. Defense": 150,
      Speed: 50,
    },
    species: "Jewel Pokémon",
    description:
      "Para manter as joias em seus corpos livres de manchas, bandos de Carbink usam suas crinas macias para polir as joias uns dos outros.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "5.7 kg",
      egg: ["Fada", "Mineral"],
      ability: [
        ["Clear Body", "false"],
        ["Sturdy", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/703.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/703.png",
      hires: "./Imagens/Pokedex/hires/703.png",
    },
  },
  {
    id: 704,
    name: {
      english: "Goomy",
      japanese: "ヌメラ",
      chinese: "黏黏宝",
      french: "Mucuscule",
    },
    type: ["Dragão"],
    base: {
      HP: 45,
      Attack: 50,
      Defense: 35,
      "Sp. Attack": 55,
      "Sp. Defense": 75,
      Speed: 40,
    },
    species: "Soft Tissue Pokémon",
    description:
      "Seu corpo é principalmente água. Se secar, morrerá, por isso sempre fica sentado com perfeita imobilidade na sombra.",
    evolution: {
      next: [["705", "Level 40"]],
    },
    profile: {
      height: "0.3 m",
      weight: "2.8 kg",
      egg: ["Dragão"],
      ability: [
        ["Sap Sipper", "false"],
        ["Hydration", "false"],
        ["Gooey", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/704.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/704.png",
      hires: "./Imagens/Pokedex/hires/704.png",
    },
  },
  {
    id: 705,
    name: {
      english: "Sliggoo",
      japanese: "ヌメイル",
      chinese: "黏美儿",
      french: "Colimucus",
    },
    type: ["Dragão"],
    base: {
      HP: 68,
      Attack: 75,
      Defense: 53,
      "Sp. Attack": 83,
      "Sp. Defense": 113,
      Speed: 60,
    },
    species: "Soft Tissue Pokémon",
    description:
      "Seu corpo inteiro é coberto de muco pegajoso que pode dissolver qualquer coisa. Certifique-se de colocar luvas se for tocá-lo.",
    evolution: {
      prev: ["704", "Level 40"],
      next: [["706", "Level 50, during rain"]],
    },
    profile: {
      height: "0.8 m",
      weight: "17.5 kg",
      egg: ["Dragão"],
      ability: [
        ["Sap Sipper", "false"],
        ["Hydration", "false"],
        ["Gooey", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/705.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/705.png",
      hires: "./Imagens/Pokedex/hires/705.png",
    },
  },
  {
    id: 706,
    name: {
      english: "Goodra",
      japanese: "ヌメルゴン",
      chinese: "黏美龙",
      french: "Muplodocus",
    },
    type: ["Dragão"],
    base: {
      HP: 90,
      Attack: 100,
      Defense: 70,
      "Sp. Attack": 110,
      "Sp. Defense": 150,
      Speed: 80,
    },
    species: "Dragão Pokémon",
    description:
      "Debaixo de sua pele viscosa há uma camada espessa de gordura, e a combinação dos dois faz com que os ataques dos inimigos deslizem para fora.",
    evolution: {
      prev: ["705", "Level 50, during rain"],
    },
    profile: {
      height: "2 m",
      weight: "150.5 kg",
      egg: ["Dragão"],
      ability: [
        ["Sap Sipper", "false"],
        ["Hydration", "false"],
        ["Gooey", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/706.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/706.png",
      hires: "./Imagens/Pokedex/hires/706.png",
    },
  },
  {
    id: 707,
    name: {
      english: "Klefki",
      japanese: "クレッフィ",
      chinese: "钥圈儿",
      french: "Trousselin",
    },
    type: ["Metal", "Fada"],
    base: {
      HP: 57,
      Attack: 80,
      Defense: 91,
      "Sp. Attack": 80,
      "Sp. Defense": 87,
      Speed: 75,
    },
    species: "Key Ring Pokémon",
    description:
      "Há muito tempo vivia em minas, mas uma vez que os minerais que compõem sua dieta se tornaram mais escassos, Klefki começou a aparecer em assentamentos humanos.",
    evolution: {},
    profile: {
      height: "0.2 m",
      weight: "3 kg",
      egg: ["Mineral"],
      ability: [
        ["Prankster", "false"],
        ["Magician", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/707.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/707.png",
      hires: "./Imagens/Pokedex/hires/707.png",
    },
  },
  {
    id: 708,
    name: {
      english: "Phantump",
      japanese: "ボクレー",
      chinese: "小木灵",
      french: "Brocélôme",
    },
    type: ["Fantasma", "Grama"],
    base: {
      HP: 43,
      Attack: 70,
      Defense: 48,
      "Sp. Attack": 50,
      "Sp. Defense": 60,
      Speed: 38,
    },
    species: "Stump Pokémon",
    description:
      "Um espírito desconhecido veio se alojar em um toco de árvore, criando este Pokémon. Uma cura pode ser feita a partir de uma infusão de suas folhas verdes.",
    evolution: {
      next: [["709", "Trade"]],
    },
    profile: {
      height: "0.4 m",
      weight: "7 kg",
      egg: ["Grama", "Amorphous"],
      ability: [
        ["Natural Cure", "false"],
        ["Frisk", "false"],
        ["Harvest", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/708.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/708.png",
      hires: "./Imagens/Pokedex/hires/708.png",
    },
  },
  {
    id: 709,
    name: {
      english: "Trevenant",
      japanese: "オーロット",
      chinese: "朽木妖",
      french: "Desséliande",
    },
    type: ["Fantasma", "Grama"],
    base: {
      HP: 85,
      Attack: 110,
      Defense: 76,
      "Sp. Attack": 65,
      "Sp. Defense": 82,
      Speed: 56,
    },
    species: "Elder Tree Pokémon",
    description:
      "Este Pokémon controla árvores através de raízes que se estendem de seus pés e atacará qualquer pessoa que ousar devastar a floresta.",
    evolution: {
      prev: ["708", "Trade"],
    },
    profile: {
      height: "1.5 m",
      weight: "71 kg",
      egg: ["Grama", "Amorphous"],
      ability: [
        ["Natural Cure", "false"],
        ["Frisk", "false"],
        ["Harvest", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/709.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/709.png",
      hires: "./Imagens/Pokedex/hires/709.png",
    },
  },
  {
    id: 710,
    name: {
      english: "Pumpkaboo",
      japanese: "バケッチャ",
      chinese: "南瓜精",
      french: "Pitrouille",
    },
    type: ["Fantasma", "Grama"],
    base: {
      HP: 59,
      Attack: 66,
      Defense: 70,
      "Sp. Attack": 44,
      "Sp. Defense": 55,
      Speed: 41,
    },
    species: "Pumpkin Pokémon",
    description:
      "Diz-se que ele carrega espíritos errantes para o lugar a que pertencem para que possam seguir em frente.",
    evolution: {
      next: [["711", "Trade"]],
    },
    profile: {
      height: "0.4 m",
      weight: "5 kg",
      egg: ["Amorphous"],
      ability: [
        ["Pickup", "false"],
        ["Frisk", "false"],
        ["Insomnia", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/710.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/710.png",
      hires: "./Imagens/Pokedex/hires/710.png",
    },
  },
  {
    id: 711,
    name: {
      english: "Gourgeist",
      japanese: "パンプジン",
      chinese: "南瓜怪人",
      french: "Banshitrouye",
    },
    type: ["Fantasma", "Grama"],
    base: {
      HP: 85,
      Attack: 100,
      Defense: 122,
      "Sp. Attack": 58,
      "Sp. Defense": 75,
      Speed: 54,
    },
    species: "Pumpkin Pokémon",
    description:
      "Ele envolve sua presa em seus braços semelhantes a cabelo. Ele canta alegremente enquanto observa o sofrimento de sua presa.",
    evolution: {
      prev: ["710", "Trade"],
    },
    profile: {
      height: "0.9 m",
      weight: "12.5 kg",
      egg: ["Amorphous"],
      ability: [
        ["Pickup", "false"],
        ["Frisk", "false"],
        ["Insomnia", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/711.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/711.png",
      hires: "./Imagens/Pokedex/hires/711.png",
    },
  },
  {
    id: 712,
    name: {
      english: "Bergmite",
      japanese: "カチコール",
      chinese: "冰宝",
      french: "Grelaçon",
    },
    type: ["Gelo"],
    base: {
      HP: 55,
      Attack: 69,
      Defense: 85,
      "Sp. Attack": 32,
      "Sp. Defense": 35,
      Speed: 28,
    },
    species: "Gelo Chunk Pokémon",
    description:
      "Usando ar de -150 graus Fahrenheit, eles congelam oponentes sólidos. Eles vivem em rebanhos acima da linha de neve nas montanhas.",
    evolution: {
      next: [["713", "Level 37"]],
    },
    profile: {
      height: "1 m",
      weight: "99.5 kg",
      egg: ["Monster"],
      ability: [
        ["Own Tempo", "false"],
        ["Gelo Body", "false"],
        ["Sturdy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/712.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/712.png",
      hires: "./Imagens/Pokedex/hires/712.png",
    },
  },
  {
    id: 713,
    name: {
      english: "Avalugg",
      japanese: "クレベース",
      chinese: "冰岩怪",
      french: "Séracrawl",
    },
    type: ["Gelo"],
    base: {
      HP: 95,
      Attack: 117,
      Defense: 184,
      "Sp. Attack": 44,
      "Sp. Defense": 46,
      Speed: 28,
    },
    species: "Geloberg Pokémon",
    description:
      "A maneira como vários Bergmite se aglomeram em suas costas faz com que pareça um porta-aviões feito de gelo.",
    evolution: {
      prev: ["712", "Level 37"],
    },
    profile: {
      height: "2 m",
      weight: "505 kg",
      egg: ["Monster"],
      ability: [
        ["Own Tempo", "false"],
        ["Gelo Body", "false"],
        ["Sturdy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/713.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/713.png",
      hires: "./Imagens/Pokedex/hires/713.png",
    },
  },
  {
    id: 714,
    name: {
      english: "Noibat",
      japanese: "オンバット",
      chinese: "嗡蝠",
      french: "Sonistrelle",
    },
    type: ["Voador", "Dragão"],
    base: {
      HP: 40,
      Attack: 30,
      Defense: 35,
      "Sp. Attack": 45,
      "Sp. Defense": 40,
      Speed: 55,
    },
    species: "Sound Wave Pokémon",
    description:
      "Ele voa em busca de frutas para comer. Ele usa ondas ultrassônicas para detectar quais frutas estão maduras.",
    evolution: {
      next: [["715", "Level 48"]],
    },
    profile: {
      height: "0.5 m",
      weight: "8 kg",
      egg: ["Voador"],
      ability: [
        ["Frisk", "false"],
        ["Infiltrator", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/714.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/714.png",
      hires: "./Imagens/Pokedex/hires/714.png",
    },
  },
  {
    id: 715,
    name: {
      english: "Noivern",
      japanese: "オンバーン",
      chinese: "音波龙",
      french: "Bruyverne",
    },
    type: ["Voador", "Dragão"],
    base: {
      HP: 85,
      Attack: 70,
      Defense: 80,
      "Sp. Attack": 97,
      "Sp. Defense": 80,
      Speed: 123,
    },
    species: "Sound Wave Pokémon",
    description:
      "Este Pokémon de sangue quente ataca qualquer coisa que vê com ondas ultrassônicas que podem esmagar pedras.",
    evolution: {
      prev: ["714", "Level 48"],
    },
    profile: {
      height: "1.5 m",
      weight: "85 kg",
      egg: ["Voador"],
      ability: [
        ["Frisk", "false"],
        ["Infiltrator", "false"],
        ["Telepathy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/715.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/715.png",
      hires: "./Imagens/Pokedex/hires/715.png",
    },
  },
  {
    id: 716,
    name: {
      english: "Xerneas",
      japanese: "ゼルネアス",
      chinese: "哲尔尼亚斯",
      french: "Xerneas",
    },
    type: ["Fada"],
    base: {
      HP: 126,
      Attack: 131,
      Defense: 95,
      "Sp. Attack": 131,
      "Sp. Defense": 98,
      Speed: 99,
    },
    species: "Life Pokémon",
    description:
      "Quando os chifres em sua cabeça brilham em sete cores, diz-se que está compartilhando vida eterna.",
    evolution: {},
    profile: {
      height: "3 m",
      weight: "215 kg",
      egg: ["Undiscovered"],
      ability: [["Fada Aura", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/716.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/716.png",
      hires: "./Imagens/Pokedex/hires/716.png",
    },
  },
  {
    id: 717,
    name: {
      english: "Yveltal",
      japanese: "イベルタル",
      chinese: "伊裴尔塔尔",
      french: "Yveltal",
    },
    type: ["Sombrio", "Voador"],
    base: {
      HP: 126,
      Attack: 131,
      Defense: 95,
      "Sp. Attack": 131,
      "Sp. Defense": 98,
      Speed: 99,
    },
    species: "Destruction Pokémon",
    description:
      "Quando sua vida chega ao fim, ele absorve a energia vital de todos os seres vivos e se transforma em um casulo mais uma vez.",
    evolution: {},
    profile: {
      height: "5.8 m",
      weight: "203 kg",
      egg: ["Undiscovered"],
      ability: [["Sombrio Aura", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/717.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/717.png",
      hires: "./Imagens/Pokedex/hires/717.png",
    },
  },
  {
    id: 718,
    name: {
      english: "Zygarde",
      japanese: "ジガルデ",
      chinese: "基格尔德",
      french: "Zygarde",
    },
    type: ["Dragão", "Terra"],
    base: {
      HP: 108,
      Attack: 100,
      Defense: 121,
      "Sp. Attack": 81,
      "Sp. Defense": 95,
      Speed: 95,
    },
    species: "Order Pokémon",
    description:
      "Alguns dizem que ele pode mudar para uma forma ainda mais poderosa quando lutar contra aqueles que ameaçam o ecossistema.",
    evolution: {},
    profile: {
      height: "5 m",
      weight: "305 kg",
      egg: ["Undiscovered"],
      ability: [["Aura Break", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/718.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/718.png",
      hires: "./Imagens/Pokedex/hires/718.png",
    },
  },
  {
    id: 719,
    name: {
      english: "Diancie",
      japanese: "ディアンシー",
      chinese: "蒂安希",
      french: "Diancie",
    },
    type: ["Rocha", "Fada"],
    base: {
      HP: 50,
      Attack: 100,
      Defense: 150,
      "Sp. Attack": 100,
      "Sp. Defense": 150,
      Speed: 50,
    },
    species: "Jewel Pokémon",
    description:
      "Ele pode criar instantaneamente muitos diamantes comprimindo o carbono no ar entre suas mãos.",
    evolution: {},
    profile: {
      height: "0.7 m",
      weight: "8.8 kg",
      egg: ["Undiscovered"],
      ability: [["Clear Body", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/719.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/719.png",
      hires: "./Imagens/Pokedex/hires/719.png",
    },
  },
  {
    id: 720,
    name: {
      english: "Hoopa",
      japanese: "フーパ",
      chinese: "胡帕",
      french: "Hoopa",
    },
    type: ["Psíquico", "Fantasma"],
    base: {
      HP: 80,
      Attack: 110,
      Defense: 60,
      "Sp. Attack": 150,
      "Sp. Defense": 130,
      Speed: 70,
    },
    species: "Mischief Pokémon",
    description:
      "Diz-se que ele é capaz de agarrar qualquer coisa que desejar com seus seis anéis e seis braços enormes. Com seu poder selado, ele é transformado em uma forma muito menor.",
    evolution: {},
    profile: {
      height: "0.5 m",
      weight: "9 kg",
      egg: ["Undiscovered"],
      ability: [["Magician", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/720.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/720.png",
      hires: "./Imagens/Pokedex/hires/720.png",
    },
  },
  {
    id: 721,
    name: {
      english: "Volcanion",
      japanese: "ボルケニオン",
      chinese: "波尔凯尼恩",
      french: "Volcanion",
    },
    type: ["Fogo", "Água"],
    base: {
      HP: 80,
      Attack: 110,
      Defense: 120,
      "Sp. Attack": 130,
      "Sp. Defense": 90,
      Speed: 70,
    },
    species: "Steam Pokémon",
    description:
      "Ele expele seu vapor interno dos braços nas costas. Ele tem poder suficiente para explodir uma montanha.",
    evolution: {},
    profile: {
      height: "1.7 m",
      weight: "195 kg",
      egg: ["Undiscovered"],
      ability: [["Água Absorb", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/721.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/721.png",
      hires: "./Imagens/Pokedex/hires/721.png",
    },
  },
  {
    id: 722,
    name: {
      english: "Rowlet",
      japanese: "モクロー",
      chinese: "木木枭",
      french: "Brindibou",
    },
    type: ["Grama", "Voador"],
    base: {
      HP: 68,
      Attack: 55,
      Defense: 55,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      Speed: 42,
    },
    species: "Grama Quill Pokémon",
    description:
      "Ele se sente relaxado em lugares apertados e escuros e é conhecido por usar o bolso ou bolsa de seu treinador como um ninho.",
    evolution: {
      next: [["723", "Level 17"]],
    },
    profile: {
      height: "0.3 m",
      weight: "1.5 kg",
      egg: ["Voador"],
      ability: [
        ["Overgrow", "false"],
        ["Long Reach", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/722.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/722.png",
      hires: "./Imagens/Pokedex/hires/722.png",
    },
  },
  {
    id: 723,
    name: {
      english: "Dartrix",
      japanese: "フクスロー",
      chinese: "投羽枭",
      french: "Efflèche",
    },
    type: ["Grama", "Voador"],
    base: {
      HP: 78,
      Attack: 75,
      Defense: 75,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      Speed: 52,
    },
    species: "Blade Quill Pokémon",
    description:
      "Extremamente sensível à presença dos outros, ele pode detectar oponentes atrás dele, lançando suas penas afiadas para tirá-los.",
    evolution: {
      prev: ["722", "Level 17"],
      next: [["724", "Level 34"]],
    },
    profile: {
      height: "0.7 m",
      weight: "16 kg",
      egg: ["Voador"],
      ability: [
        ["Overgrow", "false"],
        ["Long Reach", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/723.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/723.png",
      hires: "./Imagens/Pokedex/hires/723.png",
    },
  },
  {
    id: 724,
    name: {
      english: "Decidueye",
      japanese: "ジュナイパー",
      chinese: "狙射树枭",
      french: "Archéduc",
    },
    type: ["Grama", "Fantasma"],
    base: {
      HP: 78,
      Attack: 107,
      Defense: 75,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 70,
    },
    species: "Arrow Quill Pokémon",
    description:
      "Decidueye pode colocar uma flecha em um inimigo em um décimo de segundo, então suas batalhas são decididas em um piscar de olhos.",
    evolution: {
      prev: ["723", "Level 34"],
    },
    profile: {
      height: "1.6 m",
      weight: "36.6 kg",
      egg: ["Voador"],
      ability: [
        ["Overgrow", "false"],
        ["Long Reach", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/724.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/724.png",
      hires: "./Imagens/Pokedex/hires/724.png",
    },
  },
  {
    id: 725,
    name: {
      english: "Litten",
      japanese: "ニャビー",
      chinese: "火斑喵",
      french: "Flamiaou",
    },
    type: ["Fogo"],
    base: {
      HP: 45,
      Attack: 65,
      Defense: 40,
      "Sp. Attack": 60,
      "Sp. Defense": 40,
      Speed: 70,
    },
    species: "Fogo Cat Pokémon",
    description:
      "Seu casaco cresce duas vezes por ano. Quando chega a hora, Litten incendeia seu próprio corpo e queima o pelo velho.",
    evolution: {
      next: [["726", "Level 17"]],
    },
    profile: {
      height: "0.4 m",
      weight: "4.3 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Intimidate", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/725.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/725.png",
      hires: "./Imagens/Pokedex/hires/725.png",
    },
  },
  {
    id: 726,
    name: {
      english: "Torracat",
      japanese: "ニャヒート",
      chinese: "炎热喵",
      french: "Matoufeu",
    },
    type: ["Fogo"],
    base: {
      HP: 65,
      Attack: 85,
      Defense: 50,
      "Sp. Attack": 80,
      "Sp. Defense": 50,
      Speed: 90,
    },
    species: "Fogo Cat Pokémon",
    description:
      "Quando sua juba está de pé, você pode dizer que está se sentindo bem. Quando não está se sentindo bem, sua pelagem ficará deitada.",
    evolution: {
      prev: ["725", "Level 17"],
      next: [["727", "Level 34"]],
    },
    profile: {
      height: "0.7 m",
      weight: "25 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Intimidate", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/726.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/726.png",
      hires: "./Imagens/Pokedex/hires/726.png",
    },
  },
  {
    id: 727,
    name: {
      english: "Incineroar",
      japanese: "ガオガエン",
      chinese: "炽焰咆哮虎",
      french: "Félinferno",
    },
    type: ["Fogo", "Sombrio"],
    base: {
      HP: 95,
      Attack: 115,
      Defense: 90,
      "Sp. Attack": 80,
      "Sp. Defense": 90,
      Speed: 60,
    },
    species: "Heel Pokémon",
    description:
      "Quando seu espírito de luta é acendido, as chamas ao redor de sua cintura se tornam especialmente intensas.",
    evolution: {
      prev: ["726", "Level 34"],
    },
    profile: {
      height: "1.8 m",
      weight: "83 kg",
      egg: ["Field"],
      ability: [
        ["Blaze", "false"],
        ["Intimidate", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/727.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/727.png",
      hires: "./Imagens/Pokedex/hires/727.png",
    },
  },
  {
    id: 728,
    name: {
      english: "Popplio",
      japanese: "アシマリ",
      chinese: "球球海狮",
      french: "Otaquin",
    },
    type: ["Água"],
    base: {
      HP: 50,
      Attack: 54,
      Defense: 54,
      "Sp. Attack": 66,
      "Sp. Defense": 56,
      Speed: 40,
    },
    species: "Sea Lion Pokémon",
    description:
      "Popplio fica em cima de seus balões de água quicantes para pular mais alto. É um lutador bastante acrobático!",
    evolution: {
      next: [["729", "Level 17"]],
    },
    profile: {
      height: "0.4 m",
      weight: "7.5 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Torrent", "false"],
        ["Liquid VoGelo", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/728.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/728.png",
      hires: "./Imagens/Pokedex/hires/728.png",
    },
  },
  {
    id: 729,
    name: {
      english: "Brionne",
      japanese: "オシャマリ",
      chinese: "花漾海狮",
      french: "Otarlette",
    },
    type: ["Água"],
    base: {
      HP: 60,
      Attack: 69,
      Defense: 69,
      "Sp. Attack": 91,
      "Sp. Defense": 81,
      Speed: 50,
    },
    species: "Pop Star Pokémon",
    description:
      "Ele ataca batendo em seus inimigos com os balões de água explosivos que cria.",
    evolution: {
      prev: ["728", "Level 17"],
      next: [["730", "Level 34"]],
    },
    profile: {
      height: "0.6 m",
      weight: "17.5 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Torrent", "false"],
        ["Liquid VoGelo", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/729.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/729.png",
      hires: "./Imagens/Pokedex/hires/729.png",
    },
  },
  {
    id: 730,
    name: {
      english: "Primarina",
      japanese: "アシレーヌ",
      chinese: "西狮海壬",
      french: "Oratoria",
    },
    type: ["Água", "Fada"],
    base: {
      HP: 80,
      Attack: 74,
      Defense: 74,
      "Sp. Attack": 126,
      "Sp. Defense": 116,
      Speed: 60,
    },
    species: "Soloist Pokémon",
    description:
      "Também conhecida como cantora, ela tem um visual fantástico em noites de luar quando lidera sua colônia em canto.",
    evolution: {
      prev: ["729", "Level 34"],
    },
    profile: {
      height: "1.8 m",
      weight: "44 kg",
      egg: ["Água 1", "Field"],
      ability: [
        ["Torrent", "false"],
        ["Liquid VoGelo", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/730.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/730.png",
      hires: "./Imagens/Pokedex/hires/730.png",
    },
  },
  {
    id: 731,
    name: {
      english: "Pikipek",
      japanese: "ツツケラ",
      chinese: "小笃儿",
      french: "Picassaut",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 35,
      Attack: 75,
      Defense: 30,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 65,
    },
    species: "Woodpecker Pokémon",
    description:
      "Pode parecer filiforme, mas seus músculos do pescoço são pesados. Ele pode bicar uma árvore 16 vezes por segundo!",
    evolution: {
      next: [["732", "Level 14"]],
    },
    profile: {
      height: "0.3 m",
      weight: "1.2 kg",
      egg: ["Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Skill Link", "false"],
        ["Pickup", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/731.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/731.png",
      hires: "./Imagens/Pokedex/hires/731.png",
    },
  },
  {
    id: 732,
    name: {
      english: "Trumbeak",
      japanese: "ケララッパ",
      chinese: "喇叭啄鸟",
      french: "Piclairon",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 55,
      Attack: 85,
      Defense: 50,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      Speed: 75,
    },
    species: "Insetole Beak Pokémon",
    description:
      "De sua boca, ele dispara as sementes de bagas que comeu. As sementes espalhadas dão origem a novas plantas.",
    evolution: {
      prev: ["731", "Level 14"],
      next: [["733", "Level 28"]],
    },
    profile: {
      height: "0.6 m",
      weight: "14.8 kg",
      egg: ["Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Skill Link", "false"],
        ["Pickup", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/732.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/732.png",
      hires: "./Imagens/Pokedex/hires/732.png",
    },
  },
  {
    id: 733,
    name: {
      english: "Toucannon",
      japanese: "ドデカバシ",
      chinese: "铳嘴大鸟",
      french: "Bazoucan",
    },
    type: ["Normal", "Voador"],
    base: {
      HP: 80,
      Attack: 120,
      Defense: 75,
      "Sp. Attack": 75,
      "Sp. Defense": 75,
      Speed: 60,
    },
    species: "Cannon Pokémon",
    description:
      "Conhecido por formar casais harmoniosos, este Pokémon é trazido para cerimônias de casamento como um amuleto da sorte.",
    evolution: {
      prev: ["732", "Level 28"],
    },
    profile: {
      height: "1.1 m",
      weight: "26 kg",
      egg: ["Voador"],
      ability: [
        ["Keen Eye", "false"],
        ["Skill Link", "false"],
        ["Sheer Force", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/733.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/733.png",
      hires: "./Imagens/Pokedex/hires/733.png",
    },
  },
  {
    id: 734,
    name: {
      english: "Yungoos",
      japanese: "ヤングース",
      chinese: "猫鼬少",
      french: "Manglouton",
    },
    type: ["Normal"],
    base: {
      HP: 48,
      Attack: 70,
      Defense: 30,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      Speed: 45,
    },
    species: "Loitering Pokémon",
    description:
      "Embora coma de tudo, prefere coisas vivas frescas, por isso marcha pelas ruas em busca de presas.",
    evolution: {
      next: [["735", "Level 20, Daytime"]],
    },
    profile: {
      height: "0.4 m",
      weight: "6 kg",
      egg: ["Field"],
      ability: [
        ["Stakeout", "false"],
        ["Strong Jaw", "false"],
        ["Adaptability", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/734.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/734.png",
      hires: "./Imagens/Pokedex/hires/734.png",
    },
  },
  {
    id: 735,
    name: {
      english: "Gumshoos",
      japanese: "デカグース",
      chinese: "猫鼬探长",
      french: "Argouste",
    },
    type: ["Normal"],
    base: {
      HP: 88,
      Attack: 110,
      Defense: 60,
      "Sp. Attack": 55,
      "Sp. Defense": 60,
      Speed: 45,
    },
    species: "Stakeout Pokémon",
    description:
      "Paciente por natureza, este Pokémon perde o controle de si mesmo e se lança quando vê sua refeição favorita - Rattata!",
    evolution: {
      prev: ["734", "Level 20, Daytime"],
    },
    profile: {
      height: "0.7 m",
      weight: "14.2 kg",
      egg: ["Field"],
      ability: [
        ["Stakeout", "false"],
        ["Strong Jaw", "false"],
        ["Adaptability", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/735.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/735.png",
      hires: "./Imagens/Pokedex/hires/735.png",
    },
  },
  {
    id: 736,
    name: {
      english: "Grubbin",
      japanese: "アゴジムシ",
      chinese: "强颚鸡母虫",
      french: "Larvibule",
    },
    type: ["Inseto"],
    base: {
      HP: 47,
      Attack: 62,
      Defense: 45,
      "Sp. Attack": 55,
      "Sp. Defense": 45,
      Speed: 46,
    },
    species: "Larva Pokémon",
    description:
      "Ele cospe um fio pegajoso para parar os oponentes em suas trilhas e depois os agarra em suas mandíbulas afiadas e resistentes para derrubá-los.",
    evolution: {
      next: [["737", "Level 20"]],
    },
    profile: {
      height: "0.4 m",
      weight: "4.4 kg",
      egg: ["Inseto"],
      ability: [["Swarm", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/736.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/736.png",
      hires: "./Imagens/Pokedex/hires/736.png",
    },
  },
  {
    id: 737,
    name: {
      english: "CharjaInseto",
      japanese: "デンヂムシ",
      chinese: "虫电宝",
      french: "Chrysapile",
    },
    type: ["Inseto", "Elétrico"],
    base: {
      HP: 57,
      Attack: 82,
      Defense: 95,
      "Sp. Attack": 55,
      "Sp. Defense": 75,
      Speed: 36,
    },
    species: "Battery Pokémon",
    description:
      "Sua concha robusta fornece excelente defesa contra ataques. Ele usa eletricidade em oponentes persistentes.",
    evolution: {
      prev: ["736", "Level 20"],
      next: [["738", "Level up in a Magnetic Field area"]],
    },
    profile: {
      height: "0.5 m",
      weight: "10.5 kg",
      egg: ["Inseto"],
      ability: [["Battery", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/737.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/737.png",
      hires: "./Imagens/Pokedex/hires/737.png",
    },
  },
  {
    id: 738,
    name: {
      english: "Vikavolt",
      japanese: "クワガノン",
      chinese: "锹农炮虫",
      french: "Lucanon",
    },
    type: ["Inseto", "Elétrico"],
    base: {
      HP: 77,
      Attack: 70,
      Defense: 90,
      "Sp. Attack": 145,
      "Sp. Defense": 75,
      Speed: 43,
    },
    species: "Stag Beetle Pokémon",
    description:
      "Vikavolt atrapalha oponentes com manobras de vôo acrobáticas. Isso cria uma abertura para ele lançar um ataque de feixe elétrico.",
    evolution: {
      prev: [
        "737",
        "use Thunder Stone, in Gen 8, or level up in a Magnetic Field area",
      ],
    },
    profile: {
      height: "1.5 m",
      weight: "45 kg",
      egg: ["Inseto"],
      ability: [["Levitate", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/738.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/738.png",
      hires: "./Imagens/Pokedex/hires/738.png",
    },
  },
  {
    id: 739,
    name: {
      english: "Crabrawler",
      japanese: "マケンカニ",
      chinese: "好胜蟹",
      french: "Crabagarre",
    },
    type: ["Lutador"],
    base: {
      HP: 47,
      Attack: 82,
      Defense: 57,
      "Sp. Attack": 42,
      "Sp. Defense": 47,
      Speed: 63,
    },
    species: "Boxing Pokémon",
    description:
      "Crabrawler é conhecido por confundir Exeggutor com uma palmeira de coco e subir nela. O Exeggutor enfurecido o sacude e o pisa.",
    evolution: {
      next: [["740", "at Mount Lanakila"]],
    },
    profile: {
      height: "0.6 m",
      weight: "7 kg",
      egg: ["Água 3"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Iron Fist", "false"],
        ["Anger Point", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/739.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/739.png",
      hires: "./Imagens/Pokedex/hires/739.png",
    },
  },
  {
    id: 740,
    name: {
      english: "Crabominable",
      japanese: "ケケンカニ",
      chinese: "好胜毛蟹",
      french: "Crabominable",
    },
    type: ["Lutador", "Gelo"],
    base: {
      HP: 97,
      Attack: 132,
      Defense: 77,
      "Sp. Attack": 62,
      "Sp. Defense": 67,
      Speed: 43,
    },
    species: "Woolly Crab Pokémon",
    description:
      "Antes de parar para pensar, ele apenas começa a socar. Existem registros de que ele reverteu avalanches com uma enxurrada de socos.",
    evolution: {
      prev: ["739", "at Mount Lanakila"],
    },
    profile: {
      height: "1.7 m",
      weight: "180 kg",
      egg: ["Água 3"],
      ability: [
        ["Hyper Cutter", "false"],
        ["Iron Fist", "false"],
        ["Anger Point", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/740.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/740.png",
      hires: "./Imagens/Pokedex/hires/740.png",
    },
  },
  {
    id: 741,
    name: {
      english: "Oricorio",
      japanese: "オドリドリ",
      chinese: "花舞鸟",
      french: "Plumeline",
    },
    type: ["Fogo", "Voador"],
    base: {
      HP: 75,
      Attack: 70,
      Defense: 70,
      "Sp. Attack": 98,
      "Sp. Defense": 70,
      Speed: 93,
    },
    species: "Dancing Pokémon",
    description:
      "Este Oricorio bebeu néctar vermelho. Se seu treinador der a ordem errada, este Pokémon apaixonado fica ferozmente zangado.",
    evolution: {},
    profile: {
      height: "0.6 m",
      weight: "3.4 kg",
      egg: ["Voador"],
      ability: [["Dancer", "false"]],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/741.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/741.png",
      hires: "./Imagens/Pokedex/hires/741.png",
    },
  },
  {
    id: 742,
    name: {
      english: "Cutiefly",
      japanese: "アブリー",
      chinese: "萌虻",
      french: "Bombydou",
    },
    type: ["Inseto", "Fada"],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 40,
      "Sp. Attack": 55,
      "Sp. Defense": 40,
      Speed: 84,
    },
    species: "Bee Fly Pokémon",
    description:
      "Cutiefly pode pegar as auras de seres vivos. Ele lê habilmente essas auras para prever os movimentos de seus inimigos e torná-los tolos.",
    evolution: {
      next: [["743", "Level 25"]],
    },
    profile: {
      height: "0.1 m",
      weight: "0.2 kg",
      egg: ["Inseto", "Fada"],
      ability: [
        ["Honey Gather", "false"],
        ["Shield Dust", "false"],
        ["Sweet Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/742.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/742.png",
      hires: "./Imagens/Pokedex/hires/742.png",
    },
  },
  {
    id: 743,
    name: {
      english: "Ribombee",
      japanese: "アブリボン",
      chinese: "蝶结萌虻",
      french: "Rubombelle",
    },
    type: ["Inseto", "Fada"],
    base: {
      HP: 60,
      Attack: 55,
      Defense: 60,
      "Sp. Attack": 95,
      "Sp. Defense": 70,
      Speed: 124,
    },
    species: "Bee Fly Pokémon",
    description:
      "Ele pode prever o clima a partir dos níveis de umidade e da direção do vento. Ribombee só se revela quando há alguns dias claros seguidos.",
    evolution: {
      prev: ["742", "Level 25"],
    },
    profile: {
      height: "0.2 m",
      weight: "0.5 kg",
      egg: ["Inseto", "Fada"],
      ability: [
        ["Honey Gather", "false"],
        ["Shield Dust", "false"],
        ["Sweet Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/743.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/743.png",
      hires: "./Imagens/Pokedex/hires/743.png",
    },
  },
  {
    id: 744,
    name: {
      english: "Rocharuff",
      japanese: "イワンコ",
      chinese: "岩狗狗",
      french: "Rocabot",
    },
    type: ["Rocha"],
    base: {
      HP: 45,
      Attack: 65,
      Defense: 40,
      "Sp. Attack": 30,
      "Sp. Defense": 40,
      Speed: 60,
    },
    species: "Puppy Pokémon",
    description:
      "Quando ele esfrega as pedras em seu pescoço em você, isso é prova de seu amor por você. No entanto, as pedras são afiadas, então o gesto é bastante doloroso!",
    evolution: {
      next: [["745", "Level 25"]],
    },
    profile: {
      height: "0.5 m",
      weight: "9.2 kg",
      egg: ["Field"],
      ability: [
        ["Keen Eye", "false"],
        ["Vital Spirit", "false"],
        ["Steadfast", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/744.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/744.png",
      hires: "./Imagens/Pokedex/hires/744.png",
    },
  },
  {
    id: 745,
    name: {
      english: "Lycanroc",
      japanese: "ルガルガン",
      chinese: "鬃岩狼人",
      french: "Lougaroc",
    },
    type: ["Rocha"],
    base: {
      HP: 75,
      Attack: 115,
      Defense: 65,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      Speed: 112,
    },
    species: "Wolf Pokémon",
    description:
      "As pedras em sua juba são mais afiadas que uma faca. Fragmentos que se desprendem são considerados amuletos da sorte.",
    evolution: {
      prev: ["744", "Level 25"],
    },
    profile: {
      height: "0.8 m",
      weight: "25 kg",
      egg: ["Field"],
      ability: [
        ["Keen Eye", "false"],
        ["Sand Rush", "false"],
        ["Steadfast", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/745.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/745.png",
      hires: "./Imagens/Pokedex/hires/745.png",
    },
  },
  {
    id: 746,
    name: {
      english: "Wishiwashi",
      japanese: "ヨワシ",
      chinese: "弱丁鱼",
      french: "Froussardine",
    },
    type: ["Água"],
    base: {
      HP: 45,
      Attack: 20,
      Defense: 20,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      Speed: 40,
    },
    species: "Small Fry Pokémon",
    description:
      "Quando está em apuros, seus olhos brilhantes atraem outros de sua espécie. A luz de seus olhos é visível a quase 25 milhas de distância.",
    evolution: {},
    profile: {
      height: "0.2 m",
      weight: "0.3 kg",
      egg: ["Água 2"],
      ability: [["Schooling", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/746.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/746.png",
      hires: "./Imagens/Pokedex/hires/746.png",
    },
  },
  {
    id: 747,
    name: {
      english: "Mareanie",
      japanese: "ヒドイデ",
      chinese: "好坏星",
      french: "Vorastérie",
    },
    type: ["Venenoso", "Água"],
    base: {
      HP: 50,
      Attack: 53,
      Defense: 62,
      "Sp. Attack": 43,
      "Sp. Defense": 52,
      Speed: 45,
    },
    species: "Brutal Star Pokémon",
    description:
      "Além de sua cabeça, suas partes do corpo se regeneram rapidamente se forem cortadas. Depois de uma boa noite de sono, Mareanie volta ao normal.",
    evolution: {
      next: [["748", "Level 38"]],
    },
    profile: {
      height: "0.4 m",
      weight: "8 kg",
      egg: ["Água 1"],
      ability: [
        ["Merciless", "false"],
        ["Limber", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/747.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/747.png",
      hires: "./Imagens/Pokedex/hires/747.png",
    },
  },
  {
    id: 748,
    name: {
      english: "Toxapex",
      japanese: "ドヒドイデ",
      chinese: "超坏星",
      french: "Prédastérie",
    },
    type: ["Venenoso", "Água"],
    base: {
      HP: 50,
      Attack: 63,
      Defense: 152,
      "Sp. Attack": 53,
      "Sp. Defense": 142,
      Speed: 35,
    },
    species: "Brutal Star Pokémon",
    description:
      "Com suas 12 pernas, ele cria uma cúpula para se abrigar dentro. O fluxo das marés não afeta Toxapex lá dentro, por isso é muito confortável.",
    evolution: {
      prev: ["747", "Level 38"],
    },
    profile: {
      height: "0.7 m",
      weight: "14.5 kg",
      egg: ["Água 1"],
      ability: [
        ["Merciless", "false"],
        ["Limber", "false"],
        ["Regenerator", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/748.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/748.png",
      hires: "./Imagens/Pokedex/hires/748.png",
    },
  },
  {
    id: 749,
    name: {
      english: "Mudbray",
      japanese: "ドロバンコ",
      chinese: "泥驴仔",
      french: "Tiboudet",
    },
    type: ["Terra"],
    base: {
      HP: 70,
      Attack: 100,
      Defense: 70,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      Speed: 45,
    },
    species: "Donkey Pokémon",
    description:
      "Possuindo um poder poderoso, Mudbray pode ser carregado com 50 vezes seu próprio peso corporal e ficará totalmente bem.",
    evolution: {
      next: [["750", "Level 30"]],
    },
    profile: {
      height: "1 m",
      weight: "110 kg",
      egg: ["Field"],
      ability: [
        ["Own Tempo", "false"],
        ["Stamina", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/749.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/749.png",
      hires: "./Imagens/Pokedex/hires/749.png",
    },
  },
  {
    id: 750,
    name: {
      english: "Mudsdale",
      japanese: "バンバドロ",
      chinese: "重泥挽马",
      french: "Bourrinos",
    },
    type: ["Terra"],
    base: {
      HP: 100,
      Attack: 125,
      Defense: 100,
      "Sp. Attack": 55,
      "Sp. Defense": 85,
      Speed: 35,
    },
    species: "Draft Horse Pokémon",
    description:
      "Ele pode caminhar pelas estradas da montanha sem descanso por três dias e três noites, enquanto arrasta uma carga de 10 toneladas.",
    evolution: {
      prev: ["749", "Level 30"],
    },
    profile: {
      height: "2.5 m",
      weight: "920 kg",
      egg: ["Field"],
      ability: [
        ["Own Tempo", "false"],
        ["Stamina", "false"],
        ["Inner Focus", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/750.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/750.png",
      hires: "./Imagens/Pokedex/hires/750.png",
    },
  },
  {
    id: 751,
    name: {
      english: "Dewpider",
      japanese: "シズクモ",
      chinese: "滴蛛",
      french: "Araqua",
    },
    type: ["Água", "Inseto"],
    base: {
      HP: 38,
      Attack: 40,
      Defense: 52,
      "Sp. Attack": 40,
      "Sp. Defense": 72,
      Speed: 27,
    },
    species: "Água Bubble Pokémon",
    description:
      "Ele só pode respirar oxigênio que se dissolveu na água, por isso usa uma bolha de água na cabeça quando caminha na terra.",
    evolution: {
      next: [["752", "Level 22"]],
    },
    profile: {
      height: "0.3 m",
      weight: "4 kg",
      egg: ["Água 1", "Inseto"],
      ability: [
        ["Água Bubble", "false"],
        ["Água Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/751.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/751.png",
      hires: "./Imagens/Pokedex/hires/751.png",
    },
  },
  {
    id: 752,
    name: {
      english: "Araquanid",
      japanese: "オニシズクモ",
      chinese: "滴蛛霸",
      french: "Tarenbulle",
    },
    type: ["Água", "Inseto"],
    base: {
      HP: 68,
      Attack: 70,
      Defense: 92,
      "Sp. Attack": 50,
      "Sp. Defense": 132,
      Speed: 42,
    },
    species: "Água Bubble Pokémon",
    description:
      "Ele tem o hábito de armazenar coisas que valoriza em sua bolha de água. Se seu treinador não tomar cuidado, Araquanid tentará colocá-los em sua bolha!",
    evolution: {
      prev: ["751", "Level 22"],
    },
    profile: {
      height: "1.8 m",
      weight: "82 kg",
      egg: ["Água 1", "Inseto"],
      ability: [
        ["Água Bubble", "false"],
        ["Água Absorb", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/752.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/752.png",
      hires: "./Imagens/Pokedex/hires/752.png",
    },
  },
  {
    id: 753,
    name: {
      english: "Fomantis",
      japanese: "カリキリ",
      chinese: "伪螳草",
      french: "Mimantis",
    },
    type: ["Grama"],
    base: {
      HP: 40,
      Attack: 55,
      Defense: 35,
      "Sp. Attack": 50,
      "Sp. Defense": 35,
      Speed: 35,
    },
    species: "Sickle Grama Pokémon",
    description:
      "Ele adora o sol. Quando toma banho de sol regularmente, cresce com coloração vívida.",
    evolution: {
      next: [["754", "Level 34, Daytime"]],
    },
    profile: {
      height: "0.3 m",
      weight: "1.5 kg",
      egg: ["Grama"],
      ability: [
        ["Leaf Guard", "false"],
        ["Contrary", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/753.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/753.png",
      hires: "./Imagens/Pokedex/hires/753.png",
    },
  },
  {
    id: 754,
    name: {
      english: "Lurantis",
      japanese: "ラランテス",
      chinese: "兰螳花",
      french: "Floramantis",
    },
    type: ["Grama"],
    base: {
      HP: 70,
      Attack: 105,
      Defense: 90,
      "Sp. Attack": 80,
      "Sp. Defense": 90,
      Speed: 45,
    },
    species: "Bloom Sickle Pokémon",
    description:
      "Enquanto corta seus inimigos, parece que está dançando. Sua aparência elegante levou alguns a chamá-lo de Pokémon Grama mais glamoroso.",
    evolution: {
      prev: ["753", "Level 34, Daytime"],
    },
    profile: {
      height: "0.9 m",
      weight: "18.5 kg",
      egg: ["Grama"],
      ability: [
        ["Leaf Guard", "false"],
        ["Contrary", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/754.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/754.png",
      hires: "./Imagens/Pokedex/hires/754.png",
    },
  },
  {
    id: 755,
    name: {
      english: "Morelull",
      japanese: "ネマシュ",
      chinese: "睡睡菇",
      french: "Spododo",
    },
    type: ["Grama", "Fada"],
    base: {
      HP: 40,
      Attack: 35,
      Defense: 55,
      "Sp. Attack": 65,
      "Sp. Defense": 75,
      Speed: 15,
    },
    species: "Illuminating Pokémon",
    description:
      "Ele gosta de lugares úmidos e escuros. Quando cai a noite, os esporos que enchem as tampas de seus cogumelos brilham.",
    evolution: {
      next: [["756", "Level 24"]],
    },
    profile: {
      height: "0.2 m",
      weight: "1.5 kg",
      egg: ["Grama"],
      ability: [
        ["Illuminate", "false"],
        ["Effect Spore", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/755.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/755.png",
      hires: "./Imagens/Pokedex/hires/755.png",
    },
  },
  {
    id: 756,
    name: {
      english: "Shiinotic",
      japanese: "マシェード",
      chinese: "灯罩夜菇",
      french: "Lampignon",
    },
    type: ["Grama", "Fada"],
    base: {
      HP: 60,
      Attack: 45,
      Defense: 80,
      "Sp. Attack": 90,
      "Sp. Defense": 100,
      Speed: 30,
    },
    species: "Illuminating Pokémon",
    description:
      "Quando começa a lutar por território com Parasect, toda a área fica completamente coberta de esporos!",
    evolution: {
      prev: ["755", "Level 24"],
    },
    profile: {
      height: "1 m",
      weight: "11.5 kg",
      egg: ["Grama"],
      ability: [
        ["Illuminate", "false"],
        ["Effect Spore", "false"],
        ["Rain Dish", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/756.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/756.png",
      hires: "./Imagens/Pokedex/hires/756.png",
    },
  },
  {
    id: 757,
    name: {
      english: "Salandit",
      japanese: "ヤトウモリ",
      chinese: "夜盗火蜥",
      french: "Tritox",
    },
    type: ["Venenoso", "Fogo"],
    base: {
      HP: 48,
      Attack: 44,
      Defense: 40,
      "Sp. Attack": 71,
      "Sp. Defense": 40,
      Speed: 77,
    },
    species: "Toxic Lizard Pokémon",
    description:
      "Ele enfraquece oponentes e os manda cambaleando com seu gás venenoso. Salandit não lida bem com Spinda, já que está sempre cambaleando.",
    evolution: {
      next: [["758", "Level 33, Female"]],
    },
    profile: {
      height: "0.6 m",
      weight: "4.8 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Corrosion", "false"],
        ["Oblivious", "true"],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/757.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/757.png",
      hires: "./Imagens/Pokedex/hires/757.png",
    },
  },
  {
    id: 758,
    name: {
      english: "Salazzle",
      japanese: "エンニュート",
      chinese: "焰后蜥",
      french: "Malamandre",
    },
    type: ["Venenoso", "Fogo"],
    base: {
      HP: 68,
      Attack: 64,
      Defense: 60,
      "Sp. Attack": 111,
      "Sp. Defense": 60,
      Speed: 117,
    },
    species: "Toxic Lizard Pokémon",
    description:
      "Ele pune Salandit que não conseguiu trazer comida com uma bofetada feroz de sua palma lançadora de chamas.",
    evolution: {
      prev: ["757", "Level 33, Female"],
    },
    profile: {
      height: "1.2 m",
      weight: "22.2 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Corrosion", "false"],
        ["Oblivious", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/758.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/758.png",
      hires: "./Imagens/Pokedex/hires/758.png",
    },
  },
  {
    id: 759,
    name: {
      english: "Stufful",
      japanese: "ヌイコグマ",
      chinese: "童偶熊",
      french: "Nounourson",
    },
    type: ["Normal", "Lutador"],
    base: {
      HP: 70,
      Attack: 75,
      Defense: 50,
      "Sp. Attack": 45,
      "Sp. Defense": 50,
      Speed: 50,
    },
    species: "Flailing Pokémon",
    description:
      "Stufful odeia ser abraçado ou tocado de qualquer maneira. Ele se contorcerá, se contorcerá e resistirá com incrível poder.",
    evolution: {
      next: [["760", "Level 27"]],
    },
    profile: {
      height: "0.5 m",
      weight: "6.8 kg",
      egg: ["Field"],
      ability: [
        ["Fluffy", "false"],
        ["Klutz", "false"],
        ["Cute Charm", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/759.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/759.png",
      hires: "./Imagens/Pokedex/hires/759.png",
    },
  },
  {
    id: 760,
    name: {
      english: "Bewear",
      japanese: "キテルグマ",
      chinese: "穿着熊",
      french: "Chelours",
    },
    type: ["Normal", "Lutador"],
    base: {
      HP: 120,
      Attack: 125,
      Defense: 80,
      "Sp. Attack": 55,
      "Sp. Defense": 60,
      Speed: 60,
    },
    species: "Strong Arm Pokémon",
    description:
      "Ele possui uma força física tremenda. Muitas pessoas o chamam de Pokémon mais perigoso da região de Alola.",
    evolution: {
      prev: ["759", "Level 27"],
    },
    profile: {
      height: "2.1 m",
      weight: "135 kg",
      egg: ["Field"],
      ability: [
        ["Fluffy", "false"],
        ["Klutz", "false"],
        ["Unnerve", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/760.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/760.png",
      hires: "./Imagens/Pokedex/hires/760.png",
    },
  },
  {
    id: 761,
    name: {
      english: "Bounsweet",
      japanese: "アマカジ",
      chinese: "甜竹竹",
      french: "Croquine",
    },
    type: ["Grama"],
    base: {
      HP: 42,
      Attack: 30,
      Defense: 38,
      "Sp. Attack": 30,
      "Sp. Defense": 38,
      Speed: 32,
    },
    species: "Fruit Pokémon",
    description:
      "Ele tenta resistir a ser engolido por um Pokémon pássaro girando as sépalas em sua cabeça. Normalmente é uma tentativa infrutífera.",
    evolution: {
      next: [["762", "Level 18"]],
    },
    profile: {
      height: "0.3 m",
      weight: "3.2 kg",
      egg: ["Grama"],
      ability: [
        ["Leaf Guard", "false"],
        ["Oblivious", "false"],
        ["Sweet Veil", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/761.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/761.png",
      hires: "./Imagens/Pokedex/hires/761.png",
    },
  },
  {
    id: 762,
    name: {
      english: "Steenee",
      japanese: "アママイコ",
      chinese: "甜舞妮",
      french: "Candine",
    },
    type: ["Grama"],
    base: {
      HP: 52,
      Attack: 40,
      Defense: 48,
      "Sp. Attack": 40,
      "Sp. Defense": 48,
      Speed: 62,
    },
    species: "Fruit Pokémon",
    description:
      "Ele pula, balançando as sépalas em sua cabeça com abandono. Eles são bastante dolorosos quando você bate neles!",
    evolution: {
      prev: ["761", "Level 18"],
      next: [["763", "after Stomp learned"]],
    },
    profile: {
      height: "0.7 m",
      weight: "8.2 kg",
      egg: ["Grama"],
      ability: [
        ["Leaf Guard", "false"],
        ["Oblivious", "false"],
        ["Sweet Veil", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/762.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/762.png",
      hires: "./Imagens/Pokedex/hires/762.png",
    },
  },
  {
    id: 763,
    name: {
      english: "Tsareena",
      japanese: "アマージョ",
      chinese: "甜冷美后",
      french: "Sucreine",
    },
    type: ["Grama"],
    base: {
      HP: 72,
      Attack: 120,
      Defense: 98,
      "Sp. Attack": 50,
      "Sp. Defense": 98,
      Speed: 72,
    },
    species: "Fruit Pokémon",
    description:
      "Um Pokémon com uma personalidade agressiva e um domínio de chutes, ele cacareja toda vez que chuta um oponente.",
    evolution: {
      prev: ["762", "after Stomp learned"],
    },
    profile: {
      height: "1.2 m",
      weight: "21.4 kg",
      egg: ["Grama"],
      ability: [
        ["Leaf Guard", "false"],
        ["Queenly Majesty", "false"],
        ["Sweet Veil", "true"],
      ],
      gender: "0:100",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/763.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/763.png",
      hires: "./Imagens/Pokedex/hires/763.png",
    },
  },
  {
    id: 764,
    name: {
      english: "Comfey",
      japanese: "キュワワー",
      chinese: "花疗环环",
      french: "Guérilande",
    },
    type: ["Fada"],
    base: {
      HP: 51,
      Attack: 52,
      Defense: 90,
      "Sp. Attack": 82,
      "Sp. Defense": 110,
      Speed: 100,
    },
    species: "Posy Picker Pokémon",
    description:
      "Ele pega flores e as gruda em seu corpo com fluidos que produz. O aroma que emana de suas pétalas tem um efeito curativo.",
    evolution: {},
    profile: {
      height: "0.1 m",
      weight: "0.3 kg",
      egg: ["Grama"],
      ability: [
        ["Flower Veil", "false"],
        ["Triage", "false"],
        ["Natural Cure", "true"],
      ],
      gender: "25:75",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/764.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/764.png",
      hires: "./Imagens/Pokedex/hires/764.png",
    },
  },
  {
    id: 765,
    name: {
      english: "Oranguru",
      japanese: "ヤレユータン",
      chinese: "智挥猩",
      french: "Gouroutan",
    },
    type: ["Normal", "Psíquico"],
    base: {
      HP: 90,
      Attack: 60,
      Defense: 80,
      "Sp. Attack": 90,
      "Sp. Defense": 110,
      Speed: 60,
    },
    species: "Sage Pokémon",
    description:
      "Oranguru não se dão bem uns com os outros, por isso estão sempre envolvidos em batalhas de inteligência para decidir qual é superior.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "76 kg",
      egg: ["Field"],
      ability: [
        ["Inner Focus", "false"],
        ["Telepathy", "false"],
        ["Symbiosis", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/765.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/765.png",
      hires: "./Imagens/Pokedex/hires/765.png",
    },
  },
  {
    id: 766,
    name: {
      english: "Passimian",
      japanese: "ナゲツケサル",
      chinese: "投掷猴",
      french: "Quartermac",
    },
    type: ["Lutador"],
    base: {
      HP: 100,
      Attack: 120,
      Defense: 90,
      "Sp. Attack": 40,
      "Sp. Defense": 60,
      Speed: 80,
    },
    species: "Teamwork Pokémon",
    description:
      "Bagas são suas armas e também o principal alimento de sua dieta. Aquele que pode lançar uma baga mais longe é o chefe da tropa.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "82.8 kg",
      egg: ["Field"],
      ability: [
        ["Receiver", "false"],
        ["Defiant", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/766.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/766.png",
      hires: "./Imagens/Pokedex/hires/766.png",
    },
  },
  {
    id: 767,
    name: {
      english: "Wimpod",
      japanese: "コソクムシ",
      chinese: "胆小虫",
      french: "Sovkipou",
    },
    type: ["Inseto", "Água"],
    base: {
      HP: 25,
      Attack: 35,
      Defense: 40,
      "Sp. Attack": 20,
      "Sp. Defense": 30,
      Speed: 80,
    },
    species: "Turn Tail Pokémon",
    description:
      "Um Pokémon assustadoramente covarde, Wimpod girará suas pernas em altas velocidades para fugir se algo se aproximar dele.",
    evolution: {
      next: [["768", "Level 30"]],
    },
    profile: {
      height: "0.5 m",
      weight: "12 kg",
      egg: ["Inseto", "Água 3"],
      ability: [["Wimp Out", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/767.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/767.png",
      hires: "./Imagens/Pokedex/hires/767.png",
    },
  },
  {
    id: 768,
    name: {
      english: "Golisopod",
      japanese: "グソクムシャ",
      chinese: "具甲武者",
      french: "Sarmuraï",
    },
    type: ["Inseto", "Água"],
    base: {
      HP: 75,
      Attack: 125,
      Defense: 140,
      "Sp. Attack": 60,
      "Sp. Defense": 90,
      Speed: 40,
    },
    species: "Hard Scale Pokémon",
    description:
      "Suas garras, que ele pode estender e retrair à vontade, são suas maiores armas. Golisopod é às vezes acompanhado por Wimpod.",
    evolution: {
      prev: ["767", "Level 30"],
    },
    profile: {
      height: "2 m",
      weight: "108 kg",
      egg: ["Inseto", "Água 3"],
      ability: [["Emergency Exit", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/768.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/768.png",
      hires: "./Imagens/Pokedex/hires/768.png",
    },
  },
  {
    id: 769,
    name: {
      english: "Sandygast",
      japanese: "スナバァ",
      chinese: "沙丘娃",
      french: "Bacabouh",
    },
    type: ["Fantasma", "Terra"],
    base: {
      HP: 55,
      Attack: 55,
      Defense: 80,
      "Sp. Attack": 70,
      "Sp. Defense": 45,
      Speed: 15,
    },
    species: "Sand Heap Pokémon",
    description:
      "Se você construir montes de areia enquanto estiver brincando, destrua-os antes de voltar para casa, ou eles podem ser possuídos e se tornarem Sandygast.",
    evolution: {
      next: [["770", "Level 42"]],
    },
    profile: {
      height: "0.5 m",
      weight: "70 kg",
      egg: ["Amorphous"],
      ability: [
        ["Água Compaction", "false"],
        ["Sand Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/769.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/769.png",
      hires: "./Imagens/Pokedex/hires/769.png",
    },
  },
  {
    id: 770,
    name: {
      english: "Palossand",
      japanese: "シロデスナ",
      chinese: "噬沙堡爷",
      french: "Trépassable",
    },
    type: ["Fantasma", "Terra"],
    base: {
      HP: 85,
      Attack: 75,
      Defense: 110,
      "Sp. Attack": 100,
      "Sp. Defense": 75,
      Speed: 35,
    },
    species: "Sand Castle Pokémon",
    description:
      "Depois de ter levantado uma tempestade de areia para parar seus oponentes em suas trilhas, este Pokémon assustador arrebata sua vitalidade.",
    evolution: {
      prev: ["769", "Level 42"],
    },
    profile: {
      height: "1.3 m",
      weight: "250 kg",
      egg: ["Amorphous"],
      ability: [
        ["Água Compaction", "false"],
        ["Sand Veil", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/770.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/770.png",
      hires: "./Imagens/Pokedex/hires/770.png",
    },
  },
  {
    id: 771,
    name: {
      english: "Pyukumuku",
      japanese: "ナマコブシ",
      chinese: "拳海参",
      french: "Concombaffe",
    },
    type: ["Água"],
    base: {
      HP: 55,
      Attack: 60,
      Defense: 130,
      "Sp. Attack": 30,
      "Sp. Defense": 130,
      Speed: 5,
    },
    species: "Sea Cucumber Pokémon",
    description:
      "Seu corpo inteiro é coberto de seu próprio lodo. Se você acidentalmente pisar em um, você escorregará e ele ficará bravo e baterá em você!",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "1.2 kg",
      egg: ["Água 1"],
      ability: [
        ["Innards Out", "false"],
        ["Unaware", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/771.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/771.png",
      hires: "./Imagens/Pokedex/hires/771.png",
    },
  },
  {
    id: 772,
    name: {
      english: "Type: Null",
      japanese: "タイプ：ヌル",
      chinese: "属性：空",
      french: "Silvallié",
    },
    type: ["Normal"],
    base: {
      HP: 95,
      Attack: 95,
      Defense: 95,
      "Sp. Attack": 95,
      "Sp. Defense": 95,
      Speed: 59,
    },
    species: "Synthetic Pokémon",
    description:
      "Há o perigo de ele entrar em uma fúria, então seu verdadeiro poder é selado sob sua máscara de controle.",
    evolution: {
      next: [["773", "high Friendship"]],
    },
    profile: {
      height: "1.9 m",
      weight: "120.5 kg",
      egg: ["Undiscovered"],
      ability: [["Battle Armor", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/772.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/772.png",
      hires: "./Imagens/Pokedex/hires/772.png",
    },
  },
  {
    id: 773,
    name: {
      english: "Silvally",
      japanese: "シルヴァディ",
      chinese: "银伴战兽",
      french: "Météno",
    },
    type: ["Normal"],
    base: {
      HP: 95,
      Attack: 95,
      Defense: 95,
      "Sp. Attack": 95,
      "Sp. Defense": 95,
      Speed: 95,
    },
    species: "Synthetic Pokémon",
    description:
      "Através do vínculo que formou com seu treinador, sua vontade foi fortalecida e ele foi capaz de destruir sua máscara de controle.",
    evolution: {
      prev: ["772", "high Friendship"],
    },
    profile: {
      height: "2.3 m",
      weight: "100.5 kg",
      egg: ["Undiscovered"],
      ability: [["Rks System", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/773.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/773.png",
      hires: "./Imagens/Pokedex/hires/773.png",
    },
  },
  {
    id: 774,
    name: {
      english: "Minior",
      japanese: "メテノ",
      chinese: "小陨星",
      french: "Dodoala",
    },
    type: ["Rocha", "Voador"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 100,
      "Sp. Attack": 60,
      "Sp. Defense": 100,
      Speed: 60,
    },
    species: "Meteor Pokémon",
    description:
      "Embora sua casca externa seja incomumente durável, o choque de cair no chão esmaga a casca em pedaços.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "40 kg",
      egg: ["Mineral"],
      ability: [["Shields Down", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/774.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/774.png",
      hires: "./Imagens/Pokedex/hires/774.png",
    },
  },
  {
    id: 775,
    name: {
      english: "Komala",
      japanese: "ネッコアラ",
      chinese: "树枕尾熊",
      french: "Boumata",
    },
    type: ["Normal"],
    base: {
      HP: 65,
      Attack: 115,
      Defense: 65,
      "Sp. Attack": 75,
      "Sp. Defense": 95,
      Speed: 65,
    },
    species: "Drowsing Pokémon",
    description:
      "Ele permanece adormecido desde o nascimento até a morte como resultado das propriedades sedativas das folhas que formam sua dieta.",
    evolution: {},
    profile: {
      height: "0.4 m",
      weight: "19.9 kg",
      egg: ["Field"],
      ability: [["Comatose", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/775.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/775.png",
      hires: "./Imagens/Pokedex/hires/775.png",
    },
  },
  {
    id: 776,
    name: {
      english: "Turtonator",
      japanese: "バクガメス",
      chinese: "爆焰龟兽",
      french: "Togedemaru",
    },
    type: ["Fogo", "Dragão"],
    base: {
      HP: 60,
      Attack: 78,
      Defense: 135,
      "Sp. Attack": 91,
      "Sp. Defense": 85,
      Speed: 36,
    },
    species: "Blast Turtle Pokémon",
    description:
      "Sua concha explosiva representa um perigo real, mas é sensível à umidade. Em dias chuvosos, Turtonator se refugia silenciosamente em cavernas.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "212 kg",
      egg: ["Monster", "Dragão"],
      ability: [["Shell Armor", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/776.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/776.png",
      hires: "./Imagens/Pokedex/hires/776.png",
    },
  },
  {
    id: 777,
    name: {
      english: "Togedemaru",
      japanese: "トゲデマル",
      chinese: "托戈德玛尔",
      french: "Mimiqui",
    },
    type: ["Elétrico", "Metal"],
    base: {
      HP: 65,
      Attack: 98,
      Defense: 63,
      "Sp. Attack": 40,
      "Sp. Defense": 73,
      Speed: 96,
    },
    species: "Roly-Poly Pokémon",
    description:
      "Sua capacidade de produzir eletricidade é um tanto limitada, por isso ele se carrega deixando a eletricidade atingi-lo!",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "3.3 kg",
      egg: ["Field", "Fada"],
      ability: [
        ["Iron Barbs", "false"],
        ["Lightning Rod", "false"],
        ["Sturdy", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/777.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/777.png",
      hires: "./Imagens/Pokedex/hires/777.png",
    },
  },
  {
    id: 778,
    name: {
      english: "Mimikyu",
      japanese: "ミミッキュ",
      chinese: "谜拟Ｑ",
      french: "Denticrisse",
    },
    type: ["Fantasma", "Fada"],
    base: {
      HP: 55,
      Attack: 90,
      Defense: 80,
      "Sp. Attack": 50,
      "Sp. Defense": 105,
      Speed: 96,
    },
    species: "Disguise Pokémon",
    description:
      "Uma rajada de vento revelou o que se esconde sob a trapo de este Pokémon para um treinador que passava, que foi para casa e morreu dolorosamente naquela mesma noite.",
    evolution: {},
    profile: {
      height: "0.2 m",
      weight: "0.7 kg",
      egg: ["Amorphous"],
      ability: [["Disguise", "false"]],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/778.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/778.png",
      hires: "./Imagens/Pokedex/hires/778.png",
    },
  },
  {
    id: 779,
    name: {
      english: "Bruxish",
      japanese: "ハギギシリ",
      chinese: "磨牙彩皮鱼",
      french: "Draïeul",
    },
    type: ["Água", "Psíquico"],
    base: {
      HP: 68,
      Attack: 105,
      Defense: 70,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      Speed: 92,
    },
    species: "Gnash Teeth Pokémon",
    description:
      "Sua pele é grossa o suficiente para repelir os espinhos de Mareanie. Com seus dentes robustos, Bruxish tritura os espinhos e os come.",
    evolution: {},
    profile: {
      height: "0.9 m",
      weight: "19 kg",
      egg: ["Água 2"],
      ability: [
        ["Dazzling", "false"],
        ["Strong Jaw", "false"],
        ["Wonder Skin", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/779.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/779.png",
      hires: "./Imagens/Pokedex/hires/779.png",
    },
  },
  {
    id: 780,
    name: {
      english: "Drampa",
      japanese: "ジジーロン",
      chinese: "老翁龙",
      french: "Sinistrail",
    },
    type: ["Normal", "Dragão"],
    base: {
      HP: 78,
      Attack: 60,
      Defense: 85,
      "Sp. Attack": 135,
      "Sp. Defense": 91,
      Speed: 36,
    },
    species: "Placid Pokémon",
    description:
      "Ele aparece em cidades e brinca com as crianças. Drampa protegerá as crianças quando estiverem em perigo, para que suas mães não precisem se preocupar.",
    evolution: {},
    profile: {
      height: "3 m",
      weight: "185 kg",
      egg: ["Monster", "Dragão"],
      ability: [
        ["Berserk", "false"],
        ["Sap Sipper", "false"],
        ["Cloud Nine", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/780.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/780.png",
      hires: "./Imagens/Pokedex/hires/780.png",
    },
  },
  {
    id: 781,
    name: {
      english: "Dhelmise",
      japanese: "ダダリン",
      chinese: "破破舵轮",
      french: "Bébécaille",
    },
    type: ["Fantasma", "Grama"],
    base: {
      HP: 70,
      Attack: 131,
      Defense: 100,
      "Sp. Attack": 86,
      "Sp. Defense": 90,
      Speed: 40,
    },
    species: "Sea Creeper Pokémon",
    description:
      "Sua alga marinha semelhante a uma corrente pode se estender por centenas de metros. Por alguma razão, ele se dá bem com Skrelp.",
    evolution: {},
    profile: {
      height: "3.9 m",
      weight: "210 kg",
      egg: ["Mineral"],
      ability: [["Metalworker", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/781.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/781.png",
      hires: "./Imagens/Pokedex/hires/781.png",
    },
  },
  {
    id: 782,
    name: {
      english: "Jangmo-o",
      japanese: "ジャラコ",
      chinese: "心鳞宝",
      french: "Écaïd",
    },
    type: ["Dragão"],
    base: {
      HP: 45,
      Attack: 55,
      Defense: 65,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      Speed: 45,
    },
    species: "Scaly Pokémon",
    description:
      "Ele nunca mostrará um inimigo de costas em batalha. Guerreiros antigos gostavam de Jangmo-o por sua disposição valente e o fizeram um de seus próprios.",
    evolution: {
      next: [["783", "Level 35"]],
    },
    profile: {
      height: "0.6 m",
      weight: "29.7 kg",
      egg: ["Dragão"],
      ability: [
        ["Bulletproof", "false"],
        ["Soundproof", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/782.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/782.png",
      hires: "./Imagens/Pokedex/hires/782.png",
    },
  },
  {
    id: 783,
    name: {
      english: "Hakamo-o",
      japanese: "ジャランゴ",
      chinese: "鳞甲龙",
      french: "Ékaïser",
    },
    type: ["Dragão", "Lutador"],
    base: {
      HP: 55,
      Attack: 75,
      Defense: 90,
      "Sp. Attack": 65,
      "Sp. Defense": 70,
      Speed: 65,
    },
    species: "Scaly Pokémon",
    description:
      "As escamas que ele derrama podem ser moldadas e processadas para fazer potes e panelas. Conduzem bem o calor, por isso são um item popular.",
    evolution: {
      prev: ["782", "Level 35"],
      next: [["784", "Level 45"]],
    },
    profile: {
      height: "1.2 m",
      weight: "47 kg",
      egg: ["Dragão"],
      ability: [
        ["Bulletproof", "false"],
        ["Soundproof", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/783.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/783.png",
      hires: "./Imagens/Pokedex/hires/783.png",
    },
  },
  {
    id: 784,
    name: {
      english: "Kommo-o",
      japanese: "ジャラランガ",
      chinese: "杖尾鳞甲龙",
      french: "Tokorico",
    },
    type: ["Dragão", "Lutador"],
    base: {
      HP: 75,
      Attack: 110,
      Defense: 125,
      "Sp. Attack": 100,
      "Sp. Defense": 105,
      Speed: 85,
    },
    species: "Scaly Pokémon",
    description:
      "Ele luta valentemente com seus punhos, que são blindados em escamas de aço. Kommo-o é especializado em golpes ascendentes.",
    evolution: {
      prev: ["783", "Level 45"],
    },
    profile: {
      height: "1.6 m",
      weight: "78.2 kg",
      egg: ["Dragão"],
      ability: [
        ["Bulletproof", "false"],
        ["Soundproof", "false"],
        ["Overcoat", "true"],
      ],
      gender: "50:50",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/784.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/784.png",
      hires: "./Imagens/Pokedex/hires/784.png",
    },
  },
  {
    id: 785,
    name: {
      english: "Tapu Koko",
      japanese: "カプ・コケコ",
      chinese: "卡璞・鸣鸣",
      french: "Tokopiyon",
    },
    type: ["Elétrico", "Fada"],
    base: {
      HP: 70,
      Attack: 115,
      Defense: 85,
      "Sp. Attack": 95,
      "Sp. Defense": 75,
      Speed: 130,
    },
    species: "Land Spirit Pokémon",
    description:
      "A deidade guardiã da eletricidade de Melemele, Tapu Koko está cheio de curiosidade e aparece diante das pessoas de vez em quando.",
    evolution: {},
    profile: {
      height: "1.8 m",
      weight: "20.5 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Elétrico Surge", "false"],
        ["Telepathy", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/785.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/785.png",
      hires: "./Imagens/Pokedex/hires/785.png",
    },
  },
  {
    id: 786,
    name: {
      english: "Tapu Lele",
      japanese: "カプ・テテフ",
      chinese: "卡璞・蝶蝶",
      french: "Tokotoro",
    },
    type: ["Psíquico", "Fada"],
    base: {
      HP: 70,
      Attack: 85,
      Defense: 75,
      "Sp. Attack": 130,
      "Sp. Defense": 115,
      Speed: 95,
    },
    species: "Land Spirit Pokémon",
    description:
      "Embora seja chamada de deidade guardiã, Tapu Lele é desprovido de culpa por sua disposição cruel e pode ser descrito como a natureza encarnada.",
    evolution: {},
    profile: {
      height: "1.2 m",
      weight: "18.6 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Psíquico Surge", "false"],
        ["Telepathy", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/786.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/786.png",
      hires: "./Imagens/Pokedex/hires/786.png",
    },
  },
  {
    id: 787,
    name: {
      english: "Tapu Bulu",
      japanese: "カプ・ブルル",
      chinese: "卡璞・哞哞",
      french: "Tokopisco",
    },
    type: ["Grama", "Fada"],
    base: {
      HP: 70,
      Attack: 130,
      Defense: 115,
      "Sp. Attack": 85,
      "Sp. Defense": 95,
      Speed: 75,
    },
    species: "Land Spirit Pokémon",
    description:
      "Ele faz sons zumbindo com sua cauda para avisar os outros de sua localização, evitando conflitos desnecessários. Esta deidade guardiã de Ula'ula controla plantas.",
    evolution: {},
    profile: {
      height: "1.9 m",
      weight: "45.5 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Gramay Surge", "false"],
        ["Telepathy", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/787.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/787.png",
      hires: "./Imagens/Pokedex/hires/787.png",
    },
  },
  {
    id: 788,
    name: {
      english: "Tapu Fini",
      japanese: "カプ・レヒレ",
      chinese: "卡璞・鳍鳍",
      french: "Tokopisco",
    },
    type: ["Água", "Fada"],
    base: {
      HP: 70,
      Attack: 75,
      Defense: 115,
      "Sp. Attack": 95,
      "Sp. Defense": 130,
      Speed: 85,
    },
    species: "Land Spirit Pokémon",
    description:
      "Embora seja chamada de deidade guardiã, calamidades terríveis às vezes ocorrem com aqueles que se aproximam imprudentemente de Tapu Fini.",
    evolution: {},
    profile: {
      height: "1.3 m",
      weight: "21.2 kg",
      egg: ["Undiscovered"],
      ability: [
        ["Misty Surge", "false"],
        ["Telepathy", "true"],
      ],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/788.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/788.png",
      hires: "./Imagens/Pokedex/hires/788.png",
    },
  },
  {
    id: 789,
    name: {
      english: "Cosmog",
      japanese: "コスモッグ",
      chinese: "科斯莫古",
      french: "Cosmog",
    },
    type: ["Psíquico"],
    base: {
      HP: 43,
      Attack: 29,
      Defense: 31,
      "Sp. Attack": 29,
      "Sp. Defense": 31,
      Speed: 37,
    },
    species: "Nebula Pokémon",
    description:
      "Seja ou não um Pokémon deste mundo é um mistério. Quando está em apuros, ele se distorce para um lugar seguro para se esconder.",
    evolution: {
      next: [["790", "Level 43"]],
    },
    profile: {
      height: "0.2 m",
      weight: "0.1 kg",
      egg: ["Undiscovered"],
      ability: [["Unaware", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/789.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/789.png",
      hires: "./Imagens/Pokedex/hires/789.png",
    },
  },
  {
    id: 790,
    name: {
      english: "Cosmoem",
      japanese: "コスモウム",
      chinese: "科斯莫姆",
      french: "Cosmovum",
    },
    type: ["Psíquico"],
    base: {
      HP: 43,
      Attack: 29,
      Defense: 131,
      "Sp. Attack": 29,
      "Sp. Defense": 131,
      Speed: 37,
    },
    species: "Protostar Pokémon",
    description:
      "Enquanto absorve luz, Cosmoem continua a crescer. Sua concha dourada é surpreendentemente sólida.",
    evolution: {
      prev: ["789", "Level 43"],
      next: [
        ["791", "Level 53, in Pokémon Sun or Ultra Sun"],
        ["792", "Level 53, in Pokémon Sun or Ultra Sun"],
      ],
    },
    profile: {
      height: "0.1 m",
      weight: "999.9 kg",
      egg: ["Undiscovered"],
      ability: [["Sturdy", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/790.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/790.png",
      hires: "./Imagens/Pokedex/hires/790.png",
    },
  },
  {
    id: 791,
    name: {
      english: "Solgaleo",
      japanese: "ソルガレオ",
      chinese: "索尔迦雷欧",
      french: "Solgaleo",
    },
    type: ["Psíquico", "Metal"],
    base: {
      HP: 137,
      Attack: 137,
      Defense: 107,
      "Sp. Attack": 113,
      "Sp. Defense": 89,
      Speed: 97,
    },
    species: "Sunne Pokémon",
    description:
      'Em escritos do passado distante, é chamado pelo nome de "a besta que devora o sol".',
    evolution: {
      prev: ["790", "Level 53, in Pokémon Sun or Ultra Sun"],
    },
    profile: {
      height: "3.4 m",
      weight: "230 kg",
      egg: ["Undiscovered"],
      ability: [["Full Metal Body", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/791.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/791.png",
      hires: "./Imagens/Pokedex/hires/791.png",
    },
  },
  {
    id: 792,
    name: {
      english: "Lunala",
      japanese: "ルナアーラ",
      chinese: "露奈雅拉",
      french: "Lunala",
    },
    type: ["Psíquico", "Fantasma"],
    base: {
      HP: 137,
      Attack: 113,
      Defense: 89,
      "Sp. Attack": 137,
      "Sp. Defense": 107,
      Speed: 97,
    },
    species: "Moone Pokémon",
    description:
      "Às vezes, convoca poderes desconhecidos e formas de vida aqui para este mundo a partir de buracos que levam a outros mundos.",
    evolution: {
      prev: ["790", "Level 53, in Pokémon Moon or Ultra Moon"],
    },
    profile: {
      height: "4 m",
      weight: "120 kg",
      egg: ["Undiscovered"],
      ability: [["Shadow Shield", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/792.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/792.png",
      hires: "./Imagens/Pokedex/hires/792.png",
    },
  },
  {
    id: 793,
    name: {
      english: "Nihilego",
      japanese: "ウツロイド",
      chinese: "虚吾伊德",
      french: "Zéroïd",
    },
    type: ["Rocha", "Venenoso"],
    base: {
      HP: 109,
      Attack: 53,
      Defense: 47,
      "Sp. Attack": 127,
      "Sp. Defense": 131,
      Speed: 103,
    },
    species: "Parasite Pokémon",
    description:
      "Ele apareceu neste mundo de um Ultra Wormhole. Nihilego parece ser um parasita que vive alimentando-se de pessoas e Pokémon.",
    evolution: {},
    profile: {
      height: "1.2 m",
      weight: "55.5 kg",
      egg: ["Undiscovered"],
      ability: [["Beast Boost", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/793.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/793.png",
      hires: "./Imagens/Pokedex/hires/793.png",
    },
  },
  {
    id: 794,
    name: {
      english: "Buzzwole",
      japanese: "マッシブーン",
      chinese: "爆肌蚊",
      french: "Mouscoto",
    },
    type: ["Inseto", "Lutador"],
    base: {
      HP: 107,
      Attack: 139,
      Defense: 139,
      "Sp. Attack": 53,
      "Sp. Defense": 53,
      Speed: 79,
    },
    species: "Swollen Pokémon",
    description:
      "Buzzwole anda mostrando seus músculos anormalmente inchados. É um tipo de Ultra Beast.",
    evolution: {},
    profile: {
      height: "2.4 m",
      weight: "333.6 kg",
      egg: ["Undiscovered"],
      ability: [["Beast Boost", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/794.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/794.png",
      hires: "./Imagens/Pokedex/hires/794.png",
    },
  },
  {
    id: 795,
    name: {
      english: "Pheromosa",
      japanese: "フェローチェ",
      chinese: "费洛美螂",
      french: "Cancrelove",
    },
    type: ["Inseto", "Lutador"],
    base: {
      HP: 71,
      Attack: 137,
      Defense: 37,
      "Sp. Attack": 137,
      "Sp. Defense": 37,
      Speed: 151,
    },
    species: "Lissome Pokémon",
    description:
      "Embora seja alienígena a este mundo e um perigo aqui, aparentemente é um organismo comum no mundo onde normalmente vive.",
    evolution: {},
    profile: {
      height: "1.8 m",
      weight: "25 kg",
      egg: ["Undiscovered"],
      ability: [["Beast Boost", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/795.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/795.png",
      hires: "./Imagens/Pokedex/hires/795.png",
    },
  },
  {
    id: 796,
    name: {
      english: "Xurkitree",
      japanese: "デンジュモク",
      chinese: "电束木",
      french: "Câblifère",
    },
    type: ["Elétrico"],
    base: {
      HP: 83,
      Attack: 89,
      Defense: 71,
      "Sp. Attack": 173,
      "Sp. Defense": 71,
      Speed: 83,
    },
    species: "Glowing Pokémon",
    description:
      "Eles foram apelidados de Ultra Beasts. Alguns deles ficam parados, como árvores, com os braços e as pernas presos no chão.",
    evolution: {},
    profile: {
      height: "3.8 m",
      weight: "100 kg",
      egg: ["Undiscovered"],
      ability: [["Beast Boost", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/796.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/796.png",
      hires: "./Imagens/Pokedex/hires/796.png",
    },
  },
  {
    id: 797,
    name: {
      english: "Celesteela",
      japanese: "テッカグヤ",
      chinese: "铁火辉夜",
      french: "Bamboiselle",
    },
    type: ["Metal", "Voador"],
    base: {
      HP: 97,
      Attack: 101,
      Defense: 103,
      "Sp. Attack": 107,
      "Sp. Defense": 101,
      Speed: 61,
    },
    species: "Launch Pokémon",
    description:
      "Embora seja alienígena a este mundo e um perigo aqui, aparentemente é um organismo comum no mundo onde normalmente vive.",
    evolution: {},
    profile: {
      height: "9.2 m",
      weight: "999.9 kg",
      egg: ["Undiscovered"],
      ability: [["Beast Boost", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/797.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/797.png",
      hires: "./Imagens/Pokedex/hires/797.png",
    },
  },
  {
    id: 798,
    name: {
      english: "Kartana",
      japanese: "カミツルギ",
      chinese: "纸御剑",
      french: "Katagami",
    },
    type: ["Grama", "Metal"],
    base: {
      HP: 59,
      Attack: 181,
      Defense: 131,
      "Sp. Attack": 59,
      "Sp. Defense": 31,
      Speed: 109,
    },
    species: "Drawn Sword Pokémon",
    description:
      "Embora seja alienígena a este mundo e um perigo aqui, aparentemente é um organismo comum no mundo onde normalmente vive.",
    evolution: {},
    profile: {
      height: "0.3 m",
      weight: "0.1 kg",
      egg: ["Undiscovered"],
      ability: [["Beast Boost", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/798.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/798.png",
      hires: "./Imagens/Pokedex/hires/798.png",
    },
  },
  {
    id: 799,
    name: {
      english: "Guzzlord",
      japanese: "アクジキング",
      chinese: "恶食大王",
      french: "Engloutyran",
    },
    type: ["Sombrio", "Dragão"],
    base: {
      HP: 223,
      Attack: 101,
      Defense: 53,
      "Sp. Attack": 97,
      "Sp. Defense": 53,
      Speed: 43,
    },
    species: "Junkivore Pokémon",
    description:
      "Uma forma de vida desconhecida chamada UB. Pode estar constantemente com fome - certamente está sempre devorando algo.",
    evolution: {},
    profile: {
      height: "5.5 m",
      weight: "888 kg",
      egg: ["Undiscovered"],
      ability: [["Beast Boost", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/799.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/799.png",
      hires: "./Imagens/Pokedex/hires/799.png",
    },
  },
  {
    id: 800,
    name: {
      english: "Necrozma",
      japanese: "ネクロズマ",
      chinese: "奈克洛兹玛",
      french: "Necrozma",
    },
    type: ["Psíquico"],
    base: {
      HP: 97,
      Attack: 107,
      Defense: 101,
      "Sp. Attack": 127,
      "Sp. Defense": 89,
      Speed: 79,
    },
    species: "Prism Pokémon",
    description:
      "A luz é a fonte de sua energia. Se não estiver devorando luz, impurezas se acumulam nele e nele, e Necrozma escurece e para de se mover.",
    evolution: {},
    profile: {
      height: "2.4 m",
      weight: "230 kg",
      egg: ["Undiscovered"],
      ability: [["Prism Armor", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/800.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/800.png",
      hires: "./Imagens/Pokedex/hires/800.png",
    },
  },
  {
    id: 801,
    name: {
      english: "Magearna",
      japanese: "マギアナ",
      chinese: "玛机雅娜",
      french: "Magearna",
    },
    type: ["Metal", "Fada"],
    base: {
      HP: 80,
      Attack: 95,
      Defense: 115,
      "Sp. Attack": 130,
      "Sp. Defense": 115,
      Speed: 65,
    },
    species: "Artificial Pokémon",
    description:
      "Construído há cerca de 500 anos por um cientista, a parte chamada Coração da Alma é a forma de vida real.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "80.5 kg",
      egg: ["Undiscovered"],
      ability: [["Soul Heart", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/801.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/801.png",
      hires: "./Imagens/Pokedex/hires/801.png",
    },
  },
  {
    id: 802,
    name: {
      english: "Marshadow",
      japanese: "マーシャドー",
      chinese: "玛夏多",
      french: "Marshadow",
    },
    type: ["Lutador", "Fantasma"],
    base: {
      HP: 90,
      Attack: 125,
      Defense: 80,
      "Sp. Attack": 90,
      "Sp. Defense": 90,
      Speed: 125,
    },
    species: "Gloomdweller Pokémon",
    description:
      "Ele afunda nas sombras das pessoas e dos Pokémon, onde pode entender seus sentimentos e copiar suas capacidades.",
    evolution: {},
    profile: {
      height: "0.7 m",
      weight: "22.2 kg",
      egg: ["Undiscovered"],
      ability: [["Technician", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/802.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/802.png",
      hires: "./Imagens/Pokedex/hires/802.png",
    },
  },
  {
    id: 803,
    name: {
      english: "Poipole",
      japanese: "ベベノム",
      chinese: "毒贝比",
      french: "Vémini",
    },
    type: ["Venenoso"],
    base: {
      HP: 67,
      Attack: 73,
      Defense: 67,
      "Sp. Attack": 73,
      "Sp. Defense": 67,
      Speed: 73,
    },
    species: "Venenoso Pin Pokémon",
    description:
      "Uma Ultra Beast que vive em um mundo diferente, ela cacareja selvagemente enquanto pulveriza seus oponentes com veneno das agulhas em sua cabeça.",
    evolution: {
      next: [["804", "after Dragão Pulse learned"]],
    },
    profile: {
      height: "0.6 m",
      weight: "1.8 kg",
      egg: ["Undiscovered"],
      ability: [["Beast Boost", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/803.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/803.png",
      hires: "./Imagens/Pokedex/hires/803.png",
    },
  },
  {
    id: 804,
    name: {
      english: "Naganadel",
      japanese: "アーゴヨン",
      chinese: "四颚针龙",
      french: "Mandrillon",
    },
    type: ["Venenoso", "Dragão"],
    base: {
      HP: 73,
      Attack: 73,
      Defense: 73,
      "Sp. Attack": 127,
      "Sp. Defense": 73,
      Speed: 121,
    },
    species: "Venenoso Pin Pokémon",
    description:
      "Um tipo de Ultra Beast, ele dispara um líquido venenoso brilhante de suas agulhas. Esse líquido também é extremamente adesivo.",
    evolution: {
      prev: ["803", "after Dragão Pulse learned"],
    },
    profile: {
      height: "3.6 m",
      weight: "150 kg",
      egg: ["Undiscovered"],
      ability: [["Beast Boost", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/804.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/804.png",
      hires: "./Imagens/Pokedex/hires/804.png",
    },
  },
  {
    id: 805,
    name: {
      english: "Stakataka",
      japanese: "ツンデツンデ",
      chinese: "垒磊石",
      french: "Ama - Ama",
    },
    type: ["Rocha", "Metal"],
    base: {
      HP: 61,
      Attack: 131,
      Defense: 211,
      "Sp. Attack": 53,
      "Sp. Defense": 101,
      Speed: 13,
    },
    species: "Rampart Pokémon",
    description:
      "Quando paredes de pedra começaram a se mover e atacar, a verdadeira identidade do bruto era esta misteriosa forma de vida, que traz à mente uma Ultra Beast.",
    evolution: {},
    profile: {
      height: "5.5 m",
      weight: "820 kg",
      egg: ["Undiscovered"],
      ability: [["Beast Boost", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/805.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/805.png",
      hires: "./Imagens/Pokedex/hires/805.png",
    },
  },
  {
    id: 806,
    name: {
      english: "Blacephalon",
      japanese: "ズガドーン",
      chinese: "砰头小丑",
      french: "Pierroteknik",
    },
    type: ["Fogo", "Fantasma"],
    base: {
      HP: 53,
      Attack: 127,
      Defense: 53,
      "Sp. Attack": 151,
      "Sp. Defense": 79,
      Speed: 107,
    },
    species: "Fogoworks Pokémon",
    description:
      "Um UB que apareceu de um Ultra Wormhole, ele causa explosões, depois tira proveito da surpresa dos oponentes para roubar sua vitalidade.",
    evolution: {},
    profile: {
      height: "1.8 m",
      weight: "13 kg",
      egg: ["Undiscovered"],
      ability: [["Beast Boost", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/806.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/806.png",
      hires: "./Imagens/Pokedex/hires/806.png",
    },
  },
  {
    id: 807,
    name: {
      english: "Zeraora",
      japanese: "ゼラオラ",
      chinese: "捷拉奥拉",
      french: "Zeraora",
    },
    type: ["Elétrico"],
    base: {
      HP: 88,
      Attack: 112,
      Defense: 75,
      "Sp. Attack": 102,
      "Sp. Defense": 80,
      Speed: 143,
    },
    species: "Thunderclap Pokémon",
    description:
      "Ele se aproxima de seus inimigos na velocidade da luz, depois os rasga membro a membro com suas garras afiadas.",
    evolution: {},
    profile: {
      height: "1.5 m",
      weight: "44.5 kg",
      egg: ["Undiscovered"],
      ability: [["Volt Absorb", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/807.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/807.png",
      hires: "./Imagens/Pokedex/hires/807.png",
    },
  },
  {
    id: 808,
    name: {
      english: "Meltan",
      japanese: "メルタン",
      chinese: "美录坦",
      french: "Meltan",
    },
    type: ["Metal"],
    base: {
      HP: 46,
      Attack: 65,
      Defense: 65,
      "Sp. Attack": 55,
      "Sp. Defense": 35,
      Speed: 34,
    },
    species: "Hex Nut Pokémon",
    description:
      "Eles vivem como um grupo, mas quando chega a hora, um Meltan forte absorverá todos os outros e evoluirá.",
    evolution: {
      next: [["809", "Pokémon GO only, 400 Meltan Candies"]],
    },
    profile: {
      height: "0.2 m",
      weight: "8.0 kg",
      egg: ["Undiscovered"],
      ability: [["Magnet Pull", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/808.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/808.png",
      hires: "./Imagens/Pokedex/hires/808.png",
    },
  },
  {
    id: 809,
    name: {
      english: "Melmetal",
      japanese: "メルメタル",
      chinese: "美录梅塔",
      french: "Melmetal",
    },
    type: ["Metal"],
    base: {
      HP: 135,
      Attack: 143,
      Defense: 143,
      "Sp. Attack": 80,
      "Sp. Defense": 65,
      Speed: 34,
    },
    species: "Hex Nut Pokémon",
    description:
      "A força centrífuga está por trás dos socos dos braços pesados de Melmetal. Diz-se que Melmetal dá os socos mais fortes de todos os Pokémon.",
    evolution: {
      prev: ["808", "Pokémon GO only, 400 Meltan Candies"],
    },
    profile: {
      height: "2.5 m",
      weight: "800.0 kg",
      egg: ["Undiscovered"],
      ability: [["Iron Fist", "false"]],
      gender: "Genderless",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/809.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/809.png",
      hires: "./Imagens/Pokedex/hires/809.png",
    },
  },
  {
    id: 810,
    name: {
      english: "Grookey",
      japanese: "サルノリ",
      chinese: "敲音猴",
      french: "Ouistempo",
    },
    type: ["Grama"],
    species: "Chimp Pokémon",
    description:
      "Ele ataca com batidas rápidas de seu bastão. Enquanto ataca com velocidade incrível, ele fica cada vez mais animado.",
    evolution: {
      next: [["811", "Level 16"]],
    },
    profile: {
      height: "0 m",
      weight: "5 kg",
      gender: "87.5:12.5",
      ability: [
        ["Overgrow", "false"],
        ["Gramay-surge", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/810.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/810.png",
      hires: "./Imagens/Pokedex/hires/810.png",
    },
  },
  {
    id: 811,
    name: {
      english: "Thwackey",
      japanese: "バチンキー",
      chinese: "啪咚猴",
      french: "Badabouin",
    },
    type: ["Grama"],
    species: "Beat Pokémon",
    description:
      "Quando está batendo ritmos rápidos em batalha, ele fica tão envolvido no ritmo que nem percebe que já derrubou seu oponente.",
    evolution: {
      prev: ["810", "Level 16"],
      next: [["812", "Level 35"]],
    },
    profile: {
      height: "1 m",
      weight: "14 kg",
      gender: "87.5:12.5",
      ability: [
        ["Overgrow", "false"],
        ["Gramay-surge", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/811.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/811.png",
      hires: "./Imagens/Pokedex/hires/811.png",
    },
  },
  {
    id: 812,
    name: {
      english: "Rillaboom",
      japanese: "ゴリランダー",
      chinese: "轰擂金刚猩",
      french: "Gorythmic",
    },
    type: ["Grama"],
    species: "Drummer Pokémon",
    description:
      "Aquele com as melhores técnicas de bateria se torna o chefe da tropa. Ele tem uma disposição gentil e valoriza a harmonia entre seu grupo.",
    evolution: {
      prev: ["811", "Level 35"],
    },
    profile: {
      height: "2 m",
      weight: "90 kg",
      gender: "87.5:12.5",
      ability: [
        ["Overgrow", "false"],
        ["Gramay-surge", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/812.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/812.png",
      hires: "./Imagens/Pokedex/hires/812.png",
    },
  },
  {
    id: 813,
    name: {
      english: "Scorbunny",
      japanese: "ヒバニー",
      chinese: "炎兔儿",
      french: "Flambino",
    },
    type: ["Fogo"],
    species: "Rabbit Pokémon",
    description:
      "Ele tem almofadas especiais nas costas dos pés e uma no nariz. Uma vez que está ansioso para lutar, essas almofadas irradiam calor tremendo.",
    evolution: {
      next: [["814", "Level 16"]],
    },
    profile: {
      height: "0 m",
      weight: "4 kg",
      gender: "87.5:12.5",
      ability: [
        ["Blaze", "false"],
        ["Libero", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/813.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/813.png",
      hires: "./Imagens/Pokedex/hires/813.png",
    },
  },
  {
    id: 814,
    name: {
      english: "Raboot",
      japanese: "ラビフット",
      chinese: "腾蹴小将",
      french: "Lapyro",
    },
    type: ["Fogo"],
    species: "Rabbit Pokémon",
    description:
      "Ele chuta bagas diretamente dos galhos das árvores e depois as malabarismos com os pés, praticando seu trabalho de pés.",
    evolution: {
      prev: ["813", "Level 16"],
      next: [["815", "Level 35"]],
    },
    profile: {
      height: "1 m",
      weight: "9 kg",
      gender: "87.5:12.5",
      ability: [
        ["Blaze", "false"],
        ["Libero", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/814.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/814.png",
      hires: "./Imagens/Pokedex/hires/814.png",
    },
  },
  {
    id: 815,
    name: {
      english: "Cinderace",
      japanese: "エースバーン",
      chinese: "闪焰王牌",
      french: "Pyrobut",
    },
    type: ["Fogo"],
    species: "Striker Pokémon",
    description:
      "Ele é habilidoso tanto na ofensiva quanto na defesa e fica animado quando torcido. Mas se começar a exibir, pode se colocar em uma situação difícil.",
    evolution: {
      prev: ["814", "Level 35"],
    },
    profile: {
      height: "1 m",
      weight: "33 kg",
      gender: "87.5:12.5",
      ability: [
        ["Blaze", "false"],
        ["Libero", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/815.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/815.png",
      hires: "./Imagens/Pokedex/hires/815.png",
    },
  },
  {
    id: 816,
    name: {
      english: "Sobble",
      japanese: "メッソン",
      chinese: "泪眼蜥",
      french: "Larméléon",
    },
    type: ["Água"],
    species: "Água Lizard Pokémon",
    description:
      "Quando fica molhado, sua pele muda de cor e este Pokémon se torna invisível como se estivesse camuflado.",
    evolution: {
      next: [["817", "Level 16"]],
    },
    profile: {
      height: "0 m",
      weight: "4 kg",
      gender: "87.5:12.5",
      ability: [
        ["Torrent", "false"],
        ["Sniper", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/816.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/816.png",
      hires: "./Imagens/Pokedex/hires/816.png",
    },
  },
  {
    id: 817,
    name: {
      english: "Drizzile",
      japanese: "ジメレオン",
      chinese: "变涩蜥",
      french: "Arrozard",
    },
    type: ["Água"],
    species: "Água lizard Pokémon",
    description:
      "Altamente inteligente, mas também muito preguiçoso, ele mantém inimigos fora de seu território colocando armadilhas em todos os lugares.",
    evolution: {
      prev: ["816", "Level 16"],
      next: [["818", "Level 35"]],
    },
    profile: {
      height: "1 m",
      weight: "12 kg",
      gender: "87.5:12.5",
      ability: [
        ["Torrent", "false"],
        ["Sniper", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/817.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/817.png",
      hires: "./Imagens/Pokedex/hires/817.png",
    },
  },
  {
    id: 818,
    name: {
      english: "Inteleon",
      japanese: "インテレオン",
      chinese: "千面避役",
      french: "Lézargus",
    },
    type: ["Água"],
    species: "Secret Agent Pokémon",
    description:
      "Suas membranas nictitantes permitem que ele escolha os pontos fracos de seus inimigos para que ele possa atingi-los precisamente com água que dispara de seus dedos em Mach 3.",
    evolution: {
      prev: ["817", "Level 35"],
    },
    profile: {
      height: "2 m",
      weight: "45 kg",
      gender: "87.5:12.5",
      ability: [
        ["Torrent", "false"],
        ["Sniper", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/818.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/818.png",
      hires: "./Imagens/Pokedex/hires/818.png",
    },
  },
  {
    id: 819,
    name: {
      english: "Skwovet",
      japanese: "ホシガリス",
      chinese: "贪心栗鼠",
      french: "Rongourmand",
    },
    type: ["Normal"],
    species: "Cheeky Pokémon",
    description:
      "Ele come bagas sem parar - um hábito que o tornou mais resistente do que parece. Ele aparecerá em fazendas, procurando ainda mais bagas.",
    evolution: {
      next: [["820", "Level 24"]],
    },
    profile: {
      height: "0 m",
      weight: "2 kg",
      gender: "50.0:50.0",
      ability: [
        ["Cheek-pouch", "false"],
        ["Gluttony", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/819.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/819.png",
      hires: "./Imagens/Pokedex/hires/819.png",
    },
  },
  {
    id: 820,
    name: {
      english: "Greedent",
      japanese: "ヨクバリス",
      chinese: "藏饱栗鼠",
      french: "Rongrigou",
    },
    type: ["Normal"],
    species: "Greedy Pokémon",
    description:
      "Comum em toda a região de Galar, este Pokémon tem dentes fortes e pode mastigar as cascas mais resistentes de bagas.",
    evolution: {
      prev: ["819", "Level 24"],
    },
    profile: {
      height: "1 m",
      weight: "6 kg",
      gender: "50.0:50.0",
      ability: [
        ["Cheek-pouch", "false"],
        ["Gluttony", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/820.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/820.png",
      hires: "./Imagens/Pokedex/hires/820.png",
    },
  },
  {
    id: 821,
    name: {
      english: "Rookidee",
      japanese: "ココガラ",
      chinese: "稚山雀",
      french: "Minisange",
    },
    type: ["Voador"],
    species: "Tiny Bird Pokémon",
    description:
      "Pulando ágilmente, este Pokémon de corpo pequeno tira proveito até mesmo da menor oportunidade para desorientar oponentes maiores.",
    evolution: {
      next: [["822", "Level 18"]],
    },
    profile: {
      height: "0 m",
      weight: "2 kg",
      gender: "50.0:50.0",
      ability: [
        ["Keen-eye", "false"],
        ["Unnerve", "false"],
        ["Big-pecks", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/821.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/821.png",
      hires: "./Imagens/Pokedex/hires/821.png",
    },
  },
  {
    id: 822,
    name: {
      english: "Corvisquire",
      japanese: "アオガラス",
      chinese: "蓝鸦",
      french: "Bleuseille",
    },
    type: ["Voador"],
    species: "Raven Pokémon",
    description:
      "As lições de muitas batalhas duras ensinaram-lhe como julgar com precisão a força de um oponente.",
    evolution: {
      prev: ["821", "Level 18"],
      next: [["823", "Level 38"]],
    },
    profile: {
      height: "1 m",
      weight: "16 kg",
      gender: "50.0:50.0",
      ability: [
        ["Keen-eye", "false"],
        ["Unnerve", "false"],
        ["Big-pecks", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/822.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/822.png",
      hires: "./Imagens/Pokedex/hires/822.png",
    },
  },
  {
    id: 823,
    name: {
      english: "Corviknight",
      japanese: "アーマーガア",
      chinese: "钢铠鸦",
      french: "Corvaillus",
    },
    type: ["Voador", "Metal"],
    species: "Raven Pokémon",
    description:
      "Com seu grande intelecto e habilidades de vôo, esses Pokémon atuam com muito sucesso como serviço de táxi aéreo da região de Galar.",
    evolution: {
      prev: ["822", "Level 38"],
    },
    profile: {
      height: "2 m",
      weight: "75 kg",
      gender: "50.0:50.0",
      ability: [
        ["Pressure", "false"],
        ["Unnerve", "false"],
        ["Mirror-armor", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/823.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/823.png",
      hires: "./Imagens/Pokedex/hires/823.png",
    },
  },
  {
    id: 824,
    name: {
      english: "BlipInseto",
      japanese: "サッチムシ",
      chinese: "索侦虫",
      french: "Larvadar",
    },
    type: ["Inseto"],
    species: "Larva Pokémon",
    description:
      "Comumente encontrado em jardins, este Pokémon tem pelos em seu corpo que ele usa para avaliar seus arredores.",
    evolution: {
      next: [["825", "Level 10"]],
    },
    profile: {
      height: "0 m",
      weight: "8 kg",
      gender: "50.0:50.0",
      ability: [
        ["Swarm", "false"],
        ["Compound-eyes", "false"],
        ["Telepathy", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/824.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/824.png",
      hires: "./Imagens/Pokedex/hires/824.png",
    },
  },
  {
    id: 825,
    name: {
      english: "Dottler",
      japanese: "レドームシ",
      chinese: "天罩虫",
      french: "Coléodôme",
    },
    type: ["Inseto", "Psíquico"],
    species: "Radome Pokémon",
    description:
      "Enquanto cresce dentro de sua concha, ele usa suas habilidades psíquicas para monitorar o mundo exterior e se preparar para a evolução.",
    evolution: {
      prev: ["824", "Level 10"],
      next: [["826", "Level 30"]],
    },
    profile: {
      height: "0 m",
      weight: "20 kg",
      gender: "50.0:50.0",
      ability: [
        ["Swarm", "false"],
        ["Compound-eyes", "false"],
        ["Telepathy", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/825.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/825.png",
      hires: "./Imagens/Pokedex/hires/825.png",
    },
  },
  {
    id: 826,
    name: {
      english: "Orbeetle",
      japanese: "イオルブ",
      chinese: "以欧路普",
      french: "Astronelle",
    },
    type: ["Inseto", "Psíquico"],
    species: "Seven Spot Pokémon",
    description:
      "Ele emite energia psíquica para observar e estudar o que está ao seu redor - e o que está ao seu redor pode incluir coisas a mais de seis milhas de distância.",
    evolution: {
      prev: ["825", "Level 30"],
    },
    profile: {
      height: "0 m",
      weight: "41 kg",
      gender: "50.0:50.0",
      ability: [
        ["Swarm", "false"],
        ["Frisk", "false"],
        ["Telepathy", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/826.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/826.png",
      hires: "./Imagens/Pokedex/hires/826.png",
    },
  },
  {
    id: 827,
    name: {
      english: "Nickit",
      japanese: "クスネ",
      chinese: "偷儿狐",
      french: "Goupilou",
    },
    type: ["Sombrio"],
    species: "Fox Pokémon",
    description:
      "Astuto e cauteloso, este Pokémon sobrevive roubando comida dos outros. Ele apaga suas trilhas com golpes de sua cauda enquanto faz sua pilhagem.",
    evolution: {
      next: [["828", "Level 18"]],
    },
    profile: {
      height: "1 m",
      weight: "9 kg",
      gender: "50.0:50.0",
      ability: [
        ["Run-away", "false"],
        ["Unburden", "false"],
        ["Stakeout", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/827.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/827.png",
      hires: "./Imagens/Pokedex/hires/827.png",
    },
  },
  {
    id: 828,
    name: {
      english: "Thievul",
      japanese: "フォクスライ",
      chinese: "狐大盗",
      french: "Roublenard",
    },
    type: ["Sombrio"],
    species: "Fox Pokémon",
    description:
      "Com um corpo lithe e garras afiadas, ele anda roubando comida e ovos. Boltund é seu inimigo natural.",
    evolution: {
      prev: ["827", "Level 18"],
    },
    profile: {
      height: "1 m",
      weight: "20 kg",
      gender: "50.0:50.0",
      ability: [
        ["Run-away", "false"],
        ["Unburden", "false"],
        ["Stakeout", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/828.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/828.png",
      hires: "./Imagens/Pokedex/hires/828.png",
    },
  },
  {
    id: 829,
    name: {
      english: "Gossifleur",
      japanese: "ヒメンカ",
      chinese: "幼棉棉",
      french: "Tournicoton",
    },
    type: ["Grama"],
    species: "Flowering Pokémon",
    description:
      "Ele gira no vento enquanto canta uma música alegre. Essa exibição deliciosa encantou muitos a criar este Pokémon.",
    evolution: {
      next: [["830", "Level 20"]],
    },
    profile: {
      height: "0 m",
      weight: "2 kg",
      gender: "50.0:50.0",
      ability: [
        ["Cotton-down", "false"],
        ["Regenerator", "false"],
        ["Effect-spore", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/829.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/829.png",
      hires: "./Imagens/Pokedex/hires/829.png",
    },
  },
  {
    id: 830,
    name: {
      english: "Eldegoss",
      japanese: "ワタシラガ",
      chinese: "白蓬蓬",
      french: "Blancoton",
    },
    type: ["Grama"],
    species: "Cotton Bloom Pokémon",
    description:
      "O algodão na cabeça deste Pokémon pode ser fiado em um fio brilhante e lindo - uma especialidade regional de Galar.",
    evolution: {
      prev: ["829", "Level 20"],
    },
    profile: {
      height: "1 m",
      weight: "2 kg",
      gender: "50.0:50.0",
      ability: [
        ["Cotton-down", "false"],
        ["Regenerator", "false"],
        ["Effect-spore", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/830.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/830.png",
      hires: "./Imagens/Pokedex/hires/830.png",
    },
  },
  {
    id: 831,
    name: {
      english: "Wooloo",
      japanese: "ウールー",
      chinese: "毛辫羊",
      french: "Moumouton",
    },
    type: ["Normal"],
    species: "Sheep Pokémon",
    description:
      "Se sua lã crescer demais, Wooloo não poderá se mover. O tecido feito com a lã deste Pokémon é surpreendentemente forte.",
    evolution: {
      next: [["832", "Level 24"]],
    },
    profile: {
      height: "1 m",
      weight: "6 kg",
      gender: "50.0:50.0",
      ability: [
        ["Fluffy", "false"],
        ["Run-away", "false"],
        ["Bulletproof", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/831.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/831.png",
      hires: "./Imagens/Pokedex/hires/831.png",
    },
  },
  {
    id: 832,
    name: {
      english: "Dubwool",
      japanese: "バイウールー",
      chinese: "毛毛角羊",
      french: "Moumouflon",
    },
    type: ["Normal"],
    species: "Sheep Pokémon",
    description:
      "Seus chifres majestosos são destinados apenas a impressionar o sexo oposto. Eles nunca são usados em batalha.",
    evolution: {
      prev: ["831", "Level 24"],
    },
    profile: {
      height: "1 m",
      weight: "43 kg",
      gender: "50.0:50.0",
      ability: [
        ["Fluffy", "false"],
        ["Run-away", "false"],
        ["Bulletproof", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/832.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/832.png",
      hires: "./Imagens/Pokedex/hires/832.png",
    },
  },
  {
    id: 833,
    name: {
      english: "Chewtle",
      japanese: "カムカメ",
      chinese: "咬咬龟 ",
      french: "Khélocrok",
    },
    type: ["Água"],
    species: "Snapping Pokémon",
    description:
      "Ele começa as batalhas atacando com seu chifre duro como uma rocha, mas assim que o oponente recua, este Pokémon morde e nunca solta.",
    evolution: {
      next: [["834", "Level 22"]],
    },
    profile: {
      height: "0 m",
      weight: "8 kg",
      gender: "50.0:50.0",
      ability: [
        ["Strong-jaw", "false"],
        ["Shell-armor", "false"],
        ["Swift-swim", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/833.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/833.png",
      hires: "./Imagens/Pokedex/hires/833.png",
    },
  },
  {
    id: 834,
    name: {
      english: "Drednaw",
      japanese: "カジリガメ",
      chinese: "暴噬龟",
      french: "Torgamord",
    },
    type: ["Água", "Rocha"],
    species: "Bite Pokémon",
    description:
      "Este Pokémon estende rapidamente seu pescoço retrátil para afundar suas presas afiadas em inimigos distantes e derrubá-los.",
    evolution: {
      prev: ["833", "Level 22"],
    },
    profile: {
      height: "1 m",
      weight: "116 kg",
      gender: "50.0:50.0",
      ability: [
        ["Strong-jaw", "false"],
        ["Shell-armor", "false"],
        ["Swift-swim", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/834.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/834.png",
      hires: "./Imagens/Pokedex/hires/834.png",
    },
  },
  {
    id: 835,
    name: {
      english: "Yamper",
      japanese: "ワンパチ",
      chinese: "来电汪",
      french: "Voltoutou",
    },
    type: ["Elétrico"],
    species: "Puppy Pokémon",
    description:
      "Este Pokémon guloso só ajuda as pessoas com seu trabalho porque quer guloseimas. Enquanto corre, ele crepita com eletricidade.",
    evolution: {
      next: [["836", "Level 25"]],
    },
    profile: {
      height: "0 m",
      weight: "14 kg",
      gender: "50.0:50.0",
      ability: [
        ["Ball-fetch", "false"],
        ["Rattled", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/835.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/835.png",
      hires: "./Imagens/Pokedex/hires/835.png",
    },
  },
  {
    id: 836,
    name: {
      english: "Boltund",
      japanese: "パルスワン",
      chinese: "逐电犬",
      french: "Fulgudog",
    },
    type: ["Elétrico"],
    species: "Dog Pokémon",
    description:
      "Ele envia eletricidade através de suas pernas para aumentar sua força. Correndo em velocidade máxima, ele facilmente quebra 50 mph.",
    evolution: {
      prev: ["835", "Level 25"],
    },
    profile: {
      height: "1 m",
      weight: "34 kg",
      gender: "50.0:50.0",
      ability: [
        ["Strong-jaw", "false"],
        ["Competitive", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/836.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/836.png",
      hires: "./Imagens/Pokedex/hires/836.png",
    },
  },
  {
    id: 837,
    name: {
      english: "Rolycoly",
      japanese: "タンドン",
      chinese: "小炭仔",
      french: "Charbi",
    },
    type: ["Rocha"],
    species: "Coal Pokémon",
    description:
      "Ele pode correr como um monociclo, mesmo em terrenos acidentados e rochosos. O carvão em chamas o sustenta.",
    evolution: {
      next: [["838", "Level 18"]],
    },
    profile: {
      height: "0 m",
      weight: "12 kg",
      gender: "50.0:50.0",
      ability: [
        ["Steam-engine", "false"],
        ["Heatproof", "false"],
        ["Flash-Fogo", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/837.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/837.png",
      hires: "./Imagens/Pokedex/hires/837.png",
    },
  },
  {
    id: 838,
    name: {
      english: "Carkol",
      japanese: "トロッゴン",
      chinese: "大炭车",
      french: "Wagomine",
    },
    type: ["Rocha", "Fogo"],
    species: "Coal Pokémon",
    description:
      "Girando rapidamente as pernas, ele pode viajar a mais de 18 mph. A temperatura das chamas que ele respira excede 1.800 graus Fahrenheit.",
    evolution: {
      prev: ["837", "Level 18"],
      next: [["839", "Level 34"]],
    },
    profile: {
      height: "1 m",
      weight: "78 kg",
      gender: "50.0:50.0",
      ability: [
        ["Steam-engine", "false"],
        ["Flame-body", "false"],
        ["Flash-Fogo", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/838.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/838.png",
      hires: "./Imagens/Pokedex/hires/838.png",
    },
  },
  {
    id: 839,
    name: {
      english: "Coalossal",
      japanese: "セキタンザン",
      chinese: "巨炭山",
      french: "Monthracite",
    },
    type: ["Rocha", "Fogo"],
    species: "Coal Pokémon",
    description:
      "Enquanto está envolvido em batalha, sua montanha de carvão queimará vermelho brilhante, enviando faíscas que queimam a área circundante.",
    evolution: {
      prev: ["838", "Level 34"],
    },
    profile: {
      height: "3 m",
      weight: "310 kg",
      gender: "50.0:50.0",
      ability: [
        ["Steam-engine", "false"],
        ["Flame-body", "false"],
        ["Flash-Fogo", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/839.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/839.png",
      hires: "./Imagens/Pokedex/hires/839.png",
    },
  },
  {
    id: 840,
    name: {
      english: "Applin",
      japanese: "カジッチュ",
      chinese: "啃果虫",
      french: "Verpom",
    },
    type: ["Grama", "Dragão"],
    species: "Apple Core Pokémon",
    description:
      "Assim que nasce, ele se enterra em uma maçã. Não só a maçã serve como fonte de alimento, mas o sabor da fruta determina sua evolução.",
    evolution: {
      next: [
        ["841", "use "],
        ["842", "use "],
      ],
    },
    profile: {
      height: "0 m",
      weight: "0 kg",
      gender: "50.0:50.0",
      ability: [
        ["Ripen", "false"],
        ["Gluttony", "false"],
        ["Bulletproof", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/840.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/840.png",
      hires: "./Imagens/Pokedex/hires/840.png",
    },
  },
  {
    id: 841,
    name: {
      english: "Flapple",
      japanese: "アップリュー",
      chinese: "苹裹龙",
      french: "Pomdrapi",
    },
    type: ["Grama", "Dragão"],
    species: "Apple Wing Pokémon",
    description:
      "Ele voa em asas de casca de maçã e cospe um ácido poderoso. Ele também pode mudar sua forma para a de uma maçã.",
    evolution: {
      prev: ["840", "use "],
    },
    profile: {
      height: "0 m",
      weight: "1 kg",
      gender: "50.0:50.0",
      ability: [
        ["Ripen", "false"],
        ["Gluttony", "false"],
        ["Hustle", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/841.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/841.png",
      hires: "./Imagens/Pokedex/hires/841.png",
    },
  },
  {
    id: 842,
    name: {
      english: "Appletun",
      japanese: "タルップル",
      chinese: "丰蜜龙",
      french: "Dratatin",
    },
    type: ["Grama", "Dragão"],
    species: "Apple Nectar Pokémon",
    description:
      "Seu corpo é coberto de néctar doce e a pele nas costas é especialmente gostosa. Crianças costumavam comê-lo como lanche.",
    evolution: {
      prev: ["840", "use "],
    },
    profile: {
      height: "0 m",
      weight: "13 kg",
      gender: "50.0:50.0",
      ability: [
        ["Ripen", "false"],
        ["Gluttony", "false"],
        ["Thick-fat", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/842.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/842.png",
      hires: "./Imagens/Pokedex/hires/842.png",
    },
  },
  {
    id: 843,
    name: {
      english: "Silicobra",
      japanese: "スナヘビ",
      chinese: "沙包蛇",
      french: "Dunaja",
    },
    type: ["Terra"],
    species: "Sand Snake Pokémon",
    description:
      "Ele cospe areia de suas narinas. Enquanto o inimigo está cego, ele se esconde no chão para se esconder.",
    evolution: {
      next: [["844", "Level 36"]],
    },
    profile: {
      height: "2 m",
      weight: "8 kg",
      gender: "50.0:50.0",
      ability: [
        ["Sand-spit", "false"],
        ["Shed-skin", "false"],
        ["Sand-veil", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/843.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/843.png",
      hires: "./Imagens/Pokedex/hires/843.png",
    },
  },
  {
    id: 844,
    name: {
      english: "Sandaconda",
      japanese: "サダイジャ",
      chinese: "沙螺蟒",
      french: "Dunaconda",
    },
    type: ["Terra"],
    species: "Sand Snake Pokémon",
    description:
      "Seu estilo único de enrolamento permite que ele expulse areia de seu saco de areia com mais eficiência.",
    evolution: {
      prev: ["843", "Level 36"],
    },
    profile: {
      height: "4 m",
      weight: "66 kg",
      gender: "50.0:50.0",
      ability: [
        ["Sand-spit", "false"],
        ["Shed-skin", "false"],
        ["Sand-veil", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/844.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/844.png",
      hires: "./Imagens/Pokedex/hires/844.png",
    },
  },
  {
    id: 845,
    name: {
      english: "Cramorant",
      japanese: "ウッウ",
      chinese: "古月鸟",
      french: "Nigosier",
    },
    type: ["Voador", "Água"],
    species: "Gulp Pokémon",
    description:
      "Este Pokémon faminto engole Arrokuda inteiro. Ocasionalmente, ele comete um erro e tenta engolir um Pokémon diferente de sua presa preferida.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "18 kg",
      gender: "50.0:50.0",
      ability: [["Gulp-missile", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/845.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/845.png",
      hires: "./Imagens/Pokedex/hires/845.png",
    },
  },
  {
    id: 846,
    name: {
      english: "Arrokuda",
      japanese: "サシカマス",
      chinese: "刺梭鱼",
      french: "Embrochet",
    },
    type: ["Água"],
    species: "Rush Pokémon",
    description:
      "Depois de comer o suficiente, seus movimentos se tornam extremamente lentos. É quando Cramorant o engole.",
    evolution: {
      next: [["847", "Level 26"]],
    },
    profile: {
      height: "1 m",
      weight: "1 kg",
      gender: "50.0:50.0",
      ability: [
        ["Swift-swim", "false"],
        ["Propeller-tail", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/846.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/846.png",
      hires: "./Imagens/Pokedex/hires/846.png",
    },
  },
  {
    id: 847,
    name: {
      english: "Barraskewda",
      japanese: "カマスジョー",
      chinese: "戽斗尖梭",
      french: "Hastacuda",
    },
    type: ["Água"],
    species: "Skewer Pokémon",
    description:
      "Ele gira suas nadadeiras caudais para se impulsionar, surgindo para frente em velocidades superiores a 100 nós antes de bater na presa e lançar-se neles.",
    evolution: {
      prev: ["846", "Level 26"],
    },
    profile: {
      height: "1 m",
      weight: "30 kg",
      gender: "50.0:50.0",
      ability: [
        ["Swift-swim", "false"],
        ["Propeller-tail", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/847.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/847.png",
      hires: "./Imagens/Pokedex/hires/847.png",
    },
  },
  {
    id: 848,
    name: {
      english: "Toxel",
      japanese: "エレズン",
      chinese: "毒电婴",
      french: "Toxizap",
    },
    type: ["Elétrico", "Venenoso"],
    species: "Baby Pokémon",
    description:
      "Ele manipula a composição química de seu veneno para produzir eletricidade. A voltagem é fraca, mas pode causar uma paralisia formigante.",
    evolution: {
      next: [["849", "Level 30, with a "]],
    },
    profile: {
      height: "0 m",
      weight: "11 kg",
      gender: "50.0:50.0",
      ability: [
        ["Rattled", "false"],
        ["Static", "false"],
        ["Klutz", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/848.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/848.png",
      hires: "./Imagens/Pokedex/hires/848.png",
    },
  },
  {
    id: 849,
    name: {
      english: "Toxtricity",
      japanese: "ストリンダー",
      chinese: "颤弦蝾螈",
      french: "Salarsen",
    },
    type: ["Elétrico", "Venenoso"],
    species: "Punk Pokémon",
    description:
      "Este Pokémon de temperamento curto e agressivo bebe água estagnada para absorver quaisquer toxinas que possa conter.",
    evolution: {
      next: [["849", "Level 30, with a "]],
    },
    profile: {
      height: "2 m",
      weight: "40 kg",
      gender: "50.0:50.0",
      ability: [
        ["Punk-rock", "false"],
        ["Plus", "false"],
        ["Technician", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/849.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/849.png",
      hires: "./Imagens/Pokedex/hires/849.png",
    },
  },
  {
    id: 850,
    name: {
      english: "Sizzlipede",
      japanese: "ヤクデ",
      chinese: "烧火蚣",
      french: "Grillepattes",
    },
    type: ["Fogo", "Inseto"],
    species: "Radiator Pokémon",
    description:
      "Ele envolve a presa com seu corpo aquecido, cozinhando-os em suas bobinas. Uma vez bem cozidos, ele os mordiscará vorazmente até o último pedaço.",
    evolution: {
      next: [["851", "Level 28"]],
    },
    profile: {
      height: "1 m",
      weight: "1 kg",
      gender: "50.0:50.0",
      ability: [
        ["Flash-Fogo", "false"],
        ["White-smoke", "false"],
        ["Flame-body", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/850.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/850.png",
      hires: "./Imagens/Pokedex/hires/850.png",
    },
  },
  {
    id: 851,
    name: {
      english: "Centiskorch",
      japanese: "マルヤクデ",
      chinese: "焚焰蚣",
      french: "Scolocendre",
    },
    type: ["Fogo", "Inseto"],
    species: "Radiator Pokémon",
    description:
      "Enquanto seu corpo em chamas já é perigoso por si só, este Pokémon excessivamente hostil também tem presas grandes e muito afiadas.",
    evolution: {
      prev: ["850", "Level 28"],
    },
    profile: {
      height: "3 m",
      weight: "120 kg",
      gender: "50.0:50.0",
      ability: [
        ["Flash-Fogo", "false"],
        ["White-smoke", "false"],
        ["Flame-body", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/851.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/851.png",
      hires: "./Imagens/Pokedex/hires/851.png",
    },
  },
  {
    id: 852,
    name: {
      english: "Clobbopus",
      japanese: "タタッコ",
      chinese: "拳拳蛸",
      french: "Poulpaf",
    },
    type: ["Lutador"],
    species: "Tantrum Pokémon",
    description:
      "Seus tentáculos se desprendem facilmente, mas ele não fica alarmado quando isso acontece - ele sabe que eles voltarão a crescer. É tão inteligente quanto uma criança de três anos.",
    evolution: {
      next: [["853", "after "]],
    },
    profile: {
      height: "1 m",
      weight: "4 kg",
      gender: "50.0:50.0",
      ability: [
        ["Limber", "false"],
        ["Technician", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/852.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/852.png",
      hires: "./Imagens/Pokedex/hires/852.png",
    },
  },
  {
    id: 853,
    name: {
      english: "Grapploct",
      japanese: "オトスパス",
      chinese: "八爪武师",
      french: "Krakos",
    },
    type: ["Lutador"],
    species: "Tantrum Pokémon",
    description:
      "Procurando um oponente para testar suas habilidades, ele emerge na terra. Uma vez que a batalha acabou, ele retorna para o mar.",
    evolution: {
      prev: ["852", "after "],
    },
    profile: {
      height: "2 m",
      weight: "39 kg",
      gender: "50.0:50.0",
      ability: [
        ["Limber", "false"],
        ["Technician", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/853.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/853.png",
      hires: "./Imagens/Pokedex/hires/853.png",
    },
  },
  {
    id: 854,
    name: {
      english: "Sinistea",
      japanese: "ヤバチャ",
      chinese: "来悲茶",
      french: "Théffroi",
    },
    type: ["Fantasma"],
    species: "Black Tea Pokémon",
    description:
      "A xícara de chá em que este Pokémon faz sua casa é uma famosa peça de louça antiga. Muitas falsificações estão em circulação.",
    evolution: {
      next: [["855", "use "]],
    },
    profile: {
      height: "0 m",
      weight: "0 kg",
      gender: "Genderless",
      ability: [
        ["Weak-armor", "false"],
        ["Cursed-body", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/854.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/854.png",
      hires: "./Imagens/Pokedex/hires/854.png",
    },
  },
  {
    id: 855,
    name: {
      english: "Polteageist",
      japanese: "ポットデス",
      chinese: "怖思壶",
      french: "Polthégeist",
    },
    type: ["Fantasma"],
    species: "Black Tea Pokémon",
    description:
      "Deixar o chá preto restante desatendido é pedir para este Pokémon aparecer e despejá-lo nele, transformando o chá em um novo Polteageist.",
    evolution: {
      prev: ["854", "use "],
    },
    profile: {
      height: "0 m",
      weight: "0 kg",
      gender: "Genderless",
      ability: [
        ["Weak-armor", "false"],
        ["Cursed-body", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/855.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/855.png",
      hires: "./Imagens/Pokedex/hires/855.png",
    },
  },
  {
    id: 856,
    name: {
      english: "Hatenna",
      japanese: "ミブリム",
      chinese: "迷布莉姆",
      french: "Bibichut",
    },
    type: ["Psíquico"],
    species: "Calm Pokémon",
    description:
      "Se este Pokémon sentir uma emoção forte, ele fugirá o mais rápido que puder. Ele prefere áreas sem pessoas.",
    evolution: {
      next: [["857", "Level 32"]],
    },
    profile: {
      height: "0 m",
      weight: "3 kg",
      gender: "0.0:100.0",
      ability: [
        ["Healer", "false"],
        ["Anticipation", "false"],
        ["Magic-bounce", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/856.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/856.png",
      hires: "./Imagens/Pokedex/hires/856.png",
    },
  },
  {
    id: 857,
    name: {
      english: "Hattrem",
      japanese: "テブリム",
      chinese: "提布莉姆",
      french: "Chapotus",
    },
    type: ["Psíquico"],
    species: "Serene Pokémon",
    description:
      "Usando as tranças em sua cabeça, ele golpeia inimigos para fazê-los calar a boca. Um golpe dessas tranças nocautearia um boxeador profissional.",
    evolution: {
      prev: ["856", "Level 32"],
      next: [["858", "Level 42"]],
    },
    profile: {
      height: "1 m",
      weight: "5 kg",
      gender: "0.0:100.0",
      ability: [
        ["Healer", "false"],
        ["Anticipation", "false"],
        ["Magic-bounce", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/857.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/857.png",
      hires: "./Imagens/Pokedex/hires/857.png",
    },
  },
  {
    id: 858,
    name: {
      english: "Hatterene",
      japanese: "ブリムオン",
      chinese: "布莉姆温",
      french: "Sorcilence",
    },
    type: ["Psíquico", "Fada"],
    species: "Silent Pokémon",
    description:
      "Se você for muito alto ao seu redor, corre o risco de ser dilacerado pelas garras de seu tentáculo. Este Pokémon também é conhecido como Bruxa da Floresta.",
    evolution: {
      prev: ["857", "Level 42"],
    },
    profile: {
      height: "2 m",
      weight: "5 kg",
      gender: "0.0:100.0",
      ability: [
        ["Healer", "false"],
        ["Anticipation", "false"],
        ["Magic-bounce", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/858.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/858.png",
      hires: "./Imagens/Pokedex/hires/858.png",
    },
  },
  {
    id: 859,
    name: {
      english: "Impidimp",
      japanese: "ベロバー",
      chinese: "捣蛋小妖",
      french: "Grimalin",
    },
    type: ["Sombrio", "Fada"],
    species: "Wily Pokémon",
    description:
      "Ele se esgueira nas casas das pessoas, roubando coisas e festejando com a energia negativa dos ocupantes frustrados.",
    evolution: {
      next: [["860", "Level 32"]],
    },
    profile: {
      height: "0 m",
      weight: "6 kg",
      gender: "100.0:0.0",
      ability: [
        ["Prankster", "false"],
        ["Frisk", "false"],
        ["Pickpocket", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/859.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/859.png",
      hires: "./Imagens/Pokedex/hires/859.png",
    },
  },
  {
    id: 860,
    name: {
      english: "Morgrem",
      japanese: "ギモー",
      chinese: "诈唬魔",
      french: "Fourbelin",
    },
    type: ["Sombrio", "Fada"],
    species: "Devious Pokémon",
    description:
      "Com astúcia astuta, ele tenta atrair as pessoas para a floresta. Alguns acreditam que ele tem o poder de fazer as plantações crescerem.",
    evolution: {
      prev: ["859", "Level 32"],
      next: [["861", "Level 42"]],
    },
    profile: {
      height: "1 m",
      weight: "12 kg",
      gender: "100.0:0.0",
      ability: [
        ["Prankster", "false"],
        ["Frisk", "false"],
        ["Pickpocket", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/860.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/860.png",
      hires: "./Imagens/Pokedex/hires/860.png",
    },
  },
  {
    id: 861,
    name: {
      english: "Grimmsnarl",
      japanese: "オーロンゲ",
      chinese: "长毛巨魔",
      french: "Angoliath",
    },
    type: ["Sombrio", "Fada"],
    species: "Bulk Up Pokémon",
    description:
      "Seus cabelos funcionam como fibras musculares. Quando seus cabelos se desenrolam, eles se agarram aos oponentes, prendendo-os como tentáculos.",
    evolution: {
      prev: ["860", "Level 42"],
    },
    profile: {
      height: "1 m",
      weight: "61 kg",
      gender: "100.0:0.0",
      ability: [
        ["Prankster", "false"],
        ["Frisk", "false"],
        ["Pickpocket", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/861.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/861.png",
      hires: "./Imagens/Pokedex/hires/861.png",
    },
  },
  {
    id: 862,
    name: {
      english: "Obstagoon",
      japanese: "タチフサグマ",
      chinese: "堵拦熊",
      french: "Ixon",
    },
    type: ["Sombrio", "Normal"],
    species: "Blocking Pokémon",
    description:
      "Ele evoluiu após experimentar inúmeras lutas. Enquanto cruza os braços, ele deixa escapar um grito que faria qualquer oponente recuar.",
    evolution: {
      prev: ["264", "Level 35, Nighttime"],
    },
    profile: {
      height: "2 m",
      weight: "46 kg",
      gender: "50.0:50.0",
      ability: [
        ["Reckless", "false"],
        ["Guts", "false"],
        ["Defiant", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/862.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/862.png",
      hires: "./Imagens/Pokedex/hires/862.png",
    },
  },
  {
    id: 863,
    name: {
      english: "Perrserker",
      japanese: "ニャイキング",
      chinese: "喵头目",
      french: "Berserkatt",
    },
    type: ["Metal"],
    species: "Viking Pokémon",
    description:
      "Após muitas batalhas, ele evoluiu garras perigosas que se unem para formar adagas quando estendidas.",
    evolution: {
      prev: ["52", "Level 28"],
    },
    profile: {
      height: "1 m",
      weight: "28 kg",
      gender: "50.0:50.0",
      ability: [
        ["Battle-armor", "false"],
        ["Tough-claws", "false"],
        ["Metaly-spirit", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/863.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/863.png",
      hires: "./Imagens/Pokedex/hires/863.png",
    },
  },
  {
    id: 864,
    name: {
      english: "Cursola",
      japanese: "サニゴーン",
      chinese: "魔灵珊瑚",
      french: "Corayôme",
    },
    type: ["Fantasma"],
    species: "Coral Pokémon",
    description:
      "Cuidado com o corpo ectoplasmático que envolve sua alma. Você ficará rígido como pedra se tocá-lo.",
    evolution: {
      prev: ["222", "Level 38"],
    },
    profile: {
      height: "1 m",
      weight: "0 kg",
      gender: "25.0:75.0",
      ability: [
        ["Weak-armor", "false"],
        ["Perish-body", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/864.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/864.png",
      hires: "./Imagens/Pokedex/hires/864.png",
    },
  },
  {
    id: 865,
    name: {
      english: "Sirfetch'd",
      japanese: "ネギガナイト",
      chinese: "葱游兵",
      french: "Palarticho",
    },
    type: ["Lutador"],
    species: "Wild Duck Pokémon",
    description:
      "Após desviar ataques com seu escudo de folhas duras, ele ataca de volta com seu talo de alho-poró afiado. O talo de alho-poró é arma e alimento.",
    evolution: {
      prev: ["83", "achieve 3 critical hits in one battle"],
    },
    profile: {
      height: "1 m",
      weight: "117 kg",
      gender: "50.0:50.0",
      ability: [
        ["Steadfast", "false"],
        ["Scrappy", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/865.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/865.png",
      hires: "./Imagens/Pokedex/hires/865.png",
    },
  },
  {
    id: 866,
    name: {
      english: "Mr. Rime",
      japanese: "バリコオル",
      chinese: "踏冰人偶",
      french: "M. Glaquette",
    },
    type: ["Gelo", "Psíquico"],
    species: "Comedian Pokémon",
    description:
      "Seus movimentos divertidos o tornam muito popular. Ele libera seu poder psíquico do padrão em seu ventre.",
    evolution: {
      prev: ["122", "Level 42"],
    },
    profile: {
      height: "1 m",
      weight: "58 kg",
      gender: "50.0:50.0",
      ability: [
        ["Tangled-feet", "false"],
        ["Screen-cleaner", "false"],
        ["Gelo-body", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/866.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/866.png",
      hires: "./Imagens/Pokedex/hires/866.png",
    },
  },
  {
    id: 867,
    name: {
      english: "Runerigus",
      japanese: "デスバーン",
      chinese: "死神板",
      french: "Tutétékri",
    },
    type: ["Terra", "Fantasma"],
    species: "Grudge Pokémon",
    description:
      "Nunca toque em seu corpo semelhante a uma sombra, ou você verá as horríveis memórias por trás da imagem esculpida nele.",
    evolution: {
      prev: ["562", "Level 34"],
    },
    profile: {
      height: "2 m",
      weight: "67 kg",
      gender: "50.0:50.0",
      ability: [["Wandering-spirit", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/867.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/867.png",
      hires: "./Imagens/Pokedex/hires/867.png",
    },
  },
  {
    id: 868,
    name: {
      english: "Milcery",
      japanese: "マホミル",
      chinese: "小仙奶",
      french: "Crèmy",
    },
    type: ["Fada"],
    species: "Cream Pokémon",
    description:
      "Diz-se que qualquer pastelaria visitada por Milcery é garantida sucesso e boa sorte.",
    evolution: {
      next: [["869", "spin around holding Sweet"]],
    },
    profile: {
      height: "0 m",
      weight: "0 kg",
      gender: "0.0:100.0",
      ability: [
        ["Sweet-veil", "false"],
        ["Aroma-veil", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/868.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/868.png",
      hires: "./Imagens/Pokedex/hires/868.png",
    },
  },
  {
    id: 869,
    name: {
      english: "Alcremie",
      japanese: "マホイップ",
      chinese: "霜奶仙",
      french: "Charmilly",
    },
    type: ["Fada"],
    species: "Cream Pokémon",
    description:
      "Quando Alcremie está contente, o creme que secreta de suas mãos fica mais doce e rico.",
    evolution: {
      prev: ["868", "spin around holding Sweet"],
    },
    profile: {
      height: "0 m",
      weight: "0 kg",
      gender: "0.0:100.0",
      ability: [
        ["Sweet-veil", "false"],
        ["Aroma-veil", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/869.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/869.png",
      hires: "./Imagens/Pokedex/hires/869.png",
    },
  },
  {
    id: 870,
    name: {
      english: "Falinks",
      japanese: "タイレーツ",
      chinese: "列阵兵",
      french: "Hexadron",
    },
    type: ["Lutador"],
    species: "Formation Pokémon",
    description:
      "Os seis deles trabalham juntos como um Pokémon. O trabalho em equipe também é sua estratégia de batalha e eles mudam constantemente sua formação enquanto lutam.",
    evolution: {},
    profile: {
      height: "3 m",
      weight: "62 kg",
      gender: "Genderless",
      ability: [
        ["Battle-armor", "false"],
        ["Defiant", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/870.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/870.png",
      hires: "./Imagens/Pokedex/hires/870.png",
    },
  },
  {
    id: 871,
    name: {
      english: "Pincurchin",
      japanese: "バチンウニ",
      chinese: "啪嚓海胆",
      french: "Wattapik",
    },
    type: ["Elétrico"],
    species: "Sea Urchin Pokémon",
    description:
      "Ele armazena eletricidade em cada espinha. Mesmo que um se quebre, ele ainda continua emitindo eletricidade por pelo menos três horas.",
    evolution: {},
    profile: {
      height: "0 m",
      weight: "1 kg",
      gender: "50.0:50.0",
      ability: [
        ["Lightning-rod", "false"],
        ["Elétrico-surge", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/871.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/871.png",
      hires: "./Imagens/Pokedex/hires/871.png",
    },
  },
  {
    id: 872,
    name: {
      english: "Snom",
      japanese: "ユキハミ",
      chinese: "雪吞虫",
      french: "Frissonille",
    },
    type: ["Gelo", "Inseto"],
    species: "Worm Pokémon",
    description:
      "Ele come neve que se acumula no chão. Quanto mais neve comer, maiores e mais impressionantes ficarão os espinhos nas costas.",
    evolution: {
      next: [["873", "high "]],
    },
    profile: {
      height: "0 m",
      weight: "4 kg",
      gender: "50.0:50.0",
      ability: [
        ["Shield-dust", "false"],
        ["Gelo-scales", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/872.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/872.png",
      hires: "./Imagens/Pokedex/hires/872.png",
    },
  },
  {
    id: 873,
    name: {
      english: "Frosmoth",
      japanese: "モスノウ",
      chinese: "雪绒蛾",
      french: "Beldeneige",
    },
    type: ["Gelo", "Inseto"],
    species: "Frost Moth Pokémon",
    description:
      "Ele não mostra nenhuma misericórdia para qualquer um que desconsagre campos e montanhas. Ele voará em suas asas geladas, causando uma nevasca para afastar os infratores.",
    evolution: {
      prev: ["872", "high "],
    },
    profile: {
      height: "1 m",
      weight: "42 kg",
      gender: "50.0:50.0",
      ability: [
        ["Shield-dust", "false"],
        ["Gelo-scales", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/873.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/873.png",
      hires: "./Imagens/Pokedex/hires/873.png",
    },
  },
  {
    id: 874,
    name: {
      english: "Stonjourner",
      japanese: "イシヘンジン",
      chinese: "巨石丁",
      french: "Dolman",
    },
    type: ["Rocha"],
    species: "Big Rocha Pokémon",
    description:
      "Uma vez por ano, em uma data específica e em um horário específico, eles se reúnem do nada e formam um círculo.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "520 kg",
      gender: "50.0:50.0",
      ability: [["Power-spot", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/874.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/874.png",
      hires: "./Imagens/Pokedex/hires/874.png",
    },
  },
  {
    id: 875,
    name: {
      english: "Eiscue",
      japanese: "コオリッポ",
      chinese: "冰砌鹅",
      french: "Bekaglaçon",
    },
    type: ["Gelo"],
    species: "Penguin Pokémon",
    description:
      "Este Pokémon mantém sua cabeça sensível ao calor fria com gelo. Ele pesca para sua comida, pendurando seu único cabelo no mar para atrair presas.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "89 kg",
      gender: "50.0:50.0",
      ability: [["Gelo-face", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/875.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/875.png",
      hires: "./Imagens/Pokedex/hires/875.png",
    },
  },
  {
    id: 876,
    name: {
      english: "Indeedee",
      japanese: "イエッサン",
      chinese: "爱管侍",
      french: "Wimessir",
    },
    type: ["Psíquico", "Normal"],
    species: "Emotion Pokémon",
    description:
      "Através de seus chifres, ele pode captar as emoções das criaturas ao seu redor. Emoções positivas são a fonte de sua força.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "28 kg",
      gender: "50.0:50.0",
      ability: [
        ["Inner-focus", "false"],
        ["Synchronize", "false"],
        ["Psíquico-surge", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/876.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/876.png",
      hires: "./Imagens/Pokedex/hires/876.png",
    },
  },
  {
    id: 877,
    name: {
      english: "Morpeko",
      japanese: "モルペコ",
      chinese: "莫鲁贝可",
      french: "Morpeko",
    },
    type: ["Elétrico", "Sombrio"],
    species: "Two-Sided Pokémon",
    description:
      "Ele carrega sementes eletricamente torradas consigo como se fossem tesouros preciosos. Não importa quanto coma, sempre fica com fome novamente em pouco tempo.",
    evolution: {},
    profile: {
      height: "0 m",
      weight: "3 kg",
      gender: "50.0:50.0",
      ability: [["Hunger-switch", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/877.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/877.png",
    },
  },
  {
    id: 878,
    name: {
      english: "Cufant",
      japanese: "ゾウドウ",
      chinese: "铜象",
      french: "Charibari",
    },
    type: ["Metal"],
    species: "Copperderm Pokémon",
    description:
      "Se um trabalho exigir muita força, este Pokémon se destacará nele. Seu corpo de cobre mancha na chuva, ficando verde vibrante.",
    evolution: {
      next: [["879", "Level 34"]],
    },
    profile: {
      height: "1 m",
      weight: "100 kg",
      gender: "50.0:50.0",
      ability: [
        ["Sheer-force", "false"],
        ["Heavy-metal", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/878.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/878.png",
      hires: "./Imagens/Pokedex/hires/878.png",
    },
  },
  {
    id: 879,
    name: {
      english: "Copperajah",
      japanese: "ダイオウドウ",
      chinese: "大王铜象",
      french: "Pachyradjah",
    },
    type: ["Metal"],
    species: "Copperderm Pokémon",
    description:
      "Esses Pokémon vivem em rebanhos. Suas trombas têm força de aderência incrível, forte o suficiente para esmagar rochas gigantes em pó.",
    evolution: {
      prev: ["878", "Level 34"],
    },
    profile: {
      height: "3 m",
      weight: "650 kg",
      gender: "50.0:50.0",
      ability: [
        ["Sheer-force", "false"],
        ["Heavy-metal", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/879.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/879.png",
      hires: "./Imagens/Pokedex/hires/879.png",
    },
  },
  {
    id: 880,
    name: {
      english: "Dracozolt",
      japanese: "パッチラゴン",
      chinese: "雷鸟龙",
      french: "Galvagon",
    },
    type: ["Elétrico", "Dragão"],
    species: "Fossil Pokémon",
    description:
      "Os poderosos músculos de sua cauda geram sua eletricidade. Em comparação com sua parte inferior do corpo, sua metade superior é inteiramente pequena.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "190 kg",
      gender: "Genderless",
      ability: [
        ["Volt-absorb", "false"],
        ["Hustle", "false"],
        ["Sand-rush", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/880.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/880.png",
      hires: "./Imagens/Pokedex/hires/880.png",
    },
  },
  {
    id: 881,
    name: {
      english: "Arctozolt",
      japanese: "パッチルドン",
      chinese: "雷鸟海兽",
      french: "Galvagla",
    },
    type: ["Elétrico", "Gelo"],
    species: "Fossil Pokémon",
    description:
      "Este Pokémon vivia em praias pré-históricas e era capaz de preservar alimentos com o gelo em seu corpo. Ele se extinguiu porque se movia tão lentamente.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "150 kg",
      gender: "Genderless",
      ability: [
        ["Volt-absorb", "false"],
        ["Static", "false"],
        ["Slush-rush", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/881.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/881.png",
      hires: "./Imagens/Pokedex/hires/881.png",
    },
  },
  {
    id: 882,
    name: {
      english: "Dracovish",
      japanese: "ウオノラゴン",
      chinese: "鳃鱼龙",
      french: "Hydragon",
    },
    type: ["Água", "Dragão"],
    species: "Fossil Pokémon",
    description:
      "Suas poderosas pernas são capazes de correr em velocidades superiores a 40 mph, mas este Pokémon não pode respirar a menos que esteja debaixo d'água.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "215 kg",
      gender: "Genderless",
      ability: [
        ["Água-absorb", "false"],
        ["Strong-jaw", "false"],
        ["Sand-rush", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/882.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/882.png",
      hires: "./Imagens/Pokedex/hires/882.png",
    },
  },
  {
    id: 883,
    name: {
      english: "Arctovish",
      japanese: "ウオチルドン",
      chinese: "鳃鱼海兽",
      french: "Hydragla",
    },
    type: ["Água", "Gelo"],
    species: "Fossil Pokémon",
    description:
      "A pele em seu rosto é impenetrável ao ataque, mas as dificuldades respiratórias fizeram este Pokémon se extinguir de qualquer maneira.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "175 kg",
      gender: "Genderless",
      ability: [
        ["Água-absorb", "false"],
        ["Gelo-body", "false"],
        ["Slush-rush", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/883.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/883.png",
      hires: "./Imagens/Pokedex/hires/883.png",
    },
  },
  {
    id: 884,
    name: {
      english: "Duraludon",
      japanese: "ジュラルドン",
      chinese: "铝钢龙",
      french: "Duralugon",
    },
    type: ["Metal", "Dragão"],
    species: "Alloy Pokémon",
    description:
      "O metal especial que compõe seu corpo é muito leve, por isso este Pokémon tem agilidade considerável. Ele vive em cavernas porque não gosta da chuva.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "40 kg",
      gender: "50.0:50.0",
      ability: [
        ["Light-metal", "false"],
        ["Heavy-metal", "false"],
        ["Stalwart", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/884.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/884.png",
      hires: "./Imagens/Pokedex/hires/884.png",
    },
  },
  {
    id: 885,
    name: {
      english: "Dreepy",
      japanese: "ドラメシヤ",
      chinese: "多龙梅西亚",
      french: "Fantyrm",
    },
    type: ["Dragão", "Fantasma"],
    species: "Lingering Pokémon",
    description:
      "Se este Pokémon fraco estiver sozinho, uma mera criança poderia derrotá-lo. Mas se Dreepy tiver amigos para ajudá-lo a treinar, ele pode evoluir e se tornar muito mais forte.",
    evolution: {
      next: [["886", "Level 50"]],
    },
    profile: {
      height: "1 m",
      weight: "2 kg",
      gender: "50.0:50.0",
      ability: [
        ["Clear-body", "false"],
        ["Infiltrator", "false"],
        ["Cursed-body", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/885.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/885.png",
      hires: "./Imagens/Pokedex/hires/885.png",
    },
  },
  {
    id: 886,
    name: {
      english: "Drakloak",
      japanese: "ドロンチ",
      chinese: "多龙奇",
      french: "Dispareptil",
    },
    type: ["Dragão", "Fantasma"],
    species: "Caretaker Pokémon",
    description:
      "Sem um Dreepy para colocar em sua cabeça e cuidar, ele fica tão desconfortável que tentará substituir qualquer Pokémon que encontrar pelo Dreepy desaparecido.",
    evolution: {
      prev: ["885", "Level 50"],
      next: [["887", "Level 60"]],
    },
    profile: {
      height: "1 m",
      weight: "11 kg",
      gender: "50.0:50.0",
      ability: [
        ["Clear-body", "false"],
        ["Infiltrator", "false"],
        ["Cursed-body", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/886.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/886.png",
      hires: "./Imagens/Pokedex/hires/886.png",
    },
  },
  {
    id: 887,
    name: {
      english: "Dragapult",
      japanese: "ドラパルト",
      chinese: "多龙巴鲁托",
      french: "Lanssorien",
    },
    type: ["Dragão", "Fantasma"],
    species: "Stealth Pokémon",
    description:
      "Aparentemente, o Dreepy dentro das cornas de Dragapult ansiosamente espera ser lançado em velocidades Mach.",
    evolution: {
      prev: ["886", "Level 60"],
    },
    profile: {
      height: "3 m",
      weight: "50 kg",
      gender: "50.0:50.0",
      ability: [
        ["Clear-body", "false"],
        ["Infiltrator", "false"],
        ["Cursed-body", "true"],
      ],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/887.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/887.png",
      hires: "./Imagens/Pokedex/hires/887.png",
    },
  },
  {
    id: 888,
    name: {
      english: "Zacian",
      japanese: "ザシアン",
      chinese: "苍响",
      french: "Zacian",
    },
    type: ["Fada"],
    species: "Warrior Pokémon",
    description:
      "Este Pokémon está adormecido há muitos anos. Alguns dizem que é a irmã mais velha de Zamazenta - outros dizem que os dois Pokémon são rivais.",
    evolution: {},
    profile: {
      height: "3 m",
      weight: "110 kg",
      gender: "Genderless",
      ability: [["Intrepid-sword", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/888.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/888.png",
      hires: "./Imagens/Pokedex/hires/888.png",
    },
  },
  {
    id: 889,
    name: {
      english: "Zamazenta",
      japanese: "ザマゼンタ",
      chinese: "藏玛然特",
      french: "Zamazent",
    },
    type: ["Lutador"],
    species: "Warrior Pokémon",
    description:
      "Este Pokémon dormiu por éons enquanto estava na forma de uma estátua. Ele estava dormindo há tanto tempo que as pessoas esqueceram que ele já existia.",
    evolution: {},
    profile: {
      height: "3 m",
      weight: "210 kg",
      gender: "Genderless",
      ability: [["Dauntless-shield", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/889.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/889.png",
      hires: "./Imagens/Pokedex/hires/889.png",
    },
  },
  {
    id: 890,
    name: {
      english: "Eternatus",
      japanese: "ムゲンダイナ",
      chinese: "无极汰那",
      french: "Éthernatos",
    },
    type: ["Venenoso", "Dragão"],
    species: "Gigantic Pokémon",
    description:
      "Estava dentro de um meteorito que caiu há 20.000 anos. Parece haver uma conexão entre este Pokémon e o fenômeno Dynamax.",
    evolution: {},
    profile: {
      height: "20 m",
      weight: "950 kg",
      gender: "Genderless",
      ability: [["Pressure", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/890.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/890.png",
      hires: "./Imagens/Pokedex/hires/890.png",
    },
  },
  {
    id: 891,
    name: {
      english: "Kubfu",
      japanese: "ダクマ",
      chinese: "熊徒弟",
      french: "Wushours",
    },
    type: ["Lutador"],
    species: "Wushu Pokémon",
    description:
      "Se Kubfu puxar o longo cabelo branco em sua cabeça, seu espírito de luta aumenta e o poder brota das profundezas de seu ventre.",
    evolution: {
      next: [
        ["892", "Scroll of Sombrioness"],
        ["892", "Scroll of Águas"],
      ],
    },
    profile: {
      height: "1 m",
      weight: "12 kg",
      gender: "87.5:12.5",
      ability: [["Inner-focus", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/891.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/891.png",
      hires: "./Imagens/Pokedex/hires/891.png",
    },
  },
  {
    id: 892,
    name: {
      english: "Urshifu",
      japanese: "ウーラオス",
      chinese: "武道熊师",
      french: "Shifours",
    },
    type: ["Lutador", "Sombrio"],
    species: "Wushu Pokémon",
    description:
      "Habitando as montanhas de uma região distante, este Pokémon corre por penhascos íngremes, treinando suas pernas e refinando seus movimentos.",
    evolution: {
      prev: ["892", "Scroll of Sombrioness"],
    },
    profile: {
      height: "2 m",
      weight: "105 kg",
      gender: "87.5:12.5",
      ability: [["Unseen-fist", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/892.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/892.png",
      hires: "./Imagens/Pokedex/hires/892.png",
    },
  },
  {
    id: 893,
    name: {
      english: "Zarude",
      japanese: "ザルード",
      chinese: "萨戮德",
      french: "Zarude",
    },
    type: ["Sombrio", "Grama"],
    species: "Rogue Monkey Pokémon",
    description:
      "Uma vez que as videiras no corpo de Zarude se desprendem, elas se tornam nutrientes no solo. Isso ajuda as plantas da floresta a crescer.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "70 kg",
      gender: "Genderless",
      ability: [["Leaf-guard", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/893.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/893.png",
      hires: "./Imagens/Pokedex/hires/893.png",
    },
  },
  {
    id: 894,
    name: {
      english: "Regieleki",
      japanese: "レジエレキ",
      chinese: "雷吉艾勒奇",
      french: "Regieleki",
    },
    type: ["Elétrico"],
    species: "Electron Pokémon",
    description:
      "Seu corpo inteiro é composto de um único órgão que gera energia elétrica. Regieleki é capaz de criar toda a eletricidade de Galar.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "145 kg",
      gender: "Genderless",
      ability: [["Transistor", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/894.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/894.png",
      hires: "./Imagens/Pokedex/hires/894.png",
    },
  },
  {
    id: 895,
    name: {
      english: "Regidrago",
      japanese: "レジドラゴ",
      chinese: "雷吉铎拉戈",
      french: "Regidrago",
    },
    type: ["Dragão"],
    species: "Dragão Orb Pokémon",
    description:
      "Seu corpo é composto de energia de dragão cristalizada. Regidrago diz-se que tem os poderes de todos os Pokémon dragão.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "200 kg",
      gender: "Genderless",
      ability: [["Dragãos-maw", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/895.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/895.png",
      hires: "./Imagens/Pokedex/hires/895.png",
    },
  },
  {
    id: 896,
    name: {
      english: "Glastrier",
      japanese: "ブリザポス",
      chinese: "雪暴马",
      french: "Blizzeval",
    },
    type: ["Gelo"],
    species: "Wild Horse Pokémon",
    description:
      "Glastrier tem uma força física tremenda, e a máscara de gelo que cobre seu rosto é 100 vezes mais dura que o diamante.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "800 kg",
      gender: "Genderless",
      ability: [["Chilling-neigh", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/896.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/896.png",
      hires: "./Imagens/Pokedex/hires/896.png",
    },
  },
  {
    id: 897,
    name: {
      english: "Spectrier",
      japanese: "レイスポス",
      chinese: "灵幽马",
      french: "Spectreval",
    },
    type: ["Fantasma"],
    species: "Swift Horse Pokémon",
    description:
      "Enquanto corre pela noite, Spectrier absorve a força vital das criaturas adormecidas. Ele anseia por silêncio e solidão.",
    evolution: {},
    profile: {
      height: "2 m",
      weight: "44 kg",
      gender: "Genderless",
      ability: [["Grim-neigh", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/897.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/897.png",
      hires: "./Imagens/Pokedex/hires/897.png",
    },
  },
  {
    id: 898,
    name: {
      english: "Calyrex",
      japanese: "バドレックス",
      chinese: "蕾冠王",
      french: "Sylveroy",
    },
    type: ["Psíquico", "Grama"],
    species: "King Pokémon",
    description:
      "Calyrex é conhecido na lenda como um rei que governou Galar nos tempos antigos. Ele tem o poder de fazer corações se curarem e plantas brotarem.",
    evolution: {},
    profile: {
      height: "1 m",
      weight: "8 kg",
      gender: "Genderless",
      ability: [["Unnerve", "false"]],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/898.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/898.png",
      hires: "./Imagens/Pokedex/hires/898.png",
    },
  },

  {
    name: {
      english: "Sprigatito",
      japanese: "ニャオハ",
      chinese: "新叶喵",
      french: "Poussacha",
    },
    id: 906,
    type: ["Grama"],
    base: {
      HP: 40,
      Attack: 61,
      Defense: 54,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      Speed: 65,
    },
    species: "Grama Cat Pokémon",
    description:
      "Sua pelagem macia é similar em composição às plantas. Este Pokémon costuma lavar o rosto para evitar que ele resseque.",
    profile: {
      height: "0.4 m",
      weight: "4.1 kg",
      egg: ["Terra", "Plant"],
      ability: [
        ["Overgrow", false],
        ["Protean", true],
      ],
      gender: "87.5:12.5",
    },
    evolution: {
      next: [
        ["907", "Level 16"],
        ["908", "Level 36"],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/906.png",
      hires:
        "./Imagens/Pokedex/hires/906.png",
    },
  },
  {
    name: {
      english: "Floragato",
      japanese: "ニャローテ",
      chinese: "蒂蕾喵",
      french: "Matourgeon",
    },
    id: 907,
    type: ["Grama"],
    base: {
      HP: 61,
      Attack: 80,
      Defense: 63,
      "Sp. Attack": 60,
      "Sp. Defense": 63,
      Speed: 83,
    },
    species: "Grama Cat Pokémon",
    description:
      "Floragato maneja habilmente a videira escondida sob sua longa pelagem, golpeando seus oponentes com a dura flor.",
    profile: {
      height: "0.9 m",
      weight: "12.2 kg",
      egg: ["Terra", "Plant"],
      ability: [
        ["Overgrow", false],
        ["Protean", true],
      ],
      gender: "87.5:12.5",
    },
    evolution: {
      prev: ["906", "Level INITIAL"],
      next: [["908", "Level 36"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/907.png",
      hires:
        "./Imagens/Pokedex/hires/907.png",
    },
  },
  {
    name: {
      english: "Meowscarada",
      japanese: "マスカーニャ",
      chinese: "魔幻假面喵",
      french: "Miascarade",
    },
    id: 908,
    type: ["Grama", "Sombrio"],
    base: {
      HP: 76,
      Attack: 110,
      Defense: 70,
      "Sp. Attack": 81,
      "Sp. Defense": 70,
      Speed: 123,
    },
    species: "Magician Pokémon",
    description:
      "Este Pokémon usa a pelagem reflexiva que reveste seu manto para camuflar o caule de sua flor, criando a ilusão de que a flor está flutuando.",
    profile: {
      height: "1.5 m",
      weight: "31.2 kg",
      egg: ["Terra", "Plant"],
      ability: [
        ["Overgrow", false],
        ["Protean", true],
      ],
      gender: "87.5:12.5",
    },
    evolution: {
      prev: ["907", "Level 16"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/908.png",
      hires:
        "./Imagens/Pokedex/hires/908.png",
    },
  },
  {
    name: {
      english: "Fuecoco",
      japanese: "ホゲータ",
      chinese: "呆火鳄",
      french: "Chochodile",
    },
    id: 909,
    type: ["Fogo"],
    base: {
      HP: 67,
      Attack: 45,
      Defense: 59,
      "Sp. Attack": 63,
      "Sp. Defense": 40,
      Speed: 36,
    },
    species: "Fogo Croc Pokémon",
    description:
      "Ele deita em rochas quentes e usa o calor absorvido por suas escamas quadradas para criar energia de fogo.",
    profile: {
      height: "0.4 m",
      weight: "9.8 kg",
      egg: ["Terra"],
      ability: [
        ["Blaze", false],
        ["Unaware", true],
      ],
      gender: "87.5:12.5",
    },
    evolution: {
      next: [
        ["910", "Level 16"],
        ["911", "Level 36"],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/909.png",
      hires:
        "./Imagens/Pokedex/hires/909.png",
    },
  },
  {
    name: {
      english: "Crocalor",
      japanese: "アチゲータ",
      chinese: "炙烫鳄",
      french: "Crocogril",
    },
    id: 910,
    type: ["Fogo"],
    base: {
      HP: 81,
      Attack: 55,
      Defense: 78,
      "Sp. Attack": 90,
      "Sp. Defense": 58,
      Speed: 49,
    },
    species: "Fogo Croc Pokémon",
    description:
      "A combinação da energia de fogo de Crocalor e sua vitalidade transbordante fez com que uma bola de fogo em forma de ovo aparecesse na cabeça do Pokémon.",
    profile: {
      height: "1 m",
      weight: "30.7 kg",
      egg: ["Terra"],
      ability: [
        ["Blaze", false],
        ["Unaware", true],
      ],
      gender: "87.5:12.5",
    },
    evolution: {
      prev: ["909", "Level INITIAL"],
      next: [["911", "Level 36"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/910.png",
      hires:
        "./Imagens/Pokedex/hires/910.png",
    },
  },
  {
    name: {
      english: "Skeledirge",
      japanese: "ラウドボーン",
      chinese: "骨纹巨声鳄",
      french: "Flâmigator",
    },
    id: 911,
    type: ["Fogo", "Fantasma"],
    base: {
      HP: 104,
      Attack: 75,
      Defense: 100,
      "Sp. Attack": 110,
      "Sp. Defense": 75,
      Speed: 66,
    },
    species: "Singer Pokémon",
    description:
      "A ave de fogo muda de forma quando Skeledirge canta. Dizem que a ave nasceu quando a bola de fogo na cabeça de Skeledirge ganhou uma alma.",
    profile: {
      height: "1.6 m",
      weight: "326.5 kg",
      egg: ["Terra"],
      ability: [
        ["Blaze", false],
        ["Unaware", true],
      ],
      gender: "87.5:12.5",
    },
    evolution: {
      prev: ["910", "Level 16"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/911.png",
      hires:
        "./Imagens/Pokedex/hires/911.png",
    },
  },
  {
    name: {
      english: "Quaxly",
      japanese: "クワッス",
      chinese: "润水鸭",
      french: "Coiffeton",
    },
    id: 912,
    type: ["Água"],
    base: {
      HP: 55,
      Attack: 65,
      Defense: 45,
      "Sp. Attack": 50,
      "Sp. Defense": 45,
      Speed: 50,
    },
    species: "Duckling Pokémon",
    description:
      "Este Pokémon migrou para Paldea de terras distantes há muito tempo. O gel secretado por suas penas repele água e sujeira.",
    profile: {
      height: "0.5 m",
      weight: "6.1 kg",
      egg: ["Voador", "Água1"],
      ability: [
        ["Torrent", false],
        ["Moxie", true],
      ],
      gender: "87.5:12.5",
    },
    evolution: {
      next: [
        ["913", "Level 16"],
        ["914", "Level 36"],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/912.png",
      hires:
        "./Imagens/Pokedex/hires/912.png",
    },
  },
  {
    name: {
      english: "Quaxwell",
      japanese: "ウェルカモ",
      chinese: "涌跃鸭",
      french: "Canarbello",
    },
    id: 913,
    type: ["Água"],
    base: {
      HP: 70,
      Attack: 85,
      Defense: 65,
      "Sp. Attack": 65,
      "Sp. Defense": 60,
      Speed: 65,
    },
    species: "Practicing Pokémon",
    description:
      "Esses Pokémon correm constantemente por águas rasas para treinar suas pernas, depois competem entre si para ver qual deles chuta com mais graça.",
    profile: {
      height: "1.2 m",
      weight: "21.5 kg",
      egg: ["Voador", "Água1"],
      ability: [
        ["Torrent", false],
        ["Moxie", true],
      ],
      gender: "87.5:12.5",
    },
    evolution: {
      prev: ["912", "Level INITIAL"],
      next: [["914", "Level 36"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/913.png",
      hires:
        "./Imagens/Pokedex/hires/913.png",
    },
  },
  {
    name: {
      english: "Quaquaval",
      japanese: "ウェーニバル",
      chinese: "狂欢浪舞鸭",
      french: "Palmaval",
    },
    id: 914,
    type: ["Água", "Lutador"],
    base: {
      HP: 85,
      Attack: 120,
      Defense: 80,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      Speed: 85,
    },
    species: "Dancer Pokémon",
    description:
      "Um único chute de um Quaquaval pode fazer um caminhão rolar. Este Pokémon usa suas poderosas pernas para realizar danças impressionantes de terras distantes.",
    profile: {
      height: "1.8 m",
      weight: "61.9 kg",
      egg: ["Voador", "Água1"],
      ability: [
        ["Torrent", false],
        ["Moxie", true],
      ],
      gender: "87.5:12.5",
    },
    evolution: {
      prev: ["913", "Level 16"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/914.png",
      hires:
        "./Imagens/Pokedex/hires/914.png",
    },
  },
  {
    name: {
      english: "Lechonk",
      japanese: "グルトン",
      chinese: "爱吃豚",
      french: "Gourmelet",
    },
    id: 915,
    type: ["Normal"],
    base: {
      HP: 54,
      Attack: 45,
      Defense: 40,
      "Sp. Attack": 35,
      "Sp. Defense": 45,
      Speed: 35,
    },
    species: "Hog Pokémon",
    description:
      "Ele procura comida o dia todo. Possui um olfato aguçado, mas não o usa para nada além de procurar comida.",
    profile: {
      height: "0.5 m",
      weight: "10.2 kg",
      egg: ["Terra"],
      ability: [
        ["Aroma-veil", false],
        ["Gluttony", false],
        ["Thick-fat", true],
      ],
    },
    evolution: {
      next: [["916", "Level 18"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/915.png",
      hires:
        "./Imagens/Pokedex/hires/915.png",
    },
  },
  {
    name: {
      english: "Oinkologne - Male",
      japanese: "オインケルン",
      chinese: "奥因科洛涅",
      french: "Fragoin",
    },
    id: 916,
    type: ["Normal"],
    base: {
      HP: 110,
      Attack: 100,
      Defense: 75,
      "Sp. Attack": 59,
      "Sp. Defense": 80,
      Speed: 65,
    },
    species: "Hog Pokémon",
    description:
      "Este é um Pokémon meticuloso que gosta de manter as coisas arrumadas. Ele se envolve em um aroma floral que acalma os Pokémon ao seu redor.",
    profile: {
      height: "1.0 m",
      weight: "120.0 kg",
      egg: ["Field"],
      ability: [
        ["Tackle", false],
        ["Tail Whip", true],
      ],
      gender: "87.5:12.5",
    },
    evolution: {
      prev: ["915", "Level 18"],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/916.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/916.png",
      hires: "./Imagens/Pokedex/hires/916.png",
    },
  },
  {
    name: {
      english: "Tarountula",
      japanese: "タマンチュラ",
      chinese: "团珠蛛",
      french: "Tissenboule",
    },
    id: 917,
    type: ["Inseto"],
    base: {
      HP: 35,
      Attack: 41,
      Defense: 45,
      "Sp. Attack": 29,
      "Sp. Defense": 40,
      Speed: 20,
    },
    species: "String Ball Pokémon",
    description:
      "A bola de fios enrolada em seu corpo é elástica o suficiente para desviar as foGelos de Scyther, o inimigo natural deste Pokémon.",
    profile: {
      height: "0.3 m",
      weight: "4 kg",
      egg: ["Inseto"],
      ability: [
        ["Insomnia", false],
        ["Stakeout", true],
      ],
    },
    evolution: {
      next: [["918", "Level 15"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/917.png",
      hires:
        "./Imagens/Pokedex/hires/917.png",
    },
  },
  {
    name: {
      english: "Spidops",
      japanese: "ワナイダー",
      chinese: "操陷蛛",
      french: "Filentrappe",
    },
    id: 918,
    type: ["Inseto"],
    base: {
      HP: 60,
      Attack: 79,
      Defense: 92,
      "Sp. Attack": 52,
      "Sp. Defense": 86,
      Speed: 35,
    },
    species: "Trap Pokémon",
    description:
      "Ele se agarra a galhos e tetos usando seus fios e se move sem fazer barulho. Ele elimina sua presa antes mesmo que ela perceba.",
    profile: {
      height: "1 m",
      weight: "16.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Insomnia", false],
        ["Stakeout", true],
      ],
    },
    evolution: {
      prev: ["917", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/918.png",
      hires:
        "./Imagens/Pokedex/hires/918.png",
    },
  },
  {
    name: {
      english: "Nymble",
      japanese: "マメバッタ",
      chinese: "豆蟋蟀",
      french: "Lilliterelle",
    },
    id: 919,
    type: ["Inseto"],
    base: {
      HP: 33,
      Attack: 46,
      Defense: 40,
      "Sp. Attack": 21,
      "Sp. Defense": 25,
      Speed: 45,
    },
    species: "Gramahopper Pokémon",
    description:
      "Ele tem seu terceiro par de pernas dobrado. Quando está em uma situação difícil, este Pokémon pula mais de 9 metros usando a força de suas pernas.",
    profile: {
      height: "0.2 m",
      weight: "1 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", false],
        ["Tinted-lens", true],
      ],
    },
    evolution: {
      next: [["920", "Level 24"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/919.png",
      hires:
        "./Imagens/Pokedex/hires/919.png",
    },
  },
  {
    name: {
      english: "Lokix",
      japanese: "エクスレッグ",
      chinese: "烈腿蝗",
      french: "Gambex",
    },
    id: 920,
    type: ["Inseto", "Sombrio"],
    base: {
      HP: 71,
      Attack: 102,
      Defense: 78,
      "Sp. Attack": 52,
      "Sp. Defense": 55,
      Speed: 92,
    },
    species: "Gramahopper Pokémon",
    description:
      "Quando decide lutar com tudo, ele se coloca em pé sobre suas pernas anteriormente dobradas para entrar no Modo de Confronto. Ele neutraliza seus inimigos em pouco tempo.",
    profile: {
      height: "1 m",
      weight: "17.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Swarm", false],
        ["Tinted-lens", true],
      ],
    },
    evolution: {
      prev: ["919", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/920.png",
      hires:
        "./Imagens/Pokedex/hires/920.png",
    },
  },
  {
    name: {
      english: "Pawmi",
      japanese: "パモ",
      chinese: "布拨",
      french: "Pohm",
    },
    id: 921,
    type: ["Elétrico"],
    base: {
      HP: 45,
      Attack: 50,
      Defense: 20,
      "Sp. Attack": 40,
      "Sp. Defense": 25,
      Speed: 60,
    },
    species: "Mouse Pokémon",
    description:
      "Ele tem sacos elétricos subdesenvolvidos em suas bochechas. Esses sacos só podem produzir eletricidade se Pawmi esfregá-los furiosamente com as almofadas de suas patas dianteiras.",
    profile: {
      height: "0.3 m",
      weight: "2.5 kg",
      egg: ["Terra"],
      ability: [
        ["Static", false],
        ["Natural-cure", false],
        ["Iron-fist", true],
      ],
    },
    evolution: {
      next: [["922", "Level 18"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/921.png",
      hires:
        "./Imagens/Pokedex/hires/921.png",
    },
  },
  {
    name: {
      english: "Pawmo",
      japanese: "パモット",
      chinese: "布土拨",
      french: "Pohmotte",
    },
    id: 922,
    type: ["Elétrico", "Lutador"],
    base: {
      HP: 60,
      Attack: 75,
      Defense: 40,
      "Sp. Attack": 50,
      "Sp. Defense": 40,
      Speed: 85,
    },
    species: "Mouse Pokémon",
    description:
      "Quando seu grupo é atacado, Pawmo é o primeiro a saltar para a batalha, derrotando os inimigos com uma técnica de luta que utiliza choques elétricos.",
    profile: {
      height: "0.4 m",
      weight: "6.5 kg",
      egg: ["Terra"],
      ability: [
        ["Volt-absorb", false],
        ["Natural-cure", false],
        ["Iron-fist", true],
      ],
    },
    evolution: {
      prev: ["921", "Level INITIAL"],
      next: [["923", "Level up + ande 1000 passos com a função Let's Go!"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/922.png",
      hires:
        "./Imagens/Pokedex/hires/922.png",
    },
  },
  {
    name: {
      english: "Pawmot",
      japanese: "パーモット",
      chinese: "巴布土拨",
      french: "Pohmarmotte",
    },
    id: 923,
    type: ["Elétrico", "Lutador"],
    base: {
      HP: 70,
      Attack: 115,
      Defense: 70,
      "Sp. Attack": 70,
      "Sp. Defense": 60,
      Speed: 105,
    },
    species: "Hands-On Pokémon",
    description:
      "Este Pokémon normalmente é lento para reagir, mas uma vez que entra em batalha, ele derrubará seus inimigos com movimentos rápidos como um raio.",
    profile: {
      height: "0.9 m",
      weight: "41 kg",
      egg: ["Terra"],
      ability: [
        ["Volt-absorb", false],
        ["Natural-cure", false],
        ["Iron-fist", true],
      ],
    },
    evolution: {
      prev: ["922", "Level 18"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/923.png",
      hires:
        "./Imagens/Pokedex/hires/923.png",
    },
  },
  {
    name: {
      english: "Tandemaus",
      japanese: "ワッカネズミ",
      chinese: "一对鼠",
      french: "Compagnol",
    },
    id: 924,
    type: ["Normal"],
    base: {
      HP: 50,
      Attack: 50,
      Defense: 45,
      "Sp. Attack": 40,
      "Sp. Defense": 45,
      Speed: 75,
    },
    species: "Couple Pokémon",
    description:
      "Mostrando grande trabalho em equipe, eles usam seus incisivos para cortar pedaços de qualquer material que possa ser útil para um ninho, e depois fogem com eles.",
    profile: {
      height: "0.3 m",
      weight: "1.8 kg",
      egg: ["Terra", "Fada"],
      ability: [
        ["Run-away", false],
        ["Pickup", false],
        ["Own-tempo", true],
      ],
    },
    evolution: {
      next: [["925", "Level 25 + com uma certa constante de criptografia"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/924.png",
      hires:
        "./Imagens/Pokedex/hires/924.png",
    },
  },
  {
    name: {
      english: "Maushold",
      japanese: "イッカネズミ",
      chinese: "莫霍德",
      french: "Famignol",
    },
    id: 925,
    type: ["Normal"],
    base: {
      HP: 74,
      Attack: 75,
      Defense: 70,
      "Sp. Attack": 65,
      "Sp. Defense": 75,
      Speed: 111,
    },
    species: "Family Pokémon",
    description:
      "Os dois pequeninos apareceram um dia. O grupo pode ser uma família de Pokémon relacionados, mas ninguém sabe ao certo.",
    profile: {
      height: "0.3 m",
      weight: "2.8 kg",
      egg: ["Field", "Fada"],
      ability: [
        ["Tackle", false],
        ["Tail Whip", true],
      ],
      gender: "87.5:12.5",
    },
    evolution: {
      prev: ["924", "Level 25 + com uma certa constante de criptografia"],
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/925.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/925.png",
      hires: "./Imagens/Pokedex/hires/925.png",
    },
  },
  {
    name: {
      english: "Fidough",
      japanese: "パピモッチ",
      chinese: "狗仔包",
      french: "Pâtachiot",
    },
    id: 926,
    type: ["Fada"],
    base: {
      HP: 37,
      Attack: 55,
      Defense: 70,
      "Sp. Attack": 30,
      "Sp. Defense": 55,
      Speed: 65,
    },
    species: "Puppy Pokémon",
    description:
      "Este Pokémon é liso e úmido ao toque. O levedo no hálito de Fidough induz a fermentação nas proximidades do Pokémon.",
    profile: {
      height: "0.3 m",
      weight: "10.9 kg",
      egg: ["Terra", "Mineral"],
      ability: [
        ["Own-tempo", false],
        ["Klutz", true],
      ],
    },
    evolution: {
      next: [["927", "Level 26"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/926.png",
      hires:
        "./Imagens/Pokedex/hires/926.png",
    },
  },
  {
    name: {
      english: "Dachsbun",
      japanese: "バウッツェル",
      chinese: "麻花犬",
      french: "Briochien",
    },
    id: 927,
    type: ["Fada"],
    base: {
      HP: 57,
      Attack: 80,
      Defense: 115,
      "Sp. Attack": 50,
      "Sp. Defense": 80,
      Speed: 95,
    },
    species: "Dog Pokémon",
    description:
      "O aroma agradável que emana do corpo deste Pokémon ajuda o trigo a crescer, por isso Dachsbun tem sido apreciado pelas aldeias agrícolas.",
    profile: {
      height: "0.5 m",
      weight: "14.9 kg",
      egg: ["Terra", "Mineral"],
      ability: [
        ["Well-baked-body", false],
        ["Aroma-veil", true],
      ],
    },
    evolution: {
      prev: ["926", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/927.png",
      hires:
        "./Imagens/Pokedex/hires/927.png",
    },
  },
  {
    name: {
      english: "Smoliv",
      japanese: "ミニーブ",
      chinese: "迷你芙",
      french: "Olivini",
    },
    id: 928,
    type: ["Grama", "Normal"],
    base: {
      HP: 41,
      Attack: 35,
      Defense: 45,
      "Sp. Attack": 58,
      "Sp. Defense": 51,
      Speed: 30,
    },
    species: "Olive Pokémon",
    description:
      "Ele se protege de inimigos emitindo óleo da fruta em sua cabeça. Este óleo é amargo e adstringente o suficiente para fazer alguém recuar.",
    profile: {
      height: "0.3 m",
      weight: "6.5 kg",
      egg: ["Plant"],
      ability: [
        ["Early-bird", false],
        ["Harvest", true],
      ],
    },
    evolution: {
      next: [
        ["929", "Level 25"],
        ["930", "Level 35"],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/928.png",
      hires:
        "./Imagens/Pokedex/hires/928.png",
    },
  },
  {
    name: {
      english: "Dolliv",
      japanese: "オリーニョ",
      chinese: "奥利纽",
      french: "Olivado",
    },
    id: 929,
    type: ["Grama", "Normal"],
    base: {
      HP: 52,
      Attack: 53,
      Defense: 60,
      "Sp. Attack": 78,
      "Sp. Defense": 78,
      Speed: 33,
    },
    species: "Olive Pokémon",
    description:
      "Dolliv compartilha seu óleo saboroso e fresco com os outros. Esta espécie tem coexistido com os humanos desde tempos imemoriais.",
    profile: {
      height: "0.6 m",
      weight: "11.9 kg",
      egg: ["Plant"],
      ability: [
        ["Early-bird", false],
        ["Harvest", true],
      ],
    },
    evolution: {
      prev: ["928", "Level INITIAL"],
      next: [["930", "Level 35"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/929.png",
      hires:
        "./Imagens/Pokedex/hires/929.png",
    },
  },
  {
    name: {
      english: "Arboliva",
      japanese: "オリーヴァ",
      chinese: "奥利瓦",
      french: "Arboliva",
    },
    id: 930,
    type: ["Grama", "Normal"],
    base: {
      HP: 78,
      Attack: 69,
      Defense: 90,
      "Sp. Attack": 125,
      "Sp. Defense": 109,
      Speed: 39,
    },
    species: "Olive Pokémon",
    description:
      "Este Pokémon calmo é muito compassivo. Ele compartilhará seu óleo delicioso e rico em nutrientes com Pokémon enfraquecidos.",
    profile: {
      height: "1.4 m",
      weight: "48.2 kg",
      egg: ["Plant"],
      ability: [
        ["Seed-sower", false],
        ["Harvest", true],
      ],
    },
    evolution: {
      prev: ["929", "Level 25"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/930.png",
      hires:
        "./Imagens/Pokedex/hires/930.png",
    },
  },
  {
    name: {
      english: "Squawkabilly",
      japanese: "イキリンコ ",
      chinese: "怒鸚哥",
      french: "Tapatoès",
    },
    id: 931,
    type: ["Normal", "Voador"],
    base: {
      HP: 82,
      Attack: 96,
      Defense: 51,
      "Sp. Attack": 45,
      "Sp. Defense": 51,
      Speed: 92,
    },
    species: "Parrot Pokémon",
    description:
      "Esses Pokémon preferem viver em cidades. Eles formam bandos com base na cor de suas penas e lutam por território.",
    profile: {
      height: "0.6 m",
      weight: "2.4 kg",
      egg: ["Voador"],
      ability: [
        ["Tackle", false],
        ["Tail Whip", true],
      ],
      gender: "87.5:12.5",
    },
    image: {
      sprite: "./Imagens/Pokedex/sprites/931.png",
      thumbnail: "./Imagens/Pokedex/thumbnails/931.png",
      hires: "./Imagens/Pokedex/hires/931.png",
    },
  },
  {
    name: {
      english: "Nacli",
      japanese: "コジオ",
      chinese: "盐石宝",
      french: "Selutin",
    },
    id: 932,
    type: ["Rocha"],
    base: {
      HP: 55,
      Attack: 55,
      Defense: 75,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      Speed: 25,
    },
    species: "Rocha Salt Pokémon",
    description:
      "Ele nasceu em uma camada de sal-gema no fundo da terra. Esta espécie era particularmente apreciada nos tempos antigos, pois compartilhava sal precioso.",
    profile: {
      height: "0.4 m",
      weight: "16 kg",
      egg: ["Mineral"],
      ability: [
        ["Purifying-salt", false],
        ["Sturdy", false],
        ["Clear-body", true],
      ],
    },
    evolution: {
      next: [
        ["933", "Level 24"],
        ["934", "Level 38"],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/932.png",
      hires:
        "./Imagens/Pokedex/hires/932.png",
    },
  },
  {
    name: {
      english: "Naclstack",
      japanese: "ジオヅム",
      chinese: "盐石垒",
      french: "Amassel",
    },
    id: 933,
    type: ["Rocha"],
    base: {
      HP: 60,
      Attack: 60,
      Defense: 100,
      "Sp. Attack": 35,
      "Sp. Defense": 65,
      Speed: 35,
    },
    species: "Rocha Salt Pokémon",
    description:
      "Este Pokémon seca sua presa borrifando sal sobre ela. O processo de cura rouba a água do corpo da presa.",
    profile: {
      height: "0.6 m",
      weight: "105 kg",
      egg: ["Mineral"],
      ability: [
        ["Purifying-salt", false],
        ["Sturdy", false],
        ["Clear-body", true],
      ],
    },
    evolution: {
      prev: ["932", "Level INITIAL"],
      next: [["934", "Level 38"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/933.png",
      hires:
        "./Imagens/Pokedex/hires/933.png",
    },
  },
  {
    name: {
      english: "Garganacl",
      japanese: "キョジオーン",
      chinese: "盐石巨灵",
      french: "Gigansel",
    },
    id: 934,
    type: ["Rocha"],
    base: {
      HP: 100,
      Attack: 100,
      Defense: 130,
      "Sp. Attack": 45,
      "Sp. Defense": 90,
      Speed: 35,
    },
    species: "Rocha Salt Pokémon",
    description:
      "Garganacl esfregará as pontas dos dedos e aspergirá sal sobre Pokémon feridos. Mesmo ferimentos graves cicatrizarão prontamente depois.",
    profile: {
      height: "2.3 m",
      weight: "240 kg",
      egg: ["Mineral"],
      ability: [
        ["Purifying-salt", false],
        ["Sturdy", false],
        ["Clear-body", true],
      ],
    },
    evolution: {
      prev: ["933", "Level 24"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/934.png",
      hires:
        "./Imagens/Pokedex/hires/934.png",
    },
  },
  {
    name: {
      english: "Charcadet",
      japanese: "カルボウ",
      chinese: "炭小侍",
      french: "Charbambin",
    },
    id: 935,
    type: ["Fogo"],
    base: {
      HP: 40,
      Attack: 50,
      Defense: 40,
      "Sp. Attack": 50,
      "Sp. Defense": 40,
      Speed: 35,
    },
    species: "Fogo Child Pokémon",
    description:
      "Carvão queimado ganhou vida e se tornou um Pokémon. Possuindo um espírito de luta fervoroso, Charcadet lutará até mesmo contra oponentes difíceis.",
    profile: {
      height: "0.6 m",
      weight: "10.5 kg",
      egg: ["Humanshape"],
      ability: [
        ["Flash-Fogo", false],
        ["Flame-body", true],
      ],
    },
    evolution: {
      next: [
        ["937", "use malicious-armor"],
        ["936", "use auspicious-armor"],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/935.png",
      hires:
        "./Imagens/Pokedex/hires/935.png",
    },
  },
  {
    name: {
      english: "Armarouge",
      japanese: "グレンアルマ",
      chinese: "红莲铠骑",
      french: "Carmadura",
    },
    id: 936,
    type: ["Fogo", "Psíquico"],
    base: {
      HP: 85,
      Attack: 60,
      Defense: 100,
      "Sp. Attack": 125,
      "Sp. Defense": 80,
      Speed: 75,
    },
    species: "Fogo Warrior Pokémon",
    description:
      "Armarouge evoluiu por meio do uso de um conjunto de armadura que pertencia a um guerreiro distinto. Este Pokémon é incrivelmente leal.",
    profile: {
      height: "1.5 m",
      weight: "85 kg",
      egg: ["Humanshape"],
      ability: [
        ["Flash-Fogo", false],
        ["Weak-armor", true],
      ],
    },
    evolution: {
      prev: ["935", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/936.png",
      hires:
        "./Imagens/Pokedex/hires/936.png",
    },
  },
  {
    name: {
      english: "Ceruledge",
      japanese: "ソウブレイズ",
      chinese: "苍炎刃鬼",
      french: "Malvalame",
    },
    id: 937,
    type: ["Fogo", "Fantasma"],
    base: {
      HP: 75,
      Attack: 125,
      Defense: 80,
      "Sp. Attack": 60,
      "Sp. Defense": 100,
      Speed: 85,
    },
    species: "Fogo Blades Pokémon",
    description:
      "As lâminas de fogo em seus braços queimam ferozmente com o ressentimento persistente de um portador de espada que caiu antes de atingir seu objetivo.",
    profile: {
      height: "1.6 m",
      weight: "62 kg",
      egg: ["Humanshape"],
      ability: [
        ["Flash-Fogo", false],
        ["Weak-armor", true],
      ],
    },
    evolution: {
      prev: ["935", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/937.png",
      hires:
        "./Imagens/Pokedex/hires/937.png",
    },
  },
  {
    name: {
      english: "Tadbulb",
      japanese: "ズピカ",
      chinese: "光蚪仔",
      french: "Têtampoule",
    },
    id: 938,
    type: ["Elétrico"],
    base: {
      HP: 61,
      Attack: 31,
      Defense: 41,
      "Sp. Attack": 59,
      "Sp. Defense": 35,
      Speed: 45,
    },
    species: "EleTadpole Pokémon",
    description:
      "Tadbulb balança seu rabo para gerar eletricidade. Se sentir perigo, ele piscará sua cabeça ligando e desligando para alertar seus aliados.",
    profile: {
      height: "0.3 m",
      weight: "0.4 kg",
      egg: ["Água1"],
      ability: [
        ["Own-tempo", false],
        ["Static", false],
        ["Damp", true],
      ],
    },
    evolution: {
      next: [["939", "use thunder-stone"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/938.png",
      hires:
        "./Imagens/Pokedex/hires/938.png",
    },
  },
  {
    name: {
      english: "Bellibolt",
      japanese: "ハラバリー",
      chinese: "电肚蛙",
      french: "Ampibidou",
    },
    id: 939,
    type: ["Elétrico"],
    base: {
      HP: 109,
      Attack: 64,
      Defense: 91,
      "Sp. Attack": 103,
      "Sp. Defense": 83,
      Speed: 45,
    },
    species: "EleFrog Pokémon",
    description:
      "Quando este Pokémon expande e contrai seu corpo instável, o dínamo do umbigo em seu estômago produz uma enorme quantidade de eletricidade.",
    profile: {
      height: "1.2 m",
      weight: "113 kg",
      egg: ["Água1"],
      ability: [
        ["Electromorphosis", false],
        ["Static", false],
        ["Damp", true],
      ],
    },
    evolution: {
      prev: ["938", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/939.png",
      hires:
        "./Imagens/Pokedex/hires/939.png",
    },
  },
  {
    name: {
      english: "Wattrel",
      japanese: "カイデン",
      chinese: "电海燕",
      french: "Zapétrel",
    },
    id: 940,
    type: ["Elétrico", "Voador"],
    base: {
      HP: 40,
      Attack: 40,
      Defense: 35,
      "Sp. Attack": 55,
      "Sp. Defense": 40,
      Speed: 70,
    },
    species: "Storm Petrel Pokémon",
    description:
      "Quando suas asas pegam o vento, os ossos dentro produzem eletricidade. Este Pokémon mergulha no oceano, capturando presas eletrocutando-as.",
    profile: {
      height: "0.4 m",
      weight: "3.6 kg",
      egg: ["Água1", "Voador"],
      ability: [
        ["Wind-power", false],
        ["Volt-absorb", false],
        ["Competitive", true],
      ],
    },
    evolution: {
      next: [["941", "Level 25"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/940.png",
      hires:
        "./Imagens/Pokedex/hires/940.png",
    },
  },
  {
    name: {
      english: "Kilowattrel",
      japanese: "タイカイデン",
      chinese: "大电海燕",
      french: "Fulgulairo",
    },
    id: 941,
    type: ["Elétrico", "Voador"],
    base: {
      HP: 70,
      Attack: 70,
      Defense: 60,
      "Sp. Attack": 105,
      "Sp. Defense": 60,
      Speed: 125,
    },
    species: "Frigatebird Pokémon",
    description:
      "Kilowattrel infla seu saco da garganta para amplificar sua eletricidade. Ao andar com o vento, este Pokémon pode voar mais de 690 quilômetros em um dia.",
    profile: {
      height: "1.4 m",
      weight: "38.6 kg",
      egg: ["Água1", "Voador"],
      ability: [
        ["Wind-power", false],
        ["Volt-absorb", false],
        ["Competitive", true],
      ],
    },
    evolution: {
      prev: ["940", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/941.png",
      hires:
        "./Imagens/Pokedex/hires/941.png",
    },
  },
  {
    name: {
      english: "Maschiff",
      japanese: "オラチフ",
      chinese: "偶叫獒",
      french: "Grondogue",
    },
    id: 942,
    type: ["Sombrio"],
    base: {
      HP: 60,
      Attack: 78,
      Defense: 60,
      "Sp. Attack": 40,
      "Sp. Defense": 51,
      Speed: 51,
    },
    species: "Rascal Pokémon",
    description:
      "Ele sempre faz uma careta na tentativa de fazer os oponentes levá-lo a sério, mas até mesmo crianças choronas caem na gargalhada ao ver o rosto de Maschiff.",
    profile: {
      height: "0.5 m",
      weight: "16 kg",
      egg: ["Terra"],
      ability: [
        ["Intimidate", false],
        ["Run-away", false],
        ["Stakeout", true],
      ],
    },
    evolution: {
      next: [["943", "Level 30"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/942.png",
      hires:
        "./Imagens/Pokedex/hires/942.png",
    },
  },
  {
    name: {
      english: "Mabosstiff",
      japanese: "マフィティフ",
      chinese: "獒教父",
      french: "Dogrino",
    },
    id: 943,
    type: ["Sombrio"],
    base: {
      HP: 80,
      Attack: 120,
      Defense: 90,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      Speed: 85,
    },
    species: "Boss Pokémon",
    description:
      "Este Pokémon pode armazenar energia em sua grande papada. Mabosstiff libera essa energia de uma vez só para explodir os inimigos.",
    profile: {
      height: "1.1 m",
      weight: "61 kg",
      egg: ["Terra"],
      ability: [
        ["Intimidate", false],
        ["Guard-dog", false],
        ["Stakeout", true],
      ],
    },
    evolution: {
      prev: ["942", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/943.png",
      hires:
        "./Imagens/Pokedex/hires/943.png",
    },
  },
  {
    name: {
      english: "Shroodle",
      japanese: "シルシュルー",
      chinese: "滋汁鼹",
      french: "Gribouraigne",
    },
    id: 944,
    type: ["Venenoso", "Normal"],
    base: {
      HP: 40,
      Attack: 65,
      Defense: 35,
      "Sp. Attack": 40,
      "Sp. Defense": 35,
      Speed: 75,
    },
    species: "Toxic Mouse Pokémon",
    description:
      "Embora geralmente seja um Pokémon calmo, ele afundará seus dentes frontais afiados e embebidos em veneno em qualquer um que o irrite, causando paralisia no objeto de sua ira.",
    profile: {
      height: "0.2 m",
      weight: "0.7 kg",
      egg: ["Terra"],
      ability: [
        ["Unburden", false],
        ["Pickpocket", false],
        ["Prankster", true],
      ],
    },
    evolution: {
      next: [["945", "Level 28"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/944.png",
      hires:
        "./Imagens/Pokedex/hires/944.png",
    },
  },
  {
    name: {
      english: "Grafaiai",
      japanese: "タギングル",
      chinese: "涂标客",
      french: "Tag-Tag",
    },
    id: 945,
    type: ["Venenoso", "Normal"],
    base: {
      HP: 63,
      Attack: 95,
      Defense: 65,
      "Sp. Attack": 80,
      "Sp. Defense": 72,
      Speed: 110,
    },
    species: "Toxic Monkey Pokémon",
    description:
      "A cor da saliva venenosa depende do que o Pokémon come. Grafaiai cobre seus dedos com sua saliva e desenha padrões nas árvores nas florestas.",
    profile: {
      height: "0.7 m",
      weight: "27.2 kg",
      egg: ["Terra"],
      ability: [
        ["Unburden", false],
        ["Venenoso-touch", false],
        ["Prankster", true],
      ],
    },
    evolution: {
      prev: ["944", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/945.png",
      hires:
        "./Imagens/Pokedex/hires/945.png",
    },
  },
  {
    name: {
      english: "Bramblin",
      japanese: "アノクサ",
      chinese: "纳噬草",
      french: "Virovent",
    },
    id: 946,
    type: ["Grama", "Fantasma"],
    base: {
      HP: 40,
      Attack: 65,
      Defense: 30,
      "Sp. Attack": 45,
      "Sp. Defense": 35,
      Speed: 60,
    },
    species: "Tumbleweed Pokémon",
    description:
      "Uma alma incapaz de seguir para a vida após a morte foi levada pelo vento até que se enroscou na grama seca e se tornou um Pokémon.",
    profile: {
      height: "0.6 m",
      weight: "0.6 kg",
      egg: ["Plant"],
      ability: [
        ["Wind-rider", false],
        ["Infiltrator", true],
      ],
    },
    evolution: {
      next: [["947", "Level up + ande 1000 passos com a função Let's Go!"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/946.png",
      hires:
        "./Imagens/Pokedex/hires/946.png",
    },
  },
  {
    name: {
      english: "Brambleghast",
      japanese: "アノホラグサ",
      chinese: "怖纳噬草",
      french: "Virevorreur",
    },
    id: 947,
    type: ["Grama", "Fantasma"],
    base: {
      HP: 55,
      Attack: 115,
      Defense: 70,
      "Sp. Attack": 80,
      "Sp. Defense": 70,
      Speed: 90,
    },
    species: "Tumbleweed Pokémon",
    description:
      "Ele abrirá os ramos de sua cabeça para envolver sua presa. Uma vez que absorve toda a energia vital de que precisa, ele expulsa a presa e a descarta.",
    profile: {
      height: "1.2 m",
      weight: "6 kg",
      egg: ["Plant"],
      ability: [
        ["Wind-rider", false],
        ["Infiltrator", true],
      ],
    },
    evolution: {
      prev: ["946", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/947.png",
      hires:
        "./Imagens/Pokedex/hires/947.png",
    },
  },
  {
    name: {
      english: "Toedscool",
      japanese: "ノノクラゲ",
      chinese: "原野水母",
      french: "Terracool",
    },
    id: 948,
    type: ["Terra", "Grama"],
    base: {
      HP: 40,
      Attack: 40,
      Defense: 35,
      "Sp. Attack": 50,
      "Sp. Defense": 100,
      Speed: 70,
    },
    species: "Woodear Pokémon",
    description:
      "Toedscool vive em florestas úmidas. As abas que caem de seu corpo são mastigáveis e muito deliciosas.",
    profile: {
      height: "0.9 m",
      weight: "33 kg",
      egg: ["Plant"],
      ability: [
        ["Mycelium-might", false],
        ["Mycelium-might", true],
      ],
    },
    evolution: {
      next: [["949", "Level 30"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/948.png",
      hires:
        "./Imagens/Pokedex/hires/948.png",
    },
  },
  {
    name: {
      english: "Toedscruel",
      japanese: "リククラゲ",
      chinese: "陆地水母",
      french: "Terracruel",
    },
    id: 949,
    type: ["Terra", "Grama"],
    base: {
      HP: 80,
      Attack: 70,
      Defense: 65,
      "Sp. Attack": 80,
      "Sp. Defense": 120,
      Speed: 100,
    },
    species: "Woodear Pokémon",
    description:
      "Esses Pokémon se reúnem em grupos e formam colônias no fundo das florestas. Eles absolutamente odeiam quando estranhos se aproximam.",
    profile: {
      height: "1.9 m",
      weight: "58 kg",
      egg: ["Plant"],
      ability: [
        ["Mycelium-might", false],
        ["Mycelium-might", true],
      ],
    },
    evolution: {
      prev: ["948", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/949.png",
      hires:
        "./Imagens/Pokedex/hires/949.png",
    },
  },
  {
    name: {
      english: "Klawf",
      japanese: "ガケガニ",
      chinese: "毛崖蟹",
      french: "Craparoi",
    },
    id: 950,
    type: ["Rocha"],
    base: {
      HP: 70,
      Attack: 100,
      Defense: 115,
      "Sp. Attack": 35,
      "Sp. Defense": 55,
      Speed: 75,
    },
    species: "Ambush Pokémon",
    description:
      "Klawf fica de cabeça para baixo em penhascos, esperando por presas. Mas Klawf não pode permanecer nesta posição por muito tempo porque seu sangue corre para sua cabeça.",
    profile: {
      height: "1.3 m",
      weight: "79 kg",
      egg: ["Água3"],
      ability: [
        ["Anger-shell", false],
        ["Shell-armor", false],
        ["Regenerator", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/950.png",
      hires:
        "./Imagens/Pokedex/hires/950.png",
    },
  },
  {
    name: {
      english: "Capsakid",
      japanese: "カプサイジ",
      chinese: "热辣娃",
      french: "Pimito",
    },
    id: 951,
    type: ["Grama"],
    base: {
      HP: 50,
      Attack: 62,
      Defense: 40,
      "Sp. Attack": 62,
      "Sp. Defense": 40,
      Speed: 50,
    },
    species: "Spicy Pepper Pokémon",
    description:
      "Quanto mais luz solar este Pokémon toma banho, mais produtos químicos picantes são produzidos por seu corpo, e assim seus movimentos se tornam mais picantes.",
    profile: {
      height: "0.3 m",
      weight: "3 kg",
      egg: ["Plant"],
      ability: [
        ["Chlorophyll", false],
        ["Insomnia", false],
        ["Klutz", true],
      ],
    },
    evolution: {
      next: [["952", "use Fogo-stone"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/951.png",
      hires:
        "./Imagens/Pokedex/hires/951.png",
    },
  },
  {
    name: {
      english: "Scovillain",
      japanese: "スコヴィラン",
      chinese: "狠辣椒",
      french: "Scovilain",
    },
    id: 952,
    type: ["Grama", "Fogo"],
    base: {
      HP: 65,
      Attack: 108,
      Defense: 65,
      "Sp. Attack": 108,
      "Sp. Defense": 65,
      Speed: 75,
    },
    species: "Spicy Pepper Pokémon",
    description:
      "A cabeça vermelha converte produtos químicos picantes em energia de fogo e explode a área ao redor com um fluxo de chamas super picantes.",
    profile: {
      height: "0.9 m",
      weight: "15 kg",
      egg: ["Plant"],
      ability: [
        ["Chlorophyll", false],
        ["Insomnia", false],
        ["Moody", true],
      ],
    },
    evolution: {
      prev: ["951", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/952.png",
      hires:
        "./Imagens/Pokedex/hires/952.png",
    },
  },
  {
    name: {
      english: "Rellor",
      japanese: "シガロコ",
      chinese: "虫滚泥",
      french: "Léboulérou",
    },
    id: 953,
    type: ["Inseto"],
    base: {
      HP: 41,
      Attack: 50,
      Defense: 60,
      "Sp. Attack": 31,
      "Sp. Defense": 58,
      Speed: 30,
    },
    species: "Rolling Pokémon",
    description:
      "Este Pokémon cria uma bola de lama misturando areia e sujeira com energia psíquica. Ele valoriza sua bola de lama mais do que sua própria vida.",
    profile: {
      height: "0.2 m",
      weight: "1 kg",
      egg: ["Inseto"],
      ability: [
        ["Compound-eyes", false],
        ["Shed-skin", true],
      ],
    },
    evolution: {
      next: [["954", "Ande 1000 passos com a função Let's Go!"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/953.png",
      hires:
        "./Imagens/Pokedex/hires/953.png",
    },
  },
  {
    name: {
      english: "Rabsca",
      japanese: "ベラカス",
      chinese: "虫甲圣",
      french: "Bérasca",
    },
    id: 954,
    type: ["Inseto", "Psíquico"],
    base: {
      HP: 75,
      Attack: 50,
      Defense: 85,
      "Sp. Attack": 115,
      "Sp. Defense": 100,
      Speed: 45,
    },
    species: "Rolling Pokémon",
    description:
      "O corpo que sustenta a bola mal se move. Portanto, acredita-se que o verdadeiro corpo deste Pokémon esteja realmente dentro da bola.",
    profile: {
      height: "0.3 m",
      weight: "3.5 kg",
      egg: ["Inseto"],
      ability: [
        ["Synchronize", false],
        ["Telepathy", true],
      ],
    },
    evolution: {
      prev: ["953", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/954.png",
      hires:
        "./Imagens/Pokedex/hires/954.png",
    },
  },
  {
    name: {
      english: "Flittle",
      japanese: "ヒラヒナ",
      chinese: "飘飘雏",
      french: "Flotillon",
    },
    id: 955,
    type: ["Psíquico"],
    base: {
      HP: 30,
      Attack: 35,
      Defense: 30,
      "Sp. Attack": 55,
      "Sp. Defense": 30,
      Speed: 75,
    },
    species: "Frill Pokémon",
    description:
      "Os dedos dos pés de Flittle levitam cerca de 1,27 centímetros acima do solo devido ao poder psíquico emitido pelas babados na barriga do Pokémon.",
    profile: {
      height: "0.2 m",
      weight: "1.5 kg",
      egg: ["Voador"],
      ability: [
        ["Anticipation", false],
        ["Frisk", false],
        ["Speed-boost", true],
      ],
    },
    evolution: {
      next: [["956", "Level 35"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/955.png",
      hires:
        "./Imagens/Pokedex/hires/955.png",
    },
  },
  {
    name: {
      english: "Espathra",
      japanese: "クエスパトラ",
      chinese: "超能艳鸵",
      french: "Cléopsytra",
    },
    id: 956,
    type: ["Psíquico"],
    base: {
      HP: 95,
      Attack: 60,
      Defense: 60,
      "Sp. Attack": 101,
      "Sp. Defense": 60,
      Speed: 105,
    },
    species: "Ostrich Pokémon",
    description:
      "Ele imobiliza oponentes banhando-os em poder psíquico de seus grandes olhos. Apesar de sua aparência, ele tem um temperamento cruel.",
    profile: {
      height: "1.9 m",
      weight: "90 kg",
      egg: ["Voador"],
      ability: [
        ["Opportunist", false],
        ["Frisk", false],
        ["Speed-boost", true],
      ],
    },
    evolution: {
      prev: ["955", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/956.png",
      hires:
        "./Imagens/Pokedex/hires/956.png",
    },
  },
  {
    name: {
      english: "Tinkatink",
      japanese: "カヌチャン",
      chinese: "小锻匠",
      french: "Forgerette",
    },
    id: 957,
    type: ["Fada", "Metal"],
    base: {
      HP: 50,
      Attack: 45,
      Defense: 45,
      "Sp. Attack": 35,
      "Sp. Defense": 64,
      Speed: 58,
    },
    species: "Metalsmith Pokémon",
    description:
      "Ele balança seu martelo feito à mão para se proteger, mas o martelo costuma ser roubado por Pokémon que comem metal.",
    profile: {
      height: "0.4 m",
      weight: "8.9 kg",
      egg: ["Fada"],
      ability: [
        ["Mold-breaker", false],
        ["Own-tempo", false],
        ["Pickpocket", true],
      ],
    },
    evolution: {
      next: [
        ["958", "Level 24"],
        ["959", "Level 38"],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/957.png",
      hires:
        "./Imagens/Pokedex/hires/957.png",
    },
  },
  {
    name: {
      english: "Tinkatuff",
      japanese: "ナカヌチャン",
      chinese: "巧锻匠",
      french: "Forgella",
    },
    id: 958,
    type: ["Fada", "Metal"],
    base: {
      HP: 65,
      Attack: 55,
      Defense: 55,
      "Sp. Attack": 45,
      "Sp. Defense": 82,
      Speed: 78,
    },
    species: "Hammer Pokémon",
    description:
      "Este Pokémon atacará grupos de Pawniard e Bisharp, coletando metal deles para criar um martelo grande e resistente.",
    profile: {
      height: "0.7 m",
      weight: "59.1 kg",
      egg: ["Fada"],
      ability: [
        ["Mold-breaker", false],
        ["Own-tempo", false],
        ["Pickpocket", true],
      ],
    },
    evolution: {
      prev: ["957", "Level INITIAL"],
      next: [["959", "Level 38"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/958.png",
      hires:
        "./Imagens/Pokedex/hires/958.png",
    },
  },
  {
    name: {
      english: "Tinkaton",
      japanese: "デカヌチャン",
      chinese: "巨锻匠",
      french: "Forgelina",
    },
    id: 959,
    type: ["Fada", "Metal"],
    base: {
      HP: 85,
      Attack: 75,
      Defense: 77,
      "Sp. Attack": 70,
      "Sp. Defense": 105,
      Speed: 94,
    },
    species: "Hammer Pokémon",
    description:
      "Este Pokémon inteligente tem uma disposição muito ousada. Ele joga pedras no céu com seu martelo, mirando em Corviknight voador.",
    profile: {
      height: "0.7 m",
      weight: "112.8 kg",
      egg: ["Fada"],
      ability: [
        ["Mold-breaker", false],
        ["Own-tempo", false],
        ["Pickpocket", true],
      ],
    },
    evolution: {
      prev: ["958", "Level 24"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/959.png",
      hires:
        "./Imagens/Pokedex/hires/959.png",
    },
  },
  {
    name: {
      english: "Wiglett",
      japanese: "ウミディグダ",
      chinese: "海地鼠",
      french: "Taupikeau",
    },
    id: 960,
    type: ["Água"],
    base: {
      HP: 10,
      Attack: 55,
      Defense: 25,
      "Sp. Attack": 35,
      "Sp. Defense": 25,
      Speed: 95,
    },
    species: "Garden Eel Pokémon",
    description:
      "Este Pokémon pode captar o cheiro de um Veluza a mais de 20 metros de distância e se esconderá na areia.",
    profile: {
      height: "1.2 m",
      weight: "1.8 kg",
      egg: ["Água3"],
      ability: [
        ["Gooey", false],
        ["Rattled", false],
        ["Sand-veil", true],
      ],
    },
    evolution: {
      next: [["961", "Level 26"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/960.png",
      hires:
        "./Imagens/Pokedex/hires/960.png",
    },
  },
  {
    name: {
      english: "Wugtrio",
      japanese: "ウミトリオ",
      chinese: "三海地鼠",
      french: "Triopikeau",
    },
    id: 961,
    type: ["Água"],
    base: {
      HP: 35,
      Attack: 100,
      Defense: 50,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      Speed: 120,
    },
    species: "Garden Eel Pokémon",
    description:
      "Ele tem um temperamento cruel, ao contrário do que sua aparência pode sugerir. Ele envolve seus longos corpos ao redor da presa, depois arrasta a presa para sua toca.",
    profile: {
      height: "1.2 m",
      weight: "5.4 kg",
      egg: ["Água3"],
      ability: [
        ["Gooey", false],
        ["Rattled", false],
        ["Sand-veil", true],
      ],
    },
    evolution: {
      prev: ["960", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/961.png",
      hires:
        "./Imagens/Pokedex/hires/961.png",
    },
  },
  {
    name: {
      english: "Bombirdier",
      japanese: "オトシドリ",
      chinese: "下石鸟",
      french: "Lestombaile",
    },
    id: 962,
    type: ["Voador", "Sombrio"],
    base: {
      HP: 70,
      Attack: 103,
      Defense: 85,
      "Sp. Attack": 60,
      "Sp. Defense": 85,
      Speed: 82,
    },
    species: "Item Drop Pokémon",
    description:
      "Ele reúne coisas em um avental feito de penas descartadas adicionadas às penas do peito do Pokémon, depois deixa cair essas coisas de lugares altos por diversão.",
    profile: {
      height: "1.5 m",
      weight: "42.9 kg",
      egg: ["Voador"],
      ability: [
        ["Big-pecks", false],
        ["Keen-eye", false],
        ["Rochay-payload", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/962.png",
      hires:
        "./Imagens/Pokedex/hires/962.png",
    },
  },
  {
    name: {
      english: "Finizen",
      japanese: "ナミイルカ",
      chinese: "波普海豚",
      french: "Dofin",
    },
    id: 963,
    type: ["Água"],
    base: {
      HP: 70,
      Attack: 45,
      Defense: 40,
      "Sp. Attack": 45,
      "Sp. Defense": 40,
      Speed: 75,
    },
    species: "Dolphin Pokémon",
    description:
      "Ele gosta de brincar com outros da sua espécie usando o anel de água em sua cauda. Ele usa ondas ultrassônicas para sentir as emoções de outras criaturas vivas.",
    profile: {
      height: "1.3 m",
      weight: "60.2 kg",
      egg: ["Terra", "Água2"],
      ability: [
        ["Água-veil", false],
        ["Água-veil", true],
      ],
    },
    evolution: {
      next: [["964", "Level 38 + entrar no jogo online"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/963.png",
      hires:
        "./Imagens/Pokedex/hires/963.png",
    },
  },
  {
    name: {
      english: "Varoom",
      japanese: "ブロロン",
      chinese: "噗隆隆",
      french: "Vrombi",
    },
    id: 965,
    type: ["Metal", "Venenoso"],
    base: {
      HP: 45,
      Attack: 70,
      Defense: 63,
      "Sp. Attack": 30,
      "Sp. Defense": 45,
      Speed: 47,
    },
    species: "Single-Cyl Pokémon",
    description:
      "Dizem que este Pokémon nasceu quando um Pokémon de veneno desconhecido entrou e inspirou um motor deixado em uma fábrica de processamento de sucata.",
    profile: {
      height: "1 m",
      weight: "35 kg",
      egg: ["Mineral"],
      ability: [
        ["Overcoat", false],
        ["Slow-start", true],
      ],
    },
    evolution: {
      next: [["966", "Level 40"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/965.png",
      hires:
        "./Imagens/Pokedex/hires/965.png",
    },
  },
  {
    name: {
      english: "Revavroom",
      japanese: "ブロロローム",
      chinese: "普隆隆姆",
      french: "Vrombotor",
    },
    id: 966,
    type: ["Metal", "Venenoso"],
    base: {
      HP: 80,
      Attack: 119,
      Defense: 90,
      "Sp. Attack": 54,
      "Sp. Defense": 67,
      Speed: 90,
    },
    species: "Multi-Cyl Pokémon",
    description:
      "Ele cria um gás a partir de veneno e minerais de rochas. Em seguida, detona o gás em seus cilindros - agora oito em número - para gerar energia.",
    profile: {
      height: "1.8 m",
      weight: "120 kg",
      egg: ["Mineral"],
      ability: [
        ["Overcoat", false],
        ["Filter", true],
      ],
    },
    evolution: {
      prev: ["965", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/966.png",
      hires:
        "./Imagens/Pokedex/hires/966.png",
    },
  },
  {
    name: {
      english: "Cyclizar",
      japanese: "モトトカゲ",
      chinese: "摩托蜥",
      french: "Motorizard",
    },
    id: 967,
    type: ["Dragão", "Normal"],
    base: {
      HP: 70,
      Attack: 95,
      Defense: 65,
      "Sp. Attack": 85,
      "Sp. Defense": 65,
      Speed: 121,
    },
    species: "Mount Pokémon",
    description:
      "Aparentemente, Cyclizar tem permitido que as pessoas montem em suas costas desde os tempos antigos. Representações disso foram encontradas em murais de 10.000 anos.",
    profile: {
      height: "1.6 m",
      weight: "63 kg",
      egg: ["Terra"],
      ability: [
        ["Shed-skin", false],
        ["Regenerator", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/967.png",
      hires:
        "./Imagens/Pokedex/hires/967.png",
    },
  },
  {
    name: {
      english: "Orthworm",
      japanese: "ミミズズ",
      chinese: "拖拖蚓",
      french: "Ferdeter",
    },
    id: 968,
    type: ["Metal"],
    base: {
      HP: 70,
      Attack: 85,
      Defense: 145,
      "Sp. Attack": 60,
      "Sp. Defense": 55,
      Speed: 65,
    },
    species: "Earthworm Pokémon",
    description:
      "Quando atacado, este Pokémon empunhará os tentáculos em seu corpo como punhos e atacará o oponente com uma tempestade de socos.",
    profile: {
      height: "2.5 m",
      weight: "310 kg",
      egg: ["Terra"],
      ability: [
        ["Earth-eater", false],
        ["Sand-veil", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/968.png",
      hires:
        "./Imagens/Pokedex/hires/968.png",
    },
  },
  {
    name: {
      english: "Glimmet",
      japanese: "キラーメ",
      chinese: "晶光芽",
      french: "Germéclat",
    },
    id: 969,
    type: ["Rocha", "Venenoso"],
    base: {
      HP: 48,
      Attack: 35,
      Defense: 42,
      "Sp. Attack": 105,
      "Sp. Defense": 60,
      Speed: 60,
    },
    species: "Ore Pokémon",
    description:
      "Ele absorve nutrientes das paredes das cavernas. As pétalas que ele usa são feitas de veneno cristalizado.",
    profile: {
      height: "0.7 m",
      weight: "8 kg",
      egg: ["Mineral"],
      ability: [
        ["Toxic-debris", false],
        ["Corrosion", true],
      ],
    },
    evolution: {
      next: [["970", "Level 35"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/969.png",
      hires:
        "./Imagens/Pokedex/hires/969.png",
    },
  },
  {
    name: {
      english: "Glimmora",
      japanese: "キラフロル",
      chinese: "晶光花",
      french: "Floréclat",
    },
    id: 970,
    type: ["Rocha", "Venenoso"],
    base: {
      HP: 83,
      Attack: 55,
      Defense: 90,
      "Sp. Attack": 130,
      "Sp. Defense": 81,
      Speed: 86,
    },
    species: "Ore Pokémon",
    description:
      "Quando este Pokémon detecta perigo, ele abrirá suas pétalas cristalinas e disparará raios de seu corpo cônico.",
    profile: {
      height: "1.5 m",
      weight: "45 kg",
      egg: ["Mineral"],
      ability: [
        ["Toxic-debris", false],
        ["Corrosion", true],
      ],
    },
    evolution: {
      prev: ["969", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/970.png",
      hires:
        "./Imagens/Pokedex/hires/970.png",
    },
  },
  {
    name: {
      english: "Greavard",
      japanese: "ボチ",
      chinese: "墓仔狗",
      french: "Toutombe",
    },
    id: 971,
    type: ["Fantasma"],
    base: {
      HP: 50,
      Attack: 61,
      Defense: 60,
      "Sp. Attack": 30,
      "Sp. Defense": 55,
      Speed: 34,
    },
    species: "Fantasma Dog Pokémon",
    description:
      "Dizem que um Pokémon cão que morreu na natureza sem jamais interagir com um humano renasceu como este Pokémon.",
    profile: {
      height: "0.6 m",
      weight: "35 kg",
      egg: ["Terra"],
      ability: [
        ["Pickup", false],
        ["Fluffy", true],
      ],
    },
    evolution: {
      next: [["972", "Level 30"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/971.png",
      hires:
        "./Imagens/Pokedex/hires/971.png",
    },
  },
  {
    name: {
      english: "Houndstone",
      japanese: "ハカドッグ",
      chinese: "墓扬犬",
      french: "Tomberro",
    },
    id: 972,
    type: ["Fantasma"],
    base: {
      HP: 72,
      Attack: 101,
      Defense: 100,
      "Sp. Attack": 50,
      "Sp. Defense": 97,
      Speed: 68,
    },
    species: "Fantasma Dog Pokémon",
    description:
      "Houndstone passa a maior parte do tempo dormindo em cemitérios. Entre todos os Pokémon cães, este é o mais leal a seu mestre.",
    profile: {
      height: "2 m",
      weight: "15 kg",
      egg: ["Terra"],
      ability: [
        ["Sand-rush", false],
        ["Fluffy", true],
      ],
    },
    evolution: {
      prev: ["971", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/972.png",
      hires:
        "./Imagens/Pokedex/hires/972.png",
    },
  },
  {
    name: {
      english: "Flamigo",
      japanese: "カラミンゴ",
      chinese: "纏红鹤",
      french: "Flamenroule",
    },
    id: 973,
    type: ["Voador", "Lutador"],
    base: {
      HP: 82,
      Attack: 115,
      Defense: 74,
      "Sp. Attack": 75,
      "Sp. Defense": 64,
      Speed: 90,
    },
    species: "Synchronize Pokémon",
    description:
      "Aparentemente, esta espécie amarra a base de seu pescoço em um nó para que a energia armazenada em sua barriga não escape de seu bico.",
    profile: {
      height: "1.6 m",
      weight: "37 kg",
      egg: ["Voador"],
      ability: [
        ["Scrappy", false],
        ["Tangled-feet", false],
        ["Costar", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/973.png",
      hires:
        "./Imagens/Pokedex/hires/973.png",
    },
  },
  {
    name: {
      english: "Cetoddle",
      japanese: "アルクジラ",
      chinese: "走鲸",
      french: "Piétacé",
    },
    id: 974,
    type: ["Gelo"],
    base: {
      HP: 108,
      Attack: 68,
      Defense: 45,
      "Sp. Attack": 30,
      "Sp. Defense": 40,
      Speed: 43,
    },
    species: "Terra Whale Pokémon",
    description:
      "Esta espécie deixou o oceano e começou a viver em terra há muito tempo. Parece ser intimamente relacionado a Wailmer.",
    profile: {
      height: "1.2 m",
      weight: "45 kg",
      egg: ["Terra"],
      ability: [
        ["Thick-fat", false],
        ["Snow-cloak", false],
        ["Sheer-force", true],
      ],
    },
    evolution: {
      next: [["975", "use Gelo-stone"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/974.png",
      hires:
        "./Imagens/Pokedex/hires/974.png",
    },
  },
  {
    name: {
      english: "Cetitan",
      japanese: "ハルクジラ",
      chinese: "浩大鲸",
      french: "Balbalèze",
    },
    id: 975,
    type: ["Gelo"],
    base: {
      HP: 170,
      Attack: 113,
      Defense: 65,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      Speed: 73,
    },
    species: "Terra Whale Pokémon",
    description:
      "Este Pokémon vagueia por áreas nevadas e geladas. Ele protege seu corpo com músculos poderosos e uma camada grossa de gordura sob sua pele.",
    profile: {
      height: "4.5 m",
      weight: "700 kg",
      egg: ["Terra"],
      ability: [
        ["Thick-fat", false],
        ["Slush-rush", false],
        ["Sheer-force", true],
      ],
    },
    evolution: {
      prev: ["974", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/975.png",
      hires:
        "./Imagens/Pokedex/hires/975.png",
    },
  },
  {
    name: {
      english: "Veluza",
      japanese: "ミガルーサ",
      chinese: "轻身鳕",
      french: "Délestin",
    },
    id: 976,
    type: ["Água", "Psíquico"],
    base: {
      HP: 90,
      Attack: 102,
      Defense: 73,
      "Sp. Attack": 78,
      "Sp. Defense": 65,
      Speed: 70,
    },
    species: "Jettison Pokémon",
    description:
      "Quando Veluza descarta carne desnecessária, sua mente se torna aguçada e seu poder psíquico aumenta. A carne extra tem um sabor leve, mas delicioso.",
    profile: {
      height: "2.5 m",
      weight: "90 kg",
      egg: ["Água2"],
      ability: [
        ["Mold-breaker", false],
        ["Sharpness", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/976.png",
      hires:
        "./Imagens/Pokedex/hires/976.png",
    },
  },
  {
    name: {
      english: "Dondozo",
      japanese: "ヘイラッシャ",
      chinese: "吃吼霸",
      french: "Oyacata",
    },
    id: 977,
    type: ["Água"],
    base: {
      HP: 150,
      Attack: 100,
      Defense: 115,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 35,
    },
    species: "Big Catfish Pokémon",
    description:
      "Este Pokémon é um glutão, mas é péssimo em conseguir comida. Ele faz dupla com um Tatsugiri para caçar presas.",
    profile: {
      height: "12 m",
      weight: "220 kg",
      egg: ["Água2"],
      ability: [
        ["Unaware", false],
        ["Oblivious", false],
        ["Água-veil", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/977.png",
      hires:
        "./Imagens/Pokedex/hires/977.png",
    },
  },
  {
    name: {
      english: "Annihilape",
      japanese: "コノヨザル",
      chinese: "弃世猴",
      french: "Courrousinge",
    },
    id: 979,
    type: ["Lutador", "Fantasma"],
    base: {
      HP: 110,
      Attack: 115,
      Defense: 80,
      "Sp. Attack": 50,
      "Sp. Defense": 90,
      Speed: 90,
    },
    species: "Rage Monkey Pokémon",
    description:
      "Quando sua raiva subiu além de um ponto crítico, este Pokémon ganhou poder que não é limitado pelos limites de seu corpo físico.",
    profile: {
      height: "1.2 m",
      weight: "56 kg",
      egg: ["Terra"],
      ability: [
        ["Vital-spirit", false],
        ["Inner-focus", false],
        ["Defiant", true],
      ],
    },
    evolution: {
      prev: ["57", "Level 28"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/979.png",
      hires:
        "./Imagens/Pokedex/hires/979.png",
    },
  },
  {
    name: {
      english: "Clodsire",
      japanese: "ドオー",
      chinese: "土王",
      french: "Terraiste",
    },
    id: 980,
    type: ["Venenoso", "Terra"],
    base: {
      HP: 130,
      Attack: 75,
      Defense: 60,
      "Sp. Attack": 45,
      "Sp. Defense": 100,
      Speed: 20,
    },
    species: "Spiny Fish Pokémon",
    description:
      "Quando atacado, este Pokémon retaliará espetando espinhos grossos em seu corpo. É um movimento arriscado que coloca tudo em jogo.",
    profile: {
      height: "1.8 m",
      weight: "223 kg",
      egg: ["Água1", "Terra"],
      ability: [
        ["Venenoso-point", false],
        ["Água-absorb", false],
        ["Unaware", true],
      ],
    },
    evolution: {
      prev: ["194", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/980.png",
      hires:
        "./Imagens/Pokedex/hires/980.png",
    },
  },
  {
    name: {
      english: "Farigiraf",
      japanese: "リキキリン",
      chinese: "奇麒麟",
      french: "Farigiraf",
    },
    id: 981,
    type: ["Normal", "Psíquico"],
    base: {
      HP: 120,
      Attack: 90,
      Defense: 70,
      "Sp. Attack": 110,
      "Sp. Defense": 70,
      Speed: 60,
    },
    species: "Long Neck Pokémon",
    description:
      "Agora que as ondas cerebrais da cabeça e da cauda estão sincronizadas, o poder psíquico deste Pokémon é 10 vezes mais forte do que o de Girafarig.",
    profile: {
      height: "3.2 m",
      weight: "160 kg",
      egg: ["Terra"],
      ability: [
        ["Cud-chew", false],
        ["Armor-tail", false],
        ["Sap-sipper", true],
      ],
    },
    evolution: {
      prev: ["203", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/981.png",
      hires:
        "./Imagens/Pokedex/hires/981.png",
    },
  },
  {
    name: {
      english: "Kingambit",
      japanese: "ドドゲザン",
      chinese: "仆刀将军",
      french: "Scalpereur",
    },
    id: 983,
    type: ["Sombrio", "Metal"],
    base: {
      HP: 100,
      Attack: 135,
      Defense: 120,
      "Sp. Attack": 60,
      "Sp. Defense": 85,
      Speed: 50,
    },
    species: "Big Blade Pokémon",
    description:
      "Apenas um Bisharp que se destaca acima de todos os outros em seu vasto exército pode evoluir para Kingambit.",
    profile: {
      height: "2 m",
      weight: "120 kg",
      egg: ["Humanshape"],
      ability: [
        ["Defiant", false],
        ["Supreme-overlord", false],
        ["Pressure", true],
      ],
    },
    evolution: {
      prev: ["625", "Level 52"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/983.png",
      hires:
        "./Imagens/Pokedex/hires/983.png",
    },
  },
  {
    name: {
      english: "Great Tusk",
      japanese: "イダイナキバ",
      chinese: "雄伟牙",
      french: "Fort-Ivoire",
    },
    id: 984,
    type: ["Terra", "Lutador"],
    base: {
      HP: 115,
      Attack: 131,
      Defense: 131,
      "Sp. Attack": 53,
      "Sp. Defense": 53,
      Speed: 87,
    },
    species: "Paradox Pokémon",
    description:
      "Observações deste Pokémon ocorreram nos últimos anos. O nome Great Tusk foi retirado de uma criatura listada em um determinado livro.",
    profile: {
      height: "2.2 m",
      weight: "320 kg",
      egg: ["No-eggs"],
      ability: [
        ["Protosynthesis", false],
        ["Protosynthesis", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/984.png",
      hires:
        "./Imagens/Pokedex/hires/984.png",
    },
  },
  {
    name: {
      english: "Scream Tail",
      japanese: "サケブシッポ",
      chinese: "吼叫尾",
      french: "Hurle-Queue",
    },
    id: 985,
    type: ["Fada", "Psíquico"],
    base: {
      HP: 115,
      Attack: 65,
      Defense: 99,
      "Sp. Attack": 65,
      "Sp. Defense": 115,
      Speed: 111,
    },
    species: "Paradox Pokémon",
    description:
      "Houve apenas uma observação relatada deste Pokémon. Ele se assemelha a uma criatura misteriosa retratada em um antigo diário de expedição.",
    profile: {
      height: "1.2 m",
      weight: "8 kg",
      egg: ["No-eggs"],
      ability: [
        ["Protosynthesis", false],
        ["Protosynthesis", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/985.png",
      hires:
        "./Imagens/Pokedex/hires/985.png",
    },
  },
  {
    name: {
      english: "Brute Bonnet",
      japanese: "アラブルタケ",
      chinese: "猛恶菇",
      french: "Fongus-Furie",
    },
    id: 986,
    type: ["Grama", "Sombrio"],
    base: {
      HP: 111,
      Attack: 127,
      Defense: 99,
      "Sp. Attack": 79,
      "Sp. Defense": 99,
      Speed: 55,
    },
    species: "Paradox Pokémon",
    description:
      "É possível que a criatura listada como Brute Bonnet em um determinado livro seja realmente este Pokémon.",
    profile: {
      height: "1.2 m",
      weight: "21 kg",
      egg: ["No-eggs"],
      ability: [
        ["Protosynthesis", false],
        ["Protosynthesis", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/986.png",
      hires:
        "./Imagens/Pokedex/hires/986.png",
    },
  },
  {
    name: {
      english: "Flutter Mane",
      japanese: "ハバタクカミ",
      chinese: "振翼发",
      french: "Flotte-Mèche",
    },
    id: 987,
    type: ["Fantasma", "Fada"],
    base: {
      HP: 55,
      Attack: 55,
      Defense: 55,
      "Sp. Attack": 135,
      "Sp. Defense": 135,
      Speed: 135,
    },
    species: "Paradox Pokémon",
    description:
      "Este Pokémon possui características semelhantes às de Flutter Mane, uma criatura mencionada em um determinado livro.",
    profile: {
      height: "1.4 m",
      weight: "4 kg",
      egg: ["No-eggs"],
      ability: [
        ["Protosynthesis", false],
        ["Protosynthesis", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/987.png",
      hires:
        "./Imagens/Pokedex/hires/987.png",
    },
  },
  {
    name: {
      english: "Slither Wing",
      japanese: "チヲハウハネ",
      chinese: "爬地翅",
      french: "Rampe-Ailes",
    },
    id: 988,
    type: ["Inseto", "Lutador"],
    base: {
      HP: 85,
      Attack: 135,
      Defense: 79,
      "Sp. Attack": 85,
      "Sp. Defense": 105,
      Speed: 81,
    },
    species: "Paradox Pokémon",
    description:
      "Este Pokémon misterioso tem algumas semelhanças com uma criatura que um livro antigo apresentou como Slither Wing.",
    profile: {
      height: "3.2 m",
      weight: "92 kg",
      egg: ["No-eggs"],
      ability: [
        ["Protosynthesis", false],
        ["Protosynthesis", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/988.png",
      hires:
        "./Imagens/Pokedex/hires/988.png",
    },
  },
  {
    name: {
      english: "Sandy Shocks",
      japanese: "スナノケガワ",
      chinese: "沙铁皮",
      french: "Pelage-Sablé",
    },
    id: 989,
    type: ["Elétrico", "Terra"],
    base: {
      HP: 85,
      Attack: 81,
      Defense: 97,
      "Sp. Attack": 121,
      "Sp. Defense": 85,
      Speed: 101,
    },
    species: "Paradox Pokémon",
    description:
      "Não existem registros de este Pokémon ter sido capturado. Os dados são escassos, mas as características do Pokémon coincidem com uma criatura mostrada em um diário de expedição.",
    profile: {
      height: "2.3 m",
      weight: "60 kg",
      egg: ["No-eggs"],
      ability: [
        ["Protosynthesis", false],
        ["Protosynthesis", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/989.png",
      hires:
        "./Imagens/Pokedex/hires/989.png",
    },
  },
  {
    name: {
      english: "Iron Treads",
      japanese: "テツノワダチ",
      chinese: "铁轍迹",
      french: "Roue-de-Fer",
    },
    id: 990,
    type: ["Terra", "Metal"],
    base: {
      HP: 90,
      Attack: 112,
      Defense: 120,
      "Sp. Attack": 72,
      "Sp. Defense": 70,
      Speed: 106,
    },
    species: "Paradox Pokémon",
    description:
      "Este Pokémon se assemelha muito a uma arma científica que uma revista paranormal afirmou ter sido enviada a este planeta por alienígenas.",
    profile: {
      height: "0.9 m",
      weight: "240 kg",
      egg: ["No-eggs"],
      ability: [
        ["Quark-drive", false],
        ["Quark-drive", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/990.png",
      hires:
        "./Imagens/Pokedex/hires/990.png",
    },
  },
  {
    name: {
      english: "Iron Bundle",
      japanese: "テツノツツミ",
      chinese: "铁包袱",
      french: "Hotte-de-Fer",
    },
    id: 991,
    type: ["Gelo", "Água"],
    base: {
      HP: 56,
      Attack: 80,
      Defense: 114,
      "Sp. Attack": 124,
      "Sp. Defense": 60,
      Speed: 136,
    },
    species: "Paradox Pokémon",
    description:
      "Sua forma é semelhante a um robô apresentado em um artigo de uma revista paranormal. O robô teria sido criado por uma civilização antiga.",
    profile: {
      height: "0.6 m",
      weight: "11 kg",
      egg: ["No-eggs"],
      ability: [
        ["Quark-drive", false],
        ["Quark-drive", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/991.png",
      hires:
        "./Imagens/Pokedex/hires/991.png",
    },
  },
  {
    name: {
      english: "Iron Hands",
      japanese: "テツノカイナ",
      chinese: "铁臂膀",
      french: "Paume-de-Fer",
    },
    id: 992,
    type: ["Lutador", "Elétrico"],
    base: {
      HP: 154,
      Attack: 140,
      Defense: 108,
      "Sp. Attack": 50,
      "Sp. Defense": 68,
      Speed: 50,
    },
    species: "Paradox Pokémon",
    description:
      "Ele é muito semelhante a um ciborgue coberto exclusivamente por uma revista paranormal. O ciborgue teria sido a forma modificada de um determinado atleta.",
    profile: {
      height: "1.8 m",
      weight: "380.7 kg",
      egg: ["No-eggs"],
      ability: [
        ["Quark-drive", false],
        ["Quark-drive", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/992.png",
      hires:
        "./Imagens/Pokedex/hires/992.png",
    },
  },
  {
    name: {
      english: "Iron Jugulis",
      japanese: "テツノコウベ",
      chinese: "铁脖颈",
      french: "Têtes-de-Fer",
    },
    id: 993,
    type: ["Sombrio", "Voador"],
    base: {
      HP: 94,
      Attack: 80,
      Defense: 86,
      "Sp. Attack": 122,
      "Sp. Defense": 80,
      Speed: 108,
    },
    species: "Paradox Pokémon",
    description:
      "Ele se assemelha a um determinado Pokémon apresentado em uma revista paranormal, descrito como a prole de um Hydreigon que se apaixonou por um robô.",
    profile: {
      height: "1.3 m",
      weight: "111 kg",
      egg: ["No-eggs"],
      ability: [
        ["Quark-drive", false],
        ["Quark-drive", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/993.png",
      hires:
        "./Imagens/Pokedex/hires/993.png",
    },
  },
  {
    name: {
      english: "Iron Moth",
      japanese: "テツノドクガ",
      chinese: "铁毒蛾",
      french: "Mite-de-Fer",
    },
    id: 994,
    type: ["Fogo", "Venenoso"],
    base: {
      HP: 80,
      Attack: 70,
      Defense: 60,
      "Sp. Attack": 140,
      "Sp. Defense": 110,
      Speed: 110,
    },
    species: "Paradox Pokémon",
    description:
      "Este Pokémon se assemelha a um objeto desconhecido descrito em uma revista paranormal como um OVNI enviado para observar a humanidade.",
    profile: {
      height: "1.2 m",
      weight: "36 kg",
      egg: ["No-eggs"],
      ability: [
        ["Quark-drive", false],
        ["Quark-drive", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/994.png",
      hires:
        "./Imagens/Pokedex/hires/994.png",
    },
  },
  {
    name: {
      english: "Iron Thorns",
      japanese: "テツノイバラ",
      chinese: "铁荆棘",
      french: "Épine-de-Fer",
    },
    id: 995,
    type: ["Rocha", "Elétrico"],
    base: {
      HP: 100,
      Attack: 134,
      Defense: 110,
      "Sp. Attack": 70,
      "Sp. Defense": 84,
      Speed: 72,
    },
    species: "Paradox Pokémon",
    description:
      "Ele tem algumas semelhanças com um Pokémon apresentado em uma revista duvidosa como um Tyranitar de um bilhão de anos no futuro.",
    profile: {
      height: "1.6 m",
      weight: "303 kg",
      egg: ["No-eggs"],
      ability: [
        ["Quark-drive", false],
        ["Quark-drive", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/995.png",
      hires:
        "./Imagens/Pokedex/hires/995.png",
    },
  },
  {
    name: {
      english: "Frigibax",
      japanese: "セビエ",
      chinese: "凉脊龙",
      french: "Frigodo",
    },
    id: 996,
    type: ["Dragão", "Gelo"],
    base: {
      HP: 65,
      Attack: 75,
      Defense: 45,
      "Sp. Attack": 35,
      "Sp. Defense": 45,
      Speed: 55,
    },
    species: "Gelo Fin Pokémon",
    description:
      "Frigibax absorve calor através de sua barbatana dorsal e converte o calor em energia de gelo. Quanto maior a temperatura, mais energia Frigibax armazena.",
    profile: {
      height: "0.5 m",
      weight: "17 kg",
      egg: ["Dragão", "Mineral"],
      ability: [
        ["Thermal-exchange", false],
        ["Gelo-body", true],
      ],
    },
    evolution: {
      next: [
        ["997", "Level 35"],
        ["998", "Level 54"],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/996.png",
      hires:
        "./Imagens/Pokedex/hires/996.png",
    },
  },
  {
    name: {
      english: "Arctibax",
      japanese: "セゴール",
      chinese: "冻脊龙",
      french: "Cryodo",
    },
    id: 997,
    type: ["Dragão", "Gelo"],
    base: {
      HP: 90,
      Attack: 95,
      Defense: 66,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      Speed: 62,
    },
    species: "Gelo Fin Pokémon",
    description:
      "Arctibax congela o ar ao seu redor, protegendo seu rosto com uma máscara de gelo e transformando sua barbatana dorsal em uma lâmina de gelo.",
    profile: {
      height: "0.8 m",
      weight: "30 kg",
      egg: ["Dragão", "Mineral"],
      ability: [
        ["Thermal-exchange", false],
        ["Gelo-body", true],
      ],
    },
    evolution: {
      prev: ["996", "Level INITIAL"],
      next: [["998", "Level 54"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/997.png",
      hires:
        "./Imagens/Pokedex/hires/997.png",
    },
  },
  {
    name: {
      english: "Baxcalibur",
      japanese: "セグレイブ",
      chinese: "戟脊龙",
      french: "Glaivodo",
    },
    id: 998,
    type: ["Dragão", "Gelo"],
    base: {
      HP: 115,
      Attack: 145,
      Defense: 92,
      "Sp. Attack": 75,
      "Sp. Defense": 86,
      Speed: 87,
    },
    species: "Gelo Dragão Pokémon",
    description:
      "Este Pokémon lança ar criogênico de sua boca. Este ar pode congelar instantaneamente até mesmo lava quente líquida.",
    profile: {
      height: "2.1 m",
      weight: "210 kg",
      egg: ["Dragão", "Mineral"],
      ability: [
        ["Thermal-exchange", false],
        ["Gelo-body", true],
      ],
    },
    evolution: {
      prev: ["997", "Level 35"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/998.png",
      hires:
        "./Imagens/Pokedex/hires/998.png",
    },
  },
  {
    name: {
      english: "Gimmighoul",
      japanese: "コレクレー",
      chinese: "索财灵",
      french: "Mordudor",
    },
    id: 999,
    type: ["Fantasma"],
    base: {
      HP: 45,
      Attack: 30,
      Defense: 70,
      "Sp. Attack": 75,
      "Sp. Defense": 70,
      Speed: 10,
    },
    species: "Coin Chest Pokémon",
    description:
      "Este Pokémon nasceu dentro de um baú do tesouro há cerca de 1.500 anos. Ele suga a força vital de patifes que tentam roubar o tesouro.",
    profile: {
      height: "0.3 m",
      weight: "5 kg",
      egg: ["No-eggs"],
      ability: [
        ["Rattled", false],
        ["Rattled", true],
      ],
    },
    evolution: {
      next: [["1000", "Level up com 999 Moedas Gimmighoul"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/999.png",
      hires:
        "./Imagens/Pokedex/hires/999.png",
    },
  },
  {
    name: {
      english: "Gholdengo",
      japanese: "サーフゴー",
      chinese: "赛富豪",
      french: "Gromago",
    },
    id: 1000,
    type: ["Metal", "Fantasma"],
    base: {
      HP: 87,
      Attack: 60,
      Defense: 95,
      "Sp. Attack": 133,
      "Sp. Defense": 91,
      Speed: 84,
    },
    species: "Coin Entity Pokémon",
    description:
      "Seu corpo parece ser feito de 1.000 moedas. Este Pokémon se dá bem com os outros e é rápido em fazer amizade com qualquer pessoa.",
    profile: {
      height: "1.2 m",
      weight: "30 kg",
      egg: ["No-eggs"],
      ability: [
        ["Good-as-gold", false],
        ["Good-as-gold", true],
      ],
    },
    evolution: {
      prev: ["999", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1000.png",
      hires:
        "./Imagens/Pokedex/hires/1000.png",
    },
  },
  {
    name: {
      english: "Wo-Chien",
      japanese: "チオンジェン",
      chinese: "古简蜗",
      french: "Chongjian",
    },
    id: 1001,
    type: ["Sombrio", "Grama"],
    base: {
      HP: 85,
      Attack: 85,
      Defense: 100,
      "Sp. Attack": 95,
      "Sp. Defense": 135,
      Speed: 70,
    },
    species: "Ruinous Pokémon",
    description:
      "O rancor de uma pessoa punida por escrever as más ações do rei em tábuas de madeira se vestiu com folhas mortas para se tornar um Pokémon.",
    profile: {
      height: "1.5 m",
      weight: "74.2 kg",
      egg: ["No-eggs"],
      ability: [
        ["Tablets-of-ruin", false],
        ["Tablets-of-ruin", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1001.png",
      hires:
        "./Imagens/Pokedex/hires/1001.png",
    },
  },
  {
    name: {
      english: "Chien-Pao",
      japanese: "パオジアン",
      chinese: "古剑豹",
      french: "Baojian",
    },
    id: 1002,
    type: ["Sombrio", "Gelo"],
    base: {
      HP: 80,
      Attack: 120,
      Defense: 80,
      "Sp. Attack": 90,
      "Sp. Defense": 65,
      Speed: 135,
    },
    species: "Ruinous Pokémon",
    description:
      "Este Pokémon pode controlar 100 toneladas de neve caída. Ele brinca inocentemente saltando para dentro e para fora de avalanches que causou.",
    profile: {
      height: "1.9 m",
      weight: "152.2 kg",
      egg: ["No-eggs"],
      ability: [
        ["Sword-of-ruin", false],
        ["Sword-of-ruin", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1002.png",
      hires:
        "./Imagens/Pokedex/hires/1002.png",
    },
  },
  {
    name: {
      english: "Ting-Lu",
      japanese: "ディンルー",
      chinese: "古鼎鹿",
      french: "Dinglu",
    },
    id: 1003,
    type: ["Sombrio", "Terra"],
    base: {
      HP: 155,
      Attack: 110,
      Defense: 125,
      "Sp. Attack": 55,
      "Sp. Defense": 80,
      Speed: 45,
    },
    species: "Ruinous Pokémon",
    description:
      "O medo injetado em um antigo vaso ritual se vestiu com rochas e sujeira para se tornar um Pokémon.",
    profile: {
      height: "2.7 m",
      weight: "699.7 kg",
      egg: ["No-eggs"],
      ability: [
        ["Vessel-of-ruin", false],
        ["Vessel-of-ruin", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1003.png",
      hires:
        "./Imagens/Pokedex/hires/1003.png",
    },
  },
  {
    name: {
      english: "Chi-Yu",
      japanese: "イーユイ",
      chinese: "古玉鱼",
      french: "Yuyu",
    },
    id: 1004,
    type: ["Sombrio", "Fogo"],
    base: {
      HP: 55,
      Attack: 80,
      Defense: 80,
      "Sp. Attack": 135,
      "Sp. Defense": 120,
      Speed: 100,
    },
    species: "Ruinous Pokémon",
    description:
      "Ele controla chamas que queimam a mais de 2.980 graus Celsius. Ele nada casualmente no mar de lava que cria derretendo rocha e areia.",
    profile: {
      height: "0.4 m",
      weight: "4.9 kg",
      egg: ["No-eggs"],
      ability: [
        ["Beads-of-ruin", false],
        ["Beads-of-ruin", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1004.png",
      hires:
        "./Imagens/Pokedex/hires/1004.png",
    },
  },
  {
    name: {
      english: "Roaring Moon",
      japanese: "トドロクツキ",
      chinese: "轰鸣月",
      french: "Rugit-Lune",
    },
    id: 1005,
    type: ["Dragão", "Sombrio"],
    base: {
      HP: 105,
      Attack: 139,
      Defense: 71,
      "Sp. Attack": 55,
      "Sp. Defense": 101,
      Speed: 119,
    },
    species: "Paradox Pokémon",
    description:
      "É possível que esta seja a criatura listada como Roaring Moon em um diário de expedição que ainda guarda muitos mistérios.",
    profile: {
      height: "2 m",
      weight: "380 kg",
      egg: ["No-eggs"],
      ability: [
        ["Protosynthesis", false],
        ["Protosynthesis", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1005.png",
      hires:
        "./Imagens/Pokedex/hires/1005.png",
    },
  },
  {
    name: {
      english: "Iron Valiant",
      japanese: "テツノブジン",
      chinese: "铁武者",
      french: "Garde-de-Fer",
    },
    id: 1006,
    type: ["Fada", "Lutador"],
    base: {
      HP: 74,
      Attack: 130,
      Defense: 90,
      "Sp. Attack": 120,
      "Sp. Defense": 60,
      Speed: 116,
    },
    species: "Paradox Pokémon",
    description:
      "Ele tem algumas semelhanças com a invenção de um cientista maluco coberta em uma revista paranormal.",
    profile: {
      height: "1.4 m",
      weight: "35 kg",
      egg: ["No-eggs"],
      ability: [
        ["Quark-drive", false],
        ["Quark-drive", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1006.png",
      hires:
        "./Imagens/Pokedex/hires/1006.png",
    },
  },
  {
    name: {
      english: "Koraidon",
      japanese: "コライドン",
      chinese: "故勒顿",
      french: "Koraidon",
    },
    id: 1007,
    type: ["Lutador", "Dragão"],
    base: {
      HP: 100,
      Attack: 135,
      Defense: 115,
      "Sp. Attack": 85,
      "Sp. Defense": 100,
      Speed: 135,
    },
    species: "Paradox Pokémon",
    description:
      "Este parece ser o Rei Alado mencionado em um antigo diário de expedição. Dizia-se que ele havia dividido a terra com suas próprias mãos.",
    profile: {
      height: "2.5 m",
      weight: "303 kg",
      egg: ["No-eggs"],
      ability: [
        ["Orichalcum-pulse", false],
        ["Orichalcum-pulse", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1007.png",
      hires:
        "./Imagens/Pokedex/hires/1007.png",
    },
  },
  {
    name: {
      english: "Miraidon",
      japanese: "ミライドン",
      chinese: "密勒顿",
      french: "Miraidon",
    },
    id: 1008,
    type: ["Elétrico", "Dragão"],
    base: {
      HP: 100,
      Attack: 85,
      Defense: 100,
      "Sp. Attack": 135,
      "Sp. Defense": 115,
      Speed: 135,
    },
    species: "Paradox Pokémon",
    description:
      "Muito permanece desconhecido sobre esta criatura. Ele se assemelha a Cyclizar, mas é muito mais implacável e poderoso.",
    profile: {
      height: "3.5 m",
      weight: "240 kg",
      egg: ["No-eggs"],
      ability: [
        ["Hadron-engine", false],
        ["Hadron-engine", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1008.png",
      hires:
        "./Imagens/Pokedex/hires/1008.png",
    },
  },
  {
    name: {
      english: "Walking Wake",
      japanese: "ウネルミナモ",
      chinese: "波荡水",
      french: "Serpente-Eau",
    },
    id: 1009,
    type: ["Água", "Dragão"],
    base: {
      HP: 99,
      Attack: 83,
      Defense: 91,
      "Sp. Attack": 125,
      "Sp. Defense": 83,
      Speed: 109,
    },
    species: "Paradox Pokémon",
    description:
      "Esta criatura feroz está envolta em mistério. Ele leva o nome de um monstro aquático mencionado em um antigo diário de expedição.",
    profile: {
      height: "3.5 m",
      weight: "280 kg",
      egg: ["No-eggs"],
      ability: [
        ["Protosynthesis", false],
        ["Protosynthesis", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1009.png",
      hires:
        "./Imagens/Pokedex/hires/1009.png",
    },
  },
  {
    name: {
      english: "Iron Leaves",
      japanese: "テツノイサハ",
      chinese: "铁斑叶",
      french: "Vert-de-Fer",
    },
    id: 1010,
    type: ["Grama", "Psíquico"],
    base: {
      HP: 90,
      Attack: 130,
      Defense: 88,
      "Sp. Attack": 70,
      "Sp. Defense": 108,
      Speed: 104,
    },
    species: "Paradox Pokémon",
    description:
      "Muitas de suas características físicas correspondem às de um Virizion do futuro que foi coberto em uma revista paranormal.",
    profile: {
      height: "1.5 m",
      weight: "125 kg",
      egg: ["No-eggs"],
      ability: [
        ["Quark-drive", false],
        ["Quark-drive", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1010.png",
      hires:
        "./Imagens/Pokedex/hires/1010.png",
    },
  },
  {
    name: {
      english: "Dipplin",
      japanese: "カミッチュ",
      chinese: "裹蜜虫",
      french: "Pomdramour",
    },
    id: 1011,
    type: ["Grama", "Dragão"],
    base: {
      HP: 80,
      Attack: 80,
      Defense: 110,
      "Sp. Attack": 95,
      "Sp. Defense": 80,
      Speed: 40,
    },
    species: "Candy Apple Pokémon",
    description:
      "Dipplin é duas criaturas em um Pokémon. Sua evolução foi desencadeada por uma maçã especial que só cresce em um lugar.",
    profile: {
      height: "0.4 m",
      weight: "9.7 kg",
      egg: [],
      ability: [
        ["Supersweet-syrup", false],
        ["Gluttony", false],
        ["Sticky-hold", true],
      ],
    },
    evolution: {
      prev: ["840", "Level INITIAL"],
      next: [["1019", "Level up depois de aprender Dragão Cheer"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1011.png",
      hires:
        "./Imagens/Pokedex/hires/1011.png",
    },
  },
  {
    name: {
      english: "Poltchageist",
      japanese: "チャデス",
      chinese: "斯魔茶",
      french: "Poltchageist",
    },
    id: 1012,
    type: ["Grama", "Fantasma"],
    base: {
      HP: 40,
      Attack: 45,
      Defense: 45,
      "Sp. Attack": 74,
      "Sp. Defense": 54,
      Speed: 50,
    },
    species: "Matcha Pokémon",
    description:
      "Supõe-se que os arrependimentos de um mestre em cerimônia de chá que morreu antes de aperfeiçoar seu ofício persistiram em algum matcha e se tornaram um Pokémon.",
    profile: {
      height: "0.1 m",
      weight: "1.1 kg",
      egg: [],
      ability: [
        ["Hospitality", false],
        ["Heatproof", true],
      ],
    },
    evolution: {
      next: [["1013", "use Unremarkable Teacup"]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1012.png",
      hires:
        "./Imagens/Pokedex/hires/1012.png",
    },
  },
  {
    name: {
      english: "Sinistcha",
      japanese: "ヤバソチャ",
      chinese: "来悲粗茶",
      french: "Théffroyable",
    },
    id: 1013,
    type: ["Grama", "Fantasma"],
    base: {
      HP: 71,
      Attack: 60,
      Defense: 106,
      "Sp. Attack": 121,
      "Sp. Defense": 80,
      Speed: 70,
    },
    species: "Matcha Pokémon",
    description:
      "Ele finge ser chá, tentando enganar as pessoas para que o bebam, para que possa drenar sua força vital. Sua artimanha geralmente é malsucedida.",
    profile: {
      height: "0.2 m",
      weight: "2.2 kg",
      egg: [],
      ability: [
        ["Hospitality", false],
        ["Heatproof", true],
      ],
    },
    evolution: {
      prev: ["1012", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1013.png",
      hires:
        "./Imagens/Pokedex/hires/1013.png",
    },
  },
  {
    name: {
      english: "Okidogi",
      japanese: "イイネイヌ",
      chinese: "够赞狗",
      french: "Félicanis",
    },
    id: 1014,
    type: ["Venenoso", "Lutador"],
    base: {
      HP: 88,
      Attack: 128,
      Defense: 115,
      "Sp. Attack": 58,
      "Sp. Defense": 86,
      Speed: 80,
    },
    species: "Retainer Pokémon",
    description:
      "Depois que todos os seus músculos foram estimulados pela corrente tóxica ao redor de seu pescoço, Okidogi se transformou e ganhou um físico poderoso.",
    profile: {
      height: "1.8 m",
      weight: "92.2 kg",
      egg: [],
      ability: [
        ["Toxic-chain", false],
        ["Guard-dog", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1014.png",
      hires:
        "./Imagens/Pokedex/hires/1014.png",
    },
  },
  {
    name: {
      english: "Munkidori",
      japanese: "マシマシラ",
      chinese: "愿增猿",
      french: "Fortusimia",
    },
    id: 1015,
    type: ["Venenoso", "Psíquico"],
    base: {
      HP: 88,
      Attack: 75,
      Defense: 66,
      "Sp. Attack": 130,
      "Sp. Defense": 90,
      Speed: 106,
    },
    species: "Retainer Pokémon",
    description:
      "A corrente é feita de toxinas que aumentam as capacidades. Estimulou o cérebro de Munkidori e fez com que os poderes psíquicos do Pokémon florescessem.",
    profile: {
      height: "1 m",
      weight: "12.2 kg",
      egg: [],
      ability: [
        ["Toxic-chain", false],
        ["Frisk", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1015.png",
      hires:
        "./Imagens/Pokedex/hires/1015.png",
    },
  },
  {
    name: {
      english: "Fezandipiti",
      japanese: "キチキギス",
      chinese: "吉雉鸡",
      french: "Favianos",
    },
    id: 1016,
    type: ["Venenoso", "Fada"],
    base: {
      HP: 88,
      Attack: 91,
      Defense: 82,
      "Sp. Attack": 70,
      "Sp. Defense": 125,
      Speed: 99,
    },
    species: "Retainer Pokémon",
    description:
      "Fezandipiti deve sua beleza e voz encantadora aos estimulantes tóxicos que emanam da corrente enrolada em seu corpo.",
    profile: {
      height: "1.4 m",
      weight: "30.1 kg",
      egg: [],
      ability: [
        ["Toxic-chain", false],
        ["Technician", true],
      ],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1016.png",
      hires:
        "./Imagens/Pokedex/hires/1016.png",
    },
  },
  {
    name: {
      english: "Ogerpon",
      japanese: "オーガポン",
      chinese: "厄诡椪",
      french: "Ogerpon",
    },
    id: 1017,
    type: ["Grama"],
    base: {
      HP: 80,
      Attack: 120,
      Defense: 84,
      "Sp. Attack": 60,
      "Sp. Defense": 96,
      Speed: 110,
    },
    species: "Mask Pokémon",
    description:
      "O tipo deste Pokémon muda com base na máscara que ele está usando. Ele confunde seus inimigos com movimentos ágeis e chutes.",
    profile: {
      height: "1.2 m",
      weight: "39.8 kg",
      egg: [],
      ability: [["Defiant", false]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1017.png",
      hires:
        "./Imagens/Pokedex/hires/1017.png",
    },
  },
  {
    name: {
      english: "Archaludon",
      japanese: "ブリジュラス",
      chinese: "铝钢桥龙",
      french: "Pondralugon",
    },
    id: 1018,
    type: ["Metal", "Dragão"],
    base: {
      HP: 90,
      Attack: 105,
      Defense: 130,
      "Sp. Attack": 125,
      "Sp. Defense": 65,
      Speed: 85,
    },
    species: "Alloy Pokémon",
    description:
      "Ele coleta eletricidade estática de seus arredores. Os raios que ele lança quando está de quatro são tremendamente poderosos.",
    profile: {
      height: "2 m",
      weight: "60 kg",
      egg: [],
      ability: [
        ["Stamina", false],
        ["Sturdy", false],
        ["Stalwart", true],
      ],
    },
    evolution: {
      prev: ["884", "Level INITIAL"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1018.png",
      hires:
        "./Imagens/Pokedex/hires/1018.png",
    },
  },
  {
    name: {
      english: "Hydrapple",
      japanese: "カミツオロチ",
      chinese: "蜜集大蛇",
      french: "Pomdorochi",
    },
    id: 1019,
    type: ["Grama", "Dragão"],
    base: {
      HP: 106,
      Attack: 80,
      Defense: 110,
      "Sp. Attack": 120,
      "Sp. Defense": 80,
      Speed: 44,
    },
    species: "Apple Hydra Pokémon",
    description:
      "Sete serpentes vivem dentro de uma maçã feita de xarope. A serpente no centro é a comandante.",
    profile: {
      height: "1.8 m",
      weight: "93 kg",
      egg: [],
      ability: [
        ["Supersweet-syrup", false],
        ["Regenerator", false],
        ["Sticky-hold", true],
      ],
    },
    evolution: {
      prev: ["1011", "Level up depois de aprender Dragão Cheer"],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1019.png",
      hires:
        "./Imagens/Pokedex/hires/1019.png",
    },
  },
  {
    name: {
      english: "Gouging Fogo",
      japanese: "ウガツホムラ",
      chinese: "破空焰",
      french: "Feu-Perçant",
    },
    id: 1020,
    type: ["Fogo", "Dragão"],
    base: {
      HP: 105,
      Attack: 115,
      Defense: 121,
      "Sp. Attack": 65,
      "Sp. Defense": 93,
      Speed: 91,
    },
    species: "Paradox Pokémon",
    description:
      "Existem poucos relatos de que esta criatura tenha sido avistada. Um breve vídeo mostra-o causando estragos e lançando colunas de chamas.",
    profile: {
      height: "3.5 m",
      weight: "590 kg",
      egg: [],
      ability: [["Protosynthesis", false]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1020.png",
      hires:
        "./Imagens/Pokedex/hires/1020.png",
    },
  },
  {
    name: {
      english: "Raging Bolt",
      japanese: "タケルライコ",
      chinese: "猛雷鼓",
      french: "Ire-Foudre",
    },
    id: 1021,
    type: ["Elétrico", "Dragão"],
    base: {
      HP: 125,
      Attack: 73,
      Defense: 91,
      "Sp. Attack": 137,
      "Sp. Defense": 89,
      Speed: 75,
    },
    species: "Paradox Pokémon",
    description:
      "Dizem que ele incinera tudo ao seu redor com raios lançados de sua pelagem. Muito pouco se sabe sobre esta criatura.",
    profile: {
      height: "5.2 m",
      weight: "480 kg",
      egg: [],
      ability: [["Protosynthesis", false]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1021.png",
      hires:
        "./Imagens/Pokedex/hires/1021.png",
    },
  },
  {
    name: {
      english: "Iron Boulder",
      japanese: "テツノイワオ",
      chinese: "鐵磐岩",
      french: "Roc-de-Fer",
    },
    id: 1022,
    type: ["Rocha", "Psíquico"],
    base: {
      HP: 90,
      Attack: 120,
      Defense: 80,
      "Sp. Attack": 68,
      "Sp. Defense": 108,
      Speed: 124,
    },
    species: "Paradox Pokémon",
    description:
      "Ele se assemelha a um Pokémon descrito em uma revista duvidosa como um Terrakion que foi modificado por uma organização maligna.",
    profile: {
      height: "1.5 m",
      weight: "162.5 kg",
      egg: [],
      ability: [["Quark-drive", false]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1022.png",
      hires:
        "./Imagens/Pokedex/hires/1022.png",
    },
  },
  {
    name: {
      english: "Iron Crown",
      japanese: "テツノカシラ",
      chinese: "鐵頭殼",
      french: "Chef-de-Fer",
    },
    id: 1023,
    type: ["Metal", "Psíquico"],
    base: {
      HP: 90,
      Attack: 72,
      Defense: 100,
      "Sp. Attack": 122,
      "Sp. Defense": 108,
      Speed: 98,
    },
    species: "Paradox Pokémon",
    description:
      "Ele se assemelha a um objeto misterioso apresentado em uma revista paranormal como uma arma de última geração com a forma de um Cobalion.",
    profile: {
      height: "1.6 m",
      weight: "156 kg",
      egg: [],
      ability: [["Quark-drive", false]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1023.png",
      hires:
        "./Imagens/Pokedex/hires/1023.png",
    },
  },
  {
    name: {
      english: "Terapagos",
      japanese: "テラパゴス",
      chinese: "太乐巴戈斯",
      french: "Terapagos",
    },
    id: 1024,
    type: ["Normal"],
    base: {
      HP: 90,
      Attack: 65,
      Defense: 85,
      "Sp. Attack": 65,
      "Sp. Defense": 85,
      Speed: 60,
    },
    species: "Tera Pokémon",
    description:
      "Terapagos se protege usando seu poder para transformar energia em cristais duros. Este Pokémon é a fonte do fenômeno Terastal.",
    profile: {
      height: "0.2 m",
      weight: "6.5 kg",
      egg: [],
      ability: [["Tera-shift", false]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1024.png",
      hires:
        "./Imagens/Pokedex/hires/1024.png",
    },
  },
  {
    name: {
      english: "Pecharunt",
      japanese: "モモワロウ",
      chinese: "桃歹郎",
      french: "Pêchaminus",
    },
    id: 1025,
    type: ["Venenoso", "Fantasma"],
    base: {
      HP: 88,
      Attack: 88,
      Defense: 160,
      "Sp. Attack": 88,
      "Sp. Defense": 88,
      Speed: 88,
    },
    species: "Subjugation Pokémon",
    description:
      "Ele alimenta outros com mochi tóxico que atraem desejos e capacidades. Aqueles que comem o mochi caem sob o controle de Pecharunt, presos à sua vontade",
    profile: {
      height: "0.3 m",
      weight: "0.3 kg",
      egg: [],
      ability: [["Venenoso-puppeteer", false]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/hires/1025.png",
      hires:
        "./Imagens/Pokedex/hires/1025.png",
    },
  },
  {
    name: {
      english: "Celso",
      japanese: "Xing Celso",
      chinese: "Xong Celso",
      french: "Meci Celso",
    },
    id: 1026,
    type: ["Normal"],
    base: {
      HP: 255,
      Attack: 255,
      Defense: 255,
      "Sp. Attack": 255,
      "Sp. Defense": 255,
      Speed: 255,
    },
    species: "Professor Pokémon",
    description:
      `Quando chega o final da aula, este Pokémon utiliza o seu especial "Jogo Rápido" com o qual a finaliza em milésimos de segundos.`,
    profile: {
      height: "1.80 m",
      weight: "85.0 kg",
      egg: ["Raul", "Heitor"],
      ability: [["Professor-Top", false]],
    },
    image: {
      sprite: null,
      thumbnail:
        "./Imagens/Pokedex/thumbnails/1026.png",
      hires:
        "./Imagens/Pokedex/hires/1026.png",
    },
  },
];