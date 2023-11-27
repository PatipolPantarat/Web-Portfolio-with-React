export default function Projects() {
  return (
    <div name="projects" className="w-full h-screen bg-slate-50 text-black">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold mb-5">Projects</h1>
        <div className="bg-yellow-400 w-1/6 h-2 mb-2 rounded"></div>
        <p className="text-xl text-center sm:w-10/12 p-2 rounded-md mt-2 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          reiciendis sit amet distinctio quasi ratione commodi rem ex
          consequatur dignissimos?
        </p>
        <div className="flex mt-16 w-full">
          <div className="w-full border-2 border-yellow-400 rounded-3xl p-5">
            <h1 className="text-2xl font-bold mb-5">Education</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              mollitia similique hic! Animi est cum enim repellendus? Debitis
              aspernatur vitae fugiat ea!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
