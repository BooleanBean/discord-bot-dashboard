import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";

interface SiteState {
	isModalOpen: boolean;
	alphaVersion: boolean;
}

const initialState: SiteState = {
	isModalOpen: false,
	alphaVersion: false
};

export const siteSlice = createSlice({
	name: "site",
	initialState,
	reducers: {
		openModal: (state) => {
			state.isModalOpen = true;
		},
		closeModal: (state) => {
			state.isModalOpen = false;
		},
		setAlphaVersion: (state) => {
			localStorage.setItem("alpha-version", "1");
			state.alphaVersion = true;
		},
		clearAlphaVersion: (state) => {
			localStorage.removeItem("alpha-version");
			state.alphaVersion = false;
		}
	}
});

export const { openModal, closeModal, clearAlphaVersion, setAlphaVersion } = siteSlice.actions;
export const selectModalOpen = (state: RootState) => state.site.isModalOpen;

const SiteManager = siteSlice.reducer;
export default SiteManager;
