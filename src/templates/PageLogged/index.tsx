import { useNavigation } from "@react-navigation/native";
import React, { PropsWithChildren, useCallback, useEffect } from "react";
import { View } from "react-native";
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

  return <View>{children}</View>;
};

export default PageLogged;
