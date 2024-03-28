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
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.height && `height: ${props.height};`}
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
  ${(props) => props.background && `background-color: ${props.background};`}
  ${(props) => props.radius && `border-radius: ${props.radius};`}
  ${(props) => props.customStyle};
`;

type ButtonProps = ButtonComponentProps & ComponentProps<typeof TouchableOpacity>;

export const SimpleButton = ({ children, ...rest }: ButtonProps) => {
  return <ButtonComponent {...rest}>{children}</ButtonComponent>;
};

export default SimpleButton;
