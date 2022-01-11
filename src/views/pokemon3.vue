<template>
  <div class="main">
   <div v-for="(singlepoke, index) in pokemon" :key="index" class="inner">
     <p>{{singlepoke.name}}</p>
     <img :src="_3rdsinglePokemon[index]" alt="">
   </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: "Pokemon3",
  computed: mapState(['pokemon', '_3rdsinglePokemon']),
  methods: {
    ...mapActions([ 'Get3rdPokemonsDetails']),
  },
  created() {
    if(this._3rdsinglePokemon.length == 0){
    this.Get3rdPokemonsDetails();
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
