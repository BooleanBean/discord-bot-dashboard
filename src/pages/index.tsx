import * as React from "react";

import Layout from "#/components/layout/Layout";
import ArrowLink from "#/components/links/ArrowLink";
import Seo from "#/components/Seo";
import Settings from "#/components/Settings";

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Settings />

      <main>
        <section>
          <ArrowLink href="/test">Test page</ArrowLink>
          <div className="layout flex min-h-screen flex-col items-center justify-center text-center">
            <h1>Discord Bot Dashboard</h1>
            <p className="mt-2 text-sm text-tw-primary-dark">
              An open source discord bot dashboard with TailwindCSS.
            </p>
            <p className="mt-2 text-sm">
              <ArrowLink href="https://github.com/BooleanBean/discord-bot-dashboard">
                See the repository
              </ArrowLink>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
