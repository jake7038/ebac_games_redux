import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../App'
import exp from 'constants'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app'
  }),
  endpoints: builder => ({
    getJogos: builder.query<Game[], void>({
      query: () => '/api/ebac_sports'
    })
  })
})

export const {useGetJogosQuery} = api
export default api
