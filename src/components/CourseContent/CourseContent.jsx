import React from "react";
import { Link, useLoaderData } from "react-router-dom";


const CourseContent = () => {
  const courseData = useLoaderData();
  const { thumbnail, title, description, lesson, student, price } = courseData;

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[40%] mx-auto">
        {/* image */}
        <div className="flex justify-center">
          <img src={thumbnail} alt="course thumbnail" />
        </div>
        <div>
          <h1 className="text-4xl my-8 font-semibold">{title}</h1>
          <p className=" leading-7">{description}</p>
        </div>

        <div>
          <Link to='/check-out' className="btn btn-primary w-full my-8">Get Premium Access</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
