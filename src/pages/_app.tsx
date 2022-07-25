import { AppProps } from "next/app";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import nProgress from "nprogress";
import React, { useEffect } from "react";
import { QueryClientProvider } from "react-query";

import "#styles/nprogress.css";
import "#styles/globals.css";
import "#styles/themes.css";

import GlobalStyles from "#components/GlobalStyles";
import Seo from "#components/Seo";

import { NextPageWithLayout } from "#/global-types";
import { queryClient } from "#/utils/query";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

type AppPropsWithLayout = AppProps & {
   Component: NextPageWithLayout;
};

export default function MyApp({
   Component,
   router,
   pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
   const getLayout = Component.getLayout ?? ((page: React.ReactElement) => page);

   useEffect(() => {
      let timeout: NodeJS.Timeout;

      window.addEventListener("storage", (e: StorageEvent) => {
         if (e.key === "redirect" && e.newValue) {
            timeout = setTimeout(() => router.push(e.newValue as string), 1 * 1000);
            localStorage.removeItem("redirect");
         }
      });

      return () => clearTimeout(timeout);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <SessionProvider session={session}>
         <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="dark" attribute="data-theme">
               <GlobalStyles />
               <Seo />

               {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
         </QueryClientProvider>
      </SessionProvider>
   );
}
