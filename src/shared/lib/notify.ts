import { Either } from './either'
import { toast } from 'sonner'

export const notify = (result: Either<string, string>) => {
    if (result.type === 'right') {
        toast(result.value)
    } else {
        toast(result.error)
    }
}
