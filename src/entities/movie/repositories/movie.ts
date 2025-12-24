import { CreateMovieEntity, MovieEntity } from '@/entities/movie/domain'
import { prisma } from '@/shared/lib/db'
import cuid from 'cuid'

class MovieRepository {
    moviesList = async (): Promise<MovieEntity[]> => {
        return prisma.movie.findMany()
    }

    randomMovie = async (): Promise<MovieEntity> => {
        const result = await prisma.$queryRaw<MovieEntity[]>`
            SELECT *
            FROM Movie
            ORDER BY RANDOM()
            LIMIT 1;`
        return result[0]
    }

    createMovie = async (movie: CreateMovieEntity): Promise<MovieEntity> => {
        const newMovie = await prisma.movie.create({
            data: {
                id: cuid(),
                name: movie.name,
                description: movie.description,
                imageUrl: movie.imageUrl,
                detailsUrl: movie.detailsUrl,
                users: {
                    connect: { email: movie.creatorEmail },
                },
            },
        })

        return newMovie
    }

    updateMovie = async (movie: MovieEntity): Promise<MovieEntity> => {
        return prisma.movie.update({
            where: { id: movie.id },
            data: movie,
        })
    }

    deleteMovie = async (movieId: string): Promise<MovieEntity> => {
        return prisma.movie.delete({
            where: { id: movieId },
        })
    }
}

export const movieRepository = new MovieRepository()
