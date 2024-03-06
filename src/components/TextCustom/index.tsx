import { Text } from "react-native";
import styled from "styled-components";
import { Colors, Font } from "../../core/themes";

export type TextCustomProps = {
  size?: string;
  color?: string;
  weight?: string;
  customStyle?: string;
};

const TextCustom = styled(Text)<TextCustomProps>`
  font-size: ${(props) => props.size || Font.SizeSM};
  font-weight: ${(props) => props.weight || Font.WeightMedium};
  color: ${(props) => props.color || Colors.neutral.dark};
  ${(props) => props.customStyle}
`;
export default TextCustom;
