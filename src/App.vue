<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue"
import { mapActions } from 'vuex'

export default {
  components: {
    Header,
  },
  methods: {
    ...mapActions(['fetchPokemon']),
  },
  created() {
    this.fetchPokemon();
  },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
img{
  display: inline-flex !important;
}
</style>
