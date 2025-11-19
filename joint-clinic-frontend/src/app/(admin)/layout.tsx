import React from "react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            {/* Admin Shell / Sidebar / Header */}
            {children}
        </section>
    );
}
