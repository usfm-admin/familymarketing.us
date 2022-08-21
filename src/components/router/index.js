import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Nav from "../nav";

import servicesdata from "../../data/services.json";

import Home from "../../pages/home";
import ServicesPage from "../../pages/servicespage";
import Contact from "../../pages/services";
import Links from "../../pages/links";
import Services from "../../pages/services";

export default function Router() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen ">
          <div className="loader"></div>
        </div>
      }
    >
      <Nav />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {servicesdata.map((data) => {
          return (
            <Route
              path={"/services/" + data.link}
              element={<ServicesPage data={data} />}
            />
          );
        })}

        <Route path="/contact" element={<Contact />} />
        <Route path="/links" element={<Links />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
