import { Helmet } from "react-helmet";

import globaldata from "../data/global.json";
import logo from "../assets/usfm-logo-cropped.webp";
import CButton from "../components/cbutton";

export default function ServicesPage(props) {
  const title = props.data.name + " - " + globaldata.shortdomain;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content={title} />
        <meta property="og:description" content={props.data.desc} />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={title} />
      </Helmet>
      <section className="text-left lg:text-center">
        <h1 className=" font-bold text-4xl p-2 text-center">
          {props.data.name}
        </h1>
        <img
          className=" h-96 object-cover p-5 m-auto "
          src={require(`../assets/${props.data.image}`)}
          alt={globaldata.fullname + "service"}
        />
        <div className="text-center font-medium text-2xl">
          {props.data.metadesc}
        </div>
        <div className="m-5 border-2 border-red-300 border-dashed p-2 text-left"><div className="text-2xl font-bold m-2">{props.data.desctitle1}</div><p className="p-1">{props.data.desc}</p></div>
      </section>
      <section className="text-left lg:text-center">

       

        <div className="m-5 border-2 border-blue-300 border-dotted p-2 text-left"><div className="text-2xl font-bold m-2">{props.data.desctitle2}</div><p className="p-1">{props.data.desc2}</p></div>
        <CButton to={"/contact"} />
      </section>
    </>
  );
}
