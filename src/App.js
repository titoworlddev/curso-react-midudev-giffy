import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

// Probando cambios en el código

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword="panda" />
      </section>
    </div>
  );
}
