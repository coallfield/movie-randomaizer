import { CreateMovieEntity, MovieEntity } from '@/entities/movie/domain'
import { prisma } from '@/shared/lib/db'

class MovieRepository {
    moviesList = async (): Promise<MovieEntity[]> => {
        const movies = await prisma.movie.findMany()

        return movies
    }

    createMovie = async (movie: CreateMovieEntity): Promise<MovieEntity> => {
        const newMovie = await prisma.movie.create({
            data: {
                id: movie.id,
                name: movie.name,
                description: movie.description,
                imageUrl: movie.imageUrl,
                detailsUrl: movie.detailsUrl,
                users: {
                    connect: { id: movie.creatorId },
                },
            },
        })
        return newMovie
    }

    updateMovie = async (movie: MovieEntity): Promise<MovieEntity> => {
        const updatedMovie = await prisma.movie.update({
            where: { id: movie.id },
            data: movie,
        })
        return updatedMovie
    }
}

export const movieRepository = new MovieRepository()
