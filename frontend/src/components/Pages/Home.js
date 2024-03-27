import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to User Management App</h1>
        <p className="text-lg text-gray-600 mt-4">
          Efficiently manage your users with ease.
        </p>
      </header>
      <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our user management app provides a comprehensive set of features to simplify user administration:
        </p>
        <ul className="list-disc list-inside">
          <li className="text-gray-700 mb-2">Create new user profiles with ease.</li>
          <li className="text-gray-700 mb-2">View and edit existing user details.</li>
          <li className="text-gray-700 mb-2">Search for specific users quickly.</li>
          <li className="text-gray-700 mb-2">Disable or delete user accounts when necessary.</li>
          <li className="text-gray-700 mb-2">Track user activity and access logs.</li>
        </ul>
      </section>
      <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Here's why our user management app stands out from the rest:
        </p>
        <ul className="list-disc list-inside">
          <li className="text-gray-700 mb-2">User-friendly interface for seamless navigation.</li>
          <li className="text-gray-700 mb-2">Robust security measures to protect user data.</li>
          <li className="text-gray-700 mb-2">Flexible customization options to suit your business needs.</li>
          <li className="text-gray-700 mb-2">Dedicated customer support for assistance whenever you need it.</li>
        </ul>
      </section>
      <div className="text-center">
        <Link
          to="/login"
          className="inline-block bg-blue-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};