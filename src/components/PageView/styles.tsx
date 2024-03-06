import { SafeAreaView } from "react-native";
import styled from "styled-components";
import { Spacing } from "../../core/themes";
type Props = {
  isPadding?: boolean;
};
export const PageComponent = styled(SafeAreaView)<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: white;
  padding: ${(props) => (props.isPadding ? `0px ${Spacing.InsetSM}` : "0px")};
`;
