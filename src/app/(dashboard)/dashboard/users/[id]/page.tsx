import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div className="text-2xl">Users Details Page: {id}</div>;
};

export default Page;
