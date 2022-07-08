import Head from "next/head";
import { useRouter } from "next/router";
import GuildStats from "../../../../common/components/dashboard/guild-stats";
import GuildDashboardLayout from "../../../../common/layouts/GuildDashboardLayout";
import { NextPageWithLayout } from "../../../../common/types";
import { useBotGuild, useCurrentUser } from "../../../../utils/api/hooks";

type GuildProps = {};

const Guild: NextPageWithLayout<GuildProps> = () => {
    const router = useRouter();
    // const { guildId } = router.query;
    const guildId = "992478143304695894";
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
        <>
            <Head>
                <title>Guild Dashboard | Open Source Bot Dashboard</title>
                <meta name="description" content="A bot." />
            </Head>

            <div className="mt-4 lg:mt-10 bg-yellow-100 rounded-lg py-5 px-6 text-black">
                Hello {currentUser.username}, the site currently being viewed is in alpha
                version, it may contain major changes or errors & bugs.
            </div>

            <div className="my-6 lg:my-10 space-y-10 lg:space-y-14">
                <GuildStats guildId={guildId} />

                <div>
                    <h3 className="mb-6 text-3xl font-semibold tracking-wider">
                        Plugins
                    </h3>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                        <div className="py-10 px-6 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden"></div>
                        <div className="py-10 px-6 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden"></div>
                        <div className="py-10 px-6 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden"></div>
                        <div className="py-10 px-6 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden"></div>
                        <div className="py-10 px-6 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden"></div>
                        <div className="py-10 px-6 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"></div>
                        <div className="py-10 px-6 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"></div>
                        <div className="py-10 px-6 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"></div>
                        <div className="py-10 px-6 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

Guild.getLayout = page => {
    return <GuildDashboardLayout>{page}</GuildDashboardLayout>;
};

export default Guild;
