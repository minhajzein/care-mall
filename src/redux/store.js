import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { apiSlice } from "@/apis/apiSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        user: userSlice,
        cart: cartSlice
    },
    middleware: (getDefaultMiddleware) => {
        const allMiddleware = [
            apiSlice.middleware
        ];
        return getDefaultMiddleware({ serializableCheck: false }).concat(
            ...allMiddleware
        );
    },
    devTools: true
})


export default store