import * as React from "react";
import "twin.macro";

import Layout from "#/lib/components/layouts/Layout";
import ArrowLink from "#/lib/components/links/ArrowLink";
import Seo from "#/lib/components/Seo";

import { NextPageWithLayout } from "#/global-types";

const Home: NextPageWithLayout = () => {
   return (
      <>
         <section id="header">
            <div tw="flex min-h-screen flex-col items-center justify-center text-center">
               <h1>Discord Bot Dashboard</h1>
               <p tw="mt-2 text-sm text-tw-primary-dark">
                  An open source discord bot dashboard with TailwindCSS.
               </p>
               <p tw="mt-2 text-sm">
                  <ArrowLink href="https://github.com/BooleanBean/discord-bot-dashboard">
                     See the repository
                  </ArrowLink>
               </p>
            </div>
         </section>
      </>
   );
};

Home.getLayout = (page) => (
   <Layout>
      <Seo />
      {page}
   </Layout>
);

export default Home;
