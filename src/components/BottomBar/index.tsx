import { Feather } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../core/themes";

type Icon = ComponentProps<typeof Feather>;

type BottomIconProps = {
  focused: boolean;
  color: string;
  size: number;
  icon: Icon["name"];
};
export const BottomIcon = ({ icon, focused, ...rest }: BottomIconProps) => {
  return <Feather name={icon} {...rest} size={30} color={focused ? Colors.primary : Colors.neutral.medium} />;
};

export const BottomConfig = StyleSheet.create({
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
});
