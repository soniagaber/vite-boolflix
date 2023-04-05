<script>
export default{
    name:"TendenzaItem",
    data(){
        return{
            stelle:[1,2,3,4,5]
        }
    },
    props:{
        tendenza: Object,
    },
    methods:{
        bandiera(){
            let lingua=this.tendenza.original_language;
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
        classeStellaTendenza(voto, indice){
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
    <div id="container">
        <div id="cover-layover">
        <div id="info">
            Titolo: {{ tendenza.title }}
            <br>
            Titolo Originale: {{ tendenza.original_title }}
            <br>
            Lingua: <span :class="`fi fi-${bandiera()}`"></span>
            <br>
            Voto:<i v-for="(stella, index) in stelle" :class= classeStellaTendenza(tendenza.vote_average,index)></i>
            <br>
            <br>
            {{ tendenza.overview }}
        </div>
        </div>
            <img :src="`https://image.tmdb.org/t/p/w342${tendenza.poster_path}`" alt="">
    </div>
</template>
<style lang="scss" scoped>
#info{
    position: absolute;
    display: none;
    margin: 20px;
}
#container{
    position: relative;
    height: 467px;
    width: 342px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1.5px solid white;
    overflow: hidden;
    &:hover{
        cursor: pointer;
        &:hover #cover-layover{
            display: block;
            &:hover #info{
            display: block;
        }
        }
    }
}
#cover-layover{
    border-radius: 6px;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: black;
    display: none;
    border: 1.5px solid white;
    overflow-y: auto;
}

img{
    border-radius: 6px;
    object-fit: cover;
}

</style>