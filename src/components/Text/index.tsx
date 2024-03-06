import React, { useMemo } from "react";
import { TextProps as NativeTextProps } from "react-native";

import { Colors, Font } from "../../core/themes";
import TextCustom, { TextCustomProps } from "../TextCustom";

type As = "body" | "caption" | "highlight";
type TextProps = {
  size?: string;
  color?: string;
  isInverse?: boolean;
  fontWeight?: string;
  as?: As;
} & NativeTextProps &
  TextCustomProps;

const TEXT_DEFAULT = {
  caption: {
    size: Font.SizeXS,
    color: Colors.neutral.darkest,
    colorInverse: Colors.neutral.lightest,
    weight: Font.WeightMedium,
  },
  body: {
    size: Font.SizeSM,
    color: Colors.neutral.darkest,
    colorInverse: Colors.neutral.lightest,
    weight: Font.WeightRegular,
  },
  highlight: {
    size: Font.SizeSM,
    color: Colors.primary,
    colorInverse: Colors.primary,
    weight: Font.WeightBold,
  },
};
const ResolveColors = (isInverse: boolean, defaultColor: string, inverseColor: string) => {
  return isInverse ? inverseColor : defaultColor;
};

const Text = ({ children, isInverse = false, as = "body", color, size, fontWeight, ...rest }: TextProps) => {
  const props = useMemo(() => {
    if (as === "caption") {
      return {
        size: size || TEXT_DEFAULT.caption.size,
        color: color || ResolveColors(isInverse, TEXT_DEFAULT.caption.color, TEXT_DEFAULT.caption.colorInverse),
        weight: fontWeight || TEXT_DEFAULT.caption.weight,
      };
    }
    if (as === "highlight") {
      return {
        size: size || TEXT_DEFAULT.highlight.size,
        color: color || TEXT_DEFAULT.highlight.color,
        weight: fontWeight || TEXT_DEFAULT.highlight.weight,
      };
    }
    return {
      size: size || TEXT_DEFAULT.body.size,
      color: color || ResolveColors(isInverse, TEXT_DEFAULT.body.color, TEXT_DEFAULT.body.colorInverse),
      weight: fontWeight || TEXT_DEFAULT.body.weight,
    };
  }, [isInverse, as, color, size, fontWeight]);

  return (
    <TextCustom {...rest} {...props}>
      {children}
    </TextCustom>
  );
};

export default Text;
