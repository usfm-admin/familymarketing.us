import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

import ReCAPTCHA from "react-google-recaptcha";

import templatedata from "../../data/formdata.json";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function FormModal() {
  const form = useRef();

  const [attempting, setattempt] = useState("idle");
  const [captcha, setcaptcha] = useState("");

  let loadicon;

  function onChange(value) {
    setcaptcha(value);
  }

  if (attempting === "idle") {
    loadicon = <div className="">Submit</div>;
  } else if (attempting === "attempting") {
    loadicon = <div className="spin"></div>;
  } else if (attempting === "success") {
    loadicon = (
      <svg
        className="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
        <path
          class="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    );
  }

  async function sendEmail(event) {
    await event.preventDefault();
    try {
      await setattempt("attempting");
      await emailjs
        .sendForm(
          "service_jlkwpbq",
          "template_mjfbhbe",
          form.current,
          "_ESu5OvOMik0fsin8"
        )
        .then((result) => {
          if (result.status === 200) {
            setattempt("success");
          } else {
            setattempt("idle");
          }
        });
      await sleep(833);
      await setattempt("success");
    } catch (e) {
      await setattempt("idle");
    }
  }

  return (
    <div className="  w-full  relative	 m-auto font-mono ">
      <div className="grid  grid-cols-1 lg:p-11 p-5">
        <div className="bg-white  p-5 lg:test testm order-last  test2 rounded-xl">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <form ref={form}>
              <div className="mb-6 flex-1">
                <h1 className="font-bold text-black text-2xl mb-6">
                  {templatedata.tagline}
                </h1>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Phone Number
                </label>
                <input
                  type=""
                  id="password"
                  name="phone_number"
                  placeholder="(***)-***-****"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <div class="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email_address"
                  placeholder="name@email.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="m-auto p-8">
                <ReCAPTCHA sitekey={templatedata.captcha} onChange={onChange} />
              </div>
              <div class="flex items-start mb-6"></div>
              {captcha ? (
                <button
                  type="submit"
                  onClick={sendEmail}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <div className="inline"> {loadicon}</div>
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <p>Please Complete the Captcha</p>
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
