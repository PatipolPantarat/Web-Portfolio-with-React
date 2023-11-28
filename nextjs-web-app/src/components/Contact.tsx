"use client";
import Image from "next/image";
import BackgroundImage from "../../public/images/background.jpg";
import "../app/globals.css";
import { FaGithub, FaFacebook } from "react-icons/fa";
export default function Contact() {
  const contacts = [
    {
      name: "Facebook",
      icon: <FaFacebook className="mr-2" />,
      link: "https://web.facebook.com/patipantarat/",
    },
    {
      name: "Github",
      icon: <FaGithub className="mr-2" />,
      link: "https://github.com/PatipolPantarat/",
    },
  ];

  return (
    <div id="contact" className="w-full h-screen text-black bg-zinc-50">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold mb-5">Contact</h1>
        <div className="bg-yellow-400 w-1/6 h-2 rounded mb-5"></div>
        <div className="text-center mt-2 mb-10 flex">
          {contacts.map(({ name, icon, link }) => (
            <button
              key={name}
              className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:scale-110 duration-300 flex items-center text-xl font-bold me-5 cursor-pointer"
              onClick={() => window.open(link, "_blank")}
            >
              {icon}
              {name}
            </button>
          ))}
        </div>
        <div className="w-3/4 shadow-xl p-3 rounded-3xl bg-white">
          <form
            className="w-full p-10"
            action={"https://getform.io/f/994792d6-0143-43e5-bf31-d36b3e75d3cf"}
            method="POST"
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-yellow-400"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-yellow-400"
                placeholder="Enter Your Email"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-yellow-400"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:scale-110 duration-300 font-bold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
