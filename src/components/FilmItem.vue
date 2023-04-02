<script>
export default{
    name:"FilmItem",
    data(){
        return{

        }
    },
    props:{
        film: Object
    },
    methods:{
        bandiera(){
            let lingua=this.film.original_language;
            if(lingua=="en"){
                lingua="gb"
            }
            if(lingua==" "){
                lingua="Sconosciuta";
            }

            return lingua;
        }
    }
}
</script>
<template>
    <div>
        Titolo: {{ film.title }}
        <br>
        Titolo Originale: {{ film.original_title }}
        <br>
        Lingua: <span :class="`fi fi-${bandiera()}`"></span>
        <br>
        Voto: {{ film.vote_average }}
        <hr>
    </div>
</template>
<style lang="scss" scoped>
</style>