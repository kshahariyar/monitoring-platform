import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/dataSlice';
import alertReducer from '../features/alertSlice';

export const store = configureStore({
    reducer: {
        data: dataReducer,
        alerts: alertReducer,
    },
});
