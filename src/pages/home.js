import Carousel from "../components/carousel";

import { Link } from "react-router-dom";

import Data from "../data/global.json";

import { Helmet, HelmetProvider } from "react-helmet-async";

import usfmfolder from "../assets/usfm-folder.webp";
import usfmpiggy from "../assets/usfmpiggy.webp";
import usfmserver from "../assets/managed-server.webp";

import logo from "../assets/usfmmeta.webp";

import jsondata from "../data/global.json";

export default function Home() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>
            {jsondata.fullname} {jsondata.target}
          </title>
          <link rel="canonical" href={window.location.href} />
          <meta
            name="description"
            content="United States Family Marketing offers affordable marketing services online. https://familymarketing.us"
          />
          <meta property="og:image" content={logo} />
          <meta property="og:url" content={window.location.href} />
          <meta
            property="og:title"
            content={jsondata.fullname + jsondata.target}
          />
        </Helmet>
      </HelmetProvider>
      <div className=" m-auto img z-0 text-center pt-24 p-12">
        <h1 className="text-white font-bold mb-3 text-2xl bg-gradient-to-r from-blue-500/70 to-red-500/70  p-2">
          {jsondata.target}
        </h1>
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
          Digital Advertising For A Modern World
        </h2>
        <p className="text-sm">
          United States Family Marketing offers a unique approach to digital
          marketing. We offer a wide variety of online marketing & advertising
          services to our clients across the United States. Our services at the
          time include, but are not limited to: Web Design, Managed Hosting,
          Custom Email/Website Servers, Logo Design & Business Cards.{" "}
        </p>
        <Link to="/contact">
          <button className="transition hover:scale-110 delay-75 mt-2 bg-blue-500 p-2 text-white font-bold border-2">
            Start Your Project
          </button>
        </Link>{" "}
      </section>
      <section className="flex flex-col p-3">
        <div className="bg-white border rounded-lg min-w-full p-5 mb-5">
          <img
            src={usfmserver}
            className="mb-5 w-12 h-12"
            alt="US FAMILY MARKETING WEB DESIGN SERVICES"
          />
          <h2 className="font-bold mb-2.5">Unique Hosting Solutions</h2>
          <p className="text-sm">
            Host your websites without worrying about clunky interfaces. United
            States Family Marketing offers managed hosting for any type of
            website. We will deploy and maintain your website using state of the
            art technologies. We deploy most of our React content on the{" "}
            <a
              className="text-blue-400 hover:text-blue-500"
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
            >
              Vercel
            </a>{" "}
            network, a service that allows deployment of{" "}
            <a
              className="text-blue-400 hover:text-blue-500"
              href="https://nextjs.com"
              target="_blank"
              rel="noreferrer"
            >
              NextJS
            </a>{" "}
            and{" "}
            <a
              className="text-blue-400 hover:text-blue-500"
              href="https://reactjs.org"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              React
            </a>{" "}
            apps. Vercel also allows us to offer every custom of ours a free SSL
            certificate on their website. We also offer custom IT & server
            solutions for hosting websites in-house.
          </p>
        </div>
        <div className="bg-white border rounded-lg min-w-full p-5 mb-5">
          <img
            src={usfmfolder}
            className="mb-5 w-12 h-12"
            alt="US FAMILY MARKETING WEB DESIGN SERVICES"
          />

          <h2 className="font-bold mb-2.5">Best In Class Custom Website Templates</h2>
          <p className="text-sm">
            Our website design templates are tested to test superior on Google
            Lighthouse, meaning they will offer superior performance, SEO, and
            Progressive Web App functionality.
          </p>
        </div>
        <div className="bg-white border rounded-lg min-w-full p-5 mb-5">
          <img
            src={usfmpiggy}
            className="mb-5 w-12 h-12"
            alt="US FAMILY MARKETING WEB DESIGN SERVICES"
          />
          <h2 className="font-bold mb-2.5">Affordable Website Design</h2>
          Build your dream website without breaking the bank. We offer managed
          website and email servers for as low as $29.99/month.
          <p className="text-sm"></p>
        </div>
      </section>
    </div>
  );
}
