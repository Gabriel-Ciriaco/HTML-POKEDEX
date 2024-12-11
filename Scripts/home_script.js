window.onload = () => {
  let INITIAL_GEN = 1;
  let CUR_GEN = 1;
  let NEW_QTD_POKE = 11;

  function displayPokemonInfo(pokemon_id)
  {
    let pokemon = POKEDEX.get_pokemon_by_id(pokemon_id);
    let nome_pokemon = pokemon.name;
    let image_src = pokemon.image.hires;
    let num_pokemon = String(pokemon_id).padStart(4, "0");

    let div = document.createElement("div");
    div.className = "item_repeat";

    let pokemon_number = document.createElement("h3");
    pokemon_number.className = "pokemon_id";
    pokemon_number.textContent = `Nº: ${num_pokemon}`;

    let title = document.createElement("h3");
    title.className = "pokemon_name";
    title.textContent = nome_pokemon;

    let types = document.createElement("div");
    types.className = "pokemon_types";

    pokemon.type.forEach(type => {
      let type_div = document.createElement("p");
      type_div.className = "pokemon_type";
      type_div.textContent = type;

      $(type_div).css("background-color", pokemon_type_color(type))

      types.appendChild(type_div);
    });

    let image = document.createElement("img");
    image.className = "imageHome";
    image.src = image_src;

    let link = document.createElement("a");
    link.href = `pesquisa.html?pokemon_name=${pokemon.name}`;

    link.appendChild(image);

    div.appendChild(pokemon_number);
    div.appendChild(link);
    div.appendChild(title);
    div.appendChild(types)

    return div;
  }

  function displayPokemons(generation)
  {
    const container = document.querySelector('.container');

    // Limpar as divs.
    if (container.childElementCount > 0)
    {
      while (container.firstChild) {
        container.removeChild(container.lastChild)
      }
    }

    let MAX_POKEMONS = generation + NEW_QTD_POKE;
    if (MAX_POKEMONS >= 1026) MAX_POKEMONS = 1026; // Garantir o limite de pokémons
    CUR_GEN = MAX_POKEMONS;

    for (let i = INITIAL_GEN; i <= MAX_POKEMONS; i++)
      {
        try {
          let pokemon_div = displayPokemonInfo(i);
          container.appendChild(pokemon_div);
        }
        catch (error) {
          console.error(`[DISPLAY_POKEMON]: ${error}`);
        }

      }
    }
    
    function captureGeneration() {
      // Captura o valor selecionado
      let selectedValue = parseInt(this.value);

      INITIAL_GEN = selectedValue;

      displayPokemons(selectedValue);
    }
    
    let gen_buttons = document.getElementsByClassName("gen");
  
    for (let button of gen_buttons)
    {
      button.addEventListener("click", captureGeneration);
    }

    displayPokemons(CUR_GEN);

    $(".more_pokemons").on("click", () => {
      CUR_GEN += (NEW_QTD_POKE+2);
      displayPokemons(CUR_GEN)
    })

}
