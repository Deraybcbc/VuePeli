<script setup>
import { defineProps, defineEmits } from 'vue';
import { modal } from '@/js/modalcomponent.js'


const props = defineProps({
    peli: {
        type: Object,
        default: {}
    },
})


const modalInfo = modal(props);


</script>

<template>
    <div class="modal fade" id="modal-info" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="movieModalLabel">{{ modalInfo.peliID.data.Title }}</h5>
                </div>
                <div class="modal-body">
                    <p><b>Year:</b> {{ modalInfo.peliID.data.Year }}</p>
                    <p><b>Genre:</b> {{ modalInfo.peliID.data.Genre }}</p>
                    <p><b>Plot:</b> {{ modalInfo.peliID.data.Plot }}</p>
                    <p><b>Language:</b> {{ modalInfo.peliID.data.Language }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
