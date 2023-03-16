import { createContext, useEffect, useState } from "react";
import {
  AUDITORIUM,
  LATEST,
  MOVIE_GENRES,
  SCREENING,
} from "../constants";
import { fetchData } from "../helpers/request";

export const MovieContext = createContext({});

export const MovieContextProvider = ({ children }) => {
  const [Auditorium,setAuditorium]=useState([]);
  const [screening, setScreening] = useState([]);
  const [movies, setMovies] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  


  const fetchAuditorium = async () => {
    const { data: audi } = await fetchData(AUDITORIUM());
    setAuditorium(audi);

  };

  const fetchScreenings = async () => {
    const { data: movies } = await fetchData(SCREENING(currentPage));
    setScreening(movies);
    
  };

  const fetchLatest = async () => {
    const { data: movies } = await fetchData(LATEST(currentPage));
   

    let mergedMovieScreen = movies.map(v=>({...v,...Auditorium.find(sp => sp.movie === v.title)}))
    
    setMovies(mergedMovieScreen || movies.map(v=>({...v,...Auditorium.find(sp => sp.movie === v.title)})));
    
    
  };
  const fetchGenres = async () => {
    const { data } = await fetchData(MOVIE_GENRES);
    setMovieGenres(data);
  };


 

  const handleGenres = async (id,title) => {
    const { data: movies } = await fetchData(LATEST());
    setMovies(movies);
    
    setMovieGenres(
      movieGenres.map((genre) =>
        genre.id === id
          ? { ...genre, active: !genre.active }
          : { ...genre, active: false }
      )
    );
    let filteredMovies = movies.filter(d => d.description.categories.includes(title))
    setMovies(filteredMovies);
  };


  useEffect(() => {
    fetchAuditorium();
    fetchScreenings();
    fetchLatest();
    fetchGenres();
    
  }, [currentPage]);

  return (
    <MovieContext.Provider
      value={{
        Auditorium,
        screening,
        movies,
        movieGenres,
        handleGenres,
        setMovies,
        currentPage,
        setCurrentPage,  
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
