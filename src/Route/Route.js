import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../components/Home/Home'
import FAQ from '../components/FAQ/FAQ'
import Courses from '../components/Courses/Courses'
import Blog from '../components/Blog/Blog'
import Main from '../utilities/Main'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'




const Route = () => {

    const router  = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
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
                }
            ]
        }
    ])

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Route