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
  <AppMovies />
  <AppSeries />
</template>

<style lang="scss" scoped>
</style>
