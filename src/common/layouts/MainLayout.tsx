import { FC, ReactElement } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

type MainLayoutProps = {
	children: ReactElement;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className="h-full flex flex-col">
			<Header />

			<main className="overflow-hidden flex-1 flex h-full">
				<Sidebar />
				<div className="w-full h-full">{children}</div>
			</main>
		</div>
	);
};

export default MainLayout;
