import React, { useState, useEffect } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

export default function ListOfGifs({ params }) {
  const { keyword } = params;

  // El useState es un hook que nos permite manejar el estado de un componente
  // en React. El primer valor que retorna es el estado actual y el segundo
  // valor es una función que nos permite actualizar el estado.
  const [gifs, setGifs] = useState([]);

  // El useEffect se ejecuta cuando el componente se renderiza por primera vez
  // y cuando el componente se actualiza
  useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]); // El segundo argumento es un array de dependencias, si el array
  // esta vacio, el useEffect se ejecutará solo una vez, si el array tiene
  // dependencias, el useEffect se ejecutará cada vez que una de las dependencias
  // cambie de valor

  return (
    <>
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </>
  );
}
