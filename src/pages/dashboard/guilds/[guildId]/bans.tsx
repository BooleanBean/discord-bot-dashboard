import Head from "next/head";
import { useRouter } from "next/router";
import GuildDashboardLayout from "../../../../common/layouts/GuildDashboardLayout";
import { NextPageWithLayout } from "../../../../common/types";

type GuildBansProps = {};

const GuildBans: NextPageWithLayout<GuildBansProps> = () => {
    const router = useRouter();

    // if (loading) return <div>loading...</div>;
    // if (!data) return <div>No data</div>;
    // if (error) return <div>An error occured</div>;

    return (
        <>
            <Head>
                <title>Guild Bans | Open Source Bot Dashboard</title>
                <meta name="description" content="A bot." />
            </Head>

            {/* <div>{JSON.stringify(data)}</div> */}
        </>
    );
};

GuildBans.getLayout = page => {
    return <GuildDashboardLayout>{page}</GuildDashboardLayout>;
};

export default GuildBans;
