<script>
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";
import {store} from "./store.js";
import axios from "axios";

export default {
  data(){
    return{
      store,
    };
  },
  components: {
    AppMain,
    AppHeader,
  },
  created(){
    },
  methods:{
    cercaFilm(){
      this.store.tipoApi="search/movie";
      this.store.fineApi="&query="+this.store.ricerca;
      console.log(this.store.baseApi+this.store.tipoApi+this.store.chiaveApi+this.store.fineApi);
      axios.get(this.store.baseApi+this.store.tipoApi+this.store.chiaveApi+this.store.fineApi).then((res)=>{
        console.log(res.data.results);
        this.store.film=res.data.results;
      });
    },
    cercaSerie(){
      this.store.tipoApi="search/tv";
      this.store.fineApi="&query="+this.store.ricerca;
      console.log(this.store.baseApi+this.store.tipoApi+this.store.chiaveApi+this.store.fineApi);
      axios.get(this.store.baseApi+this.store.tipoApi+this.store.chiaveApi+this.store.fineApi).then((res)=>{
        console.log(res.data.results);
        this.store.serie=res.data.results;
      });
    },
    noRisultati(){
      if (this.store.film.length ==0 && store.serie.length == 0 && this.store.ricerca!=''){
        this.store.messaggio="Nessun film o serie trovata"
      }
        
  
    }
  }
}
</script>

<template>
  <AppHeader @cercaFilm="cercaFilm()" @cercaSerie="cercaSerie()" @noRisultati="noRisultati()"></AppHeader>
  <AppMain></AppMain>
  
</template>

<style scoped>
</style>