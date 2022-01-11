<template>
 <div class="main">
   <div v-for="(singlepoke, index) in pokemon" :key="index" class="inner">
     <p>{{singlepoke.name}}</p>
     <img :src="_2ndsinglePokemon[index]" alt="">
   </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: "Pokemon2",
  computed: mapState(['pokemon', '_2ndsinglePokemon']),
  methods: {
    ...mapActions([ 'Get2ndPokemonsDetails']),
  },
  created() {
    if(this._2ndsinglePokemon.length == 0){
    this.Get2ndPokemonsDetails();
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
