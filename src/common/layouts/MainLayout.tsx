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

            <div className="flex h-full">
                <Sidebar />
                <main className="container mx-auto">{children}</main>
            </div>
        </div>
    );
};

export default MainLayout;
