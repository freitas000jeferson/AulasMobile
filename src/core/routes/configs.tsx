import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { ComponentProps } from "react";
import { PATHS } from "./paths";

export type RootStackParamList = {
  [PATHS.LOGIN]: undefined;
  [PATHS.LOGOUT]: undefined;
  [PATHS.SINGIN]: undefined;
  [PATHS.PROFILE]: { userId?: string };
  [PATHS.DASHBOARD]: undefined;
  [PATHS.HOME]: undefined;
  [PATHS.CART]: undefined;
  [PATHS.ORDER]: undefined;
  [PATHS.PRODUCT_DESCRIPTION]: { productId: string };
  [PATHS.FAVORITES]: undefined;
  [PATHS.TODO_LIST]: undefined;
  [PATHS.SPLASH_SCREEN]: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
export const Tab = createBottomTabNavigator();

export type StackType = ComponentProps<typeof Stack.Screen>;
export type TabType = ComponentProps<typeof Tab.Screen>;
export type TabNavType = ComponentProps<typeof Tab.Navigator>;

export type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
export type ScreenRouteProps<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>;
