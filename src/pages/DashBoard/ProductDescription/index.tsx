import { Feather, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, Subtitle, Text, Title } from "../../../components";
import { Col, Row } from "../../../components/Grid";
import SimpleButton from "../../../components/SimpleButton";
import { ScreenProps } from "../../../core/routes/configs";
import { Border, Colors, Font, Spacing } from "../../../core/themes";
import { ScreenUtils } from "../../../core/utils/screen-utils";
import { GetProductsByIdService } from "../../../services/products";
import PageLogged from "../../../templates/PageLogged";
import { PriceByCep } from "./components/PriceByCep";
import { ButtonContainer, DescriptionContainer, ImageContainer, OptionsContainer } from "./styles";

type ProductDescriptionProps = ScreenProps<"product">;

const ProductDescription = ({ route }: ProductDescriptionProps) => {
  const { productId } = route.params;

  const [amount, setAmount] = useState(1);
  const { data, isError, isPending } = GetProductsByIdService(Number(productId));

  if (isPending) return <View style={{ height: 20, width: "80%", backgroundColor: Colors.neutral.lightest }} />;

  if (isError)
    return (
      <View>
        <Text>Error</Text>
      </View>
    );

  return (
    <PageLogged>
      <Col justifyContent="flex-start" height={ScreenUtils.heightPx(50)} style={{ position: "relative" }}>
        <ImageContainer>
          <Col padding={Spacing.InsetSM}>
            <Title>{data?.name}</Title>
            <Row>
              <Title size="lg" color={Colors.primary}>
                $ {data?.price?.toFixed(2)}
              </Title>
            </Row>
          </Col>
          <Image style={{ width: "100%", height: 200, objectFit: "cover" }} source={{ uri: data?.image }} />
        </ImageContainer>
        <ScrollView style={{ width: "100%", height: "100%", zIndex: 10 }}>
          <DescriptionContainer
            style={{
              elevation: 2,
              shadowColor: Colors.neutral.dark,
              shadowOffset: { width: 2, height: 4 },
              shadowOpacity: 0.8,
              shadowRadius: 4,
            }}
          >
            <Row width="100%" justifyContent="space-between">
              <Subtitle>Descrição</Subtitle>
              <Row padding={Spacing.SquishXXS} style={{ backgroundColor: Colors.secundary, borderRadius: 500 }}>
                <Subtitle size="sm">{data?.category?.name?.toUpperCase()}</Subtitle>
              </Row>
            </Row>
            <View style={{ marginVertical: 16 }}>
              <Row>
                <Text>Peso: </Text>
                <Text as="highlight">{data?.weight}</Text>
              </Row>
              <Row>
                <Text>Altura: </Text>
                <Text as="highlight">{data?.height}</Text>
              </Row>
              <Row>
                <Text>Largura: </Text>
                <Text as="highlight">{data?.width}</Text>
              </Row>
              <Row>
                <Text>Comprimento: </Text>
                <Text as="highlight">{data?.length}</Text>
              </Row>
              <Row>
                <Text>Diametro: </Text>
                <Text as="highlight">{data?.diameter}</Text>
              </Row>
            </View>
            <PriceByCep />
            <OptionsContainer>
              <Subtitle> Quantidade:</Subtitle>
              <Row alignItems="center" gap="16px">
                <SimpleButton
                  background={Colors.primary}
                  padding={Spacing.InsetXXS}
                  radius={Border.RadiusPill}
                  onPress={(ev) => {
                    ev.preventDefault();
                    if (amount > 1) {
                      setAmount((v) => v - 1);
                    }
                  }}
                >
                  <Ionicons name={"remove"} size={24} color={Colors.neutral.light} />
                </SimpleButton>
                <Text>{amount}</Text>
                <SimpleButton
                  background={Colors.primary}
                  padding={Spacing.InsetXXS}
                  radius={Border.RadiusPill}
                  onPress={(ev) => {
                    ev.preventDefault();
                    setAmount((v) => v + 1);
                  }}
                >
                  <Ionicons name={"add"} size={24} color={Colors.neutral.light} />
                </SimpleButton>
              </Row>
            </OptionsContainer>
          </DescriptionContainer>
        </ScrollView>
        <ButtonContainer>
          <Row padding={`${Spacing.StackXXS} 0`}>
            <Title size="sm">SubTotal: </Title>
            <Title size="sm" color={Colors.primary}>
              $ {(amount * (data?.price ?? 0)).toFixed(2)}
            </Title>
          </Row>
          <Row gap="8px">
            <Button
              as="secundary"
              padding={Spacing.SquishMD}
              onPress={(ev) => {
                ev.preventDefault();
                console.log("aws");
              }}
            >
              <Feather name={"shopping-bag"} size={24} color={Colors.neutral.darkest} />
            </Button>
            <Button
              style={{ flex: 1 }}
              padding={Spacing.SquishMD}
              onPress={(ev) => {
                ev.preventDefault();
                console.log("aws");
              }}
            >
              <Text fontWeight={Font.WeightMedium} color={Colors.neutral.lightest} style={{ marginRight: 8 }}>
                Adicionar
              </Text>
              <Ionicons name={"add"} size={24} color={Colors.neutral.lightest} />
            </Button>
          </Row>
        </ButtonContainer>
      </Col>
    </PageLogged>
  );
};

export default ProductDescription;
