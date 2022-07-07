import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import "../assets/styles/setup.css";
import type { NextPageWithLayout } from "../common/types";
import { wrapper } from "../setup";
import { setHeaderBorder } from "../setup/site-manager";

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
    const dispatch = useDispatch();

    const onScroll = (e: any) => {
        if (e.target.scrollTop === 0 ?? e.target.scrollTop < 100) {
            dispatch(setHeaderBorder(false));
        } else {
            dispatch(setHeaderBorder(true));
        }
    };

    return (
        <SessionProvider session={pageProps.session}>
            <Head>
                <title>Open Source Bot Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="A bot with a beatiful dashboard." />
            </Head>

            <div className="bg-gray-900 text-white w-full h-full" onScrollCapture={onScroll}>
                {getLayout(<Component {...pageProps} />)}
            </div>
        </SessionProvider>
    );
};

export default wrapper.withRedux(MyApp);
