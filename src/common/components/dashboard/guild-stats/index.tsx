import { Snowflake } from "discord-api-types/globals";
import Link from "next/link";
import type { FC } from "react";
import { useBotGuild, useCurrentUser } from "../../../../utils/api/hooks";

type Props = {
    guildId: Snowflake;
};

const GuildStats: FC<Props> = ({ guildId }) => {
    const { data: currentUser, loading, error } = useCurrentUser();
    const {
        data: guild,
        loading: guildLoading,
        error: guildError
    } = useBotGuild(guildId);

    if (loading || guildLoading) return <div>loading...</div>;
    if (!currentUser || !guild) return <div>No data</div>;
    if (error || guildError) return <div>An error occured</div>;

    return (
        <section>
            <h3 className="mb-2 text-3xl font-semibold tracking-wider">
                Hello, {currentUser.username}!
            </h3>
            <p className="mb-6 text-lg font-normal text-gray-400">
                Here are the some statistics might you want to see
            </p>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="p-5">
                        <p className="mb-3 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
                            New Members
                        </p>
                        <h2 className="text-3xl font-extrabold leading-none text-gray-200 truncate">
                            {guild.stats.new_members.toLocaleString()}
                        </h2>
                    </div>
                    <Link href="settings" passHref>
                        <a className="transition duration-200 ease-out hover:bg-gray-600/80 block text-sm bg-gray-700 text-indigo-500 w-full h-full px-4 py-2">
                            View joined/leaved members
                        </a>
                    </Link>
                </div>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="p-5">
                        <p className="mb-3 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
                            Commands Used
                        </p>
                        <h2 className="text-3xl font-extrabold leading-none text-gray-200 truncate">
                            {guild.stats.commands_used.toLocaleString()}
                        </h2>
                    </div>
                    <Link href="settings" passHref>
                        <a className="transition duration-200 ease-out hover:bg-gray-600/80 block text-sm bg-gray-700 text-indigo-500 w-full h-full px-4 py-2">
                            View used commands
                        </a>
                    </Link>
                </div>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="p-5">
                        <p className="mb-3 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
                            Messages Sent
                        </p>
                        <h2 className="text-3xl font-extrabold leading-none text-gray-200 truncate">
                            {guild.stats.messages_sent.toLocaleString()}
                        </h2>
                    </div>
                    <Link href="settings" passHref>
                        <a className="transition duration-200 ease-out hover:bg-gray-600/80 block text-sm bg-gray-700 text-indigo-500 w-full h-full px-4 py-2">
                            View sent messages
                        </a>
                    </Link>
                </div>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="p-5">
                        <p className="mb-3 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
                            New Members
                        </p>
                        <h2 className="text-3xl font-extrabold leading-none text-gray-200 truncate">
                            4,563
                        </h2>
                    </div>
                    <Link href="settings" passHref>
                        <a className="transition duration-200 ease-out hover:bg-gray-600/80 block text-sm bg-gray-700 text-indigo-500 w-full h-full px-4 py-2">
                            View joined members
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GuildStats;
