'use server'

import { movieRepository } from '@/entities/movie/repositories/movie'
import { Either, left, right } from '@/shared/lib/either'
import { CreateMovieEntity, MovieEntity } from '@/entities/movie/domain'
import { ensureAuth } from '@/shared/lib/ensure-auth'

export async function getMovies(
    email?: string | null,
): Promise<Either<string, MovieEntity[]>> {
    try {
        const movies = await movieRepository.moviesList(email)
        return right(movies)
    } catch (e) {
        return left('Failed to get movies')
    }
}

export async function createMovie(
    createMovieData: CreateMovieEntity,
): Promise<Either<string, MovieEntity>> {
    const auth = await ensureAuth()
    if (auth.type === 'left') {
        return auth
    }

    try {
        const newMovie = await movieRepository.createMovie(createMovieData)
        return right(newMovie, 'Movie successfully created')
    } catch (e) {
        return left('Failed to create movie')
    }
}

// export async function updateMovie(movie: MovieEntity) {
//     const auth = await ensureAuth()
//     if (auth.type === 'left') {
//         return auth
//     }
//     try {
//         await movieRepository.updateMovie(movie)
//         return right('Movie successfully updated')
//     } catch (e) {
//         return left('Failed to update movie')
//     }
// }

export async function deleteMovie(
    movieId: string,
): Promise<Either<string, MovieEntity>> {
    const auth = await ensureAuth()
    if (auth.type === 'left') {
        return auth
    }

    try {
        const deletedMovie = await movieRepository.deleteMovie(movieId)
        return right(deletedMovie, 'Movie successfully deleted')
    } catch (e) {
        return left('Failed to delete movie')
    }
}

export async function randomMovie(
    email?: string | null,
): Promise<Either<string, MovieEntity>> {
    const auth = await ensureAuth()
    if (auth.type === 'left') {
        return auth
    }

    try {
        const movie = await movieRepository.randomMovie(email)
        return right(movie)
    } catch (e) {
        return left('Failed to get random movie')
    }
}
