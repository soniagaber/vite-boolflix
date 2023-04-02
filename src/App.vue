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
    }
  }
}
</script>

<template>

  <AppHeader @cercaFilm="cercaFilm()"></AppHeader>
  <AppMain></AppMain>
  
</template>

<style scoped>
</style>