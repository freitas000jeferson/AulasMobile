import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { Routes } from "./routes";
import { Screens } from "./screens";
import Stack from "./stack";

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.HOME}>
        {Screens.map((screen) => (
          <Stack.Screen {...screen} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
