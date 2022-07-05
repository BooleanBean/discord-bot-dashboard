import { FC, ReactElement } from "react";
import Header from "../components/header";
import Scroller from "../components/scroller";

type CleanLayoutProps = {
    children: ReactElement;
};

const CleanLayout: FC<CleanLayoutProps> = ({ children }) => {
    return (
        <Scroller>
            <Header className="sticky top-0 backdrop-filter backdrop-blur-xl bg-opacity-20" />
            <main className="container mx-auto">{children}</main>
        </Scroller>
    );
};

export default CleanLayout;
