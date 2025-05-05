// src/components/EditSchedulePopup.jsx
import React from "react";

export default function EditSchedulePopup({ onClose }) {
  return (
    <div className="absolute top-10 right-10 z-50 w-72 bg-white rounded-2xl shadow-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-blue-800">Edit Schedule</h4>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <label className="text-gray-600 font-medium">Đặt Lịch Giặt</label>
          <input type="text" placeholder="Thêm mô tả" className="w-full mt-1 p-2 border rounded-lg" />
        </div>

        <div>
          <label className="text-gray-600 font-medium">Thời gian</label>
          <div className="flex justify-between mt-1">
            <span className="text-gray-700">09:00 AM</span>
            <span>→</span>
            <span className="text-gray-700">11:00 AM</span>
          </div>
        </div>

        <div>
          <label className="text-gray-600 font-medium">Người Đặt</label>
          <div className="text-blue-700 mt-1">● 1 Going, 1 Awaiting</div>
        </div>

        <div className="flex justify-end gap-2">
          <button className="px-4 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200" onClick={onClose}>Hủy</button>
          <button className="px-4 py-1 rounded-full text-sm bg-blue-600 text-white hover:bg-blue-700">Lưu</button>
        </div>
      </div>
    </div>
  );
}
