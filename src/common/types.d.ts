import type { APIPartialGuild, APIUser, Snowflake } from "discord-api-types/v9";
import type { NextPage } from "next";
import "next-auth";
import type { ReactElement } from "react";
import { Icons } from "../utils/icons";

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

export interface NavigationLinksWithCategories {
	category: string;
	items: NavigationLink[];
}

export interface NavigationLink {
	name: string;
	href: string;
	icon: keyof Icons;
	badge?: ReactElement;
}
