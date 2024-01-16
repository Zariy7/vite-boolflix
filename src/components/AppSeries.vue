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
    <div v-if="store.media.series.new.length != 0">
      <div class="d-flex">
        <div class="row w-100">
          <Card v-for="series, index in store.media.series.new" :key="index" :card="series" />
        </div>
      </div>
    </div>
    <div v-else>
      <h3>Nothing was found!</h3>
    </div>
</template>

<style lang="scss" scoped>
</style>
