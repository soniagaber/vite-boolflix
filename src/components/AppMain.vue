<script>
import { store } from '../store.js';
import FilmItem from './FilmItem.vue';
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default{
    name: "AppMain",
    data(){
        return{
            store,
        }
    },
    components:{
        FilmItem,
    },
}</script>
<template>
    <ul id="film-container" v-if="store.film.length > 0">
        <FilmItem v-for="fil in store.film" :film="fil" class="film"></FilmItem>
    </ul>
    <div v-else>
        Ricerca un film
    </div>
</template>
<style lang="scss" scoped></style>