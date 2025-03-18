import { useState } from "react";

const Contact = () => {
  const [click, setClick] = useState(null);
  return (
    <div className="contact flex justify-center items-center h-screen bg-white">
      <div className="bg-white p-10  rounded-md flex space-x-10">
        <div className="w-1/2 flex flex-col gap-7">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-gray-600 mt-2 text-center ">
            Feel free to use the form or drop us an email. Old-fashioned phone
            calls work too.
          </p>
          <div className="mt-5 space-y-3 text-gray-700">
            <p className="flex items-center space-3 gap-4">
              <span role="img" aria-label="phone">
                📞
              </span>
              <span>1-800-123-456</span>
            </p>
            <p className="flex items-center space-x-2 gap-4">
              <span role="img" aria-label="email">
                📧
              </span>
              <span>info@basketbook.com</span>
            </p>
            <p className="flex items-center space-x-2 gap-4">
              <span role="img" aria-label="location">
                📍
              </span>
              <span>123 West St. London, ON, N1A 2B3</span>
            </p>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-1/2">
          <form className="space-y-4">
            <div className="flex space-x-3 w-full gap-2">
              <input
                type="text"
                placeholder="First"
                className="w-1/2 p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Last"
                className="w-1/2 p-3 border rounded-md"
              />
            </div>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="tel"
              placeholder="1(234)-567-8901"
              className="w-full p-3 border rounded-md"
            />
            <textarea
              placeholder="Type your message ..."
              className="w-full p-4 border rounded-md h-32 "
            ></textarea>
            <button
              className="w-full bg-orange-500 text-white p-3 rounded-md font-semibold hover:bg-orange-600 "
              onClick={() => {
                {
                  setClick(alert("Submitted"));
                }
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
