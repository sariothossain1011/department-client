import { useAuthState } from "react-firebase-hooks/auth";
import "./Profile.css";
import { useForm } from "react-hook-form";
import auth from "../../firebase/firebase.init";
import Picture from "../../components/ProfilePicture";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const EditProfile = () => {
  const [user] = useAuthState(auth);
  const token = localStorage.getItem("accessToken");
  const pRef = useRef(null);
  const [details, setDetails] = useState();
  const [picture, setPicture] = useState(user?.photoURL);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const email = user?.email;
  const name = user?.displayName;
  const onSubmit = (data) => {
    const user = {
      name: name,
      email: email,
      image: picture,
      userName: data?.userName,
      phone: data?.phone,
      bio: data.bio,
    };

    //send data on database
    fetch(
      `https://department-server-tau.vercel.app/api/v1/update-user/${email}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("You are Successfully Update Profile!");

          reset();
        }
      });
  };
  const getUser = async () => {
    try {
      const { data } = await axios.get(
        "https://department-server-tau.vercel.app/api/v1/find-user",
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDetails(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  console.log("user data", details);
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
                  Hello {details?.name},
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
                      <img src={details?.image} className="rounded-circle" />
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
                    {details?.userName && (
                      <h3 className="text-xl font-bold capitalize text-info">
                        User Name: {details?.userName}
                      </h3>
                    )}

                    <div className="h5 font-weight-500">
                      Full Name: <span>{details?.name}</span>
                    </div>
                    <div className="h5 font-weight-500">
                      Email: <span>{details?.email}</span>
                    </div>
                    {details?.mobile && (
                      <div className="h5 mt-4 ">
                        <i className="ni business_briefcase-24 mr-2">
                          Phone:
                          <a href="tel:01881220413" className="text-[#0A57E5]">
                            {details?.mobile}
                          </a>
                        </i>
                      </div>
                    )}

                    <hr className="my-4" />
                    {details?.bio ? (
                      <p className="text-info">{details?.bio}</p>
                    ) : (
                      <p className="text-info">Add Your Bio</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 order-xl-1 mb-4">
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
                  <form
                    className="items-stretch p-0"
                    onSubmit={handleSubmit(onSubmit)}
                  >
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
                              value={email}
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
                              value={name}
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
                      <Picture
                        setShow={false}
                        pRef={pRef}
                        picture={picture}
                        setPicture={setPicture}
                        register={register}
                      />
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
