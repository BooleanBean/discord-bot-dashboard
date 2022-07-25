import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import "twin.macro";

import Button from "#components/buttons/Button";
import PrimaryLink from "#components/links/PrimaryLink";
import UnstyledLink from "#components/links/UnstyledLink";
import { Container } from "#components/StyledComponents";

import { openInNewWindow } from "#/utils";

type Props = Record<string, unknown>;

const Header: React.FC<Props> = () => {
   const { data: session, status } = useSession();
   const [loading, setLoading] = useState<boolean>(false);

   useEffect(() => {
      if (status === "loading") setLoading(true);
      else if (status === "authenticated") setLoading(false);
      else setLoading(false);
   }, [status]);

   const handleLogout = () => signOut({ callbackUrl: "/" });

   return (
      <header>
         <Container tw="flex h-16 items-center justify-between">
            <div tw="flex h-full flex-1 items-center">
               <UnstyledLink href="/" tw="text-xl font-semibold">
                  Discord Bot
               </UnstyledLink>

               <nav tw="ml-8 hidden space-x-4 lg:flex lg:items-center text-lg">
                  <PrimaryLink href="/settings">Docs</PrimaryLink>
                  <PrimaryLink href="/settings">Settings</PrimaryLink>
               </nav>
            </div>
            <div tw="flex h-full items-center space-x-4">
               {session?.user && (
                  <>
                     <PrimaryLink tw="text-lg" href="/dashboard/guilds">
                        <MdSpaceDashboard tw="w-8 h-8" />
                     </PrimaryLink>
                     <Button onClick={handleLogout}>Logout</Button>
                  </>
               )}
               {!session && (
                  <Button
                     isLoading={loading}
                     onClick={() => {
                        setLoading(true);
                        openInNewWindow("/auth/sign-in", { internal: true });
                     }}
                  >
                     Sign In
                  </Button>
               )}
            </div>
         </Container>
      </header>
   );
};

export default Header;
