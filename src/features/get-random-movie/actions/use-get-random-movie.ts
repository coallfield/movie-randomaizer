import { useState } from 'react'
import { randomMovie } from '@/entities/movie/services/random-movie'
import { MovieEntity } from '@/entities/movie/domain'
import { left } from '@/shared/lib/either'

export const useGetRandomMovie = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [movie, setMovie] = useState<MovieEntity | null>(null)

    const action = async () => {
        try {
            setIsLoading(true)
            const movie = await randomMovie()
            setIsOpen(true)
            setMovie(movie)
        } catch (e) {
            left('Something went wrong')
        } finally {
            setIsLoading(false)
        }
    }

    return {
        isOpen,
        isLoading,
        setIsOpen,
        movie,
        action,
    }
}
