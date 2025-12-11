'use client'

import { GetRandomMovieButton } from '../ui/GetRandomMovieButton'
import { RandomMovieDialog } from '@/features/get-random-movie/ui/RandomMovieDialog'

import { useGetRandomMovie } from '@/features/get-random-movie/actions/use-get-random-movie'

export const GetRandomMovieLayout = () => {
    const { action, isOpen, isLoading, setIsOpen, movie } = useGetRandomMovie()

    return (
        <>
            {movie && (
                <RandomMovieDialog
                    movie={movie}
                    open={isOpen}
                    onOpenChange={setIsOpen}
                />
            )}
            <GetRandomMovieButton isLoading={isLoading} onClick={action} />
        </>
    )
}
