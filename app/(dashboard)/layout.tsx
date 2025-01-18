import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello Next.js 👋",
  description: "Dashboard Layout Metadata",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>
    <h1 className="text-3xl">DASHBOARD NAVIGATION LAYOUT</h1>
    {children}
  </div>;
};

export default Layout;