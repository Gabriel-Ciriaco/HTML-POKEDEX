/**
 * Disponibiliza uma informação do Pokémon numa tag desejada.
 * 
 * @param {object} poke_info - A informação do Pokémon.
 * @param {HTMLElement} tag - Uma tag HTML na qual a informação aparecerá.
 * @param {("text"|"image")} tag_type - O tipo de conteúdo dessa tag.
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
  if (list.hasChildNodes())
  {
    list.childNodes.forEach((node) => {
      node.remove();
    })
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
      _closeAllLists(sugestions);
      // Create the event
      input.parentElement.dispatchEvent(new CustomEvent("submit"));
    });
  }
}
