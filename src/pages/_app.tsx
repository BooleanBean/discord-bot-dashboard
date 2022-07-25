import { AppProps } from "next/app";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import nProgress from "nprogress";
import React, { useEffect } from "react";
import { QueryClientProvider } from "react-query";

import "#/lib/styles/nprogress.css";
import "#/lib/styles/globals.css";
import "#/lib/styles/themes.css";

import Seo from "#/lib/components/Seo";

import { NextPageWithLayout } from "#/global-types";
import { queryClient } from "#/utils/query";

import GlobalStyles from "../lib/components/GlobalStyles";

// nProgress start
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);
// nProgress end

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
