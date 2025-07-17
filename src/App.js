import React from "react";
import Navbar from "./components/Navbar";
//import {HashRouter  as Router,Routes,Route} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import SpaceThemedPage from "./components/space_bg";
import CompetitionsList from "./components/pages/Events/CompetitionsList";
import CompetitionDetails from "./components/pages/Events/CompetitionDetails";
import Mascot from "./components/Mascot";
import "./App.css";
import Location from "./components/pages/Location";
import WorkshopList from "./components/pages/Events/WorkshopList";
import WorkshopDetails from "./components/pages/Events/WorkshopDetails";
import SpeakerSession from "./components/pages/Events/Speaker";
import Mechathon from "./components/pages/Events/Mechathon";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <SpaceThemedPage />
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Location" exact element={<Location />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/Events/Competitions" element={<CompetitionsList />} />
          <Route
            path="/Events/Competitions/:id"
            element={<CompetitionDetails />}
          />
          <Route path="/Events/Workshops" element={<WorkshopList />} />
          <Route path="/Events/Workshops/:id" element={<WorkshopDetails />} />
          <Route path="/Events/Speakers" element={<SpeakerSession />} />
          <Route path="/Events/Mechathon" element={<Mechathon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
