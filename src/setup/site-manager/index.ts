import { createSlice } from "@reduxjs/toolkit";

interface SiteState {
    headerBorder: boolean;
}

const initialState: SiteState = {
    headerBorder: false
};

export const siteSlice = createSlice({
    name: "site",
    initialState,
    reducers: {
        setHeaderBorder: (state, action) => {
            state.headerBorder = action.payload;
        }
    }
});

export const { setHeaderBorder } = siteSlice.actions;

const SiteManager = siteSlice.reducer;
export default SiteManager;
