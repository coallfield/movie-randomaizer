'use server'

import { movieRepository } from '../repositories/movie'
import { left, right } from '@/shared/lib/either'

export const deleteMovie = async (movieId: string) => {
    try {
        await movieRepository.deleteMovie(movieId)
        return right('Movie successfully deleted')
    } catch (e) {
        return left('Something went wrong')
    }
}
