import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export const DashBoard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/users`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users", error);
      });
  }, [users]);

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/users/${userId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      setUsers(prevUsers => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">User List</h1>
        <Link   
          to="/addUser"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add User
        </Link>
      </div>
      <table className="min-w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Age</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {users.map((user, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
              <td className="py-3 px-6 text-left">{user.name}</td>
              <td className="py-3 px-6 text-left">{user.email}</td>
              <td className="py-3 px-6 text-left">{user.age}</td>
              <td className="py-3 px-6 text-center">
                <Link
                  to='/edit-profile'
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-5 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 mr-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashBoard;
