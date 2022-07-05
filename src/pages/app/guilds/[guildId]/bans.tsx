import Head from "next/head";
import { useRouter } from "next/router";
import MainLayout from "../../../../common/layouts/MainLayout";
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
                <title>Guild Bans | Clay</title>
                <meta name="description" content="A bot." />
            </Head>

            {/* <div>{JSON.stringify(data)}</div> */}
        </>
    );
};

GuildBans.getLayout = page => {
    return <MainLayout>{page}</MainLayout>;
};

export default GuildBans;
