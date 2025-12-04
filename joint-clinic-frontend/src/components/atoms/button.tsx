import React from "react";
import { IBM_Plex_Sans } from "next/font/google";

const ibm = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

type ButtonProps = {
    text: string;
    variant?: "primary" | "secondary";
    onClick?: () => void;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, variant = "primary", onClick, className = "" }) => {
    const baseStyles = `${ibm.className} font-bold h-[60px] rounded-[40px] text-center text-[24px] py-[9px] px-[25px] cursor-pointer transition border-none`;

    const variants = {
        primary: "bg-[#1E5598] text-white hover:bg-[#0D294D]",
        secondary: "bg-white text-[#1E5598] border-2 border-[#1E5598] hover:bg-[#edf7f9]",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
