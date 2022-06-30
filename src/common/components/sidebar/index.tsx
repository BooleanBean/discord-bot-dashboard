import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { classNames } from "../../../utils";
import { getIcon } from "../../../utils/icons";

type SidebarProps = {};

const navigationWithCategories = [
	{
		category: "General",
		items: [
			{
				name: "Dashboard",
				href: "/",
				icon: getIcon("dashboard")
			},
			{
				name: "Guild Settings",
				href: "/guild/settings",
				icon: getIcon("settings")
			}
		]
	},
	{
		category: "Moderation",
		items: [
			{
				name: "Bans",
				href: "/bans",
				icon: getIcon("dashboard")
			},
			{
				name: "Timeouts",
				href: "/timeouts",
				icon: getIcon("settings")
			}
		]
	}
];

const Sidebar: FC<SidebarProps> = () => {
	const router = useRouter();

	return (
		<aside className="flex flex-col flex-shrink-0 w-60 px-4 py-6 bg-white border-r dark:bg-gray-800 dark:border-gray-700">
			<div className="h-full flex flex-col justify-between">
				<div>
					<div className="mb-4">guild details</div>

					<nav className="space-y-4 overflow-auto">
						{navigationWithCategories.map((c) => (
							<div key={c.category}>
								<h5 className="mb-2 text-xs text-gray-500 font-bold uppercase">
									{c.category}
								</h5>
								<div className="space-y-1 ">
									{c.items.map((item) => (
										<Link key={item.name} href={item.href} passHref>
											<a
												className={classNames(
													router.asPath === item.href
														? "text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
														: "dark:text-gray-400 focus:hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700",
													"flex items-center px-4 py-2 rounded-md transition-colors duration-200"
												)}
												aria-current={
													router.asPath === item.href ? "page" : undefined
												}
											>
												{item.icon}
												<span className="mx-4 font-medium">
													{item.name}
												</span>
											</a>
										</Link>
									))}
								</div>
							</div>
						))}
					</nav>
				</div>
				<div className="relative -mx-1 group">guild switcher</div>
			</div>
		</aside>
	);
};

export default Sidebar;
