import React, { useState, useEffect } from 'react';
import{ toast, ToastContainer }  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const savedPassword = localStorage.getItem("rememberedPassword");
    if (savedPassword) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        password: savedPassword,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
  
      try {
        const response = await fetch("http://localhost:4000/users/login", requestOptions);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        const serializedUser = JSON.stringify(data);
        localStorage.setItem('user', serializedUser);
 
        window.location.href = "/detail"; 
      } catch (error) {
        console.error("There was a problem with the POST request:", error);
        setFormData({
          email: "",
          password: "",
        });
        toast.error("Please enter correct fields", {autoClose: 1500 });
      }
    } else {
      console.log("Form is invalid");
    }
  };
  
  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <section className="bg-gray-0 dark:bg-gray-0">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up here</a>
              </p>
            </form>
          </div>
        </div>
        <ToastContainer
        position="top-right"
        style={{ marginTop: "4rem" }} 
      />
      </div>
    </section>
  );
};

export default Login;
