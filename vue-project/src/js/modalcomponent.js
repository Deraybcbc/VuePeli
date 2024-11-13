import { onMounted, reactive, ref } from 'vue';
import * as coms from '@/communicationManager/communicationManager.js'

export function modal(props) {

    const peliID = reactive(props.peli);


    return {

        peliID
    }
}