import { AppProps } from "next/app";
import Router from "next/router";
import nProgress from "nprogress";

import "#/styles/nprogress.css";
import "#/styles/globals.css";
// !STARTERCONF This is for demo purposes, remove #/styles/colors.css import immediately
import "#/styles/colors.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
