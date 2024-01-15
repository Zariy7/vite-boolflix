<script>
import { store } from '../store.js';
import Card from './Card.vue';

export default {
  name: 'AppSeries',
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
    <h1>Series</h1>
    <div class="d-flex">
      <div class="row">
        <Card v-for="series, index in store.seriesNew" :key="index" :card="series" />
      </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
