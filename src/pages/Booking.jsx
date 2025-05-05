// src/pages/Booking.jsx
import React, { useState } from "react";
import Navbar from "../components/TopNavBar";
import Footer from "../components/Footer";
import QRCode from "react-qr-code";

export default function Booking() {
  const [confirmed, setConfirmed] = useState(false);
  const bookingInfo = {
    name: "Ho Nhat Quang",
    time: "9:00 - 10:30 AM",
    machine: "Máy số 1",
    date: "06/05/2025"
  };

  return (
    <div className="bg-[#f4f7fb] min-h-screen font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-10">
        {!confirmed ? (
          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Xác nhận đặt chỗ</h2>
            <p className="text-gray-700 mb-2">Tên: <strong>{bookingInfo.name}</strong></p>
            <p className="text-gray-700 mb-2">Máy: <strong>{bookingInfo.machine}</strong></p>
            <p className="text-gray-700 mb-2">Thời gian: <strong>{bookingInfo.time}</strong></p>
            <p className="text-gray-700 mb-6">Ngày: <strong>{bookingInfo.date}</strong></p>
            <button
              onClick={() => setConfirmed(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 shadow"
            >
              Xác nhận đặt lịch
            </button>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Mã QR đặt chỗ</h2>
            <QRCode
              value={`Tên: ${bookingInfo.name}\nMáy: ${bookingInfo.machine}\nGiờ: ${bookingInfo.time}\nNgày: ${bookingInfo.date}`}
              size={180}
              className="mx-auto mb-6 bg-white p-2 rounded-lg"
            />
            <p className="text-gray-700 mb-4">Vui lòng quét mã này khi đến điểm đặt máy.</p>
            <a
              href="/dashboard"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow"
            >
              Quay về Dashboard
            </a>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
