/**
 * Objeto Pokémon contendo todas as caractéristicas de um.
 */
class Pokemon {
  /**
   * @param {Object} POKEMON_JSON - Json conténdo as características do Pokémon.
   *
   *
   * @param {int} POKEMON_JSON.id - O ID do Pokémon na Pokédex.
   *
   *
   * @param {string} POKEMON_JSON.name - O nome do Pokémon em inglês.
   *
   *
   * @param {Array} POKEMON_JSON.type - Array contendo o(s) tipo(s) do Pokémon.
   *
   *
   * @param {Object} POKEMON_JSON.base - Os status do Pokémon.
   *
   * @param {int} POKEMON_JSON.base.HP - A vida do Pokémon.
   *
   * @param {int} POKEMON_JSON.base.Attack - Status de ataque do Pokémon.
   *
   * @param {int} POKEMON_JSON.base.Defense - Status de defesa do Pokémon.
   *
   * @param {int} POKEMON_JSON.base.Sp_Attack - Status de super ataque do Pokémon.
   *
   * @param {int} POKEMON_JSON.base.SP_Defense - Status de super defesa do Pokémon.
   *
   * @param {int} POKEMON_JSON.base.Speed - Status de velocidade do Pokémon.
   *
   *
   * @param {string} POKEMON_JSON.species - A espécie do Pokémon.
   *
   *
   * @param {string} POKEMON_JSON.description - A descrição do Pokémon na Pokédex.
   *
   *
   * @param {Object} POKEMON_JSON.evolution - Dados das evoluções do Pokémon.
   *
   * @param {Object} POKEMON_JSON.evolution.prev - Dados da pré-evolução do Pokémon.
   *
   * @param {int} POKEMON_JSON.evolution.prev.pokemon_id - ID da pré-evolução do Pokémon.
   *
   * @param {int} POKEMON_JSON.evolution.prev.requirement - Pré-requisito para pré-evoluir o Pokémon.
   *
   * @param {[...[pokemon_id: int, requirement: string]]} POKEMON_JSON.evolution.next - Dados da evolução do Pokémon.
   *
   *
   * @param {Object} POKEMON_JSON.profile - Dados fisiológicos do Pokémon.
   *
   * @param {string} POKEMON_JSON.profile.height - Altura do Pokémon.
   * 
   * @param {string} POKEMON_JSON.profile.weight - Massa do Pokémon.
   * 
   * @param {[...pokemon_type: string]} POKEMON_JSON.profile.egg - Ovo do Pokémon.
   * 
   * @param {[ability_name: boolean, ability_status: boolean]} POKEMON_JSON.profile.ability - Dados das abilidades do Pokémon.
   * 
   * @param {string} POKEMON_JSON.profile.gender - O gênero do Pokémon (Masculino, Feminino ou Indefinido).
   * 
   * 
   * @param {Object} POKEMON_JSON.image - As fontes dos arquivos de imagem do Pokémon.
   * 
   * @param {string} POKEMON_JSON.image.sprite - Local do sprite do Pokémon.
   * 
   * @param {string} POKEMON_JSON.image.thumbnail - Local da thumbnail do Pokémon.
   * 
   * @param {string} POKEMON_JSON.image.hires - Local do hires do Pokémon.
   */
  constructor(POKEMON_JSON) {
    /**
     * O ID do Pokémon na Pokédex.
     * @type {int}
     */
    this.id = POKEMON_JSON.id;

    /**
     * O nome do Pokémon em inglês.
     * @param {string} name
     */
    this.name = POKEMON_JSON.name.english;

    /**
     * Array contendo o(s) tipo(s) do Pokémon.
     * @type {[...strings]}
     */
    this.type = POKEMON_JSON.type;

    /**
     * Os status do Pokémon.
     * @type {{
     *    HP: int,
     *    Attack: int,
     *    Defense: int,
     *    "Sp. Attack": int,
     *    "Sp. Defense": int,
     *    "Speed": int
     * }}
     */
    this.base = POKEMON_JSON.base;

    /**
     * A espécie do Pokémon.
     * @type {string}
     */
    this.species = POKEMON_JSON.species;

    /**
     * A descrição do Pokémon na Pokédex.
     * @type {string}
     */
    this.description = POKEMON_JSON.description;

    /**
     * Dados das evoluções do Pokémon,
     * ou seja, sobre a pré-evolução e a(s) evolução(ões).
     * @type {{
     *    prev: {id: int, requirement: string},
     *    next: [...{id: int, requirement: string}]
     *  }}
     */
    if (!!POKEMON_JSON.evolution)
    {
      this.evolution = this.load_evolution(POKEMON_JSON.evolution);
    }

    /**
     * Dados fisiológicos do Pokémon.
     * @type {{
     *    height: string,
     *    weight: string,
     *    egg: [...pokemon_type: string],
     *    ability: [ability_name: bool, ability_status: bool],
     *    gender: string,
     * }}
     */
    this.profile = POKEMON_JSON.profile;

    /**
     * As fontes dos arquivos de imagem do Pokémon.
     * @type {{
     *    sprite: string,
     *    thumbnail: string,
     *    hires: string,
     * }}
     */
    this.image = POKEMON_JSON.image;
  }

  /**
   * Carrega as informações da evolução do Pokémon do JSON.
   *
   * @param {object} evolution_object - O objeto evolution no JSON.
   *
   * @param {[pokemon_id: int, preRequisito: string]} evolution_object.prev - A pré-evolução do Pokémon.
   *
   * @param {[...[pokemon_id: int, preRequisito: string]]} evolution_object.next - A evolução do Pokémon.
   *
   * @returns { {
   *    prev: {id: int, requirement: string},
   *    next: [...{id: int, requirement: string}],
   *  }
   * } Um objeto com as condições necessárias das evoluções do Pokémon.
   */
  load_evolution(evolution_object) {
    let evolution = {};

    try{
      if (evolution_object.prev !== undefined) {
        evolution.prev = {
          pokemon_id: evolution_object.prev[0],
          requirement: evolution_object.prev[1],
        };
      }
  
      if (evolution_object.next !== undefined) {
        evolution.next = [];
  
        for (let pokemon of evolution_object.next) {
          evolution.next.push({
            pokemon_id: pokemon[0],
            requirement: pokemon[1],
          });
        }
      }

      return evolution;
    }
    catch(error)
    {
      console.error(`LOAD EVOLUTION ERROR ${this.id}: ${error}`)
    }
  }

  /**
   * Pegar a evolução do Pokémon.
   * 
   * @param {("prev"|"next")} evolution_type - Pré ou próxima evolução.
   *
   * @returns {Pokemon|[...Pokemon]}
   */
  get_evolution(evolution_type)
  {
    try
    {
      switch (evolution_type) {
        case "prev":
          return this.evolution.prev !== undefined
           ? POKEDEX.get_pokemon_by_id(this.evolution.prev.pokemon_id)
           : null;

        case "next":
          if (this.evolution.next === undefined) return null;

          let evolutions = [];

          for (let evolution of this.evolution.next)
          {
            evolutions.push(POKEDEX.get_pokemon_by_id(evolution.pokemon_id));
          }

          return evolutions;
      }
      
    }
    catch (error)
    {
      console.error(`EVOLUTION_ERROR: ${error}`);

      return null;
    }
  }
}
