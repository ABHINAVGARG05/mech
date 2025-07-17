// src/components/pages/Events/WorkshopList.js
import React from "react";
import { Link } from "react-router-dom";
import "./WorkshopList.css";
import "./WorkshopDetails.css";

const workshops = [
  {
    id: "orbitron_a_cansat_workshop",
    title: "Orbitron‑A Cansat Workshop",
    image:
      "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752235533/orbitron_2_tkca0w.png",
  },
  {
    id: "hoverx",
    title: "HoverX",
    image:
      "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752235520/hoverX_3_z7kpyg.png",
  },
];

export default function WorkshopsList() {
  return (
    <div className="workshops-list">
      <h2>All Workshops</h2>
      <ul>
        {workshops.map((w) => (
          <li key={w.id}>
            {/* ✅  updated path: all‑lowercase */}
            <Link
              to={`/events/workshops/${w.id}`}
              className="workshop-card-link"
            >
              <div className="workshop-card">
                <img src={w.image} alt={w.title} />
                <div className="workshop-title">{w.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
