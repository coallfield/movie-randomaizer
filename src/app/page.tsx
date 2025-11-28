import { MovieList } from '@/features/movie-list'

export default function Home() {
    return (
        <div className="flex flex-col gap-8 container mx-auto pt-[100px]">
            <MovieList />
        </div>
    )
}
