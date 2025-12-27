import { z } from 'zod'

export type MovieEntity = {
    id: string
    name: string
    description: string | null
    imageUrl: string | null
    detailsUrl: string | null
    users?: {
        email: string | null
    }[] // have to improve somehow
}

// for field tag: name
export const movieEntityKeys = {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    detailsUrl: 'detailsUrl',
} as const

export const createMovieInputSchema = z.object({
    name: z.string().min(1, 'Name required'),
    description: z.string().optional(),
    imageUrl: z.string().optional(),
    detailsUrl: z.string().optional(),
    creatorEmail: z.string(),
})

export type CreateMovieEntity = z.infer<typeof createMovieInputSchema>
