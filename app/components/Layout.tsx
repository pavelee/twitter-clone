'use client';

import { FollowBar } from "./FollowBar";
import { Modal } from "./Modal"
import { Sidebar } from "./Sidebar";
import { LoginModal } from "./modals/LoginModal";
import { RegisterModal } from "./modals/RegisterModal";

type LayoutProps = {
    children?: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
    return (
        <div>
            <RegisterModal />
            <LoginModal />
            <div className="h-full bg-black">
                <div className="container mx-auto h-full xl:px-30 max-w-6xl">
                    <div className="grid grid-cols-4 h-full">
                        <Sidebar />
                        <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
                            {props.children}
                        </div>
                        <FollowBar />
                    </div>
                </div>
            </div>
        </div>
    )
}