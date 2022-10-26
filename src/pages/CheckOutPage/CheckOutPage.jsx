import React from 'react'
import { useLoaderData } from 'react-router-dom'

const CheckOutPage = () => {

  const courseData = useLoaderData()
  console.log(courseData)

  return (
    <div>CheckOutPage</div>
  )
}

export default CheckOutPage