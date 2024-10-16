let search_pokemon = document.getElementById("search_pokemon");
let image_pokemon = document.getElementById("pokemon_imagem");
let desc_pokemon = document.getElementById("poke_descricao");
let name_pokemon = document.getElementById("poke_nome");
let dados_pokemon = document.getElementById("poke_dados");

var POKEDEX = new Pokedex(POKEDEX_JSON);

search_pokemon.addEventListener("submit", (event) => {
  event.preventDefault(); // Autoexplicativo

  let desired_pokemon = document.getElementById("pokemon_pesquisado").value;

  let pokemons_encontrados = POKEDEX.get_possible_pokemon(desired_pokemon);

  let eh_Valido = true;
  // Validar aqui os elementos
  if (pokemons_encontrados == null) eh_Valido = false;

  if (!eh_Valido) {
    alert("Não foi possível encontrar esse Pokémon.");
    return false;
  } else
  {
    let pokemon = null;

    if (POKEDEX.get_pokemon_by_name(desired_pokemon) !== null)
    {
      pokemon = POKEDEX.get_pokemon_by_name(desired_pokemon);
    }
    else
    {
      pokemon = POKEDEX.get_pokemon_by_name(pokemons_encontrados[0]);
    }


    image_pokemon.src = pokemon.image.hires;
    desc_pokemon.textContent = pokemon.description;
    name_pokemon.textContent = pokemon.name;

    dados_pokemon.hidden = true;

    let pre_evol = document.getElementById("pre_evolucao");
    let prox_evol = document.getElementById("prox_evolucao");

    pre_evol.hidden = true;
    prox_evol.hidden = true;

    // O Pokémon possui pré-evolução
    if (pokemon.evolution.prev !== undefined)
    {
      let pokemon_pre = POKEDEX.get_pokemon_by_id(pokemon.evolution.prev.pokemon_id);

      dados_pokemon.hidden = false;
      pre_evol.hidden = false;

      pre_evol.children[1].textContent = pokemon_pre.name;
    }

    // O Pokémon possui evolução
    if (pokemon.evolution.next !== undefined)
    {
      let pokemon_prox = POKEDEX.get_pokemon_by_id(pokemon.evolution.next[0].pokemon_id);

      dados_pokemon.hidden = false;
      prox_evol.hidden = false;

      prox_evol.children[1].textContent = pokemon_prox.name;
    }

    return true;
  }
});
