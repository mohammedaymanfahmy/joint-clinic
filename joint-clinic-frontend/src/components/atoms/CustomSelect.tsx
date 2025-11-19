"use client";
import { useState, useRef, useEffect } from "react";

export default function CustomSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Branch");
  const menuRef = useRef<HTMLDivElement | null>(null);

  const items = ["Branch", "Branch 1", "Branch 2"];

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative w-[800px] h-[100px]">

      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          bg-white 
          h-full w-full
          rounded-[50px]
          px-[200px]
          text-center
          text-[#1e5598]
          text-[32px]
          font-medium
          shadow-[0px_20px_60px_rgba(30,85,152,0.15)]
          outline-none
          border-none
          flex
          items-center
          justify-center
          relative
          hover:shadow-[0px_25px_75px_rgba(30,85,152,0.25)]
          transition-all
          duration-300
        "
      >
        {selected}

        {/* Arrow */}
        <span
          className={`
            absolute right-12 top-1/2 -translate-y-1/2
            border-solid border-t-[12px] border-l-[8px] border-r-[8px]
            border-t-[#1e5598] border-l-transparent border-r-transparent
            transition-transform duration-300
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className="
            absolute left-0 top-[110px]
            w-full
            bg-white
            rounded-[32px]
            shadow-[0px_15px_60px_rgba(30,85,152,0.18)]
            overflow-hidden
            z-50
            animate-fadeIn
          "
        >
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
              className="
                w-full
                text-[28px]
                py-6
                text-[#1e5598]
                font-medium
                text-center
                hover:bg-[#eaf2ff]
                transition-all
                duration-200
              "
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
