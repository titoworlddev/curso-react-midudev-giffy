import React, { useState, useEffect } from 'react';
import getGifs from './services/getGifs';

import './App.css';

export default function App() {
  // El useState es un hook que nos permite manejar el estado de un componente
  // en React. El primer valor que retorna es el estado actual y el segundo
  // valor es una función que nos permite actualizar el estado.
  const [gifs, setGifs] = useState([]);

  // El useEffect se ejecuta cuando el componente se renderiza por primera vez
  // y cuando el componente se actualiza
  useEffect(() => {
    getGifs({ keyword: 'rick' }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <img src={singleGif} alt="Gif" />
        ))}
        <button onClick={() => {}}>Cambiar gifs</button>
      </section>
    </div>
  );
}
