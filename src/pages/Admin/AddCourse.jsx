import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FiTrash } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
function AddCourse() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm();
  const {
    fields: moduleFields,
    append: moduleAppend,
    remove: moduleRemove,
  } = useFieldArray({ control, name: "module" });
  const {
    fields: courseFields,
    append: courseAppend,
    remove: courseRemove,
  } = useFieldArray({ control, name: "course" });
  const navigate = useNavigate();
  courseFields.map(item => console.log("item", item))
  return (
    <div className="main-content">
      <div className="container-fluid mt-7" id="#edit">
        <div className="">
          <div className=" mb-4">
            <div className="card shadow">
              <div className="card-header  border-0">
                <div className="row align-items-center">
                  <div className="w-full">
                    <h3
                      data-aos="flip-down"
                      data-aos-duration="3000"
                      className=" text-[#0855E4] text-center text-xl md:text-2xl uppercase font-bold"
                    >
                      Course Add
                    </h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form className="items-stretch p-0">
                  <h6
                    data-aos="flip-down"
                    data-aos-duration="3000"
                    className="heading-small text-muted mb-4"
                  >
                    Course information
                  </h6>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className="pl-lg-4"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="fromControl-label"
                            htmlFor="input-username"
                          >
                            Course Name*
                          </label>

                          <input
                            type="text"
                            id="input-username"
                            className="fromControl fromControl-alternative"
                            placeholder="Course Name"
                            {...register("title", {
                              required: {
                                value: true,
                                message: "course name is required*",
                              },
                            })}
                          />
                        </div>
                        <p className="text-left text-red-500">
                          {errors.title?.type === "required" && (
                            <span>{errors.title.message}</span>
                          )}
                        </p>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="fromControl-label"
                            htmlFor="input-email"
                          >
                            Author Name
                          </label>
                          <input
                            type="text"
                            id="input-email"
                            placeholder="Enter Author Name"
                            className="fromControl fromControl-alternative"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="fromControl-label"
                            for="input-fullname"
                          >
                            Course Duration
                          </label>
                          <input
                            type="text"
                            id="input-fullname"
                            placeholder="Enter Duration"
                            className="fromControl fromControl-alternative"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="fromControl-label"
                            htmlFor="input-phone"
                          >
                            Course Main Image*
                          </label>
                          <input
                            type="text"
                            id="input-phone"
                            className="fromControl fromControl-alternative"
                            placeholder="Enter Course Banner URL"
                            {...register("banner", {
                              required: {
                                value: true,
                                message: "Banner is required*",
                              },
                            })}
                          />
                        </div>
                        <p className="text-left text-red-500">
                          {errors.banner?.type === "required" && (
                            <span>{errors.banner.message}</span>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="mb-2">Add Course Modules</label>
                      <div>
                        <div>
                          {moduleFields.map((item, index) => {
                            return (
                              <div key={item.key}>
                                <div className="flex items-center gap-3 mb-2">
                                  <input
                                    className="fromControl fromControl-alternative"
                                    type="url"
                                    placeholder="Enter Course URL"
                                    {...register(`module[${index}]`)}
                                  />
                                  <button
                                    type="button"
                                    onClick={() => moduleRemove(index)}
                                    className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-8 w-8 group transition-all hover:bg-red-500"
                                  >
                                    <FiTrash
                                      className="text-red-500 group-hover:text-white transition-all"
                                      size="20"
                                    />
                                  </button>
                                </div>
                             
                              </div>
                            );
                          })}
                        </div>
                        <div>
                          <button
                            type="button"
                            onClick={() => moduleAppend("")}
                            className="btn"
                          >
                            Create Module
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <hr className="my-4" />
                  <h6
                    data-aos="flip-down"
                    data-aos-duration="3000"
                    className="heading-small text-muted mb-4"
                  >
                    profile photo
                  </h6>

                  <div data-aos="zoom-in" data-aos-duration="3000">
                    <label className="fromControl-label capitalize">
                      Upload Your profile photo
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-[#0A57E5]"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div className="flex">
                          <label className="relative cursor-pointer  rounded-md  px-3 py-2">
                            <span className="font-mono text-[#0A57E5]">
                              Upload a Photo
                            </span>
                            <input
                              id="file-upload"
                              type="file"
                              className="sr-only"
                              {...register("image", {
                                required: {
                                  value: true,
                                  message: "image is required*",
                                },
                              })}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <p className="text-left text-red-500">
                      {errors.image?.type === "required" && (
                        <span>{errors.image.message}</span>
                      )}
                    </p>
                  </div> */}

              
               
                  <div
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="text-center"
                  >
                    <input
                      type="submit"
                      value="Add Course"
                      className="btn text-white bg-[#0A57E5] hover:bg-[#0A57E5] "
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
