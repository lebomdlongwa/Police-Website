import React from "react";
import * as styled from "./style/index";
import { Color } from "../../components/colorCodes";
import { MenuIcon } from "../../components/icons/menu";
import { Tooltip } from "../../components/Tooltip";
import { FormDefinition } from "./utils/formDefinition";

const SideBar = () => {
  return (
    <styled.NavWrapper>
      <styled.NavMenu>
        <MenuIcon c={Color.white} h={30} w={30} />
      </styled.NavMenu>
      <styled.NavOptions>
        {FormDefinition &&
          FormDefinition.map((item) => (
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
