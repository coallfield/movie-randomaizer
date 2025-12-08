import { useState } from 'react'

import { Either } from './either'
import { notify } from './notify'

export const useMovieActions = <T>(
    callback: (data: T) => Promise<Either<string, string>>,
) => {
    const [isPending, setIsPending] = useState(false)

    const action = async (data: T) => {
        setIsPending(true)
        const result = await callback(data)
        notify(result)
        setIsPending(false)
    }

    return { isPending, action }
}
