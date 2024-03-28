import React, { useMemo, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

import { FormField } from "./FormField";
import { TodoItem } from "./TodoItem";

type TodoListItem = {
  id: string;
  title: string;
  checked: boolean;
};

export const TodoList = () => {
  const [list, setList] = useState<TodoListItem[]>([]);

  const addItem = (text: string) => {
    setList([...list, { id: new Date().toISOString(), title: text, checked: false }]);
  };

  const onChangeCheckbox = (id: string) => {
    const updateList = list.map((item) => (item.id == id ? { ...item, checked: !item.checked } : item));
    setList(updateList);
  };

  const countFinished = useMemo(() => {
    return list.reduce((acc, item) => (item.checked ? acc + 1 : acc), 0);
  }, [list]);

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        paddingHorizontal: 16,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ paddingVertical: 8 }}>
          Items concluidos: {countFinished} / {list.length}
        </Text>

        <FlatList
          data={list}
          horizontal={true}
          renderItem={({ item }) => (
            <TodoItem id={item.id} value={item.checked} onValueChange={() => onChangeCheckbox(item.id)}>
              {item.title}
            </TodoItem>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <FormField onPress={addItem} />
    </SafeAreaView>
  );
};
export default TodoList;
