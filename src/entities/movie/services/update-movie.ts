import { MovieEntity } from '../domain'
import { movieRepository } from '../repositories/movie'

export const updateMovie = async (movie: MovieEntity): Promise<MovieEntity> => {
    const updatedMovie = await movieRepository.updateMovie(movie)
    return updatedMovie
}
