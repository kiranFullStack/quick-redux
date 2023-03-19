import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),

    getProductByID: builder.query({
      query: (id) => `products/${id}`,
    }),

    createProduct: builder.mutation({
      query: (product) => ({
        url: 'products',
        method: 'POST',
        body: product,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: updates,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useGetProductByIDQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi
