import { useRouter } from "next/router";
import { FC } from "react";
import { NavigationLinksWithCategories } from "../../types";
import GuildCard from "./guild-card";
import GuildLink from "./guild-link";

type SidebarProps = {};

const Sidebar: FC<SidebarProps> = () => {
	const router = useRouter();
	const navigationLinksWithCategories: NavigationLinksWithCategories[] = [
		{
			category: "General",
			items: [
				{
					name: "Dashboard",
					href: `/app/guilds/${router.query.guildId}`,
					icon: "dashboard"
				},
				{
					name: "Statistics",
					href: `/app/guilds/${router.query.guildId}/statistics`,
					icon: "chartPie"
				},
				{
					name: "Settings",
					href: `/app/guilds/${router.query.guildId}/settings`,
					icon: "settings"
				}
			]
		},
		{
			category: "Moderation",
			items: [
				{
					name: "Bans",
					href: "bans",
					icon: "userLeave"
				},
				{
					name: "Timeouts",
					href: "timeouts",
					icon: "settings"
				},
				{
					name: "Audit Log",
					href: "audit-log",
					icon: "settings"
				}
			]
		}
	];

	return (
		<aside className="flex-shrink-0 w-64 border-r bg-gray-900 border-gray-700">
			<div className="p-6 cursor-default h-full w-full flex flex-col justify-between">
				<div className="h-full overflow-auto">
					<GuildCard />

					<nav className="space-y-4">
						{navigationLinksWithCategories.map((c) => (
							<div key={c.category}>
								<h5 className="mb-2 text-xs text-gray-500 font-bold uppercase">
									{c.category}
								</h5>
								<div>
									{c.items.map((link) => (
										<GuildLink key={link.href} link={link} />
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
