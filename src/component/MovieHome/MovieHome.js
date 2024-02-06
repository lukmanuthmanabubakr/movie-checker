import {useState, useEffect} from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieHome.css'
import SearchIcon from '.././Search.svg'



const API_URL =  'http://www.omdbapi.com/?apikey=9f27771b'

// const movie1 = {
//     "Title": "Italian Spiderman",
//     "Year": "2007",
//     "imdbID": "tt2705436",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
// }

const MovieHome = () => {

    const [movies, setMovie] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const SearchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        setMovie(data.Search)
    }

    useEffect(() => {
        SearchMovies('Spiderman')
    }, [])


    
  return (
    <div className='movie-app'>
       <em> <h1>MovieLand</h1></em>

        <div className='search'>
            <input placeholder='Search your movie' value = {searchTerm} onChange={(e) => setSearchTerm (e.target.value)} type='text'  />
            <i></i>
            
            <img src={SearchIcon} alt='search the movie picture' onClick={() => SearchMovies (searchTerm)}/>  
        </div>

        {
          movies?.length > 0 ? (
            <div className='container'>
            {   movies.map((movie) => (< MovieCard movie={movie}/>) )}
             
           </div>
          ) : (
            <div className='empty'>
              <h2>No Movie Found</h2>
            </div>
          )
        }

     
    </div> 
  )
    
}



export default MovieHome

