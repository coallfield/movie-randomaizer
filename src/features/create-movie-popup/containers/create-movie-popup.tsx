'use client'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'
import { Button } from '@/shared/ui/button'
import { CreateMovieFields } from '../ui/fields'

import { Spinner } from '@/shared/ui/spinner'
import { useMutation } from '@/shared/lib/use-query-mutation'
import { createMoviePopoverAction } from '@/features/create-movie-popup/actions/create-movie-popover-action'
import { useSession } from 'next-auth/react'
import { SignInButton } from '@/features/auth/ui/SignInButton'
import { MovieEntity } from '@/entities/movie/domain'

export const CreateMoviePopup = () => {
    const { data: session } = useSession()

    const { execute, isLoading } = useMutation<FormData, MovieEntity>(
        createMoviePopoverAction,
    )

    return (
        <>
            {session ? (
                <Popover>
                    <PopoverTrigger className="w-72" asChild>
                        <Button variant="outline">Create Movie</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <form
                            className="grid gap-4"
                            action={(formData: FormData) => execute(formData)}
                        >
                            <div className="space-y-2">
                                <h4 className="leading-none font-medium">
                                    Fields
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                    Set the fields for the movie
                                </p>
                            </div>
                            <CreateMovieFields />
                            <Button type="submit">
                                {isLoading ? <Spinner /> : 'Create'}
                            </Button>
                        </form>
                    </PopoverContent>
                </Popover>
            ) : (
                <SignInButton text={'Sign In To Create Movie'} />
            )}
        </>
    )
}
