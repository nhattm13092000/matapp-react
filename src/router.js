import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./component/home";
import Resume from "./component/resume";
import Portfolio from "./component/porfolio";
import Blog from "./component/blog";
import Contact from "./component/contact";

const router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default router;
