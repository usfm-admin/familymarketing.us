
import CustomLink from "./customlink";

import Data from "../../../data/global.json"

import logo from "../../../assets/unitedstatesfamilymarketing.webp"

export default function DeskNav(props) {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="/" className="flex items-center py-4 px-2">
                <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-semibold text-gray-500 text-lg">
                 {Data.fullname}
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {props.object.pages.map((items, index) => {
                return (
                  <CustomLink to={items.link} key={index}>
                    {items.name}
                  </CustomLink>
                );
              })}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
     
    </nav>
  );
}
