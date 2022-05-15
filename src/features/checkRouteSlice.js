import { createSlice } from '@reduxjs/toolkit';

export const checkRouteSlice = createSlice({
    name: 'route',
    initialState: {
        value: false,
    },
    reducers: {
        setRouteState: (state, action) => {
            state.value = action.payload;
        }
    },
});

export const { setRouteState } = checkRouteSlice.actions;
export default checkRouteSlice.reducer;