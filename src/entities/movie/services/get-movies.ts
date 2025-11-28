import { movieRepository } from '../repositories/movie'
import { MovieEntity } from '@/entities/movie/domain'

export const getMovies = async (): Promise<MovieEntity[]> => {
    const movies = await movieRepository.moviesList()
    return movies
}
