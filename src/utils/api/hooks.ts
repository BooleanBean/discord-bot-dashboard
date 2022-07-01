import useSWR from "swr";
import type { APIResponse, PartialGuild, PartialUser } from "../../common/types";

export function useGuilds(): APIResponse<PartialGuild[]> {
	// todo: change NEXTAUTH_URL
	const fetcher = async () => await (await fetch(`${process.env.NEXTAUTH_URL}/api/guilds`)).json();

	const { data: guilds, error } = useSWR(`/api/guilds`, fetcher);

	return {
		data: guilds?.data,
		isLoading: !error && !guilds?.data,
		isError: error
	};
}

export function useCurrentUser(): APIResponse<PartialUser> {
	// todo: change NEXTAUTH_URL
	const fetcher = async () => await (await fetch(`${process.env.NEXTAUTH_URL}/api/users/@me`)).json();

	const { data: user, error } = useSWR(`/api/users/@me`, fetcher);

	return {
		data: user?.data,
		isLoading: !error && !user?.data,
		isError: error
	};
}
