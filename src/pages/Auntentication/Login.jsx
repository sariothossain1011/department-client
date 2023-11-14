import React, { useState } from "react";
import "./authentication.css";
import { useForm } from "react-hook-form";
import Registation from "./Registation";

import { toast } from "react-toastify";

import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

function Login() {

  const { logIn } = useContext(AuthContext);


  let navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const [email, setEmail] = useState();


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  let [btnStatus, setBtnStatus] = useState();
  let changeBtnStatus = (status) => {
    setBtnStatus(status);
  };

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;

    logIn(email, password)
      .then(result => {
        const loggedInUser = result.user;
        alert('login successful');
        reset()
      })
      .catch(error => console.log(error.message))
  };

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Please, Check Your Email");
    } else {
      toast.error("Please, Enter Email");
    }
  };

  return (
    <>
      <div
        id="container"
        className={btnStatus === "sign-up" ? "sign-up-mode" : ""}
      >
        <div className="forms-container ">
          <div className="signin-signup">
            <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
              <p className=" text-red-500">
                {errors.email?.type === "required" && (
                  <span>{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span>{errors.email.message}</span>
                )}
              </p>
              <div className="input-field">
                <input
                  type="email"
                  placeholder="Email"
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
                    onBlur: (e) => setEmail(e.target.value),
                  })}
                />
              </div>
              <p className="text-left text-red-500">
                {errors.password?.type === "required" && (
                  <span>{errors.password.message}</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span>{errors.password.message}</span>
                )}
              </p>
              <div className="input-field">
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required*",
                    },
                    minLength: {
                      value: 8,
                      message: "Enter At Least 8 Character",
                    },
                  })}
                />
              </div>

              <p className="text-lg text-gray-500">
                Forgot Password?
                <button className="text-primary" onClick={resetPassword}>
                  Please Reset
                </button>
              </p>

              <input type="submit" value="Login" className="btn btn-submit solid" />
              <p className="social-text text-gray-500">
                Or Sign in with social platforms
              </p>
            </form>
            <Registation />
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3 className="text-white">New here ?</h3>
              <p>Planning an event but no idea where to start? Take Heart!</p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => changeBtnStatus("sign-up")}
              >
                Sign up
              </button>
            </div>
            <img src="../../images/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3 className="text-white">One of us ?</h3>
              <p>Planning an event but no idea where to start? Take Heart!</p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => changeBtnStatus("sign-in")}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
