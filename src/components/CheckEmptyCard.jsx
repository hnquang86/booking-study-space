
// src/components/CheckEmptyCard.jsx
import React from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function CheckEmptyCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-blue-900 mb-4">Check Lịch Trống</h3>
      <ul className="space-y-4 text-sm text-gray-700">
        <li className="flex items-center justify-between gap-4 border-b pb-2">
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="h-5 w-5 text-blue-500" />
            <span>22 Augustus, 2024</span>
          </div>
          <span className="text-blue-600 font-medium">Trống</span>
        </li>
        <li className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="h-5 w-5 text-blue-500" />
            <span>16 Augustus, 2024</span>
          </div>
          <span className="text-blue-600 font-medium">Trống</span>
        </li>
      </ul>
    </div>
  );
}