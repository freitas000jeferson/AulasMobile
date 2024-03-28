import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import PersonImage from "../../../../../../assets/Person.png";
import { Subtitle } from "../../../../../components";
import { Colors } from "../../../../../core/themes";
import { HeaderComponent } from "./styles";

export const Header = () => {
  return (
    <HeaderComponent>
      <Ionicons name={"menu"} color={Colors.primary} size={30} />
      <Subtitle> Home</Subtitle>
      <Image
        source={PersonImage}
        style={{ width: 30, height: 30, borderWidth: 2, borderColor: Colors.secundary, borderRadius: 100 }}
      />
    </HeaderComponent>
  );
};
