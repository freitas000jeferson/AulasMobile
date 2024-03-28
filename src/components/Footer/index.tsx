import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Colors, Spacing } from "../../core/themes";
import Text from "../Text";

const FooterComponent = styled(View)`
  margin-top: ${Spacing.StackMD};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.neutral.darkest};
  padding: ${Spacing.InsetLG} ${Spacing.InsetXS};
`;

const Footer = () => {
  return (
    <FooterComponent>
      <Text color={Colors.tertiary}> Zylo Sports</Text>
      <Text color={Colors.tertiary}> by Jeferson F.</Text>
    </FooterComponent>
  );
};

export default Footer;
