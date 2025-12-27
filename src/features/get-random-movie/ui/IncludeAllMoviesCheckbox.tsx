import { Checkbox } from '@/shared/ui/checkbox'
import { Label } from '@/shared/ui/label'

interface Props {
    checked: boolean
    onCheckedChange: (value: boolean) => void
}

export const IncludeAllMoviesCheckbox = (props: Props) => {
    const { onCheckedChange, checked } = props

    return (
        <div className="flex flex-row justify-center items-center gap-2">
            <Checkbox
                checked={checked}
                onCheckedChange={onCheckedChange}
                id="movies"
            />
            <Label htmlFor="movies">Include movies that are not your own</Label>
        </div>
    )
}
