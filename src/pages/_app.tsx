import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../assets/styles/tailwind.css";
import AlphaVersionModal from "../common/components/modals/alpha-version-modal";
import type { NextPageWithLayout } from "../common/types";
import { wrapper } from "../setup";
import { setGuild } from "../setup/guild-manager";
import { useAppDispatch, useAppSelector } from "../setup/hooks";
import { openModal } from "../setup/site-manager";

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page: any) => page);
	const guild = useAppSelector((state) => state.guild.data);
	const dispatch = useAppDispatch();

	useEffect(() => {
		// dummy
		!guild &&
			dispatch(
				setGuild({
					id: 1,
					name: "Clay's Support",
					iconURL: "img"
				})
			);

		setTimeout(() => {
			dispatch(
				setGuild({
					id: 2,
					name: "Clay's Community <jahdjk<hk>",
					iconURL: "img"
				})
			);
		}, 2000);
		//  dummy end

		const alphaVersion = localStorage.getItem("alpha-version");

		if (!alphaVersion) {
			dispatch(openModal());
		}
	}, []);

	return (
		<>
			{/* todo: nested modals or something like that */}
			<AlphaVersionModal />

			<div className="w-full h-full bg-gray-800 text-white">
				{getLayout(<Component {...pageProps} />)}
			</div>
		</>
	);
}

export default wrapper.withRedux(App);
