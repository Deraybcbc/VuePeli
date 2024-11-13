<script setup>
import { infoFilms } from '@/js/inforfim';
import { defineProps, defineEmits } from 'vue';


const props = defineProps({
    peliculas: {
        type: Object,
        default: {}
    }
});

const emit = defineEmits(['film']);

const info = infoFilms(props, emit);

</script>

<template>
    <div class="card" style="width: 18rem;">
        <img :src="peliculas.Poster" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ peliculas.Title }}</h5>
            <p class="card-text"><b>Year: </b>{{ peliculas.Year }}</p>
            <p class="card-text"><b>Type: </b>{{ peliculas.Type }}</p>
            <button class="btn btn-primary btnsInfoPeli" @click="info.selectFilm" data-bs-toggle="modal"
                data-bs-target="#modal-info">
                <i class="bi bi-info-circle"></i>
            </button>
        </div>
    </div>
</template>