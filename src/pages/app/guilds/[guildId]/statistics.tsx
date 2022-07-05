import Head from "next/head";
import { useRouter } from "next/router";
import MainLayout from "../../../../common/layouts/MainLayout";
import { NextPageWithLayout } from "../../../../common/types";

type GuildStatisticsProps = {};

const GuildStatistics: NextPageWithLayout<GuildStatisticsProps> = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Guild Statistics | Clay</title>
                <meta name="description" content="A bot." />
            </Head>

            <div>guild statistics - {router.query.guildId}</div>
        </>
    );
};

GuildStatistics.getLayout = page => {
    return <MainLayout>{page}</MainLayout>;
};

export default GuildStatistics;
