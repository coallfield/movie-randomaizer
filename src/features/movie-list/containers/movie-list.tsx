import { getMovies } from '@/entities/movie'

import { MovieCard } from '../ui/movie-card'

export const MovieList = async () => {
    const movies = await getMovies()

    return (
        <div className="flex flex-row w-full justify-center items-center">
            {movies.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />
            })}
        </div>
    )
}
