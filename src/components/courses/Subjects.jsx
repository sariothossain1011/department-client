
import React from 'react'
import SubjectCard from './SubjectCard'

const Subjects = () => {

  
  return (
    <div className=' container-[1280px]'>
    <div className=' text-center'>
      <h1 className='h-5 text-3xl font-bold my-10'>Semester wise subject</h1>
    </div>
      <SubjectCard/>
  </div>
  )
}

export default Subjects

















// import React, { Fragment, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Video from "./Video";

// const CourseSingle = () => {
//   const params = useParams();
//   const [subject, setSubject] = useState([]);
//   const [video, setVideo] = useState([]);
//   const [activeVid, setActiveVid] = useState("https://www.youtube.com/watch?v=4kWyFSQhJpc");
//   const [actTitle, setActTitle] = useState("video 01");
//   const [description, setActiveDescription] = useState("We will learn DFS of Graph in this problem");

//   useEffect(() => {
//     fetchSubjectData();
//   }, [params.id]);

//   const fetchSubjectData = async () => {
//     try {
//       if (params.id) {
//         const { data } = await axios.get(
//           `http://localhost:8080/api/v1/course-find-subject/${params.id}`
//         );
//         const subjectData = await data.data;
//         setSubject(subjectData);
        
//         if (subjectData && subjectData.length > 0) {
//           fetchVideoData(subjectData[0]._id);
//         }
//       }
//     } catch (error) {
//       console.log("Subject Error", error);
//     }
//   };

//   const fetchVideoData = async (subjectId) => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:8080/api/v1/find-subject-by-video/${subjectId}`
//       );
//       const videoData = await data.data;
//       setVideo(videoData);
//       console.log("videoData", videoData);
//     } catch (error) {
//       console.log("Video Error", error);
//     }
//   };

//   return (
//     <Fragment>
//       <div className="mx-auto flex flex-row w-11/12 h-full pt-2 gap-6">
//         <Video link={activeVid} title={actTitle} description={description} />
//         <div className="w-3/6 shadow-lg shadow-gray-600 overflow-y-scroll flex flex-col mt-4 border-slate-200 border-2 rounded-lg" style={{ height: "min(38vw, 650px)" }}>
//           {subject.length > 0 ? (
//             <details className="dropdown" open>
//               {subject.map((item, index) => (
//                 <div key={index}>
//                   <summary className="m-1 btn w-full" onClick={() => fetchVideoData(item._id)}>
//                     {item.subjectTitle}
//                   </summary>
//                 </div>
//               ))}
//               <ul className="p-2 shadow menu dropdown-content cmt-dropdown-content z-[1] bg-base-100 rounded-box w-52">
//                 {video.map((item, index) => (
//                   <li key={index}>
//                     <div className="hover:bg-gray-300 p-1 mt-2 border-2 rounded-xl h-2/6 shadow-xl shadow-gray-300" onClick={() => {
//                       setActiveVid(item.link);
//                       setActTitle(item.title);
//                       setActiveDescription(item.description);
//                     }}>
//                       <img className="h-8 w-14 my-2 mx-2 float-left" src={item.photo} alt={item.title} />
//                       <p className="w-16 font-semibold pl-2 text-sm">{item.title}</p>
//                       <p className="h-8 px-1">{item.description}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </details>
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default CourseSingle;




















// import React, { Fragment, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Video from "./Video";

// const CourseSingle = () => {
//   const params = useParams();
//   const [subject, setSubject] = useState([]);
//   const [video, setVideo] = useState([]);
//   const [activeVid, setActiveVid] = useState("https://www.youtube.com/watch?v=4kWyFSQhJpc");
//   const [actTitle, setActTitle] = useState("video 01");
//   const [description, setActiveDescription] = useState("We will learn DFS of Graph in this problem");

//   useEffect(() => {
//     fetchSubjectData();
//   }, []);

//   const fetchSubjectData = async () => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:8080/api/v1/course-find-subject/${params.id}`
//       );
//       const subjectData = await data.data;
//       setSubject(subjectData);
//       if (subjectData && subjectData.length > 0) {
//         fetchVideoData(subjectData[0]._id); // Fetch video data for the first subject
//       }
//     } catch (error) {
//       console.log("Subject Error", error);
//     }
//   };

//   const fetchVideoData = async (subjectId) => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:8080/api/v1/find-subject-by-video/${subjectId}`
//       );
//       const videoData = await data.data;
//       setVideo(videoData);
//     } catch (error) {
//       console.log("Video Error", error);
//     }
//   };

//   const handleSubjectClick = (subjectId) => {
//     fetchVideoData(subjectId);
//   };

//   return (
//     <Fragment>
//       <div className="mx-auto flex flex-row w-11/12 h-full pt-2 gap-6">
//         <Video link={activeVid} title={actTitle} description={description} />
//         <div className="w-3/6 shadow-lg shadow-gray-600 overflow-y-scroll flex flex-col mt-4 border-slate-200 border-2 rounded-lg" style={{ height: "min(38vw, 650px)" }}>
//           {subject.length > 0 ? (
//             <details className="dropdown" open>
//               {subject.map((item, index) => (
//                 <div key={index}>
//                   <summary className="m-1 btn w-full" onClick={() => handleSubjectClick(item._id)}>
//                     {item.subjectTitle}
//                   </summary>
//                 </div>
//               ))}
//               <ul className="p-2 shadow menu dropdown-content cmt-dropdown-content z-[1] bg-base-100 rounded-box w-52">
//                 {video.map((e, index) => (
//                   <li key={index}>
//                     <div className="hover:bg-gray-300 p-1 mt-2 border-2 rounded-xl h-2/6 shadow-xl shadow-gray-300" onClick={() => {
//                       setActiveVid(e.link);
//                       setActTitle(e.title);
//                       setActiveDescription(e.description);
//                     }}>
//                       <img className="h-8 w-14 my-2 mx-2 float-left" src={e.photo} alt={e.title} />
//                       <p className="w-16 font-semibold pl-2 text-sm">{e.title}</p>
//                       <p className="h-8 px-1">{e.description}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </details>
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default CourseSingle;

// import React, { Fragment, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// import Video from "./Video";

// const CourseSingle = () => {
//   const params = useParams();
//   // console.log(params.id)

//   const [subject, setSubject] = useState([]);
//   const [video, setVideo] = useState([]);
//   console.log("video",video)
//   console.log("subject",subject)

//   useEffect(() => {
//     fetchSubjectData();
//     fetchVideoData();
//   }, [params.id]);


//   const fetchSubjectData = async () => {
//     try {
//       if (params.id) {
//         const { data } = await axios.get(
//           `http://localhost:8080/api/v1/course-find-subject/${params.id}`
//         );
//         const subjectData = await data.data;
//         setSubject(subjectData);
  
//         if (subjectData && subjectData.length > 0) {
//           fetchVideoData(subjectData[0]._id); // Fetch video data for the first subject
//         }
//       }
//     } catch (error) {
//       console.log("Subject Error", error);
//     }
//   };


//   // const fetchSubjectData = async () => {
//   //   try {
//   //     if (params.id) {
//   //       const { data } = await axios.get(
//   //         `http://localhost:8080/api/v1/course-find-subject/${params.id}`
//   //       );
//   //       // console.log("pa",params.id)
//   //       const subjectData = await data.data;
//   //       setSubject(subjectData);
//   //     }
//   //   } catch (error) {
//   //     console.log("Subject Error", error);
//   //   }
//   // };

//   const fetchVideoData = async () => {
//     try {
//       if (subject._id) {
//         const { data } = await axios.get(
//           `http://localhost:8080/api/v1/find-subject-by-video/${subject._id}`
//         );
//         const videoData = await data.data;
//         setVideo(videoData);
//         console.log("videoData".videoData)
//       }
//     } catch (error) {
//       console.log("Video Rrror", error);
//     }
//   };

//   const [activeVid, setActiveVid] = useState(
//     "https://www.youtube.com/watch?v=4kWyFSQhJpc"
//   );
//   const [actTitle, setActTitle] = useState("video 01");
//   const [description, setActiveDescription] = useState(
//     "We will learn DFS of Graph in this problem"
//   );

//   return (
//     <Fragment>
//       <div className=" mx-auto flex flex-row w-11/12 h-full pt-2 gap-6 ">
//         <Video link={activeVid} title={actTitle} description={description} />
//         <div
//           className="w-3/6 shadow-lg shadow-gray-600  
//                            overflow-y-scroll flex flex-col  
//                            mt-4  border-slate-200  
//                            border-2 rounded-lg"
//           style={{ height: "min(38vw, 650px)" }}
//         >
//           {subject.length > 0 ? (
//             <details class="dropdown " open>
//               {subject &&
//                 subject.map((item, index) => {
//                   return (
//                     <div key={index}>
//                       <summary class="m-1 btn w-full">
//                         {item.subjectTitle}
//                       </summary>
//                     </div>
//                   );
//                 })}

//               <ul class="p-2 shadow menu dropdown-content cmt-dropdown-content z-[1] bg-base-100 rounded-box w-52">
//                 {video && video.map((item, index) => {
//                   return (
//                     <li key={index}>
//                       <div
//                         className="hover:bg-gray-300 p-1 mt-2
//                                        border-2 rounded-xl h-2/6  
//                                        shadow-xl shadow-gray-300"
//                         onClick={() => {
//                           setActiveVid(item.link);
//                           setActTitle(item.title);
//                           setActiveDescription(item.description);
//                         }}
//                       >
//                         <img
//                           className=" h-8 w-14 my-2 mx-2 float-left"
//                           src={item.photo}
//                         />
//                         <p className=" w-16 font-semibold pl-2 text-sm">
//                           {item.title}
//                         </p>
//                         <p className=" h-8 px-1">{item.description}</p>
//                       </div>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </details>
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default CourseSingle;
