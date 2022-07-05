import { createSlice } from "@reduxjs/toolkit";

interface SiteState {
    headerBorder: boolean;
    sidebar: boolean;
}

const initialState: SiteState = {
    headerBorder: false,
    sidebar: true
};

export const siteSlice = createSlice({
    name: "site",
    initialState,
    reducers: {
        setHeaderBorder: (state, action) => {
            state.headerBorder = action.payload;
        },
        setSidebar: (state, action) => {
            state.sidebar = action.payload;
        }
    }
});

export const { setHeaderBorder, setSidebar } = siteSlice.actions;

const SiteManager = siteSlice.reducer;
export default SiteManager;
