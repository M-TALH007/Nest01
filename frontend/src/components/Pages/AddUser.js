import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUserPage = () => {
    const [errors, setErrors] = useState({});
    const [newUser, setNewUser] = useState({
      name: "",
      email: "",
      password: "",
      cnic: "",
    });
  
    const handleChange = (e) => {
      setNewUser({
        ...newUser,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (validateForm()) {
        setNewUser({
          name: "",
          email: "",
          password: "",
          cnic: "",
        });
        toast.success("User registered successfully!", { autoClose: 2000 });
        setTimeout(() => {
            window.location.href = '/Dashboard'; 
        }, 2000);
      } else {
        console.log("Form is invalid");
      }
  
      
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      };
  
      fetch('http://localhost:4000/users/signUp', requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('POST request successful:', data);
        })
        .catch(error => {
          console.error('There was a problem with the POST request:', error);
        });
    };
  

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!newUser.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!newUser.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(newUser.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!newUser.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (newUser.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (!newUser.cnic.trim()) {
      errors.cnic = "CNIC is required";
      isValid = false;
    } else if (!/^\d{5}-\d{7}-\d{1}$/.test(newUser.cnic)) {
      errors.cnic = "CNIC format should be 12345-1234567-1";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add User</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newUser.name}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name && 'border-red-500'}`}
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email && 'border-red-500'}`}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password && 'border-red-500'}`}
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cnic">
            CNIC (e.g., 12345-1234567-1)
          </label>
          <input
            type="text"
            id="cnic"
            name="cnic"
            value={newUser.cnic}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cnic && 'border-red-500'}`}
          />
          {errors.cnic && <p className="text-red-500 text-xs italic">{errors.cnic}</p>}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add User
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

export default AddUserPage;
