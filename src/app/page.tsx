import { MovieList } from '@/features/movie-list'
import { CreateMoviePopup } from '@/features/create-movie-popup'

export default function Home() {
    return (
        <div className="flex flex-col gap-8 container mx-auto pt-[50px] justify-center items-center">
            <CreateMoviePopup />
            <MovieList />
        </div>
    )
}
