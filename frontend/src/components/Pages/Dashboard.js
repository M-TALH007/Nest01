import React, { useState, useEffect } from "react";

export const DashBoard = () => {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

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
  }, []);

  const deleteUser = (userId) => {
    fetch(`http://localhost:4000/users/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete user");
        }
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const handleEdit = (userId) => {
    setEditUserId(userId);
    const user = users.find((user) => user.id === userId);
    setNewUser({ name: user.name, email: user.email });
  };

  const handleSave = () => {
    fetch(`http://localhost:4000/users/${editUserId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to save user");
        }
        setEditUserId(null);
      })
      .catch((error) => {
        console.error("Error saving user:", error);
      });
  };

  const handleAddUser = () => {
    fetch(`http://localhost:4000/users/signUp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add user");
        }
        return response.json();
      })
      .then((data) => {
        setUsers([...users, data]);
        setNewUser({ name: "", email: "" });
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">User List</h1>
        <button
          onClick={handleAddUser}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add User
        </button>
      </div>
      <table className="min-w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{user.id}</td>
              <td className="py-3 px-6 text-left">
                {editUserId === user.id ? (
                  <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                ) : (
                  user.name
                )}
              </td>
              <td className="py-3 px-6 text-left">
                {editUserId === user.id ? (
                  <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                ) : (
                  user.email
                )}
              </td>
              <td className="py-3 px-6 text-center">
                {editUserId === user.id ? (
                  <button
                    onClick={handleSave}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ml-2"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
