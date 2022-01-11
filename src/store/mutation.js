// Mutations are used as reducers to update the data of state
export default {
    setPokemon: (state, pokemons) => (state.pokemon = pokemons),
    set1stPokemon: (state, _1stsinglePokemon) => (state._1stsinglePokemon.push(_1stsinglePokemon)),
    set2ndPokemon: (state, _2ndsinglePokemon) => (state._2ndsinglePokemon.push(_2ndsinglePokemon)),
    set3rdPokemon: (state, _3rdsinglePokemon) => (state._3rdsinglePokemon.push(_3rdsinglePokemon)),
    set4thPokemon: (state, _4thsinglePokemon) => (state._4thsinglePokemon.push(_4thsinglePokemon)),
    set5thPokemon: (state, _5thsinglePokemon) => (state._5thsinglePokemon.push(_5thsinglePokemon)),
  }