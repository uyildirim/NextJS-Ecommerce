import React from "react";

type HeadingProps = {
  title: string;
  descrition: string;
};
export const Heading: React.FC<HeadingProps> = ({ title, descrition }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground">{descrition}</p>
    </div>
  );
};
