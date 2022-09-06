import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/Apis/movieApi';
import { APIKey } from '../../common/Apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    
    const response= await movieApi
    .get(`?apikey=${APIKey}&s=${term}&type=movie`);
        //console.log("The response from API is", response);
        return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    
    const response= await movieApi
    .get(`?apikey=${APIKey}&s=${term}&type=series`);
        //console.log("The response from API is", response);
        return response.data;
});

export const fetchAsyncMovieorShows = createAsyncThunk('movies/fetchAsyncMovieorShows', 
async (id) => {
    const response= await movieApi
    .get(`?apikey=${APIKey}&i=${id}&Plot=full`);
        //console.log("The response from API is", response);
        return response.data;
});

const initialState = {
    movies:{},
    shows:{},
    selectedMovieorShow:{}
}

const movieSlice = createSlice(
    {
        name:"movies",
        initialState,
        reducers:{
            addMovies: (state,{payload}) => {
                state.movies=payload;//You don't need this as you have async function for add movies
            },
            removeSelectedMovieorShow: (state) =>
            {
                state.selectedMovieorShow={};
            }
        },
        extraReducers:{
            [fetchAsyncMovies.pending]: () => {
                console.log("Pending");
            },
            [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
                console.log("Fetched Successfully");
                return {...state,movies:payload};
            },
            [fetchAsyncMovies.rejected]: () => {
                console.log("Rejected");
            },
            [fetchAsyncShows.fulfilled]: (state, {payload}) => {
                console.log("Fetched Successfully");
                return {...state,shows:payload};
            },
            [fetchAsyncMovieorShows.fulfilled]: (state, {payload}) => {
                console.log("Fetched Successfully");
                return {...state,selectedMovieorShow:payload};
            },

        }
    }
);

export const {addMovies} = movieSlice.actions;
export const getAllMovies= (state)=> state.movies.movies; // state is state, movies is slice name&store name,
// movies is property in initial state
export const getAllShows= (state)=> state.movies.shows;
export const getselectedMovieorShow= (state)=> state.movies.selectedMovieorShow;
export default movieSlice.reducer;
export const {removeSelectedMovieorShow}=movieSlice.actions;