import {Link} from "react-router-dom"

export default function ServiceCard(props){
    return(
    <Link to={props.link}>
    <div class="m-8 max-w-xs rounded-sm transform hover:scale-110 duration-300 shadow-md shadow-red-500 bg-white ease-in">
    <div class="p-4">
      <img class="" alt="US Family Marketing" src={props.image} />

        <h2 class="text-xl font-bold ">{props.name}</h2>
        <p class="text-gray-600">
          {props.desc}
        </p>
      </div>
  </div>
  </Link>)
}