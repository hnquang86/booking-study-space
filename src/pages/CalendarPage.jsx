// src/pages/CalendarPage.jsx
import React, { useState } from "react";
import Navbar from "../components/TopNavBar";
import Footer from "../components/Footer";
import CalendarSidebar from "../components/CalendarSidebar";
import CalendarGrid from "../components/CalendarGrid";
import EditSchedulePopup from "../components/EditSchedulePopup.jsx";

export default function CalendarPage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-[#f4f7fb] min-h-screen font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">BOOKING STUDY SPACE</h2>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white rounded-full shadow text-sm font-medium hover:shadow-md">Filter</button>
            <button className="px-4 py-2 bg-white rounded-full shadow text-sm font-medium hover:shadow-md">Monthly</button>
            <button className="px-4 py-2 bg-white rounded-full shadow text-sm font-medium hover:shadow-md">⟳ Download Data</button>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white rounded-full shadow text-sm font-medium hover:shadow-md">Support</button>
            <button className="px-4 py-2 bg-white rounded-full shadow text-sm font-medium hover:shadow-md">Content Layout</button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-full shadow text-sm font-medium hover:bg-blue-700"
              onClick={() => window.location.href = "/booking"}
            >
              + Check new
            </button>
          </div>
        </div>

        <div className="grid grid-cols-[260px_1fr] gap-6 relative">
          <CalendarSidebar />
          <div onClick={() => setShowPopup(true)}>
            <CalendarGrid />
          </div>
          {showPopup && <EditSchedulePopup onClose={() => setShowPopup(false)} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
