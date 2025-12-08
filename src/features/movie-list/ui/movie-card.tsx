'use client'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card'
import { MovieEntity } from '@/entities/movie/domain'
import { Button } from '@/shared/ui/button'
import { DeleteMovieButton } from '../actions/delete-movie-button'

interface Props {
    movie: MovieEntity
}

export const MovieCard = (props: Props) => {
    const { movie } = props
    return (
        <Card key={movie.id} className="w-72">
            <CardHeader className="flex flex-row justify-center items-center">
                <CardTitle className="text-3xl uppercase">
                    {movie.name}
                </CardTitle>
                <DeleteMovieButton movieId={movie.id} />
            </CardHeader>
            <CardContent>
                {movie.imageUrl ? (
                    <img alt={movie.name} src={movie.imageUrl} />
                ) : null}
            </CardContent>
            <CardFooter className="flex flex-col justify-center items-center">
                <Button className="w-full uppercase">MORE</Button>
            </CardFooter>
        </Card>
    )
}
