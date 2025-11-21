"use client";

import React, { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  isActive?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, isActive }) => {
  const [active, setActive] = useState(false);
  if (isActive !== undefined) {
    setActive(isActive);
  }
  return (
    <div
      onClick={() => setActive(!active)}
      className={`
        md:w-full md:h-[200%] h-48 w-full rounded-xl p-3 md:p-6 cursor-pointer transition-all duration-300
        border border-gray-200 flex flex-col justify-around md:justify-between
        ${active ? "bg-[#d5ece3] opacity-100 blur-0" : "bg-[#d5ece3] opacity-40 blur-[1.4px]"}
      `}
    >
      <h2 className="md:text-xl text-sm font-semibold w-full text-gray-900">{title}</h2>

      <p className="md:text-sm text-xs text-gray-700 mt-3">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
