import React from 'react'
import UserTable from '../../components/admin/UserTable';

function Users() {
  return (
    <div>
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Delete</th>
              <th>Admin</th>
            </tr>
          </thead>
          <UserTable></UserTable>
        </table>
      </div>
    </div>
  );
}

export default Users