<template>
 <div class="main">
   <div v-for="(singlepoke, index) in allPokemons" :key="index" class="inner">
     <p>{{singlepoke.name}}</p>
     <img :src="allSinglePokemons[index]['generation-ii']['crystal'].front_default" alt="">
   </div>
</div>
</template>

<script>
import { mapGetters} from 'vuex'
export default {
  name: "Pokemon2",
  computed: mapGetters(['allPokemons', 'allSinglePokemons']),
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
