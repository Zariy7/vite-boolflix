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
  <div class="mx-5">
    <AppMovies />
    <AppSeries />
  </div>
</template>

<style lang="scss" scoped>
</style>
