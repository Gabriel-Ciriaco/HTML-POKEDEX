const QTD_POKEMONS = 100;

for (let i = 0; i < QTD_POKEMONS; i++)
{
    let pokemon = POKEDEX_JSON[i];

    console.log(`${i + 1}. Nome: ${pokemon.nome}, Tipo: ${pokemon.tipo}`);
}