import React from 'react';
import { Table, TableProps, Button, Popconfirm } from 'antd';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { useQuery } from 'react-query';

import { userCalls } from "@calls/user-calls"

interface User {
  key: string;
  username: string;
  email: string;
}

const columns: TableProps<User>['columns'] = [
  {
    title: 'Jméno',
    dataIndex: 'username',
    key: 'username',
    sorter: (a: User, b: User) => a.username.localeCompare(b.username),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sorter: (a: User, b: User) => a.email.localeCompare(b.email),
  },
  {
    title: 'Akce',
    key: 'action',
    render: (_, record: User) => (
      <span className="flex space-x-2">
        <Button type="primary" icon={<EyeOutlined />} onClick={() => handleDetail(record)} />
        <Popconfirm title="Opravdu chcete smazat tohoto uživatele?" onConfirm={() => handleDelete(record.key)}>
          <Button type="primary" icon={<DeleteOutlined />} danger />
        </Popconfirm>
      </span>
    ),
  },
];

// Funkce pro obsluhu události Detail
const handleDetail = (record: User) => {
  console.log('Detail', record);
  // Zde můžete přidat logiku pro zobrazení detailů uživatele
};

// Funkce pro obsluhu události Smazat
const handleDelete = (key: string) => {
  console.log('Smazat', key);
  // Zde můžete přidat logiku pro smazání uživatele
};


const UserTable: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery('users', userCalls.listUsers);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    console.error(error);
    return <p>Error loading data</p>;
  }

  // Předpokládáme, že `data` je objekt s polem `users`
  const dataSource = data?.users.map((user: any) => ({
    key: user._id,  // Použijte `_id` jako klíč pro každý řádek
    username: user.username,
    email: user.email,
  }));

  return <Table columns={columns} dataSource={dataSource} />;
};

export default UserTable;