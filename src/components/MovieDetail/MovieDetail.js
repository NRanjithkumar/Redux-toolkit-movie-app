import React from 'react';
import "./MovieDetail.scss"
import {useParams} from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAsyncMovieorShows, getselectedMovieorShow,removeSelectedMovieorShow } from '../../features/movies/movieSlice';

const MovieDetail = () => {
  const {imdbID}= useParams();
  const dispatch=useDispatch();
  const data= useSelector(getselectedMovieorShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieorShows(imdbID));

    return () =>
    {
      dispatch(removeSelectedMovieorShow())
    }

  },[dispatch,imdbID]);
  return (
    <div className='movie-section'>
      {Object.keys(data).length===0 ? 
      (<div className='lds-dual-ring'></div>) : 
      (
      <>
      <div className='section-left'>
        <div className='movie-title'>
          {data.Title}
        </div>
        <div className='movie-rating'>
          <span>
            IMDB Rating <i className='fa fa-star'></i>:{data.imdbRating}
          </span>
          <span>
            IMDB votes <i className='fa fa-thumbs-up'></i>:{data.imdbVotes}
          </span>
          <span>
            Runtime <i className='fa fa-flim'></i>:{data.Runtime}
          </span>
          <span>
            Year <i className='fa fa-calendar'></i>:{data.Year}
          </span>
        </div>
        <div className='movie-plot'>{data.Plot}</div>
        <div className='movie-info'>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Actors</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Language</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className='section-right'>
        <img src={data.Poster} alt={data.Title}/>
      </div>
      </>
      )}
    </div>
  )
}

export default MovieDetail