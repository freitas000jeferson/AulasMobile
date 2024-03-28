import React from "react";
import { Title } from "../../../components";
import { Col } from "../../../components/Grid";
import { ScreenUtils } from "../../../core/utils/screen-utils";
import PageLogged from "../../../templates/PageLogged";

const Order = () => {
  return (
    <PageLogged>
      <Col height={`${ScreenUtils.height}px`} justifyContent="center" alignItems="center">
        <Title>Order</Title>
      </Col>
    </PageLogged>
  );
};

export default Order;
