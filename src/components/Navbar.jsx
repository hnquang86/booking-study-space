// src/components/Navbar.jsx
import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="font-bold text-lg text-blue-900">HCMUT</span>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 text-gray-800 text-sm font-medium">
          <a href="/" className="hover:text-blue-600">
            Trang Chủ
          </a>
          <a href="/booking" className="hover:text-blue-600">
            Đặt Lịch
          </a>
          <a href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </a>
        </nav>

        <div>
          <a
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm"
          >
            Đăng Nhập
          </a>
        </div>
      </div>
    </header>
  );
}
