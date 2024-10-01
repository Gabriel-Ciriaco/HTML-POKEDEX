
let search_pokemon = document.getElementById("search_pokemon");
let image_pokemon = document.getElementById("pokemon_imagem");
let desc_pokemon = document.getElementById("poke_descricao");
let name_pokemon = document.getElementById("poke_nome");
let dados_pokemon = document.getElementById("poke_dados");

search_pokemon.addEventListener("submit", (event) => {
  event.preventDefault(); // Autoexplicativo

  let desired_pokemon = document.getElementById("pokemon_pesquisado").value;

  let pokemons_encontrados = procurar_pokemon(desired_pokemon);

  let eh_Valido = true;
  // Validar aqui os elementos
  if (pokemons_encontrados == undefined) eh_Valido = false;

  if (!eh_Valido)
  {
    alert("Não foi possível encontrar esse Pokémon.");
    return false;
  }
  else
  {
    let pokemon = POKEDEX[pokemons_encontrados[0]];

    image_pokemon.src = pokemon.image.hires;
    desc_pokemon.textContent = pokemon.description;
    name_pokemon.textContent = pokemon.name.english;

    dados_pokemon.hidden = true;


    if (!is_object_empty(pokemon.evolution))
    {
      dados_pokemon.hidden = false;

      let pre_evol = document.getElementById("pre_evolucao");
      let prox_evol = document.getElementById("prox_evolucao");

      pre_evol.hidden = true;
      prox_evol.hidden = true;

      if (!is_object_empty(pokemon.evolution.prev))
      {
        let pokedex_id = pokemon.evolution.prev[0];
        let level_necessario = pokemon.evolution.prev[1];

        let pokemon_name = POKEDEX_JSON[pokedex_id - 1].name.english;

        pre_evol.hidden = false;

        pre_evol.children[1].textContent = pokemon_name;

        console.log("Evolução anterior: ", pokemon_name);
      }

      // TODO: Arrumar estrutura da next evolution.
      if (!is_object_empty(pokemon.evolution.next))
      {
        let pokedex_id = pokemon.evolution.next[0][0];
        let level_necessario = pokemon.evolution.next[0][1];

        let pokemon_name = POKEDEX_JSON[pokedex_id - 1].name.english;

        prox_evol.hidden = false;
        prox_evol.children[1].textContent = pokemon_name;

        console.log("Próxima evolução: ", pokemon_name);
      }
    }

    return true;
  }
});


