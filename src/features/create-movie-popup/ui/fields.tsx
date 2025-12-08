import { Label } from '@/shared/ui/label'
import { Input } from '@/shared/ui/input'
import { useId } from 'react'

export const CreateMovieFields = () => {
    const nameID = useId()
    const descriptionID = useId()
    const posterUrlID = useId()
    const detailsUrlID = useId()

    return (
        <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor={nameID}>Name</Label>
                <Input
                    id={nameID}
                    type="text"
                    name="name"
                    required={true}
                    placeholder="Batman"
                    className="col-span-2 h-8"
                />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor={descriptionID}>Description</Label>
                <Input
                    id={descriptionID}
                    name="description"
                    type="text"
                    required={false}
                    className="col-span-2 h-8"
                />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor={posterUrlID}>Poster URL</Label>
                <Input
                    id={posterUrlID}
                    name="posterUrl"
                    type="text"
                    required={false}
                    placeholder="https://img.jpg"
                    className="col-span-2 h-8"
                />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor={detailsUrlID}>Movie details website URL</Label>
                <Input
                    id={detailsUrlID}
                    name="detailsUrl"
                    type="text"
                    required={false}
                    className="col-span-2 h-8"
                />
            </div>
        </div>
    )
}
