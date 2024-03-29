import CustomLink from "./customlink";

import Data from "../../../data/global.json";

import logo from "../../../assets/unitedstatesfamilymarketing.webp";

export default function DeskNav(props) {
  return (
    <nav className="border">
      <div className="hidden md:flex items-center space-x-1">
        <a href="/" className="flex items-center py-4 px-2">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <p className="font-semibold text-gray-500 text-lg">
            {Data.fullname}
          </p>
        </a>
        {props.object.pages.map((items, index) => {
          return (
            <CustomLink to={items.link} key={index}>
              {items.name}
            </CustomLink>
          );
        })}
      </div>
    </nav>
  );
}
