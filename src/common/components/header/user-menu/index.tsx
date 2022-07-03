import { Menu, Transition } from "@headlessui/react";
import { signOut } from "next-auth/react";
import { FC, Fragment } from "react";
import { classNames } from "../../../../utils";
import { getUserAvatarURL } from "../../../../utils/api";
import { useCurrentUser } from "../../../../utils/api/hooks";

type UserMenuProps = {};

const UserMenu: FC<UserMenuProps> = () => {
	const { data, loading, error } = useCurrentUser();

	if (loading) return <div>loading...</div>;
	if (!data) return <div>No data</div>;
	if (error) return <div>An error occured</div>;

	return (
		<Menu as="div" className="ml-3 relative">
			<div>
				<Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
					<span className="sr-only">Open user menu</span>
					<img
						className="h-8 w-8 rounded-full"
						src={getUserAvatarURL(data.id, data.avatar)}
						alt={data.username}
					/>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
					<Menu.Item>
						{({ active }) => (
							<a
								href="#"
								className={classNames(
									active ? "bg-gray-100" : "",
									"w-[95%] block mx-auto rounded-md px-4 py-2 text-sm text-gray-700"
								)}
							>
								Your Profile
							</a>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<a
								href="#"
								className={classNames(
									active ? "bg-gray-100" : "",
									"w-[95%] block mx-auto rounded-md block px-4 py-2 text-sm text-gray-700"
								)}
							>
								Settings
							</a>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<button
								onClick={() => signOut()}
								className={classNames(
									active ? "bg-gray-100" : "",
									"w-[95%] block mx-auto rounded-md block px-4 py-2 text-sm text-gray-700"
								)}
							>
								Sign out
							</button>
						)}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default UserMenu;
