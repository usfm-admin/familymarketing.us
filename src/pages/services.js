import ServiceData from "../data/services.json";

import ServiceCard from "../components/servicecard";
import { Helmet } from "react-helmet";



export default function Services() {
  return (
    <div className=" img flex flex-col md:flex-row lg:flex-row">
           <Helmet>
        <meta charSet="utf-8" />
        <title>Services - Familymarketing.us</title>
        <link rel="canonical" href="https://familymarketing.us/services" />
        <meta
          name="description"
          content="United States Family Marketing offers affordable marketing services online."
        />
        <meta property="og:image" content="https://i.imgur.com/m46SlqZ.jpeg" />
      </Helmet>
      {ServiceData.map((item) => {
        return (
          <ServiceCard
            name={item.name}
            link={item.link}
            desc={item.metadesc}
            id={item.id}
            image={item.image}
          />
        );
      })}
    </div>
  );
}
