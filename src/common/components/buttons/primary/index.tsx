import { ComponentPropsWithRef, FC, forwardRef, ReactNode } from "react";

type PrimaryButtonProps = ComponentPropsWithRef<"button"> & {
    children: ReactNode;
};

const PrimaryButton: FC<PrimaryButtonProps> = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
    ({ children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className="inline-flex transition-colors duration-150 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                {...props}
            >
                {children}
            </button>
        );
    }
);

export default PrimaryButton;
