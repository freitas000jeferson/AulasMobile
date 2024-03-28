import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { Text } from "../../../components";
import { Col } from "../../../components/Grid";
import PageView from "../../../components/PageView";
import LocalStorage from "../../../core/LocalStorage";
import { STORAGE_KEYS } from "../../../core/constants/local-storage-keys";
import PATHS from "../../../core/routes/paths";
import { ScreenUtils } from "../../../core/utils/screen-utils";

const Logout = () => {
  const navigation = useNavigation();
  const callback = useCallback(async () => {
    // fazer logout
    await LocalStorage.remove([STORAGE_KEYS.ACCESS_TOKEN, STORAGE_KEYS.USER_ID]);
    navigation.reset({
      index: 0,
      routes: [{ name: PATHS.LOGIN as never }],
    });
  }, []);

  useEffect(() => {
    callback();
  }, []);

  return (
    <PageView>
      <Col height={`${ScreenUtils.height}px`} justifyContent="center">
        <Text>Bye Bye!</Text>
      </Col>
    </PageView>
  );
};

export default Logout;
