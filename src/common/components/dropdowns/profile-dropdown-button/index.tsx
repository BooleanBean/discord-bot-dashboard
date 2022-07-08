import { Transition } from "@headlessui/react";
import { Avatar } from "flowbite-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, Fragment, useState } from "react";
import useOnClickOutside from "react-cool-onclickoutside";
import { getUserAvatarURL } from "../../../../utils/api";
import { useCurrentUser } from "../../../../utils/api/hooks";
import Spinner from "../../spinner";
import ProfileDropdownButtonItem, {
    ProfileDropdownButtonItemOptions
} from "./profile-dropdown-button-item";

type ProfileDropdownButtonProps = {};

const ProfileDropdownButton: FC<ProfileDropdownButtonProps> = () => {
    const { data, error, loading } = useCurrentUser();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const ref = useOnClickOutside(() => setOpenMenu(false));
    const router = useRouter();

    if (loading) return <Spinner size="sm" />;
    if (!data) return <div>No data</div>;
    if (error) return <div>An error occured</div>;

    const sepItems: ProfileDropdownButtonItemOptions[][] = [
        [
            {
                icon: "profile",
                href: `/app/users/${data.id}/profile`,
                text: "View Profile"
            },
            { icon: "settings", href: `/app/users/${data.id}/settings`, text: "Settings" }
        ],
        [
            { icon: "support", href: "/support", text: "Support" },
            {
                icon: "signOut",
                text: "Sign out",
                onClick: async () => {
                    const data = await signOut({ redirect: false, callbackUrl: "/" });
                    router.push(data.url);
                }
            }
        ]
    ];

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setOpenMenu(s => !s)}
                className="relative flex items-center text-sm rounded-full bg-gray-700"
            >
                <Avatar
                    rounded
                    size="sm"
                    statusPosition="bottom-right"
                    status="online"
                    img={getUserAvatarURL(data.id, data.avatar)}
                    alt={data.username}
                />
            </button>

            <Transition
                show={openMenu}
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <div className="absolute right-0 w-56 py-2 mt-2 overflow-hidden rounded-md shadow-xl bg-gray-800">
                    <Link href={`/app/users/${data.id}/profile`} passHref>
                        <a className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                            <div className="flex-shrink-0">
                                <Avatar
                                    rounded
                                    statusPosition="bottom-right"
                                    status="online"
                                    img={getUserAvatarURL(data.id, data.avatar)}
                                    alt={data.username}
                                />
                            </div>
                            <div className="mx-3">
                                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    {data.username}
                                    <span className="text-gray-400">
                                        #{data.discriminator}
                                    </span>
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {data.email}
                                </p>
                            </div>
                        </a>
                    </Link>

                    {sepItems.map((items, i) => (
                        <div key={i}>
                            <hr className="border-gray-200 dark:border-gray-700 " />
                            {items.map(i => (
                                <ProfileDropdownButtonItem
                                    key={i.href ?? i.text}
                                    icon={i.icon}
                                    href={i.href}
                                    text={i.text}
                                    onClick={i.onClick}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </Transition>
        </div>
    );
};

export default ProfileDropdownButton;
