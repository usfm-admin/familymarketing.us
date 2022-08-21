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
          <div className="  bg-red-500/30 font-bold text-4xl p-2 text-center">
            {props.data.name}
          </div>
          <img
            className="rounded h-80 object-cover m-auto my-2"
            src={require(`../assets/${props.data.image}`)}
            alt={globaldata.fullname + "service"}
          />
       <div className="  bg-blue-400/10 font-medium text-2xl p-2 ">
            {props.data.metadesc}
          </div>
          <div className="  m-5">{props.data.desc}</div>
          
          <Link
            className=" p-2 text-white bg-blue-500 hover:bg-blue-400 border-black"
            to={"/contact"}
          >
            Contact
          </Link>
    
      </section>

      {/* <section className="text-left lg:text-center  ">
        <div className="">
  
          <img
            className=" rounded h-80 object-cover	m-auto  "
            src={require(`../assets/${props.data.image}`)}
            alt={globaldata.fullname + "service"}
          />

          <div className=" m-5">{props.data.desc}</div>
          

          <Link
            className=" p-2 text-white bg-blue-500 hover:bg-blue-400 border-black"
            to={"/contact"}
          >
            Contact
          </Link>
        </div>
      </section> */}
    </>
  );
}
