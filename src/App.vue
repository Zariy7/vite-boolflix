<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components:{
    AppHeader,
    AppMain,
  },
  data (){
    return{
        store,
    }
  },
  methods:{
    getMovies(){
      let moviesSearch = `${store.moviesEndpoint}`+`${store.search}`;
      console.log(moviesSearch);

      axios.get(moviesSearch).then((response) =>{
        store.movies = response.data.results;
        console.log(store.movies);
      })
    },
    getSeries(){
      let seriesSearch = `${store.seriesEndpoint}`+`${store.search}`;
      axios.get(seriesSearch).then((response) =>{
        store.series = response.data.results;
        console.log(store.series);
      })
    }
  },
}
</script>

<template>
  <AppHeader @search="getMovies(); getSeries()"/>
  <AppMain />
</template>

<style lang="scss">
@use './styles/generals.scss';

</style>
