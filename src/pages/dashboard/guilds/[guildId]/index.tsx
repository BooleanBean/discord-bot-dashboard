import { NextPage } from "next";
import { useRouter } from "next/router";

import ArrowLink from "#/lib/components/links/ArrowLink";

const Guild: NextPage = () => {
   const router = useRouter();

   return (
      <div>
         <ArrowLink href="/">GO HOME PAGE</ArrowLink>
         Guild {router.query.guildId}
      </div>
   );
};

export default Guild;
