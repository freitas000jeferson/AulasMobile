import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Text } from "../../../components";
import { Col, Row } from "../../../components/Grid";
import SimpleButton from "../../../components/SimpleButton";
import { Product } from "../../../core/domain/product";
import PATHS from "../../../core/routes/paths";
import { useLikedProductsStore } from "../../../core/store/liked-products";
import { Colors, Font, Spacing } from "../../../core/themes";
import { ScreenUtils } from "../../../core/utils/screen-utils";
import PageLogged from "../../../templates/PageLogged";
import { CardItemComponent } from "./styles";

const width = ScreenUtils.width - 32 - 16;

const CardItem = ({ id, name, image, price, ...rest }: Product) => {
  const navigation = useNavigation();

  const { products, addProduct, removeProduct } = useLikedProductsStore();
  const [isLiked, setIsLiked] = useState<boolean>(products[id!] ? true : false);

  return (
    <CardItemComponent
      style={{
        marginBottom: 8,
        elevation: 2,
        shadowColor: Colors.neutral.dark,
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
      }}
    >
      <SimpleButton
        style={{ flex: 1 }}
        onPress={(event) => {
          event.preventDefault();
          navigation.navigate(...([PATHS.PRODUCT_DESCRIPTION, { productId: id }] as never));
        }}
      >
        <Row style={{ flex: 1, width: width, gap: 8 }}>
          <Image source={{ uri: image }} style={{ width: 70, height: 70 }} />
          <Col justifyContent="space-between" gap="8px" style={{ flex: 1 }}>
            <Text style={{ overflow: "hidden" }}> {name} </Text>
            <Row justifyContent="space-between" style={{ width: "100%" }}>
              <Row alignItems="flex-start" gap="2px">
                <Text as="highlight" size={Font.SizeXS}>
                  $
                </Text>
                <Text fontWeight={Font.WeightBold} size={Font.SizeMD}>
                  {price?.toFixed(2)}
                </Text>
              </Row>
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
            </Row>
          </Col>
        </Row>
      </SimpleButton>
    </CardItemComponent>
  );
};

const Favorites = () => {
  const { products } = useLikedProductsStore();

  return (
    <PageLogged>
      <ScrollView>
        <Col justifyContent="flex-start" alignItems="stretch" padding={Spacing.InsetSM}>
          {Object.values(products).map((item) => (
            <CardItem key={item.id} {...item} />
          ))}
        </Col>
      </ScrollView>
    </PageLogged>
  );
};

export default Favorites;
