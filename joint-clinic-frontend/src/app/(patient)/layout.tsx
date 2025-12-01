import React from "react";
import {color} from "@/lib/constants/colors";
import SideBar from "@/components/SideBar/SideBar";
import CorneredBoxes from "@/components/atoms/CorneredBoxes";

export default function PatientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section
         className="min-h-screen min-w-screen p-12 pl-16"
         style={{
            background:color.primary
         }}
        >
            <SideBar />
            <CorneredBoxes type="shadowBox" className="w-full h-[88.2vh]">
                {children}
            </CorneredBoxes>
            
        </section>
    );
}
