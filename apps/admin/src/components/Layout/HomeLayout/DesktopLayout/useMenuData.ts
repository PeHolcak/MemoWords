import {
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    HomeOutlined 
  } from "@ant-design/icons";

  import {routes} from "@constants/routes"

import {MenuItem} from "src/components/Sidebar"


export const useMenuData = () => {

  const menuItems: MenuItem[] = [
    {
      name: "dashboard",
      label: "Dashboard",
      Icon: PieChartOutlined,
      link: routes.dashboard,
    },
    {
      name: "users",
      label: "Users",
      Icon: TeamOutlined,
      link: routes.users,
    },
    {
      name: "pages",
      label: "Stránky",
      Icon: FileOutlined,
      items: [
        {
          name: "mainPage",
          label: "Hlaní stránka",
          Icon: HomeOutlined,
          link: routes.mainPage,
        },
      ],
    },
  ];

  return menuItems

}