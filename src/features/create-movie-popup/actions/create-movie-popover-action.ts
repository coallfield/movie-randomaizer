'use server'

import { createMovie } from '@/entities/movie/services/create-movie'
import { createMovieInputSchema } from '@/entities/movie/domain'
import { left, right } from '@/shared/lib/either'

export const createMoviePopoverAction = async (formData: FormData) => {
    try {
        const data = Object.fromEntries(formData.entries())
        const parsed = createMovieInputSchema.parse(data)
        await createMovie(parsed)

        return right('Movie successfully created')
    } catch (e) {
        return left('Failed to create movie')
    }
}
