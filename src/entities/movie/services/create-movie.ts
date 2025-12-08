import { CreateMovieEntity } from '../domain'
import { movieRepository } from '../repositories/movie'

export const createMovie = async (data: CreateMovieEntity) => {
    return await movieRepository.createMovie(data)
}
