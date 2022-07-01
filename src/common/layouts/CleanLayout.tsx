import { FC, ReactElement } from "react";
import Header from "../components/header";

type CleanLayoutProps = {
	children: ReactElement;
};

const CleanLayout: FC<CleanLayoutProps> = ({ children }) => {
	return (
		<>
			<Header />

			<main className="overflow-y-auto p-6 w-full h-[calc(theme(height.full)_-_theme(height.14))]">
				{children}
			</main>
		</>
	);
};

export default CleanLayout;
