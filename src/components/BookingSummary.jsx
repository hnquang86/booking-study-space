// src/components/BookingSummary.jsx
import React from "react";

const bookings = [
  { machine: "Máy 01", user: "Ho Nhat Quang", time: "9:00 - 10:30 AM" },
  { machine: "Máy 03", user: "Phuc", time: "5:00 AM - 7:30 AM" },
  { machine: "Máy 05", user: "Tran Hai Thao Quang", time: "11:30 AM - 2:00 PM" }
];

export default function BookingSummary() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-semibold text-blue-900 mb-4">Lịch sử đặt chỗ</h3>
      <ul className="space-y-3">
        {bookings.map((b, i) => (
          <li key={i} className="border-b pb-2">
            <p className="text-gray-800 font-medium">{b.machine}</p>
            <p className="text-gray-600 text-sm">{b.user} – {b.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}