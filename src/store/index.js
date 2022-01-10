import { createStore } from "vuex";
import axios from "axios";
export default createStore({
// Store States
  state: {
    pokemon: [],
    singlePokemon: [],
  },
// Due to getters we can get data from store on different components
  getters: {
    allPokemons: (state) => state.pokemon,
    allSinglePokemons: (state) => state.singlePokemon,
  },
// These Actions will be trigger when we call them from component to perform something 
  actions: {
    async fetchPokemon({commit}) {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
      // commit is used to send the data to mutation 
      commit("setPokemon", response?.data?.results);
    },

    async GetPokemonsDetails({commit}){
      for (var i=0; i<10; i++){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i+1}/`)
        commit("setSinglePokemon",response.data.sprites.versions);
      } 
    }
  },
// Mutations are used as reducers to update the data of state
  mutations: {
    setPokemon: (state, pokemons) => (state.pokemon = pokemons),
    setSinglePokemon: (state, singlePokemon) => (state.singlePokemon.push(singlePokemon))
  },

  modules: {},
});