<script>
import { store } from '../store.js';
import AppMovies from './AppMovies.vue';
import AppSeries from './AppSeries.vue';

export default {
  name: 'AppMain',
  components: {
    AppMovies,
    AppSeries,
  },
  data (){
    return{
        store,
    }
  }
}
</script>

<template>
    <h1>Main</h1>
    <AppSeries />
    <AppMovies />
</template>

<style lang="scss" scoped>
</style>
