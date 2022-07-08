import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";
import { useAppSelector } from "../../../setup/hooks";
import { classNames } from "../../../utils";
import { getIcon } from "../../../utils/icons";
import ProfileDropdownButton from "../dropdowns/profile-dropdown-button";
import UnstyledLink from "../links/unstyled-link";

type HeaderProps = {
    className?: string;
    forceBorder?: boolean;
};

const Header: FC<HeaderProps> = ({ className, forceBorder }) => {
    const site = useAppSelector(s => s.site);
    const { data, status } = useSession();

    return (
        <header
            className={classNames(
                "container mx-auto transition duration-200 sticky top-0 backdrop-filter backdrop-blur-lg bg-gray-900 bg-opacity-60 z-10 flex-shrink-0 flex items-center justify-between text-gray-100 h-16",
                forceBorder
                    ? "border-b border-gray-700 shadow-xl"
                    : site.headerBorder
                    ? "border-b border-gray-700 shadow-xl"
                    : "border-transparent",
                className
            )}
        >
            <div className="flex items-center space-x-4">
                <Link href="/" passHref>
                    <a className="w-8 h-8 dark:text-indigo-600">{getIcon("hand")}</a>
                </Link>
                {/* <h4 className="font-bold text-lg tracking-wider">
                    Open Source Dashboard
                </h4> */}
            </div>
            <div className="items-center flex-shrink-0 flex">
                <UnstyledLink href="/dashboard/guilds">Dashboard</UnstyledLink>

                {data && (
                    <div className="ml-4">
                        <ProfileDropdownButton />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
