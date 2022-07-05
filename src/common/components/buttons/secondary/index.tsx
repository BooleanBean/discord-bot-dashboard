import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";

type SecondaryButtonProps = ComponentPropsWithoutRef<"button"> & {
    children: ReactNode;
};

const SecondaryButton: FC<SecondaryButtonProps> = ({ children, ...props }) => {
    return (
        <button
            className="inline-flex transition-colors duration-150 justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-indigo-100 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 focus-visible:ring-offset-2"
            {...props}
        >
            {children}
        </button>
    );
};

export default SecondaryButton;
