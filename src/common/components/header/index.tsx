import Link from "next/link";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../setup/hooks";
import { setSidebar } from "../../../setup/site-manager";
import { classNames } from "../../../utils";
import { getIcon } from "../../../utils/icons";
import PrimaryButton from "../buttons/primary";
import ProfileDropdownButton from "../dropdowns/profile-dropdown-button";

type HeaderProps = {
    className?: string;
    forceBorder?: boolean;
};

const Header: FC<HeaderProps> = ({ className, forceBorder }) => {
    const site = useAppSelector(s => s.site);
    const dispatch = useAppDispatch();

    return (
        <header
            className={classNames(
                "sticky top-0 backdrop-filter backdrop-blur-xl bg-opacity-20 z-10 flex-shrink-0 px-6 flex items-center justify-between text-gray-100 h-14",
                forceBorder
                    ? "border-b border-gray-700"
                    : site.headerBorder
                    ? "border-b border-gray-700"
                    : "border-transparent",
                className
            )}
        >
            <div className="flex items-center space-x-4">
                <Link href="/" passHref>
                    <a aria-label="Back to homepage" className="w-8 h-8 dark:text-indigo-600">
                        {getIcon("hand")}
                    </a>
                </Link>

                <PrimaryButton onClick={() => dispatch(setSidebar(!site.sidebar))}>
                    Toggle Sidebar
                </PrimaryButton>
            </div>
            <div className="items-center flex-shrink-0 flex">
                <ProfileDropdownButton />
            </div>
        </header>
    );
};

export default Header;
