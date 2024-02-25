import CheckBox from "expo-checkbox";
import { PropsWithChildren } from "react";
import { CheckBoxLabelCustom, TodoItemContainer } from "./components";

type TodoItemProps = PropsWithChildren<{
  value: boolean;
  onValueChange: () => void;
  id?: string;
}>;
export const TodoItem = ({
  id,
  value,
  onValueChange,
  children,
}: TodoItemProps) => {
  return (
    <TodoItemContainer id={id}>
      <CheckBox value={value} onValueChange={onValueChange} color={"#0fd97a"} />
      <CheckBoxLabelCustom checked={value}>{children}</CheckBoxLabelCustom>
    </TodoItemContainer>
  );
};
