import type { APIPartialGuild, APIUser, Snowflake } from "discord-api-types/v9";
import type { NextPage } from "next";
import "next-auth";
import type { ReactElement } from "react";

declare module "next-auth" {
	interface Session {
		accessToken: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		accessToken: string;
	}
}

export type NextPageWithLayout<I = {}> = NextPage<I> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

export interface APIResponse<ResponseData = any> {
	error: any;
	loading: boolean;
	data: ResponseData | null;
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
