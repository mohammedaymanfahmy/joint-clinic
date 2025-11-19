import React from "react";

export default function DoctorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            {/* Doctor Shell / Sidebar / Header */}
            {children}
        </section>
    );
}
