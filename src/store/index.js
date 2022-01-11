import { createStore } from "vuex";
import axios from "axios";
export default createStore({
// Store States
  state: {
    pokemon: [],
    _1stsinglePokemon: [],
    _2ndsinglePokemon: [],
    _3rdsinglePokemon: [],
    _4thsinglePokemon: [],
    _5thsinglePokemon: [],
  },
// These Actions will be trigger when we call them from component to perform something 
  actions: {
    async fetchPokemon({commit}) {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
      // commit is used to send the data to mutation 
      commit("setPokemon", response?.data?.results);
    },

    async Get1stPokemonsDetails({commit}){
      for (var i=0; i<10; i++){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i+1}/`)
        commit("set1stPokemon",response.data.sprites.versions['generation-i']['red-blue'].front_default);
      } 
    },

    async Get2ndPokemonsDetails({commit}){
      for (var i=0; i<10; i++){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i+1}/`)
        commit("set2ndPokemon",response.data.sprites.versions['generation-ii']['crystal'].front_default);
      } 
    },

    async Get3rdPokemonsDetails({commit}){
      for (var i=0; i<10; i++){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i+1}/`)
        commit("set3rdPokemon",response.data.sprites.versions['generation-iii']['emerald'].front_default);
      } 
    },

    async Get4thPokemonsDetails({commit}){
      for (var i=0; i<10; i++){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i+1}/`)
        commit("set4thPokemon",response.data.sprites.versions['generation-iv']['diamond-pearl'].front_default);
      } 
    },

    async Get5thPokemonsDetails({commit}){
      for (var i=0; i<10; i++){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i+1}/`)
        commit("set5thPokemon",response.data.sprites.versions['generation-v']['black-white'].front_default);
      } 
    },
  },
// Mutations are used as reducers to update the data of state
  mutations: {
    setPokemon: (state, pokemons) => (state.pokemon = pokemons),
    set1stPokemon: (state, _1stsinglePokemon) => (state._1stsinglePokemon.push(_1stsinglePokemon)),
    set2ndPokemon: (state, _2ndsinglePokemon) => (state._2ndsinglePokemon.push(_2ndsinglePokemon)),
    set3rdPokemon: (state, _3rdsinglePokemon) => (state._3rdsinglePokemon.push(_3rdsinglePokemon)),
    set4thPokemon: (state, _4thsinglePokemon) => (state._4thsinglePokemon.push(_4thsinglePokemon)),
    set5thPokemon: (state, _5thsinglePokemon) => (state._5thsinglePokemon.push(_5thsinglePokemon)),
  },
});