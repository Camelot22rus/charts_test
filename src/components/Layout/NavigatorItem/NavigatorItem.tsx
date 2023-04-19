import React, { FC } from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink, LinkProps as RouterLinkProps } from "react-router-dom";

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
  itemProps,
  ref
) {
  const { className: previousClasses, ...rest } = itemProps;
  const elementClasses = previousClasses?.toString() ?? "";
  return (
    <NavLink
      ref={ref}
      {...rest}
      role={undefined}
      className={({ isActive }) =>
        isActive ? elementClasses + " Mui-selected" : elementClasses
      }
    />
  );
});

interface INavigatorItem {
  text: string;
  link?: string;
  icon?: React.ReactElement;
  onClick?: () => void;
}

export const NavigatorItem: FC<INavigatorItem> = ({
  text,
  link,
  icon,
  onClick,
}) => {
  return (
    <ListItemButton
      {...(link && { component: Link, to: link })}
      onClick={onClick}
    >
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText>{text}</ListItemText>
    </ListItemButton>
  );
};
