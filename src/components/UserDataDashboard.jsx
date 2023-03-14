import React, { Suspense } from "react";
import useFirebase from "../hooks/useFirebase";

const UserDataDashboard = () => {
  const { data: userData } = useFirebase("userData");

  return (
    <div className="max-w-4xl mx-auto py-8 ">
      <h1 className="text-3xl font-bold mb-8">User Data Dashboard</h1>
      <table className="w-full border-collapse">
        <thead className="">
          <tr>
            <th className="text-left px-4 py-2">First Name</th>
            <th className="text-left px-4 py-2">Last Name</th>
            <th className="text-left px-4 py-2">Email</th>
            <th className="text-left px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id} className="border-b text-amber-50">
              <td className="px-4 py-2">{user.firstName}</td>
              <td className="px-4 py-2">{user.LastName}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataDashboard;
