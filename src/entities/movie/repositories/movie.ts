import { CreateMovieEntity, MovieEntity } from '@/entities/movie/domain'
import { prisma } from '@/shared/lib/db'
import cuid from 'cuid'
import { revalidatePath } from 'next/cache'
import { routes } from '@/shared/lib/routes'

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
            },
        })
        revalidatePath(routes.main)
        return newMovie
    }

    updateMovie = async (movie: MovieEntity): Promise<MovieEntity> => {
        const updatedMovie = await prisma.movie.update({
            where: { id: movie.id },
            data: movie,
        })
        revalidatePath(routes.main)
        return updatedMovie
    }

    deleteMovie = async (movieId: string): Promise<void> => {
        await prisma.movie.delete({
            where: { id: movieId },
        })
        revalidatePath(routes.main)
    }
}

export const movieRepository = new MovieRepository()
