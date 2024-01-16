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
              image: movie.poster_path,
              genres: [],
          }

          store.movieGenres.forEach(genre => {
            if((movie.genre_ids).includes(genre.id)){
              movieObj.genres.push(genre.name);
            }
          });
          
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
              image: series.poster_path,
              genres: [],
            }
          
          store.seriesGenres.forEach(genre => {
            if((series.genre_ids).includes(genre.id)){
              seriesObj.genres.push(genre.name);
            }
          });

          store.seriesNew.push(seriesObj);
        });
        
        //console.log(store.seriesRaw);
        //console.log(store.seriesNew);
      });
    },
  },
  created(){
    {
      axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=469f698fb63250e8075d7a89b63fe70e').then((response) =>{
        store.movieGenres = response.data.genres;
        console.log(store.movieGenres);
      });

      axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=469f698fb63250e8075d7a89b63fe70e').then((response) =>{
        store.seriesGenres = response.data.genres;
        console.log(store.seriesGenres);
      });
    }
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
