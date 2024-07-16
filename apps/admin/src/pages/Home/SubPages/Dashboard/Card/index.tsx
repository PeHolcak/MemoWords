import React from "react";

type CardProps = React.PropsWithChildren<{
  title: string;
}>;

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-2">
      <h2 className="text-lg">{title}</h2>
      <div className="mt-1">{children}</div>
    </div>
  );
};

export default Card;
