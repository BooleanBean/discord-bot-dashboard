import Link from "next/link";
import { FC } from "react";
import { classNames } from "../../../utils";
import { getIcon } from "../../../utils/icons";
import ProfileDropdownButton from "../dropdowns/profile-dropdown-button";

type HeaderProps = {
    className?: string;
};

const Header: FC<HeaderProps> = ({ className }) => {
    return (
        <header
            className={classNames(
                "flex-shrink-0 px-6 flex items-center justify-between bg-gray-900 text-gray-100 border-b border-gray-700 h-14",
                className
            )}
        >
            <div className="flex">
                <Link href="/" passHref>
                    <a aria-label="Back to homepage" className="w-8 h-8 dark:text-indigo-600">
                        {getIcon("hand")}
                    </a>
                </Link>
            </div>
            <div className="items-center flex-shrink-0 flex">
                <ProfileDropdownButton />
            </div>
        </header>
    );
};

export default Header;
