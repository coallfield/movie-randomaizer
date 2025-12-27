'use client'

import { RandomMovieDialog } from '@/features/get-random-movie/ui/RandomMovieDialog'

import { GetRandomMovieButton } from '../ui/GetRandomMovieButton'
import { IncludeAllMoviesCheckbox } from '@/features/get-random-movie/ui/IncludeAllMoviesCheckbox'

import { useGetRandomMovie } from '@/features/get-random-movie/actions/use-get-random-movie'

export const GetRandomMovieLayout = () => {
    const {
        isOpen,
        isLoading,
        isChecked,
        setIsOpen,
        setChecked,
        movie,
        random,
    } = useGetRandomMovie()

    return (
        <>
            <RandomMovieDialog
                movie={movie}
                open={isOpen}
                onOpenChange={setIsOpen}
            />
            <div className="flex flex-col justify-center items-center gap-4">
                <GetRandomMovieButton isLoading={isLoading} onClick={random} />
                <IncludeAllMoviesCheckbox
                    onCheckedChange={setChecked}
                    checked={isChecked}
                />
            </div>
        </>
    )
}
