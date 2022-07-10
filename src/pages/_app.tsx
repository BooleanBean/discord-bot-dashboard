import { AppProps } from "next/app";
import Router from "next/router";
import { ThemeProvider } from "next-themes";
import NProgress from "nprogress";

import "#/styles/nprogress.css";
import "#/styles/globals.css";
import "#/styles/themes.css";

import Seo from "#/components/Seo";

// NProgress
Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);
// NProgress End

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="data-theme">
      <Seo />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
