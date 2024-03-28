import { View } from "react-native";
import styled from "styled-components";
import { Border, Colors, Spacing } from "../../../core/themes";
import { ScreenUtils } from "../../../core/utils/screen-utils";

const width = ScreenUtils.width - 32;
export const CardItemComponent = styled(View)`
  padding: ${Spacing.InsetXS};
  min-height: 80px;
  width: ${width}px;
  flex: 1;
  border-radius: ${Border.RadiusSM};
  border: ${Border.WidthSM} solid ${Colors.neutral.medium};
  background-color: ${Colors.neutral.lightest};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
