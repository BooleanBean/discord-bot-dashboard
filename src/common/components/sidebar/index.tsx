import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { classNames } from "../../../utils";
import { getIcon } from "../../../utils/icons";
import GuildCard from "./guild-card";

type SidebarProps = {};

const Sidebar: FC<SidebarProps> = () => {
	const router = useRouter();

	const navigationWithCategories = [
		{
			category: "General",
			items: [
				{
					name: "Dashboard",
					href: `/app/guilds/${router.query.guildId}`,
					icon: getIcon("dashboard")
				},
				{
					name: "Statistics",
					href: `/app/guilds/${router.query.guildId}/statistics`,
					icon: getIcon("chartPie"),
					badge: (
						<span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-600 dark:text-gray-300">
							Pro
						</span>
					)
				},
				{
					name: "Settings",
					href: `/app/guilds/${router.query.guildId}/settings`,
					icon: getIcon("settings")
				}
			]
		},
		{
			category: "Moderation",
			items: [
				{
					name: "Bans",
					href: "bans",
					icon: getIcon("userLeave")
				},
				{
					name: "Timeouts",
					href: "timeouts",
					icon: getIcon("settings")
				},
				{
					name: "Audit Log",
					href: "audit-log",
					icon: getIcon("settings")
				}
			]
		}
	];

	return (
		<aside className="flex-shrink-0 w-64 border-r bg-gray-800 border-gray-700">
			<div className="p-6 cursor-default h-full w-full flex flex-col justify-between">
				<div className="h-full overflow-auto">
					<GuildCard />

					<nav className="space-y-4">
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
													"relative w-full whitespace-nowrap flex justify-between items-center px-4 py-2 rounded-full transition-colors ease-out"
												)}
												aria-current={
													router.asPath === item.href ? "page" : undefined
												}
											>
												<div className="flex items-center">
													{item.icon}
													<span className="mx-4 font-medium">
														{item.name}
													</span>
												</div>
												<span className="absolute right-2">
													{item.badge}
												</span>
											</a>
										</Link>
									))}
								</div>
							</div>
						))}
					</nav>
				</div>
				<div>guild switcher</div>
			</div>
		</aside>
	);
};

export default Sidebar;
