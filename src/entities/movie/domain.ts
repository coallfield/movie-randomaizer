export type MovieEntity = {
    id: string
    name: string
    description: string | null
    imageUrl: string | null
    detailsUrl: string | null
}

export interface CreateMovieEntity extends MovieEntity {
    creatorId: string
}
