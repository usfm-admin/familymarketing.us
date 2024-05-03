import { Link } from "react-router-dom";

export default function CButton(props) {
  return (
    <Link to={props.to}>
    <button className="transition hover:scale-105 mt-2 bg-red-500 p-2 text-white font-bold rounded hover:bg-blue-400">
      Begin
    </button>
    </Link>
  );
}
