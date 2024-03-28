import React from "react";
import { Title } from "../../../components";
import { Col } from "../../../components/Grid";
import PageLogged from "../../../templates/PageLogged";

const Cart = () => {
  return (
    <PageLogged>
      <Col justifyContent="center">
        <Title>Cart</Title>
      </Col>
    </PageLogged>
  );
};

export default Cart;
