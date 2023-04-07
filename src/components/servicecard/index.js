import { Link } from "react-router-dom";

export default function ServiceCard(props) {
  return (
    <Link to={props.link}>
      <div class="m-10 max-w-xs transform hover:scale-110 duration-300 shadow shadow-red-500 ease-in">
          <img
            src={require(`../../assets/${props.image}`)}
            alt={props.metadesc}
            className="object-cover w-full h-full"
          />
          <h2 class="text-xl font-bold text-center">{props.name}</h2>
          <p class="text-gray-600 text-center italic p-1">{props.desc}</p>
      </div>
    </Link>
  );
}
