import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Border, Colors, Spacing } from "../../core/themes";
export type ButtonComponentProps = {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  background?: string;
  radius?: string;
  customStyle?: string;
};

export const ButtonComponent = styled(TouchableOpacity)<ButtonComponentProps>`
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || Spacing.SquishXS};
  margin: ${(props) => props.margin || "0px"};
  background-color: ${(props) => props.background || Colors.default};
  border-radius: ${(props) => props.radius || Border.RadiusXS};
  ${(props) => props.customStyle}
`;
