import type { Snowflake } from "discord-api-types/v9";

export const getUserAvatarURL = (id: Snowflake, avatar?: string | null) => {
    if (!avatar)
        return `https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png`;
    return `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`;
};

export const getGuildIconURL = (id: Snowflake, icon?: string | null) => {
    if (!icon)
        return `https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png`;
    return `https://cdn.discordapp.com/icons/${id}/${icon}.png`;
};

export const getGuildBannerURL = (id: Snowflake, banner?: string | null) => {
    if (!banner) return `https://exploringbits.com/wp-content/uploads/2022/01/discord-banner-4.gif`;
    return `https://cdn.discordapp.com/banners/${id}/${banner}.png`;
};

export const getDiscordAPI = (path?: string) => {
    if (!path) return process.env.NEXT_PUBLIC_DISCORD_API_ENDPOINT as string;
    return `${process.env.NEXT_PUBLIC_DISCORD_API_ENDPOINT}${path}`;
};
