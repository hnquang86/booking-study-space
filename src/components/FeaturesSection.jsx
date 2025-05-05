// src/components/FeaturesSection.jsx
import React from "react";

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-blue-900 mb-10">Tiện Ích Hàng Đầu</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-2">Đặt chỗ tự động</h4>
            <p className="text-gray-600">Hệ thống xác nhận và quản lý chỗ ngồi nhanh chóng chỉ với vài thao tác.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-2">Theo dõi & Quản lý thời gian</h4>
            <p className="text-gray-600">Xem lịch sử, kiểm tra thời gian và tối ưu kế hoạch học tập cá nhân.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-2">Đồng bộ nhiều thiết bị</h4>
            <p className="text-gray-600">Hỗ trợ truy cập từ máy tính và thiết bị di động linh hoạt.</p>
          </div>
        </div>
      </div>
    </section>
  );
}