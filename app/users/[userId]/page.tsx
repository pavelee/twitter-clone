'use client';

import { Header } from "@/app/components/Header";
import { UserBio } from "@/app/components/users/UserBio";
import { UserHero } from "@/app/components/users/UserHero";
import useUser from "@/app/hooks/useUser";
import { ClipLoader } from "react-spinners";

type UsersPageProps = {
    params: {
        userId: string;
    }
}

const UsersPage = (props: UsersPageProps) => {
    const { userId } = props.params;

    const { data: user, isLoading } = useUser({ userId });

    if (isLoading || !user) {
        return (
            <div className="
            flex
            justify-center
            items-center
            h-full
        ">
                <ClipLoader color="lightblue" size={80} />
            </div>
        );
    }

    console.log(user);

    return (
        <>
            <Header showBackArrow label={user.name} />
            <UserHero userId={userId as string} />
            <UserBio userId={userId as string} />
        </>
    )
}

export default UsersPage;