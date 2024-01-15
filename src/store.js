import { reactive } from 'vue';

export const store = reactive({
    searchEndpoint: 'https://api.themoviedb.org/3/movie/550?api_key=469f698fb63250e8075d7a89b63fe70e',
    search: '',
    movies: [],
    series: [],
})