import { useNavigation } from "@react-navigation/native";
import React, { PropsWithChildren, Suspense, useCallback, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";
import LocalStorage from "../../core/LocalStorage";
import { STORAGE_KEYS } from "../../core/constants/local-storage-keys";
import PATHS from "../../core/routes/paths";

const PageLogged = ({ children }: PropsWithChildren) => {
  const navigation = useNavigation();

  const token = useCallback(async () => {
    const accessToken = await LocalStorage.get(STORAGE_KEYS.ACCESS_TOKEN);
    if (!accessToken) {
      navigation.navigate(PATHS.LOGOUT as never);
      return;
    }
    return accessToken;
  }, []);

  useEffect(() => {
    token();
  }, []);

  return (
    <Suspense fallback={<ActivityIndicator size="large" color={Colors.default} />}>
      <SafeAreaView>{children}</SafeAreaView>
    </Suspense>
  );
};

export default PageLogged;
