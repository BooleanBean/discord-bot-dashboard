import type { APIUser, Snowflake } from "discord-api-types/v10";
import type { NextPage } from "next";
import "next-auth";
import type { ReactElement } from "react";
import { KeyedMutator } from "swr";
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
    error?: any;
    loading: boolean;
    data?: ResponseData;
    mutate: KeyedMutator<ResponseData | undefined>;
}

interface Session {
    id: Snowflake;
}

export interface Guild {
    id: Snowflake;
    name: string;
    description: string;
    icon: string | null;
    owner_id: Snowflake;
    prefix: string;
    stats: PartialGuildStats;
}

export interface PartialGuildStats {
    member_count: number;
    online_member_count: number;
    new_members: number;
    commands_used: number;
    messages_sent: number;
}

export interface User extends APIUser {
    guilds: Guild[];
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
