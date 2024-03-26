import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProfile = () => {
  const [profile, setProfile] = useState({
    profilePic: null,
    age: "",
    hobbies: "",
    interests: ""
  });

  useEffect(() => {

    const token = localStorage.getItem('user');
    const arrayToken = token.split('.');
    const tokenPayload = JSON.parse(atob(arrayToken[1]));
    const userId = tokenPayload.id;

    fetch(`http://localhost:4000/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        return response.json();
      })
      .then((userData) => {
        console.log('new data is appended===========================');
        setProfile({
          ...profile,
          profilePic: userData.profilePic || "",
          age: userData.age || "",
          hobbies: userData.hobbies || "",
          interests: userData.interests || ""
        });
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, []); 

  const handleChange = (e) => {
    // const { name, value } = e.target;
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfile({
      ...profile,
      profilePic: file
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('user');
    const arrayToken = token.split('.');
    const tokenPayload = JSON.parse(atob(arrayToken[1]));
    const userId = tokenPayload.id;

    const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(profile)
      };
    

      fetch(`http://localhost:4000/users/${userId}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update user profile');
        }
        return response.json();
      })
      .then(data => {
        console.log('User profile updated successfully:', data);
        // window.location.href = "/detail";
        toast.success("User updated successfully!", { autoClose: 2000 });
      })
      .catch(error => {
        console.error('Error updating user profile:', error);
      });
  
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold mb-4 text-center">Edit Profile</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Profile Picture */}
        <div className="mb-4">
          <label htmlFor="profile-pic" className="block text-sm text-gray-600 mb-2">
            Profile Picture:
          </label>
          <input
            type="file"
            id="pic"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Age */}
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm text-gray-600 mb-2">
            Age:
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={profile.age}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Hobbies */}
        <div className="mb-4">
          <label htmlFor="hobbies" className="block text-sm text-gray-600 mb-2">
            Hobbies:
          </label>
          <input
            type="text"
            id="hobbies"
            name="hobbies"
            value={profile.hobbies}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Interests */}
        <div className="mb-4">
          <label htmlFor="interests" className="block text-sm text-gray-600 mb-2">
Interests:
</label>
<input
         type="text"
         id="interests"
         name="interests"
         value={profile.interests}
         onChange={handleChange}
         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
       />
</div>
{/* Submit Button */}
<div className="mb-4">
<button
         type="submit"
         className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
       >
Save
</button>
</div>
</form>
<ToastContainer
        position="top-right"
        style={{ marginTop: "4rem" }} // Adjust this value as needed
      />
</div>
);
};

export default EditProfile;