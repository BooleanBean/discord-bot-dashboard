import Head from "next/head";
import { useRouter } from "next/router";
import CleanLayout from "../../../common/layouts/CleanLayout";
import type { NextPageWithLayout, PartialGuild } from "../../../common/types";
import { getGuildBannerURL, getGuildIconURL } from "../../../utils/api";
import { useGuilds } from "../../../utils/api/hooks";

const Guilds: NextPageWithLayout = () => {
	const { data, error, loading } = useGuilds();
	const router = useRouter();

	if (loading) return <div>loading...</div>;
	if (!data) return <div>No data</div>;
	if (error) return <div>An error occured</div>;

	const handleClick = async (selectedGuild: PartialGuild) => {
		await router.push("guilds/" + selectedGuild.id);
	};

	return (
		<>
			<Head>
				<title>Clay Bot</title>
				<meta name="description" content="A bot." />
			</Head>

			<div className="container mx-auto">
				<div className="md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
					{data.map((guild) => (
						<button
							onClick={() => handleClick(guild)}
							key={guild.id}
							className="overflow-hidden max-w-sm bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
						>
							<div className="relative">
								<div className="rounded-xl gradient-mask-b-0">
									<img
										src={getGuildBannerURL(guild.id, guild.banner)}
										alt={guild.name}
									/>
								</div>
								<img
									className="rounded-xl absolute bottom-0 -translate-x-1/2 inset-x-1/2  w-20 h-20 "
									src={getGuildIconURL(guild.id, guild.icon)}
									alt={guild.name}
								/>
							</div>
							<div className="p-5">
								<h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
									{guild.name}
								</h5>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
									{guild.description ??
										"Here are the biggest enterprise technology."}
								</p>
							</div>
						</button>
					))}
				</div>
			</div>
		</>
	);
};

Guilds.getLayout = (page) => {
	return <CleanLayout>{page}</CleanLayout>;
};

export default Guilds;
