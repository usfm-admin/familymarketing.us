import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import ReCAPTCHA from "react-google-recaptcha";

import templatedata from "../../data/formdata.json";
import { disabled, input, submit } from "../../constants";


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

  async function sendEmail(e) {
     e.preventDefault();
    try {
       setattempt("attempting");
       emailjs
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
      await setattempt("success");
    } catch (e) {
      await setattempt("idle");
    }
  }

  return (
        <div className="p-4 lg:test testm order-last test2 rounded-xl">
            <form ref={form}>
               <h1 className="text-center font-bold text-2xl">
                  {templatedata.tagline}
                </h1>

                <input type="text" id="name"  name="name" className={input} placeholder="Name" required />


                <input
                  type="number"
                  id="phone"
                  name="phone_number"
                  placeholder="Phone Number"
                  className={input}
                  required
                />


                <input
                  type="email"
                  id="email"
                  name="email_address"
                  placeholder="you@email.com"
                  className={input}
                  required
                />

                <textarea 
                  type="text"
                  rows="4"
                  id="describe"
                  name="describe"
                  placeholder="Message"
                  className={input}
                  required
                />
                <ReCAPTCHA sitekey={templatedata.captcha} onChange={onChange} />
              {captcha ? (
                <button
                  type="submit"
                  onClick={sendEmail}
                  className={submit}
                >
                  <div className="inline"> {loadicon}</div>
                </button>
              ) : (
                <button
                  type="submit"
                  className={disabled}
                >
                  Please Complete the Captcha
                </button>
              )}
            </form>
          </div>
  );
}
