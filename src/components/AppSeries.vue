<script>
import { store } from '../store.js';

export default {
  name: 'AppSeries',
  data (){
    return{
        store,
    }
  }
}
</script>

<template>
    <h1>Series</h1>
    <div v-for="series, index in store.series" :key="index">
        {{ series.name }}
        {{ series.original_name }}
        {{ series.origin_country }}
        {{ series.original_language }}
        {{ series.vote_average }}
        {{ series.vote_count }}
    </div>
</template>

<style lang="scss" scoped>
</style>
