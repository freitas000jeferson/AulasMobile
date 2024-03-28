import React, { Suspense } from "react";
import { ActivityIndicator, View } from "react-native";
import Carousel from "react-native-banner-carousel";
import { Colors } from "../../core/themes";
import { ScreenUtils } from "../../core/utils/screen-utils";
import { BannerComponent, BannerImageComponent } from "./styles";

type BannerImageProps = { image: string };

const BannerImage = ({ image }: BannerImageProps) => {
  return (
    <BannerComponent
      style={{
        elevation: 2,
        shadowColor: Colors.neutral.dark,
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
      }}
    >
      <BannerImageComponent source={image} />
    </BannerComponent>
  );
};

type BannerProps = {
  items: string[];
};
const width = ScreenUtils.width;

const Banner = ({ items }: BannerProps) => {
  return (
    <Suspense fallback={<ActivityIndicator size="large" color={Colors.default} />}>
      <View
        style={{
          width: "100%",
          height: 290,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousel style={{ width: width }} autoplay={true} autoplayTimeout={5000} loop index={0} pageSize={300}>
          {items.map((image, index) => (
            <BannerImage key={index} image={image} />
          ))}
        </Carousel>
      </View>
    </Suspense>
  );
};

export default Banner;
