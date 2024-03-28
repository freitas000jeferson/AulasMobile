import React from "react";
import { View } from "react-native";
import { Text } from "../../../../../components";
import { useProductSearchrStore } from "../../../../../core/store/product-search.store";
import { Colors } from "../../../../../core/themes";
import { GetProductsPaginedService } from "../../../../../services/products";
import { CardItem } from "./CardItem";
import { PageComponent } from "./PageComponent";
import { Grid } from "./styles";

const ProductList = () => {
  const { search, page, size } = useProductSearchrStore();
  const { data, isError, isPending } = GetProductsPaginedService({ search, page, size });
  if (isPending) return <View style={{ height: 20, width: "80%", backgroundColor: Colors.neutral.lightest }} />;

  if (isError)
    return (
      <View>
        <Text>Error</Text>
      </View>
    );

  return (
    <View>
      <Grid>{data?.data.map((item, index) => <CardItem key={index} {...item} />)}</Grid>
      <PageComponent
        currentPage={data?.meta.currentPage || 0}
        itemsPerPage={data?.meta.itemsPerPage || 10}
        totalItems={data?.meta.totalItems || 10}
        totalPages={data?.meta.totalPages || 1}
      />
    </View>
  );
};

export default ProductList;
