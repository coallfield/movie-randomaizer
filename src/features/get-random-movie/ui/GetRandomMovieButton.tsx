import { Target, LoaderCircle } from 'lucide-react'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip'

interface Props {
    onClick: () => void
    isLoading: boolean
}

export const GetRandomMovieButton = (props: Props) => {
    const { onClick, isLoading } = props

    return (
        <Tooltip>
            <TooltipTrigger>
                {isLoading ? (
                    <LoaderCircle
                        width={35}
                        height={35}
                        className="animate-spin "
                    />
                ) : (
                    <Target
                        onClick={onClick}
                        width={35}
                        height={35}
                        className={
                            'cursor-pointer duration-300 ease-in-out hover:text-chart-4'
                        }
                    />
                )}
            </TooltipTrigger>
            <TooltipContent>Get Random Movie</TooltipContent>
        </Tooltip>
    )
}
