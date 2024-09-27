/**
 * Procura na Pokédex os possíveis Pokémons dado um nome.
 * 
 * @param {string} nome_pokemon - Pokémon desejado.
 * 
 * @returns {array} Pokémons possíveis.
 */
function procurar_pokemon(nome_pokemon)
{
  /*
    Evita buscar o Pokémon por toda Pokédex
    caso o usuário tenha escrito o nome corretamente.
  */
  if (POKEDEX[nome_pokemon] != undefined)
  {
    return [nome_pokemon];
  }

  let possiveis_pokemons = [];

  /*
    Calcula o quão similar é o nome do Pokémon em relação
    aos outros presentes na Pokédex.
  */
  for (pokemon in POKEDEX)
  {
    let similaridade = strings_similarity(nome_pokemon, pokemon);

    const QUAO_IGUAL = 0.6;

    if (similaridade >= QUAO_IGUAL)
    {
      possiveis_pokemons.push(pokemon);
    }
  }

  // Retorna apenas as sugestões mais plausíveis.
  return possiveis_pokemons.length == 0 ? undefined : possiveis_pokemons;
}
