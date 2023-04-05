import Layout from "../components/layout";
export default function Contact() {
  return (
    <Layout>
      <div className="px-20 pt-20">
        <h1 className="mt-10 text-3xl font-bold text-black text-center sm:text-center mb-8 sm:text-4xl">
          Get in touch with us
        </h1>
        <p className="my-5 text-gray-600 text-md leading-9 text-justify sm:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. This last been the industrys standard dummy text ever since
          the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. This last been the industrys standard dummy text
          ever since the 1500s,
        </p>
        <form
          className="my-10 flex flex-col justify-start items-center max-w-xl m-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
            <div className="text-left flex flex-col gap-2 w-full">
              <label className="font-semibold">Full Name</label>
              <input
                className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="text-left flex flex-col gap-2 w-full">
              <label className="font-semibold">Email</label>
              <input
                className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                type="email"
                placeholder="john.doe@gmail.com"
                required
              />
            </div>
          </div>

          <div className="text-left mb-6 flex flex-col gap-2 w-full">
            <label className="font-semibold">Message</label>
            <textarea
              className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 pb-16 px-4 md:py-3 md:pb-16 md:px-4 md:mb-0 focus:border-red-500"
              placeholder="Type a message..."
              required
            ></textarea>
          </div>
          <div className="w-full text-left">
            <button
              className="flex justify-center items-center gap-2 mb-10 w-full py-3 px-4 text-white text-sm font-bold rounded-full ease-in-out duration-150 shadow-slate-600  lg:m-0 md:w-max md:px-6"
              title="Send"
              style={{ backgroundColor: "var(--themeRed)" }}
            >
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
