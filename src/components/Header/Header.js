import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import User from '../../images/User.png';
import "./Header.scss";
import {useDispatch} from 'react-redux';
import {fetchAsyncMovies,fetchAsyncShows} from '../../features/movies/movieSlice';
const Header = () => {
  const [term,setTerm]=useState("");
  const dispatch=useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(term);
    if(term==="") return alert("Please enter Movie or Show name");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  }
  return (
    <div className='header'>
      
      <div className='logo'>
      <Link to='/'>RanjithMovieApp </Link> 
      </div> 
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input type='text' value={term} placeholder="Search Movies or Shows" onChange={(e) => setTerm(e.target.value)}/>
          <button type='submit'><i className='fa fa-search'></i></button>
        </form>
      </div>
      <div className='user-image'>
      <img src={User} alt="user"/>  
      </div> 
    </div>
  )
}

export default Header