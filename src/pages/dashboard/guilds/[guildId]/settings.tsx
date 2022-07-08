import Head from "next/head";
import { useRouter } from "next/router";
import GuildDashboardLayout from "../../../../common/layouts/GuildDashboardLayout";
import { NextPageWithLayout } from "../../../../common/types";

type GuildProps = {};

const Guild: NextPageWithLayout<GuildProps> = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Guild Settings | Open Source Bot Dashboard</title>
                <meta name="description" content="A bot." />
            </Head>

            <div>guild settings - {router.query.guildId}</div>
        </>
    );
};

Guild.getLayout = page => {
    return <GuildDashboardLayout>{page}</GuildDashboardLayout>;
};

export default Guild;
