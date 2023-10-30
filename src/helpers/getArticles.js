export const fetchData = async () => {
    try {
        const url = "ln.json";
        const resp = await fetch(url);

        if (!resp.ok) {
            throw new Error(`Error en la solicitud: ${resp.status}`);
        }

        const data = await resp.json();
        return data.articles;
    } catch (error) {
        console.error("Ocurrió un error inesperado", error);
        throw error;
    }
};