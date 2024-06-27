import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    alerts: [],
};

const alertSlice = createSlice({
    name: 'alerts',
    initialState,
    reducers: {
        setAlerts: (state, action) => {
            state.alerts = action.payload;
        },
    },
});

export const { setAlerts } = alertSlice.actions;
export default alertSlice.reducer;
