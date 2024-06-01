import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import DesignPreviewComponent from "./DesignPreviewComponent";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
const page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }
  const configuration = await db.configuration.findUnique({
    where: {
      id,
    },
  });

  if (!configuration) {
    return notFound();
  }
  return <DesignPreviewComponent configuration={configuration} />;
};

export default page;
