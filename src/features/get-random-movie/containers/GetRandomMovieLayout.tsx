'use client'
import { useState } from 'react'

import { RandomMovieDialog } from '@/features/get-random-movie/ui/RandomMovieDialog'
import { MovieEntity } from '@/entities/movie/domain'
import { randomMovie } from '@/entities/movie'
import { useMutation } from '@/shared/lib/use-query-mutation'

import { GetRandomMovieButton } from '../ui/GetRandomMovieButton'

export const GetRandomMovieLayout = () => {
    const [isOpen, setIsOpen] = useState(false)

    const {
        execute,
        isLoading,
        state: movie,
    } = useMutation<void, MovieEntity>(randomMovie)

    const handleClick = async () => {
        await execute()
        setIsOpen((prev) => !prev)
    }

    return (
        <>
            <RandomMovieDialog
                movie={movie}
                open={isOpen}
                onOpenChange={setIsOpen}
            />

            <GetRandomMovieButton isLoading={isLoading} onClick={handleClick} />
        </>
    )
}
