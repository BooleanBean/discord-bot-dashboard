import type { APIPartialGuild, APIUser, Snowflake } from "discord-api-types/v9";
import type { NextPage } from "next";
import type { ReactElement } from "react";

export type NextPageWithLayout<I = {}> = NextPage<I> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

export interface APIResponse<D = any> {
	isError: any | null;
	isLoading: boolean;
	data: D | undefined;
}

interface Session {
	id: Snowflake;
}

export interface PartialGuild extends APIPartialGuild {
	stats: PartialGuildStats | null;
}

export interface PartialGuildStats {
	memberCount: number;
	onlineMemberCount: number;
}

export interface PartialUser extends APIUser {
	guilds: PartialGuild[];
}

export interface NavigationWithCategories {
	category: string;
	items: NavigationItem[];
}

export interface NavigationItem {
	name: string;
	href: string;
	icon: ReactElement;
}
