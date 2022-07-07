import { useRouter } from "next/router";
import { FC } from "react";
import { NavigationLinksWithCategories } from "../../types";
import GuildCard from "./guild-card";
import GuildLink from "./guild-link";
import GuildSwitcher from "./guild-switcher";

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
                }
            ]
        },
        {
            category: "Moderation",
            items: [
                {
                    name: "Bans",
                    href: `/app/guilds/${router.query.guildId}/bans`,
                    icon: "userLeave"
                },
                {
                    name: "Audit Logs",
                    href: `/app/guilds/${router.query.guildId}/audit-logs`,
                    icon: "folderRemove"
                }
            ]
        },
        {
            category: "Miscellaneous",
            items: [
                {
                    name: "Settings",
                    href: `/app/guilds/${router.query.guildId}/settings`,
                    icon: "settings"
                }
            ]
        }
    ];

    return (
        <div className="flex-shrink-0 flex flex-col justify-between w-72 border-r border-gray-700">
            <div className="px-6 pt-6">
                <GuildCard />

                <nav className="space-y-4">
                    {navigationLinksWithCategories.map(c => (
                        <div key={c.category}>
                            <h5 className="mb-2 text-xs text-gray-500 font-bold uppercase">
                                {c.category}
                            </h5>
                            <div className="space-y-px">
                                {c.items.map(link => (
                                    <GuildLink key={link.href} link={link} />
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
            <GuildSwitcher />
        </div>
    );
};

export default Sidebar;
