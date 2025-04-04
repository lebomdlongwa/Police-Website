import React from "react";

import { isEmpty } from "lodash";

import { Color } from "../../components/colorCodes";
import { MenuIcon } from "../../components/icons/menu";
import { Tooltip } from "../../components/Tooltip";
import { FormDefinition } from "./utils/formDefinition";

import * as styled from "./style/index";

const SideBar = ({ admin }: { admin: boolean }) => {
  const adminNavBarOptions =
    !isEmpty(FormDefinition) &&
    FormDefinition.filter((option) => option?.admin !== false);

  const citizenNavBarOptions =
    !isEmpty(FormDefinition) &&
    FormDefinition.filter((option) => option?.admin !== true);

  return (
    <styled.NavWrapper>
      <styled.NavMenu>
        <MenuIcon c={Color.white} h={30} w={30} />
      </styled.NavMenu>
      <styled.NavOptions>
        {admin
          ? adminNavBarOptions.map((item) => (
              <styled.StyledLink to={item.route}>
                <Tooltip key={item.text} content={item.text} position="E">
                  <styled.OptionsWrapper>
                    <styled.OptionIcon>{item.icon}</styled.OptionIcon>
                  </styled.OptionsWrapper>
                </Tooltip>
              </styled.StyledLink>
            ))
          : citizenNavBarOptions.map((item) => (
              <styled.StyledLink to={item.route}>
                <Tooltip key={item.text} content={item.text} position="E">
                  <styled.OptionsWrapper>
                    <styled.OptionIcon>{item.icon}</styled.OptionIcon>
                  </styled.OptionsWrapper>
                </Tooltip>
              </styled.StyledLink>
            ))}
      </styled.NavOptions>
    </styled.NavWrapper>
  );
};

export default SideBar;
