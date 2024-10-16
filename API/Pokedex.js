class Pokedex {
  constructor(POKEDEX_JSON)
  {
    this.pokemons = {};
    this.pokemons_ids = {};

    for (let i = 0; i < POKEDEX_JSON.length; i++)
    {
      let pokemon = new Pokemon(POKEDEX_JSON[i]);
      
      this.pokemons[pokemon.name] = pokemon;
      this.pokemons_ids[pokemon.id] = pokemon.name;
    }
  }

  /**
   * Retorna um Pokémon da Pokédex pelo nome.
   *
   * @param {string} pokemon_name - O nome do Pokémon desejado.
   *
   * @returns {Pokemon} O objeto do Pokémon desejado.
   */
  get_pokemon_by_name(pokemon_name)
  {
    return this.pokemons[pokemon_name] !== undefined
     ? this.pokemons[pokemon_name] : null;
  }

  /**
   * Retorna um Pokémon da Pokédex pelo id.
   *
   * @param {string} pokemon_id - O Id do Pokémon na Pokédex.
   *
   * @returns {Pokemon} O objeto do Pokémon desejado.
   */
  get_pokemon_by_id(pokemon_id)
  {
    return this.pokemons_ids[pokemon_id] !== undefined
     ? this.get_pokemon_by_name(this.pokemons_ids[pokemon_id]) : null;
  }

  /**
   * Procura na Pokédex os possíveis Pokémons dado um nome.
   *
   * @param {string} pokemon_name - Pokémon desejado.
   * 
   * @param {float} SIMILARITY_PERCENTAGE - A similaridade mínima entre
   * o nome digitado do Pokémon e o nome real do Pokémon desejado.
   *
   * Valores variam de 0.0 até 1.0.
   *
   * @returns {[pokemon_name1: string, pokemon_name2: string, ...strings]} Pokémons possíveis.
   */
  get_possible_pokemon(pokemon_name, SIMILARITY_PERCENTAGE=0.5)
  {
    /*
      Evita buscar o Pokémon por toda Pokédex
      caso o usuário tenha escrito o nome corretamente.
    */
    let match_total = this.get_pokemon_by_name(pokemon_name);

    if (match_total !== null)
    {
      return [match_total];
    }

    let possible_pokemons = [];

    /*
      Calcula o quão similar é o nome do Pokémon em relação
      aos outros presentes na Pokédex.
    */
    for (let pokemon in this.pokemons)
    {
      let similarity = strings_similarity(pokemon_name, pokemon);

      if (similarity >= SIMILARITY_PERCENTAGE)
      {
        possible_pokemons.push(pokemon);
      }
    }

    // Retorna apenas as sugestões mais plausíveis.
    return possible_pokemons.length == 0 ? null : possible_pokemons;
  }
}