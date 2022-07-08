import { FC, ReactElement } from "react";
import { useAppSelector } from "../../setup/hooks";
import DashboardHeader from "../components/dashboard/dashboard-header";
import Sidebar from "../components/dashboard/dashboard-sidebar";

type Props = {
    children: ReactElement;
};

const GuildDashboardLayout: FC<Props> = ({ children }) => {
    const site = useAppSelector(s => s.site);

    return (
        <div className="flex h-full">
            {site.sidebar && <Sidebar />}

            <div className="w-full overflow-y-scroll overflow-x-hidden">
                <DashboardHeader />
                <main className="container mx-auto">{children}</main>
            </div>
        </div>
    );
};

export default GuildDashboardLayout;
