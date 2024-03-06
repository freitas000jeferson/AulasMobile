import { Ionicons } from "@expo/vector-icons/";
import React, { ComponentProps } from "react";
import { TextInput, View } from "react-native";
import styled from "styled-components";
import { Border, Colors, Font, Spacing } from "../../core/themes";

type InputComponentProps = {};
const FieldComponent = styled(View)`
  display: flex;
  margin: ${Spacing.StackXXS} 0px;
  flex-direction: row;
  width: auto;
  border-style: solid;
  border-width: ${Border.WidthSM};
  border-color: ${Colors.neutral.dark};
  border-radius: ${Border.RadiusXS};
`;
const IconComponent = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: ${Spacing.StackXXS};
`;

const InputComponent = styled(TextInput)<InputComponentProps>`
  font-size: ${Font.SizeSM};
  width: auto;
  flex: 1;
  padding: ${Spacing.SquishXS};
`;

type Icon = ComponentProps<typeof Ionicons>;
type InputFieldProps = {
  icon?: Icon["name"];
} & ComponentProps<typeof TextInput>;

const InputField = ({ icon, children, ...rest }: InputFieldProps) => {
  return (
    <FieldComponent>
      {icon && (
        <IconComponent>
          <Ionicons name={icon} color={Colors.primary} size={30} />
        </IconComponent>
      )}
      <InputComponent {...rest} />
      {children}
    </FieldComponent>
  );
};

export default InputField;
