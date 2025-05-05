// src/components/CalendarSidebar.jsx
import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function CalendarSidebar() {
  return (
    <aside className="bg-white rounded-2xl p-4 shadow">
      <h3 className="font-bold text-blue-900 mb-4">Calendar</h3>
      <div className="mb-6">
        <Calendar className="rounded-xl w-full border-none" />
      </div>

      <h3 className="font-bold text-blue-900 mb-2">Danh Sách Máy Trống</h3>
      <ul className="space-y-4 text-sm">
        <li className="flex justify-between items-center">
          <div>
            <p className="text-gray-800 font-medium">Máy 01</p>
            <p className="text-gray-500">10:00 – 11:00</p>
          </div>
          <button className="text-blue-600 font-medium hover:underline" onClick={() => window.location.href = "/booking"}>Đặt Lịch</button>
        </li>
        <li className="flex justify-between items-center">
          <div>
            <p className="text-gray-800 font-medium">Máy 03</p>
            <p className="text-gray-500">11:00 – 12:00</p>
          </div>
          <button className="text-blue-600 font-medium hover:underline" onClick={() => window.location.href = "/booking"}>Đặt Lịch</button>
        </li>
      </ul>
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700">
        Xem Tất Cả
      </button>
    </aside>
  );
}