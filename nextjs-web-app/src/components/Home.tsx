import { Link } from "react-scroll";
export default function Home() {
  return (
    <div name="home" className="w-full h-screen bg-slate-50 text-black">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, My name is Patipol Pantarat
        </h1>
        <p className="text-xl text-center sm:w-10/12 p-2 rounded-md mt-10 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          reiciendis sit amet distinctio quasi ratione commodi rem ex
          consequatur dignissimos?
        </p>
        {/* <div>
          <Link
            to="projects"
            smooth
            duration={500}
            // className="bg-yellow-400 px-12 py-3 rounded-md mt-10 hover:scale-110 font-bold text-xl"
          >
            PROJECTS
          </Link>
        </div> */}
        {/* <button className="bg-yellow-400 px-12 py-3 rounded-md mt-10 hover:scale-110 duration-300 font-bold text-xl">
          PROJECTS
        </button> */}
      </div>
    </div>
  );
}
