
// import React from 'react';

// const Video = (props) => {
//   const { link, title, description } = props;
//   console.log("link",link)

//   return (
//     <div className="w-screen flex h-screen flex-row">
//       <div className="w-full h-3/4 mt-4 px-2 pt-2 rounded-xl border-2 border-slate-400">
//         <iframe
//           width="100%"
//           height="100%"
//           src={`${link}`}
//           title="YouTube Video"
//           frameBorder="0"
//           allowFullScreen
//         ></iframe>

//         <div className="mt-1 h-1/3 text-left text-xl text-slate-600">
//           Title: {title}
//           <p className="text-lg pt-2">Description: {description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Video;


import React from 'react';

const Video = (props) => {
  const { link, title, description } = props;

  // Function to extract video ID from YouTube link
  const getVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return match[2];
    } else {
      return null;
    }
  };

  // Check if the provided link is a valid YouTube link
  const videoId = getVideoId(link);

  // Construct the embeddable YouTube link
  const embedLink = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  return (
    <div className="w-screen flex h-screen flex-row">
      <div className="w-full h-3/4 mt-4 px-2 pt-2 rounded-xl border-2 border-slate-400">
        {embedLink ? (
          <iframe
            width="100%"
            height="100%"
            src={embedLink}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Invalid YouTube link</p>
        )}

        <div className="mt-1 h-1/3 text-left text-xl text-slate-600">
          Title: {title}
          <p className="text-lg pt-2">Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
