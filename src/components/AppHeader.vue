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
    <h1>Header</h1>
</template>

<style lang="scss" scoped>
</style>
