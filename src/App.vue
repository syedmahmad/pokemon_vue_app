<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue"
import {mapActions} from 'vuex'
export default {
  components: {
    Header,
  },
  methods: {
    ...mapActions(['fetchPokemon', 'GetPokemonsDetails']),
  },
  created() {
    this.fetchPokemon();
    this.GetPokemonsDetails();
  },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
}
</style>
