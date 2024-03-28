import { Image } from "expo-image";
import { View } from "react-native";
import styled from "styled-components";
import { Border } from "../../core/themes";

export const BannerComponent = styled(View)`
  width: 300px;
  height: 250px;
  border-radius: ${Border.RadiusMD};
`;
export const BannerImageComponent = styled(Image)`
  width: 300px;
  /* max-width: 350px;
  min-width: 300px; */
  height: 250px;
  border-radius: ${Border.RadiusMD};
`;
