<script>
import { library } from '../../node_modules/@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

export default{
    name:"SerieItem",
    data(){
        return{
            stelle:[1,2,3,4,5]
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
        classeStella(voto, indice){
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
        Titolo: {{ serie.name }}
        <br>
        Titolo Originale: {{ serie.original_name }}
        <br>
        Lingua: <span :class="`fi fi-${bandiera()}`"></span>
        <br>
        Voto:<i v-for="(stella, index) in stelle" :class= classeStella(serie.vote_average,index)></i>
        <br>
        <img :src="`https://image.tmdb.org/t/p/w342${serie.poster_path}`" alt="">
        <hr>
    </div>
</template>
<style lang="scss" scoped>
</style>