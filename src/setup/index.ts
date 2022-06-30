import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import GuildManager from "./guild-manager";
import SiteManager from "./site-manager";
import UserManager from "./user-manager";

const store = configureStore({
	reducer: {
		guild: GuildManager,
		user: UserManager,
		site: SiteManager
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
