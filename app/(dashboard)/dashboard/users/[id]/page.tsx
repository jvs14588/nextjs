import React from "react";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;

  return {
    title: "Hello Next.js 👋",
    description: `User page Metadata ${id}`,
  };
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div className="text-2xl">Users Details Page: {id}</div>;
};

export default Page;
