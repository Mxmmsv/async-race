import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { CarValue } from "@/components/types/types";
import { BASE_URL } from "@/constants/env";

import type { PaginationsInfo, CarsApiResponse } from "./types";

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Cars", "Car"],
  endpoints: (builder) => ({
    getCars: builder.query<CarsApiResponse, PaginationsInfo>({
      query: ({ page, limit }) => ({
        url: "/garage",
        params: { _page: page, _limit: limit },
      }),
      transformResponse: (response: CarValue[], meta) => {
        const totalCount = Number(meta?.response?.headers.get("X-Total-Count")) || 0;
        return { cars: response, totalCount };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.cars.map((c) => ({ type: "Car" as const, id: c.id })),
              { type: "Cars", id: "LIST" },
            ]
          : [{ type: "Cars", id: "LIST" }],
    }),

    getCar: builder.query<CarValue, { id: number }>({
      query: ({ id }) => ({ url: `/garage/${id}` }),
      providesTags: (_result, _error, arg) => [{ type: "Car", id: arg.id }],
    }),

    createCar: builder.mutation<CarValue, Omit<CarValue, "id">>({
      query: (body) => ({
        url: "/garage",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Cars", id: "LIST" }],
    }),

    updateCar: builder.mutation<CarValue, CarValue>({
      query: ({ id, ...body }) => ({
        url: `/garage/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: "Car", id: arg.id },
        { type: "Cars", id: "LIST" },
      ],
    }),

    removeCarWithId: builder.mutation<void, { id: number }>({
      query: ({ id }) => ({
        url: `/garage/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: "Car", id: arg.id },
        { type: "Cars", id: "LIST" },
      ],
    }),

    removeAllCar: builder.mutation<void, void>({
      query: () => ({
        url: `/garage`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Cars", id: "LIST" }],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetCarQuery,
  useCreateCarMutation,
  useUpdateCarMutation,
  useRemoveCarWithIdMutation,
  useRemoveAllCarMutation,
} = carsApi;
