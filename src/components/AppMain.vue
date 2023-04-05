<script>
import { store } from '../store.js';
import FilmItem from './FilmItem.vue';
import SerieItem from './SerieItem.vue';
import TendenzaItem from './TendenzaItem.vue';
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
        TendenzaItem,
    },
}
</script>
<template>
    
    <ul id="film-container" v-if="store.film.length > 0">
        <h2>Film trovati:</h2>
        <div class="container-items">
            <FilmItem v-for="fil in store.film" :film="fil" class="film"></FilmItem>
        </div>
        
    </ul>
    <ul id="serie-container" v-if="store.serie.length > 0">
        <h2>Serie trovate:</h2>
        <div class="container-items"><SerieItem v-for="ser in store.serie" :serie="ser" class="serie"></SerieItem></div>
    </ul>
    <div v-else-if="store.film.length ==0 && store.serie.length == 0 && this.store.ricerca==''">
        
    </div>
    <div v-else>
        <div id="messaggio">{{ this.store.messaggio }}</div>
    </div>
    <ul id="tendenza-container" v-if="store.film.length ==0 && store.serie.length==0">
        <h2>Di tendenza ora:</h2>
        <div class="container-items">
            <TendenzaItem v-for="tend in store.tendenza" :tendenza="tend" class="tendenza"></TendenzaItem>
        </div>
    </ul>
</template>
<style lang="scss" scoped>
    .container-items{
        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        gap: 15px;
        width: auto;
        overflow-x: auto;
        padding: 1.5em 40px 1em 40px;
    }
    h2{
        padding: 1em 40px 0 40px ;
    }
    #messaggio{
        padding: 2em 40px;
    }
</style>