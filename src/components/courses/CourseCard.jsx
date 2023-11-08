import React, { Fragment } from "react";

const CourseCard = () => {
  return (
    <Fragment>
      <div className="card w-100  bg-base-100 shadow-xl " >
        <figure>
          <img src="../../public/course_image1.jpg" alt="Shoes" />
        </figure>
        <div className="card-body indicator ">
        <span class="indicator-item indicator-start ms-20 badge badge-secondary p-3">First Semester</span>
          <div className="card-title ">
            <a href="/course-single" target="_blank" ><h1>First semester all couses here learn more</h1></a>
          </div>
          <div className="card-actions justify-between">
            <div class="rating">
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </div>
            <div className=""> 30 vodes</div>
            <div className="">300+ students</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CourseCard;
