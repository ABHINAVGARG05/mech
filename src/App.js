import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import SpaceThemedPage from "./components/space_bg";
import Home from "./components/pages/Home";
import Location from "./components/pages/Location";
import Contact from "./components/Contact";

import CompetitionsList from "./components/pages/Events/CompetitionsList";
import CompetitionDetails from "./components/pages/Events/CompetitionDetails";
import WorkshopList from "./components/pages/Events/WorkshopList";
import WorkshopDetails from "./components/pages/Events/WorkshopDetails";
import SpeakerSession from "./components/pages/Events/Speaker";
import Mechathon from "./components/pages/Events/Mechathon";

function App() {
  return (
    <div className="App">
      <Router>
        <SpaceThemedPage />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />

          {/* Event Pages */}
          <Route path="/events/competitions" element={<CompetitionsList />} />
          <Route path="/events/competitions/:id" element={<CompetitionDetails />} />
          <Route path="/events/workshops" element={<WorkshopList />} />
          <Route path="/events/workshops/:id" element={<WorkshopDetails />} />
          <Route path="/events/speakers" element={<SpeakerSession />} />
          <Route path="/events/mechathon" element={<Mechathon />} />

          {/* Fallback for unmatched routes */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
