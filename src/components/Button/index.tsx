import React, { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "../../core/themes";
import TextCustom from "../TextCustom";
import { ButtonComponent, ButtonComponentProps } from "./styles";

type As = "primary" | "secundary" | "tertiary" | "default";
type ButtonProps = {
  label?: string;
  color?: string;
  as?: As;
} & ComponentProps<typeof TouchableOpacity> &
  ButtonComponentProps;

const BUTTON_DEFAULT = {
  primary: {
    background: Colors.primary,
    color: Colors.neutral.lightest,
  },
  secundary: {
    background: Colors.secundary,
    color: Colors.neutral.darkest,
  },
  tertiary: {
    background: Colors.tertiary,
    color: Colors.neutral.darkest,
  },
  default: {
    background: Colors.default,
    color: Colors.neutral.lightest,
  },
};

export const Button = ({ label, as = "default", background, color, children, onPress, ...rest }: ButtonProps) => {
  return (
    <ButtonComponent background={background || BUTTON_DEFAULT[as].background} {...rest} onPress={onPress}>
      {label && <TextCustom color={color || BUTTON_DEFAULT[as].color}>{label}</TextCustom>}
      {children}
    </ButtonComponent>
  );
};

export default Button;
