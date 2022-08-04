import { Routes, Route } from "react-router-dom";

import React, {Suspense, lazy} from "react";




import Nav from "../nav";

const WebDesign = lazy(() => import("../../pages/services/web-design"));
const Home = lazy(() => import("../../pages/home"));
const Services = lazy(() => import("../../pages/services"));
const Contact = lazy(() => import("../../pages/contact"));
const Links = lazy(() => import("../../pages/links"));
const BusinessCards = lazy(() => import("../../pages/services/business-cards"));
const LogosSeals = lazy(() => import("../../pages/services/logos-seals"));
const MailServer = lazy(() => import("../../pages/services/mail-server"));


export default function Router() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/links" element={<Links />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/business-cards" element={<BusinessCards />} />
          <Route path="/services/logos" element={<LogosSeals />} />
          <Route path="/services/mail-server" element={<MailServer />} />
        </Routes>
      </Suspense>
    </div>
  );
}
