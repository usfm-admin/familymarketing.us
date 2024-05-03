import { Link } from "react-router-dom";

export default function ServiceCard(props) {
  return (
    <>
      <Link to={props.link}>
        <div class="group relative h-72 w-96 sm:max-w-lg">
          <div class="z-10 h-full w-full overflow-hidden border-gray-200 opacity-90 transition duration-300 ease-in-out group-hover:opacity-100 ">
            <img
              src={require(`../../assets/${props.image}`)}
              alt={props.desc}
              className="object-cover w-full h-full animate-fade-in block scale-100 transform object-center opacity-100 transition duration-300 group-hover:scale-110"
            />
          </div>
          <div class="absolute bottom-0 z-20 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
            <h1 class="text-xl font-bold text-white ">{props.name}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}
