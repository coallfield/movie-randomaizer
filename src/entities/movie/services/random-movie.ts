'use server'

import { movieRepository } from '../repositories/movie'

export const randomMovie = async () => {
    return movieRepository.randomMovie()
}
