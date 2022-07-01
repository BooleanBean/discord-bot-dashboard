import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../assets/styles/tailwind.css";
import AlphaVersionModal from "../common/components/modals/alpha-version-modal";
import type { NextPageWithLayout } from "../common/types";
import { wrapper } from "../setup";
import { useAppDispatch } from "../setup/hooks";
import { openModal } from "../setup/site-manager";

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page: any) => page);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const alphaVersion = localStorage.getItem("alpha-version");

		if (!alphaVersion) {
			dispatch(openModal());
		}
	}, []);

	return (
		<SessionProvider session={session}>
			{/* todo: nested modals or something like that */}
			<AlphaVersionModal />

			<div className="relative w-full h-full bg-gray-800 text-white">
				{getLayout(<Component {...pageProps} />)}
			</div>
		</SessionProvider>
	);
}

export default wrapper.withRedux(App);
