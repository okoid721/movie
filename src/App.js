//3be7cabe
import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=3be7cabe';

const movie = {
  Title: 'Money Heist',
  Year: '2017–2021',
  imdbID: 'tt6468322',
  Type: 'series',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg',
};

const App = () => {
  const [movie, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovie(data.Search);
  };
  useEffect(() => {
    searchMovie('Money Heist');
  }, []);
  return (
    <div className="app">
      <h1>King's Movie Land</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search For A Movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        />
      </div>
      {movie?.length > 0 ? (
        <div className="container">
          {movie.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movie Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
