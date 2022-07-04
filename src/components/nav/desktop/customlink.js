import {
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

export default function CustomLink(props) {
  let resolved = useResolvedPath(props.to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div
      className={
        match
          ? "py-2 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold rounded-sm"
          : "py-2 px-2 text-gray-500 font-semibold hover:text-blue-500 transition rounded-sm duration-300"
      }
    >
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={props.to}
        {...props}
      ></Link>
    </div>
  );
}
