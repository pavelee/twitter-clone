import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import useCurrentUser from "../hooks/useCurrentUser";
import useLoginModal from "../hooks/useLoginModal";

type SidebarItemProps = {
    label: string;
    href?: string;
    icon: IconType;
    onClick?: () => void;
    auth?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = (props: SidebarItemProps) => {
    const loginModal = useLoginModal();
    const currentUser = useCurrentUser();
    const router = useRouter();

    const { label, href, icon: Icon, onClick, auth } = props;
    const handleClick = useCallback(() => {
        if (onClick) {
            return onClick();
        }
        if (auth && !currentUser.data) {
            loginModal.onOpen();
        } else if (href) {
            return router.push(href);
        }
    }, [onClick, href, router, auth, currentUser, loginModal])

    return (
        <div onClick={handleClick} className="flex flex-row items-center">
            <div
                className="
                    relative
                    rounded-full
                    h-14
                    w-14
                    flex
                    items-center
                    justify-center
                    p-4
                    hover:bg-slate-300
                    hover:bg-opacity-10
                    cursor-pointer
                    lg:hidden
                "
            >
                <Icon size={28} color="white" />
            </div>
            <div className="
                relative
                hidden
                lg:flex
                items-center
                gap-4
                p-4
                rounded-full
                hover:bg-slate-300
                hover:bg-opacity-10
                cursor-pointer
            ">
                <Icon size={24} color="white" />
                <p className="hidden lg:block text-white text-xl">{label}</p>
            </div>
        </div>
    )
}