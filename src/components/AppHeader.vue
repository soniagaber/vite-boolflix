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
    <div id="header-container">
        <h1>BOOLFLIX</h1>
        <div id="ricerca-container">
            <input type="text" v-model="store.ricerca" placeholder="Cerca un film o una serie" @keyup.enter="$emit('cercaFilm'), $emit('cercaSerie'), $emit('noRisultati')">
            <button @click="$emit('cercaFilm'), $emit('cercaSerie'), $emit('noRisultati')" > ok </button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #header-container{
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 40px;
        h1{
            color: red;
        }
        input{
            width: 250px;
            padding: 0 10px;
            height: 22px;
            background-color: black;
            border: 1px solid rgba(255, 255, 255, 0.6);
            color: white;
            border-radius: 3px;
        }
        button{
            margin-left: 10px;
            height: 22px;
            width: 25px;
            background-color: red;
            cursor: pointer;
            border-radius: 3px;
            color: white;
            border: none;
        }
    }
</style>