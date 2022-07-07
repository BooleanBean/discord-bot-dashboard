import { FC, ReactElement } from "react";
import { useAppSelector } from "../../setup/hooks";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

type Props = {
    children: ReactElement;
};

const GuildDashboardLayout: FC<Props> = ({ children }) => {
    const site = useAppSelector(s => s.site);

    return (
        <div className="flex h-full">
            {site.sidebar && <Sidebar />}

            <div className="w-full overflow-y-scroll overflow-x-hidden">
                <Header />
                <div className="container mx-auto max-w-7xl px-4">{children}</div>
            </div>
        </div>
    );
};

export default GuildDashboardLayout;
