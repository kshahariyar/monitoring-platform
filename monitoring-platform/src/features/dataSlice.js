import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    metrics: [],
    logs: [],
    traces: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setMetrics: (state, action) => {
            state.metrics = action.payload;
        },
        setLogs: (state, action) => {
            state.logs = action.payload;
        },
        setTraces: (state, action) => {
            state.traces = action.payload;
        },
    },
});

export const { setMetrics, setLogs, setTraces } = dataSlice.actions;
export default dataSlice.reducer;
