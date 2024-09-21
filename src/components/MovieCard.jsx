import React from 'react'
import { MOVIE_IMAGE_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    return (
        <div className='w-48 pr-6'>
            <img src={MOVIE_IMAGE_URL+posterPath} alt='movie-poster'/>
        </div>
    )
}

export default MovieCard
