import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

import {useSidebar} from "./useSidebar"

interface BaseMenuItem {
  name: string;
  label: string;
  Icon: React.FC;
}

interface SimpleMenuItem extends BaseMenuItem {
  link: string;
}

interface NestedMenuItem extends BaseMenuItem {
  items: MenuItem[];
}

export type MenuItem = SimpleMenuItem | NestedMenuItem;

export const isNestedMenuItem = (item: MenuItem): item is NestedMenuItem => {
  return "items" in item;
}

type SidebarProps = {
  menuItems: MenuItem[];
};

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  let navigate = useNavigate();
  const {createActiveItem, openKeys, onSubMenuOpenChange} = useSidebar(menuItems)

  const renderMenuItems = (data: MenuItem[]) => {
    return data.map((item) => {
      const Icon = item.Icon;

      // Use typeguard to recognize which type of MenuItem it is
      if (isNestedMenuItem(item)) {
        return (
          <Menu.SubMenu key={item.name} icon={<Icon />} title={item.label}>
            {renderMenuItems(item.items)}
          </Menu.SubMenu>
        );
      } else {
        const navigateToLink = () => {
          navigate(item.link);
        };

        return (
          <Menu.Item key={item.link} icon={<Icon />} onClick={navigateToLink}>
            {item.label}
          </Menu.Item>
        );
      }
    });
  };


  return (
    <div className="flex">
      <div className="h-full w-64" style={{ backgroundColor: "#001529" }}>
        <div className="logo p-5">
          <a href="/" className="text-white text-2xl font-bold">
            Logo
          </a>
        </div>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={false}
          selectedKeys={[createActiveItem()]}
          openKeys={openKeys}
          onOpenChange={onSubMenuOpenChange}
        >
          {renderMenuItems(menuItems)}
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
