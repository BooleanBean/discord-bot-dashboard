import Head from "next/head";
import { useRouter } from "next/router";
import MainLayout from "../../../../common/layouts/MainLayout";
import { NextPageWithLayout } from "../../../../common/types";

type GuildProps = {};

const Guild: NextPageWithLayout<GuildProps> = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Guild Settings | Clay</title>
                <meta name="description" content="A bot." />
            </Head>

            <div>guild settings - {router.query.guildId}</div>
        </>
    );
};

Guild.getLayout = page => {
    return <MainLayout>{page}</MainLayout>;
};

export default Guild;
