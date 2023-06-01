// eslint-disable-next-line no-unused-vars
import React from "react";

const Contact = () => {
    const quote = "'"
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
        <h2 className=' text-yellow-400 text-4xl font-semibold text-center underline decoration-gray-300 decoration-4 '>
           Contact
           </h2>
          <p className="py-6 text-center">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/da26b36f-9aae-4727-a904-338be9975a87"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-l from-cyan-600 via-blue-400 to-blue-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let{quote}s talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
