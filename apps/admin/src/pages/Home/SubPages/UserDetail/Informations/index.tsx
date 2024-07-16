import React from "react";
import { Tabs } from "antd";

import { User } from "..";

const UserDetail: React.FC<User> = ({ email, firstName, lastName }) => {
  return (
    <div className="space-y-2">
      <p>Email: {email}</p>
      <p>Jméno: {firstName}</p>
      <p>Příjmení: {lastName}</p>
    </div>
  );
};

export default UserDetail;
