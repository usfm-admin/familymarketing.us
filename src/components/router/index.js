import { Routes, Route } from "react-router-dom";

import React from "react";

import Home from "../../pages/home";
import Services from "../../pages/services";
import Contact from "../../pages/contact";
import Links from "../../pages/links";

import Nav from "../nav";

import Consult from "../../pages/consult";
import Blog from "../../pages/blog";

import WebDesign from "../../pages/services/web-design";

import BusinessCards from "../../pages/services/business-cards";
import LogosSeals from "../../pages/services/logos-seals";
import MailServer from "../../pages/services/mail-server"

export default function Router() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/links" element={<Links />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/business-cards" element={<BusinessCards />} />
        <Route path="/services/logos" element={<LogosSeals />} />
        <Route path="/services/mail-server" element={<MailServer />} />
        <Route path="/blog" element={<Blog />} />

      </Routes>
    </div>
  );
}
