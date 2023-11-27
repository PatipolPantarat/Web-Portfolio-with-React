export default function Contact() {
  return (
    <div name="contact" className="w-full h-screen text-black">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold mb-5">Contact</h1>
        <div className="bg-yellow-400 w-1/6 h-2 mb-2 rounded"></div>
        <div className="w-3/4 shadow-xl p-3 rounded-3xl">
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
