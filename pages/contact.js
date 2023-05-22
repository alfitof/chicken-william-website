import Layout from "../components/layout";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hv2r7gc",
        "template_wrpksbr",
        form.current,
        "B_gBo0ppqqaLQ_EHj"
      )
      .then(
        (result) => {
          toast.success("Message sent!", {
            position: "top-center",
          });
        },
        (error) => {
          toast.error("Message failed to send!", {
            position: "top-center",
          });
        }
      );
  };

  const { data: session } = useSession();
  if (session) {
    return (
      <Layout>
        <Head>
          <title>Contact</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
          <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          ></link>
        </Head>
        <div className="px-20 pt-20">
          <h1 className="mt-10 text-3xl font-bold text-black text-center sm:text-center mb-8 sm:text-4xl">
            Get in touch with us
          </h1>
          <form
            className="my-10 flex flex-col justify-start items-center max-w-xl m-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
              <div className="text-left flex flex-col gap-2 w-full">
                <label className="font-semibold">Full Name</label>
                <input
                  className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                  type="text"
                  placeholder="John Doe"
                  required
                  name="user_name"
                  value={session.user.name}
                />
              </div>
              <div className="text-left flex flex-col gap-2 w-full">
                <label className="font-semibold">Email</label>
                <input
                  className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                  type="email"
                  placeholder="john.doe@gmail.com"
                  required
                  name="user_email"
                  value={session.user.email}
                />
              </div>
            </div>

            <div className="text-left mb-6 flex flex-col gap-2 w-full">
              <label className="font-semibold">Message</label>
              <textarea
                className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 pb-16 px-4 md:py-3 md:pb-16 md:px-4 md:mb-0 focus:border-red-500"
                placeholder="Type a message..."
                required
                autoFocus
                name="user_message"
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
          <Toaster />
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Head>
          <title>Contact</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
          <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          ></link>
        </Head>
        <div className="px-20 pt-20">
          <h1 className="mt-10 text-3xl font-bold text-black text-center sm:text-center mb-8 sm:text-4xl">
            Get in touch with us
          </h1>
          <form
            className="my-10 flex flex-col justify-start items-center max-w-xl m-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 w-full">
              <div className="text-left flex flex-col gap-2 w-full">
                <label className="font-semibold">Full Name</label>
                <input
                  className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                  type="text"
                  placeholder="John Doe"
                  required
                  name="user_name"
                  autoFocus
                />
              </div>
              <div className="text-left flex flex-col gap-2 w-full">
                <label className="font-semibold">Email</label>
                <input
                  className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                  type="email"
                  placeholder="john.doe@gmail.com"
                  name="user_email"
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
                name="user_message"
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
          <Toaster />
        </div>
      </Layout>
    );
  }
}
