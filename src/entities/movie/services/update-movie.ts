import { MovieEntity } from '../domain'
import { movieRepository } from '../repositories/movie'

export const updateMovie = async (movie: MovieEntity): Promise<MovieEntity> => {
    return await movieRepository.updateMovie(movie)
}
