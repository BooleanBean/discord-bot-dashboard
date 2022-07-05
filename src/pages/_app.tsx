import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import App from "next/app";
import Head from "next/head";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../assets/styles/setup.css";
import type { NextPageWithLayout } from "../common/types";
import { wrapper } from "../setup";

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

class MyApp extends App<AppPropsWithLayout> {
    public render() {
        const { Component, pageProps } = this.props;

        const getLayout = Component.getLayout ?? ((page: any) => page);

        return (
            <SessionProvider session={pageProps.session}>
                <Head>
                    <title>Clay</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="description" content="A bot with a beatiful dashboard." />
                </Head>

                <div className="bg-gray-900 text-white w-full h-full">
                    {getLayout(<Component {...pageProps} />)}
                </div>
            </SessionProvider>
        );
    }
}

export default wrapper.withRedux(MyApp);
