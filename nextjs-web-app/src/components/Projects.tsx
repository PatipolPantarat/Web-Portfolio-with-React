"use client";
import Image from "next/image";
import ProjectImage from "../../public/images/webport-project-1.png";
export default function Projects() {
  const viewGithub = () => {
    window.open(
      "https://github.com/PatipolPantarat/PC-Customize-WebApp",
      "_blank"
    );
  };
  return (
    <div id="projects" className="w-full h-screen text-black">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold mb-5">Projects</h1>
        <div className="bg-yellow-400 w-1/6 h-2 mb-2 rounded"></div>
        <p className="text-xl text-center sm:w-10/12 p-2 rounded-md mt-2 mb-2">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
        <div className="flex flex-col mt-16 w-full">
          <div className="w-full flex sm:flex-row flex-col">
            <Image
              src={ProjectImage}
              alt="Background Image"
              className="sm:h-40 md:h-72 w-auto"
            />
            <div className="p-4 flex flex-col justify-center ms-0 md:ms-10">
              <h1 className="text-2xl font-bold mb-4">
                Web Application PC Customize
              </h1>
              <p>
                Developed with HTML CSS JavaScript Bootstrap5 Express.js
                PostgreSQL and image data is stored in AWS S3
              </p>
              <div>
                <button
                  onClick={viewGithub}
                  className="bg-yellow-400 px-10 py-3 rounded-md mt-8 hover:scale-110 duration-300 font-bold text-lg"
                >
                  View Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
