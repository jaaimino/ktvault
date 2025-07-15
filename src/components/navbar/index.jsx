import {
  IconBook,
  IconHome,
  IconMap,
  IconTool,
  IconUsers,
} from "@tabler/icons-react";
import classes from "./navbar.module.css";
import { Link, useLocation } from "wouter";
import { Group, NavLink } from "@mantine/core";

export function NavbarSimple() {
  const [location] = useLocation();
  const data = [
    { link: "/", label: "Home", icon: IconHome, match: (path) => path === "/" },
    {
      link: "/factions",
      label: "Factions",
      icon: IconUsers,
      match: (path) => path.includes("/factions") || path.includes("/fa"),
    },
    {
      link: "/scenarios",
      label: "Scenarios",
      icon: IconMap,
      match: (path) => path.includes("/scenarios"),
    },
    {
      link: "/rules",
      label: "Rules",
      icon: IconBook,
      match: (path) => path === "/rules",
    },
    {
      link: "/settings",
      label: "Tools",
      icon: IconTool,
      match: (path) => path === "/settings",
    },
  ];
  const renderLink = (item) => {
    return (
      <NavLink
        padding={0}
        component={Link}
        description={item.description}
        data-active={item.match(location) || undefined}
        href={item.link}
        key={item.label}
        label={item.label}
        classNames={classes}
        leftSection={<item.icon />}
      />
    );
  };
  const links = data.map(renderLink);
  return (
    <Group gap={0} wrap="nowrap">
      {links}
    </Group>
  );
}
