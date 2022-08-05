import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import logo from "../../assets/usfmmeta.webp";

import jsondata from "../../data/global.json";

const titlepre = "Web Design Services";

const desc =
  jsondata.fullname +
  " provides advanced " +
  titlepre +
  " for businesses of all sizes.";

const title =
  titlepre +
  " - " +
  jsondata.shortdomain[0].toUpperCase() +
  jsondata.shortdomain.slice(1).toLowerCase();

  export default function WebDesign() {
    return (
      <div>
        <HelmetProvider>
          <Helmet>
            {" "}
            <title>{title}</title>
            <link rel="canonical" href={window.location.href} />
            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />
            <meta property="og:image" content={logo} />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:title" content={title} />
          </Helmet>
        </HelmetProvider>
  
        <div className="text-center">
          <div className="bg-sky-500/50 p-5">
            <div className=" p-5 text-xl text-white">{desc}</div>
            <Link
              className="m-4 border-x-2 p-2 text-white bg-blue-500 hover:bg-blue-400 border-black"
              to={"/contact"}
            >
              Contact
            </Link>
          </div>
          {/* Content */}
          
        </div>
      </div>
    );
  }
