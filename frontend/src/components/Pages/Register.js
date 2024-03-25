import React, { useState } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    cnic: "",
  });

 


  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsRegistered(true);
    } else {
      console.log("Form is invalid");
    }


    const res = await fetch('http://localhost:4000/users/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    console.log(data)


    fetch('http://localhost:4000/users/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('GET request successful:', data);
  })
  .catch(error => {
    console.error('There was a problem with the GET request:', error);
  });
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Validate full name
    if (!formData.fullName.trim()) {
      formIsValid = false;
      errors["fullName"] = "Full Name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      formIsValid = false;
      errors["email"] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      errors["email"] = "Invalid email address";
    }

    // Validate password
    if (!formData.password.trim()) {
      formIsValid = false;
      errors["password"] = "Password is required";
    }

    // Validate CNIC
    if (!formData.cnic.trim()) {
      formIsValid = false;
      errors["cnic"] = "CNIC is required";
    } else if (!/^\d{5}-\d{7}-\d{1}$/.test(formData.cnic)) {
      formIsValid = false;
      errors["cnic"] =
        "Invalid CNIC format. Please use the format: 12345-1234567-1";
    }

    setErrors(errors);
    return formIsValid;
  };

  if (isRegistered) {
    // Redirect to Dashboard upon successful registration
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create an account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="fullName" className="sr-only">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                onChange={handleChange}
              />
              <span className="text-red-500">{errors["fullName"]}</span>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleChange}
              />
              <span className="text-red-500">{errors["email"]}</span>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleChange}
              />
              <span className="text-red-500">{errors["password"]}</span>
            </div>
            <div>
              <label htmlFor="cnic" className="sr-only">
                CNIC
              </label>
              <input
                id="cnic"
                name="cnic"
                type="text"
                required
                pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
                maxLength="15"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="CNIC (e.g., 1234512345671)"
                onChange={handleChange}
              />
              <span className="text-red-500">{errors["cnic"]}</span>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return <div>Dashboard</div>;
};


