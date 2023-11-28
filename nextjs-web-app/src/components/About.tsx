"use client";
export default function About() {
  const skills: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "BootStrap5",
    "TailwindCSS",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Github",
    "AWS",
  ];
  return (
    <div
      id="about"
      className="w-full min-h-screen text-black bg-zinc-50 flex justify-center items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold mb-5">About Me</h1>
        <div className="bg-yellow-400 w-1/6 h-2 mb-2 rounded"></div>
        <p className="text-xl text-center sm:w-10/12 p-2 rounded-md mt-2 mb-2">
          Here you will find more information about me and my current skills
          mostly in terms of programming and technology
        </p>
        <div className="flex flex-col sm:flex-row mt-16 w-full">
          <div className="w-full">
            <h1 className="text-2xl font-bold mb-5">Education</h1>
            <div className="mb-4">
              <h3 className="text-xl flex items-center">
                Bachelor’s Degree in Computer Engineering
              </h3>
              <p className="text-lg text-zinc-600">
                Rajamangala University of Technology Thanyaburi
              </p>
              <p>2020 - 2023</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl flex items-center">
                High Vocational Certificate in Computer Technology
              </h3>
              <p className="text-lg text-zinc-600">Hatyai Technical College</p>
              <p>2018 - 2020</p>
            </div>
          </div>
          <div className="ms-0 sm:ms-20 w-full">
            <h1 className="text-2xl font-bold mb-5">My Skills</h1>
            {skills.map((skill) => (
              <button
                key={skill}
                className="border-yellow-400 border-2 px-3 py-2 me-3 mb-3 rounded text-sm font-bold hover:bg-yellow-100"
              >
                {skill}
              </button>
            ))}
          </div>
          <div className="ms-0 sm:ms-20 w-full">
            <h1 className="text-2xl font-bold mb-5">Languages</h1>
            <p>Thai native</p>
            <p>English basic</p>
            <h1 className="text-2xl font-bold mb-5 mt-5">My Hobbies</h1>
            <p>Workout</p>
            <p>Programming</p>
            <p>Listening to music</p>
            <p>Playing games</p>
          </div>
        </div>
      </div>
    </div>
  );
}
