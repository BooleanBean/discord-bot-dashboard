import Link from "next/link";
import { FC } from "react";
import { useAppSelector } from "../../../setup/hooks";
import { classNames } from "../../../utils";
import { getIcon } from "../../../utils/icons";
import ProfileDropdownButton from "../dropdowns/profile-dropdown-button";

type HeaderProps = {
    className?: string;
};

const Header: FC<HeaderProps> = ({ className }) => {
    const site = useAppSelector(s => s.site);

    return (
        <header
            className={classNames(
                "z-10 flex-shrink-0 px-6 flex items-center justify-between bg-gray-900 text-gray-100 h-14",
                site.headerBorder ? "border border-gray-700" : "border-transparent",
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
