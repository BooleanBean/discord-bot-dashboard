import { FC, ReactElement } from "react";
import StyledLink from "../components/links/styled-link";

type Props = {
    children: ReactElement;
};

const CleanLayout: FC<Props> = ({ children }) => {
    return (
        <div className="overflow-y-auto overflow-x-hidden h-full">
            <main className="relative container mx-auto pt-32 pb-12">
                <div className="absolute top-20 left-14">
                    <StyledLink href="/" leftIcon="chevronLeft">
                        Back
                    </StyledLink>
                </div>
                {children}
            </main>
        </div>
    );
};

export default CleanLayout;
