import React from "react";
import { Row, Col } from "antd";

import HomeLayout from "@components/Layout/HomeLayout";

import MetricCard from "./MetricCard";
import Card from "./Card";
import SimpleBarChart from "./SimpleBarChart";

const Dashboard: React.FC = () => {
  return (
    <HomeLayout>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12} xl={8}>
          <MetricCard
            title="New Wins"
            value="230"
            percentChange={25}
            isIncrease={true}
          />
        </Col>

        <Col xs={24} md={12} xl={8}>
          <MetricCard
            title="Trial-Win Rate"
            value="9.86%"
            percentChange={25}
            isIncrease={true}
          />
        </Col>

        <Col xs={24} md={12} xl={8}>
          <MetricCard
            title="New MRR"
            value="$25,690"
            percentChange={8.7}
            isIncrease={true}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={24}>
          <Card title="Graf uživatelů">
            <div className="mt-4">
              <SimpleBarChart />
            </div>
          </Card>
        </Col>
      </Row>
    </HomeLayout>
  );
};

export default Dashboard;
