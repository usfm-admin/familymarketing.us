import services from "../../data/services.json";
import Card from "./card";

import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div
      className={
        services.length > 5
          ? "flex overflow-auto"
          : "flex overflow-auto lg:items-center lg:justify-center"
      }
    >
      {services
        ? services.map((items,key) => {
            return (
              <Link key={key} className="p-5" to={"services/" + items.link}>
                <Card
                
                  name={items.name}
                  image={items.image}
                  metadesc={items.metadesc}
                />
              </Link>
            );
          })
        : null}
    </div>
  );
}
