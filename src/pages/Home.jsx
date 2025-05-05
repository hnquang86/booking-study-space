// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import LocationsSection from "../components/LocationsSection";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Booking Study Space
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
          Chúng tôi cung cấp giải pháp đặt chỗ không gian học tập thông minh, linh hoạt và hiệu quả.
        </p>
        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md">
            Trải Nghiệm Ngay
          </button>
        </div>
      </section>

      <StatsSection />
      <FeaturesSection />
      <LocationsSection />
      <Footer />
    </div>
  );
} 