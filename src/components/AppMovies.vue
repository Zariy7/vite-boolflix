<script>
import { store } from '../store.js';

export default {
  name: 'AppMovies',
  data (){
    return{
        store,
    }
  }
}
</script>

<template>
    <h1>Movies</h1>
    <div v-for="movie, index in store.movies" :key="index">
        {{ movie.title }}
        {{ movie.original_title }}
        {{ movie.original_language }}
        {{ movie.vote_average }}
        {{ movie.vote_count }}
    </div>
</template>

<style lang="scss" scoped>
</style>
