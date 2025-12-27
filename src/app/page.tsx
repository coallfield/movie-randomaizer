import { MovieListsLayout } from '@/features/movie-list'
import { CreateMoviePopup } from '@/features/create-movie-popup'
import { GetRandomMovieLayout } from '@/features/get-random-movie'
import { Separator } from '@/shared/ui/separator'

export default async function Home() {
    return (
        <div className="flex flex-col gap-8 container mx-auto pt-[50px] justify-center items-center">
            <CreateMoviePopup />
            <GetRandomMovieLayout />
            <Separator />
            <MovieListsLayout />
        </div>
    )
}
