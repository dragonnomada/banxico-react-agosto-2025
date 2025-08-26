import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

/*
// GraphQL -> useQuery | useMutation

const { data, isLoading, error, refetch, ... } = useQuery(...)

const [addUser, { data, isLoading, error, ... }] = useMutation(...)
*/

// HoCs
export const userSearchApi = createApi({
    reducerPath: "userSearchApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://geocarta.org/api/curso/banxico"
    }),
    tagTypes: ["Users"],
    endpoints: builder => ({
        userSearch: builder.query({
            query: (search) => ({
                url: "/user/all",
                method: "post",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    search
                })
            }),
            invalidatesTags: [{
                type: "Users",
                result: [],
                error: null,
                a: 123,
                hasError: false,
                users: []
            }],
            providesTags: result => {
                console.log({ result })
                return [{
                    type: "Users",
                    result,
                    error: result.error,
                    a: 123,
                    hasError: !!result.error, // !!"..." -> true
                    // users: result.users
                }]
            }
        })
    })
})

// useUserSearchApiQuery
// useUserSearchApiMutation

export const { useUserSearchQuery } = userSearchApi