import { QueryClient, useQuery } from "react-query";

import { Guild } from "#/global-types";

export const queryClient = new QueryClient();

interface QueryRes<T = unknown> {
   data: T | null;
   isLoading: boolean;
}

// TODO: make a real request to our API with provided user token and ID
export function useUserGuilds(): QueryRes<Guild[]> {
   const { data, isLoading } = useQuery(
      "guilds",
      async () => await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
   );

   return {
      data,
      isLoading,
   };
}
