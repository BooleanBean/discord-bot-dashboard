import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import GuildManager from "./guild-manager";
import SiteManager from "./site-manager";

const store = configureStore({
	reducer: {
		guild: GuildManager,
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
