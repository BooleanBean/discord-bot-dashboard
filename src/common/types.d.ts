import type { NextPage } from "next";
import type { ReactElement } from "react";

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

export interface PartialGuild {
	id: number;
	name: string;
	iconURL: string | null;
	stats: PartialGuildStats;
}

export interface PartialGuildStats {
	memberCount: number;
	onlineMemberCount: number;
}

export interface PartialUser {
	id: number;
	name: string;
	discriminator: number;
	avatarURL: string | null;
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
