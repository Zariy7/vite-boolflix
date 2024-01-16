<script>
import { store } from '../store.js';
import Card from './Card.vue';

export default {
  name: 'AppMovies',
  components:{
    Card
  },
  data (){
    return{
        store,
    }
  }
}
</script>

<template>
    <h1>Movies</h1>
    <div v-if="store.moviesNew.length != 0">
      <div class="d-flex">
        <div class="row w-100">
          <Card v-for="movie, index in store.moviesNew" :key="index" :card="movie" />
        </div>
      </div>
    </div>
    <div v-else>
      <h3>Nothing was found!</h3>
    </div>
</template>

<style lang="scss" scoped>
</style>
