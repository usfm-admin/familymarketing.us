import LinkData from "../data/links.json";

import LinkCard from "../components/linkcard";

import { Helmet } from "react-helmet";
import logo from "../assets/usfmmeta.webp";

export default function Services() {
  return (
    <div className=" img flex flex-col md:flex-row lg:flex-row">
      <Helmet>
        <title>Links - Familymarketing.us</title>
        <link rel="canonical" href={window.location.href} />
        <meta
          name="description"
          content="United States Family Marketing offers affordable marketing services online."
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      {LinkData.links.map((item, index) => {
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
