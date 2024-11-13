<script setup>
import { userFilm } from '@/js/fimls.js'
import PeliCard from '@/components/FilmComponent.vue'
import ModalInfo from '@/components/ModalComponent.vue'

const film = userFilm();


</script>

<template>
    <div class="container">
        <div class="titulo" style="text-align: center;">
            <h1>Películas</h1>
        </div>
        <div class="input-group mb-3">
            <input type="text" v-model="film.nom.value" placeholder="Nom de la pelicula" class="form-control"
                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                @input="film.searchName(film.nom)">

        </div>

        <div v-if="film.nom.value.trim() !== ''" class="row" style="gap: 3rem;">
            <PeliCard v-for="peli in film.filmsApi.data" :peliculas="peli" :key="peli.imdbID"
                @film="film.selectFilm($event)" />
        </div>

        <div v-else>
            <p>No has ingresado un nombre. Por favor, ingresa el nombre de la película para buscar.</p>
        </div>

    </div>

    <ModalInfo :peli="film.selectFilmID" />
</template>

<style scoped></style>