import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase/firebase.init';
import Picture from '../../components/ProfilePicture';

function AddTecher() {
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
       console.log("updated data 🥰😥😘", data);
       if (data) {
         // const accessToken = data?.token;
         // localStorage.setItem("accessToken", user.accessToken);
         // toast.success("You are Successfully Update Profile!");

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
             <div className="col-lg-7 col-md-10"></div>
           </div>
         </div>
       </div>
       <div className="container-fluid mt-7" id="#edit">
         <div className="row">
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
                       Teacher account
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
                     Teacher information
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
                             placeholder="Enter Email"
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
                             Full name
                           </label>
                           <input
                             type="text"
                             id="input-fullname"
                             className="fromControl fromControl-alternative"
                             placeholder="Techer Name"
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
                       <div className="col-lg-6">
                         <div className="form-group focused">
                           <label
                             className="fromControl-label"
                             for="input-fullname"
                           >
                             Designation*
                           </label>
                           <input
                             type="text"
                             id="input-fullname"
                             className="fromControl fromControl-alternative"
                             placeholder="Designation"
                             {...register("designation", {
                               required: {
                                 value: true,
                                 message: "Designation is required*",
                               },
                             })}
                           />
                         </div>
                       </div>
                       <div className="col-lg-6">
                         <div className="form-group focused">
                           <label
                             className="fromControl-label"
                             htmlFor="input-phone"
                           >
                             Department*
                           </label>
                           <input
                             type="text"
                             id="input-phone"
                             className="fromControl fromControl-alternative"
                             placeholder="Department"
                             {...register("department", {
                               required: {
                                 value: true,
                                 message: "Department is required*",
                               },
                             })}
                           />
                         </div>
                         <p className="text-left text-red-500">
                           {errors.department?.type === "required" && (
                             <span>{errors.department.message}</span>
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
                     About Teacher
                   </h6>
                   <div
                     data-aos="zoom-in"
                     data-aos-duration="3000"
                     className="pl-lg-4"
                   >
                     <div className="form-group focused">
                       <label className="text-[#0A57E5]">Bio Info</label>
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
                       value="Add Teacher"
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
}

export default AddTecher