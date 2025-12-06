"use client";
import React from "react";

type StatusType = "Done" | "Opened" | "Unread";

interface RequestItemProps {
  name: string;
  status: StatusType;
  phone: string;
  department: string;
  date: string;
  onViewDetails?: () => void;
}

const statusColor: Record<StatusType, string> = {
  Done: "text-green-600",
  Opened: "text-yellow-500",
  Unread: "text-red-500",
};

const dotColor: Record<StatusType, string> = {
  Done: "bg-green-600",
  Opened: "bg-yellow-500",
  Unread: "bg-red-500",
};

export default function RequestItem({
  name,
  status,
  phone,
  department,
  onViewDetails,
}: RequestItemProps) {
  return (
    <div className="
      grid grid-cols-5 items-center w-full py-3
      text-[18px] sm:text-[20px] md:text-[22px]
    ">
      {/* Dot + Name */}
      <div className="flex items-center gap-3 font-semibold text-[#1E5598]">
        <span className={`w-3 h-3 rounded-full ${dotColor[status]}`}></span>
        {name}
      </div>

      {/* Status */}
      <span className={`${statusColor[status]} font-medium`}>
        {status}
      </span>

      {/* Phone */}
      <span className="text-gray-700 font-medium">{phone}</span>

      {/* Department */}
      <span className="text-[#1E5598] font-medium">{department}</span>

      {/* View Details */}
      <button
        onClick={onViewDetails}
        className="text-green-700 underline font-medium hover:opacity-80 cursor-pointer"
      >
        View Details
      </button>
    </div>
  );
}
