import useLoginModal from "@/app/hooks/useLoginModal"
import { useCallback, useState } from "react";
import { Input } from "../Input";
import { Modal } from "../Modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

export const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            await axios.post("/api/register", {
                email,
                password,
                name,
                username
            });

            toast.success("Account created successfully");

            signIn("credentials", {
                email,
                password,
            });

            registerModal.onClose();
        } catch (e: any) {
            console.error(e);
            toast.error(e.response?.data?.message || "An error occurred");
        } finally {
            setIsLoading(false);
        }
    }, [registerModal, email, password, name, username])

    const onToggle = useCallback(() => {
        if (isLoading) return;

        registerModal.onClose();
        loginModal.onOpen();
    }, [loginModal, registerModal, isLoading])

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
                placeholder="name"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                type="text"
                disabled={isLoading}
            />
            <Input
                placeholder="username"
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
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
            <p>Alredy have an account?</p>
            <span
                onClick={onToggle}
                className="
                    text-white
                    cursor-pointer
                    hover:underline
                ">
                Sign in
            </span>
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title={'Create an account'}
            actionLabel={'Register'}
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={FooterContent}
        />
    )
}