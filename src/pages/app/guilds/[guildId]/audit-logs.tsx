import Head from "next/head";
import { useRouter } from "next/router";
import GuildDashboardLayout from "../../../../common/layouts/GuildDashboardLayout";
import { NextPageWithLayout } from "../../../../common/types";

type GuildAuditLogsProps = {};

const GuildAuditLogs: NextPageWithLayout<GuildAuditLogsProps> = () => {
    const router = useRouter();

    // if (loading) return <div>loading...</div>;
    // if (!data) return <div>No data</div>;
    // if (error) return <div>An error occured</div>;

    return (
        <>
            <Head>
                <title>Guild Audit Logs | Open Source Bot Dashboard</title>
                <meta name="description" content="A bot." />
            </Head>

            {/* <div>{JSON.stringify(data)}</div> */}
        </>
    );
};

GuildAuditLogs.getLayout = page => {
    return <GuildDashboardLayout>{page}</GuildDashboardLayout>;
};

export default GuildAuditLogs;
