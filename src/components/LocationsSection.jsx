// src/components/LocationsSection.jsx
import React from "react";

export default function LocationsSection() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h3 className="text-3xl font-bold text-blue-900 mb-10">Cơ Sở HCMUT</h3>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-xl shadow">
          <h4 className="text-xl font-semibold text-blue-800">HCMUT CS1</h4>
          <p className="text-gray-700">Lý Thường Kiệt, Q10, TP.HCM</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl shadow">
          <h4 className="text-xl font-semibold text-blue-800">HCMUT CS2</h4>
          <p className="text-gray-700">Khu ĐHQG, Dĩ An, Bình Dương</p>
        </div>
      </div>
    </section>
  );
}
