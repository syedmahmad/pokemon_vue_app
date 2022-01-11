<template>
<div class="flex flex-row m-12">
   <div v-for="(singlepoke, index) in pokemon" :key="index" class="inner">
     <p>{{singlepoke.name}}</p>
     <img :src="_1stsinglePokemon[index]" alt="">
   </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Pokemon',
  computed: mapState(['pokemon', '_1stsinglePokemon']),
  methods: {
    ...mapActions([ 'Get1stPokemonsDetails']),
  },
  created() {
    if(this._1stsinglePokemon.length == 0){
    this.Get1stPokemonsDetails();
    }
  },
}
</script>

<style scoped>
.inner{
  width: 150px;
  border: 1px solid black;
  margin: 20px ;
}
</style>
