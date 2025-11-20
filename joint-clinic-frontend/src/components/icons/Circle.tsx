"use client";
import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {}

const Circle: React.FC<Props> = ({ className, style, ...rest }) => (
  <svg
    width="430"
    height="42"
    viewBox="0 0 430 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    {...rest}
  >
    <line
      x1="234"
      y1="20"
      x2="235"
      y2="20"
      stroke="#9FD5E2"
      strokeWidth="2"
    />
    <line
      x1="194"
      y1="20"
      x2="199"
      y2="20"
      stroke="#9FD5E2"
      strokeWidth="2"
    />
    <circle
      cx="215"
      cy="21"
      r="20"
      fill="url(#paint0_linear_400_10762)"
      stroke="url(#paint1_linear_400_10762)"
      strokeWidth="2"
    />
    <defs>
      <linearGradient
        id="paint0_linear_400_10762"
        x1="215"
        y1="0"
        x2="215"
        y2="42"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0D294D" />
        <stop offset="1" stopColor="#1E5598" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_400_10762"
        x1="215"
        y1="0"
        x2="215"
        y2="42"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0D294D" />
        <stop offset="1" stopColor="#1E5598" />
      </linearGradient>
    </defs>
  </svg>
);

export default Circle;
