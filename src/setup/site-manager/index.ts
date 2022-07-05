import { createSlice } from "@reduxjs/toolkit";

interface SiteState {}

const initialState: SiteState = {};

export const siteSlice = createSlice({
    name: "site",
    initialState,
    reducers: {
        site: () => {}
    }
});

export const { site } = siteSlice.actions;

const SiteManager = siteSlice.reducer;
export default SiteManager;
