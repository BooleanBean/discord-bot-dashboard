import { Disclosure } from "@headlessui/react";
import ProfileDropdownButton from "../dropdowns/profile-dropdown-button";

const Header = () => {
	return (
		<Disclosure as="nav" className="bg-white dark:bg-gray-800 border-b border-b-gray-700">
			<div className="flex items-center justify-between h-14 px-6">
				<div className="flex-1 h-full flex items-center">left</div>
				<div className="h-full flex items-center">
					<ProfileDropdownButton placement="bottom-end" label="Profile" />
				</div>
			</div>
		</Disclosure>
	);
};

export default Header;
