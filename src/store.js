import { configureStore } from '@reduxjs/toolkit';
import checkRouteSlice from './features/checkRouteSlice';

export default configureStore({
  reducer: {
    route: checkRouteSlice,
  },
});