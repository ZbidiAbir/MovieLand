import { useState,useEffect}from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
const API_URL = 'http://www.omdbapi.com?apikey=57e4a70e';
const movie1 = {
    
        "Title": "Spiderman",
        "Year": "2010",
        "imdbID": "tt1785572",
        "Type": "movie",
        "Poster": "N/A"
    }


const App = () => {
    const [movies , setMovies] = useState([]);
    
    const serachMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() =>  {
        serachMovies('Spiderman')
    }, [])
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                placeholder="Search for movies"
                value="Superman"
                onChange={() =>{}}
                />
                <img src={SearchIcon}
                alt="search"
                onClick={()=> {}}
                />
            </div>

            {
                movies?.length > 0
                  ? (
                    <div className='container'>
                    {movies.map((movie)=> (
                        <MovieCard movie={movie} />
                    ))}
                    </div>
                  ) : 
                  (
                    <div className="empty">
                        <h2>No movies</h2>
                        </div>
                  )
            }
           
        </div>
    );
}
export default App;