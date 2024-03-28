import { View } from "react-native";
import styled from "styled-components";
import { Colors, Spacing } from "../../core/themes";

export const HeaderComponent = styled(View)`
  width: 100%;
  background-color: ${Colors.neutral.lightest};
  padding-top: ${Spacing.StackXXS};
  padding-bottom: ${Spacing.StackXXS};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
