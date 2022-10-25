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
                }
            ]
        },
        {
            path: '/courses/:id/:courseTitle',
            element: <CourseContent />,
            loader: async ({params}) => {
                return await fetch(`https://study-cation-server.vercel.app/course/${params.id}/${params.courseTitle}`)
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