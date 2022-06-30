import Head from "next/head";
import MainLayout from "../common/layouts/MainLayout";
import type { NextPageWithLayout } from "../common/types";
import { useAppSelector } from "../setup/hooks";

const Home: NextPageWithLayout = () => {
	const guild = useAppSelector((state) => state.guild.data);

	return (
		<>
			<Head>
				<title>Clay Bot</title>
				<meta name="description" content="A bot." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>{JSON.stringify(guild)}</div>
		</>
	);
};

Home.getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

export default Home;
