import React, { useState } from "react";
import { FlatList, View } from "react-native";
import styled from "styled-components";
import { Text } from "../../../../../components";
import SimpleButton from "../../../../../components/SimpleButton";
import { Border, Colors, Spacing } from "../../../../../core/themes";
import { GetCategoryService } from "../../../../../services/categories";

type ItemComponentProp = { isSelected?: boolean };
const ItemComponent = styled(View)<ItemComponentProp>`
  height: auto;
  padding: ${Spacing.SquishXXS};
  margin-right: ${Spacing.StackXXS};
  background-color: ${(props) => (props.isSelected ? Colors.primary : Colors.tertiary)};
  border-radius: ${Border.RadiusPill};
  border: ${Border.WidthSM} solid ${Colors.neutral.medium};
`;

type ItemProp = {
  id?: number;
  name?: string;
  isSelected?: boolean;
  onClick: (value: number) => void;
};

const Items = ({ id, name, isSelected = true, onClick }: ItemProp) => {
  return (
    <ItemComponent id={`${id!}`} isSelected={isSelected}>
      <SimpleButton
        onPress={(event) => {
          event.preventDefault();
          onClick(id!);
        }}
      >
        <Text style={{ color: isSelected ? Colors.neutral.lightest : Colors.neutral.darkest }}>
          {name?.toUpperCase()}
        </Text>
      </SimpleButton>
    </ItemComponent>
  );
};

const Categories = () => {
  const { isPending, error, data } = GetCategoryService();
  const [selected, setSelected] = useState<number>(-1);

  if (isPending) return <View style={{ height: 20, width: "80%", backgroundColor: Colors.neutral.lightest }} />;

  if (error)
    return (
      <View>
        <Text>Error</Text>
      </View>
    );

  return (
    <View style={{}}>
      <FlatList
        style={{ paddingVertical: 8 }}
        data={data}
        horizontal={true}
        renderItem={({ item }) => <Items {...item} onClick={setSelected} isSelected={item.id === selected} />}
      />
    </View>
  );
};

export default Categories;
