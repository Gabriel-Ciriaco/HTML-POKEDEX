
let search_pokemon = document.getElementById("search_pokemon");
let image_pokemon = document.getElementById("pokemon_imagem");
let desc_pokemon = document.getElementById("poke_descricao");

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
    return true;
  }
});


