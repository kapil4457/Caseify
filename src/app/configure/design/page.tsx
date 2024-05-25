import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import DesignConfigurator from "./DesignConfigurator";

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
  const config = await db.configuration.findUnique({
    where: {
      id: id,
    },
  });

  if (!config) {
    return notFound();
  }

  const { imageUrl, width, height } = config;
  return (
    <DesignConfigurator
      configId={config.id}
      imageDimensions={{ width: width, height: height }}
      imageUrl={config.imageUrl}
    />
  );
};

export default page;
