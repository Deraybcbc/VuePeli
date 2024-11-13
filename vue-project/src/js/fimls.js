import { onMounted, reactive, ref } from 'vue';
import * as coms from '@/communicationManager/communicationManager.js'

export function userFilm() {

    const filmsApi = reactive({ data: [] });
    const nom = ref('');
    const selectFilmID = reactive({ data: {} })




    async function selectFilm(film) {
        try {
            const response = await coms.getPeliById(film.data.imdbID);
            selectFilmID.data = response;
        } catch (error) {
            console.error("Error al obtener detalles de la película:", error);
        }

    }

    // Simulando el comportamiento de `onCreated` al inicializar directamente
    (async () => {
        //filmsApi.data = await coms.getPeliculas(); // Suponiendo que devuelve un array
    })();

    // Función para obtener las películas desde el manager de comunicación
    onMounted(async () => {
        //filmsApi.data = await coms.getPeliculas(); // Suponiendo que devuelve un array
        if (nom.value.trim() !== '') {
            await searchName(nom.value);
        }
        else {
            filmsApi.data = [];
        }

    });

    async function searchName(newTitle) {
        const response = await coms.getPeliByName(newTitle.value);
        console.log("NOMBRE: ", response);

        filmsApi.data = response;
    }


    return {
        filmsApi,
        nom,
        searchName,
        selectFilm,
        selectFilmID
    };
}

