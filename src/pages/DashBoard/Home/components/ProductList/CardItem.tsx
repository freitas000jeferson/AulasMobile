import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "../../../../../components";
import { Col, Row } from "../../../../../components/Grid";
import SimpleButton from "../../../../../components/SimpleButton";
import PATHS from "../../../../../core/routes/paths";
import { Border, Colors, Font, Spacing } from "../../../../../core/themes";
import { CardDescription, CardItemComponent, ImageComponent, ItemComponent } from "./styles";

import { Product } from "../../../../../core/domain/product";
import { useLikedProductsStore } from "../../../../../core/store/liked-products";

type CardItemProps = Product;

export const CardItem = ({ id, name, image, price, ...rest }: CardItemProps) => {
  const navigation = useNavigation();
  const { products, addProduct, removeProduct } = useLikedProductsStore();
  const [isLiked, setIsLiked] = useState<boolean>(products[id!] ? true : false);

  return (
    <ItemComponent>
      <CardItemComponent
        style={{
          elevation: 2,
          shadowColor: Colors.neutral.dark,
          shadowOffset: { width: 2, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 4,
        }}
      >
        <View style={{ position: "relative" }}>
          <ImageComponent source={{ uri: image }} />
          <View style={{ position: "absolute", top: 0, right: 0 }}>
            <SimpleButton
              customStyle={""}
              onPress={(event) => {
                event.preventDefault();
                setIsLiked((value) => {
                  if (!value) {
                    addProduct({ id, name, image, price, ...rest });
                  } else {
                    removeProduct({ name, image, price, ...rest });
                  }
                  return !value;
                });
              }}
            >
              <Ionicons
                name={isLiked ? "heart" : "heart-outline"}
                color={isLiked ? Colors.support.danger : Colors.neutral.darkest}
                style={{ fontWeight: "900" }}
                size={28}
              />
            </SimpleButton>
          </View>
        </View>
        <CardDescription>
          <Col width="100%">
            <Text>{name}</Text>
            <Row justifyContent="space-between" alignItems="center" width="100%">
              <Row alignItems="flex-start" gap="2px">
                <Text as="highlight" size={Font.SizeXS}>
                  $
                </Text>
                <Text fontWeight={Font.WeightBold} size={Font.SizeMD}>
                  {price?.toFixed(2)}
                </Text>
              </Row>
              <View>
                <SimpleButton
                  customStyle={`background-color: ${Colors.primary}; border-radius:${Border.RadiusCircle};padding: ${Spacing.InsetXS}`}
                  onPress={(event) => {
                    event.preventDefault();
                    navigation.navigate(...([PATHS.PRODUCT_DESCRIPTION, { productId: id }] as never));
                  }}
                >
                  <MaterialIcons name={"add"} color={Colors.neutral.lightest} style={{ fontWeight: "900" }} size={20} />
                </SimpleButton>
              </View>
            </Row>
          </Col>
          <View></View>
        </CardDescription>
      </CardItemComponent>
    </ItemComponent>
  );
};
