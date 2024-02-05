import { useState } from 'react'
import './App.css'
import FilmLIst from './components/FilmLIst';

function App() {
  return (
    <>
    <div className='App container-fluid'>
      <div className='row'>
        <FilmLIst />
      </div>
    </div>
    </>
  )
}

export default App
