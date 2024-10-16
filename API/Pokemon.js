/**
 * Objeto Pokémon contendo todas as caractéristicas de um.
 */
class Pokemon {
  /**
   * @param {JSON} POKEMON_JSON - Json conténdo as características do Pokémon.
   */
  constructor(POKEMON_JSON) {
    this.id = POKEMON_JSON.id;

    this.name = POKEMON_JSON.name.english;

    this.type = POKEMON_JSON.type;

    this.base = POKEMON_JSON.base;

    this.species = POKEMON_JSON.species;

    this.description = POKEMON_JSON.description;

    this.evolution = this.load_evolution(POKEMON_JSON.evolution);

    this.profile = POKEMON_JSON.profile;

    this.image = POKEMON_JSON.image;
  }

  /**
   * Carrega as informações da evolução do Pokémon do JSON.
   *
   * @param {object} evolution_object - O objeto evolution no JSON.
   *
   * @param {[level: int, preRequisito: string]} evolution_object.prev - A pré-evolução do Pokémon.
   *
   * @param {[[level: int, preRequisito: string]]} evolution_object.next - A evolução do Pokémon.
   *
   * @returns { {
   *    prev: {level: int, requirement: string},
   *    next: {level: int, requirement: string}
   *  }
   * } Um objeto com as condições necessárias das evoluções do Pokémon.
   */
  load_evolution(evolution_object) {
    let evolution = {};

    if (evolution_object.prev !== undefined) {
      evolution.prev = {
        level: evolution_object.prev[0],
        requirement: evolution_object.prev[1],
      };
    }

    if (evolution_object.next !== undefined) {
      evolution.next = {
        level: evolution_object.next[0][0],
        requirement: evolution_object.next[0][1],
      };
    }

    return evolution;
  }
}

/**
 *     id: 1,
    name: {
      english: "Bulbasaur",
      japanese: "フシギダネ",
      chinese: "妙蛙种子",
      french: "Bulbizarre",
    },
    type: ["Grass", "Poison"],
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
      egg: ["Monster", "Grass"],
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
 */