'use client'

import { ThemeMenu } from '../actions/theme-menu'

import { SignInButton } from '@/features/auth/ui/SignInButton'

export const Header = () => {
    return (
        <div className="w-full h-[50px] p-10 flex flex-row justify-end items-center gap-4">
            <ThemeMenu />
            <SignInButton text={'Sign In With Google'} />
        </div>
    )
}
