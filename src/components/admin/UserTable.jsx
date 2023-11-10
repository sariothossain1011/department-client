import React from "react";
import {AiOutlineDelete} from "react-icons/ai"
import { PiToggleLeftThin } from "react-icons/pi";
function UserTable() {
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">Rana Arju</div>
              <div className="text-sm opacity-50">Rana</div>
            </div>
          </div>
        </td>
        <td>demo@gmail.com</td>
        <td>01881220413</td>
        <th className="flex gap-4 items-center">
          <button>
            <AiOutlineDelete className="w-6 h-6 text-red-500" />
          </button>
          <button>
            <PiToggleLeftThin className="w-6 h-6" />
          </button>
        </th>
      </tr>
    </tbody>
  );
}

export default UserTable;
