import { View } from "react-native";
import styled from "styled-components";

export type Align =
  | "center"
  | "baseline"
  | "flex-start"
  | "flex-end"
  | "stretch"
  | "space-around"
  | "space-between"
  | "space-evenly";

type GridProps = {
  reverse?: boolean;
  justifyContent?: Align;
  alignItems?: Align;
  gap?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
};
export const Row = styled(View)<GridProps>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  gap: ${(props) => props.gap || "0px"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
`;

export const Col = styled(View)<GridProps>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  gap: ${(props) => props.gap || "0px"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
`;
