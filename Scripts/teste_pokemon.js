let search_pokemon = document.getElementById("search_pokemon");
let image_pokemon = document.getElementById("pokemon_imagem");
let desc_pokemon = document.getElementById("poke_descricao");
let name_pokemon = document.getElementById("poke_nome");
let dados_pokemon = document.getElementById("poke_dados");

var POKEDEX = new Pokedex(POKEDEX_JSON);


search_pokemon.addEventListener("input", (event) => {
  let desired_pokemon = document.getElementById("pokemon_pesquisado");

  let pokemons_encontrados = POKEDEX.get_possible_pokemon(desired_pokemon.value);

  if (pokemons_encontrados !== null)
  {
    autocomplete(desired_pokemon, pokemons_encontrados);
  }
})

search_pokemon.addEventListener("submit", (event) => {
  event.preventDefault(); // Autoexplicativo

  let desired_pokemon = document.getElementById("pokemon_pesquisado").value;

  let pokemons_encontrados = POKEDEX.get_possible_pokemon(desired_pokemon);

  let eh_Valido = true;
  // Validar aqui os elementos
  if (pokemons_encontrados == null && !/^\d+$/.test(desired_pokemon)) eh_Valido = false;

  if (!eh_Valido)
  {
    alert("Não foi possível encontrar esse Pokémon.");
    return false;
  } 
  else
  {
    let pokemon = null;
  
    if (/^\d+$/.test(desired_pokemon))
    {
      pokemon = POKEDEX.get_pokemon_by_id(desired_pokemon);
    }
    else if (POKEDEX.get_pokemon_by_name(desired_pokemon) !== null)
    {
      pokemon = POKEDEX.get_pokemon_by_name(desired_pokemon);
    }
    else
    {
      pokemon = POKEDEX.get_pokemon_by_name(pokemons_encontrados[0]);
    }

    display_pokeInfo_to_tag(pokemon.image.hires, image_pokemon, "image");
    display_pokeInfo_to_tag(pokemon.description, desc_pokemon);
    display_pokeInfo_to_tag(pokemon.name, name_pokemon);

    dados_pokemon.hidden = true;

    let pre_evol = document.getElementById("pre_evolucao");
    let prox_evol = document.getElementById("prox_evolucao");

    pre_evol.hidden = true;
    prox_evol.hidden = true;

    try
    {
      dados_pokemon.hidden = false;

      let pokemon_pre = pokemon.get_evolution("prev"); // O Pokémon possui pré-evolução
      let pokemon_prox = pokemon.get_evolution("next"); // O Pokémon possui evolução(ões)

      if (pokemon_pre !== null) {
        pre_evol.hidden = false;
        display_pokeInfo_to_tag(pokemon_pre.name, pre_evol.children[1]);
      }

      if (pokemon_prox !== null) {
        prox_evol.hidden = false;
        display_pokeInfo_to_tag(pokemon_prox[0].name, prox_evol.children[1]);
      }
    }
    catch (error)
    {
      console.error(`GET_EVOLUTION: ${error}`);
    }

    return true;
  }
});
