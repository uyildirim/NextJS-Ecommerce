"use client";

import { useEffect, useState } from "react";

import { StoreModel } from "@/components/modals/store-model";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModel />
    </>
  );
};
