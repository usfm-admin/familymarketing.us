import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import globaldata from "../data/global.json";
import logo from "../assets/usfm-logo-cropped.webp";

export default function ServicesPage(props) {
  const title = props.data.name + " - " + globaldata.shortdomain;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          <link rel="canonical" href={window.location.href} />
          <meta name="description" content={title} />
          <meta property="og:description" content={props.data.desc} />
          <meta property="og:image" content={logo} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:title" content={title} />
        </Helmet>
      </HelmetProvider>
      <section className="text-left lg:text-center  ">
        <h1 className=" font-bold text-4xl p-2 text-center">
          {props.data.name}
        </h1>
        <img
          className="rounded h-80 object-cover p-5 m-auto "
          src={require(`../assets/${props.data.image}`)}
          alt={globaldata.fullname + "service"}
        />
        <div className="text-center font-medium text-2xl">
          {props.data.metadesc}
        </div>
        <div className="  m-5">{props.data.desc}</div>
        <Link to="/contact">
          <button className="transition hover:scale-110 delay-75 mb-5 bg-blue-500 p-2 text-white font-bold border-2">
            Start Your Project
          </button>
        </Link>{" "}
      </section>
    </>
  );
}
