import { CreateMovieEntity, MovieEntity } from '@/entities/movie/domain'
import { prisma } from '@/shared/lib/db'
import cuid from 'cuid'

class MovieRepository {
    moviesList = async (email?: string | null): Promise<MovieEntity[]> => {
        return prisma.movie.findMany({
            where: {
                users: {
                    some: {
                        email: email,
                    },
                },
            },
            include: {
                users: true,
            },
        })
    }

    randomMovie = async (email?: string | null): Promise<MovieEntity> => {
        const whereClause = email ? { users: { some: { email } } } : {}

        const count = await prisma.movie.count({
            where: whereClause,
        })

        const randomIndex = Math.floor(Math.random() * count)

        const movies = await prisma.movie.findMany({
            where: whereClause,
            take: 1,
            skip: randomIndex,
        }) // [{}]

        return movies[0]
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

    // updateMovie = async (movie: MovieEntity): Promise<MovieEntity> => {
    //
    // }

    deleteMovie = async (movieId: string): Promise<MovieEntity> => {
        return prisma.movie.delete({
            where: { id: movieId },
        })
    }
}

export const movieRepository = new MovieRepository()
