const apiKey = 'XmAo111an2ALGM4JKvRUhc9lvFeGkRhg';

// export default sirve para exportar una función por defecto, es decir, si
// importamos este archivo en otro, no necesitamos especificar el nombre de la
// función que queremos importar, ya que por defecto se importará la función
// getGifs
// Pero ojo, expor default solo puede ser usado una vez por archivo
// si esxportamos alguna funcion mas dentro del mismo archivo, no podremos usar
// export default, tendria que ser solo export
export default async function getGifs({ keyword = 'morty' } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  return await fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { images, title, id } = image;
          const { url } = images.downsized_medium;
          return { title, id, url };
        });
        return gifs;
      }
    });
}
