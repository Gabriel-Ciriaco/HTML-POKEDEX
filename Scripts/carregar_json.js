var POKEDEX = {};

for (let i = 0; i < POKEDEX_JSON.length; i++)
{
  let poke_name = POKEDEX_JSON[i].name.english;
  POKEDEX[poke_name] = POKEDEX_JSON[i];
}
