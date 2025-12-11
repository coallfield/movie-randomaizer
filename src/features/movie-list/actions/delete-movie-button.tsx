import { X } from 'lucide-react'
import { deleteMovie } from '@/entities/movie/services/delete-movie'
import { useMovieActions } from '@/shared/lib/use-movie-ations'
import { Spinner } from '@/shared/ui/spinner'

interface Props {
    movieId: string
}

export const DeleteMovieButton = (props: Props) => {
    const { movieId } = props
    const { action, isPending } = useMovieActions(deleteMovie)

    return isPending ? (
        <Spinner />
    ) : (
        <X
            className="hover:text-destructive duration-300 ease-in-out"
            onClick={() => action(movieId)}
        />
    )
}
