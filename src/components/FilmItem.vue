<script>
export default{
    name:"FilmItem",
    data(){
        return{
            stelle:[1,2,3,4,5],
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
            if(lingua=="jn"){
                lingua="jp"
            }
            if(lingua=="zh"){
                lingua="cn"
            }
            if(lingua=="ko"){
                lingua="kr"
            }
            if(lingua==" "){
                lingua="Sconosciuta";
            }

            return lingua;
        },
        classeStellaFilm(voto, indice){
            if(Math.ceil(voto/2)>indice){
                return "fa-solid fa-star";
            }
            else{
                return "fa-regular fa-star";
            }    
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
        Voto: <i v-for="(stella, index) in stelle" :class= classeStellaFilm(film.vote_average,index)></i>
        <br>
        <img :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`" alt="">
        <hr>
    </div>
</template>
<style lang="scss" scoped>
</style>