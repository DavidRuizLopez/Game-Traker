export const getGames = async (limit: number = 10) => {
  try {
    const response = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST', // El tipo de petición (GET, POST, etc.)
      headers: {
        'Accept': 'application/json',
        'Client-ID': `${process.env.CLIENT_ID}`,
        'Authorization': `Bearer ${process.env.TOKKEN}`,
      },
      body: JSON.stringify({
        // Aquí se envían los datos en el cuerpo de la petición
        fields: 'name, artworks',
        limit: limit
      }),
    });

    const json = await response.json(); // Convierte la respuesta a JSON
    return json;
  } catch (error) {
    console.error('Error:', error); // Manejo de errores
  }
};