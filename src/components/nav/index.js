import { useEffect, useState } from "react";
import DeskNav from "./desktop";
import MobileNav from "./mobile";

import dataobject from "../../data/navigation.json";

export default function Nav() {
  const [windowstate, setwindowstate] = useState();
  // const [navstate, setnavstate] = useState([])

  useEffect(() => {
    function nav() {
      function hr() {
        setwindowstate(window.innerWidth);
      }
      // await setnavstate(navdata)
      setwindowstate(window.innerWidth)
      window.addEventListener("resize", hr);
    }
    nav();
  });
  // 420p resolution recheck monitor sizes
  if (windowstate < 852) {
    return <MobileNav object={dataobject} />;
  } else {
    return <DeskNav object={dataobject} />;
  }
}
