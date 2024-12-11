let search_pokemon = document.getElementById("search_pokemon");
let image_pokemon = document.getElementById("pokemon_imagem");
let desc_pokemon = document.getElementById("poke_descricao");
let name_pokemon = document.getElementById("poke_nome");
let dados_pokemon = document.getElementById("poke_dados");


let hp_pokemon = document.getElementById("hp_pokemon");
let ataque_pokemon = document.getElementById("ataque_pokemon");
let defesa_pokemon = document.getElementById("defesa_pokemon");
let ataque_esp_pokemon = document.getElementById("ataque_esp");
let defesa_esp_pokemon = document.getElementById("defesa_esp");
let velocidade_pokemon = document.getElementById("velocidade");

let sugestoes = document.querySelector(".sugestoes");

var POKEDEX = new Pokedex(POKEDEX_JSON);

const search_parameters = new URLSearchParams(window.location.search);

if (!!search_parameters.get("pokemon_name"))
{
  let pokemon_name = search_parameters.get("pokemon_name");
  load_pokemon(pokemon_name, null);
}
else
{
  load_pokemon("Bulbasaur", null);
}



function load_pokemon(desired_pokemon, pokemons_encontrados)
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

  $("#hp_num").html(pokemon.base.HP);
  display_pokeInfo_to_tag(pokemon.base.HP, hp_pokemon, "progress");

  $("#ataque_num").html(pokemon.base.Attack);
  display_pokeInfo_to_tag(pokemon.base.Attack, ataque_pokemon, "progress");

  $("#defesa_num").html(pokemon.base.Defense);
  display_pokeInfo_to_tag(pokemon.base.Defense, defesa_pokemon, "progress");
  
  $("#ataque_esp_num").html(pokemon.base["Sp. Attack"]);
  display_pokeInfo_to_tag(pokemon.base["Sp. Attack"], ataque_esp_pokemon, "progress");
  
  $("#defesa_esp_num").html(pokemon.base["Sp. Defense"]);
  display_pokeInfo_to_tag(pokemon.base["Sp. Defense"], defesa_esp_pokemon, "progress");
  
  $("#velocidade_num").html(pokemon.base.Speed);
  display_pokeInfo_to_tag(pokemon.base.Speed, velocidade_pokemon, "progress");

  let type_color = pokemon_type_color(pokemon.type[0]);

  type_color =
    "rgba(" +
    parseInt(type_color.slice(-6, -4), 16) +
    "," +
    parseInt(type_color.slice(-4, -2), 16) +
    "," +
    parseInt(type_color.slice(-2), 16) +
    ",0.9)";

  $(".div_center").css("background-color", type_color);

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

  _closeAllLists(sugestoes);
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
    load_pokemon(desired_pokemon, pokemons_encontrados);
  }
});

search_pokemon.onkeydown = function () {
  var key = event.keyCode || event.charCode;

  if (key == 8 || key == 46)
  {
    _closeAllLists(sugestoes);
  }
}