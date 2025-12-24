import { X } from 'lucide-react'
import { deleteMovie } from '@/entities/movie'
import { useMutation } from '@/shared/lib/use-query-mutation'
import { Spinner } from '@/shared/ui/spinner'
import { MovieEntity } from '@/entities/movie/domain'

interface Props {
    movieId: string
}

export const DeleteMovieButton = (props: Props) => {
    const { movieId } = props

    const { execute, isLoading } = useMutation<string, MovieEntity>(deleteMovie)

    return isLoading ? (
        <Spinner />
    ) : (
        <X
            className="hover:text-destructive duration-300 ease-in-out"
            onClick={() => execute(movieId)}
        />
    )
}
