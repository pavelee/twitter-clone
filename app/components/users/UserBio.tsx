'use client';

import useCurrentUser from "@/app/hooks/useCurrentUser";
import useUser from "@/app/hooks/useUser";
import { format } from "date-fns";
import { useMemo } from "react";
import { Button } from "../Button";
import { BiCalendar } from "react-icons/bi";

type UserBioProps = {
    userId: string;
}

export const UserBio = (props: UserBioProps) => {
    const { data: currentUser } = useCurrentUser();
    const { data: user } = useUser({ userId: props.userId });

    const createdAt = useMemo(() => {
        if (!user) {
            return null;
        }

        return format(new Date(user.createdAt), 'MMMM yyyy');
    }, [user])

    return <div className="border-b-[1px] border-neutral-800 pb-4">
        <div className="flex justify-end p-2">
            {currentUser?.id === props.userId ?
                <Button
                    secondary
                    label="Edit"
                    onClick={() => { }}
                />
                :
                <Button
                    label="Follow"
                    onClick={() => { }}
                    secondary
                />
            }
        </div>
        <div className="mt-8 px-4">
            <div className="flex flex-col">
                <p className="text-white text-2xl font-semibold">
                    {user?.name}
                </p>
                <p className="text-md text-neutral-500">
                    @{user?.username}
                </p>
            </div>
            <div className="flex flex-col mt-4">
                <p className="text-white">
                    {user?.bio}
                </p>
                <div className="
                    flex
                    flex-row
                    items-center
                    gap-2
                    mt-4
                    text-neutral-500
                ">
                    <BiCalendar size={24} />
                    <p>
                        Joined {createdAt}
                    </p>
                </div>
            </div>
            <div className="flex flex-row items-center mt-4 gap-6">
                <div className="flex flex-row items-center gap-1">
                    <p className="text-white">
                      {user?.followingIds?.length}  
                    </p>
                    <p className="text-neutral-500">
                        Following
                    </p>
                </div>
                <div className="flex flex-row items-center gap-1">
                    <p className="text-white">
                      {user?.followersCount || 0}  
                    </p>
                    <p className="text-neutral-500">
                        Followers
                    </p>
                </div>
            </div>
        </div>
    </div>
}