import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { imageListClasses } from '@mui/material'


function MovieSearch() {
    const [movietoSearch, setMovieToSearch] = useState("")
    const [movies, setMovies] = useState([])
    const url = 'https://image.tmdb.org/t/p/original'


    function handleSubmit(e) {
        e.preventDefault()
        axios.get('https://api.themoviedb.org/3/search/movie?query= ' + movietoSearch + '&api_key=3fd23a7ac5678fbe2e498662b7e46701&include_adult=false&language=en-US&page=1')
            .then((result) => {
                console.log(result.data.results)
                setMovies(result.data.results)
            })

    }


    return (
        <div className='main'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Movie / TV Show Name' value={movietoSearch} onChange={(e) => setMovieToSearch(e.target.value)} />
                <button >Search</button>
            </form>
            <div className="searchmovie">
  {
   movies.map((movie,index)=>{
        return(
            <div className='movie' key={index}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
            </div>
        )
        })}
</div>

            {/* {movies.length > 0 ?
                <div><img src={url + movies[0].poster_path} alt="" /></div>
                                : ""} */}

{/* {movies.map((val, index)=> {
                    return(
                        <img src={url+ movies[index].poster_path}  alt="" />
                    )
                })}                     */}
        </div>

    )

}

export default MovieSearch