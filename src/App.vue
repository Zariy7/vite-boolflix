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
    getCredits(type, id){
      let credits = [];

      axios.get(`https://api.themoviedb.org/3/` + `${type}` + `/` + `${id}` + `/credits?api_key=469f698fb63250e8075d7a89b63fe70e`).then((response) =>{
        for(let i = 0; i<response.data.cast.length; i++){
          if(response.data.cast[i].known_for_department === "Acting"){
            credits.push(response.data.cast[i].name);
          }
        }
      })

      return credits;
    },
    getMedia(mediaType){
      let media = mediaType;
      //console.log(store.media);
      let mediaSearch = `${media.endpoint}`+`${store.search}`;
      media.new.length = 0;

      axios.get(mediaSearch).then((response) =>{
        media.raw = response.data.results;

        media.raw.forEach(elem => {
          let mediaObj = {
              title: elem.name || elem.title,
              ogTitle: elem.original_name || elem.original_title,
              ogLang: elem.original_language,
              avgVote: elem.vote_average,
              totVote: elem.vote_count,
              summary: elem.overview,
              image: elem.poster_path,
              genres: elem.genre_ids,
          }

          for(let i = 0; i<mediaObj.genres.length; i++){
            for(let j = 0; j<media.genres.length; j++){
              if(mediaObj.genres[i] == media.genres[j].id){
                mediaObj.genres[i] = media.genres[j].name;
                //console.log(mediaObj.genres[i]);
              }
            }
          }

          if(media.endpoint.includes('/tv?')){
            mediaObj.credits = this.getCredits('tv', elem.id);
          }
      
          if(media.endpoint.includes('/movie?')){
            mediaObj.credits = this.getCredits('movie', elem.id);
          }

          //console.log(mediaObj);
          media.new.push(mediaObj);
        });
      });
    },
    
  },
  created(){
    {
      axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=469f698fb63250e8075d7a89b63fe70e').then((response) =>{
        store.media.movies.genres = response.data.genres;
        //console.log(store.media.movies.genres);
      });

      axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=469f698fb63250e8075d7a89b63fe70e').then((response) =>{
        store.media.series.genres = response.data.genres;
        //console.log(store.media.series.genres);
      });
    }
  }
}
</script>

<template>
  <AppHeader @search="getMedia(store.media.movies); getMedia(store.media.series)"/>
  <AppMain />
</template>

<style lang="scss">
@use './styles/generals.scss';

</style>
