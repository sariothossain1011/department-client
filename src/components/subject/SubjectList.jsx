import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import moment from "moment";
import { FaRegEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubjectList = () => {
  const navigate = useNavigate();

  const [subject, setSubjectData] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    DeleteSubject(id);
    fetchSubjectData();
  }, [id]);

  const DeleteSubject = async (id) => {
    try {
      const token = await localStorage.getItem("accessToken");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
        },
      };
      const res = await axios.delete(
        `https://department-server-tau.vercel.app/api/v1/delete-subject/${id}`,
        config
      );
      if (res.status === 200) {
        navigate("/admin/semesterList");
        return <>{toast.success("Subject Delete Successfull")}</>;
      } else {
        return <>{toast.error("Subject Delete Fail")}</>;
      }
    } catch (error) {
      return <>{toast.error(error)}</>;
    }
  };

  const fetchSubjectData = async () => {
    try {
      const token = await localStorage.getItem("accessToken");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
        },
      };
      const { data } = await axios.get(
        `https://department-server-tau.vercel.app/api/v1/find-subject-list`,
        config
      );
      const subjectData = await data.data;
      setSubjectData(subjectData);
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
                <th>Subject Title</th>
                <th>Subject Dec</th>
                <th>Semester ID</th>
                <th>Created Date</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            {/* dfgkd */}
            <tbody>
              {subject &&
                subject.map((item, index) => (
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
                    <td>{item.subjectTitle}</td>
                    <td>{item.subjectDescription.slice(0, 40)}...</td>
                    <td>{item.courseId}</td>
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

export default SubjectList;
