import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../components/Home/Home'
import FAQ from '../components/FAQ/FAQ'
import Courses from '../components/Courses/Courses'
import Blog from '../components/Blog/Blog'
import Main from '../utilities/Main'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
import CourseContent from '../components/CourseContent/CourseContent'
import CheckOutPage from '../pages/CheckOutPage/CheckOutPage'
import PrivetRoute from './PrivetRoute'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import toast, { Toaster } from 'react-hot-toast';





const Route = () => {

    const router  = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/faq',
                    element: <FAQ />,
                },
                {
                    path: '/courses',
                    loader: async () => {
                        return await fetch(`https://study-cation-server.vercel.app/courses`)
                        
                    },
                    element: <Courses />,
                },
                {
                    path: '/blog',
                    element: <Blog />,
                },
                {
                    path: '/login',
                    element: <Login />,
                },
                {
                    path: '/signup',
                    element: <Signup />,
                },
                {
                    path: '/check-out',
                    element: <PrivetRoute>
                        <CheckOutPage />
                    </PrivetRoute>,
                }
            ]
        },
        {
            path: '/courses/:id',
            element: <CourseContent />,
            loader: async ({params}) => {
                return await fetch(`https://study-cation-server.vercel.app/courses/${params.id}`)
            }
                        
        }
    ])

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Route