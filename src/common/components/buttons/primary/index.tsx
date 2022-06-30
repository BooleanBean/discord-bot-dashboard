import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";

type PrimaryButtonProps = ComponentPropsWithoutRef<"button"> & {
	children: ReactNode;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, ...props }) => {
	return (
		<button
			className="inline-flex transition-colors duration-200 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
			{...props}
		>
			{children}
		</button>
	);
};

export default PrimaryButton;
