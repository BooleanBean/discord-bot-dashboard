import { APIGuild } from "discord-api-types/v10";
import { useRouter } from "next/router";
import GuildBanner from "../../../common/components/guild/guild-banner";
import GuildIcon from "../../../common/components/guild/guild-icon";
import CleanLayout from "../../../common/layouts/CleanLayout";
import type { NextPageWithLayout } from "../../../common/types";
import { classNames, sortByName } from "../../../utils";
import { useGuilds } from "../../../utils/api/hooks";

const Guilds: NextPageWithLayout = () => {
    const { data, error, loading } = useGuilds();
    const router = useRouter();

    if (loading) return <div>loading...</div>;
    if (!data) return <div>No data</div>;
    if (error) return <div>An error occured</div>;

    const handleClick = async (selectedGuild: APIGuild) => {
        if (!selectedGuild.owner) return;

        await router.push("guilds/" + selectedGuild.id);
    };

    return (
        <>
            <h2 className="font-bold text-5xl mb-12 text-center tracking-wider">
                Select a Guild
            </h2>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                {data.sort(sortByName).map(guild => (
                    <div
                        onClick={() => handleClick(guild)}
                        key={guild.id}
                        className={classNames(
                            guild.owner
                                ? "cursor-pointer"
                                : "opacity-40 cursor-not-allowed",
                            "overflow-hidden flex flex-col justify-between h-72 transition duration-200 ease-out rounded-xl border bg-gray-800 border-gray-700 hover:shadow-2xl hover:scale-105 hover:-translate-y-3"
                        )}
                    >
                        <div className="flex-1 relative">
                            <GuildBanner
                                className="gradient-mask-b-0"
                                id={guild.id}
                                banner={guild.banner}
                                alt={guild.name}
                            />

                            <div className="relative -bottom-4 w-full h-full flex items-end">
                                <div className="mx-3 mb-3 flex items-center">
                                    <div className="relative inline-block flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                                        <GuildIcon
                                            id={guild.id}
                                            icon={guild.icon}
                                            alt={guild.name}
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg font-bold tracking-tight text-white">
                                            {guild.name}
                                        </h5>
                                        <p className="text-gray-300">
                                            {guild.description ??
                                                "Here are the best guild"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex h-28 p-4"></div>
                    </div>
                ))}
            </div>
        </>
    );
};

Guilds.getLayout = page => {
    return <CleanLayout>{page}</CleanLayout>;
};

export default Guilds;
