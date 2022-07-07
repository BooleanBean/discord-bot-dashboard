import { FC, ReactElement } from "react";
import Header from "../components/header";

type CleanLayoutProps = {
    children: ReactElement;
};

const CleanLayout: FC<CleanLayoutProps> = ({ children }) => {
    return (
        <div className="overflow-auto h-full">
            <Header />
            <main className="container mx-auto max-w-7xl px-4">{children}</main>
        </div>
    );
};

export default CleanLayout;
