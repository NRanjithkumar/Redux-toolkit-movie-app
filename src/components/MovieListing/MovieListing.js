import React from 'react';
import { getAllMovies,getAllShows } from '../../features/movies/movieSlice';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard'
import "./MovieListing.scss";
import Slider from 'react-slick';
import { settings } from '../../common/settings';

const MovieListing = () => {
 
  const movies= useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
 // console.log("Data is",movies);
  let renderMovies,renderShows="";
  console.log(movies.Response)
  renderMovies = 
  movies.Response==="True" ? ( 
    movies.Search.map((movie,index) => (
      //console.log(index,movie);
      <MovieCard key={index} data={movie} />
    ))
    ):(<div className='movies-error'><h3>{movies.Error}</h3></div>);

    renderShows = 
  shows.Response==="True" ? ( 
    shows.Search.map((movie,index) => (
      //console.log(index,movie);
      <MovieCard key={index} data={movie} />
    ))
    ):(<div className='shows-error'><h3>{shows.Error}</h3></div>);

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
    </div>
    <div className='show-list'>
        <h2>Shows</h2>
        <div className='movie-container'>
        <Slider {...settings}>{renderShows}</Slider>
        </div>
    </div>
    </div>
  )
}

export default MovieListing