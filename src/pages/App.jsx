import { Routes, Route } from 'react-router-dom';

import React from "react";
import { Home } from "./home.js";
import { About } from "./about.js";
import { Contact } from "./contact.js";
import { NotFound } from "./notfound.js";

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/practice04/" element={<Home title="practice04"/>} />
          <Route path="/practice04/about" element={<About title="practice04 | about" />} />
          <Route path="/practice04/contact" element={<Contact title="practice04 | contact"/>} />
          <Route path="*" element={<NotFound title="NotFound"/>} />
        </Routes>
      </div>
    );
};
export default App;
