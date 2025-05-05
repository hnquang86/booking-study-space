// src/components/StatsSection.jsx
import React from "react";

export default function StatsSection() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-4xl font-bold text-blue-800">10+</h2>
          <p className="text-gray-600 mt-2">Máy tự động</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-800">100+</h2>
          <p className="text-gray-600 mt-2">Sinh viên hài lòng</p>
        </div>
      </div>
    </section>
  );
}