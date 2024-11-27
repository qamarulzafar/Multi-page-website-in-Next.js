import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-auto  md:min-h-screen">
        <h2 className="text-4xl md:text-6xl md:w-1/2 text-center my-10">
          Have questions or need support?
        </h2>

        <form className="rounded-lg p-6 w-full max-w-2xl my-10">
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full bg-transparent mt-2 px-4 py-2  border-gray-300  placeholder-gray-400 focus:outline-none  border-b focus:border-transparent"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your e-mail"
              className="w-full bg-transparent mt-2 px-4 py-2 border-b border-gray-300  placeholder-gray-400 focus:outline-none focus:border-transparent"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message..."
              rows={4}
              className="w-full bg-transparent mt-2 px-4 py-2 border-b  border-gray-300  placeholder-gray-400 focus:outline-none focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 text-white bg-fuchsia-400 rounded-full shadow-md focus:outline-none"
            >
              SUBMIT MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
