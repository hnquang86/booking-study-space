// src/components/BookingChart.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", booking: 30 },
  { name: "Feb", booking: 50 },
  { name: "Mar", booking: 70 },
  { name: "Apr", booking: 10 },
  { name: "May", booking: 40 },
];

export default function BookingChart() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-semibold text-blue-900 mb-4">Biểu đồ đặt lịch hàng tháng</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="booking" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
