import React, { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

export type ButtonComponentProps = {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  background?: string;
  radius?: string;
  customStyle?: string;
};
const ButtonComponent = styled(TouchableOpacity)<ButtonComponentProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props) => props.customStyle};
`;

type ButtonProps = ButtonComponentProps & ComponentProps<typeof TouchableOpacity>;

export const SimpleButton = ({ children, ...rest }: ButtonProps) => {
  return <ButtonComponent {...rest}>{children}</ButtonComponent>;
};

export default SimpleButton;
