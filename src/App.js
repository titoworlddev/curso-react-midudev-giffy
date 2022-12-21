import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route } from 'wouter';

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link href="/gif/colombia">Gifs de Colombia</Link>
        <Link href="/gif/ecuador">Gifs de ecuador</Link>
        <Link href="/gif/chile">Gifs de chile</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}
