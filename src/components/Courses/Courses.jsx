import React from "react";
import "./Courses.css";
import { BiTime } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";

const Courses = () => {
  const coursesData = useLoaderData();
  console.log(coursesData);

  return (
    <section className="flex relative">

<div className=" drawer-mobile bg-slate-200">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
   
  <div className="drawer-side sticky top-0">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 

    <h1 className="text-2xl font-semibold text-center">Course Category</h1>

    <ul className="menu p-4 overflow-y-auto w-80 text-base-content">
     
      

      {coursesData.map((course) => {
        return (
          <>
            <li><Link to={`/courses/${course.id}/${course.title}`} className="bg-base-100 my-2">{course.title}</Link></li>
          </>
        )
      })}
    </ul>
  
  </div>
</div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center mt-28 gap-8">
          {coursesData.map((course) => {
            return (
              <>
                <div className="card w-[30%] bg-base-100 shadow-xl">
                  <figure>
                    <img src={course.thumbnail} alt="Course thumbnail" />
                  </figure>
                  <div className="card-body flex justify-between">
                    <div className="flex justify-between py-1 rounded px-3 border border-gray-400 border-dashed">
                      <span>Lesson: {course.lesson}</span>
                      <span>Student: {course.student}</span>
                      <span className="flex items-center">
                        <span className="mr-1 text-lg">
                          <BiTime />
                        </span>{" "}
                        {course.time}
                      </span>
                    </div>

                    <h2 className="card-title mt-2">
                      {course.title}
                      <div className="badge badge-secondary">
                        ${course.price}
                      </div>
                    </h2>

                    <div className="py-3">
                      <p className="course__body">{course.description} </p>
                      <Link className="link text-blue-500" to="/">
                        See more
                      </Link>
                    </div>

                    <div className="flex items-center justify-between py-2 mb-3 border-b-4 border-indigo-500">
                      <div className="flex items-center">
                        <img
                          className="w-[45px] border border-gray-200 h-[45] rounded-full mr-3"
                          src={course.introductoryImage}
                          alt=""
                        />
                        <p className="font-semibold">{course.introductory}</p>
                      </div>

                      <div>introductory</div>
                    </div>

                    <button className="btn btn-primary w-full">
                      Get Premium Access
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
