import  axios  from "axios";
import React, { useEffect, useState } from "react";
import {AiOutlineDelete} from "react-icons/ai"
import { PiToggleLeftThin } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UserTable() {

  const [user, setUserData] = useState([]);
  const [id, setId] = useState();

   
  useEffect(() => {
    fetchUserData();
    DelteUser(id);
  }, [id]);

  const DelteUser = async (id) => {
    try {
      const token = await localStorage.getItem("accessToken");
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}` // Assuming it's a Bearer token
        }
      };
        const { data } = await axios.delete(
          `https://department-server-tau.vercel.app/api/v1/delete-user/${id}`,config
        );
       if(data.success === ture ){
        alert("delete success")
       }else{
        alert("delete fial")
       }
      
    } catch (error) {
      console.log("Subject Error", error);
    }
  };

  const fetchUserData = async () => {
    try {
      const token = await localStorage.getItem("accessToken");
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}` // Assuming it's a Bearer token
        }
      };
        const { data } = await axios.get(
          `https://department-server-tau.vercel.app/api/v1/find-users`,config
        );
        const userData = await data.data;
        console.log(userData)
        setUserData(userData);
      
    } catch (error) {
      console.log("Subject Error", error);
    }
  };

  return (
    <tbody>
      {user && user.map((item,index)=>(
              <tr key={index}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </div>
              </td>
              <td>{item.email}</td>
              <td>009875646557644</td>
              <th className="flex gap-4 items-center">
                <button>
                  <AiOutlineDelete onClick={()=>setId(item._id)} className="w-6 h-6 text-red-500" />
                </button>
                <button>
                  <PiToggleLeftThin className="w-6 h-6" />
                </button>
              </th>
            </tr>
      ))}

    </tbody>
  );
}

export default UserTable;
