import React, { useMemo } from "react";
import { TextProps as NativeTextProps } from "react-native";
import { Colors, Font } from "../../core/themes";
import TextCustom from "../TextCustom";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

type TitleProps = {
  size?: Size;
  color?: string;
  isInverse?: boolean;
} & NativeTextProps;

const TITLE_SIZE_MAP = {
  xl: Font.Size3XL,
  lg: Font.SizeXXL,
  md: Font.SizeXL,
  sm: Font.SizeLG,
  xs: Font.SizeMD,
};

const Title = ({ children, isInverse = false, color, size = "md" as Size, ...rest }: TitleProps) => {
  const textColor = useMemo(() => {
    if (color) return color;
    return isInverse ? Colors.neutral.lightest : Colors.neutral.darkest;
  }, [color, isInverse]);

  return (
    <TextCustom {...rest} size={TITLE_SIZE_MAP[size]} color={textColor} weight={Font.WeightBold}>
      {children}
    </TextCustom>
  );
};

export default Title;
