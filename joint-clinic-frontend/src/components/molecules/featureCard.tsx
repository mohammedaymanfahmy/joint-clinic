"use client";

import React, { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(true)}
      className={`
        w-72 h-64 rounded-xl p-6 cursor-pointer transition-all duration-300
        border border-gray-200 flex flex-col justify-between
        ${active ? "bg-[#d5ece3] opacity-100 blur-0" : "bg-[#d5ece3] opacity-40 blur-[1.4px]"}
      `}
    >
      <h2 className="text-xl font-semibold w-[60%] text-gray-900">{title}</h2>

      <p className="text-sm text-gray-700 mt-3">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
