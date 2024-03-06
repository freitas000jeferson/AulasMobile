import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import Button from "../../components/Button";
import TextCustom from "../../components/Text";
import { FieldSet, InputField } from "./components";

type FormFieldProps = {
  onPress: (value: string) => void;
};

export const FormField = ({ onPress }: FormFieldProps) => {
  const [text, setText] = useState<string>("");

  return (
    <FieldSet>
      <InputField placeholder="Adicione um item!" onChangeText={(newText) => setText(newText)} defaultValue={text} />
      <Button
        onPress={() => {
          onPress(text);
          setText("");
        }}
      >
        <TextCustom size="22px" fontWeight="bold" color={"#f2f2f2"}>
          <MaterialIcons name="add" color="white" size={20} />
        </TextCustom>
      </Button>
    </FieldSet>
  );
};
