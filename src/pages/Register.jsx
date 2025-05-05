import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#f4f7fb] min-h-screen font-sans">
      <div className="grid md:grid-cols-2 min-h-[calc(100vh-64px)]">
        {/* Left Side: Blue Circle */}
        <div className="hidden md:flex items-center justify-center bg-[#f4f7fb]">
          <div className="w-[300px] h-[300px] bg-blue-500 rounded-full blur-2xl opacity-90"></div>
        </div>

        {/* Right Side: Register Form */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 relative">
            {/* Logo BK góc phải */}
            <img
              src={logo}
              alt="BK Logo"
              className="absolute top-6 right-6 w-12 h-12 object-contain"
            />

            <h2 className="text-3xl font-bold text-blue-900 mb-1">
              Tạo Tài Khoản
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Vui lòng điền đầy đủ thông tin bên dưới.
            </p>

            <form className="space-y-5">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  MSSV
                </label>
                <input
                  type="text"
                  placeholder="mssv"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Họ
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Tên
                  </label>
                  <input
                    type="text"
                    placeholder="Văn A"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Ngày sinh
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="relative">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Mật khẩu
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Tối thiểu 6 ký tự"
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

              <button
                type="submit"
                className="w-full bg-[#3D5AFE] text-white font-semibold py-2 rounded-xl hover:bg-blue-700 shadow"
              >
                Đăng Ký
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Đã có tài khoản?{" "}
                <a
                  href="/login"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Đăng Nhập
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
