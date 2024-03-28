import { Image } from "expo-image";
import { Dimensions, View } from "react-native";
import styled from "styled-components";
import { Border, Colors, Spacing } from "../../../../../core/themes";

const width = Dimensions.get("window").width / 2 - 24;

export const ItemComponent = styled(View)`
  width: ${width};
  max-width: 250px;
`;

export const CardItemComponent = styled(View)`
  padding: ${Spacing.InsetXS};
  min-height: 180px;
  flex: 1;
  border-radius: ${Border.RadiusSM};
  border: ${Border.WidthSM} solid ${Colors.neutral.medium};
  background-color: ${Colors.neutral.lightest};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardDescription = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageComponent = styled(Image)`
  width: 100%;
  height: 100px;
`;

export const Grid = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 16px;
`;
