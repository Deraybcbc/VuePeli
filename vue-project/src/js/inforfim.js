import { onMounted, reactive, ref } from 'vue';
import * as coms from '@/communicationManager/communicationManager.js'

export function infoFilms(props, emit) {

    const selectFilmA = reactive({ data: props.peliculas })


    function selectFilm() {
        console.log("Hijo: ", selectFilmA);

        emit('film', selectFilmA);
    }

    return {
        selectFilmA,
        selectFilm
    }
}