import { GetServerSidePropsResult } from "next";
import { ClientSafeProvider, getProviders, signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { ImSpinner3 } from "react-icons/im";
import "twin.macro";

type Props = {
   provider: ClientSafeProvider;
};

export default function SignIn({ provider }: Props) {
   const { status } = useSession();

   useEffect(() => {
      if (status === "authenticated") {
         window.localStorage.removeItem("redirect");
         window.localStorage.setItem("redirect", "/dashboard/guilds");
         setTimeout(() => {
            window.close();
         }, 1 * 1000);
         return;
      }

      setTimeout(() => signIn(provider.id), 2 * 1000);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [status]);

   return (
      <div tw="flex min-h-screen flex-col items-center justify-center text-center">
         {status === "authenticated" ? (
            <span tw="uppercase text-lg font-bold text-gray-500">Done!</span>
         ) : (
            <>
               {/* // TODO: when authenticated, it shows the redirect for a second, so stop showing it to improve the visual*/}
               <ImSpinner3 size={40} tw="animate-spin text-gray-600" />
               <span tw="mt-3 uppercase text-lg font-bold text-gray-500">
                  Redirecting
               </span>
            </>
         )}
      </div>
   );
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<Props>> {
   const providers = await getProviders();

   return {
      // exp: we just have a provider always
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      props: { provider: providers!.discord },
   };
}
