import HomePage from "./components/HomePage";
import UserHome from "./components/UserHome/UserHome";
import RequestTicket from "./components/RequestTicket/RequestTicket";
import Services from "./components/Services/Services";
import Payment from "./components/Payment/Payment";
import Confirmation from "./components/Confirmation/Confirmation";
import AdminHome from "./components/AdminHome/AdminHome";
// <<<<<<< HEAD
// import Func1 from "./components/AdminHome/Func1";
// import Func2 from "./components/AdminHome/Func2";
// import Func31 from "./components/AdminHome/Func31";
// import Func32 from "./components/AdminHome/Func32";
// import Func33 from "./components/AdminHome/Func33";
// import Func34 from "./components/AdminHome/Func34";
// import Func4 from "./components/AdminHome/Func4";
// import UserDashboard from "./components/UserHome/UserHome";
// =======
// import Profile from "./components/Profile/Profile";
// import ContactAgents from "./components/ContactAgents/ContactAgents";
// import ActiveRequests from "./components/ActiveRequests/ActiveRequests";
// import ActiveFeedback from "./components/ActiveFeedback/ActiveFeedback";
// import ArchiveRequests from "./components/ArchiveRequests/ArchiveRequests";
// import ArchiveFeedback from "./components/ArchiveFeedback/ArchiveFeedback";
// import ServiceSlot from "./components/ServiceSlot/ServiceSlot";
// >>>>>>> 8eae76b8245776fbf229e180cde1cf9c58969d1b

// import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/UserHome" element={<UserHome />}></Route>
          <Route path="/RequestTicket" element={<RequestTicket />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Payment" element={<Payment />}></Route>
          <Route path="/Confirmation" element={<Confirmation />}></Route>
          <Route path="/AdminHome" element={<AdminHome />}></Route>
{/* <<<<<<< HEAD
          <Route path="/Func1" element={<Func1 />}></Route>
          <Route path="/Func2" element={<Func2 />}></Route>
          <Route path="/Func31" element={<Func31 />}></Route>
          <Route path="/Func32" element={<Func32 />}></Route>
          <Route path="/Func33" element={<Func33 />}></Route>
          <Route path="/Func34" element={<Func34 />}></Route>
          <Route path="/Func4" element={<Func4 />}></Route>
          <Route path="/dashboard" element={<UserDashboard />}></Route>
=======
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/ContactAgents" element={<ContactAgents />}></Route>
          <Route path="/ActiveRequests" element={<ActiveRequests />}></Route>
          <Route path="/ActiveFeedback" element={<ActiveFeedback />}></Route>
          <Route path="/ArchiveRequests" element={<ArchiveRequests />}></Route>
          <Route path="/ArchiveFeedback" element={<ArchiveFeedback />}></Route>
          <Route path="/ServiceSlot" element={<ServiceSlot />}></Route>
>>>>>>> 8eae76b8245776fbf229e180cde1cf9c58969d1b */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
