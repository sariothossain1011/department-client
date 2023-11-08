import React, { useRef } from "react";
import { BsTelephoneOutbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const onSubmit = async (data) => {
    emailjs
      .sendForm(
        "take-your-smile",
        "template_wireu27",
        form.current,
        "NVoyRWy1HhJ-3DfFm"
      )
      .then(
        (result) => {
          return toast.success("Thank You! Send Message Success.");
        },
        (error) => {
          return toast.error(error.text);
        }
      );

    reset();
  };
  return (
    <div className="contactUs">
      <div
        className="hero min-h-[400px]"
        style={{ backgroundImage: "url(https://i.ibb.co/bLs1wrf/img2.jpg)" }}
      >
        <div className="hero-overlay bg-gray-500 bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content my-32">
          <div className="max-w-4/5">
            <p className="mb-5 text-2xl md:text-4xl text-white">
              If you want to know something about our department or to contact
              the authority, fill the form.
            </p>
          </div>
        </div>
      </div>
      <h1
        data-aos="flip-down"
        data-aos-duration="3000"
        className="text-3xl text-center mt-16 font-bold text-secondary uppercase"
      >
        Contact <span className="text-orange-600">Us</span>
      </h1>
      {/* Contact Form */}
      <div className="hero min-h-screen min-w-screen  px-2 md:px-0  mx-auto   my-16">
        <div
          data-aos="zoom-in"
          data-aos-duration="3000"
          className="card flex-shrink-0 w-full lg:w-4/6  shadow-2xl "
        >
          <form
            className="p-0 flex-row"
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="card-body">
              <p className="text-left text-red-500">
                {errors.name?.type === "required" && (
                  <span>{errors.name.message}</span>
                )}
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary">Full Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="input input-bordered input-primary"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Full Name is required*",
                    },
                  })}
                />
              </div>
              <p className=" text-red-500">
                {errors.email?.type === "required" && (
                  <span>{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span>{errors.email.message}</span>
                )}
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary">Email*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="input input-bordered input-primary"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required*",
                    },
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Provide a Valid Email",
                    },
                  })}
                />
              </div>
              <p className="text-left text-red-500">
                {errors.date?.type === "required" && (
                  <span>{errors.date.message}</span>
                )}
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary">Event Date*</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered input-primary"
                  {...register("date", {
                    required: {
                      value: true,
                      message: "Date is required*",
                    },
                  })}
                />
              </div>
              <p className="text-left text-red-500">
                {errors.phone?.type === "required" && (
                  <span>{errors.phone.message}</span>
                )}
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary">
                    Phone Number*
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone"
                  className="input input-bordered input-primary"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Number is required*",
                    },
                  })}
                />
              </div>
          

         
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-secondary">
                    Your Message*
                  </span>
                </label>
                <textarea
                  className="textarea textarea-primary h-32"
                  placeholder="Please explain details..."
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Write Some Text*",
                    },
                  })}
                ></textarea>
              </div>
              <div
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="form-control mt-6"
              >
                <button className="btn btn-primary uppercase" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
