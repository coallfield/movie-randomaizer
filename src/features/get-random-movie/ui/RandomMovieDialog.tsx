import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'
import { MovieEntity } from '@/entities/movie/domain'
import { Spinner } from '@/shared/ui/spinner'

interface Props {
    open: boolean
    onOpenChange: (bool: boolean) => void
    movie: MovieEntity | null
}

export const RandomMovieDialog = (props: Props) => {
    const { open, onOpenChange, movie } = props

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                {movie ? (
                    <DialogHeader>
                        <DialogTitle>{movie.name}</DialogTitle>
                        <DialogDescription>
                            {movie.description}
                        </DialogDescription>
                    </DialogHeader>
                ) : (
                    <Spinner />
                )}
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Watch!</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
