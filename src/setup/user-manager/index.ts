import { createSlice } from "@reduxjs/toolkit";
import { PartialUser } from "../../common/types";
import type { RootState } from "../index";

interface UserState {
	data: PartialUser | null;
}

const initialState: UserState = {
	data: null
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, { payload }: { payload: UserState["data"] }) => {
			state.data = payload;
		}
	}
});

export const { setUser } = userSlice.actions;
export const selectGuild = (state: RootState) => state.guild.data;

const UserManager = userSlice.reducer;
export default UserManager;
