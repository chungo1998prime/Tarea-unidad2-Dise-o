const getData = async ({ url }) => {
    try {
        const response = await fetch(url);
        
        if (response.status !== 200) {
            throw new Error('Error al obtener los datos');
        }
        
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.log(error);
        throw error; 
    }
};