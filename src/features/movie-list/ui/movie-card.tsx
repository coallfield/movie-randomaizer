import { Card, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card'
import { MovieEntity } from '@/entities/movie/domain'
import { Button } from '@/shared/ui/button'

interface Props {
    movie: MovieEntity
}

export const MovieCard = (props: Props) => {
    const { movie } = props
    return (
        <Card key={movie.id} className="w-72 max-w-sm">
            <CardHeader className="flex flex-col justify-center items-center">
                <CardTitle className="text-3xl uppercase">
                    {movie.name}
                </CardTitle>
            </CardHeader>
            <CardFooter className="flex flex-col justify-center items-center">
                <Button className="w-full uppercase">MORE</Button>
            </CardFooter>
        </Card>
    )
}
