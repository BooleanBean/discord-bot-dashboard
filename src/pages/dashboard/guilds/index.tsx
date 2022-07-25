import { ImSpinner3 } from "react-icons/im";
import "twin.macro";

import FixedLayout from "#components/layouts/FixedLayout";
import ButtonLink from "#components/links/ButtonLink";

import { NextPageWithLayout } from "#/global-types";
import { useUserGuilds } from "#/utils/query";

const Guilds: NextPageWithLayout = () => {
   const { data: guilds, isLoading } = useUserGuilds();

   if (!guilds?.length || isLoading)
      return <ImSpinner3 tw="animate-spin w-8 h-8 text-white" />;

   return (
      <section tw="mb-10 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
         {guilds.map((guild) => (
            <div
               key={guild.id}
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
