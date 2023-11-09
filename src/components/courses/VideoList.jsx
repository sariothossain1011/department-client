// import React, { Fragment } from 'react'

// const VideoList = () => {
//   return (
//     <Fragment>
//         <div
//           className="w-3/6 shadow-lg shadow-gray-600  
//                            overflow-y-scroll flex flex-col  
//                            mt-4  border-slate-200  
//                            border-2 rounded-lg"
//           style={{ height: "min(38vw, 650px)" }}
//         >
//           {arr.length > 0 ? (
//             <details class="dropdown ">
//               <summary class="m-1 btn w-full">Principle of digital elechtronic</summary>
//               <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
//               {
//                 arr.map((e)=>{
//                   return (
//                     <li>
//                       <div
//                 className="hover:bg-gray-300 p-1 mt-2
//                                        border-2 rounded-xl h-2/6  
//                                        shadow-xl shadow-gray-300"
//                 onClick={() => {
//                   setActiveVid(e.link);
//                   setActTitle(e.title);
//                   setActiveDescription(e.description);
//                 }}
//               >
//                 <img
//                   className=" h-8 w-14 my-2 mx-2 float-left"
//                   src={e.img}
//                 />
//                 <p
//                   className=" w-16 font-semibold pl-2 text-sm"
//                 >
//                   {e.title}
//                 </p>
//                 <p className=" h-8 px-1">{e.description}</p>
//               </div>
//                     </li>
//                   )
//                 })
//               }
//               </ul>
//             </details>
//           ) : (
//             ""
//           )}
          
//           {/* <h3 className="text-2xl p-2 font-semibold">POTD-August</h3>
//           <p className="px-2"> GFG Practice</p>
//           {arr.map((e) => {
//             return (
//               <div
//                 className="hover:bg-gray-300 p-2 
//                                        border-2 rounded-xl h-2/6  
//                                        shadow-xl shadow-gray-300"
//                 onClick={() => {
//                   setActiveVid(e.link);
//                   setActTitle(e.title);
//                   setActiveDescription(e.description);
//                 }}
//               >
//                 <img
//                   className="w-1/2 h-20 my-4  
//                                            mx-2 float-left"
//                   src={e.img}
//                 />
//                 <p
//                   className="ml-2 font-semibold  
//                                           pt-6 pl-8 text-sm"
//                 >
//                   {e.title}
//                 </p>
//                 <p className="px-2">{e.description}</p>
//               </div>
//             );
//           })} */}
//         </div>
//     </Fragment>
//   )
// }

// export default VideoList