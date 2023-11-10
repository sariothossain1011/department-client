import "./Profile.css";
import { useForm } from "react-hook-form";


import { useNavigate } from "react-router-dom";
const EditProfile = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  /*==========================================
      Get Profile info for display
========================================= */

  /* =======================================
         profile update
 ========================================= */

  return (
    <div>
      <div className="main-content">
        <div className="header pb-5 pt-5 pt-lg-8 d-flex align-items-center bg-header">
          <span className="mask bg-gradient-default opacity-8"></span>
          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <h1
                  data-aos="flip-down"
                  data-aos-duration="3000"
                  className="display-2 text-white text-2xl md:text-3xl"
                >
                  Hello Rana,
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-easing="gradient(0,0,1200)"
                  data-aos-duration="1900"
                  className="text-white mt-0 mb-5"
                >
                  This is your profile page. You can see the progress you've
                  made with your work and manage your projects or assigned tasks
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-7" id="#edit">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile shadow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="3000"
                      className="card-profile-image"
                    >
                      <img
                        src="https://i.ibb.co/rwGPsQ9/profile.jpg"
                        className="rounded-circle"
                      />
                    </div>
                  </div>
                </div>

                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-3">
                        <div data-aos="flip-down" data-aos-duration="3000">
                          <span className="heading text-[#0A57E5]">22</span>
                          <span className="description">Blogs</span>
                        </div>
                        {/* <div data-aos="flip-down" data-aos-duration="3000">
                          <span className="heading text-info">89</span>
                          <span className="description">Favorite</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className="text-center"
                  >
                    <h3 className="text-xl font-bold capitalize text-info">User Name: Rana</h3>
                    <div className="h5 font-weight-500">
                      Full Name: <span>Rana Arju</span>
                    </div> 
                    <div className="h5 font-weight-500">
                      Email: <span>arju@email.com</span>
                    </div>
                    <div className="h5 mt-4 ">
                      <i className="ni business_briefcase-24 mr-2">
                        Phone: 

                        <a href="tel:01881220413" className="text-[#0A57E5]">
                          01881220413
                        </a>
                      </i>
                    </div>
                    <div>
                      <i className="ni education_hat mr-2 text-info">BD</i>
                    </div>
                    <hr className="my-4" />

                    <p className="text-info">Add Your Bio</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 order-xl-1">
              <div className="card shadow">
                <div className="card-header  border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3
                        data-aos="flip-down"
                        data-aos-duration="3000"
                        className="mb-0 text-info"
                      >
                        My account
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
                      User information
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
                              Username*
                            </label>

                            <input
                              type="text"
                              id="input-username"
                              className="fromControl fromControl-alternative"
                              placeholder="Username"
                              {...register("userName", {
                                required: {
                                  value: true,
                                  message: "user name is required*",
                                },
                              })}
                            />
                          </div>
                          <p className="text-left text-red-500">
                            {errors.userName?.type === "required" && (
                              <span>{errors.userName.message}</span>
                            )}
                          </p>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="fromControl-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              id="input-email"
                              className="fromControl fromControl-alternative"
                              disabled
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
                              Full name
                            </label>
                            <input
                              type="text"
                              id="input-fullname"
                              className="fromControl fromControl-alternative"
                              disabled
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="fromControl-label"
                              htmlFor="input-phone"
                            >
                              Phone Number*
                            </label>
                            <input
                              type="text"
                              id="input-phone"
                              className="fromControl fromControl-alternative"
                              placeholder="Phone Number"
                              {...register("phone", {
                                required: {
                                  value: true,
                                  message: "Number is required*",
                                },
                              })}
                            />
                          </div>
                          <p className="text-left text-red-500">
                            {errors.phone?.type === "required" && (
                              <span>{errors.phone.message}</span>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label
                              className="fromControl-label"
                              for="input-city"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              id="input-city"
                              className="fromControl fromControl-alternative"
                              placeholder="City"
                              {...register("city")}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label
                              className="fromControl-label"
                              for="input-country"
                            >
                              Country
                            </label>
                            <input
                              type="text"
                              id="input-country"
                              className="fromControl fromControl-alternative"
                              placeholder="Country"
                              {...register("country")}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label
                              className="fromControl-label"
                              for="input-country"
                            >
                              Postal code
                            </label>
                            <input
                              type="number"
                              id="input-postal-code"
                              className="fromControl fromControl-alternative"
                              placeholder="Postal code"
                              {...register("postal")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
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
                    </div>

                    <hr className="my-4" />
                    <h6
                      data-aos="flip-down"
                      data-aos-duration="3000"
                      className="heading-small text-muted mb-4 text-[#0A57E5]"
                    >
                      About me
                    </h6>
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="3000"
                      className="pl-lg-4"
                    >
                      <div className="form-group focused">
                        <label className="text-[#0A57E5]">About Me</label>
                        <textarea
                          rows="7"
                          className="fromControl fromControl-alternative"
                          placeholder="A few words about you ..."
                          {...register("bio")}
                        ></textarea>
                      </div>
                    </div>
                    <div
                      data-aos="flip-right"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="text-center"
                    >
                      <input
                        type="submit"
                        value="Update Profile"
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
    </div>
  );
};

export default EditProfile;
