// App.tsx
import React from "react";

import { Routes, Route } from "react-router-dom";
import Landing from "./sections/Landing/Landing";
import About from "./sections/about/About";
import Team from "./sections/team/Team";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About Us" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
