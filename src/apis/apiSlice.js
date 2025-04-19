import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '@/config/baseUri';
import { setUser } from '@/redux/slices/userSlice';


const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    credentials: 'include',
    timeout: 15000,
    prepareHeaders: (headers, { getState }) => {
        headers.set('Accept', 'application/json');
        headers.set('Cache-Control', 'no-cache');
        headers.set('Pragma', 'no-cache');
        headers.set('Expires', '0');
        const token = getState().user.token
        if (token) {
            headers.set("authorized", `Bearer ${token}`)
        }
        return headers
    }
})


const baseQueryWithReauth = async (args, api, extraOptions) => {

    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.status === 403) {
        const refreshResult = await baseQuery('/auth/refresh', api, extraOptions)
        if (refreshResult?.data) {
            api.dispatch(setUser({
                ...refreshResult.data,
                token: refreshResult.data.accessToken,
                user: refreshResult.data.user
            }))
            result = await baseQuery(args, api, extraOptions)
        } else {
            if (refreshResult?.error?.status === 403) {
                refreshResult.error.data.message = "Your login has expired"
            }
            return refreshResult
        }
    }
    return result

}



export const apiSlice = createApi({
    reducerPath: 'userAuthService',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['User',],
    refetchOnFocus: true,
    refetchOnReconnect: true,
    endpoints: builder => ({})
})
