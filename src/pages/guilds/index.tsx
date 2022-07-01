import Head from "next/head";
import { useRouter } from "next/router";
import CleanLayout from "../../common/layouts/CleanLayout";
import type { NextPageWithLayout, PartialGuild } from "../../common/types";
import { setGuild } from "../../setup/guild-manager";
import { useAppDispatch } from "../../setup/hooks";
import { getGuildBannerURL, getGuildIconURL } from "../../utils/api";
import { useGuilds } from "../../utils/api/hooks";

const Guilds: NextPageWithLayout = () => {
	const { data: guilds, isLoading, isError } = useGuilds();
	const router = useRouter();
	const dispatch = useAppDispatch();

	if (isError) return <div>An unexpected error occured.</div>;
	if (!guilds && isLoading) return <div>loading...</div>;

	const handleClick = async (g: PartialGuild) => {
		dispatch(setGuild(g));
		await router.push("/guilds/" + g.id);
		localStorage.setItem("last-guild", g.id);
	};

	return (
		<>
			<Head>
				<title>Select a Guild | Clay Bot</title>
				<meta name="description" content="A bot." />
			</Head>

			<div className="container mx-auto">
				<div className="md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
					{guilds?.map((g) => (
						<button
							onClick={() => handleClick(g)}
							key={g.id}
							className="overflow-hidden max-w-sm bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
						>
							<div className="relative">
								<div className="rounded-xl gradient-mask-b-0">
									<img src={getGuildBannerURL(g.id, g.banner)} alt={g.name} />
								</div>
								<img
									className="rounded-xl absolute bottom-0 -translate-x-1/2 inset-x-1/2  w-20 h-20 "
									src={getGuildIconURL(g.id, g.icon)}
									alt={g.name}
								/>
							</div>
							<div className="p-5">
								<h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
									{g.name}
								</h5>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
									Here are the biggest enterprise technology.
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
