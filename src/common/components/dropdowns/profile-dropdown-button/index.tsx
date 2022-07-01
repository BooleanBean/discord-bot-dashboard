import { Avatar, Dropdown, DropdownProps } from "flowbite-react";
import { signOut } from "next-auth/react";
import type { FC, ReactNode } from "react";
import { getUserAvatarURL } from "../../../../utils/api";
import { useCurrentUser } from "../../../../utils/api/hooks";

type ProfileDropdownButtonProps = {
	placement: DropdownProps["placement"];
	label: ReactNode;
};

const ProfileDropdownButton: FC<ProfileDropdownButtonProps> = ({ label, placement }) => {
	const { data: currentUser, isLoading } = useCurrentUser();

	if (isLoading) return <>loading...</>;

	return (
		<Dropdown placement={placement} label={label ?? currentUser?.username}>
			<Dropdown.Header>
				<div className="flex items-center mb-2">
					<Avatar
						img={getUserAvatarURL(currentUser!.id, currentUser!.avatar)}
						rounded={true}
						// todo
						status="online"
						statusPosition="bottom-right"
					>
						<span className="text-gray-300 text-sm">{currentUser?.username}</span>
						<span className="block text-right text-gray-400 truncate text-sm font-medium">
							#{currentUser?.discriminator}
						</span>
					</Avatar>
				</div>
				<span className="block text-gray-400 truncate text-sm font-medium">
					{currentUser?.email}
				</span>
			</Dropdown.Header>

			<Dropdown.Item>Profile</Dropdown.Item>
			<Dropdown.Item>Billing & Payments</Dropdown.Item>
			<Dropdown.Item>Settings</Dropdown.Item>

			<Dropdown.Divider />

			<Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
		</Dropdown>
	);
};

export default ProfileDropdownButton;
