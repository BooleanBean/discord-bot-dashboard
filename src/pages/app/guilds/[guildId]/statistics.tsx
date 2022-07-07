import Head from "next/head";
import { useRouter } from "next/router";
import GuildDashboardLayout from "../../../../common/layouts/GuildDashboardLayout";
import { NextPageWithLayout } from "../../../../common/types";

type GuildStatisticsProps = {};

const GuildStatistics: NextPageWithLayout<GuildStatisticsProps> = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Guild Statistics | Open Source Bot Dashboard</title>
                <meta name="description" content="A bot." />
            </Head>

            <div>guild statistics - {router.query.guildId}</div>
        </>
    );
};

GuildStatistics.getLayout = page => {
    return <GuildDashboardLayout>{page}</GuildDashboardLayout>;
};

export default GuildStatistics;
