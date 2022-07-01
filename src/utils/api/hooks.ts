import { Snowflake } from "discord-api-types/globals";
import useSWR from "swr";
import type { APIResponse, PartialGuild, PartialUser } from "../../common/types";

const apiUri = process.env.NEXT_PUBLIC_API_URL + "/api";

export function useGuilds(): APIResponse<PartialGuild[]> {
	const fetcher = async () => await (await fetch(apiUri + "/guilds")).json();

	const { data: guilds, error } = useSWR("/api/guilds", fetcher);

	return {
		data: guilds?.data,
		isLoading: !error && !guilds?.data,
		isError: error
	};
}

export function useGuild(id: Snowflake): APIResponse<PartialGuild> {
	console.log("called");

	const fetcher = async () => await (await fetch(`${apiUri}/guilds/${id}`)).json();

	const { data: guilds, error } = useSWR(`/api/guilds/${id}`, fetcher);

	return {
		data: guilds?.data,
		isLoading: !error && !guilds?.data,
		isError: error
	};
}

export function useCurrentUser(): APIResponse<PartialUser> {
	const fetcher = async () => await (await fetch(apiUri + "/users/@me")).json();

	const { data: user, error } = useSWR(`/api/users/@me`, fetcher);

	return {
		data: user?.data,
		isLoading: !error && !user?.data,
		isError: error
	};
}
