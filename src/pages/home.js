import Carousel from "../components/carousel";

import { Link } from "react-router-dom";

import Data from "../data/global.json";

import { Helmet } from "react-helmet";

import usfmfolder from "../assets/usfm-folder.png";
import usfmpiggy from "../assets/usfmpiggy.png";

import logo from "../assets/usfmlogo.webp"

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Buy Custom Websites - Familymarketing.us</title>
        <link rel="canonical" href="https://familymarketing.us" />
        <meta
          name="description"
          content="United States Family Marketing offers affordable marketing services online."
        />
        <meta property="og:image" content={logo} />
      </Helmet>
      <div className=" m-auto img z-0 text-center pt-24 p-12">
        <h2 className="text-white font-bold mb-3 text-2xl bg-gradient-to-r from-blue-500/70 to-red-500/70  p-2">
          Custom Web Design Templates{" "}
        </h2>
      </div>
      <section>
        <div className="  text-white">
          <h1 className=" bg-red-500/75 font-bold text-center p-1.5">
            {Data.fullname}
          </h1>
          <Carousel />
        </div>
      </section>
      <section className="bg-sky-100 p-8">
        <h2 className="text-3xl text-left mb-3">
          Digital Advertising For The Modern World
        </h2>
        <p className="text-sm">
          United States Family Marketing offers a unique approach to digital
          marketing. We offer a wide variety of marketing & advertising services
          to our clients across the United States.{" "}
        </p>
        <Link to="/contact">
          <button className="mt-2 bg-blue-500 p-2 text-white font-bold border-2">
            Start Your Project
          </button>
        </Link>{" "}
      </section>
      <section className="flex flex-col p-3">
        <div className="bg-white border rounded-lg min-w-full p-5 mb-5">
          <img
            src="https://assets-global.website-files.com/5f6b7190899f41fb70882d08/5f85d14b6782933bd5a70060_decentralized.svg"
            className="mb-5 w-12"
            alt="US FAMILY MARKETING WEB DESIGN SERVICES"
          />

          <h2 className="font-bold mb-2.5">Unique Hosting Solutions</h2>
          <p className="text-sm">
            Host our websites for free without worrying about Cpanel or clunky
            interfaces. USFM offers everything you need and 24/7 customer
            support. We deploy our content on the{" "}
            <a
              className="text-blue-400 hover:text-blue-500"
              href="https://vercel.com"
              target="_blank"
            >
              Vercel
            </a>{" "}
            network, a service that allows deployment of{" "}
            <a
              className="text-blue-400 hover:text-blue-500"
              href="https://nextjs.com"
              target="_blank"
            >
              NextJS
            </a>{" "}
            and{" "}
            <a
              className="text-blue-400 hover:text-blue-500"
              href="https://reactjs.org"
              target="_blank"
            >
              {" "}
              React
            </a>{" "}
            apps. Vercel also allows us to offer every custom of ours a free SSL
            certificate on their website. We also offer custom on-site computer
            solutions for hosting websites yourself.
          </p>
        </div>
        <div className="bg-white border rounded-lg min-w-full p-5 mb-5">
          <img
            src={usfmfolder}
            className="mb-5 w-12"
            alt="US FAMILY MARKETING WEB DESIGN SERVICES"
          />

          <h2 className="font-bold mb-2.5">Best Custom Web Design Templates</h2>
          <p className="text-sm">
            Our website design templates are tested to be superior on Google Lighthouse,
            meaning they will offer superior performance, SEO, and PWA
            functionality.
          </p>
        </div>
        <div className="bg-white border rounded-lg min-w-full p-5 mb-5">
          <img
            src={usfmpiggy}
            className="mb-5 w-12"
            alt="US FAMILY MARKETING WEB DESIGN SERVICES"
          />
          <h2 className="font-bold mb-2.5">Affordable Website Design</h2>
          Build your dream website without breaking the bank. We offer packages
          starting at $9.99 per month.
          <p className="text-sm"></p>
        </div>
      </section>
    </div>
  );
}
