import Carousel from "../components/carousel";

import Data from "../data/global.json";

import { Helmet } from "react-helmet";

import logo from "../assets/usfmmeta.webp";

import jsondata from "../data/global.json";
import CButton from "../components/cbutton";

const title = jsondata.fullname + " - " + jsondata.target;

export default function Home() {
  return (
    <div>
      <Helmet>
        <title> {title} </title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content={jsondata.desc} />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:desc" content={jsondata.desc} />
        <meta property="og:title" content={title} />
      </Helmet>
      <div className="img p-12">
        <h1 className="text-white font-bold text-center text-2xl bg-gradient-to-r from-blue-500/70 to-red-500/70  p-2">
          {jsondata.target}{" "}
        </h1>
      </div>
      <section>
        <div className="text-white">
          <h1 className=" bg-red-500/75 font-bold text-center p-1.5">
            {Data.fullname}{" "}
          </h1>
          <Carousel />
        </div>
      </section>
      <section className="bg-stone-100 p-5 divide-x-4 m-5 border-dotted border-4">
        <h2 className="text-2xl mb-3 text-center font-bold">
          Southern California Digital Marketing
        </h2>
        <p className="text-center">
          United States Family Marketing LLC is a digital marketing company located in Southern California, operating worldwide. We build superior websites with exceptional speed, content and reliability. Our unique process helps you to build a strong brand online and off. We specialize in digital marketing such as creating online content; webpages, sites and more. Our expertise is in modern frameworks that focus on speed reliability. {" "}
        </p>
      </section>
      <section className="bg-sky-100 p-5 m-5">
        <h2 className="text-3xl text-left mb-3">
          Digital Advertising For A Modern World
        </h2>
        <p>
          United States Family Marketing offers a unique approach to digital
          marketing. We offer a wide variety of online marketing & advertising
          services to our clients across the United States. Our services at the
          time include, but are not limited to: Web Design, Managed Hosting,
          Custom Email/Website Servers, Logo Design & Business Cards.{" "}
        </p>
        <CButton to={"/contact"} />
      </section>
    </div>
  );
}
