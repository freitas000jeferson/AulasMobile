import { Text } from "react-native";
import styled from "styled-components";

type Props = {
  size?: string;
  color?: string;
  fonWeight?: string;
};

const TextCustom = styled(Text)<Props>`
  font-size: ${(props) => props.size || "16px"};
  color: ${(props) => props.color || "#151515"};
  font-weight: ${(props) => props.fonWeight || "normal"};
`;
export default TextCustom;
