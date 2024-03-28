import React from "react";
import { View } from "react-native";
import Carousel from "react-native-banner-carousel";
import { Colors } from "../../core/themes";
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

const Banner = ({ items }: BannerProps) => {
  return (
    <View
      style={{
        width: "100%",
        height: 290,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Carousel autoplay={true} autoplayTimeout={5000} loop index={0} pageSize={300}>
        {items.map((image, index) => (
          <BannerImage key={index} image={image} />
        ))}
      </Carousel>
    </View>
  );
};

export default Banner;
