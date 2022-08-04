import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import logo from "../../assets/usfmmeta.webp";

import jsondata from "../../data/global.json";

const title = "Mail Server Services";

const desc =
  jsondata.fullname +
  " provides advanced " +
  title +
  " for businesses of all sizes.";

export default function WebDesign() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {" "}
            {title +
              " - " +
              jsondata.shortdomain[0].toUpperCase() +
              jsondata.shortdomain.slice(1).toLowerCase()}{" "}
          </title>
          <link rel="canonical" href={window.location.href} />

          <meta name="description" content={desc} />
          <meta property="og:image" content={logo} />
        </Helmet>
      </HelmetProvider>

      <div className="wdhero ">
        <div className="bg-sky-500/50">
          <div className=" p-12 text-3xl text-white">{desc}</div>
          <Link
            className="m-10 border-x-2 p-2 text-white bg-blue-500 hover:bg-blue-400 border-black"
            to={"/contact"}
          >
            Contact
          </Link>
        </div>{" "}
        {/* Web Design */}
      </div>
    </div>
  );
}
