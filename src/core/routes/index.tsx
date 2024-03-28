import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { Colors } from "../themes";
import { Stack, Tab } from "./configs";
import { PATHS } from "./paths";
import { ScreenTab, ScreensStack } from "./screens";

const TabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={PATHS.HOME}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 12,
          elevation: 2,
          shadowColor: Colors.neutral.dark,
          shadowOffset: { width: 2, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 4,
          minHeight: 60,
          backgroundColor: Colors.neutral.lightest,
          borderWidth: 1,
          borderColor: Colors.neutral.medium,
          borderRadius: 16,
        },
      }}
    >
      {ScreenTab.map((screen) => (
        <Tab.Screen key={screen.name} {...screen} />
      ))}
    </Tab.Navigator>
  );
};

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PATHS.SPLASH_SCREEN}>
        {/* tab bar */}
        <Stack.Screen name={PATHS.DASHBOARD} component={TabScreen} options={{ headerShown: false }} />
        {/* pages */}
        {ScreensStack.map((screen) => (
          <Stack.Screen key={screen.name} {...screen} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
