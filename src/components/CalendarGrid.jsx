// src/components/CalendarGrid.jsx
import React from "react";

export default function CalendarGrid() {
  return (
    <section className="bg-white rounded-2xl shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-semibold text-gray-700">Tháng 03 / 2025</div>
        <div className="flex gap-2 text-sm">
          <button className="bg-gray-100 px-3 py-1.5 rounded-full">←</button>
          <button className="bg-gray-100 px-3 py-1.5 rounded-full">Today</button>
          <button className="bg-gray-100 px-3 py-1.5 rounded-full">→</button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 text-sm text-center text-gray-600 mb-2">
        <div className="font-medium">Mon 1</div>
        <div className="font-medium">Tue 2</div>
        <div className="font-medium">Wed 3</div>
        <div className="font-medium">Thu 4</div>
        <div className="font-medium">Fri 5</div>
        <div className="font-medium">Sat 6</div>
      </div>

      <div className="grid grid-cols-6 gap-4 min-h-[360px]">
        {/* Booking blocks placeholder */}
        <div className="relative bg-purple-50 border border-purple-400 rounded-xl p-2 text-xs text-purple-700">
          Máy 02<br />09 AM - 10 AM
        </div>
        <div className="relative bg-yellow-50 border border-yellow-400 rounded-xl p-2 text-xs text-yellow-700">
          Máy 06<br />08 AM - 09 AM
        </div>
        <div className="relative bg-green-50 border border-green-400 rounded-xl p-2 text-xs text-green-700">
          Máy 05<br />08 AM - 10 AM
        </div>
        <div className="relative bg-blue-500 text-white border border-blue-600 rounded-xl p-2 text-xs col-span-1">
          Máy 04<br />09 AM - 11 AM
        </div>
        <div className="relative bg-green-50 border border-green-400 rounded-xl p-2 text-xs text-green-700">
          Máy 05<br />12 AM - 1 AM
        </div>
        <div className="relative bg-purple-50 border border-purple-400 rounded-xl p-2 text-xs text-purple-700">
          Máy 02<br />12 AM - 1 AM
        </div>
      </div>
    </section>
  );
}
