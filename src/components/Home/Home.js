import React from 'react';
import {MovieList} from "../MovieList/MovieList";
import axiosService from "../../../public/services/axios.service";


const Home = () => {
    const fetchMovies = async () => {
        const response = await axiosService.get(`?apiKey=${}`)
    }
    return (
        <div>
            <div className={'banner-img'}></div>
            <MovieList/>
        </div>

    );
};

export {Home};