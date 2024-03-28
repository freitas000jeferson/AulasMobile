import { Feather } from "@expo/vector-icons";
import React from "react";
import { Button, Subtitle } from "../../../../../components";
import { Row } from "../../../../../components/Grid";
import { Metadata } from "../../../../../core/domain/pagination";
import { ProductSearchStore } from "../../../../../core/store/product-search.store";
import { Colors, Spacing } from "../../../../../core/themes";

export const PageComponent = ({ currentPage, totalPages }: Metadata) => {
  const { setPage } = ProductSearchStore();

  const handleNext = () => {
    if (currentPage <= totalPages) {
      setPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  return (
    <Row
      justifyContent="center"
      width="100%"
      alignItems="center"
      gap={Spacing.InsetMD}
      padding={`${Spacing.StackMD} 0`}
    >
      <Button
        padding={Spacing.InsetXXS}
        onPress={(ev) => {
          ev.preventDefault();
          handlePrev();
        }}
      >
        <Feather name={"chevron-left"} color={Colors.neutral.lightest} size={24} />
      </Button>
      <Subtitle>
        {currentPage} de {totalPages}
      </Subtitle>
      <Button
        padding={Spacing.InsetXXS}
        onPress={(ev) => {
          ev.preventDefault();
          handleNext();
        }}
      >
        <Feather name={"chevron-right"} color={Colors.neutral.lightest} size={24} />
      </Button>
    </Row>
  );
};
