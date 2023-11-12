"use client";
import { formatter } from "@/lib/utils";
import { useEffect, useState } from "react";

type CurrencyProps = {
  values?: string | number;
};
const Currency: React.FC<CurrencyProps> = ({ values }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="font-semibold">{formatter.format(Number(values))}</div>
  );
};

export default Currency;
