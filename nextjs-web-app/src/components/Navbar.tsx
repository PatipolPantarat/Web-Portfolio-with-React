"use client";
import { useState } from "react";
import "../app/globals.css";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaCode } from "react-icons/fa";
import Image from "next/image";
import ProfileImage from "../../public/images/facebook_profile.jpg";
import { Link } from "react-scroll";

export default function CustomNavbar(props: any) {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
      icon: <FaHome />,
    },
    {
      id: 2,
      link: "about",
      icon: <FaInfoCircle />,
    },
    {
      id: 3,
      link: "projects",
      icon: <FaCode />,
    },
    {
      id: 4,
      link: "contact",
      icon: <FaHome />,
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-black bg-white fixed md:px-10 shadow-nav">
      <div className="flex ml-2">
        <Image
          src={ProfileImage}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h1 className="text-4xl font-signature ml-5">Patipol</h1>
      </div>
      <div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="font-bold text-lg capitalize py-2 px-5 mx-2 duration-200 hover:scale-105 hover:text-yellow-400 cursor-pointer "
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden m-4 cursor-pointer z-10"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-zinc-500 to-zinc-50 ">
          {links.map(({ id, link, icon }) => (
            <li
              key={id}
              className="px-4 py-6 cursor-pointer capitalize text-3xl text-white font-bold"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                className="flex"
              >
                <div className="mr-4">{icon}</div>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
