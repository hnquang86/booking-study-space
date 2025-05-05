// src/pages/Dashboard.jsx
import React from "react";
import Navbar from "../components/TopNavBar";
import Footer from "../components/Footer";
import DashboardGreeting from "../components/DashboardGreeting";
import BookingSummary from "../components/BookingSummary";
import BookingChart from "../components/BookingChart";
import DiscountCard from "../components/DiscountCard";
import CheckEmptyCard from "../components/CheckEmptyCard";
import BookingDetailCard from "../components/BookingDetailCard";
import StatusCard from "../components/StatusCard";

export default function Dashboard() {
  return (
    <div className="bg-[#f4f7fb] min-h-screen font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <DashboardGreeting name="Quang" />

        {/* Top controls */}
        <div className="flex flex-wrap items-center justify-between mt-6 gap-4">
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow hover:shadow-md">
              Filter
            </button>
            <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow hover:shadow-md">
              Monthly ⬇
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow hover:shadow-md">
              Download Data
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium shadow hover:bg-blue-700">
              + Check new
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="md:col-span-2">
            <BookingChart />
          </div>
          <DiscountCard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <BookingDetailCard />
          <BookingSummary />
          <CheckEmptyCard />
        </div>

        <div className="mt-6">
          <StatusCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}