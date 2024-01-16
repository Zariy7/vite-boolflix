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
      //console.log(moviesSearch);
      store.moviesNew.length = 0;

      axios.get(moviesSearch).then((response) =>{
        store.moviesRaw = response.data.results;

        store.moviesRaw.forEach(movie => {
          let movieObj = {
              title: movie.title,
              ogTitle: movie.original_title,
              ogLang: movie.original_language,
              avgVote: movie.vote_average,
              totVote: movie.vote_count,
              summary: movie.overview,
              image: movie.poster_path
          }
          
          store.moviesNew.push(movieObj);
        });

        //console.log(store.moviesRaw);
        //console.log(store.moviesNew);
      })
    },
    getSeries(){
      let seriesSearch = `${store.seriesEndpoint}`+`${store.search}`;
      //console.log(seriesSearch);
      store.seriesNew.length = 0;

      axios.get(seriesSearch).then((response) =>{
        store.seriesRaw = response.data.results;

        store.seriesRaw.forEach(series => {
          let seriesObj = {
              title: series.name,
              ogTitle: series.original_name,
              ogLang: series.original_language,
              avgVote: series.vote_average,
              totVote: series.vote_count,
              summary: series.overview,
              image: series.poster_path
            }
          
          store.seriesNew.push(seriesObj);
        });
        
        //console.log(store.seriesRaw);
        //console.log(store.seriesNew);
      });
    },
  }
}
</script>

<template>
  <AppHeader @search="getMovies(); getSeries()"/>
  <AppMain />
</template>

<style lang="scss">
@use './styles/generals.scss';

</style>
