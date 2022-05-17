import React from "react";

function ContactForm() {
  const inputClass =
    "bg-[#F4F4F4] py-[10px] px-6 rounded focus:ring focus:outline-none focus:ring-1 focus:ring-primary";
  return (
    <div className="drop-shadow-lg bg-white rounded m-2">
      <div className="flex gap-6 p-8 ">
        <div className="md:flex hidden bg-primary rounded w-[553px] h-[550px]">
          <h1>Area of Coverage</h1>

          <ul>
            <li></li>
          </ul>
        </div>
        <div className="">
          <div className="">
            <h1 className="text-darkGray font-bold text-md mb-2">
              Request A Quote
            </h1>
            <p>
              Complete the following form to request a quote from us. We will
              get back to you.
            </p>
          </div>
          <form
            action=""
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 "
          >
            <input
              type="text"
              className={inputClass}
              placeholder="Name"
              name="name"
            />
            <input
              type="email"
              className={inputClass}
              placeholder="Email"
              name="email"
            />
            <input
              type="text"
              className={inputClass}
              placeholder="Phone Number"
              name="phoneNumber"
            />
            <input
              type="text"
              className={inputClass}
              placeholder="Company"
              name="company"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="bg-[#F4F4F4] rounded col-span-full p-6 focus:ring focus:outline-none focus:ring-1 focus:ring-primary"
            ></textarea>

            <button
              type="submit"
              className="bg-darkGray text-white rounded px-6 py-4 max-w-[200px] hover:bg-primary text-sm"
            >
              Submit request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
