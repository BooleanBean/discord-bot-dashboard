import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import MainLayout from "../../../common/layouts/MainLayout";
import { NextPageWithLayout } from "../../../common/types";
import { setGuild } from "../../../setup/guild-manager";
import { useAppDispatch, useAppSelector } from "../../../setup/hooks";
import { useGuilds } from "../../../utils/api/hooks";

type GuildProps = {};

const Guild: NextPageWithLayout<GuildProps> = () => {
	const guild = useAppSelector((state) => state.guild.data);
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { data: guilds, isLoading } = useGuilds();

	useEffect(() => {
		async function check() {
			if (!guild) {
				if (isLoading) return;

				const g = guilds?.find((g) => g.id === router.query.guildId);
				if (!g) return await router.push("/guilds");

				dispatch(setGuild(g));
			}
		}
		check();
	}, [guild, isLoading]);

	if (!guild) return <div>loading...</div>;

	return (
		<>
			<Head>
				<title>Clay Bot</title>
				<meta name="description" content="A bot." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{JSON.stringify(guild)}
		</>
	);
};

Guild.getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

export default Guild;
