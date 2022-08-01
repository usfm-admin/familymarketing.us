import LinkData from "../data/links.json";

import LinkCard from "../components/linkcard";

import { Helmet, HelmetProvider } from 'react-helmet-async';
import logo from "../assets/usfmmeta.webp"

export default function Services() {
  return (
    <div className=" img flex flex-col md:flex-row lg:flex-row">
              <HelmetProvider>
            <Helmet>
        <meta charSet="utf-8" />
        <title>Links - Familymarketing.us</title>
        <link rel="canonical" href="https://familymarketing.us/links" />
        <meta
          name="description"
          content="United States Family Marketing offers affordable marketing services online."
        />
        <meta property="og:image" content={logo} />
        
      </Helmet>
      </HelmetProvider>

      {LinkData.links.map((item,index) => {
        return (
          <LinkCard
            key={index}
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
