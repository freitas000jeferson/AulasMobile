import { Feather, FontAwesome } from "@expo/vector-icons";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import { PropsWithChildren } from "react";
import { Dimensions } from "react-native";
import PersonImage from "../../../assets/Person.png";
import { StackType, TabType } from "../../core/routes/configs";
import PATHS from "../../core/routes/paths";
import { Border, Colors, Spacing } from "../../core/themes";
import { Row } from "../Grid";
import SimpleButton from "../SimpleButton";
import Subtitle from "../Subtitle";
import Text from "../Text";
const { width } = Dimensions.get("window");

const Header = ({ children, options: { title }, navigation }: PropsWithChildren<BottomTabHeaderProps>) => {
  return (
    <Row
      justifyContent="space-between"
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: Colors.neutral.lightest,
        width: width,
      }}
    >
      <SimpleButton
        onPress={(ev) => {
          ev.preventDefault();
          navigation.navigate(PATHS.FAVORITES);
        }}
      >
        <FontAwesome name={"bookmark"} color={Colors.primary} size={30} />
      </SimpleButton>
      <Subtitle>{children || title || "-"}</Subtitle>
      <SimpleButton
        onPress={(ev) => {
          ev.preventDefault();
          navigation.navigate(PATHS.LOGOUT);
        }}
      >
        <Image
          source={PersonImage}
          style={{ width: 30, height: 30, borderWidth: 2, borderColor: Colors.secundary, borderRadius: 100 }}
        />
      </SimpleButton>
    </Row>
  );
};

export const HeaderLogged = (): Partial<TabType> => {
  return {
    options: {
      headerShadowVisible: false,
      header: (props: BottomTabHeaderProps) => <Header {...props} />,
    },
  };
};

export const HeaderProduct = ({ navigation, options }: NativeStackHeaderProps) => {
  return (
    <Row
      justifyContent="space-between"
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: Colors.neutral.lightest,
        width: width,
      }}
    >
      <SimpleButton
        onPress={(ev) => {
          ev.preventDefault();
          navigation.goBack();
        }}
        padding={Spacing.InsetXXS}
        background={Colors.primary}
        customStyle={`border-radius:${Border.RadiusPill}`}
      >
        <Feather name={"chevron-left"} color={Colors.neutral.lightest} size={22} />
      </SimpleButton>
      <Text>{options.title || ""} </Text>
      <SimpleButton
        onPress={(ev) => {
          ev.preventDefault();
          navigation.navigate(PATHS.LOGOUT);
        }}
      >
        <Image
          source={PersonImage}
          style={{ width: 30, height: 30, borderWidth: 2, borderColor: Colors.secundary, borderRadius: 100 }}
        />
      </SimpleButton>
    </Row>
  );
};

export const HeaderPage: Partial<StackType["options"]> = {
  headerShadowVisible: false,
  headerTitleAlign: "center",
  statusBarStyle: "dark",
  header: (props) => <HeaderProduct {...props} />,
  // headerLeft: () => (
  //   <SimpleButton
  //     onPress={(ev) => {
  //       ev.preventDefault();

  //     }}
  //     padding={Spacing.InsetXXS}
  //     background={Colors.primary}
  //     customStyle={`border-radius:${Border.RadiusPill}`}
  //   >
  //     <Feather name={"chevron-left"} color={Colors.neutral.lightest} size={20} />
  //   </SimpleButton>
  // ),
  // headerRight: () => (
  //   <Image
  //     source={PersonImage}
  //     style={{ width: 30, height: 30, borderWidth: 2, borderColor: Colors.secundary, borderRadius: 100 }}
  //   />
  // ),
};
