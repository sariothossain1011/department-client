import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import moment from "moment";
import { FaRegEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../helpers/secret";

const VideoList = () => {
  const navigate = useNavigate();

  const [Video, setVideoData] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    DeleteVideo(id);
    fetchVideoData();
  }, [id]);

  const DeleteVideo = async (id) => {
    try {
      const token = await localStorage.getItem("accessToken");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
        },
      };
      const res = await axios.delete(
        `${API}delete-video/${id}`,
        config
      );
      if (res.status === 200) {
        navigate("/admin/videoList");
        return <>{toast.success("Video Delete Successfull")}</>;
      } else {
        return <>{toast.error("Video Delete Fail")}</>;
      }
    } catch (error) {
      return <>{toast.error(error)}</>;
    }
  };

  const fetchVideoData = async () => {
    try {
      const token = await localStorage.getItem("accessToken");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
        },
      };
      const { data } = await axios.get(
        `${API}find-video-list`,
        config
      );
      const VideoData = await data.data;
      setVideoData(VideoData);
    } catch (error) {
      return <>{toast.error(error)}</>;
    }
  };

  return (
    <Fragment>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className=" text-center">
                <th>#No</th>
                <th>Photo</th>
                <th>Video Title</th>
                <th>Subject Name</th>
                <th>Created Date</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            {/* dfgkd */}
            <tbody>
              {Video &&
                Video.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center justify-center  space-x-3">
                        <div className=" w-14 h-10 align-middle">
                          <img
                            src={item.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.subjectId}</td>
                    <td>{moment(item.CreatedDate).format("MMMM Do YYYY")}</td>
                    <td>
                      <button>
                        <AiOutlineDelete
                          onClick={() => setId(item._id)}
                          className="w-6 h-6 text-red-500"
                        />
                      </button>
                    </td>
                    <td>
                      <button>
                        <FaRegEdit fontSize={22} color="blue" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoList;
