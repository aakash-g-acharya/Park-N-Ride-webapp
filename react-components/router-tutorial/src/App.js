import HomePage from "./components/HomePage";
import Page1 from "./components/UserHome/Page1";
import Page2 from "./components/UserHome/Page2";
import Page3 from "./components/UserHome/Page3";
import Page4 from "./components/UserHome/Page4";
import AdminHome from "./components/AdminHome/AdminHome";
import Func1 from "./components/AdminHome/Func1";
import Func2 from "./components/AdminHome/Func2";
import Func31 from "./components/AdminHome/Func31";
import Func32 from "./components/AdminHome/Func32";
import Func33 from "./components/AdminHome/Func33";
import Func34 from "./components/AdminHome/Func34";
import Func4 from "./components/AdminHome/Func4";

// import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Page1" element={<Page1 />}></Route>
          <Route path="/Page2" element={<Page2 />}></Route>
          <Route path="/Page3" element={<Page3 />}></Route>
          <Route path="/Page4" element={<Page4 />}></Route>
          <Route path="/AdminHome" element={<AdminHome />}></Route>
          <Route path="/Func1" element={<Func1 />}></Route>
          <Route path="/Func2" element={<Func2 />}></Route>
          <Route path="/Func31" element={<Func31 />}></Route>
          <Route path="/Func32" element={<Func32 />}></Route>
          <Route path="/Func33" element={<Func33 />}></Route>
          <Route path="/Func34" element={<Func34 />}></Route>
          <Route path="/Func4" element={<Func4 />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
