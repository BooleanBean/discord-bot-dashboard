import { FC, ReactElement } from "react";
import { useAppSelector } from "../../setup/hooks";
import Header from "../components/header";
import Scroller from "../components/scroller";
import Sidebar from "../components/sidebar";

type MainLayoutProps = {
    children: ReactElement;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    const site = useAppSelector(s => s.site);

    return (
        <>
            <Header forceBorder={true} />

            <div className="flex h-[calc(100%_-_3.5rem)]">
                {site.sidebar && <Sidebar />}
                <Scroller component="main" className="container mx-auto">
                    {children}
                </Scroller>
            </div>
        </>
    );
};

export default MainLayout;
