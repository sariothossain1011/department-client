// import React, { Fragment } from 'react'

// const Video = (props) => {
//   // console.log("props",props.link)
//   return (
//     <Fragment>
//                 <div className="w-screen flex h-screen flex-row"> 
//             <div className="w-full h-3/4 mt-4 px-2 pt-2  
//                             rounded-xl border-2 border-slate-400"> 
//                 {/* <iframe src={props.link} className="w-full h-5/6"></iframe>  */}
                
//               <video class="w-full" autoplay muted  controls>
//                 <source src={props.link} type="video/mp4"/>
//                 Your browser does not support the video tag.
//               </video>

//                 <div className="mt-1 h-1/3 text-left text-xl text-slate-600"> 
//                     Title: {props.title} 
//                     <p className="text-lg pt-2"> 
//                         Description:{props.description} 
//                     </p> 
//                 </div> 
//             </div> 
//         </div> 
//     </Fragment>
//   )
// }

// export default Video



// import React, { Fragment, useState } from 'react';

// const Video = (props) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   console.log("sdfs",props.link)

//   const handleVideoClick = () => {
//     setIsPlaying(!isPlaying); // Toggle play/pause on video click
//   };

//   return (
//     <Fragment>
//       <div className="w-screen flex h-screen flex-row"> 
//         <div className="w-full h-3/4 mt-4 px-2 pt-2 rounded-xl border-2 border-slate-400"> 
//           <div onClick={handleVideoClick} style={{ cursor: 'pointer' }}>
//             <video className="w-full" autoPlay={isPlaying} muted={isPlaying} controls>
//               <source src={props.link} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//           <div className="mt-1 h-1/3 text-left text-xl text-slate-600"> 
//             Title: {props.title} 
//             <p className="text-lg pt-2"> 
//               Description: {props.description} 
//             </p> 
//           </div> 
//         </div> 
//       </div> 
//     </Fragment>
//   );
// };

// export default Video;



// import React, { Fragment, useState } from 'react';

// const Video = (props) => {
//   const [isPlaying, setIsPlaying] = useState(true);

//   const handleVideoClick = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <Fragment>
//       <div className="w-screen flex h-screen flex-row"> 
//         <div className="w-full h-3/4 mt-4 px-2 pt-2 rounded-xl border-2 border-slate-400"> 
//           {/* <div onClick={handleVideoClick} style={{ cursor: 'pointer' }}>
//             <video className="w-full" autoPlay={isPlaying} muted={isPlaying} controls>
//               <source src={props.link} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div> */}
          
// <video class="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700" controls>
//   <source src="https://youtu.be/G007RBO6yOo?si=lkXExOM1kaGncxZ7" type="video/mp4"/>
//   Your browser does not support the video tag.
// </video>

//           <div className="mt-1 h-1/3 text-left text-xl text-slate-600"> 
//             Title: {props.title} 
//             <p className="text-lg pt-2"> 
//               Description: {props.description} 
//             </p> 
//           </div> 
//         </div> 
//       </div> 
//     </Fragment>
//   );
// };

// export default Video;

// import React from 'react';

// const Video = (props) => {
//   return (
//     <div className="w-screen flex h-screen flex-row">
//       <div className="w-full h-3/4 mt-4 px-2 pt-2 rounded-xl border-2 border-slate-400">
//         <iframe
//           width="100%"
//           height="100%"
//           src="https://www.youtube.com/embed/G007RBO6yOo"
//           title="YouTube Video"
//           frameBorder="0"
//           allowFullScreen
//         ></iframe>

//         <div className="mt-1 h-1/3 text-left text-xl text-slate-600">
//           Title: {props.title}
//           <p className="text-lg pt-2">Description: {props.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Video;
import React from 'react';

const Video = (props) => {
  const { link, title, description } = props;

  return (
    <div className="w-screen flex h-screen flex-row">
      <div className="w-full h-3/4 mt-4 px-2 pt-2 rounded-xl border-2 border-slate-400">
        <iframe
          width="100%"
          height="100%"
          src={`${link}`}
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <div className="mt-1 h-1/3 text-left text-xl text-slate-600">
          Title: {title}
          <p className="text-lg pt-2">Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
