// src/components/StatusCard.jsx
import React from "react";

const statusData = [
  { color: "bg-blue-600", name: "Máy 01", user: "Ho Nhat Quang", time: "9:00 - 10:30 AM" },
  { color: "bg-blue-400", name: "Máy 03", user: "Tran Hai Thao Quang", time: "11:30 - 2:00 AM" },
  { color: "bg-gray-300", name: "Máy 05", user: "Phuc", time: "5:00 AM - 7:30 AM" },
];

export default function StatusCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-blue-900">Status Máy</h3>
        <button className="text-sm text-blue-600 hover:underline">Xem chi tiết</button>
      </div>
      <ul className="space-y-4 text-sm text-gray-700">
        {statusData.map((item, idx) => (
          <li key={idx} className="flex items-center gap-4">
            <span className={`h-4 w-4 rounded-full ${item.color}`}></span>
            <div className="flex-1">
              <p className="font-medium text-gray-800">{item.name}</p>
              <p className="text-xs text-gray-500">{item.user} – {item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
