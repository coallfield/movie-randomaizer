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

interface Props {
    open: boolean
    onOpenChange: (bool: boolean) => void
    movie: MovieEntity
}

export const RandomMovieDialog = (props: Props) => {
    const { open, onOpenChange, movie } = props

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{movie.name}</DialogTitle>
                    <DialogDescription>{movie.description}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Watch!</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
