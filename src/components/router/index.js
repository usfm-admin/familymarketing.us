import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Nav from "../nav";

import servicesdata from "../../data/services.json";

export default function Router() {
  const Home = lazy(() => import("../../pages/home"));
  const Services = lazy(() => import("../../pages/services"));
  const Contact = lazy(() => import("../../pages/contact"));
  const Links = lazy(() => import("../../pages/links"));
  const ServicesPage = lazy(() => import("../../pages/servicespage"));

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
