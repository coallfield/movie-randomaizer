'use client'

import { useSession } from 'next-auth/react'

import { Separator } from '@/shared/ui/separator'

import { MovieList } from '../containers/movie-list'

export const MovieListsLayout = () => {
    const session = useSession()

    return (
        <>
            {session.status === 'authenticated' ? (
                <MovieList session={session.data} title={'Your Movies'} />
            ) : (
                <span className="text-2xl uppercase">
                    Sign in to see your movies
                </span>
            )}
            <Separator />
            <MovieList title={'All Movies'} />
        </>
    )
}
