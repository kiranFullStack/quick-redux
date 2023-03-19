import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductByIDQuery } from '../features/APISlice'

export default function Detail() {
  const { id } = useParams()
  const { data } = useGetProductByIDQuery(id)

  return (
    <div>
      {id}
      <h1>Detail</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
