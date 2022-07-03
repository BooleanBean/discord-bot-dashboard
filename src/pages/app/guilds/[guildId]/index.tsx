import Head from "next/head";
import { useRouter } from "next/router";
import PrimaryButton from "../../../../common/components/buttons/primary";
import SecondaryButton from "../../../../common/components/buttons/secondary";
import MainLayout from "../../../../common/layouts/MainLayout";
import { NextPageWithLayout } from "../../../../common/types";

type GuildProps = {};

const Guild: NextPageWithLayout<GuildProps> = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Clay Bot</title>
				<meta name="description" content="A bot." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<PrimaryButton>Primary</PrimaryButton>
				<SecondaryButton>Secondary</SecondaryButton>
			</div>
		</>
	);
};

Guild.getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

export default Guild;
