import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Button } from "../../../../../components";
import InputField from "../../../../../components/InputField";
import SimpleButton from "../../../../../components/SimpleButton";
import { useProductSearchrStore } from "../../../../../core/store/product-search.store";
import { Colors, Spacing } from "../../../../../core/themes";

export const ContainerComponent = styled(View)`
  background-color: ${Colors.neutral.lightest};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

export const Filter = () => {
  const { setSearch, search, setPage } = useProductSearchrStore();
  const [filter, setFilter] = useState(search || "");

  return (
    <ContainerComponent>
      <View style={{ flex: 1 }}>
        <InputField
          placeholder="Buscar"
          value={filter}
          onChangeText={(text) => {
            setFilter(text);
          }}
        >
          {filter && (
            <SimpleButton
              customStyle={`margin-right: ${Spacing.StackXXS}`}
              onPress={(event) => {
                event.preventDefault();
                setFilter("");
                setPage(1);
                setSearch("");
              }}
            >
              <MaterialIcons name={"clear"} color={Colors.neutral.medium} size={30} />
            </SimpleButton>
          )}
        </InputField>
      </View>

      <Button
        as="secundary"
        padding={Spacing.InsetXS}
        customStyle={`margin-left: ${Spacing.StackXXS}`}
        onPress={(ev) => {
          ev.preventDefault();
          setPage(1);
          setSearch(filter);
        }}
      >
        <Ionicons name={"filter"} color={Colors.default} size={28} />
      </Button>
    </ContainerComponent>
  );
};
