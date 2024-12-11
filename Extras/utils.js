/**
 * Disponibiliza uma informação do Pokémon numa tag desejada.
 * 
 * @param {object} poke_info - A informação do Pokémon.
 * @param {HTMLElement} tag - Uma tag HTML na qual a informação aparecerá.
 * @param {("text"|"image"|"progress")} tag_type - O tipo de conteúdo dessa tag.
 */
function display_pokeInfo_to_tag(poke_info, tag, tag_type = "text")
{
  try
  {
    switch (tag_type) {
      case "text":
        tag.textContent = poke_info;
        break;

      case "image":
        tag.src = poke_info;
        break;

      case "progress":
        tag.value = poke_info;
        break;
    }
  }
  catch (error)
  {
    console.error(`DISPLAY_ERROR: ${error}`);
  }
}

/**
 * Remove todos os elementos de uma lista.
 * 
 * @param {HTMLElement} list - Uma tag do tipo <ul>.
 */
function _closeAllLists(list)
{
  if (list.childElementCount > 0)
  {
    while (list.firstChild) {
      list.removeChild(list.lastChild)
    }
  }
}

/**
 * Cria e adiciona items a uma lista HTML de classe ".sugestoes".
 * 
 * @param {HTMLElement} input - Uma tag do tipo <input>.
 * @param {Array} array - Um array contendo os possíveis valores do Input.
 */
function autocomplete(input, array)
{
  let sugestions = document.querySelector(".sugestoes");

  _closeAllLists(sugestions);

  for (let i = 0; i < array.length; i++)
  {
    // Cria o elemento caso a lista esteja vazia.
    if (sugestions.childNodes[i] === undefined)
    {
      let new_sugestion = document.createElement("li");
      new_sugestion.textContent = array[i];

      sugestions.appendChild(new_sugestion);
    }
    else
    {
      sugestions.childNodes[i].textContent = array[i];
    }

    // Implementa o evento de clique num elemento da lista.
    sugestions.childNodes[i].addEventListener("click", function (e) {
      input.value = array[i];
      // Limpamos a lista duas vezes a fim de evitar um bug com o evento input
      _closeAllLists(sugestions);
      // Create the event
      input.parentElement.dispatchEvent(new CustomEvent("submit"));
    });
  }
}

/**
 * Muda a cor do fundo de acordo com o tipo do Pokémon.
 * 
 * @param {string} pokemon_type - O tipo do Pokémon
 * 
 * @returns {string}
 */
function pokemon_type_color(pokemon_type)
{
  switch (pokemon_type) {
    case "Normal":
      return "#aaaa99";

    case "Fogo":
      return "#ff4422";

    case "Água":
      return "#3399ff";

    case "Elétrico":
      return "#fcca31";

    case "Grama":
      return "#77cc55";

    case "Gelo":
      return "#66ccff";

    case "Lutador":
      return "#ba5544";

    case "Venenoso":
      return "#a95598";

    case "Terra":
      return "#ddbb55";

    case "Voador":
      return "#8899ff";

    case "Psíquico":
      return "#fe5598";

    case "Inseto":
      return "#a7b821";

   case "Rocha":
    return "#bbaa66";

    case "Fantasma":
      return "#6666bb";

    case "Dragão":
      return "#7766ee";

    case "Sombrio":
      return "#775544";

    case "Metal":
      return "#aaaabb";

    case "Fada":
      return "#ee99ee";

  }
}
