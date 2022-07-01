import useSWR from "swr";
import type { APIResponse, PartialGuild, PartialUser } from "../../common/types";

export function useGuilds(): APIResponse<PartialGuild[]> {
	const fetcher = async () => await (await fetch("http://localhost:3000/api/guilds")).json();

	const { data: guilds, error } = useSWR(`/api/guilds`, fetcher);

	return {
		data: guilds?.data,
		isLoading: !error && !guilds?.data,
		isError: error
	};
}

export function useCurrentUser(): APIResponse<PartialUser> {
	const fetcher = async () => await (await fetch("http://localhost:3000/api/users/@me")).json();

	const { data: user, error } = useSWR(`/api/users/@me`, fetcher);

	return {
		data: user?.data,
		isLoading: !error && !user?.data,
		isError: error
	};
}
