import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { Button, Text } from "../../../../../components";
import { Col, Row } from "../../../../../components/Grid";
import InputField from "../../../../../components/InputField";
import { DeliveryByCep } from "../../../../../core/domain/delivery-by-cep";
import { Colors, Spacing } from "../../../../../core/themes";
import { CepForm, CepSchema } from "./cep-schema";

const Items = ({ deliveryPrice, deliveryTime, typeDelivery }: DeliveryByCep) => {
  return (
    <Row>
      <Text fontWeight="bolder"> {typeDelivery}</Text>
      <Text> {deliveryTime}</Text>
      <Text> {deliveryPrice}</Text>
    </Row>
  );
};

export const PriceByCep = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<CepForm>({
    resolver: zodResolver(CepSchema),
  });

  const onSubmit = async (data: CepForm) => {
    // const { data, isError, isPending } = GetPriceProductByCep({cep: }(productId));
    console.log(data);
  };

  return (
    <Col>
      <Row width="100%" justifyContent="space-between" alignItems="center" gap="8px">
        <View style={{ flex: 1 }}>
          <InputField
            placeholder="Calcular Frete"
            icon={"location"}
            // ref={register("cep")}
            onChangeText={(value) => setValue("cep", value)}
          />
        </View>

        <Button as="secundary" onPress={handleSubmit(onSubmit)} padding={Spacing.SquishXS}>
          <Ionicons name={"search"} color={Colors.neutral.darkest} size={30} />
        </Button>
      </Row>

      {}
    </Col>
  );
};
