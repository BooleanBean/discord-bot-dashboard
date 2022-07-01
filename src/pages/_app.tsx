import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../assets/styles/tailwind.css";
import AlphaVersionModal from "../common/components/modals/alpha-version-modal";
import type { NextPageWithLayout } from "../common/types";
import { wrapper } from "../setup";
import { setGuild } from "../setup/guild-manager";
import { useAppDispatch, useAppSelector } from "../setup/hooks";
import { openModal } from "../setup/site-manager";
import { useGuilds } from "../utils/api/hooks";

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page: any) => page);
	const dispatch = useAppDispatch();
	const guild = useAppSelector((state) => state.guild.data);
	const router = useRouter();
	const { data: guilds, isLoading } = useGuilds();

	useEffect(() => {
		const alphaVersion = localStorage.getItem("alpha-version");

		if (!alphaVersion) {
			dispatch(openModal());
		}
	}, []);

	useEffect(() => {
		async function check() {
			if (guild) {
				return localStorage.setItem("last-guild", guild.id);
			}

			const lastGuildId = localStorage.getItem("last-guild");

			if (lastGuildId) {
				const g = guilds?.find((g) => g.id === lastGuildId);
				console.log("here works");
				g && dispatch(setGuild(g));
			}
		}
		check();
	}, [guild, isLoading]);

	return (
		<>
			{/* todo: nested modals or something like that */}
			<AlphaVersionModal />

			<div className="bg-gray-900 text-white w-full h-full">
				{getLayout(<Component {...pageProps} />)}
			</div>
		</>
	);
}

const AppWrapper = ({
	Component,
	pageProps: { session, ...pageProps },
	...props
}: AppPropsWithLayout) => {
	return (
		<SessionProvider session={session}>
			<App Component={Component} pageProps={pageProps} {...props} />
		</SessionProvider>
	);
};

export default wrapper.withRedux(AppWrapper);
