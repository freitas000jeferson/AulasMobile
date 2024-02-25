import { Text, TextInput, View } from "react-native";
import styled from "styled-components";

export const FieldSet = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
`;
export const InputField = styled(TextInput)`
  background-color: #d2d2d2;
  color: gray;
  padding: 8px 16px;
  border-radius: 100px;
  flex: 1;
  margin-right: 8px;
`;

export const CheckBoxLabelCustom = styled(Text)<{ checked: boolean }>`
  font-size: 16px;
  color: ${(props) => (props.checked ? "#a5a5a5" : "#151515")};
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;
export const TodoItemContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 8px;
  padding: 16px 0;
`;
