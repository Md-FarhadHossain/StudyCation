import React from 'react'
import errorImage from '../../assets/image/404-image.jpg'
import Navbar from '../Navbar/Navbar'

const ErrorPage = () => {
  return (
    <div className=''>
      <Navbar />
      <img className='w-[100%] h-[90vh] object-contain' src={errorImage} alt="" />
    </div>
  )
}

export default ErrorPage