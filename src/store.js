import { reactive } from 'vue';

export const store = reactive({
    search: '',
    moviesEndpoint: 'https://api.themoviedb.org/3/search/movie?api_key=469f698fb63250e8075d7a89b63fe70e&language=it-IT&query=',
    seriesEndpoint: 'https://api.themoviedb.org/3/search/tv?api_key=469f698fb63250e8075d7a89b63fe70e&language=it-IT&query=',
    movies: [],
    series: [],
})