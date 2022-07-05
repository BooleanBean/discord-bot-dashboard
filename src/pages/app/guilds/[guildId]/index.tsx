import Head from "next/head";
import { useRouter } from "next/router";
import MainLayout from "../../../../common/layouts/MainLayout";
import { NextPageWithLayout } from "../../../../common/types";
import { useCurrentUser } from "../../../../utils/api/hooks";

type GuildProps = {};

const Guild: NextPageWithLayout<GuildProps> = () => {
    const router = useRouter();
    const { data: currentUser, loading, error } = useCurrentUser();

    if (loading) return <div>loading...</div>;
    if (!currentUser) return <div>No data</div>;
    if (error) return <div>An error occured</div>;

    return (
        <>
            <Head>
                <title>Guild Dashboard | Clay</title>
                <meta name="description" content="A bot." />
            </Head>

            <div>
                <h1>Hello, {currentUser.username}</h1>
            </div>
        </>
    );
};

Guild.getLayout = page => {
    return <MainLayout>{page}</MainLayout>;
};

export default Guild;
