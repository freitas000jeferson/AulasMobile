import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ScreenUtils = {
  width,
  height,
  heightPx: (v = 0) => `${height - v}px`,
  widthPx: `${width}px`,
};
