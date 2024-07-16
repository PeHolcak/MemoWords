import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

import { MenuItem, isNestedMenuItem } from "./index";

export const useSidebar = (menuItems: MenuItem[]) => {
  let navigate = useNavigate();
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const findOpenKeys = (items: MenuItem[], currentPath: string): string[] => {
    let keys: string[] = [];
    for (const item of items) {
      // Use typeguard to recognize which type of MenuItem it is
      if (isNestedMenuItem(item)) {
        const nestedKeys = findOpenKeys(item.items, currentPath);
        keys.push(item.name);
        keys = [...keys, ...nestedKeys];
      } else if (item.link === currentPath) {
        return keys;
      }
    }
    return keys;
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const keysToOpen = findOpenKeys(menuItems, currentPath);
    setOpenKeys(keysToOpen);
  }, [location.pathname, menuItems]);

  const createActiveItem = () => {
    const pathname = location.pathname;
    const activeItem =
      pathname.charAt(0) === "/" ? pathname.slice(1) : pathname;

    return `/${activeItem}`;
  };

  const rootSubmenuKeys = menuItems
    .filter(isNestedMenuItem)
    .map((item) => item.name);

  const onSubMenuOpenChange = (keys: string[]) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return {createActiveItem, openKeys, onSubMenuOpenChange}
};
