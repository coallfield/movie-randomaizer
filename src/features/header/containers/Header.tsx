import { ThemeMenu } from '../actions/theme-menu'

export const Header = () => {
    return (
        <div className="w-full h-[50px] p-2 flex flex-row justify-end items-center">
            <ThemeMenu />
        </div>
    )
}
