/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import "twin.macro";

import FixedLayout from "#/lib/components/layouts/FixedLayout";
import ButtonLink from "#/lib/components/links/ButtonLink";

import { NextPageWithLayout } from "#/global-types";

const Guilds: NextPageWithLayout = () => {
   // TODO: add types
   const { data: guilds, isLoading } = useQuery(
      "guilds",
      async () => await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
   );

   if (isLoading) return <section>Guilds loading... Take a minute</section>;

   return (
      <section tw="mb-10 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
         {/* <pre>{JSON.stringify(guilds, null, 2)}</pre> */}
         {[...guilds, ...guilds, ...guilds].map((guild: any, i) => (
            <div
               key={i} // use guild.id
               tw="p-8 bg-tw-secondary w-full h-56 rounded-lg border border-gray-800"
            >
               {guild.id}
               <ButtonLink href={`/dashboard/guilds/${guild.id}`}>Select</ButtonLink>
            </div>
         ))}
      </section>
   );
};

Guilds.getLayout = (page) => <FixedLayout title="Select a Guild">{page}</FixedLayout>;

export default Guilds;
