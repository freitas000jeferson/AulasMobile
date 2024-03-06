import React, { useMemo } from "react";
import { TextProps as NativeTextProps } from "react-native";
import { Colors, Font } from "../../core/themes";
import TextCustom from "../TextCustom";

type Size = "sm" | "md" | "lg";

type SubtitleProps = {
  size?: Size;
  color?: string;
  isInverse?: boolean;
} & NativeTextProps;

const SUBTITLE_SIZE_MAP = {
  lg: Font.SizeLG,
  md: Font.SizeMD,
  sm: Font.SizeSM,
};

const Subtitle = ({ children, isInverse = false, color, size = "md" as Size, ...rest }: SubtitleProps) => {
  const textColor = useMemo(() => {
    if (color) return color;
    return isInverse ? Colors.neutral.light : Colors.neutral.dark;
  }, [color, isInverse]);

  return (
    <TextCustom {...rest} size={SUBTITLE_SIZE_MAP[size]} color={textColor} weight={Font.WeightMedium}>
      {children}
    </TextCustom>
  );
};

export default Subtitle;
