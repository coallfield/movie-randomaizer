import { useEffect, useState } from 'react'

import { Either } from './either'
import { toast } from 'sonner'

export const useQuery = <T>(query: () => Promise<Either<string, T>>) => {
    const [state, setState] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        query()
            .then((response) => {
                if (response.type === 'right') {
                    if (response.message) {
                        toast(response.message)
                    }
                    setState(response.value)
                } else {
                    toast(response.error)
                    setError(response.error)
                }
            })
            .finally(() => setIsLoading((prev) => !prev))
    }, [])

    return {
        state,
        isLoading,
        error,
    }
}

export const useMutation = <Args, ResponseType>(
    mutation: (args: Args) => Promise<Either<string, ResponseType>>,
) => {
    const [state, setState] = useState<ResponseType | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const execute = async (args: Args) => {
        if (isLoading) return

        setIsLoading(true)

        const result = await mutation(args)

        if (result.type === 'right') {
            setState(result.value)
            if (result.message) {
                toast(result.message)
            }
        } else {
            toast(result.error)
        }

        setIsLoading(false)
    }

    return { execute, isLoading, state }
}
