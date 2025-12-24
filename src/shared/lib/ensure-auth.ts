'use server'

import { Either, left, right } from '@/shared/lib/either'
import { getServerSession, Session } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function ensureAuth(): Promise<Either<string, Session>> {
    const session = await getServerSession(authOptions)
    if (!session) return left('Unauthorized')
    return right(session)
}
