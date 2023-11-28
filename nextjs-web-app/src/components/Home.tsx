"use client";
import { animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import BackgroundImage from "../../public/images/background.jpg";
import "../app/globals.css";
export default function Home() {
  const handleScroll = () => {
    const element = document.getElementById("projects");
    if (!element) return;
    let elementPosition: number = element.offsetTop;
    scroll.scrollTo(elementPosition, {
      duration: 1000,
      smooth: true,
    });
  };
  return (
    <div id="home" className="w-full h-screen text-black">
      <Image
        src={BackgroundImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Hi, My name is Patipol Pantarat
        </h1>
        <p className="text-2xl text-center sm:w-10/12 p-2 rounded-md mt-10">
          New graduates are interested in software development. Ability to
          create user interfaces, restAPIs, and database systems.
        </p>
        <button
          onClick={() => handleScroll()}
          className="bg-yellow-400 px-12 py-3 rounded-md mt-10 hover:scale-110 duration-300 font-bold text-xl"
        >
          PROJECTS
        </button>
      </div>
    </div>
  );
}
