import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
import { Router } from "./src/core/routes";

export default function App() {
  return <Router />;
}
const Component = ({ children }: PropsWithChildren<{ inverse?: boolean }>) => {
  return <Text>{children}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
