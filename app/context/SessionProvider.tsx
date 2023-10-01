'use client'

import { SessionProvider as NextSessionProvider } from "next-auth/react"

type SessionProviderProps = {
    children: React.ReactNode,
    session: any
}

export const SessionProvider = (props: SessionProviderProps) => {
    return (
        <NextSessionProvider session={props.session}>
            {props.children}
        </NextSessionProvider>
    )
}