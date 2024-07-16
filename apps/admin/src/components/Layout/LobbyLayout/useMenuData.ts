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
      name: "signUp",
      label: "signUp",
      Icon: TeamOutlined,
      link: routes.signUp,
    },
    {
      name: "signIn",
      label: "signIn",
      Icon: TeamOutlined,
      link: routes.signIn,
    },
    {
      name: "about",
      label: "About",
      Icon: FileOutlined,
      link: routes.about,
    },
  ];

  return menuItems

}