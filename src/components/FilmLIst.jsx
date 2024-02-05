import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"

const FilmLIst = () => {
  const [movie, setMovie] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${search}&apikey=311bc83d`)
      .then(res => {
        setMovie(res.data.Search || []); // Set to an empty array if Search is undefined
      })
      .catch(error => {
        console.error('Error fetching movie data:', error);
      });
  }, [search]);
  
  return (
    <>
    <div className='heading'>
      <h2>Films</h2>
      <input className='form-control' type="search" 
        placeholder='Serch for film....'
        value={search}
        onChange={(event) => setSearch(event.target.value)}/>
    </div>
    <div>
  {movie && movie.length > 0 ? (
    movie.map(movie => (
      <img key={movie.imdbID} className='img' src={movie.Poster} alt={movie.Title} />
    ))
  ) : (
    <p>No results found</p>
  )}
</div>

    </>
    
  )
}

export default FilmLIst

