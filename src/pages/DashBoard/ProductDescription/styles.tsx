import { View } from "react-native";
import styled from "styled-components";
import { Col, Row } from "../../../components/Grid";
import { Border, Colors, Spacing } from "../../../core/themes";
import { ScreenUtils } from "../../../core/utils/screen-utils";

export const ImageContainer = styled(View)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const marginTop = 330;
export const DescriptionContainer = styled(Col)`
  margin-top: ${marginTop}px;
  width: 100%;
  min-height: ${ScreenUtils.height - marginTop}px;
  z-index: 10;
  padding: ${Spacing.InsetSM};
  padding-bottom: 140px;
  background-color: ${Colors.neutral.lightest};
  border-radius: ${Border.RadiusLG} ${Border.RadiusLG} 0 0;
  border: ${Border.WidthSM} solid ${Colors.neutral.medium};
`;

export const ButtonContainer = styled(Row)`
  position: absolute;
  background-color: ${Colors.neutral.lightest};
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${Spacing.InsetSM};
  display: flex;
  flex-direction: column;
  z-index: 100;
`;

export const OptionsContainer = styled(Row)`
  border-radius: ${Border.RadiusPill};
  background-color: ${Colors.tertiary};
  padding: ${Spacing.SquishMD};
  width: 100%;
  justify-content: space-between;
  align-items: center;

  border: ${Border.WidthSM} solid ${Colors.neutral.medium};
`;
