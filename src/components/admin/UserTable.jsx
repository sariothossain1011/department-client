import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { PiToggleLeftThin } from "react-icons/pi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function UserTable() {
  const navigate = useNavigate();

  const [user, setUserData] = useState([]);
  const [id, setId] = useState();
  const [adminId, setAdminId] = useState();

  useEffect(() => {
    DelteUser(id);
    fetchUserData();
    UserToAdmin(adminId);
  }, [id, adminId]);

  const DelteUser = async (id) => {
    try {
      const token = await localStorage.getItem("accessToken");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
        },
      };
      const res = await axios.delete(
        `https://department-server-tau.vercel.app/api/v1/delete-user/${id}`,
        config
      );
      console.log("....", res);
      if (res.status === 200) {
        navigate("/admin/users");
        return <>{toast.success("User Delete Successfull")}</>;
      } else {
        return <>{toast.error("User Delete Fail")}</>;
      }
    } catch (error) {
      return <>{toast.error(error)}</>;
    }
  };

  const fetchUserData = async () => {
    try {
      const token = await localStorage.getItem("accessToken");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
        },
      };
      const { data } = await axios.get(
        `https://department-server-tau.vercel.app/api/v1/find-users`,
        config
      );
      const userData = await data.data;
      console.log(userData);
      setUserData(userData);
    } catch (error) {
      console.log("Subject Error", error);
    }
  };

  const UserToAdmin = async (adminId) => {
    try {
      const token = await localStorage.getItem("accessToken");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
        },
      };
      const res = await axios.put(
        `https://department-server-tau.vercel.app/api/v1/update-admin/${adminId}`,
        "admin",
        config
      );
      if (res.status === 200) {
        navigate("/admin/users");
        return <>{toast.success("User Admin Successfull")}</>;
      } else {
        return <>{toast.error("User Admin Fail")}</>;
      }
    } catch (error) {
      return <>{toast.error(error)}</>;
    }
  };
  const handleCheckboxChange = (itemId) => {
    if (adminId === itemId) {
      setAdminId(null);
    } else {
      setAdminId(itemId);
    }
  };

  return (
    <tbody>
      {user &&
        user.map((item, index) => (
          <tr key={index}>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item.name}</div>
                </div>
              </div>
            </td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
            <td>
              <button>
                <AiOutlineDelete
                  onClick={() => setId(item._id)}
                  className="w-6 h-6 text-red-500"
                />
              </button>
            </td>
            <td >
            <button>
                {item?.role === "admin" ? (
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(item._id)}
                    className="toggle toggle-sm toggle-info"
                    checked
                  />
                ) : (
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(item._id)}
                    className="toggle toggle-sm toggle-error"
                    checked={adminId === item._id}
                  />
                )}
              </button>
            </td>

            {/* <td className="flex gap-4 items-center">
              <button>
                {item?.role === "admin" ? (
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(item._id)}
                    className="toggle toggle-sm toggle-info"
                    checked
                  />
                ) : (
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(item._id)}
                    className="toggle toggle-sm toggle-info"
                    checked={adminId === item._id}
                  />
                )}
              </button>
            </td> */}

          </tr>
        ))}
    </tbody>
  );
}

export default UserTable;
