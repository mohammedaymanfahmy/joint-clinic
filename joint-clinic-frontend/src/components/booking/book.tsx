"use client";
import React from "react";
import Button from "../atoms/button";
import CustomSelect from "../atoms/CustomSelect";

const Book = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-[#edf7f9]">
      <div className="contain w-[1700px] h-[98%] my-[25px] bg-white shadow-[0px_25px_60px_rgba(30,85,152,0.15)] rounded-[48px] flex flex-col items-center mt-10">

        <h2 className="text-[120px] font-bold mt-[60px] bg-gradient-to-b from-[#0D294D] to-[#1E5598] bg-clip-text text-transparent drop-shadow-md">
          Book Your Session now
        </h2>

        <p className="text-[#afafaf] text-[24px] font-medium mb-[10px]">
          If you are already a member, please{" "}
          <a href="#" className="text-[#1e5598]">sign in</a> first
        </p>

        {/* Box */}
        <div className="box h-[60%] w-[80%] bg-white shadow-[0px_20px_60px_rgba(30,85,152,0.15)] rounded-[32px] flex flex-col items-center justify-center gap-8">

          <h3 className="text-[48px] text-center font-bold bg-gradient-to-b from-[#0D294D] to-[#1E5598] bg-clip-text text-transparent">
            Choose The Branch
          </h3>

          {/* Custom Dropdown */}
          <CustomSelect />

          <Button text="Next" variant="primary" />

        </div>
      </div>
    </div>
  );
};

export default Book;
