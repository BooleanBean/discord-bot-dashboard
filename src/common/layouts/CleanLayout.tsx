import { FC, ReactElement } from "react";
import Scroll from "react-perfect-scrollbar";
import Header from "../components/header";

type CleanLayoutProps = {
    children: ReactElement;
};

const CleanLayout: FC<CleanLayoutProps> = ({ children }) => {
    return (
        <>
            <Header className="border-none" />

            <Scroll
                component="main"
                className="overflow-x-hidden overflow-y-auto h-[calc(theme(height.full)_-_theme(height.14))]"
            >
                <div className="container mx-auto">{children}</div>
            </Scroll>
        </>
    );
};

export default CleanLayout;
