import React from 'react'
import SearchBarMovies from './SearchBarMovies'
import SearchMovieSuggestions from './SearchMovieSuggestions'
import { netflixBg } from '../utils/constants'

const SearchMovies = () => {
    
    
    return (
        <div>
            <div className="absolute -z-20">
                <img className="w-full h-full" src={netflixBg} alt="bg-logo"/>
            </div>
            <SearchBarMovies/>
            <SearchMovieSuggestions/>
        </div>
    )
}

export default SearchMovies
