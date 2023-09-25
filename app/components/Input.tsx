
type InputPorps = {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputPorps) => {
    return (
        <input
            disabled={props.disabled}
            onChange={props.onChange}
            value={props.value}
            placeholder={props.placeholder}
            type={props.type}
            className="
                w-full
                p-4
                text-lg
                bg-black
                border-2
                border-netural-800
                outline-none
                text-white
                focus:border-sky-500
                focus:border-2
                transition
                disabled:bg-netural-900
                disabled:opacity-70
                disabled:cursor-not-allowed
            "
        />
    )
}