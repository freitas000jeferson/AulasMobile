import React, { PropsWithChildren } from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
const ButtonCustom = styled(TouchableOpacity)`
  width: auto;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  background-color: #0fd97a;
  color: #dddddd;
  border-radius: 8px;
`;

type ButtonProps = PropsWithChildren<{
  onPress?: () => void;
  label?: string;
}>;

export const Button = ({ label, children, onPress }: ButtonProps) => {
  return (
    <ButtonCustom onPress={onPress}>
      {label && <Text>{label}</Text>}
      {children}
    </ButtonCustom>
  );
};

export default Button;
