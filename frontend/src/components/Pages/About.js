import React from "react";

export const About = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side (Image) */}
        <div className="flex justify-center items-center">
          <img
            src='./image.jpg'
            alt="Profile"
            className="object-cover w-full h-full max-h-96"
          />
        </div>
        
        {/* Right Side (Content) */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
          <p className="text-lg text-gray-600 mb-6">
            Greetings, everyone! I'm Talha, and I'm absolutely thrilled to be venturing into the realm of app development with my very first creation. This journey has been nothing short of exhilarating, filled with learning opportunities and moments of sheer excitement. I can't wait to share this experience with you all as we embark on this adventure together!
          </p>
          <a
            href="https://github.com/TALHA0713?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-semibold py-2 px-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Visit GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
