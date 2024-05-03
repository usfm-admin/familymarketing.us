import ServiceData from "../data/services.json";

import ServiceCard from "../components/servicecard";
import { Helmet } from "react-helmet";

import logo from "../assets/usfmmeta.webp";

export default function Services() {
  return (
    <div className="content-center flex flex-col flex-wrap lg:flex-row">
      <Helmet>
        <title>Services - Familymarketing.us</title>
        <link rel="canonical" href={window.location.href} />
        <meta
          name="description"
          content="United States Family Marketing offers affordable marketing services online."
        />
        <meta property="og:image" content={logo} />
        <meta property="og:title" content={'Services - Familymarketing.us'} />

        <meta property="og:url" content={window.location.href} />
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
