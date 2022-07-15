import { useState } from "react";

import Menu from "./menu";

import { Link } from "react-router-dom";

import logo from "../../../assets/unitedstatesfamilymarketing.webp"

export default function MobileNav(props) {
  const [open, setopen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 ">
      <div className="grid grid-cols-2  border-b-2">
        <div className="p-2 mt-3" onClick={() => setopen(!open)}>
          <Menu />
        </div>
        <div className=" ">
          <Link to={"/"}>
            <img src={logo} className="float-right h-24" alt="United States Family Marketing" />
          </Link>
        </div>
      </div>
      <ul className="grid divide-y-2 divide-slate-300  ">
        {open
          ? props.object.pages.map((item, index) => {
              return (
                <Link key={index} to={item.link}>
                  <li onClick={() => setopen(false)} className=" p-2">{item.name}</li>
                </Link>
              );
            })
          : null}
      </ul>
    </header>
  );
}
