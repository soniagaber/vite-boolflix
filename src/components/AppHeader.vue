<script>
import{store} from "../store.js";
export default{
    name: "AppHeader",
    data(){
        return{
            store,
        }
    }
}</script>
<template>
    <input type="text" v-model="store.ricerca">
    <button @click="$emit('cercaFilm'), $emit('cercaSerie'), $emit('noRisultati')" > ok </button>
</template>
<style lang="scss" scoped></style>