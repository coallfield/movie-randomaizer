import { z } from 'zod'

export type MovieEntity = {
    id: string
    name: string
    description: string | null
    imageUrl: string | null
    detailsUrl: string | null
}

export const createMovieInputSchema = z.object({
    name: z.string().min(1, 'Name required'),
    description: z.string().optional(),
    imageUrl: z.string().optional(),
    detailsUrl: z.string().optional(),
    creatorId: z.string().optional(),
})

export type CreateMovieEntity = z.infer<typeof createMovieInputSchema>
