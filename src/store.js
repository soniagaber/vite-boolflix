import {reactive} from "vue";
export const store = reactive({
    film:[],
    serie:[],
    tendenza:[],
    ricerca:"",
    messaggio:"",
    baseApi:"https://api.themoviedb.org/3/",
    tipoApi:" ",
    chiaveApi:"?api_key=5633e65f475390e7a8648cd7878774bf",
    fineApi:"",

});