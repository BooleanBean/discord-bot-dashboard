import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../setup/hooks";
import { setSidebar } from "../../../../setup/site-manager";
import { classNames } from "../../../../utils";
import { getIcon } from "../../../../utils/icons";
import PrimaryButton from "../../buttons/primary";
import ProfileDropdownButton from "../../dropdowns/profile-dropdown-button";

type Props = {
    className?: string;
    forceBorder?: boolean;
};

const DashboardHeader: FC<Props> = ({ className, forceBorder }) => {
    const site = useAppSelector(s => s.site);
    const dispatch = useAppDispatch();
    const router = useRouter();

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
                <Link href={"/dashboard/guilds/" + router.query.guildId} passHref>
                    <a className="w-8 h-8 dark:text-indigo-600">{getIcon("hand")}</a>
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

export default DashboardHeader;
