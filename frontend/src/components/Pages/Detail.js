import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Detail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('user');
    const arrayToken = token.split('.');
    const tokenPayload = JSON.parse(atob(arrayToken[1]));

    if (tokenPayload.id) {
      const userId = tokenPayload.id;
      fetch(`http://localhost:4000/users/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch user details");
          }
          return response.json();
        })
        .then((userData) => {
          setName(userData.name);
          setEmail(userData.email);
          setPic(userData.pic);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, []);

  return (
    <Link to="/edit-profile">
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl cursor-pointer transform transition duration-300 hover:scale-105">
        <div className="text-center">
          {pic ? (
            <img
              src={pic}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
          )}
          <h2 className="text-3xl font-semibold mb-2">{name}</h2>
          <p className="text-lg text-gray-600 mb-4">{email}</p>
        </div>
      </div>
    </Link>
  );
};
