import HomePage from "./components/HomePage";
import UserHome from "./components/UserHome/UserHome";
import RequestTicket from "./components/RequestTicket/RequestTicket";
import Services from "./components/Services/Services";
import Payment from "./components/Payment/Payment";
import Confirmation from "./components/Confirmation/Confirmation";
import AdminHome from "./components/AdminHome/AdminHome";
import Profile from "./components/Profile/Profile";
import ContactAgents from "./components/ContactAgents/ContactAgents";
import ActiveRequests from "./components/ActiveRequests/ActiveRequests";
import ActiveFeedback from "./components/ActiveFeedback/ActiveFeedback";
import ArchiveRequests from "./components/ArchiveRequests/ArchiveRequests";
import ArchiveFeedback from "./components/ArchiveFeedback/ArchiveFeedback";
import ServiceSlot from "./components/ServiceSlot/ServiceSlot";

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
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/ContactAgents" element={<ContactAgents />}></Route>
          <Route path="/ActiveRequests" element={<ActiveRequests />}></Route>
          <Route path="/ActiveFeedback" element={<ActiveFeedback />}></Route>
          <Route path="/ArchiveRequests" element={<ArchiveRequests />}></Route>
          <Route path="/ArchiveFeedback" element={<ArchiveFeedback />}></Route>
          <Route path="/ServiceSlot" element={<ServiceSlot />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
