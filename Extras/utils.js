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