import Head from "next/head";
import MainLayout from "../../../common/layouts/MainLayout";
import { NextPageWithLayout } from "../../../common/types";
import { useAppSelector } from "../../../setup/hooks";

type GuildProps = {};

const Guild: NextPageWithLayout<GuildProps> = () => {
	const guild = useAppSelector((state) => state.guild.data);

	return (
		<>
			<Head>
				<title>Guild Settings | Clay Bot</title>
				<meta name="description" content="A bot." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			Guild settings {JSON.stringify(guild)}
		</>
	);
};

Guild.getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

export default Guild;
