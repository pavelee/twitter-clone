'use client'

import useUser from "@/app/hooks/useUser";
import Image from "next/image"
import { Avatar } from "../Avatar";

type UserHeroProps = {
    userId: string;
}

export const UserHero = (props: UserHeroProps) => {
    const { data: user } = useUser({ userId: props.userId });
    return <div>
        <div className="
            bg-neutral-700
            h-44
            relative
        ">
            {user?.coverImage &&
                <Image
                    src={user?.coverImage}
                    fill
                    alt={'cover image'}
                    style={{ objectFit: 'cover' }}
                />
            }
            <div className="
                absolute
                -bottom-16
                left-4
            ">
                <Avatar
                    userId={props.userId}
                    isLarge
                    hasBorder
                />
            </div>
        </div>
    </div>
}