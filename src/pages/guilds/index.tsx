import Head from "next/head";
import MainLayout from "../../common/layouts/MainLayout";
import type { NextPageWithLayout } from "../../common/types";

const Guilds: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Select a Guild | Clay Bot</title>
				<meta name="description" content="A bot." />
			</Head>
		</>
	);
};

Guilds.getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

export default Guilds;
