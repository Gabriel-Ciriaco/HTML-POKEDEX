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

function _closeAllLists(list)
{
  if (list.hasChildNodes())
  {
    list.childNodes.forEach((node) => {
      node.remove();
    })
  }
}

function autocomplete(input, array)
{
  let sugestions = document.querySelector(".sugestoes");

  _closeAllLists(sugestions);

  for (let i = 0; i < array.length; i++)
  {
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

/** TODO: IMPLEMENTAR NOSSA PRÓPRIA FUNÇÃO! */
const getStringMap = (str) => {
  const map = new Map();

  for (let char of str) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  return map;
};

const getCommonCount = (str1, str2) => {
  const map1 = getStringMap(str1);
  const map2 = getStringMap(str2);

  let commonCount = 0;

  for (let k of map1.keys()) {
    if (map2.has(k)) {
      commonCount += Math.min(map1.get(k), map2.get(k));
    }
  }

  return commonCount;
};
/**/