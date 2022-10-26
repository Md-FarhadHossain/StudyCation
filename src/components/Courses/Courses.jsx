import React from "react";
import "./Courses.css";
import { BiTime } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const Courses = () => {
  const [sideBar, setSideBar] = useState(true);
  const [onOff, setOnOff] = useState("Close Menu");

  const handleSideResponsive = (e) => {
    console.log("first");
    setSideBar(!sideBar);
    setOnOff(onOff === "Close Menu" ?  "Open Menu":"Close Menu");
  };
 
  const coursesData = useLoaderData();

  return (
    <section className="flex relative">
      <div id='hamburger__menu--siderbar' className='p-4'>
        <button onClick={handleSideResponsive} className="btn">
          {onOff}
        </button>
      </div>

      <div
        id="category__section"
        className={`rounded-lg  ${
          sideBar ? "drawer-mobile bg-white show__menu shadow-lg" : "hide__menu"
        }`}
      >
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side overflow-scroll-none sticky top-0 flex items-center flex-col h-full">
          

          <h1 className="text-2xl pt-16 font-semibold text-center">
            Course Category
          </h1>

          <ul className="menu p-4 overflow-hidden mb-8 w-72 overflow-scroll-none text-base-content">
            {coursesData.map((course) => {
              return (
                <>
                  <li>
                    <Link
                      to={`/courses/${course.id}`}
                      className="bg-primary text-white font-semibold  my-2 text-sm course__title"
                    >
                      {course.title}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <div className="flex flex-wrap justify-center my-28 gap-8">
          {coursesData.map((course) => {
            return (
              <>
                <div
                  id="cousre__left--side"
                  className="card w-[25rem] bg-base-100 shadow-xl"
                >
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

                      <Link
                        to={`/courses/${course.id}`}
                        className="link text-blue-500"
                      >
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

                    <Link to="/check-out" className="btn btn-primary w-full">
                      Get Premium Access
                    </Link>
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
