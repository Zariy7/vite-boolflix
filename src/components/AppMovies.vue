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
    <div class="d-flex">
      <div class="row">
        <Card v-for="movie, index in store.moviesNew" :key="index" :card="movie" />
      </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
