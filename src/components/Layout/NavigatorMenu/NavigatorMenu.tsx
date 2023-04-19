import React, { Fragment } from "react";
import { NavigatorItem } from "components";
import { menuLinks } from "config";
import { ListWrapper } from "./style";

export const NavigatorMenu = () => {
  return (
    <ListWrapper disablePadding>
      {menuLinks.map(({ id, title, icon, link }) => (
        <Fragment key={id}>
          <NavigatorItem text={title} link={link || id} icon={icon} />
        </Fragment>
      ))}
    </ListWrapper>
  );
};
