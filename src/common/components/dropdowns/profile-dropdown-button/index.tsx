import { Transition } from "@headlessui/react";
import { Avatar } from "flowbite-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { FC, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { getUserAvatarURL } from "../../../../utils/api";
import { useCurrentUser } from "../../../../utils/api/hooks";
import ProfileDropdownButtonItem, {
	ProfileDropdownButtonItemOptions
} from "./profile-dropdown-button-item";

type ProfileDropdownButtonProps = {};

const ProfileDropdownButton: FC<ProfileDropdownButtonProps> = () => {
	const { data, error, loading } = useCurrentUser();
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const ref = useOnclickOutside(() => setOpenMenu(false));

	if (loading) return <div>loading...</div>;
	if (!data) return <div>No data</div>;
	if (error) return <div>An error occured</div>;

	const sepItems: ProfileDropdownButtonItemOptions[][] = [
		[
			{ icon: "profile", href: `/app/users/${data.id}/profile`, text: "View Profile" },
			{ icon: "settings", href: `/app/users/${data.id}/settings`, text: "Settings" }
		],
		[
			{ icon: "support", href: "/support", text: "Support" },
			{
				icon: "signOut",
				onClick: () => {
					signOut();
				},
				text: "Sign out"
			}
		]
	];

	return (
		<div className="relative inline-block" ref={ref}>
			<button
				onClick={() => setOpenMenu((s) => !s)}
				className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-700 focus:outline-none"
			>
				<span className="mx-1">Profile</span>
				<svg
					className="w-5 h-5 mx-1"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
						fill="currentColor"
					></path>
				</svg>
			</button>

			<Transition
				show={openMenu}
				enter="transition-opacity duration-75"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div className="shadow-lg absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
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
									<span className="text-gray-400">#{data.discriminator}</span>
								</h4>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									{data.email}
								</p>
							</div>
						</a>
					</Link>

					{sepItems.map((items) => (
						<>
							<hr className="border-gray-200 dark:border-gray-700 " />
							{items.map((i) => (
								<ProfileDropdownButtonItem
									icon={i.icon}
									href={i.href}
									text={i.text}
									onClick={i.onClick}
								/>
							))}
						</>
					))}
				</div>
			</Transition>
		</div>
	);
};

export default ProfileDropdownButton;
