window.onload = () => {
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

    let MAX_POKEMONS = generation + 15;

    for (let i = generation; i <= MAX_POKEMONS; i++)
      {
        let pokemon = POKEDEX.get_pokemon_by_id(i);
        
        let nome_pokemon = pokemon.name;
        let image_src = pokemon.image.hires;

        let div = document.createElement('div');
        div.className = 'item_repeat';
        
        let title = document.createElement("h3");
        title.textContent = nome_pokemon;

        let image = document.createElement("img");
        image.className = "imageHome";
        image.src = image_src;

        let link = document.createElement("a");
        link.href = `index.html?pokemon_name=${pokemon.name}`;

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

      displayPokemons(selectedValue);
      
      // Exemplo de uso da variável
      //alert(`Você selecionou: ${selectedText} (Geração ${generation})`);
    }
    
    let gen_buttons = document.getElementsByClassName("gen");
  
    for (let button of gen_buttons)
    {
      button.addEventListener("click", captureGeneration);
    }

    displayPokemons(1);

}
