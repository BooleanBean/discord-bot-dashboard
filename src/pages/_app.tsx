import { AppProps } from "next/app";
import Router from "next/router";
import { ThemeProvider } from "next-themes";
import NProgress from "nprogress";
import { QueryClientProvider } from "react-query";

import "#/styles/nprogress.css";
import "#/styles/globals.css";
import "#/styles/themes.css";

import Seo from "#/components/Seo";

import { NextPageWithLayout } from "#/global-types";
import { queryClient } from "#/utils/query";

// NProgress
Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);
// NProgress End

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: React.ReactElement) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" attribute="data-theme">
        <Seo />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
