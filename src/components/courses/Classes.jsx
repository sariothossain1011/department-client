


import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Video from "./Video";

const Classes = () => {
  const {subjectId} = useParams();
  const [video, setVideo] = useState([]);
  const [activeVid, setActiveVid] = useState("https://www.youtube.com/watch?v=4kWyFSQhJpc");
  const [actTitle, setActTitle] = useState("video 01");
  const [description, setActiveDescription] = useState("We will learn DFS of Graph in this problem");

  useEffect(() => {
    fetchVideoData(subjectId); // Pass the ID to fetch video data
  }, [subjectId]);

  const fetchVideoData = async (id) => {
    try {
      const { data } = await axios.get(
        `https://department-server-tau.vercel.app/api/v1/find-subject-by-video/${id}`
      );
      const VideoData = await data.data;
      setVideo(VideoData);
      if (VideoData && VideoData.length > 0) {
        setActiveVid(VideoData[0].link); // Set the initial active video
        setActTitle(VideoData[0].title);
        setActiveDescription(VideoData[0].description);
      }
    } catch (error) {
      console.log("Video Error", error);
    }
  };

  return (
    <Fragment>
      <div className="mx-auto flex flex-row w-11/12 h-full pt-2 gap-6">
        <Video link={activeVid} title={actTitle} description={description} />
        <div className="w-3/6 shadow-lg shadow-gray-600 overflow-y-scroll flex flex-col mt-4 border-slate-200 border-2 rounded-lg" style={{ height: "min(38vw, 650px)" }}>
          {video.length > 0 ? (
            <ul className="p-2 shadow menu dropdown-content cmt-dropdown-content z-[1] rounded-box w-full">
              {video.map((e, index) => (
                <li key={index}>
                  <div className="hover:bg-gray-300 p-1 mt-2 border-2 rounded-xl  shadow-xl " onClick={() => {
                    setActiveVid(e.link);
                    setActTitle(e.title);
                    setActiveDescription(e.description);
                  }}>
                    <img className="h-8 w-14 my-2 mx-2 float-left" src={e.photo} alt={e.title} />
                    <p className="w-full font-semibold pl-2 text-sm">{e.title.slice(0)}</p>
                    {/* <p className="h-8 px-1">{e.description.slice(0,5)}</p> */}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Classes;
