import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { Subtitle } from "../../components";
import { Col } from "../../components/Grid";
import LocalStorage from "../../core/LocalStorage";
import { STORAGE_KEYS } from "../../core/constants/local-storage-keys";
import PATHS from "../../core/routes/paths";
import { Colors } from "../../core/themes";

const SplashScreen = () => {
  const navigation = useNavigation();

  const loadPage = useCallback(async () => {
    const accessToken = await LocalStorage.get(STORAGE_KEYS.ACCESS_TOKEN);
    if (accessToken) {
      navigation.reset({
        index: 0,
        routes: [{ name: PATHS.DASHBOARD as never }],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: PATHS.LOGIN as never }],
      });
    }
  }, []);

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <View>
      <Col
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        style={{ backgroundColor: Colors.default }}
      >
        <ActivityIndicator color={Colors.neutral.lightest} size={"large"} />
        <Subtitle color={Colors.neutral.lightest}>Carregando</Subtitle>
      </Col>
    </View>
  );
};

export default SplashScreen;
