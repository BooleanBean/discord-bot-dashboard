import { createSlice } from "@reduxjs/toolkit";
import { PartialGuild } from "../../common/types";
import type { RootState } from "../index";

interface GuildState {
	data: PartialGuild | null;
}

const initialState: GuildState = {
	data: null
};

export const guildSlice = createSlice({
	name: "guild",
	initialState,
	reducers: {
		setGuild: (state, { payload }: { payload: GuildState["data"] }) => {
			state.data = payload;
		}
	}
});

export const { setGuild } = guildSlice.actions;
export const selectGuild = (state: RootState) => state.guild.data;

const GuildManager = guildSlice.reducer;
export default GuildManager;
