import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useMutation } from '@/shared/lib/use-query-mutation'
import { MovieEntity } from '@/entities/movie/domain'
import { randomMovie } from '@/entities/movie'

export const useGetRandomMovie = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isChecked, setChecked] = useState(false)
    const session = useSession()

    let email: string | undefined | null = ''

    const {
        execute,
        isLoading,
        state: movie,
    } = useMutation<void, MovieEntity>(() => randomMovie(email))

    const handleClick = async () => {
        if (!isChecked) {
            email = session.data?.user?.email
        }
        await execute()
        setIsOpen((prev) => !prev)
        email = ''
    }

    return {
        isOpen,
        isLoading,
        isChecked,
        setChecked,
        setIsOpen,
        random: handleClick,
        movie,
    }
}
