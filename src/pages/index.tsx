import Head from "next/head";
import MainLayout from "../common/layouts/MainLayout";
import type { NextPageWithLayout } from "../common/types";

type HomeProps = {};

const Home: NextPageWithLayout<HomeProps> = () => {
	return (
		<>
			<Head>
				<title>Clay Bot</title>
				<meta name="description" content="A bot." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</>
	);
};

Home.getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

export default Home;
