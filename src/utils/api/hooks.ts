import { Snowflake } from "discord-api-types/globals";
import { APIGuild, APIUser } from "discord-api-types/v10";
import { getSession } from "next-auth/react";
import useSWR from "swr";
import { getDiscordAPI } from ".";
import type { APIResponse, Guild } from "../../common/types";

export function useGuilds(): APIResponse<APIGuild[]> {
    const fetcher = async (): Promise<APIGuild[] | undefined> => {
        const session = await getSession();

        if (session) {
            const result = await fetch(getDiscordAPI("/users/@me/guilds"), {
                headers: {
                    Authorization: `Bearer ${session.accessToken}`
                }
            });
            return await result.json();
        }

        return undefined;
    };

    const { data, error, mutate } = useSWR("/api/users/@me/guilds", fetcher);

    return {
        data,
        loading: !error && !data,
        error,
        mutate
    };
}

export function useBotGuild(id: Snowflake): APIResponse<Guild> {
    const fetcher = async (): Promise<Guild | undefined> => {
        const session = await getSession();

        if (session) {
            const result = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/test/guilds/` + id
            );
            const { error, data } = await result.json();

            if (error) throw new Error(data.error);
            return data;
        }

        return undefined;
    };

    const { data, error, mutate } = useSWR(`/api/test/test/guilds/${id}`, fetcher);

    return {
        data,
        loading: !error && !data,
        error,
        mutate
    };
}

export function useCurrentUser(): APIResponse<APIUser> {
    const fetcher = async (): Promise<APIUser | undefined> => {
        const session = await getSession();

        if (session) {
            const result = await fetch(getDiscordAPI("/users/@me"), {
                headers: {
                    Authorization: `Bearer ${session.accessToken}`
                }
            });
            return await result.json();
        }

        return undefined;
    };

    const { data, error, mutate } = useSWR("/api/users/@me", fetcher);

    return {
        data,
        loading: !error && !data,
        error,
        mutate
    };
}
