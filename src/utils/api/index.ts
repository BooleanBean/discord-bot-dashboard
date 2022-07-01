import type { Snowflake } from "discord-api-types/v9";

export const getUserAvatarURL = (id: Snowflake, avatar: string | null) => {
	if (!avatar)
		return `https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png`;
	return `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`;
};

export const getGuildIconURL = (id: Snowflake, icon: string | null) => {
	if (!icon)
		return `https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png`;
	return `https://cdn.discordapp.com/icons/${id}/${icon}.png`;
};
