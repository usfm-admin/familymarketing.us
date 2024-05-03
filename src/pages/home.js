import Carousel from "../components/carousel";

import { Helmet } from "react-helmet";

import logo from "../assets/usfmmeta.webp";

import home from "../assets/new-york-1930656_1920.jpg";

import jsondata from "../data/global.json";
import CButton from "../components/cbutton";
import { h1, h2 } from "../constants";

const title = jsondata.fullname + " - " + jsondata.target;

export default function Home() {
  return (
    <>
      <Helmet>
        <title> {title} </title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content={jsondata.desc} />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:desc" content={jsondata.desc} />
        <meta property="og:title" content={title} />
      </Helmet>
      <img
          className="lg:w-3/5 h-96 bg-center object-cover m-auto"
          src={home}
          alt={jsondata.desc}
        />
      <h1 className="bg-red-500 text-center p-2 text-white">
        {h1}
      </h1>
          <Carousel />
      <section className="p-3 m-3 border">
        <h2 className="text-2xl mb-3 text-center font-bold">
{h2}        </h2>
          <p className="inline-block">
         {h1} is located in California, and we host websites worldwide. We build superior websites
          that come with exceptional speed, content and reliability. Our unique process
          helps you to build a strong brand online and off. We specialize in
          digital marketing operations such as copywriting; creating webpages, building sites and
          more. Our expertise is in modern frameworks that focus on speed and
          reliability.</p>
      </section>
      <section className="border bg-sky-100 text-center p-3 m-3">
        <p>
          United States Family Marketing offers a unique approach to digital
          marketing. We offer a wide variety of online marketing & advertising
          services to our clients across the United States. Our services at   
          time include, but are not limited to: Web Design, Managed Hosting,
          Custom Email/Website Servers, Logo Design & Business Cards.{" "}
        </p>
        <CButton to={"/contact"} />
      </section>
    </>
  );
}
