import * as React from "react";

import Layout from "#/components/layouts/Layout";
import ArrowLink from "#/components/links/ArrowLink";
import ButtonLink from "#/components/links/ButtonLink";
import Seo from "#/components/Seo";

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <ButtonLink href="/settings">Open Settings</ButtonLink>

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
