
let search_pokemon = document.getElementById("search_pokemon");
let image_pokemon = document.getElementById("pokemon_imagem");
let desc_pokemon = document.getElementById("poke_descricao");

search_pokemon.addEventListener("submit", (event) => {
  event.preventDefault(); // Autoexplicativo

  let desired_pokemon = document.getElementById("pokemon_pesquisado").value;

  let pokemon = POKEDEX[desired_pokemon];

  let eh_Valido = true;
  // Validar aqui os elementos
  if (pokemon == undefined) eh_Valido = false;

  if (!eh_Valido)
  {
    alert("Não foi possível encontra esse Pokémon.");
    return false;
  }
  else
  {
    image_pokemon.src = pokemon.image.thumbnail;
    desc_pokemon.textContent = pokemon.description;
    return true;
  }
});


