import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Adminlog from "./Adminlog";
import Admindash from "./Admindash";
import Homepage from "./Homepage"
import Jobs from "./Jobs"
import Jobdetails1 from "./Jobdetails1"
import Jobdetails2 from "./Jobdetails2"
import Jobdetails3 from "./Jobdetails3"
import Jobdetails4 from "./Jobdetails4"
import Jobdetails5 from "./Jobdetails5"
import Jobdetails6 from "./Jobdetails6"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<Adminlog />} />

        {/* Dashboard page */}
        <Route path="/dashboard" element={<Admindash />} />

        <Route path="/home" element={<Homepage />} />
        <Route path="/jobdetails1" element={<Jobdetails1 />} />
        <Route path="/jobdetails2" element={<Jobdetails2 />} />
        <Route path="/jobdetails3" element={<Jobdetails3 />} />
        <Route path="/jobdetails4" element={<Jobdetails4 />} />
        <Route path="/jobdetails5" element={<Jobdetails5 />} />
         <Route path="/jobdetails6" element={<Jobdetails6 />} />
          <Route path="/jobs" element={<Jobs />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
