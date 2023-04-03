<script>
export default{
    name:"SerieItem",
    data(){
        return{

        }
    },
    props:{
        serie: Object
    },
    methods:{
        bandiera(){
            let lingua=this.serie.original_language;
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
        Titolo: {{ serie.name }}
        <br>
        Titolo Originale: {{ serie.original_name }}
        <br>
        Lingua: <span :class="`fi fi-${bandiera()}`"></span>
        <br>
        Voto: {{ serie.vote_average }}
        <br>
        <img :src="`https://image.tmdb.org/t/p/w342${serie.poster_path}`" alt="">
        <hr>
    </div>
</template>
<style lang="scss" scoped>
</style>