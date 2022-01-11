<template>
  <div class="main">
   <div v-for="(singlepoke, index) in pokemon" :key="index" class="inner">
     <p>{{singlepoke.name}}</p>
     <img :src="_5thsinglePokemon[index]" alt="">
   </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {  
  name: "Pokemon5",
  computed: mapState(['pokemon', '_5thsinglePokemon']),
  methods: {
    ...mapActions([ 'Get5thPokemonsDetails']),
  },
  created() {
    if(this._5thsinglePokemon.length == 0){
    this.Get5thPokemonsDetails();
    }
  },
};
</script>

<style scoped>
.main{
  display: flex;
  flex-direction: row;
  margin: 50px;
}
.inner{
  width: 150px;
  border: 1px solid black;
  margin: 20px ;
}
</style>
