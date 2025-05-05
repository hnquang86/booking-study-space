// src/components/DashboardGreeting.jsx
import React from "react";

export default function DashboardGreeting({ name }) {
  return (
    <div className="text-left">
      <h2 className="text-3xl font-bold text-blue-900">Good morning, {name}!</h2>
      <p className="text-gray-600 mt-2">Chào mừng bạn đến với Dashboard quản lý đặt chỗ học tập.</p>
    </div>
  );
}