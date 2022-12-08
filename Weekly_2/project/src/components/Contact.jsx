import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    help: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name == "firstName") {
      setForm({
        ...form,
        firstName: value,
      });
    }
    if (name == "lastName") {
      setForm({
        ...form,
        lastName: value,
      });
    }

    if (name == "email") {
      setForm({
        ...form,
        email: value,
      });
    }
    if (name == "help") {
      setForm({
        ...form,
        help: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    Nama lengkap: ${form.firstName + " " + form.lastName}
    Email: ${form.email}
    Message: ${form.help}`);
  };

  return (
    <div className="bg-white p-2">
      <h1 className="text-black flex justify-center font-bold text-3xl my-5">
        Contact{" "}
      </h1>
      <form className="w-full 0 " onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4">
                  first name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  name="firstName"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Last name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  name="lastName"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="email"
                  name="email"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Help
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  name="help"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex w-full border flex justify-center items-center md:items-center">
          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
