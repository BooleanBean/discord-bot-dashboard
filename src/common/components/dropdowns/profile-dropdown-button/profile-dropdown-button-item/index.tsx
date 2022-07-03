import Link from "next/link";
import type { FC } from "react";
import { getIcon, IconsStrings } from "../../../../../utils/icons";

export type ProfileDropdownButtonItemOptions = {
	icon?: IconsStrings;
	text: string;
	href?: string;
	onClick?: () => void;
};

type ProfileDropdownButtonItemProps = ProfileDropdownButtonItemOptions & {};

const ProfileDropdownButtonItem: FC<ProfileDropdownButtonItemProps> = ({
	icon,
	text,
	href,
	onClick
}) => {
	return href ? (
		<Link href={href} passHref>
			<a className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-150 ease-out transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
				{icon && <span className="w-5 h-5 mx-1">{getIcon(icon)}</span>}

				<span className="mx-1">{text}</span>
			</a>
		</Link>
	) : (
		<button
			onClick={onClick}
			className="w-full flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-150 ease-out transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
		>
			{icon && <span className="w-5 h-5 mx-1">{getIcon(icon)}</span>}
			<span className="mx-1">{text}</span>
		</button>
	);
};

export default ProfileDropdownButtonItem;
