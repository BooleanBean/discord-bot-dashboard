import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import "twin.macro";

import Button from "#/lib/components/buttons/Button";
import PrimaryLink from "#/lib/components/links/PrimaryLink";
import UnstyledLink from "#/lib/components/links/UnstyledLink";
import { Container } from "#/lib/components/StyledComponents";

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

               <nav tw="ml-10 hidden space-x-4 lg:flex lg:items-center">
                  <PrimaryLink href="/settings">Settings</PrimaryLink>
                  <PrimaryLink href="/settings">Settings</PrimaryLink>
                  <PrimaryLink href="/settings">Settings</PrimaryLink>
               </nav>
            </div>
            <div tw="flex h-full items-center space-x-4">
               {session?.user && (
                  <>
                     <PrimaryLink href="/dashboard/guilds">Dashboard</PrimaryLink>
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
