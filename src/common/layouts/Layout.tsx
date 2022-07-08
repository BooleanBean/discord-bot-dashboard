import { FC, ReactElement } from "react";
import Header from "../components/header";

type Props = {
    children: ReactElement;
};

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className="overflow-auto h-full">
            <Header />
            <main className="container mx-auto">{children}</main>
        </div>
    );
};

export default Layout;
