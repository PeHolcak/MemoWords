import React, { useState } from 'react';

import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined, UserOutlined, SettingOutlined, DownOutlined } from '@ant-design/icons';


const Sidebar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  // for mobile
  // return (
  //   <>
  //     <Button type="primary" onClick={showDrawer} className="m-2">
  //       Otevřít sidebar
  //     </Button>
  //     <Drawer
  //       title="Název Sidebaru"
  //       placement="left"
  //       closable={false}
  //       onClose={onClose}
  //       visible={visible}
  //       className="text-gray-500"
  //     >
  //       <p className="p-2">První položka</p>
  //       <p className="p-2">Druhá položka</p>
  //       <p className="p-2">Třetí položka</p>
  //     </Drawer>
  //   </>
  // );

  
  const menu = (
    <Menu
      items={[
        {
          label: 'Podpoložka 1',
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: 'Podpoložka 2',
          key: '2',
          icon: <SettingOutlined />,
        },
      ]}
    />
  );

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />} className="m-4">
        Otevřít sidebar
      </Button>
      <Drawer
        title="Název Sidebaru"
        placement="left"
        closable={false}
        onClose={onClose}
        open={visible}
        className="text-gray-600"
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: 'Domů',
              icon: <UserOutlined />,
            },
            {
              key: '2',
              label: 'Nastavení',
              icon: <SettingOutlined />,
            },
            {
              key: '3',
              label: 'Dropdown',
              icon: <DownOutlined />,
              children: [
                {
                  label: 'Podpoložka 1',
                  key: '1',
                  icon: <UserOutlined />,
                },
                {
                  label: 'Podpoložka 2',
                  key: '2',
                  icon: <SettingOutlined />,
                },
              ],
            },
          ]}
        />
      </Drawer>
    </>
  );
};

export default Sidebar;