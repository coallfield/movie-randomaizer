// maybe move to header module

import { RefreshCcw, LogOut } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'

import { Button } from '@/shared/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'

interface Props {
    text: string
}

export const SignInButton = (props: Props) => {
    const { text } = props
    const { data: session, status } = useSession()

    if (status === 'loading') {
        return <RefreshCcw className="h-6 w-6 animate-spin" />
    }

    if (status === 'authenticated') {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div>
                        <Avatar className="hover:opacity-90 duration-300 ease-in-out">
                            <AvatarImage
                                src={session.user?.image ?? '/default.webp'}
                                alt="@shadcn"
                            />
                            <AvatarFallback>
                                {session.user?.name}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }

    return <Button onClick={() => signIn('google')}>{text}</Button>
}
