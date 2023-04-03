<script>
import { store } from '../store.js';
import FilmItem from './FilmItem.vue';
import SerieItem from './SerieItem.vue';
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    name: "AppMain",
    data() {
        return {
            store,
        }
    },
    components: {
        FilmItem,
        SerieItem,
    },
}
</script>
<template>
    <ul id="film-container" v-if="store.film.length > 0">
        <h2>Film trovati:</h2>
        <FilmItem v-for="fil in store.film" :film="fil" class="film"></FilmItem>
    </ul>
    <ul id="serie-container" v-if="store.serie.length > 0">
        <h2>Serie trovate:</h2>
        <SerieItem v-for="ser in store.serie" :serie="ser" class="serie"></SerieItem>
    </ul>
    <div v-else-if="store.film.length ==0 && store.serie.length == 0 && this.store.ricerca==''">
        
    </div>
    <div v-else>
        {{ this.store.messaggio }}
    </div>
</template>
<style lang="scss" scoped></style>