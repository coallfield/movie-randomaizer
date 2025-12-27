import { Session } from 'next-auth'

import { getMovies } from '@/entities/movie'
import { useQuery } from '@/shared/lib/use-query-mutation'
import { MovieEntity } from '@/entities/movie/domain'
import { Spinner } from '@/shared/ui/spinner'

import { MovieCard } from '../ui/movie-card'
import { DeleteMovieButton } from '@/features/movie-list/actions/delete-movie-button'

interface Props {
    session?: Session
    title: string
}

export const MovieList = (props: Props) => {
    const { session, title } = props

    const {
        state: movies,
        error,
        isLoading,
    } = useQuery<MovieEntity[]>(() => getMovies(session?.user?.email))

    if (isLoading) {
        return <Spinner />
    }

    if (error) {
        return <h2 className="text-destructive">{error}</h2>
    }

    return (
        <div className="flex flex-col w-full justify-center items-start gap-4">
            <h1 className="text-4xl uppercase">{title}</h1>
            <div className="flex flex-row w-full justify-center items-center gap-4">
                {movies?.map((movie) => {
                    return (
                        <MovieCard
                            actions={
                                session ? (
                                    <DeleteMovieButton movieId={movie.id} />
                                ) : null
                            }
                            key={movie.id}
                            movie={movie}
                        />
                    )
                })}
            </div>
        </div>
    )
}
