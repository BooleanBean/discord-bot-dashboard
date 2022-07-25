import { useRouter } from "next/router";

import DashboardLayout from "#components/layouts/DashboardLayout";
import ArrowLink from "#components/links/ArrowLink";
import Seo from "#components/Seo";

import { NextPageWithLayout } from "#/global-types";

const Guild: NextPageWithLayout = () => {
   const router = useRouter();

   return (
      <div>
         <ArrowLink href="/">GO HOME PAGE</ArrowLink>
         Guild {router.query.guildId}
      </div>
   );
};

Guild.getLayout = (page) => (
   <DashboardLayout>
      <Seo templateTitle="Guild" />
      {page}
   </DashboardLayout>
);

export default Guild;
