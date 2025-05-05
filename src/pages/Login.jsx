// src/pages/Login.jsx
import React, { useState } from "react";
import Navbar from "../components/TopNavBar";
import logo from "../assets/logo.png";
import { Eye, EyeOff } from "lucide-react"; // optional: you can use any eye icon or svg

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#f4f7fb] min-h-screen font-sans">


      <div className="grid md:grid-cols-2 min-h-[calc(100vh-64px)]">
        {/* Left Side: Blue Circle */}
        <div className="hidden md:flex items-center justify-center bg-[#f4f7fb]">
          <div className="w-[300px] h-[300px] bg-blue-500 rounded-full blur-2xl opacity-90"></div>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 relative">
            {/* Logo BK góc phải */}
            <img
              src={logo}
              alt="BK Logo"
              className="absolute top-6 right-6 w-12 h-12 object-contain"
            />

            <h2 className="text-3xl font-bold text-blue-900 mb-1">Welcome Back!</h2>
            <p className="text-sm text-gray-500 mb-6">Hãy Trải Nghiệm Ngay !</p>

            <form className="space-y-5">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">E-mail</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="relative">
                <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <button
                  type="button"
                  className="absolute top-[36px] right-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="flex justify-between text-sm">
                <a href="#" className="text-gray-800 hover:underline font-medium">Quên Mật Khẩu</a>
                <a href="/register" className="text-blue-600 hover:underline font-medium">Chưa Có Tài Khoản? Đăng Kí</a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3D5AFE] text-white font-semibold py-2 rounded-xl hover:bg-blue-700 shadow"
              >
                Đăng Nhập
              </button>

              <div className="text-center text-sm text-gray-500 mt-4">Hoặc Đăng Nhập Với</div>

              <button className="w-full border border-gray-300 flex items-center justify-center gap-2 text-blue-700 py-2 rounded-xl hover:bg-blue-50 mt-2">
                <img src={logo} alt="logo" className="w-5 h-5" />
                Sign in with SSO HCMUT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
