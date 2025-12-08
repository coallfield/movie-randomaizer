'use client'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'
import { Button } from '@/shared/ui/button'
import { CreateMovieFields } from '../ui/fields'

import { Spinner } from '@/shared/ui/spinner'
import { useMovieActions } from '@/shared/lib/use-movie-ations'
import { createMoviePopoverAction } from '@/features/create-movie-popup/actions/create-movie-popover-action'

export const CreateMoviePopup = () => {
    const { action: submit, isPending } = useMovieActions(
        createMoviePopoverAction,
    )

    return (
        <Popover>
            <PopoverTrigger className="w-72" asChild>
                <Button variant="outline">Create Movie</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form
                    className="grid gap-4"
                    action={(formData: FormData) => submit(formData)}
                >
                    <div className="space-y-2">
                        <h4 className="leading-none font-medium">Fields</h4>
                        <p className="text-muted-foreground text-sm">
                            Set the fields for the movie
                        </p>
                    </div>
                    <CreateMovieFields />
                    <Button type="submit">
                        {isPending ? <Spinner /> : 'Create'}
                    </Button>
                </form>
            </PopoverContent>
        </Popover>
    )
}
