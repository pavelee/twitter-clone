import useLoginModal from "@/app/hooks/useLoginModal"
import { useCallback, useState } from "react";
import { Input } from "../Input";
import { Modal } from "../Modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

export const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if (isLoading) return;

        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal, isLoading])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            loginModal.onClose();
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }, [loginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                type="text"
                disabled={isLoading}
            />
            <Input
                placeholder="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                type="password"
                disabled={isLoading}
            />
        </div>
    )

    const FooterContent = (
        <div className="text-neutral-400 text-center mt-4 flex gap-1 justify-center">
            <p>First time on X?</p>
            <span
                onClick={onToggle}
                className="
                    text-white
                    cursor-pointer
                    hover:underline
                ">
                Create an account
            </span>
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title={'Login'}
            actionLabel={'Sign in'}
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={FooterContent}
        />
    )
}