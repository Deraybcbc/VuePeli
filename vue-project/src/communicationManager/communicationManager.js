export async function getPeliculas() {
    try {
        const response = await fetch('https://www.omdbapi.com/?s=Batman&apikey=535d16cc');
        const data = await response.json();

        return data.Search;
    } catch (error) {
        return error
    }
}

export async function getPeliByName(newTitle) {
    try {

        const response = await fetch(`https://www.omdbapi.com/?s=${newTitle}&apikey=535d16cc`);

        // Verifica si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        return data.Search;

    } catch (error) {
        console.error("Error en la solicitud:", error);
        return error;
    }
}

export async function getPeliById(id) {

    console.log("ID MANAGER: ",id);

    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=535d16cc`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = response.json();

        return data;

    } catch (error) {
        console.log(error);
    }

}