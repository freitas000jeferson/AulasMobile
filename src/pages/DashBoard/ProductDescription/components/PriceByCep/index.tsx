import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Button, Text } from "../../../../../components";
import { Col, Row } from "../../../../../components/Grid";
import InputField from "../../../../../components/InputField";
import { DeliveryByCep } from "../../../../../core/domain/delivery-by-cep";
import { Colors } from "../../../../../core/themes";

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
  const onSubmit = (data) => {
    // const { data, isError, isPending } = GetPriceProductByCep({cep: submitData. }(productId));
    console.log(data);
  };

  return (
    <Col>
      <Row>
        <InputField placeholder="Login" icon={"location"} />

        <Button as="secundary" onPress={handleSubmit(onSubmit)}>
          <Ionicons name={"search"} color={Colors.neutral.darkest} size={30} />
        </Button>
      </Row>
      {}
    </Col>
  );
};
