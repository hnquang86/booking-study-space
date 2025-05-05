// src/components/BookingDetailCard.jsx
import React from "react";
import { QrCodeIcon } from "@heroicons/react/24/outline";

export default function BookingDetailCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 transition-all hover:shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-blue-900">Thông tin lịch đặt</h3>
        <button className="text-sm text-blue-600 hover:underline">Xem Chi Tiết</button>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <img src="/avatar-placeholder.png" alt="avatar" className="h-12 w-12 rounded-full bg-gray-200 object-cover" />
        <div>
          <p className="font-semibold text-gray-800">Ho Nhat Quang</p>
          <p className="text-gray-500 text-sm">Sinh Viên</p>
        </div>
        <div className="ml-auto">
          <div className="flex items-center gap-2 text-blue-600">
            <QrCodeIcon className="h-6 w-6" />
            <span className="text-sm font-medium">QR Code</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
          <p className="font-medium text-gray-500">Máy đặt</p>
          <p className="font-semibold text-blue-900">Máy số 1</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
          <p className="font-medium text-gray-500">Thời gian đặt</p>
          <p className="font-semibold text-blue-900">9:00 - 10:30 AM</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
          <p className="font-medium text-gray-500">Xem chi tiết</p>
          <p className="text-blue-600 font-medium cursor-pointer">Lịch giặt</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
          <p className="font-medium text-gray-500">Thông tin khác</p>
          <p className="text-blue-600 font-medium cursor-pointer">Thông tin khác</p>
        </div>
      </div>
    </div>
  );
}
