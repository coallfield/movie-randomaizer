'use server'

import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { createMovie } from '@/entities/movie'
import { createMovieInputSchema, MovieEntity } from '@/entities/movie/domain'
import { Either, left } from '@/shared/lib/either'

export const createMoviePopoverAction = async (
    formData?: FormData,
): Promise<Either<string, MovieEntity>> => {
    if (!formData) {
        return left('No form data!')
    }

    const session = await getServerSession(authOptions)
    const userEmail = session?.user?.email

    const data = Object.fromEntries(formData.entries())
    const parsed = createMovieInputSchema.parse({
        ...data,
        creatorEmail: userEmail,
    })

    return await createMovie(parsed)
}
