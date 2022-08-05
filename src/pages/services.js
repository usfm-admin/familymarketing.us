import ServiceData from "../data/services.json";

import ServiceCard from "../components/servicecard";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import logo from "../assets/usfmmeta.webp"


export default function Services() {
  return (
    <div className=" img flex flex-col md:flex-row lg:flex-row">
              <HelmetProvider>
      <Helmet>
        <title>Services - Familymarketing.us</title>
        <link rel="canonical" href={window.location.href} />
        <meta
          name="description"
          content="United States Family Marketing offers affordable marketing services online."
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content= {window.location.href}/>

      </Helmet>
      </HelmetProvider>

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
