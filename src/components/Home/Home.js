import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing";
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
  const movietext="Harry";
  const showtext="Friends";
  const dispatch= useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies(movietext));
    dispatch(fetchAsyncShows(showtext));
  },[]);

  return (
    <div>
      <div className='banner-img'>
      </div>
      <MovieListing />
    </div>
  )
}

export default Home