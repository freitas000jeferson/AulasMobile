import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

export default function App() {
  return <></>
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Component>Open the theka!</Component>
  //     <StatusBar style="auto" />
  //     <TouchableOpacity></TouchableOpacity>
  //   </SafeAreaView>
  );
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
