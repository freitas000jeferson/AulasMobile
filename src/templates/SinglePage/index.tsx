import React, { PropsWithChildren, useEffect } from "react";
import { LogBox, SafeAreaView, ScrollView } from "react-native";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Colors, Spacing } from "../../core/themes";

const Page = styled(SafeAreaView)`
  width: 100%;
  min-height: 80vh;
  padding-left: ${Spacing.StackXS};
  padding-right: ${Spacing.StackXS};
  background-color: ${Colors.neutral.lightest};
`;

const SinglePage = ({ children, footer = true }: PropsWithChildren<{ footer?: boolean }>) => {
  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);

  return (
    <ScrollView>
      <Page>{children}</Page>
      {footer && <Footer />}
    </ScrollView>
  );
};

export default SinglePage;
