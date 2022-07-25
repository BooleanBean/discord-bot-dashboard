import * as React from "react";
import { FadeInUpTransition } from "react-transitions-library";
import "twin.macro";

import Button from "#/lib/components/buttons/Button";

import Layout from "#components/layouts/Layout";
import ArrowLink from "#components/links/ArrowLink";
import Seo from "#components/Seo";

import { NextPageWithLayout } from "#/global-types";
import { openInNewWindow } from "#/utils";

const Home: NextPageWithLayout = () => {
   return (
      <>
         <FadeInUpTransition in>
            <section id="hero">
               <div tw="py-10 min-h-screen flex flex-col items-center justify-center text-center">
                  <h1 tw="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-primary-500 to-purple-600">
                     Simple, Cool & Customiziable <br />
                     Discord Bot.
                  </h1>

                  <p tw="mt-2 text-tw-primary-medium text-lg">
                     An open source discord bot & dashboard with TailwindCSS.
                  </p>

                  <div tw="flex flex-wrap justify-center gap-4 mt-8">
                     <Button
                        onClick={() =>
                           openInNewWindow("/auth/sign-in", { internal: true })
                        }
                     >
                        Get Started
                     </Button>
                     <ArrowLink href="https://github.com/BooleanBean/discord-bot-dashboard">
                        See the repository
                     </ArrowLink>
                  </div>
               </div>
            </section>
         </FadeInUpTransition>
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
