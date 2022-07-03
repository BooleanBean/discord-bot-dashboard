import { getSession } from "next-auth/react";
import useSWR from "swr";
import { getDiscordAPIWithPath } from ".";
import type { APIResponse, PartialGuild, PartialUser } from "../../common/types";

export function useGuilds(): APIResponse<PartialGuild[]> {
	const fetcher = async () => {
		const session = await getSession();

		if (session) {
			const result = await fetch(getDiscordAPIWithPath("/users/@me/guilds"), {
				headers: {
					Authorization: `Bearer ${session.accessToken}`
				}
			});
			return await result.json();
		}
	};

	const { data, error } = useSWR("/api/users/@me/guilds", fetcher);

	return {
		data,
		loading: !error && !data,
		error
	};
}

export function useCurrentUser(): APIResponse<PartialUser> {
	const fetcher = async () => {
		const session = await getSession();

		if (session) {
			const result = await fetch(getDiscordAPIWithPath("/users/@me"), {
				headers: {
					Authorization: `Bearer ${session.accessToken}`
				}
			});
			return await result.json();
		}
	};

	const { data, error } = useSWR("/api/users/@me", fetcher);

	return {
		data,
		loading: !error && !data,
		error
	};
}
