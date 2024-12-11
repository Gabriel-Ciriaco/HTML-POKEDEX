window.onload = () => {
  let INITIAL_GEN = 1;
  let CUR_GEN = 1;
  let NEW_QTD_POKE = 11;

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
    CUR_GEN = MAX_POKEMONS;

    for (let i = INITIAL_GEN; i <= MAX_POKEMONS; i++)
      {
        let pokemon = POKEDEX.get_pokemon_by_id(i);
        
        let nome_pokemon = pokemon.name;
        let image_src = pokemon.image.hires;
        let num_pokemon = String(i).padStart(4, '0');


        let div = document.createElement('div');
        div.className = 'item_repeat';
        
        let title = document.createElement("h3");
        title.textContent = `${num_pokemon} ${nome_pokemon}`; 
        
        let image = document.createElement("img");
        image.className = "imageHome";
        image.src = image_src;

        let link = document.createElement("a");
        link.href = `pesquisa.html?pokemon_name=${pokemon.name}`;

        link.appendChild(image);

        div.appendChild(title);
        div.appendChild(link);

        container.appendChild(div);
      }
    }
    
    function captureGeneration() {
      // Captura o valor selecionado
      let selectedValue = parseInt(this.value);

      // Captura o texto visível do item selecionado
      //const selectedText = selectElement.options[selectElement.selectedIndex].text;
      
      // Exibe o valor e o texto no console
      console.log(`Valor Selecionado: ${selectedValue}`);
      // console.log(`Texto Selecionado: ${selectedText}`);
      INITIAL_GEN = selectedValue;

      displayPokemons(selectedValue);
      
      // Exemplo de uso da variável
      //alert(`Você selecionou: ${selectedText} (Geração ${generation})`);
    }
    
    let gen_buttons = document.getElementsByClassName("gen");
  
    for (let button of gen_buttons)
    {
      button.addEventListener("click", captureGeneration);
    }

    displayPokemons(CUR_GEN);

    $(".more_pokemons").on("click", () => {
      CUR_GEN += NEW_QTD_POKE;
      displayPokemons(CUR_GEN)
    })

}
