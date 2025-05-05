
// src/components/DiscountCard.jsx
import React from "react";

export default function DiscountCard() {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
      <div>
        <p className="font-medium text-sm mb-2">Thông tin</p>
        <h4 className="text-2xl font-bold">Giảm Giá 30%</h4>
        <p className="text-sm mt-1">Khi đặt lịch trên 2 lần trong tuần.</p>
      </div>
    </div>
  );
}