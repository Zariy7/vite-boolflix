<script>
import { store } from '../store.js';

export default {
  name: 'AppHeader',
  data (){
    return{
        store,
    }
  }
}
</script>

<template>
    <header>
      <div class="d-flex justify-content-between p-3 bg-black">
        <h1 class="text-danger">Boolflix</h1>
        <div class="d-flex">
          <input type="text" placeholder="Explore media..." class="form-control" v-model="store.search" @keyup.enter="$emit('search')">
          <input type="button" value="Search!" class="btn btn-danger" @click="$emit('search')">
        </div>
      </div>
    </header>
</template>

<style lang="scss" scoped>
</style>
