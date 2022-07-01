import { Disclosure } from "@headlessui/react";
import { useAppSelector } from "../../../setup/hooks";
import { useCurrentUser } from "../../../utils/api/hooks";
import ProfileDropdownButton from "../dropdowns/profile-dropdown-button";

const Header = () => {
	const guild = useAppSelector((state) => state.guild.data);
	const currentUser = useCurrentUser();

	return (
		<Disclosure as="nav" className="bg-white dark:bg-gray-800 border-b border-b-gray-700">
			<div className="flex items-center justify-between h-14 px-6">
				<div className="flex-1 h-full flex items-center">left</div>
				<div className="h-full flex items-center">
					<ProfileDropdownButton placement="bottom-end" label="Profile" />
				</div>

				{/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button
									type="button"
									className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								>
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button>

								<DropdownButton userInformation={currentUser.data}>
									Profile
								</DropdownButton>
							</div> */}
			</div>
		</Disclosure>
	);
};

export default Header;
