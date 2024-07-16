import React from "react";

import Card from "@pages/Home/SubPages/Dashboard/Card";

type MetricCardProps = {
  title: string;
  value: string;
  percentChange: number;
  isIncrease: boolean;
};

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  percentChange,
  isIncrease,
}) => {
  return (
    <Card title={title}>
      <div className="flex items-baseline">
        <p className="text-3xl font-semibold">{value}</p>
        <p
          className={`text-sm ml-2 ${isIncrease ? "text-green-500" : "text-red-500"}`}
        >
          {percentChange}%
        </p>
      </div>
    </Card>
  );
};

export default MetricCard;
