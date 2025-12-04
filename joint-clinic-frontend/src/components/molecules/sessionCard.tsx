"use client";

import React from "react";

type SessionCardProps = {
    imageSrc: string;
    title: string;
    status?: "Completed" | "Pending" | "In Progress" | "Cancelled" | string;
    minutes?: number;
    className?: string;
};

const statusColors: Record<string, string> = {
    Completed: "text-[#1C9A55]",
    Pending: "text-[#F6A500]",
    "In Progress": "text-[#1E5598]",
    Cancelled: "text-[#D84040]",
};

const SessionCard: React.FC<SessionCardProps> = ({
    imageSrc,
    title,
    status = "Completed",
    minutes,
    className = "",
}) => {
    // لو الـ className فيه w- أو h- ما نحطّش المقاس الافتراضي
    const hasCustomWidth = /\bw-/.test(className);
    const hasCustomHeight = /\bh-/.test(className);

    const defaultSize =
        `${hasCustomWidth ? "" : "w-[220px]"} ` +
        `${hasCustomHeight ? "" : "h-[220px]"}`;

    return (
        <div
            className={`
        ${defaultSize}
        w-[465px] h-[400px]
        rounded-[24px]
        shadow-[0_10px_25px_rgba(0,0,0,0.12)]
        p-2
        flex flex-col
        ${className}
      `}
        >
            {/* الصورة */}
            <div className="rounded-[20px] h-[80%] overflow-hidden w-full">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full  object-cover"
                />
            </div>

            {/* النصوص تحت الصورة */}
            <div className="flex items-center justify-between my-auto px-1">
                <span className="text-[24px] font-bold text-[#1E5598] my-auto">
                    {title}
                </span>
                <span className={`text-[22px] font-bold ${statusColors[status]}`}>
                    {minutes ? `${minutes} min` : `${status}`}
                </span>
            </div>
        </div>
    );
};

export default SessionCard;
