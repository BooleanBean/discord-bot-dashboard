import * as React from 'react';

import Layout from '#/components/layout/Layout';
import ArrowLink from '#/components/links/ArrowLink';
import Seo from '#/components/Seo';
import Vercel from '~/svg/Vercel.svg';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <Vercel className='text-5xl' />
            <h1 className='mt-4'>
             Discord Bot Dashboard
            </h1>
            <p className='mt-2 text-sm text-gray-800'>
              An open source discord bot dashboard with TailwindCSS.
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='https://github.com/BooleanBean/discord-bot-dashboard'>
                See the repository
              </ArrowLink>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
