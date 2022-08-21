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
        <h1 className="  bg-red-500/30 font-bold text-4xl p-2 text-center">
          {props.data.name}
        </h1>
        <img
          className="rounded h-80 object-cover m-auto my-5"
          src={require(`../assets/${props.data.image}`)}
          alt={globaldata.fullname + "service"}
        />
        <div className="  bg-blue-400/10 font-medium text-2xl">
          {props.data.metadesc}
        </div>
        <div className="  m-5">{props.data.desc}</div>
      </section>
      {props.data.startingprice ?
      <section class="border-4  mx-auto max-w-screen-xl lg:py-10 ">
        <div class="space-y-4 sm:gap-6 xl:gap-10 m-auto">
          <div class="  mx-auto  text-center text-gray-900 bg-white rounded-lg">
            <h3 class=" text-2xl font-semibold">{props.data.name} Plans Starting at:</h3>
     
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">{props.data.startingprice}</span>
              <span class="text-gray-500 ">/month</span>
            </div>
            <ul class="mb-8 space-y-4 ">
              {props.data.included.map((items) => {
                return (
                  <li class=" items-center space-x-3">
                    <span>{items}</span>
                  </li>
                );
              })}
            </ul>

            <Link
              className=" p-2 text-white bg-blue-500 hover:bg-blue-400 border-black"
              to={"/contact"}
            >
              Contact
            </Link>
          </div>
        </div>
      </section>:null}
    </>
  );
}
