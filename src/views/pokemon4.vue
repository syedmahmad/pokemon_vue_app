<template>
  <div class="main">
   <div v-for="(singlepoke, index) in pokemon" :key="index" class="inner">
     <p>{{singlepoke.name}}</p>
     <img :src="_4thsinglePokemon[index]" alt="">
   </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: "Pokemon4",
  computed: mapState(['pokemon', '_4thsinglePokemon']),
  methods: {
    ...mapActions([ 'Get4thPokemonsDetails']),
  },
  created() {
    if(this._4thsinglePokemon.length == 0){
    this.Get4thPokemonsDetails();
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
