import React from 'react'
import { Link } from 'react-router-dom'
import { useGetProductsQuery } from '../features/APISlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cartSlice'

export default function Home() {
  const { data } = useGetProductsQuery()

  const cart = useSelector((state) => state.cart.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Home</h1>
      <Link to='/cart'>Cart</Link>
      {data?.map((item) => (
        <div key={item.id}>
          <h1>{item.id}</h1>
          <h1>{item.title}</h1>
          <Link to={`/${item.id}`}>show details of product {item.id}</Link>
          <button
            onClick={() => {
              dispatch(addToCart(item))
            }}>
            🛒
          </button>
        </div>
      ))}
    </div>
  )
}
