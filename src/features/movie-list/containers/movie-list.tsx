'use client'

import { getMovies } from '@/entities/movie'

import { MovieCard } from '../ui/movie-card'
import { useQuery } from '@/shared/lib/use-query-mutation'
import { MovieEntity } from '@/entities/movie/domain'
import { Spinner } from '@/shared/ui/spinner'

export const MovieList = () => {
    const {
        state: movies,
        error,
        isLoading,
    } = useQuery<MovieEntity[]>(getMovies)

    if (isLoading) {
        return <Spinner />
    }

    if (error) {
        return <span>{error}</span>
    }

    return (
        <div className="flex flex-row w-full justify-center items-center gap-4">
            {movies?.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />
            })}
        </div>
    )
}
