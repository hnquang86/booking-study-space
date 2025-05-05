// src/components/LoginForm.jsx
import React from "react";

export default function LoginForm() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-blue-900 mb-2">Welcome Back!</h2>
      <p className="text-sm text-gray-500 mb-6">Hãy Trải Nghiệm Ngay !</p>

      <form className="text-left space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">E-mail</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="flex justify-between text-sm mt-2">
          <a href="#" className="text-blue-600 hover:underline">Quên Mật Khẩu</a>
          <a href="/register" className="text-blue-600 hover:underline">Chưa Có Tài Khoản? Đăng Kí</a>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700"
        >
          Đăng Nhập
        </button>

        <div className="mt-4 text-center text-sm text-gray-500">Hoặc Đăng Nhập Với</div>

        <button className="w-full mt-2 border border-blue-500 text-blue-700 py-2 rounded-full hover:bg-blue-50">
          Sign in with SSO HCMUT
        </button>
      </form>
    </div>
  );
}
